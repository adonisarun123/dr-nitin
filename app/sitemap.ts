import { MetadataRoute } from 'next'
import { servicesData, blogPosts } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://drnitinsunkuortho.com'

    const routes = [
        '',
        '/about',
        '/services',
        '/testimonials',
        '/gallery',
        '/team',
        '/blog',
        '/contact',
        '/privacy-policy',
        '/terms',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
    }))

    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const blogRoutes = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...serviceRoutes, ...blogRoutes]
}
