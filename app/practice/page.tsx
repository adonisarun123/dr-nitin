import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ListChecks } from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { siteOrigin } from "@/lib/site-url";
import { practicePostalAddress, siteConfig } from "@/lib/data";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
    title: {
        absolute:
            "Practice Overview — Dr. Nitin N Sunku Orthopedic & Sports Medicine, Bengaluru",
    },
    description:
        "About the practice — Dr. Nitin N Sunku, consultant orthopaedic surgeon and sports medicine specialist in Bengaluru. Locations at Raghava Multispeciality Hospital (Attibele) and Health Nest Hospital (HSR Layout). Conditions treated, what to bring, and how appointments work.",
    alternates: { canonical: `${siteOrigin}/practice` },
};

export default function PracticeOverviewPage() {
    const physicianSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        name: "Dr. Nitin N Sunku",
        medicalSpecialty: [
            "Orthopedic",
            "SportsMedicine",
            "ArthroscopicSurgery",
            "JointReplacement",
        ],
        address: practicePostalAddress,
        telephone: siteConfig.phone,
        url: `${siteOrigin}/practice`,
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <JsonLd data={physicianSchema} />

            <PageHeaderBold
                title="Practice Overview"
                description="A short guide to the practice — what we treat, where you'll be seen, and how to prepare for your visit."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl">
                <article className="space-y-12 text-gray-700 text-base lg:text-lg leading-relaxed">
                    <section aria-labelledby="practice-overview-heading">
                        <h2
                            id="practice-overview-heading"
                            className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4"
                        >
                            Orthopaedic and sports medicine care in Bengaluru
                        </h2>
                        <p>
                            Dr. Nitin N. Sunku is a consultant orthopaedic surgeon and
                            sports medicine specialist. His day-to-day work spans knee and
                            shoulder arthroscopy, ACL and other ligament injuries, meniscus
                            tears, cartilage-friendly repair options when suitable, hip and
                            knee arthritis assessment, joint replacement when quality of
                            life is clearly limited, fracture and trauma review, and spine
                            symptom evaluation with a staged plan. Care is built around a
                            clear history, a focused examination, imaging only when it
                            changes management, and honest discussion of non-operative
                            versus operative paths.
                        </p>
                    </section>

                    <section aria-labelledby="practice-where-heading">
                        <h2
                            id="practice-where-heading"
                            className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4"
                        >
                            Where appointments take place
                        </h2>
                        <p>
                            The practice is anchored at{" "}
                            <strong>Raghava Multispeciality Hospital, Attibele</strong>, on
                            Sarjapura–Attibele Road, for many patients travelling from
                            Attibele, Anekal, Chandapura, Jigani, Bommasandra, Electronic
                            City, Sarjapura, and nearby towns who want a South Bengaluru
                            base close to home or work.{" "}
                            <strong>Health Nest Hospital, HSR Layout</strong> (24th Main
                            Road, Sector 2) supports selected consultations and follow-up
                            for people who live closer to HSR, Koramangala, BTM Layout,
                            Bellandur, or Whitefield-side commutes. Both sites link into
                            imaging and physiotherapy networks when referrals are needed.
                        </p>
                    </section>

                    <section aria-labelledby="practice-conditions-heading">
                        <h2
                            id="practice-conditions-heading"
                            className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4"
                        >
                            Conditions and procedures people commonly ask about
                        </h2>
                        <p>
                            Typical questions cover ACL tears and post-injury instability,
                            meniscus repair versus partial trimming, recurrent shoulder
                            dislocation, rotator cuff tears and frozen shoulder, shoulder
                            arthroscopy for impingement, tennis or golfer&apos;s elbow
                            flare-ups, runner&apos;s knee and shin splints, Achilles and
                            other tendon overuse problems, early to advanced hip and knee
                            arthritis, partial and total knee replacement timing, hip
                            replacement for arthritis and selected fractures, acute
                            collarbone and ankle fractures, workplace and road traffic
                            injuries, and back pain with or without leg symptoms when
                            urgent red flags have been excluded. Sports medicine visits
                            often blend training-load advice with targeted rehabilitation
                            goals rather than rushing to surgery.
                        </p>
                    </section>

                    <section aria-labelledby="practice-before-heading">
                        <h2
                            id="practice-before-heading"
                            className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4"
                        >
                            Before you attend
                        </h2>
                        <p>
                            Bring photo ID, insurance cards if applicable, a concise list of
                            medicines and allergies, old MRI or X-ray reports on phone or
                            paper, and footwear or clothing that lets the knee or shoulder
                            be examined. Write down three goals — for example,
                            &ldquo;sleep without waking from knee pain,&rdquo; &ldquo;jog
                            five kilometres without swelling,&rdquo; or &ldquo;lift my
                            child safely.&rdquo; Those goals help prioritise whether
                            bracing, injections, structured physiotherapy, arthroscopy, or
                            joint replacement is discussed first.
                        </p>

                        <div className="mt-6 rounded-2xl bg-blue-50/60 border border-blue-100 p-5">
                            <div className="flex items-center gap-2 text-blue-900 font-semibold mb-3">
                                <ListChecks className="h-5 w-5" aria-hidden />
                                Quick checklist
                            </div>
                            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-700 list-disc pl-5">
                                <li>Photo ID</li>
                                <li>Insurance card (if applicable)</li>
                                <li>Medicines and allergies list</li>
                                <li>Prior X-ray or MRI reports</li>
                                <li>Loose clothing for examination</li>
                                <li>Three written goals for your visit</li>
                            </ul>
                        </div>
                    </section>

                    <section
                        aria-label="Next steps"
                        className="rounded-2xl border border-gray-200 bg-gray-50 p-6 lg:p-8"
                    >
                        <h2 className="text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2">
                            Plan your visit
                        </h2>
                        <p className="text-gray-700 mb-5">
                            When you&apos;re ready, choose the option that fits your case.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Button asChild>
                                <Link href="/contact">
                                    Book a consultation
                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/services">Browse services</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/treatments">Non-surgical treatments</Link>
                            </Button>
                            <Button variant="ghost" asChild>
                                <Link href="/about">About Dr. Nitin</Link>
                            </Button>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    );
}
