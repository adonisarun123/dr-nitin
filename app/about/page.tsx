import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Award, BookOpen, Heart } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { JsonLd } from "@/components/seo/json-ld";
import { practicePostalAddress } from "@/lib/data";
import { siteOrigin } from "@/lib/site-url";

export const metadata: Metadata = {
    title: {
        absolute: "About Dr. Nitin N Sunku | Orthopedic Surgeon Bengaluru",
    },
    description:
        "Meet Dr. Nitin N Sunku, orthopedic surgeon in Bengaluru — sports injuries, knee care, joint replacement, arthroscopy. Over 10 years of focused practice.",
};

export default function AboutPage() {
    const doctorSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Nitin N Sunku",
        "medicalSpecialty": [
            "Orthopedic",
            "Sports Medicine"
        ],
        "description": "Dr. Nitin N Sunku is a Consultant Orthopedic Surgeon in Bengaluru specialising in sports injuries, knee disorders, arthroscopy, joint replacement and trauma care.",
        "address": practicePostalAddress,
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Medical degree",
                "name": "MBBS",
                "recognizedBy": {
                    "@type": "CollegeOrUniversity",
                    "name": "Rajarajeshwari Medical College & Hospital"
                }
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Medical specialty degree",
                "name": "MS Orthopedics",
                "recognizedBy": {
                    "@type": "CollegeOrUniversity",
                    "name": "Bangalore Medical College & Research Institute"
                }
            }
        ],
        "knowsAbout": [
            "Sports Injuries",
            "Knee Arthroscopy",
            "Joint Replacement",
            "Trauma Care",
            "Orthopedic Surgery"
        ],
        "memberOf": {
            "@type": "SportsOrganization",
            "name": "Bengaluru Football Club"
        },
        "sameAs": [
            siteOrigin
        ]
    };

    return (
        <main className="min-h-screen">
            <JsonLd data={doctorSchema} />
            <PageHeaderBold
                title="Nurturing Mobility. Empowering Active Lives."
                description="Dr. Nitin N Sunku believes in evidence-based, personalized orthopedic care that prioritizes your long-term joint health."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-12 pb-8">
                <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                    <p>
                        This page summarises Dr. Nitin N Sunku&apos;s training philosophy and the clinical
                        themes that shape his practice across Bengaluru. You will read how conservative care is
                        balanced with modern arthroscopic and joint replacement techniques, why second opinions
                        are welcomed, and how follow-up is structured after surgery so that strength and range
                        of motion return in predictable stages.
                    </p>
                    <p>
                        If you are comparing surgeons for a complex knee or shoulder problem, note the
                        combination of academic hospital training, dedicated sports medicine exposure, and
                        ongoing work with active patients from IT corridors, weekend runners, and professional
                        sport. The sections below translate that background into what you can expect at the
                        first consultation and beyond.
                    </p>
                </div>
            </div>

            {/* Doctor Bio Section */}
            <section className="py-16 lg:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <FadeIn direction="right" className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                alt="Dr. Nitin N Sunku - Orthopedic Surgeon"
                                fill
                                className="object-cover"
                                priority
                            />
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Dr. Nitin N Sunku</h2>
                            <p className="text-xl font-semibold text-primary mb-6">Consultant Orthopedic Surgeon | Sports Injuries | Arthroscopy & Joint Care</p>
                            <div className="text-lg text-gray-600 space-y-4 mb-8">
                                <p>
                                    Dr. Nitin N Sunku is a highly regarded <strong>Consultant Orthopedic Surgeon in Bengaluru</strong>, known for his expertise in <strong>sports injuries, knee conditions, arthroscopy, joint replacement, and trauma care</strong>. With over <strong>10 years of focused orthopedic experience</strong>, he combines advanced clinical skill with a patient-first philosophy to deliver reliable, long-term outcomes.
                                </p>
                                <p>
                                    He completed his <strong>MBBS</strong> from <em>Rajarajeshwari Medical College & Hospital</em> and his <strong>MS in Orthopedics</strong> from <em>Bangalore Medical College & Research Institute</em>. He has further pursued advanced <strong>fellowship training in Arthroscopy, Joint Replacement, and Sports Medicine</strong>, enabling him to manage complex musculoskeletal conditions with precision.
                                </p>
                                <p>
                                    <strong>Academic Author featured in Springer&apos;s internationally acclaimed textbook Atlas of Arthroscopy.</strong>{" "}
                                    <Link
                                        href="/awards"
                                        className="text-primary underline-offset-2 hover:underline font-medium"
                                    >
                                        See all awards & accolades →
                                    </Link>
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
                                    <h3 className="font-bold text-gray-900">10+ Years</h3>
                                    <p className="text-sm text-gray-600">Specialist Experience</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-xl">
                                    <Heart className="h-8 w-8 text-green-600 mb-2" />
                                    <h3 className="font-bold text-gray-900">10K+</h3>
                                    <p className="text-sm text-gray-600">Patients Consulted</p>
                                </div>
                            </div>

                            <Button size="lg" asChild>
                                <Link href="/contact">Schedule a Consultation</Link>
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Faculty — SIMGLOBE 2026 */}
            <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-10 items-center">
                        <FadeIn delay={0.1} className="lg:col-span-3 order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-medium text-blue-700 mb-4">
                                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                                Faculty Appointment
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                                Faculty at{" "}
                                <span className="text-primary">SIMGLOBE 2026</span>{" "}
                                — Arthroscopic Simulation-Based Workshop
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Dr. Nitin N Sunku served as <strong>faculty at SIMGLOBE 2026</strong>,
                                a global simulation summit, leading the{" "}
                                <strong>Arthroscopic Simulation-Based Workshop</strong>. Teaching
                                on simulation models lets surgeons rehearse precise arthroscopic
                                technique in a controlled setting before applying it in the
                                operating room.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Contributing as faculty to hands-on training events reflects an
                                ongoing commitment to surgical education and to keeping technique
                                aligned with current best practice — the same standards that
                                inform care in clinic.
                            </p>
                        </FadeIn>

                        <FadeIn
                            direction="left"
                            className="lg:col-span-2 order-1 lg:order-2 relative w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl"
                        >
                            <Image
                                src="https://ik.imagekit.io/vlries1el/dr%20nitin/faculty-at-simglobe2026-dr_nitin.jpeg?updatedAt=1781432244004"
                                alt="Dr. Nitin N Sunku as faculty at the SIMGLOBE 2026 Arthroscopic Simulation-Based Workshop"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Expertise Cards */}
            <section className="py-16 bg-white border-y border-gray-200">
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
                                title: "Commitment to Modern Orthopedic Practice",
                                desc: "Continuously updated with advancements in orthopedics and sports medicine."
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
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/vlries1el/dr%20nitin/simglobe-logo.png"
                                        alt="SIMGLOBE"
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
                                <div className="flex-shrink-0 mx-8 flex items-center justify-center w-48 h-32">
                                    <Image
                                        src="https://ik.imagekit.io/vlries1el/dr%20nitin/simglobe-logo.png"
                                        alt="SIMGLOBE"
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
