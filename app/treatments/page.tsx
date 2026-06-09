import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { FadeIn } from "@/components/animations/fade-in";
import { treatments, SERVICE_AREAS_LINE } from "@/lib/treatments";
import { siteOrigin } from "@/lib/site-url";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
    title: { absolute: "Non-Surgical & Regenerative Orthopedic Treatments in Bengaluru | Dr. Nitin N Sunku" },
    description:
        "Modern non-surgical and regenerative orthopedic treatments by Dr. Nitin N Sunku — GFC, hyaluronic acid, ultrasound-guided injections and complete osteoarthritis care. Clinics in Attibele and HSR Layout, serving Electronic City and South Bengaluru.",
    alternates: { canonical: `${siteOrigin}/treatments` },
};

export default function TreatmentsIndexPage() {
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Non-Surgical & Regenerative Orthopedic Treatments",
        itemListElement: treatments.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteOrigin}/treatments/${t.slug}`,
            name: t.title,
        })),
    };

    return (
        <main className="min-h-screen pb-20">
            <JsonLd data={itemListSchema} />

            <PageHeaderBold
                title="Non-Surgical & Regenerative Orthopedic Treatments"
                description="Pain reduction, mobility restoration, and a real plan to delay or avoid surgery where medically appropriate. Dr. Nitin N Sunku, Attibele and HSR Layout."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
                <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p>
                        These treatment pages describe the modern, non-surgical and
                        regenerative options offered by Dr. Nitin N Sunku alongside the
                        existing surgical services. Each page explains the procedure in plain
                        language, who is and isn't a good candidate, what recovery looks
                        like, and how the option fits into a broader plan combining
                        physiotherapy, weight management, and follow-up care.
                    </p>
                    <p>{SERVICE_AREAS_LINE}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((t, i) => (
                        <FadeIn key={t.slug} delay={i * 0.08}>
                            <Link
                                href={`/treatments/${t.slug}`}
                                className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                            >
                                <div
                                    className={`inline-flex w-fit items-center justify-center px-3 py-1 rounded-full text-xs font-semibold mb-5 ${t.color}`}
                                >
                                    {t.bodyLocation ?? "Orthopedic"}
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {t.title}
                                </h2>

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {t.shortDesc}
                                </p>

                                <ul className="space-y-1.5 mb-6 text-sm text-gray-600">
                                    {t.heroBullets.slice(0, 3).map((b) => (
                                        <li key={b} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
