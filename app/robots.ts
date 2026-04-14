import { MetadataRoute } from 'next'
import { siteOrigin } from '@/lib/site-url'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'],
        },
        sitemap: `${siteOrigin}/sitemap.xml`,
    }
}
