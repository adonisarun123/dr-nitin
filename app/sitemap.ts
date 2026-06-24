import { MetadataRoute } from 'next'
import { servicesData, blogPosts } from '@/lib/data'
import { treatments } from '@/lib/treatments'
import { siteOrigin } from '@/lib/site-url'

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
        { path: '/orthopedic-doctor-in-hsr-layout', priority: 0.8 },
        // Condition-specific ads landing page (knee pain). High commercial intent.
        { path: '/knee-pain-bangalore', priority: 0.8 },
        // Condition-specific ads landing page (sports injury). Leans on the Bengaluru FC team-doctor credential.
        { path: '/sports-injury-doctor-bangalore', priority: 0.8 },
        // Condition-specific ads landing page (back pain / spine). Conservative-first positioning.
        { path: '/back-pain-bangalore', priority: 0.8 },
        // Local-intent ads landing page for the Attibele primary clinic. Mirror of /orthopedic-doctor-in-hsr-layout for South Bengaluru catchment.
        { path: '/orthopedic-doctor-attibele', priority: 0.8 },
        { path: '/privacy-policy', priority: 0.3 },
        { path: '/terms', priority: 0.3 },
    ]

    const routes = staticRoutes.map(({ path, priority }) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority,
    }))

    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const treatmentRoutes = treatments.map((treatment) => ({
        url: `${baseUrl}/treatments/${treatment.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...serviceRoutes, ...treatmentRoutes, ...blogRoutes]
}
