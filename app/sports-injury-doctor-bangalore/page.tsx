import { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/forms/booking-form";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Activity,
    Users,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Trophy,
} from "lucide-react";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";

export const metadata: Metadata = {
    title: "Sports Injury Doctor Bangalore | Dr. Nitin N Sunku",
    description:
        "Sports injury specialist in Bangalore & official Bengaluru FC team doctor. ACL, meniscus, shoulder & ankle care. Same-day appointments — book now.",
    alternates: { canonical: `${siteOrigin}/sports-injury-doctor-bangalore` },
    keywords: [
        "sports injury doctor Bangalore",
        "sports medicine specialist Bengaluru",
        "ACL surgery Bangalore",
        "meniscus tear surgeon Bangalore",
        "arthroscopy specialist Bangalore",
        "Bengaluru FC team doctor",
        "shoulder dislocation treatment Bangalore",
        "rotator cuff surgery Bangalore",
        "ankle sprain doctor HSR Layout",
        "sports injury clinic Attibele",
        "athlete orthopedic surgeon Bangalore",
        "Dr. Nitin N Sunku sports injury",
    ],
    openGraph: {
        title: "Sports Injury Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Official Bengaluru FC team doctor. Fellowship-trained in arthroscopy & sports medicine. Same care for weekend athletes as for the pros.",
        type: "website",
    },
};

