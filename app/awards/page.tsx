import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    Award,
    BookOpen,
    GraduationCap,
    Stethoscope,
    Trophy,
    Users,
    ArrowRight,
} from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { siteOrigin } from "@/lib/site-url";

export const metadata: Metadata = {
    title: {
        absolute:
            "Awards & Accolades | Dr. Nitin N Sunku - Orthopedic Surgeon Bengaluru",
    },
    description:
        "Awards, academic contributions, and professional recognitions earned by Dr. Nitin N Sunku — including his contribution to Springer's Atlas of Arthroscopy and his role as Team Doctor for Bengaluru FC.",
    alternates: { canonical: `${siteOrigin}/awards` },
};

const SPRINGER_IMAGE =
    "https://ik.imagekit.io/vlries1el/dr%20nitin/Dr-nitin-Springer.jpeg";

const accolades = [
    {
        icon: BookOpen,
        title: "Academic Author — Atlas of Arthroscopy",
        description:
            "Featured contributor to Springer's internationally acclaimed textbook Atlas of Arthroscopy, a globally referenced resource for orthopedic surgeons and arthroscopy fellows.",
    },
    {
        icon: Trophy,
        title: "Team Doctor, Bengaluru Football Club",
        description:
            "Trusted medical lead for professional footballers competing in the Indian Super League — handling acute pitch-side injury assessment, return-to-play planning, and structured rehabilitation protocols.",
    },
    {
        icon: GraduationCap,
        title: "Fellowship-trained Subspecialist",
        description:
            "Advanced fellowship training in Arthroscopy, Joint Replacement, and Sports Medicine following MS Orthopedics at Bangalore Medical College & Research Institute.",
    },
    {
        icon: Stethoscope,
        title: "Member — National & International Societies",
        description:
            "Active member of ISAKOS, ISKSAA and AO Trauma, attending and contributing to continuing medical education events across India and abroad.",
    },
    {
        icon: Users,
        title: "10,000+ Patient Consultations",
        description:
            "Over a decade of focused orthopedic practice across Bengaluru, with a patient-first, conservative-when-possible philosophy that has earned consistent referrals from physiotherapists, GPs, and former patients.",
    },
    {
        icon: Award,
        title: "Visiting Consultant at Leading Bengaluru Hospitals",
        description:
            "Regularly invited to provide arthroscopy and joint replacement expertise across multi-speciality hospitals in South Bengaluru, including Raghava Multispeciality Hospital (Attibele) and Health Nest Hospital (HSR Layout).",
    },
];

