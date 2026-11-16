import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/lib/data";
import { GOOGLE_REVIEWS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT_LABEL } from "@/lib/google-reviews";

/**
 * Homepage testimonials. Copy comes verbatim from real Google reviews via
 * testimonialsData (lib/google-reviews.ts) — never hard-code quotes here.
 */
const CARD_BG = ["bg-indigo-50", "bg-cyan-50", "bg-pink-50"];

function initials(name: string) {
    return name
        .split(/\s+/)
        .map((w) => w[0])
        .join("")
        .replace(/[^A-Za-z]/g, "")
        .slice(0, 2)
        .toUpperCase();
}

export function Testimonials() {
    const [featured, ...rest] = testimonialsData;
    const grid = rest.slice(0, 3);

    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Featured Testimonial */}
                    <div className="relative">
                        <Quote className="absolute -top-10 -left-6 h-24 w-24 text-blue-100 rotate-180" />
                        <blockquote className="relative z-10">
                            <p className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                                &ldquo;{featured.quote}&rdquo;
                            </p>
                            <footer className="mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                        {initials(featured.name)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{featured.name}</div>
                                        <div className="text-sm text-gray-500">{featured.condition} · Google review</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                        <a
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
                        >
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            {GOOGLE_RATING} from {GOOGLE_REVIEW_COUNT_LABEL} Google reviews &rarr;
                        </a>
                    </div>

                    {/* Testimonial Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {grid.map((t, i) => (
                            <div key={t.id} className={`${CARD_BG[i % CARD_BG.length]} p-6 rounded-2xl`}>
                                <div className="flex text-yellow-500 mb-3">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} className="h-4 w-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
                                <div className="font-semibold text-gray-900">- {t.name}</div>
                                <div className="text-xs text-gray-500">{t.condition}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
