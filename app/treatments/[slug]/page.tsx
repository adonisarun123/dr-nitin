import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    Phone,
    MessageCircle,
    Calendar,
} from "lucide-react";
import {
    treatments,
    getTreatmentBySlug,
    TREATMENT_DISCLAIMER,
    SERVICE_AREAS_LINE,
} from "@/lib/treatments";
import { siteConfig, practicePostalAddress } from "@/lib/data";
import { siteOrigin } from "@/lib/site-url";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/animations/fade-in";
import { TreatmentBlocks } from "@/components/treatments/treatment-blocks";
import { BookingForm } from "@/components/forms/booking-form";
import { TreatmentMobileStickyCta } from "@/components/treatments/mobile-sticky-cta";

export function generateStaticParams() {
    return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const t = getTreatmentBySlug(params.slug);
    if (!t) return {};

    const url = `${siteOrigin}/treatments/${t.slug}`;
    return {
        title: { absolute: t.metaTitle },
        description: t.metaDescription,
        keywords: t.primaryKeywords,
        alternates: { canonical: url },
        openGraph: {
            title: t.metaTitle,
            description: t.metaDescription,
            url,
            type: "article",
        },
    };
}

export default function TreatmentDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const t = getTreatmentBySlug(params.slug);
    if (!t) notFound();

    // ────────────────────────────────────────────────
    // JSON-LD
    // ────────────────────────────────────────────────
    const url = `${siteOrigin}/treatments/${t.slug}`;

    const physician = {
        "@type": "Physician",
        name: "Dr. Nitin N Sunku",
        medicalSpecialty: ["Orthopedic", "SportsMedicine"],
        address: practicePostalAddress,
        telephone: siteConfig.phone,
        url: `${siteOrigin}/`,
    };

    const procedureSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        name: t.procedureName,
        procedureType: "Therapeutic",
        ...(t.bodyLocation ? { bodyLocation: t.bodyLocation } : {}),
        description: t.metaDescription,
        url,
        performer: physician,
    };

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: t.metaTitle,
        url,
        description: t.metaDescription,
        about: {
            "@type": "MedicalCondition",
            name: t.bodyLocation
                ? `${t.bodyLocation} pain / ${t.title}`
                : t.title,
        },
        author: physician,
        reviewedBy: physician,
        lastReviewed: new Date().toISOString().slice(0, 10),
        breadcrumb: {
            "@type": "BreadcrumbList",
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${siteOrigin}/` },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Treatments",
                    item: `${siteOrigin}/treatments`,
                },
                { "@type": "ListItem", position: 3, name: t.title, item: url },
            ],
        },
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    const otherTreatments = treatments.filter((x) => x.slug !== t.slug).slice(0, 4);

    return (
        <main className="min-h-screen pb-20 bg-white">
            <JsonLd data={webPageSchema} />
            <JsonLd data={procedureSchema} />
            <JsonLd data={faqSchema} />

            {/* ───────── Hero ───────── */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-28 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <Link
                            href="/treatments"
                            className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> All Treatments
                        </Link>

                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-xs font-medium uppercase tracking-wide">
                            Non-Surgical · Regenerative
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight max-w-4xl text-white">
                            {t.heroH1}
                        </h1>

                        <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8">
                            {t.heroSubhead}
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-3 max-w-3xl mb-10">
                            {t.heroBullets.map((b) => (
                                <li
                                    key={b}
                                    className="flex items-start gap-3 text-gray-100 text-sm lg:text-base"
                                >
                                    <CheckCircle className="h-5 w-5 shrink-0 text-blue-300 mt-0.5" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3">
                            <Button size="lg" variant="white" className="font-semibold" asChild>
                                <Link href="/contact">
                                    <Calendar className="mr-2 h-4 w-4" /> Book a Consultation
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white/40 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                                asChild
                            >
                                <a href={`tel:${siteConfig.phone}`}>
                                    <Phone className="mr-2 h-4 w-4" /> Call Now
                                </a>
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* ───────── Body ───────── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Article */}
                    <article className="lg:col-span-2 space-y-12 max-w-3xl">
                        {t.sections.map((section) => (
                            <section
                                key={section.id}
                                id={section.id}
                                aria-labelledby={`${section.id}-h`}
                            >
                                <h2
                                    id={`${section.id}-h`}
                                    className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-5"
                                >
                                    {section.title}
                                </h2>
                                <TreatmentBlocks blocks={section.blocks} />
                            </section>
                        ))}

                        {/* FAQs */}
                        <section id="faqs" aria-labelledby="faqs-h">
                            <h2
                                id="faqs-h"
                                className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-5"
                            >
                                Frequently asked questions
                            </h2>
                            <div className="space-y-3">
                                {t.faqs.map((f, i) => (
                                    <details
                                        key={i}
                                        className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-primary/40 transition-colors"
                                    >
                                        <summary className="flex cursor-pointer items-start justify-between gap-4 text-base lg:text-lg font-semibold text-gray-900 list-none">
                                            <span>{f.q}</span>
                                            <span
                                                aria-hidden
                                                className="shrink-0 mt-1 h-5 w-5 rounded-full bg-primary/10 text-primary inline-flex items-center justify-center transition-transform group-open:rotate-45"
                                            >
                                                +
                                            </span>
                                        </summary>
                                        <p className="mt-3 text-gray-700 leading-relaxed text-base">
                                            {f.a}
                                        </p>
                                    </details>
                                ))}
                            </div>
                        </section>

                        {/* Service area + disclaimer */}
                        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-relaxed text-slate-700">
                            <p className="font-medium text-slate-900 mb-2">Service area</p>
                            <p className="mb-4">{SERVICE_AREAS_LINE}</p>
                            <p className="font-medium text-slate-900 mb-2">Medical disclaimer</p>
                            <p>{TREATMENT_DISCLAIMER}</p>
                        </section>
                    </article>

                    {/* Sticky sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-6 lg:p-8 shadow-xl">
                                <h3 className="text-xl font-bold mb-2">
                                    Book your consultation
                                </h3>
                                <p className="text-blue-100 text-sm leading-relaxed mb-5">
                                    Bring any prior X-ray or MRI. We'll review your imaging,
                                    explain it in plain language, and walk you through the right
                                    options for your knee.
                                </p>
                                <div className="space-y-3">
                                    <Button
                                        size="lg"
                                        variant="white"
                                        className="w-full font-semibold"
                                        asChild
                                    >
                                        <Link href="/contact">
                                            <Calendar className="mr-2 h-4 w-4" /> Book Consultation
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                                        asChild
                                    >
                                        <a
                                            href="https://wa.me/919449031003"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                                        </a>
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="ghost"
                                        className="w-full text-white hover:bg-white/10 hover:text-white"
                                        asChild
                                    >
                                        <a href={`tel:${siteConfig.phone}`}>
                                            <Phone className="mr-2 h-4 w-4" /> Call {siteConfig.phone}
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-gray-200 bg-white p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">Locations</h4>
                                <ul className="text-sm text-gray-700 space-y-3">
                                    <li>
                                        <span className="font-medium text-gray-900 block">
                                            Raghava Multispeciality Hospital
                                        </span>
                                        Sarjapura–Attibele Road, Attibele, Bengaluru
                                    </li>
                                    <li>
                                        <span className="font-medium text-gray-900 block">
                                            Health Nest Hospital
                                        </span>
                                        24th Main, Sector 2, HSR Layout, Bengaluru — 560102
                                    </li>
                                </ul>
                            </div>

                            {t.relatedLinks.length > 0 && (
                                <div className="rounded-3xl border border-gray-200 bg-white p-6">
                                    <h4 className="font-semibold text-gray-900 mb-3">
                                        Related treatments
                                    </h4>
                                    <ul className="space-y-2">
                                        {t.relatedLinks.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="group flex items-center justify-between text-sm text-gray-700 hover:text-primary transition-colors"
                                                >
                                                    <span>{link.label}</span>
                                                    <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </aside>
                </div>

                {/* Lead form — high-intent, end-of-page conversion */}
                <section
                    id="book"
                    aria-labelledby="book-heading"
                    className="mt-20 lg:mt-24 scroll-mt-28"
                >
                    <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-1 shadow-2xl">
                        <div className="rounded-[calc(1.5rem-4px)] bg-white p-6 sm:p-10 lg:p-14 grid lg:grid-cols-5 gap-8 lg:gap-12">
                            <div className="lg:col-span-2 lg:pr-4">
                                <h2
                                    id="book-heading"
                                    className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 leading-tight mb-4"
                                >
                                    Book your {t.title.toLowerCase()} consultation
                                </h2>
                                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                                    Share a few details and the clinic team will reach out to confirm
                                    your slot. Bring any prior X-ray or MRI to your visit — Dr. Nitin
                                    N Sunku will review your imaging and walk you through the right
                                    options for your case.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                        <span>
                                            Two convenient locations — Raghava Multispeciality
                                            Hospital, Attibele and Health Nest Hospital, HSR Layout
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                        <span>
                                            Honest counselling — no rushing to surgery, no
                                            over-promising
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                                        <span>
                                            Written treatment plan with realistic expectations
                                        </span>
                                    </li>
                                </ul>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                                        Prefer to call?
                                    </p>
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
                                    >
                                        <Phone className="h-4 w-4" />
                                        {siteConfig.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-3">
                                <BookingForm source={`treatment-${t.slug}`} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other treatments — full width below */}
                {otherTreatments.length > 0 && (
                    <section className="mt-20 lg:mt-24">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-8">
                            Explore other treatments
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {otherTreatments.map((other) => (
                                <Link
                                    key={other.slug}
                                    href={`/treatments/${other.slug}`}
                                    className={`group rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 transition-all`}
                                >
                                    <div
                                        className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${other.color}`}
                                    >
                                        Treatment
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {other.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {other.shortDesc}
                                    </p>
                                    <div className="mt-4 flex items-center text-primary text-sm font-semibold">
                                        Learn more
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Mobile-only sticky CTA bar (hidden on md+) */}
            <TreatmentMobileStickyCta phone={siteConfig.phone} />
        </main>
    );
}
