import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

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
                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Clock className="h-6 w-6 text-primary" /> Consulting Hours
                            </h3>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span>Monday - Saturday</span>
                                    <span className="font-semibold text-gray-900">10:00 AM - 8:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-50 pb-2">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-gray-900">By Appointment</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Health Nest Hospital</strong>
                                        <p className="text-gray-600">1162, 24th Main Rd, Garden Layout, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="bg-green-50 p-3 rounded-xl shrink-0">
                                        <Phone className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <strong className="block text-gray-900 mb-1">Phone</strong>
                                        <p className="text-gray-600">+91-9449031003</p>
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
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
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
                    </div>

                </div>
            </div>
        </main>
    );
}
