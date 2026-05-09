import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { treatments } from "@/lib/treatments";

/**
 * Editorial-clinical treatments grid — direction A.
 * Editorial section heading, thin-bordered white cards, serif card titles.
 */
export function TreatmentsGridEditorial() {
    return (
        <section
            className="py-20 lg:py-28 bg-white"
            aria-labelledby="home-treatments-editorial-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="max-w-3xl mb-12 lg:mb-16">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                        <span aria-hidden className="h-px w-8 bg-blue-800/60" />
                        Non-surgical · Regenerative
                    </div>
                    <h2
                        id="home-treatments-editorial-heading"
                        className="font-editorial text-4xl lg:text-5xl tracking-[-0.015em] text-gray-900 leading-[1.1] mt-4"
                    >
                        Modern, non-surgical orthopedic treatments.
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Pain reduction, better mobility, and a real plan to delay or avoid
                        surgery where medically appropriate — at our clinics in Attibele
                        and HSR Layout, serving Electronic City and South Bengaluru.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
                    {treatments.map((t, idx) => (
                        <FadeIn key={t.slug} delay={idx * 0.06} className="h-full">
                            <Link
                                href={`/treatments/${t.slug}`}
                                className="group flex flex-col h-full bg-white p-8 lg:p-9 hover:bg-blue-50/40 transition-colors"
                            >
                                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-blue-800 mb-5">
                                    {t.bodyLocation ?? "Orthopedic"}
                                </div>

                                <h3 className="font-editorial text-2xl lg:text-[1.625rem] leading-tight text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                    {t.title}
                                </h3>

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {t.shortDesc}
                                </p>

                                <div className="flex items-center text-blue-900 font-semibold text-sm pt-5 border-t border-gray-100 group-hover:border-blue-200 transition-colors">
                                    Read treatment guide
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4} className="mt-12 text-center">
                    <Button
                        variant="ghost"
                        className="h-12 px-2 text-base rounded-none text-blue-900 underline underline-offset-[6px] decoration-blue-900/30 hover:decoration-blue-900 hover:bg-transparent font-medium"
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
