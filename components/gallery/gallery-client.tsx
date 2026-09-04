"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

export interface GalleryImage {
    src: string;
    alt: string;
    /** Optional detail shown in the lightbox (grid tiles stay a clean collage). */
    caption?: string;
    /** Category label used for the filter tabs, e.g. "Clinic & Facilities". */
    category: string;
}

/**
 * Cycled aspect ratios that give the masonry columns their staggered,
 * editorial rhythm (inspired by the design reference) without needing each
 * image's intrinsic dimensions. The lightbox always shows the full,
 * un-cropped image via object-contain.
 */
const MASONRY_ASPECTS = [
    "aspect-[4/5]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[3/4]",
    "aspect-[5/4]",
    "aspect-[4/3]",
];

/**
 * Interactive gallery grid — category filter tabs + click-to-open lightbox.
 *
 * Kept as a client component so the page (`app/gallery/page.tsx`) can stay a
 * server component that owns metadata and simply passes the image data down.
 * Visual language mirrors the rest of the site: rounded cards, hover lift +
 * image zoom, blue primary / orange accent, and the shared <FadeIn> reveal.
 */
export function GalleryClient({
    images,
    categoryOrder,
}: {
    images: GalleryImage[];
    /** Optional explicit ordering for the filter tabs. */
    categoryOrder?: string[];
}) {
    const ALL = "All";

    const categories = useMemo(() => {
        const present = Array.from(new Set(images.map((i) => i.category)));
        const ordered = categoryOrder
            ? [
                  ...categoryOrder.filter((c) => present.includes(c)),
                  ...present.filter((c) => !categoryOrder.includes(c)),
              ]
            : present;
        return [ALL, ...ordered];
    }, [images, categoryOrder]);

    const [active, setActive] = useState<string>(ALL);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered = useMemo(
        () => (active === ALL ? images : images.filter((i) => i.category === active)),
        [images, active]
    );

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);
    const showPrev = useCallback(
        () =>
            setLightboxIndex((i) =>
                i === null ? i : (i - 1 + filtered.length) % filtered.length
            ),
        [filtered.length]
    );
    const showNext = useCallback(
        () => setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length)),
        [filtered.length]
    );

    // Keyboard navigation + scroll lock while the lightbox is open.
    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            else if (e.key === "ArrowLeft") showPrev();
            else if (e.key === "ArrowRight") showNext();
        };
        window.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [lightboxIndex, closeLightbox, showPrev, showNext]);

    const activeImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

    return (
        <>
            {/* Filter tabs */}
            {categories.length > 2 && (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                type="button"
                                onClick={() => setActive(cat)}
                                aria-pressed={active === cat}
                                className={cn(
                                    "rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200",
                                    active === cat
                                        ? "bg-primary text-white shadow-md shadow-primary/25"
                                        : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Masonry grid — CSS columns flow vertically (no horizontal scroll). */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                    {filtered.map((image, idx) => (
                        <FadeIn
                            key={`${image.src}-${idx}`}
                            delay={(idx % 6) * 0.08}
                            className="group mb-6 break-inside-avoid"
                        >
                            <button
                                type="button"
                                onClick={() => setLightboxIndex(idx)}
                                aria-label={`View larger image: ${image.alt}`}
                                className="block w-full text-left bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                            >
                                <div
                                    className={cn(
                                        "relative overflow-hidden bg-gray-100",
                                        MASONRY_ASPECTS[idx % MASONRY_ASPECTS.length]
                                    )}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="absolute bottom-3 left-3 inline-block px-2.5 py-1 text-[11px] font-semibold text-white bg-primary/90 rounded-full opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        {image.category}
                                    </span>
                                    <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-primary shadow-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <ZoomIn className="h-5 w-5" aria-hidden />
                                    </span>
                                </div>
                            </button>
                        </FadeIn>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <p className="text-center text-gray-500 py-16">No images in this category yet.</p>
                )}
            </div>

            {/* Lightbox */}
            {activeImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm p-4 sm:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={activeImage.alt}
                    onClick={closeLightbox}
                >
                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close"
                        className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <X className="h-6 w-6" aria-hidden />
                    </button>

                    {/* Counter */}
                    {filtered.length > 1 && (
                        <span className="absolute top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-white/70">
                            {lightboxIndex! + 1} / {filtered.length}
                        </span>
                    )}

                    {/* Prev / Next */}
                    {filtered.length > 1 && (
                        <>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrev();
                                }}
                                aria-label="Previous image"
                                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronLeft className="h-7 w-7" aria-hidden />
                            </button>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                                aria-label="Next image"
                                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                            >
                                <ChevronRight className="h-7 w-7" aria-hidden />
                            </button>
                        </>
                    )}

                    {/* Image + caption */}
                    <figure
                        className="relative flex max-h-full w-full max-w-4xl flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-[70vh] w-full">
                            <Image
                                src={activeImage.src}
                                alt={activeImage.alt}
                                fill
                                className="object-contain"
                                sizes="(max-width: 896px) 100vw, 896px"
                                priority
                            />
                        </div>
                        <figcaption className="mt-4 max-w-2xl text-center">
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-100 bg-white/10 rounded-full">
                                {activeImage.category}
                            </span>
                            {activeImage.caption && (
                                <p className="mt-2 text-sm text-blue-50/90 leading-relaxed">{activeImage.caption}</p>
                            )}
                        </figcaption>
                    </figure>
                </div>
            )}
        </>
    );
}
