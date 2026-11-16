import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import { getRelatedPosts } from "@/lib/related-posts";

interface RelatedPostsProps {
    currentSlug: string;
    /** Kept for call-site compatibility; selection is now topic-scored in lib/related-posts.ts. */
    category?: string;
}

export function RelatedPosts({ currentSlug }: RelatedPostsProps) {
    const related = getRelatedPosts(currentSlug);

    if (related.length === 0) return null;

    return (
        <div className="mt-20">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
                Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                {related.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                        <div className="aspect-video relative w-full overflow-hidden bg-gray-100">
                            <Image
                                src={("image" in post && post.image) || "/blog_image.jpg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-2 text-xs font-medium text-primary mb-3">
                                <Tag className="h-3 w-3" /> {post.category}
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                {post.title}
                            </h4>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <span className="mt-auto text-sm font-semibold text-primary flex items-center">
                                Read Article <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
