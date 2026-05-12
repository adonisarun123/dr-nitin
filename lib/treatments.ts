/**
 * Pillar treatment data for Dr. Nitin N Sunku's regenerative & non-surgical
 * orthopedic offering. Powers /treatments/[slug] routes, the homepage
 * Treatments grid, and JSON-LD generation.
 *
 * Authoring notes:
 * - Clinic names: Raghava Multispeciality Hospital, Attibele
 *                 Health Nest Hospital, HSR Layout
 * - Service areas (SEO mentions only, NOT clinic names):
 *     Electronic City, Attibele, HSR Layout, Anekal, Bommasandra,
 *     Sarjapur Road, Hosur Road, Chandapura, Bommanahalli.
 * - Author: Dr. Nitin N Sunku.
 * - Compliance: never promise cure / guaranteed result / cartilage regrowth.
 *   Always position as pain reduction, mobility improvement, slowed
 *   progression, or surgery delay where medically appropriate.
 */

export type TreatmentBlock =
    | { type: "paragraph"; text: string }
    | { type: "heading"; level: 3; text: string }
    | { type: "list"; items: string[] }
    | { type: "ordered"; items: string[] }
    | { type: "table"; headers: string[]; rows: string[][] }
    | { type: "callout"; tone: "info" | "honest" | "warning"; text: string }
    | { type: "linkCard"; title: string; description: string; href: string };

export type TreatmentSection = {
    id: string;
    title: string;
    blocks: TreatmentBlock[];
};

export type TreatmentFaq = { q: string; a: string };

export type Treatment = {
    slug: string;
    /** Short label shown in cards, breadcrumbs, navigation. */
    title: string;
    /** One-sentence positioning for cards / meta. */
    shortDesc: string;
    /** SEO <title>. */
    metaTitle: string;
    /** SEO meta description. */
    metaDescription: string;
    /** H1 on the detail page. */
    heroH1: string;
    /** Sub-headline under H1. */
    heroSubhead: string;
    /** 3–5 quick trust bullets at the top of the page. */
    heroBullets: string[];
    /** SEO breadth — keywords woven into copy and schema. */
    primaryKeywords: string[];
    /** Ordered, rendered top-to-bottom on the detail page. */
    sections: TreatmentSection[];
    /** 10+ FAQs for FAQPage schema + featured snippets. */
    faqs: TreatmentFaq[];
    /** Pillar↔cluster internal links. */
    relatedLinks: { label: string; href: string }[];
    /** Schema.org MedicalProcedure name. */
    procedureName: string;
    /** Schema.org bodyLocation hint. */
    bodyLocation?: string;
    /** Tailwind tile style for cards. */
    color: string;
    /** Lucide icon name (rendered in cards via dynamic import). */
    icon: string;
};

/** Common medical disclaimer rendered at the bottom of every detail page. */
export const TREATMENT_DISCLAIMER =
    "This information is for educational purposes only and does not replace a clinical examination. Treatment outcomes vary based on the severity of your condition, age, weight, lifestyle, and other medical factors. Severe joint degeneration may still require surgical management. A physical examination and imaging review by Dr. Nitin N Sunku are required before any therapy is recommended.";

/** Service-area phrase reused across pages for local SEO. */
export const SERVICE_AREAS_LINE =
    "Patients are seen at Raghava Multispeciality Hospital, Attibele (Sarjapura–Attibele Road) and Health Nest Hospital, HSR Layout. The clinics serve Attibele, Anekal, Bommasandra, Chandapura, Hosur Road, HSR Layout, Bellandur, Sarjapur Road, Electronic City, and surrounding areas of South Bengaluru.";

