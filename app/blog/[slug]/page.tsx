import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { blogSeoOverrides } from "@/lib/seo-overrides";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Clock, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { siteOrigin } from "@/lib/site-url";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { SocialShare } from "@/components/blog/social-share";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { FadeIn } from "@/components/animations/fade-in";
import "../blog-content.css";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    // Per-slug SEO overrides live in lib/seo-overrides.ts so the route handler
    // stays focused on rendering. New posts that don't need an override will
    // fall through to the post's own title + excerpt.
    const override = blogSeoOverrides[params.slug];
    if (override) {
        return {
            title: { absolute: override.title },
            description: override.description,
            alternates: { canonical: `${siteOrigin}/blog/${params.slug}` },
        };
    }
    // No override: fall back to the post's own title + excerpt.
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: `${siteOrigin}/blog/${post.slug}` },
    };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Estimate reading time (approx 200 words per minute)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Normalise the human-readable date string to ISO 8601 for schema.org consumers.
    // Falls back to the original string if parsing fails (older posts use formats like "Mar 2, 2026").
    const parsedDate = new Date(post.date);
    const isoDate = Number.isNaN(parsedDate.getTime())
        ? post.date
        : parsedDate.toISOString().split("T")[0];

    // Re-usable author/publisher nodes so both the MedicalWebPage and
    // MedicalScholarlyArticle schemas can reference the same entities.
    const authorNode = {
        "@type": "Physician",
        "name": "Dr. Nitin N Sunku",
        "url": `${siteOrigin}/about`,
        "medicalSpecialty": ["Orthopedic", "SportsMedicine"],
    };

    const publisherNode = {
        "@type": "Organization",
        "name": "Dr. Nitin N Sunku Orthopedics",
        "logo": {
            "@type": "ImageObject",
            "url": `${siteOrigin}/logo.png`,
        },
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image ? [post.image] : undefined,
        "url": `${siteOrigin}/blog/${post.slug}`,
        "author": authorNode,
        "publisher": publisherNode,
        "datePublished": isoDate,
        "dateModified": isoDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteOrigin}/blog/${post.slug}`,
        },
    };

    // Additional Article (MedicalScholarlyArticle) schema. Google's article
    // rich-result eligibility prefers Article subtypes over MedicalWebPage,
    // and the dual emission lets crawlers pick whichever they support.
    const medicalArticleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalScholarlyArticle",
        "headline": post.title,
        "name": post.title,
        "description": post.excerpt,
        "image": post.image ? [post.image] : undefined,
        "url": `${siteOrigin}/blog/${post.slug}`,
        "author": authorNode,
        "publisher": publisherNode,
        "datePublished": isoDate,
        "dateModified": isoDate,
        "inLanguage": "en-IN",
        "articleSection": post.category,
        "wordCount": wordCount,
        "timeRequired": `PT${readingTime}M`,
        "isAccessibleForFree": true,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteOrigin}/blog/${post.slug}`,
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteOrigin}/` },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteOrigin}/blog` },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `${siteOrigin}/blog/${post.slug}` }
        ]
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <ReadingProgress />
            <JsonLd data={articleSchema} />
            <JsonLd data={medicalArticleSchema} />
            <JsonLd data={breadcrumbSchema} />

            {/* Immersive Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Abstract Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-blue-200 mb-6">
                            <span className="bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-blue-100 flex items-center">
                                <Tag className="h-3 w-3 mr-2" /> {post.category}
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" /> {readingTime} min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight max-w-4xl text-white">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white font-bold">
                                N
                            </div>
                            <div>
                                <div className="font-bold">Dr. Nitin N Sunku</div>
                                <div className="text-sm text-gray-400 flex items-center gap-2">
                                    <Calendar className="h-3 w-3" /> {post.date}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Content Layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Sidebar (Social Share) */}
                    <aside className="lg:w-24 shrink-0">
                        <div className="sticky top-32">
                            <SocialShare title={post.title} slug={post.slug} />
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <article className="flex-grow max-w-3xl">
                        <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-10 border border-slate-200 rounded-2xl bg-slate-50/80 p-6">
                            <p>
                                This article is for general education and does not replace an in-person
                                assessment, examination, or imaging. Everyone&apos;s injury pattern, medical
                                history, and goals differ; use what you read here to prepare better questions
                                for your doctor.
                            </p>
                            <p>
                                Dr. Nitin N Sunku is a consultant orthopedic and sports medicine surgeon. He
                                sees patients at <strong>Raghava Multispeciality Hospital, Attibele</strong>, on
                                Sarjapura–Attibele Road, and at <strong>Health Nest Hospital, HSR Layout</strong>,
                                Bengaluru. If pain is rapidly worsening, you cannot bear weight, you develop
                                numbness or weakness in a limb, or you have fever after an injury, seek urgent
                                medical care. For non-emergency evaluation and individualised treatment options,
                                book through the contact page.
                            </p>
                            <p>
                                Topics across this blog include knee ligament and meniscus problems, shoulder
                                pain and instability, hip and knee arthritis, fracture recovery principles, spine
                                symptoms when urgent causes have been excluded, running and tendon overuse
                                issues, and what to expect from arthroscopy or joint replacement discussions. If
                                you are comparing sources online, cross-check dates and always confirm advice
                                with an in-person clinician.
                            </p>
                        </div>
                        <FadeIn delay={0.2}>
                            {/* Lead/Excerpt */}
                            <p className="text-xl md:text-2xl text-slate-600 mb-12 font-medium leading-relaxed border-l-4 border-primary pl-6 italic bg-blue-50/30 py-4 rounded-r-lg">
                                {post.excerpt}
                            </p>

                            {/* Blog Content with Custom Styling */}
                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </FadeIn>

                        {/* Author Bio */}
                        <FadeIn delay={0.3}>
                            <AuthorBio />
                        </FadeIn>

                        {/* CTA Box */}
                        <FadeIn delay={0.4} className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Experiencing symptoms?</h3>
                                <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Don't let pain hold you back. Schedule a comprehensive evaluation with Dr. Nitin today.</p>
                                <Button size="lg" variant="white" className="h-14 px-8 text-primary font-bold" asChild>
                                    <Link href="/contact">Book Appointment <ChevronRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </FadeIn>

                    </article>
                </div>

                {/* Related Posts */}
                <FadeIn delay={0.5}>
                    <RelatedPosts currentSlug={post.slug} category={post.category} />
                </FadeIn>
            </div>
        </main>
    );
}
