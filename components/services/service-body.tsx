import Link from "next/link";
import { ArrowRight, Clock, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import type { ServicePageContent } from "@/lib/service-pages";

/**
 * Renders a service detail page body from structured data.
 *
 * Visual output is deliberately identical to the hand-written branches in
 * app/services/[slug]/page.tsx so that new data-driven pages and the legacy
 * if-chain pages are indistinguishable to a visitor. Legacy services can be
 * migrated into lib/service-pages.ts one at a time.
 */
export function ServiceBody({ content }: { content: ServicePageContent }) {
    return (
        <>
            <section className="space-y-6">
                {content.intro.map((para, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed text-lg">
                        {para}
                    </p>
                ))}
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="h-8 w-1 bg-primary rounded-full" />
                    {content.conditionsHeading}
                </h2>
                <div className="space-y-6">
                    {content.conditions.map((card) => (
                        <div key={card.title} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>
                {content.conditionsNote && (
                    <p className="mt-6 text-gray-600 italic text-sm">{content.conditionsNote}</p>
                )}
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="h-8 w-1 bg-primary rounded-full" />
                    {content.approachHeading}
                </h2>
                <div className="space-y-8">
                    {content.approach.map((block) => (
                        <div key={block.title}>
                            <h3 className="text-xl font-bold text-primary mb-3">{block.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{block.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                    Why Choose Our Clinic
                </h2>
                <p className="text-gray-700 leading-relaxed">{content.whyChoose}</p>
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="h-8 w-8 text-primary" />
                    {content.recoveryHeading}
                </h2>
                <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                    {content.recovery.map((step) => (
                        <div key={step.t} className="relative">
                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                            <h4 className="font-bold text-gray-900 mb-1">{step.t}</h4>
                            <p className="text-gray-600 text-sm">{step.d}</p>
                        </div>
                    ))}
                </div>
                {content.recoveryNote && (
                    <p className="mt-6 text-gray-500 text-sm">{content.recoveryNote}</p>
                )}
            </section>

            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-primary" />
                    {content.locationsHeading}
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                        <h3 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            Centred at Attibele, on Sarjapura&ndash;Attibele Road. Ideal for people in Anekal,
                            Chandapura, Jigani, Bommasandra, and Electronic City.
                        </p>
                        <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                            In-person Reviews <ArrowRight className="h-3 w-3" />
                        </Link>
                    </div>
                    <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                        <h3 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and
                            Bellandur residents.
                        </p>
                        <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                            Follow-up Visits <ArrowRight className="h-3 w-3" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                    If you are unsure which location to book, use the contact page and mention your pin code. Bring
                    prior MRI or X-ray reports, a list of medicines, and comfortable clothing so the joint can be
                    examined properly.
                </div>
            </section>

            <FAQ title={content.faqTitle} items={content.faqs} />

            <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                <h2 className="text-2xl font-bold mb-4">{content.ctaHeading}</h2>
                <p className="mb-8 opacity-90 leading-relaxed">{content.ctaText}</p>
                <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                    <Link href="/contact">Book Consultation</Link>
                </Button>
            </div>
        </>
    );
}
