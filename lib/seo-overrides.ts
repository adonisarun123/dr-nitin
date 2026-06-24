/**
 * Per-slug SEO overrides.
 *
 * Previously these lived as long `if (params.slug === "...") { return { ... } }`
 * chains inside `app/blog/[slug]/page.tsx` and `app/services/[slug]/page.tsx`.
 * Centralising them here:
 * - Removes ~250 lines from the route handlers.
 * - Makes it easy to add/remove overrides without touching React code.
 * - Lets us add a single fallback path that uses the post / service's own
 *   title + excerpt when no override exists.
 *
 * For NEW posts, prefer editing the canonical post / service record directly
 * with a `metaTitle` / `metaDescription` field — these maps exist primarily
 * for historical posts whose on-page title differs from the desired SERP
 * title.
 */

export interface SeoOverride {
    /** Used with `title: { absolute: ... }` so it bypasses the layout template. */
    title: string;
    description: string;
}

export const blogSeoOverrides: Record<string, SeoOverride> = {
    "best-orthopedic-surgeon-in-attibele": {
        title: "Best Orthopedic Surgeon in Attibele | Dr. Nitin N Sunku",
        description:
            "Looking for the best orthopedic surgeon in Attibele? What to look for, conditions treated, first-visit cost, and how to book with Dr. Nitin N Sunku at Raghava Hospital.",
    },
    "knee-replacement-cost-in-bangalore": {
        title: "Knee Replacement Cost in Bangalore 2026 | Honest Price Guide",
        description:
            "Knee replacement cost in Bangalore in 2026: realistic price ranges, what drives the cost, what's included, insurance and planning tips. Dr. Nitin N Sunku, Attibele.",
    },
    "surgery-vs-injections-for-knee-pain": {
        title: "Surgery vs Injections for Knee Pain: Which Is Right? (2026)",
        description:
            "Knee surgery or injections like PRP and GFC? Compare cost, recovery, suitability and results to choose the right option. Guidance from Dr. Nitin N Sunku, Bengaluru.",
    },
    "prp-gfc-injection-cost-eligibility-bangalore": {
        title: "PRP & GFC Knee Injection Cost & Eligibility in Bangalore 2026",
        description:
            "PRP and GFC knee injection cost in Bangalore, who is a good candidate, and what treatment involves. A practical 2026 guide with Dr. Nitin N Sunku, Attibele.",
    },
    "when-to-see-orthopedic-surgeon-for-joint-pain": {
        title: "When to See an Orthopedic Surgeon for Knee or Joint Pain",
        description:
            "Red-flag signs that your knee, shoulder, hip or back pain needs an orthopedic surgeon — and when physiotherapy first is fine. Book in Attibele with Dr. Nitin N Sunku.",
    },
    "acl-surgery-cost-and-recovery-bangalore": {
        title: "ACL Surgery in Bangalore 2026: Cost & ACL and Meniscus Surgery Recovery Timeline",
        description:
            "ACL reconstruction in Bangalore 2026: cost, the ACL and meniscus surgery recovery timeline, and return-to-sport milestones. Sports surgeon Dr. Nitin N Sunku, Bengaluru FC team doctor.",
    },
    "types-of-total-knee-replacement": {
        title: "Types of Total Knee Replacement: A Complete Patient Guide",
        description:
            "Learn about types of total knee replacement, including partial, traditional, and minimally invasive options, to choose the right surgery in 2026.",
    },
    "arthroscopy-shoulder": {
        title: "Arthroscopy Shoulder Surgery: Complete 2026 Guide",
        description:
            "Discover how arthroscopy shoulder surgery works, who needs it, recovery stages, risks, and expected outcomes before treatment.",
    },
    "acl-repair-over-age-60": {
        title: "ACL Repair Over Age 60: Is surgery still an option for you?",
        description:
            "Discover if ACL repair over age 60 is safe and effective, with insights on healing time, mobility goals, and choosing the right treatment plan.",
    },
    "phases-of-achilles-tendinopathy": {
        title: "Phases of Achilles Tendinopathy: Causes & Treatment",
        description:
            "Understand the phases of Achilles tendinopathy, including early, reactive, and chronic stages, with proven treatment strategies for healing.",
    },
    "bad-signs-after-acl-surgery": {
        title: "Bad Signs After ACL Surgery: Signs You Must Not Ignore",
        description:
            "Learn the bad signs after ACL surgery, including swelling, severe pain, fever, and instability, and know when to seek urgent medical attention quickly",
    },
    "herniated-disc-pain-find-expert-relief-in-bangalore-with-dr-nithin-n": {
        title: "Herniated Disc Pain: Expert Insights from Dr. Nitin N Sunku",
        description:
            "Learn what causes herniated disc pain, common symptoms, diagnosis methods, and treatment options to manage pain and improve spine health.",
    },
    "rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively": {
        title: "Rotator Cuff Injury: Causes, Symptoms & Treatment Tips",
        description:
            "Learn about rotator cuff injury causes, symptoms, and effective shoulder pain treatment tips to restore mobility and reduce discomfort.",
    },
    "can-a-meniscus-tear-heal-without-surgery": {
        title: "Meniscus Tear: Can It Heal Without Surgery? | Dr. Sunku",
        description:
            "Discover when a meniscus tear can heal without surgery. Learn causes, healing factors, and treatment options from Dr. Nitin N Sunku.",
    },
    "can-a-meniscus-tear-heal-with-physiotherapy-alone": {
        title: "Can a Meniscus Tear Heal With Physiotherapy? | Dr. Sunku",
        description:
            "Learn if a meniscus tear can heal with physiotherapy alone. Expert insights on recovery, exercises, and treatment options for better knee health.",
    },
    "can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru": {
        title: "Can You Walk With a Torn ACL? ACL Tear Recovery Time Without Surgery",
        description:
            "Can you walk with a torn ACL? Symptoms, ACL tear recovery time without surgery, and ACL treatment options in Bengaluru with Dr. Nitin N Sunku.",
    },
    "how-does-obesity-affect-joint-health": {
        title: "How Does Obesity Affect Joint Health? | Dr. Nitin N Sunku",
        description:
            "Understand how obesity impacts joint health, common risks, and ways to protect your knees, hips & spine for better mobility and comfort.",
    },
    "why-do-i-feel-pain-in-my-hip-when-standing-from-a-chair": {
        title: "Hip Pain When Standing From a Chair? Causes & Relief",
        description:
            "Learn why your hip hurts when standing from a chair, common causes, and expert tips for relief and improved mobility.",
    },
    "what-is-a-pcl-tear-and-how-it-happens": {
        title: "What Is a PCL Tear: Causes, Symptoms & Treatment",
        description:
            "Learn what a PCL tear is, how it happens, common signs, and treatment options to support knee stability and recovery.",
    },
    "when-is-shoulder-replacement-surgery-needed": {
        title: "When Is Shoulder Replacement Surgery Needed? Causes & Signs",
        description:
            "Learn when shoulder replacement is needed, common symptoms, and factors that guide the decision for optimal shoulder health and mobility.",
    },
    "why-rehabilitation-is-essential-after-a-sports-injury": {
        title: "Why Rehabilitation Is Essential After a Sports Injury",
        description:
            "Discover why rehabilitation after a sports injury matters, key benefits, and how it speeds recovery and prevents re-injury.",
    },
    "ankle-sprain-treatment": {
        title: "Ankle Sprain Treatment: Causes & Recovery Tips",
        description:
            "Understand ankle sprain grades, swelling, instability, and recovery timelines. Expert guidance from Dr. Nitin N Sunku in Bengaluru on bracing, rehab, and when to seek care.",
    },
    "say-goodbye-to-tendonitis-pain-a-beginner-friendly-guide-to-relief-with-dr-nithin-n-in-bangalore": {
        title: "What Causes Tendonitis Pain? Symptoms & Treatment",
        description:
            "Beginner-friendly guide to tendonitis pain relief with expert tips from Dr. Nitin N Sunku in Bengaluru for faster recovery and better tendon health.",
    },
    "are-you-struggling-with-joint-pain-in-bangalore": {
        title: "Struggling with joint pain: Causes, Relief & Treatments",
        description:
            "Explore common joint pain causes, symptoms, and effective relief options in Bengaluru to improve mobility and comfort.",
    },
    "why-does-my-shoulder-feel-unstable-after-a-sports-injury": {
        title: "Why Does My Shoulder Feel Unstable After Injury?",
        description:
            "Learn why your shoulder feels unstable after a sports injury, common causes, and treatment options to support recovery and strength.",
    },
    "elbow-pain-treatment": {
        title: "Elbow Pain Treatment: Causes and Relief Tips",
        description:
            "Learn what causes elbow pain and explore effective treatment and relief options to reduce discomfort and improve arm function.",
    },
    "why-do-i-get-shin-splints-after-running": {
        title: "Why Do I Get Shin Splints After Running? Causes & Tips",
        description:
            "Learn why shin splints occur after running, common causes, and practical tips for relief and prevention to keep you active and pain-free.",
    },
    "how-posture-affects-spine-and-joint-health": {
        title: "How Posture Affects Spine & Joint Health | Dr. Sunku",
        description:
            "Learn how posture impacts spine and joint health, common issues from poor posture, and tips to improve alignment for better mobility and comfort.",
    },
    "common-causes-of-meniscus-tears-in-active-adults": {
        title: "Meniscus Tears in Active Adults: Common Causes Explained",
        description:
            "Why do active adults get meniscus tears? Explore the most common causes, risk factors, and knee stress triggers.",
    },
    "can-prp-injections-help-with-chronic-joint-pain": {
        title: "PRP Injections for Chronic Joint Pain: Do They Work?",
        description:
            "Explore whether PRP injections can help with chronic joint pain, how they work, and who may benefit from this regenerative treatment option.",
    },
    "what-is-knee-arthroscopy-and-when-is-it-needed": {
        title: "Knee Arthroscopy: Purpose, Benefits & When It's Used",
        description:
            "Learn what knee arthroscopy is, how it works, and when this minimally invasive procedure is recommended to diagnose and treat knee problems.",
    },
    "why-are-sports-injuries-so-common-and-how-do-we-treat-them": {
        title: "Why Sports Injuries Happen and How Do We Treat Them?",
        description:
            "Why are sports injuries so common? Explore the reasons and treatment options that help athletes return to activity safely.",
    },
    "benefits-of-arthroscopic-meniscus-repair-surgery": {
        title: "Meniscus Repair Surgery Benefits: What to Expect",
        description:
            "Discover the key benefits of arthroscopic meniscus repair surgery, including faster recovery, less pain, and improved knee stability for active lifestyles.",
    },
    "meniscus-tear-surgery-recovery-time": {
        title: "Meniscus Tear Surgery Recovery Time: Week-by-Week Guide",
        description:
            "Meniscus tear surgery recovery time explained with a week-by-week guide covering healing stages, exercises, and recovery tips.",
    },
    "bucket-handle-meniscus-tear": {
        title: "Bucket Handle Meniscus Tear: Causes and Treatment Guide",
        description:
            "Explore bucket handle meniscus tear treatment in Bengaluru with insights on causes, symptoms, and advanced diagnosis methods.",
    },
    "meniscus-tear": {
        title: "Meniscus Tear: Repair, Reconstruction or Surgery Guide",
        description:
            "Explore meniscus tear treatment options and understand whether repair, reconstruction, or surgery is best for recovery.",
    },
    "activities-to-avoid-with-a-tear-in-the-medial-meniscus": {
        title: "Activities to Avoid with a Tear in the Medial Meniscus",
        description:
            "A clear list of activities to avoid with a tear in the medial meniscus, signs you are overloading the knee, and safer alternatives for recovery.",
    },

    // ── Treatment cluster posts (regenerative, OA, knee pain, tendon, shoulder, sports) ──
    "prp-vs-gfc-for-knee-pain": {
        title: "PRP vs GFC for Knee Pain: What's the Real Difference?",
        description:
            "PRP vs GFC for knee pain explained — how each regenerative injection works, who benefits, and how Dr. Nitin N Sunku decides between them in Bengaluru.",
    },
    "what-is-regenerative-orthopedic-medicine": {
        title: "What Is Regenerative Orthopedic Medicine? A Patient's Guide",
        description:
            "Regenerative orthopedic medicine in plain language — what it is, how it works, who benefits, and what it can and cannot do for joint and tendon pain.",
    },
    "knee-replacement-alternatives-non-surgical-options": {
        title: "Knee Replacement Alternatives: Real Non-Surgical Options",
        description:
            "Real, evidence-based alternatives to knee replacement — physiotherapy, HA, GFC, ultrasound-guided injections, and a structured second-opinion guide.",
    },
    "early-signs-of-knee-osteoarthritis": {
        title: "Early Signs of Knee Osteoarthritis: 10 Symptoms to Watch For",
        description:
            "The earliest signs of knee OA you shouldn't ignore — morning stiffness, clicks, swelling, stair pain. Catch it early and protect your knees for decades.",
    },
    "can-knee-oa-be-managed-without-surgery": {
        title: "Can Knee OA Be Managed Without Surgery? An Honest Answer",
        description:
            "For many patients, yes. The honest picture of what works for knee osteoarthritis without surgery, what doesn't, and where the line really sits.",
    },
    "best-treatments-for-knee-pain-after-40": {
        title: "Best Treatments for Knee Pain After 40: A Practical Guide",
        description:
            "Knee pain after 40? A practical, evidence-based guide to the best non-surgical treatments — exercise, weight, HA, GFC, ultrasound-guided injections.",
    },
    "best-exercises-for-knee-osteoarthritis": {
        title: "Best Exercises for Knee Osteoarthritis: Safe Home Routine",
        description:
            "Safe, effective home exercises for knee osteoarthritis — a step-by-step routine to build strength, reduce pain, and protect your knees from worsening.",
    },
    "weight-loss-and-knee-pain": {
        title: "Weight Loss and Knee Pain: How Much Difference Does It Make?",
        description:
            "How much can weight loss help your knees? The honest math, mechanics, and a knee-friendly weight strategy from Dr. Nitin N Sunku in Bengaluru.",
    },
    "tendinopathy-treatment-non-surgical-care": {
        title: "Tendinopathy Treatment: Modern Non-Surgical Care",
        description:
            "Modern non-surgical care for chronic tendon pain — tennis elbow, jumper's knee, Achilles, plantar fasciitis. How regenerative care and ultrasound change outcomes.",
    },
    "shoulder-pain-injections-precision-care": {
        title: "Shoulder Pain Injections: Precision Non-Surgical Care",
        description:
            "Ultrasound-guided shoulder injections for rotator cuff, bursitis, frozen shoulder, AC joint, and biceps tendon problems. Precision, image-guided care in Bengaluru.",
    },
    "sports-injury-regenerative-treatments": {
        title: "Sports Injury Regenerative Treatments: Faster, Smarter Recovery",
        description:
            "Modern regenerative care for sports injuries — GFC, PRP, ultrasound-guided injections, and rehab. Get back to your sport faster and reduce re-injury.",
    },
    "cartilage-degeneration-explained": {
        title: "Cartilage Degeneration Explained — In Plain English",
        description:
            "Knee cartilage degeneration explained simply — what causes it, how it progresses, and what modern non-surgical treatments can and cannot do.",
    },
    "benefits-of-ultrasound-guided-injections": {
        title: "Benefits of Ultrasound-Guided Injections — Why Precision Matters",
        description:
            "Why ultrasound-guided injections deliver better, safer results — accuracy, safety, comfort, and outcomes vs traditional landmark injections.",
    },
    "bmac-stem-cell-therapy-for-knee-pain": {
        title: "Stem Cell Therapy for Knee Pain in India: BMAC Patient Guide",
        description:
            "Stem cell therapy for knee pain in India explained — how autologous BMAC works, who it suits, regulatory framework, and how it compares to PRP and GFC in Bengaluru.",
    },

    // ── May 2026 batch ──
    "red-light-therapy-for-acl-tear": {
        title: "Red Light Therapy for ACL Tear: Does It Actually Work?",
        description:
            "Evidence-based guide to red light therapy (photobiomodulation) for ACL tears — mechanism, timing, dosing, and how it fits into structured ACL rehab in Bengaluru.",
    },
    "titanium-vs-johnson-vs-ceramic-knee-replacement": {
        title: "Titanium vs Johnson vs Ceramic Knee Replacement: Which Is Right for You?",
        description:
            "Compare titanium, Johnson/DePuy (cobalt-chrome) and ceramic/Oxinium knee implants — wear, biocompatibility, registry data, cost, and who each suits in Bangalore.",
    },
    "anterior-cruciate-ligament-origin-and-insertion": {
        title: "Anterior Cruciate Ligament Anatomy & Function: Origin, Insertion, ACL vs PCL",
        description:
            "Complete anterior cruciate ligament anatomy guide — origin, insertion, two bundles, and anterior and posterior cruciate ligament function explained for patients.",
    },
    "anterolateral-meniscus-tear-and-root-tear": {
        title: "Anterolateral Meniscus Tear & Root Tear: A Specialist Guide",
        description:
            "Outer knee pain after a twist or after ACL surgery? A specialist guide to anterolateral meniscus tears, root avulsions, and arthroscopic root repair in Bengaluru.",
    },
    "natural-alternatives-to-hip-replacement": {
        title: "Natural Alternatives to Hip Replacement Surgery: A Doctor's Guide",
        description:
            "Conservative-first guide to non-surgical hip care — physiotherapy, weight management, PRP, hyaluronic acid, hip arthroscopy, and when replacement really is necessary.",
    },

    // ── Jun 2026 cost pillars ──
    "spine-surgery-cost-in-india": {
        title: "Spine Surgery Cost in India 2026: Real Ranges by a Surgeon",
        description:
            "Spine surgery cost in India in 2026, by procedure: discectomy, fusion, endoscopic & disc replacement. Honest rupee ranges, what's included, insurance tips.",
    },
    "hip-replacement-surgery-cost-india": {
        title: "Hip Replacement Surgery Cost in India 2026 | Honest Guide",
        description:
            "Hip replacement surgery cost in India 2026: realistic ranges by implant tier, what's included, insurance reality and conservative alternatives. Dr. Nitin, Bengaluru.",
    },

    // ── Jul 2026 batch: conservative-care + cost pillars ──
    "sciatica-treatment-without-surgery-india": {
        title: "Sciatica Treatment Without Surgery in India | Dr. Nitin Sunku",
        description:
            "Looking for sciatica treatment without surgery in India? A Bengaluru spine specialist explains what works, what doesn't, and when surgery is genuinely needed.",
    },
    "hip-fracture-surgery-cost-india": {
        title: "Hip Fracture Surgery Cost in India 2026 | Dr. Nitin N Sunku",
        description:
            "Hip fracture surgery cost in India in 2026: DHS, hip pinning, hemiarthroplasty & THR price ranges, insurance cover and what to do in the first 72 hours.",
    },
    "frozen-shoulder-treatment-without-surgery-india": {
        title: "Frozen Shoulder Treatment Without Surgery in India | Dr Nitin",
        description:
            "Honest guide to frozen shoulder treatment without surgery in India — physiotherapy, steroid injection, hydrodilatation, costs and recovery timelines.",
    },
    "knee-replacement-exercises-to-avoid": {
        title: "Knee Replacement Exercises to Avoid: A Surgeon's Guide 2026",
        description:
            "Bengaluru orthopedic surgeon Dr. Nitin Sunku lists knee replacement exercises to avoid, safe alternatives, and how restrictions ease over time after TKR.",
    },

    // ── Jul 09 2026 batch: spine + hip cluster fill ──
    "lumbar-disc-herniation-surgery-india": {
        title: "Lumbar Disc Herniation Surgery in India: Cost & Recovery",
        description:
            "Lumbar disc herniation surgery in India — types, cost ranges (₹1.5L–8L), recovery timeline, and when surgery is genuinely needed. Bengaluru spine surgeon.",
    },
    "hip-replacement-physiotherapy-exercises-india": {
        title: "Hip Replacement Physiotherapy Exercises India | Home Plan",
        description:
            "Week-by-week hip replacement physiotherapy exercises for India patients. Precautions, daily routine, common mistakes & expert rehab guidance in Bengaluru.",
    },
    "total-hip-replacement-recovery-time-india": {
        title: "Total Hip Replacement Recovery Time India: Week-by-Week",
        description:
            "Realistic total hip replacement recovery time in India — week-by-week timeline for work, driving, travel and sport from Bengaluru orthopedic Dr. Nitin.",
    },

    // ── Jul 16 2026 batch: knee surgery + spine fill ──
    "advantages-and-disadvantages-of-robotic-knee-replacement": {
        title: "Advantages & Disadvantages of Robotic Knee Replacement 2026",
        description:
            "Honest guide to robotic knee replacement pros and cons in India — precision, cost (₹3.5–6L), recovery, VELYS vs Mako, and when conventional wins.",
    },
    "knee-replacement-recovery-time-for-elderly": {
        title: "Knee Replacement Recovery Time for Elderly | Dr. Nitin Sunku",
        description:
            "Honest guide to knee replacement recovery time for elderly patients in India — week-by-week timeline, risks, preparation, and outcomes for ages 65 to 85+.",
    },
    "endoscopic-spine-surgery-india": {
        title: "Endoscopic Spine Surgery India: Cost, Types & Recovery 2026",
        description:
            "Endoscopic spine surgery in India — TESSYS, BESS, costs (₹2.5L–₹5.5L), recovery timeline, and who is a good candidate. Surgeon-written guide.",
    },

    // ── Jul 23 2026 batch: knee revision + cervical spine + shoulder cluster ──
    "revision-knee-replacement-surgery-india": {
        title: "Revision Knee Replacement in India: Cost, Recovery & Surgeon",
        description:
            "Revision knee replacement surgery in Bangalore by Dr. Nitin N Sunku. Causes of failed knee implants, cost, recovery, infection management & honest outcomes.",
    },
    "cervical-disc-replacement-india": {
        title: "Cervical Disc Replacement India: ACDR vs ACDF, Cost & Recovery",
        description:
            "Cervical disc replacement in India — Bengaluru spine surgeon on ACDR vs ACDF fusion, who qualifies, Mobi-C & Prestige LP devices, cost, and honest recovery.",
    },
    "shoulder-replacement-surgery-india": {
        title: "Shoulder Replacement Surgery India: Cost, Types & Recovery",
        description:
            "Anatomic vs reverse shoulder replacement in India: honest 2026 cost ranges, recovery timeline, and when surgery is truly needed. By Dr. Nitin N Sunku, Bengaluru.",
    },
    "rotator-cuff-surgery-cost-india": {
        title: "Rotator Cuff Surgery Cost in India 2026 | Dr. Nitin Sunku",
        description:
            "Rotator cuff surgery cost in India 2026: arthroscopic repair ₹1.8L–5.5L, what drives price, which tears need surgery, recovery timeline & insurance.",
    },

    // ── Jul 30 2026 batch: shoulder + fracture + spine PT ──
    "shoulder-arthroscopy-surgery-india": {
        title: "Shoulder Arthroscopy Surgery India: Cost & Recovery Guide",
        description:
            "Honest guide to shoulder arthroscopy surgery in India — cost ranges, conditions treated, recovery timeline and surgeon checklist by Dr. Nitin N Sunku.",
    },
    "shoulder-dislocation-treatment-india": {
        title: "Shoulder Dislocation Treatment India | Bankart & Latarjet",
        description:
            "Shoulder dislocation treatment in India by Dr. Nitin N Sunku, Bengaluru. Bankart repair, Latarjet, costs, recovery and when surgery is really needed.",
    },
    "stress-fracture-treatment-india": {
        title: "Stress Fracture Treatment in India | Sports Medicine Guide",
        description:
            "Sports medicine guide to stress fracture treatment in India — diagnosis, recovery timeline, costs, and prevention. Consultations in Attibele & HSR Layout.",
    },
    "compression-fracture-spine-treatment-india": {
        title: "Compression Fracture Spine Treatment India | Dr. Nitin Sunku",
        description:
            "Vertebral compression fracture in an elderly parent? A Bengaluru orthopedic surgeon explains conservative care, kyphoplasty, costs and recovery timelines.",
    },
    "lower-back-pain-physiotherapy-protocol-india": {
        title: "Lower Back Pain Physiotherapy Protocol India | 4-Phase Plan",
        description:
            "Structured lower back pain physiotherapy protocol for India — 4 phases, exercises, timelines, red flags & cost from a Bengaluru orthopedic surgeon.",
    },
};

