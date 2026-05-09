import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroEditorial } from "@/components/sections/hero-editorial";
import { Hero as CurrentHero } from "@/components/sections/hero";

export const metadata: Metadata = {
    title: "Design Sample · Hero A — Editorial Clinical",
    robots: { index: false, follow: false },
};

/**
 * Internal preview route for the editorial-clinical homepage hero (direction A).
 * Not linked from anywhere on the live site. Visit /design-samples/hero-a to compare
 * the new hero against the current one stacked below.
 */
export default function HeroAPreviewPage() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
                    <span className="text-amber-900 font-medium">
                        Internal design preview · not visible on the live site
                    </span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-amber-900 hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to homepage
                    </Link>
                </div>
            </div>

            {/* Section A — the new editorial-clinical hero */}
            <div className="relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900">
                        Direction A — Editorial Clinical (proposed)
                    </p>
                </div>
                <HeroEditorial />
            </div>

            <div className="border-y-2 border-dashed border-gray-200 my-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 text-center">
                        Below: current live hero for comparison
                    </p>
                </div>
            </div>

            {/* Section B — the current hero, for side-by-side comparison */}
            <div className="relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Current live hero (reference)
                    </p>
                </div>
                <CurrentHero />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Notes on this direction
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        <strong>Typography:</strong> Lora serif for the H1, qualifications,
                        and figure caption italic. Inter sans for everything else.
                    </li>
                    <li>
                        <strong>Palette:</strong> White surface, deep blue (#0C447C / #185FA5)
                        for accents. No gradient washes, no neon glow.
                    </li>
                    <li>
                        <strong>Photo treatment:</strong> 4:5 portrait with thin blue ring,
                        editorial corner brackets, italic caption — like a NYT or Mayo Clinic feature.
                    </li>
                    <li>
                        <strong>Buttons:</strong> Rectangular dark-blue primary, underlined
                        secondary link — reads as serious and credible rather than salesy.
                    </li>
                    <li>
                        <strong>Authority strip:</strong> three-column dl with Specialty / Fellowship
                        / Locations replaces the star-rating row. More differentiated,
                        more institutional.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    Ready to ship it?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Tell me <em>&quot;ship hero A to the homepage&quot;</em> and I&apos;ll
                    swap <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">{`<Hero />`}</code>{" "}
                    for{" "}
                    <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">{`<HeroEditorial />`}</code>{" "}
                    in <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">app/page.tsx</code>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Or ask for tweaks: different headline, different photo, blue tone,
                    or a tighter authority strip.
                </p>
            </div>
        </main>
    );
}
