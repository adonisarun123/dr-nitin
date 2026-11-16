import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Activity,
    Bone,
    Zap,
    UserCheck,
    Brain,
    Syringe,
    Sparkles,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    AlertTriangle,
    GraduationCap,
    Trophy,
    BookOpen,
    ClipboardList,
    FileText,
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
import { LandingFaq } from "@/components/landing/landing-faq";

/**
 * Google Ads landing page — "orthopedic doctor near me" ad group.
 *
 * NOINDEX by design (same rule as /bone-doctor-near-me and
 * /orthopaedic-clinic-near-me): it targets the same intent as the indexed
 * /orthopedic-doctor-attibele and /orthopedic-doctor-in-hsr-layout pages, so
 * indexing it would cannibalise them. Keep it out of app/sitemap.ts and
 * lib/landing-links.ts.
 *
 * Angle vs the other two near-me ads pages: doctor-first — a "when to see an
 * orthopedic doctor" checklist, credentials, and what happens at the first
 * visit. Attibele (PRIMARY_CLINIC) is the default CTA clinic.
 */
export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: {
        absolute: "Orthopedic Doctor Near Me in Bangalore | Dr. Nitin N Sunku",
    },
    description:
        "Looking for an orthopedic doctor near me? Dr. Nitin N Sunku (MS Ortho, Gold Medalist; Fellowship in Arthroscopy & Sports Medicine) consults in Attibele & HSR Layout, Bengaluru. Knee, back, shoulder, fracture & sports injury care. Same-day appointments.",
    alternates: {
        canonical: `${siteOrigin}/orthopedic-doctor-near-me`,
    },
    keywords: [
        "orthopedic doctor near me",
        "best orthopedic doctor near me",
        "orthopedic near me",
        "ortho doctor near me",
        "orthopaedic doctor near me",
        "orthopedic specialist near me",
        "orthopedic surgeon near me",
        "orthopedic doctor Attibele",
        "orthopedic doctor Bangalore",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title: "Orthopedic Doctor Near Me — Dr. Nitin N Sunku, Bengaluru",
        description:
            "Fellowship-trained orthopedic & sports medicine specialist in Attibele & HSR Layout. Knee, back, shoulder, fracture & sports injury care — same-day appointments.",
        url: `${siteOrigin}/orthopedic-doctor-near-me`,
        type: "website",
    },
    robots: { index: false, follow: true }, // ads-only landing page: kept out of organic index; 'follow' preserves link equity.
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment with an orthopedic doctor.";

/** Symptom checklist — qualifies the click and nudges the right patients to book. */
const whenToSee = [
    "Joint pain that has lasted more than 2 weeks, or keeps coming back",
    "Knee pain on stairs, squatting or getting up from a chair",
    "Back or neck pain spreading into the arm or leg",
    "Shoulder pain that wakes you at night or limits overhead reach",
    "A twisting injury with swelling, locking or the knee 'giving way'",
    "Stiffness in the morning that takes time to ease",
    "Heel, foot or ankle pain with your first steps of the day",
    "A fall or sports injury where pain is not settling",
];

const redFlags = [
    "A visibly deformed limb or bone breaking through the skin",
    "Unable to put any weight on the leg after an injury",
    "Back pain with numbness in the groin or loss of bladder/bowel control",
    "A hot, red, swollen joint with fever",
];

const services = [
    {
        title: "Knee Pain & Arthritis",
        description: "Stage-matched care — exercise, injections, arthroscopy or replacement.",
        Icon: Bone,
        color: "from-orange-500 to-orange-600",
        bg: "bg-orange-50",
    },
    {
        title: "Sports Injuries",
        description: "ACL, meniscus, shoulder and ankle injuries — sports medicine.",
        Icon: Sparkles,
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Back & Neck Pain",
        description: "Slip disc, sciatica and spine pain — conservative-first.",
        Icon: Brain,
        color: "from-purple-500 to-purple-600",
        bg: "bg-purple-50",
    },
    {
        title: "Shoulder Problems",
        description: "Frozen shoulder, rotator cuff tears and dislocations.",
        Icon: Activity,
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Fracture & Trauma",
        description: "Fractures, sprains and accident injuries.",
        Icon: ShieldCheck,
        color: "from-red-500 to-red-600",
        bg: "bg-red-50",
    },
    {
        title: "Joint Replacement",
        description: "Knee and hip replacement when it is genuinely needed.",
        Icon: Stethoscope,
        color: "from-indigo-500 to-indigo-600",
        bg: "bg-indigo-50",
    },
    {
        title: "PRP & Injections",
        description: "Regenerative and guided injections to heal naturally.",
        Icon: Syringe,
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-50",
    },
];

