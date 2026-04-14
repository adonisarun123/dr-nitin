import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";

export const metadata: Metadata = {
    title: {
        absolute: "Terms & Conditions | Dr Nitin N Sunku Orthopedic Care",
    },
    description: "Read the terms and conditions for Dr Nitin N Sunku’s orthopedic and sports medicine services, ensuring transparent and trustworthy patient care.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader title="Terms of Service" description="Last updated: December 2024" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl text-gray-800 space-y-6 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-8 [&_h2]:mb-3">
                <h2>1. Agreement to terms</h2>
                <p>
                    By accessing this website you agree to these Terms of Service and to applicable laws in
                    India governing telecommunications, advertising, and healthcare communication. If you do not
                    agree, discontinue use immediately. We may update these terms periodically; continued use
                    after changes constitutes acceptance of the revised wording.
                </p>

                <h2>2. Medical disclaimer</h2>
                <p>
                    Educational articles, service descriptions, and downloadable materials are general in
                    nature. They are not a substitute for personalised medical advice, diagnosis, or treatment
                    from a licensed professional who has examined you. Never disregard in-person medical advice
                    because of something you read online. Call emergency services for urgent symptoms.
                </p>

                <h2>3. Appointments and communications</h2>
                <p>
                    Submitting a contact form does not guarantee a specific appointment time until the clinic
                    confirms availability. Cancellations or rescheduling should follow instructions provided in
                    confirmation messages. Abusive or threatening language toward staff may result in refusal of
                    future service.
                </p>

                <h2>4. Intellectual property</h2>
                <p>
                    Text, layout, logos, and photography on this site belong to the practice or its licensors
                    unless credited otherwise. You may link to public URLs but may not copy large sections for
                    commercial reuse without written permission.
                </p>

                <h2>5. Limitation of liability</h2>
                <p>
                    To the fullest extent permitted by law, the practice is not liable for indirect damages
                    arising from reliance on website content, temporary downtime, or third-party services linked
                    from these pages. Nothing here limits liability that cannot legally be excluded.
                </p>

                <h2>6. Governing law</h2>
                <p>
                    Disputes relating to website use are subject to the courts of Bengaluru, Karnataka, unless a
                    different jurisdiction is mandated by consumer protection rules applicable to you.
                </p>
            </div>
        </main>
    );
}
