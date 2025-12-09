import Link from "next/link";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, BookOpen, Heart } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Nurturing Mobility. Empowering Active Lives."
                description="Dr. Nitin Sunku believes in evidence-based, personalized orthopedic care that prioritizes your long-term joint health."
            />

            {/* Doctor Bio Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <FadeIn direction="right" className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl">
                                Doctor Portrait
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Dr. Nitin N Sunku</h2>
                            <div className="text-lg text-gray-600 space-y-4 mb-8">
                                <p>
                                    Dr. Nitin Sunku is a renowned Orthopaedic Surgeon associated with Narayana Hrudayalaya HSR Layout and Manipal Hospital Sarjapur. He specializes in arthroscopy, sports medicine, joint replacements, and complex trauma.
                                </p>
                                <p>
                                    He completed his MBBS from Rajarajeshwari Medical College & Hospital and MS Orthopaedics from the prestigious Bangalore Medical College & Research Institute (BMCRI).
                                </p>
                                <p>
                                    His pursuit of excellence led him to specialized fellowships in Arthroscopy & Sports Medicine at leading institutes in Delhi and the Sanjay Gandhi Institute of Trauma & Orthopaedics (SGITO), Bangalore.
                                </p>
                                <p className="font-semibold text-primary">
                                    Currently, he serves as the Team Doctor for Bengaluru Football Club (BFC), bringing elite-level sports medicine expertise to all his patients.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 p-4 rounded-xl">
                                    <Award className="h-8 w-8 text-blue-600 mb-2" />
                                    <h3 className="font-bold text-gray-900">7+ Years</h3>
                                    <p className="text-sm text-gray-600">Specialist Experience</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <Heart className="h-8 w-8 text-green-600 mb-2" />
                                    <h3 className="font-bold text-gray-900">10K+</h3>
                                    <p className="text-sm text-gray-600">Happy Patients</p>
                                </div>
                            </div>

                            <Button size="lg" asChild>
                                <Link href="/contact">Schedule a Consultation</Link>
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold text-gray-900">Our Care Philosophy</h2>
                        <p className="mt-4 text-gray-600">Guided by principles that put the patient first.</p>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Compassion", desc: "Treating every patient with empathy and understanding their unique lifestyle goals." },
                            { title: "Evidence-Based", desc: "Adopting only proven medical treatments and avoiding unnecessary procedures." },
                            { title: "Excellence", desc: "Striving for the best possible clinical outcomes through continuous learning." },
                        ].map((value, idx) => (
                            <FadeIn key={value.title} delay={idx * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <CheckCircle2 className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
