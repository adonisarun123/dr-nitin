import type { Metadata } from "next";
import Link from "next/link";
import {
    FileText,
    Download,
    Users,
    BookOpen,
    Calendar,
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
            "Publications | Dr. Nitin N Sunku - Orthopedic Surgeon Bengaluru",
    },
    description:
        "Peer-reviewed research and academic publications by Dr. Nitin N Sunku, Consultant Orthopedic Surgeon in Bengaluru — including work on fracture healing and arthroscopy.",
    alternates: { canonical: `${siteOrigin}/publications` },
};

type Publication = {
    title: string;
    authors: string;
    authorList: string[];
    journal: string;
    journalDetail: string;
    date: string;
    datePublished: string;
    type: string;
    abstract: string;
    pdf?: string;
};

const publications: Publication[] = [
    {
        title:
            "Teriparatide-Assisted Union in Delayed Union and Infected Delayed Union of Long-Bone Shaft Fractures: A Retrospective Observational Study",
        authors:
            "Dr. Arjun A., Dr. Mahesh J. Nerkar, Dr. Nitin N. Sunku, Dr. Prashanth Reddy P.",
        authorList: [
            "Arjun A.",
            "Mahesh J. Nerkar",
            "Nitin N. Sunku",
            "Prashanth Reddy P.",
        ],
        journal: "Asian Journal of Medical Research and Health Sciences (AJMRHS)",
        journalDetail: "Original Research · eISSN 2583-7761 · CC BY-NC-SA 4.0",
        date: "25 March 2026",
        datePublished: "2026-03-25",
        type: "Original Research",
        abstract:
            "A retrospective observational study of 50 adults with delayed union or infected delayed union of long-bone shaft fractures managed with stable fixation and teriparatide. Mean radiological union time from teriparatide start was 3.5 ± 0.6 months, with complete union from index surgery at 15.1 ± 1.8 months overall. The study concludes that teriparatide may support fracture healing in delayed union when mechanical stability is maintained, while open injuries and infected delayed union remain slower-healing subgroups.",
        pdf: "/publications/teriparatide-delayed-union-jmrhs-2026.pdf",
    },
];

export default function PublicationsPage() {
    const publicationSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Physician",
                "@id": `${siteOrigin}/#physician`,
                name: "Dr. Nitin N Sunku",
                url: `${siteOrigin}/publications`,
            },
            ...publications.map((p) => ({
                "@type": "ScholarlyArticle",
                headline: p.title,
                name: p.title,
                author: p.authorList.map((name) => ({
                    "@type": "Person",
                    name,
                })),
                datePublished: p.datePublished,
                isPartOf: {
                    "@type": "Periodical",
                    name: p.journal,
                    issn: "2583-7761",
                },
                ...(p.pdf ? { url: `${siteOrigin}${p.pdf}` } : {}),
            })),
        ],
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <JsonLd data={publicationSchema} />

            <PageHeaderBold
                eyebrow="Publications"
                title="Peer-reviewed research and"
                titleAccent="academic contributions"
                description="A selection of published research and academic work that Dr. Nitin N Sunku has authored or co-authored."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 max-w-4xl">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                    Contributing to peer-reviewed literature keeps clinical
                    practice anchored to current evidence. The publications
                    below reflect ongoing involvement in orthopedic research —
                    from fracture healing to arthroscopic technique — and the
                    same standards of careful, evidence-based reasoning carry
                    over into day-to-day patient care.
                </p>
            </div>

            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8">
                    {publications.map((pub, idx) => (
                        <FadeIn
                            key={pub.title}
                            delay={idx * 0.1}
                            className="rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6 lg:p-8"
                        >
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                                    <FileText
                                        className="h-6 w-6 text-blue-600"
                                        aria-hidden
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 mb-3">
                                        <BookOpen
                                            className="h-3.5 w-3.5"
                                            aria-hidden
                                        />
                                        {pub.type}
                                    </div>

                                    <h2 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 leading-snug mb-3">
                                        {pub.title}
                                    </h2>

                                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                                        <p className="flex items-start gap-2">
                                            <Users
                                                className="h-4 w-4 text-gray-400 mt-0.5 shrink-0"
                                                aria-hidden
                                            />
                                            <span>{pub.authors}</span>
                                        </p>
                                        <p className="flex items-start gap-2">
                                            <BookOpen
                                                className="h-4 w-4 text-gray-400 mt-0.5 shrink-0"
                                                aria-hidden
                                            />
                                            <span>
                                                <span className="font-medium text-gray-800">
                                                    {pub.journal}
                                                </span>
                                                <br />
                                                {pub.journalDetail}
                                            </span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Calendar
                                                className="h-4 w-4 text-gray-400 shrink-0"
                                                aria-hidden
                                            />
                                            <span>{pub.date}</span>
                                        </p>
                                    </div>

                                    <p className="text-gray-700 leading-relaxed mb-5">
                                        {pub.abstract}
                                    </p>

                                    {pub.pdf && (
                                        <Button asChild>
                                            <a
                                                href={pub.pdf}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Download
                                                    className="mr-2 h-4 w-4"
                                                    aria-hidden
                                                />
                                                View / Download PDF
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
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
                            Looking for academic recognition too?
                        </h2>
                        <p className="text-blue-100/80 mb-6 max-w-2xl">
                            Explore the awards, society memberships and teaching
                            appointments that sit alongside this research — or
                            book a consultation directly.
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
                                <Link href="/awards">Awards & Accolades</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
