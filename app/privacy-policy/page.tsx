import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
    title: {
        absolute: "Privacy Policy | Dr Nitin N Sunku Orthopedic Care",
    },
    description: "Read the privacy policy of Dr Nitin N Sunku’s orthopedic and sports medicine services, ensuring secure and confidential handling of patient information.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader title="Privacy Policy" description="Last updated: December 2024" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl text-gray-800 space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3">
                <h2>1. Introduction</h2>
                <p>
                    This Privacy Policy describes how Dr. Nitin N. Sunku&apos;s practice website collects, uses,
                    stores, and protects information when you browse pages, submit forms, or communicate with
                    the clinic electronically. By using the site you agree to the practices outlined here. If
                    you disagree with any part, please avoid submitting personal data and contact the clinic
                    through alternative channels.
                </p>

                <h2>2. Data we collect</h2>
                <p>
                    Appointment and enquiry forms may collect your name, telephone number, email address, age
                    band, referring doctor (if any), and a short description of your symptoms. Technical logs
                    from hosting providers can include IP address, browser type, and timestamps so we can
                    diagnose outages or abuse. We do not sell personal information to data brokers.
                </p>

                <h2>3. Medical information</h2>
                <p>
                    Free-text medical details you choose to share are treated as confidential health information
                    and accessed only by staff involved in scheduling or clinical triage. Do not send highly
                    sensitive imagery unless the clinic requests it through a secure channel. Emergency
                    symptoms should never be communicated solely through a web form.
                </p>

                <h2>4. Cookies and analytics</h2>
                <p>
                    The site may use first-party or third-party cookies for basic analytics, advertising
                    measurement, or remembering preferences. You can control cookies through your browser
                    settings; disabling them may limit certain features. Aggregated analytics cannot identify
                    you personally unless you are simultaneously logged into a linked account.
                </p>

                <h2>5. Retention and security</h2>
                <p>
                    Form submissions are retained only as long as needed to complete your request or satisfy
                    legal record-keeping. Reasonable technical and organisational safeguards reduce the risk of
                    unauthorised access, though no internet transmission is perfectly secure.
                </p>

                <h2>6. Your choices</h2>
                <p>
                    You may request correction of inaccurate contact details, ask how your data has been used,
                    or withdraw marketing consent where applicable. For privacy-specific questions email the
                    clinic using the address shown in the site footer.
                </p>
            </div>
        </main>
    );
}
