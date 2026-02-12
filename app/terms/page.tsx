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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-blue max-w-4xl">
                <h2>1. Agreement to Terms</h2>
                <p>By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.</p>

                <h2>2. Medical Disclaimer</h2>
                <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician.</p>
            </div>
        </main>
    );
}
