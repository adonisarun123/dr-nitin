import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
    title: "Design Samples — Internal",
    robots: { index: false, follow: false },
};

const samples = [
    {
        slug: "hero-b",
        label: "Direction B — Bold modern hero (active)",
        desc: "Dark slate canvas, large display headline with gradient accent, pill buttons, stat strip, glowing photo halo. Compared against the current live hero.",
    },
    {
        slug: "full-editorial",
        label: "Direction A — Full editorial homepage (rejected)",
        desc: "Hero, stats, treatments grid, about teaser, locations, page header — all in editorial-clinical style. Kept as reference.",
    },
    {
        slug: "hero-a",
        label: "Direction A — Hero only, side-by-side with current (rejected)",
        desc: "Side-by-side: editorial hero on top, current live hero below.",
    },
];

export default function DesignSamplesIndex() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
                    <span className="text-amber-900 font-medium">
                        Internal design previews · not visible on the live site
                    </span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-amber-900 hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to live site
                    </Link>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-800 mb-3">
                    Internal previews
                </p>
                <h1 className="font-editorial text-4xl lg:text-5xl tracking-[-0.015em] text-gray-900 leading-[1.1]">
                    Design samples for review.
                </h1>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                    These pages are not linked from the live site and carry a noindex
                    directive. Open one to compare it against the production homepage.
                </p>

                <ul className="mt-12 grid gap-px bg-gray-200 border border-gray-200">
                    {samples.map((s) => (
                        <li key={s.slug} className="bg-white">
                            <Link
                                href={`/design-samples/${s.slug}`}
                                className="group flex items-start justify-between gap-6 p-6 lg:p-8 hover:bg-blue-50/40 transition-colors"
                            >
                                <div>
                                    <h2 className="font-editorial text-xl lg:text-2xl text-gray-900 group-hover:text-blue-900 transition-colors">
                                        {s.label}
                                    </h2>
                                    <p className="mt-2 text-gray-600 leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                                <ArrowUpRight className="h-5 w-5 text-blue-900 shrink-0 mt-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
