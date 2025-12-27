import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { transporter } from '@/lib/email/mailer';

export async function GET() {
    const results: any = {
        timestamp: new Date().toISOString(),
        tests: {},
    };

    // Test 1: Environment Variables
    results.tests.environment = {
        DATABASE_URL: process.env.DATABASE_URL ? '✅ Set' : '❌ Missing',
        SMTP_HOST: process.env.SMTP_HOST || '❌ Missing',
        SMTP_USER: process.env.SMTP_USER || '❌ Missing',
        SMTP_PASS: process.env.SMTP_PASS ? '✅ Set (hidden)' : '❌ Missing',
        SALES_EMAIL: process.env.SALES_EMAIL || '❌ Missing',
    };

    // Test 2: Database Connection
    try {
        const dbResult = await sql`SELECT NOW() as time, version() as version`;
        results.tests.database = {
            status: '✅ Connected',
            serverTime: (dbResult as any)[0].time,
            version: (dbResult as any)[0].version.substring(0, 50) + '...',
        };
    } catch (error) {
        results.tests.database = {
            status: '❌ Connection Failed',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }

    // Test 3: Check if leads table exists
    try {
        const tableCheck = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'leads'
      ) as exists
    `;
        results.tests.leadsTable = {
            status: (tableCheck as any)[0].exists ? '✅ Table exists' : '❌ Table not found',
            message: (tableCheck as any)[0].exists
                ? 'Ready to accept data'
                : 'Run the schema.sql file to create the table',
        };
    } catch (error) {
        results.tests.leadsTable = {
            status: '❌ Error checking table',
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }

    // Test 4: Email Connection
    try {
        await transporter.verify();
        results.tests.email = {
            status: '✅ SMTP Connected',
            host: process.env.SMTP_HOST,
            user: process.env.SMTP_USER,
        };
    } catch (error) {
        results.tests.email = {
            status: '❌ SMTP Connection Failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            hint: 'Check your Gmail app password',
        };
    }

    return NextResponse.json(results, { status: 200 });
}
