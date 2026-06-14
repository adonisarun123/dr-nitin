import { Metadata } from "next";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { BookingForm } from "@/components/forms/booking-form";
import { CLINICS, PRACTICE_EMAIL } from "@/lib/practice";
import { siteOrigin } from "@/lib/site-url";

export const metadata: Metadata = {
    title: {
        absolute: "Contact Dr. Nitin N Sunku | Orthopedic Care in Attibele",
    },
    description: "Get in touch with Dr. Nitin N Sunku, orthopedic & sports medicine specialist in Attibele for appointments, consultations, and expert joint care.",
    alternates: { canonical: `${siteOrigin}/contact` },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeaderBold
                title="Get in Touch"
                description="Ready to get moving again? Book an appointment or visit us at our clinic."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-10">
                    Use the appointment form for non-urgent enquiries, or call the hospital
                    numbers listed beside each address if you prefer to speak with the front
                    desk first. Please describe your main symptom, how long it has lasted, and
                    any prior treatment, so the team can book the right length of consultation
                    for you.
                </p>
                <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-relaxed text-red-800">
                    <strong className="font-semibold">In an emergency</strong> — such as an
                    open fracture, loss of consciousness, or new weakness after trauma — please
                    go to the nearest emergency department rather than waiting for an outpatient
                    reply.
                </div>
                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Information Cards */}
                    <div className="space-y-8">
                        <FadeIn delay={0.1} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Clock className="h-6 w-6 text-primary" /> Consulting Hours
                            </h3>
                            <div className="space-y-5 text-gray-600">
                                {CLINICS.map((c) => (
                                    <div key={c.id}>
                                        <p className="font-semibold text-gray-900 mb-2">{c.name}</p>
                                        {c.hours.map((h) => (
                                            <div key={h.label} className="flex justify-between border-b border-gray-50 pb-2">
                                                <span>{h.label}</span>
                                                <span className="font-semibold text-gray-900">{h.display}</span>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-gray-900">By Appointment</span>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                {CLINICS.map((c) => (
                                    <li key={c.id} className="flex items-start gap-4">
                                        <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <strong className="block text-gray-900 mb-1">{c.name}</strong>
                                            <p className="text-gray-600">{c.address}</p>
                                            <p className="text-gray-700 font-medium mt-1 inline-flex items-center gap-1.5">
                                                <Phone className="h-4 w-4 text-primary" aria-hidden />
                                                <a href={`tel:${c.phone}`} className="hover:text-primary transition-colors">{c.phone}</a>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                                <li className="flex items-center gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-xl shrink-0">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Email</strong>
                                        <p className="text-gray-600">{PRACTICE_EMAIL}</p>
                                    </div>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <FadeIn delay={0.3} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Book an Appointment</h2>
                        <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                        <BookingForm source="website" />
                    </FadeIn>

                </div>

                {/* Google Maps Section */}
                <div className="mt-16">
                    <FadeIn delay={0.4}>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">Find Us on Map</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {CLINICS.map((c) => (
                                <div key={c.id} className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
                                    <h3 className="bg-primary text-white p-4 font-semibold">{c.name}</h3>
                                    <iframe
                                        src={c.mapEmbedSrc}
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Map showing ${c.name}, ${c.shortLocality}`}
                                        className="filter group-hover:brightness-90 transition-all duration-300"
                                    ></iframe>
                                    <p className="p-4 bg-gray-50 border-t border-gray-100 text-sm">
                                        <a
                                            href={c.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-medium text-primary hover:underline"
                                        >
                                            Open {c.name} in Google Maps
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                {/* Video Testimonials Section */}
                <div className="mt-16">
                    <FadeIn delay={0.5}>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-4">Patient Testimonials</h2>
                        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Hear from our patients about their recovery journey and experience with Dr. Nitin.</p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src="https://www.youtube.com/embed/XFDLO_nR6x4"
                                    title="Patient Testimonial 1"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    loading="lazy"
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
                                    loading="lazy"
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
                                    loading="lazy"
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
                                    loading="lazy"
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
