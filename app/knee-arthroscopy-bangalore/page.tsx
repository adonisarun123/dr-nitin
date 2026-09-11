import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    Heart,
    CheckCircle,
    XCircle,
    Stethoscope,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Crosshair,
    Camera,
    Lock,
    Target,
    Layers,
    Droplet,
    Zap,
    Repeat,
    AlertTriangle,
    Timer,
    Wallet,
    Scan,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { ATTIBELE_CLINIC, CLINICS } from "@/lib/practice";
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

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Knee Arthroscopy in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Keyhole knee surgery explained: what the operation involves, the day of surgery, recovery week by week — and when arthroscopy is the wrong answer. Attibele & HSR Layout.",
    alternates: { canonical: `${siteOrigin}/knee-arthroscopy-bangalore` },
    keywords: [
        "knee arthroscopy Bangalore",
        "arthroscopic knee surgery Bangalore",
        "keyhole knee surgery Bangalore",
        "knee arthroscopy surgeon",
        "knee arthroscopy cost Bangalore",
        "knee scope surgery recovery",
        "meniscus repair surgery Bangalore",
        "day care knee surgery Bangalore",
        "knee arthroscopy Attibele",
        "arthroscopy surgeon HSR Layout",
    ],
    openGraph: {
        title: "Knee Arthroscopy in Bangalore — Dr. Nitin N Sunku",
        description:
            "What keyhole knee surgery actually involves, hour by hour on the day, realistic recovery milestones, and an honest account of when arthroscopy does not help.",
        url: `${siteOrigin}/knee-arthroscopy-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Arthroscopy and all surgical consultations are done at the Attibele hospital.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like an opinion on whether I need a knee arthroscopy.";

const conditions = [
    { title: "Bucket-Handle Tear & a Locked Knee", Icon: Lock },
    { title: "Meniscal Tears With Mechanical Symptoms", Icon: Activity },
    { title: "ACL Tears & Knee Instability", Icon: ShieldCheck },
    { title: "Loose Bodies & Catching in the Joint", Icon: Repeat },
    { title: "Patellar / Kneecap Tracking Problems", Icon: Target },
    { title: "Synovial Plica & Soft-Tissue Impingement", Icon: Zap },
    { title: "Cartilage (Osteochondral) Lesions", Icon: Layers },
    { title: "Persistent Swelling of Unclear Cause", Icon: Droplet },
];

// The single most useful thing this page says: arthroscopy is an excellent
// operation for mechanical problems and a poor one for wear-and-tear pain.
const arthroscopyValue: { scenario: string; helps: boolean; detail: string }[] = [
    {
        scenario: "A locked knee from a bucket-handle meniscal tear — you cannot straighten it fully",
        helps: true,
        detail:
            "This is the clearest indication there is, and it is often urgent. A displaced fragment of meniscus is sitting in the middle of the joint blocking movement. Repairing or reducing it early gives the best chance of saving the meniscus rather than removing it.",
    },
    {
        scenario: "A complete ACL rupture in an active person whose knee gives way",
        helps: true,
        detail:
            "Reconstruction is done arthroscopically. The aim is not to abolish pain but to restore stability, so the knee stops shifting and the menisci and cartilage are not damaged by repeated giving-way episodes.",
    },
    {
        scenario: "A loose body — a free fragment of cartilage or bone catching inside the joint",
        helps: true,
        detail:
            "A physical object jamming a hinge is a mechanical problem with a mechanical solution. Removing it through two small portals is straightforward and the symptom usually goes with it.",
    },
    {
        scenario: "True mechanical symptoms with a confirmed unstable tear on examination and MRI",
        helps: true,
        detail:
            "Genuine catching, clicking with pain, or the knee giving way over a torn flap — with a tear pattern on MRI that matches what the examination shows. When the scan and the symptoms agree, arthroscopy is reliable.",
    },
    {
        scenario: "A degenerative meniscal tear in a knee that already has established osteoarthritis",
        helps: false,
        detail:
            "The evidence here is strongly against surgery. Several large randomised trials found arthroscopic partial meniscectomy no better than a structured exercise programme. Trimming the meniscus in a worn knee does not treat the wear, and can remove tissue the joint still needs.",
    },
    {
        scenario: "General arthritic knee pain, stiffness and aching with no mechanical symptoms",
        helps: false,
        detail:
            "Washing out and shaving an arthritic joint does not change its surface. Weight and activity management, structured strengthening, medication and — where indicated — injections do more, and replacement is the answer at the far end.",
    },
    {
        scenario: "A meniscal tear reported on MRI in someone with no symptoms",
        helps: false,
        detail:
            "Meniscal tears are found on MRI in a large proportion of adults over 40 who have no knee pain at all. A tear on a report is not, on its own, a reason to operate. Treat the patient, not the scan.",
    },
    {
        scenario: "Cartilage wear or “bone-on-bone” changes seen on an X-ray alone",
        helps: false,
        detail:
            "An X-ray finding is not an indication for keyhole surgery. If pain and function have deteriorated to that extent, the conversation is about non-surgical care or joint replacement — not a scope.",
    },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Decide Whether You Need It At All",
        description:
            "The consultation starts with your story and an examination, not the MRI CD. Locking, true catching, giving way and a joint line that is tender in a specific spot carry more weight than the words on a radiology report. The scan is read alongside the examination — never instead of it.",
    },
    {
        step: "2",
        title: "Plan the Exact Operation Beforehand",
        description:
            "You should know before the day whether the plan is a meniscal repair, a partial meniscectomy, removal of a loose body, an ACL reconstruction, or a combination — and what happens if the tear looks different once the camera is in. Consent covers both paths, because rehab and time off differ substantially.",
    },
    {
        step: "3",
        title: "Day-Care Surgery, Then Structured Rehab",
        description:
            "Most knee arthroscopies are done as day-care: in the morning, home the same evening. Rehabilitation begins within days and is written down — what to do, how often, and what should be achievable by which week. The operation is a small part of the result; the rehab is most of it.",
    },
];

const sellingPoints = [
    {
        Icon: Camera,
        title: "Arthroscopy Is Core to This Practice",
        description:
            "Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine surgeon with a background in arthroscopic surgery. Keyhole knee work is routine here rather than an occasional add-on.",
    },
    {
        Icon: Crosshair,
        title: "Repair Preferred Where the Tear Allows",
        description:
            "A meniscus you keep is worth far more over a lifetime than one that has been trimmed away. Where the tear pattern, its blood supply and your age make repair viable, repair is the default — even though it means a slower rehab.",
    },
    {
        Icon: Heart,
        title: "You Will Be Told If You Do Not Need It",
        description:
            "A significant number of people who come in holding an MRI report are advised against surgery. Saying so plainly is part of the job. If exercise and load management are the better treatment, that is what you will be offered.",
    },
    {
        Icon: Award,
        title: "Sports Medicine Background",
        description:
            "Team doctor for Bengaluru FC. Return-to-play criteria used in professional sport — strength symmetry, hop testing, confidence under load — are applied to recreational athletes too, instead of a date on a calendar.",
    },
    {
        Icon: Timer,
        title: "Honest Recovery Timelines",
        description:
            "A simple meniscectomy and a meniscal repair look identical on the skin and are completely different recoveries. You get the realistic range for the operation you are actually having, before you commit to it.",
    },
    {
        Icon: Hospital,
        title: "Day-Care Surgery in South Bengaluru",
        description:
            "Arthroscopy is performed at Raghava Multispeciality Hospital, Attibele, and is also available at Manipal Hospital, Narayana Hrudayalaya and Sparsh Hospital. Consultations and follow-up are available at Health Nest Hospital, HSR Layout Sector 2.",
    },
];

const costDrivers = [
    "Day-care discharge versus an overnight or longer stay, and the room category if you do stay.",
    "Whether the meniscus is repaired with implants and sutures, or simply debrided — repair costs more in consumables and takes longer in theatre.",
    "Anaesthesia type and duration — spinal, regional block or general, and how long the procedure runs.",
    "Whether the arthroscopy is combined with an ACL reconstruction, which adds graft preparation, fixation implants and theatre time.",
    "Pre-operative investigations, the brace or crutches you need afterwards, and the physiotherapy course that follows.",
    "Your insurance policy: sub-limits, whether the hospital is in the cashless network, and how the pre-authorisation is worded.",
];

export default function KneeArthroscopyBangalorePage() {
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
                                    Keyhole Knee Surgery — Day Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Knee Arthroscopy </span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Two small portals, a camera inside the joint, and home the same evening. This page explains what the operation actually involves, what the day looks like hour by hour, how recovery really goes — and, just as importantly, the situations in which a knee arthroscopy will not help you at all.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Meniscus Repair Preferred
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Told Honestly If You Don&apos;t Need It
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Attibele &amp; HSR Layout
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "knee-arthroscopy" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book a Surgical Opinion
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee Arthroscopy Surgeon in Bangalore" />
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
                                — What Arthroscopy Is Used For —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Problems a Scope Can Actually{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Fix
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Arthroscopy is a mechanical operation. It is at its best when something inside the joint is physically in the way, torn, unstable or loose.
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

            {/* ============= HELPS / DOES NOT HELP TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Honest Version —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                When Arthroscopy Helps — and When It{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Does Not
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Knee arthroscopy is an excellent operation for mechanical problems and a poor one for wear-and-tear pain. Knowing which side of that line you are on matters more than anything else on this page.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-2/5">
                                            The situation
                                        </th>
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide">
                                            Does arthroscopy help?
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arthroscopyValue.map(({ scenario, helps, detail }, idx) => (
                                        <tr
                                            key={scenario}
                                            className={idx % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-semibold text-gray-900 align-top border-t border-gray-100">
                                                {scenario}
                                            </td>
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                <span
                                                    className={
                                                        helps
                                                            ? "inline-flex items-center gap-1.5 font-bold text-emerald-700 mb-1.5"
                                                            : "inline-flex items-center gap-1.5 font-bold text-orange-700 mb-1.5"
                                                    }
                                                >
                                                    {helps ? (
                                                        <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                                    ) : (
                                                        <XCircle className="w-4 h-4 flex-shrink-0" />
                                                    )}
                                                    {helps ? "Yes — it helps" : "No — it does not help"}
                                                </span>
                                                <span className="block">{detail}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Not sure which row describes you? There is a longer walk-through of{" "}
                                <Link href="/blog/do-i-need-a-knee-arthroscopy-mri-vs-symptoms" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    weighing your MRI against your symptoms
                                </Link>
                                , an explanation of why an{" "}
                                <Link href="/blog/asymptomatic-meniscus-tear" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    asymptomatic meniscus tear
                                </Link>{" "}
                                is usually best left alone, and a guide to the one tear that genuinely needs prompt attention — the{" "}
                                <Link href="/blog/bucket-handle-meniscus-tear" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    bucket-handle tear
                                </Link>
                                . If your question is about the meniscus as a condition rather than the operation, start with{" "}
                                <Link href="/services/meniscal-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    meniscal care
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= TREATMENT LADDER ============= */}
            <section className="bg-gradient-to-b from-white to-blue-50/60 py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How the Decision Is Made —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Indication First, Then{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Plan
                                </span>
                                , Then Rehab
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                An arthroscopy is a short operation with a long tail. Most of the outcome is decided before and after the theatre day.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {treatmentLadder.map(({ step, title, description }, idx) => (
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

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Surgeon Who Will Talk You{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Out of It
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru come here for a second opinion before a knee scope.
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

            {/* ============= MRI FINDING IS NOT AN OPERATION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Why an MRI Finding Is Not an Operation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    The most common way people arrive at a knee arthroscopy is this. The knee aches. A scan is arranged. The report says &ldquo;posterior horn medial meniscus tear&rdquo;. Something is torn, so it follows that something must be fixed. That chain of reasoning is intuitive, widely repeated, and often wrong.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    Degenerative meniscal tears are extremely common in adults over 40 — MRI studies of people with no knee pain whatsoever find them in a large fraction of that age group, and the proportion climbs steadily with each decade. In other words, a meniscal tear on a report is frequently a normal age-related finding that happens to be sitting in the same knee as your pain, rather than the cause of it. Scan an equally aged, entirely comfortable knee on the other side and you will often find something similar.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    This has been tested properly. Several large randomised trials have compared arthroscopic partial meniscectomy with structured exercise therapy — and in one case with a sham operation — for degenerative meniscal tears, and found no meaningful advantage for surgery in pain or function at one to two years. That is why arthroscopy for degenerative tears and for arthritic knee pain is now regarded as one of the most over-performed operations in the world. Operating on the scan instead of the symptoms is the single most common mistake in knee surgery.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Scan className="w-4 h-4" />
                                    Treat the patient, not the scan.
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Symptoms Decide</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        A tear that locks or catches behaves differently from a tear that merely exists on film.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">Story</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">First</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Exam</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Second</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Scan</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Last</p>
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
                                    Bring Your MRI CD or Report
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Find Out Whether You Need the Operation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Examination first, scan second, honest recommendation either way — and a written itemised estimate only if surgery is genuinely indicated.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="knee-arthroscopy-bangalore" />
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

            <LocationsWithMaps
                clinics={CLINICS}
                primaryId={CLINIC.id}
                heading="Consult at Attibele or HSR Layout"
                subheading="Knee arthroscopy is performed at Raghava Multispeciality Hospital, Attibele; consultations, second opinions and post-operative follow-up are also available at HSR Layout."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Knee Arthroscopy Explained —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                The Operation, the Day, and the Recovery — Without the Marketing
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Camera className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What a knee arthroscopy actually is
                            </h3>
                            <p>
                                Arthroscopy means looking inside a joint. In the knee, the surgeon makes two small openings called portals, each roughly the width of a pencil, usually one on each side of the patellar tendon just below the kneecap. A rod-lens camera about four millimetres across goes through one portal and projects a magnified view of the inside of the joint onto a screen. Sterile saline is run continuously through the knee to distend it and keep the view clear, which is why the leg feels tight and heavy for the first day or so and why some fluid may leak through the dressings overnight. Instruments — a probe, a shaver, a punch, suture passers — go through the second portal, and a third portal is added if the geometry of the repair needs it.
                            </p>
                            <p>
                                Nothing is opened up. The joint capsule is not cut, the quadriceps mechanism is not divided, and there is no large wound to heal. That is the whole advantage of the keyhole approach, and it is why the great majority of knee arthroscopies are day-care procedures: you come in fasting in the morning and you go home the same evening. It is also why the operation is sometimes offered too readily — a procedure that feels minor to undergo can still be the wrong procedure. If you want the basics in a shorter form first, there is a plain-language guide to{" "}
                                <Link href="/blog/what-is-knee-arthroscopy-and-when-is-it-needed" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    what knee arthroscopy is and when it is needed
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Meniscal repair versus partial meniscectomy
                            </h3>
                            <p>
                                This is the most consequential decision in knee arthroscopy, and it is worth understanding before you consent. The meniscus is a C-shaped shock absorber between the thigh bone and shin bone. There are two in each knee, and they spread load across the joint surface. Remove a substantial piece of one and the contact pressure on the cartilage underneath rises sharply — which is why people who had large meniscectomies in their twenties often develop arthritis in that compartment decades earlier than they otherwise would. A meniscus you keep is worth a great deal over a lifetime.
                            </p>
                            <p>
                                Repair means stitching the torn meniscus back together and letting it heal. Whether that is possible depends on three things. First, blood supply: only the outer third of the meniscus, the so-called red zone, has a reliable blood supply, and tears there heal well. Tears in the inner white zone have almost no blood supply and generally will not heal no matter how neatly they are sewn. Second, the tear pattern: longitudinal and vertical tears — including bucket-handle tears — are the classic repairable patterns, while complex, radial-through-to-the-rim, degenerative and flap tears often are not. Third, you: a younger patient with a fresh traumatic tear and a stable knee heals far better than an older patient with a degenerate tear in a worn joint.
                            </p>
                            <p>
                                Where repair is viable, it is the right choice even though it costs you a slower recovery — typically a brace, limited weight-bearing and restricted knee bending for around six weeks, with sport several months away. Where the tissue simply will not heal, the alternative is a partial meniscectomy: trimming the unstable torn fragment back to a stable rim while preserving as much meniscus as possible. Recovery from that is much quicker, but it is tissue you do not get back. The trade-off is explained in more detail in the guides on{" "}
                                <Link href="/blog/meniscus-tear" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    meniscus tears
                                </Link>{" "}
                                and{" "}
                                <Link href="/blog/benefits-of-arthroscopic-meniscus-repair-surgery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    the case for repairing rather than removing
                                </Link>
                                . Many tears, of course, need neither — whether{" "}
                                <Link href="/blog/can-a-meniscus-tear-heal-without-surgery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    a meniscus tear can settle without surgery
                                </Link>{" "}
                                is a fair first question and often the right one.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Timer className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The day of surgery, hour by hour
                            </h3>
                            <p>
                                You fast from midnight and report to the hospital early in the morning, usually around 7 am, with your reports and your insurance paperwork already sorted. Admission, consent, marking of the correct leg and a review by the anaesthetist take the first hour or so. Anaesthesia is usually spinal — an injection in the back that numbs you from the waist down while you stay awake or lightly sedated — because it avoids a breathing tube, causes less nausea and gives good pain relief for several hours afterwards. General anaesthesia is used where a spinal is unsuitable or if you strongly prefer to be asleep, and a regional nerve block may be added for post-operative comfort. This is a genuine choice and it is discussed with you, not decided for you.
                            </p>
                            <p>
                                In theatre, a tourniquet is often applied to the thigh, the leg is cleaned and draped, and the arthroscopy begins with a systematic inspection of every compartment of the knee before anything is treated. A diagnostic look plus a straightforward partial meniscectomy or removal of a loose body typically takes 20 to 40 minutes of theatre time. A meniscal repair takes longer, often 45 to 75 minutes, and an ACL reconstruction with graft harvest longer still. You then spend an hour or two in recovery while the spinal wears off and sensation and movement return to your legs. Most patients eat, pass urine, stand with a walker or crutches, and are discharged the same evening — commonly between 6 pm and 8 pm — with a dressing, painkillers, a physiotherapy sheet and a review date. If a spinal is slow to wear off, if pain is not controlled, or if you have other medical conditions, an overnight stay is arranged, and that is not a complication.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                The first two weeks
                            </h3>
                            <p>
                                Expect the knee to be swollen, warm and stiff for the first few days. Ice for twenty minutes several times a day, keep the leg elevated above heart level when resting, and take the prescribed painkillers on schedule rather than waiting for pain to build. The two things that matter most in this fortnight are getting the knee fully straight and getting the quadriceps to switch on again. Straight-leg raises, static quads contractions, ankle pumps and heel slides begin within a day or two. A knee that is allowed to sit bent and swollen for a fortnight becomes a stiff knee, and stiffness is far harder to treat than the original problem.
                            </p>
                            <p>
                                Dressings are usually changed at three to five days and the portal stitches removed at around ten to fourteen days. Keep the wounds dry until then. After a simple meniscectomy or loose-body removal, most people walk without support within a few days and the swelling has largely settled by two to three weeks. After a meniscal repair or an ACL reconstruction, the first fortnight is spent in a brace with protected weight-bearing, and the timeline runs in months rather than weeks. Realistic ranges for each scenario are set out in the guide to{" "}
                                <Link href="/blog/meniscus-tear-surgery-recovery-time" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    meniscus surgery recovery time
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Driving, desk work, physical work and sport
                            </h3>
                            <p>
                                Driving is not about a fixed number of days. The test is whether you can perform an emergency stop without hesitating, which requires that you are off strong painkillers, have full control of the operated leg and are not wearing a brace that limits it. After a simple meniscectomy on the left knee in an automatic car, that can be within a week; for a right knee, or after a repair, it is usually two to four weeks or longer. A desk job with the option to elevate the leg and move around is often manageable at one to two weeks, and remote work sooner. A job that involves standing all day, climbing stairs, squatting, lifting or riding a two-wheeler through Bengaluru traffic realistically needs four to eight weeks after a meniscectomy, and considerably longer after a repair.
                            </p>
                            <p>
                                Sport is the slowest milestone and the one most often rushed. Straight-line jogging after a partial meniscectomy usually becomes reasonable at around six weeks, with pivoting sport at two to three months, provided the knee is not swelling after activity. After a meniscal repair, protected rehabilitation runs to about three months and return to contact or pivoting sport is generally four to six months. After ACL reconstruction it is longer again — commonly nine to twelve months, gated by objective strength and hop-test symmetry rather than by the calendar. That is the standard applied in{" "}
                                <Link href="/sports-injury-doctor-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    sports injury care
                                </Link>{" "}
                                here, and the detail on ligament work sits on the{" "}
                                <Link href="/services/acl-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL care
                                </Link>{" "}
                                and{" "}
                                <Link href="/acl-reconstruction-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL reconstruction
                                </Link>{" "}
                                pages.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The honest complication list
                            </h3>
                            <p>
                                Knee arthroscopy is a low-risk operation, but low risk is not no risk, and you are entitled to the full list. Stiffness and difficulty regaining full extension is the most common problem and is largely preventable with early movement. Persistent swelling for several weeks is common and usually settles. Venous thromboembolism — a clot in the calf, rarely travelling to the lung — is uncommon after arthroscopy but not unheard of, which is why early mobilisation matters and why anyone with previous clots, cancer, prolonged immobilisation or a strong family history is assessed for preventive measures. Infection inside the joint is rare, in the region of well under one percent, but serious when it occurs and needs urgent treatment. Less common issues include numbness in a patch of skin below the portals from a small sensory nerve branch, a haemarthrosis, and instrument-related cartilage scuffing.
                            </p>
                            <p>
                                The risk that is discussed least often is the most important one: your symptoms may not fully resolve. A repair may not heal and may need a further procedure. Arthritic pain that was present alongside a mechanical symptom will still be there once the mechanical symptom is fixed. If a scope is being offered mainly in hope rather than on a clear indication, the honest expectation is that it will not deliver much — which is exactly why the assessment above matters more than the surgical technique.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                If arthroscopy is not the answer
                            </h3>
                            <p>
                                Being told you do not need an operation should come with a plan, not a shrug. For most degenerative and non-mechanical knee pain, that plan is a structured strengthening programme, load and weight management, medication where appropriate, and{" "}
                                <Link href="/treatments/non-surgical-knee-pain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical knee pain treatment
                                </Link>{" "}
                                including guided injections where they are genuinely indicated. If the underlying problem is established wear, it is managed as{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee arthritis
                                </Link>
                                , and at the far end of that spectrum the honest conversation is about{" "}
                                <Link href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee replacement
                                </Link>{" "}
                                rather than a scope that will not change the joint surface. If you are still working out what is wrong in the first place, the{" "}
                                <Link href="/knee-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee pain assessment page
                                </Link>{" "}
                                is a better starting point than this one.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Wallet className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What drives the cost
                            </h3>
                            <p>
                                No honest figure can be put on this page, because &ldquo;knee arthroscopy&rdquo; describes anything from a twenty-minute loose-body removal to a meniscal repair combined with a ligament reconstruction. Quoting a single number online would be guesswork. What can be listed plainly is what moves the total:
                            </p>
                            <ul className="space-y-2.5 pl-1">
                                {costDrivers.map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                After the assessment — once it is clear which operation you actually need — you are given a written, itemised estimate covering the surgeon&apos;s fee, anaesthesia, theatre, implants and consumables, the stay, and what happens to the price if you need an extra day. Nothing is fixed as a date until you have that in hand. Most comprehensive health policies cover arthroscopy when it is medically indicated; how the paperwork works is set out on the{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    insurance and cashless treatment page
                                </Link>
                                , and there is a step-by-step explanation of{" "}
                                <Link href="/blog/how-cashless-preauthorisation-works-orthopedic-surgery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how cashless pre-authorisation works
                                </Link>{" "}
                                for orthopedic surgery. Bring your policy and TPA details to the consultation so coverage can be checked before, rather than after, a date is booked.
                            </p>

                            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2">
                                            When a knee needs to be seen urgently
                                        </h3>
                                        <p className="text-sm md:text-base text-amber-900/90 leading-relaxed">
                                            A knee that is locked and cannot be fully straightened should be assessed within days, not weeks — a displaced bucket-handle fragment is far more likely to be repairable if it is dealt with early. Seek care the same day if the knee swells dramatically within an hour or two of an injury, if you cannot bear weight, if there is a deformity, or if the knee is hot, red and painful with fever, which can indicate infection. After any arthroscopy, contact the hospital promptly for spreading redness or discharge from a portal, fever, calf pain or swelling, chest pain or breathlessness, or pain that is escalating rather than settling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Knee Arthroscopy in Bangalore"
                pagePath="/knee-arthroscopy-bangalore"
                aboutCondition="Meniscal tear"
                subheading="Straight answers about keyhole knee surgery — the operation, the recovery, the cost, and whether you need it."
                items={[
                    {
                        q: "Do I actually need a knee arthroscopy?",
                        a: "Only if your knee has a genuine mechanical problem. Locking, true catching, a knee that gives way over a torn flap, a loose body, or an unstable tear that matches your examination are the situations where arthroscopy reliably helps. Aching, stiffness and pain from wear and tear are not, even when the MRI reports a tear — degenerative tears are common findings in adults over 40 with no symptoms at all. The decision should be made from your history and examination, with the scan read alongside them rather than instead of them.",
                    },
                    {
                        q: "How long does knee arthroscopy take and is it day care?",
                        a: "Most knee arthroscopies are day-care procedures: you fast from midnight, come in early morning, and go home the same evening. Actual theatre time is short — roughly 20 to 40 minutes for a diagnostic scope, partial meniscectomy or loose-body removal, around 45 to 75 minutes for a meniscal repair, and longer if an ACL reconstruction is combined with it. Add an hour before for admission and anaesthesia and one to two hours afterwards in recovery. An overnight stay is arranged if the spinal is slow to wear off, if pain needs closer control, or if you have other medical conditions.",
                    },
                    {
                        q: "How painful is knee arthroscopy afterwards?",
                        a: "Less than most people expect, because nothing is opened up. The spinal or nerve block keeps the leg comfortable for several hours, and the dominant sensation for the first two or three days is tightness, heaviness and swelling rather than sharp pain. Simple oral painkillers, ice for twenty minutes several times a day and elevation usually control it well, and most people are off strong painkillers within a few days. A meniscal repair or a ligament reconstruction is sorer than a simple trim, mainly because of the brace and the protected weight-bearing rather than the portals themselves.",
                    },
                    {
                        q: "When can I walk, drive and return to work after knee arthroscopy?",
                        a: "After a simple partial meniscectomy or loose-body removal, most people stand and walk with support the same evening and walk unaided within a few days. Driving depends on being able to do an emergency stop — off strong painkillers, full control of the leg, no restrictive brace — which is often about a week for a left knee in an automatic and two to four weeks for a right knee. Desk work is commonly manageable at one to two weeks; standing, squatting, lifting or riding a two-wheeler realistically needs four to eight weeks. Meniscal repairs take considerably longer.",
                    },
                    {
                        q: "Meniscus repair or removal — which will I get?",
                        a: "Repair wherever the tear allows it, because a meniscus you keep protects the joint surface for decades. Repairability depends on blood supply (only the outer third heals reliably), tear pattern (longitudinal, vertical and bucket-handle tears repair well; complex, radial and degenerative ones usually do not) and on your age and the state of the knee. Where repair is not viable, the alternative is a partial meniscectomy — trimming the unstable fragment back to a stable rim while preserving as much tissue as possible. The likely plan is discussed before surgery, and consent covers both, because the rehab differs greatly.",
                    },
                    {
                        q: "Will arthroscopy help my knee arthritis?",
                        a: "Usually not, and this deserves a direct answer. Several large randomised trials comparing arthroscopic partial meniscectomy with structured exercise therapy for degenerative meniscal tears in arthritic knees found no meaningful advantage for surgery in pain or function. Washing out and shaving an arthritic joint does not restore its surface. Arthroscopy for arthritic knee pain is now considered one of the most over-performed operations worldwide. The exception is a genuinely locked or catching arthritic knee with a displaced fragment — a mechanical block is still a mechanical problem. Otherwise, strengthening, weight and load management, medication and injections do more.",
                    },
                    {
                        q: "What are the risks of knee arthroscopy?",
                        a: "It is a low-risk operation, but not a no-risk one. Stiffness and loss of full extension is the commonest problem and is largely prevented by early movement. Swelling for a few weeks is normal. A clot in the calf leg veins is uncommon but possible, which is why you get moving early and why anyone with a clotting history is assessed beforehand. Joint infection is rare — well under one percent — but serious and needs urgent treatment. A numb patch of skin near the portals is common and usually fades. And symptoms may not fully resolve, particularly where arthritic pain coexists with a mechanical one.",
                    },
                    {
                        q: "How soon can I return to sport after knee arthroscopy?",
                        a: "It depends entirely on what was done. After a partial meniscectomy, straight-line jogging is usually reasonable at about six weeks and pivoting sport at two to three months, provided the knee is not swelling after activity. After a meniscal repair, protected rehabilitation runs to roughly three months and return to contact or pivoting sport is commonly four to six months. After ACL reconstruction it is generally nine to twelve months. Clearance is given on objective criteria — quadriceps and hamstring strength symmetry, hop-test performance, control under fatigue — rather than on a date.",
                    },
                    {
                        q: "What does knee arthroscopy cost in Bangalore?",
                        a: "No single figure is honest, because the term covers everything from a short loose-body removal to a meniscal repair combined with ACL reconstruction. What moves the cost is: day-care discharge versus an overnight stay and room category; whether the meniscus is repaired with sutures and implants or simply debrided; anaesthesia type and theatre duration; whether an ACL reconstruction is done at the same time; pre-operative tests, braces and physiotherapy; and your insurance sub-limits and cashless network status. A written, itemised estimate for your specific operation is provided after assessment, before any date is fixed.",
                    },
                    {
                        q: "Where is the knee arthroscopy surgery done?",
                        a: "Knee arthroscopy is performed by Dr. Nitin N Sunku at Raghava Multispeciality Hospital, Attibele — 39, Sarjapura–Attibele Road, opposite Canara Bank, Bengaluru 562107 — which is convenient for Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City and Jigani. Outpatient hours there are Mon–Sat, 10 AM to 6 PM. Consultations, second opinions and post-operative follow-up are also available at Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM to 8 PM), which serves Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9980031006 or use the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Get a Straight Answer on Your Knee."
                subtitle="Examination first, scan second — and an honest recommendation either way."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/knee-arthroscopy-bangalore" />
        </main>
    );
}
