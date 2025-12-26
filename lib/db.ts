import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
}

// Create a connection to Neon database
export const sql = neon(process.env.DATABASE_URL);

// Test database connection
export async function testConnection() {
    try {
        const result = await sql`SELECT NOW() as now`;
        console.log('Database connected successfully:', result[0].now);
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}
