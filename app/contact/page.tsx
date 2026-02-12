import { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { BookingForm } from "@/components/forms/booking-form";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Dr Nitin N Sunku | Orthopedic Care in Attibele",
    },
    description: "Get in touch with Dr Nitin N Sunku, orthopedic & sports medicine specialist in Attibele for appointments, consultations, and expert joint care.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Get in Touch"
                description="Ready to get moving again? Book an appointment or visit us at our clinic."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Information Cards */}
                    <div className="space-y-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Clock className="h-6 w-6 text-primary" /> Consulting Hours
                            </h3>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span>Monday - Saturday</span>
                                    <span className="font-semibold text-gray-900">9:00 AM - 9:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-gray-900">By Appointment</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Raghava Multispeciality Hospital</strong>
                                        <p className="text-gray-600">39, Sarjapura - Attibele Rd, opposite syndicate bank, Attibele, Bengaluru, Karnataka 562107</p>
                                        <p className="text-gray-700 font-medium mt-1">📞 <a href="tel:+919980031006" className="hover:text-primary transition-colors">+91-9980031006</a></p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Health Nest Hospital</strong>
                                        <p className="text-gray-600">1162, 24th Main Rd Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                                        <p className="text-gray-700 font-medium mt-1">📞 <a href="tel:+919449031003" className="hover:text-primary transition-colors">+91-9449031003</a></p>
                                    </div>
                                </li>

                                <li className="flex items-center gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-xl shrink-0">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Email</strong>
                                        <p className="text-gray-600">contact@drnitinsunku.com</p>
                                    </div>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={0.3} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you shortly.</p>

                        <BookingForm source="website" />
                    </FadeIn>

                </div>

                {/* Google Maps Section */}
                <div className="mt-16">
                    <FadeIn delay={0.4}>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">Find Us on Map</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
                                <a
                                    href="https://maps.app.goo.gl/82xv2KzEU7GUjT357"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                                    aria-label="View Raghava Multispeciality Hospital on Google Maps"
                                ></a>
                                <h3 className="bg-primary text-white p-4 font-semibold relative z-20 pointer-events-none">Raghava Multispeciality Hospital</h3>
                                <iframe
                                    src="https://maps.google.com/maps?q=Sri+Raghava+Childrens+and+General+Hospital+Attibele+Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter group-hover:brightness-90 transition-all duration-300"
                                ></iframe>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative group">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Health+Nest+Hospital+1162%2C+24th+Main+Rd%2C+Garden+Layout%2C+Sector+2+HSR+Layout%2C+Bangalore%2C+Karnataka+560102"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 z-10 bg-transparent cursor-pointer"
                                    aria-label="View Health Nest Hospital on Google Maps"
                                ></a>
                                <h3 className="bg-primary text-white p-4 font-semibold relative z-20 pointer-events-none">Health Nest Hospital</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.64!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="filter group-hover:brightness-90 transition-all duration-300"
                                ></iframe>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Video Testimonials Section */}
                <div className="mt-16">
                    <FadeIn delay={0.5}>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-4">Patient Testimonials</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Hear from our patients about their recovery journey and experience with Dr. Nitin</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/XFDLO_nR6x4"
                                    title="Patient Testimonial 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/swT9lwWwSbU"
                                    title="Patient Testimonial 2"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/hNDU1Sx5gMc"
                                    title="Patient Testimonial 3"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/Isvi409_iEQ"
                                    title="Patient Testimonial 4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </main>
    );
}
