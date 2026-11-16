/**
 * Structured content for /services/[slug] pages.
 *
 * Why this exists: the original service detail page was a hardcoded if-chain,
 * ~200 lines of bespoke JSX per service. Every new procedure page made that
 * file harder to maintain. New service pages are authored here as data and
 * rendered by <ServiceBody />; the remaining legacy services still fall through to
 * the if-chain in app/services/[slug]/page.tsx and can be migrated one at a
 * time without touching live copy. Migrated Nov 2026: knee-replacement and
 * shoulder-care (GSC flagged both "crawled, not indexed" as generic/overlapping).
 *
 * Authoring notes (same rules as lib/treatments.ts):
 * - Clinics: Raghava Multispeciality Hospital, Attibele (primary);
 *            Health Nest Hospital, HSR Layout (secondary).
 * - Service areas are SEO mentions only, never clinic names.
 * - Compliance: never promise a cure, a guaranteed result, or cartilage
 *   regrowth. Position as pain reduction, restored stability, improved
 *   function, or a realistic return to activity.
 * - No invented statistics. Ranges only where they are widely accepted.
 */

export type ServiceCard = { title: string; text: string };
export type ServiceApproachBlock = { title: string; text: string };
export type ServiceTimelineStep = { t: string; d: string };
export type ServiceFaqItem = { question: string; answer: string };

export type ServicePageContent = {
    /** Lead paragraphs under the hero. */
    intro: string[];
    conditionsHeading: string;
    conditions: ServiceCard[];
    conditionsNote?: string;
    approachHeading: string;
    approach: ServiceApproachBlock[];
    /** Single paragraph for the "Why Choose Our Clinic" panel. */
    whyChoose: string;
    recoveryHeading: string;
    recovery: ServiceTimelineStep[];
    recoveryNote?: string;
    locationsHeading: string;
    faqTitle: string;
    faqs: ServiceFaqItem[];
    ctaHeading: string;
    ctaText: string;
};

