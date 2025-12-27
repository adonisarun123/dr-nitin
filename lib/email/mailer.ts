import nodemailer from 'nodemailer';

// Lazy initialization for transporter to avoid build-time errors
let transporterInstance: nodemailer.Transporter | null = null;

function getTransporter() {
    if (!transporterInstance) {
        // Validate required environment variables at runtime
        const requiredEnvVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'FROM_EMAIL'];
        for (const envVar of requiredEnvVars) {
            if (!process.env[envVar]) {
                throw new Error(`${envVar} environment variable is not set`);
            }
        }

        // Create reusable transporter
        transporterInstance = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }
    return transporterInstance;
}

// Export transporter getter
export const transporter = {
    verify: () => getTransporter().verify(),
    sendMail: (options: any) => getTransporter().sendMail(options),
};

// Verify transporter configuration
export async function verifyEmailConnection() {
    try {
        await transporter.verify();
        console.log('Email server connection verified');
        return true;
    } catch (error) {
        console.error('Email server connection failed:', error);
        return false;
    }
}

// Send email utility
export async function sendEmail({
    to,
    subject,
    html,
    text,
}: {
    to: string;
    subject: string;
    html: string;
    text?: string;
}) {
    try {
        const info = await transporter.sendMail({
            from: `"${process.env.APP_NAME || 'Dr. Nitin Sunku'}" <${process.env.FROM_EMAIL}>`,
            to,
            subject,
            text,
            html,
        });

        console.log('Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Failed to send email:', error);
        return { success: false, error };
    }
}
