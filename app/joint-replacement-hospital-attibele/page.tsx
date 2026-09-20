import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    MapPin,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Car,
    Scan,
    BedDouble,
    Footprints,
    IndianRupee,
    ClipboardCheck,
    HeartHandshake,
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
import { LandingFaq } from "@/components/landing/landing-faq";

const PATH = "/joint-replacement-hospital-attibele";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: { absolute: "Knee & Hip Replacement Hospital in Attibele, Bengaluru | Dr. Nitin Sunku" },
    description:
        "Knee & hip replacement surgery at Raghava Multispeciality Hospital, Attibele — fellowship-trained surgeon, in-house OT & X-ray, insurance help. Serving Attibele, Anekal, Hosur, Chandapura & Electronic City.",
    alternates: { canonical: `${siteOrigin}${PATH}` },
    keywords: [
        "knee replacement hospital Attibele",
        "hip replacement hospital Attibele",
        "joint replacement surgeon Attibele",
        "knee replacement near Hosur",
        "knee replacement surgery Anekal",
        "joint replacement hospital Hosur Road",
        "knee replacement hospital near Electronic City",
        "hip replacement Chandapura",
        "orthopedic hospital Attibele",
        "knee replacement cost Attibele",
    ],
    openGraph: {
        title: "Knee & Hip Replacement Hospital in Attibele — Dr. Nitin N Sunku",
        description:
            "Joint replacement close to home for the Attibele–Anekal–Hosur corridor: fellowship-trained surgeon, in-house theatre and X-ray, family-friendly admission, follow-ups minutes away.",
        url: `${siteOrigin}${PATH}`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'd like to discuss knee or hip replacement at the Attibele hospital.";

const procedures = [
    { title: "Total Knee Replacement", Icon: Activity },
    { title: "Partial (Unicondylar) Knee Replacement", Icon: ShieldCheck },
    { title: "Bilateral Knee Replacement", Icon: Footprints },
    { title: "Total Hip Replacement", Icon: Hospital },
    { title: "Hip Replacement After Fracture", Icon: BedDouble },
    { title: "Revision Joint Replacement", Icon: ClipboardCheck },
    { title: "Pre-Surgery Fitness & Diabetes Check", Icon: Stethoscope },
    { title: "Post-Op Physiotherapy Planning", Icon: HeartHandshake },
];

const journey = [
    { day: "Consultation", detail: "History, examination and standing X-rays in the same visit. An honest answer on whether replacement is the right step now, or whether injections and strengthening buy more years first." },
    { day: "Pre-op work-up", detail: "Blood tests, ECG, physician and anaesthetic review, diabetes and blood-pressure optimisation. Insurance pre-authorisation is started here." },
    { day: "Surgery day", detail: "Admission in the morning; the operation takes 60–90 minutes for a single knee or hip under spinal anaesthesia. Family waits in the hospital, minutes from home." },
    { day: "Day 1–2", detail: "Standing and walking with a walker within 24 hours in most cases. Physiotherapy begins on the ward. Pain managed with a multimodal protocol." },
    { day: "Day 3–5", detail: "Discharge home with a written exercise programme once you can walk, climb a few steps and manage the toilet independently." },
    { day: "Weeks 2–12", detail: "Wound check, staple removal and X-ray at the same hospital — no city trip with a fresh knee. Most patients walk unaided by six weeks and are largely back to normal by three months." },
];

const sellingPoints = [
    {
        Icon: Car,
        title: "Surgery and Every Follow-Up, Minutes from Home",
        description:
            "A knee or hip replacement is not one hospital visit — it is a consultation, a work-up, an admission and five or six follow-ups. For families in Attibele, Anekal, Hosur and Chandapura, doing all of that ten minutes away rather than ninety minutes into the city is the whole point.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Joint Replacement Surgeon",
        description:
            "Dr. Nitin's fellowship training covers arthroscopy, joint replacement and sports medicine. He operates and does the follow-ups himself — the same surgeon at every visit, not a rotating team.",
    },
    {
        Icon: Hospital,
        title: "Operating Theatre, Ward and X-Ray in One Building",
        description:
            "Raghava Multispeciality Hospital has its own operating theatre, in-patient ward, in-house X-ray and a 24/7 casualty. Pre-op tests, surgery, post-op X-rays and rehabilitation guidance all happen under one roof.",
    },
    {
        Icon: IndianRupee,
        title: "Multispeciality-Hospital Pricing, Not Corporate-Chain Pricing",
        description:
            "The implant is the same; the room rent, theatre charges and surgeon's fee are not. A standard total knee replacement here sits at the lower end of the Bengaluru range without compromising the implant or the surgeon.",
    },
    {
        Icon: Users,
        title: "Insurance & Cashless Pre-Authorisation Help",
        description:
            "Health insurance is accepted for joint replacement, and the hospital team handles the cashless pre-authorisation paperwork with your insurer or TPA before admission.",
    },
    {
        Icon: Heart,
        title: "Replacement Only When It Is Actually the Right Step",
        description:
            "Many knees referred for replacement still have years of comfortable function to gain from strengthening, weight management and guided injections. If that is true of yours, you will be told so.",
    },
];

const catchment = [
    { name: "Attibele", note: "Hospital location" },
    { name: "Anekal", note: "~15 min drive" },
    { name: "Hosur (TN)", note: "~20 min via NH 44" },
    { name: "Chandapura", note: "~8 min drive" },
    { name: "Bommasandra", note: "~12 min drive" },
    { name: "Electronic City", note: "~20 min drive" },
    { name: "Sarjapur–Attibele Rd", note: "Dommasandra, Sarjapur ~25 min" },
    { name: "Jigani", note: "~15 min drive" },
];

export default function JointReplacementHospitalAttibelePage() {
    return (
        <main className="min-h-screen bg-white w-full overflow-x-clip">
            <HideNavigation />
            <LandingPageTracker />
            <LandingNav clinic={CLINIC} />

            {/* ============= HERO ============= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 shadow-sm">
                                    <Hospital className="w-4 h-4" />
                                    Raghava Multispeciality Hospital · Attibele
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Knee &amp; Hip Replacement{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Hospital in Attibele
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Fellowship-Trained Joint Replacement Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Joint replacement close to home for families across Attibele, Anekal, Hosur, Chandapura and the Electronic City side. Operating theatre, ward and X-ray under one roof; the same surgeon at every visit; and follow-ups that do not mean a day lost to city traffic with a fresh knee.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        In-House OT &amp; X-Ray
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Walk Within 24 Hours
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Cashless Insurance Help
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "joint-replacement-attibele" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Replacement Consult
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee and Hip Replacement Surgeon, Raghava Multispeciality Hospital, Attibele" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= PROCEDURES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Joint Replacement at Attibele —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Everything From the First X-Ray{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    to the Last Follow-Up
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Knee and hip replacement, and the assessment that decides whether you actually need one yet.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {procedures.map(({ title, Icon }, idx) => (
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

            {/* ============= THE JOURNEY (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What Actually Happens —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 break-words">
                                A Knee or Hip Replacement at Attibele, Step by Step
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Families want to know what the week looks like. This is it, for an uncomplicated single joint.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                        {journey.map(({ day, detail }, idx) => (
                            <FadeIn key={day} delay={idx * 0.05}>
                                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-5 md:p-6 h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                                            {idx + 1}
                                        </span>
                                        <h3 className="font-bold text-gray-900 text-base md:text-lg leading-tight">{day}</h3>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{detail}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= CATCHMENT ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Who We Serve —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Attibele–Anekal–Hosur{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Corridor
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                On Sarjapura–Attibele Road, minutes off Hosur Highway (NH 44), with parking at the door.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {catchment.map((area, idx) => (
                            <FadeIn key={area.name} delay={idx * 0.04}>
                                <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 md:p-5 text-center h-full">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-600 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">{area.name}</p>
                                    <p className="text-[11px] text-gray-500 mt-1 leading-snug">{area.note}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Attibele —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Why Families Choose to Have It Done{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Here Rather Than in the City
                                </span>
                            </h2>
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

            {/* ============= COST BAND (dark) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    What It Costs, and Why It Costs Less Here
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    A total knee replacement in Bengaluru runs from roughly ₹1.7 lakh at a multispeciality hospital to ₹6.5 lakh and more at a corporate chain, and a total hip replacement from about ₹2.2 lakh to ₹6.5 lakh depending on the implant. The implant itself is the same product from the same manufacturer wherever it is fitted. What changes is room rent, theatre charges and overhead. At Attibele you get a fellowship-trained surgeon and a standard implant at the lower end of that range. The exact figure depends on the implant chosen, the room category and your insurance, and it is given to you in writing after the consultation — never a surprise on discharge.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Link href="/knee-replacement-cost-bangalore" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold transition">
                                        <IndianRupee className="w-4 h-4" />
                                        Knee replacement cost guide
                                    </Link>
                                    <Link href="/hip-replacement-cost-bangalore" className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold transition">
                                        <IndianRupee className="w-4 h-4" />
                                        Hip replacement cost guide
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <ClipboardCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Written Estimate Before Admission</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Implant, room, theatre, surgeon and expected stay — itemised, with the insurance pre-authorisation started at the same time.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">3–5</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Days in Hospital</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">24h</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">To First Walk</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">6 wk</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Walking Unaided</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <GoogleReviews />

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
                                    Bring Your X-Rays or Come for Fresh Ones
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book a Joint Replacement Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Family members are welcome to attend. The team will call back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="joint-replacement-attibele" />
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

            {/* Attibele only — this is the hospital page, and joint replacement is done here. */}
            <LocationsWithMaps
                clinics={[CLINIC]}
                primaryId={CLINIC.id}
                heading="Raghava Multispeciality Hospital, Attibele"
                subheading="Sarjapura–Attibele Road, opposite Canara Bank. On-site parking, 24/7 casualty, in-house X-ray and operating theatre."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — For Patients and Families —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                Deciding on a Joint Replacement When You Live on the Attibele Side
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Is it time, or not yet?
                            </h3>
                            <p>
                                The question that matters most is asked least: does this joint need replacing now? A knee or hip replacement is a superb operation for a joint that has worn out — one where the cartilage is gone on X-ray, where the pain limits walking to a few hundred metres and wakes you at night, and where strengthening, weight management and injections have been properly tried and no longer help. It is a poor operation for a joint that is painful but still has cartilage, in a person who has never done a structured exercise programme, because an artificial joint has a lifespan and a first replacement in one&apos;s fifties often means a harder revision in one&apos;s seventies. The first consultation at Attibele therefore ends in one of two honest answers: yes, and here is the plan; or not yet, and here is what to do to get more years out of the joint you have. The non-surgical options are described on the{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    arthritis treatment
                                </Link>{" "}
                                and{" "}
                                <Link href="/prp-regenerative-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP and regenerative treatment
                                </Link>{" "}
                                pages.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why distance matters more for this operation than almost any other
                            </h3>
                            <p>
                                Most families on the Attibele, Anekal and Hosur side assume a joint replacement means a corporate hospital in the city. It is worth counting the trips before deciding. A typical knee replacement involves a consultation, a pre-operative work-up visit, the admission itself, a wound check at two weeks, a review with X-ray at six weeks, and a final review at three months — with physiotherapy sessions in between. For a patient who has just had a knee operated on, each of those city trips is ninety minutes each way in a car, with a knee that does not yet bend comfortably, and a family member who has taken a day off to drive. Done ten or twenty minutes from home, the same journey is undramatic. Elderly parents are not away from home for a week; a son or daughter working in Electronic City can visit the ward on the way home; and if anything worries the family at 11 pm on the third night after discharge, the hospital that did the operation, with the surgeon&apos;s notes, is minutes away with a 24/7 casualty.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Hospital className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What the hospital provides, honestly stated
                            </h3>
                            <p>
                                Raghava Multispeciality Hospital is an established multispeciality hospital, not a corporate chain, and it is worth being clear about what that means. It has its own operating theatre, in-patient ward, in-house X-ray, laboratory support and a 24/7 casualty. Anaesthesia and physician support for pre-operative fitness — diabetes and blood-pressure optimisation, cardiac assessment where needed — are arranged as part of the work-up. Joint replacement here is done with standard implants from the major manufacturers, the same products used in the city hospitals, fitted by a fellowship-trained surgeon who does the follow-ups personally. What it does not offer is the marble lobby and the room rent that goes with it, which is the main reason the same operation costs less. Patients with complex medical problems that need intensive-care backup are told so at the consultation and referred appropriately; that honesty is part of the service.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Footprints className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Recovery, and what families should plan for
                            </h3>
                            <p>
                                Modern joint replacement is a fast-recovery operation. Most patients stand and walk with a walker within 24 hours, are discharged on day three to five, and are walking unaided by about six weeks. The two things that make the biggest difference are pre-operative preparation — a few weeks of strengthening before surgery, and diabetes brought under control — and doing the exercise programme after it, every day, whether it is convenient or not. The home needs a little preparation: a chair with arms, a raised toilet seat or commode, no loose rugs, and someone around for the first week. The written programme given at discharge covers all of this, and the physiotherapy plan is set up before you leave the ward. The specifics of implant types, longevity and the differences between partial and total replacement are covered on the{" "}
                                <Link href="/services/knee-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee replacement surgery
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip replacement surgery
                                </Link>{" "}
                                service pages, and the question of how long a new joint lasts in{" "}
                                <Link href="/blog/how-long-does-a-knee-or-hip-replacement-last" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how long does a knee or hip replacement last
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <ClipboardCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Insurance and paperwork
                            </h3>
                            <p>
                                Joint replacement is covered by most health insurance policies once any waiting period has passed, and the hospital team handles the cashless pre-authorisation with your insurer or TPA before admission — the process is explained in{" "}
                                <Link href="/blog/how-cashless-preauthorisation-works-orthopedic-surgery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how cashless pre-authorisation works for orthopedic surgery
                                </Link>
                                . Bring the policy document, the insured person&apos;s ID and any previous treatment records to the first consultation, and the estimate and the pre-authorisation can be started the same day. Coverage specifics vary by insurer; the general position is on the{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    insurance and cashless treatment
                                </Link>{" "}
                                page.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Knee & Hip Replacement Hospital in Attibele, Bengaluru"
                pagePath={PATH}
                aboutCondition="Knee and hip osteoarthritis requiring joint replacement"
                subheading="Practical answers for patients and families from Attibele, Anekal, Hosur, Chandapura and Electronic City."
                items={[
                    {
                        q: "Is knee and hip replacement actually performed at the Attibele hospital, or only consulted there?",
                        a: "It is performed there. Raghava Multispeciality Hospital has its own operating theatre, in-patient ward and in-house X-ray, and Dr. Nitin operates and does the follow-ups at the same hospital. Consultation, pre-operative work-up, surgery and every post-operative review happen in one building.",
                    },
                    {
                        q: "How do I know if I need a replacement or whether something else would work first?",
                        a: "A standing X-ray and an examination settle it. Replacement is the right step when the cartilage is worn through, pain limits walking and sleep, and strengthening, weight management and injections have been properly tried. If your joint still has cartilage and you have not had a structured non-surgical programme, you will be told that a replacement is not yet the right step — and what to do instead.",
                    },
                    {
                        q: "What does a knee replacement cost at Attibele?",
                        a: "A standard total knee replacement sits at the lower end of the Bengaluru range — the city-wide range runs from roughly ₹1.7 lakh to ₹6.5 lakh and more depending on the hospital and implant. The exact figure depends on the implant chosen, the room category and your insurance cover, and is given in writing after the consultation. The full breakdown is on the knee replacement cost guide.",
                    },
                    {
                        q: "How long is the hospital stay, and when can my parent walk?",
                        a: "Typically three to five days for a single knee or hip. Most patients stand and take their first steps with a walker within 24 hours of surgery, with physiotherapy starting on the ward. Discharge is once they can walk, manage a few steps and use the toilet independently.",
                    },
                    {
                        q: "We live in Hosur. Is it worth coming across to Attibele rather than a Hosur hospital?",
                        a: "Attibele is about 20 minutes from Hosur via NH 44, and for many Hosur families it is the nearest fellowship-trained joint replacement surgeon on either side of the border. The follow-ups — wound check, six-week X-ray, three-month review — are all short trips. Many patients from Hosur, Zuzuvadi and Bagalur are treated here.",
                    },
                    {
                        q: "Is the operation done under general anaesthesia?",
                        a: "Usually under spinal anaesthesia with sedation, which is safer for older patients, gives excellent pain control for the first day and allows earlier mobilisation. General anaesthesia is used where there is a specific reason. The anaesthetist assesses every patient before admission.",
                    },
                    {
                        q: "My mother is diabetic and has high blood pressure. Can she still have the surgery?",
                        a: "In most cases yes, provided both are brought under control first. The pre-operative work-up includes physician review, blood sugar and blood pressure optimisation and a cardiac assessment where indicated. Uncontrolled diabetes raises the infection risk, so surgery is scheduled once the numbers are right rather than on a fixed date.",
                    },
                    {
                        q: "Can both knees be replaced at the same time?",
                        a: "For fit patients with severe arthritis in both knees, bilateral replacement in one sitting is an option and avoids a second admission and recovery. It is a bigger operation and is offered selectively, based on age, heart and lung fitness and overall health. The alternative is staging the two knees three to six months apart.",
                    },
                    {
                        q: "Is health insurance accepted, and is cashless available?",
                        a: "Yes. Health insurance is accepted for joint replacement and the hospital team handles the cashless pre-authorisation with your insurer or TPA before admission. Bring the policy document and ID to the first consultation so the estimate and pre-authorisation can be started the same day. Coverage specifics vary by insurer.",
                    },
                    {
                        q: "How long will the new joint last?",
                        a: "Modern knee and hip implants have survival rates of roughly 90 per cent at 15 years and many last 20 years or more. Longevity depends on the implant, the accuracy of the surgery, body weight and activity — which is also why replacement is timed carefully rather than done early.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="A New Knee or Hip, Ten Minutes from Home."
                subtitle="Bring your X-rays or come for fresh ones — book a consultation at Raghava Hospital, Attibele."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath={PATH} />
        </main>
    );
}
