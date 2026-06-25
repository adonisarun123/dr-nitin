import Image from "next/image";
import {
    Phone,
    MapPin,
    Clock,
    Star,
    MessageCircle,
    Calendar,
    Bone,
} from "lucide-react";

import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import type { Clinic } from "@/lib/practice";

/**
 * Shared design-system chrome for the conversion landing pages.
 *
 * These components port the look of the HSR Layout landing page
 * (app/orthopedic-doctor-in-hsr-layout) so every ad landing page shares
 * the same premium nav, stats strip, Google reviews, mobile sticky CTA
 * and footer — while each page keeps its own unique body content.
 *
 * Everything is parameterised by `clinic` (which phone / WhatsApp / map to
 * use) and `condition` (for analytics metadata) so the same chrome drives
 * the knee, sports, back-pain and Attibele pages.
 */

const WHATSAPP_MESSAGE = "Hi Dr. Nitin, I would like to book an appointment.";

export interface LandingChromeProps {
    /** Lead clinic for tel: / WhatsApp CTAs on this page. */
    clinic: Clinic;
    /** Analytics condition tag, e.g. "knee-pain". */
    condition: string;
}

/* ----------------------------- TOP NAV ----------------------------- */
export function LandingNav({ clinic }: { clinic: Clinic }) {
    return (
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 flex items-center justify-between py-3">
                <div className="flex items-center gap-2 min-w-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://ik.imagekit.io/vlries1el/dr%20nitin/dr-nitin-sunku-logo.svg"
                        alt="Dr. Nitin N Sunku - Orthopedic & Sports Medicine Specialist"
                        className="h-10 sm:h-12 w-auto flex-shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="font-bold text-blue-900 text-sm sm:text-base leading-tight truncate">
                            Dr. Nitin N Sunku
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500 leading-tight truncate">
                            Orthopedic Specialist
                        </p>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-700">
                    <a href="#services" className="hover:text-blue-700 transition">
                        Services
                    </a>
                    <a href="#reviews" className="hover:text-blue-700 transition">
                        Reviews
                    </a>
                    <a href="#about" className="hover:text-blue-700 transition">
                        About
                    </a>
                    <a href="#contact" className="hover:text-blue-700 transition">
                        Contact
                    </a>
                </div>
                <TrackedButton
                    buttonName="Book Appointment - Nav"
                    buttonLocation="Top Nav"
                    href="#booking-form"
                    className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
                    metadata={{ cta_type: "form_scroll" }}
                >
                    <Calendar className="w-4 h-4" />
                    Book Now
                </TrackedButton>
                <TrackedCall
                    phone={clinic.phone}
                    location="Top Nav Mobile"
                    className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
                >
                    <Phone className="w-4 h-4" />
                </TrackedCall>
            </div>
        </nav>
    );
}

/* ----------------------------- STATS STRIP ----------------------------- */
const DEFAULT_STATS = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Happy Patients" },
    { value: "4.9★", label: "Patient Rating" },
    { value: "Same Day", label: "Appointments" },
];

