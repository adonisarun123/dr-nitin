import { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/forms/booking-form";
import {
    Phone,
    MapPin,
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
} from "lucide-react";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";

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
};

export default function BackPainBangalorePage() {
    const heroPhone = PRIMARY_CLINIC.phone;

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
        <main className="min-h-screen">
            <HideNavigation />
            <LandingPageTracker />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 text-blue-900 py-12 md:py-20 overflow-hidden border-b-4 border-blue-600">
                <div className="absolute inset-0 bg-[url('/patterns/medical-pattern.svg')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                        {/* Left Column: Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="inline-block bg-blue-600 text-white rounded-full px-6 py-2 mb-6">
                                <p className="text-sm font-medium">
                                    ✓ Conservative-First Spine Care
                                </p>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                                Back Pain &amp; Spine Specialist in{" "}
                                <span className="text-blue-700">Bangalore</span>
                            </h1>

                            <p className="text-xl md:text-2xl mb-8 text-blue-800 font-light">
                                Most back pain doesn&apos;t need surgery — get a real
                                diagnosis and a plan that works.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                                    <CheckCircle className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900">
                                        Conservative-First
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

                            {/* Mobile Image */}
                            <div className="relative h-[300px] w-full mb-8 lg:hidden">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                    alt="Dr. Nitin N Sunku — Back Pain & Spine Specialist, Bangalore"
                                    fill
                                    className="object-contain object-center"
                                    priority
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                                <TrackedButton
                                    buttonName="Call Now - Hero"
                                    buttonLocation="Hero Section"
                                    href={`tel:${heroPhone}`}
                                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        phone_number: heroPhone,
                                        cta_type: "phone",
                                        condition: "back-pain",
                                    }}
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now: {heroPhone}
                                </TrackedButton>
                                <TrackedButton
                                    buttonName="Book Free Consultation - Hero"
                                    buttonLocation="Hero Section"
                                    href="#booking-form"
                                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
                                    metadata={{
                                        cta_type: "form_scroll",
                                        condition: "back-pain",
                                    }}
                                >
                                    Book Free Consultation
                                </TrackedButton>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:block order-1 lg:order-2">
                            <Image
                                src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-lp"
                                alt="Dr. Nitin N Sunku — Back Pain & Spine Specialist, Bangalore"
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Spine Conditions We Treat */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Spine Conditions We Treat
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            From acute disc problems to chronic stiffness — specialist
                            diagnosis and a structured plan for the full range of spine
                            conditions.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {conditions.map((condition) => (
                            <div
                                key={condition}
                                className="flex items-center gap-3 bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors border border-gray-200"
                            >
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span className="font-medium text-gray-800">
                                    {condition}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Conservative-First Promise */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 opacity-10">
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
                                    Surgery is the last resort — not the first
                                    recommendation.
                                </h2>

                                <p className="text-lg text-blue-50 leading-relaxed mb-6">
                                    Most patients walking into a spine clinic are afraid
                                    of one thing: being pushed into surgery they
                                    don&apos;t need. Our approach is the opposite. You
                                    get a careful diagnosis, a structured non-surgical
                                    plan, and an honest assessment at every step. Surgery
                                    is only discussed when the evidence genuinely supports
                                    it.
                                </p>

                                <p className="text-lg text-blue-50 leading-relaxed mb-8">
                                    That same conservative-first philosophy is why
                                    patients come to us for{" "}
                                    <strong className="text-white">
                                        second opinions
                                    </strong>{" "}
                                    on spine surgery recommendations they&apos;ve
                                    received elsewhere — and why a meaningful proportion
                                    of them go home with a non-surgical plan instead.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-white/20">
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">
                                            80%+
                                        </p>
                                        <p className="text-blue-100">
                                            of disc problems resolve without surgery
                                            when managed properly.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">
                                            6–12 weeks
                                        </p>
                                        <p className="text-blue-100">
                                            of structured physiotherapy and medical
                                            management is the standard first step.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-4xl font-bold text-white mb-1">
                                            Honest
                                        </p>
                                        <p className="text-blue-100">
                                            second opinions on surgery recommendations
                                            — including when surgery is the right call.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Patients Choose Dr. Nitin */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Patients Choose Dr. Nitin for Back Pain
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Specialist expertise, a non-surgical-first mindset, and a
                            clear, honest path to getting your back working again.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {sellingPoints.map((point) => (
                            <div
                                key={point.title}
                                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <point.icon className="w-6 h-6 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typical Treatment Plan */}
            <section className="py-16 md:py-20 bg-blue-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-blue-700 text-white rounded-full px-5 py-2 mb-4">
                                <p className="text-sm font-semibold uppercase tracking-wide">
                                    Surgery Is Step 5 — Not Step 1
                                </p>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                                What&apos;s the Typical Treatment Plan?
                            </h2>
                            <p className="text-lg text-blue-800 max-w-2xl mx-auto">
                                A clear, sequenced approach. We escalate only when each
                                previous step has been given a proper chance — and we
                                tell you exactly where you are in the plan.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {treatmentSteps.map((step, idx) => {
                                const isFinal = idx === treatmentSteps.length - 1;
                                return (
                                    <div
                                        key={step.step}
                                        className={`relative bg-white rounded-2xl shadow-md border-l-8 ${isFinal
                                            ? "border-orange-500"
                                            : "border-blue-600"
                                            } p-6 md:p-8`}
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                                            <div
                                                className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${isFinal
                                                    ? "bg-orange-100"
                                                    : "bg-blue-100"
                                                    }`}
                                            >
                                                <step.icon
                                                    className={`w-8 h-8 ${isFinal
                                                        ? "text-orange-600"
                                                        : "text-blue-700"
                                                        }`}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p
                                                    className={`text-sm font-bold uppercase tracking-wider mb-1 ${isFinal
                                                        ? "text-orange-600"
                                                        : "text-blue-700"
                                                        }`}
                                                >
                                                    {step.step}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <p className="text-center text-sm text-blue-800 mt-8 max-w-3xl mx-auto">
                            <strong>Note:</strong> Red flags such as progressive neurological
                            weakness, loss of bladder/bowel control, severe trauma, suspected
                            infection or malignancy fast-track the pathway. The sequence
                            above is for the typical mechanical or disc-related back pain.
                        </p>
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
                            Real patients sharing how they got their lives back —
                            without unnecessary surgery.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/hNDU1Sx5gMc"
                                title="Patient Testimonial 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/XFDLO_nR6x4"
                                title="Patient Testimonial 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="aspect-[9/16] w-full max-w-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/swT9lwWwSbU"
                                title="Patient Testimonial 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                loading="lazy"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Form */}
            <section id="booking-form" className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Book Your Back Pain Consultation
                            </h2>
                            <p className="text-lg text-gray-600">
                                Tell us a little about your back pain — we&apos;ll get
                                back within 24 hours to confirm your appointment.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200">
                            <BookingForm source="ads-back-pain" />
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 mb-4">Prefer to call?</p>
                            <a
                                href={`tel:${heroPhone}`}
                                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-xl"
                            >
                                <Phone className="w-5 h-5" />
                                {heroPhone}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Visit Us — Two Convenient Locations
                        </h2>
                        <p className="text-lg text-gray-600">
                            Back pain &amp; spine care in HSR Layout and Attibele,
                            Bengaluru.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {CLINICS.map((location) => (
                            <div
                                key={location.id}
                                className="bg-white rounded-xl p-8 shadow-md border border-gray-200"
                            >
                                <h3 className="text-2xl font-bold text-center text-gray-900 bg-yellow-200 mb-6">
                                    {location.name}
                                </h3>

                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-gray-800 font-medium">
                                                {location.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <div>
                                            {location.hours.map((h) => (
                                                <p
                                                    key={h.label}
                                                    className="text-gray-800"
                                                >
                                                    {h.label}: {h.display}
                                                </p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                                        <a
                                            href={`tel:${location.phone}`}
                                            className="text-blue-700 hover:text-blue-800 font-medium"
                                        >
                                            {location.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100 border-t-4 border-blue-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                        Back Pain Doesn&apos;t Have to Be Permanent
                    </h2>
                    <p className="text-xl mb-8 text-blue-800 max-w-2xl mx-auto">
                        Get a real diagnosis, a structured plan, and an honest answer
                        on whether you actually need surgery. Same-day appointments
                        available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <TrackedButton
                            buttonName="Book Appointment - Final CTA"
                            buttonLocation="Final CTA Section"
                            href="#booking-form"
                            className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                cta_type: "form_scroll",
                                condition: "back-pain",
                            }}
                        >
                            Book Free Consultation
                        </TrackedButton>
                        <TrackedButton
                            buttonName="Call Now - Final CTA"
                            buttonLocation="Final CTA Section"
                            href={`tel:${heroPhone}`}
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                            metadata={{
                                phone_number: heroPhone,
                                cta_type: "phone",
                                condition: "back-pain",
                            }}
                        >
                            <Phone className="w-5 h-5" />
                            Call {heroPhone}
                        </TrackedButton>
                    </div>
                </div>
            </section>
        </main>
    );
}
