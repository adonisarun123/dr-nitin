import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { servicesData, siteConfig, practicePostalAddress } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { ServicePageLocalContext } from "@/components/seo/service-page-local-context";

// Generate static params for all services
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    if (params.slug === "sports-medicine") {
        return {
            title: "Sports Medicine Treatment in Attibele ",
            description: "Get expert sports medicine treatment in Attibele by Dr Nitin N Sunku for sports injuries, ligament tears, joint pain and faster recovery care.",
        };
    }

    if (params.slug === "acl-care") {
        return {
            title: "ACL CareTreatment in Attibele ",
            description: "Expert ACL injury treatment in Attibele by Dr Nitin N Sunku for ligament tears, knee instability and sports injuries with advanced care.",
        };
    }

    if (params.slug === "knee-replacement") {
        return {
            title: "Knee Replacement Surgery in Attibele ",
            description: "Advanced knee replacement surgery in Attibele by Dr Nitin N Sunku for arthritis, chronic knee pain and improved mobility with expert care.",
        };
    }

    if (params.slug === "meniscal-care") {
        return {
            title: "Meniscus Tear Treatment in Attibele ",
            description: "Expert meniscus tear treatment in Attibele by Dr Nitin N Sunku for knee locking, pain and sports injuries with advanced orthopedic care.",
        };
    }

    if (params.slug === "hip-replacement") {
        return {
            title: "Hip Replacement Surgery in Attibele ",
            description: "Get expert hip replacement surgery in Attibele by Dr Nitin N Sunku for arthritis, chronic hip pain, and improved mobility with advanced orthopedic care.",
        };
    }

    if (params.slug === "shoulder-care") {
        return {
            title: "Shoulder Care Treatment in Attibele ",
            description: "Advanced shoulder care treatments in Attibele by Dr. Nitin Sunku. Expert diagnosis & personalized solutions for pain, injuries & mobility restoration.",
        };
    }

    if (params.slug === "bone-fracture") {
        return {
            title: "Bone Fracture Treatment in Attibele ",
            description:
                "Expert fracture and trauma care in Attibele with Dr. Nitin N Sunku — accurate diagnosis, immobilization or surgery when needed, and follow-up plans for safe healing.",
        };
    }

    if (params.slug === "spine-care") {
        return {
            title: {
                absolute: "Spine Care Treatment in Attibele | Dr. Nitin Sunku",
            },
            description: "Comprehensive spine care in Attibele by Dr. Nitin Sunku — expert evaluation and non-surgical or surgical management of back pain and spinal disorders.",
        };
    }


    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) return {};

    return {
        title: `${service.title} Treatment in HSR Layout`,
        description: service.shortDesc,
    };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": service.title,
        "description": service.shortDesc,
        "provider": {
            "@type": "Physician",
            "name": "Dr. Nitin N Sunku",
            "address": practicePostalAddress,
            "telephone": siteConfig.phone
        }
    };

    return (
        <main className="min-h-screen pb-20">
            <JsonLd data={serviceSchema} />
            {/* Custom Header for Service Page */}
            <div className="bg-secondary/30 pt-16 pb-20 lg:pt-24 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${service.color} mb-6`}>
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{service.shortDesc}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 grid lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {service.fullDesc}
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Dr. Nitin Sunku uses a patient-first approach to diagnosis, combining clinical examination with advanced imaging only when necessary. Treatment plans are tailored to your specific goals, whether it's returning to professional sports or simply walking pain-free.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Appointments for {service.title.toLowerCase()} are available at Raghava
                                Multispeciality Hospital on Sarjapura–Attibele Road (Attibele) and at Health Nest
                                Hospital, HSR Layout. Bring prior scans, a list of medicines, and footwear or
                                clothing that lets the affected joint be examined properly. Follow-up intervals
                                depend on whether you are in a diagnostic phase, recovering after a procedure, or
                                completing a structured physiotherapy block—each step is explained so you know
                                why the next visit matters.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
                            <ul className="grid sm:grid-cols-2 gap-3">
                                {["Pain & Swelling", "Stiffness", "Instability", "Reduced Range of Motion", "Weakness"].map(sym => (
                                    <li key={sym} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                                        <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                        <span>{sym}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Nitin?</h2>
                            <p className="text-gray-600 mb-4">
                                With specialized fellowship training and experience as a team doctor for professional athletes, Dr. Nitin brings a high level of precision to every case.
                            </p>
                        </div>

                        <ServicePageLocalContext serviceTitle={service.title} />
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
                            <p className="text-gray-600 mb-6 text-sm">Get expert advice for {service.title} today.</p>

                            <div className="space-y-4">
                                <Button className="w-full h-12 text-base" asChild>
                                    <Link href="/contact">Book Consultation</Link>
                                </Button>

                                <Button variant="outline" className="w-full h-12 text-base" asChild>
                                    <a href="tel:+919449031003">
                                        <Phone className="mr-2 h-4 w-4" /> Call Now
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Locations</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Raghava Multispeciality, Attibele</li>
                                    <li>• Health Nest Hospital, HSR Layout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
