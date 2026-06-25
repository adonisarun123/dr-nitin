import { Metadata } from "next";
import {
    Phone,
    Clock,
    Award,
    Activity,
    Users,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Trophy,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
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
    title: "Sports Injury Doctor Bangalore | Dr. Nitin N Sunku",
    description:
        "Sports injury specialist in Bangalore & official Bengaluru FC team doctor. ACL, meniscus, shoulder & ankle care. Same-day appointments — book now.",
    alternates: { canonical: `${siteOrigin}/sports-injury-doctor-bangalore` },
    keywords: [
        "sports injury doctor Bangalore",
        "sports medicine specialist Bengaluru",
        "ACL surgery Bangalore",
        "meniscus tear surgeon Bangalore",
        "arthroscopy specialist Bangalore",
        "Bengaluru FC team doctor",
        "shoulder dislocation treatment Bangalore",
        "rotator cuff surgery Bangalore",
        "ankle sprain doctor HSR Layout",
        "sports injury clinic Attibele",
        "athlete orthopedic surgeon Bangalore",
        "Dr. Nitin N Sunku sports injury",
    ],
    openGraph: {
        title: "Sports Injury Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Official Bengaluru FC team doctor. Fellowship-trained in arthroscopy & sports medicine. Same care for weekend athletes as for the pros.",
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book a sports injury consultation.";

export default function SportsInjuryDoctorBangalorePage() {
    const injuries = [
        "ACL Tear",
        "Meniscus Tear",
        "Ankle Sprain",
        "Rotator Cuff Tear",
        "Shoulder Dislocation",
        "Tennis / Golfer's Elbow",
        "Stress Fracture",
        "Achilles Tendinopathy",
    ];

    const sellingPoints = [
        {
            icon: Award,
            title: "Official Bengaluru FC Team Doctor",
            description:
                "The orthopedic surgeon trusted by an ISL professional football club — handling pitch-side decisions, acute injuries and return-to-play calls.",
        },
        {
            icon: Stethoscope,
            title: "Fellowship in Arthroscopy & Sports Medicine",
            description:
                "Subspecialty fellowship training focused on minimally invasive surgery and modern sports medicine — the same techniques used at elite sports centres.",
        },
        {
            icon: Activity,
            title: "Specialist in ACL Reconstruction",
            description:
                "High-volume ACL surgeon using anatomic single-bundle and revision techniques, with graft choice tailored to your sport and demands.",
        },
        {
            icon: Clock,
            title: "Rapid Diagnosis & Imaging Coordination",
            description:
                "MRI and X-ray coordinated quickly so you have a clear diagnosis — and a clear plan — within days, not weeks.",
        },
        {
            icon: ShieldCheck,
            title: "Structured Return-to-Play Protocols",
            description:
                "Sport-specific rehabilitation milestones, strength testing and clearance criteria — the same framework used for professional athletes.",
        },
        {
            icon: Users,
            title: "Trusted by Athletes & Weekend Warriors",
            description:
                "From national-level competitors to recreational runners, footballers and cricketers — the same standard of evidence-based care for every patient.",
        },
    ];

    const recoveryTimelines = [
        {
            injury: "Ankle Sprain (Grade 1–2)",
            timeline: "2–6 weeks",
            note: "Most return to sport with structured rehab; bracing for higher-grade sprains.",
        },
        {
            injury: "Meniscus Tear (Arthroscopic Repair)",
            timeline: "3–6 months",
            note: "Depends on tear pattern, repair vs. trim, and sport demands.",
        },
        {
            injury: "ACL Reconstruction",
            timeline: "6–9 months",
            note: "Pivot-sport return guided by strength testing, not just time.",
        },
        {
            injury: "Rotator Cuff Repair",
            timeline: "4–6 months",
            note: "Phased rehab; overhead athletes may take longer to full performance.",
        },
        {
            injury: "Tennis Elbow (Conservative)",
            timeline: "4–8 weeks",
            note: "Activity modification, eccentric loading, PRP for stubborn cases.",
        },
    ];

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
                                    Official Bengaluru FC Team Doctor
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Sports Injury Specialist</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Fellowship-trained in arthroscopy &amp; sports medicine — the same care for weekend athletes as for the pros. From ACL and meniscus tears to shoulder and ankle injuries, with structured return-to-play protocols used at the professional level.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Bengaluru FC Team Doctor
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Same-Day Slots
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Free Consultation - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "sports-injury" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Free Consultation
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

                                <TrackedCall phone={PRIMARY_PHONE} location="Hero" className="inline-flex items-center gap-3 group">
                                    <span className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] text-gray-500 leading-tight">Call directly</p>
                                        <p className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">{PRIMARY_PHONE}</p>
                                    </div>
                                </TrackedCall>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.15}>
                            <HeroImage alt="Dr. Nitin N Sunku — Sports Injury Specialist & Bengaluru FC Team Doctor, Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= INJURIES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Sports Injuries We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From Acute Tears to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Overuse Injuries
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Specialist diagnosis and treatment for the full range of athletic injuries.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
                        {injuries.map((injury, idx) => (
                            <FadeIn key={injury} delay={idx * 0.05}>
                                <div className="group flex items-center gap-3 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                                        {injury}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= BENGALURU FC CONNECTION (unique content) ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div aria-hidden className="absolute -top-10 -right-10 opacity-10">
                                <Trophy className="w-64 h-64" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                    <Trophy className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wide">
                                        The Bengaluru FC Connection
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    The orthopedic surgeon professional footballers trust — available to you.
                                </h2>

                                <p className="text-lg text-blue-50 leading-relaxed mb-6">
                                    Dr. Nitin serves as the official team doctor for{" "}
                                    <strong className="text-white">Bengaluru FC</strong>, one of India&apos;s top professional football clubs. That role means making pitch-side calls on acute injuries, leading diagnostic and surgical decisions for elite athletes, and owning return-to-play clearance for players whose careers depend on getting it right.
                                </p>

                                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                                    For you, that translates into faster, sharper diagnosis, confident judgement on whether you actually need surgery, and a rehabilitation pathway built on protocols used at the professional level — not generic advice.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/20">
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">10+ years</p>
                                        <p className="text-blue-100">treating athletes — from weekend warriors to national-level competitors.</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">Pitch-side to clinic</p>
                                        <p className="text-blue-100">the same standard of acute injury care, applied to every patient who walks in.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Elite-Level Care.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Athlete-First Mindset.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A clear path back to the sport you love.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {sellingPoints.map((point, idx) => (
                            <FadeIn key={point.title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                        <point.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= RECOVERY TIMELINES (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Plan Your Return —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What&apos;s the Typical Recovery Timeline?
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Indicative recovery windows so you can plan your return to sport. Your timeline depends on injury severity, fitness, and rehab adherence.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden">
                            {recoveryTimelines.map((row, idx) => (
                                <div
                                    key={row.injury}
                                    className={`p-6 ${idx !== recoveryTimelines.length - 1 ? "border-b border-blue-100" : ""}`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                        <p className="text-lg font-semibold text-gray-900">{row.injury}</p>
                                        <span className="inline-block bg-blue-100 text-blue-800 font-semibold rounded-full px-4 py-1 text-sm sm:text-base self-start sm:self-auto">
                                            {row.timeline}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{row.note}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Timelines are indicative — return-to-sport is always guided by strength testing and functional milestones, not the calendar alone.
                    </p>
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
                                    Back in the Game.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Real patients sharing how they got back to the sport they love.
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
                                    Book Your Sports Injury Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Tell us about your injury — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-sports-injury" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <TrackedCall phone={PRIMARY_PHONE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-blue-700 font-semibold px-5 py-3.5 rounded-xl shadow-lg transition">
                                    <Phone className="w-5 h-5" />
                                    Call {PRIMARY_PHONE}
                                </TrackedCall>
                                <TrackedWhatsApp phoneDigits={PRIMARY_PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition">
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
                heading="Visit Us — Two Convenient Locations"
                subheading="Sports injury care in HSR Layout and Attibele, Bengaluru."
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let a Sports Injury Sideline You."
                subtitle="Diagnostic precision trusted by professional athletes."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
