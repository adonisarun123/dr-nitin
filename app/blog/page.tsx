import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { blogPosts } from "@/lib/data";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Ortho Blog"
                description="Expert insights, tips, and updates from Dr. Nitin Sunku on orthopedic health and sports medicine."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full">
                            <div className="aspect-video bg-gray-100 w-full flex items-center justify-center text-gray-400 font-medium">
                                Post Cover Image
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">{post.category}</span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center font-bold text-primary hover:text-primary/80 transition-colors">
                                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
