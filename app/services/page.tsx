import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { servicesData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
    title: "Orthopedic & Sports Medicine Services",
    description:
        "Orthopaedic and sports medicine services in Attibele with Dr Nitin N Sunku—ACL, meniscus, joint replacement, fractures, and spine symptoms. Consultations also at HSR Layout for patients across South Bengaluru.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Comprehensive Orthopedic Services"
                description="Primary care at Raghava Multispeciality, Attibele, on Sarjapura–Attibele Road—sports injuries, joint replacement, fractures, and arthroscopy. Additional sessions at Health Nest Hospital, HSR Layout, for patients from nearby areas."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
                <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p>
                        Most consultations and treatment planning for the services below are centred at{" "}
                        <strong>Raghava Multispeciality Hospital, Attibele</strong>, on Sarjapura–Attibele Road.
                        The clinic serves Attibele, Anekal, Chandapura, Jigani, Bommasandra, and the industrial and
                        residential corridors along Sarjapura Road and Hosur Road, including patients who travel
                        from Electronic City and Sarjapura for fracture care, knee and shoulder problems, sports
                        injuries, and joint replacement assessment. Each service page explains typical symptoms,
                        what to expect in clinic, and which non-surgical or surgical options may apply after
                        examination.
                    </p>
                    <p>
                        Dr. Nitin N. Sunku also holds sessions at <strong>Health Nest Hospital, HSR Layout</strong>{" "}
                        (24th Main, Sector 2) for follow-up, pre-operative review, and patients who live closer to
                        HSR, Koramangala, BTM Layout, or Bellandur. If you are unsure which site suits you best,
                        mention your location when you use the{" "}
                        <Link href="/contact" className="text-primary font-medium hover:underline">
                            contact page
                        </Link>
                        ; the team will guide you. Broadly, expect <strong>Attibele as the main hub</strong> for
                        most of your care, with <strong>HSR Layout used as a convenient secondary site</strong> when
                        your address or diary makes that the better choice.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <FadeIn key={service.slug} delay={idx * 0.1}>
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                            >
                                <div className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 p-2`}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                                    {service.shortDesc}
                                </p>

                                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
