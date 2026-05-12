"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/data";

/**
 * Editorial-clinical homepage hero — design direction A.
 *
 * Tone: Mayo Clinic / Cleveland Clinic. Serif headline, blue medical palette,
 * authority-led copy, photo on the right, qualifications strip below.
 *
 * Drop-in replacement for `<Hero />` in `app/page.tsx`. Keep the existing Hero
 * available alongside this one until the direction is signed off.
 */
export function HeroEditorial() {
    return (
        <section
            aria-labelledby="hero-editorial-heading"
            className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-gray-100"
        >
            {/* Faint background grid for editorial paper feel — no gradient */}
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #185FA5 1px, transparent 1px), linear-gradient(to bottom, #185FA5 1px, transparent 1px)",
                    backgroundSize: "64px 64px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* ───────── Copy column ───────── */}
                    <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-7">
                        <FadeIn delay={0.05}>
                            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                                <span aria-hidden className="h-px w-8 bg-blue-800/60" />
                                Non-surgical orthopedics
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.12}>
                            <h1
                                id="hero-editorial-heading"
                                className="font-editorial text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.05] tracking-[-0.015em] text-gray-900"
                            >
                                Walk comfortably again — without rushing to surgery.
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
                                Conservative-first orthopedic and sports-medicine care from
                                Dr. Nitin N Sunku — modern regenerative therapy, ultrasound-guided
                                precision, and surgery only when it&apos;s genuinely the right answer.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.28}>
                            <div className="flex flex-wrap gap-3 mt-1">
                                <Button
                                    size="lg"
                                    className="h-12 px-7 text-base rounded-md bg-blue-900 hover:bg-blue-800 text-white shadow-none hover:shadow-none hover:translate-y-0"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Book a consultation
                                        <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                                    </Link>
                                </Button>
                                <Button
                                    size="lg"
                                    variant="ghost"
                                    className="h-12 px-2 text-base rounded-none text-blue-900 underline underline-offset-[6px] decoration-blue-900/30 hover:decoration-blue-900 hover:bg-transparent"
                                    asChild
                                >
                                    <Link href="/treatments">
                                        Explore treatments
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>

                        {/* Authority strip */}
                        <FadeIn delay={0.36}>
                            <dl className="grid grid-cols-3 gap-4 sm:gap-8 mt-4 pt-6 border-t border-gray-200 max-w-xl">
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                                        Specialty
                                    </dt>
                                    <dd className="mt-1 font-editorial text-base lg:text-lg text-gray-900">
                                        MS Orthopedics
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                                        Fellowship
                                    </dt>
                                    <dd className="mt-1 font-editorial text-base lg:text-lg text-gray-900">
                                        Sports &amp; Arthroscopy
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-xs uppercase tracking-wider text-gray-500 font-medium">
                                        Locations
                                    </dt>
                                    <dd className="mt-1 font-editorial text-base lg:text-lg text-gray-900">
                                        Attibele · HSR Layout
                                    </dd>
                                </div>
                            </dl>
                        </FadeIn>

                        {/* Inline trust line */}
                        <FadeIn delay={0.44}>
                            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-600 mt-2">
                                <span className="inline-flex items-center gap-1.5">
                                    <ShieldCheck className="h-4 w-4 text-blue-800" aria-hidden />
                                    Conservative-first care
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4 text-blue-800" aria-hidden />
                                    Two Bengaluru clinics
                                </span>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="inline-flex items-center gap-1.5 text-blue-900 font-medium hover:underline underline-offset-4"
                                >
                                    <Phone className="h-4 w-4" aria-hidden />
                                    {siteConfig.phone}
                                </a>
                            </div>
                        </FadeIn>
                    </div>

                    {/* ───────── Photo column ───────── */}
                    <FadeIn
                        delay={0.2}
                        direction="left"
                        className="lg:col-span-5 relative"
                    >
                        <figure className="relative">
                            {/* Editorial frame: thin blue border + soft offset, no drop-shadow */}
                            <div className="relative aspect-[4/5] w-full max-w-[460px] mx-auto lg:max-w-none rounded-sm overflow-hidden bg-blue-50 ring-1 ring-blue-100">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                    alt="Dr. Nitin N Sunku, Orthopedic and Sports Medicine Specialist"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 460px, 40vw"
                                    priority
                                />
                            </div>
                            {/* Editorial accent rule */}
                            <div
                                aria-hidden
                                className="hidden lg:block absolute -bottom-3 -left-3 h-16 w-16 border-l-2 border-b-2 border-blue-900"
                            />
                            <div
                                aria-hidden
                                className="hidden lg:block absolute -top-3 -right-3 h-16 w-16 border-r-2 border-t-2 border-blue-900"
                            />

                            <figcaption className="mt-4 text-sm text-gray-500 text-center lg:text-left max-w-[460px] mx-auto lg:mx-0">
                                <span className="font-editorial italic text-gray-700">
                                    Dr. Nitin N Sunku
                                </span>
                                <span className="mx-2 text-gray-300">·</span>
                                Consultant Orthopedic &amp; Sports Medicine Surgeon
                            </figcaption>
                        </figure>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
