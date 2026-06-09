import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { leadSchema, type LeadInput, type UTMParams } from '@/lib/types/lead';
import { sendEmail } from '@/lib/email/mailer';
import { generateLeadNotificationEmail } from '@/lib/email/templates/lead-notification';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { maskTail } from '@/lib/utils';
import { CLINICS, MARKETING_BCC } from '@/lib/practice';

// ─────────────────────────────────────────────────────────────────
// Lead email routing
// • Primary recipient is decided by the patient's preferred clinic.
// • drnitinmarketing@gmail.com is BCC'd on every lead so the practice
//   has a single master archive of all incoming consultations.
// • If the deployment also sets a BCC_EMAIL env var (e.g. for a
//   compliance archive), it's appended and deduplicated.
// ─────────────────────────────────────────────────────────────────
const LOCATION_ROUTING: Record<string, string> = Object.fromEntries(
    CLINICS.map((c) => [c.id, c.leadEmail]),
);

function resolveLeadRecipients(location: string): { to: string; bcc?: string } {
    const primary = LOCATION_ROUTING[location] ?? MARKETING_BCC;

    const bccs = new Set<string>();
    if (primary !== MARKETING_BCC) {
        bccs.add(MARKETING_BCC);
    }
    if (process.env.BCC_EMAIL) {
        process.env.BCC_EMAIL
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean)
            .forEach((extra) => {
                if (extra !== primary) bccs.add(extra);
            });
    }

    return {
        to: primary,
        bcc: bccs.size > 0 ? Array.from(bccs).join(', ') : undefined,
    };
}

// Rate-limit configuration. The defaults (8 submissions per 10 minutes per
// IP) are generous enough for legitimate use — including a couple of mistyped
// retries — and tight enough to deny obvious form-spam floods.
const RATE_LIMIT_WINDOW_MS = Number(process.env.LEADS_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000);
const RATE_LIMIT_MAX = Number(process.env.LEADS_RATE_LIMIT_MAX || 8);

export async function POST(request: NextRequest) {
    const ip = getClientIp(request.headers);
    const userAgent = request.headers.get('user-agent') || '';

    // ─── Rate limit ───
    const limit = rateLimit(`leads:${ip}`, {
        windowMs: RATE_LIMIT_WINDOW_MS,
        max: RATE_LIMIT_MAX,
    });
    if (!limit.ok) {
        return NextResponse.json(
            {
                success: false,
                error: 'Too many requests',
                message: 'Please wait a moment before submitting again.',
            },
            {
                status: 429,
                headers: {
                    'Retry-After': String(limit.retryAfter),
                    'X-RateLimit-Remaining': '0',
                },
            },
        );
    }

    try {
        // Log API call for debugging. PII is masked.
        console.log('=== Lead Submission API Called ===');
        console.log('DATABASE_URL:', process.env.DATABASE_URL ? '✅ Configured' : '❌ MISSING');
        console.log('SMTP_USER:', process.env.SMTP_USER ? '✅ Configured' : '❌ MISSING');
        console.log('Client IP:', ip);

        if (!process.env.DATABASE_URL) {
            console.error('❌ DATABASE_URL is not configured!');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Service temporarily unavailable',
                    message: 'Please try again later or call us directly.',
                },
                { status: 503 },
            );
        }

        let body: unknown;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { success: false, error: 'Invalid JSON' },
                { status: 400 },
            );
        }

        // Validate data with Zod.
        const validationResult = leadSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: validationResult.error.flatten(),
                },
                { status: 400 },
            );
        }

        const leadData: LeadInput = validationResult.data;

        // ─── Honeypot ───
        // Real visitors never see/touch the `company` field. Anything non-empty
        // is silently dropped — we return 200 so bots can't probe for differing
        // status codes, and we never insert / email.
        if (leadData.company && leadData.company.trim().length > 0) {
            console.warn('🐝 Honeypot triggered; dropping bot submission.', { ip });
            return NextResponse.json({
                success: true,
                message: 'Appointment request received successfully',
            });
        }

        // Mask PII before logging (last 2 digits of phone, first letter of name).
        console.log('Lead received:', {
            name: leadData.name ? leadData.name[0] + '***' : '',
            phone: maskTail(leadData.phone, 2),
            email: leadData.email ? '***' + leadData.email.slice(-8) : '',
            condition: leadData.condition,
            location: leadData.preferredLocation,
        });

        // Extract UTM parameters from request if available.
        const utmParams: UTMParams = (body as any)?.utm_params || {};

        // Insert lead into database.
        const result = await sql`
      INSERT INTO leads (
        name,
        phone,
        email,
        condition,
        preferred_location,
        preferred_date,
        message,
        source,
        utm_params
      ) VALUES (
        ${leadData.name},
        ${leadData.phone},
        ${leadData.email || null},
        ${leadData.condition},
        ${leadData.preferredLocation},
        ${leadData.preferredDate || null},
        ${leadData.message || null},
        ${leadData.source},
        ${JSON.stringify({ ...utmParams, ip, userAgent })}
      )
      RETURNING id, created_at
    `;

        const insertedLead = (result as any)[0];
        console.log('✅ Database insert successful! Lead ID:', insertedLead.id);

        // Generate and send email notification.
        const { to: recipientEmail, bcc: bccEmail } = resolveLeadRecipients(
            leadData.preferredLocation,
        );

        const { html, text } = generateLeadNotificationEmail(leadData, {
            ip,
            userAgent,
            utmParams: utmParams as Record<string, string | undefined | null>,
            leadId: insertedLead.id,
        });

        const emailResult = await sendEmail({
            to: recipientEmail,
            subject: `🏥 New Appointment Request from ${leadData.name}`,
            html,
            text,
            bcc: bccEmail,
        });

        if (!emailResult.success) {
            console.error('❌ Failed to send email notification.');
            // Don't fail the request if email fails — DB is the source of truth.
        } else {
            console.log('✅ Email sent. Message ID:', emailResult.messageId);
        }

        return NextResponse.json({
            success: true,
            message: 'Appointment request received successfully',
            data: {
                id: insertedLead.id,
                submittedAt: insertedLead.created_at,
            },
        });
    } catch (error) {
        // Log full detail server-side, return only a generic message to clients.
        console.error('❌ Error processing lead submission:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                message: 'Failed to process your request. Please try again or contact us directly.',
            },
            { status: 500 },
        );
    }
}

// GET endpoint to check API health (optional).
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Leads API is running',
        timestamp: new Date().toISOString(),
    });
}
