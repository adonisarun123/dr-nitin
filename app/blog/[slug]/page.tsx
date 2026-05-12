import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag, Clock, ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { siteOrigin } from "@/lib/site-url";
import { ReadingProgress } from "@/components/blog/reading-progress";
import { SocialShare } from "@/components/blog/social-share";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { FadeIn } from "@/components/animations/fade-in";
import "../blog-content.css";

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    // Explicit overrides for the specific blog posts
    if (params.slug === "types-of-total-knee-replacement") {
        return {
            title: {
                absolute: "Types of Total Knee Replacement: A Complete Patient Guide",
            },
            description: "Learn about types of total knee replacement, including partial, traditional, and minimally invasive options, to choose the right surgery in 2026.",
        };
    }

    if (params.slug === "arthroscopy-shoulder") {
        return {
            title: {
                absolute: "Arthroscopy Shoulder Surgery: Complete 2026 Guide",
            },
            description: "Discover how arthroscopy shoulder surgery works, who needs it, recovery stages, risks, and expected outcomes before treatment.",
        };
    }

    if (params.slug === "acl-repair-over-age-60") {
        return {
            title: {
                absolute: "ACL Repair Over Age 60: Is surgery still an option for you?",
            },
            description: "Discover if ACL repair over age 60 is safe and effective, with insights on healing time, mobility goals, and choosing the right treatment plan.",
        };
    }

    if (params.slug === "phases-of-achilles-tendinopathy") {
        return {
            title: {
                absolute: "Phases of Achilles Tendinopathy: Causes & Treatment",
            },
            description: "Understand the phases of Achilles tendinopathy, including early, reactive, and chronic stages, with proven treatment strategies for healing.",
        };
    }

    if (params.slug === "bad-signs-after-acl-surgery") {
        return {
            title: {
                absolute: "Bad Signs After ACL Surgery: Signs You Must Not Ignore",
            },
            description: "Learn the bad signs after ACL surgery, including swelling, severe pain, fever, and instability, and know when to seek urgent medical attention quickly",
        };
    }

    if (params.slug === "herniated-disc-pain-find-expert-relief-in-bangalore-with-dr-nithin-n") {
        return {
            title: {
                absolute: "Herniated Disc Pain: Expert Insights from Dr. Nitin N Sunku",
            },
            description: "Learn what causes herniated disc pain, common symptoms, diagnosis methods, and treatment options to manage pain and improve spine health.",
        };
    }

    if (params.slug === "rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively") {
        return {
            title: {
                absolute: "Rotator Cuff Injury: Causes, Symptoms & Treatment Tips",
            },
            description: "Learn about rotator cuff injury causes, symptoms, and effective shoulder pain treatment tips to restore mobility and reduce discomfort.",
        };
    }

    if (params.slug === "can-a-meniscus-tear-heal-without-surgery") {
        return {
            title: {
                absolute: "Meniscus Tear: Can It Heal Without Surgery? | Dr. Sunku",
            },
            description: "Discover when a meniscus tear can heal without surgery. Learn causes, healing factors, and treatment options from Dr. Nitin N Sunku.",
        };
    }

    if (params.slug === "can-a-meniscus-tear-heal-with-physiotherapy-alone") {
        return {
            title: {
                absolute: "Can a Meniscus Tear Heal With Physiotherapy? | Dr. Sunku",
            },
            description: "Learn if a meniscus tear can heal with physiotherapy alone. Expert insights on recovery, exercises, and treatment options for better knee health.",
        };
    }

    if (params.slug === "can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru") {
        return {
            title: {
                absolute: "Can You Walk With a Torn ACL? ACL Treatment in Bengaluru",
            },
            description: "Learn if you can walk with a torn ACL, common symptoms, and ACL treatment options in Bengaluru to support recovery and knee stability.",
        };
    }

    if (params.slug === "how-does-obesity-affect-joint-health") {
        return {
            title: {
                absolute: "How Does Obesity Affect Joint Health? | Dr. Nitin N Sunku",
            },
            description: "Understand how obesity impacts joint health, common risks, and ways to protect your knees, hips & spine for better mobility and comfort.",
        };
    }

    if (params.slug === "why-do-i-feel-pain-in-my-hip-when-standing-from-a-chair") {
        return {
            title: {
                absolute: "Hip Pain When Standing From a Chair? Causes & Relief",
            },
            description: "Learn why your hip hurts when standing from a chair, common causes, and expert tips for relief and improved mobility.",
        };
    }

    if (params.slug === "what-is-a-pcl-tear-and-how-it-happens") {
        return {
            title: {
                absolute: "What Is a PCL Tear: Causes, Symptoms & Treatment",
            },
            description: "Learn what a PCL tear is, how it happens, common signs, and treatment options to support knee stability and recovery.",
        };
    }

    if (params.slug === "when-is-shoulder-replacement-surgery-needed") {
        return {
            title: {
                absolute: "When Is Shoulder Replacement Surgery Needed? Causes & Signs",
            },
            description: "Learn when shoulder replacement is needed, common symptoms, and factors that guide the decision for optimal shoulder health and mobility.",
        };
    }

    if (params.slug === "why-rehabilitation-is-essential-after-a-sports-injury") {
        return {
            title: {
                absolute: "Why Rehabilitation Is Essential After a Sports Injury",
            },
            description: "Discover why rehabilitation after a sports injury matters, key benefits, and how it speeds recovery and prevents re-injury.",
        };
    }

    if (params.slug === "ankle-sprain-treatment") {
        return {
            title: {
                absolute: "Ankle Sprain Treatment: Causes & Recovery Tips",
            },
            description:
                "Understand ankle sprain grades, swelling, instability, and recovery timelines. Expert guidance from Dr. Nitin N Sunku in Bengaluru on bracing, rehab, and when to seek care.",
        };
    }

    if (params.slug === "say-goodbye-to-tendonitis-pain-a-beginner-friendly-guide-to-relief-with-dr-nithin-n-in-bangalore") {
        return {
            title: {
                absolute: "What Causes Tendonitis Pain? Symptoms & Treatment",
            },
            description: "Beginner-friendly guide to tendonitis pain relief with expert tips from Dr. Nitin N Sunku in Bengaluru for faster recovery and better tendon health.",
        };
    }

    if (params.slug === "are-you-struggling-with-joint-pain-in-bangalore") {
        return {
            title: {
                absolute: "Struggling with joint pain: Causes, Relief & Treatments",
            },
            description: "Explore common joint pain causes, symptoms, and effective relief options in Bengaluru to improve mobility and comfort.",
        };
    }

    if (params.slug === "why-does-my-shoulder-feel-unstable-after-a-sports-injury") {
        return {
            title: {
                absolute: "Why Does My Shoulder Feel Unstable After Injury?",
            },
            description: "Learn why your shoulder feels unstable after a sports injury, common causes, and treatment options to support recovery and strength.",
        };
    }

    if (params.slug === "elbow-pain-treatment") {
        return {
            title: {
                absolute: "Elbow Pain Treatment: Causes and Relief Tips",
            },
            description: "Learn what causes elbow pain and explore effective treatment and relief options to reduce discomfort and improve arm function.",
        };
    }

    if (params.slug === "why-do-i-get-shin-splints-after-running") {
        return {
            title: {
                absolute: "Why Do I Get Shin Splints After Running? Causes & Tips",
            },
            description: "Learn why shin splints occur after running, common causes, and practical tips for relief and prevention to keep you active and pain-free.",
        };
    }

    if (params.slug === "how-posture-affects-spine-and-joint-health") {
        return {
            title: {
                absolute: "How Posture Affects Spine & Joint Health | Dr. Sunku",
            },
            description: "Learn how posture impacts spine and joint health, common issues from poor posture, and tips to improve alignment for better mobility and comfort.",
        };
    }

    if (params.slug === "common-causes-of-meniscus-tears-in-active-adults") {
        return {
            title: {
                absolute: "Meniscus Tears in Active Adults: Common Causes Explained",
            },
            description: "Why do active adults get meniscus tears? Explore the most common causes, risk factors, and knee stress triggers.",
        };
    }

    if (params.slug === "can-prp-injections-help-with-chronic-joint-pain") {
        return {
            title: {
                absolute: "PRP Injections for Chronic Joint Pain: Do They Work?",
            },
            description: "Explore whether PRP injections can help with chronic joint pain, how they work, and who may benefit from this regenerative treatment option.",
        };
    }

    if (params.slug === "what-is-knee-arthroscopy-and-when-is-it-needed") {
        return {
            title: {
                absolute: "Knee Arthroscopy: Purpose, Benefits & When It’s Used",
            },
            description: "Learn what knee arthroscopy is, how it works, and when this minimally invasive procedure is recommended to diagnose and treat knee problems.",
        };
    }

    if (params.slug === "why-are-sports-injuries-so-common-and-how-do-we-treat-them") {
        return {
            title: {
                absolute: "Why Sports Injuries Happen and How Do We Treat Them?",
            },
            description: "Why are sports injuries so common? Explore the reasons and treatment options that help athletes return to activity safely.",
        };
    }

    if (params.slug === "benefits-of-arthroscopic-meniscus-repair-surgery") {
        return {
            title: {
                absolute: "Meniscus Repair Surgery Benefits: What to Expect",
            },
            description: "Discover the key benefits of arthroscopic meniscus repair surgery, including faster recovery, less pain, and improved knee stability for active lifestyles.",
        };
    }

    if (params.slug === "meniscus-tear-surgery-recovery-time") {
        return {
            title: {
                absolute: "Meniscus Tear Surgery Recovery Time: Week-by-Week Guide",
            },
            description: "Meniscus tear surgery recovery time explained with a week-by-week guide covering healing stages, exercises, and recovery tips.",
        };
    }

    if (params.slug === "bucket-handle-meniscus-tear") {
        return {
            title: {
                absolute: "Bucket Handle Meniscus Tear: Causes and Treatment Guide",
            },
            description: "Explore bucket handle meniscus tear treatment in Bengaluru with insights on causes, symptoms, and advanced diagnosis methods.",
        };
    }

    if (params.slug === "meniscus-tear") {
        return {
            title: {
                absolute: "Meniscus Tear: Repair, Reconstruction or Surgery Guide",
            },
            description: "Explore meniscus tear treatment options and understand whether repair, reconstruction, or surgery is best for recovery.",
        };
    }

    if (params.slug === "activities-to-avoid-with-a-tear-in-the-medial-meniscus") {
        return {
            title: {
                absolute: "Activities to Avoid with a Medial Meniscus Tear Recovery",
            },
            description: "Learn activities to avoid with a tear in the medial meniscus to prevent further injury and support safe and effective knee recovery.",
        };
    }

    // ─── Treatment cluster posts (regenerative, OA, knee pain, tendon, shoulder, sports) ───
    if (params.slug === "prp-vs-gfc-for-knee-pain") {
        return {
            title: { absolute: "PRP vs GFC for Knee Pain: What's the Real Difference?" },
            description:
                "PRP vs GFC for knee pain explained — how each regenerative injection works, who benefits, and how Dr. Nitin N Sunku decides between them in Bengaluru.",
        };
    }

    if (params.slug === "what-is-regenerative-orthopedic-medicine") {
        return {
            title: { absolute: "What Is Regenerative Orthopedic Medicine? A Patient's Guide" },
            description:
                "Regenerative orthopedic medicine in plain language — what it is, how it works, who benefits, and what it can and cannot do for joint and tendon pain.",
        };
    }

    if (params.slug === "knee-replacement-alternatives-non-surgical-options") {
        return {
            title: { absolute: "Knee Replacement Alternatives: Real Non-Surgical Options" },
            description:
                "Real, evidence-based alternatives to knee replacement — physiotherapy, HA, GFC, ultrasound-guided injections, and a structured second-opinion guide.",
        };
    }

    if (params.slug === "early-signs-of-knee-osteoarthritis") {
        return {
            title: { absolute: "Early Signs of Knee Osteoarthritis: 10 Symptoms to Watch For" },
            description:
                "The earliest signs of knee OA you shouldn't ignore — morning stiffness, clicks, swelling, stair pain. Catch it early and protect your knees for decades.",
        };
    }

    if (params.slug === "can-knee-oa-be-managed-without-surgery") {
        return {
            title: { absolute: "Can Knee OA Be Managed Without Surgery? An Honest Answer" },
            description:
                "For many patients, yes. The honest picture of what works for knee osteoarthritis without surgery, what doesn't, and where the line really sits.",
        };
    }

    if (params.slug === "best-treatments-for-knee-pain-after-40") {
        return {
            title: { absolute: "Best Treatments for Knee Pain After 40: A Practical Guide" },
            description:
                "Knee pain after 40? A practical, evidence-based guide to the best non-surgical treatments — exercise, weight, HA, GFC, ultrasound-guided injections.",
        };
    }

    if (params.slug === "best-exercises-for-knee-osteoarthritis") {
        return {
            title: { absolute: "Best Exercises for Knee Osteoarthritis: Safe Home Routine" },
            description:
                "Safe, effective home exercises for knee osteoarthritis — a step-by-step routine to build strength, reduce pain, and protect your knees from worsening.",
        };
    }

    if (params.slug === "weight-loss-and-knee-pain") {
        return {
            title: { absolute: "Weight Loss and Knee Pain: How Much Difference Does It Make?" },
            description:
                "How much can weight loss help your knees? The honest math, mechanics, and a knee-friendly weight strategy from Dr. Nitin N Sunku in Bengaluru.",
        };
    }

    if (params.slug === "tendinopathy-treatment-non-surgical-care") {
        return {
            title: { absolute: "Tendinopathy Treatment: Modern Non-Surgical Care" },
            description:
                "Modern non-surgical care for chronic tendon pain — tennis elbow, jumper's knee, Achilles, plantar fasciitis. How regenerative care and ultrasound change outcomes.",
        };
    }

    if (params.slug === "shoulder-pain-injections-precision-care") {
        return {
            title: { absolute: "Shoulder Pain Injections: Precision Non-Surgical Care" },
            description:
                "Ultrasound-guided shoulder injections for rotator cuff, bursitis, frozen shoulder, AC joint, and biceps tendon problems. Precision, image-guided care in Bengaluru.",
        };
    }

    if (params.slug === "sports-injury-regenerative-treatments") {
        return {
            title: { absolute: "Sports Injury Regenerative Treatments: Faster, Smarter Recovery" },
            description:
                "Modern regenerative care for sports injuries — GFC, PRP, ultrasound-guided injections, and rehab. Get back to your sport faster and reduce re-injury.",
        };
    }

    if (params.slug === "cartilage-degeneration-explained") {
        return {
            title: { absolute: "Cartilage Degeneration Explained — In Plain English" },
            description:
                "Knee cartilage degeneration explained simply — what causes it, how it progresses, and what modern non-surgical treatments can and cannot do.",
        };
    }

    if (params.slug === "benefits-of-ultrasound-guided-injections") {
        return {
            title: { absolute: "Benefits of Ultrasound-Guided Injections — Why Precision Matters" },
            description:
                "Why ultrasound-guided injections deliver better, safer results — accuracy, safety, comfort, and outcomes vs traditional landmark injections.",
        };
    }

    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Estimate reading time (approx 200 words per minute)
    const wordCount = post.content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

    // Normalise the human-readable date string to ISO 8601 for schema.org consumers.
    // Falls back to the original string if parsing fails (older posts use formats like "Mar 2, 2026").
    const parsedDate = new Date(post.date);
    const isoDate = Number.isNaN(parsedDate.getTime())
        ? post.date
        : parsedDate.toISOString().split("T")[0];

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image ? [post.image] : undefined,
        "url": `${siteOrigin}/blog/${post.slug}`,
        "author": {
            "@type": "Physician",
            "name": "Dr. Nitin N Sunku",
            "url": `${siteOrigin}/about`,
            "medicalSpecialty": ["Orthopedic", "SportsMedicine"],
        },
        "publisher": {
            "@type": "Organization",
            "name": "Dr. Nitin N Sunku Orthopedics",
            "logo": {
                "@type": "ImageObject",
                "url": `${siteOrigin}/logo.png`,
            },
        },
        "datePublished": isoDate,
        "dateModified": isoDate,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteOrigin}/blog/${post.slug}`,
        },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteOrigin}/` },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteOrigin}/blog` },
            { "@type": "ListItem", "position": 3, "name": post.title, "item": `${siteOrigin}/blog/${post.slug}` }
        ]
    };

    return (
        <main className="min-h-screen pb-20 bg-white">
            <ReadingProgress />
            <JsonLd data={articleSchema} />
            <JsonLd data={breadcrumbSchema} />

            {/* Immersive Hero Section */}
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-32 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>

                {/* Abstract Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <FadeIn>
                        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-blue-200 mb-6">
                            <span className="bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full text-blue-100 flex items-center">
                                <Tag className="h-3 w-3 mr-2" /> {post.category}
                            </span>
                            <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-2" /> {readingTime} min read
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight max-w-4xl text-white">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white font-bold">
                                N
                            </div>
                            <div>
                                <div className="font-bold">Dr. Nitin N Sunku</div>
                                <div className="text-sm text-gray-400 flex items-center gap-2">
                                    <Calendar className="h-3 w-3" /> {post.date}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Content Layout */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Sidebar (Social Share) */}
                    <aside className="lg:w-24 shrink-0">
                        <div className="sticky top-32">
                            <SocialShare title={post.title} slug={post.slug} />
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <article className="flex-grow max-w-3xl">
                        <div className="text-slate-600 text-base leading-relaxed space-y-4 mb-10 border border-slate-200 rounded-2xl bg-slate-50/80 p-6">
                            <p>
                                This article is for general education and does not replace an in-person
                                assessment, examination, or imaging. Everyone&apos;s injury pattern, medical
                                history, and goals differ; use what you read here to prepare better questions
                                for your doctor.
                            </p>
                            <p>
                                Dr. Nitin N Sunku is a consultant orthopedic and sports medicine surgeon. He
                                sees patients at <strong>Raghava Multispeciality Hospital, Attibele</strong>, on
                                Sarjapura–Attibele Road, and at <strong>Health Nest Hospital, HSR Layout</strong>,
                                Bengaluru. If pain is rapidly worsening, you cannot bear weight, you develop
                                numbness or weakness in a limb, or you have fever after an injury, seek urgent
                                medical care. For non-emergency evaluation and individualised treatment options,
                                book through the contact page.
                            </p>
                            <p>
                                Topics across this blog include knee ligament and meniscus problems, shoulder
                                pain and instability, hip and knee arthritis, fracture recovery principles, spine
                                symptoms when urgent causes have been excluded, running and tendon overuse
                                issues, and what to expect from arthroscopy or joint replacement discussions. If
                                you are comparing sources online, cross-check dates and always confirm advice
                                with an in-person clinician.
                            </p>
                        </div>
                        <FadeIn delay={0.2}>
                            {/* Lead/Excerpt */}
                            <p className="text-xl md:text-2xl text-slate-600 mb-12 font-medium leading-relaxed border-l-4 border-primary pl-6 italic bg-blue-50/30 py-4 rounded-r-lg">
                                {post.excerpt}
                            </p>

                            {/* Blog Content with Custom Styling */}
                            <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
                        </FadeIn>

                        {/* Author Bio */}
                        <FadeIn delay={0.3}>
                            <AuthorBio />
                        </FadeIn>

                        {/* CTA Box */}
                        <FadeIn delay={0.4} className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-4">Experiencing symptoms?</h3>
                                <p className="text-blue-100 mb-8 max-w-xl mx-auto text-lg">Don't let pain hold you back. Schedule a comprehensive evaluation with Dr. Nitin today.</p>
                                <Button size="lg" variant="white" className="h-14 px-8 text-primary font-bold" asChild>
                                    <Link href="/contact">Book Appointment <ChevronRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </div>
                        </FadeIn>

                    </article>
                </div>

                {/* Related Posts */}
                <FadeIn delay={0.5}>
                    <RelatedPosts currentSlug={post.slug} category={post.category} />
                </FadeIn>
            </div>
        </main>
    );
}