export const treatments: Treatment[] = [
    // ───────────────────────────────────────────────────────────────────
    // Pillar 1 — Non-Surgical Knee Pain Treatment (hub)
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "non-surgical-knee-pain-treatment",
        title: "Non-Surgical Knee Pain Treatment",
        shortDesc:
            "Modern regenerative and minimally invasive care to reduce knee pain, restore mobility, and help eligible patients delay or avoid knee replacement.",
        metaTitle:
            "Non-Surgical Knee Pain Treatment in Bengaluru | Dr. Nitin N Sunku",
        metaDescription:
            "Advanced non-surgical knee pain treatment by Dr. Nitin N Sunku at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Regenerative therapy, GFC, hyaluronic acid and ultrasound-guided injections. Serving Attibele, HSR Layout, Electronic City, and South Bengaluru.",
        heroH1: "Walk Comfortably Again — Non-Surgical Knee Pain Treatment in Bengaluru",
        heroSubhead:
            "Modern regenerative and minimally invasive care designed to reduce knee pain, restore mobility, and help many patients delay or avoid knee replacement surgery.",
        heroBullets: [
            "Pain relief without major surgery for eligible patients",
            "Same-day, daycare procedures — walk in, walk out",
            "Ultrasound-guided precision for safer, more accurate injections",
            "Personalised plans for OA, sports injuries, and tendon pain",
        ],
        primaryKeywords: [
            "non-surgical knee pain treatment in Bengaluru",
            "knee pain doctor in Attibele",
            "knee pain treatment HSR Layout",
            "alternative to knee replacement Bengaluru",
            "regenerative knee treatment Electronic City",
        ],
        procedureName: "Non-Surgical Knee Pain Management",
        bodyLocation: "Knee",
        color: "bg-blue-50 text-blue-600",
        icon: "Activity",
        sections: [
            {
                id: "why-it-matters",
                title: "Why your knees hurt — and why it's worth taking seriously",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Knee pain rarely arrives all at once. It usually starts as morning stiffness, a click while climbing stairs, or a dull ache after a long day. Over months and years, the cushioning cartilage inside the joint slowly wears down, the protective synovial fluid becomes less effective, and small inflammatory changes start to limit how comfortably you move.",
                    },
                    {
                        type: "paragraph",
                        text: "If left unaddressed, this slow process — often knee osteoarthritis — can quietly take away the things you love: walking in Cubbon Park, playing with your grandchildren, climbing the stairs at home, or simply standing through a long workday.",
                    },
                    {
                        type: "callout",
                        tone: "info",
                        text: "In most early and moderate cases, you do not have to jump from painkillers to knee replacement. There is a well-established middle path of non-surgical, regenerative, and minimally invasive treatments — the focus of Dr. Nitin N Sunku's practice.",
                    },
                ],
            },
            {
                id: "symptoms",
                title: "Common symptoms patients come in with",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Pain while walking, especially after standing for long periods",
                            "Difficulty climbing or descending stairs",
                            "Morning stiffness that improves after some movement",
                            "A grinding or clicking sound (crepitus) inside the knee",
                            "Swelling around the kneecap or behind the knee",
                            "Pain after long drives or long meetings",
                            "Inability to squat, sit cross-legged, or kneel",
                            "Sharp pain with sudden twisting movements",
                            "Reduced ability to exercise, walk briskly, or play sports",
                        ],
                    },
                ],
            },
            {
                id: "causes",
                title: "What causes knee pain?",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Knee osteoarthritis (OA) — wear-and-tear of the cartilage cushioning the joint",
                            "Meniscal injury or degeneration — tears in the C-shaped shock-absorbing cartilage",
                            "Tendinopathy — patellar, quadriceps, or IT band-related pain",
                            "Ligament strains — mild MCL or ACL strains from sports or sudden twists",
                            "Patellofemoral pain syndrome — front-of-knee pain from muscle imbalance",
                            "Bursitis & synovitis — inflammation of bursae and the joint lining",
                            "Post-injury changes — old fractures, surgeries, or injuries that altered joint mechanics",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "A correct diagnosis matters because the right treatment depends on the right cause. Dr. Nitin N Sunku uses a combination of clinical examination, X-ray, and where needed MRI or in-clinic ultrasound to map exactly what's happening inside your knee before recommending any therapy.",
                    },
                ],
            },
            {
                id: "approach",
                title: "How Dr. Nitin N Sunku approaches knee pain — the non-surgical pathway",
                blocks: [
                    {
                        type: "paragraph",
                        text: "The philosophy is simple: start with what is least invasive but still effective, and escalate only when truly required.",
                    },
                    {
                        type: "ordered",
                        items: [
                            "Detailed evaluation — symptoms, lifestyle, BMI, work pattern, prior treatments, imaging review",
                            "Foundation care — guided physiotherapy, weight-management coaching, activity modification, footwear advice, selected medications when needed",
                            "Targeted injection therapy — hyaluronic acid, GFC, or other ultrasound-guided injections, individualised to your OA grade and goals",
                            "Regenerative orthopedic medicine — using your own biological factors to reduce inflammation and support joint health",
                            "Periodic monitoring — outcomes are reviewed every few weeks; the plan is adjusted to your knee's response",
                            "Surgical referral when appropriate — if non-surgical options no longer help, you are referred for partial or total knee replacement with full transparency",
                        ],
                    },
                ],
            },
            {
                id: "treatment-options",
                title: "Treatment options under one roof",
                blocks: [
                    {
                        type: "linkCard",
                        title: "Hyaluronic Acid (HA) Injections",
                        description:
                            "Restore some of the lubrication and shock absorption lost in osteoarthritis. Often gives meaningful comfort for several months in suitable patients.",
                        href: "/treatments/hyaluronic-acid-injection-treatment",
                    },
                    {
                        type: "linkCard",
                        title: "GFC (Growth Factor Concentrate) Therapy",
                        description:
                            "Advanced regenerative therapy using concentrated growth factors derived from a small sample of your own blood — an upgraded alternative to traditional PRP.",
                        href: "/treatments/gfc-treatment-knee-pain",
                    },
                    {
                        type: "linkCard",
                        title: "Ultrasound-Guided Injections",
                        description:
                            "Real-time imaging delivers medication exactly where it is needed — improving accuracy, comfort, and safety compared to blind injections.",
                        href: "/treatments/ultrasound-guided-orthopedic-injections",
                    },
                    {
                        type: "linkCard",
                        title: "Osteoarthritis Knee Care",
                        description:
                            "Complete OA evaluation, KL grading, and a layered plan combining lifestyle, physiotherapy, and targeted therapy.",
                        href: "/treatments/osteoarthritis-knee-treatment",
                    },
                    {
                        type: "paragraph",
                        text: "Injections are paired with structured physiotherapy and weight-management coaching, because the durability of any injection depends heavily on the muscle strength and load environment around the knee.",
                    },
                ],
            },
            {
                id: "benefits",
                title: "Benefits of choosing the non-surgical pathway",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Reduced pain in many patients with mild-to-moderate OA",
                            "Improved walking distance and stair-climbing ability",
                            "Daycare procedures — most injections take 20–40 minutes",
                            "No general anaesthesia, no hospital stay for injection therapies",
                            "Quick return to routine — many patients drive home and resume office work the next day",
                            "Avoids the recovery, cost, and risk profile of major surgery for eligible candidates",
                            "Personalised — no one-size-fits-all protocols",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "honest",
                        text: "Outcomes vary patient to patient. Some people benefit from a single course of treatment; others need a structured plan over several months.",
                    },
                ],
            },
            {
                id: "eligibility",
                title: "Who is eligible?",
                blocks: [
                    { type: "heading", level: 3, text: "Likely a good candidate if you have:" },
                    {
                        type: "list",
                        items: [
                            "Early or moderate knee osteoarthritis (Kellgren–Lawrence grade 1–3)",
                            "Persistent knee pain despite painkillers and basic physiotherapy",
                            "Tendinopathy (patellar, quadriceps, IT band-related)",
                            "Mild meniscal degeneration without a major mechanical block",
                            "A sports injury where surgery is not yet indicated",
                            "A desire to delay or avoid knee replacement, where medically reasonable",
                        ],
                    },
                    { type: "heading", level: 3, text: "May not be the best candidate if you have:" },
                    {
                        type: "list",
                        items: [
                            "Severe end-stage OA (grade 4) with bone-on-bone changes and significant deformity",
                            "Active local infection in or around the knee",
                            "Certain bleeding disorders or uncontrolled medical conditions",
                            "A clear mechanical block requiring orthopedic surgery (e.g., a large displaced meniscal tear)",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "In such situations, surgical options are discussed openly and you may be referred to a trusted joint replacement specialist.",
                    },
                ],
            },
            {
                id: "procedure",
                title: "What happens during your visit",
                blocks: [
                    {
                        type: "ordered",
                        items: [
                            "Consultation (30–45 minutes): detailed history, knee examination, review of any prior X-ray or MRI, and a discussion of your goals.",
                            "Imaging review or fresh imaging if needed: X-ray, ultrasound, or MRI as clinically indicated.",
                            "Treatment plan: a written, step-wise plan with realistic expectations, options, costs, and time commitment.",
                            "Procedure (if scheduled): the area is cleaned and numbed; ultrasound is used for guidance where indicated; the injection is performed under sterile conditions; you rest briefly and head home.",
                            "Aftercare: simple do's and don'ts for 24–72 hours, followed by a structured rehab plan.",
                            "Follow-up: review at 2–4 weeks and again at 8–12 weeks to assess response and refine the plan.",
                        ],
                    },
                ],
            },
            {
                id: "recovery",
                title: "Recovery expectations — honest and realistic",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Most injection procedures are daycare. You walk in and walk out the same day.",
                            "Mild soreness at the injection site for 24–72 hours is common and self-limiting.",
                            "Pain relief is gradual. HA and regenerative injections often build their effect over 2–6 weeks.",
                            "One session is sometimes enough; sometimes a short series is recommended.",
                            "Long-term comfort depends on weight, physiotherapy adherence, footwear, and activity choices.",
                            "Severe degeneration may still progress despite excellent non-surgical care.",
                        ],
                    },
                ],
            },
            {
                id: "when-surgery",
                title: "When does knee surgery actually become necessary?",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Pain is severe and constant, including at rest or at night",
                            "Function is severely limited despite a sincere trial of non-surgical care",
                            "X-rays show advanced joint space loss with deformity",
                            "There is a structural problem (large displaced meniscal tear, locked knee, severe ligament rupture) that injections cannot address",
                            "Quality of life is significantly impaired",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Even then, a second opinion is reasonable. You will receive an honest assessment of whether your knee genuinely needs surgery — or whether non-surgical care still has real value.",
                    },
                ],
            },
            {
                id: "why-dr-nitin",
                title: "Why patients choose Dr. Nitin N Sunku",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Specialised focus on regenerative and non-surgical orthopedic care",
                            "Conservative, evidence-led philosophy — no over-promising",
                            "Ultrasound-guided injection capability for higher precision and safety",
                            "Two convenient locations — Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout",
                            "Transparent communication — you always know what is being recommended and why",
                            "Coordinated rehabilitation with trusted physiotherapy partners",
                            "Time given to each patient — not a five-minute consultation",
                        ],
                    },
                ],
            },
            {
                id: "service-area",
                title: "Local convenience for Bengaluru patients",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Whether you live near Hosa Road, Bommanahalli, Singasandra, Anekal, Chandapura, Hosur Road, HSR Layout, Bellandur, Sarjapur Road, or Electronic City, the two clinics are designed for easy access. The Attibele clinic at Raghava Multispeciality Hospital is convenient for Anekal, Bommasandra, Chandapura, Hosur Road, and Electronic City patients. The HSR Layout clinic at Health Nest Hospital is convenient for HSR, Koramangala, BTM Layout, Sarjapur Road, and Bellandur residents.",
                    },
                ],
            },
        ],
        faqs: [
            {
                q: "Can knee pain really be treated without surgery?",
                a: "Yes — most patients with mild-to-moderate knee osteoarthritis can be managed non-surgically with a combination of physiotherapy, weight management, and targeted injections such as hyaluronic acid or GFC. Surgery is reserved for advanced, structural, or non-responding cases.",
            },
            {
                q: "What is GFC therapy for the knee?",
                a: "Growth Factor Concentrate (GFC) is a regenerative injection prepared from a small sample of your own blood. It contains a high concentration of growth factors that may help reduce inflammation and support joint health. It is often considered an advanced alternative to traditional PRP.",
            },
            {
                q: "How long do hyaluronic acid injections last?",
                a: "Pain relief from HA injections varies. Many patients experience meaningful improvement for several months; some benefit for longer. Outcomes depend on OA grade, weight, and physical activity.",
            },
            {
                q: "Are knee injections painful?",
                a: "Most patients describe a mild pinch and pressure. Local anaesthetic is used and, where indicated, ultrasound guidance keeps the procedure as comfortable and accurate as possible.",
            },
            {
                q: "Is the procedure done under anaesthesia?",
                a: "Most knee injections are done as daycare procedures with only local anaesthesia. General anaesthesia is not required.",
            },
            {
                q: "How soon will I feel better?",
                a: "HA and regenerative injections work gradually. Many patients notice improvement starting around 2–4 weeks, with peak benefit typically by 6–12 weeks.",
            },
            {
                q: "How many sessions will I need?",
                a: "Some patients need a single injection; others benefit from a planned series. The schedule is customised based on imaging, OA grade, and response.",
            },
            {
                q: "Can these treatments completely cure osteoarthritis?",
                a: "No. Osteoarthritis is a progressive, age-related condition. Non-surgical treatments aim to reduce pain, improve function, and slow worsening — not deliver a permanent cure or fully regrow lost cartilage.",
            },
            {
                q: "Can I avoid knee replacement surgery completely?",
                a: "For many early-to-moderate OA patients, non-surgical care can delay or avoid surgery. For severe end-stage OA with deformity, surgery may eventually be the most reliable option. You will receive an honest assessment.",
            },
            {
                q: "How quickly can I return to work after a knee injection?",
                a: "Most office-going patients return to work the next day. Heavy gym workouts, long stair climbing, or running are best avoided for 48–72 hours.",
            },
            {
                q: "Will I need physiotherapy?",
                a: "Yes, in most cases. Strengthening the muscles around the knee dramatically improves and prolongs the benefit of any injection. Coordination with trusted physiotherapy partners is provided.",
            },
            {
                q: "Are your clinics easy to reach from Hosur Road or Sarjapur?",
                a: "Yes. The Attibele clinic at Raghava Multispeciality Hospital is on Sarjapura–Attibele Road and is convenient for Hosur Road, Anekal, Bommasandra, Chandapura, and Electronic City. The HSR Layout clinic at Health Nest Hospital serves HSR, Koramangala, BTM Layout, Sarjapur Road, and Bellandur.",
            },
            {
                q: "Can I get a second opinion before agreeing to knee replacement?",
                a: "Absolutely. Many patients come specifically for a second opinion before scheduled surgery, and that is welcomed.",
            },
        ],
        relatedLinks: [
            { label: "GFC Treatment for Knee Pain", href: "/treatments/gfc-treatment-knee-pain" },
            { label: "Hyaluronic Acid Injection Treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
            { label: "Ultrasound-Guided Injections", href: "/treatments/ultrasound-guided-orthopedic-injections" },
            { label: "Osteoarthritis Knee Treatment", href: "/treatments/osteoarthritis-knee-treatment" },
        ],
    },

    // ───────────────────────────────────────────────────────────────────
    // Pillar 2 — GFC Treatment for Knee Pain
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "gfc-treatment-knee-pain",
        title: "GFC Treatment for Knee Pain",
        shortDesc:
            "Advanced regenerative therapy using a concentrated dose of growth factors from your own blood — an upgraded alternative to traditional PRP.",
        metaTitle: "GFC Treatment for Knee Pain in Bengaluru | Dr. Nitin N Sunku",
        metaDescription:
            "Growth Factor Concentrate (GFC) therapy for knee pain and osteoarthritis by Dr. Nitin N Sunku at Attibele and HSR Layout, Bengaluru. A modern regenerative alternative to PRP. Procedure, benefits, recovery and FAQs.",
        heroH1: "GFC Therapy for Knee Pain — Advanced Regenerative Care in Bengaluru",
        heroSubhead:
            "Reduce knee pain, support joint health, and stay active longer with Growth Factor Concentrate therapy at Attibele and HSR Layout.",
        heroBullets: [
            "Uses your own concentrated growth factors",
            "Daycare procedure — typically 45–60 minutes total",
            "Often paired with hyaluronic acid for layered support",
            "Delivered with ultrasound guidance for accuracy",
        ],
        primaryKeywords: [
            "GFC treatment for knee pain in Bengaluru",
            "GFC injection knee Attibele",
            "growth factor concentrate therapy HSR Layout",
            "GFC therapy Electronic City",
            "GFC vs PRP knee",
        ],
        procedureName: "Growth Factor Concentrate (GFC) Therapy",
        bodyLocation: "Knee",
        color: "bg-emerald-50 text-emerald-600",
        icon: "Droplet",
        sections: [
            {
                id: "what-is-gfc",
                title: "What is GFC?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Growth Factor Concentrate (GFC) is a regenerative orthopedic therapy that uses a small sample of your own blood to prepare a concentrated dose of natural growth factors. These growth factors — including PDGF, TGF-β, VEGF, IGF, and EGF — play important roles in regulating inflammation and supporting tissue health.",
                    },
                    {
                        type: "paragraph",
                        text: "In simple terms: your body already produces healing signals. GFC concentrates these signals from your own blood and delivers them precisely into the painful knee joint or tendon to support a healthier joint environment.",
                    },
                    {
                        type: "callout",
                        tone: "honest",
                        text: "GFC does not regrow a fully damaged knee or replace lost cartilage. It is a supportive, biological therapy aimed at reducing pain and improving joint comfort.",
                    },
                ],
            },
            {
                id: "gfc-vs-prp",
                title: "How GFC differs from PRP",
                blocks: [
                    {
                        type: "paragraph",
                        text: "PRP (Platelet-Rich Plasma) and GFC start from the same place — your own blood — but differ in processing and end product.",
                    },
                    {
                        type: "table",
                        headers: ["Aspect", "PRP", "GFC"],
                        rows: [
                            ["Source", "Your own blood", "Your own blood"],
                            [
                                "Main content",
                                "Platelets, plasma, sometimes WBCs/RBCs",
                                "Concentrated growth factors released from platelets",
                            ],
                            ["Cellular debris", "Higher", "Lower"],
                            ["Standardisation", "Variable", "More standardised"],
                            ["Injection texture", "Often thicker", "Typically clearer & smoother"],
                            [
                                "Use case",
                                "Broad regenerative use",
                                "Often preferred when higher growth-factor purity is desired",
                            ],
                        ],
                    },
                ],
            },
            {
                id: "conditions",
                title: "Conditions GFC may help with",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Mild-to-moderate knee osteoarthritis",
                            "Patellar tendinopathy (jumper's knee)",
                            "Quadriceps tendon issues",
                            "Mild meniscal degeneration without mechanical block",
                            "Tennis elbow / golfer's elbow",
                            "Rotator cuff tendinopathy of the shoulder",
                            "Plantar fasciitis",
                            "Achilles tendinopathy",
                            "Selected post-injury joint pains where surgery isn't yet indicated",
                        ],
                    },
                ],
            },
            {
                id: "how-it-works",
                title: "How GFC works inside the knee",
                blocks: [
                    {
                        type: "paragraph",
                        text: "In a healthy knee, cartilage cushions movement and synovial fluid lubricates the joint. In OA, cartilage thins, inflammation rises, and the joint environment becomes less friendly to repair.",
                    },
                    {
                        type: "paragraph",
                        text: "GFC introduces a concentrated dose of growth factors directly into this environment. These signalling molecules can help modulate chronic low-grade inflammation, support local cells that maintain cartilage and tendon health, improve the biological climate of the joint, and reduce pain perception in many patients.",
                    },
                    {
                        type: "callout",
                        tone: "honest",
                        text: "Outcomes vary patient to patient — early-grade OA, healthier weight, and better muscle strength tend to respond best.",
                    },
                ],
            },
            {
                id: "procedure",
                title: "Step-by-step procedure",
                blocks: [
                    {
                        type: "ordered",
                        items: [
                            "Pre-procedure check — vitals, brief examination, confirmation that you are well-hydrated and have eaten a light meal",
                            "Blood draw (10–20 ml) — taken from your arm, just like a routine blood test",
                            "Processing — the sample is processed in a closed, sterile system to isolate and concentrate the growth factors",
                            "Joint preparation — the skin over the knee is cleaned and a local anaesthetic is applied",
                            "Ultrasound guidance (where indicated) — to ensure the injection is delivered exactly into the target",
                            "Injection — the GFC is injected slowly into the joint or tendon under sterile conditions",
                            "Brief observation — most patients walk out within 30–45 minutes of arriving",
                            "Aftercare instructions — written do's and don'ts for 24–72 hours",
                        ],
                    },
                    { type: "paragraph", text: "The whole visit usually takes about 45–60 minutes." },
                ],
            },
            {
                id: "benefits",
                title: "Benefits patients report",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Reduced knee pain, especially during walking and stair use",
                            "Improved range of motion",
                            "Less reliance on painkillers in many cases",
                            "Daycare procedure — no hospital stay, no general anaesthesia",
                            "Uses your own biology — no donor material",
                            "Quick return to routine for desk-based work and light activity",
                            "Can be combined with HA injections, physiotherapy, and weight management",
                        ],
                    },
                ],
            },
            {
                id: "eligibility",
                title: "Who is an ideal candidate?",
                blocks: [
                    { type: "heading", level: 3, text: "Likely a good candidate if you have:" },
                    {
                        type: "list",
                        items: [
                            "Early-to-moderate knee OA (typically Kellgren–Lawrence grade 1–3)",
                            "Persistent pain despite painkillers and basic physiotherapy",
                            "A goal to delay or avoid knee replacement, supported by your imaging",
                            "Tendon or sports-related knee pain not responding to rest and rehab",
                            "Reasonably stable general health",
                        ],
                    },
                    { type: "heading", level: 3, text: "May not be the right candidate if you have:" },
                    {
                        type: "list",
                        items: [
                            "Severe end-stage OA with bone-on-bone changes and major deformity",
                            "Active infection locally or systemically",
                            "Uncontrolled bleeding disorders or are on certain anticoagulants",
                            "Active malignancy (decision is individualised)",
                            "A mechanical block (locked knee, displaced large meniscal tear) requiring surgery first",
                        ],
                    },
                ],
            },
            {
                id: "recovery",
                title: "Recovery and aftercare",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "First 24–72 hours: mild soreness, warmth, or swelling at the injection site is normal — use ice as advised",
                            "Activity: light walking is encouraged; avoid heavy gym, running, long stair-climbing, or deep squats for 3–5 days",
                            "Medications: avoid NSAIDs for the period advised, since they may blunt the regenerative response",
                            "Hydration & nutrition: stay well-hydrated; balanced meals with adequate protein",
                            "Physiotherapy: begin or continue your prescribed strengthening programme as advised",
                            "Onset of relief: most patients begin noticing improvement around 2–4 weeks, with peak benefit typically by 6–12 weeks",
                            "Follow-up: usually scheduled at 3–4 weeks and 8–12 weeks",
                        ],
                    },
                ],
            },
            {
                id: "expectations",
                title: "Expected outcomes — set the right expectations",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Many patients experience meaningful pain reduction and better mobility for several months",
                            "Some patients require a planned series of 2–3 sessions, spaced as advised",
                            "A minority may not respond as hoped — alternative pathways including HA, lifestyle changes, or surgical referral are then discussed",
                            "Long-term comfort depends on weight, muscle strength, lifestyle, and follow-up — not the injection alone",
                        ],
                    },
                ],
            },
            {
                id: "safety",
                title: "Safety and side effects",
                blocks: [
                    {
                        type: "paragraph",
                        text: "GFC is generally well tolerated because it is autologous — made from your own blood. Possible, usually minor and self-limiting, side effects include:",
                    },
                    {
                        type: "list",
                        items: [
                            "Mild pain or stiffness at the injection site",
                            "Temporary warmth or redness",
                            "Short-term swelling",
                            "Rarely, headache or low-grade fatigue for a day",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Serious complications such as infection are uncommon when the procedure is performed in a sterile setup, especially with ultrasound guidance.",
                    },
                ],
            },
            {
                id: "service-area",
                title: "Service area — Attibele, HSR Layout, and South Bengaluru",
                blocks: [
                    {
                        type: "paragraph",
                        text: "GFC consultations are offered at Raghava Multispeciality Hospital, Attibele — convenient for patients from Anekal, Bommasandra, Chandapura, Hosur Road, and Electronic City — and at Health Nest Hospital, HSR Layout — convenient for HSR, Koramangala, BTM Layout, Sarjapur Road, and Bellandur.",
                    },
                ],
            },
        ],
        faqs: [
            { q: "What is GFC therapy in simple terms?", a: "GFC is an injection prepared from a small sample of your own blood that contains a concentrated dose of natural growth factors. It is used to help reduce joint pain and support tissue health." },
            { q: "Is GFC the same as PRP?", a: "No. GFC is derived from blood like PRP, but is processed further to isolate and concentrate the growth factors with reduced cellular debris." },
            { q: "Is GFC safe?", a: "Because GFC uses your own blood, it has a strong safety profile. The most common side effects are minor — mild swelling or soreness at the injection site for 24–72 hours." },
            { q: "How long does the procedure take?", a: "The full visit typically takes 45–60 minutes — including blood draw, processing, and injection." },
            { q: "Will it hurt?", a: "A small needle is used for the blood draw and the injection. Local anaesthetic is applied. Most patients describe mild pressure rather than sharp pain." },
            { q: "When will I feel relief?", a: "Most patients notice improvement around 2–4 weeks, with peak benefit usually by 6–12 weeks." },
            { q: "How many sessions are needed?", a: "Some patients do well with one session; others benefit from a planned series of 2–3. This is personalised." },
            { q: "Can GFC regrow my cartilage?", a: "No. GFC is a supportive regenerative therapy. It can help reduce pain and improve joint comfort, but it does not regrow lost cartilage or reverse advanced OA." },
            { q: "Can GFC be combined with HA injections?", a: "Yes — combination therapy is often used for moderate OA. The most appropriate sequence is recommended after evaluation." },
            { q: "Is ultrasound guidance always used?", a: "Ultrasound guidance is used wherever it improves accuracy and safety, especially for tendons and small target areas. For straightforward knee joint injections, a landmark technique may sometimes be sufficient." },
            { q: "Can diabetic patients undergo GFC?", a: "Generally yes, provided sugars are reasonably controlled. Each case is reviewed individually." },
            { q: "Is GFC suitable for senior citizens?", a: "Age alone is not a barrier. Suitability depends on OA grade, overall health, and goals. Many seniors benefit." },
            { q: "What if GFC does not help me enough?", a: "We re-evaluate. Options may include a second session, HA injections, modified rehab, or — when truly indicated — surgical referral." },
        ],
        relatedLinks: [
            { label: "Non-Surgical Knee Pain Treatment (hub)", href: "/treatments/non-surgical-knee-pain-treatment" },
            { label: "Hyaluronic Acid Injection Treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
            { label: "Ultrasound-Guided Injections", href: "/treatments/ultrasound-guided-orthopedic-injections" },
            { label: "Osteoarthritis Knee Treatment", href: "/treatments/osteoarthritis-knee-treatment" },
        ],
    },

    // ───────────────────────────────────────────────────────────────────
    // Pillar 3 — Hyaluronic Acid (HA) Injection Treatment
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "hyaluronic-acid-injection-treatment",
        title: "Hyaluronic Acid Injection Treatment",
        shortDesc:
            "Restore lubrication and cushioning inside the knee with viscosupplementation — a trusted non-surgical option for mild-to-moderate osteoarthritis.",
        metaTitle: "Hyaluronic Acid Injection for Knee Pain in Bengaluru | Dr. Nitin N Sunku",
        metaDescription:
            "Hyaluronic Acid (HA) injection treatment for knee osteoarthritis at Dr. Nitin N Sunku's clinics in Attibele (Raghava Multispeciality) and HSR Layout (Health Nest Hospital), Bengaluru. Lubricate, cushion, move better.",
        heroH1: "Hyaluronic Acid Injections for Knee Pain — Lubricate, Cushion, Move Better",
        heroSubhead:
            "A trusted non-surgical option for mild-to-moderate knee osteoarthritis at Dr. Nitin N Sunku's clinics in Attibele and HSR Layout, Bengaluru.",
        heroBullets: [
            "Restores lubrication and shock absorption",
            "Daycare procedure — typically 30–45 minutes total",
            "Often gives meaningful relief for several months",
            "Pairs well with physiotherapy and GFC for layered care",
        ],
        primaryKeywords: [
            "hyaluronic acid injection knee in Bengaluru",
            "HA injection for knee pain Attibele",
            "viscosupplementation knee HSR Layout",
            "knee gel injection Bengaluru",
            "hyaluronic acid knee treatment near me",
        ],
        procedureName: "Hyaluronic Acid Viscosupplementation",
        bodyLocation: "Knee",
        color: "bg-cyan-50 text-cyan-600",
        icon: "Sparkles",
        sections: [
            {
                id: "what-is-ha",
                title: "What is hyaluronic acid?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Hyaluronic acid (HA) is a naturally occurring substance found throughout your body — including inside healthy knee joints, where it is a key component of the synovial fluid that lubricates and cushions cartilage during movement.",
                    },
                    { type: "heading", level: 3, text: "In a healthy knee, HA helps the joint:" },
                    {
                        type: "list",
                        items: [
                            "Glide smoothly with every step",
                            "Absorb shock during walking, climbing, and squatting",
                            "Protect the cartilage from excessive wear",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "In knee osteoarthritis, the quality and quantity of natural HA in the joint fluid decline. The fluid becomes thinner and less protective. Hyaluronic acid injection therapy — also called viscosupplementation — restores some of that lubricating and cushioning quality directly inside the knee joint.",
                    },
                ],
            },
            {
                id: "how-helps",
                title: "How HA injections actually help",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Lubricate — improving smoothness of joint movement",
                            "Cushion — distributing load more evenly across the joint",
                            "Reduce pain — by improving the joint's mechanical environment",
                            "Decrease stiffness — particularly noticeable in the morning and after rest",
                            "Improve walking comfort — including stair use and longer-distance walking",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "honest",
                        text: "HA does not regrow cartilage. Think of it as restoring the oil in a creaking hinge — it makes the hinge work better and reduces wear, even if the hinge itself isn't new.",
                    },
                ],
            },
            {
                id: "best-for",
                title: "Who is HA most suitable for?",
                blocks: [
                    { type: "heading", level: 3, text: "Works best in:" },
                    {
                        type: "list",
                        items: [
                            "Mild OA (KL grade 1–2) — often gives strong, lasting comfort",
                            "Moderate OA (KL grade 2–3) — typically gives meaningful relief, though benefit may not last as long",
                            "Patients who want to delay or avoid knee replacement",
                            "Patients who cannot tolerate long-term painkillers (stomach, kidney, or heart concerns)",
                            "Active adults who want to keep walking, working, and exercising",
                            "Patients who have tried oral medications and physiotherapy with limited relief",
                        ],
                    },
                    { type: "heading", level: 3, text: "Less reliably effective in:" },
                    {
                        type: "list",
                        items: [
                            "End-stage OA (KL grade 4) with bone-on-bone changes and significant deformity",
                            "Patients with severe inflammation or infection in the joint",
                            "Patients with major mechanical issues (locked knee, large meniscal tear)",
                        ],
                    },
                ],
            },
            {
                id: "comparison",
                title: "How HA compares with other knee treatments",
                blocks: [
                    {
                        type: "table",
                        headers: ["Treatment", "What it does", "When it shines"],
                        rows: [
                            ["Painkillers (oral)", "Mask pain temporarily", "Short flares; not a long-term solution"],
                            ["Physiotherapy", "Strengthens supporting muscles", "Foundation for every plan"],
                            ["HA injection", "Restores lubrication & cushioning", "Mild-to-moderate OA, daily comfort"],
                            ["GFC therapy", "Delivers concentrated growth factors", "Regenerative support, tendon issues"],
                            ["HA + GFC", "Lubrication + biological support", "Layered care for moderate OA"],
                            ["Knee replacement", "Replaces damaged joint", "Severe OA after non-surgical care has been tried"],
                        ],
                    },
                ],
            },
            {
                id: "procedure",
                title: "Step-by-step procedure",
                blocks: [
                    {
                        type: "ordered",
                        items: [
                            "Pre-procedure assessment — clinical exam, X-ray review, OA grading, and confirmation of suitability",
                            "Skin preparation — the area over the knee is cleaned thoroughly under sterile conditions",
                            "Local anaesthetic — applied to make the injection comfortable",
                            "Ultrasound guidance (where indicated) — ensures the needle is placed exactly inside the joint",
                            "HA injection — the hyaluronic acid is injected slowly into the knee joint",
                            "Brief observation — you rest briefly and walk out the same day",
                            "Aftercare — written do's and don'ts for 24–72 hours",
                        ],
                    },
                    { type: "paragraph", text: "The full visit typically takes 30–45 minutes." },
                ],
            },
            {
                id: "benefits",
                title: "Benefits patients report",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Smoother walking with less catching and stiffness",
                            "Easier stair use within a few weeks",
                            "Reduced morning stiffness",
                            "Less reliance on painkillers in many cases",
                            "Daycare, ambulatory procedure — no hospital stay",
                            "No general anaesthesia",
                            "Quick return to office work — usually within 24 hours",
                            "Often relief that lasts several months, sometimes longer",
                            "Can be repeated on a planned schedule",
                        ],
                    },
                ],
            },
            {
                id: "recovery",
                title: "What recovery looks like",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Day 0–2: mild soreness or warmth at the injection site is normal; use ice as advised; avoid heavy gym and long stair-climbing",
                            "Day 3–7: most patients return to walking and routine activity comfortably",
                            "Week 2–4: pain and stiffness begin to improve noticeably for many patients",
                            "Week 4–12: peak benefit is typically experienced",
                            "Beyond 12 weeks: benefit can continue for several months, depending on OA grade, weight, and activity",
                        ],
                    },
                ],
            },
            {
                id: "combinations",
                title: "How HA pairs with other treatments",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "HA + physiotherapy — strengthens the muscles that protect the joint, multiplying benefit",
                            "HA + weight management — every kilo lost reduces knee load; HA buys you a more comfortable window to exercise",
                            "HA + GFC — combination of mechanical lubrication and biological support, often used for moderate OA",
                            "HA + footwear and activity coaching — small lifestyle changes that compound results",
                        ],
                    },
                ],
            },
            {
                id: "safety",
                title: "Safety profile",
                blocks: [
                    {
                        type: "paragraph",
                        text: "HA injections have been used worldwide for decades and are well-studied. Side effects are usually minor and self-limiting:",
                    },
                    {
                        type: "list",
                        items: [
                            "Temporary soreness or warmth at the injection site",
                            "Mild swelling for 24–72 hours",
                            "Rarely, a transient inflammatory reaction (usually settles with rest and ice)",
                            "Infection is rare when sterile technique is followed",
                        ],
                    },
                ],
            },
            {
                id: "service-area",
                title: "Service area — South Bengaluru",
                blocks: [
                    {
                        type: "paragraph",
                        text: "HA viscosupplementation is offered at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Patients travel from Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City, HSR Layout, Koramangala, BTM Layout, Sarjapur Road, and Bellandur for evaluation and treatment.",
                    },
                ],
            },
        ],
        faqs: [
            { q: "What is a hyaluronic acid knee injection?", a: "It is an injection of hyaluronic acid — a substance naturally present in healthy joint fluid — directly into the knee joint to improve lubrication, cushioning, and comfort." },
            { q: "Is HA injection the same as a 'gel injection' or 'lubricant injection'?", a: "Yes. These terms commonly refer to the same therapy: viscosupplementation with hyaluronic acid." },
            { q: "How long does HA last in the knee?", a: "Many patients experience meaningful relief for several months. Duration depends on OA grade, weight, activity level, and the specific HA product used." },
            { q: "How many HA injections will I need?", a: "Some HA preparations are given as a single injection, others as a short series of 2–5 weekly injections. The schedule is recommended after evaluation." },
            { q: "Does HA hurt?", a: "Most patients describe mild pressure rather than sharp pain. Local anaesthetic is used, and ultrasound guidance helps where appropriate." },
            { q: "Can HA cure my knee osteoarthritis?", a: "No. HA is not a cure. It improves the joint's mechanical environment, reducing pain and stiffness, but does not reverse OA or regrow cartilage." },
            { q: "How soon will I feel better?", a: "Many patients begin to notice improvement within 2–4 weeks. Peak benefit is usually around 6–12 weeks." },
            { q: "Can HA be repeated?", a: "Yes — many patients have HA injections repeated periodically, often once or twice a year, depending on response." },
            { q: "Can HA replace knee surgery?", a: "For mild-to-moderate OA, HA can delay or sometimes avoid the need for surgery. For severe OA with deformity, surgery may eventually be necessary." },
            { q: "Can HA be combined with GFC?", a: "Yes. Combination protocols are commonly used. The recommended sequence and timing are discussed during evaluation." },
            { q: "Is the procedure done in a hospital?", a: "It is a daycare clinic procedure. You walk in and walk out the same day." },
            { q: "Are HA injections safe for senior citizens?", a: "Yes. Age alone is not a barrier. Many senior patients benefit significantly." },
            { q: "Will I need physiotherapy after HA?", a: "Strengthening exercises greatly improve and prolong the benefit of HA. Physiotherapy support is coordinated for you." },
        ],
        relatedLinks: [
            { label: "Non-Surgical Knee Pain Treatment (hub)", href: "/treatments/non-surgical-knee-pain-treatment" },
            { label: "GFC Treatment for Knee Pain", href: "/treatments/gfc-treatment-knee-pain" },
            { label: "Ultrasound-Guided Injections", href: "/treatments/ultrasound-guided-orthopedic-injections" },
            { label: "Osteoarthritis Knee Treatment", href: "/treatments/osteoarthritis-knee-treatment" },
        ],
    },

    // ───────────────────────────────────────────────────────────────────
    // Pillar 4 — Ultrasound-Guided Orthopedic Injections
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "ultrasound-guided-orthopedic-injections",
        title: "Ultrasound-Guided Orthopedic Injections",
        shortDesc:
            "Real-time imaging delivers medication exactly to the right structure inside your joint or tendon — improving accuracy, comfort, and safety.",
        metaTitle: "Ultrasound-Guided Orthopedic Injections in Bengaluru | Dr. Nitin N Sunku",
        metaDescription:
            "Ultrasound-guided orthopedic injections by Dr. Nitin N Sunku at Raghava Multispeciality Hospital (Attibele) and Health Nest Hospital (HSR Layout). Real-time imaging for safer, more accurate knee, shoulder, hip, and tendon injections.",
        heroH1: "Ultrasound-Guided Orthopedic Injections — Precision Where It Matters",
        heroSubhead:
            "Real-time imaging means medication or regenerative material reaches exactly the right structure inside your joint or tendon. Performed by Dr. Nitin N Sunku in Attibele and HSR Layout, Bengaluru.",
        heroBullets: [
            "Higher accuracy — needle delivery confirmed visually",
            "No radiation — ultrasound uses sound waves",
            "Diagnostic + therapeutic in one visit",
            "Especially valuable for shoulder, hip, and tendon problems",
        ],
        primaryKeywords: [
            "ultrasound-guided injection in Bengaluru",
            "ultrasound-guided knee injection Attibele",
            "USG-guided shoulder injection HSR Layout",
            "image-guided orthopedic injection Electronic City",
            "precise knee injection Bengaluru",
        ],
        procedureName: "Ultrasound-Guided Orthopedic Injection",
        bodyLocation: "Multiple Joints",
        color: "bg-violet-50 text-violet-600",
        icon: "Crosshair",
        sections: [
            {
                id: "why-precision",
                title: "Why injection accuracy matters",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Inside your joint, the spaces that matter — the joint cavity, a tendon sheath, a small bursa — are sometimes only millimetres in size and surrounded by nerves, blood vessels, and other delicate tissue. Even an experienced clinician using only feel cannot always be sure the needle has reached the correct target.",
                    },
                    { type: "heading", level: 3, text: "When an injection misses by even a few millimetres:" },
                    {
                        type: "list",
                        items: [
                            "The medication doesn't fully reach where it's needed, so the patient gets less benefit than expected",
                            "The injection lands in the wrong tissue, sometimes causing more pain or unintended side effects",
                        ],
                    },
                    { type: "paragraph", text: "Ultrasound guidance solves this." },
                ],
            },
            {
                id: "what-is-it",
                title: "What is an ultrasound-guided injection?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "An ultrasound-guided injection uses real-time, radiation-free imaging to:",
                    },
                    {
                        type: "list",
                        items: [
                            "See the joint, tendon, bursa, or nerve as it is, right now",
                            "Track the needle in motion as it moves through tissue",
                            "Confirm the injection is being delivered to exactly the intended target",
                            "Adjust on the fly if anatomy is unusual",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Think of it like landing a plane: you can do it with skill and feel, but with instruments, you do it more safely and accurately every single time.",
                    },
                ],
            },
            {
                id: "how-it-looks",
                title: "What ultrasound-guided injections look like",
                blocks: [
                    {
                        type: "ordered",
                        items: [
                            "Apply a small amount of clear, water-based gel to your skin",
                            "Place the ultrasound probe over the painful area",
                            "Watch a live black-and-white image of the inside of your joint or tendon",
                            "Use that live image to plan the safest path for the needle",
                            "Slowly advance the needle while watching it on screen",
                            "Confirm the needle is in the correct space, then deliver the injection",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "It is non-painful, uses no radiation (unlike fluoroscopy), and is performed entirely in the clinic.",
                    },
                ],
            },
            {
                id: "outcomes",
                title: "Why precision improves outcomes",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Pain relief is often better and longer-lasting",
                            "Less medication is wasted in surrounding tissue",
                            "Fewer repeat injections may be needed",
                            "Side-effect risk drops — fewer surprise reactions in soft tissue",
                            "Diagnostic clarity improves — when an accurate injection clearly relieves pain, it helps confirm the source of pain",
                        ],
                    },
                ],
            },
            {
                id: "conditions",
                title: "Conditions treated with ultrasound-guided injections",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Knee osteoarthritis — HA, GFC, or other intra-articular injections",
                            "Patellar tendinopathy — peritendinous regenerative injections",
                            "Quadriceps tendinopathy",
                            "Pes anserine bursitis",
                            "Iliotibial (IT) band issues",
                            "Shoulder pain — subacromial bursitis, rotator cuff tendinopathy, biceps tendon sheath, AC joint, frozen shoulder injections",
                            "Tennis elbow / golfer's elbow",
                            "Hip joint pain and trochanteric bursitis",
                            "Plantar fasciitis",
                            "Achilles tendinopathy",
                            "Wrist & ankle joints",
                            "Carpal tunnel syndrome — selected cases",
                            "Ganglion cyst aspiration",
                        ],
                    },
                ],
            },
            {
                id: "vs-fluoroscopy",
                title: "Why ultrasound rather than X-ray (fluoroscopy)?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Fluoroscopy is also a valid form of guidance, especially for spine procedures. For most musculoskeletal joints and soft tissues, ultrasound has clear advantages:",
                    },
                    {
                        type: "list",
                        items: [
                            "No ionising radiation — safe for repeated visits",
                            "Soft-tissue clarity — shows tendons, nerves, vessels, fluid collections in detail",
                            "Real-time movement — the joint can be moved during the scan to confirm the diagnosis",
                            "In-clinic convenience — no need to schedule a separate radiology suite",
                            "Lower cost in many cases",
                        ],
                    },
                ],
            },
            {
                id: "visit-flow",
                title: "How a visit flows",
                blocks: [
                    {
                        type: "ordered",
                        items: [
                            "Consultation — review of your history, examination, and prior imaging",
                            "Diagnostic ultrasound scan — the painful structure is examined live",
                            "Decision — the right type of injection is recommended (HA, GFC, corticosteroid in select cases, viscosupplementation, etc.)",
                            "Sterile preparation — the area is cleaned; sterile probe cover and gel are used",
                            "Local anaesthetic as needed",
                            "Needle placement under live imaging",
                            "Injection — the medication is delivered slowly and confirmed visibly on screen",
                            "Brief observation, then home",
                            "Aftercare instructions — written do's and don'ts",
                        ],
                    },
                    { type: "paragraph", text: "Total visit time: typically 30–60 minutes." },
                ],
            },
            {
                id: "benefits",
                title: "Benefits at a glance",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Higher accuracy — needle delivery is confirmed visually",
                            "Higher safety — vessels and nerves are visualised and avoided",
                            "Better outcomes — more reliable pain relief, especially in tendon and small-joint problems",
                            "Daycare procedure — walk in, walk out the same day",
                            "No radiation",
                            "Excellent for repeat treatments — patients can return safely as needed",
                            "Diagnostic + therapeutic in one visit",
                        ],
                    },
                ],
            },
            {
                id: "service-area",
                title: "Service area — South Bengaluru",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Image-guided injections are offered at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. The clinics serve patients from Attibele, Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City, HSR Layout, Koramangala, BTM Layout, Sarjapur Road, and Bellandur.",
                    },
                ],
            },
        ],
        faqs: [
            { q: "What is an ultrasound-guided orthopedic injection?", a: "It is an injection performed using real-time ultrasound imaging so that the needle can be precisely placed in the intended joint, tendon, or bursa under direct visualisation." },
            { q: "How is it different from a normal injection?", a: "A normal landmark injection relies on the doctor's feel and external bony landmarks. Ultrasound guidance lets the doctor see the needle's path and confirm placement, making it more accurate." },
            { q: "Is ultrasound guidance painful?", a: "No. The ultrasound itself is painless — only some clear gel and a probe on your skin. The injection feels similar to or less painful than a non-guided injection because the path is more accurate." },
            { q: "Is there any radiation involved?", a: "No. Ultrasound uses sound waves, not radiation. It is safe for repeated use." },
            { q: "Why is ultrasound guidance preferred for some injections?", a: "Because it improves accuracy, reduces the risk of hitting the wrong structure, and tends to give better and longer-lasting relief — particularly for tendons, small joints, and deep targets like the hip." },
            { q: "Will I always need ultrasound guidance for my injection?", a: "Not necessarily. For some straightforward cases, landmark injection is acceptable. Image guidance is recommended where it meaningfully improves accuracy or safety." },
            { q: "Can ultrasound-guided injections be done for shoulder pain?", a: "Yes. The shoulder has many small structures (bursa, rotator cuff, biceps tendon, AC joint), and image guidance is especially valuable here." },
            { q: "Can I drive after an ultrasound-guided injection?", a: "Most patients can. A short observation period before leaving the clinic is recommended." },
            { q: "How long does the procedure take?", a: "Typically 30–60 minutes including consultation, scan, and injection." },
            { q: "Can ultrasound also diagnose my condition?", a: "Yes. Ultrasound is both diagnostic and therapeutic — it can identify tendon tears, fluid collections, bursitis, and more, in real time." },
            { q: "Can repeated injections be done safely with ultrasound?", a: "Yes. Because there is no radiation and the technique is precise, repeat injections can be done safely." },
            { q: "Will I feel relief immediately?", a: "It depends on what was injected. Corticosteroids can give relief within days, while regenerative injections (GFC) and HA build benefit over a few weeks." },
            { q: "How sterile is the procedure?", a: "Highly sterile — sterile probe covers, sterile gel, antiseptic skin preparation, and a sterile needle and syringe." },
        ],
        relatedLinks: [
            { label: "Non-Surgical Knee Pain Treatment (hub)", href: "/treatments/non-surgical-knee-pain-treatment" },
            { label: "GFC Treatment for Knee Pain", href: "/treatments/gfc-treatment-knee-pain" },
            { label: "Hyaluronic Acid Injection Treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
            { label: "Osteoarthritis Knee Treatment", href: "/treatments/osteoarthritis-knee-treatment" },
        ],
    },

    // ───────────────────────────────────────────────────────────────────
    // Pillar 5 — Osteoarthritis Knee Treatment
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "osteoarthritis-knee-treatment",
        title: "Osteoarthritis Knee Treatment",
        shortDesc:
            "Comprehensive non-surgical care for knee osteoarthritis — KL grading, physiotherapy, weight management, and targeted injections.",
        metaTitle: "Osteoarthritis Knee Treatment in Bengaluru | OA Grades, Symptoms & Care | Dr. Nitin N Sunku",
        metaDescription:
            "Comprehensive guide to knee osteoarthritis treatment by Dr. Nitin N Sunku at Raghava Multispeciality Hospital (Attibele) and Health Nest Hospital (HSR Layout). Understand OA grades, symptoms, causes, and modern non-surgical options.",
        heroH1: "Knee Osteoarthritis Treatment in Bengaluru — Understand It, Manage It, Move Better",
        heroSubhead:
            "A complete patient guide to knee OA — symptoms, stages, modern non-surgical treatments, and when surgery becomes necessary. Care led by Dr. Nitin N Sunku in Attibele and HSR Layout.",
        heroBullets: [
            "Honest grading and imaging review in plain language",
            "All major non-surgical options under one roof",
            "Conservative-first philosophy — no rushing to surgery",
            "Personalised plan rather than one-size-fits-all",
        ],
        primaryKeywords: [
            "osteoarthritis knee treatment in Bengaluru",
            "knee OA treatment Attibele",
            "OA knee specialist HSR Layout",
            "knee osteoarthritis Electronic City",
            "OA knee grades treatment",
        ],
        procedureName: "Knee Osteoarthritis Management",
        bodyLocation: "Knee",
        color: "bg-rose-50 text-rose-600",
        icon: "Stethoscope",
        sections: [
            {
                id: "what-is-oa",
                title: "What is knee osteoarthritis?",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Osteoarthritis (OA) is the most common form of arthritis. It is a slow, age-related condition where the articular cartilage — the smooth covering at the ends of bones inside the knee — gradually thins and wears down. Over time, the joint loses some of its cushioning, the protective synovial fluid changes in quality, and inflammation can set in.",
                    },
                    {
                        type: "paragraph",
                        text: "OA is sometimes called wear-and-tear arthritis, but that is an oversimplification. It is actually an active, multifactorial process involving cartilage cells, the bone underneath, the joint lining, and supporting muscles.",
                    },
                ],
            },
            {
                id: "symptoms",
                title: "Common symptoms of knee OA",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Pain while walking, especially on uneven ground",
                            "Pain when climbing or descending stairs",
                            "Morning stiffness that improves after some movement",
                            "Clicking or grinding sensations (crepitus)",
                            "Swelling around the kneecap",
                            "Difficulty squatting, sitting cross-legged, or kneeling",
                            "Fatigue in the legs after standing for long",
                            "A feeling of giving way in advanced cases",
                            "Loss of full range of motion",
                        ],
                    },
                ],
            },
            {
                id: "causes",
                title: "What causes osteoarthritis?",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Age — risk increases significantly after 40",
                            "Genetics & family history",
                            "Excess body weight — every extra kilo adds 3–4 kg of load across the knee while walking",
                            "Female gender — slightly higher risk after menopause",
                            "Past injuries — old fractures, ligament tears, meniscal tears",
                            "Repetitive overuse — high-impact sports, heavy manual work",
                            "Knee alignment — bow legs (varus) or knock-knees (valgus)",
                            "Muscle weakness — weak quadriceps, hamstrings, or hip stabilisers",
                            "Metabolic factors — diabetes and other systemic conditions",
                        ],
                    },
                ],
            },
            {
                id: "kl-grading",
                title: "How OA is graded — the Kellgren–Lawrence (KL) classification",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Doctors use a 0–4 grading system based on X-ray findings:",
                    },
                    {
                        type: "list",
                        items: [
                            "Grade 0: Normal — no signs of OA on X-ray",
                            "Grade 1 (Doubtful): Possible joint space narrowing; very mild changes",
                            "Grade 2 (Mild): Definite small bone spurs (osteophytes); possible joint space narrowing",
                            "Grade 3 (Moderate): Multiple osteophytes, definite joint space narrowing, some bony changes",
                            "Grade 4 (Severe / End-stage): Large osteophytes, marked joint space narrowing, deformity, bone-on-bone changes",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "info",
                        text: "Grade is one piece of the picture — it must be interpreted alongside your symptoms, function, and lifestyle. Some Grade 2 patients have severe pain; some Grade 3 patients walk comfortably with the right plan.",
                    },
                ],
            },
            {
                id: "treatment-ladder",
                title: "Treatment ladder — from foundation care to surgery",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Modern OA care is best understood as a ladder, not a single intervention. Most patients climb only as high as needed.",
                    },
                    { type: "heading", level: 3, text: "Step 1 — Foundation care (everyone)" },
                    {
                        type: "list",
                        items: [
                            "Patient education",
                            "Activity modification & sensible pacing",
                            "Physiotherapy and structured exercise",
                            "Weight management",
                            "Footwear and gait advice",
                        ],
                    },
                    { type: "heading", level: 3, text: "Step 2 — Medications (as needed)" },
                    {
                        type: "list",
                        items: [
                            "Paracetamol for symptomatic relief",
                            "Short-term NSAIDs when appropriate, with stomach/kidney/heart safety in mind",
                            "Topical anti-inflammatories",
                            "Selected supplements (limited but real role in some patients)",
                        ],
                    },
                    { type: "heading", level: 3, text: "Step 3 — Targeted injections" },
                    {
                        type: "list",
                        items: [
                            "Hyaluronic acid injections — joint lubrication & cushioning support",
                            "GFC therapy — concentrated regenerative growth factors",
                            "Corticosteroid injection — targeted, short-term inflammation control in selected scenarios",
                            "All injections, where indicated, performed under ultrasound guidance",
                        ],
                    },
                    { type: "heading", level: 3, text: "Step 4 — Combination & repeat protocols" },
                    {
                        type: "list",
                        items: [
                            "HA + GFC layered care for moderate OA",
                            "Periodic top-up injections",
                            "Continued physiotherapy",
                        ],
                    },
                    { type: "heading", level: 3, text: "Step 5 — Surgical referral, when truly indicated" },
                    {
                        type: "list",
                        items: [
                            "Arthroscopic procedures (selected cases)",
                            "Osteotomy for alignment correction",
                            "Partial knee replacement",
                            "Total knee replacement",
                        ],
                    },
                ],
            },
            {
                id: "lifestyle",
                title: "Living well with knee OA — practical day-to-day tips",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Move every hour — long static sitting stiffens the joint",
                            "Warm up before walks — a few gentle leg swings and quad activations",
                            "Climb stairs the smart way — leading with the stronger leg up, weaker leg down",
                            "Manage flares — short rest, ice, modified activity, then gradual return",
                            "Strengthen consistently — 3 short sessions per week beats one long session",
                            "Sleep well — poor sleep amplifies pain perception",
                            "Track triggers — note which activities reliably worsen or improve your knee",
                        ],
                    },
                ],
            },
            {
                id: "when-surgery",
                title: "When does knee OA need surgery?",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Pain is severe, persistent, and present at rest or at night",
                            "Function is severely impaired despite a good non-surgical trial",
                            "Imaging shows advanced changes (Grade 3–4) with deformity",
                            "There is a structural problem like a large displaced meniscal tear or locked knee",
                            "Quality of life is significantly affected",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Even then, you deserve a clear explanation of which operation is being recommended and why. Trusted joint-replacement surgeons are involved when patients reach this point — and you will be told honestly when you are not there yet.",
                    },
                ],
            },
            {
                id: "service-area",
                title: "Service area — South Bengaluru",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Knee OA evaluation and treatment are offered at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Bring your X-ray or MRI; it will be reviewed and explained in plain language during your consultation. Patients travel from Attibele, Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City, HSR Layout, Koramangala, BTM Layout, Sarjapur Road, and Bellandur.",
                    },
                ],
            },
        ],
        faqs: [
            { q: "What is knee osteoarthritis?", a: "It is a chronic condition where the cartilage cushioning the knee joint slowly wears down, leading to pain, stiffness, and reduced movement." },
            { q: "Is knee OA the same as arthritis?", a: "OA is the most common type of arthritis. There are other types like rheumatoid arthritis, gout, and post-infectious arthritis, which are managed differently." },
            { q: "Can knee OA be reversed?", a: "No. OA cannot be reversed, and lost cartilage cannot be fully regrown. However, modern care can significantly reduce pain, improve function, and slow progression." },
            { q: "How is knee OA diagnosed?", a: "By a combination of symptoms, examination, and X-ray. MRI may be added in select cases." },
            { q: "What are the grades of knee OA?", a: "Grade 0–4 on the Kellgren–Lawrence system. Grade 0 is normal, Grade 4 is severe end-stage OA." },
            { q: "What is the best treatment for knee OA?", a: "There is no single best treatment. The best care is a personalised, layered plan combining lifestyle changes, physiotherapy, and — where indicated — HA, GFC, or other targeted injections." },
            { q: "Can OA be treated without surgery?", a: "Most patients with mild-to-moderate OA can be managed without surgery. Severe end-stage OA may eventually need surgical care." },
            { q: "Are HA injections better than GFC for OA?", a: "They serve different purposes. HA improves lubrication; GFC supports the biological environment of the joint. Many patients benefit from a combination." },
            { q: "Is exercise safe with knee OA?", a: "Yes — and it's essential. The right kind of exercise (low-impact strength + flexibility) protects the knee. Avoid deep squats and high-impact running during flares." },
            { q: "Does walking worsen knee OA?", a: "Sensible, paced walking generally helps. Walking too fast, too far, or on hard surfaces during flares can aggravate symptoms." },
            { q: "Will losing weight really reduce my knee pain?", a: "Yes — significantly. Even a 5–10% weight reduction can produce meaningful improvement in many patients." },
            { q: "Is bone-on-bone the same as needing surgery?", a: "Not always. Even bone-on-bone OA can sometimes be managed conservatively for a meaningful period, especially when symptoms and function still allow daily life." },
            { q: "Can OA affect both knees?", a: "Yes. Bilateral knee OA is common, especially in older adults. Both knees can be assessed and treated." },
        ],
        relatedLinks: [
            { label: "Non-Surgical Knee Pain Treatment (hub)", href: "/treatments/non-surgical-knee-pain-treatment" },
            { label: "Hyaluronic Acid Injection Treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
            { label: "GFC Treatment for Knee Pain", href: "/treatments/gfc-treatment-knee-pain" },
            { label: "Ultrasound-Guided Injections", href: "/treatments/ultrasound-guided-orthopedic-injections" },
        ],
    },

    // ───────────────────────────────────────────────────────────────────
    // Pillar 6 — Advanced Sports Injuries Treatment
    // ───────────────────────────────────────────────────────────────────
    {
        slug: "advanced-sports-injuries-treatment",
        title: "Advanced Sports Injuries Treatment",
        shortDesc:
            "Comprehensive non-surgical and minimally invasive sports injury care — acute management, regenerative therapy, structured rehab, and a clear return-to-play plan.",
        metaTitle:
            "Advanced Sports Injuries Treatment in Bengaluru | Dr. Nitin N Sunku",
        metaDescription:
            "Advanced sports injury treatment by Dr. Nitin N Sunku at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Acute injury management, regenerative therapy (GFC, PRP), ultrasound-guided injections, structured rehab, and return-to-play planning.",
        heroH1: "Advanced Sports Injuries Treatment in Bengaluru — From Acute Care to Return-to-Play",
        heroSubhead:
            "Comprehensive, evidence-based care for athletes and active adults — acute injury management, accurate diagnosis with in-clinic ultrasound, regenerative therapies, structured rehabilitation, and a clear pathway back to your sport.",
        heroBullets: [
            "Acute injury management — first 0–72 hours, the right way",
            "In-clinic diagnostic ultrasound for tendons, joints & soft tissue",
            "Regenerative options (GFC, PRP) under image guidance",
            "Structured return-to-sport pathway — not a guess",
        ],
        primaryKeywords: [
            "advanced sports injuries treatment in Bengaluru",
            "sports medicine specialist Bengaluru",
            "sports injury doctor Attibele",
            "sports injury treatment HSR Layout",
            "sports injury rehab Electronic City",
        ],
        procedureName: "Sports Injury Management",
        bodyLocation: "Sports",
        color: "bg-sky-50 text-sky-600",
        icon: "Zap",
        sections: [
            {
                id: "what-is-it",
                title: "What \"advanced sports injuries treatment\" actually means",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Advanced sports injury care goes far beyond \"rest and a painkiller.\" It is a structured pathway — accurate diagnosis, the right early intervention, evidence-based rehabilitation, modern regenerative options when indicated, and a graded return-to-play plan that respects the demands of your specific sport.",
                    },
                    {
                        type: "paragraph",
                        text: "Whether you are a weekend cricketer with a hamstring strain, a runner with patellar tendinopathy, a footballer with an ACL injury, or a desk-bound professional who took up gym training and now has shoulder pain, the principles are the same: protect the tissue early, diagnose accurately, treat the right structure, rehabilitate the whole athletic chain, and return safely.",
                    },
                    {
                        type: "callout",
                        tone: "info",
                        text: "This page covers the full spectrum of sports injury care offered by Dr. Nitin N Sunku in Bengaluru — the broader \"how it all fits together\" view. For specific regenerative treatments, see the linked pillar pages below.",
                    },
                ],
            },
            {
                id: "common-injuries",
                title: "Common sports injuries treated",
                blocks: [
                    { type: "heading", level: 3, text: "Knee" },
                    {
                        type: "list",
                        items: [
                            "ACL, MCL, LCL, and PCL ligament injuries",
                            "Meniscal tears (medial and lateral)",
                            "Patellar tendinopathy / jumper's knee",
                            "Quadriceps tendinopathy",
                            "Patellofemoral pain syndrome (runner's knee)",
                            "IT band syndrome",
                            "Pes anserine bursitis",
                            "Cartilage defects (chondral injuries)",
                        ],
                    },
                    { type: "heading", level: 3, text: "Shoulder" },
                    {
                        type: "list",
                        items: [
                            "Rotator cuff strains, partial and full-thickness tears",
                            "Recurrent shoulder dislocation / instability",
                            "Subacromial bursitis and impingement",
                            "Biceps tendinopathy and SLAP-type injuries",
                            "AC joint sprains",
                            "Adhesive capsulitis (frozen shoulder) post-injury",
                        ],
                    },
                    { type: "heading", level: 3, text: "Ankle, foot & lower leg" },
                    {
                        type: "list",
                        items: [
                            "Lateral and medial ankle sprains",
                            "Chronic ankle instability",
                            "Achilles tendinopathy and ruptures",
                            "Plantar fasciitis",
                            "Stress fractures",
                            "Shin splints (medial tibial stress syndrome)",
                            "Calf strains",
                        ],
                    },
                    { type: "heading", level: 3, text: "Hip & thigh" },
                    {
                        type: "list",
                        items: [
                            "Hamstring strains",
                            "Quadriceps strains and contusions",
                            "Adductor (groin) strains",
                            "Trochanteric bursitis and gluteal tendinopathy",
                            "Hip impingement (FAI) symptoms",
                        ],
                    },
                    { type: "heading", level: 3, text: "Elbow, wrist & hand" },
                    {
                        type: "list",
                        items: [
                            "Tennis elbow (lateral epicondylitis)",
                            "Golfer's elbow (medial epicondylitis)",
                            "Triceps tendinopathy",
                            "Wrist sprains and TFCC injuries",
                            "Finger and thumb ligament injuries",
                        ],
                    },
                ],
            },
            {
                id: "pathway",
                title: "The complete care pathway",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Advanced sports injury care is delivered as a five-stage pathway, individualised for each athlete:",
                    },
                    {
                        type: "ordered",
                        items: [
                            "Acute care — protect the tissue, control swelling, and avoid making things worse in the first 72 hours.",
                            "Accurate diagnosis — clinical examination, in-clinic ultrasound, X-ray, and MRI only when it changes management.",
                            "Targeted treatment — physiotherapy, taping/bracing, regenerative injections, and selected surgical referrals.",
                            "Structured rehabilitation — strength, control, sport-specific drills, and load progression.",
                            "Return-to-sport — graded reintroduction with objective milestones, not arbitrary timelines.",
                        ],
                    },
                ],
            },
            {
                id: "acute-care",
                title: "Acute injury management — the first 72 hours",
                blocks: [
                    {
                        type: "paragraph",
                        text: "What you do in the first three days often shapes the next three months. Modern guidance has moved beyond classic \"RICE\" toward a more nuanced approach that emphasises early protection without prolonged immobilisation.",
                    },
                    { type: "heading", level: 3, text: "POLICE protocol" },
                    {
                        type: "list",
                        items: [
                            "Protection — avoid worsening the injury (taping, bracing, crutches if needed)",
                            "Optimal Loading — short, gentle, pain-controlled movement rather than total rest",
                            "Ice — 15–20 minutes every 2–3 hours for the first 48 hours",
                            "Compression — elastic wrap for swelling control",
                            "Elevation — limb above heart level when resting",
                        ],
                    },
                    { type: "heading", level: 3, text: "When to seek urgent care" },
                    {
                        type: "list",
                        items: [
                            "Visible deformity or inability to bear weight",
                            "Severe swelling within minutes of injury",
                            "Numbness, tingling, or weakness in the limb",
                            "A loud \"pop\" with immediate giving way",
                            "Fever or hot, red, swollen joint",
                            "Open wounds with suspected joint penetration",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "warning",
                        text: "If any of the above is present, seek emergency care immediately rather than waiting for an outpatient slot.",
                    },
                ],
            },
            {
                id: "diagnosis",
                title: "Diagnosis — what we actually look at",
                blocks: [
                    {
                        type: "paragraph",
                        text: "A correct diagnosis is the most important step in sports injury care. Dr. Nitin N Sunku uses a layered approach:",
                    },
                    {
                        type: "list",
                        items: [
                            "Detailed history — mechanism of injury, position when it happened, what you heard or felt",
                            "Focused clinical examination — special tests that reproduce or rule out specific structures",
                            "In-clinic diagnostic ultrasound — live view of tendons, ligaments, bursae, and fluid collections",
                            "X-ray — when bone or alignment needs to be assessed",
                            "MRI — only when it will change the treatment plan, not by reflex",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "info",
                        text: "Many sports injuries — especially tendon, bursa, and ligament problems — are best assessed live with ultrasound rather than \"static\" MRI alone. We use both, in the right sequence.",
                    },
                ],
            },
            {
                id: "treatment-options",
                title: "Treatment options under one roof",
                blocks: [
                    {
                        type: "linkCard",
                        title: "Ultrasound-Guided Orthopedic Injections",
                        description:
                            "Real-time imaging delivers regenerative material or medication exactly to the injured structure — critical for tendons, bursae, and small-joint targets in sports injuries.",
                        href: "/treatments/ultrasound-guided-orthopedic-injections",
                    },
                    {
                        type: "linkCard",
                        title: "GFC (Growth Factor Concentrate) Therapy",
                        description:
                            "Concentrated growth factors from your own blood — well-suited to tendinopathies, partial tears, and chronic sports injuries that have plateaued with rehab alone.",
                        href: "/treatments/gfc-treatment-knee-pain",
                    },
                    {
                        type: "linkCard",
                        title: "Hyaluronic Acid Injections",
                        description:
                            "Lubrication and cushioning support for athletes with early joint wear, post-traumatic stiffness, or persistent intra-articular symptoms.",
                        href: "/treatments/hyaluronic-acid-injection-treatment",
                    },
                    {
                        type: "linkCard",
                        title: "Non-Surgical Knee Pain Treatment",
                        description:
                            "Hub for the layered non-surgical pathway — physiotherapy, weight management, regenerative options — applied to athletic knee problems.",
                        href: "/treatments/non-surgical-knee-pain-treatment",
                    },
                    {
                        type: "paragraph",
                        text: "Conservative care also includes prescribed physiotherapy, taping and bracing, footwear advice, training-load review, and selected medications used briefly and purposefully.",
                    },
                ],
            },
            {
                id: "regenerative",
                title: "Regenerative options for sports injuries",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Regenerative therapies — particularly GFC and PRP — are an important part of modern sports injury care, especially for stubborn tendinopathies, partial tears, and chronic joint pain that hasn't responded to rehab alone.",
                    },
                    { type: "heading", level: 3, text: "Why athletes value regenerative care" },
                    {
                        type: "list",
                        items: [
                            "Daycare procedure — minimal disruption to training",
                            "Uses your own biology — strong safety profile",
                            "Compatible with rehab — supports recovery without halting it",
                            "Can be repeated if needed",
                            "Delivered with ultrasound guidance for accuracy",
                        ],
                    },
                    {
                        type: "callout",
                        tone: "honest",
                        text: "Regenerative injections are a tool, not a shortcut. Outcomes depend on accurate diagnosis, the right indication, and consistent rehabilitation. Tendons heal slowly even with biological support.",
                    },
                ],
            },
            {
                id: "return-to-sport",
                title: "Return-to-sport pathway",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Going back to your sport too early or too aggressively is the most common reason injuries recur. We use a graded, milestone-based pathway rather than fixed timelines:",
                    },
                    {
                        type: "ordered",
                        items: [
                            "Pain-free daily activity — walk, climb stairs, sleep without pain",
                            "Restored range of motion — equal to the uninjured side",
                            "Strength benchmarks — typically 85–100% of the uninjured side, depending on the injury",
                            "Sport-specific drills — gradual reintroduction of cutting, jumping, throwing, sprinting",
                            "Controlled return — start with practice, then non-contact, then full play",
                            "Maintenance phase — keep doing the strength and control work that protected you",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "Each milestone is verified with objective tests where possible — strength testing, hop tests, sport-specific functional tests — rather than relying on \"how does it feel?\" alone.",
                    },
                ],
            },
            {
                id: "scenarios",
                title: "Common scenarios — what care looks like",
                blocks: [
                    {
                        type: "paragraph",
                        text: "A few illustrative pathways. Your plan is always individualised to your sport, position, and goals.",
                    },
                    {
                        type: "table",
                        headers: ["Scenario", "Typical pathway"],
                        rows: [
                            [
                                "Runner's knee (anterior knee pain)",
                                "Gait & footwear review · quad/hip strengthening · taping if helpful · regenerative injection in stubborn cases · graded return to running",
                            ],
                            [
                                "Jumper's knee (patellar tendinopathy)",
                                "Heavy-slow-resistance protocol · load management · ultrasound-guided GFC if rehab plateaus · staged return to jumping/cutting sports",
                            ],
                            [
                                "Hamstring strain",
                                "POLICE 0–72h · early gentle loading · progressive eccentric strengthening · sprint-mechanics drills before return",
                            ],
                            [
                                "Recurrent shoulder dislocation",
                                "Cuff & scapular rehab · activity modification · imaging review · surgical referral when stability is compromised",
                            ],
                            [
                                "ACL injury",
                                "Acute care · diagnostic confirmation · prehab · personalised decision on conservative vs surgical management with experienced surgeon coordination",
                            ],
                            [
                                "Tennis/golfer's elbow",
                                "Load review · eccentric forearm strengthening · brace/taping · ultrasound-guided regenerative injection in chronic cases",
                            ],
                            [
                                "Plantar fasciitis",
                                "Footwear · calf and intrinsic foot strengthening · taping · ultrasound-guided injection if persistent · gradual loading",
                            ],
                        ],
                    },
                ],
            },
            {
                id: "eligibility",
                title: "Eligibility & when surgery is the better answer",
                blocks: [
                    { type: "heading", level: 3, text: "You are likely a good candidate for non-surgical advanced care if:" },
                    {
                        type: "list",
                        items: [
                            "Your injury does not involve a complete structural failure (e.g., a full ACL tear in a high-demand athlete)",
                            "You are willing to commit to a structured rehab programme",
                            "Your goals can be met without surgery, given your sport and demands",
                            "Imaging and examination support a non-surgical pathway",
                        ],
                    },
                    { type: "heading", level: 3, text: "Surgical referral may be appropriate when:" },
                    {
                        type: "list",
                        items: [
                            "There is a complete or unstable structural tear (ligament, tendon, meniscus) in a high-demand athlete",
                            "Recurrent dislocation or instability is compromising daily life or performance",
                            "Mechanical symptoms (locking, giving way) are not resolving with rehab",
                            "Imaging shows a clearly surgical lesion in the right clinical context",
                        ],
                    },
                    {
                        type: "paragraph",
                        text: "When surgery is genuinely the right answer, you are referred to trusted joint and sports surgery specialists with full transparency — and we coordinate the rehab and return-to-play plan that follows.",
                    },
                ],
            },
            {
                id: "why-dr-nitin",
                title: "Why athletes choose Dr. Nitin N Sunku",
                blocks: [
                    {
                        type: "list",
                        items: [
                            "Fellowship-level training in arthroscopy and sports medicine",
                            "Conservative-first philosophy — surgery only when clearly warranted",
                            "In-clinic diagnostic and image-guided ultrasound capability",
                            "Coordinated rehabilitation with experienced physiotherapy partners",
                            "Honest counselling — including when training load, technique, or equipment is the real fix",
                            "Two convenient locations — Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout",
                            "Time given to each athlete — sport demands, position, and goals are part of the plan",
                        ],
                    },
                ],
            },
            {
                id: "service-area",
                title: "Service area — South Bengaluru",
                blocks: [
                    {
                        type: "paragraph",
                        text: "Sports injury consultations are offered at Raghava Multispeciality Hospital, Attibele (Sarjapura–Attibele Road) — convenient for patients from Anekal, Bommasandra, Chandapura, Hosur Road, and Electronic City — and at Health Nest Hospital, HSR Layout — convenient for HSR, Koramangala, BTM Layout, Sarjapur Road, Bellandur, and the Bengaluru tech corridor.",
                    },
                ],
            },
        ],
        faqs: [
            { q: "What counts as a \"sports injury\"?", a: "Any injury that occurs during athletic activity or affects your ability to do that activity. This includes acute injuries (sprains, strains, dislocations, fractures), overuse injuries (tendinopathies, stress fractures), and post-injury changes that limit performance." },
            { q: "How quickly should I see a doctor after a sports injury?", a: "For severe pain, deformity, inability to bear weight, numbness, or a hot swollen joint — immediately. For most other injuries, a structured assessment within 3–7 days is ideal so the right treatment starts early." },
            { q: "Is RICE still the right approach?", a: "RICE is fine, but modern guidance prefers POLICE — Protection, Optimal Loading, Ice, Compression, Elevation. The key change: gentle, pain-controlled movement is encouraged rather than total rest." },
            { q: "Do I always need an MRI?", a: "No. MRI is ordered only when it will change the treatment plan. Many soft-tissue injuries are diagnosed accurately with examination plus in-clinic ultrasound." },
            { q: "Is rest enough for most sports injuries?", a: "Rarely. Rest alone often leads to deconditioning and recurrence. Active, structured rehab with appropriate loading is what restores tissue and performance." },
            { q: "When is surgery needed?", a: "For complete structural tears in high-demand athletes, recurrent instability, mechanical symptoms not resolving with rehab, or imaging plus exam findings that clearly require surgical fixation." },
            { q: "How do regenerative injections fit in?", a: "They support healing in tendinopathies, partial tears, and chronic joint pain when rehab alone has plateaued. They work best combined with structured rehabilitation, not as a substitute." },
            { q: "How long until I can play my sport again?", a: "It varies by injury, sport, and your starting fitness. Hamstring strains typically 3–6 weeks, tendinopathies 8–16 weeks, ACL surgery 6–12 months. We use milestones, not fixed timelines." },
            { q: "Can I keep training while I rehab?", a: "Often yes — with modifications. Pool training, cycling, upper-body work, or sport-specific technical drills can usually continue. We will tell you exactly what to do and what to avoid." },
            { q: "Is taping or bracing useful?", a: "In selected injuries, yes — for offloading, proprioception, or stability. It is a tool, not a long-term substitute for strengthening." },
            { q: "What about kids and teen sports injuries?", a: "Adolescent injuries (e.g., Osgood-Schlatter, Sever's disease, growth-plate concerns) need a different approach. We screen for these and coordinate paediatric input where needed." },
            { q: "Are professional and recreational athletes treated differently?", a: "The same diagnostic principles apply, but the return-to-sport thresholds and intensity of rehab differ. The plan is always tailored to your sport, position, and goals." },
            { q: "Where in Bengaluru can I get this care?", a: "At Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout. Patients travel from across South Bengaluru, including Electronic City, Koramangala, BTM Layout, Sarjapur Road, and Bellandur." },
            { q: "What should I bring to my first visit?", a: "Any prior imaging (X-ray, MRI), reports from previous treatments, the footwear or kit you usually train in if relevant, and a brief written list of your sport, training volume, and goals." },
        ],
        relatedLinks: [
            { label: "Non-Surgical Knee Pain Treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
            { label: "GFC Treatment for Knee Pain", href: "/treatments/gfc-treatment-knee-pain" },
            { label: "Ultrasound-Guided Injections", href: "/treatments/ultrasound-guided-orthopedic-injections" },
            { label: "Sports Injury Regenerative Treatments (blog)", href: "/blog/sports-injury-regenerative-treatments" },
        ],
    },
];

/** Lookup helper used by the dynamic route. */
export function getTreatmentBySlug(slug: string): Treatment | undefined {
    return treatments.find((t) => t.slug === slug);
}
