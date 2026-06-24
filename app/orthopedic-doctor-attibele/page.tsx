import { Metadata } from "next";
import Image from "next/image";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Baby,
    ArrowRight,
    Navigation,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { siteOrigin } from "@/lib/site-url";
import { ATTIBELE_CLINIC } from "@/lib/practice";

export const metadata: Metadata = {
    title: "Orthopedic Doctor in Attibele, Bengaluru | Dr. Nitin Sunku",
    description:
        "Fellowship-trained orthopedic & sports medicine specialist at Raghava Hospital, Attibele. Serving Anekal, Bommasandra, Hosur Rd, Electronic City. Book today.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-attibele` },
    keywords: [
        "orthopedic doctor Attibele",
        "best orthopedic doctor Attibele",
        "ortho doctor near me Attibele",
        "orthopedic doctor Anekal",
        "orthopedic doctor Bommasandra",
        "orthopedic doctor Chandapura",
        "orthopedic doctor Hosur Road",
        "orthopedic doctor Electronic City",
        "knee doctor Electronic City",
        "ortho doctor Jigani",
        "orthopedic doctor Sarjapura",
        "Raghava Multispeciality Hospital Attibele",
    ],
    openGraph: {
        title: "Orthopedic Doctor in Attibele, Bengaluru — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained orthopedic specialist at Raghava Multispeciality Hospital, Attibele. Serving South Bengaluru — Anekal, Bommasandra, Hosur Road, Electronic City.",
        url: `${siteOrigin}/orthopedic-doctor-attibele`,
        type: "website",
    },
};

const PHONE = ATTIBELE_CLINIC.phone;

const conditions = [
    { title: "Knee Pain & Arthritis", Icon: Activity },
    { title: "Sports Injuries", Icon: Heart },
    { title: "ACL / Meniscus Tears", Icon: ShieldCheck },
    { title: "Shoulder Pain & Rotator Cuff", Icon: Users },
    { title: "Hip Replacement", Icon: Hospital },
    { title: "Back & Spine Problems", Icon: Stethoscope },
    { title: "Bone Fractures & Trauma", Icon: Award },
    { title: "Pediatric Orthopedics", Icon: Baby },
];

const areasServed = [
    { name: "Attibele", distance: "0 km", note: "Clinic location" },
    { name: "Anekal", distance: "5 km", note: "10 min drive" },
    { name: "Chandapura", distance: "4 km", note: "8 min drive" },
    { name: "Bommasandra", distance: "6 km", note: "12 min drive" },
    { name: "Hosur Road", distance: "Within reach", note: "Direct highway" },
    { name: "Electronic City", distance: "10–12 km", note: "20 min drive" },
    { name: "Jigani", distance: "8 km", note: "15 min drive" },
    { name: "Sarjapura", distance: "12–14 km", note: "25 min drive" },
];

const sellingPoints = [
    {
        Icon: MapPin,
        title: "Easy to Reach from Hosur Highway",
        description:
            "Located right on Sarjapura–Attibele Road, opposite Canara Bank — a quick turn off the Hosur highway with ample parking on site.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating joint, spine and sports conditions.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Non-surgical options are exhausted first — physiotherapy, medication, injections — before surgery is ever recommended. Honest, evidence-based care.",
    },
    {
        Icon: Users,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "Trusted by professional athletes — the same sports-medicine expertise applied to weekend runners, IT-corridor desk pain, and active families.",
    },
    {
        Icon: Stethoscope,
        title: "Same-Day Appointments + Emergency Support",
        description:
            "Walk-in slots available most days, with 24/7 emergency support through the hospital — no waiting weeks to be seen.",
    },
    {
        Icon: Clock,
        title: "Comprehensive Care Under One Roof",
        description:
            "Diagnosis, imaging, surgery, rehab and follow-up all handled within Raghava Multispeciality Hospital — fewer trips, faster recovery.",
    },
];

