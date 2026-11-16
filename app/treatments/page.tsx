import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { FadeIn } from "@/components/animations/fade-in";
import { treatments, SERVICE_AREAS_LINE } from "@/lib/treatments";
import { siteOrigin } from "@/lib/site-url";
import { LandingFaq, type LandingFaqItem } from "@/components/landing/landing-faq";

export const metadata: Metadata = {
    title: { absolute: "Non-Surgical & Regenerative Orthopedic Treatments" },
    description:
        "Modern non-surgical and regenerative orthopedic treatments by Dr. Nitin N Sunku — GFC, hyaluronic acid, ultrasound-guided injections and complete osteoarthritis care. Clinics in Attibele and HSR Layout, serving Electronic City and South Bengaluru.",
    alternates: { canonical: `${siteOrigin}/treatments` },
};

const TREATMENTS_FAQS: LandingFaqItem[] = [
    { q: "What non-surgical treatments are available for knee pain?", a: "The foundation is a structured strengthening programme, weight management and activity changes. Injections are added for selected patients: hyaluronic acid to improve joint lubrication, PRP or GFC prepared from your own blood for mild to moderate osteoarthritis and some tendon problems, and ultrasound-guided steroid injections for short-term relief of a severe flare." },
    { q: "Can injections help me avoid knee replacement?", a: "In mild to moderate arthritis, injections combined with exercise and weight loss can reduce pain and delay surgery for a meaningful period in many patients. They do not regrow cartilage or reverse advanced arthritis. When the joint is bone-on-bone and pain limits daily life despite good non-surgical care, replacement usually gives the more reliable result." },
    { q: "What is the difference between PRP and GFC?", a: "Both are prepared from a small sample of your own blood. PRP is plasma concentrated with platelets. GFC, or growth factor concentrate, goes a step further by activating the platelets and collecting the released growth factors in a cell-free solution. Dr. Nitin chooses between them based on the joint, the severity and your goals." },
    { q: "Why use ultrasound guidance for joint injections?", a: "Ultrasound lets the doctor see the needle reach the exact target, such as a tendon sheath, bursa or a small joint space, instead of injecting by feel. This improves accuracy, especially in the shoulder, hip and ankle, and helps avoid nearby nerves and vessels." },
    { q: "Are PRP and GFC injections painful?", a: "There is a brief sting from the blood draw and some pressure during the injection. The joint commonly aches for two to three days afterwards as part of the healing response. Anti-inflammatory painkillers are usually avoided for a short period after PRP or GFC, so paracetamol and ice are used instead." },
    { q: "How many injection sessions will I need?", a: "It depends on the treatment and the condition. Hyaluronic acid may be a single or a short series of injections. PRP and GFC are often given as one to three sessions spaced a few weeks apart. Your plan, and when to review progress, is agreed at the consultation." },
    { q: "Who is not a good candidate for regenerative injections?", a: "Injections are less likely to help in advanced, bone-on-bone arthritis, severe deformity, or a mechanical problem such as a locked knee from a meniscus tear. They are deferred during active infection, and some blood disorders or medicines need review first. An examination and X-ray decide suitability." },
];

export default function TreatmentsIndexPage() {
    const itemListSchema = {
        "@type": "ItemList",
        "@id": `${siteOrigin}/treatments#list`,
        name: "Non-Surgical & Regenerative Orthopedic Treatments",
        itemListElement: treatments.map((t, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${siteOrigin}/treatments/${t.slug}`,
            name: t.title,
        })),
    };

    return (
        <main className="min-h-screen pb-20">
            <PageHeaderBold
                title="Non-Surgical & Regenerative Orthopedic Treatments"
                description="Pain reduction, mobility restoration, and a real plan to delay or avoid surgery where medically appropriate. Dr. Nitin N Sunku, Attibele and HSR Layout."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 max-w-4xl">
                <div className="space-y-4 text-gray-700 leading-relaxed text-base lg:text-lg">
                    <p>
                        These treatment pages describe the modern, non-surgical and
                        regenerative options offered by Dr. Nitin N Sunku alongside the
                        existing surgical services. Each page explains the procedure in plain
                        language, who is and isn&apos;t a good candidate, what recovery looks
                        like, and how the option fits into a broader plan combining
                        physiotherapy, weight management, and follow-up care.
                    </p>
                    <p>{SERVICE_AREAS_LINE}</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {treatments.map((t, i) => (
                        <FadeIn key={t.slug} delay={i * 0.08}>
                            <Link
                                href={`/treatments/${t.slug}`}
                                className="group relative flex flex-col bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 h-full"
                            >
                                <div
                                    className={`inline-flex w-fit items-center justify-center px-3 py-1 rounded-full text-xs font-semibold mb-5 ${t.color}`}
                                >
                                    {t.bodyLocation ?? "Orthopedic"}
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {t.title}
                                </h2>

                                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                    {t.shortDesc}
                                </p>

                                <ul className="space-y-1.5 mb-6 text-sm text-gray-600">
                                    {t.heroBullets.slice(0, 3).map((b) => (
                                        <li key={b} className="flex items-start gap-2">
                                            <CheckCircle className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center text-primary font-semibold text-sm mt-auto">
                                    Learn more
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Injection, physiotherapy or surgery? How the choice is made
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                        Non-surgical treatment works best when it is matched to the right problem at the right stage.
                        For knee osteoarthritis, the stage seen on a standing X-ray matters most. In early and moderate
                        arthritis, where some joint space remains, strengthening, weight loss and an injection plan often
                        bring pain down enough to stay active for years. In advanced arthritis with the bones rubbing
                        together and a fixed deformity, injections tend to give shorter relief, and{" "}
                        <Link href="/services/knee-replacement" className="text-primary font-medium hover:underline">
                            knee replacement
                        </Link>{" "}
                        is discussed honestly as the more reliable option.
                    </p>
                    <p>
                        Tendon and soft-tissue problems &mdash; tennis elbow, jumper&apos;s knee, Achilles and rotator cuff
                        tendinopathy, plantar fasciitis &mdash; follow a similar logic. A progressive loading programme is
                        the backbone; ultrasound-guided injections are added when pain blocks that programme from
                        working. Mechanical problems are different: a{" "}
                        <Link href="/services/meniscal-care" className="text-primary font-medium hover:underline">
                            meniscus tear that locks the knee
                        </Link>{" "}
                        or a{" "}
                        <Link href="/services/acl-care" className="text-primary font-medium hover:underline">
                            torn ACL in a young athlete
                        </Link>{" "}
                        will not be fixed by an injection, and delaying surgery can allow further damage.
                    </p>
                    <h3 className="text-xl font-semibold text-gray-900 pt-2">What to expect on the day</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Injections are outpatient procedures; most patients go home within an hour or two.</li>
                        <li>PRP and GFC begin with a small blood draw, processed while you wait.</li>
                        <li>Expect two to three days of soreness; plan light duties and avoid strenuous exercise for about a week.</li>
                        <li>Physiotherapy usually resumes within days &mdash; the injection supports the exercise plan, it does not replace it.</li>
                        <li>Progress is reviewed at follow-up, usually after four to six weeks, before any further session.</li>
                    </ul>
                </div>
            </section>

            <LandingFaq
                pageName="Non-Surgical & Regenerative Orthopedic Treatments"
                pagePath="/treatments"
                pageType="CollectionPage"
                heading="Questions about non-surgical treatment"
                items={TREATMENTS_FAQS}
                extraNodes={[itemListSchema]}
            />
        </main>
    );
}
