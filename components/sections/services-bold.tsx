import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { servicesData } from "@/lib/data";

/**
 * Bold modern homepage services grid — direction B.
 * Uses the existing ServicesGrid copy verbatim, restyled to match the bold
 * design language (gradient accent on the headline, lift-on-hover cards
 * with cyan border, pill outline CTA at the bottom).
 */
export function ServicesGridBold() {
    return (
        <section
            className="relative py-24 lg:py-32 bg-white"
            aria-labelledby="home-services-bold-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <h2
                        id="home-services-bold-heading"
                        className="font-heading font-bold text-4xl lg:text-[3rem] tracking-[-0.03em] text-slate-950 leading-[1.05]"
                    >
                        Expert{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Orthopedic Services
                        </span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                        Comprehensive care for all your bone, joint, and sports injury
                        needs.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {servicesData.slice(0, 6).map((service, index) => (
                        <FadeIn
                            key={service.slug}
                            delay={index * 0.05}
                            className="h-full"
                        >
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col h-full bg-white p-7 lg:p-8 rounded-3xl border border-slate-200 hover:border-cyan-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(8,145,178,0.25)] transition-all duration-300 overflow-hidden"
                            >
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-transparent to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                />
                                <div className="relative">
                                    <div
                                        className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 p-2`}
                                    >
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={40}
                                            height={40}
                                            className="object-contain"
                                        />
                                    </div>

                                    <h3 className="font-heading font-bold text-xl lg:text-[1.375rem] tracking-[-0.02em] text-slate-900 leading-snug mb-3 group-hover:text-blue-700 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 mb-7 flex-grow leading-relaxed text-[15px]">
                                        {service.shortDesc}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm">
                                        Know more
                                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5} className="mt-14 text-center">
                    <Button
                        size="lg"
                        className="h-12 px-7 text-base rounded-full bg-slate-950 hover:bg-slate-800 text-white shadow-[0_0_0_1px_rgba(8,47,73,0.1)] hover:translate-y-0 font-semibold"
                        asChild
                    >
                        <Link href="/services">
                            View All Services
                            <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                        </Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
