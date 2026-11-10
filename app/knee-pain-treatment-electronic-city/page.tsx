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
    Laptop,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Car,
    Scan,
    Footprints,
    Dumbbell,
    Timer,
    ArrowUpDown,
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

const PATH = "/knee-pain-treatment-electronic-city";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: { absolute: "Knee Pain Treatment near Electronic City, Bengaluru | Dr. Nitin Sunku" },
    description:
        "Knee pain specialist 20 min from Electronic City. Stair pain, early arthritis, meniscus & ligament tears, runner's knee — X-ray, diagnosis & treatment in one visit. Conservative-first.",
    alternates: { canonical: `${siteOrigin}${PATH}` },
    keywords: [
        "knee pain treatment Electronic City",
        "knee pain doctor Electronic City",
        "knee specialist near Electronic City",
        "knee pain doctor Electronic City Phase 1",
        "knee pain doctor Electronic City Phase 2",
        "orthopedic knee doctor Bommasandra",
        "knee arthritis treatment Electronic City",
        "meniscus tear doctor Electronic City",
        "runner's knee treatment Bangalore south",
        "knee pain climbing stairs treatment",
    ],
    openGraph: {
        title: "Knee Pain Treatment near Electronic City — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained knee & sports-medicine specialist, a 20-minute drive down Hosur Road from Electronic City. Same-visit X-ray, honest diagnosis, surgery only when it is actually needed.",
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
    "Hi Dr. Nitin, I'm from Electronic City and would like to book a consultation for knee pain.";

const kneeProblems = [
    { title: "Pain Climbing or Descending Stairs", Icon: ArrowUpDown },
    { title: "Stiffness After Long Sitting", Icon: Laptop },
    { title: "Runner's Knee / Patellofemoral Pain", Icon: Footprints },
    { title: "Gym & Squat Injuries", Icon: Dumbbell },
    { title: "Meniscus & Ligament Tears", Icon: ShieldCheck },
    { title: "Early Knee Arthritis (30s–50s)", Icon: Activity },
    { title: "Swelling, Locking or Giving Way", Icon: Timer },
    { title: "Knee Pain After a Two-Wheeler Fall", Icon: Car },
];

const patterns = [
    {
        symptom: "Pain at the front of the knee on stairs, squats or after sitting through a long meeting",
        likely: "Patellofemoral pain (runner's knee) or early kneecap cartilage wear",
        firstStep: "Examination. X-ray only if over 40 or the history suggests it. No MRI at the first visit.",
        usualPlan: "Quadriceps and hip strengthening, activity modification. Rarely needs anything more.",
    },
    {
        symptom: "Sharp pain on the inner or outer joint line, catching or locking, swelling after a twist",
        likely: "Meniscus tear",
        firstStep: "Examination, X-ray to rule out arthritis, MRI if the mechanical symptoms are convincing.",
        usualPlan: "Physiotherapy first for degenerative tears; keyhole repair or trim for locked or unstable tears.",
    },
    {
        symptom: "A pop during football or badminton, rapid swelling, the knee feels like it will give way",
        likely: "ACL tear, sometimes with a meniscus tear",
        firstStep: "Examination within the first week, MRI to confirm and map associated injuries.",
        usualPlan: "Rehab-first for low-demand knees; arthroscopic reconstruction for those returning to pivoting sport.",
    },
    {
        symptom: "Aching that builds through the day, morning stiffness under 30 minutes, worse on stairs and after sitting",
        likely: "Early osteoarthritis",
        firstStep: "Weight-bearing X-ray. This shows the joint space; an MRI is not needed to diagnose arthritis.",
        usualPlan: "Strengthening, weight management, medication, and where indicated guided injections. Replacement is years away for most.",
    },
    {
        symptom: "Sudden swelling after a fall from the bike, unable to bear weight, or the knee looks deformed",
        likely: "Fracture, dislocation or multi-ligament injury",
        firstStep: "Same-day X-ray at the hospital casualty. Do not wait for an appointment.",
        usualPlan: "Depends entirely on the injury. Treated in the same building: plaster room, theatre and follow-up.",
    },
];

const sellingPoints = [
    {
        Icon: Car,
        title: "20 Minutes South, Against the Traffic",
        description:
            "From Electronic City Phase 1 or 2 the Attibele hospital is a straight run down Hosur Road (NH 44), away from the city-bound crawl. Consultation, X-ray and plan in one visit, and back at your desk in a couple of hours.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained in Arthroscopy & Sports Medicine",
        description:
            "Dr. Nitin's fellowship training is in exactly the problems that bring Electronic City knees in: meniscus tears, ligament injuries, cartilage wear and kneecap pain. Team doctor for Bengaluru FC.",
    },
    {
        Icon: Scan,
        title: "X-Ray in the Same Visit",
        description:
            "Raghava Multispeciality Hospital has X-ray in-house, so the first appointment ends with an actual diagnosis rather than a referral slip to a scan centre.",
    },
    {
        Icon: Heart,
        title: "Conservative First, Honestly",
        description:
            "Most knee pain in people under 50 never needs an operation. The plan starts with strengthening, load management and, where genuinely indicated, precise ultrasound-guided injections. Surgery is discussed only when it will actually change the outcome.",
    },
    {
        Icon: Hospital,
        title: "Keyhole Surgery on Site When It Is Needed",
        description:
            "Arthroscopic meniscus repair, ACL reconstruction and cartilage procedures are done as day-care or overnight cases at the same hospital, with follow-up by the same surgeon.",
    },
    {
        Icon: Users,
        title: "Corporate Insurance & Cashless Help",
        description:
            "Health insurance is accepted for procedures, and the hospital team assists with cashless pre-authorisation paperwork, which matters for the corporate policies common across the IT corridor.",
    },
];

const areasServed = [
    { name: "Electronic City Phase 1", note: "~20 min via NH 44" },
    { name: "Electronic City Phase 2", note: "~18 min drive" },
    { name: "Neo Town", note: "~16 min drive" },
    { name: "Hebbagodi", note: "~14 min drive" },
    { name: "Bommasandra", note: "~12 min drive" },
    { name: "Chandapura", note: "~8 min drive" },
    { name: "Hosa Road / Konappana Agrahara", note: "~22 min drive" },
    { name: "Attibele", note: "Clinic location" },
];

export default function KneePainTreatmentElectronicCityPage() {
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
                                    Knee Specialist · 20 Min from Electronic City
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Knee Pain Treatment{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        near Electronic City
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Stair pain, stiffness after long sitting, a knee that swelled after Sunday football, or arthritis that is starting earlier than you expected. Fellowship-trained knee and sports-medicine care with same-visit X-ray, a short drive south on Hosur Road.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Visit X-Ray
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Conservative-First
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
                                        metadata={{ cta_type: "form_scroll", condition: "knee-pain-electronic-city" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Knee Consultation
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee Pain Specialist near Electronic City, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= KNEE PROBLEMS WE SEE ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Knee Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Knees{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Electronic City Actually Brings In
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Ten-hour desk days, stairs in the tech park, a badminton league and the odd two-wheeler skid — this is the case mix, and it is very treatable.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {kneeProblems.map(({ title, Icon }, idx) => (
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

            {/* ============= SYMPTOM PATTERN TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What Your Symptoms Usually Mean —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 break-words">
                                Five Knee Patterns, and What Happens at the First Visit
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A guide, not a diagnosis. The point is to show that most knees do not need an MRI, and very few need an operation.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="min-w-full text-sm text-left">
                                <thead className="bg-blue-50 text-blue-900">
                                    <tr>
                                        <th className="px-4 py-3 font-bold">What you notice</th>
                                        <th className="px-4 py-3 font-bold">Most likely cause</th>
                                        <th className="px-4 py-3 font-bold">First visit</th>
                                        <th className="px-4 py-3 font-bold">Usual plan</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {patterns.map((row) => (
                                        <tr key={row.likely} className="align-top hover:bg-blue-50/40">
                                            <td className="px-4 py-3 text-gray-800 font-medium">{row.symptom}</td>
                                            <td className="px-4 py-3 text-blue-800 font-semibold">{row.likely}</td>
                                            <td className="px-4 py-3 text-gray-600">{row.firstStep}</td>
                                            <td className="px-4 py-3 text-gray-600">{row.usualPlan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= COMMUTE / AREAS SERVED ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — From the Tech Park —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Closer Than{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the City Hospitals
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                South on NH 44, past Chandapura junction, into Attibele — on-site parking, casualty and X-ray in one building.
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
                                A Knee Specialist,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Not a Referral Chain
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

            {/* ============= TREATMENT LADDER (dark band) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Sitting Is the Injury. Stairs Are Just Where You Notice It.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Long static sitting weakens the quadriceps and tightens the hip flexors, so the kneecap tracks badly the moment it is loaded — which is why the first symptom is usually pain on the stairs at the office, not on the football pitch. Add a two-wheeler commute and a weekend of badminton, and the joint is asked to do at 5 pm on Saturday what it has not been prepared for all week. The fix is mostly strengthening and load management, started early. Injections have a defined role; surgery has a narrow one.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Syringe className="w-4 h-4" />
                                    Physio &amp; strengthening · guided injections · keyhole surgery only when indicated
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">The Treatment Ladder</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Every knee starts at the bottom rung unless the injury itself demands otherwise.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">1st</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Strengthen &amp; Unload</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">2nd</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Guided Injections</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Last</p>
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
                                    Same-Day Slots Most Days
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book a Knee Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call back within hours to confirm your slot. Saturday appointments are popular with Electronic City — book early.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="knee-pain-electronic-city" />
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
                                — Knee Pain in the IT Corridor —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                Why Electronic City Knees Hurt Earlier, and What Actually Fixes Them
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Laptop className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The desk-to-badminton problem
                            </h3>
                            <p>
                                A typical week for someone working in Electronic City Phase 1 or 2 looks like this: nine or ten hours seated, a commute on a two-wheeler or in a cab, a few flights of stairs a day, and then a burst of real activity at the weekend — a badminton league, a corporate cricket match, a 10K, a gym session that includes deep squats. The knee tolerates each of these individually. What it tolerates badly is the combination of long unloading during the week and sudden heavy loading at the weekend, because the muscles that protect the joint — the quadriceps, the gluteals and the hamstrings — lose strength and timing with prolonged sitting far faster than most people expect.
                            </p>
                            <p>
                                The result is a very recognisable case mix. Patellofemoral pain, the ache at the front of the knee on stairs and after sitting, is the single commonest complaint in the 25-to-40 age group. Degenerative meniscus tears turn up from the mid-thirties onwards, often after nothing more dramatic than a deep squat at the gym. Acute ACL and meniscus injuries come from badminton and football, where the foot is planted and the body turns. And early osteoarthritis is being seen in people in their forties who assumed it was a problem for their parents. None of this is unique to the IT corridor, but the corridor produces it in concentration. The general assessment of knee pain is covered on our{" "}
                                <Link href="/knee-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee pain treatment in Bangalore
                                </Link>{" "}
                                page; this page is about what that looks like for people coming from Electronic City, and what to do about it.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why you probably do not need an MRI first
                            </h3>
                            <p>
                                The most expensive mistake patients make with knee pain is arriving with an MRI they ordered themselves. An MRI of a knee over 40 will almost always show something — a small meniscus signal, some cartilage thinning, a little fluid — and most of those findings are normal wear that has nothing to do with the pain. Treating the scan rather than the patient is how people end up with operations they did not need. The right order is a careful history, a hands-on examination and, where the age or the story warrants it, a standing X-ray. The X-ray is done in-house at Raghava Multispeciality Hospital during the same visit, so the appointment ends with a working diagnosis. An MRI is then ordered only when the examination points to a mechanical problem — a locked knee, a convincing ligament laxity, a suspected cartilage lesion — and when the result would actually change the plan. We have written more on this in{" "}
                                <Link href="/blog/do-i-need-a-knee-arthroscopy-mri-vs-symptoms" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    Do I need a knee arthroscopy? MRI versus symptoms
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Dumbbell className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What treatment looks like, rung by rung
                            </h3>
                            <p>
                                For the large majority of Electronic City knees the plan is conservative and it works. The first rung is strengthening and load management: a targeted programme for the quadriceps and hips, a temporary change to how the knee is loaded — fewer deep squats, a lighter week of badminton, stairs taken one at a time for a while — and, in the acutely painful phase, short courses of anti-inflammatory medication. Most patellofemoral pain and most degenerative meniscus tears settle on this rung within six to twelve weeks, provided the exercises are actually done.
                            </p>
                            <p>
                                The second rung is injections, used precisely rather than routinely. Ultrasound-guided corticosteroid injections have a role in a genuinely inflamed joint that is too painful to rehabilitate; hyaluronic acid and platelet-rich plasma have a role in early arthritis where the goal is to buy years of comfortable function before any thought of replacement. The differences between these options are set out on the{" "}
                                <Link href="/prp-regenerative-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP and regenerative treatment
                                </Link>{" "}
                                page. What an injection is not is a substitute for the strengthening on the first rung.
                            </p>
                            <p>
                                The third rung is keyhole surgery, reserved for the knees where it changes the outcome: a locked knee from a bucket-handle meniscus tear, an unstable knee after an ACL rupture in someone who wants to return to pivoting sport, a loose cartilage fragment that keeps catching. These are done arthroscopically at the Attibele hospital, most as day-care or single-night cases, and the follow-up is with the same surgeon rather than a rotating registrar. The procedure itself is described on the{" "}
                                <Link href="/knee-arthroscopy-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee arthroscopy in Bangalore
                                </Link>{" "}
                                page, and ligament reconstruction on the{" "}
                                <Link href="/acl-reconstruction-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL reconstruction
                                </Link>{" "}
                                page. Joint replacement sits well beyond the third rung, and for a knee in its forties it should be years away; when it is the right answer, it is also available at the same hospital.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The practical case for Attibele over the city
                            </h3>
                            <p>
                                From Electronic City, the specialist hospitals most people think of first are all north — Koramangala, Bannerghatta Road, Sarjapur Road — which means driving into the city&apos;s peak-hour flow, paying for the brand, and often seeing a different doctor at each follow-up. The Attibele hospital is a 20-minute run south on Hosur Road in the opposite direction, with parking at the door, X-ray in the building, and the same fellowship-trained surgeon at every visit. For a knee that needs a diagnosis, a plan and three or four follow-ups over a season, that adds up to a great deal of time saved and a much more consistent standard of care. Patients who live nearer HSR Layout or Koramangala can use the{" "}
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
                pageName="Knee Pain Treatment near Electronic City, Bengaluru"
                pagePath={PATH}
                aboutCondition="Knee pain"
                subheading="Practical answers for patients coming from Electronic City Phase 1, Phase 2, Bommasandra and Hebbagodi."
                items={[
                    {
                        q: "My knee hurts on the stairs at the office but is fine walking on flat ground. Is that serious?",
                        a: "Usually not. Pain on stairs, squatting and after long sitting, with a normal knee on the flat, is the classic pattern of patellofemoral pain — a tracking problem of the kneecap driven by weak quadriceps and hips. It responds well to a structured strengthening programme and rarely needs a scan or an injection. It is worth seeing someone if it has lasted more than a few weeks or if the knee swells.",
                    },
                    {
                        q: "Should I get an MRI before I come?",
                        a: "No. Come with the history and, if you have them, any old X-rays. A knee MRI ordered without an examination frequently shows age-related findings that have nothing to do with the pain and leads to unnecessary worry or surgery. If an MRI is genuinely needed after examination, it will be requested and read in the context of your symptoms.",
                    },
                    {
                        q: "How far is the clinic from Electronic City, and is it worth the drive?",
                        a: "About 10–12 km from Phase 1 — roughly 20 minutes south on Hosur Road (NH 44), against the city-bound traffic. Consultation, X-ray and a treatment plan happen in the same visit at Raghava Multispeciality Hospital, and there is on-site parking. Most patients are back at their desk within a couple of hours.",
                    },
                    {
                        q: "I twisted my knee playing badminton and it swelled up within an hour. What should I do?",
                        a: "Rapid swelling after a twist usually means bleeding inside the joint, which points to a ligament injury such as an ACL tear or a meniscus tear at its blood supply. Rest it, ice it, avoid sport, and get it examined within the first week — early assessment makes the diagnosis easier and the plan clearer. If the knee is locked and will not straighten, come in the same day.",
                    },
                    {
                        q: "I am 42 and have been told I have early arthritis. Do I need a knee replacement?",
                        a: "Almost certainly not now, and for most people not for many years. Early arthritis in the forties is managed with strengthening, weight control, activity modification and, where indicated, injections such as hyaluronic acid or PRP to keep the joint comfortable. Replacement is a last-resort operation for a joint that has worn out despite all of that.",
                    },
                    {
                        q: "Can I keep running or playing sport while being treated?",
                        a: "In most cases yes, with modifications. The aim is to reduce the load on the painful structure while you strengthen around it, not to stop everything. Specific advice depends on the diagnosis — for a patellofemoral knee that might mean a lighter week and no hills; for a fresh ligament injury it means stopping pivoting sport until the knee is assessed.",
                    },
                    {
                        q: "What does a PRP or hyaluronic acid injection cost, and do I need one?",
                        a: "Most knee pain in this age group does not need an injection at all. Where one is indicated — usually early arthritis or a joint too painful to rehabilitate — the options, eligibility and typical costs are explained on the PRP and regenerative treatment page, and all injections are ultrasound-guided so they go where they are meant to.",
                    },
                    {
                        q: "If I need keyhole surgery, where is it done and how long am I off work?",
                        a: "Arthroscopic meniscus and ligament surgery is done at Raghava Multispeciality Hospital in Attibele, most as day-care or single-night admissions. Desk-based work is usually possible within one to two weeks after a meniscus procedure and two to four weeks after an ACL reconstruction, with a structured rehabilitation programme alongside.",
                    },
                    {
                        q: "Is corporate health insurance accepted?",
                        a: "Health insurance is accepted for procedures, and the hospital team assists with cashless pre-authorisation, which is relevant for the corporate group policies common in Electronic City. Bring your policy or TPA details and call ahead to confirm coverage specifics for your insurer.",
                    },
                    {
                        q: "Can I get a Saturday appointment?",
                        a: "Yes. The OPD runs Monday to Saturday, 10:00 AM to 6:00 PM, and Saturdays are the busiest day for working professionals from Electronic City — book by phone or WhatsApp to secure a slot. Same-day appointments are available most weekdays.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="A Sore Knee Does Not Improve by Waiting for a Free Weekend."
                subtitle="Same-visit X-ray, honest diagnosis, 20 minutes from Electronic City — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath={PATH} />
        </main>
    );
}
