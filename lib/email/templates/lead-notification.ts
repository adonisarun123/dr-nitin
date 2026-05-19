import { LeadInput } from '@/lib/types/lead';
import { escapeHtml } from '@/lib/utils';

/**
 * Build the staff-facing lead notification email.
 *
 * Every patient-controlled value is HTML-escaped before being interpolated
 * into the markup. This blocks accidental HTML breakage AND deliberate XSS
 * attempts where a malicious submitter puts script tags into the name /
 * message fields hoping to compromise a clinic inbox.
 *
 * Optional context (`ip`, `userAgent`, `utmParams`) is rendered into a
 * "Submission context" block to aid fraud triage.
 */
export function generateLeadNotificationEmail(
    lead: LeadInput,
    context?: {
        ip?: string;
        userAgent?: string;
        utmParams?: Record<string, string | undefined | null>;
        leadId?: number | string;
    },
): { html: string; text: string } {
    const formattedDate = lead.preferredDate
        ? new Date(lead.preferredDate).toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : 'Not specified';

    // Escaped, safe-to-render copies.
    const safe = {
        name: escapeHtml(lead.name),
        phone: escapeHtml(lead.phone),
        email: escapeHtml(lead.email),
        condition: escapeHtml(lead.condition),
        preferredLocation: escapeHtml(lead.preferredLocation),
        preferredDate: escapeHtml(formattedDate),
        message: escapeHtml(lead.message),
        source: escapeHtml(lead.source || 'website'),
        submittedAt: lead.submittedAt
            ? escapeHtml(new Date(lead.submittedAt).toLocaleString())
            : '',
        ip: escapeHtml(context?.ip),
        userAgent: escapeHtml(context?.userAgent),
        leadId: escapeHtml(context?.leadId),
    };

    const utmEntries = context?.utmParams
        ? Object.entries(context.utmParams).filter(([, v]) => v != null && v !== '')
        : [];

    const utmBlock = utmEntries.length
        ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">🔗 UTM Parameters</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                    ${utmEntries
                        .map(
                            ([k, v]) => `
                    <tr>
                        <td style="padding: 6px 0; color: #555;"><strong>${escapeHtml(k)}</strong></td>
                        <td style="padding: 6px 0; text-align: right;">${escapeHtml(v)}</td>
                    </tr>`,
                        )
                        .join('')}
                </table>
            </div>
        `
        : '';

    const submissionContextBlock = (context?.ip || context?.userAgent || context?.leadId)
        ? `
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h3 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">🧭 Submission Context</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px; color: #555;">
                    ${safe.leadId ? `<tr><td style="padding:6px 0;"><strong>Lead ID</strong></td><td style="padding:6px 0; text-align:right;">${safe.leadId}</td></tr>` : ''}
                    ${safe.ip ? `<tr><td style="padding:6px 0;"><strong>IP</strong></td><td style="padding:6px 0; text-align:right;">${safe.ip}</td></tr>` : ''}
                    ${safe.userAgent ? `<tr><td style="padding:6px 0;"><strong>User Agent</strong></td><td style="padding:6px 0; text-align:right; word-break:break-all;">${safe.userAgent}</td></tr>` : ''}
                </table>
            </div>
        `
        : '';

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Lead Notification</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
        <h1 style="color: white; margin: 0; font-size: 28px;">🏥 New Lead Received</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Someone has requested an appointment</p>
    </div>

    <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Patient Information</h2>

            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">👤 Name:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        ${safe.name}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">📞 Phone:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        <a href="tel:${safe.phone}" style="color: #667eea; text-decoration: none;">${safe.phone}</a>
                    </td>
                </tr>
                ${lead.email ? `
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">📧 Email:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        <a href="mailto:${safe.email}" style="color: #667eea; text-decoration: none;">${safe.email}</a>
                    </td>
                </tr>
                ` : ''}
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">🏥 Condition:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        ${safe.condition}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">📍 Location:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        ${safe.preferredLocation}
                    </td>
                </tr>
                <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                        <strong style="color: #555;">📅 Preferred Date:</strong>
                    </td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #eee; text-align: right;">
                        ${safe.preferredDate}
                    </td>
                </tr>
                ${lead.message ? `
                <tr>
                    <td colspan="2" style="padding: 15px 0;">
                        <strong style="color: #555;">💬 Additional Information:</strong>
                        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px; font-style: italic; white-space: pre-wrap;">
                            ${safe.message}
                        </div>
                    </td>
                </tr>
                ` : ''}
            </table>
        </div>

        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #667eea; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">📊 Lead Source</h3>
            <p style="margin: 10px 0; padding: 10px; background: #f0f4ff; border-left: 4px solid #667eea; border-radius: 4px;">
                <strong>Source:</strong> ${safe.source}
            </p>
            ${safe.submittedAt ? `
            <p style="margin: 10px 0; color: #666; font-size: 14px;">
                <strong>Submitted at:</strong> ${safe.submittedAt}
            </p>
            ` : ''}
        </div>

        ${utmBlock}
        ${submissionContextBlock}

        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 16px;">
                ⚡ <strong>Action Required:</strong> Please contact this lead within 24 hours for best conversion rates.
            </p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
                This email was sent from your booking form at ${escapeHtml(process.env.APP_NAME || 'Dr. Nitin N Sunku - Orthopedic Clinic')}
            </p>
            <p style="color: #999; font-size: 12px; margin: 5px 0;">
                Timestamp: ${escapeHtml(new Date().toLocaleString())}
            </p>
        </div>
    </div>
</body>
</html>
  `;

    const utmText = utmEntries.length
        ? `\nUTM Parameters:\n${utmEntries.map(([k, v]) => `  ${k}: ${v}`).join('\n')}\n`
        : '';

    const contextText = (context?.ip || context?.userAgent || context?.leadId)
        ? `\nSubmission Context:\n${context?.leadId ? `  Lead ID: ${context.leadId}\n` : ''}${context?.ip ? `  IP: ${context.ip}\n` : ''}${context?.userAgent ? `  User Agent: ${context.userAgent}\n` : ''}`
        : '';

    const text = `
NEW LEAD RECEIVED
==================

Patient Information:
-------------------
Name: ${lead.name}
Phone: ${lead.phone}
${lead.email ? `Email: ${lead.email}` : ''}
Condition: ${lead.condition}
Preferred Location: ${lead.preferredLocation}
Preferred Date: ${formattedDate}
${lead.message ? `\nAdditional Information:\n${lead.message}` : ''}

Lead Source:
-----------
Source: ${lead.source || 'website'}
${lead.submittedAt ? `Submitted at: ${new Date(lead.submittedAt).toLocaleString()}` : ''}
${utmText}${contextText}
ACTION REQUIRED: Please contact this lead within 24 hours for best conversion rates.

---
This email was sent from your booking form at ${process.env.APP_NAME || 'Dr. Nitin N Sunku - Orthopedic Clinic'}
Timestamp: ${new Date().toLocaleString()}
  `;

    return { html, text };
}
