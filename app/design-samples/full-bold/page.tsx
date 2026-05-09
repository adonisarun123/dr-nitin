import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroBold } from "@/components/sections/hero-bold";
import { StatsBold } from "@/components/sections/stats-bold";
import { TreatmentsGridBold } from "@/components/sections/treatments-bold";
import { AboutTeaserBold } from "@/components/sections/about-teaser-bold";
import { LocationsBold } from "@/components/sections/locations-bold";
import { PageHeaderBold } from "@/components/ui/page-header-bold";

export const metadata: Metadata = {
    title: "Design Sample · Full Bold Modern Homepage",
    robots: { index: false, follow: false },
};

/**
 * Full bold-modern homepage preview (direction B).
 * Renders every bold section in the order they would appear on /.
 */
export default function FullBoldPreview() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
                    <span className="text-amber-900 font-medium">
                        Internal design preview · direction B — bold modern
                    </span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-amber-900 hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to live site
                    </Link>
                </div>
            </div>

            <HeroBold />
            <StatsBold />
            <TreatmentsGridBold />
            <AboutTeaserBold />
            <LocationsBold />

            <div className="bg-white py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                        Below: how the bold PageHeader looks on inner pages
                    </p>
                    <p className="text-sm text-slate-500">
                        (used on /services, /treatments, /blog, /about, etc.)
                    </p>
                </div>
            </div>

            <PageHeaderBold
                eyebrow="Treatments"
                trail={[
                    { label: "Home", href: "/" },
                    { label: "Treatments" },
                ]}
                title="Modern, non-surgical orthopedic"
                titleAccent="treatments."
                description="Pain reduction, mobility restoration, and a real plan to delay or avoid surgery where medically appropriate."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
                <h2 className="font-heading font-bold text-3xl tracking-[-0.02em] text-slate-950 mb-4">
                    What changed across the system
                </h2>
                <ul className="space-y-3 text-slate-700 leading-relaxed">
                    <li>
                        <strong>Hero</strong> — dark slate canvas, big bold display H1
                        with cyan gradient on the accent line, pill buttons, ambient
                        radial glows, glowing photo with a floating credential pill.
                    </li>
                    <li>
                        <strong>Stats</strong> — light surface that bridges from the dark
                        hero with a thin cyan top line; bold numerals, cyan &quot;+&quot;
                        accents, glass-style icon chips.
                    </li>
                    <li>
                        <strong>Treatments grid</strong> — section heading uses a
                        cyan-to-blue gradient on the accent word; cards lift on hover
                        with a cyan border and a soft inner gradient sweep.
                    </li>
                    <li>
                        <strong>About teaser</strong> — high-contrast dark pull-quote
                        card breaks the white surface; cyan-gradient checkmark icons on
                        credentials list.
                    </li>
                    <li>
                        <strong>Locations</strong> — dark cards (mini hero each) with
                        cyan/blue glows; address as a proper{" "}
                        <code className="px-1.5 bg-slate-100 rounded text-sm">
                            {`<address>`}
                        </code>{" "}
                        block; pill button for &quot;Open in Maps&quot;.
                    </li>
                    <li>
                        <strong>PageHeader</strong> — dark slate hero strip with subtle
                        glow accents; H1 supports a `titleAccent` prop that renders the
                        last word in cyan/blue gradient.
                    </li>
                </ul>

                <h2 className="font-heading font-bold text-3xl tracking-[-0.02em] text-slate-950 mb-4 mt-12">
                    Ready to ship?
                </h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                    Tell me <em>&quot;ship bold homepage&quot;</em> to swap the live
                    homepage to use these components, or{" "}
                    <em>&quot;ship bold PageHeader sitewide&quot;</em> to replace the
                    page header on every inner page.
                </p>
                <p className="text-slate-700 leading-relaxed">
                    Or piecemeal — &quot;ship bold hero&quot;, &quot;ship bold
                    stats&quot;, etc.
                </p>
            </div>
        </main>
    );
}
