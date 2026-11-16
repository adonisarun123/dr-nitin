import { JsonLd } from "@/components/seo/json-ld";
import { siteOrigin } from "@/lib/site-url";

export type LandingFaqItem = { q: string; a: string };

/**
 * FAQ block + JSON-LD for the ads/local landing pages.
 *
 * Why this exists:
 * - The landing pages (knee-pain-bangalore, back-pain-bangalore,
 *   sports-injury-doctor-bangalore, orthopedic-doctor-attibele,
 *   orthopedic-doctor-in-hsr-layout) are indexable but previously emitted
 *   ZERO structured data — no FAQPage, no BreadcrumbList, no MedicalWebPage.
 *   These are the highest-commercial-intent organic URLs on the site, so
 *   they should be the richest, not the poorest, in schema.
 * - Uses native <details>/<summary> so answers are always in the server
 *   HTML (crawlable) and the accordion works with no client JS.
 *
 * Emits one @graph: MedicalWebPage (+ breadcrumb + FAQPage) that references
 * the site-wide Physician node (`#physician`) defined in app/layout.tsx.
 */
export function LandingFaq({
    pageName,
    pagePath,
    aboutCondition,
    items,
    heading = "Frequently Asked Questions",
    subheading,
    pageType = "MedicalWebPage",
    extraNodes = [],
}: {
    /** Human-readable page name for schema + breadcrumb, e.g. "Knee Pain Specialist in Bangalore". */
    pageName: string;
    /** Path starting with "/", e.g. "/knee-pain-bangalore". */
    pagePath: string;
    /** Optional MedicalCondition name, e.g. "Knee pain". */
    aboutCondition?: string;
    items: LandingFaqItem[];
    heading?: string;
    subheading?: string;
    /**
     * schema.org type of the page node. Landing pages are MedicalWebPage (the
     * physician is the mainEntity); hub/utility pages pass CollectionPage,
     * ContactPage etc., where the physician is referenced via `about`.
     */
    pageType?: string;
    /** Extra @graph nodes, e.g. an ItemList of the cards on a hub page. */
    extraNodes?: Record<string, unknown>[];
}) {
    const url = `${siteOrigin}${pagePath}`;

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": pageType,
                "@id": `${url}#webpage`,
                "url": url,
                "name": pageName,
                "inLanguage": "en-IN",
                ...(aboutCondition
                    ? { "about": { "@type": "MedicalCondition", "name": aboutCondition } }
                    : {}),
                ...(pageType === "MedicalWebPage"
                    ? { "mainEntity": { "@id": `${siteOrigin}/#physician` } }
                    : { "about": { "@id": `${siteOrigin}/#physician` } }),
                "breadcrumb": { "@id": `${url}#breadcrumb` },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteOrigin}/` },
                    { "@type": "ListItem", "position": 2, "name": pageName, "item": url },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                "mainEntity": items.map(({ q, a }) => ({
                    "@type": "Question",
                    "name": q,
                    "acceptedAnswer": { "@type": "Answer", "text": a },
                })),
            },
            ...extraNodes,
        ],
    };

    return (
        <section className="bg-white py-14 md:py-20 overflow-hidden" id="faq">
            <JsonLd data={schema} />
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-10">
                    <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                        — Common Questions —
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 break-words">
                        {heading}
                    </h2>
                    {subheading ? (
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">{subheading}</p>
                    ) : null}
                </div>

                <div className="space-y-3">
                    {items.map((item) => (
                        <details
                            key={item.q}
                            className="group bg-gray-50 rounded-2xl border border-gray-100 open:bg-white open:shadow-md transition-all"
                        >
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-5 py-4 md:px-6 md:py-5 font-semibold text-gray-900 text-sm md:text-base [&::-webkit-details-marker]:hidden">
                                {item.q}
                                <span
                                    aria-hidden
                                    className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45"
                                >
                                    +
                                </span>
                            </summary>
                            <p className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
