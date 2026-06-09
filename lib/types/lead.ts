import { z } from 'zod';

// Zod schema for form validation.
//
// Length limits are deliberate: they keep abusive payloads small (cheaper email
// sends, less log noise) and make it harder to smuggle long phishing copy via
// the `message` field. Tweak if a legitimate use case appears.
export const leadSchema = z.object({
    name: z.string().min(1, 'Name is required').max(120, 'Name too long'),
    phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
    email: z.string().email('Invalid email').max(254, 'Email too long').optional().or(z.literal('')),
    condition: z.string().min(1, 'Condition is required').max(120, 'Condition too long'),
    preferredLocation: z.string().min(1, 'Preferred location is required').max(60, 'Location too long'),
    preferredDate: z.string().optional(),
    message: z.string().max(2000, 'Message too long').optional(),
    source: z.string().max(60).default('website'),
    submittedAt: z.string().optional(),
    /**
     * Honeypot. Real users never see or fill this field, so any non-empty
     * value indicates a bot. We accept the payload at validation time and
     * silently drop it in the handler (returning a 200 so the bot can't
     * probe for behaviour).
     */
    company: z.string().max(200).optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;

// Database record type
export interface Lead {
    id: number;
    name: string;
    phone: string;
    email: string | null;
    condition: string;
    preferred_location: string;
    preferred_date: string | null;
    message: string | null;
    source: string;
    utm_params: Record<string, string> | null;
    created_at: Date;
    updated_at: Date;
}

// UTM Parameters type
export interface UTMParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    [key: string]: string | undefined;
}
