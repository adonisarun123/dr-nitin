import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
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
    ChevronRight,
    Zap,
    UserCheck,
    Brain,
    Syringe,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { HSR_CLINIC, CLINICS } from "@/lib/practice";
import { siteOrigin } from "@/lib/site-url";
import { LockBodyOverflow } from "./lock-body-overflow";
import { LandingFaq } from "@/components/landing/landing-faq";

// ---------- SEO ----------
export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    // Also trimmed: the previous 85-char title was truncated in SERPs.
    title: { absolute: "Orthopedic Doctor in HSR Layout, Bangalore | Dr. Nitin Sunku" },
    description:
        "Dr. Nitin N Sunku — trusted bone doctor & orthopedic specialist in HSR Layout, Bengaluru. Expert care for knee pain, joint replacement, sports injury, arthritis, arthroscopy & fracture care. Same-day appointments with a top bone specialist in Bangalore.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-in-hsr-layout` },
    keywords: [
        "bone doctor HSR Layout",
        "bone doctor near me",
        "best bone doctor near me",
        "nearest bone doctor",
        "bone specialist near me",
        "nearby bone specialist",
        "bone specialist Bangalore",
        "bone specialists near me",
        "trusted orthopedic doctor HSR Layout",
        "orthopedic doctor HSR Layout",
        "best ortho doctor HSR Layout",
        "orthopedic doctor near me",
        "orthopedic doctor Bangalore",
        "knee pain doctor HSR Layout",
        "joint replacement HSR Layout",
        "sports injury doctor HSR Layout",
        "sports orthopedic doctor HSR Layout",
        "sports orthopedic doctor Bangalore",
        "sports ortho doctor HSR",
        "sports orthopedics",
        "sports medicine specialist near me",
        "orthopaedic clinic near me",
        "orthopaedic clinic in HSR Layout",
        "total knee replacement surgery",
        "arthroscopy surgeon HSR Layout",
        "Health Nest Hospital HSR Layout",
        "Dr. Nitin N Sunku",
        "ortho doctor Koramangala",
        "ortho doctor BTM Layout",
        "knee surgeon HSR Layout",
        "orthopedic specialist HSR Layout",
    ],
    openGraph: {
        title: "Trusted Bone Doctor & Orthopedic Specialist in HSR Layout | Dr. Nitin Sunku",
        description:
            "Same-day appointments with a trusted bone doctor & orthopedic specialist at our HSR Layout clinic — knee, joint, sports injury, arthroscopy & fracture care.",
        url: `${siteOrigin}/orthopedic-doctor-in-hsr-layout`,
        type: "website",
    },
    // Indexed (Aug 2026): this is now the site's organic page for the HSR Layout
    // clinic. The other HSR/near-me variants stay noindex so nothing cannibalises it.
    robots: { index: true, follow: true },
};

// ---------- DATA ----------
// HSR Layout is the primary clinic for this landing page
const PRIMARY_PHONE = HSR_CLINIC.phone;
const PRIMARY_PHONE_DIGITS = HSR_CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment.";

// Crawl paths out of this page. It hides the global nav (ads-conversion layout),
// so without these the page would be an organic dead end for Googlebot.
const RELATED_LINKS = [
    { label: "Orthopedic doctor in Attibele", href: "/orthopedic-doctor-attibele" },
    { label: "Knee pain treatment in Bangalore", href: "/knee-pain-bangalore" },
    { label: "Shoulder pain specialist in Bangalore", href: "/shoulder-pain-bangalore" },
    { label: "Back pain & spine care in Bangalore", href: "/back-pain-bangalore" },
    { label: "Neck pain & cervical spondylosis", href: "/neck-pain-bangalore" },
    { label: "Hip pain & AVN treatment", href: "/hip-pain-bangalore" },
    { label: "Arthritis treatment in Bangalore", href: "/arthritis-treatment-bangalore" },
    { label: "Sports injury doctor in Bangalore", href: "/sports-injury-doctor-bangalore" },
    { label: "ACL reconstruction in Bangalore", href: "/acl-reconstruction-bangalore" },
    { label: "Knee replacement cost in Bangalore", href: "/knee-replacement-cost-bangalore" },
    { label: "Insurance & cashless orthopedic treatment", href: "/insurance-cashless-orthopedic-treatment" },
    { label: "About Dr. Nitin N Sunku", href: "/about" },
];

