import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { TestimonialsShowcase } from "@/components/sections/testimonials-showcase";

export const metadata: Metadata = {
    title: {
        absolute: "Patient Testimonials | Dr. Nitin N Sunku Orthopedic",
    },
    description:
        "Read real patient testimonials of Dr. Nitin N Sunku, trusted orthopedic & sports medicine specialist known for expert care and recovery outcomes.",
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeaderBold
                title="Patient Stories"
                description="Hear from patients who have regained their mobility and active lifestyle with Dr. Nitin's care."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-3xl text-center">
                <p className="text-gray-700 leading-relaxed text-base">
                    Feedback here comes from people treated for ligament injuries, meniscus
                    tears, shoulder problems, joint replacement recovery, and fracture
                    care. Quotes summarise their experience with communication,
                    postoperative guidance, and confidence returning to work or sport. Your
                    own outcome depends on diagnosis, adherence to rehabilitation, and
                    general health; use these stories as encouragement rather than a
                    guarantee of results. New patients can book through the contact page
                    to discuss expectations in person.
                </p>
                <p className="mt-5 text-sm text-gray-500 italic max-w-2xl mx-auto">
                    <strong className="not-italic font-semibold text-gray-700">Disclaimer:</strong>{" "}
                    Individual results may vary. The testimonials shared here are personal
                    experiences and are not a guarantee, warranty, or prediction regarding
                    the outcome of any specific treatment.
                </p>
            </div>

            <div className="mt-16">
                <TestimonialsShowcase />
            </div>

            {/* ───────── Closing CTA ───────── */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-10 lg:p-16 text-center">
                    <div
                        aria-hidden
                        className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-cyan-500/25 blur-[110px] pointer-events-none"
                    />
                    <div className="relative max-w-2xl mx-auto">
                        <h2 className="font-heading font-bold text-3xl lg:text-[2.5rem] tracking-[-0.025em] leading-[1.1] text-white">
                            Ready to write{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                your story?
                            </span>
                        </h2>
                        <p className="mt-5 text-blue-100/80 text-lg leading-relaxed">
                            Book a consultation with Dr. Nitin N Sunku to discuss your
                            condition, expectations, and the right treatment plan for you.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            <Button
                                size="lg"
                                className="h-12 px-7 rounded-full bg-white text-slate-950 hover:bg-white/90 shadow-none hover:translate-y-0 font-semibold"
                                asChild
                            >
                                <Link href="/contact">
                                    Book a consultation
                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 px-7 rounded-full border-white/25 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white shadow-none hover:translate-y-0"
                                asChild
                            >
                                <Link href="/services">Browse services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
