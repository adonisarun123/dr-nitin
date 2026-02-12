import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { servicesData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
    title: "Orthopedic & Sports Medicine Services",
    description: "Explore orthopedic and sports medicine services by Dr Nitin N Sunku, including knee care, ACL injuries, joint replacement and sports injury treatment.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Comprehensive Orthopedic Services"
                description="Expert care for sports injuries, joint replacements, and bone health in HSR Layout."
            />

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
