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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-blue max-w-4xl">
                <h2>1. Introduction</h2>
                <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>

                <h2>2. Data Collection</h2>
                <p>We collect personal data such as Name, Phone Number, and Email Address solely for the purpose of scheduling appointments. We do not sell this data to third parties.</p>

                <h2>3. Medical Information</h2>
                <p>Any medical information shared via the contact form is treated with strict confidentiality in accordance with medical data protection standards.</p>
            </div>
        </main>
    );
}
