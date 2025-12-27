import { neon } from '@neondatabase/serverless';

// Lazy initialization - only create connection when DATABASE_URL is available
// This allows Next.js build to succeed without the environment variable
let sqlInstance: ReturnType<typeof neon> | null = null;

function getSQL() {
    if (!sqlInstance) {
        if (!process.env.DATABASE_URL) {
            throw new Error('DATABASE_URL environment variable is not set');
        }
        sqlInstance = neon(process.env.DATABASE_URL);
    }
    return sqlInstance;
}

// Export a function that returns the SQL instance
// This defers the DATABASE_URL check until runtime
export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
    return getSQL()(strings, ...values);
};

// Test database connection
export async function testConnection() {
    try {
        const result = await sql`SELECT NOW() as now`;
        console.log('Database connected successfully:', (result as any)[0].now);
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}
