"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                                Building Stronger Joints, One Patient at a Time
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold tracking-tight text-gray-900">
                                Dr. Nitin N Sunku <br className="hidden lg:block" />
                                <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">Orthopedic & Sports Medicine Specialist</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                Top-rated orthopedic surgeon in HSR Layout, specializing in arthroscopy, sports injuries, joint replacement, and compassionate, evidence-based care.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-blue-500/20" asChild>
                                    <Link href="/contact">Book Appointment</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white/50 backdrop-blur-sm" asChild>
                                    <Link href="/services">View Services</Link>
                                </Button>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="flex items-center gap-2 mt-4 text-sm font-medium text-gray-700">
                                <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                                <span>5/5 · Top-rated orthopedic doctor in HSR Layout</span>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4} direction="left" className="relative lg:h-[600px] w-full flex items-center justify-center">
                        {/* Image Placeholder */}
                        <div className="relative w-full h-full max-h-[500px] lg:max-h-full bg-blue-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                alt="Dr. Nitin N Sunku"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        {/* Decorational generic elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-full blur-2xl z-0"
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-10 right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"
                        ></motion.div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
