import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    Heart,
    CheckCircle,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Trophy,
    Timer,
    Dumbbell,
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
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
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
import { LandingArticle } from "@/components/landing/landing-article";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "ACL Reconstruction Surgery in Bangalore | Dr. Nitin N Sunku" },
    description:
        "ACL tear? Arthroscopic ACL reconstruction by Bengaluru FC's team doctor. Honest advice on surgery vs rehab, graft options & return to sport. Book today.",
    alternates: { canonical: `${siteOrigin}/acl-reconstruction-bangalore` },
    keywords: [
        "ACL reconstruction Bangalore",
        "ACL surgery Bangalore",
        "ACL surgeon Bangalore",
        "ACL tear treatment Bangalore",
        "arthroscopic ACL reconstruction Bangalore",
        "best ACL surgeon Bangalore",
        "ACL surgery cost Bangalore",
        "ACL tear do I need surgery",
        "sports knee surgeon Bangalore",
        "ACL reconstruction recovery time",
    ],
    openGraph: {
        title: "ACL Reconstruction Surgery in Bangalore — Dr. Nitin N Sunku",
        description:
            "Arthroscopic ACL reconstruction from the official Bengaluru FC team doctor — honest advice on whether you need surgery, graft choices, and a structured return to sport.",
        url: `${siteOrigin}/acl-reconstruction-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have an ACL injury and would like a consultation.";

const treatFor = [
    { title: "Complete ACL Tears", Icon: Zap },
    { title: "Partial ACL Tears", Icon: Activity },
    { title: "ACL + Meniscus Combined Injuries", Icon: ShieldCheck },
    { title: "Knee Giving Way / Instability", Icon: Users },
    { title: "Sports Return After Injury", Icon: Trophy },
    { title: "Failed / Re-Torn ACL Opinions", Icon: Heart },
    { title: "Chronic Neglected ACL Tears", Icon: Timer },
    { title: "Post-Op Rehab Guidance", Icon: Dumbbell },
];

const journey = [
    {
        step: "1",
        title: "Do You Actually Need Surgery?",
        description:
            "Not every ACL tear needs reconstruction. A partial tear in a low-demand knee can do well with structured rehab. A complete tear in a footballer, trekker or anyone whose knee keeps giving way usually does need surgery. You get the honest version of this answer — either way.",
    },
    {
        step: "2",
        title: "Arthroscopic Reconstruction",
        description:
            "Keyhole surgery replacing the torn ligament with a graft — typically hamstring tendon, chosen per your anatomy and sport. Meniscus injuries found alongside are repaired in the same sitting. Usually a short hospital stay.",
    },
    {
        step: "3",
        title: "Structured Return to Sport",
        description:
            "The surgery is half the outcome; rehab is the other half. A phased protocol — walking, strength, running, sport-specific drills — with return to competitive sport typically around 6–9 months, cleared by testing rather than the calendar alone.",
    },
];

const sellingPoints = [
    {
        Icon: Trophy,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "ACL injuries are the defining injury of football. As the club's team doctor, Dr. Nitin manages these injuries at the professional level — the same standards apply to your knee.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained in Sports Medicine",
        description:
            "Fellowship training in orthopedics & sports medicine with 10+ years of arthroscopic experience — ACL reconstruction is core work here, not an occasional procedure.",
    },
    {
        Icon: Heart,
        title: "Honest About Surgery vs Rehab",
        description:
            "If your tear, age and activity level mean rehab alone is a reasonable path, you'll be told so. Reconstruction is recommended when instability, sport demands or associated injuries genuinely warrant it.",
    },
    {
        Icon: ShieldCheck,
        title: "Meniscus Handled in the Same Surgery",
        description:
            "Around half of ACL tears come with meniscus damage. It's assessed upfront and repaired in the same arthroscopy — not discovered as a surprise later.",
    },
    {
        Icon: Dumbbell,
        title: "Rehab Taken as Seriously as Surgery",
        description:
            "A perfect graft with poor rehab still fails. You leave with a phased, written protocol and scheduled milestones — and the team stays involved through your return to sport.",
    },
    {
        Icon: Hospital,
        title: "Transparent, Written Costs",
        description:
            "Arthroscopic ACL reconstruction is quoted in writing for your graft and room choice before you decide. Health insurance is accepted, with pre-authorisation support.",
    },
];

export default function AclReconstructionBangalorePage() {
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
                                    <Trophy className="w-3.5 h-3.5" />
                                    By Bengaluru FC&apos;s Official Team Doctor
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">ACL Reconstruction{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Heard the pop. Felt the knee give way. Now every search result says something different about surgery. Here&apos;s the deal: some ACL tears genuinely need reconstruction, some do well with rehab alone — and the answer depends on your tear, your knee and your sport, not on a template.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Arthroscopic (Keyhole)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Return-to-Sport Protocol
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
                                        metadata={{ cta_type: "form_scroll", condition: "acl-reconstruction" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book ACL Consultation
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
                            <HeroImage alt="Dr. Nitin N Sunku — ACL Reconstruction Surgeon in Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "10+ Yrs", label: "Arthroscopy Experience" },
                    { value: "Team Dr", label: "Bengaluru FC" },
                    { value: "6–9 mo", label: "Typical Return to Sport" },
                    { value: "4.9★", label: "Patient Rating" },
                ]}
            />

            {/* ============= WHAT WE TREAT ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — ACL Injuries We Manage —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Every Stage of the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    ACL Journey
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Fresh tears, old neglected ones, and second opinions on someone else&apos;s plan.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {treatFor.map(({ title, Icon }, idx) => (
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
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — From Injury to Return —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                How ACL Treatment{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Actually Works
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Three honest stages — starting with whether you need surgery at all.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {journey.map(({ step, title, description }, idx) => (
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

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Doing your research? Read{" "}
                                <Link href="/blog/can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    can you walk with a torn ACL
                                </Link>
                                ,{" "}
                                <Link href="/blog/acl-surgery-cost-and-recovery-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL surgery cost &amp; recovery
                                </Link>
                                ,{" "}
                                <Link href="/blog/bad-signs-after-acl-surgery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    warning signs after ACL surgery
                                </Link>
                                , or the full{" "}
                                <Link href="/services/acl-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL care service
                                </Link>
                                , including{" "}
                                <Link href="/services/artificial-ligament-acl-reconstruction" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    artificial ligament ACL reconstruction
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
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
                                The Surgeon Footballers{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Get Sent To
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons athletes and weekend players across Bengaluru choose this practice for ACL injuries.
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

            {/* ============= DON'T WAIT SECTION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    &ldquo;I Can Walk Fine&rdquo; Is the ACL Trap
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Most people can walk comfortably within weeks of an ACL tear — swelling settles, straight-line walking feels normal, and the injury gets shelved. Then the knee gives way on a stair, a turn, a game of badminton. Every giving-way episode risks new damage to the meniscus and cartilage — the structures that determine how that knee ages. Walking fine was never the test; a stable knee under twisting load is. If your knee has given way even once since the injury, get it assessed.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Zap className="w-4 h-4" />
                                    Instability episodes = the knee asking for help
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Trophy className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Protect the Meniscus</p>
                                    <p className="text-base text-blue-100 leading-relaxed">The real cost of a neglected ACL is the damage it lets happen next.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">Assess</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Early</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Decide</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Honestly</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Return</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Tested</p>
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
                                    Bring Your MRI If You Have One
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your ACL Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Examination, MRI review, and a straight answer on surgery vs rehab — the team will call back within hours.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-acl-reconstruction" />
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
                subheading="ACL assessment at either clinic; arthroscopic surgery at Raghava Multispeciality Hospital, Attibele."
            />

            <LandingArticle slug="acl-reconstruction-bangalore" />

            <LandingFaq
                pageName="ACL Reconstruction Surgery in Bangalore"
                pagePath="/acl-reconstruction-bangalore"
                aboutCondition="Anterior cruciate ligament tear"
                subheading="Straight answers about ACL tears, reconstruction and recovery with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "Do all ACL tears need surgery?",
                        a: "No. Partial tears in lower-demand knees, and some complete tears in patients who don't play pivoting sports, can do well with structured rehabilitation alone. Reconstruction is recommended when the knee is unstable (gives way), when you play cutting/pivoting sports, or when there are associated meniscus injuries. The recommendation follows your knee and your goals — not a default.",
                    },
                    {
                        q: "I can walk normally — doesn't that mean my ACL is fine?",
                        a: "Unfortunately not. Straight-line walking barely uses the ACL; its job is stabilising the knee during twisting, cutting and sudden stops. Many people with complete tears walk comfortably within weeks, then experience giving-way episodes with turns or sport — and each episode risks new meniscus and cartilage damage.",
                    },
                    {
                        q: "How much does ACL reconstruction cost in Bangalore?",
                        a: "Arthroscopic ACL reconstruction in Bangalore typically costs around ₹1.4–₹2.5 lakh, depending on graft type, fixation implants, hospital category and whether a meniscus repair is added. You receive a written, itemised estimate for your specific case before deciding, and health insurance is accepted with pre-authorisation support.",
                    },
                    {
                        q: "How long until I can play sport again after ACL reconstruction?",
                        a: "Typical return to competitive pivoting sport is around 6–9 months, progressing through phases: early mobilisation, strength building, running, and sport-specific drills. Clearance is based on strength and stability testing, not just the calendar — returning early is the biggest re-tear risk factor you can control.",
                    },
                    {
                        q: "What graft is used for the new ligament?",
                        a: "Most commonly your own hamstring tendons, which give reliable results with small incisions; alternatives include other tendons and, for suitable patients, an artificial ligament (Jewel ACL) that avoids harvesting any tendon. The choice is matched to your anatomy, sport and any previous surgery. Graft choice, fixation and rehab plan are all explained before the operation.",
                    },
                    {
                        q: "Where is the surgery done and how long is the hospital stay?",
                        a: "Arthroscopic ACL reconstruction is performed at Raghava Multispeciality Hospital, Attibele, usually with a short stay of a day or two. Consultations are available at both Attibele and Health Nest Hospital, HSR Layout. Call +91-9980031006 to book.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="One Giving-Way Episode Is One Too Many."
                subtitle="Get a straight answer on your ACL — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/acl-reconstruction-bangalore" />
        </main>
    );
}
