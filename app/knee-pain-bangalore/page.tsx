import { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/forms/booking-form";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    Users,
    CheckCircle,
    Activity,
    Shield,
} from "lucide-react";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";

export const metadata: Metadata = {
    title: "Knee Pain Specialist Bangalore | Dr. Nitin N Sunku",
    description:
        "Knee pain specialist in Bangalore (HSR Layout & Attibele). Conservative-first care, PRP, arthroscopy & knee replacement. Book a same-day consultation.",
    alternates: { canonical: `${siteOrigin}/knee-pain-bangalore` },
    keywords: [
        "knee pain specialist Bangalore",
        "knee doctor HSR Layout",
        "knee doctor Attibele",
        "knee pain treatment Bangalore",
        "knee arthritis specialist Bengaluru",
        "ACL surgery Bangalore",
        "meniscus tear treatment Bangalore",
        "PRP injection knee Bangalore",
        "sports knee injury doctor",
        "best knee specialist near me",
        "knee replacement surgeon Bangalore",
        "Dr. Nitin N Sunku knee",
    ],
    openGraph: {
        title: "Knee Pain Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Honest, evidence-based knee care in HSR Layout & Attibele. Surgery only when truly needed. Book a same-day consultation.",
        type: "website",
    },
};

export default function KneePainBangalorePage() {
    const heroPhone = PRIMARY_CLINIC.phone;

    const conditions = [
        "Knee Osteoarthritis",
        "ACL & Meniscus Tears",
        "Knee Pain (Over 40)",
        "Sports Injuries",
        "Patellar Tracking Issues",
        "Runner's Knee",
        "Knee Pain (Post-Injury)",
        "Knee Stiffness / Locking",
    ];

    const sellingPoints = [
        {
            icon: Heart,
            title: "Conservative-First Approach",
            description:
                "Physiotherapy, PRP and GFC injections come first. Surgery is recommended only when it's truly the right answer for your knee.",
        },
        {
            icon: Award,
            title: "Fellowship-Trained Knee Surgeon",
            description:
                "Specialist fellowship training in arthroscopy and sports medicine — focused on accurate diagnosis and minimally invasive techniques.",
        },
        {
            icon: Users,
            title: "Bengaluru FC Team Doctor",
            description:
                "Trusted by professional athletes — official team doctor for Bengaluru FC. The same standard of knee care for every patient.",
        },
        {
            icon: CheckCircle,
            title: "10+ Years of Focused Knee Experience",
            description:
                "Over a decade treating knee pain, ligament injuries, cartilage problems and arthritis across thousands of patients.",
        },
        {
            icon: Activity,
            title: "Regenerative Options Available",
            description:
                "Latest non-surgical options including PRP, GFC (Growth Factor Concentrate) and hyaluronic acid injections — proven alternatives for the right cases.",
        },
        {
            icon: Shield,
            title: "Two Bengaluru Locations",
            description:
                "Easy access in HSR Layout (Sector 2) and Attibele (Sarjapura-Attibele Road). Same-day appointments and insurance assistance at both.",
        },
    ];

    return (
        <main className="min-h-screen">
            <HideNavigation />
            <LandingPageTracker />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 text-blue-900 py-12 md:py-20 overflow-hidden border-b-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/patterns/medical-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        {/* Left Column: Image */}
                        <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                alt="Dr. Nitin N Sunku — Knee Pain Specialist, Bangalore"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2 mb-6">
                                <p className="text-sm font-medium">
                                    ✓ Trusted by 10,000+ Patients
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                                Knee Pain Specialist in{" "}
                                <span className="text-blue-700">Bangalore</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 text-blue-800 font-light">
                                Honest, evidence-based knee care — surgery only when truly needed.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Conservative-First Care
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Same-Day Appointments
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Insurance Accepted
                                    </span>
                                </div>
                            </div>

                            {/* Mobile Image (Visible only on smaller screens) */}
                            <div className="relative h-[300px] w-full mb-8 lg:hidden">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Knee Pain Specialist, Bangalore"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <TrackedButton
                                    buttonName="Call Now - Hero"
                                    buttonLocation="Hero Section"
                                    href={`tel:${heroPhone}`}
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        phone_number: heroPhone,
                                        cta_type: "phone",
                                        condition: "knee-pain",
                                    }}
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now: {heroPhone}
                                </TrackedButton>
                                <TrackedButton
                                    buttonName="Book Free Consultation - Hero"
                                    buttonLocation="Hero Section"
                                    href="#booking-form"
                                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        cta_type: "form_scroll",
                                        condition: "knee-pain",
                                    }}
                                >
                                    Book Free Consultation
                                </TrackedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions We Treat */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Knee Conditions We Treat
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Specialist care for the full range of knee problems — from
                            day-to-day aches to complex sports injuries.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {conditions.map((condition) => (
                            <div
                                key={condition}
                                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors border border-gray-200"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="font-medium text-gray-800">
                                    {condition}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Patients Choose Dr. Nitin */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Patients Choose Dr. Nitin for Knee Care
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A knee specialist who takes the time to diagnose properly,
                            explain clearly, and treat conservatively first.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {sellingPoints.map((point) => (
                            <div
                                key={point.title}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <point.icon className="w-6 h-6 text-blue-700" />
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

            {/* Cost / Transparency Section */}
            <section className="py-16 md:py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                What Does Knee Treatment Cost?
                            </h2>
                            <p className="text-lg text-blue-800 max-w-2xl mx-auto">
                                Indicative ranges so you can plan with confidence. Final cost
                                depends on diagnosis, hospital, and insurance.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                                <p className="text-sm font-medium text-blue-700 mb-1">
                                    Consultation
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    &#8377;500 – &#8377;1,000
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    First visit, diagnosis &amp; treatment plan.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                                <p className="text-sm font-medium text-blue-700 mb-1">
                                    PRP Injection
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    &#8377;10,000 – &#8377;20,000
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Regenerative option for early arthritis &amp; tendon issues.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                                <p className="text-sm font-medium text-blue-700 mb-1">
                                    Hyaluronic Acid Injection
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    &#8377;5,000 – &#8377;15,000
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    Lubricates the joint — helpful for mild–moderate arthritis.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                                <p className="text-sm font-medium text-blue-700 mb-1">
                                    Knee Replacement Surgery
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    &#8377;2.5L – &#8377;5L
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    For advanced arthritis where conservative care no longer
                                    helps. Insurance widely covers this.
                                </p>
                            </div>
                        </div>

                        <p className="text-center text-sm text-blue-800 mt-6">
                            Most patients never need surgery — we&apos;ll always exhaust
                            conservative options first. Insurance assistance available at
                            both clinics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Patient Success Stories
                        </h2>
                        <p className="text-lg text-gray-600">
                            Real patients sharing how they got their knees — and lives —
                            back.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/hNDU1Sx5gMc"
                                title="Patient Testimonial 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XFDLO_nR6x4"
                                title="Patient Testimonial 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/swT9lwWwSbU"
                                title="Patient Testimonial 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section id="booking-form" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Book Your Knee Consultation
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tell us a little about your knee — we&apos;ll get back within
                                24 hours to confirm your appointment.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <BookingForm source="ads-knee-pain" />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">Prefer to call?</p>
                            <a
                                href={`tel:${heroPhone}`}
                                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-xl"
                            >
                                <Phone className="w-5 h-5" />
                                {heroPhone}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Visit Us — Two Convenient Locations
                        </h2>
                        <p className="text-lg text-gray-600">
                            Knee care in HSR Layout and Attibele, Bengaluru.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {CLINICS.map((location) => (
                            <div
                                key={location.id}
                                className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
                            >
                                <h3 className="text-2xl font-bold text-center text-gray-900 bg-yellow-200 mb-6">
                                    {location.name}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-800 font-medium">
                                                {location.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <div>
                                            {location.hours.map((h) => (
                                                <p
                                                    key={h.label}
                                                    className="text-gray-800"
                                                >
                                                    {h.label}: {h.display}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <a
                                            href={`tel:${location.phone}`}
                                            className="text-blue-700 hover:text-blue-800 font-medium"
                                        >
                                            {location.phone}
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
                        Don&apos;t Let Knee Pain Hold You Back
                    </h2>
                    <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
                        Get a proper diagnosis and a clear plan — without rushing into
                        surgery. Same-day appointments available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedButton
                            buttonName="Book Appointment - Final CTA"
                            buttonLocation="Final CTA Section"
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                cta_type: "form_scroll",
                                condition: "knee-pain",
                            }}
                        >
                            Book Free Consultation
                        </TrackedButton>
                        <TrackedButton
                            buttonName="Call Now - Final CTA"
                            buttonLocation="Final CTA Section"
                            href={`tel:${heroPhone}`}
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                phone_number: heroPhone,
                                cta_type: "phone",
                                condition: "knee-pain",
                            }}
                        >
                            <Phone className="w-5 h-5" />
                            Call {heroPhone}
                        </TrackedButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