const credentials = [
    {
        title: "MBBS, MS Orthopedics — Gold Medalist",
        description: "Top of his postgraduate orthopedics batch.",
        Icon: GraduationCap,
    },
    {
        title: "Fellowship in Arthroscopy & Sports Medicine",
        description: "Specialist training in keyhole joint surgery and sports injuries.",
        Icon: Award,
    },
    {
        title: "Official Team Doctor, Bengaluru FC",
        description: "Trusted with the joints of professional footballers.",
        Icon: Trophy,
    },
    {
        title: "Contributor, Springer's “Atlas of Arthroscopy”",
        description: "Academic work used by fellow orthopedic surgeons.",
        Icon: BookOpen,
    },
];

const firstVisit = [
    {
        step: "1",
        title: "Book in 2 minutes",
        description:
            "Fill the form, call or WhatsApp. Our team calls back within hours to confirm a same-day or next-day slot at Attibele or HSR Layout.",
        Icon: Calendar,
    },
    {
        step: "2",
        title: "Examination & diagnosis",
        description:
            "Dr. Nitin listens to your history and examines you himself. Scans are advised only when they will actually change the treatment decision.",
        Icon: ClipboardList,
    },
    {
        step: "3",
        title: "A clear, written plan",
        description:
            "You leave knowing what is wrong, your non-surgical options, and — only if needed — what surgery involves, its cost and recovery time.",
        Icon: FileText,
    },
];

const whyChoose = [
    {
        title: "Specialist, Not a Generalist",
        description: "Fellowship-trained in arthroscopy & sports medicine — 10+ years of orthopedic practice.",
        Icon: ShieldCheck,
    },
    {
        title: "Conservative-First Care",
        description: "Non-surgical options are explored fully before surgery is ever recommended.",
        Icon: Heart,
    },
    {
        title: "Minimally Invasive Surgery",
        description: "Keyhole (arthroscopic) techniques for faster recovery when surgery is needed.",
        Icon: Zap,
    },
    {
        title: "Two Clinics Near You",
        description: "Attibele and HSR Layout — easy access across South & South-East Bengaluru.",
        Icon: MapPin,
    },
    {
        title: "Same-Day Appointments",
        description: "Same-day and next-day slots usually available on consulting days.",
        Icon: Clock,
    },
    {
        title: "Trusted by Patients",
        description: "Rated 4.9★ by hundreds of happy patients.",
        Icon: UserCheck,
    },
];

