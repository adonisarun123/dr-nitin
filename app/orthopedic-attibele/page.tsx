import { Metadata } from "next";
import Image from "next/image";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    Users,
    CheckCircle,
    Star,
    ShieldCheck,
    Stethoscope,
    Activity,
    Bone,
    GraduationCap,
    Hospital,
    MessageCircle,
    Calendar,
    Sparkles,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { ATTIBELE_CLINIC } from "@/lib/practice";
import { siteOrigin } from "@/lib/site-url";

// ---------- SEO ----------
export const metadata: Metadata = {
    title:
        "Best Orthopedic Doctor in Attibele | Dr. Nitin N Sunku — Same-Day Appointment",
    description:
        "Dr. Nitin N Sunku — leading Orthopedic & Sports Medicine Specialist at Raghava Multispeciality Hospital, Attibele. Knee pain, joint replacement, sports injury, arthroscopy & fracture care. Same-day appointments available. Call +91-9980031006.",
    alternates: {
        canonical: `${siteOrigin}/orthopedic-attibele`,
    },
    keywords: [
        "orthopedic doctor Attibele",
        "best ortho doctor Attibele",
        "knee pain doctor Attibele",
        "joint replacement Attibele",
        "sports injury Attibele",
        "arthroscopy surgeon Attibele",
        "Raghava Multispeciality Hospital",
        "Dr. Nitin N Sunku",
        "bone doctor Attibele",
        "orthopedic surgeon Anekal",
        "ortho doctor Bommasandra",
        "ortho doctor Chandapura",
        "knee surgeon Electronic City",
    ],
    openGraph: {
        title: "Best Orthopedic Doctor in Attibele — Dr. Nitin N Sunku",
        description:
            "Same-day orthopedic appointments at Raghava Multispeciality Hospital, Attibele. Knee, joint, sports injury & fracture care.",
        url: `${siteOrigin}/orthopedic-attibele`,
        type: "website",
    },
    robots: {
        // Allow ads landing pages to be indexed; they target unique long-tail
        // keywords ("ortho doctor attibele") that don't compete with the
        // homepage or book-appointment page.
        index: true,
        follow: true,
    },
};

// ---------- DATA ----------
const PHONE = ATTIBELE_CLINIC.phone; // +91-9980031006
const PHONE_DIGITS = ATTIBELE_CLINIC.phoneDigits; // 919980031006
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment at the Attibele clinic.";

const services = [
    {
        title: "Arthroscopy",
        description: "Minimally invasive keyhole surgeries for joints.",
        Icon: Activity,
    },
    {
        title: "Sports Injury Management",
        description: "Expert care for athletes & active individuals.",
        Icon: Sparkles,
    },
    {
        title: "Joint Replacement",
        description: "Hip, knee & shoulder replacement for better mobility.",
        Icon: Bone,
    },
    {
        title: "Spine Care",
        description: "Diagnosis & treatment for spine conditions and pain.",
        Icon: Stethoscope,
    },
    {
        title: "Fracture Care",
        description: "Advanced care for fractures and trauma injuries.",
        Icon: ShieldCheck,
    },
    {
        title: "Rehabilitation & Physiotherapy",
        description: "Personalized rehab for faster & stronger recovery.",
        Icon: Heart,
    },
];

const googleReviews = [
    {
        initial: "A",
        name: "Arjun R.",
        bg: "bg-green-500",
        text: "Excellent doctor! He explained the issue in detail and the treatment was very effective. Highly recommended.",
    },
    {
        initial: "P",
        name: "Pooja S.",
        bg: "bg-purple-500",
        text: "I had shoulder arthroscopy. Recovery was smooth and Dr. Nitin's care was exceptional.",
    },
    {
        initial: "K",
        name: "Karthik M.",
        bg: "bg-blue-500",
        text: "Very professional and friendly. Best orthopedic surgeon in HSR Layout & Attibele area.",
    },
    {
        initial: "S",
        name: "Sunita G.",
        bg: "bg-pink-500",
        text: "Dr. Nitin treated my mother's knee arthritis without surgery. We are so grateful for his patience and expertise.",
    },
];

