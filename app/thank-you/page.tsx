import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, ArrowRight, Home, Mail, Phone, Calendar, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
    title: "Thank You | Dr. Nitin N Sunku",
    description: "Thank you for reaching out to Dr. Nitin N Sunku. We have received your message and will get back to you shortly.",
};

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <FadeIn delay={0.1}>
                        <div className="flex justify-center mb-8">
                            <div className="rounded-full bg-white/10 p-4 ring-1 ring-white/20 backdrop-blur-sm">
                                <CheckCircle2 className="h-16 w-16 text-blue-200" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 tracking-tight text-white">
                            THANK YOU FOR <br /> REACHING OUT!
                        </h1>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-medium">
                            We have received your message and will get back to you as soon as possible.
                        </p>
                    </FadeIn>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 pb-24">
                <FadeIn delay={0.4}>
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* What's Next */}
                            <div>
                                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    What Happens Next?
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Confirmation Sent</p>
                                            <p className="text-sm text-gray-600">A confirmation of your request has been sent to your email.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-green-50 p-2 rounded-lg shrink-0">
                                            <Calendar className="h-5 w-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Appointment Review</p>
                                            <p className="text-sm text-gray-600">Our team is reviewing your preferred appointment time.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-2 rounded-lg shrink-0">
                                            <Phone className="h-5 w-5 text-orange-600" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">Personal Callback</p>
                                            <p className="text-sm text-gray-600">We will call or message you shortly to finalize your visit.</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                    <Button asChild className="gap-2 h-12">
                                        <Link href="/">
                                            <Home className="h-4 w-4" /> Back to Home
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline" className="gap-2 h-12">
                                        <Link href="/blog">
                                            <BookOpen className="h-4 w-4" /> Visit Our Blog
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Contact Summary */}
                            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200/50">
                                <h3 className="text-lg font-bold text-gray-900 mb-6">Need Immediate Help?</h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Our Clinic</p>
                                        <p className="text-gray-700 font-medium text-sm leading-relaxed">
                                            {siteConfig.address}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase tracking-wider font-bold mb-2">Call/WhatsApp</p>
                                        <a href={`tel:${siteConfig.phone}`} className="text-blue-600 font-bold text-xl hover:text-blue-700 transition-colors">
                                            {siteConfig.phone}
                                        </a>
                                    </div>
                                    <div className="pt-4 border-t border-gray-200">
                                        <p className="text-sm text-gray-600 italic">
                                            "Building Stronger Joints, One Patient at a Time."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Bottom Navigation */}
                <FadeIn delay={0.6}>
                    <div className="text-center mt-12">
                        <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center justify-center gap-2 group transition-colors">
                            Explore our Orthopedic Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </main>
    );
}
