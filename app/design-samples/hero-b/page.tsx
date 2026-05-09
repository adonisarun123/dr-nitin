import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroBold } from "@/components/sections/hero-bold";
import { Hero as CurrentHero } from "@/components/sections/hero";

export const metadata: Metadata = {
    title: "Design Sample · Hero B — Bold Modern",
    robots: { index: false, follow: false },
};

/**
 * Internal preview route for the bold-modern homepage hero (direction B).
 * Visit /design-samples/hero-b to compare the new dark hero against the
 * current live hero.
 */
export default function HeroBPreviewPage() {
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

            {/* Section A — the new bold-modern hero */}
            <div className="relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                        Direction B — Bold Modern (proposed)
                    </p>
                </div>
                <HeroBold />
            </div>

            <div className="border-y-2 border-dashed border-gray-200 my-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 text-center">
                        Below: current live hero for comparison
                    </p>
                </div>
            </div>

            {/* Section B — current hero */}
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
                        <strong>Surface:</strong> dark slate-950 background with two soft
                        cyan/blue radial glows and a faded grid mask. Photographs and stats
                        sit on top of this dark canvas.
                    </li>
                    <li>
                        <strong>Typography:</strong> existing Poppins, but pushed harder —
                        bold weight, 4.25rem at desktop, tight{" "}
                        <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">
                            tracking-[-0.035em]
                        </code>{" "}
                        letterspacing. The second line uses a cyan/blue gradient text effect
                        to add motion without animation.
                    </li>
                    <li>
                        <strong>Buttons:</strong> pill-shaped (rounded-full). White primary
                        with a soft cyan glow on hover; translucent outline secondary; phone
                        link beside them for older patients.
                    </li>
                    <li>
                        <strong>Stat strip:</strong> three quick proof points (10K+ patients,
                        10+ years, BFC team doctor) divided by faint borders.
                    </li>
                    <li>
                        <strong>Photo treatment:</strong> 4:5 portrait with cyan/blue glow
                        halo, ring border, and a floating credential pill (&ldquo;Fellowship —
                        Sports &amp; Arthroscopy&rdquo;) that gently bobs up and down.
                    </li>
                    <li>
                        <strong>Vibe:</strong> reads as a modern specialist practice rather
                        than a hospital chain. Calibrated for the Electronic City IT
                        professional and patients who research before booking.
                    </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">
                    Ready to ship it?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Tell me <em>&quot;ship hero B to the homepage&quot;</em> and I&apos;ll
                    swap{" "}
                    <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">{`<Hero />`}</code>{" "}
                    for{" "}
                    <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">{`<HeroBold />`}</code>{" "}
                    in <code className="px-1.5 py-0.5 bg-gray-100 rounded text-sm">app/page.tsx</code>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Or ask for tweaks: lighter background, different headline, stronger
                    accent colour, no animation, etc.
                </p>
            </div>
        </main>
    );
}