const services = [
    {
        title: "Arthroscopy",
        description: "Minimally invasive keyhole surgeries for joints.",
        Icon: Activity,
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Sports Injury",
        description: "Sports orthopedic care for athletes & active individuals — ACL, ligament & cartilage injuries.",
        Icon: Sparkles,
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Joint Replacement",
        description: "Hip, knee & shoulder replacement for better mobility.",
        Icon: Bone,
        color: "from-orange-500 to-orange-600",
        bg: "bg-orange-50",
    },
    {
        title: "Spine Care",
        description: "Diagnosis & treatment for spine conditions and pain.",
        Icon: Brain,
        color: "from-purple-500 to-purple-600",
        bg: "bg-purple-50",
    },
    {
        title: "Fracture Care",
        description: "Advanced care for fractures and trauma injuries.",
        Icon: ShieldCheck,
        color: "from-red-500 to-red-600",
        bg: "bg-red-50",
    },
    {
        title: "Rehabilitation",
        description: "Personalized rehab for faster, stronger recovery.",
        Icon: Heart,
        color: "from-pink-500 to-pink-600",
        bg: "bg-pink-50",
    },
    {
        title: "Regenerative Treatments",
        description: "PRP & advanced therapies to heal naturally.",
        Icon: Syringe,
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-50",
    },
];

const googleReviews = [
    {
        initial: "A",
        name: "Arjun R.",
        when: "2 weeks ago",
        bg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        text: "Excellent doctor! He explained the issue in detail and the treatment was very effective. Highly recommended.",
    },
    {
        initial: "P",
        name: "Pooja S.",
        when: "1 month ago",
        bg: "bg-gradient-to-br from-purple-400 to-purple-600",
        text: "I had shoulder arthroscopy. Recovery was smooth and Dr. Nitin's care was exceptional throughout.",
    },
    {
        initial: "K",
        name: "Karthik M.",
        when: "3 weeks ago",
        bg: "bg-gradient-to-br from-blue-400 to-blue-600",
        text: "Very professional and friendly. Best orthopedic surgeon in the Attibele area, hands down.",
    },
    {
        initial: "S",
        name: "Sunita G.",
        when: "1 month ago",
        bg: "bg-gradient-to-br from-pink-400 to-pink-600",
        text: "Dr. Nitin treated my mother's knee arthritis without surgery. So grateful for his patience and expertise.",
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
        description: "Modern techniques for accurate diagnosis & treatment.",
        Icon: Zap,
    },
    {
        title: "Comprehensive Care",
        description: "From diagnosis to rehab — with you at every step.",
        Icon: Stethoscope,
    },
    {
        title: "Convenient Location",
        description: "Two clinics — Attibele & HSR Layout — easy access from across south Bengaluru.",
        Icon: MapPin,
    },
    {
        title: "Proven Satisfaction",
        description: "Trusted by hundreds of happy patients.",
        Icon: UserCheck,
    },
];

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Happy Patients" },
    { value: "4.9★", label: "Patient Rating" },
    { value: "Same Day", label: "Appointments" },
];

