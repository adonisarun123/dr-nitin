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
    Laptop,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Car,
    Scan,
    Bike,
    Monitor,
    AlertTriangle,
    Zap,
    Moon,
    Syringe,
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

const PATH = "/back-neck-pain-doctor-electronic-city";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: { absolute: "Back & Neck Pain Doctor near Electronic City | Dr. Nitin Sunku" },
    description:
        "Desk-job back pain, neck stiffness, sciatica & slipped disc — orthopedic spine care 20 min from Electronic City. Conservative-first, same-visit X-ray, Saturday OPD.",
    alternates: { canonical: `${siteOrigin}${PATH}` },
    keywords: [
        "back pain doctor Electronic City",
        "neck pain doctor Electronic City",
        "spine specialist near Electronic City",
        "sciatica treatment Electronic City",
        "slipped disc doctor Electronic City",
        "lower back pain IT professionals Bangalore",
        "cervical spondylosis treatment Electronic City",
        "orthopedic spine doctor Bommasandra",
        "back pain doctor Hosur Road",
        "desk job back pain treatment Bangalore",
    ],
    openGraph: {
        title: "Back & Neck Pain Doctor near Electronic City — Dr. Nitin N Sunku",
        description:
            "Orthopedic spine care for the IT corridor: mechanical back pain, cervical strain, sciatica and disc problems. Conservative-first, 20 minutes down Hosur Road.",
        url: `${siteOrigin}${PATH}`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Electronic City patients are served from the Attibele clinic — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'm from Electronic City and would like to book a consultation for back or neck pain.";

const conditions = [
    { title: "Lower Back Pain from Long Sitting", Icon: Laptop },
    { title: "Neck Pain & Cervical Strain", Icon: Monitor },
    { title: "Sciatica — Pain Down the Leg", Icon: Zap },
    { title: "Slipped / Herniated Disc", Icon: Activity },
    { title: "Two-Wheeler Commute Back Pain", Icon: Bike },
    { title: "Cervical Spondylosis", Icon: ShieldCheck },
    { title: "Pain & Numbness in the Arm", Icon: AlertTriangle },
    { title: "Night Pain & Morning Stiffness", Icon: Moon },
];

const redFlags = [
    "Numbness or weakness in a leg or arm that is getting worse",
    "Pain that started after a fall, accident or two-wheeler crash",
    "Loss of bladder or bowel control, or numbness around the saddle area",
    "Fever, unexplained weight loss, or pain that is worst at night and does not ease with rest",
    "Back pain in someone with a history of cancer or long-term steroid use",
];

const workstationChecks = [
    { item: "Screen top at eye level", why: "A laptop on the desk forces the neck into 30–40° of flexion — the load on the cervical spine multiplies several times over." },
    { item: "Elbows at 90°, shoulders relaxed", why: "A keyboard that is too high shrugs the shoulders all day and drives trapezius and neck pain." },
    { item: "Hips slightly higher than knees", why: "Reduces posterior pelvic tilt and takes the lumbar discs out of sustained flexion." },
    { item: "Stand or walk for 2–3 minutes every 45", why: "Disc nutrition depends on movement. No chair fixes a spine that never changes position." },
    { item: "Two-wheeler: sit upright, not perched forward", why: "Forward-hunched riding over pothole vibration is a reliable back-pain generator on Hosur Road." },
];

const sellingPoints = [
    {
        Icon: Car,
        title: "20 Minutes South, Against the Traffic",
        description:
            "From Electronic City the Attibele hospital is a straight run down Hosur Road (NH 44), away from the city-bound crawl. Consultation, X-ray and plan in one visit — the opposite of spending a half-day reaching a city hospital with a sore back.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Spine Care",
        description:
            "The overwhelming majority of back and neck pain from desk work settles without injections or surgery. The plan starts with an honest diagnosis, movement correction and targeted physiotherapy, and escalates only when there is a reason to.",
    },
    {
        Icon: Scan,
        title: "X-Ray in the Same Visit, MRI Only When It Matters",
        description:
            "In-house X-ray at Raghava Multispeciality Hospital. An MRI is ordered when the examination points to nerve compression or a red flag — not as a routine first step.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Orthopedic Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic and sports-medicine specialist. Spine problems are assessed in the context of the whole musculoskeletal system — hips, posture, muscle balance — not just the disc on the scan.",
    },
    {
        Icon: Syringe,
        title: "Guided Injections for Genuine Nerve Pain",
        description:
            "Where sciatica or arm pain from a disc is severe and persistent, image-guided injections can settle the nerve enough to rehabilitate. Used for specific indications, not routinely.",
    },
    {
        Icon: Users,
        title: "Corporate Insurance & Cashless Help",
        description:
            "Health insurance is accepted for procedures, and the hospital team assists with cashless pre-authorisation — relevant for the group policies common across the Electronic City campuses.",
    },
];

const areasServed = [
    { name: "Electronic City Phase 1", note: "~20 min via NH 44" },
    { name: "Electronic City Phase 2", note: "~18 min drive" },
    { name: "Neo Town", note: "~16 min drive" },
    { name: "Hebbagodi", note: "~14 min drive" },
    { name: "Bommasandra", note: "~12 min drive" },
    { name: "Chandapura", note: "~8 min drive" },
    { name: "Jigani", note: "~15 min drive" },
    { name: "Attibele", note: "Clinic location" },
];

export default function BackNeckPainDoctorElectronicCityPage() {
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
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Spine &amp; Orthopedic Care · 20 Min from Electronic City
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Back &amp; Neck Pain Doctor{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        near Electronic City
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Lower back pain that builds through the working day, a neck that seizes after a week of laptop calls, sciatica shooting down the leg on the commute. Orthopedic spine care built around the IT corridor&apos;s routine — conservative first, a short drive down Hosur Road.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Conservative-First
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Visit X-Ray
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Saturday OPD
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "back-neck-pain-electronic-city" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Spine Consultation
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
                            <HeroImage alt="Dr. Nitin N Sunku — Back and Neck Pain Doctor near Electronic City, Bengaluru" />
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
                                — Spine Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Back &amp; Neck Pain{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the Desk Job Way
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Nine hours seated, two on a bike, a laptop on the dining table at night — the spine complaints Electronic City generates in volume.
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

            {/* ============= RED FLAGS + WORKSTATION (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        <FadeIn>
                            <div className="h-full bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0">
                                        <AlertTriangle className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                                        Do Not Wait for a Saturday Slot If You Have Any of These
                                    </h2>
                                </div>
                                <p className="text-sm md:text-base text-gray-700 mb-4">
                                    Most back and neck pain is mechanical and can be seen in normal OPD hours. These are the exceptions — come to the hospital casualty the same day.
                                </p>
                                <ul className="space-y-2.5">
                                    {redFlags.map((flag) => (
                                        <li key={flag} className="flex items-start gap-2.5 text-sm md:text-base text-gray-800">
                                            <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                            <span>{flag}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="h-full bg-blue-50 border border-blue-200 rounded-3xl p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-2xl bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <Monitor className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight">
                                        The Five-Point Workstation Check
                                    </h2>
                                </div>
                                <p className="text-sm md:text-base text-gray-700 mb-4">
                                    What we go through with almost every IT-corridor patient — because a good plan fails if the desk undoes it every day.
                                </p>
                                <ul className="space-y-3">
                                    {workstationChecks.map(({ item, why }) => (
                                        <li key={item} className="text-sm md:text-base">
                                            <p className="font-bold text-gray-900">{item}</p>
                                            <p className="text-gray-600 leading-snug">{why}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= COMMUTE / AREAS SERVED ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — From the Campus —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Short Drive{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Down Hosur Road
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                South on NH 44, past Chandapura junction, into Attibele — parking at the door, X-ray and casualty in the same building.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                        {areasServed.map((area, idx) => (
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
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Spine Care That Starts{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    With the Least Invasive Option
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

            {/* ============= DARK BAND: THE HONEST NUMBERS ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Most Slipped Discs Never Need Surgery. Most Back Pain Is Not a Slipped Disc.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    The two facts the IT corridor most needs to hear. The large majority of back and neck pain from desk work is mechanical — muscles, joints and posture — with no disc involvement at all. And when a disc is genuinely pressing on a nerve, most of those settle over six to twelve weeks with the right treatment; surgery is for the minority with progressive weakness or pain that will not yield. Your MRI report will use frightening words. The examination decides what they mean.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Laptop className="w-4 h-4" />
                                    Movement · physiotherapy · guided injections · surgery last
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Treat the Patient, Not the Scan</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Disc bulges appear on the MRIs of most pain-free adults over 40. Findings only matter when they match the symptoms.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">1st</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Move &amp; Rehab</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">2nd</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Guided Injections</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Last</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Surgery</p>
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
                                    Same-Day Slots Most Days
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book a Back or Neck Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call back within hours to confirm your slot — WhatsApp works too.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="back-neck-pain-electronic-city" />
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
                heading="Two Clinics — Pick the Easier Drive"
                subheading="Attibele (20 min south via Hosur Road) is primary; HSR Layout works if you are headed toward the city."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Spine Pain in the IT Corridor —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                What a Desk Job Actually Does to a Spine, and How to Reverse It
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Laptop className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The mechanics of sitting
                            </h3>
                            <p>
                                A lumbar disc is a fluid-filled cushion with no direct blood supply. It is fed by movement — each change of position squeezes waste out and draws nutrients in. Sit still for nine hours and that pump stops, while the flexed posture of a chair loads the front of the disc and pushes its contents backwards, toward the nerves. The muscles that should be holding the spine upright — the deep abdominals and the gluteals — switch off in a chair and grow weak over months, so when they are finally asked to work (lifting a suitcase, a sudden twist on the badminton court) they are not there. That is the mechanism behind most of the back pain that comes in from Electronic City: not a damaged spine, but a deconditioned one.
                            </p>
                            <p>
                                The neck follows the same logic in a different direction. A laptop on a desk puts the screen twelve to fifteen inches below eye level, which means the head — about five kilograms — is held in forward flexion all day. The effective load on the cervical spine climbs several-fold with every increase in that angle. The small muscles at the base of the skull and the top of the trapezius are held under constant tension, and by Thursday they are painful, tight and sending headaches up the back of the head. Add hours of phone calls with the handset wedged between ear and shoulder, and cervical strain is more or less guaranteed. Our{" "}
                                <Link href="/neck-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    neck pain treatment
                                </Link>{" "}
                                and{" "}
                                <Link href="/back-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    back pain treatment
                                </Link>{" "}
                                pages cover each region in more depth; this page is about the pattern the two share when the cause is the desk.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Bike className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The Hosur Road commute
                            </h3>
                            <p>
                                The second load on the IT-corridor spine is the commute. A two-wheeler ride from Electronic City to Bommasandra or Chandapura on a road surface that changes every hundred metres delivers sustained vertical vibration to a spine that is already stiff from the day. Riders who perch forward over the tank — the sporty posture — put the lumbar spine into flexion under load, exactly the position that stresses the disc. Sitting upright, with the weight through the seat bones rather than the arms, halves the problem. The cab commute is gentler on the discs but adds another hour or two of sitting to the day. Neither is a reason to change jobs; both are reasons to build the two or three minutes of standing and walking every hour into the working day that the spine actually depends on.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                When it is a disc, and when it is not
                            </h3>
                            <p>
                                The difference matters, and it is made in the examination, not the scan. Mechanical back pain stays in the back and the buttock, is worse with sustained postures and better with movement, and has a normal neurological examination. Sciatica — a true disc prolapse pressing on a nerve root — sends pain below the knee, often to the foot, sometimes with pins and needles or numbness in a specific patch of skin, and may weaken a particular movement of the ankle or big toe. In the neck, the equivalent is pain radiating down the arm to specific fingers. Only in the second group is an MRI likely to change the plan, and even then most disc prolapses settle over six to twelve weeks with the right treatment. The full approach to a confirmed disc problem is on the{" "}
                                <Link href="/slip-disc-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    slip disc treatment
                                </Link>{" "}
                                page. The red flags listed higher on this page are the exceptions where the timing changes — those are same-day casualty visits, not Saturday appointments.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What treatment looks like
                            </h3>
                            <p>
                                For mechanical pain the plan is movement, strengthening and posture, with short courses of medication in the acute phase. A specific programme for the deep trunk muscles, hip mobility work, and the five-point workstation check above will resolve most desk-related back and neck pain within six to eight weeks — provided the exercises are done daily and the desk is actually changed. For a confirmed disc with nerve pain, the same programme is combined with nerve-specific medication and, where pain is severe enough to prevent rehabilitation, an image-guided injection around the nerve root to settle it. Surgery — a microdiscectomy or an endoscopic procedure — is reserved for progressive weakness, unrelenting pain after a proper trial of everything else, or one of the red flags. When it is needed, it is discussed plainly, with the expected outcome and the alternatives, at the Attibele hospital or a partner hospital as appropriate. We have written about the IT-corridor version of this problem specifically in{" "}
                                <Link href="/blog/desk-job-back-and-neck-pain-bangalore-it-professionals" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    desk-job back and neck pain for Bangalore IT professionals
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why Attibele rather than a city spine centre
                            </h3>
                            <p>
                                A person with a sore back does not want ninety minutes in traffic to reach a hospital that will order an MRI and book a follow-up in three weeks. The Attibele hospital is twenty minutes south of Electronic City against the flow, with X-ray in the building and the same specialist at every visit. For the large majority of spine complaints from the IT corridor — mechanical pain, cervical strain, an uncomplicated disc — that is the right setting: quick access, an honest diagnosis, a plan you can start the same day, and someone who will see you again in two weeks to check it is working. For the small number of cases that need advanced spinal surgery, the referral is made to the right surgeon at the right centre, with the work-up already done.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Back & Neck Pain Doctor near Electronic City, Bengaluru"
                pagePath={PATH}
                aboutCondition="Back pain and neck pain"
                subheading="Practical answers for patients coming from Electronic City Phase 1, Phase 2, Bommasandra and Hebbagodi."
                items={[
                    {
                        q: "My lower back aches by the end of every working day. Do I have a slipped disc?",
                        a: "Probably not. Pain that builds with sitting, stays in the back and buttock, and eases when you move is the pattern of mechanical back pain — deconditioned muscles and sustained posture, not a disc pressing on a nerve. A slipped disc with nerve involvement usually sends pain below the knee. An examination settles it in ten minutes; a scan is rarely needed at the first visit.",
                    },
                    {
                        q: "Should I get an MRI before I come?",
                        a: "No. Disc bulges show up on the MRIs of most pain-free adults over 40, so a scan without an examination causes more worry than clarity. If the examination shows nerve involvement or a red flag, an MRI will be requested and read against your symptoms. If you already have one, bring it — but expect the plan to be based on the examination.",
                    },
                    {
                        q: "How far is the clinic from Electronic City?",
                        a: "About 10–12 km from Phase 1 — roughly 20 minutes south on Hosur Road (NH 44), driving against the city-bound traffic. The hospital is on Sarjapura–Attibele Road with on-site parking and in-house X-ray, so a consultation, imaging and plan fit into a single visit.",
                    },
                    {
                        q: "I have pain shooting down one leg to the foot. Is that an emergency?",
                        a: "It is sciatica and needs to be seen within days rather than weeks, but it is only an emergency if it comes with progressive weakness in the leg, numbness around the saddle area, or any change in bladder or bowel control — in which case come to the hospital casualty the same day. Most sciatica settles over six to twelve weeks with the right treatment.",
                    },
                    {
                        q: "My neck seizes up after long laptop days and I get headaches at the back of my head. What is that?",
                        a: "Almost always cervical strain from sustained forward head posture — the small muscles at the base of the skull held under tension for hours. Raising the screen to eye level, a specific stretching and strengthening routine, and regular breaks resolve most cases. Arm pain, numbness in specific fingers or weakness of grip would point to a nerve problem and need examination sooner.",
                    },
                    {
                        q: "Will I need injections or surgery?",
                        a: "For mechanical back and neck pain, neither. Injections are used for specific nerve pain that is too severe to rehabilitate, and surgery for progressive weakness or pain that has not responded to a proper trial of everything else. Both are a small minority of the patients seen from Electronic City.",
                    },
                    {
                        q: "Can I keep working while being treated?",
                        a: "Yes — in fact stopping work and resting in bed is one of the worst things for mechanical back pain. The plan is built around the working day: workstation changes, movement breaks, and an exercise programme that fits before and after office hours. Very few desk-job spine problems need time off.",
                    },
                    {
                        q: "I ride a two-wheeler from Electronic City every day. Is that causing my back pain?",
                        a: "It is often a contributor. Vibration on a poor road surface loads the lumbar discs, and the forward-leaning posture of a sports bike puts the spine into sustained flexion. Sitting upright with the weight through the seat, a well-adjusted seat height, and getting off and walking after a long day of sitting all reduce the load. Changing the bike is rarely necessary.",
                    },
                    {
                        q: "Is corporate health insurance accepted?",
                        a: "Health insurance is accepted for procedures, and the hospital team assists with cashless pre-authorisation. OPD consultations and physiotherapy are usually outside insurance cover in India; bring your policy or TPA details if a procedure is being considered and call ahead to confirm coverage specifics.",
                    },
                    {
                        q: "Can I get a Saturday appointment?",
                        a: "Yes. The OPD runs Monday to Saturday, 10:00 AM to 6:00 PM, and Saturdays are the busiest day for working professionals from Electronic City — book by phone or WhatsApp to secure a slot. Same-day appointments are available most weekdays.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="A Stiff Back at 6 PM Should Not Be Normal."
                subtitle="Conservative-first spine care, 20 minutes from Electronic City — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath={PATH} />
        </main>
    );
}