const whyChoose = [
    {
        title: "Expertise You Can Trust",
        description: "Specialized care by an experienced orthopedic doctor.",
        Icon: ShieldCheck,
    },
    {
        title: "Patient-Centered Approach",
        description: "We listen, we care, we treat you like family.",
        Icon: Heart,
    },
    {
        title: "Advanced Technology",
        description: "Modern techniques for accurate diagnosis & effective treatment.",
        Icon: CheckCircle,
    },
    {
        title: "Comprehensive Care",
        description: "From diagnosis to rehab — we are with you at every step.",
        Icon: Stethoscope,
    },
    {
        title: "Convenient Location",
        description: "Right on Sarjapura–Attibele Road, easy access from Anekal, Bommasandra & Electronic City.",
        Icon: MapPin,
    },
    {
        title: "Proven Patient Satisfaction",
        description: "Trusted by hundreds of happy patients.",
        Icon: Award,
    },
];

// ---------- PAGE ----------
export default function OrthopedicAttibeleLandingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hide site-wide header/footer for a focused ad LP */}
            <HideNavigation />
            {/* Page view, scroll, time-on-page, exit-intent tracking */}
            <LandingPageTracker />

            {/* ------------- TOP NAV (lightweight) ------------- */}
            <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
                <div className="container mx-auto px-4 flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/icon.svg"
                            alt="Dr. Nitin N Sunku"
                            width={36}
                            height={36}
                            className="rounded-full"
                        />
                        <span className="font-bold text-blue-900 text-lg md:text-xl leading-tight">
                            Dr. Nitin N Sunku
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                        <a href="#services" className="hover:text-blue-700">Services</a>
                        <a href="#reviews" className="hover:text-blue-700">Reviews</a>
                        <a href="#about" className="hover:text-blue-700">About</a>
                        <a href="#contact" className="hover:text-blue-700">Contact</a>
                    </div>
                    <TrackedButton
                        buttonName="Book Appointment - Nav"
                        buttonLocation="Top Nav"
                        href="#booking-form"
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded-lg shadow"
                        metadata={{ cta_type: "form_scroll" }}
                    >
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                    </TrackedButton>
                </div>
            </nav>

            {/* ------------- HERO ------------- */}
            <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
                <div className="container mx-auto px-4 py-10 md:py-16">
                    <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
                        {/* Left: Headline + CTAs */}
                        <div>
                            <span className="inline-block bg-blue-700 text-white text-xs md:text-sm font-medium rounded-full px-4 py-1.5 mb-6">
                                Orthopedic &amp; Sports Medicine Specialist
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-4">
                                Dr. Nitin <br className="hidden md:block" /> N Sunku
                            </h1>
                            <p className="text-lg md:text-xl text-blue-700 font-semibold mb-4">
                                Orthopedic &amp; Sports Medicine Specialist
                            </p>
                            <p className="text-base md:text-lg text-gray-700 mb-6 max-w-xl">
                                Trusted orthopedic doctor in <strong>Attibele, Bengaluru</strong> —
                                specializing in arthroscopy, sports injuries, joint replacement,
                                and compassionate, evidence-based care.
                            </p>

                            {/* Trust strip */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 bg-white border border-blue-100 rounded-lg px-3 py-1.5 text-sm font-medium text-blue-900 shadow-sm">
                                    <CheckCircle className="w-4 h-4 text-blue-600" />
                                    Same-Day Appointment
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white border border-blue-100 rounded-lg px-3 py-1.5 text-sm font-medium text-blue-900 shadow-sm">
                                    <Award className="w-4 h-4 text-blue-600" />
                                    10+ Years Experience
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white border border-blue-100 rounded-lg px-3 py-1.5 text-sm font-medium text-blue-900 shadow-sm">
                                    <Star className="w-4 h-4 text-yellow-500" />
                                    Patient-Rated 4.9
                                </span>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <TrackedButton
                                    buttonName="Book Appointment - Hero"
                                    buttonLocation="Hero"
                                    href="#booking-form"
                                    className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg transition-all transform hover:scale-[1.02]"
                                    metadata={{ cta_type: "form_scroll" }}
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </TrackedButton>
                                <a
                                    href="#services"
                                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3.5 rounded-lg transition-all"
                                >
                                    <Stethoscope className="w-5 h-5" />
                                    View Services
                                </a>
                            </div>

                            {/* Click-to-call */}
                            <TrackedCall
                                phone={PHONE}
                                location="Hero"
                                className="inline-flex items-center gap-3 group"
                            >
                                <span className="w-10 h-10 bg-blue-700 group-hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                                    <Phone className="w-5 h-5 text-white" />
                                </span>
                                <span className="text-xl md:text-2xl font-bold text-blue-900">
                                    {PHONE}
                                </span>
                            </TrackedCall>

                            <div className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                                <MapPin className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                                <span>
                                    Patient-rated · Consultations at Raghava Multispeciality Hospital,
                                    Attibele
                                </span>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative h-[400px] lg:h-[560px] w-full">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                alt="Dr. Nitin N Sunku — Orthopedic & Sports Medicine Specialist"
                                fill
                                priority
                                className="object-contain object-center"
                                sizes="(max-width: 1024px) 100vw, 600px"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------- VIDEO TESTIMONIAL ------------- */}
            <section className="bg-blue-50/60 py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
                        <div>
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-3">
                                Patient Video Testimonial
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Real Stories.
                                <br />
                                Real Recovery.
                            </h2>
                            <p className="text-gray-700 mb-6 max-w-md">
                                Hear from our patients about their journey to pain-free living.
                            </p>
                            <TrackedButton
                                buttonName="Book Appointment - Testimonial"
                                buttonLocation="Video Testimonial"
                                href="#booking-form"
                                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow"
                                metadata={{ cta_type: "form_scroll" }}
                            >
                                <Calendar className="w-5 h-5" />
                                Book Appointment
                            </TrackedButton>
                        </div>
                        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-black">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/hNDU1Sx5gMc"
                                title="Patient testimonial — Dr. Nitin N Sunku"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------- GOOGLE REVIEWS ------------- */}
            <section id="reviews" className="bg-white py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                                Google Reviews
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
                                What Our Patients Say
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-lg font-bold">
                                    <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                        G
                                    </span>
                                </span>
                            </h2>
                        </div>
                        <TrackedButton
                            buttonName="Book Appointment - Reviews"
                            buttonLocation="Reviews"
                            href="#booking-form"
                            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-lg shadow self-start md:self-auto"
                            metadata={{ cta_type: "form_scroll" }}
                        >
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </TrackedButton>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {googleReviews.map((r) => (
                            <div
                                key={r.name}
                                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span
                                        className={`${r.bg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold`}
                                    >
                                        {r.initial}
                                    </span>
                                    <div>
                                        <p className="font-semibold text-gray-900 leading-tight">
                                            {r.name}
                                        </p>
                                        <div className="flex text-yellow-400 mt-0.5">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="w-4 h-4 fill-yellow-400"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                                    {r.text}
                                </p>
                                <div className="mt-3 flex justify-end">
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold">
                                        <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                            G
                                        </span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------- SERVICES ------------- */}
            <section id="services" className="bg-blue-50/60 py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
                        <div>
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                                Our Services
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Comprehensive Orthopedic Care
                            </h2>
                        </div>
                        <TrackedButton
                            buttonName="Book Appointment - Services"
                            buttonLocation="Services"
                            href="#booking-form"
                            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-lg shadow self-start md:self-auto"
                            metadata={{ cta_type: "form_scroll" }}
                        >
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </TrackedButton>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {services.map(({ title, description, Icon }) => (
                            <div
                                key={title}
                                className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition text-center"
                            >
                                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Icon className="w-7 h-7 text-blue-700" />
                                </div>
                                <h3 className="font-semibold text-blue-900 text-sm md:text-base mb-2 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------- ABOUT ------------- */}
            <section id="about" className="bg-white py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Doctor image */}
                        <div className="relative h-[420px] rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gradient-to-br from-blue-50 to-white">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                alt="Dr. Nitin N Sunku"
                                fill
                                className="object-contain object-center"
                                sizes="(max-width: 1024px) 100vw, 400px"
                            />
                        </div>

                        {/* About content */}
                        <div className="lg:col-span-1">
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                                About Dr. Nitin N Sunku
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                Dedicated to Your Mobility and Well-being
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Dr. Nitin N Sunku is a highly skilled Orthopedic &amp; Sports
                                Medicine Specialist with extensive experience in arthroscopy,
                                joint replacement, sports injury management, and trauma care.
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                He is committed to providing personalized, compassionate, and
                                evidence-based care to help patients regain mobility and live
                                pain-free lives.
                            </p>

                            {/* Credentials */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                    <GraduationCap className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                                    <p className="text-xs font-semibold text-blue-900">
                                        MBBS, MS (Ortho)
                                    </p>
                                    <p className="text-[11px] text-gray-600 mt-1">
                                        Fellowship in Arthroscopy &amp; Sports Medicine
                                    </p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                    <Award className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                                    <p className="text-xs font-semibold text-blue-900">
                                        10+ Years
                                    </p>
                                    <p className="text-[11px] text-gray-600 mt-1">Experience</p>
                                </div>
                                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                                    <Hospital className="w-6 h-6 mx-auto text-blue-700 mb-2" />
                                    <p className="text-xs font-semibold text-blue-900">
                                        Attibele, Bengaluru
                                    </p>
                                    <p className="text-[11px] text-gray-600 mt-1">
                                        Raghava Multispeciality Hospital
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Booking card */}
                        <div
                            id="contact"
                            className="bg-blue-700 text-white rounded-2xl p-6 shadow-xl"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <Calendar className="w-5 h-5" />
                                <h3 className="font-semibold text-lg">Book Appointment</h3>
                            </div>
                            <p className="text-blue-100 mb-5">
                                Take the first step towards pain-free living.
                            </p>

                            <TrackedCall
                                phone={PHONE}
                                location="About Card"
                                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-3 mb-3 transition"
                            >
                                <Phone className="w-5 h-5" />
                                <span className="font-bold text-lg">{PHONE}</span>
                            </TrackedCall>

                            <TrackedWhatsApp
                                phoneDigits={PHONE_DIGITS}
                                message={WHATSAPP_MESSAGE}
                                location="About Card"
                                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 rounded-lg px-4 py-3 mb-4 transition w-full"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span className="font-semibold">Chat on WhatsApp</span>
                            </TrackedWhatsApp>

                            <div className="flex items-start gap-2 text-sm text-blue-100">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>
                                    Consultations at Raghava Multispeciality Hospital, Attibele,
                                    Bengaluru
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------- WHY CHOOSE US ------------- */}
            <section className="bg-gray-50 py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl text-center">
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                        — Why Choose Us —
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                        Your Health. Our Priority.
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {whyChoose.map(({ title, description, Icon }) => (
                            <div
                                key={title}
                                className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                            >
                                <Icon className="w-7 h-7 text-blue-700 mx-auto mb-2" />
                                <h3 className="font-semibold text-blue-900 text-sm mb-1.5 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-xs text-gray-600 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ------------- BOOKING FORM ------------- */}
            <section
                id="booking-form"
                className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-20"
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                                Same-Day Appointments Available
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                Book Your Appointment
                            </h2>
                            <p className="text-gray-700">
                                Fill out the form below — our team will call you back within
                                a few hours to confirm your slot.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">
                            <BookingForm source="ads-attibele" />
                        </div>

                        <div className="mt-8 grid sm:grid-cols-2 gap-3">
                            <TrackedCall
                                phone={PHONE}
                                location="Booking Section"
                                className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3.5 rounded-lg shadow"
                            >
                                <Phone className="w-5 h-5" />
                                Call {PHONE}
                            </TrackedCall>
                            <TrackedWhatsApp
                                phoneDigits={PHONE_DIGITS}
                                message={WHATSAPP_MESSAGE}
                                location="Booking Section"
                                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3.5 rounded-lg shadow"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp Us
                            </TrackedWhatsApp>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------- LOCATION ------------- */}
            <section className="bg-white py-14 md:py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide mb-2">
                                Our Clinic
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Raghava Multispeciality Hospital, Attibele
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <div className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                    <p>{ATTIBELE_CLINIC.address}</p>
                                </div>
                                <div className="flex gap-3">
                                    <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                    <div>
                                        {ATTIBELE_CLINIC.hours.map((h) => (
                                            <p key={h.label}>
                                                {h.label}: {h.display}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                    <TrackedCall
                                        phone={PHONE}
                                        location="Clinic Card"
                                        className="text-blue-700 hover:text-blue-800 font-semibold"
                                    >
                                        {PHONE}
                                    </TrackedCall>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                Easy access from Anekal, Bommasandra, Chandapura, Hosur Road
                                &amp; Electronic City.
                            </p>
                        </div>
                        <div className="aspect-video w-full rounded-xl overflow-hidden border border-gray-200 shadow-md">
                            <iframe
                                src={ATTIBELE_CLINIC.mapEmbedSrc}
                                width="100%"
                                height="100%"
                                loading="lazy"
                                style={{ border: 0 }}
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Raghava Multispeciality Hospital, Attibele — Map"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------- STICKY BOTTOM BAR ------------- */}
            <section className="bg-blue-700 text-white py-5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-4 items-center max-w-6xl mx-auto">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-6 h-6" />
                            <div>
                                <p className="font-bold text-lg leading-tight">
                                    Don&apos;t Let Pain Hold You Back.
                                </p>
                                <p className="text-blue-100 text-sm">
                                    Book Your Appointment Today!
                                </p>
                            </div>
                        </div>
                        <TrackedButton
                            buttonName="Book Appointment - Footer Bar"
                            buttonLocation="Bottom Bar"
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3 rounded-lg shadow"
                            metadata={{ cta_type: "form_scroll" }}
                        >
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </TrackedButton>
                        <TrackedCall
                            phone={PHONE}
                            location="Bottom Bar"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-5 py-3 rounded-lg transition"
                        >
                            <Phone className="w-5 h-5" />
                            {PHONE}
                        </TrackedCall>
                    </div>
                </div>
            </section>

            {/* ------------- MOBILE STICKY CTA ------------- */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-white border-t border-gray-200 shadow-2xl">
                <TrackedCall
                    phone={PHONE}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-blue-700 text-white text-xs font-semibold"
                >
                    <Phone className="w-5 h-5" />
                    Call
                </TrackedCall>
                <TrackedWhatsApp
                    phoneDigits={PHONE_DIGITS}
                    message={WHATSAPP_MESSAGE}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-green-500 text-white text-xs font-semibold"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </TrackedWhatsApp>
                <TrackedButton
                    buttonName="Book - Mobile Sticky"
                    buttonLocation="Mobile Sticky"
                    href="#booking-form"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-orange-500 text-white text-xs font-semibold"
                    metadata={{ cta_type: "form_scroll" }}
                >
                    <Calendar className="w-5 h-5" />
                    Book
                </TrackedButton>
            </div>

            {/* Spacer so mobile sticky CTA never covers footer content */}
            <div className="md:hidden h-16" />

            {/* Minimal legal footer */}
            <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
                <div className="container mx-auto px-4">
                    <p>
                        © {new Date().getFullYear()} Dr. Nitin N Sunku · Orthopedic
                        Specialist · Attibele, Bengaluru
                    </p>
                    <p className="mt-1 text-xs">
                        Disclaimer: Information on this page is for general awareness and
                        does not replace medical advice. Please consult a qualified doctor.
                    </p>
                </div>
            </footer>
        </main>
    );
}