export default function OrthopedicDoctorAttibelePage() {
    return (
        <main className="min-h-screen">
            <HideNavigation />
            <LandingPageTracker />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 text-blue-900 py-12 md:py-20 overflow-hidden border-b-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/patterns/medical-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        {/* Left: Text */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2 mb-6">
                                <p className="text-sm font-medium">
                                    ✓ Best Orthopedic Doctor in Attibele
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                                Orthopedic Doctor in{" "}
                                <span className="text-blue-700">Attibele, Bengaluru</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 text-blue-800 font-light">
                                Fellowship-trained orthopedic &amp; sports medicine specialist at
                                Raghava Multispeciality Hospital. Serving Anekal, Bommasandra,
                                Hosur Road, Electronic City and beyond.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Fellowship-Trained
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Same-Day Appointments
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Insurance Accepted
                                    </span>
                                </div>
                            </div>

                            {/* Mobile image */}
                            <div className="relative h-[300px] w-full mb-8 lg:hidden">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Orthopedic Doctor in Attibele, Bengaluru"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <TrackedButton
                                    buttonName="Call Now - Hero"
                                    buttonLocation="Hero Section"
                                    href={`tel:${PHONE}`}
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        phone_number: PHONE,
                                        cta_type: "phone",
                                        condition: "attibele-local",
                                    }}
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now: {PHONE}
                                </TrackedButton>
                                <TrackedButton
                                    buttonName="Book Appointment - Hero"
                                    buttonLocation="Hero Section"
                                    href="#booking-form"
                                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        cta_type: "form_scroll",
                                        condition: "attibele-local",
                                    }}
                                >
                                    Book Appointment
                                    <ArrowRight className="w-5 h-5" />
                                </TrackedButton>
                            </div>
                        </div>

                        {/* Right: Desktop image */}
                        <div className="relative order-1 lg:order-2 hidden lg:block">
                            <div className="relative h-[500px] xl:h-[600px] w-full">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Orthopedic Doctor in Attibele, Bengaluru"
                                    fill
                                    priority
                                    className="object-contain object-center drop-shadow-2xl"
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditions */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                            Conditions We Treat at the Attibele Clinic
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive orthopedic care for every age — from the IT corridor
                            to industrial Hosur Road.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                        {conditions.map(({ title, Icon }) => (
                            <div
                                key={title}
                                className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-5 md:p-6 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all text-center"
                            >
                                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                                    <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-bold text-blue-900 text-sm md:text-base leading-tight">
                                    {title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Areas Served */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                            Areas Served from Attibele
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
                            Patients across South Bengaluru reach us in under 25 minutes — direct
                            from Hosur Highway, with ample parking and 24/7 hospital emergency.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                        {areasServed.map((area) => (
                            <div
                                key={area.name}
                                className="bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-400 hover:shadow-lg transition-all p-4 md:p-5 text-center"
                            >
                                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-600 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <p className="font-bold text-blue-900 text-base md:text-lg leading-tight">
                                    {area.name}
                                </p>
                                <p className="text-xs font-semibold text-orange-600 mt-1">
                                    {area.distance}
                                </p>
                                <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                                    {area.note}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                            The Attibele clinic sits directly on Sarjapura–Attibele Road, a quick
                            turn off the Hosur Highway. Patients from Electronic City, Bommasandra
                            and Jigani reach us via the elevated expressway and Service Road in
                            under 20 minutes. The hospital offers ample on-site parking, a fully
                            staffed 24/7 emergency department, and in-house diagnostics so most
                            visits can be wrapped up in a single trip.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Patients Choose */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                            Why Patients Choose Dr. Nitin in Attibele
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Six reasons families across South Bengaluru make us their first call
                            for orthopedic care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                        {sellingPoints.map(({ Icon, title, description }) => (
                            <div
                                key={title}
                                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center mb-4 shadow-md">
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-bold text-blue-900 text-lg mb-2 leading-tight">
                                    {title}
                                </h3>
                                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hospital Partnership */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid lg:grid-cols-5 gap-10 items-center">
                        <div className="lg:col-span-3">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                Raghava Multispeciality Hospital
                            </h2>
                            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                The Attibele clinic operates within an established multispeciality
                                hospital — which means full diagnostics (X-ray, MRI nearby, lab
                                work), 24/7 emergency, a dedicated operating theatre, and post-op
                                care all in one place. You don&apos;t have to coordinate scans, surgery
                                and rehab across three different facilities — it&apos;s all under one
                                roof, with a single team accountable for your recovery.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                <Hospital className="w-4 h-4" />
                                Established multispeciality hospital, on-site OT &amp; emergency
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                <Hospital className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                                    All Under One Roof
                                </p>
                                <p className="text-base text-blue-100 leading-relaxed">
                                    Diagnostics · Surgery · Rehab
                                </p>
                                <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                    <div>
                                        <p className="text-2xl font-bold">24/7</p>
                                        <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Emergency</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">In-House</p>
                                        <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Imaging</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">Dedicated</p>
                                        <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">OT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Testimonials */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Patient Success Stories
                        </h2>
                        <p className="text-lg text-gray-600">
                            Hear from patients across South Bengaluru about their recovery
                            journey at the Attibele clinic.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {["hNDU1Sx5gMc", "XFDLO_nR6x4", "swT9lwWwSbU"].map((id, idx) => (
                            <div
                                key={id}
                                className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200"
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`Patient Testimonial ${idx + 1}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    loading="lazy"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section id="booking-form" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Book Your Appointment at Attibele
                            </h2>
                            <p className="text-lg text-gray-600">
                                The team at the Attibele clinic will call you back within hours
                                to confirm your slot.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <BookingForm source="ads-attibele" />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">Prefer to call?</p>
                            <a
                                href={`tel:${PHONE}`}
                                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-xl"
                            >
                                <Phone className="w-5 h-5" />
                                {PHONE}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Reach */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
                            How to Reach the Clinic
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            Easy access from Hosur Highway, Electronic City and Sarjapura — with
                            ample on-site parking.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        {/* Info card */}
                        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-5 leading-tight">
                                {ATTIBELE_CLINIC.name}
                            </h3>

                            <div className="space-y-4 text-gray-700">
                                <div className="flex gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-700" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Address
                                        </p>
                                        <p className="text-sm leading-relaxed">
                                            {ATTIBELE_CLINIC.address}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-blue-700" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Hours
                                        </p>
                                        {ATTIBELE_CLINIC.hours.map((h) => (
                                            <p key={h.label} className="text-sm">
                                                {h.label}:{" "}
                                                <span className="font-medium">{h.display}</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-blue-700" />
                                    </span>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">
                                            Phone
                                        </p>
                                        <a
                                            href={`tel:${PHONE}`}
                                            className="text-blue-700 hover:text-blue-900 font-bold text-base"
                                        >
                                            {PHONE}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-blue-100 space-y-4">
                                <div>
                                    <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                        <Navigation className="w-4 h-4" />
                                        Arriving by car from Hosur Highway
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Take the Attibele exit off the Bengaluru–Hosur (NH 44)
                                        highway and turn onto Sarjapura–Attibele Road. The hospital
                                        is on your right, directly opposite Canara Bank (formerly
                                        Syndicate Bank). On-site parking is available.
                                    </p>
                                </div>
                                <div>
                                    <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                        <Navigation className="w-4 h-4" />
                                        Arriving from Electronic City / Bommasandra
                                    </p>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Head south on Hosur Road past Bommasandra Industrial Area
                                        and Chandapura junction. Continue toward Attibele town —
                                        the clinic is on Sarjapura–Attibele Road, a short turn off
                                        the main highway. Approximately 20 minutes from Electronic
                                        City Phase 1.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="min-w-0 w-full">
                            <div className="aspect-video lg:aspect-auto lg:h-full w-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[400px]">
                                <iframe
                                    src={ATTIBELE_CLINIC.mapEmbedSrc}
                                    loading="lazy"
                                    style={{
                                        border: 0,
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                    }}
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`${ATTIBELE_CLINIC.name}, ${ATTIBELE_CLINIC.shortLocality} — Map`}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-t-4 border-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                        Quality Orthopedic Care, Close to Home
                    </h2>
                    <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
                        Don&apos;t drive 30 km into the city for orthopedic care you can get right
                        here in Attibele. Fellowship-trained expertise, full hospital diagnostics,
                        same-day appointments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedButton
                            buttonName="Book Appointment - Final CTA"
                            buttonLocation="Final CTA Section"
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                cta_type: "form_scroll",
                                condition: "attibele-local",
                            }}
                        >
                            Book Appointment
                        </TrackedButton>
                        <TrackedButton
                            buttonName="Call Now - Final CTA"
                            buttonLocation="Final CTA Section"
                            href={`tel:${PHONE}`}
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                phone_number: PHONE,
                                cta_type: "phone",
                                condition: "attibele-local",
                            }}
                        >
                            <Phone className="w-5 h-5" />
                            Call {PHONE}
                        </TrackedButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