export function StatsStrip({
    stats = DEFAULT_STATS,
}: {
    stats?: { value: string; label: string }[];
}) {
    return (
        <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-8 md:py-10 relative overflow-hidden">
            <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            ></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center text-white">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                {s.value}
                            </p>
                            <p className="text-xs md:text-sm text-blue-100 uppercase tracking-wider font-medium">
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- GOOGLE REVIEWS ----------------------------- */
const DEFAULT_REVIEWS = [
    {
        initial: "A",
        name: "Arjun R.",
        when: "2 weeks ago",
        bg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        text: "Excellent doctor! He explained the issue in detail and the treatment was very effective. Highly recommended.",
    },
    {
        initial: "P",
        name: "Pooja S.",
        when: "1 month ago",
        bg: "bg-gradient-to-br from-purple-400 to-purple-600",
        text: "I had shoulder arthroscopy. Recovery was smooth and Dr. Nitin's care was exceptional throughout.",
    },
    {
        initial: "K",
        name: "Karthik M.",
        when: "3 weeks ago",
        bg: "bg-gradient-to-br from-blue-400 to-blue-600",
        text: "Very professional and friendly. Best orthopedic surgeon in the area, hands down.",
    },
    {
        initial: "S",
        name: "Sunita G.",
        when: "1 month ago",
        bg: "bg-gradient-to-br from-pink-400 to-pink-600",
        text: "Dr. Nitin treated my mother's knee arthritis without surgery. So grateful for his patience and expertise.",
    },
];

export function GoogleReviews({
    reviews = DEFAULT_REVIEWS,
}: {
    reviews?: typeof DEFAULT_REVIEWS;
}) {
    return (
        <section id="reviews" className="bg-white py-14 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold">
                                <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                    G
                                </span>
                            </span>
                            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                                Google Reviews
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                            What Our Patients Say
                        </h2>
                        <div className="flex items-center justify-center gap-2 text-gray-600">
                            <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>
                            <span className="font-bold text-gray-900">4.9</span>
                            <span>· Based on patient reviews</span>
                        </div>
                    </div>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {reviews.map((r, idx) => (
                        <FadeIn key={r.name} delay={idx * 0.08}>
                            <div className="group bg-white border border-gray-200 rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`${r.bg} text-white w-11 h-11 rounded-full flex items-center justify-center font-bold shadow-md`}
                                        >
                                            {r.initial}
                                        </span>
                                        <div>
                                            <p className="font-bold text-gray-900 leading-tight">
                                                {r.name}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5">
                                                {r.when}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-gray-200 text-xs font-bold flex-shrink-0">
                                        <span className="bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                                            G
                                        </span>
                                    </span>
                                </div>
                                <div className="flex text-yellow-400 mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                                    &ldquo;{r.text}&rdquo;
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.2}>
                    <div className="text-center mt-10">
                        <TrackedButton
                            buttonName="Book Appointment - Reviews"
                            buttonLocation="Reviews"
                            href="#booking-form"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                            metadata={{ cta_type: "form_scroll" }}
                        >
                            <Calendar className="w-4 h-4" />
                            Join Our Happy Patients
                        </TrackedButton>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

/* ----------------------------- THEMED LOCATIONS ----------------------------- */
/**
 * HSR-style clinic cards with embedded maps. Renders one card per clinic
 * passed in, alternating layout. `primaryId` marks which clinic shows the
 * "Primary" badge.
 */
export function LocationsWithMaps({
    clinics,
    primaryId,
    heading = "Visit Our Clinics",
    subheading = "Expert orthopedic care with advanced, evidence-based treatments.",
}: {
    clinics: Clinic[];
    primaryId: string;
    heading?: string;
    subheading?: string;
}) {
    return (
        <section className="bg-white py-14 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <FadeIn>
                    <div className="text-center mb-10 md:mb-14">
                        <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                            — Visit Our Clinic —
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                            {heading}
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            {subheading}
                        </p>
                    </div>
                </FadeIn>

                <div className="space-y-10 lg:space-y-14">
                    {clinics.map((clinic, idx) => {
                        const isPrimary = clinic.id === primaryId;
                        const themeBorder = isPrimary
                            ? "border-blue-100"
                            : "border-indigo-100";
                        const themeBg = isPrimary
                            ? "from-blue-50 via-white to-indigo-50"
                            : "from-indigo-50 via-white to-blue-50";
                        const themeIconBg = isPrimary ? "bg-blue-100" : "bg-indigo-100";
                        const themeIcon = isPrimary ? "text-blue-700" : "text-indigo-700";
                        const themeText = isPrimary ? "text-blue-700" : "text-indigo-700";
                        const themeTitle = isPrimary ? "text-blue-900" : "text-indigo-900";
                        const themePill = isPrimary
                            ? "border-blue-200 text-blue-700"
                            : "border-indigo-200 text-indigo-700";

                        return (
                            <FadeIn key={clinic.id} delay={idx * 0.1}>
                                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-stretch w-full">
                                    <div
                                        className={`bg-gradient-to-br ${themeBg} rounded-3xl p-5 sm:p-6 md:p-8 border ${themeBorder} shadow-sm h-full break-words w-full max-w-full overflow-hidden ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                                    >
                                        <div className="flex items-start justify-between gap-3 mb-5">
                                            <div className="min-w-0">
                                                <span
                                                    className={`inline-block text-[10px] font-bold ${themeText} uppercase tracking-widest mb-1`}
                                                >
                                                    {clinic.shortLocality} Clinic
                                                </span>
                                                <h3
                                                    className={`text-base sm:text-lg md:text-2xl font-bold ${themeTitle} leading-tight break-words hyphens-auto`}
                                                >
                                                    {clinic.name}
                                                </h3>
                                            </div>
                                            {isPrimary && (
                                                <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wider rounded-full px-2 py-1 flex-shrink-0">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    Primary
                                                </span>
                                            )}
                                        </div>
                                        <div className="space-y-4 text-gray-700">
                                            <div className="flex gap-3">
                                                <span
                                                    className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    <MapPin className={`w-5 h-5 ${themeIcon}`} />
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}
                                                    >
                                                        Address
                                                    </p>
                                                    <p className="text-sm leading-relaxed break-words">
                                                        {clinic.address}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <span
                                                    className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    <Clock className={`w-5 h-5 ${themeIcon}`} />
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}
                                                    >
                                                        Hours
                                                    </p>
                                                    {clinic.hours.map((h) => (
                                                        <p key={h.label} className="text-sm">
                                                            {h.label}:{" "}
                                                            <span className="font-medium">
                                                                {h.display}
                                                            </span>
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <span
                                                    className={`w-10 h-10 rounded-xl ${themeIconBg} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    <Phone className={`w-5 h-5 ${themeIcon}`} />
                                                </span>
                                                <div className="min-w-0 flex-1">
                                                    <p
                                                        className={`text-xs font-semibold ${themeText} uppercase tracking-wide mb-1`}
                                                    >
                                                        Phone
                                                    </p>
                                                    <TrackedCall
                                                        phone={clinic.phone}
                                                        location={`Clinic Card — ${clinic.shortLocality}`}
                                                        className={`${themeText} hover:opacity-80 font-bold text-base`}
                                                    >
                                                        {clinic.phone}
                                                    </TrackedCall>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                            <TrackedCall
                                                phone={clinic.phone}
                                                location={`Clinic Card CTA — ${clinic.shortLocality}`}
                                                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-blue-500/30 transition text-sm"
                                            >
                                                <Phone className="w-4 h-4" />
                                                Call
                                            </TrackedCall>
                                            <TrackedWhatsApp
                                                phoneDigits={clinic.phoneDigits}
                                                message={`Hi Dr. Nitin, I would like to book an appointment at the ${clinic.shortLocality} clinic.`}
                                                location={`Clinic Card CTA — ${clinic.shortLocality}`}
                                                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-emerald-500/30 transition text-sm"
                                            >
                                                <MessageCircle className="w-4 h-4" />
                                                WhatsApp
                                            </TrackedWhatsApp>
                                        </div>

                                        <div className={`mt-6 pt-5 border-t ${themeBorder}`}>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                                Serving patients from
                                            </p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {clinic.areaServed.map((area) => (
                                                    <span
                                                        key={area}
                                                        className={`inline-block bg-white border ${themePill} text-xs font-medium px-2.5 py-1 rounded-full`}
                                                    >
                                                        {area}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className={`min-w-0 w-full ${idx % 2 === 1 ? "lg:order-1" : ""}`}
                                    >
                                        <div className="aspect-video lg:aspect-auto lg:h-full w-full max-w-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[280px]">
                                            <iframe
                                                src={clinic.mapEmbedSrc}
                                                loading="lazy"
                                                style={{
                                                    border: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    display: "block",
                                                }}
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title={`${clinic.name}, ${clinic.shortLocality} — Map`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- FINAL CTA STRIP ----------------------------- */
export function FinalCtaStrip({
    clinic,
    title = "Don't Let Pain Hold You Back.",
    subtitle = "Book Your Appointment Today!",
}: {
    clinic: Clinic;
    title?: string;
    subtitle?: string;
}) {
    return (
        <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-8 md:py-10 relative overflow-hidden">
            <div
                aria-hidden
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                }}
            ></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-3 gap-4 md:gap-6 items-center max-w-6xl mx-auto">
                    <div className="flex items-center gap-3 text-white text-center md:text-left justify-center md:justify-start">
                        <span className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6" />
                        </span>
                        <div>
                            <p className="font-bold text-lg leading-tight">{title}</p>
                            <p className="text-blue-100 text-sm">{subtitle}</p>
                        </div>
                    </div>
                    <TrackedButton
                        buttonName="Book Appointment - Footer Bar"
                        buttonLocation="Bottom Bar"
                        href="#booking-form"
                        className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-5 py-3.5 rounded-xl shadow-lg"
                        metadata={{ cta_type: "form_scroll" }}
                    >
                        <Calendar className="w-5 h-5" />
                        Book Appointment
                    </TrackedButton>
                    <TrackedCall
                        phone={clinic.phone}
                        location="Bottom Bar"
                        className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition"
                    >
                        <Phone className="w-5 h-5" />
                        {clinic.phone}
                    </TrackedCall>
                </div>
            </div>
        </section>
    );
}

/* ----------------------------- MOBILE STICKY CTA ----------------------------- */
export function MobileStickyCTA({ clinic }: { clinic: Clinic }) {
    return (
        <>
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 grid grid-cols-3 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
                <TrackedCall
                    phone={clinic.phone}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-[11px] font-semibold"
                >
                    <Phone className="w-5 h-5" />
                    Call
                </TrackedCall>
                <TrackedWhatsApp
                    phoneDigits={clinic.phoneDigits}
                    message={WHATSAPP_MESSAGE}
                    location="Mobile Sticky"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white text-[11px] font-semibold"
                >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                </TrackedWhatsApp>
                <TrackedButton
                    buttonName="Book - Mobile Sticky"
                    buttonLocation="Mobile Sticky"
                    href="#booking-form"
                    className="flex flex-col items-center justify-center gap-0.5 py-3 bg-gradient-to-br from-orange-500 to-orange-600 text-white text-[11px] font-semibold"
                    metadata={{ cta_type: "form_scroll" }}
                >
                    <Calendar className="w-5 h-5" />
                    Book
                </TrackedButton>
            </div>
            {/* Spacer so the sticky bar never covers page content */}
            <div className="md:hidden h-16" />
        </>
    );
}

/* ----------------------------- FOOTER ----------------------------- */
export function LandingFooter({ clinic }: { clinic: Clinic }) {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <Bone className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-white text-base">
                        Dr. Nitin N Sunku
                    </span>
                </div>
                <p className="mb-2">
                    © {new Date().getFullYear()} · Orthopedic Specialist ·{" "}
                    {clinic.shortLocality}, Bengaluru
                </p>
                <p className="text-xs text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Disclaimer: Information on this page is for general awareness and does
                    not replace medical advice. Please consult a qualified doctor.
                </p>
            </div>
        </footer>
    );
}

/* ----------------------------- HERO BUILDING BLOCKS ----------------------------- */
/**
 * The HSR-style hero right-column: doctor image with floating "Verified
 * Doctor" and "5000+ Patients" cards. Reused across all pages.
 */
export function HeroImage({ alt }: { alt: string }) {
    return (
        <div className="relative">
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-[3rem] blur-2xl"
            ></div>
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full">
                <Image
                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                    alt={alt}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 600px"
                />
            </div>
            <div className="hidden sm:block absolute top-6 left-0 bg-white/95 backdrop-blur rounded-xl shadow-xl px-4 py-3 border border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center">
                        <svg
                            className="w-5 h-5 text-emerald-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Verified Doctor</p>
                        <p className="text-sm font-bold text-gray-900">MBBS, MS (Ortho)</p>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block absolute bottom-10 right-0 bg-white/95 backdrop-blur rounded-xl shadow-xl px-4 py-3 border border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></span>
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></span>
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></span>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">5000+ Patients</p>
                        <div className="flex items-center gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                                />
                            ))}
                            <span className="text-[11px] text-gray-500 ml-1">4.9</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
