import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { servicesData } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { LandingFaq, type LandingFaqItem } from "@/components/landing/landing-faq";

export const metadata: Metadata = {
    title: "Orthopedic & Sports Medicine Services",
    description:
        "Orthopedic and sports medicine services in Attibele with Dr. Nitin N Sunku—ACL, meniscus, joint replacement, fractures, and spine symptoms. Consultations also at HSR Layout for patients across South Bengaluru.",
    alternates: { canonical: `${siteOrigin}/services` },
};

const SYMPTOM_GUIDE: { symptom: string; likely: string; href: string; label: string }[] = [
    { symptom: "Knee gave way during sport, swelled within hours", likely: "ACL tear, often with a meniscus tear", href: "/services/acl-care", label: "ACL Surgery" },
    { symptom: "Knee locks, catches or has pain on the inner/outer joint line when twisting or squatting", likely: "Meniscus tear", href: "/services/meniscal-care", label: "Meniscus Tear Surgery" },
    { symptom: "Kneecap slipped out of place, or feels like it might", likely: "Patellar dislocation / instability", href: "/services/mpfl-patellar-dislocation", label: "Kneecap Dislocation (MPFL)" },
    { symptom: "Knee pain on the inner or outer side after a blow or awkward fall", likely: "MCL or LCL ligament injury", href: "/services/mcl-lcl-knee-ligament-injury", label: "MCL & LCL Ligament Surgery" },
    { symptom: "Pain and stiffness that is worse with walking and stairs, after age 50", likely: "Knee osteoarthritis", href: "/services/knee-replacement", label: "Knee Replacement Surgery" },
    { symptom: "Groin pain, limp, difficulty putting on socks or getting out of a car", likely: "Hip arthritis or hip impingement", href: "/services/hip-replacement", label: "Hip Replacement Surgery" },
    { symptom: "Night pain in the shoulder, weakness lifting the arm overhead", likely: "Rotator cuff tear or impingement", href: "/services/shoulder-care", label: "Shoulder & Rotator Cuff Surgery" },
    { symptom: "Low back pain with pain, tingling or numbness running down the leg", likely: "Disc prolapse / sciatica", href: "/services/spine-care", label: "Spine & Back Pain Treatment" },
    { symptom: "Pain, swelling or deformity after a fall or road accident", likely: "Fracture or dislocation", href: "/services/bone-fracture", label: "Fracture Treatment" },
];

