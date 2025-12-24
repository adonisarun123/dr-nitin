import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Clock, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { SocialShare } from "@/components/blog/social-share";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { FadeIn } from "@/components/animations/fade-in";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
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

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": "Dr. Nitin N Sunku"
        },
        "datePublished": post.date,
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <ReadingProgress />
            <JsonLd data={articleSchema} />

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
                        <FadeIn delay={0.2} className="prose prose-lg md:prose-xl prose-slate max-w-none
                            prose-headings:font-heading prose-headings:font-bold prose-headings:text-gray-900
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                            prose-a:text-primary prose-a:no-underline hover:prose-a:text-blue-700 hover:prose-a:underline
                            prose-strong:text-gray-900 prose-strong:font-semibold
                            prose-ul:my-6 prose-ul:space-y-3
                            prose-ol:my-6 prose-ol:space-y-3
                            prose-li:text-gray-700 prose-li:leading-relaxed prose-li:text-lg
                            prose-li:marker:text-primary
                            prose-img:rounded-3xl prose-img:shadow-lg
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
                        ">
                            <p className="lead text-xl md:text-2xl text-slate-600 mb-10 font-medium leading-relaxed border-l-4 border-primary pl-6 italic">
                                {post.excerpt}
                            </p>

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
