"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    image?: string;
    content?: string;
};

const FALLBACK_IMG = "/blog_image.jpg";

function imageOf(post: Post): string {
    return post.image || FALLBACK_IMG;
}

function readingTime(content?: string): number {
    if (!content) return 3;
    const words = content
        .replace(/<[^>]+>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
}

/**
 * Bold modern blog index — direction B.
 *
 * - Featured (most recent in the active filter) renders as a large 2-column
 *   card with a gradient-accent eyebrow, big serif-bold headline, full excerpt,
 *   and a pill CTA.
 * - Category filter chips use slate-950 active state + white inactive cards.
 * - Search input filters by title or excerpt — substring match.
 * - Card grid: aspect-video image with subtle zoom on hover, category + reading
 *   time on the image, title with line-clamp-2 + cyan hover, excerpt with
 *   line-clamp-3, "Read article" arrow link, lift-on-hover with cyan border.
 * - Graceful empty state.
 */
export function BlogGrid({ posts }: { posts: Post[] }) {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [query, setQuery] = useState<string>("");

    const categories = useMemo(
        () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
        [posts]
    );

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { All: posts.length };
        for (const p of posts) {
            counts[p.category] = (counts[p.category] ?? 0) + 1;
        }
        return counts;
    }, [posts]);

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        return posts.filter((p) => {
            const inCategory = activeCategory === "All" || p.category === activeCategory;
            if (!inCategory) return false;
            if (!q) return true;
            return (
                p.title.toLowerCase().includes(q) ||
                p.excerpt.toLowerCase().includes(q)
            );
        });
    }, [posts, activeCategory, query]);

    const featured = filtered[0];
    const rest = filtered.slice(1);

    return (
        <>
            {/* ───────── Filter bar ───────── */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    {/* Category chips */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const active = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    type="button"
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "h-9 px-4 rounded-full text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2",
                                        active
                                            ? "bg-slate-950 text-white shadow-sm"
                                            : "bg-white border border-slate-200 text-slate-700 hover:border-cyan-300 hover:text-blue-700"
                                    )}
                                >
                                    {cat}
                                    <span
                                        className={cn(
                                            "inline-flex items-center justify-center text-[10px] rounded-full px-1.5 min-w-[1.25rem] h-5",
                                            active
                                                ? "bg-white/15 text-white"
                                                : "bg-slate-100 text-slate-600"
                                        )}
                                    >
                                        {categoryCounts[cat] ?? 0}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search */}
                    <div className="relative w-full lg:w-72">
                        <Search
                            aria-hidden
                            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                        />
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search articles…"
                            className="w-full h-10 pl-10 pr-9 rounded-full border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                aria-label="Clear search"
                                className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center h-6 w-6 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                                <X className="h-3.5 w-3.5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* ───────── Empty state ───────── */}
            {filtered.length === 0 && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                    <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
                        <p className="font-heading font-bold text-2xl text-slate-900 mb-2">
                            No articles match.
                        </p>
                        <p className="text-slate-600">
                            Try a different category or clear the search.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setActiveCategory("All");
                                setQuery("");
                            }}
                            className="mt-6 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                        >
                            Reset filters
                        </button>
                    </div>
                </div>
            )}

            {/* ───────── Featured post ───────── */}
            {featured && (
                <article className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <Link
                        href={`/blog/${featured.slug}`}
                        className="group grid lg:grid-cols-12 gap-8 lg:gap-12 rounded-3xl border border-slate-200 bg-white p-5 lg:p-8 hover:border-cyan-300 hover:shadow-[0_24px_48px_-24px_rgba(8,145,178,0.25)] transition-all"
                    >
                        <div className="lg:col-span-7 relative aspect-video lg:aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                            <Image
                                src={imageOf(featured)}
                                alt={featured.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                                Featured
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col py-2 lg:py-4">
                            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                                    {featured.date}
                                </span>
                                <span aria-hidden className="text-slate-300">
                                    ·
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock className="h-3.5 w-3.5" aria-hidden />
                                    {readingTime(featured.content)} min read
                                </span>
                                <span aria-hidden className="text-slate-300">
                                    ·
                                </span>
                                <span className="font-semibold text-blue-700 uppercase tracking-[0.14em] text-[11px]">
                                    {featured.category}
                                </span>
                            </div>
                            <h2 className="font-heading font-bold text-2xl lg:text-[2.25rem] leading-[1.1] tracking-[-0.025em] text-slate-950 mb-4 group-hover:text-blue-700 transition-colors line-clamp-3">
                                {featured.title}
                            </h2>
                            <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-7 flex-grow line-clamp-4">
                                {featured.excerpt}
                            </p>
                            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                                Read full article
                                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                        </div>
                    </Link>
                </article>
            )}

            {/* ───────── Grid of remaining posts ───────── */}
            {rest.length > 0 && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 lg:mt-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                        {rest.map((post) => (
                            <article
                                key={post.slug}
                                className="group bg-white rounded-3xl border border-slate-200 hover:border-cyan-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(8,145,178,0.25)] transition-all duration-300 overflow-hidden flex flex-col h-full"
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="block aspect-video relative overflow-hidden bg-slate-100"
                                >
                                    <Image
                                        src={imageOf(post)}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-800">
                                        {post.category}
                                    </div>
                                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold text-white">
                                        <Clock className="h-3 w-3" aria-hidden />
                                        {readingTime(post.content)} min
                                    </div>
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-3">
                                        <Calendar className="h-3 w-3" aria-hidden />
                                        {post.date}
                                    </div>

                                    <h3 className="font-heading font-bold text-lg lg:text-xl tracking-[-0.015em] text-slate-900 mb-3 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>

                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-5 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="mt-auto inline-flex items-center gap-2 text-blue-700 font-semibold text-sm"
                                    >
                                        Read article
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
