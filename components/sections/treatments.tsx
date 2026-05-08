import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { treatments } from "@/lib/treatments";

/**
 * Homepage section that surfaces the 5 non-surgical / regenerative pillar
 * treatments. Sits ABOVE the existing ServicesGrid so the conservative-first
 * positioning leads the page; surgical services follow below.
 */
export function TreatmentsGrid() {
    return (
        <section
            className="relative py-20 lg:py-28 bg-white"
            aria-labelledby="home-treatments-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide border border-blue-100">
                        <Sparkles className="h-3.5 w-3.5" />
                        Non-Surgical · Regenerative
                    </div>
                    <h2
                        id="home-treatments-heading"
                        className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl"
                    >
                        Modern, non-surgical orthopedic treatments
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                        Pain reduction, better mobility, and a real plan to delay or avoid
                        surgery where medically appropriate — at Attibele and HSR Layout,
                        serving Electronic City and South Bengaluru.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((t, idx) => (
                        <FadeIn key={t.slug} delay={idx * 0.08} className="h-full">
                            <Link
                                href={`/treatments/${t.slug}`}
                                className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                            >
                                <div
                                    className={`inline-flex w-fit items-center justify-center px-3 py-1 rounded-full text-xs font-semibold mb-5 ${t.color}`}
                                >
                                    {t.bodyLocation ?? "Orthopedic"}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {t.title}
                                </h3>

                                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                                    {t.shortDesc}
                                </p>

                                <ul className="space-y-1.5 mb-6 text-sm text-gray-600">
                                    {t.heroBullets.slice(0, 2).map((b) => (
                                        <li key={b} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5} className="mt-16 text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        className="h-14 px-8 rounded-full border-2 border-primary/20 hover:border-primary"
                        asChild
                    >
                        <Link href="/treatments">View All Treatments</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
