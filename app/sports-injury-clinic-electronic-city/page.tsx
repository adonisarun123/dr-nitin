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
    Dumbbell,
    Timer,
    Trophy,
    Footprints,
    Snowflake,
    Zap,
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

const PATH = "/sports-injury-clinic-electronic-city";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: { absolute: "Sports Injury Clinic near Electronic City, Bengaluru | Dr. Nitin Sunku" },
    description:
        "Badminton, cricket, football, gym & running injuries — sports medicine specialist & Bengaluru FC team doctor, 20 min from Electronic City. ACL, meniscus, shoulder, ankle. Same-visit X-ray.",
    alternates: { canonical: `${siteOrigin}${PATH}` },
    keywords: [
        "sports injury clinic Electronic City",
        "sports injury doctor Electronic City",
        "sports medicine doctor near Electronic City",
        "badminton injury doctor Bangalore",
        "cricket injury treatment Electronic City",
        "ACL tear doctor Electronic City",
        "gym injury doctor Bommasandra",
        "runner's injury specialist Bangalore south",
        "ankle sprain doctor Electronic City",
        "shoulder injury doctor Electronic City",
    ],
    openGraph: {
        title: "Sports Injury Clinic near Electronic City — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained sports-medicine surgeon and Bengaluru FC team doctor, 20 minutes down Hosur Road. From weekend badminton to marathon training — diagnosis, rehab and keyhole surgery when needed.",
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
    "Hi Dr. Nitin, I'm from Electronic City and have a sports injury I'd like assessed.";

const injuries = [
    { title: "ACL & Meniscus Tears", Icon: ShieldCheck },
    { title: "Badminton Shoulder & Rotator Cuff", Icon: Activity },
    { title: "Ankle Sprains & Ligament Tears", Icon: Footprints },
    { title: "Runner's Knee & Shin Splints", Icon: Timer },
    { title: "Hamstring & Calf Strains", Icon: Zap },
    { title: "Gym & Weightlifting Injuries", Icon: Dumbbell },
    { title: "Tennis / Golfer's Elbow", Icon: Trophy },
    { title: "Sports Fractures & Dislocations", Icon: Hospital },
];

const sportPatterns = [
    {
        sport: "Badminton",
        injuries: "Rotator cuff and shoulder impingement from overhead smashes; Achilles and calf strains from lunging; ankle sprains; ACL tears on the pivot.",
        note: "The single biggest source of sports injuries from the Electronic City leagues.",
    },
    {
        sport: "Corporate cricket",
        injuries: "Hamstring tears in the sprint between wickets; shoulder injuries in bowlers; finger and wrist fractures from the ball; ankle sprains in the outfield.",
        note: "Classic weekend-warrior pattern: no warm-up, full intensity.",
    },
    {
        sport: "Football / futsal",
        injuries: "ACL and meniscus tears from planting and turning; MCL sprains from tackles; groin strains; ankle ligament injuries on turf.",
        note: "The same injuries treated for professional footballers, at amateur volumes.",
    },
    {
        sport: "Running (10K, half marathon)",
        injuries: "Patellofemoral pain, ITB syndrome, shin splints, Achilles tendinopathy, stress fractures of the shin and foot from too much too soon.",
        note: "Almost always a training-load problem before it is a structural one.",
    },
    {
        sport: "Gym / CrossFit",
        injuries: "Lower back strain from deadlifts, meniscus tears from deep loaded squats, shoulder labral injuries from overhead pressing, elbow tendinopathy.",
        note: "Technique and progression errors, usually after a lay-off.",
    },
];

const firstHours = [
    { step: "Protect", detail: "Stop playing. A ligament that has torn will not improve by finishing the match." },
    { step: "Ice", detail: "15–20 minutes at a time, every 2–3 hours for the first 48 hours. Never directly on skin." },
    { step: "Compress & elevate", detail: "A crepe bandage and the limb above heart level limit swelling and make examination easier." },
    { step: "Do not massage or apply heat", detail: "Both increase bleeding into the injured tissue in the first 48 hours." },
    { step: "Get examined within a week", detail: "Early assessment, before swelling and guarding set in, gives the clearest diagnosis. If the joint is locked, deformed or you cannot bear weight, come to casualty the same day." },
];

const sellingPoints = [
    {
        Icon: Trophy,
        title: "Team Doctor, Bengaluru FC",
        description:
            "The same sports-medicine expertise that keeps professional footballers on the pitch, applied to your badminton shoulder, cricket hamstring or marathon knee.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained in Arthroscopy & Sports Medicine",
        description:
            "Dr. Nitin's fellowship training is in exactly this field: ligament reconstruction, meniscus repair, shoulder stabilisation and the rehabilitation that follows.",
    },
    {
        Icon: Car,
        title: "20 Minutes South of Electronic City",
        description:
            "A straight run down Hosur Road (NH 44) from Phase 1 or 2, against the city-bound traffic. Diagnosis, X-ray and plan in one visit; back home the same afternoon.",
    },
    {
        Icon: Scan,
        title: "X-Ray on Site, MRI When It Changes the Plan",
        description:
            "In-house X-ray at Raghava Multispeciality Hospital rules fractures in or out on the spot. An MRI is ordered when the examination points to a ligament, meniscus or labral injury that it would help to map.",
    },
    {
        Icon: Heart,
        title: "Return-to-Play Is the Goal",
        description:
            "Treatment is planned backwards from the sport you want to return to — not just pain relief. Rehab-first for most injuries, keyhole surgery for the ones where it makes the difference.",
    },
    {
        Icon: Users,
        title: "Insurance & Cashless Help",
        description:
            "Health insurance is accepted for procedures such as ACL reconstruction, and the hospital team assists with cashless pre-authorisation under corporate policies.",
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

export default function SportsInjuryClinicElectronicCityPage() {
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
                                    <Trophy className="w-4 h-4" />
                                    Bengaluru FC Team Doctor · 20 Min from Electronic City
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Sports Injury Clinic{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        near Electronic City
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    The badminton shoulder, the cricket hamstring, the football knee that popped, the marathon shin that will not settle. Fellowship-trained sports-medicine care — diagnosis, rehab and keyhole surgery when it is needed — a short drive down Hosur Road.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Visit X-Ray
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Arthroscopy Fellowship
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
                                        metadata={{ cta_type: "form_scroll", condition: "sports-injury-electronic-city" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Injury Assessment
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
                            <HeroImage alt="Dr. Nitin N Sunku — Sports Injury Specialist near Electronic City, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= INJURIES WE TREAT ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Injuries We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From the Tech-Park League{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    to the Half Marathon
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Electronic City plays hard at the weekend after sitting still all week. These are the injuries that produces.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {injuries.map(({ title, Icon }, idx) => (
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

            {/* ============= BY SPORT TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — By Sport —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 break-words">
                                What Each Sport Does to the Weekend Athlete
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                The pattern is remarkably consistent. Knowing it means the right examination on the first visit.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-blue-50 text-blue-900">
                                    <tr>
                                        <th className="px-4 py-3 font-bold">Sport</th>
                                        <th className="px-4 py-3 font-bold">Typical injuries</th>
                                        <th className="px-4 py-3 font-bold">Note</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {sportPatterns.map((row) => (
                                        <tr key={row.sport} className="align-top hover:bg-blue-50/40">
                                            <td className="px-4 py-3 text-blue-800 font-semibold whitespace-nowrap">{row.sport}</td>
                                            <td className="px-4 py-3 text-gray-800">{row.injuries}</td>
                                            <td className="px-4 py-3 text-gray-600">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= FIRST 48 HOURS ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
                        <FadeIn>
                            <div className="lg:col-span-2">
                                <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                    — The First 48 Hours —
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight break-words">
                                    What to Do Between the Injury and the Appointment
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Most sports injuries from a Saturday match are seen on Monday or Tuesday. What happens in between affects how easy the diagnosis is and how quickly you recover.
                                </p>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="lg:col-span-3 bg-white rounded-3xl border border-blue-100 shadow-sm p-6 md:p-8">
                                <ol className="space-y-4">
                                    {firstHours.map(({ step, detail }, idx) => (
                                        <li key={step} className="flex items-start gap-4">
                                            <span className="w-9 h-9 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <div>
                                                <p className="font-bold text-gray-900">{step}</p>
                                                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </FadeIn>
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
                                Sports Medicine,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Not General Orthopedics
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

            {/* ============= AREAS SERVED ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — From Your Doorstep —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Short Drive{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Down Hosur Road
                                </span>
                            </h2>
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

            {/* ============= DARK BAND ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Five Days at a Desk, Then Ninety Minutes at Full Intensity.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    That is the weekend-warrior equation, and it explains most of what comes in from Electronic City. Muscles and tendons that have been static all week are asked to sprint, lunge, smash and pivot without a warm-up, and the weakest link gives: a hamstring, an ankle ligament, an ACL. The good news is that most of these injuries recover fully with the right rehabilitation, and the ones that need surgery do far better when it is done by someone who does it every week and plans it around the sport you want to go back to.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Snowflake className="w-4 h-4" />
                                    Accurate diagnosis · structured rehab · keyhole surgery when it changes the outcome
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Planned Backwards from Return-to-Play</p>
                                    <p className="text-base text-blue-100 leading-relaxed">The goal is the sport, not just the absence of pain.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">1st</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Diagnose</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">2nd</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Rehab</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">If needed</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Keyhole Surgery</p>
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
                                    Monday Slots for Weekend Injuries
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book an Injury Assessment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call back within hours to confirm your slot — WhatsApp works too.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="sports-injury-electronic-city" />
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
                                — Sports Injuries Explained —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                How a Sports-Medicine Clinic Approaches an Injury Differently
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Trophy className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The question is not &ldquo;what is torn&rdquo; but &ldquo;what do you want to get back to&rdquo;
                            </h3>
                            <p>
                                General orthopedics treats an injury; sports medicine treats an athlete with an injury, and the difference shows up in every decision. A partial ACL tear in a 45-year-old who plays a gentle game of badminton on Sundays and a complete ACL tear in a 28-year-old who plays competitive futsal three nights a week are the same structure and very different problems. The first will probably do well with a strengthening programme and a brace; the second needs a reconstruction if the knee is going to survive the pivoting that sport demands. So the first visit spends as long on what you play, how often and at what level as it does on the knee itself. The full picture of{" "}
                                <Link href="/sports-injury-doctor-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    sports injury care in Bangalore
                                </Link>{" "}
                                is on its own page; this one is about the version of it that walks in from Electronic City.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Getting the diagnosis right early
                            </h3>
                            <p>
                                A sports injury is easiest to diagnose in the first few days, before swelling and muscle guarding get in the way of the examination. That is why the advice above is to get examined within a week. Most diagnoses are made clinically: a positive Lachman test for the ACL, a specific tenderness pattern for a meniscus, a painful arc for the rotator cuff. The in-house X-ray at Raghava Multispeciality Hospital rules out a fracture or an avulsion on the spot. An MRI is ordered when it would change the plan — to map the extent of a ligament or meniscus injury before surgery, or to sort out a shoulder where the examination is ambiguous — rather than as a reflex. Patients who have already had a scan should bring it, but should expect the examination to lead.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Dumbbell className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Rehab first, and what &ldquo;rehab&rdquo; actually means
                            </h3>
                            <p>
                                For the majority of injuries seen from the tech-park leagues — hamstring and calf strains, ankle sprains, runner&apos;s knee, shin splints, most shoulder impingement, many meniscus tears — the treatment is rehabilitation, and the word deserves defining. It does not mean rest followed by a return to the same sport at the same intensity. It means a staged, progressive loading programme that rebuilds the strength and control of the injured tissue, then re-introduces the sport-specific demands — sprinting, cutting, jumping, overhead smashing — step by step, with clear criteria for moving to the next stage. Done properly, it is the difference between an ankle sprain that recovers fully and one that becomes a chronically unstable ankle. The regenerative options that can support tissue healing in specific cases are described on the{" "}
                                <Link href="/prp-regenerative-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP and regenerative treatment
                                </Link>{" "}
                                page.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                When surgery is the right call
                            </h3>
                            <p>
                                Some injuries do need an operation, and delaying those is its own mistake. A complete ACL rupture in someone returning to pivoting sport, a bucket-handle meniscus tear that locks the knee, a recurrent shoulder dislocation with a Bankart lesion, a full-thickness rotator cuff tear in an active person, a displaced fracture. These are done arthroscopically wherever possible at the Attibele hospital, most as day-care or single-night admissions, and the rehabilitation that follows is planned by the same surgeon from the day of the operation. The specifics of the commonest procedures are on the{" "}
                                <Link href="/acl-reconstruction-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL reconstruction
                                </Link>
                                ,{" "}
                                <Link href="/knee-arthroscopy-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee arthroscopy
                                </Link>{" "}
                                and{" "}
                                <Link href="/shoulder-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder pain
                                </Link>{" "}
                                pages. Sports fractures — a wrist from a fall on the cricket outfield, a collarbone from a bike crash — go through the hospital casualty and the{" "}
                                <Link href="/fracture-treatment-attibele" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    fracture and trauma service
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why Attibele for an Electronic City athlete
                            </h3>
                            <p>
                                A sports injury needs more visits than most orthopedic problems — assessment, a review at two weeks, rehab check-points, a return-to-play clearance — and each of those is far easier when the clinic is twenty minutes south against the traffic rather than ninety minutes into the city. The Attibele hospital has X-ray in the building, an operating theatre for the cases that need it, and one fellowship-trained sports surgeon who sees you at every visit. Patients who live nearer HSR Layout can use the{" "}
                                <Link href="/orthopedic-doctor-in-hsr-layout" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    HSR Layout clinic
                                </Link>{" "}
                                for follow-ups; the record and the surgeon stay the same.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Sports Injury Clinic near Electronic City, Bengaluru"
                pagePath={PATH}
                aboutCondition="Sports injuries"
                subheading="Practical answers for weekend athletes from Electronic City Phase 1, Phase 2, Bommasandra and Hebbagodi."
                items={[
                    {
                        q: "I hurt my knee playing badminton on Saturday. How soon should I be seen?",
                        a: "Within the first week — ideally Monday or Tuesday. The examination is clearest before swelling and muscle guarding set in. If the knee is locked, visibly deformed, or you cannot put weight on it, come to the hospital casualty the same day rather than waiting for an appointment.",
                    },
                    {
                        q: "Do I need an MRI before the appointment?",
                        a: "No. Most sports injuries are diagnosed by examination, and an X-ray is done in-house on the day to rule out a fracture. An MRI is ordered when it would change the plan — for example to map a ligament or meniscus injury before surgery. Bring any scan you already have.",
                    },
                    {
                        q: "I heard a pop and the knee swelled within an hour. Is it an ACL tear?",
                        a: "That combination — a pop, rapid swelling, a feeling of instability — is the classic ACL story, though a meniscus tear at its blood supply or a kneecap dislocation can do the same. Stop playing, ice and elevate it, and get examined this week. Whether it needs reconstruction depends on the tear, the knee and the sport you want to return to.",
                    },
                    {
                        q: "How far is the clinic from Electronic City?",
                        a: "About 10–12 km from Phase 1 — roughly 20 minutes south on Hosur Road (NH 44), against the city-bound traffic. The hospital has on-site parking and in-house X-ray, so assessment, imaging and a plan happen in a single visit.",
                    },
                    {
                        q: "Will I need surgery?",
                        a: "Most sports injuries seen from Electronic City do not. Hamstring and calf strains, ankle sprains, runner's knee, shin splints and most shoulder impingement are treated with structured rehabilitation. Surgery is for the injuries where it changes the outcome — a complete ACL tear in a pivoting athlete, a locked meniscus, a recurrent shoulder dislocation — and is done arthroscopically at the Attibele hospital.",
                    },
                    {
                        q: "How long before I can play again?",
                        a: "It depends entirely on the injury. A mild ankle sprain may be two to three weeks; a hamstring strain four to eight; a meniscus procedure six to twelve; an ACL reconstruction nine to twelve months for pivoting sport. Return-to-play is decided on strength and control criteria, not on the calendar.",
                    },
                    {
                        q: "I am training for a 10K and have shin pain that will not settle. What is it?",
                        a: "Usually medial tibial stress syndrome (shin splints) from increasing training volume too fast, but persistent, localised shin pain that hurts at rest or at night needs to be distinguished from a stress fracture — which changes the plan completely. Get it examined; an X-ray and, if needed, further imaging will tell them apart.",
                    },
                    {
                        q: "Does Dr. Nitin treat amateur players or only professionals?",
                        a: "The large majority of patients are amateur and recreational athletes — corporate cricket, badminton leagues, gym-goers and runners. The Bengaluru FC team-doctor role means the same protocols used for professional players are applied to everyone.",
                    },
                    {
                        q: "Is corporate health insurance accepted for sports injury surgery?",
                        a: "Health insurance is accepted for procedures such as ACL reconstruction, meniscus repair and shoulder stabilisation, and the hospital team assists with cashless pre-authorisation. Bring your policy or TPA details and call ahead to confirm coverage specifics for your insurer.",
                    },
                    {
                        q: "Can I get a Saturday appointment?",
                        a: "Yes. The OPD runs Monday to Saturday, 10:00 AM to 6:00 PM. Saturdays are the busiest day for working professionals from Electronic City — book by phone or WhatsApp to secure a slot. Same-day appointments are available most weekdays.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Get Back on the Court, Pitch or Road — Properly."
                subtitle="Sports-medicine care 20 minutes from Electronic City. Book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath={PATH} />
        </main>
    );
}
