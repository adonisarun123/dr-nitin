import { MetadataRoute } from 'next'
import { servicesData, blogPosts } from '@/lib/data'
import { treatments } from '@/lib/treatments'
import { siteOrigin } from '@/lib/site-url'

// Stable lastModified for routes without their own date. Previously every URL
// used `new Date()`, so every build claimed the entire site had just changed —
// Google learns to distrust and ignore lastmod when it's always "now".
// Bump this date only when site-wide content genuinely changes.
const SITE_CONTENT_UPDATED = new Date('2026-09-20')

/** Parse blog-post display dates like "Mar 2, 2026"; fall back to the site date. */
function postDate(dateStr?: string): Date {
    if (dateStr) {
        const parsed = new Date(dateStr)
        if (!Number.isNaN(parsed.getTime())) return parsed
    }
    return SITE_CONTENT_UPDATED
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteOrigin

    // Per-route priority so the signal is relative (home highest, legal lowest)
    // rather than a flat 1.0 across everything.
    const staticRoutes: { path: string; priority: number }[] = [
        { path: '', priority: 1.0 },
        { path: '/about', priority: 0.9 },
        { path: '/services', priority: 0.9 },
        { path: '/treatments', priority: 0.9 },
        { path: '/book-appointment', priority: 0.9 },
        { path: '/contact', priority: 0.8 },
        { path: '/practice', priority: 0.8 },
        { path: '/awards', priority: 0.7 },
        { path: '/publications', priority: 0.7 },
        { path: '/testimonials', priority: 0.7 },
        { path: '/gallery', priority: 0.6 },
        { path: '/team', priority: 0.6 },
        { path: '/blog', priority: 0.7 },
        // Local-intent ads landing page (HSR Layout). Targets long-tail local
        // queries ("orthopedic doctor HSR Layout") that don't compete with
        // /book-appointment or the homepage.
        // Condition-specific ads landing page (knee pain). High commercial intent.
        { path: '/knee-pain-bangalore', priority: 0.8 },
        // Condition-specific ads landing page (sports injury). Leans on the Bengaluru FC team-doctor credential.
        { path: '/sports-injury-doctor-bangalore', priority: 0.8 },
        // Condition-specific ads landing page (back pain / spine). Conservative-first positioning.
        { path: '/back-pain-bangalore', priority: 0.8 },
        // Local-intent ads landing page for the Attibele primary clinic. Mirror of /orthopedic-doctor-in-hsr-layout for South Bengaluru catchment.
        { path: '/orthopedic-doctor-attibele', priority: 0.8 },
        // Fracture / trauma / accident-care money page for the Attibele hospital.
        // Targets urgent local intent ("fracture treatment near me") across the
        // Attibele–Bommasandra–Jigani industrial belt.
        { path: '/fracture-treatment-attibele', priority: 0.8 },
        // Geo catchment page: Electronic City (IT-corridor framing, ~20 min from
        // the Attibele clinic). Distinct content, not a mirror of the Attibele page.
        { path: '/orthopedic-doctor-electronic-city', priority: 0.8 },
        // Geo catchment page: Chandapura with Anekal folded in-page (weakest
        // competing SERP of the corridor — directories only as of Jul 2026).
        { path: '/orthopedic-doctor-chandapura', priority: 0.8 },
        // Commercial cost money page. Replaces the former blog post
        // /blog/knee-replacement-cost-in-bangalore (301 in next.config.mjs).
        { path: '/knee-replacement-cost-bangalore', priority: 0.8 },
        // Tier 2 condition landing pages (Jul 2026) — mirror the
        // knee-pain/back-pain pattern: FAQ schema, both clinics, per-page
        // lead source. Funneled from matching blog posts via internal-links.
        { path: '/shoulder-pain-bangalore', priority: 0.8 },
        { path: '/neck-pain-bangalore', priority: 0.8 },
        { path: '/hip-pain-bangalore', priority: 0.8 },
        { path: '/arthritis-treatment-bangalore', priority: 0.8 },
        { path: '/acl-reconstruction-bangalore', priority: 0.8 },
        // Tier 3 (Jul 2026): cross-border catchment page (Hosur, TN side),
        // pediatric condition page, and the insurance/cashless conversion
        // support page (generic — no insurer names until the hospital's
        // empanelment list is confirmed).
        { path: '/orthopedic-doctor-near-hosur', priority: 0.8 },
        { path: '/pediatric-orthopedic-bangalore', priority: 0.8 },
        { path: '/insurance-cashless-orthopedic-treatment', priority: 0.7 },
        // Aug 2026: the HSR Layout page was flipped from ads-only noindex to
        // indexed — it is now the site's only organic page for the HSR clinic.
        // The other HSR / near-me variants stay noindex so nothing cannibalises it.
        { path: '/orthopedic-doctor-in-hsr-layout', priority: 0.8 },
        // Aug 2026 money pages: spine (slipped disc) and foot/ankle — two body
        // regions with orphaned blog clusters and no commercial page until now.
        { path: '/slip-disc-treatment-bangalore', priority: 0.8 },
        { path: '/foot-ankle-pain-bangalore', priority: 0.8 },
        // Aug 12 2026 batch. Four money pages chosen because their page-one
        // SERPs are made up of individual-surgeon sites rather than hospital
        // chains or aggregators, and because each closes an orphaned blog
        // cluster that previously funnelled nowhere.
        //  - PRP hub: 13 regenerative posts had no commercial parent; the four
        //    /treatments/* pages it links down to are all knee-scoped.
        //  - Hip cost: sibling of /knee-replacement-cost-bangalore; 3 hip cost
        //    posts were orphaned. PRICING IS UNVERIFIED — see TODO-VERIFY-PRICING.
        //  - Knee arthroscopy: procedure page, deliberately distinct from the
        //    condition framing of /services/meniscal-care and /services/acl-care.
        //  - Frozen shoulder: child of /shoulder-pain-bangalore, diabetes angle.
        { path: '/prp-regenerative-treatment-bangalore', priority: 0.8 },
        { path: '/hip-replacement-cost-bangalore', priority: 0.8 },
        { path: '/knee-arthroscopy-bangalore', priority: 0.8 },
        { path: '/frozen-shoulder-treatment-bangalore', priority: 0.8 },
        // Sep 20 2026 batch: condition × locality money pages for the Attibele /
        // Electronic City corridor (Vijaya Ortho competes on local condition
        // pages; every condition page on this site was previously "-bangalore"),
        // plus the hospital-branding joint replacement page for Attibele.
        { path: '/knee-pain-treatment-electronic-city', priority: 0.8 },
        { path: '/back-neck-pain-doctor-electronic-city', priority: 0.8 },
        { path: '/sports-injury-clinic-electronic-city', priority: 0.8 },
        { path: '/joint-replacement-hospital-attibele', priority: 0.8 },
        { path: '/privacy-policy', priority: 0.3 },
        { path: '/terms', priority: 0.3 },
    ]

    const routes = staticRoutes.map(({ path, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified: SITE_CONTENT_UPDATED,
        changeFrequency: 'monthly' as const,
        priority,
    }))

    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: SITE_CONTENT_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const treatmentRoutes = treatments.map((treatment) => ({
        url: `${baseUrl}/treatments/${treatment.slug}`,
        lastModified: SITE_CONTENT_UPDATED,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: postDate((post as { date?: string }).date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...serviceRoutes, ...treatmentRoutes, ...blogRoutes]
}
