/**
 * Structured content for /services/[slug] pages.
 *
 * Why this exists: the original service detail page was a hardcoded if-chain,
 * ~200 lines of bespoke JSX per service. Every new procedure page made that
 * file harder to maintain. New service pages are authored here as data and
 * rendered by <ServiceBody />; the eight legacy services still fall through to
 * the if-chain in app/services/[slug]/page.tsx and can be migrated one at a
 * time without touching live copy.
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
};
