import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FAQ } from "@/components/ui/faq";
import { CheckCircle, Phone, ArrowLeft, ArrowRight, MapPin, Calendar as CalendarIcon, Clock, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { servicesData } from "@/lib/data";

// Generate static params for all services
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    if (params.slug === "sports-medicine") {
        return {
            title: "Sports Medicine & Injury Care – Dr. Nitin Sunku",
            description: "Specialized sports medicine care in Bangalore. Dr. Sunku treats sprains, fractures, ligament tears with personalized plans. Return to sport safely.",
        };
    }

    if (params.slug === "acl-care") {
        return {
            title: "ACL Tear Care & Surgery – Dr. Nitin Sunku Orthopaedics",
            description: "Expert ACL tear diagnosis and arthroscopic reconstruction by Dr. Sunku. Learn causes, symptoms, treatment, recovery.",
        };
    }

    if (params.slug === "knee-replacement") {
        return {
            title: "Knee Replacement Surgery – Dr. Nitin Sunku Orthopedics",
            description: "Advanced total & partial knee replacements by Dr. Sunku. Relieve arthritis pain, restore mobility. Learn about surgery, recovery",
        };
    }

    if (params.slug === "meniscal-care") {
        return {
            title: "Meniscus Tear Treatment – Dr. Nitin Sunku Orthopedics",
            description: "Specialized meniscus tear care: arthroscopic repair or partial meniscectomy by Dr. Sunku. Learn causes, symptoms, recovery",
        };
    }

    if (params.slug === "hip-replacement") {
        return {
            title: "Hip Replacement Surgery – Dr. Nitin Sunku Orthopedics",
            description: "Expert hip replacement surgeries in Bangalore. Dr. Sunku treats arthritis and hip fractures with advanced prostheses. Learn about surgery, recovery (3-6 months)",
        };
    }

    if (params.slug === "shoulder-care") {
        return {
            title: "Shoulder Care & Surgery – Dr. Nitin Sunku",
            description: "Comprehensive shoulder pain treatment by Dr. Sunku. We manage rotator cuff tears, impingement, instability, frozen shoulder with personalized care.",
        };
    }

    if (params.slug === "bone-fracture") {
        return {
            title: "Bone Fracture Treatment – Dr. Nitin Sunku",
            description: "Expert bone fracture care in Bangalore. Dr. Sunku treats simple to complex breaks with casting, ORIF, intramedullary nails. Personalized rehab for full recovery.",
        };
    }

    if (params.slug === "spine-care") {
        return {
            title: "Spine Care Treatment in Attibele | Dr. Nitin Sunku",
            description: "Comprehensive spine care in Attibele by Dr. Nitin Sunku — expert evaluation and non-surgical or surgical management of back pain and spinal disorders.",
        };
    }


    const service = servicesData.find((s) => s.slug === params.slug);
    if (!service) return {};

    return {
        title: `${service.title} Treatment in HSR Layout`,
        description: service.shortDesc,
    };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = servicesData.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalSpecialty",
        "name": service.title,
        "description": service.shortDesc,
        "provider": {
            "@type": "Physician",
            "name": "Dr. Nitin N Sunku",
            "address": practicePostalAddress,
            "telephone": siteConfig.phone
        }
    };

    return (
        <main className="min-h-screen">
            <JsonLd data={serviceSchema} />
            {/* Custom Header for Service Page */}
            <div className="bg-secondary/30 pt-16 pb-20 lg:pt-24 lg:pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                    </Link>
                    <div className="max-w-4xl">
                        <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${service.color} mb-6`}>
                            <Image
                                src={service.icon}
                                alt={service.title}
                                width={32}
                                height={32}
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">{service.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">{service.shortDesc}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12 grid lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 space-y-12">
                        {service.slug === "acl-care" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        An ACL (Anterior Cruciate Ligament) injury is one of the most common knee ligament injuries, especially among athletes and active individuals. The ACL plays a crucial role in maintaining knee stability during movement, pivoting, jumping, and sudden direction changes. When the ligament tears, it can lead to pain, swelling, instability, and difficulty walking or playing sports.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Our clinic offers comprehensive ACL care in Bangalore, including accurate diagnosis, non-surgical treatment, rehabilitation guidance, and advanced arthroscopic ACL reconstruction when required. Every treatment plan is customized based on age, lifestyle, activity level, and recovery goals.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="h-8 w-1 bg-primary rounded-full" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h3 className="font-bold text-gray-900 mb-2">Acute ACL Tear</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Typically from a sudden twist or hyperextension of the knee during activities like soccer, basketball, or skiing. Patients often hear or feel a loud “pop” and have rapid swelling. They may initially walk, but experience instability (knee “gives out”).</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h3 className="font-bold text-gray-900 mb-2">Chronic ACL Injury</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Sometimes patients limp or complain of repeated “giving way” after an old tear. Chronic instability can damage cartilage and menisci over time.</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h3 className="font-bold text-gray-900 mb-2">Associated Injuries</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">ACL tears often come with other knee injuries (meniscus tears, MCL/PCL injuries). If X-rays/MRI show a broken bone or torn cartilage, we address those too.</p>
                                        </div>
                                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                            <h3 className="font-bold text-gray-900 mb-2">ACL Sprain (Partial Tear)</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">Mild stretching (grade 1–2 sprains) causes pain and some looseness; severe (grade 3) is a complete tear.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-600 italic text-sm">In short, we treat any knee injury involving knee instability, especially ACL ruptures from sports, auto accidents, or falls. Symptoms include intense pain, rapid swelling, loss of motion, and a sensation of the knee “giving out.”</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <div className="h-8 w-1 bg-primary rounded-full" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <div className="space-y-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Non-Surgical Management</h3>
                                            <p className="text-gray-600 leading-relaxed">For low-grade partial tears or less active patients, initial treatment follows the RICE protocol. We recommend Rest (avoid stress), Ice (to reduce swelling), Compression (brace or wrap), and Elevation. Patients use crutches and a knee brace as needed, and begin physical therapy early to restore motion and strength. However, an ACL cannot fully heal on its own, and unstable knees risk further injuries and arthritis. Non-op treatment alone generally suits older, less active individuals, but research shows better long-term outcomes with surgery for most active patients.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Management (Arthroscopic ACL Reconstruction)</h3>
                                            <p className="text-gray-600 leading-relaxed">Surgery is indicated for athletes or active patients whose ACL tears cause instability. We perform arthroscopic reconstruction – a minimally invasive procedure. The torn ACL is replaced with a graft (patient’s own tendon or a donor tendon) that is fixed with screws or buttons. If the tear is suitable, we may repair the ligament back to bone. Dr. Sunku and his team customize the graft choice (patellar tendon, hamstring tendon, or allograft) and technique based on patient factors. Throughout surgery, we look for and address any meniscus or cartilage injuries.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Post-Op Care</h3>
                                            <p className="text-gray-600 leading-relaxed">After reconstruction, patients wear a knee brace and begin rehabilitation under guidance. Dr. Sunku’s team provides a detailed rehab plan (see Recovery section).</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s ACL care stands out for sports-medicine expertise and personalized care. He has specialized fellowship training and experience as a professional team doctor, bringing precision to ACL reconstruction. We use the latest arthroscopic techniques and tailor treatment to each patient’s goals – whether you’re an athlete aiming to return to high-level play or someone wanting to walk comfortably. We emphasize safety and function: patient goals drive whether we recommend surgery or not. Our clinic coordinates with physiotherapists to ensure a smooth rehabilitation. No unproven claims are made; we follow evidence-based guidelines (e.g., AAOS). Unlike generic centers, we highlight our fellowship/athlete-doctor credentials and patient-first approach.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        {[
                                            { t: "Days 0–2", d: "Begin walking with crutches and a knee brace. Elevation and icing continue to control swelling." },
                                            { t: "Week 1–6", d: "Focus on regaining full knee extension and strengthening quadriceps. Range-of-motion and light strengthening exercises under guidance. By 2 weeks, many walk with one crutch." },
                                            { t: "Months 2–6", d: "Progress from walking/jogging to agility drills. Swimming and cycling often begin around 2–3 months post-op." },
                                            { t: "Months 6–9", d: "Gradual return to sports-specific training. Most achieve full recovery in this timeframe (Cleveland Clinic notes recovery takes 6–9 months)." },
                                            { t: "9–12 Months", d: "Competitive sports (cutting, pivoting) often resume with the surgeon's clearance." }
                                        ].map((step, idx) => (
                                            <div key={idx} className="relative">
                                                <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                                <h4 className="font-bold text-gray-900 mb-1">{step.t}</h4>
                                                <p className="text-gray-600 text-sm">{step.d}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">Each patient’s rehab is individualized. We monitor progress and adjust therapy. Early motion and strengthening aim to prevent stiffness. We set realistic expectations: while pain is controlled with modern anesthesia, full recovery and confidence often require the full 6–9 months.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we see ACL Care Patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you are unsure which location to book, use the contact page and mention your pin code. Bring prior MRI or X-ray reports, a list of medicines, and comfortable clothing so the joint can be examined properly.
                                    </div>
                                </section>

                                <FAQ
                                    title="ACL Care FAQ"
                                    items={[
                                        {
                                            question: "What causes an ACL tear?",
                                            answer: "ACL tears usually occur when the knee is forcefully twisted or hyperextended. Common causes include sudden deceleration, pivoting, or landing awkwardly in sports like soccer, basketball, or skiing. Non-contact injuries account for many ACL tears, though direct blows can also be a cause."
                                        },
                                        {
                                            question: "What symptoms indicate an ACL injury?",
                                            answer: "Patients often hear or feel a “pop” in the knee at injury. Rapid swelling follows, and the knee becomes painful and unstable. You may feel like the knee might give out under weight. Loss of full range of motion and difficulty walking are common."
                                        },
                                        {
                                            question: "How is an ACL tear diagnosed?",
                                            answer: "We start with a physical exam checking for instability (special ligament tests) and swelling. X-rays rule out fractures, while MRI is typically used to confirm the ACL tear and see any other damage (meniscus, cartilage)."
                                        },
                                        {
                                            question: "Do all ACL tears require surgery?",
                                            answer: "Not always. The decision depends on tear severity, patient age, and activity level. Complete tears that cause instability in active patients usually need reconstruction. Some partial tears or older patients with low activity may manage with therapy and bracing. However, an ACL cannot heal on its own; non-surgical management often leads to persistent instability."
                                        },
                                        {
                                            question: "What happens during ACL reconstruction surgery?",
                                            answer: "Done arthroscopically, the torn ligament is replaced by a graft: either your own tendon (patellar or hamstring) or a donor tendon. The graft is fixed with screws/buttons. It's usually an outpatient procedure, and you go home the same day."
                                        },
                                        {
                                            question: "What is recovery time after ACL surgery?",
                                            answer: "Walking with crutches starts in 1–2 days. Early rehab focuses on motion and swelling. It usually takes six to nine months to recover fully. Athletes may need 9–12 months before returning to high-level sports."
                                        },
                                        {
                                            question: "What are possible complications or long-term outcomes?",
                                            answer: "Complications are uncommon but include infection or blood clots. Proper rehab minimizes the risk of long-term knee arthritis. Most people regain good stability and function, with about 90% improving with treatment."
                                        },
                                        {
                                            question: "When should I see a doctor after knee injury?",
                                            answer: "If you heard a “pop” and have significant pain or swelling, see us promptly. Any instability (buckling) warrants evaluation. Early diagnosis allows for better planning of treatment and rehab."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book ACL Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">Early diagnosis can prevent long-term damage. Consult Dr. Nitin Sunku, experienced orthopaedic specialist, for arthroscopic surgery and recovery guidance.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "meniscal-care" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        A meniscus tear is one of the most common knee injuries seen in athletes, active individuals, and older adults. The meniscus is a C-shaped cartilage in the knee that acts as a shock absorber, helping protect the joint and improve stability during movement. When torn, it can lead to pain, swelling, stiffness, locking, and difficulty bending or straightening the knee.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Our clinic offers comprehensive meniscal care in Bangalore, including accurate diagnosis, conservative treatment, rehabilitation guidance, and advanced arthroscopic meniscus surgery when needed. The goal of treatment is always to relieve pain, restore movement, and preserve healthy knee cartilage whenever possible.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We provide treatment for a wide range of meniscus-related knee problems, including:
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Acute Meniscus Tear</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Often occurs during sports when the knee twists forcefully (e.g. pivoting in soccer or basketball). Patients feel sudden pain, rapid swelling, and may be unable to fully extend the knee. A tear can cause clicking, catching, or even a locked knee when a fragment gets caught.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Chronic/Degenerative Tear</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">In older adults or those with arthritis, normal wear can weaken the meniscus. Simple movements (kneeling, squatting) may then tear the cartilage. Symptoms are similar but may start gradually – pain, intermittent swelling, and occasional locking.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Associated Injuries</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Meniscus tears often coexist with ligament injuries (e.g. ACL tears). We evaluate for combined injuries because treating all issues is important for long-term knee health.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Re-tear or Recurrent Symptoms</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Even after initial conservative care, some patients have persistent pain or repeated swelling. These may require surgery.</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our clinic offers both conservative (non-surgical) and surgical treatments, tailored to each patient:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Non-Surgical Management</h3>
                                            <p className="text-gray-600 leading-relaxed">Many small or degenerative tears may improve with time and therapy. Following the RICE protocol (rest, ice, compression, elevation) can alleviate symptoms initially. We may recommend avoiding aggravating activities, using knee braces, and taking anti-inflammatory medications or injections for pain. Physical therapy focuses on strengthening the quadriceps and surrounding muscles to stabilize the knee. For example, a course of PT and activity modification may allow some tears to heal on their own. However, if symptoms (pain, clicking, swelling) persist beyond a few weeks or if the knee locks, we advise surgical intervention.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Management (Arthroscopic Repair or Meniscectomy)</h3>
                                            <p className="text-gray-600 leading-relaxed">Dr. Sunku is skilled in minimally invasive knee arthroscopy. For repairable tears (often in the well-blooded outer third of the meniscus), we perform meniscus repair: suturing the tear to allow natural healing. This preserves the meniscus function. If repair is not possible (tear in the inner zone, or complex degenerative tears), we perform a partial meniscectomy: trimming away only the torn portion, smoothing the meniscus. Surgical treatments typically use two small incisions; a tiny camera (arthroscope) guides precise work. We take care to remove as little tissue as necessary, since "removing large portions of the meniscus will lead to expedited arthritis".</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Postoperative Care</h3>
                                            <p className="text-gray-600 leading-relaxed">After surgery, rehabilitation is crucial. The specifics depend on the procedure (see Recovery section). Our team provides detailed rehab protocols. We do not rely on unproven treatments; any injections (PRP, etc.) would only be offered if supported by evidence or on a case-by-case basis. We emphasize evidence-based practice – for example, we cite the AAOS recommendation that rehab time varies by procedure (repair vs meniscectomy).</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s expertise is a key differentiator. As a fellowship-trained sports medicine specialist (and former team doctor), he has handled hundreds of knee injuries. He brings precision to arthroscopic techniques and understands athletes’ needs. We highlight a patient-first philosophy: every treatment plan is customized to goals (e.g. returning to sport or daily activities). Patients receive compassionate care, education about the pros/cons of surgery, and close follow-up. Unlike generic clinics, we emphasize Dr. Sunku’s credentials in sports orthopedics and his use of advanced techniques. Our track record of successful outcomes and coordinated rehab is why patients should trust us with their meniscal injury.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Rehab depends on whether the meniscus was repaired or resected:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Partial Meniscectomy Recovery</h4>
                                            <p className="text-gray-600 text-sm">Typically faster. Patients often walk on the knee immediately or within days. Swelling usually subsides in 1–2 weeks. A typical recovery allows return to normal activities in about 3–6 weeks. Early motion and strengthening start right away.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Meniscus Repair Recovery</h4>
                                            <p className="text-gray-600 text-sm">Requires more protection. Patients usually keep weight off (crutches) or use a brace for 4–6 weeks so the suture can heal. Physical therapy is gradual: gentle motion first, then strengthening. Full return to sports is usually by 3–6 months post-op.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Rehabilitation Timeline</h4>
                                            <p className="text-gray-600 text-sm">Both paths involve structured PT with a therapist, beginning immediately post-op. The overall goal is to restore range of motion, strength, and stability without damaging the healing meniscus.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">Our rehab program emphasizes gradual progression with professional supervision. As noted by OrthoInfo, rehab time is about 3–6 weeks for a simple meniscectomy, but 3–6 months for a repair. We follow these guidelines closely to ensure optimal healing and function.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we see meniscal care patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you are unsure which location to book, use the contact page and mention your pin code. Bring prior MRI or X-ray reports, a list of medicines, and comfortable clothing so the joint can be examined properly.
                                    </div>
                                </section>

                                <FAQ
                                    title="Meniscal Care FAQ"
                                    items={[
                                        {
                                            question: "What is a meniscus tear?",
                                            answer: "The meniscus is C-shaped cartilage acting as a shock absorber in the knee. A meniscus tear is a rip in that cartilage, usually from a twisting injury or wear-and-tear. It causes knee pain, swelling, stiffness, and sometimes locking (knee feeling stuck). Two types: acute tears from trauma (common in young athletes) and degenerative tears in older adults (from cartilage wear)."
                                        },
                                        {
                                            question: "What causes meniscus tears?",
                                            answer: "Sudden twisting or pivoting of the knee (especially with foot planted) can tear the meniscus. This often happens in sports like football, tennis, or basketball. Degenerative tears occur in older people with worn cartilage; a tear can happen during everyday activities like squatting or stepping off a curb."
                                        },
                                        {
                                            question: "What symptoms indicate a meniscus tear?",
                                            answer: "Common symptoms include knee pain, swelling, and stiffness within 24 hours after the injury. You may hear a popping at injury. Patients often experience clicking or catching with knee movement, and difficulty fully straightening the knee. If torn tissue catches in the joint, the knee may feel locked."
                                        },
                                        {
                                            question: "How is a meniscus tear diagnosed?",
                                            answer: "We perform a physical exam using tests like the McMurray’s or Thessaly’s to provoke pain or clicking. Imaging (MRI) is usually needed to confirm the tear and its exact location and extent. X-rays may be done to rule out other issues (like arthritis). A knee arthroscopy can also serve as a definitive diagnosis and treatment."
                                        },
                                        {
                                            question: "When can a meniscus tear heal on its own?",
                                            answer: "Small tears in the outer “red” zone of the meniscus (where blood supply is good) may heal with rest and therapy. For many tears, conservative treatment (rest, physical therapy, NSAIDs) can relieve symptoms. However, tears in the inner “white” zone have poor blood supply and usually do not heal without surgery. If pain persists or the knee keeps locking, surgery is typically recommended."
                                        },
                                        {
                                            question: "What are my treatment options?",
                                            answer: "Many tears are first managed non-surgically: RICE, anti-inflammatory meds, and guided exercises. If those fail, arthroscopic surgery is considered. During surgery, we either repair the tear by stitching it (best for tears in the vascular zone) or trim (partial meniscectomy) the torn fragment. Meniscus repair preserves tissue but requires longer rehab; meniscectomy has quicker recovery but leaves less cartilage. We tailor the choice to your tear type and lifestyle."
                                        },
                                        {
                                            question: "How long is recovery and rehabilitation?",
                                            answer: "Recovery depends on the procedure. After partial meniscectomy, many resume most activities within 4–6 weeks. After repair, full recovery often takes 3–6 months. Rehabilitation starts immediately with guided exercises: first to regain motion, then to strengthen muscles. Consistent physical therapy is crucial for best outcomes."
                                        },
                                        {
                                            question: "What are the risks or complications?",
                                            answer: "Key risks include knee stiffness and re-tear of the meniscus. Removing too much meniscus can increase arthritis risk. However, current arthroscopic techniques minimize damage. Infection and blood clots are rare. Proper technique and rehab reduce risks significantly."
                                        },
                                        {
                                            question: "How soon can I return to sports?",
                                            answer: "After a simple meniscectomy, many patients resume low-impact activities in a few weeks and sports in about 6–8 weeks. After a repair, athletes often wait 4–6 months before full sports participation. Return to sport is gradual: first strengthening exercises, then running, then cutting drills, under our guidance."
                                        },
                                        {
                                            question: "Why choose Dr. Sunku for meniscus care?",
                                            answer: "Dr. Sunku’s fellowship in sports medicine and role as a team doctor mean he understands athletic knee injuries in depth. He uses minimally invasive arthroscopy (smaller incisions, quicker healing). He also emphasizes patient education: we’ll explain why we recommend repair vs removal, and what rehab will involve. No unfounded claims are made—just a focus on proven techniques and your recovery goals."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Meniscus Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If you have knee pain, locking, swelling, or suspect a cartilage injury, early treatment can help prevent further joint damage. Consult Dr. Nitin Sunku, experienced orthopaedic and sports injury specialist in Bangalore, for expert meniscus tear treatment, arthroscopic knee surgery, and complete recovery guidance.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "sports-medicine" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Sports medicine focuses on the prevention, diagnosis, treatment, and rehabilitation of injuries related to sports, exercise, and active lifestyles. It is not only for professional athletes—anyone with a fitness-related injury, recurring pain, or movement limitation can benefit from specialized sports injury care.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Our clinic offers comprehensive sports medicine treatment in Bangalore for athletes, fitness enthusiasts, working professionals, and active individuals of all ages. From sprains and ligament tears to overuse injuries and rehabilitation, treatment is designed to help patients recover safely and return to activity with confidence.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We manage a wide range of sports-related injuries and performance-limiting conditions, including:
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Sprains & Strains</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Ligament sprains (e.g. ankle, wrist, knee) and muscle strains are among the most common sports injuries. Patients experience pain, swelling, and difficulty moving the affected joint.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Tendonitis and Overuse Injuries</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Overuse (repetitive) injuries like Achilles tendonitis, tennis elbow, runner’s knee, and stress fractures occur from chronic strain on tissues. Symptoms include gradual onset pain during activity and morning stiffness.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Fractures & Dislocations</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Sports can cause bone fractures (e.g. tibia, wrist) and joint dislocations (shoulder, patella). These injuries cause sharp pain, deformity, and often require urgent care.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Ligament Tears</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Severe sports injuries can tear ligaments like the ACL, MCL, or rotator cuff. These often cause a “popping” sound, immediate swelling, and instability in the joint.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Concussions</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Head injuries from falls or collisions result in concussions. Symptoms include headache, dizziness, and confusion.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Chronic Conditions in Athletes</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">We also manage related health issues that affect athletes’ performance, such as asthma, diabetes, or arthritis, by coordinating care that allows safe sports participation.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed">
                                        In short, Sports Medicine addresses any injury or condition that affects athletes' performance or health. We treat orthopedic injuries (sprains, tears, fractures), general conditions (asthma, hypertension in athletes), and focus on safe return-to-play.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our approach is multidisciplinary and individualized:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Diagnostic Evaluation</h3>
                                            <p className="text-gray-600 leading-relaxed">We combine a thorough history (injury mechanism, symptoms) with physical exam tests specific to sports injuries (e.g., Lachman for ACL, joint stability tests). Imaging (X-ray, MRI, ultrasound) is used only when needed to confirm injuries.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Non-Surgical Management</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">For many sports injuries, conservative care is the first step. This includes:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>RICE:</strong> (rest, ice, compression, elevation) for acute injuries.</li>
                                                <li><strong>Physical Therapy:</strong> Guided rehab exercises to restore motion and strength.</li>
                                                <li><strong>Medications/Injections:</strong> NSAIDs for pain/inflammation; corticosteroid or regenerative injections (e.g. PRP) can be used judiciously for tendon or joint issues (per current evidence).</li>
                                                <li><strong>Bracing/Taping:</strong> Support for weak joints (ankle braces, knee braces).</li>
                                                <li><strong>Functional Training:</strong> Injury prevention programs (balance, core strengthening).</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Treatments</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">When surgery is needed (e.g. torn ligament, severe rotator cuff tear, fractures needing fixation), we offer advanced procedures:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Arthroscopy:</strong> Minimally invasive repair of knee (ACL/Meniscus), shoulder, ankle injuries.</li>
                                                <li><strong>Ligament Reconstruction:</strong> ACL/MCL reconstructions; Tommy John (elbow UCL) surgery.</li>
                                                <li><strong>Cartilage Procedures:</strong> Meniscus transplantation or chondroplasty.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Care</h3>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Joint Injections:</strong> For arthritis or chronic injuries, we provide hyaluronic acid or platelet-rich plasma injections to relieve pain.</li>
                                                <li><strong>Performance & Nutrition:</strong> We address overall athletic performance: nutrition counseling, strength & conditioning guidance, and return-to-play decisions.</li>
                                                <li><strong>Team Approach:</strong> Similar to top centers, we coordinate care with therapists, trainers, and even dietitians when needed. This is especially crucial in sports medicine where on-field care and prevention are key.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s fellowship training and experience as a team physician (e.g. former pro sports doctor) bring elite-level expertise. He blends orthopaedic precision with sports science. We emphasize patient-first care: treatment plans are tailored to each patient’s goals (return to pro sports vs. recreational activity). Unlike some clinics, we highlight his specialized sports medicine credential. We also feature any cutting-edge diagnostics we use, and a collaborative team-based approach, similar to major centers. Our focus on education (explaining injury and recovery) and coordinated rehab sets us apart.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Recovery times vary by injury and treatment, but general phases include:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">0–2 Days (Acute Phase)</h4>
                                            <p className="text-gray-600 text-sm">Control swelling/pain with ice and limited weightbearing after sprains or surgeries.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">1–4 Weeks (Early Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Begin gentle range-of-motion and strengthening exercises; use braces or crutches if needed. Start PT under supervision.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">1–3 Months (Rehabilitation Phase)</h4>
                                            <p className="text-gray-600 text-sm">Advance strengthening, flexibility, and introduce sport-specific drills. Monitor healing via follow-ups.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">3–6+ Months (Return to Play)</h4>
                                            <p className="text-gray-600 text-sm">Gradual return to full activity. For example, an ACL reconstruction may take 6–9 months; others like simple sprains may be cleared in 4–6 weeks.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Prevention Focus</h4>
                                            <p className="text-gray-600 text-sm">Throughout rehab, we emphasize injury prevention (balance training, conditioning) to reduce re-injury risk.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">This timeline provides a roadmap: e.g. ankle sprains often heal in 4–6 weeks, whereas major surgeries like ligament reconstruction require months. Our team continually assesses progress, adjusting rehab goals so athletes return safely to their sport.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we see sports medicine patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you are unsure which location to book, use the contact page and mention your pin code. Bring prior MRI or X-ray reports, a list of medicines, and comfortable clothing so the joint can be examined properly.
                                    </div>
                                </section>

                                <FAQ
                                    title="Sports Medicine FAQ"
                                    items={[
                                        {
                                            question: "What is sports medicine?",
                                            answer: "Sports Medicine is a medical specialty that focuses on preventing and treating injuries related to sports and exercise. It’s not just for athletes – anyone with a sports or fitness-related injury can benefit. Sports medicine physicians manage musculoskeletal injuries (sprains, strains, fractures) and also oversee overall athletic health, including nutrition and conditioning. They often work in teams with therapists and trainers to help patients return to activity safely."
                                        },
                                        {
                                            question: "What injuries do sports medicine doctors treat?",
                                            answer: "We treat a wide range of injuries: acute injuries (e.g. ankle sprains, shoulder dislocations, fractures) and overuse injuries (e.g. tendonitis, stress fractures). We also handle ligament tears (ACL, rotator cuff), cartilage injuries, and concussions. Essentially, any injury from sports or exercise – whether on the field or in the gym – falls under sports medicine. Even illnesses that affect athletes (like asthma) are managed as part of sports medicine in many programs."
                                        },
                                        {
                                            question: "How is a sports injury diagnosed?",
                                            answer: "Diagnosis begins with a detailed history and physical exam. We use specialized tests and imaging as needed. For example, if you twisted your knee, we might order an MRI to check for torn ligaments or meniscus. Early and accurate diagnosis is key for proper treatment."
                                        },
                                        {
                                            question: "What are the treatment options?",
                                            answer: "Many sports injuries are first managed non-surgically: rest, ice, bracing, physical therapy, and medications (NSAIDs). Our clinic also offers advanced treatments: guided injections (cortisone, PRP), custom bracing, and focused rehab programs. Surgery is considered if conservative care fails or for severe injuries (e.g. complete ACL tear, unstable fracture). We perform arthroscopic repairs, tendon/ligament reconstructions, and fracture fixations as needed."
                                        },
                                        {
                                            question: "How long does it take to recover?",
                                            answer: "Recovery varies widely. Minor injuries (grade 1 sprains) may heal in a few weeks, while major surgeries take months. For example, ACL reconstruction often requires 6–9 months of rehab. We design personalized rehab: initially RICE and gentle exercises, then progressive loading and sport-specific training. Frequent follow-ups track healing milestones. Return-to-sport decisions are made cautiously, balancing healing with preventing re-injury."
                                        },
                                        {
                                            question: "When should I see a sports medicine specialist?",
                                            answer: "If an injury doesn’t improve with a few days of rest/ice, or if there’s instability, locking, or severe pain, see a specialist. Also, for recurrent injuries or if you are an athlete aiming to return to play quickly, early evaluation helps. Sports medicine doctors can provide on-field evaluation, advanced rehab strategies, and coordinate care with physical therapists. Early consults can accelerate recovery and reduce complications."
                                        },
                                        {
                                            question: "What risks or complications should I expect?",
                                            answer: "Complications depend on the injury. Swelling and stiffness are common initially; we manage them with therapy. Without proper rehab, injuries can become chronic or recur. Surgical risks (if surgery is needed) include infection and stiffness, which are minimized by modern techniques and early motion. We emphasize proper recovery and prevention to avoid long-term joint damage (e.g. chronic arthritis from repeated injuries)."
                                        },
                                        {
                                            question: "Do sports medicine doctors only treat athletes?",
                                            answer: "No. Sports medicine doctors treat anyone with a sports/exercise injury, from youth to seniors. We see recreational athletes, weekend warriors, and those injured at work or during fitness. Many people use sports medicine clinics for preventive care (e.g. physicals) and chronic pain management. Our advice on nutrition and training can benefit all active individuals."
                                        },
                                        {
                                            question: "What is a sports physical or pre-participation exam?",
                                            answer: "Many sports clinics offer physical exams for athletes before a season. These check vital signs, joints, and overall health to clear you for play. We look for risk factors (like uneven leg strength or high blood pressure) that could lead to injury and advise on how to address them."
                                        },
                                        {
                                            question: "How is sports medicine different from orthopedics?",
                                            answer: "Sports medicine is a subspecialty often within orthopedics, focusing on active people. It includes non-surgical treatments and rehabilitation along with surgery. An orthopedist might do joint replacement, whereas a sports medicine orthopedist is more likely to do a shoulder repair or tendon reconstruction for an athlete."
                                        },
                                        {
                                            question: "Is sports injury prevention offered?",
                                            answer: "Yes – we emphasize injury prevention through strength & conditioning programs, balance training, and nutrition. Programs like our injury prevention clinics can help athletes avoid common problems like ACL tears or stress fractures."
                                        },
                                        {
                                            question: "Why choose our clinic for sports injuries?",
                                            answer: "Dr. Sunku’s track record with professional athletes and sports teams means he understands the demands of sports injuries. We provide expert care from evaluation through return to play. Patients benefit from our comprehensive approach: accurate diagnosis, evidence-based treatments, and tailored rehab."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Sports Injury Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If you are dealing with a sports injury, recurring pain, reduced performance, or want a safe return-to-play plan, early treatment can speed recovery and prevent long-term issues. Consult Dr. Nitin Sunku, experienced orthopaedic and sports injury specialist in Bangalore, for expert sports medicine treatment, rehabilitation planning, and advanced injury care.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "knee-replacement" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Knee replacement is a highly effective treatment for severe knee arthritis and long-term joint damage that causes chronic pain, stiffness, and reduced mobility. When non-surgical treatments no longer provide relief, replacing the damaged joint surfaces can significantly improve comfort and movement.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Knee replacement is a proven solution for severe knee joint damage. In our clinic, we evaluate patients with chronic knee pain and advanced arthritis. Our goal is to relieve pain and improve mobility. Dr. Nitin Sunku offers both total and partial knee replacements using modern surgical techniques. Every plan starts with a thorough exam and X-ray/MRI to confirm the diagnosis. We tailor treatment to your needs—whether that means resurfacing a single compartment (partial replacement) or the entire knee. With Dr. Sunku’s sports-medicine background and fellowship training, patients regain function with a minimally invasive approach and expert aftercare.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Knee replacement may be recommended for patients with advanced joint damage and ongoing symptoms such as:
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Advanced Arthritis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">The most common indication for knee replacement is osteoarthritis, followed by rheumatoid or post-traumatic arthritis. Patients experience chronic knee pain (often less than 6 months) that worsens with activity, plus stiffness, swelling, and difficulty walking or climbing stairs.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Failed Conservative Treatment</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">When non-surgical treatments (medications, injections, or braces) no longer control pain, replacement is considered.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Deformity or Instability</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Severe arthritis can cause the knee to bow inward/outward or buckle. A knee replacement can correct alignment and restore stability.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Traumatic Joint Damage</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Complex fractures or ligament injuries that damage the joint may also require arthroplasty.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Limited Range of Motion</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Patients often cannot fully straighten or bend the knee due to pain and bone changes.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed">
                                        In summary, we treat end-stage knee damage characterized by constant pain and significant functional limitation. These patients typically have tried other treatments without relief and now need joint replacement to regain quality of life.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our approach to knee replacement emphasizes safety, precision, and patient-specific care:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Preoperative Workup</h3>
                                            <p className="text-gray-600 leading-relaxed">We perform a detailed clinical exam and order imaging (X-ray, possibly CT/MRI) to assess joint damage. We optimize any medical issues (cardiac clearance, diabetes control, etc.) before surgery, following guidelines.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Total vs. Partial Knee Replacement</h3>
                                            <p className="text-gray-600 leading-relaxed">Based on X-rays and symptoms, Dr. Sunku determines if total knee replacement (TKR) or unicondylar (partial) knee replacement (PKR) is best. TKR replaces all three compartments of the knee (medial, lateral, and patellofemoral). PKR replaces only the damaged compartment, preserving healthy bone in others. Partial replacements often suit younger patients with isolated arthritis.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Technique</h3>
                                            <p className="text-gray-600 leading-relaxed">We perform knee arthroplasty under spinal or general anesthesia. Dr. Sunku uses modern alignment techniques (manual or computer navigation, if available) and cemented or cementless implants. The procedure typically takes 1–2 hours. Osteophytes are removed and damaged cartilage/bone is replaced with metal and polyethylene implants.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Pain Management</h3>
                                            <p className="text-gray-600 leading-relaxed">We use multimodal anesthesia protocols (nerve blocks, spinal anesthesia) to reduce postoperative pain. This enables early mobility.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Postoperative Care</h3>
                                            <p className="text-gray-600 leading-relaxed">After surgery, patients are monitored overnight. DVT prophylaxis (blood thinners and compression devices) is started immediately. Physical therapy begins within 24 hours to promote walking with a walker or crutches. Patients usually stay in the hospital 1–3 days.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Patient-Specific Plans</h3>
                                            <p className="text-gray-600 leading-relaxed">We discuss cemented vs. cementless implants, and any implant choices. Our patient-first philosophy means we consider each patient’s age, activity level, and health when planning surgery.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s sports-med expertise and fellowship training bring a high level of precision to knee replacements. He serves as a former professional team physician, so he understands athletes’ recovery needs. Patients benefit from his experience in advanced arthroscopic and arthroplasty techniques. Our clinic emphasizes personalized care: we thoroughly explain options (total vs partial) and set realistic expectations. We also coordinate physical therapy and follow-up to ensure smooth recovery. Unlike generic centers, we highlight Dr. Sunku’s credentials and the clinic’s advanced implants. We emphasize trust, quality, and a track record of excellent outcomes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Recovery from knee replacement follows a staged rehab process:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">0–2 Days (Acute Phase)</h4>
                                            <p className="text-gray-600 text-sm">Patients begin walking with a walker or crutches within 24–48 hours. Early mobilization is safe and encouraged. Pain is managed with medications and ice.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">1–6 Weeks (Initial Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Physical therapy focuses on regaining knee range of motion (aiming for 0–90° flexion by 2 weeks) and quadriceps strengthening. Patients gradually increase distance walked. Wound care and precautions (no kneeling for a few weeks) are followed.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">6–12 Weeks (Advanced Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Many patients can walk unassisted by 6–8 weeks. We progress to weight-bearing exercises and stationary biking. Most daily activities (carrying groceries, light housework) are resumed by 3 months.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">3–6+ Months (Return to Function)</h4>
                                            <p className="text-gray-600 text-sm">By 3–6 months, patients typically have minimal pain and can do low-impact exercise (swimming, biking). Full recovery can take up to a year (per Cleveland Clinic), by which time patients may return to golf or brisk walking. High-impact sports are avoided. Follow-up visits ensure proper implant function and alignment.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Long-Term</h4>
                                            <p className="text-gray-600 text-sm">We monitor implant longevity. Modern knee prostheses often last 15–20 years. We counsel patients on lifelong joint health (weight management, low-impact exercise).</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we see knee replacement patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you are unsure which location to book, use the contact page and mention your pin code. Bring prior MRI or X-ray reports, a list of medicines, and comfortable clothing so the joint can be examined properly.
                                    </div>
                                </section>

                                <FAQ
                                    title="Knee Replacement FAQ"
                                    items={[
                                        {
                                            question: "What causes knee pain requiring replacement?",
                                            answer: "Severe knee pain usually stems from arthritis. The most common cause is osteoarthritis (wear-and-tear), followed by rheumatoid or post-traumatic arthritis. These conditions destroy cartilage, leading to constant pain, stiffness, and loss of mobility. Knee replacement is recommended when these symptoms persist despite medications and therapy."
                                        },
                                        {
                                            question: "What is the difference between total and partial knee replacement?",
                                            answer: "In a total knee replacement (TKR), the surgeon resurfaces all three compartments of the knee (inner, outer, and under kneecap) with metal and plastic components. In a partial knee replacement (PKR), only the diseased compartment is replaced, leaving healthy areas untouched. Partial replacements generally allow quicker recovery but are only suitable when arthritis is limited to one area. Dr. Sunku evaluates each knee and recommends the appropriate type based on X-rays and symptoms."
                                        },
                                        {
                                            question: "How do I prepare for knee replacement?",
                                            answer: "Preparation includes a medical check-up to ensure you are fit for surgery (blood tests, heart evaluation). Physical therapy “prehab” may be advised to strengthen leg muscles beforehand. You’ll need someone to help at home after surgery. Medication adjustments (e.g., stopping blood thinners) are planned by the doctor. Smoking cessation is recommended to improve healing."
                                        },
                                        {
                                            question: "What happens during surgery?",
                                            answer: "You will receive anesthesia (spinal or general). The surgeon will remove damaged bone and cartilage from the femur, tibia, and possibly patella. Artificial components (metal caps on femur and tibia, plastic spacer) are implanted. This reconstructs the knee’s surfaces. The procedure typically takes 1–2 hours, and the incision is closed with stitches or staples."
                                        },
                                        {
                                            question: "How long is recovery after knee replacement?",
                                            answer: "Most patients start walking with assistance in the hospital within 1–2 days. According to DHEE Hospitals, “complete recovery” and return to normal daily life usually take about 6–12 weeks. However, full strength and flexibility may continue improving for up to a year. We provide a rehab timeline to set expectations. Early mobility and dedicated therapy speed up recovery."
                                        },
                                        {
                                            question: "How long will the implant last?",
                                            answer: "Modern knee implants are highly durable. Studies and practice show that most last 15–20 years or more with normal use. Implant longevity depends on activity level and weight. Younger or more active patients may outlive their implants and need revision later. We discuss this in pre-surgery planning."
                                        },
                                        {
                                            question: "What are the risks and complications?",
                                            answer: "Risks include infection, blood clots (DVT), nerve injury, and stiffness. To prevent clots, patients are given blood thinners and encouraged to move early. Minor blood thinners and compression devices are standard. Some patients may have lingering numbness or minimal pain, but serious complications are uncommon with proper care. Our center follows strict protocols to minimize infection and complication rates."
                                        },
                                        {
                                            question: "Is knee replacement painful?",
                                            answer: "You will feel some pain immediately after surgery, but modern anesthesia and pain protocols make it manageable. Pain usually decreases significantly within days. By the time you leave the hospital, you may only need mild oral pain medications. Rehabilitation exercises actually help reduce pain faster by improving blood flow."
                                        },
                                        {
                                            question: "When can I start walking and driving?",
                                            answer: "Typically, patients can bear weight and start walking with support (walker or crutches) within 1–2 days post-op. Most people walk without crutches by 6–8 weeks. Driving is usually safe once strength and reflexes return—often around 4–6 weeks if the right knee was operated on (or 2–3 weeks if left knee), and you are off narcotic pain meds. Always confirm with your surgeon before driving."
                                        },
                                        {
                                            question: "Will I need physical therapy?",
                                            answer: "Yes, physical therapy is essential. A therapist will guide you through exercises to regain knee motion and strength. Early PT (in-hospital and outpatient) greatly improves outcomes. We ensure each patient has access to quality rehab services until full recovery."
                                        },
                                        {
                                            question: "How much does knee replacement cost?",
                                            answer: "Generally, knee replacement cost varies by implant type, anesthesia, and hospital stay. Patients should contact hospital billing for a detailed quote. Insurance often covers part of the procedure."
                                        },
                                        {
                                            question: "Why choose Dr. Sunku’s clinic for knee replacement?",
                                            answer: "Dr. Sunku’s orthopaedic expertise (board-certified, fellowship-trained) and sports medicine background provide a precision approach to knee replacement. He and his team use advanced techniques tailored to each patient. We also prioritize a quick recovery: early mobilization, pain management, and rehab support. Combined with patient education and follow-up, our outcomes rival those of top centers."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Knee Replacement Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If knee pain is affecting your mobility, sleep, or daily life, early evaluation can help determine the best treatment option. Consult Dr. Nitin Sunku, experienced orthopaedic specialist in Bangalore, for expert total knee replacement, partial knee replacement, and complete recovery guidance.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "hip-replacement" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        The hip is a large ball-and-socket joint, and when it is severely damaged, patients experience constant pain, stiffness, and difficulty walking or standing. Hip replacement surgery (also called hip arthroplasty) replaces the damaged joint surfaces with artificial components.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        In our practice, Dr. Nitin Sunku evaluates each patient carefully—considering X-rays and health status—to determine the best timing and type of hip replacement. Whether total or partial, our goal is to relieve pain and restore mobility using modern techniques. We emphasize a patient-first philosophy: Dr. Sunku will discuss all options, prepare you thoroughly before surgery, and guide you through rehabilitation so you can return to everyday activities with greater ease and confidence.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Hip replacement is primarily indicated for severe hip arthritis or injury. Common conditions include:
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Osteoarthritis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">The most frequent cause. Degenerative wear of the hip cartilage leads to chronic pain, stiffness, and grinding sensations in the hip. Patients report pain with weight-bearing and loss of motion.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Rheumatoid Arthritis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">An autoimmune condition causing joint inflammation and cartilage destruction. Over time, it can severely damage the hip joint.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Avascular Necrosis (AVN)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">A condition where the blood supply to the femoral head is disrupted, causing bone death and collapse. Young patients with AVN often need hip replacement.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Post-Traumatic Arthritis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Previous hip fractures or injuries can damage cartilage and lead to arthritis later on.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Childhood Hip Disorders & Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Conditions like hip dysplasia or Perthes disease can predispose to early arthritis. In elderly patients, a displaced femoral neck fracture may be treated with hip replacement if the bone cannot heal properly.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed">
                                        Symptoms prompting consideration of surgery include constant deep hip or groin pain, pain at night or rest, limp or difficulty with stairs, and inability to do normal activities despite conservative treatment. When such symptoms significantly impair life, hip replacement may be advised.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We follow a stepped approach: initial conservative care followed by surgical intervention when needed.
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Conservative Management</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">Before surgery, we may try:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Medications:</strong> Pain relievers (acetaminophen) and anti-inflammatories. However, long-term use is limited by side effects.</li>
                                                <li><strong>Lifestyle Changes:</strong> Weight loss, activity modification (avoiding high-impact activities), and use of walking aids.</li>
                                                <li><strong>Physical Therapy:</strong> Exercises to strengthen the hip muscles and improve flexibility.</li>
                                                <li><strong>Injections:</strong> Corticosteroid injections for temporary pain relief; hyaluronic acid or PRP injections in selected cases.</li>
                                            </ul>
                                            <p className="text-gray-600 leading-relaxed mt-2 text-sm italic">These measures can provide temporary relief but do not reverse joint damage. Surgery is recommended when pain is severe and daily function is impaired.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Hip Replacement Surgery Options</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">When non-surgical measures fail, hip arthroplasty is offered. Dr. Sunku performs:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Total Hip Replacement (THR):</strong> The entire hip joint is replaced. Both the acetabulum (hip socket) and femoral head (ball) are removed and replaced with an implant.</li>
                                                <li><strong>Partial Hip Replacement:</strong> Only the damaged part of the joint is replaced (e.g. femoral head), leaving the healthy socket intact. This is less common but may be used for specific fracture types.</li>
                                                <li><strong>Hip Resurfacing:</strong> An alternative in very active younger patients – a metal cap covers the femoral head and a metal liner is placed in the acetabulum. This preserves more bone.</li>
                                                <li><strong>Revision Hip Replacement:</strong> If a previous hip implant fails or wears out, a revision surgery is done to replace the old components.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Procedure Overview</h3>
                                            <p className="text-gray-600 leading-relaxed">Dr. Sunku may use muscle-sparing approaches and small incisions to reduce tissue trauma, potentially leading to faster recovery. The surgery is performed under anesthesia. The damaged bone and cartilage are removed and implants are placed. A sterile dressing closes the incision. Patients typically stay in hospital 1–3 days for monitoring.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s experience makes our clinic an excellent choice. He is fellowship-trained in sports medicine and arthroscopy, and serves as a professional team doctor. We emphasize his use of advanced surgical techniques and rigorous pre-op planning. Patients receive comprehensive care: from thorough medical evaluation to custom rehab programs. We stress a personalized approach—deciding between cemented/cementless implants or partial vs. total replacement based on your needs. Our focus is on long-term success, aiming for the new hip to last 15-20 years or more, and on minimizing post-op pain and complications.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Rehabilitation after hip replacement is critical for regaining mobility:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Immediate (Days 0–2)</h4>
                                            <p className="text-gray-600 text-sm">Patients begin gentle movement and walking with a walker or crutches, usually on the day of surgery or next day. Early motion prevents stiffness and clots.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Weeks 1–6 (Initial Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Physical therapy focuses on regaining motion (flexion/extension) and core/leg strengthening. Pain and swelling gradually decrease. Most patients walk with a cane or without assistance by 4–6 weeks.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Months 2–3 (Progressive Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Full weight-bearing is achieved. Patients increase activity, such as walking outdoors and climbing stairs. Low-impact exercises (swimming, cycling) are introduced.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Months 3–6 (Advanced Recovery)</h4>
                                            <p className="text-gray-600 text-sm">Most patients resume normal daily activities with minimal pain. By 3 months, many return to fitness routines (with surgeon’s guidance). Full recovery (including maximum strength and flexibility) often continues up to 6–12 months.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Long-Term (6+ months)</h4>
                                            <p className="text-gray-600 text-sm">We encourage continued exercise (hip strengthening, low-impact sports) to maximize function. Periodic check-ups ensure the implant remains stable.</p>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we consult hip replacement patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you’re unsure which location to choose, simply reach out via the contact page with your pin code and the nature of your requirement. Please carry any previous MRI or X-ray reports, a list of current medications, and wear comfortable clothing to allow for a proper joint examination.
                                    </div>
                                </section>

                                <FAQ
                                    title="Hip Replacement FAQ"
                                    items={[
                                        {
                                            question: "What is hip replacement surgery?",
                                            answer: "Hip replacement (arthroplasty) is an operation that replaces the damaged hip joint surfaces with artificial implants. It’s done when arthritis or injury destroys the joint. The procedure restores smoother movement and reduces pain."
                                        },
                                        {
                                            question: "Who needs a hip replacement?",
                                            answer: "Candidates are patients with severe hip pain and disability due to conditions like osteoarthritis, rheumatoid arthritis, avascular necrosis, or certain hip fractures. Surgery is considered when non-surgical treatments fail to provide relief and quality of life is significantly affected."
                                        },
                                        {
                                            question: "What types of hip replacement are there?",
                                            answer: "The main options are total hip replacement (both ball and socket replaced) and partial hip replacement (only one side). Hip resurfacing (a specialized metal-on-metal procedure) may be offered for younger, active patients. Dr. Sunku will recommend the best option based on your hip damage and lifestyle."
                                        },
                                        {
                                            question: "How do I prepare for hip replacement surgery?",
                                            answer: "Preoperative preparations include a medical check-up (blood tests, cardiac clearance) to ensure fitness for surgery. You may need to stop certain medications (especially blood thinners). Exercise to strengthen leg muscles (as advised by PT) can help. Smoking cessation and nutritional optimization are also important. Your surgical team will provide detailed instructions pre-surgery."
                                        },
                                        {
                                            question: "What happens during surgery?",
                                            answer: "The surgery usually takes 1–2 hours. Under anesthesia, the surgeon makes an incision over the hip, removes the damaged bone and cartilage, and implants metal/ceramic components with a plastic liner. The muscles are carefully handled to minimize trauma. At the end, the incision is closed and a dressing applied."
                                        },
                                        {
                                            question: "What is recovery like after hip replacement?",
                                            answer: "Most patients start moving within hours of surgery. Pain is managed with medications, and physical therapy begins immediately. Generally, patients walk with assistance in 1–2 days and can do most daily activities by 6–12 weeks. Full recovery, including maximum strength, often takes 6–12 months. We provide a rehabilitation plan and monitor progress closely."
                                        },
                                        {
                                            question: "How long do hip implants last?",
                                            answer: "Modern hip prostheses are very durable. Many studies show implants lasting 15–20 years or more with normal activity. Longevity depends on factors like patient age, weight, activity level, and implant type. Regular follow-up X-rays help assess implant wear over time."
                                        },
                                        {
                                            question: "What are the risks of hip replacement?",
                                            answer: "Hip replacement is generally safe, but some risks include infection, blood clots, dislocation, and prosthetic loosening. We take precautions (antibiotics, blood thinners, early mobilization) to minimize these risks. Serious complications are rare when following recommended guidelines."
                                        },
                                        {
                                            question: "When can I start walking and driving?",
                                            answer: "Most patients begin walking with a walker or crutches the same or next day after surgery. Walking without assistance usually occurs around 4–6 weeks. Driving is typically allowed about 4–6 weeks post-op once leg strength and reaction time have recovered, and you are off strong pain meds. Always confirm with your surgeon."
                                        },
                                        {
                                            question: "Will I need physical therapy?",
                                            answer: "Yes, physical therapy is a crucial part of recovery. Therapists help you regain hip motion and strengthen muscles. They also teach safe movement and progression of exercises. Adherence to PT significantly improves outcomes."
                                        },
                                        {
                                            question: "How much does hip replacement cost?",
                                            answer: "Exact cost is not listed on the site. It varies by hospital, implant type, and insurance. In Bangalore, total hip replacement costs are generally hospital-dependent; patients should contact billing for estimates. (In many cases, insurance covers medically necessary joint replacements.)"
                                        },
                                        {
                                            question: "Why choose our clinic for hip replacement?",
                                            answer: "Dr. Sunku’s fellowship training and experience as a team physician mean he provides expert, state-of-the-art care. We focus on individualized plans and use advanced techniques to minimize tissue damage. Our emphasis on thorough diagnosis, clear communication, and coordinated rehab helps ensure the best possible outcomes."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Hip Replacement Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If hip pain is affecting your mobility, sleep, or daily life, early evaluation can help determine the best treatment option. Consult Dr. Nitin Sunku, experienced orthopaedic specialist in Bangalore, for expert total hip replacement, partial hip replacement, and complete recovery guidance.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "shoulder-care" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Shoulder pain can significantly limit your daily life, whether from a sports injury, work strain, or arthritis. We offer advanced shoulder care to get you moving again. Whether it’s a rotator cuff tear, labrum injury, shoulder dislocation, or adhesive capsulitis (frozen shoulder), Dr. Nitin Sunku evaluates your condition with a thorough exam and, if needed, imaging like MRI.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        He then recommends a personalized plan – often starting with rehabilitation and injections, and using minimally invasive arthroscopy if surgery is needed. The goal is clear: relieve pain, restore range of motion, and rebuild shoulder strength so you can return to the activities you love with confidence.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Rotator Cuff Tears</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Tears of the rotator cuff tendons (from injury or degeneration) cause deep shoulder pain (often worse at night) and weakness with overhead lifting. Athletes and older adults frequently suffer these tears.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Shoulder Impingement (Bursitis/Tendinitis)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">When bone spurs or inflamed tissue pinch the rotator cuff tendons (common in overhead athletes and laborers), it causes pain with reaching and lifting.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Shoulder Instability/Dislocation</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Repeated shoulder dislocations or subluxations (partial dislocations) after trauma lead to a feeling of “looseness,” pain, and risk of re-injury. Conditions like Bankart lesions require specific treatment.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Frozen Shoulder (Adhesive Capsulitis)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">A stiff, inflamed shoulder joint capsule severely limits motion and causes pain. Often gradual in onset, it can develop without clear cause and may follow an injury.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Labral Tears & Biceps Tendon Injuries</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Tears of the glenoid labrum (such as SLAP tears or Bankart lesions) cause pain, clicking, or a sense of catching. Issues with the biceps tendon (inflammation, tears) cause anterior shoulder pain and mechanical symptoms when bending the elbow or lifting.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Osteoarthritis & Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Wear of the cartilage over time leads to chronic grinding pain, stiffness, and decreased strength, particularly in older patients. Complex fractures (e.g. of the humeral head) are also managed under shoulder care if they affect joint function.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed">
                                        Patients often report pain (front/side of shoulder, worse at night), stiffness (difficulty lifting arm or reaching behind), weakness (especially overhead activities), swelling, and decreased range of motion. In summary, we treat any shoulder pain or dysfunction that impairs daily life or performance. Early referral is recommended if conservative care fails to relieve symptoms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Our strategy ranges from conservative management to advanced surgery:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Conservative Care</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">We initially pursue non-operative treatments for many shoulder issues:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Physical Therapy:</strong> A mainstay for rotator cuff injuries, impingement, and frozen shoulder. Therapy focuses on stretching, strengthening rotator cuff and scapular muscles, and correcting posture.</li>
                                                <li><strong>Medications and Injections:</strong> NSAIDs (like ibuprofen) reduce pain/inflammation. Corticosteroid injections can relieve bursitis or capsulitis symptoms. Recently, biologic injections (platelet-rich plasma) may be used selectively.</li>
                                                <li><strong>Activity Modification:</strong> We advise avoiding aggravating activities (heavy lifting, repetitive overhead work) until improvement. Bracing or slings may be used temporarily after injuries.</li>
                                                <li><strong>Rest and Ice:</strong> Short periods of rest and ice application help initial acute injury stages.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Treatments</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">If non-surgical care fails or injury is severe, we offer procedures:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Arthroscopic Rotator Cuff Repair:</strong> For tears causing significant symptoms. Small incisions allow reattachment of torn tendons using suture anchors, with less pain than open surgery.</li>
                                                <li><strong>Arthroscopic Decompression:</strong> To treat impingement, removing inflamed bursa and smoothing bone spurs on the acromion.</li>
                                                <li><strong>Labrum Repair or Stabilization:</strong> Arthroscopic suturing of torn labrum (e.g., for SLAP tears) to restore stability.</li>
                                                <li><strong>Capsular Release:</strong> For frozen shoulder, releasing tight capsule tissue arthroscopically to regain motion.</li>
                                                <li><strong>Biceps Tenotomy/Tenodesis:</strong> Procedures to alleviate chronic biceps tendon pain by cutting or re-anchoring the tendon.</li>
                                                <li><strong>Shoulder Arthroplasty:</strong> In advanced arthritis or complex fractures, partial or total shoulder replacement implants restore joint surfaces.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Technique and Patient Care</h3>
                                            <p className="text-gray-600 leading-relaxed">Dr. Sunku uses minimally invasive arthroscopy whenever possible, which typically leads to faster recovery and smaller scars. We coordinate with physiotherapists and trainers to ensure complete rehabilitation. If issues like bone health or metabolism contribute to shoulder problems, we involve appropriate specialists. We clearly explain each diagnosis and treatment option, so patients understand their plan and expected outcomes.</p>
                                        </div>
                                    </div>
                                </section>
                                
                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku’s specialized training is a key advantage: he completed a sports-medicine fellowship and has experience as a professional team orthopedic doctor. This implies high technical skill and understanding of athletes’ needs. We emphasize his commitment to patient communication and individualized care plans. Unlike generic clinics, we highlight his use of advanced imaging only when needed (avoiding unnecessary tests). We also tailor rehab, not just surgery – for example, focusing on regaining motion in frozen shoulder patients. The clinic’s modern approach and Dr. Sunku’s expertise instill trust and confidence.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Recovery phases after shoulder treatment (especially surgery) are critical:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">0–2 Days (Immediate Post-Op)</h4>
                                            <p className="text-gray-600 text-sm">If surgery is done, patients usually go home the same day or next morning. A sling is often used for comfort and protection. Gentle hand, wrist, and elbow movements begin immediately to maintain circulation.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">1–4 Weeks (Early Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Pain and inflammation decrease. Under therapist guidance, patients start gentle passive and then active-assisted shoulder exercises to prevent stiffness. For example, pendulum exercises and table slides. Goals: achieve pain-free passive motion by end of this phase.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">4–8 Weeks (Intermediate Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Sling is typically discontinued. Patients gradually begin active shoulder movements and light strengthening exercises (e.g., isometric holds, light resistance bands). Daily activities (e.g. feeding yourself) become easier.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">3–6 Months (Advanced Rehab)</h4>
                                            <p className="text-gray-600 text-sm">Progressive strengthening and return to functional tasks. By 3 months, many patients have near-normal range of motion. More strenuous activities (sports, heavy lifting) are reintroduced gradually, usually by 4–6 months.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">6+ Months (Full Recovery)</h4>
                                            <p className="text-gray-600 text-sm">Patients achieve maximal strength and flexibility. Ongoing home exercises maintain gains. Dr. Sunku continues follow-ups to monitor healing and ensure no late issues arise.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">Evidence supports early motion after shoulder repair and structured therapy for best outcomes. This timeline provides realistic expectations to patients.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we consult shoulder care patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you’re unsure which location to choose, you can use the contact page and share your pin code along with your requirement—whether it’s an urgent fracture review, a second opinion, or a routine arthroscopy follow-up. Please bring any previous MRI or X-ray reports, a list of current medications, and wear comfortable clothing to ensure a proper joint examination.
                                    </div>
                                </section>

                                <FAQ
                                    title="Shoulder Care FAQ"
                                    items={[
                                        {
                                            question: "What causes shoulder pain requiring specialist care?",
                                            answer: "Common causes include rotator cuff injuries, impingement (tendonitis/bursitis), shoulder instability or dislocation, adhesive capsulitis (frozen shoulder), and arthritis. Sports injuries (like a fall on an outstretched arm) can tear the rotator cuff or labrum. Repetitive overhead activity (swimming, tennis, or painting) can lead to impingement. If shoulder pain persists despite rest and treatment, or if motion is severely limited, a shoulder specialist should be consulted."
                                        },
                                        {
                                            question: "How are shoulder problems diagnosed?",
                                            answer: "We start with a detailed history and physical exam: Dr. Sunku will perform specific maneuvers (e.g. lift tests for rotator cuff, stability tests for labrum) and observe your range of motion. Imaging such as X-rays or ultrasound is done to evaluate bone and soft tissue. MRI may be used if a tear or deeper pathology is suspected. This combined approach pinpoints issues like tendon tears or impingement."
                                        },
                                        {
                                            question: "When is surgery necessary for shoulder pain?",
                                            answer: "Many shoulder injuries improve without surgery. For example, partial rotator cuff tears and impingement often respond to therapy and injections. Surgery is considered if pain remains significant or function is impaired after conservative treatment, or if there is a large tear or recurrent dislocation. For instance, a complete rotator cuff tear that doesn’t heal on its own will likely need repair. Frozen shoulder may require surgery only if it fails to improve with months of therapy."
                                        },
                                        {
                                            question: "What are treatment options?",
                                            answer: "Non-surgical treatments include rest, NSAIDs, physical therapy, and steroid injections. If needed, we perform arthroscopic surgeries: e.g., rotator cuff repair, labrum repair, subacromial decompression (for impingement), or capsular release. In advanced arthritis, partial or total shoulder replacement may be done. Each procedure is minimally invasive when possible. Detailed rehab follows all treatments."
                                        },
                                        {
                                            question: "How long does recovery take?",
                                            answer: "Recovery varies by treatment. After arthroscopic repair, expect sling use for 4–6 weeks, then several months of rehab. Most patients regain daily function by 3–4 months and return to sports by 5–6 months. Recovery is slower for major surgeries (e.g., complete rotator cuff repair, arthroplasty), possibly 6–12 months to full strength. Dr. Sunku will provide a personalized timeline based on your procedure and progress."
                                        },
                                        {
                                            question: "What are the risks of shoulder treatments?",
                                            answer: "All procedures carry some risk. For injections: temporary soreness or infection risk. For surgery: infection, bleeding, stiffness, or nerve irritation. Specific risks include incomplete pain relief or re-tear of a repaired tendon. Dislocation is rare if rehab is followed. Our center follows evidence-based protocols (antibiotics, blood clot prevention) to minimize complications."
                                        },
                                        {
                                            question: "Is shoulder surgery painful?",
                                            answer: "Post-op discomfort is common but well-managed. We use modern anesthesia and nerve blocks, plus oral pain medications afterward. Because arthroscopic incisions are small, many patients report less pain and faster recovery than with open surgery."
                                        },
                                        {
                                            question: "Will I need physical therapy?",
                                            answer: "Yes, rehabilitation is essential. A physical therapist will guide you through exercises to gradually restore motion and strength. Regular PT greatly improves outcomes in conditions like rotator cuff tears and frozen shoulder."
                                        },
                                        {
                                            question: "What activities can I do after recovery?",
                                            answer: "Most patients can return to normal activities (driving, light sports, household tasks) after recovery. Low-impact sports (swimming, cycling) are usually fine. High-impact or heavy overhead activities should be resumed cautiously and often avoided if you have repaired rotator cuff or replaced shoulder. Dr. Sunku will advise on safe return to your specific activities."
                                        },
                                        {
                                            question: "How much does shoulder treatment cost?",
                                            answer: "Costs vary by treatment (e.g. injections vs. surgery) and hospital charges. Patients are advised to check with the hospital or insurance for estimates."
                                        },
                                        {
                                            question: "Why choose Dr. Sunku for my shoulder?",
                                            answer: "Dr. Sunku’s fellowship training in sports orthopedics and experience as a team doctor mean he brings advanced skill to shoulder care. He uses evidence-based treatments and provides personal attention. Patients benefit from his comprehensive approach: accurate diagnosis, tailored treatment, and guided rehab. We prioritize patient education and a transparent plan, which fosters trust and better outcomes."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Shoulder Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If shoulder pain is affecting your mobility, sleep, or daily life, early evaluation can help determine the best treatment option. Consult Dr. Nitin Sunku, experienced orthopaedic specialist in Bangalore, for expert shoulder treatment and complete recovery guidance.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "bone-fracture" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Broken bones can happen in accidents, falls, sports, or simply from weakened bone. When a fracture occurs, prompt evaluation and proper treatment are essential to ensure healing and restore function.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        Our orthopedic team, led by Dr. Nitin Sunku, provides comprehensive fracture care for all ages: from applying casts and splints for simple fractures to performing surgical fixation (plates, screws, rods) for more complex breaks. We begin with careful assessment (physical exam and X-rays) to classify the fracture. Then we choose the least invasive effective treatment. Our goal is stable healing and early rehabilitation so patients can return to normal activities as quickly and safely as possible.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Acute Traumatic Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">From high-energy injuries (car accidents, falls, sports impact). Symptoms include immediate severe pain, deformity (bone out of place), swelling, and inability to bear weight. These often require prompt realignment and stabilization.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Stress Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Tiny cracks from repetitive stress (common in runners or due to osteoporosis). Symptoms: gradual-onset pain worsened by weight-bearing and relieved by rest.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Pediatric Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Children’s bones can bend and partially break (Greenstick, Buckle). They may not deform fully, but cause pain and limping. Growth plate injuries (salter fractures) also occur in kids.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Open (Compound) & Closed Fractures</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Open fractures pierce the skin. This is a medical emergency with high infection risk requiring immediate surgery. Closed fractures break without skin breach, often treated with a cast or traction if aligned well.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed">
                                        Patients primarily report intense pain at the fracture site, swelling, bruising, visible deformity or bone fragments, and an inability to use the limb normally. Stable (non-displaced) fractures may heal with immobilization, whereas displaced fractures often need reduction (resetting). Neurologic symptoms (numbness) or compromised circulation require urgent care. Our focus is on timely care to prevent complications like malunion (healing in wrong position) or infection.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        We tailor the treatment to the fracture type and patient factors:
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Initial Assessment</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">All patients receive a thorough evaluation: exam, neurovascular check (pulse, sensation), and imaging (X-rays, CT if needed). Open fractures receive emergency antibiotics and a tetanus shot.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Conservative Management</h3>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Immobilization:</strong> Many fractures (e.g., stable wrist, ankle, rib) heal in a cast or splint. We carefully mold the cast to align bone fragments. Patients are given instructions to care for the cast and watch for signs of complications.</li>
                                                <li><strong>Closed Reduction:</strong> If a bone is displaced but can be realigned without surgery, we perform a closed reduction. This involves numbing the area (or sedation) and manually setting the bone, then casting or splinting to hold it. Common for simple arm or leg fractures.</li>
                                                <li><strong>Traction:</strong> In some cases (especially femur fractures in children), traction may be used to gently align bones over days.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Treatment</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">Indications include open fractures, unstable fractures, or those that cannot be maintained in a cast. Procedures include:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Open Reduction & Internal Fixation (ORIF):</strong> The surgeon opens the site and fixes the bone with plates, screws, or rods. We use various implant options (locking plates, intramedullary nails) based on fracture location.</li>
                                                <li><strong>Intramedullary Nailing:</strong> Long bones like the femur or tibia may be stabilized by a metal rod inside the bone marrow canal.</li>
                                                <li><strong>External Fixation:</strong> In severe open fractures or polytrauma, external pins and frames stabilize the bone temporarily.</li>
                                                <li><strong>Bone Grafting:</strong> For complex fractures or nonunions, we may use bone grafts (from patient or donor) to promote healing.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Pediatric Fracture Care</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">We respect children’s growth plates. Many pediatric fractures can be casted, but some (like displaced growth plate fractures) may need pinning with minimal hardware.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Post-Treatment Care & Follow-Up</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">All patients get pain management (medications, ice) and instructions on weight-bearing limits. We involve physiotherapy early: even in casts, gentle range-of-motion exercises for nearby joints (e.g. shoulder/elbow) are encouraged. Frequent X-rays check alignment and healing. If healing is delayed, we intervene with bone stimulation or surgery if needed.</p>
                                        </div>
                                    </div>
                                </section>
                                
                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Sunku is a seasoned orthopedic surgeon whose expertise includes trauma and sports injuries. We emphasize our comprehensive trauma care: From the ER on, we provide rapid assessment, stabilization, and definitive treatment. Patients appreciate our patient-first approach: we explain options clearly (e.g., implant vs. cast) and set realistic healing timelines. Unlike facilities focused solely on sports injuries, we highlight trauma and pediatric fracture care as specialties. We also stress convenience: immediate X-ray access and same-day splinting. Importantly, we underscore a commitment to rehabilitation and preventing complications.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Fracture healing is progressive and we help guide patients through each phase:
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Weeks 0–2 (Initial Healing)</h4>
                                            <p className="text-gray-600 text-sm">After stabilization (cast/surgery), patients keep the area elevated and mobile joints (like fingers/ankle) moving to prevent stiffness. Pain is managed with medication. No weight-bearing (if leg or spine fracture) is allowed initially; upper limb fractures allow some use depending on doctor’s advice.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Weeks 3–6 (Early Consolidation)</h4>
                                            <p className="text-gray-600 text-sm">Bone healing begins. X-rays at 4–6 weeks assess callus formation. For surgically fixed fractures, gentle physical therapy starts (e.g., isometric muscle exercises). For cast patients, the cast may be adjusted or replaced as swelling decreases.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Weeks 6–12 (Intermediate Healing)</h4>
                                            <p className="text-gray-600 text-sm">Fracture callus solidifies. Partial weight-bearing (toe-touch to partial) is often permitted for lower limb fractures. Physical therapy intensifies: range of motion and light strength exercises are added (e.g., underwater walking, resistance bands).</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">3–6 Months (Late Healing)</h4>
                                            <p className="text-gray-600 text-sm">Most fractures have bone union by this stage, depending on severity. Full weight-bearing is usually allowed for leg fractures. For upper limb, the cast/brace is typically off. Strengthening and functional rehab continue, focusing on full return to activities. Hardware (if used) stays unless causing irritation.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">6+ Months (Full Recovery)</h4>
                                            <p className="text-gray-600 text-sm">Pain and swelling should be minimal. Patients regain pre-injury strength through advanced exercises (even light sports). We schedule follow-ups to ensure no late complications (like malunion).</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">This schedule is consistent with fracture healing guidelines: for example, pediatric fractures heal faster, while lower limb fractures typically take 3–6 months to heal fully.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we consult bone fracture patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you’re unsure which location to choose, you can reach out via the contact page and share your pin code along with your requirement—whether it’s an urgent fracture evaluation, a second opinion, or a routine follow-up. Please carry any previous MRI or X-ray reports if you have them.
                                    </div>
                                </section>

                                <FAQ
                                    title="Bone Fracture FAQ"
                                    items={[
                                        {
                                            question: "How are bone fractures diagnosed?",
                                            answer: "If you have trauma, doctors perform a physical exam (checking for deformity, swelling, and pulses) and obtain X-rays of the suspected area. Occasionally CT or MRI is used for complex fractures (e.g. joint involvement or small bones). Delaying treatment if a break is suspected can worsen outcomes, so immediate evaluation is best."
                                        },
                                        {
                                            question: "What are closed vs. open fractures?",
                                            answer: "A closed fracture means the bone breaks but skin remains intact. An open (compound) fracture means bone pierces the skin, creating a wound. Open fractures require emergency surgery to clean and fix the bone due to high infection risk."
                                        },
                                        {
                                            question: "How long does a fracture take to heal?",
                                            answer: "It varies: most simple upper limb fractures heal in 6–8 weeks. Lower limb fractures (tibia, femur) often need 3–6 months. Weight-bearing bones (hip, spine) also take longer. Children heal faster (often within 4–6 weeks). Healing time depends on bone, age, nutrition, and stability of fixation."
                                        },
                                        {
                                            question: "When is surgery needed for a fracture?",
                                            answer: "Surgery is indicated for displaced fractures (bone ends not aligning), open fractures (skin broken), unstable fractures, multiple fragments, or when non-operative methods fail. For example, many wrist fractures can be casted, but a severely displaced forearm fracture will need plating. Surgeon decision is based on X-rays and exam."
                                        },
                                        {
                                            question: "What is closed reduction?",
                                            answer: "A closed reduction is a non-surgical procedure where the physician realigns a broken bone by manipulation, then applies a cast or splint. It is done under pain control (sometimes sedation). It works well for some displaced fractures (like a mid-arm break) if alignment is maintained."
                                        },
                                        {
                                            question: "What implants do you use for fixation?",
                                            answer: "We use standard orthopedic implants: stainless steel or titanium plates, screws, intramedullary rods (nails) for long bones, and external fixators for open or complex cases. We choose based on fracture type and patient needs."
                                        },
                                        {
                                            question: "Can fractures get infected?",
                                            answer: "Yes, especially open fractures. Infection risk is why open breaks get prompt surgery and IV antibiotics. Closed fractures have much lower risk. If infection occurs, additional surgery may be needed to remove infected tissue and hardware."
                                        },
                                        {
                                            question: "What about nonunion or delayed healing?",
                                            answer: "Rarely, fractures don’t heal on schedule. If healing stalls, we investigate (malalignment, blood supply issues) and may perform bone grafting or adjust fixation. Nutrition and lifestyle (e.g. avoid smoking) also affect healing."
                                        },
                                        {
                                            question: "When can I bear weight or remove the cast?",
                                            answer: "This depends on the fracture. For example, a non-weight-bearing cast on a tibia might be in place for 6–10 weeks. We gradually increase weight-bearing based on X-rays showing healing. Typically, casts/splints are removed when X-rays confirm sufficient healing (often ~6 weeks for simple arm fractures, 8+ weeks for leg fractures)."
                                        },
                                        {
                                            question: "Will hardware need to be removed?",
                                            answer: "Most of the time, plates and screws can stay permanently if they are comfortable. However, in children or if hardware causes irritation, we may remove them after bone healing (usually at least 1–2 years later). It’s not routine unless needed."
                                        },
                                        {
                                            question: "Why choose our clinic for fracture care?",
                                            answer: "Dr. Sunku is skilled in orthopedic trauma care. We emphasize quick, accurate treatment and follow evidence-based protocols. Our multidisciplinary team ensures smooth recovery and close follow-up, which distinguishes us from generalists."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Bone Fracture Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If you suspect a fracture or require specialized trauma care, prompt evaluation is essential for proper healing. Consult Dr. Nitin Sunku, experienced orthopaedic specialist in Bangalore, for expert fracture treatment, casting, and advanced surgical care.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : service.slug === "spine-care" ? (
                            <>
                                <section className="space-y-6">
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        The spine plays a vital role in supporting the body, maintaining posture, and protecting the spinal cord. When spinal problems develop, they can cause persistent back pain, nerve irritation, stiffness, and reduced mobility that interfere with everyday life. Spine conditions may arise from aging, injury, degenerative diseases, or poor posture.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        At our clinic, Dr. Nitin Sunku provides comprehensive spine care focused on accurate diagnosis and personalized treatment. From conservative therapies such as physiotherapy and medication to advanced surgical solutions when necessary, our goal is to relieve pain, restore mobility, and improve long-term spinal health. Every treatment plan is tailored to the patient’s condition, lifestyle, and recovery goals.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <CheckCircle className="h-8 w-8 text-primary" />
                                        Common Conditions or Symptoms Treated
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Spine problems can affect different areas of the back and may range from mild discomfort to severe nerve compression that affects movement and quality of life.
                                    </p>
                                    <div className="grid gap-4">
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Herniated Disc (Slipped Disc)</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Occurs when the soft inner portion of a spinal disc pushes through the outer layer and presses on nearby nerves. This can cause pain, numbness, or weakness in the arms or legs.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Sciatica</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Pain that travels along the sciatic nerve, usually starting in the lower back and radiating down the leg. It commonly occurs when a disc herniation or bone spur compresses a nerve in the spine.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Degenerative Disc Disease</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">As people age, the discs between the vertebrae gradually lose flexibility and cushioning. This condition can lead to chronic back pain and stiffness.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Spinal Stenosis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Occurs when the spaces within the spine narrow, placing pressure on the spinal cord or nerves. It often causes pain, numbness, and difficulty walking.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Spondylolisthesis</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Occurs when one vertebra slips forward over another, potentially compressing spinal nerves and causing pain or instability.</p>
                                        </div>
                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                            <h4 className="font-bold text-gray-900 mb-2">• Muscle Strain and Ligament Injury</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">Sudden movements, heavy lifting, or poor posture can strain the muscles and ligaments supporting the spine.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-700 leading-relaxed font-bold">Common Symptoms That Require Evaluation</p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Patients typically seek spine care when symptoms begin to affect daily comfort, mobility, or quality of life. Common signs include persistent lower back or neck pain, pain that radiates into arms or legs, numbness/weakness in limbs, difficulty standing/walking, or restricted movement. Ignoring these can lead to progression. Early evaluation allows for more effective management, often avoiding complex treatments later.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Treatment Approach / Procedures Offered
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Spine treatment usually begins with non-surgical therapies aimed at relieving pain and improving spinal stability. Surgery is considered only when conservative treatments fail to provide relief.
                                    </p>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Conservative Treatments</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">Many spine conditions can be managed effectively with non-surgical methods, including:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Medication:</strong> Anti-inflammatory medications and pain relievers help reduce inflammation and relieve discomfort.</li>
                                                <li><strong>Physical Therapy:</strong> Physiotherapy focuses on strengthening the muscles that support the spine, improving flexibility, and correcting posture.</li>
                                                <li><strong>Lifestyle and Ergonomic Modifications:</strong> Improving sitting posture, adjusting workstations, and practicing proper lifting techniques can significantly reduce spinal strain.</li>
                                                <li><strong>Spinal Injections:</strong> Targeted injections may help reduce inflammation around spinal nerves and relieve pain.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-primary mb-3">Surgical Treatments</h3>
                                            <p className="text-gray-600 leading-relaxed mb-2">When symptoms persist despite conservative care or when nerve compression causes significant weakness or disability, surgery may be recommended:</p>
                                            <ul className="list-disc pl-5 text-gray-600 space-y-2">
                                                <li><strong>Discectomy:</strong> Removal of a portion of a herniated disc that is pressing on a nerve.</li>
                                                <li><strong>Spinal Decompression Surgery:</strong> Relieves pressure on spinal nerves by removing bone or tissue compressing them.</li>
                                                <li><strong>Spinal Fusion:</strong> Stabilizes the spine by joining two or more vertebrae together.</li>
                                                <li><strong>Minimally Invasive Spine Surgery:</strong> Advanced techniques allowing smaller incisions, reduced tissue damage, and faster recovery.</li>
                                            </ul>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed text-sm italic mt-2">
                                            Dr. Nitin Sunku carefully evaluates each patient’s condition and recommends the most appropriate treatment plan based on clinical findings and imaging results.
                                        </p>
                                    </div>
                                </section>
                                
                                <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                        <ShieldCheck className="h-8 w-8 text-primary" />
                                        Why Choose Our Clinic
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Dr. Nitin Sunku has extensive experience in diagnosing and managing spine conditions affecting the neck and lower back. Every patient receives a customized care plan tailored to their symptoms and activity level. Treatment focuses not only on relieving pain but also on strengthening the spine and preventing recurrence. All treatments follow modern orthopedic guidelines and proven clinical techniques. Recovery programs are designed to restore mobility and help patients safely return to their daily activities.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <Clock className="h-8 w-8 text-primary" />
                                        Recovery and Rehabilitation Overview
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Recovery from spine treatment varies depending on the condition and the type of treatment performed.
                                    </p>
                                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-8">
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Initial Phase (First Few Weeks)</h4>
                                            <p className="text-gray-600 text-sm">During the early phase, the focus is on pain relief and gentle movement. Patients may begin simple stretching exercises under medical guidance.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Early Rehabilitation (4–8 Weeks)</h4>
                                            <p className="text-gray-600 text-sm">Physical therapy programs help strengthen the muscles surrounding the spine and improve posture.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Functional Recovery (2–3 Months)</h4>
                                            <p className="text-gray-600 text-sm">Patients gradually resume daily activities with improved mobility and reduced pain. Core strengthening exercises are introduced to stabilize the spine.</p>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-sm" />
                                            <h4 className="font-bold text-gray-900 mb-1">Long-Term Recovery (3–6 Months)</h4>
                                            <p className="text-gray-600 text-sm">Most patients return to normal routines during this stage. Maintaining proper posture, regular exercise, and ergonomic habits helps prevent recurrence of spine problems.</p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-gray-500 text-sm">Recovery timelines vary depending on the severity of the condition and the patient’s commitment to rehabilitation.</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                        <MapPin className="h-8 w-8 text-primary" />
                                        Where we consult spine care patients
                                    </h2>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Raghava Multispeciality</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">Centred at Attibele, on Sarjapura–Attibele Road. Ideal for people in Anekal, Chandapura, Jigani, Bommasandra, and Electronic City.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                In-person Reviews <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                        <div className="p-6 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                                            <h4 className="font-bold text-gray-900 mb-2">Health Nest Hospital</h4>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4">HSR Layout (24th Main, Sector 2). Convenient for HSR, Koramangala, BTM Layout, and Bellandur residents.</p>
                                            <Link href="/contact" className="text-primary font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                                Follow-up Visits <ArrowRight className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl text-sm text-gray-600 leading-relaxed italic">
                                        If you’re unsure which location to choose, you can use the contact page and share your pin code along with your requirement. Please bring any previous MRI or X-ray reports, a list of current medications, and wear comfortable clothing to allow for a proper examination.
                                    </div>
                                </section>

                                <FAQ
                                    title="Spine Care FAQ"
                                    items={[
                                        {
                                            question: "What causes spine problems?",
                                            answer: "Spine problems can develop due to aging, injury, poor posture, repetitive strain, or degenerative changes in the discs and joints. Conditions such as herniated discs, spinal stenosis, and arthritis can lead to chronic back or neck pain. Lifestyle factors, including prolonged sitting and lack of physical activity, can also contribute to spinal discomfort."
                                        },
                                        {
                                            question: "When should I see a doctor for back pain?",
                                            answer: "You should consult a doctor if back pain persists for more than a few weeks, worsens over time, or is accompanied by symptoms such as numbness, weakness, or difficulty walking. Early evaluation helps identify the underlying cause and allows appropriate treatment before the condition becomes more serious."
                                        },
                                        {
                                            question: "What is a slipped disc?",
                                            answer: "A slipped disc, also known as a herniated disc, occurs when the inner portion of a spinal disc pushes through the outer layer and presses on nearby nerves. This can cause pain, tingling, numbness, or weakness in the arms or legs depending on the location of the affected disc."
                                        },
                                        {
                                            question: "Can spine problems be treated without surgery?",
                                            answer: "Yes, many spine conditions can be managed with conservative treatments such as medication, physiotherapy, posture correction, and lifestyle changes. Surgery is typically considered only when non-surgical treatments fail to relieve symptoms or when nerve compression leads to significant weakness."
                                        },
                                        {
                                            question: "How is spine pain diagnosed?",
                                            answer: "Diagnosis usually begins with a physical examination and a review of the patient’s medical history. Imaging tests such as X-rays, MRI scans, or CT scans may be used to identify structural problems in the spine and determine the most appropriate treatment."
                                        },
                                        {
                                            question: "How long does recovery take after spine surgery?",
                                            answer: "Recovery after spine surgery varies depending on the procedure performed. Some minimally invasive procedures allow patients to resume daily activities within a few weeks, while more complex surgeries may require several months of rehabilitation."
                                        },
                                        {
                                            question: "What exercises help prevent spine problems?",
                                            answer: "Exercises that strengthen the core muscles and improve flexibility can help support the spine and reduce the risk of injury. Activities such as stretching, yoga, swimming, and guided physiotherapy programs are often recommended for maintaining spinal health."
                                        },
                                        {
                                            question: "Can poor posture cause spine pain?",
                                            answer: "Yes, poor posture is a common cause of neck and back pain. Sitting for long hours with improper posture places stress on the spinal discs and muscles. Maintaining proper posture and using ergonomic workstations can help reduce strain on the spine."
                                        },
                                        {
                                            question: "Are spine problems common with aging?",
                                            answer: "Yes, degenerative changes in the spine become more common with age. Conditions such as degenerative disc disease, arthritis, and spinal stenosis often develop gradually over time and may lead to chronic pain if not treated properly."
                                        }
                                    ]}
                                />

                                <div className="mt-12 bg-primary text-white p-8 rounded-3xl text-center">
                                    <h2 className="text-2xl font-bold mb-4">Book Spine Care Consultation in Bangalore</h2>
                                    <p className="mb-8 opacity-90 leading-relaxed">If you are dealing with chronic back pain, sciatica, or herniated discs, proper evaluation is key to preventing long-term damage. Consult Dr. Nitin Sunku, experienced orthopaedic specialist in Bangalore, for comprehensive spine care, targeted therapies, and surgical options when needed.</p>
                                    <Button className="bg-white text-primary hover:bg-white/90 h-12 px-8 font-bold text-lg" asChild>
                                        <Link href="/contact">Book Appointment Today</Link>
                                    </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {service.fullDesc}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mt-4">
                                        Dr. Nitin Sunku uses a patient-first approach to diagnosis, combining clinical examination with advanced imaging only when necessary. Treatment plans are tailored to your specific goals, whether it's returning to professional sports or simply walking pain-free.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {["Pain & Swelling", "Stiffness", "Instability", "Reduced Range of Motion", "Weakness"].map(sym => (
                                            <li key={sym} className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-lg">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                                                <span>{sym}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Dr. Nitin?</h2>
                                    <p className="text-gray-600 mb-4">
                                        With specialized fellowship training and experience as a team doctor for professional athletes, Dr. Nitin brings a high level of precision to every case.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 p-8 rounded-3xl sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Book an Appointment</h3>
                            <p className="text-gray-600 mb-6 text-sm">Get expert advice for {service.title} today.</p>

                            <div className="space-y-4">
                                <Button className="w-full h-12 text-base" asChild>
                                    <Link href="/contact">Book Consultation</Link>
                                </Button>

                                <Button variant="outline" className="w-full h-12 text-base" asChild>
                                    <a href="tel:+919449031003">
                                        <Phone className="mr-2 h-4 w-4" /> Call Now
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-6">
                                <h4 className="font-semibold text-gray-900 mb-2">Locations</h4>
                                <ul className="text-sm text-gray-600 space-y-2">
                                    <li>• Raghava Multispeciality, Attibele</li>
                                    <li>• Health Nest Hospital, HSR Layout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-[#2B58C9] text-white py-16 mt-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-sm">
                    <h2 className="text-xl font-bold mb-4 font-heading">Orthopaedic and sports medicine care in Bengaluru</h2>
                    <p className="mb-6 leading-relaxed text-blue-100">
                        Dr. Nitin N. Sunku is a consultant orthopaedic surgeon and sports medicine specialist. His day-to-day work spans knee and shoulder arthroscopy, ACL and other ligament injuries, meniscus tears, cartilage-friendly repair options when suitable, hip and knee arthritis assessment, joint replacement when quality of life is clearly limited, fracture and trauma review, and spine symptom evaluation with a staged plan. Care is built around a clear history, a focused examination, imaging only when it changes management, and honest discussion of non-operative versus operative paths.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-white font-heading">Where appointments take place</h3>
                    <p className="mb-6 leading-relaxed text-blue-100">
                        The practice is anchored at <strong>Raghava Multispeciality Hospital, Attibele</strong>, on Sarjapura–Attibele Road, for many patients travelling from Attibele, Anekal, Chandapura, Jigani, Bommasandra, Electronic City, Sarjapura, and nearby towns who want a South Bengaluru base close to home or work. <strong>Health Nest Hospital, HSR Layout</strong> (24th Main Road, Sector 2) supports selected consultations and follow-up for people who live closer to HSR, Koramangala, BTM Layout, Bellandur, or Whitefield-side commutes. Both sites link into imaging and physiotherapy networks when referrals are needed.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-white font-heading">Conditions and procedures people commonly ask about</h3>
                    <p className="mb-6 leading-relaxed text-blue-100">
                        Typical questions cover ACL tears and post-injury instability, meniscus repair versus partial trimming, recurrent shoulder dislocation, rotator cuff tears and frozen shoulder, shoulder arthroscopy for impingement, tennis or golfer's elbow flare-ups, runner's knee and shin splints, Achilles and other tendon overuse problems, early to advanced hip and knee arthritis, partial and total knee replacement timing, hip replacement for arthritis and selected fractures, acute collarbone and ankle fractures, workplace and road traffic injuries, and back pain with or without leg symptoms when urgent red flags have been excluded. Sports medicine visits often blend training-load advice with targeted rehabilitation goals rather than rushing to surgery.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-white font-heading">Before you attend</h3>
                    <p className="mb-6 leading-relaxed text-blue-100">
                        Bring photo ID, insurance cards if applicable, a concise list of medicines and allergies, old MRI or X-ray reports on phone or paper, and footwear or clothing that lets the knee or shoulder be examined. Write down three goals—for example, "sleep without waking from knee pain," "jog five kilometres without swelling," or "lift my child safely." Those goals help prioritise whether bracing, injections, structured physiotherapy, arthroscopy, or joint replacement is discussed first.
                    </p>

                    <h3 className="text-lg font-bold mb-3 text-white font-heading">Using this website responsibly</h3>
                    <p className="mb-4 leading-relaxed text-blue-100">
                        Articles under the blog section explain common symptoms and treatment concepts in plain language. They are educational, may simplify complex decisions, and should always be confirmed in clinic after examination and, when needed, imaging. If you have severe deformity after injury, numbness or weakness in a limb, high fever with a hot swollen joint, chest pain, shortness of breath, or new bladder or bowel dysfunction with back pain, seek emergency care immediately rather than waiting for an outpatient slot.
                    </p>
                    <p className="leading-relaxed text-blue-100">
                        You may book through the contact page, call the numbers in the footer, browse services and the gallery for facility context, or read testimonials to understand how recovery plans are communicated. For machine-readable orientation aimed at language models, this site publishes <Link href="/llms.txt" className="underline hover:text-white transition-colors">llms.txt</Link>.
                    </p>
                </div>
            </section>
        </main>
    );
}