export const serviceSeoOverrides: Record<string, SeoOverride> = {
    "sports-medicine": {
        title: "Sports Medicine & Injury Care – Dr. Nitin N Sunku",
        description:
            "Specialized sports medicine care in Bengaluru. Dr. Sunku treats sprains, fractures, ligament tears with personalized plans. Return to sport safely.",
    },
    "acl-care": {
        title: "ACL Tear Care & Surgery – Dr. Nitin N Sunku Orthopedics",
        description:
            "Expert ACL tear diagnosis and arthroscopic reconstruction by Dr. Sunku. Learn causes, symptoms, treatment, recovery.",
    },
    "knee-replacement": {
        title: "Knee Replacement Surgery – Dr. Nitin N Sunku Orthopedics",
        description:
            "Advanced total & partial knee replacements by Dr. Sunku. Relieve arthritis pain, restore mobility. Learn about surgery, recovery",
    },
    "meniscal-care": {
        title: "Meniscus Tear Treatment – Dr. Nitin N Sunku Orthopedics",
        description:
            "Specialized meniscus tear care: arthroscopic repair or partial meniscectomy by Dr. Sunku. Learn causes, symptoms, recovery",
    },
    "hip-replacement": {
        title: "Hip Replacement Surgery – Dr. Nitin N Sunku Orthopedics",
        description:
            "Expert hip replacement surgeries in Bengaluru. Dr. Sunku treats arthritis and hip fractures with advanced prostheses. Learn about surgery, recovery (3-6 months)",
    },
    "shoulder-care": {
        title: "Shoulder Care & Surgery – Dr. Nitin N Sunku",
        description:
            "Comprehensive shoulder pain treatment by Dr. Sunku. We manage rotator cuff tears, impingement, instability, frozen shoulder with personalized care.",
    },
    "bone-fracture": {
        title: "Bone Fracture Treatment – Dr. Nitin N Sunku",
        description:
            "Expert bone fracture care in Bengaluru. Dr. Sunku treats simple to complex breaks with casting, ORIF, intramedullary nails. Personalized rehab for full recovery.",
    },
    "spine-care": {
        title: "Spine Care Treatment in Attibele | Dr. Nitin N Sunku",
        description:
            "Comprehensive spine care in Attibele by Dr. Nitin N Sunku — expert evaluation and non-surgical or surgical management of back pain and spinal disorders.",
    },
};
