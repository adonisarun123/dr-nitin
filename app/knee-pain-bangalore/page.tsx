import { Metadata } from "next";
import {
    Phone,
    Award,
    Heart,
    Users,
    CheckCircle,
    Activity,
    Shield,
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
    title: "Knee Pain Specialist Bangalore | Dr. Nitin N Sunku",
    description:
        "Knee pain specialist in Bangalore (HSR Layout & Attibele). Conservative-first care, PRP, arthroscopy & knee replacement. Book a same-day consultation.",
    alternates: { canonical: `${siteOrigin}/knee-pain-bangalore` },
    keywords: [
        "knee pain specialist Bangalore",
        "knee doctor HSR Layout",
        "knee doctor Attibele",
        "knee pain treatment Bangalore",
        "knee arthritis specialist Bengaluru",
        "ACL surgery Bangalore",
        "meniscus tear treatment Bangalore",
        "PRP injection knee Bangalore",
        "sports knee injury doctor",
        "best knee specialist near me",
        "knee replacement surgeon Bangalore",
        "Dr. Nitin N Sunku knee",
    ],
    openGraph: {
        title: "Knee Pain Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Honest, evidence-based knee care in HSR Layout & Attibele. Surgery only when truly needed. Book a same-day consultation.",
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE = "Hi Dr. Nitin, I would like to book a knee consultation.";

export default function KneePainBangalorePage() {
    const conditions = [
        "Knee Osteoarthritis",
        "ACL & Meniscus Tears",
        "Knee Pain (Over 40)",
        "Sports Injuries",
        "Patellar Tracking Issues",
        "Runner's Knee",
        "Knee Pain (Post-Injury)",
        "Knee Stiffness / Locking",
    ];

    const sellingPoints = [
        {
            icon: Heart,
            title: "Conservative-First Approach",
            description:
                "Physiotherapy, PRP and GFC injections come first. Surgery is recommended only when it's truly the right answer for your knee.",
        },
        {
            icon: Award,
            title: "Fellowship-Trained Knee Surgeon",
            description:
                "Specialist fellowship training in arthroscopy and sports medicine — focused on accurate diagnosis and minimally invasive techniques.",
        },
        {
            icon: Users,
            title: "Bengaluru FC Team Doctor",
            description:
                "Trusted by professional athletes — official team doctor for Bengaluru FC. The same standard of knee care for every patient.",
        },
        {
            icon: CheckCircle,
            title: "10+ Years of Focused Knee Experience",
            description:
                "Over a decade treating knee pain, ligament injuries, cartilage problems and arthritis across thousands of patients.",
        },
        {
            icon: Activity,
            title: "Regenerative Options Available",
            description:
                "Latest non-surgical options including PRP, GFC (Growth Factor Concentrate) and hyaluronic acid injections — proven alternatives for the right cases.",
        },
        {
            icon: Shield,
            title: "Two Bengaluru Locations",
            description:
                "Easy access in HSR Layout (Sector 2) and Attibele (Sarjapura-Attibele Road). Same-day appointments and insurance assistance at both.",
        },
    ];

    const costs = [
        {
            label: "Consultation",
            price: "₹500 – ₹1,000",
            note: "First visit, diagnosis & treatment plan.",
        },
        {
            label: "PRP Injection",
            price: "₹10,000 – ₹20,000",
            note: "Regenerative option for early arthritis & tendon issues.",
        },
        {
            label: "Hyaluronic Acid Injection",
            price: "₹5,000 – ₹15,000",
            note: "Lubricates the joint — helpful for mild–moderate arthritis.",
        },
        {
            label: "Knee Replacement Surgery",
            price: "₹2.5L – ₹5L",
            note: "For advanced arthritis where conservative care no longer helps. Insurance widely covers this.",
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
                                    Trusted by 10,000+ Patients
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Knee Pain Specialist</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Honest, evidence-based knee care across HSR Layout and Attibele — surgery only when it&apos;s truly needed. Conservative-first treatment with PRP, GFC and arthroscopy, backed by over a decade of focused knee experience.
                                </p>

                                {/* Trust pills */}
                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Conservative-First Care
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

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Free Consultation - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "knee-pain" }}
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

                                {/* Phone */}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee Pain Specialist, Bangalore" />
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
                                — Knee Conditions We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Specialist Care for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Every Knee Problem
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From day-to-day aches to complex sports injuries — accurate diagnosis and a clear plan.
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

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Your Knees.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Our Priority.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A knee specialist who diagnoses properly, explains clearly, and treats conservatively first.
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

            {/* ============= COST / TRANSPARENCY (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Transparent Pricing —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Does Knee Treatment Cost?
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Indicative ranges so you can plan with confidence. Final cost depends on diagnosis, hospital, and insurance.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 gap-4">
                        {costs.map((c, idx) => (
                            <FadeIn key={c.label} delay={idx * 0.08}>
                                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-blue-100 h-full">
                                    <p className="text-sm font-semibold text-blue-700 mb-1">{c.label}</p>
                                    <p className="text-2xl font-extrabold text-gray-900">{c.price}</p>
                                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">{c.note}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
                        Most patients never need surgery — we&apos;ll always exhaust conservative options first. Insurance assistance available at both clinics.
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
                                    Real Recovery.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Real patients sharing how they got their knees — and lives — back with Dr. Nitin.
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
                                    Book Your Knee Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Tell us about your knee — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-knee-pain" />
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
                subheading="Expert knee care in HSR Layout and Attibele, Bengaluru."
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let Knee Pain Hold You Back."
                subtitle="Get a proper diagnosis — without rushing into surgery."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
