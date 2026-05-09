import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeroEditorial } from "@/components/sections/hero-editorial";
import { StatsEditorial } from "@/components/sections/stats-editorial";
import { TreatmentsGridEditorial } from "@/components/sections/treatments-editorial";
import { AboutTeaserEditorial } from "@/components/sections/about-teaser-editorial";
import { LocationsEditorial } from "@/components/sections/locations-editorial";
import { PageHeaderEditorial } from "@/components/ui/page-header-editorial";

export const metadata: Metadata = {
    title: "Design Sample · Full Editorial Homepage",
    robots: { index: false, follow: false },
};

/**
 * Full editorial-clinical homepage preview (direction A).
 * Renders every editorial section in the order they would appear on /.
 */
export default function FullEditorialPreview() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-amber-50 border-b border-amber-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between text-sm">
                    <span className="text-amber-900 font-medium">
                        Internal design preview · direction A — editorial clinical
                    </span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-amber-900 hover:underline"
                    >
                        <ArrowLeft className="h-4 w-4" /> Back to live site
                    </Link>
                </div>
            </div>

            <HeroEditorial />
            <StatsEditorial />
            <TreatmentsGridEditorial />
            <AboutTeaserEditorial />
            <LocationsEditorial />

            {/* Sample of how PageHeader looks on inner pages (services, treatments, blog) */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 text-center mb-2">
                    Below: how the editorial PageHeader looks on inner pages
                </p>
                <p className="text-sm text-gray-500 text-center">
                    (used on /services, /treatments, /blog, /about, etc.)
                </p>
            </div>
            <PageHeaderEditorial
                eyebrow="Treatments"
                trail={[
                    { label: "Home", href: "/" },
                    { label: "Treatments" },
                ]}
                title="Non-surgical & regenerative orthopedic treatments."
                description="Pain reduction, mobility restoration, and a real plan to delay or avoid surgery where medically appropriate."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-3xl">
                <h2 className="font-editorial text-3xl text-gray-900 mb-4">
                    What changed across the system
                </h2>
                <ul className="space-y-3 text-gray-700 leading-relaxed">
                    <li>
                        <strong>Hero</strong> — Lora serif H1, blue grid background,
                        editorial photo treatment, qualifications strip replaces the star
                        rating.
                    </li>
                    <li>
                        <strong>Stats</strong> — large serif numbers, uppercase labels,
                        thin vertical dividers; no rounded squircle icon backgrounds.
                    </li>
                    <li>
                        <strong>Treatments grid</strong> — full-bleed grid with 1px
                        gray dividers (newspaper feel), serif card titles, no shadows or
                        translate-up hover.
                    </li>
                    <li>
                        <strong>About teaser</strong> — pull quote in serif italic,
                        credentials as a definition list with uppercase blue labels.
                    </li>
                    <li>
                        <strong>Locations</strong> — clinic-letterhead style. Address as
                        a proper <code className="px-1.5 bg-gray-100 rounded text-sm">{`<address>`}</code> block,
                        section dividers, &quot;Open in Maps&quot; as an underlined link.
                    </li>
                    <li>
                        <strong>PageHeader</strong> — editorial serif H1, optional
                        breadcrumb trail and eyebrow, white background with thin rule
                        below (no coloured banner block).
                    </li>
                </ul>

                <h2 className="font-editorial text-3xl text-gray-900 mb-4 mt-12">
                    Ready to ship the system?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                    Tell me <em>&quot;ship editorial homepage&quot;</em> to swap the live
                    homepage to use these components, or <em>&quot;ship editorial PageHeader sitewide&quot;</em>
                    {" "}to replace the existing page header on every inner page.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    You can also ship them piecemeal — &quot;ship editorial hero&quot;,
                    &quot;ship editorial stats&quot;, etc.
                </p>
            </div>
        </main>
    );
}
