/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                // No Bad Science logo (Dr. Nitin is their Clinical Advisor) — /about bio card.
                protocol: 'https',
                hostname: 'nobadscience.in',
                pathname: '/cdn/shop/files/**',
            },
        ],
        // Allow locally-stored SVG headers used by the treatment cluster
        // blog posts. Sandboxed CSP keeps this safe.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        return [
            // Old single-clinic ad landing page → the Attibele landing page.
            // Previously this pointed at /orthopedic-doctor-in-hsr-layout, which
            // sent Attibele-intent signals (ads, backlinks, indexed entries) to
            // the wrong locality page. /orthopedic-doctor-attibele now exists
            // and is the correct 301 target.
            {
                source: '/orthopedic-attibele',
                destination: '/orthopedic-doctor-attibele',
                permanent: true,
            },
            // Legacy WordPress-era URL still indexed in Google (confirmed via
            // SERP) that currently 404s and leaks link equity. Next.js matches
            // with or without trailing slash. Add more entries here as the GSC
            // "Not found (404)" report surfaces additional legacy paths.
            {
                source: '/why-are-sports-injuries-so-common',
                destination: '/blog/why-are-sports-injuries-so-common-and-how-do-we-treat-them',
                permanent: true,
            },
            {
                source: '/blog/slap-tear-shoulder-surgery-recovery-dos-and-donts-timeline-guide',
                destination: '/blog/slap-tear-shoulder-surgery-recovery-dos-and-donts',
                permanent: true,
            },
            {
                source: '/blog/hip-resurfacing-vs-total-hip-replacement-india-comparison-guide',
                destination: '/blog/hip-resurfacing-vs-total-hip-replacement',
                permanent: true,
            },
            // The cost blog post was upgraded to a dedicated conversion money
            // page (Jul 2026). 301 transfers its indexed equity; the post entry
            // was removed from lib/data.ts so it no longer appears in the blog
            // index or sitemap.
            {
                source: '/blog/knee-replacement-cost-in-bangalore',
                destination: '/knee-replacement-cost-bangalore',
                permanent: true,
            },
            // Nov 2026: duplicate-post merges. In each pair the URL with more
            // Search Console impressions (Aug–Nov 2026) was kept; the unique
            // sections of the dropped post were moved into it before deletion.
            {
                source: '/blog/rotator-cuff-surgery-cost-in-india',
                destination: '/blog/rotator-cuff-surgery-cost-india',
                permanent: true,
            },
            {
                source: '/blog/endoscopic-spine-surgery-in-india',
                destination: '/blog/endoscopic-spine-surgery-india',
                permanent: true,
            },
            {
                source: '/blog/frozen-shoulder-treatment-without-surgery-in-india',
                destination: '/blog/frozen-shoulder-treatment-without-surgery-india',
                permanent: true,
            },
            {
                source: '/blog/compression-fracture-spine-treatment-india',
                destination: '/blog/compression-fracture-spine-treatment',
                permanent: true,
            },
            {
                source: '/blog/common-causes-of-meniscus-tears-and-acl-injuries',
                destination: '/blog/common-causes-of-meniscus-tears-in-active-adults',
                permanent: true,
            },
            // Nov 2026: this post targeted the same intent as the Attibele money
            // page and GSC left it "crawled, not indexed". Consolidated into it.
            {
                source: '/blog/best-orthopedic-surgeon-in-attibele',
                destination: '/orthopedic-doctor-attibele',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
