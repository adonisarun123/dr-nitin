import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, BookOpen, Heart } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
    title: {
        absolute: "About Dr Nitin N Sunku | Orthopedic Surgeon in Bengaluru",
    },
    description: "Know Dr Nitin N Sunku, experienced orthopedic surgeon in Bengaluru specializing in sports injuries, knee care, joint replacement and advanced treatment.",
};

export default function AboutPage() {
    const doctorSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Nitin N. Sunku",
        "medicalSpecialty": [
            "Orthopedic",
            "Sports Medicine"
        ],
        "description": "Dr. Nitin N. Sunku is a Consultant Orthopaedic Surgeon in Bengaluru specialising in sports injuries, knee disorders, arthroscopy, joint replacement and trauma care.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bengaluru",
            "addressRegion": "KA",
            "addressCountry": "IN"
        },
        "alumniOf": [
            {
                "@type": "CollegeOrUniversity",
                "name": "Rajarajeshwari Medical College & Hospital"
            },
            {
                "@type": "CollegeOrUniversity",
                "name": "Bangalore Medical College & Research Institute"
            }
        ],
        "knowsAbout": [
            "Sports Injuries",
            "Knee Arthroscopy",
            "Joint Replacement",
            "Trauma Care",
            "Orthopaedic Surgery"
        ],
        "affiliation": {
            "@type": "SportsTeam",
            "name": "Bengaluru Football Club"
        },
        "sameAs": [
            "https://drnitinsunkuortho.com"
        ]
    };

    return (
        <main className="min-h-screen">
            <JsonLd data={doctorSchema} />
            <PageHeader
                title="Nurturing Mobility. Empowering Active Lives."
                description="Dr. Nitin Sunku believes in evidence-based, personalized orthopedic care that prioritizes your long-term joint health."
            />

            {/* Doctor Bio Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <FadeIn direction="right" className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                alt="Dr. Nitin N Sunku - Orthopaedic Surgeon"
                                fill
                                className="object-cover"
                                priority
                            />
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Dr. Nitin N Sunku</h2>
                            <p className="text-xl font-semibold text-primary mb-6">Consultant Orthopaedic Surgeon | Sports Injuries | Arthroscopy & Joint Care</p>
                            <div className="text-lg text-gray-600 space-y-4 mb-8">
                                <p>
                                    Dr. Nitin N. Sunku is a highly regarded <strong>Consultant Orthopaedic Surgeon in Bengaluru</strong>, known for his expertise in <strong>sports injuries, knee conditions, arthroscopy, joint replacement, and trauma care</strong>. With over <strong>7 years of focused orthopaedic experience</strong>, he combines advanced clinical skill with a patient-first philosophy to deliver reliable, long-term outcomes.
                                </p>
                                <p>
                                    He completed his <strong>MBBS</strong> from <em>Rajarajeshwari Medical College & Hospital</em> and his <strong>MS in Orthopaedics</strong> from <em>Bangalore Medical College & Research Institute</em>. He has further pursued advanced <strong>fellowship training in Arthroscopy, Joint Replacement, and Sports Medicine</strong>, enabling him to manage complex musculoskeletal conditions with precision.
                                </p>
                                <p>
                                    Dr. Sunku believes in a <strong>conservative-first approach</strong>, prioritising non-surgical treatments whenever possible. When surgery is required, he employs <strong>minimally invasive and arthroscopic techniques</strong> designed to minimise pain, reduce recovery time, and help patients return to normal life faster.
                                </p>
                                <p className="font-semibold text-primary">
                                    He currently serves as a <strong>Team Doctor for Bengaluru Football Club</strong> and is a visiting consultant at leading hospitals in Bengaluru.
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

            {/* Expertise Cards */}
            <section className="py-16 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold text-gray-900">Areas of Expertise</h2>
                        <p className="mt-4 text-gray-600">Comprehensive orthopedic care built on experience, innovation, and compassion.</p>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🦵",
                                title: "Leading Specialist in Knee & Sports Injuries",
                                desc: "Expert care for sports-related injuries and knee conditions, helping athletes and active individuals return to peak function safely and confidently."
                            },
                            {
                                icon: "🩺",
                                title: "Conservative, Non-Surgical First Approach",
                                desc: "Focused on preserving joint health through non-operative treatments such as physiotherapy, rehabilitation planning, medications, and guided injections."
                            },
                            {
                                icon: "🦴",
                                title: "Extensive Experience in Joint & Trauma Care",
                                desc: "Comprehensive expertise in managing acute injuries, fractures, degenerative joint conditions, and long-term mobility disorders."
                            },
                            {
                                icon: "🔬",
                                title: "Expert in Minimally Invasive Surgery",
                                desc: "Advanced expertise in arthroscopic and minimally invasive keyhole surgeries for reduced pain and faster recovery."
                            },
                            {
                                icon: "❤️",
                                title: "Patient-Centred, Holistic & Compassionate Care",
                                desc: "Personalised care built on empathy, clear communication, and trust."
                            },
                            {
                                icon: "🚀",
                                title: "Commitment to Modern Orthopaedic Practice",
                                desc: "Continuously updated with advancements in orthopaedics and sports medicine."
                            },
                        ].map((value, idx) => (
                            <FadeIn key={value.title} delay={idx * 0.1} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Affiliations */}
            <section className="py-16 lg:py-24 overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-heading font-bold text-gray-900">Certifications & Affiliations</h2>
                        <p className="mt-4 text-gray-600">Trained at premier institutions recognized for excellence in orthopedic care.</p>
                    </FadeIn>

                    {/* Auto-scrolling logos */}
                    <div className="relative">
                        <div className="flex overflow-hidden">
                            <div className="flex animate-scroll">
                                {/* First set of logos */}
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="/bmcri-logo.png"
                                        alt="Bangalore Medical College & Research Institute"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="/sgito-logo.png"
                                        alt="Sanjay Gandhi Institute of Trauma and Orthopaedics"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/bengaluru-football-logo.webp?updatedAt=1766657804981"
                                        alt="Bengaluru Football Club"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ISAKOS-logo.png"
                                        alt="ISAKOS"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ao-trauma-logo.png"
                                        alt="AO Trauma"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ISKSAA-logo.png"
                                        alt="ISKSAA"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>

                                {/* Duplicate set for seamless loop */}
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="/bmcri-logo.png"
                                        alt="Bangalore Medical College & Research Institute"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="/sgito-logo.png"
                                        alt="Sanjay Gandhi Institute of Trauma and Orthopaedics"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/bengaluru-football-logo.webp?updatedAt=1766657804981"
                                        alt="Bengaluru Football Club"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ISAKOS-logo.png"
                                        alt="ISAKOS"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ao-trauma-logo.png"
                                        alt="AO Trauma"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/ISKSAA-logo.png"
                                        alt="ISKSAA"
                                        width={192}
                                        height={128}
                                        className="object-contain max-h-24"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
