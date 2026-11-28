import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Baby,
    Navigation,
    MessageCircle,
    Calendar,
    ChevronRight,
    Siren,
    Bone,
    HandMetal,
    Footprints,
    AlertTriangle,
    Timer,
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
    FinalCtaStrip,
    MobileStickyCTA,
    LandingFooter,
    HeroImage,
} from "@/components/landing/landing-chrome";
import { LandingFaq } from "@/components/landing/landing-faq";
import { LandingArticle } from "@/components/landing/landing-article";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Fracture Treatment in Attibele | 24/7 Accident Care | Dr. Nitin Sunku" },
    description:
        "Broken bone or injury? Fracture & accident care at Raghava Hospital, Attibele — 24/7 casualty, same-visit X-ray, plaster & surgical fixation. Call now.",
    alternates: { canonical: `${siteOrigin}/fracture-treatment-attibele` },
    keywords: [
        "fracture treatment Attibele",
        "fracture clinic near me",
        "bone fracture doctor Attibele",
        "accident orthopedic care Hosur Road",
        "fracture hospital Chandapura",
        "plaster cast Attibele",
        "hand fracture treatment Bangalore",
        "ankle fracture doctor Anekal",
        "trauma care Bommasandra",
        "orthopedic emergency Attibele",
        "children fracture doctor Attibele",
        "wrist fracture treatment Electronic City",
    ],
    openGraph: {
        title: "Fracture & Accident Care in Attibele — Dr. Nitin N Sunku",
        description:
            "24/7 casualty, same-visit X-ray and plaster room at Raghava Multispeciality Hospital, Attibele. Fracture care for the Attibele–Hosur Road industrial belt.",
        url: `${siteOrigin}/fracture-treatment-attibele`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Fracture / trauma care is delivered at the Attibele hospital — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have a suspected fracture / injury and need to be seen at the Attibele hospital.";

const fractureTypes = [
    { title: "Wrist & Forearm Fractures", Icon: HandMetal },
    { title: "Ankle & Foot Fractures", Icon: Footprints },
    { title: "Hip Fractures (Elderly Falls)", Icon: Hospital },
    { title: "Shoulder & Collarbone", Icon: Users },
    { title: "Hand & Finger Injuries", Icon: Activity },
    { title: "Elbow & Upper Arm", Icon: Bone },
    { title: "Children's Fractures", Icon: Baby },
    { title: "Stress & Hairline Fractures", Icon: ShieldCheck },
];

const carePathway = [
    {
        step: "1",
        title: "Call or Walk Straight In",
        description:
            "The hospital casualty accepts injuries 24/7 — no referral, no prior appointment needed. Call ahead if you can, so the team is ready when you arrive.",
    },
    {
        step: "2",
        title: "X-Ray & Diagnosis, Same Visit",
        description:
            "In-house X-ray means the fracture is confirmed and classified in the same visit — no running to a separate scan centre with a painful limb.",
    },
    {
        step: "3",
        title: "Cast, Splint or Fixation — With a Clear Plan",
        description:
            "Many fractures are treated in a plaster or splint the same day. If surgical fixation is needed, the hospital has its own operating theatre — and you get a clear, written plan and estimate first.",
    },
];

const sellingPoints = [
    {
        Icon: Siren,
        title: "24/7 Casualty at the Hospital",
        description:
            "Fractures don't keep OPD hours. Raghava Multispeciality Hospital runs a 24/7 emergency department, with orthopedic support for acute injuries round the clock.",
    },
    {
        Icon: Timer,
        title: "Minutes Away — Not 30 km Away",
        description:
            "For Attibele, Anekal, Chandapura, Bommasandra and Hosur Road, this is fracture care close to home — instead of a long, painful ride into central Bengaluru.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Orthopedic Surgeon",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience managing simple and complex fractures in adults and children.",
    },
    {
        Icon: Heart,
        title: "Cast First, Surgery Only When Needed",
        description:
            "Most fractures heal well in a cast or splint. Surgery is recommended only when the fracture is displaced, unstable, or involves a joint — and the reasoning is explained to you honestly.",
    },
    {
        Icon: Hospital,
        title: "X-Ray, Plaster Room & OT Under One Roof",
        description:
            "Diagnosis, plaster application, surgical fixation and follow-up X-rays all happen in one hospital — fewer trips with an injured limb, faster decisions.",
    },
    {
        Icon: ShieldCheck,
        title: "Insurance & Estimate Support",
        description:
            "Health insurance is accepted for procedures, and the hospital team helps with pre-authorisation paperwork. You get a written estimate before any surgery.",
    },
];

const firstAidDos = [
    "Keep the injured limb still — support it with a sling, pillow or folded cloth",
    "Apply a cold pack wrapped in cloth to limit swelling",
    "Remove rings, bangles and watches near the injury before swelling sets in",
    "Come to the hospital promptly — early treatment means easier reduction and better healing",
];

const firstAidDonts = [
    "Don't try to straighten or push a deformed limb back into place",
    "Don't massage the injured area or apply heat, balms or tight bandages",
    "Don't put weight on a leg or ankle that can't bear it",
    "Don't wait days hoping severe pain and swelling will settle on their own",
];

export default function FractureTreatmentAttibelePage() {
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
                                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-red-200 text-red-700 text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    24/7 Fracture &amp; Accident Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Fracture Treatment in{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Attibele, Bengaluru
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Suspected broken bone from a fall, sports injury, workplace accident or two-wheeler crash? Get an X-ray, diagnosis and treatment in one visit — with 24/7 hospital casualty, minutes from Anekal, Chandapura, Bommasandra and Hosur Road.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        24/7 Casualty
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Visit X-Ray &amp; Plaster
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Insurance Accepted
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedCall
                                        phone={PHONE}
                                        location="Hero"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call Now — {PHONE}
                                    </TrackedCall>
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

                                <TrackedButton
                                    buttonName="Book Appointment - Hero"
                                    buttonLocation="Hero"
                                    href="#booking-form"
                                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold group"
                                    metadata={{ cta_type: "form_scroll", condition: "fracture-attibele" }}
                                >
                                    <Calendar className="w-4 h-4" />
                                    Not urgent? Book a fracture-clinic review
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </TrackedButton>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.15}>
                            <HeroImage alt="Dr. Nitin N Sunku — Fracture & Trauma Care in Attibele, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "24/7", label: "Hospital Casualty" },
                    { value: "Same Visit", label: "X-Ray & Plaster" },
                    { value: "10+ Yrs", label: "Fracture Experience" },
                    { value: "4.9★", label: "Patient Rating" },
                ]}
            />

            {/* ============= CARE PATHWAY (unique content) ============= */}
            <section className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Injured Right Now? —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Happens When{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    You Arrive
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From the door to a treated, supported limb — usually in a single visit.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {carePathway.map(({ step, title, description }, idx) => (
                            <FadeIn key={step} delay={idx * 0.08}>
                                <div className="relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-md">
                                        {step}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mt-3 mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= FRACTURES TREATED ============= */}
            <section id="services" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Injuries We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Fracture Care for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Every Age
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From a child&apos;s playground fall to an elderly hip fracture — assessed and treated by a specialist.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {fractureTypes.map(({ title, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center h-full">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                                        <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{title}</h3>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= WHY HERE ============= */}
            <section id="about" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Raghava Hospital, Attibele —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Right Place for a{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Broken Bone
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons injured patients across the Attibele–Hosur Road belt come here first.
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
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= INDUSTRIAL BELT (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Fracture Care for the Industrial Belt
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    The Attibele–Bommasandra–Jigani corridor is one of Bengaluru&apos;s busiest industrial zones, and Hosur Road carries thousands of two-wheeler commuters every day. Workplace hand and finger injuries, machine-related trauma, and road accidents need orthopedic attention fast — not a 30 km ride through traffic. Raghava Multispeciality Hospital sits right on the Sarjapura–Attibele Road, minutes off the highway, with casualty, X-ray and an operating theatre in one building.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Siren className="w-4 h-4" />
                                    Workplace &amp; road-injury care, minutes from the highway
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Hospital className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Close to the Injury</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Attibele Industrial Area · Bommasandra · Jigani · Hosur Road</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">24/7</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Casualty</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">In-House</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">X-Ray</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">On-Site</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">OT</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= FIRST AID DO'S & DON'TS (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Before You Reach the Hospital —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Fracture First Aid:{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Do&apos;s &amp; Don&apos;ts
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Simple steps that protect the limb until a specialist sees it.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <div className="bg-emerald-50/70 rounded-2xl border border-emerald-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-4">
                                    <CheckCircle className="w-5 h-5" />
                                    Do
                                </h3>
                                <ul className="space-y-3">
                                    {firstAidDos.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="bg-red-50/70 rounded-2xl border border-red-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-red-800 text-lg mb-4">
                                    <AlertTriangle className="w-5 h-5" />
                                    Don&apos;t
                                </h3>
                                <ul className="space-y-3">
                                    {firstAidDonts.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
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
                                    Emergencies: Walk In 24/7 — For Everything Else, Book Below
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book a Fracture Review at Attibele
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Follow-up X-rays, cast checks, second opinions on a treated fracture — the team will call you back within hours.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-fracture-attibele" defaultLocation="attibele" />
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

            {/* ============= HOW TO REACH ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Getting Here With an Injury —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Minutes Off the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Hosur Highway
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Drop-off at the entrance, on-site parking, and casualty open round the clock.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
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
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Timings</p>
                                            {CLINIC.hours.map((h) => (
                                                <p key={h.label} className="text-sm">
                                                    OPD ({h.label}): <span className="font-medium">{h.display}</span>
                                                </p>
                                            ))}
                                            <p className="text-sm font-semibold text-red-700 mt-1">Hospital casualty: 24/7 for injuries</p>
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
                                            From the Hosur Highway (NH 44)
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Take the Attibele exit and turn onto Sarjapura–Attibele Road. The hospital is on your right, directly opposite Canara Bank (formerly Syndicate Bank) — with space to pull in right at the entrance for an injured passenger.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            From Bommasandra / Jigani industrial areas
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Head south on Hosur Road past Chandapura junction toward Attibele town, then turn onto Sarjapura–Attibele Road — roughly 10–15 minutes from most units in the belt.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

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

            <LandingArticle slug="fracture-treatment-attibele" />

            <LandingFaq
                pageName="Fracture Treatment in Attibele, Bengaluru"
                pagePath="/fracture-treatment-attibele"
                aboutCondition="Bone fracture"
                subheading="Practical answers about fracture and accident care at Raghava Multispeciality Hospital, Attibele."
                items={[
                    {
                        q: "Can I come at night or on a Sunday with a suspected fracture?",
                        a: "Yes. The hospital casualty accepts injuries 24/7, including nights, Sundays and holidays, with orthopedic support available for acute trauma. Routine fracture reviews and cast checks are done during OPD hours, Monday to Saturday 10:00 AM – 6:00 PM.",
                    },
                    {
                        q: "Will I get an X-ray in the same visit?",
                        a: "Yes — X-ray is available in-house at Raghava Multispeciality Hospital, so the fracture is confirmed, classified and treated in the same visit. You don't need to go to a separate scan centre with a painful limb.",
                    },
                    {
                        q: "Do all fractures need surgery?",
                        a: "No. Many fractures heal well in a plaster cast or splint with proper follow-up. Surgery (fixation with plates, screws or nails) is recommended when a fracture is displaced, unstable, open, or involves a joint surface. Dr. Nitin explains the reasoning and options honestly before any decision.",
                    },
                    {
                        q: "How much does fracture treatment cost in Attibele?",
                        a: "A consultation typically costs ₹500–₹1,000. The total cost depends on the fracture — a simple cast costs far less than surgical fixation. You always receive a written estimate before any procedure, and health insurance is accepted with pre-authorisation support from the hospital team.",
                    },
                    {
                        q: "Do you treat children's fractures?",
                        a: "Yes. Children's bones injure and heal differently from adults', and pediatric orthopedic care is available at the Attibele clinic — from buckle wrist fractures after playground falls to sports injuries in school-age children.",
                    },
                    {
                        q: "What should I do right now if I think a bone is broken?",
                        a: "Keep the limb still and supported, apply a cloth-wrapped cold pack, remove rings or bangles near the injury before swelling develops, and come to the hospital promptly. Don't try to straighten a deformed limb, don't massage or apply heat, and don't put weight on a leg that can't bear it.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="A Broken Bone Can't Wait."
                subtitle="24/7 casualty at Raghava Hospital, Attibele — call now."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/fracture-treatment-attibele" />
        </main>
    );
}