// ---------- PAGE ----------
export default function OrthopedicAttibeleLandingPage() {
    return (
        <main className="min-h-screen bg-white w-full overflow-x-clip">
            <HideNavigation />
            <LockBodyOverflow />
            <LandingPageTracker />

            {/* ============= TOP NAV ============= */}
            <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 flex items-center justify-between py-3">
                    <Link
                        href="/"
                        aria-label="Dr. Nitin N Sunku — Home"
                        className="flex items-center gap-2 min-w-0 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                    >
                        <img
                            src="https://ik.imagekit.io/vlries1el/dr%20nitin/dr-nitin-sunku-logo.svg"
                            alt="Dr. Nitin N Sunku - Bone Doctor & Orthopedic Specialist in HSR Layout"
                            className="h-10 sm:h-12 w-auto flex-shrink-0"
                        />
                        <div className="min-w-0">
                            <p className="font-bold text-blue-900 text-sm sm:text-base leading-tight truncate">
                                Dr. Nitin N Sunku
                            </p>
                            <p className="text-[10px] sm:text-xs text-gray-500 leading-tight truncate">
                                Orthopedic Specialist
                            </p>
                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
                        <a href="#services" className="hover:text-blue-700 transition">Services</a>
                        <a href="#reviews" className="hover:text-blue-700 transition">Reviews</a>
                        <a href="#about" className="hover:text-blue-700 transition">About</a>
                        <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
                    </div>
                    <TrackedButton
                        buttonName="Book Appointment - Nav"
                        buttonLocation="Top Nav"
                        href="#booking-form"
                        className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
                        metadata={{ cta_type: "form_scroll" }}
                    >
                        <Calendar className="w-4 h-4" />
                        Book Now
                    </TrackedButton>
                    <TrackedCall
                        phone={PRIMARY_PHONE}
                        location="Top Nav Mobile"
                        className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                    >
                        <Phone className="w-4 h-4" />
                    </TrackedCall>
                </div>
            </nav>

            {/* ============= HERO ============= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                {/* Decorative orbs */}
                <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        {/* Left content */}
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Same-Day Appointments Available
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Trusted Orthopedic Doctor{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in HSR Layout
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Bone, Joint &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Dr. Nitin N Sunku is a trusted bone doctor and orthopedic specialist in HSR Layout, Bengaluru, specializing in sports injuries, arthroscopy, joint replacement, trauma care, and advanced orthopedic treatments. With over 10 years of experience, he is known for delivering evidence-based, patient-focused care using minimally invasive and arthroscopic techniques for faster recovery and long-term results.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    If you have been searching for a bone doctor near me, a bone specialist in Bangalore, or the best orthopedic doctor in HSR Layout, Dr. Sunku provides expert care for knee pain, shoulder injuries, fractures, arthritis, ligament injuries and sports medicine. He currently serves as Team Doctor for Bengaluru Football Club and consults at leading hospitals in Bengaluru. For those considering surgery, he also performs total knee replacement — see our detailed <a href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">knee replacement surgery cost in Bangalore</a> guide.
                                </p>

                                {/* HSR Layout clinic chip */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold">
                                        <MapPin className="w-3.5 h-3.5" />
                                        HSR Layout Clinic
                                    </span>
                                </div>

                                {/* Trust pills */}
                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Day Slots
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Award className="w-3.5 h-3.5 text-blue-600" />
                                        10+ Years
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        4.9 Rated
                                    </span>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </TrackedButton>
                                    <TrackedWhatsApp
                                        phoneDigits={PRIMARY_PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="Hero"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </TrackedWhatsApp>
                                </div>

                                {/* Phone */}
                                <TrackedCall
                                    phone={PRIMARY_PHONE}
                                    location="Hero"
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <span className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] text-gray-500 leading-tight">Call directly</p>
                                        <p className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">
                                            {PRIMARY_PHONE}
                                        </p>
                                    </div>
                                </TrackedCall>
                            </div>
                        </FadeIn>

                        {/* Right image */}
                        <FadeIn direction="left" delay={0.15}>
                            <div className="relative">
                                {/* Background glow */}
                                <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-[3rem] blur-2xl"></div>

                                {/* Image container */}
                                <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                                    <Image
                                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                        alt="Dr. Nitin N Sunku — Bone Specialist & Orthopedic Doctor in HSR Layout, Bengaluru"
                                        fill
                                        priority
                                        className="object-contain object-center drop-shadow-2xl"
                                        sizes="(max-width: 1024px) 100vw, 600px"
                                    />
                                </div>

                                {/* Floating cards */}
                                <div className="hidden sm:block absolute top-6 left-0 bg-white/95 backdrop-blur rounded-xl shadow-xl px-4 py-3 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                                            <CheckCircle className="w-5 h-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500">Verified Doctor</p>
                                            <p className="text-sm font-bold text-gray-900">MBBS, MS (Ortho)</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden sm:block absolute bottom-10 right-0 bg-white/95 backdrop-blur rounded-xl shadow-xl px-4 py-3 border border-gray-100">
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-1.5">
                                            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></span>
                                            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></span>
                                            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">5000+ Patients</p>
                                            <div className="flex items-center gap-0.5">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                ))}
                                                <span className="text-[11px] text-gray-500 ml-1">4.9</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= STATS STRIP ============= */}
            <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-8 md:py-10 relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center text-white">
                                <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                    {s.value}
                                </p>
                                <p className="text-xs md:text-sm text-blue-100 uppercase tracking-wider font-medium">
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= VIDEO TESTIMONIAL ============= */}
            <section className="bg-gradient-to-b from-white to-blue-50/40 py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                ★ Patient Video Testimonials
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight break-words">
                                Real Stories.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Real Recovery.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 mb-7 max-w-2xl mx-auto leading-relaxed">
                                Hear from real patients about their journey from chronic
                                pain to a pain-free life with Dr. Nitin N Sunku.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <FadeIn delay={0.1}>
                            <div className="relative">
                                <div aria-hidden className="absolute -inset-2 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-2xl blur-xl"></div>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/hNDU1Sx5gMc"
                                        title="Patient testimonial 1 — Dr. Nitin N Sunku"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        loading="lazy"
                                    allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </FadeIn>
                        
                        <FadeIn delay={0.2}>
                            <div className="relative">
                                <div aria-hidden className="absolute -inset-2 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-2xl blur-xl"></div>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/XFDLO_nR6x4"
                                        title="Patient testimonial 2 — Dr. Nitin N Sunku"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        loading="lazy"
                                    allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="relative">
                                <div aria-hidden className="absolute -inset-2 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-2xl blur-xl"></div>
                                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-white">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/En4AzvR6U_4"
                                        title="Patient testimonial 3 — Dr. Nitin N Sunku"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        loading="lazy"
                                    allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.4}>
                        <div className="text-center mt-10">
                            <TrackedButton
                                buttonName="Book Appointment - Video Testimonials"
                                buttonLocation="Video Testimonials"
                                href="#booking-form"
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                                metadata={{ cta_type: "form_scroll" }}
                            >
                                <Calendar className="w-5 h-5" />
                                Book Your Visit
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </TrackedButton>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= GOOGLE REVIEWS ============= */}
            <section id="reviews" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold">
                                    <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
                                </span>
                                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Google Reviews</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Our Patients Say
                            </h2>
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="font-bold text-gray-900">4.9</span>
                                <span>· Based on patient reviews</span>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {googleReviews.map((r, idx) => (
                            <FadeIn key={r.name} delay={idx * 0.08}>
                                <div className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <span className={`${r.bg} text-white w-11 h-11 rounded-full flex items-center justify-center font-bold shadow-md`}>
                                                {r.initial}
                                            </span>
                                            <div>
                                                <p className="font-bold text-gray-900 leading-tight">{r.name}</p>
                                                <p className="text-xs text-gray-500 mt-0.5">{r.when}</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold flex-shrink-0">
                                            <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">G</span>
                                        </span>
                                    </div>
                                    <div className="flex text-yellow-400 mb-3">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed flex-1">
                                        &ldquo;{r.text}&rdquo;
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="text-center mt-10">
                            <TrackedButton
                                buttonName="Book Appointment - Reviews"
                                buttonLocation="Reviews"
                                href="#booking-form"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                                metadata={{ cta_type: "form_scroll" }}
                            >
                                <Calendar className="w-4 h-4" />
                                Join Our Happy Patients
                            </TrackedButton>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= SERVICES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Our Services —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Advanced Orthopedic Care for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Pain-Free Movement
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Advanced treatment options from a trusted bone specialist for every orthopedic condition — all under one roof.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-5">
                        {services.map(({ title, description, Icon, color, bg }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group relative bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                                    <div aria-hidden className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br ${color} bg-clip-text`} style={{ color: 'currentColor' }} strokeWidth={2.2} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1.5 text-center leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-gray-600 text-center leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= ABOUT + BOOKING CARD ============= */}
            <section id="about" className="bg-white py-14 md:py-20 relative overflow-hidden">
                {/* overflow-hidden is intentional here — prevents FadeIn x-axis translate
                    and the absolute-positioned decorative orb from creating horizontal scroll */}
                <div aria-hidden className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                        {/* Doctor image */}
                        <FadeIn direction="right" className="lg:col-span-4">
                            <div className="relative h-[420px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Bone Doctor in HSR Layout"
                                    fill
                                    className="object-contain object-center"
                                    sizes="(max-width: 1024px) 100vw, 400px"
                                />
                                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg border border-white">
                                    <p className="text-xs text-gray-500">Verified Specialist</p>
                                    <p className="text-sm font-bold text-blue-900">MBBS · MS (Ortho)</p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* About content */}
                        <FadeIn delay={0.1} className="lg:col-span-5">
                            <div>
                                <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                    — About Dr. Nitin N Sunku —
                                </span>
                                <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed">
                                    What sets Dr. Nitin apart is his commitment to conservative-first treatment approach, exploring all non-surgical options before recommending surgery. His expertise in advanced arthroscopic techniques ensures that when surgery is necessary, patients benefit from smaller incisions, reduced pain, and faster rehabilitation.
                                </p>
                                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                    As an academic contributor to Springer&apos;s internationally acclaimed textbook &quot;Atlas of Arthroscopy,&quot; Dr. Sunku stays at the forefront of orthopedic innovations. His dual role as a clinician and educator ensures that every patient receives care based on the latest evidence-based practices and global best standards.
                                </p>

                                {/* Credentials */}
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-3 md:p-4 border border-blue-100 text-center">
                                        <GraduationCap className="w-5 h-5 md:w-6 md:h-6 mx-auto text-blue-700 mb-2" />
                                        <p className="text-xs md:text-sm font-bold text-blue-900 leading-tight">MBBS, MS</p>
                                        <p className="text-[10px] md:text-[11px] text-gray-600 mt-1 leading-tight">
                                            Ortho · Fellowship
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-xl p-3 md:p-4 border border-emerald-100 text-center">
                                        <Award className="w-5 h-5 md:w-6 md:h-6 mx-auto text-emerald-700 mb-2" />
                                        <p className="text-xs md:text-sm font-bold text-emerald-900 leading-tight">10+ Years</p>
                                        <p className="text-[10px] md:text-[11px] text-gray-600 mt-1 leading-tight">
                                            Experience
                                        </p>
                                    </div>
                                    <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-3 md:p-4 border border-orange-100 text-center">
                                        <Hospital className="w-5 h-5 md:w-6 md:h-6 mx-auto text-orange-700 mb-2" />
                                        <p className="text-xs md:text-sm font-bold text-orange-900 leading-tight">HSR Layout</p>
                                        <p className="text-[10px] md:text-[11px] text-gray-600 mt-1 leading-tight">
                                            Clinic Location
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Booking card */}
                        <FadeIn direction="left" delay={0.2} className="lg:col-span-3">
                            <div id="contact" className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white rounded-3xl p-6 md:p-7 shadow-2xl shadow-blue-500/30 h-full relative overflow-hidden">
                                <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                                <div aria-hidden className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-300/20 rounded-full blur-2xl"></div>
                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1 mb-4 text-xs font-semibold">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Available Today
                                    </div>
                                    <h3 className="font-bold text-xl md:text-2xl mb-2 leading-tight">
                                        Take the first step towards pain-free living
                                    </h3>
                                    <p className="text-blue-100 text-sm mb-6">
                                        Book your slot in under 30 seconds.
                                    </p>

                                    <TrackedCall
                                        phone={PRIMARY_PHONE}
                                        location="About Card"
                                        className="flex items-center gap-3 bg-white/15 hover:bg-white/25 backdrop-blur rounded-xl px-4 py-3 mb-3 transition w-full"
                                    >
                                        <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                            <Phone className="w-4 h-4" />
                                        </span>
                                        <div className="flex-1 text-left">
                                            <p className="text-[11px] text-blue-100">Call directly</p>
                                            <p className="font-bold text-base leading-tight">{PRIMARY_PHONE}</p>
                                        </div>
                                    </TrackedCall>

                                    <TrackedWhatsApp
                                        phoneDigits={PRIMARY_PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="About Card"
                                        className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl px-4 py-3 mb-5 transition w-full shadow-lg shadow-emerald-500/30"
                                    >
                                        <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                                            <MessageCircle className="w-4 h-4" />
                                        </span>
                                        <div className="flex-1 text-left">
                                            <p className="text-[11px] text-emerald-100">Chat instantly</p>
                                            <p className="font-bold text-base leading-tight">WhatsApp</p>
                                        </div>
                                    </TrackedWhatsApp>

                                    <div className="flex items-start gap-2 text-sm text-blue-100 border-t border-white/20 pt-4">
                                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                        <span className="leading-relaxed">
                                            Consultations at our <strong className="text-white">Attibele</strong> &amp; <strong className="text-white">HSR Layout</strong> clinics, Bengaluru
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= WHY CHOOSE US ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Us —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Your Health.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Our Priority.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Attibele &amp; surrounding areas trust Dr. Nitin.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {whyChoose.map(({ title, description, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-700 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">
                                                {title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= BOOKING FORM ============= */}
            <section id="booking-form" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 sm:py-16 md:py-24 overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-8 text-white">
                                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Same-Day Appointments
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your Appointment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Fill the form — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="hsr-layout-page" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <TrackedCall
                                    phone={PRIMARY_PHONE}
                                    location="Booking Section"
                                    className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-blue-700 font-semibold px-5 py-3.5 rounded-xl shadow-lg transition"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call {PRIMARY_PHONE}
                                </TrackedCall>
                                <TrackedWhatsApp
                                    phoneDigits={PRIMARY_PHONE_DIGITS}
                                    message={WHATSAPP_MESSAGE}
                                    location="Booking Section"
                                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Us
                                </TrackedWhatsApp>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= LOCATIONS (BOTH CLINICS) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-14">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Visit Our Clinic —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Expert Bone Doctor &amp; Orthopedic Specialist in HSR Layout with{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Advanced, Evidence-Based Treatments
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Visit Our Clinics — Expert Bone Doctor &amp; Orthopedic Specialist in HSR Layout with Advanced, Evidence-Based Treatments.
                            </p>
                        </div>
                    </FadeIn>

                    {/* HSR Layout clinic only */}
                    <div className="space-y-10 lg:space-y-14">
                        {CLINICS.filter(clinic => clinic.id === "hsr-layout").map((clinic, idx) => {
                            // Visual theming — HSR Layout clinic uses indigo
                            const isPrimary = false;
                            const themeBorder = isPrimary ? "border-blue-100" : "border-indigo-100";
                            const themeBg = isPrimary
                                ? "from-blue-50 via-white to-indigo-50"
                                : "from-indigo-50 via-white to-blue-50";
                            const themeIconBg = isPrimary ? "bg-blue-100" : "bg-indigo-100";
                            const themeIcon = isPrimary ? "text-blue-700" : "text-indigo-700";
                            const themeText = isPrimary ? "text-blue-700" : "text-indigo-700";
                            const themeTitle = isPrimary ? "text-blue-900" : "text-indigo-900";
                            const themePill = isPrimary
                                ? "border-blue-200 text-blue-700"
                                : "border-indigo-200 text-indigo-700";

                            return (
                                <FadeIn key={clinic.id} delay={idx * 0.1}>
                                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch w-full">
                                        {/* Clinic info card */}
                                        <div className={`bg-gradient-to-br ${themeBg} rounded-3xl p-5 sm:p-6 md:p-8 border ${themeBorder} shadow-sm h-full break-words w-full max-w-full overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                                            <div className="flex items-start justify-between gap-3 mb-5">
                                                <div className="min-w-0">
                                                    <span className={`inline-block text-[10px] font-bold ${themeText} uppercase tracking-widest mb-1`}>
                                                        Clinic {idx + 1} · {clinic.shortLocality}
                                                    </span>
                                                    <h3 className={`text-base sm:text-lg md:text-2xl font-bold ${themeTitle} leading-tight break-words hyphens-auto`}>
                                                        {clinic.name}
                                                    </h3>
                                                </div>
                                                {isPrimary && (
                                                    <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-1 flex-shrink-0">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                        Primary
                                                    </span>
                                                )}
                                            </div>
                                            <div className="space-y-4 text-gray-700">
                                                <div className="flex gap-3">
                                                    <span className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}>
                                                        <MapPin className={`w-5 h-5 ${themeIcon}`} />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}>Address</p>
                                                        <p className="text-sm leading-relaxed break-words">{clinic.address}</p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <span className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}>
                                                        <Clock className={`w-5 h-5 ${themeIcon}`} />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}>Hours</p>
                                                        {clinic.hours.map((h) => (
                                                            <p key={h.label} className="text-sm">
                                                                {h.label}: <span className="font-medium">{h.display}</span>
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <span className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}>
                                                        <Phone className={`w-5 h-5 ${themeIcon}`} />
                                                    </span>
                                                    <div className="min-w-0 flex-1">
                                                        <p className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}>Phone</p>
                                                        <TrackedCall
                                                            phone={clinic.phone}
                                                            location={`Clinic Card — ${clinic.shortLocality}`}
                                                            className={`${themeText} hover:opacity-80 font-bold text-base`}
                                                        >
                                                            {clinic.phone}
                                                        </TrackedCall>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Per-clinic CTA row */}
                                            <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                                <TrackedCall
                                                    phone={clinic.phone}
                                                    location={`Clinic Card CTA — ${clinic.shortLocality}`}
                                                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-blue-500/30 transition text-sm"
                                                >
                                                    <Phone className="w-4 h-4" />
                                                    Call
                                                </TrackedCall>
                                                <TrackedWhatsApp
                                                    phoneDigits={clinic.phoneDigits}
                                                    message={`Hi Dr. Nitin, I would like to book an appointment at the ${clinic.shortLocality} clinic.`}
                                                    location={`Clinic Card CTA — ${clinic.shortLocality}`}
                                                    className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-emerald-500/30 transition text-sm"
                                                >
                                                    <MessageCircle className="w-4 h-4" />
                                                    WhatsApp
                                                </TrackedWhatsApp>
                                            </div>

                                            <div className={`mt-6 pt-5 border-t ${themeBorder}`}>
                                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                                    Serving patients from
                                                </p>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {clinic.areaServed.map((area) => (
                                                        <span
                                                            key={area}
                                                            className={`inline-block bg-white border ${themePill} text-xs font-medium px-2.5 py-1 rounded-full`}
                                                        >
                                                            {area}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Map */}
                                        <div className={`min-w-0 w-full ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                                            <div className="aspect-video lg:aspect-auto lg:h-full w-full max-w-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[280px]">
                                                <iframe
                                                    src={clinic.mapEmbedSrc}
                                                    loading="lazy"
                                                    style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                                                    referrerPolicy="no-referrer-when-downgrade"
                                                    title={`${clinic.name}, ${clinic.shortLocality} — Map`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            <LandingFaq
                pageName="Orthopedic Doctor in HSR Layout, Bengaluru"
                pagePath="/orthopedic-doctor-in-hsr-layout"
                subheading="Practical answers about consulting Dr. Nitin at Health Nest Hospital, HSR Layout."
                items={[
                    {
                        q: "Is Dr. Nitin a bone specialist or an orthopedic doctor?",
                        a: "Both describe the same field. 'Bone doctor' and 'bone specialist' are the everyday names for an orthopedic doctor — a specialist in bones, joints, ligaments and muscles. Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine specialist, so whether you are looking for a bone specialist in Bangalore or a bone doctor near HSR Layout, you are in the right place.",
                    },
                    {
                        q: "How do I find the best bone doctor near me in HSR Layout?",
                        a: "Look for a fellowship-trained orthopedic specialist with focused experience in your specific problem, an honest conservative-first approach, and a clinic close enough for easy follow-up. Dr. Nitin consults at Health Nest Hospital in HSR Layout Sector 2 — call +91-9449031003 or use the booking form on this page to arrange a visit.",
                    },
                    {
                        q: "Where does Dr. Nitin consult in HSR Layout?",
                        a: "At Health Nest Hospital, 1162, 24th Main Road, Garden Layout, Sector 2, HSR Layout, Bengaluru 560102. Call +91-9449031003 to confirm timings, or book through the form on this page for a same-day slot where available.",
                    },
                    {
                        q: "What conditions are treated at the HSR Layout clinic?",
                        a: "Knee, shoulder, hip and ankle pain, sports injuries, ACL and meniscus tears, arthritis, fractures, back pain, and regenerative treatments such as PRP, GFC and hyaluronic acid injections. Surgical cases (arthroscopy, joint replacement) are evaluated here and scheduled at the partner hospital.",
                    },
                    {
                        q: "How much does a consultation cost?",
                        a: "A consultation typically costs ₹500–₹1,000 and includes a clinical examination and a written treatment plan. Imaging is advised only when it will genuinely change the treatment decision.",
                    },
                    {
                        q: "Can I get a same-day appointment in HSR Layout?",
                        a: "Usually, yes. Same-day and next-day slots are generally available on consulting days. WhatsApp or call ahead to confirm, or submit the booking form and the team will call back within hours.",
                    },
                    {
                        q: "Do you accept health insurance?",
                        a: "Yes — insurance is accepted and the team assists with pre-authorisation paperwork for procedures such as arthroscopy and joint replacement. Outpatient consultations are typically paid out of pocket unless your policy covers OPD.",
                    },
                    {
                        q: "Is surgery always recommended for joint problems?",
                        a: "No. The practice follows a conservative-first philosophy: physiotherapy, medication, lifestyle changes and targeted injections are exhausted before surgery is discussed. Surgery is recommended only when the evidence clearly supports it for your specific condition.",
                    },
                    {
                        q: "Does Dr. Nitin treat sports injuries as a sports orthopedic doctor?",
                        a: "Yes. As Team Doctor for Bengaluru Football Club, Dr. Nitin is a sports orthopedic doctor in HSR Layout with focused expertise in sports orthopedics and sports medicine — ACL and ligament injuries, cartilage and meniscus problems, tendon injuries, and safe return-to-play rehabilitation. If you are looking for a sports orthopedic doctor in Bangalore, the same standards used for professional players apply to weekend runners and gym-goers.",
                    },
                    {
                        q: "Is there an orthopaedic clinic near me in HSR Layout?",
                        a: "Yes — Dr. Nitin's orthopaedic clinic in HSR Layout is at Health Nest Hospital, Sector 2, 24th Main Road, convenient for patients across HSR Layout, Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9449031003 or use the booking form on this page to arrange a visit.",
                    },
                ]}
            />

            {/* ============= FINAL CTA STRIP ============= */}
            <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-8 md:py-10 relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-center max-w-6xl mx-auto">
                        <div className="flex items-center gap-3 text-white text-center md:text-left justify-center md:justify-start">
                            <span className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-6 h-6" />
                            </span>
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
                            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3.5 rounded-xl shadow-lg"
                            metadata={{ cta_type: "form_scroll" }}
                        >
                            <Calendar className="w-5 h-5" />
                            Book Appointment
                        </TrackedButton>
                        <TrackedCall
                            phone={PRIMARY_PHONE}
                            location="Bottom Bar"
                            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition"
                        >
                            <Phone className="w-5 h-5" />
                            {PRIMARY_PHONE}
                        </TrackedCall>
                    </div>
                </div>
            </section>

            {/* ============= MOBILE STICKY CTA ============= */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <TrackedCall
                    phone={PRIMARY_PHONE}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-[11px] font-semibold"
                >
                    <Phone className="w-5 h-5" />
                    Call
                </TrackedCall>
                <TrackedWhatsApp
                    phoneDigits={PRIMARY_PHONE_DIGITS}
                    message={WHATSAPP_MESSAGE}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-[11px] font-semibold"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </TrackedWhatsApp>
                <TrackedButton
                    buttonName="Book - Mobile Sticky"
                    buttonLocation="Mobile Sticky"
                    href="#booking-form"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-[11px] font-semibold"
                    metadata={{ cta_type: "form_scroll" }}
                >
                    <Calendar className="w-5 h-5" />
                    Book
                </TrackedButton>
            </div>

            {/* Spacer */}
            <div className="md:hidden h-16" />

            {/* Explore more — internal crawl paths (added when this page was indexed) */}
            <section className="bg-white border-t border-gray-100 py-14">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
                        Explore Orthopedic Care at Our HSR Layout &amp; Attibele Clinics
                    </h2>
                    <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                        Dr. Nitin N Sunku consults in HSR Layout, Bengaluru and at the Attibele
                        clinic. Browse condition-specific guidance and treatment costs below.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {RELATED_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                            >
                                <ChevronRight className="w-4 h-4 shrink-0 text-blue-600 transition group-hover:translate-x-0.5" />
                                <span>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                            <Bone className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-bold text-white text-base">Dr. Nitin N Sunku</span>
                    </div>
                    <p className="mb-2">
                        © {new Date().getFullYear()} · Orthopedic Specialist · Attibele, Bengaluru
                    </p>
                    <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Disclaimer: Information on this page is for general awareness and
                        does not replace medical advice. Please consult a qualified doctor.
                    </p>
                </div>
            </footer>
        </main>
    );
}
