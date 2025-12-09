import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";

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

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
            "@type": "Person",
            "name": "Dr. Nitin N Sunku"
        },
        "datePublished": post.date, // Note: Format should ideally be ISO
    };

    return (
        <main className="min-h-screen pb-20">
            <JsonLd data={articleSchema} />
            <div className="bg-gray-50 py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>

                    <h1 className="text-3xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" /> {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" /> Dr. Nitin N Sunku
                        </span>
                        <span className="flex items-center gap-2">
                            <Tag className="h-4 w-4 text-primary" /> {post.category}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl -mt-12">
                <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100">
                    {/* Placeholder for Cover Image */}
                    <div className="w-full aspect-video bg-gray-100 rounded-2xl mb-10 flex items-center justify-center text-gray-400">
                        Article Cover Image
                    </div>

                    <div className="prose prose-lg prose-blue max-w-none">
                        <p className="lead text-xl text-gray-600 mb-8 font-medium">
                            {post.excerpt}
                        </p>
                        {/* Render HTML content safely */}
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>

                    <div className="mt-16 pt-10 border-t border-gray-100 bg-blue-50/50 p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Experiencing similar symptoms?</h3>
                        <p className="text-gray-600 mb-6">Don't ignore the pain. Consult Dr. Nitin for an expert diagnosis.</p>
                        <Button size="lg" asChild>
                            <Link href="/contact">Book Appointment</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
}
