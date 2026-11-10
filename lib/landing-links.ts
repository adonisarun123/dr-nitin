/**
 * Single source of truth for the root-level landing / money pages.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * Until Aug 2026 the site had 15+ root-level landing pages that were reachable
 * only from `app/sitemap.ts`. The global header and footer never linked to any
 * of them, and the landing pages themselves render `<HideNavigation />` and end
 * in `LandingFooter`, which had no links at all. The result: every money page
 * was a crawl dead-end, and internal link equity never reached them.
 *
 * Consumed by:
 * - components/landing/landing-chrome.tsx  (LandingFooter link grid — covers
 *   every landing page at once, including the noindex ads pages, which are
 *   `follow: true` and therefore still pass equity onward)
 * - components/layout/header.tsx           ("Conditions" dropdown)
 * - components/layout/footer.tsx           ("Conditions" + "Locations" columns)
 *
 * RULES
 * - Only add routes that actually exist under `app/`.
 * - Do NOT add the noindex ads-only pages (/sports-orthopedic-doctor-hsr-layout,
 *   /total-knee-replacement-surgery, /orthopaedic-clinic-near-me,
 *   /bone-doctor-near-me). They are deliberately excluded from the sitemap and
 *   from all internal linking so they cannot cannibalise the indexed pages.
 * - Keep labels short — they render in a 4-column footer grid.
 */

export interface LandingLink {
    label: string;
    href: string;
}

/** Condition / symptom money pages. */
export const CONDITION_LINKS: LandingLink[] = [
    { label: "Knee Pain", href: "/knee-pain-bangalore" },
    { label: "Back Pain", href: "/back-pain-bangalore" },
    { label: "Neck Pain", href: "/neck-pain-bangalore" },
    { label: "Shoulder Pain", href: "/shoulder-pain-bangalore" },
    { label: "Frozen Shoulder", href: "/frozen-shoulder-treatment-bangalore" },
    { label: "Hip Pain", href: "/hip-pain-bangalore" },
    { label: "Foot, Heel & Ankle Pain", href: "/foot-ankle-pain-bangalore" },
    { label: "Slip Disc & Sciatica", href: "/slip-disc-treatment-bangalore" },
    { label: "Arthritis", href: "/arthritis-treatment-bangalore" },
    { label: "Sports Injuries", href: "/sports-injury-doctor-bangalore" },
    { label: "Fractures & Trauma", href: "/fracture-treatment-attibele" },
    { label: "Children's Orthopedics", href: "/pediatric-orthopedic-bangalore" },
];

/** Procedure, surgery and cost money pages — highest commercial intent. */
export const PROCEDURE_LINKS: LandingLink[] = [
    { label: "Knee Arthroscopy", href: "/knee-arthroscopy-bangalore" },
    { label: "ACL Reconstruction", href: "/acl-reconstruction-bangalore" },
    { label: "Knee Replacement Cost", href: "/knee-replacement-cost-bangalore" },
    { label: "Hip Replacement Cost", href: "/hip-replacement-cost-bangalore" },
    { label: "PRP & Regenerative Care", href: "/prp-regenerative-treatment-bangalore" },
    { label: "Insurance & Cashless", href: "/insurance-cashless-orthopedic-treatment" },
];

/** Geo catchment pages. */
export const LOCATION_LINKS: LandingLink[] = [
    { label: "Attibele", href: "/orthopedic-doctor-attibele" },
    { label: "HSR Layout", href: "/orthopedic-doctor-in-hsr-layout" },
    { label: "Electronic City", href: "/orthopedic-doctor-electronic-city" },
    { label: "Chandapura & Anekal", href: "/orthopedic-doctor-chandapura" },
    { label: "Near Hosur", href: "/orthopedic-doctor-near-hosur" },
    // Sep 2026: condition × locality pages for the Attibele / Electronic City corridor.
    { label: "Knee Pain · Electronic City", href: "/knee-pain-treatment-electronic-city" },
    { label: "Back & Neck · Electronic City", href: "/back-neck-pain-doctor-electronic-city" },
    { label: "Sports Injury · Electronic City", href: "/sports-injury-clinic-electronic-city" },
    { label: "Joint Replacement · Attibele", href: "/joint-replacement-hospital-attibele" },
];

/** Flat list — useful for link audits and tests. */
export const ALL_LANDING_LINKS: LandingLink[] = [
    ...CONDITION_LINKS,
    ...PROCEDURE_LINKS,
    ...LOCATION_LINKS,
];
