import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/lib/data";

/**
 * Engaging, scroll-based testimonials showcase — direction B (bold modern).
 *
 * Layout, top to bottom:
 *   1. Featured pull-quote on a dark slate canvas with cyan/blue glows.
 *   2. Stats strip (5/5 average · 100% recommend · 10K+ patients consulted).
 *   3. Auto-scrolling marquee, left → right, light cards.
 *   4. Auto-scrolling marquee, right → left, dark cards.
 *   5. Tilt-on-hover grid of all testimonials in full.
 *
 * The two marquees use the existing `animate-scroll` keyframe from
 * tailwind.config.ts and pause on hover for accessibility.
 *
 * Original testimonial copy is preserved verbatim.
 */
export function TestimonialsShowcase() {
    const featured = testimonialsData[0]; // Arjun R. — longest, most descriptive

    // For seamless infinite scroll the array is duplicated; the keyframe shifts
    // -50% so when the first half ends, the second half is exactly in place.
    const marqueeData = [...testimonialsData, ...testimonialsData];

    return (
        <>
            {/* ───────── 1. Featured quote on dark surface ───────── */}
            <section className="relative overflow-hidden bg-slate-950 text-white py-20 lg:py-28">
                <div
                    aria-hidden
                    className="hero-blob-pulse absolute -top-32 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-500/25 blur-[110px] pointer-events-none"
                />
                <div
                    aria-hidden
                    className="hero-blob-pulse-slow absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[110px] pointer-events-none"
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="max-w-4xl mx-auto text-center">
                        <Quote
                            aria-hidden
                            className="h-16 w-16 lg:h-20 lg:w-20 text-cyan-300/40 mx-auto mb-6 rotate-180"
                        />
                        <blockquote>
                            <p className="font-heading font-bold text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.2] tracking-[-0.025em]">
                                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                    &ldquo;{featured.quote}&rdquo;
                                </span>
                            </p>
                            <footer className="mt-10 flex flex-col items-center gap-3">
                                <div className="flex gap-0.5 text-yellow-300">
                                    {Array.from({ length: featured.rating }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-300"
                                            aria-hidden
                                        />
                                    ))}
                                </div>
                                <div>
                                    <div className="font-bold text-white text-base">
                                        {featured.name}
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.18em] text-cyan-300 mt-1">
                                        {featured.condition}
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* ───────── 2. Stats strip ───────── */}
            <section className="bg-white border-b border-slate-100 py-10 lg:py-14">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="font-heading font-bold text-3xl lg:text-4xl tracking-[-0.03em] text-slate-900">
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    5/5
                                </span>
                            </div>
                            <div className="mt-2 text-[11px] uppercase tracking-[0.16em] font-semibold text-slate-500">
                                Average rating
                            </div>
                        </div>
                        <div className="text-center border-x border-slate-200">
                            <div className="font-heading font-bold text-3xl lg:text-4xl tracking-[-0.03em] text-slate-900">
                                100
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    %
                                </span>
                            </div>
                            <div className="mt-2 text-[11px] uppercase tracking-[0.16em] font-semibold text-slate-500">
                                Would recommend
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="font-heading font-bold text-3xl lg:text-4xl tracking-[-0.03em] text-slate-900">
                                10K
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    +
                                </span>
                            </div>
                            <div className="mt-2 text-[11px] uppercase tracking-[0.16em] font-semibold text-slate-500">
                                Patients consulted
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ───────── 3. Marquee row, scrolling left ───────── */}
            <section
                aria-label="Patient stories — marquee"
                className="relative bg-slate-50 py-16 overflow-hidden group"
            >
                <div className="flex w-max gap-5 animate-scroll group-hover:[animation-play-state:paused]">
                    {marqueeData.map((t, i) => (
                        <article
                            key={`m1-${i}`}
                            className="w-[340px] sm:w-[400px] shrink-0 bg-white rounded-3xl border border-slate-200 p-7 flex flex-col"
                        >
                            <div className="flex gap-0.5 text-yellow-500 mb-4">
                                {Array.from({ length: t.rating }).map((_, j) => (
                                    <Star
                                        key={j}
                                        className="h-4 w-4 fill-yellow-500"
                                        aria-hidden
                                    />
                                ))}
                            </div>
                            <Quote
                                aria-hidden
                                className="h-6 w-6 text-cyan-400/60 rotate-180 mb-3"
                            />
                            <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <footer className="pt-4 border-t border-slate-100">
                                <div className="font-bold text-slate-900">{t.name}</div>
                                <div className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mt-1">
                                    {t.condition}
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>
                {/* edge fade masks */}
                <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"
                />
                <div
                    aria-hidden
                    className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"
                />
            </section>

            {/* ───────── 4. Marquee row, scrolling right (reverse), dark cards ───────── */}
            <section
                aria-label="Patient stories — marquee reverse"
                className="relative bg-slate-50 pb-16 overflow-hidden group"
            >
                <div
                    className="flex w-max gap-5 animate-scroll group-hover:[animation-play-state:paused]"
                    style={{ animationDirection: "reverse" }}
                >
                    {marqueeData.map((t, i) => (
                        <article
                            key={`m2-${i}`}
                            className="relative w-[340px] sm:w-[400px] shrink-0 rounded-3xl bg-slate-950 text-white p-7 flex flex-col overflow-hidden"
                        >
                            <div
                                aria-hidden
                                className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
                            />
                            <div className="relative">
                                <div className="flex gap-0.5 text-yellow-300 mb-4">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star
                                            key={j}
                                            className="h-4 w-4 fill-yellow-300"
                                            aria-hidden
                                        />
                                    ))}
                                </div>
                                <Quote
                                    aria-hidden
                                    className="h-6 w-6 text-cyan-300/60 rotate-180 mb-3"
                                />
                                <p className="text-blue-100/85 leading-relaxed mb-6 flex-grow">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <footer className="pt-4 border-t border-white/10">
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-xs uppercase tracking-[0.14em] text-cyan-300 font-semibold mt-1">
                                        {t.condition}
                                    </div>
                                </footer>
                            </div>
                        </article>
                    ))}
                </div>
                <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"
                />
                <div
                    aria-hidden
                    className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"
                />
            </section>

            {/* ───────── 5. Tilt-on-hover grid (every story, full quote) ───────── */}
            <section className="bg-white py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="font-heading font-bold text-3xl lg:text-[2.5rem] tracking-[-0.03em] text-slate-950 leading-[1.1]">
                            Every story,{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                in their own words.
                            </span>
                        </h2>
                        <p className="mt-4 text-slate-600 leading-relaxed">
                            Hover any card to read it — and to see the rest pause for you.
                        </p>
                    </div>

                    <div
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        style={{ perspective: "1000px" }}
                    >
                        {testimonialsData.map((t) => (
                            <article
                                key={t.id}
                                className="relative bg-white p-7 rounded-3xl border border-slate-200 hover:border-cyan-300 hover:shadow-[0_24px_48px_-24px_rgba(8,145,178,0.35)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="flex gap-0.5 text-yellow-500 mb-4">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star
                                            key={j}
                                            className="h-4 w-4 fill-yellow-500"
                                            aria-hidden
                                        />
                                    ))}
                                </div>
                                <Quote
                                    aria-hidden
                                    className="h-7 w-7 text-cyan-400/60 rotate-180 mb-3"
                                />
                                <p className="text-slate-700 leading-relaxed mb-7 flex-grow italic">
                                    &ldquo;{t.quote}&rdquo;
                                </p>
                                <footer className="mt-auto pt-5 border-t border-slate-100 flex items-center gap-3">
                                    <div className="h-11 w-11 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-bold text-sm">
                                        {t.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .slice(0, 2)
                                            .join("")}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900">
                                            {t.name}
                                        </div>
                                        <div className="text-xs uppercase tracking-[0.14em] text-blue-700 font-semibold mt-0.5">
                                            {t.condition}
                                        </div>
                                    </div>
                                </footer>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
