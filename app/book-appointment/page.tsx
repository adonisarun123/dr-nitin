import { Metadata } from "next";
import { BookingForm } from "@/components/forms/booking-form";
import { Phone, MapPin, Clock, Award, Heart, Users, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { HideNavigation } from "@/components/ui/hide-navigation";

export const metadata: Metadata = {
    title: "Book Appointment - Best Orthopaedic Doctor in HSR Layout & Attibele | Dr. Nitin Sunku",
    description: "Book your appointment with Dr. Nitin Sunku, leading orthopaedic specialist in HSR Layout & Attibele. Expert in knee injuries, sports medicine, joint replacement & trauma care. Call +91-9449031003",
    keywords: [
        "orthopaedic doctor HSR Layout",
        "orthopaedic doctor Attibele",
        "knee specialist Bangalore",
        "sports injury doctor",
        "joint replacement surgeon",
        "best ortho doctor near me",
        "knee pain treatment",
        "ACL surgery Bangalore",
        "Dr Nitin Sunku",
        "bone doctor HSR Layout"
    ],
    openGraph: {
        title: "Book Appointment - Best Orthopaedic Doctor in HSR Layout & Attibele",
        description: "Expert orthopaedic care for knee injuries, sports medicine & joint problems. Book your consultation today.",
        type: "website",
    },
};

export default function BookAppointmentPage() {
    const sellingPoints = [
        {
            icon: Award,
            title: "Leading Specialist in Knee & Sports Injuries",
            description: "Fellowship-trained in arthroscopy & sports medicine with extensive experience treating athletes and active individuals"
        },
        {
            icon: Heart,
            title: "Conservative, Non-Surgical First Approach",
            description: "We prioritize non-invasive treatments and explore all conservative options before recommending surgery"
        },
        {
            icon: Users,
            title: "Extensive Experience in Joint & Trauma Care",
            description: "Over 7 years of specialized experience in complex joint surgeries and trauma management"
        },
        {
            icon: CheckCircle,
            title: "Expert in Minimally Invasive Surgery",
            description: "Advanced arthroscopic techniques ensuring faster recovery, less pain, and minimal scarring"
        },
        {
            icon: Heart,
            title: "Patient-Centred, Holistic & Compassionate Care",
            description: "Personalized treatment plans tailored to your lifestyle, goals, and recovery needs"
        },
        {
            icon: Award,
            title: "Commitment to Modern Orthopaedic Practice",
            description: "Using latest techniques, implants, and evidence-based protocols for optimal outcomes"
        }
    ];

    const locations = [
        {
            name: "HSR Layout Clinic",
            address: "1162, 24th Main Rd, Garden Layout, Sector 2, HSR Layout",
            city: "Bengaluru, Karnataka 560102",
            timings: "Mon-Sat: 10:00 AM - 8:00 PM"
        },
        {
            name: "Attibele Clinic",
            address: "Attibele, Bangalore",
            city: "Karnataka",
            timings: "Mon-Sat: 10:00 AM - 6:00 PM"
        }
    ];

    return (
        <main className="min-h-screen">
            <HideNavigation />
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 text-blue-900 py-16 md:py-24 overflow-hidden border-b-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/patterns/medical-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2 mb-6">
                            <p className="text-sm font-medium">✓ Trusted by 1000+ Patients</p>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                            Expert Orthopaedic Care in <span className="text-blue-700">HSR Layout & Attibele</span>
                        </h1>

                        <p className="text-xl md:text-2xl mb-8 text-blue-800 font-light">
                            Get Relief from Knee Pain, Sports Injuries & Joint Problems
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Same Day Appointments</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">Insurance Accepted</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-blue-900">7+ Years Experience</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="tel:+919449031003"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                <Phone className="w-5 h-5" />
                                Call Now: +91-9449031003
                            </a>
                            <a
                                href="#booking-form"
                                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                Book Appointment Online
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Dr. Nitin Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Dr. Nitin Sunku?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive orthopaedic care with a patient-first approach
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {sellingPoints.map((point, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                                    <point.icon className="w-6 h-6 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Conditions We Treat */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Conditions We Treat
                        </h2>
                        <p className="text-lg text-gray-600">
                            Expert care for a wide range of orthopaedic conditions
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {[
                            "Knee Pain & Arthritis",
                            "ACL & Meniscus Tears",
                            "Sports Injuries",
                            "Shoulder Pain & Rotator Cuff",
                            "Hip & Joint Replacement",
                            "Fractures & Trauma",
                            "Back & Spine Problems",
                            "Tennis Elbow & Tendonitis"
                        ].map((condition, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:bg-primary-50 transition-colors border border-gray-200"
                            >
                                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                <span className="font-medium text-gray-800">{condition}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form Section */}
            <section id="booking-form" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Book Your Appointment
                            </h2>
                            <p className="text-lg text-gray-600">
                                Fill out the form below and we'll get back to you within 24 hours
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <BookingForm source="ads" />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">Prefer to call?</p>
                            <a
                                href="tel:+919449031003"
                                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-xl"
                            >
                                <Phone className="w-5 h-5" />
                                +91-9449031003
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Locations
                        </h2>
                        <p className="text-lg text-gray-600">
                            Conveniently located to serve you better
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {locations.map((location, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    {location.name}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-800 font-medium">{location.address}</p>
                                            <p className="text-gray-600">{location.city}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                        <p className="text-gray-800">{location.timings}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                        <a
                                            href="tel:+919449031003"
                                            className="text-primary-600 hover:text-primary-700 font-medium"
                                        >
                                            +91-9449031003
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-t-4 border-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                        Ready to Get Relief from Your Pain?
                    </h2>
                    <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
                        Don't let orthopaedic problems hold you back. Book your consultation today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Book Appointment Now
                        </a>
                        <a
                            href="tel:+919449031003"
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            <Phone className="w-5 h-5" />
                            Call +91-9449031003
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
