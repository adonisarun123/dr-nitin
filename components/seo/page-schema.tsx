import { JsonLd } from "@/components/seo/json-ld";
import { siteOrigin } from "@/lib/site-url";

/**
 * Page-level JSON-LD for hub and utility pages that have no FAQ block:
 * a typed WebPage node (CollectionPage, AboutPage, …) + BreadcrumbList,
 * linked to the site-wide Physician node defined in app/layout.tsx.
 * Pages WITH an FAQ should use LandingFaq (pageType prop) instead, which
 * emits the same nodes plus FAQPage — never both on one page.
 */
export function PageSchema({
    pageType = "WebPage",
    name,
    path,
    description,
    extraNodes = [],
}: {
    pageType?: string;
    name: string;
    /** Path starting with "/". */
    path: string;
    description?: string;
    extraNodes?: Record<string, unknown>[];
}) {
    const url = `${siteOrigin}${path}`;
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": pageType,
                        "@id": `${url}#webpage`,
                        "url": url,
                        "name": name,
                        ...(description ? { "description": description } : {}),
                        "inLanguage": "en-IN",
                        "isPartOf": { "@type": "WebSite", "url": `${siteOrigin}/` },
                        "about": { "@id": `${siteOrigin}/#physician` },
                        "breadcrumb": { "@id": `${url}#breadcrumb` },
                    },
                    {
                        "@type": "BreadcrumbList",
                        "@id": `${url}#breadcrumb`,
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteOrigin}/` },
                            { "@type": "ListItem", "position": 2, "name": name, "item": url },
                        ],
                    },
                    ...extraNodes,
                ],
            }}
        />
    );
}
