import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800 w-fit">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            Building Stronger Joints, One Patient at a Time
                        </div>

                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-bold tracking-tight text-gray-900">
                            Dr. Nitin N Sunku <br className="hidden lg:block" />
                            <span className="text-primary">Orthopedic & Sports Medicine Specialist</span>
                        </h1>

                        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                            Top-rated orthopedic surgeon in HSR Layout, specializing in arthroscopy, sports injuries, joint replacement, and compassionate, evidence-based care.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-2">
                            <Button size="lg" className="h-14 px-8 text-base shadow-xl shadow-blue-500/20" asChild>
                                <Link href="/contact">Book Appointment</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-white/50 backdrop-blur-sm" asChild>
                                <Link href="/services">View Services</Link>
                            </Button>
                        </div>

                        <div className="flex items-center gap-2 mt-4 text-sm font-medium text-gray-700">
                            <span className="text-yellow-500 text-lg">⭐⭐⭐⭐⭐</span>
                            <span>5/5 · Top-rated orthopedic doctor in HSR Layout</span>
                        </div>
                    </div>

                    <div className="relative lg:h-[600px] w-full flex items-center justify-center">
                        {/* Image Placeholder */}
                        <div className="relative w-full h-full max-h-[500px] lg:max-h-full bg-blue-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <div className="absolute inset-0 flex items-center justify-center text-blue-300 font-bold text-2xl">
                                Doctor Image Placeholder
                            </div>
                        </div>
                        {/* Decorational generic elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
                        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
