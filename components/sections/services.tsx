import Link from "next/link";
import { ArrowRight, Bone, Activity, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "ACL Care",
        description: "Expert diagnosis and arthroscopic reconstruction for ACL tears.",
        href: "/services/acl-care",
        icon: Activity, // Placeholder icon
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Meniscal Care",
        description: "Minimally invasive treatment for meniscus tears used in sports.",
        href: "/services/meniscal-care",
        icon: Bone,
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        title: "Sports Medicine",
        description: "Comprehensive care for sports-related injuries and rehabilitation.",
        href: "/services/sports-medicine",
        icon: Activity,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Knee Replacement",
        description: "Total and partial knee replacement surgeries for chronic pain.",
        href: "/services/knee-replacement",
        icon: Bone,
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "Hip Replacement",
        description: "Advanced hip replacement techniques for mobility restoration.",
        href: "/services/hip-replacement",
        icon: Bone,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Shoulder Care",
        description: "Treatment for rotator cuff tears, dislocations, and frozen shoulder.",
        href: "/services/shoulder-care",
        icon: Bone,
        color: "bg-cyan-50 text-cyan-600",
    },
    // Add more as needed layout fits 3 cols
];

export function ServicesGrid() {
    return (
        <section className="py-20 lg:py-32 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Expert Orthopedic Services</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Comprehensive care for all your bone, joint, and sports injury needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                        >
                            <div className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                <service.icon className="h-7 w-7" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                                {service.description}
                            </p>

                            <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                Know more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-2 border-primary/20 hover:border-primary" asChild>
                        <Link href="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
