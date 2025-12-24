import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

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
                                        <p className="text-gray-600">39, Sarjapura - Attibele Rd, opposite syndicate bank, Anekal, Bengaluru, Karnataka 562107</p>
                                        <p className="text-gray-700 font-medium mt-1">📞 +91-9980031006</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Health Nest Hospital</strong>
                                        <p className="text-gray-600">1162, 24th Main Rd Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                                        <p className="text-gray-700 font-medium mt-1">📞 +91-9449031003</p>
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

                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+91 9999999999" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                                <select id="service" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                                    <option>General Consultation</option>
                                    <option>ACL / Knee Injury</option>
                                    <option>Sports Medicine</option>
                                    <option>Joint Replacement</option>
                                    <option>Physiotherapy</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Tell us about your symptoms..."></textarea>
                            </div>

                            <Button size="lg" className="w-full h-14 text-base">Confirm Booking Request</Button>
                        </form>
                    </FadeIn>

                </div>

                {/* Google Maps Section */}
                <div className="mt-16">
                    <FadeIn delay={0.4}>
                        <h2 className="text-3xl font-heading font-bold text-gray-900 text-center mb-12">Find Us on Map</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <h3 className="bg-primary text-white p-4 font-semibold">Raghava Multispeciality Hospital</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d77.7!3d12.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ4JzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                                <h3 className="bg-primary text-white p-4 font-semibold">Health Nest Hospital</h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d77.64!3d12.91!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjAiTiA3N8KwMzgnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
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
