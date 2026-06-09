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
        ],
        // Allow locally-stored SVG headers used by the treatment cluster
        // blog posts. Sandboxed CSP keeps this safe.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        return [
            // Old single-clinic ad landing page → new dual-clinic landing page.
            // 301 (permanent) so existing Google/Meta ad URLs, backlinks, and
            // any indexed entries transfer ranking signals to the new slug.
            {
                source: '/orthopedic-attibele',
                destination: '/best-orthopedic-doctor',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
