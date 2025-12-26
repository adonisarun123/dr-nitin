import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { leadSchema, type LeadInput, type UTMParams } from '@/lib/types/lead';
import { sendEmail } from '@/lib/email/mailer';
import { generateLeadNotificationEmail } from '@/lib/email/templates/lead-notification';

export async function POST(request: NextRequest) {
    try {
        // Log API call for debugging
        console.log('=== Lead Submission API Called ===');
        console.log('DATABASE_URL:', process.env.DATABASE_URL ? '✅ Configured' : '❌ MISSING');
        console.log('SMTP_USER:', process.env.SMTP_USER ? '✅ Configured' : '❌ MISSING');
        console.log('SALES_EMAIL:', process.env.SALES_EMAIL ? '✅ Configured' : '❌ MISSING');

        // Check for required environment variables
        if (!process.env.DATABASE_URL) {
            console.error('❌ DATABASE_URL is not configured!');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Database not configured. Please add DATABASE_URL to .env and restart the server.'
                },
                { status: 500 }
            );
        }

        // Parse request body
        const body = await request.json();
        console.log('Request body received:', { ...body, phone: '***', email: '***' });

        // Validate data with Zod
        const validationResult = leadSchema.safeParse(body);

        if (!validationResult.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: validationResult.error.flatten()
                },
                { status: 400 }
            );
        }

        const leadData: LeadInput = validationResult.data;

        // Extract UTM parameters from request if available
        const utmParams: UTMParams = body.utm_params || {};

        console.log('📊 Attempting to insert lead into database...');
        console.log('Lead data:', {
            name: leadData.name,
            phone: leadData.phone,
            email: leadData.email || 'not provided',
            condition: leadData.condition,
            location: leadData.preferredLocation,
        });

        // Insert lead into database
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
        ${JSON.stringify(utmParams)}
      )
      RETURNING id, created_at
    `;

        const insertedLead = result[0];
        console.log('✅ Database insert successful! Lead ID:', insertedLead.id);

        // Generate and send email notification
        const salesEmail = process.env.SALES_EMAIL;

        if (salesEmail) {
            console.log('📧 Attempting to send email to:', salesEmail);
            const { html, text } = generateLeadNotificationEmail(leadData);

            const emailResult = await sendEmail({
                to: salesEmail,
                subject: `🏥 New Appointment Request from ${leadData.name}`,
                html,
                text,
            });

            if (!emailResult.success) {
                console.error('❌ Failed to send email notification:', emailResult.error);
                // Don't fail the request if email fails, just log it
            } else {
                console.log('✅ Email sent successfully! Message ID:', emailResult.messageId);
            }
        } else {
            console.warn('⚠️ SALES_EMAIL not configured, skipping email notification');
        }

        // Return success response
        console.log('🎉 Lead submission completed successfully!');
        return NextResponse.json({
            success: true,
            message: 'Appointment request received successfully',
            data: {
                id: insertedLead.id,
                submittedAt: insertedLead.created_at,
            },
        });

    } catch (error) {
        console.error('❌ Error processing lead submission:');
        console.error('Error details:', error);
        console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
        console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

        return NextResponse.json(
            {
                success: false,
                error: 'Internal server error',
                message: 'Failed to process your request. Please try again or contact us directly.',
                details: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}

// GET endpoint to check API health (optional)
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Leads API is running',
        timestamp: new Date().toISOString(),
    });
}