export const servicePageContent: Record<string, ServicePageContent> = {
    "knee-replacement": {
        intro: [
            "Knee replacement is the operation for a knee that arthritis has worn out: pain on most days, stiffness after sitting, stairs that have become a negotiation, and a walking distance that keeps shrinking. When medicines, physiotherapy, weight management and injections no longer give enough relief, resurfacing the damaged joint reliably reduces pain and restores everyday function for the large majority of patients.",
            "This page is about the clinical decision: whether you need a replacement yet, which type suits your knee, what the operation involves, and what recovery really looks like. Dr. Nitin N Sunku offers total and partial (unicondylar) knee replacement at the Attibele hospital, with consultations in Attibele and HSR Layout. For costs, see the knee replacement cost guide; for the hospital and in-patient facilities, see the Attibele joint replacement page.",
        ],
        conditionsHeading: "When Knee Replacement Is Considered",
        conditions: [
            { title: "Advanced Osteoarthritis", text: "By far the most common reason. X-rays show the cartilage space worn down, often with bone rubbing on bone, and the pain matches the X-ray: activity-related, worse on stairs and rising from a chair, and increasingly present at rest or at night." },
            { title: "Rheumatoid and Inflammatory Arthritis", text: "When inflammatory arthritis has destroyed the joint surfaces despite good medical control. Surgery is planned together with the treating rheumatologist so medicines are adjusted safely around the operation." },
            { title: "Post-Traumatic Arthritis", text: "Arthritis that develops years after a fracture into the knee joint or a major ligament and meniscus injury. These knees can be technically more demanding, and previous scars and hardware are planned for." },
            { title: "Deformity and Instability", text: "Knees that have bowed inward (varus) or knocked outward (valgus), or that buckle because the worn joint has lost its shape. A well-aligned replacement corrects the deformity as part of the operation." },
            { title: "Arthritis Limited to One Compartment", text: "When wear is confined to the inner (medial) side and the ligaments are intact, a partial knee replacement may be possible. It keeps the healthy parts of the knee and usually recovers faster." },
        ],
        conditionsNote: "An X-ray alone is not a reason to operate. The decision rests on how much the knee limits your life, what has already been tried, and your general health. Many people with arthritic X-rays manage well without surgery for years.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            { title: "Trying Everything Sensible First", text: "Before replacement is recommended, the non-surgical options are reviewed properly: a structured strengthening programme, weight management where relevant, pain-relief medication, bracing, and injections where they make sense. If you have not genuinely tried these, you will be told so, rather than being booked for surgery." },
            { title: "Total Knee Replacement (TKR)", text: "All three compartments of the knee (inner, outer and behind the kneecap) are resurfaced with metal components and a medical-grade plastic bearing. This is the standard operation for arthritis that involves more than one part of the knee, or for knees with significant deformity." },
            { title: "Partial (Unicondylar) Knee Replacement", text: "Only the worn compartment is resurfaced and the healthy bone, cartilage and cruciate ligaments are kept. It suits a minority of knees, typically isolated inner-side arthritis with stable ligaments. The trade-off is a slightly higher chance of needing further surgery later if arthritis progresses in the rest of the knee." },
            { title: "Implant Choice, Explained Plainly", text: "Implant brands and materials (for example titanium, cobalt-chrome or ceramic-coated options) are discussed openly, including what the evidence does and does not show about each, and how the choice affects cost. The best implant is the one appropriate for your knee, bone quality and activity level, implanted and aligned well." },
            { title: "Anaesthesia and Pain Control", text: "Most knee replacements are done under spinal anaesthesia, combined with nerve blocks and multimodal pain control so that walking can start early. Blood-clot prevention, antibiotics and wound care follow standard protocols." },
            { title: "Medical Optimisation Before Surgery", text: "Diabetes, blood pressure, heart and kidney function, anaemia and any blood thinners are reviewed and optimised before a date is fixed. This step does more than any implant choice to reduce complications." },
        ],
        whyChoose: "Dr. Nitin N Sunku is a fellowship-trained orthopedic surgeon in arthroplasty and arthroscopy, and team doctor for Bengaluru FC. He treats replacement as one option among several, not the default answer to an arthritic X-ray. You will get a clear explanation of total versus partial replacement, of implant options and costs, and of realistic outcomes, including what a new knee will and will not let you do. Surgery is performed at the Attibele hospital, close to Electronic City, Chandapura, Anekal and the Hosur Road belt, so follow-up visits do not mean a cross-city drive.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Day 0–1", d: "Walking with a walker, usually within 24 hours of surgery, guided by a physiotherapist. Knee-bending exercises and ankle pumps start immediately." },
            { t: "Day 2–5", d: "Most patients are discharged within a few days, once they can walk safely, manage stairs with support, and pain is controlled with tablets." },
            { t: "Week 2–6", d: "Home or outpatient physiotherapy to regain straightening and bending, with progressive quadriceps strengthening. Stitches or clips are reviewed at about two weeks. Many patients move from a walker to a stick in this period." },
            { t: "Week 6–12", d: "Walking without support for most patients, return to most household activities, and driving once strength and reaction time allow. Desk-based work usually resumes in this window." },
            { t: "Month 3–12", d: "Swelling and warmth settle gradually, and strength and comfort keep improving through the first year. Walking, cycling, swimming and similar low-impact activities are encouraged long term." },
        ],
        recoveryNote: "Most patients get substantial pain relief and better walking. A replaced knee is not a natural knee, though. Some awareness of the implant, difficulty kneeling and occasional stiffness are common, and high-impact sport is generally not advised. Effort in physiotherapy over the first three months has the biggest influence on the final range of movement.",
        locationsHeading: "Where we see Knee Replacement Patients",
        faqTitle: "Knee Replacement FAQ",
        faqs: [
            { question: "How do I know it is time for a knee replacement?", answer: "When arthritis pain limits your daily life (walking distance, stairs, sleep, work) despite a fair trial of non-surgical treatment, and X-rays confirm advanced joint damage. There is no age cut-off in either direction. The right time is when the knee is costing you more quality of life than the operation and recovery would." },
            { question: "Total or partial knee replacement: which is better?", answer: "Neither is better in general. They suit different knees. A partial replacement is an option only when arthritis is confined to one compartment and the ligaments are intact. Most Indian patients present with arthritis affecting more than one compartment, often with bowing, and for them a total replacement is the appropriate operation." },
            { question: "Can both knees be replaced at the same time?", answer: "Sometimes. Replacing both knees in one sitting is offered selectively, to fit patients without significant heart, lung or kidney problems. For others, the two knees are done a few weeks to months apart, which is safer. The decision is individual and made after a medical assessment." },
            { question: "How long will I stay in hospital?", answer: "Usually a few days. You go home once you can walk safely with a walker, manage the toilet and a few steps, and your pain is controlled with tablets." },
            { question: "How long does a knee replacement last?", answer: "Modern implants last well beyond 15 years in most patients, and many last for life. Longevity depends on implant positioning, body weight, activity level and bone quality, more than on the brand name." },
            { question: "What are the main risks?", answer: "Infection, blood clots, stiffness, persistent pain in a minority of patients, and wear or loosening years later are the main risks. Careful medical optimisation, sterile technique, clot prevention and early mobilisation reduce them, and they are discussed in detail before you consent." },
            { question: "Will I be able to sit cross-legged or squat?", answer: "Deep squatting and sitting cross-legged on the floor are difficult for most people after a knee replacement, and repeated deep bending is not recommended for the implant. Most patients can sit comfortably on chairs, use a western toilet, climb stairs and walk long distances." },
            { question: "How much does it cost, and does insurance cover it?", answer: "Cost depends on the implant, whether one or both knees are done, and the room category. See the knee replacement cost page for current ranges. Knee replacement is generally covered by health insurance, subject to your policy's waiting periods and limits, and the team helps with cashless pre-authorisation." },
        ],
        ctaHeading: "Book a Knee Replacement Consultation",
        ctaText: "Bring your latest knee X-rays (standing views if possible), any MRI, and a list of your medicines. You will leave with a clear answer on whether you need surgery now, later, or not at all.",
    },
    "shoulder-care": {
        intro: [
            "Most shoulder problems do not need surgery, and a good shoulder surgeon spends much of the consultation explaining which ones do. Rotator cuff tears that have lost strength, shoulders that keep dislocating, and joints worn out by arthritis often do. Impingement-type pain and many partial tears usually settle with the right rehabilitation.",
            "Dr. Nitin N Sunku assesses and treats shoulder injuries and degenerative conditions at the Attibele hospital and in HSR Layout. Where surgery is needed, it is usually keyhole (arthroscopic): rotator cuff repair, stabilisation for recurrent dislocation, labral and biceps procedures, and capsular release for resistant frozen shoulder. Joint replacement is used for advanced arthritis. For symptom-led guidance, see the shoulder pain and frozen shoulder pages. This page covers what surgical treatment involves.",
        ],
        conditionsHeading: "Shoulder Conditions We Treat",
        conditions: [
            { title: "Rotator Cuff Tears", text: "Night pain, pain lifting the arm, and, in larger tears, real weakness. A tear after a fall or lift in an active person is time-sensitive, because torn tendons retract and the muscle weakens over months. Degenerative tears in older adults are often managed without surgery first." },
            { title: "Recurrent Dislocation and Instability", text: "A shoulder that has dislocated once is at high risk of doing so again, especially in young athletes. Repeated dislocations damage the labrum (Bankart lesion) and can wear away bone from the socket rim, which changes the type of surgery needed." },
            { title: "Labral (SLAP) Tears and Biceps Problems", text: "Deep pain, clicking or catching in throwing athletes, gym-goers and manual workers. Many settle with rehabilitation. Persistent cases may need a repair, or a biceps tenodesis or tenotomy." },
            { title: "Impingement and Bursitis", text: "Pain when reaching overhead or behind the back. This is usually treated with targeted rehabilitation and, where needed, an ultrasound-guided injection. Surgery is reserved for the minority who do not improve." },
            { title: "Frozen Shoulder (Adhesive Capsulitis)", text: "Progressive stiffness and pain, common in people with diabetes. Most cases resolve with staged physiotherapy and injection or hydrodilatation. Arthroscopic capsular release is considered only for stiffness that persists despite proper treatment." },
            { title: "Shoulder Arthritis and Complex Fractures", text: "Grinding pain and loss of movement from worn cartilage, or fractures of the humeral head that cannot be fixed reliably. These may need partial or total shoulder replacement." },
        ],
        conditionsNote: "A tear on an MRI report is not, by itself, a reason for surgery. Partial-thickness cuff tears and labral changes are common in people with no symptoms. Treatment is based on the examination, strength testing and how the shoulder affects your life.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            { title: "Diagnosis Before Treatment", text: "A structured examination of strength, stability and the specific provocation tests, plus X-rays and, where needed, MRI or ultrasound. Neck problems that refer pain to the shoulder are ruled out, because they are a common cause of failed shoulder treatment." },
            { title: "Rehabilitation and Image-Guided Injections", text: "A targeted programme for the rotator cuff and shoulder-blade muscles is the first line for impingement, many partial tears and early frozen shoulder. Ultrasound-guided injections are used selectively to settle pain so that rehabilitation can progress." },
            { title: "Arthroscopic Rotator Cuff Repair", text: "Torn tendons are reattached to bone with suture anchors through small incisions. Repair is most successful when the tear is repaired before the tendon retracts and the muscle wastes, which is why a traumatic tear in an active person should be assessed early." },
            { title: "Arthroscopic Stabilisation", text: "For recurrent dislocation, the torn labrum and capsule are repaired back to the socket (Bankart repair). When repeated dislocations have caused significant bone loss, a bone-based stabilisation may be advised instead, because a soft-tissue repair alone has a higher failure rate in that situation." },
            { title: "Labral, Biceps and Capsular Procedures", text: "SLAP repair, biceps tenodesis or tenotomy, subacromial decompression where indicated, and arthroscopic capsular release for frozen shoulder that has not responded to non-surgical care." },
            { title: "Shoulder Replacement", text: "For advanced arthritis or unreconstructable fractures, partial, total or reverse shoulder replacement restores a smooth joint surface and relieves pain. Reverse replacement is used when the rotator cuff is also irreparably torn." },
        ],
        whyChoose: "Dr. Nitin N Sunku is fellowship-trained in arthroscopy and sports surgery and is team doctor for Bengaluru FC, so overhead athletes, gym-goers and manual workers are a large part of his shoulder practice. The emphasis is on selection: operating when timing matters, such as with acute cuff tears and recurrent dislocations, and avoiding surgery when rehabilitation will do the job. Rehabilitation is planned with the physiotherapy team from the first visit, and progress is checked against strength and motion goals before each return-to-activity step.",
        recoveryHeading: "Recovery After Shoulder Surgery",
        recovery: [
            { t: "Day 0–1", d: "Most arthroscopic shoulder procedures are done with a nerve block and allow discharge the same or next day. A sling protects the repair. Hand, wrist and elbow movement starts immediately." },
            { t: "Week 1–6", d: "Sling for most repairs. Physiotherapist-guided passive and then assisted movement, to prevent stiffness without stressing the repair. Desk work often resumes within one to two weeks, one-handed." },
            { t: "Week 6–12", d: "Sling discontinued, active movement restored, and light strengthening begun. Driving usually resumes in this period once the shoulder is comfortable and controlled." },
            { t: "Month 3–6", d: "Progressive strengthening and return to most daily and work tasks. Heavy lifting and overhead work are reintroduced gradually." },
            { t: "Month 6–9", d: "Return to contact, throwing and overhead sport after rotator cuff repair or stabilisation, once strength and stability criteria are met." },
        ],
        recoveryNote: "Timelines differ by procedure. Capsular release and decompression recover faster than tendon repair, because nothing needs to heal back to bone. Rotator cuff tendons heal slowly, and the first three months of protected rehabilitation largely decide the result.",
        locationsHeading: "Where we see Shoulder Patients",
        faqTitle: "Shoulder Surgery FAQ",
        faqs: [
            { question: "Does every rotator cuff tear need surgery?", answer: "No. Many partial-thickness and degenerative tears in older adults improve with targeted rehabilitation. Surgery is advised for full-thickness tears that cause weakness, for acute tears after an injury in active people, and for tears that have not improved despite proper rehabilitation." },
            { question: "Why does timing matter for a rotator cuff tear?", answer: "After a full-thickness tear, the tendon can pull back and the muscle can turn into fat over months. Both make repair harder and less reliable. An acute tear with weakness in an active person should be assessed within weeks rather than months." },
            { question: "My shoulder has dislocated twice. Should I have surgery?", answer: "Recurrent dislocation, particularly in people under 30 or those who play contact or overhead sport, has a high chance of happening again, and each episode can cause more damage. Stabilisation surgery is usually recommended after a second dislocation, and sometimes after the first in high-risk athletes. Imaging shows whether there is bone loss, which determines the type of surgery." },
            { question: "Is shoulder arthroscopy painful?", answer: "Discomfort is significant for the first few nights, especially after rotator cuff repair, but it is well controlled with a nerve block given at surgery followed by tablets. Sleeping semi-upright is often more comfortable in the first weeks." },
            { question: "How long will I need a sling?", answer: "Typically four to six weeks after rotator cuff repair or stabilisation, and much less, sometimes only a few days, after capsular release or decompression, where early movement is the goal." },
            { question: "When can I return to the gym or sport?", answer: "Light training of the other limbs and lower body can start early. Shoulder strengthening starts around three months. Overhead lifting, throwing and contact sport usually return between six and nine months after a repair, once strength and stability tests are passed." },
            { question: "Do I need a shoulder replacement for arthritis?", answer: "Only when pain and stiffness from advanced arthritis limit daily life despite non-surgical care. Shoulder replacement relieves pain reliably. Reverse shoulder replacement is designed for shoulders where the rotator cuff is also irreparably torn." },
            { question: "Is shoulder surgery covered by insurance?", answer: "Arthroscopic shoulder procedures and shoulder replacement are generally covered by health insurance, subject to your policy's terms. The team helps with cashless pre-authorisation." },
        ],
        ctaHeading: "Book a Shoulder Consultation",
        ctaText: "Bring any X-rays, MRI or ultrasound reports. If your shoulder has dislocated or suddenly lost strength after an injury, please book early, as timing affects the options.",
    },
    "mpfl-patellar-dislocation": {
        intro: [
            "A kneecap that slips out of place — patellar dislocation or subluxation — is one of the most under-treated knee problems we see. The first dislocation is usually blamed on bad luck. The second one is a pattern, and by then the medial patellofemoral ligament (MPFL), the main soft-tissue restraint holding the kneecap in its groove, has almost always been stretched or torn.",
            "Dr. Nitin N Sunku assesses recurrent kneecap instability the way it needs to be assessed: not just the torn ligament, but the shape of the trochlear groove, the height and tracking of the patella, limb alignment and rotational profile. That assessment decides whether you need rehabilitation, an MPFL reconstruction, or a bony procedure alongside it — because reconstructing a ligament on top of an uncorrected bony problem is how repeat dislocations happen.",
        ],
        conditionsHeading: "Conditions We Treat",
        conditions: [
            {
                title: "First-Time Patellar Dislocation",
                text: "Usually a twisting movement on a planted foot, or a direct blow. The kneecap often relocates on its own when the knee straightens, so patients arrive describing a knee that “went out and came back”. Swelling is immediate. An MRI matters here: it shows the MPFL tear and, importantly, whether a fragment of cartilage or bone has been sheared off.",
            },
            {
                title: "Recurrent Patellar Instability",
                text: "Repeated dislocations, or a knee that gives way and feels like the kneecap is sliding sideways on stairs, squats or turns. Each episode risks further cartilage damage on the back of the patella, which is the reason we do not simply keep bracing and waiting.",
            },
            {
                title: "Patellar Maltracking Without Full Dislocation",
                text: "Pain at the front of the knee, a sense of the kneecap riding to the outside, and apprehension when the knee is bent under load. Often mislabelled as ordinary “runner’s knee” for years before the tracking problem is identified.",
            },
            {
                title: "Underlying Anatomical Risk Factors",
                text: "Trochlear dysplasia (a shallow groove), patella alta (a high-riding kneecap), an increased TT-TG distance, generalised ligament laxity, and rotational malalignment. These are what turn one dislocation into a lifelong pattern, and they change the operation we recommend.",
            },
        ],
        conditionsNote:
            "If your kneecap has dislocated more than once, or the first episode left you unable to trust the knee, that is the point to be examined properly rather than to buy another brace.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            {
                title: "Non-Surgical Management",
                text: "A genuine first-time dislocation with no loose fragment is usually treated without surgery. That means a short period of protected weight-bearing, then a structured rehabilitation programme focused on vastus medialis and gluteal strength, hip control, and correcting the movement patterns that let the knee collapse inward. Bracing has a role early on. The honest limitation: rehabilitation strengthens the muscles around an already-damaged ligament — it does not repair the MPFL, so a knee with strong anatomical risk factors may still redislocate.",
            },
            {
                title: "MPFL Reconstruction",
                text: "For recurrent instability, the MPFL is reconstructed rather than repaired, most often using a hamstring graft (gracilis) fixed to the patella and to the femur at the anatomical origin. Femoral tunnel placement is the part of this operation that decides the outcome — a tunnel a few millimetres off changes how the graft tightens through the arc of movement, which is why the position is confirmed intra-operatively rather than judged by eye.",
            },
            {
                title: "Bony Procedures When Indicated",
                text: "Where the tibial tubercle sits too far laterally, or the patella rides high, a tibial tubercle osteotomy — moving and re-fixing the bony attachment of the patellar tendon — may be combined with the ligament reconstruction. Severe trochlear dysplasia is discussed separately. Not every unstable kneecap needs bony work, and we will tell you plainly when it does and when it does not.",
            },
            {
                title: "Cartilage Assessment",
                text: "Dislocations frequently shear cartilage off the patella or lateral femoral condyle. Loose fragments are addressed arthroscopically at the same sitting. Where cartilage is damaged but not detached, we set expectations honestly: the aim is a stable, functional knee, not a knee restored to its pre-injury cartilage.",
            },
        ],
        whyChoose:
            "Recurrent kneecap instability is commonly treated as a rehabilitation problem long past the point where rehabilitation can solve it. Dr. Sunku’s arthroscopy and sports medicine fellowship training, and his work as a team doctor for professional athletes, mean the assessment covers the bony anatomy and the alignment, not only the torn ligament — which is what determines whether one operation is enough. Imaging is ordered when it changes the plan. Where a brace and a proper strengthening programme will do, that is what you will be advised to do.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Week 0–2", d: "Brace in extension for walking, crutches as needed. Focus on controlling swelling, regaining full extension, and switching the quadriceps back on. Most people are off crutches within this window." },
            { t: "Week 2–6", d: "Progressive range of motion within the surgeon’s limits, closed-chain strengthening, and hip and core work. Brace weaned as quadriceps control returns." },
            { t: "Week 6–12", d: "Full range of motion expected. Strength work intensifies, single-leg control and balance introduced, stationary cycling and swimming usually permitted." },
            { t: "Month 3–6", d: "Running, then agility and change-of-direction drills once strength testing shows the operated leg is closing the gap on the other side. Not a calendar decision — a capability decision." },
            { t: "Month 6–9", d: "Return to pivoting sport for those who need it, after clearance. Isolated MPFL reconstruction generally returns to sport sooner than a reconstruction combined with an osteotomy, which needs bone healing time." },
        ],
        recoveryNote:
            "Timelines vary with whether a bony procedure was added, the state of the cartilage, and how consistently rehabilitation is done. The single strongest predictor of a stable outcome is quadriceps and hip strength at the point of return — not the number of weeks elapsed.",
        locationsHeading: "Where we see Kneecap Instability Patients",
        faqTitle: "MPFL Surgery & Kneecap Dislocation FAQ",
        faqs: [
            { question: "My kneecap dislocated once. Do I need surgery?", answer: "Usually not. A first-time dislocation without a loose cartilage or bone fragment is generally treated with a brace and a structured rehabilitation programme. Surgery is considered if a fragment needs removing or fixing, or if the kneecap dislocates again. An MRI after the first episode is worthwhile because it identifies the fragments and the anatomical risk factors that predict a second dislocation." },
            { question: "What is the MPFL and why is it reconstructed rather than repaired?", answer: "The medial patellofemoral ligament runs from the inner border of the kneecap to the femur and is the main restraint stopping the patella sliding outward in the first 30 degrees of bend. Once it has been torn and stretched by repeated episodes, stitching it back rarely restores its original tension. Reconstruction with a tendon graft gives a more predictable restraint, which is why it is the standard for recurrent instability." },
            { question: "Will an MPFL reconstruction alone stop my kneecap dislocating?", answer: "In most patients with normal or near-normal bony anatomy, yes — restoring the ligament restores stability. Where the trochlear groove is very shallow, the kneecap sits high, or the tibial tubercle is too far to the outside, ligament reconstruction on its own carries a higher failure rate, and a bony procedure is discussed alongside it. This is exactly why the pre-operative measurements matter." },
            { question: "What is a tibial tubercle osteotomy and will I need one?", answer: "It is a procedure that moves the bony bump where the patellar tendon attaches, and fixes it in a corrected position with screws. It is added when measurements show the extensor mechanism pulls the kneecap too far laterally, or when the patella rides too high. Most patients do not need it. It adds bone-healing time to the recovery, so it is only recommended when the measurements justify it." },
            { question: "How long will I be off work?", answer: "Desk-based work is usually possible in about two weeks, sometimes sooner if you can keep the leg elevated and travel is manageable. Work that involves standing all day, climbing, driving heavy vehicles, or squatting typically needs six to twelve weeks. If an osteotomy was performed, allow longer." },
            { question: "Can I drive after MPFL surgery?", answer: "For a left knee in an automatic car, often within two to three weeks. For a right knee, it is generally six weeks or more — the test is whether you can perform an emergency stop without hesitation, not whether the knee feels comfortable resting on the pedal. Check your insurer’s position as well." },
            { question: "Is this the same as a knee arthroscopy?", answer: "No, though arthroscopy is often performed at the same time to inspect the joint and deal with any loose cartilage. An MPFL reconstruction involves small incisions on the inner side of the knee to pass and fix the graft; it is a reconstruction of a ligament, not simply a keyhole clean-up." },
            { question: "What happens if I leave recurrent dislocations untreated?", answer: "Each dislocation carries a risk of shearing cartilage from the back of the kneecap and the outer femoral condyle. Over years, that cartilage damage is the mechanism by which recurrent instability turns into patellofemoral arthritis and persistent front-of-knee pain. Stabilising the kneecap is as much about protecting the joint surface as about confidence." },
        ],
        ctaHeading: "Book a Kneecap Instability Assessment in Bengaluru",
        ctaText: "If your kneecap has dislocated more than once, or you no longer trust the knee on stairs and turns, bring your MRI and X-rays for a proper assessment of the ligament and the underlying anatomy.",
    },
    "pcl-injury": {
        intro: [
            "The posterior cruciate ligament sits behind the ACL and stops the shin bone sliding backwards under the thigh bone. PCL injuries are far less common than ACL tears and, because the knee often stays walkable, they are missed more often — frequently written off as a bad bruise after a dashboard injury in a road traffic accident, a fall onto a bent knee, or a tackle in football or kabaddi.",
            "A missed PCL injury does not usually announce itself with the knee giving way. It shows up years later as aching at the front of the knee going downstairs, and as early wear in the patellofemoral and medial compartments, because the joint has been loading abnormally the whole time. Dr. Nitin N Sunku assesses PCL injuries for what actually matters: the grade of laxity, whether other ligaments are involved, and whether the tear is isolated — because isolated PCL tears and multiligament injuries are entirely different problems.",
        ],
        conditionsHeading: "Conditions We Treat",
        conditions: [
            {
                title: "Isolated PCL Tear (Grade I–II)",
                text: "Partial injury with mild to moderate posterior laxity, often after a dashboard impact or a fall onto the front of a bent knee. Pain at the back of the knee, swelling that is usually less dramatic than an ACL tear, and difficulty kneeling. Many patients continue walking, which is precisely why the diagnosis is delayed.",
            },
            {
                title: "Complete PCL Tear (Grade III)",
                text: "Significant posterior sag of the shin bone when the knee is bent to 90 degrees. Patients describe an unsteady knee on slopes, stairs and deceleration rather than the sharp giving-way of an ACL-deficient knee. Grade III injuries are more likely to involve additional structures.",
            },
            {
                title: "Multiligament and Posterolateral Corner Injury",
                text: "PCL tears combined with injury to the posterolateral corner, ACL, or collateral ligaments — typically higher-energy trauma, road traffic accidents, or a knee dislocation. These need urgent, thorough assessment including a vascular and nerve examination, and they are treated very differently from an isolated tear.",
            },
            {
                title: "Chronic PCL Deficiency",
                text: "An old injury presenting years later with front-of-knee pain on descending stairs, quadriceps weakness, and early degenerative change on X-ray. The question here is no longer only about the ligament — it is about what the abnormal loading has already done to the joint surfaces.",
            },
        ],
        conditionsNote:
            "If you had a knee injury after a dashboard impact or a fall onto a bent knee and were told it was a sprain, but kneeling and going downstairs still feel wrong months later, that knee deserves a proper ligament examination.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            {
                title: "Non-Surgical Management",
                text: "Unlike the ACL, an isolated PCL injury of grade I or II often does well without surgery, and this is the mainstay of treatment. Management involves a period in a dedicated PCL brace that supports the shin bone forwards, protected weight-bearing, and — critically — a quadriceps-dominant rehabilitation programme, because a strong quadriceps actively compensates for the missing posterior restraint. Hamstring loading is deliberately controlled early, since the hamstrings pull the shin in the direction the injured ligament is meant to resist.",
            },
            {
                title: "Arthroscopic PCL Reconstruction",
                text: "Reconstruction is considered for grade III injuries, for PCL tears that remain symptomatically unstable despite a proper rehabilitation programme, for bony avulsions where the ligament has pulled a fragment of bone away, and for multiligament injuries. A graft is passed and fixed to recreate the ligament, arthroscopically assisted. PCL reconstruction is technically more demanding than ACL reconstruction, and the results are honestly reported as good rather than perfect — some residual laxity is common, and the goal is a functional, comfortable knee.",
            },
            {
                title: "Bony Avulsion Fixation",
                text: "Where the PCL has detached with a fragment of bone rather than tearing mid-substance, fixing that fragment back reattaches native ligament to native bone. This is one of the more satisfying PCL operations, and it is time-sensitive — the case for early surgery is much stronger here than for a mid-substance tear.",
            },
            {
                title: "Addressing Associated Injuries",
                text: "Posterolateral corner injuries left untreated are a recognised cause of PCL reconstruction failure. Where the corner is involved, it is addressed at the same operation. Meniscal and cartilage injuries found at arthroscopy are treated at the same sitting.",
            },
        ],
        whyChoose:
            "PCL injuries are commonly under-diagnosed because the knee still walks. Dr. Sunku’s sports medicine practice sees enough ligament trauma — road traffic injuries around Hosur Road and Electronic City, and contact sport injuries — to look for the pattern rather than settle for “knee sprain”. Just as importantly, the advice here is not surgical by default: most isolated PCL tears are managed with bracing and a quadriceps-led programme, and you will be told when that is the better path.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Week 0–6 (non-surgical)", d: "PCL brace with the shin supported, protected weight-bearing, prone range-of-motion work to avoid posterior sag, and early quadriceps activation. Hamstring loading is intentionally limited." },
            { t: "Week 6–12", d: "Brace weaned, gait normalised, and progressive closed-chain quadriceps strengthening. Cycling and swimming typically reintroduced. Most non-surgical grade I–II injuries feel substantially better by this point." },
            { t: "Month 3–6 (after reconstruction)", d: "Strength and control work intensifies. Straight-line running begins once quadriceps strength and gait are adequate. Deep squatting and heavy hamstring loading are still restricted." },
            { t: "Month 6–9", d: "Agility, deceleration and change-of-direction drills. Strength testing compares the operated leg against the other side before contact activity is discussed." },
            { t: "Month 9–12", d: "Return to contact and pivoting sport after reconstruction, with clearance. PCL rehabilitation is deliberately slower than ACL rehabilitation — the graft is protected for longer." },
        ],
        recoveryNote:
            "Recovery differs sharply between an isolated tear managed in a brace and a multiligament reconstruction. Bracing protocols for the PCL are specific and are not interchangeable with a standard hinged knee brace bought off the shelf.",
        locationsHeading: "Where we see PCL Injury Patients",
        faqTitle: "PCL Injury FAQ",
        faqs: [
            { question: "How is a PCL injury different from an ACL tear?", answer: "The ACL stops the shin sliding forwards; the PCL stops it sliding backwards. ACL tears usually cause dramatic swelling and a knee that gives way on turning. PCL injuries cause less obvious instability — patients more often report pain at the back of the knee, trouble kneeling, and difficulty on stairs and slopes. That is why PCL injuries are missed more frequently." },
            { question: "Can a PCL tear heal on its own?", answer: "Partially, yes — and this is a real difference from the ACL. The PCL has a better blood supply and sits in a more protected position, so grade I and II injuries often heal to a functional, if slightly lax, ligament when braced and rehabilitated correctly. Complete grade III tears and bony avulsions are less forgiving." },
            { question: "Do I need surgery for a PCL injury?", answer: "Most isolated grade I–II PCL injuries do not. Surgery is discussed for complete tears with significant laxity, bony avulsions, injuries involving other ligaments or the posterolateral corner, and knees that remain unstable after a genuine trial of rehabilitation. The decision is based on your examination findings and how the knee performs, not on the MRI report alone." },
            { question: "Why does my knee hurt at the front if the injured ligament is at the back?", answer: "A PCL-deficient knee lets the shin bone sit slightly back, which increases the load through the kneecap joint and the inner compartment. Over time that shows up as front-of-knee pain, particularly going downstairs, and as early wear on X-ray. It is one of the main reasons chronic PCL deficiency is worth treating rather than tolerating." },
            { question: "What is a PCL brace and why is it different?", answer: "A dedicated PCL brace applies a force that supports the shin bone forwards, counteracting the sag that the injured ligament can no longer resist. A standard hinged knee brace does not do this. Using the wrong brace during the healing window is a common reason a PCL injury heals lax." },
            { question: "How long before I can return to sport?", answer: "For a braced grade I–II injury, often three to four months, depending on the sport and on strength testing. After reconstruction, allow nine to twelve months for contact and pivoting sport. PCL rehabilitation is intentionally slower than ACL rehabilitation because the graft is protected for longer." },
            { question: "I injured my knee in a car accident months ago and it still feels wrong. Is it too late?", answer: "No. Chronic PCL injuries are assessed and treated regularly. What changes with time is the emphasis — alongside the ligament we look at what the abnormal loading has done to the cartilage and the alignment, and treatment is planned around both. Bring any imaging from the time of the accident if you have it." },
            { question: "Will I be able to kneel normally again?", answer: "Kneeling discomfort is one of the more persistent symptoms after a PCL injury, and it is worth being honest about that. Many patients regain comfortable kneeling; some retain a degree of discomfort on hard surfaces. It is a specific thing to raise in clinic, particularly if your work or worship involves regular kneeling." },
        ],
        ctaHeading: "Book a PCL Injury Assessment in Bengaluru",
        ctaText: "A knee injured on a dashboard or in a fall onto the bent knee deserves a proper ligament examination rather than a label of “sprain”. Bring your MRI and any accident-time imaging.",
    },
    "mcl-lcl-knee-ligament-injury": {
        intro: [
            "The collateral ligaments run down either side of the knee: the MCL on the inner side, the LCL on the outer side as part of the posterolateral corner. They control side-to-side stability, and they are injured constantly — a blow to the outside of the knee in football, a foot caught while turning, a fall from a two-wheeler with the leg trapped.",
            "The good news is that most MCL injuries heal well without surgery. The problem is the ones that do not fit that rule: LCL and posterolateral corner injuries, which behave quite differently, and collateral injuries that come as part of a multiligament knee. Dr. Nitin N Sunku grades these properly on examination and imaging, treats the majority in a hinged brace with a staged rehabilitation programme, and operates on the minority that genuinely need it.",
        ],
        conditionsHeading: "Conditions We Treat",
        conditions: [
            {
                title: "MCL Sprain (Grade I–II)",
                text: "Pain and tenderness along the inner side of the knee after a valgus force, with mild to moderate opening on stress testing but a firm end point. Swelling is usually localised rather than a tense joint effusion. These heal reliably with bracing and rehabilitation.",
            },
            {
                title: "Complete MCL Tear (Grade III)",
                text: "Marked opening on valgus stress with no firm end point. Often part of a larger injury — the classic combination is an MCL tear with an ACL tear, sometimes with a medial meniscus injury. The MCL portion still frequently heals in a brace; the accompanying injuries are what drive the surgical plan.",
            },
            {
                title: "LCL and Posterolateral Corner Injury",
                text: "Injury to the outer side of the knee, often from a blow to the inside of the knee or a hyperextension-varus force. Far less forgiving than the MCL. Patients may describe the knee snapping into hyperextension, difficulty on uneven ground, and sometimes foot drop or numbness if the common peroneal nerve has been stretched. These are assessed urgently.",
            },
            {
                title: "Multiligament Knee Injury and Chronic Instability",
                text: "Collateral injury combined with cruciate injury, or an old collateral injury that has healed lax, leaving a knee that opens up on side-to-side loading. High-energy injuries — road traffic accidents in particular — need a vascular and nerve assessment before anything else is planned.",
            },
        ],
        conditionsNote:
            "The single most useful distinction is inner versus outer. An isolated inner-side (MCL) injury usually heals in a brace. An outer-side (LCL and posterolateral corner) injury has a much poorer record with non-surgical treatment and should be assessed early.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            {
                title: "Non-Surgical Management (Most MCL Injuries)",
                text: "The MCL has a good blood supply and heals well when protected. Treatment is a hinged knee brace allowing controlled movement while blocking side-to-side stress, early range of motion to prevent stiffness, and a progressive strengthening programme. Immobilising the knee rigidly is a mistake — stiffness after an MCL injury is more disabling than mild residual laxity. Grade I injuries often settle in three to four weeks, grade II in six to eight.",
            },
            {
                title: "Early Repair for Acute LCL and Posterolateral Corner Injuries",
                text: "Where the outer-side structures are completely torn, repair or reconstruction within the first two to three weeks gives materially better results than a delayed procedure, because the tissue planes are still identifiable. This is one of the genuine time-critical decisions in knee ligament surgery, and it is the reason an outer-side injury should not be watched for six weeks to see how it goes.",
            },
            {
                title: "Collateral Ligament Reconstruction",
                text: "For chronic instability, or where a healed-lax ligament leaves the knee opening under load, the ligament is reconstructed with a graft rather than repaired. In the posterolateral corner this may involve reconstructing more than one structure. Alignment is assessed first: a varus knee with a lax outer side may need the alignment corrected, because reconstructing soft tissue under a bow-legged load is a recognised route to failure.",
            },
            {
                title: "Staged Treatment in Combined Injuries",
                text: "Where the MCL is torn alongside the ACL, the usual approach is to brace and let the MCL heal first, then reconstruct the ACL on a knee that has regained full movement. Operating on a stiff, acutely inflamed knee increases the risk of arthrofibrosis. The sequencing is explained clearly, because it means two phases rather than one.",
            },
        ],
        whyChoose:
            "Collateral ligament injuries get two opposite errors: outer-side injuries treated too casually, and inner-side injuries operated on unnecessarily. Dr. Sunku’s fellowship training in arthroscopy and sports medicine, and his experience with professional athletes, is directed at getting that call right — grading the injury properly, recognising a posterolateral corner injury early enough for repair to be an option, and being straightforward when a brace and a rehabilitation programme will do the job better than surgery.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Week 0–2", d: "Hinged brace, controlled range of motion, swelling management, and quadriceps activation. Weight-bearing as tolerated for isolated MCL injuries; protected for outer-side and combined injuries." },
            { t: "Week 2–6", d: "Range of motion progressed to full, brace range opened up, closed-chain strengthening and hip control work. Most isolated grade I–II MCL injuries are walking normally well within this window." },
            { t: "Week 6–12", d: "Brace weaned, strength work loaded properly, and straight-line running introduced for isolated injuries once side-to-side testing is comfortable and strength is adequate." },
            { t: "Month 3–6", d: "Agility, cutting and sport-specific drills for non-surgical injuries. After reconstruction, this phase is where strengthening and controlled loading are the focus rather than return to sport." },
            { t: "Month 6–9", d: "Return to contact sport after reconstruction, following strength testing and clearance. Isolated grade I–II MCL injuries typically return far sooner — often within one to two months." },
        ],
        recoveryNote:
            "These ranges assume an isolated ligament injury. A collateral injury combined with an ACL or PCL reconstruction follows the cruciate timeline, which is longer. Stiffness is the complication to watch for after collateral injuries, so early controlled movement matters more than rest.",
        locationsHeading: "Where we see Collateral Ligament Injury Patients",
        faqTitle: "MCL & LCL Ligament Injury FAQ",
        faqs: [
            { question: "Will my MCL tear heal without surgery?", answer: "Most do. The MCL has a good blood supply and a strong record of healing when protected in a hinged brace and rehabilitated properly. Even many complete grade III MCL tears heal without being repaired. Surgery is reserved for specific situations — a ligament that has healed lax, an MCL avulsed with a bone fragment, or injuries where the ligament end has flipped out of position." },
            { question: "Why is an LCL injury treated more urgently than an MCL injury?", answer: "The outer-side structures — the LCL and the posterolateral corner — heal poorly on their own, and an untreated posterolateral corner injury is a well-recognised cause of failure in cruciate ligament reconstruction. Acute repair or reconstruction in the first two to three weeks gives better results than a delayed procedure, so an outer-side injury is assessed promptly rather than watched." },
            { question: "How do I know which ligament I have injured?", answer: "The mechanism and the site of tenderness are strong clues — a blow to the outside of the knee typically injures the MCL on the inner side, and vice versa. But the grading requires a hands-on examination with stress testing at full extension and at 30 degrees of bend, and an MRI to confirm and to identify associated cruciate and meniscal injuries. Self-diagnosis from the location of pain is not reliable." },
            { question: "I have both an ACL and an MCL tear. Will they be operated on together?", answer: "Usually not in the same sitting. The common approach is to brace the knee and let the MCL heal, restore full range of motion, and then reconstruct the ACL. Operating on an acutely swollen, stiff knee raises the risk of the knee scarring down. It means a two-phase plan, which is explained at the outset so the timeline is not a surprise." },
            { question: "Can I walk with a torn collateral ligament?", answer: "Often yes, particularly with an MCL injury, and that is exactly why these are under-treated. Being able to walk is not evidence that the ligament is intact. If the knee felt unstable at the time of injury, opened up, or is tender along one side, it needs examination even if you walked home on it." },
            { question: "How long do I need to wear the brace?", answer: "Typically four to six weeks for a grade II MCL injury, with the permitted range of motion opened up progressively. The brace controls side-to-side stress while allowing bending and straightening — full immobilisation is avoided because stiffness is harder to fix than mild laxity." },
            { question: "I have numbness or foot drop after an outer-side knee injury. Is that related?", answer: "It can be. The common peroneal nerve runs close to the posterolateral corner and can be stretched or injured in the same trauma. Numbness on the top of the foot, or difficulty lifting the foot, should be reported immediately — it changes the urgency of the assessment." },
            { question: "My old knee injury left the knee feeling loose sideways. Can that be fixed?", answer: "Yes, chronic collateral instability can be reconstructed. The assessment looks at alignment as well as the ligament: if the leg is bowed, correcting the alignment may be part of the plan, because a reconstruction working against a poor mechanical axis is more likely to stretch out. This is discussed with the X-rays in front of you." },
        ],
        ctaHeading: "Book a Knee Ligament Assessment in Bengaluru",
        ctaText: "An outer-side knee injury is time-sensitive and an inner-side injury usually is not — but only an examination tells you which one you have. Bring your MRI and X-rays.",
    },
    "hip-impingement-fai": {
        intro: [
            "Femoroacetabular impingement is the reason a lot of young, active adults have hip or groin pain that no one can explain. Extra bone on the femoral neck (cam morphology), on the socket rim (pincer morphology), or both, causes the two to abut at the ends of movement. Over time that repeated contact tears the labrum — the rim of tissue sealing the socket — and damages the adjacent cartilage.",
            "It is routinely misdiagnosed as a groin strain that will not settle, as a “hip flexor problem”, or as early arthritis in someone far too young for it. Dr. Nitin N Sunku assesses hip impingement with a focused examination, dedicated hip imaging and the measurements that actually matter, and is explicit about the one thing that decides everything: how much cartilage is left. Where the joint space is preserved, hip arthroscopy can genuinely change the trajectory. Where it is not, arthroscopy is the wrong operation, and you will be told that.",
        ],
        conditionsHeading: "Conditions We Treat",
        conditions: [
            {
                title: "Cam-Type Impingement",
                text: "Extra bone at the head-neck junction of the femur, so the femoral head is not perfectly round. Typical in men in their twenties and thirties, and in people who played pivoting or kicking sport through adolescence. Pain deep in the groin on flexion and internal rotation — putting on socks, getting out of a car, sitting for a long drive.",
            },
            {
                title: "Pincer-Type Impingement",
                text: "Over-coverage of the socket rim, so the neck of the femur strikes the rim at the end of movement. More common in active women. Often presents as a persistent deep ache after activity rather than a sharp catch, with pain reproduced when the hip is flexed and rotated.",
            },
            {
                title: "Labral Tears",
                text: "The consequence of impingement in most cases, rather than an isolated injury. Patients describe catching, clicking, or a sharp pinch in the groin, sometimes with a feeling of the hip locking momentarily. Treating the labral tear without addressing the bone that caused it is a well-recognised route to a repeat tear.",
            },
            {
                title: "Groin Pain That Has Not Settled",
                text: "Athletes and active adults carrying a “groin strain” for six months or more, sometimes after multiple courses of physiotherapy. The examination distinguishes hip joint pain from adductor, hernia-related and lumbar-referred causes, which is often the step that has been skipped.",
            },
        ],
        conditionsNote:
            "The C-sign is characteristic: patients cup the hand around the side and front of the hip to show where it hurts. Pain pointed to with one finger over the outer bone, or pain that runs down the back of the thigh, usually points elsewhere.",
        approachHeading: "Treatment Approach / Procedures Offered",
        approach: [
            {
                title: "Structured Non-Surgical Management First",
                text: "For most patients the first line is a targeted programme, not surgery: activity and load modification, deep hip rotator and gluteal strengthening, core and pelvic control work, and correcting the positions that provoke impingement — deep squatting, prolonged low sitting, and end-range flexion under load. A properly delivered programme over three months resolves symptoms for a meaningful proportion of people, and it is a fair trial before any operation is considered.",
            },
            {
                title: "Diagnostic and Therapeutic Injection",
                text: "An image-guided intra-articular injection serves two purposes. It can settle symptoms, and it answers a diagnostic question: if pain from inside the hip joint disappears for the duration of the local anaesthetic, that confirms the joint is the source. If it does not, the problem is likely outside the joint, and hip arthroscopy would not have helped.",
            },
            {
                title: "Hip Arthroscopy — Osteoplasty and Labral Repair",
                text: "Where symptoms persist despite a genuine rehabilitation trial and imaging confirms impingement with preserved joint space, arthroscopic surgery reshapes the bone (femoral osteoplasty and, where indicated, acetabular rim trimming) and repairs the labrum with anchors rather than simply removing it. Preserving and repairing the labrum matters — it maintains the suction seal that helps the joint distribute load.",
            },
            {
                title: "When Arthroscopy Is Not the Answer",
                text: "Hip arthroscopy has a poor record in hips that already show significant joint space narrowing, and in patients whose imaging shows dysplasia rather than impingement. In those situations the honest options are continued non-surgical management, or — where arthritis is advanced and quality of life is genuinely limited — a discussion about joint replacement at the right time. Recommending an arthroscopy on a worn hip to avoid that conversation does the patient no favours.",
            },
        ],
        whyChoose:
            "The value in hip impingement care is almost entirely in patient selection. Dr. Sunku’s arthroscopy and sports medicine fellowship training, and his experience with professional athletes, is applied here to separating the hips that will do well from those that will not — using examination, dedicated imaging and, where useful, a diagnostic injection, rather than operating on an MRI report. A labral tear on a scan is common in people with no pain at all; the decision is made on the whole picture.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Week 0–2", d: "Crutches with partial weight-bearing to protect the repair, gentle passive range of motion, and early activation work. Specific movements — deep flexion, forced rotation — are restricted to protect the labral repair." },
            { t: "Week 2–6", d: "Weaning off crutches as gait normalises, progressive range of motion within limits, stationary cycling introduced, and gluteal and deep rotator strengthening begun in earnest." },
            { t: "Week 6–12", d: "Full range of motion expected. Strength work loaded properly, single-leg control, and gradual reintroduction of functional movements. Most desk-based patients are fully back at work well before this point." },
            { t: "Month 3–6", d: "Running progression, then agility and sport-specific work as strength and control allow. Recreational activity generally resumes across this window." },
            { t: "Month 6–12", d: "Return to competitive or pivoting sport. Hip arthroscopy rehabilitation is a slower burn than patients expect — improvement continues over the first year rather than plateauing at three months." },
        ],
        recoveryNote:
            "Realistic expectation-setting matters more here than in most procedures. The aim is a substantial reduction in pain and a return to activity, not a guaranteed pain-free hip — and outcomes are consistently better in hips with well-preserved cartilage, which is why the pre-operative assessment is so thorough.",
        locationsHeading: "Where we see Hip Impingement Patients",
        faqTitle: "Hip Impingement (FAI) FAQ",
        faqs: [
            { question: "What does hip impingement actually feel like?", answer: "Most commonly a deep ache or pinch in the groin, brought on by sitting for long periods, getting in and out of a car, putting on socks and shoes, or deep squatting. Many patients instinctively cup their hand around the side and front of the hip to indicate the pain. Clicking or catching suggests the labrum is involved. Pain over the outer bony point or running down the back of the thigh usually has a different cause." },
            { question: "Is a labral tear on my MRI the reason I have pain?", answer: "Not necessarily. Labral tears are found on scans of people with no hip symptoms at all, so the MRI finding alone does not establish the diagnosis. What matters is whether your examination reproduces the pain in the pattern typical of impingement, and — where there is doubt — whether an image-guided injection into the joint temporarily abolishes it. Treating a scan rather than a patient is how unnecessary hip operations happen." },
            { question: "Do I have to have surgery, or can physiotherapy fix this?", answer: "A properly targeted programme resolves symptoms for a meaningful proportion of patients, and it is a fair first line for most people. It focuses on gluteal and deep rotator strength, pelvic control, and avoiding the end-range positions that provoke impingement — it is not a generic hip stretching routine, and generic stretching into flexion can make impingement worse. Surgery is discussed when three months of the right programme has not worked." },
            { question: "Will hip arthroscopy prevent me needing a hip replacement later?", answer: "That claim is made more often than the evidence supports. Reshaping the bone and repairing the labrum removes the mechanism that is damaging the cartilage, which is a rational reason to believe it helps in a hip with good cartilage. But it is not a guarantee against future arthritis, and in a hip that already shows significant joint space narrowing, arthroscopy performs poorly. You will be given a straight answer about which category your hip falls into." },
            { question: "How long is the recovery after hip arthroscopy?", answer: "Crutches for roughly two weeks, desk work within one to three weeks, driving usually at three to four weeks, running around three months, and pivoting sport between six months and a year. Recovery continues improving over the first twelve months — this is not an operation that reaches its final result at three months." },
            { question: "I am 32 and was told I have early arthritis in my hip. Is that the same thing?", answer: "Often they are two stages of the same process. Cam-type impingement is a recognised contributor to hip arthritis developing early, because the abnormal bone shape damages the cartilage over years. Whether the label is impingement or early arthritis matters less than the measurement of how much joint space remains, because that is what determines which treatments are sensible." },
            { question: "Can this be caused by sport I played as a teenager?", answer: "Cam morphology is more common in people who played high-impact or pivoting sport during adolescence, while the growth plate was still open. That is an association, not a reason for regret — it simply explains why a fit person in their twenties or thirties can develop a structural hip problem without any single injury." },
            { question: "What if the injection does not relieve my pain?", answer: "That is a useful result, not a failed treatment. If anaesthetic inside the joint does not settle the pain, the source is likely outside the joint — the adductors, the abdominal wall, the sacroiliac joint or the lumbar spine — and the assessment shifts accordingly. It also means hip arthroscopy would very probably not have helped, which is worth knowing before rather than after an operation." },
        ],
        ctaHeading: "Book a Hip Impingement Assessment in Bengaluru",
        ctaText: "Groin pain that has not settled after months of physiotherapy deserves a hip joint examination and dedicated imaging. Bring your X-rays and MRI if you have them.",
    },
    "artificial-ligament-acl-reconstruction": {
        intro: [
            "ACL reconstruction has traditionally meant taking a tendon from elsewhere in your leg — usually the hamstring, patellar tendon or quadriceps tendon — and using it to rebuild the torn ligament. That remains a standard, well-established operation with a long track record, and for many patients it is still the right choice.",
            "For suitable patients, Dr. Nitin N Sunku also offers ACL reconstruction with an artificial ligament: Jewel ACL™, a synthetic ligament now used in India. It is placed inside the knee to restore stability without harvesting healthy tendon from another part of the leg, so when it is used on its own there is only one site to heal — the knee. Whether it suits you is decided on examination and imaging, not on preference alone. The procedure is available at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout.",
        ],
        conditionsHeading: "Understanding Your ACL Injury",
        conditions: [
            {
                title: "What the ACL Does",
                text: "The anterior cruciate ligament connects the thigh bone (femur) to the shin bone (tibia) inside the knee. It controls forward movement of the shin and limits excessive twisting. That matters in sport, but also on uneven ground, on stairs, and whenever you turn suddenly or change direction with your foot planted.",
            },
            {
                title: "How It Tears",
                text: "A sharp twist with the foot fixed on the ground, an awkward landing, a sudden turn, a slip or fall, or a road traffic accident. When the force on the knee exceeds the ligament’s strength, the ACL stretches or tears.",
            },
            {
                title: "How It Feels",
                text: "Pain and swelling come first. As the swelling settles, many people notice the knee feels unstable or simply cannot be trusted — on turns, on stairs, or stepping off a kerb. That loss of confidence is often the most telling symptom.",
            },
            {
                title: "When Reconstruction Is Advised",
                text: "Once a tear is confirmed, the plan is based on knee stability, age, activity level and lifestyle. For many patients, reconstruction is recommended to restore stability and to reduce the risk of further damage to the meniscus and cartilage from repeated giving-way.",
            },
        ],
        conditionsNote:
            "Before choosing any graft, it is worth asking: Am I a suitable candidate for reconstruction? Which options suit me, and why? What are the benefits and risks of each in my case? What will rehabilitation involve? When can I return to work and everyday activities? Each of these is answered in clinic.",
        approachHeading: "Your ACL Reconstruction Options",
        approach: [
            {
                title: "Traditional Autograft Reconstruction",
                text: "A graft is taken from your own hamstring, patellar tendon or quadriceps tendon and placed inside the knee to reproduce the function of the original ACL. Autografts have a long track record and remain a standard option. Because tissue is harvested from another part of the leg, recovery involves healing at two sites — the knee and the donor site — and the choice of donor site is weighed against your activity level, age and goals.",
            },
            {
                title: "Artificial Ligament Reconstruction (Jewel ACL™)",
                text: "A tissue-sparing approach that uses a purpose-designed synthetic ligament to restore stability. When Jewel ACL™ is used on its own, no tendon is taken from your leg, so there is no second wound and only the knee needs to heal. According to the manufacturer, it is designed to use smaller bone tunnels than a conventional graft, helping preserve natural bone, and your own tissue grows into the implant over time.",
            },
            {
                title: "Who May Be Considered",
                text: "Suitability is an individual clinical decision. It depends on the pattern of the injury, how long ago it happened, whether the meniscus or other ligaments are involved, knee alignment, the demands you will place on the knee, and how much avoiding a donor site matters to you. An artificial ligament is not a substitute for every autograft. Long-term evidence for synthetic ACL ligaments is more limited than for autografts, and earlier generations of synthetic ligament had problems — which is exactly why patient selection matters, and why you will be told plainly if your own tendon is the better choice for your knee.",
            },
            {
                title: "About the Implant",
                text: "According to the manufacturer, Xiros, Jewel ACL™ has been used in India since 2023 in thousands of ACL procedures, is designed and made in the United Kingdom, is UK MDR registered, and is made from a material with a long history of use in medical implants. Xiros reports more than 40 years of implant development. These are the manufacturer’s statements; the decision to use any implant in your knee rests on your own clinical assessment.",
            },
            {
                title: "Rehabilitation Still Decides the Outcome",
                text: "Whichever graft is used, the knee has to regain strength, control and confidence. The tissue-sparing approach may allow earlier mobilisation and weight-bearing as guided by the surgeon, but a structured, supervised rehabilitation programme remains essential for a safe return to work and sport.",
            },
        ],
        whyChoose:
            "Dr. Sunku performs both autograft and artificial-ligament ACL reconstruction, so the recommendation you get is not tied to a single technique. His arthroscopy and sports medicine fellowship training, and his work as a team doctor for professional athletes, shape the assessment: the ligament, the meniscus, the cartilage and what you need the knee to do are all weighed before a graft is chosen. If an autograft is the better option for your knee — or if a structured rehabilitation programme without surgery is reasonable — that is what you will be advised.",
        recoveryHeading: "Recovery and Rehabilitation Overview",
        recovery: [
            { t: "Week 0–2", d: "Weight-bearing as guided by the surgeon, usually with crutches initially. Focus on controlling swelling, regaining full straightening of the knee, and switching the quadriceps back on. With no donor site, there is only one wound to manage." },
            { t: "Week 2–6", d: "Progressive range of motion, normalising your walking pattern, and early closed-chain strengthening under supervision. Most people return to desk-based work in this window." },
            { t: "Week 6–12", d: "Full range of motion expected. Strength, balance and single-leg control are built up; stationary cycling and swimming are usually introduced." },
            { t: "Month 3–6", d: "Running, then agility and change-of-direction drills once strength testing shows the operated leg is closing the gap on the other side. Progression is a capability decision, not a calendar one." },
            { t: "Month 6 onwards", d: "Return to pivoting and contact sport after clearance, based on strength, hop and movement testing rather than a fixed date." },
        ],
        recoveryNote:
            "Recovery depends on individual healing, rehabilitation and clinical guidance. Avoiding a donor site removes one source of pain and one wound; it does not remove the need for the knee itself to regain strength and control before sport.",
        locationsHeading: "Where we see ACL Reconstruction Patients",
        faqTitle: "Artificial Ligament ACL Reconstruction FAQ",
        faqs: [
            { question: "What is an artificial ACL ligament?", answer: "It is a purpose-designed synthetic ligament placed inside the knee to do the job of the torn ACL. Instead of harvesting a tendon from your hamstring, patellar tendon or quadriceps, the surgeon uses the implant to restore stability. Jewel ACL™ is the artificial ligament Dr. Sunku uses for suitable patients." },
            { question: "Is an artificial ligament better than using my own tendon?", answer: "Not universally — they involve different trade-offs. An autograft has a long track record and is a standard, well-established option. An artificial ligament avoids taking healthy tissue from elsewhere in the leg, so there is no donor-site wound when it is used on its own. Long-term evidence is more extensive for autografts. The right choice depends on your injury, your knee and your goals, and is discussed openly in clinic." },
            { question: "Am I a suitable candidate?", answer: "That is decided after examining the knee and reviewing your MRI. Factors include the pattern of the tear, the time since injury, any meniscus, cartilage or other ligament damage, alignment, and your activity demands. Some patients are better served by an autograft, and some by structured rehabilitation without surgery." },
            { question: "What does “no second wound” mean?", answer: "In a traditional ACL reconstruction, tendon is harvested from another part of the leg, which leaves a donor site that also has to heal and can be sore in its own right. When Jewel ACL™ is used on its own, no tendon is taken, so only the knee needs to heal." },
            { question: "Will I recover faster with an artificial ligament?", answer: "Without a donor site, earlier mobilisation and weight-bearing may be possible, as guided by the surgeon. But the knee still needs a full, supervised rehabilitation programme, and return to sport is decided by strength and movement testing — not by the type of graft or a date on the calendar." },
            { question: "Is it safe, and what are the risks?", answer: "Like any ACL reconstruction, risks include infection, stiffness, persistent swelling, and re-injury or failure of the reconstruction. With synthetic ligaments, inflammation in the joint lining is a recognised concern and is one reason careful patient selection matters. According to the manufacturer, Jewel ACL™ is made from a material with a long, safe history in medical implants and is UK MDR registered. Your individual risks are discussed before any decision is made." },
            { question: "Is this procedure available at both clinics?", answer: "Yes. Consultations and surgery are available at Raghava Multispeciality Hospital, Attibele and Health Nest Hospital, HSR Layout." },
            { question: "What should I bring to my consultation?", answer: "Your MRI (images and report), any X-rays, and a note of how and when the injury happened. It also helps to come with your questions about suitability, risks, rehabilitation, and when you can expect to return to work and daily activities." },
        ],
        ctaHeading: "Book an ACL Reconstruction Consultation in Bengaluru",
        ctaText: "If you have an ACL tear and want to understand all your reconstruction options — including whether an artificial ligament is suitable for you — bring your MRI for a proper assessment.",
    },
};
