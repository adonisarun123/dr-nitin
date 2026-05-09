import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { treatments } from "@/lib/treatments";

/**
 * Bold modern treatments grid — direction B.
 * Section heading uses gradient accent on a key word; cards have a glassy
 * hover state with cyan accent border and a chevron animation.
 */
export function TreatmentsGridBold() {
    return (
        <section
            className="relative py-24 lg:py-32 bg-slate-50"
            aria-labelledby="home-treatments-bold-heading"
        >
            {/* radial spotlight from top */}
            <div
                aria-hidden
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] bg-gradient-to-b from-cyan-100/60 to-transparent blur-3xl pointer-events-none"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <FadeIn className="max-w-3xl mb-14 lg:mb-20">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 mb-5">
                        <Sparkles className="h-3.5 w-3.5 text-cyan-500" aria-hidden />
                        Non-surgical · regenerative
                    </div>
                    <h2
                        id="home-treatments-bold-heading"
                        className="font-heading font-bold text-4xl lg:text-[3.25rem] tracking-[-0.03em] text-slate-950 leading-[1.05]"
                    >
                        Modern, non-surgical{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            orthopedic care.
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Pain reduction, better mobility, and a real plan to delay or avoid
                        surgery where medically appropriate. Two clinics in Bengaluru,
                        serving Electronic City and South Bengaluru.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {treatments.map((t, idx) => (
                        <FadeIn key={t.slug} delay={idx * 0.05} className="h-full">
                            <Link
                                href={`/treatments/${t.slug}`}
                                className="group relative flex flex-col h-full bg-white p-7 lg:p-8 rounded-3xl border border-slate-200 hover:border-cyan-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(8,145,178,0.25)] transition-all duration-300 overflow-hidden"
                            >
                                {/* hover gradient sweep */}
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                />

                                <div className="relative">
                                    <div className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 px-3 py-1 text-[11px] uppercase tracking-[0.14em] font-semibold text-blue-700 mb-5">
                                        {t.bodyLocation ?? "Orthopedic"}
                                    </div>

                                    <h3 className="font-heading font-bold text-xl lg:text-[1.375rem] tracking-[-0.02em] text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                                        {t.title}
                                    </h3>

                                    <p className="text-slate-600 mb-7 flex-grow leading-relaxed text-[15px]">
                                        {t.shortDesc}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm">
                                        Read treatment guide
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4} className="mt-14 text-center">
                    <Button
                        size="lg"
                        className="h-12 px-7 text-base rounded-full bg-slate-950 hover:bg-slate-800 text-white shadow-[0_0_0_1px_rgba(8,47,73,0.1)] hover:translate-y-0 font-semibold"
                        asChild
                    >
                        <Link href="/treatments">
                            View all treatments
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                        </Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