export default function AwardsPage() {
    const awardSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Nitin N Sunku",
        url: `${siteOrigin}/awards`,
        award: [
            "Academic Author featured in Springer's Atlas of Arthroscopy",
            "Team Doctor, Bengaluru Football Club",
            "Fellowship in Arthroscopy, Joint Replacement and Sports Medicine",
        ],
        memberOf: [
            { "@type": "Organization", name: "ISAKOS" },
            { "@type": "Organization", name: "ISKSAA" },
            { "@type": "Organization", name: "AO Trauma" },
        ],
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <JsonLd data={awardSchema} />

            <PageHeaderBold
                eyebrow="Awards & Accolades"
                title="Recognition that reflects"
                titleAccent="evidence-based orthopedic care"
                description="A snapshot of the academic contributions, professional memberships and clinical milestones that shape Dr. Nitin N Sunku's practice."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 max-w-4xl">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                    Recognition matters most when it translates into better
                    outcomes for patients. Each milestone below — a teaching
                    contribution, a team appointment, a continuing-education
                    membership — reinforces the same idea: orthopedic care
                    should rest on current evidence, careful examination and
                    honest discussion of options. The selections here are
                    representative rather than exhaustive.
                </p>
            </div>

            {/* Featured: Springer Atlas of Arthroscopy */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-10 items-center">
                        <FadeIn
                            direction="right"
                            className="lg:col-span-2 relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-2xl"
                        >
                            <Image
                                src={SPRINGER_IMAGE}
                                alt="Dr. Nitin N Sunku receiving recognition for contributing to Springer's Atlas of Arthroscopy"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                priority
                            />
                        </FadeIn>

                        <FadeIn delay={0.15} className="lg:col-span-3">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700 mb-4">
                                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                                Academic Contribution
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                                Featured author in Springer&apos;s{" "}
                                <span className="text-primary">Atlas of Arthroscopy</span>
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Dr. Nitin N Sunku has contributed as an{" "}
                                <strong>academic author</strong> to{" "}
                                <em>Atlas of Arthroscopy</em>, published by{" "}
                                <strong>Springer</strong> — an internationally
                                acclaimed reference textbook used by orthopedic
                                surgeons, sports medicine specialists, and
                                arthroscopy fellows around the world.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Springer textbooks are reviewed by senior
                                subspecialists before publication, so a chapter
                                or technique contribution reflects work that
                                peers consider trustworthy, reproducible and
                                aligned with current best practice. For
                                patients, that academic involvement is a
                                practical signal: the same surgical techniques
                                being explained to fellows in training are the
                                techniques being used in clinic.
                            </p>

                            <p className="text-gray-700 leading-relaxed">
                                The textbook covers diagnostic and operative
                                arthroscopy of the knee, shoulder and other
                                major joints — including ligament
                                reconstruction, meniscus repair, rotator cuff
                                repair, labral procedures, and modern
                                cartilage-friendly approaches. Contributing to
                                resources of this scale keeps Dr. Sunku close
                                to peer-reviewed updates and international
                                consensus statements that then inform
                                day-to-day decisions in the operating room and
                                outpatient clinic.
                            </p>

                            <div className="mt-6 grid sm:grid-cols-3 gap-3">
                                <div className="rounded-xl border border-gray-200 bg-white p-4">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                        Publisher
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Springer
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-white p-4">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                        Title
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Atlas of Arthroscopy
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-white p-4">
                                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                                        Audience
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Surgeons & fellows
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* All accolades grid */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="max-w-2xl mx-auto text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                            Highlights from a decade of focused practice
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Academic contributions, sports medicine
                            appointments and society memberships that support
                            ongoing learning.
                        </p>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {accolades.map((item, idx) => (
                            <FadeIn
                                key={item.title}
                                delay={idx * 0.08}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon
                                        className="h-6 w-6 text-blue-600"
                                        aria-hidden
                                    />
                                </div>
                                <h3 className="font-bold text-gray-900 text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Continuing education note */}
            <section className="py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 lg:p-10">
                        <div className="flex items-start gap-4">
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 shrink-0">
                                <GraduationCap
                                    className="h-7 w-7 text-blue-600"
                                    aria-hidden
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3">
                                    Why continuing education matters
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Orthopedics is a fast-moving field. New
                                    arthroscopic techniques, biologic adjuncts,
                                    implant designs and rehabilitation
                                    protocols are reported every year. Active
                                    membership of academic societies and
                                    contributing to peer-reviewed textbooks is
                                    how surgeons stay current — not as a
                                    credential alone, but as a discipline.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    For patients, that translates into honest
                                    conversations about <em>what the
                                    evidence shows</em>, the realistic limits
                                    of any single procedure, and a willingness
                                    to recommend non-surgical paths whenever
                                    they are likely to work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="rounded-3xl bg-slate-950 text-white p-8 lg:p-12 relative overflow-hidden">
                    <div
                        aria-hidden
                        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"
                    />
                    <div
                        aria-hidden
                        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none"
                    />
                    <div className="relative">
                        <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-3 text-white">
                            Ready to plan your visit?
                        </h2>
                        <p className="text-blue-100/80 mb-6 max-w-2xl">
                            Whether you&apos;re weighing surgery for a long-standing
                            knee or shoulder problem, or you simply want a
                            second opinion on imaging you already have, the
                            consultation is structured so you leave with a
                            clear plan.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild>
                                <Link href="/contact">
                                    Book a consultation
                                    <ArrowRight
                                        className="ml-2 h-4 w-4"
                                        aria-hidden
                                    />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="border-white/30 text-white bg-white/5 hover:bg-white/10 hover:text-white"
                            >
                                <Link href="/about">Read full bio</Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                className="text-white hover:bg-white/10 hover:text-white"
                            >
                                <Link href="/practice">Practice overview</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
