import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Baby,
    Navigation,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { ATTIBELE_CLINIC } from "@/lib/practice";
import {
    LandingNav,
    StatsStrip,
    GoogleReviews,
    LocationsWithMaps,
    FinalCtaStrip,
    MobileStickyCTA,
    LandingFooter,
    HeroImage,
} from "@/components/landing/landing-chrome";

export const metadata: Metadata = {
    title: "Orthopedic Doctor in Attibele, Bengaluru | Dr. Nitin Sunku",
    description:
        "Fellowship-trained orthopedic & sports medicine specialist at Raghava Hospital, Attibele. Serving Anekal, Bommasandra, Hosur Rd, Electronic City. Book today.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-attibele` },
    keywords: [
        "orthopedic doctor Attibele",
        "best orthopedic doctor Attibele",
        "ortho doctor near me Attibele",
        "orthopedic doctor Anekal",
        "orthopedic doctor Bommasandra",
        "orthopedic doctor Chandapura",
        "orthopedic doctor Hosur Road",
        "orthopedic doctor Electronic City",
        "knee doctor Electronic City",
        "ortho doctor Jigani",
        "orthopedic doctor Sarjapura",
        "Raghava Multispeciality Hospital Attibele",
    ],
    openGraph: {
        title: "Orthopedic Doctor in Attibele, Bengaluru — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained orthopedic specialist at Raghava Multispeciality Hospital, Attibele. Serving South Bengaluru — Anekal, Bommasandra, Hosur Road, Electronic City.",
        url: `${siteOrigin}/orthopedic-doctor-attibele`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Attibele is the lead clinic for this page — all CTAs route to Attibele.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment at the Attibele clinic.";

const conditions = [
    { title: "Knee Pain & Arthritis", Icon: Activity },
    { title: "Sports Injuries", Icon: Heart },
    { title: "ACL / Meniscus Tears", Icon: ShieldCheck },
    { title: "Shoulder Pain & Rotator Cuff", Icon: Users },
    { title: "Hip Replacement", Icon: Hospital },
    { title: "Back & Spine Problems", Icon: Stethoscope },
    { title: "Bone Fractures & Trauma", Icon: Award },
    { title: "Pediatric Orthopedics", Icon: Baby },
];

const areasServed = [
    { name: "Attibele", distance: "0 km", note: "Clinic location" },
    { name: "Anekal", distance: "5 km", note: "10 min drive" },
    { name: "Chandapura", distance: "4 km", note: "8 min drive" },
    { name: "Bommasandra", distance: "6 km", note: "12 min drive" },
    { name: "Hosur Road", distance: "Within reach", note: "Direct highway" },
    { name: "Electronic City", distance: "10–12 km", note: "20 min drive" },
    { name: "Jigani", distance: "8 km", note: "15 min drive" },
    { name: "Sarjapura", distance: "12–14 km", note: "25 min drive" },
];

const sellingPoints = [
    {
        Icon: MapPin,
        title: "Easy to Reach from Hosur Highway",
        description:
            "Located right on Sarjapura–Attibele Road, opposite Canara Bank — a quick turn off the Hosur highway with ample parking on site.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating joint, spine and sports conditions.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Non-surgical options are exhausted first — physiotherapy, medication, injections — before surgery is ever recommended. Honest, evidence-based care.",
    },
    {
        Icon: Users,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "Trusted by professional athletes — the same sports-medicine expertise applied to weekend runners, IT-corridor desk pain, and active families.",
    },
    {
        Icon: Stethoscope,
        title: "Same-Day Appointments + Emergency Support",
        description:
            "Walk-in slots available most days, with 24/7 emergency support through the hospital — no waiting weeks to be seen.",
    },
    {
        Icon: Clock,
        title: "Comprehensive Care Under One Roof",
        description:
            "Diagnosis, imaging, surgery, rehab and follow-up all handled within Raghava Multispeciality Hospital — fewer trips, faster recovery.",
    },
];

export default function OrthopedicDoctorAttibelePage() {
    return (
        <main className="min-h-screen bg-white w-full overflow-x-clip">
            <HideNavigation />
            <LandingPageTracker />
            <LandingNav clinic={CLINIC} />

            {/* ============= HERO ============= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Best Orthopedic Doctor in Attibele
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopedic Doctor in</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Attibele, Bengaluru
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Fellowship-trained orthopedic &amp; sports medicine specialist serving Anekal, Bommasandra, Hosur Road, Electronic City and beyond. Quality orthopedic care close to home — no need to drive 30 km into the city.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Day Appointments
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Insurance Accepted
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "attibele-local" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </TrackedButton>
                                    <TrackedWhatsApp
                                        phoneDigits={PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="Hero"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </TrackedWhatsApp>
                                </div>

                                <TrackedCall phone={PHONE} location="Hero" className="inline-flex items-center gap-3 group">
                                    <span className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] text-gray-500 leading-tight">Call directly</p>
                                        <p className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">{PHONE}</p>
                                    </div>
                                </TrackedCall>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.15}>
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopedic Doctor in Attibele, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= CONDITIONS ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Conditions We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Comprehensive Orthopedic Care at{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the Attibele Clinic
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Care for every age — from the IT corridor to industrial Hosur Road.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {conditions.map(({ title, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center h-full">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                                        <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                                        {title}
                                    </h3>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= AREAS SERVED (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Areas Served from Attibele —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Reach Us in Under{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    25 Minutes
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Direct from Hosur Highway, with ample parking and 24/7 hospital emergency.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                        {areasServed.map((area, idx) => (
                            <FadeIn key={area.name} delay={idx * 0.04}>
                                <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 md:p-5 text-center h-full">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-600 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">{area.name}</p>
                                    <p className="text-xs font-semibold text-orange-600 mt-1">{area.distance}</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{area.note}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                The Attibele clinic sits directly on Sarjapura–Attibele Road, a quick turn off the Hosur Highway. Patients from Electronic City, Bommasandra and Jigani reach us via the elevated expressway and Service Road in under 20 minutes. The hospital offers ample on-site parking, a fully staffed 24/7 emergency department, and in-house diagnostics so most visits can be wrapped up in a single trip.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Your First Call for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Orthopedic Care
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons families across South Bengaluru make us their first call.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {sellingPoints.map(({ Icon, title, description }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                        <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= HOSPITAL PARTNERSHIP (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Raghava Multispeciality Hospital
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    The Attibele clinic operates within an established multispeciality hospital — which means full diagnostics (X-ray, MRI nearby, lab work), 24/7 emergency, a dedicated operating theatre, and post-op care all in one place. You don&apos;t have to coordinate scans, surgery and rehab across three different facilities — it&apos;s all under one roof, with a single team accountable for your recovery.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Hospital className="w-4 h-4" />
                                    Established multispeciality hospital, on-site OT &amp; emergency
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Hospital className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">All Under One Roof</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Diagnostics · Surgery · Rehab</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">24/7</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Emergency</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">In-House</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Imaging</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Dedicated</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">OT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <GoogleReviews />

            {/* ============= VIDEO TESTIMONIALS ============= */}
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
                                    From South Bengaluru.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Hear from patients about their recovery journey at the Attibele clinic.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {["hNDU1Sx5gMc", "XFDLO_nR6x4", "swT9lwWwSbU"].map((id, idx) => (
                            <FadeIn key={id} delay={idx * 0.1}>
                                <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${id}`}
                                        title={`Patient testimonial ${idx + 1} — Dr. Nitin N Sunku`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        loading="lazy"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= BOOKING FORM ============= */}
            <section id="booking-form" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 sm:py-16 md:py-24 overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
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
                                    Book Your Appointment at Attibele
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team at the Attibele clinic will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-attibele" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <TrackedCall phone={PHONE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-blue-700 font-semibold px-5 py-3.5 rounded-xl shadow-lg transition">
                                    <Phone className="w-5 h-5" />
                                    Call {PHONE}
                                </TrackedCall>
                                <TrackedWhatsApp phoneDigits={PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Us
                                </TrackedWhatsApp>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= HOW TO REACH (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How to Reach the Clinic —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Easy Access from{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Hosur Highway
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From Electronic City and Sarjapura — with ample on-site parking.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        {/* Info card */}
                        <FadeIn direction="right">
                            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm h-full">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-5 leading-tight">
                                    {CLINIC.name}
                                </h3>

                                <div className="space-y-4 text-gray-700">
                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Address</p>
                                            <p className="text-sm leading-relaxed">{CLINIC.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Hours</p>
                                            {CLINIC.hours.map((h) => (
                                                <p key={h.label} className="text-sm">
                                                    {h.label}: <span className="font-medium">{h.display}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Phone</p>
                                            <TrackedCall phone={PHONE} location="How To Reach" className="text-blue-700 hover:text-blue-900 font-bold text-base">
                                                {PHONE}
                                            </TrackedCall>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                    <TrackedCall phone={PHONE} location="How To Reach CTA" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-blue-500/30 transition text-sm">
                                        <Phone className="w-4 h-4" />
                                        Call
                                    </TrackedCall>
                                    <TrackedWhatsApp phoneDigits={PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="How To Reach CTA" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-emerald-500/30 transition text-sm">
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </TrackedWhatsApp>
                                </div>

                                <div className="mt-6 pt-6 border-t border-blue-100 space-y-4">
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            Arriving by car from Hosur Highway
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Take the Attibele exit off the Bengaluru–Hosur (NH 44) highway and turn onto Sarjapura–Attibele Road. The hospital is on your right, directly opposite Canara Bank (formerly Syndicate Bank). On-site parking is available.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            Arriving from Electronic City / Bommasandra
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Head south on Hosur Road past Bommasandra Industrial Area and Chandapura junction. Continue toward Attibele town — the clinic is on Sarjapura–Attibele Road, a short turn off the main highway. Approximately 20 minutes from Electronic City Phase 1.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Map */}
                        <FadeIn direction="left" delay={0.1}>
                            <div className="min-w-0 w-full h-full">
                                <div className="aspect-video lg:aspect-auto lg:h-full w-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[400px]">
                                    <iframe
                                        src={CLINIC.mapEmbedSrc}
                                        loading="lazy"
                                        style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`${CLINIC.name}, ${CLINIC.shortLocality} — Map`}
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <FinalCtaStrip
                clinic={CLINIC}
                title="Quality Orthopedic Care, Close to Home."
                subtitle="Don't drive 30 km into the city — book in Attibele today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
