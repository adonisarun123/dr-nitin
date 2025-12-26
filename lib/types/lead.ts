import { z } from 'zod';

// Zod schema for form validation
export const leadSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
    email: z.string().email('Invalid email').optional().or(z.literal('')),
    condition: z.string().min(1, 'Condition is required'),
    preferredLocation: z.string().min(1, 'Preferred location is required'),
    preferredDate: z.string().optional(),
    message: z.string().optional(),
    source: z.string().default('website'),
    submittedAt: z.string().optional(),
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