export default function OrthopedicDoctorNearMePage() {
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
                                    Attibele &amp; HSR Layout · Same-Day Slots
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopedic Doctor{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Near You
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — MS Ortho (Gold Medalist), Arthroscopy &amp; Sports Medicine
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Searching for an orthopedic doctor near me? Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine specialist consulting at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Knee, back, shoulder, fracture and sports injury care — with an honest, conservative-first approach and surgery only when it is truly needed.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Day Slots
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Award className="w-3.5 h-3.5 text-blue-600" />
                                        10+ Years
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Trophy className="w-3.5 h-3.5 text-amber-600" />
                                        Bengaluru FC Team Doctor
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        4.9 Rated
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "orthopedic-doctor" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
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
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopedic Doctor in Attibele & HSR Layout, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= WHEN TO SEE AN ORTHOPEDIC DOCTOR ============= */}
            <section id="when-to-see" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Do You Need an Orthopedic Doctor? —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Book a Consultation If You Have{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Any of These
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Most bone and joint problems are easier to treat — without surgery — when they are seen early.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-5 gap-6">
                        <FadeIn className="lg:col-span-3">
                            <ul className="grid sm:grid-cols-2 gap-3 h-full">
                                {whenToSee.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 rounded-2xl p-4"
                                    >
                                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-gray-800 leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>

                        <FadeIn delay={0.1} className="lg:col-span-2">
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600" />
                                    <h3 className="font-bold text-red-900 text-base md:text-lg">Go to an emergency department now if you have:</h3>
                                </div>
                                <ul className="space-y-2 mb-4">
                                    {redFlags.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-red-900 leading-snug">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-red-800/80 leading-relaxed">
                                    These need urgent hospital care. Dial 108 or go to the nearest emergency department, then follow up with Dr. Nitin for ongoing orthopedic treatment.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= SERVICES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What Dr. Nitin Treats —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                One Specialist for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Bones, Joints &amp; Spine
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Consultation, diagnosis and treatment at both clinics; surgery at the partner hospital.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-5">
                        {services.map(({ title, description, Icon, color, bg }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group relative bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                                    <div aria-hidden className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br ${color} bg-clip-text`} style={{ color: "currentColor" }} strokeWidth={2.2} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1.5 text-center leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-gray-600 text-center leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= MEET THE DOCTOR ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                    — Meet Your Orthopedic Doctor —
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-5 leading-tight break-words">
                                    The doctor who treats professional footballers — close to home.
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    &ldquo;Near me&rdquo; should not mean settling. Dr. Nitin N Sunku brings specialist-level orthopedic and sports medicine care to Attibele and HSR Layout, so patients from Anekal, Chandapura, Electronic City, Hosur Road, Sarjapur Road, Koramangala and Bellandur do not have to cross the city for an expert opinion.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    His approach is simple: get the diagnosis right, try the least invasive treatment that will work, and recommend surgery only when it will genuinely improve your life — and when it is needed, use modern keyhole techniques for a faster recovery.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {credentials.map(({ title, description, Icon }, idx) => (
                                <FadeIn key={title} delay={idx * 0.06}>
                                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-5 border border-blue-100 h-full">
                                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mb-3">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1 leading-tight">{title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{description}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============= FIRST VISIT ============= */}
            <section id="first-visit" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Your First Visit —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Simple, Quick &amp;{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Transparent
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Consultation typically ₹500–₹1,000. Bring any previous X-rays, MRI reports and a list of your medicines.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-5 mb-10">
                        {firstVisit.map(({ step, title, description, Icon }, idx) => (
                            <FadeIn key={step} delay={idx * 0.08}>
                                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-full">
                                    <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold flex items-center justify-center shadow-md">
                                        {step}
                                    </span>
                                    <Icon className="w-7 h-7 text-blue-700 mb-3" />
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2">{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn>
                        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {CLINICS.map((c) => (
                                <div key={c.id} className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm">
                                    <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">{c.shortLocality}</p>
                                    <p className="font-semibold text-gray-900 mb-2">{c.name}</p>
                                    {c.hours.map((h) => (
                                        <p key={h.label} className="flex items-center gap-2 text-sm text-gray-600">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            {h.label}: {h.display}
                                        </p>
                                    ))}
                                    <p className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                                        <Phone className="w-4 h-4 text-blue-600" />
                                        {c.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Orthopedic Doctor You Can{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Trust
                                </span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {whyChoose.map(({ title, description, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-700 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">
                                                {title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
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
                                    Same-Day Appointments
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your Orthopedic Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Fill the form — our team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-orthopedic-doctor-near-me" />
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
                heading="Find Your Nearest Orthopedic Doctor"
                subheading="Two clinics — Attibele and HSR Layout — serving patients across South and South-East Bengaluru."
            />

            <LandingFaq
                pageName="Orthopedic Doctor Near Me in Bangalore"
                pagePath="/orthopedic-doctor-near-me"
                subheading="Practical answers before you book with an orthopedic doctor."
                items={[
                    {
                        q: "Where can I find an orthopedic doctor near me?",
                        a: "Dr. Nitin N Sunku consults at two clinics in Bengaluru: Raghava Multispeciality Hospital, Sarjapura–Attibele Road, Attibele (convenient for Anekal, Chandapura, Bommasandra, Electronic City and Hosur Road) and Health Nest Hospital, Sector 2, HSR Layout (convenient for Koramangala, BTM Layout, Bellandur and Sarjapur Road).",
                    },
                    {
                        q: "What are Dr. Nitin's qualifications?",
                        a: "MBBS and MS Orthopedics (Gold Medalist), with a Fellowship in Arthroscopy & Sports Medicine. He is the official team doctor for Bengaluru FC and a contributor to Springer's “Atlas of Arthroscopy,” with 10+ years of orthopedic practice.",
                    },
                    {
                        q: "When should I see an orthopedic doctor instead of a general physician?",
                        a: "See an orthopedic doctor if joint, back or neck pain has lasted more than two weeks, keeps returning, limits daily activity, follows an injury, or comes with swelling, locking, giving way, or pain spreading into an arm or leg. Early assessment usually means simpler, non-surgical treatment.",
                    },
                    {
                        q: "How much does an orthopedic consultation cost?",
                        a: "A consultation typically costs ₹500–₹1,000 and includes a clinical examination and a written treatment plan. X-rays or MRI are advised only when they will genuinely change the treatment decision.",
                    },
                    {
                        q: "Can I get a same-day appointment?",
                        a: "Usually, yes. Same-day and next-day slots are generally available on consulting days. Call or WhatsApp to confirm, or submit the booking form and the team will call you back within hours.",
                    },
                    {
                        q: "Will I need surgery?",
                        a: "Most patients do not. Dr. Nitin follows a conservative-first approach — physiotherapy, medication, bracing and injections such as PRP are tried first wherever they can work. Surgery, usually minimally invasive arthroscopy, is recommended only when it will clearly improve your outcome.",
                    },
                    {
                        q: "Is health insurance accepted?",
                        a: "Yes — insurance is accepted and the team assists with cashless pre-authorisation paperwork for procedures such as arthroscopy and joint replacement. Outpatient consultations are typically paid out of pocket unless your policy covers OPD.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Bone, Joint or Back Pain? Get It Checked."
                subtitle="See a specialist orthopedic doctor near you — same-day slots available."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/orthopedic-doctor-near-me" />
        </main>
    );
}
