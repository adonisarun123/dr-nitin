import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { transporter } from '@/lib/email/mailer';

/**
 * Diagnostic endpoint. Returns environment + database + SMTP health for
 * operators. It leaks internal configuration so it MUST be protected.
 *
 * Access control:
 * 1. Disabled entirely in production unless ADMIN_DIAG_TOKEN is set.
 * 2. When enabled, callers must present `Authorization: Bearer <token>`
 *    matching ADMIN_DIAG_TOKEN.
 *
 * The previous implementation returned full configuration to anyone who
 * could reach the URL.
 */
export async function GET(request: NextRequest) {
    const token = process.env.ADMIN_DIAG_TOKEN;
    const isProduction = process.env.NODE_ENV === 'production';

    // In production, refuse if no token configured.
    if (isProduction && !token) {
        return NextResponse.json(
            { error: 'Diagnostics endpoint disabled in production' },
            { status: 404 },
        );
    }

    if (token) {
        const header = request.headers.get('authorization') || '';
        const expected = `Bearer ${token}`;
        // Constant-time compare on equal-length buffers; fall through to false
        // on length mismatch so we don't leak length via timing.
        const matches =
            header.length === expected.length &&
            timingSafeEqual(header, expected);
        if (!matches) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                {
                    status: 401,
                    headers: { 'WWW-Authenticate': 'Bearer realm="diagnostics"' },
                },
            );
        }
    }

    const results: any = {
        timestamp: new Date().toISOString(),
        tests: {},
    };

    // Test 1: Environment Variables (existence only — never echo secrets).
    results.tests.environment = {
        DATABASE_URL: process.env.DATABASE_URL ? '✅ Set' : '❌ Missing',
        SMTP_HOST: process.env.SMTP_HOST ? '✅ Set' : '❌ Missing',
        SMTP_USER: process.env.SMTP_USER ? '✅ Set' : '❌ Missing',
        SMTP_PASS: process.env.SMTP_PASS ? '✅ Set' : '❌ Missing',
        FROM_EMAIL: process.env.FROM_EMAIL ? '✅ Set' : '❌ Missing',
        NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
            ? '✅ Set'
            : '⚠️ Using fallback',
    };

    // Test 2: Database connection (no version string leak).
    try {
        await sql`SELECT 1 as ok`;
        results.tests.database = { status: '✅ Connected' };
    } catch (error) {
        results.tests.database = {
            status: '❌ Connection Failed',
            // Generic message — full error stays in server logs.
            error: 'Connection failed (check server logs)',
        };
        console.error('[test-config] DB connection failed:', error);
    }

    // Test 3: leads table exists.
    try {
        const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables
        WHERE table_schema = 'public'
        AND table_name = 'leads'
      ) as exists
    `;
        const exists = (tableCheck as any)[0].exists;
        results.tests.leadsTable = {
            status: exists ? '✅ Table exists' : '❌ Table not found',
        };
    } catch (error) {
        results.tests.leadsTable = { status: '❌ Error checking table' };
        console.error('[test-config] leads table check failed:', error);
    }

    // Test 4: SMTP connectivity.
    try {
        await transporter.verify();
        results.tests.email = { status: '✅ SMTP Connected' };
    } catch (error) {
        results.tests.email = { status: '❌ SMTP Connection Failed' };
        console.error('[test-config] SMTP verify failed:', error);
    }

    return NextResponse.json(results, { status: 200 });
}

function timingSafeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let mismatch = 0;
    for (let i = 0; i < a.length; i++) {
        mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return mismatch === 0;
}