const SERVICES_FAQS: LandingFaqItem[] = [
    { q: "Which orthopedic service do I need for my symptoms?", a: "Start with the symptom guide on this page, but you do not need to pick the right service before booking. Dr. Nitin N Sunku examines the joint, orders an X-ray or MRI only if it will change the plan, and then explains which treatment applies. Most patients are first seen as a general orthopedic consultation." },
    { q: "Does every orthopedic problem need surgery?", a: "No. Most knee, shoulder and back problems are treated first with physiotherapy, activity changes, medicines and, in selected cases, injections. Surgery is advised when there is a mechanical problem that will not settle on its own, such as an unstable ligament, a locked knee or a displaced fracture, or when advanced arthritis has not responded to other treatment." },
    { q: "Where are these services available in Bengaluru?", a: "Consultations and surgery are mainly at Raghava Multispeciality Hospital on Sarjapura–Attibele Road, Attibele, which serves Anekal, Chandapura, Bommasandra, Hosur Road and Electronic City. Dr. Nitin also consults at Health Nest Hospital in HSR Layout for patients from HSR, Koramangala, BTM Layout and Bellandur." },
    { q: "Do I need an MRI before my first orthopedic appointment?", a: "Usually not. A careful examination and, where needed, an X-ray answer most questions at the first visit. An MRI is advised when a ligament, meniscus, cartilage or disc problem is suspected and the result would change treatment. If you already have scans, bring the films and reports." },
    { q: "Are sports injury and joint replacement treated by the same doctor?", a: "Yes. Dr. Nitin N Sunku is an orthopedic and sports medicine surgeon who treats both sports injuries, such as ligament and meniscus tears, and degenerative conditions such as knee and hip arthritis that may need joint replacement. Having one surgeon across the whole pathway keeps advice consistent." },
    { q: "Is orthopedic surgery covered by health insurance?", a: "Most planned orthopedic procedures, including arthroscopy, ligament reconstruction, fracture fixation and joint replacement, are covered by standard health insurance policies, subject to the policy terms and waiting periods. The hospital team helps with cashless pre-authorisation; bring your policy card and ID to the consultation." },
    { q: "How soon should I see an orthopedic doctor after an injury?", a: "Get same-day care for an obvious deformity, a wound over a possible fracture, inability to bear weight, a locked knee, or numbness or coldness in the limb. For a twisting injury with swelling but no red flags, an assessment within one to two weeks is reasonable; waiting months can allow a tear to extend." },
    { q: "How do I book an appointment for any of these services?", a: "Use the online booking form or call the clinic directly. Mention your main symptom, how long it has been present and which clinic is more convenient, Attibele or HSR Layout. Outpatient hours are Monday to Saturday, 10 am to 6 pm at Attibele and 10 am to 8 pm at HSR Layout." },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeaderBold
                title="Comprehensive Orthopedic Services"
                description="Primary care at Raghava Multispeciality, Attibele, on Sarjapura–Attibele Road—sports injuries, joint replacement, fractures, and arthroscopy. Additional sessions at Health Nest Hospital, HSR Layout, for patients from nearby areas."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
                <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p>
                        Most consultations and treatment planning for the services below are centred at{" "}
                        <strong>Raghava Multispeciality Hospital, Attibele</strong>, on Sarjapura–Attibele Road.
                        The clinic serves Attibele, Anekal, Chandapura, Jigani, Bommasandra, and the industrial and
                        residential corridors along Sarjapura Road and Hosur Road, including patients who travel
                        from Electronic City and Sarjapura for fracture care, knee and shoulder problems, sports
                        injuries, and joint replacement assessment. Each service page explains typical symptoms,
                        what to expect in clinic, and which non-surgical or surgical options may apply after
                        examination.
                    </p>
                    <p>
                        Dr. Nitin N Sunku also holds sessions at <strong>Health Nest Hospital, HSR Layout</strong>{" "}
                        (24th Main, Sector 2) for follow-up, pre-operative review, and patients who live closer to
                        HSR, Koramangala, BTM Layout, or Bellandur. If you are unsure which site suits you best,
                        mention your location when you use the{" "}
                        <Link href="/contact" className="text-primary font-medium hover:underline">
                            contact page
                        </Link>
                        ; the team will guide you. Broadly, expect <strong>Attibele as the main hub</strong> for
                        most of your care, with <strong>HSR Layout used as a convenient secondary site</strong> when
                        your address or diary makes that the better choice.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, idx) => (
                        <FadeIn key={service.slug} delay={idx * 0.1}>
                            <Link
                                href={`/services/${service.slug}`}
                                className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                            >
                                <div className={`h-14 w-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 p-2`}>
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={40}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h2>

                                <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                                    {service.shortDesc}
                                </p>

                                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 max-w-5xl" aria-labelledby="symptom-guide">
                <h2 id="symptom-guide" className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Not sure which service you need? Start with your symptom
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Patients rarely arrive knowing the name of their condition &mdash; they arrive with a knee that
                    gave way, a shoulder that aches at night or a back that sends pain down the leg. The table below
                    maps the most common complaints seen in clinic to the condition usually responsible and the page
                    that explains it. It is a starting point, not a diagnosis: the same symptom can have more than one
                    cause, and the examination decides.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                    <table className="w-full text-left text-sm md:text-base">
                        <thead className="bg-gray-50 text-gray-900">
                            <tr>
                                <th className="px-4 py-3 font-semibold">What you notice</th>
                                <th className="px-4 py-3 font-semibold">Common cause</th>
                                <th className="px-4 py-3 font-semibold">Read more</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-gray-700">
                            {SYMPTOM_GUIDE.map((row) => (
                                <tr key={row.href}>
                                    <td className="px-4 py-3">{row.symptom}</td>
                                    <td className="px-4 py-3">{row.likely}</td>
                                    <td className="px-4 py-3">
                                        <Link href={row.href} className="text-primary font-medium hover:underline">
                                            {row.label}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-3">How a first orthopedic visit works</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        The first consultation is about getting the diagnosis right. Dr. Nitin N Sunku takes a history of
                        how the problem started, what makes it worse and what has already been tried, then examines the
                        joint and compares it with the other side. An X-ray is done on site at Attibele when bone, joint
                        space or alignment needs to be seen. An MRI is advised only when it would change the treatment
                        &mdash; for example, to confirm a ligament or meniscus tear before discussing arthroscopy.
                    </p>
                    <p>
                        You then leave with a plan in plain language: what the problem is, what will happen if it is left
                        alone, the non-surgical options and, where relevant, the surgical option with its recovery time.
                        Many patients start with a structured physiotherapy programme; those who need surgery are
                        counselled on timing, insurance pre-authorisation and what the first six weeks of recovery
                        involve. For non-surgical injection-based care such as PRP, GFC or hyaluronic acid, see the{" "}
                        <Link href="/treatments" className="text-primary font-medium hover:underline">
                            non-surgical and regenerative treatments
                        </Link>{" "}
                        section.
                    </p>
                </div>
            </section>

            <LandingFaq
                pageName="Orthopedic & Sports Medicine Services"
                pagePath="/services"
                pageType="CollectionPage"
                heading="Questions about orthopedic services"
                items={SERVICES_FAQS}
                extraNodes={[
                    {
                        "@type": "ItemList",
                        "@id": `${siteOrigin}/services#list`,
                        "name": "Orthopedic & Sports Medicine Services",
                        "itemListElement": servicesData.map((svc, i) => ({
                            "@type": "ListItem",
                            "position": i + 1,
                            "url": `${siteOrigin}/services/${svc.slug}`,
                            "name": svc.title,
                        })),
                    },
                ]}
            />
        </main>
    );
}
