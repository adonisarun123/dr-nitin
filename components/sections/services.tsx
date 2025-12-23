import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function ServicesGrid() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Expert Orthopedic Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Comprehensive care for all your bone, joint, and sports injury needs.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.slice(0, 6).map((service, index) => (
                        <FadeIn key={service.slug} delay={index * 0.1} className="h-full">
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
                                    Know more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.6} className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-2 border-primary/20 hover:border-primary" asChild>
                        <Link href="/services">View All Services</Link>
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
