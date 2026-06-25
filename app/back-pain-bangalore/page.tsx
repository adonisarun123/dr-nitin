import { Metadata } from "next";
import {
    Phone,
    Clock,
    Activity,
    Users,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Heart,
    ClipboardList,
    Dumbbell,
    Syringe,
    UserCheck,
    Scissors,
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
    title: "Back Pain & Spine Specialist Bangalore | Dr. Nitin Sunku",
    description:
        "Conservative-first back pain & spine specialist in Bangalore. Most disc problems resolve without surgery. Honest second opinions. Same-day appointments.",
    alternates: { canonical: `${siteOrigin}/back-pain-bangalore` },
    keywords: [
        "back pain specialist Bangalore",
        "spine specialist Bengaluru",
        "sciatica treatment Bangalore",
        "slipped disc doctor Bangalore",
        "lumbar disc herniation treatment Bangalore",
        "lower back pain doctor HSR Layout",
        "cervical neck pain specialist Bangalore",
        "non-surgical back pain treatment Bengaluru",
        "spine surgery second opinion Bangalore",
        "epidural injection back pain Bangalore",
        "spondylolisthesis treatment Bangalore",
        "Dr. Nitin N Sunku spine",
    ],
    openGraph: {
        title: "Back Pain & Spine Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Conservative-first spine care. Most back pain doesn't need surgery — get a real diagnosis and a structured plan that works.",
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book a back pain consultation.";

export default function BackPainBangalorePage() {
    const conditions = [
        "Lumbar Disc Herniation",
        "Sciatica",
        "Lower Back Pain",
        "Cervical / Neck Pain",
        "Spinal Stenosis",
        "Spondylolisthesis",
        "Compression Fracture",
        "Spondylitis & Back Stiffness",
    ];

    const sellingPoints = [
        {
            icon: ShieldCheck,
            title: "Conservative-First Philosophy",
            description:
                "Non-surgical options are exhausted first — structured physiotherapy, medication, lifestyle changes and image-guided injections — before surgery is ever on the table.",
        },
        {
            icon: Activity,
            title: "Specialist in Spine + Sports Medicine",
            description:
                "Fellowship-trained orthopedic surgeon with deep expertise in spine and musculoskeletal medicine — the right lens for back pain that's mechanical, not just degenerative.",
        },
        {
            icon: Stethoscope,
            title: "Image-Guided Injections Available",
            description:
                "Epidural and transforaminal injections done under image guidance for precise, targeted relief — a powerful middle step between physio and surgery.",
        },
        {
            icon: Clock,
            title: "Rapid MRI Coordination",
            description:
                "MRI and X-ray coordinated quickly so you have a clear diagnosis — and a clear plan — within days, not weeks of waiting and worrying.",
        },
        {
            icon: Heart,
            title: "Honest About Who DOES Need Surgery",
            description:
                "Conservative-first doesn't mean anti-surgery. When red flags are present or non-surgical care plateaus, you'll get a straight answer — not a delay.",
        },
        {
            icon: Users,
            title: "Two Convenient Bengaluru Locations",
            description:
                "Clinics in HSR Layout and Attibele with same-day appointments, insurance accepted, and continuity of care from first visit through recovery.",
        },
    ];

    const treatmentSteps = [
        {
            step: "Step 1",
            icon: ClipboardList,
            title: "Clinical Assessment + Targeted Imaging",
            description:
                "A proper history and physical exam come first. Imaging (X-ray, MRI) is ordered only when it will change the plan — not as a reflex.",
        },
        {
            step: "Step 2",
            icon: Dumbbell,
            title: "Structured Physiotherapy (4–8 Weeks)",
            description:
                "Goal-directed physio with progression milestones — core stabilisation, mobility, posture and ergonomic fixes. The single biggest lever for most back pain.",
        },
        {
            step: "Step 3",
            icon: Syringe,
            title: "Image-Guided Injection (If Needed)",
            description:
                "If pain plateaus despite good rehab, a precisely targeted epidural or transforaminal injection can break the cycle — often enough to let physio finish the job.",
        },
        {
            step: "Step 4",
            icon: UserCheck,
            title: "Surgical Opinion — Only If Indicated",
            description:
                "A surgical consultation is offered only when non-surgical care has plateaued or red flags are present (progressive weakness, bladder/bowel symptoms, fracture, infection).",
        },
        {
            step: "Step 5",
            icon: Scissors,
            title: "Modern Minimally Invasive Surgery",
            description:
                "When truly needed: endoscopic discectomy, microdiscectomy or minimally invasive decompression — small incisions, faster recovery, less tissue damage.",
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
                                    Conservative-First Spine Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Back Pain &amp; Spine Specialist</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Spine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Most back pain doesn&apos;t need surgery — get a real diagnosis and a plan that works. A conservative-first spine specialist across HSR Layout and Attibele, with honest second opinions and image-guided injections when they&apos;re the right call.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Conservative-First
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
                                        buttonName="Book Free Consultation - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "back-pain" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Back Pain & Spine Specialist, Bangalore" />
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
                                — Spine Conditions We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From Acute Disc Problems to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Chronic Stiffness
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Specialist diagnosis and a structured plan for the full range of spine conditions.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
                        {conditions.map((condition, idx) => (
                            <FadeIn key={condition} delay={idx * 0.05}>
                                <div className="group flex items-center gap-3 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                                        {condition}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= CONSERVATIVE-FIRST PROMISE (unique content) ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div aria-hidden className="absolute -top-10 -right-10 opacity-10">
                                <ShieldCheck className="w-64 h-64" />
                            </div>
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-sm font-semibold uppercase tracking-wide">
                                        The Conservative-First Promise
                                    </span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    Surgery is the last resort — not the first recommendation.
                                </h2>

                                <p className="text-lg text-blue-50 leading-relaxed mb-6">
                                    Most patients walking into a spine clinic are afraid of one thing: being pushed into surgery they don&apos;t need. Our approach is the opposite. You get a careful diagnosis, a structured non-surgical plan, and an honest assessment at every step. Surgery is only discussed when the evidence genuinely supports it.
                                </p>

                                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                                    That same conservative-first philosophy is why patients come to us for{" "}
                                    <strong className="text-white">second opinions</strong>{" "}
                                    on spine surgery recommendations they&apos;ve received elsewhere — and why a meaningful proportion of them go home with a non-surgical plan instead.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">80%+</p>
                                        <p className="text-blue-100">of disc problems resolve without surgery when managed properly.</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">6–12 weeks</p>
                                        <p className="text-blue-100">of structured physiotherapy and medical management is the standard first step.</p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">Honest</p>
                                        <p className="text-blue-100">second opinions on surgery recommendations — including when surgery is the right call.</p>
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
                                A Non-Surgical-First Mindset.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    An Honest Path.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Specialist expertise to get your back working again.
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

            {/* ============= TREATMENT PLAN (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <div className="inline-block bg-blue-700 text-white rounded-full px-5 py-2 mb-4">
                                <p className="text-sm font-semibold uppercase tracking-wide">
                                    Surgery Is Step 5 — Not Step 1
                                </p>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What&apos;s the Typical Treatment Plan?
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A clear, sequenced approach. We escalate only when each previous step has been given a proper chance — and we tell you exactly where you are in the plan.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="space-y-4">
                        {treatmentSteps.map((step, idx) => {
                            const isFinal = idx === treatmentSteps.length - 1;
                            return (
                                <FadeIn key={step.step} delay={idx * 0.06}>
                                    <div className={`relative bg-white rounded-2xl shadow-md border-l-8 ${isFinal ? "border-orange-500" : "border-blue-600"} p-6 md:p-8`}>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${isFinal ? "bg-orange-100" : "bg-blue-100"}`}>
                                                <step.icon className={`w-8 h-8 ${isFinal ? "text-orange-600" : "text-blue-700"}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${isFinal ? "text-orange-600" : "text-blue-700"}`}>
                                                    {step.step}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-8 max-w-3xl mx-auto">
                        <strong>Note:</strong> Red flags such as progressive neurological weakness, loss of bladder/bowel control, severe trauma, suspected infection or malignancy fast-track the pathway. The sequence above is for the typical mechanical or disc-related back pain.
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
                                    Without Unnecessary Surgery.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Real patients sharing how they got their lives back.
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
                                    Book Your Back Pain Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Tell us about your back pain — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-back-pain" />
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
                subheading="Back pain & spine care in HSR Layout and Attibele, Bengaluru."
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Back Pain Doesn't Have to Be Permanent."
                subtitle="A real diagnosis and an honest answer on surgery."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
