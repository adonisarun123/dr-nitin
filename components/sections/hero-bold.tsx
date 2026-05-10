"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/data";

/**
 * Bold modern homepage hero — direction B.
 * Uses the existing site's copy unchanged; only the visual language is new.
 */
export function HeroBold() {
    return (
        <section
            aria-labelledby="hero-bold-heading"
            className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-24 lg:pt-28 lg:pb-32"
        >
            <motion.div
                aria-hidden
                animate={{ opacity: [0.45, 0.65, 0.45] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-40 -right-32 h-[640px] w-[640px] rounded-full bg-blue-500/30 blur-[120px] pointer-events-none"
            />
            <motion.div
                aria-hidden
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-40 -left-40 h-[640px] w-[640px] rounded-full bg-cyan-500/20 blur-[120px] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-7 flex flex-col gap-7 lg:gap-8">
                        <FadeIn delay={0.05}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-blue-100 w-fit">
                                <Sparkles className="h-3.5 w-3.5 text-cyan-300" aria-hidden />
                                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                                Building Stronger Joints, One Patient at a Time
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h1
                                id="hero-bold-heading"
                                className="font-heading font-bold text-[2.75rem] leading-[1.04] sm:text-6xl lg:text-[4.25rem] lg:leading-[1.02] tracking-[-0.035em] text-white"
                            >
                                Dr. Nitin N Sunku{" "}
                                <span className="block bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                    Orthopedic &amp; Sports Medicine Specialist
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.18}>
                            <p className="text-lg lg:text-xl text-blue-100/80 leading-relaxed max-w-2xl">
                                Top-rated orthopedic surgeon in HSR Layout, specializing in
                                arthroscopy, sports injuries, joint replacement, and
                                compassionate, evidence-based care.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.26}>
                            <div className="flex flex-wrap items-center gap-3 mt-1">
                                <Button
                                    size="lg"
                                    className="h-12 px-7 text-base rounded-full bg-white text-slate-950 hover:bg-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.18)] hover:shadow-[0_8px_24px_-8px_rgba(165,243,252,0.5)] hover:translate-y-0 font-semibold"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Book Appointment
                                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-7 text-base rounded-full border-white/25 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white shadow-none hover:translate-y-0"
                                    asChild
                                >
                                    <Link href="/services">View Services</Link>
                                </Button>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="hidden sm:inline-flex items-center gap-2 px-3 h-12 text-sm text-blue-100/80 hover:text-white transition-colors"
                                >
                                    <Phone className="h-4 w-4" aria-hidden />
                                    {siteConfig.phone}
                                </a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.34}>
                            <div className="flex items-center gap-2 mt-2 text-sm font-medium text-blue-100/90">
                                <span className="inline-flex gap-0.5 text-yellow-300">
                                    <Star className="h-4 w-4 fill-yellow-300" aria-hidden />
                                    <Star className="h-4 w-4 fill-yellow-300" aria-hidden />
                                    <Star className="h-4 w-4 fill-yellow-300" aria-hidden />
                                    <Star className="h-4 w-4 fill-yellow-300" aria-hidden />
                                    <Star className="h-4 w-4 fill-yellow-300" aria-hidden />
                                </span>
                                <span>5/5 · Top-rated orthopedic doctor in HSR Layout</span>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn
                        delay={0.2}
                        direction="left"
                        className="lg:col-span-5 relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-[460px] mx-auto lg:max-w-none">
                            <div
                                aria-hidden
                                className="absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent blur-2xl"
                            />
                            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-800 ring-1 ring-white/15">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                    alt="Dr. Nitin N Sunku"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 460px, 40vw"
                                    priority
                                />
                                <div
                                    aria-hidden
                                    className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