export default function SportsInjuryDoctorBangalorePage() {
    const heroPhone = PRIMARY_CLINIC.phone;

    const injuries = [
        "ACL Tear",
        "Meniscus Tear",
        "Ankle Sprain",
        "Rotator Cuff Tear",
        "Shoulder Dislocation",
        "Tennis / Golfer's Elbow",
        "Stress Fracture",
        "Achilles Tendinopathy",
    ];

    const sellingPoints = [
        {
            icon: Award,
            title: "Official Bengaluru FC Team Doctor",
            description:
                "The orthopedic surgeon trusted by an I-League / ISL professional football club — handling pitch-side decisions, acute injuries and return-to-play calls.",
        },
        {
            icon: Stethoscope,
            title: "Fellowship in Arthroscopy & Sports Medicine",
            description:
                "Subspecialty fellowship training focused on minimally invasive surgery and modern sports medicine — the same techniques used at elite sports centres.",
        },
        {
            icon: Activity,
            title: "Specialist in ACL Reconstruction",
            description:
                "High-volume ACL surgeon using anatomic single-bundle and revision techniques, with graft choice tailored to your sport and demands.",
        },
        {
            icon: Clock,
            title: "Rapid Diagnosis & On-Site Imaging Coordination",
            description:
                "MRI and X-ray coordinated quickly so you have a clear diagnosis — and a clear plan — within days, not weeks.",
        },
        {
            icon: ShieldCheck,
            title: "Structured Return-to-Play Protocols",
            description:
                "Sport-specific rehabilitation milestones, strength testing and clearance criteria — the same framework used for professional athletes.",
        },
        {
            icon: Users,
            title: "Trusted by Competitive Athletes & Weekend Warriors Alike",
            description:
                "From national-level competitors to recreational runners, footballers and cricketers — the same standard of evidence-based care for every patient.",
        },
    ];

    const recoveryTimelines = [
        {
            injury: "Ankle Sprain (Grade 1–2)",
            timeline: "2–6 weeks",
            note: "Most return to sport with structured rehab; bracing for higher-grade sprains.",
        },
        {
            injury: "Meniscus Tear (Arthroscopic Repair)",
            timeline: "3–6 months",
            note: "Depends on tear pattern, repair vs. trim, and sport demands.",
        },
        {
            injury: "ACL Reconstruction",
            timeline: "6–9 months",
            note: "Pivot-sport return guided by strength testing, not just time.",
        },
        {
            injury: "Rotator Cuff Repair",
            timeline: "4–6 months",
            note: "Phased rehab; overhead athletes may take longer to full performance.",
        },
        {
            injury: "Tennis Elbow (Conservative)",
            timeline: "4–8 weeks",
            note: "Activity modification, eccentric loading, PRP for stubborn cases.",
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
                                alt="Dr. Nitin N Sunku — Sports Injury Specialist & Bengaluru FC Team Doctor, Bangalore"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2 mb-6">
                                <p className="text-sm font-medium">
                                    ✓ Official Bengaluru FC Team Doctor
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                                Sports Injury Specialist in{" "}
                                <span className="text-blue-700">Bangalore</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 text-blue-800 font-light">
                                Fellowship-trained in arthroscopy &amp; sports medicine —
                                same care for weekend athletes as for the pros.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Bengaluru FC Team Doctor
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Fellowship-Trained
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Same-Day Appointments
                                    </span>
                                </div>
                            </div>

                            {/* Mobile Image */}
                            <div className="relative h-[300px] w-full mb-8 lg:hidden">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Sports Injury Specialist & Bengaluru FC Team Doctor, Bangalore"
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
                                        condition: "sports-injury",
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
                                        condition: "sports-injury",
                                    }}
                                >
                                    Book Free Consultation
                                </TrackedButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Injuries We Treat */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Sports Injuries We Treat
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From acute ligament tears to overuse injuries — specialist
                            diagnosis and treatment for the full range of athletic injuries.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {injuries.map((injury) => (
                            <div
                                key={injury}
                                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors border border-gray-200"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="font-medium text-gray-800">
                                    {injury}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Bengaluru FC Connection */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 opacity-10">
                                <Trophy className="w-64 h-64" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                    <Trophy className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wide">
                                        The Bengaluru FC Connection
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    The orthopedic surgeon professional footballers trust —
                                    available to you.
                                </h2>

                                <p className="text-lg text-blue-50 leading-relaxed mb-6">
                                    Dr. Nitin serves as the official team doctor for{" "}
                                    <strong className="text-white">Bengaluru FC</strong>, one
                                    of India&apos;s top professional football clubs. That role
                                    means making pitch-side calls on acute injuries, leading
                                    diagnostic and surgical decisions for elite athletes, and
                                    owning return-to-play clearance for players whose careers
                                    depend on getting it right.
                                </p>

                                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                                    For you, that translates into faster, sharper diagnosis,
                                    confident judgement on whether you actually need surgery,
                                    and a rehabilitation pathway built on protocols used at
                                    the professional level — not generic advice.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/20">
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">
                                            10+ years
                                        </p>
                                        <p className="text-blue-100">
                                            treating athletes — from weekend warriors to
                                            national-level competitors.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">
                                            Pitch-side to clinic
                                        </p>
                                        <p className="text-blue-100">
                                            the same standard of acute injury care,
                                            applied to every patient who walks in.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Patients Choose Dr. Nitin */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Patients Choose Dr. Nitin for Sports Injuries
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Elite-level expertise, an athlete-first mindset, and a clear
                            path back to the sport you love.
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

            {/* Recovery Timelines */}
            <section className="py-16 md:py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                What&apos;s the Typical Recovery Timeline?
                            </h2>
                            <p className="text-lg text-blue-800 max-w-2xl mx-auto">
                                Indicative recovery windows so you can plan your return to
                                sport. Your timeline depends on injury severity, fitness, and
                                rehab adherence.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden">
                            {recoveryTimelines.map((row, idx) => (
                                <div
                                    key={row.injury}
                                    className={`p-6 ${idx !== recoveryTimelines.length - 1
                                        ? "border-b border-blue-100"
                                        : ""
                                        }`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                        <p className="text-lg font-semibold text-gray-900">
                                            {row.injury}
                                        </p>
                                        <span className="inline-block bg-blue-100 text-blue-800 font-semibold rounded-full px-4 py-1 text-sm sm:text-base self-start sm:self-auto">
                                            {row.timeline}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {row.note}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="text-center text-sm text-blue-800 mt-6">
                            Timelines are indicative — return-to-sport is always guided by
                            strength testing and functional milestones, not the calendar
                            alone.
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
                            Real patients sharing how they got back to the sport they love.
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
                                Book Your Sports Injury Consultation
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tell us a little about your injury — we&apos;ll get back
                                within 24 hours to confirm your appointment.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <BookingForm source="ads-sports-injury" />
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
                            Sports injury care in HSR Layout and Attibele, Bengaluru.
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
                        Don&apos;t Let a Sports Injury Sideline You
                    </h2>
                    <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
                        Get the same diagnostic precision and return-to-play planning
                        trusted by professional athletes. Same-day appointments
                        available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedButton
                            buttonName="Book Appointment - Final CTA"
                            buttonLocation="Final CTA Section"
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                cta_type: "form_scroll",
                                condition: "sports-injury",
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
                                condition: "sports-injury",
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
