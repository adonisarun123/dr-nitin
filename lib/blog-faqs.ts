/**
 * Per-post FAQs for blog articles. Rendered as a visible FAQ section at the
 * end of the post AND emitted as FAQPage JSON-LD by app/blog/[slug]/page.tsx.
 * Keep answers plain text (no HTML) and self-contained: AI answer engines
 * quote them verbatim, so each answer must make sense on its own.
 */
export interface BlogFaq {
  q: string;
  a: string;
}

export const blogFaqs: Record<string, BlogFaq[]> = {
  "knee-pain-chandapura-anekal-causes-by-age": [
    { q: "Which doctor should I see for knee pain in Chandapura?", a: "An orthopedic doctor is the right first specialist for knee pain from injury, arthritis or long-standing pain. Families in Chandapura and Anekal can see Dr. Nitin N Sunku, orthopedic and sports medicine surgeon, at Raghava Multispeciality Hospital, Attibele, about eight minutes from Chandapura circle. A physician or rheumatologist is more appropriate if several joints are swollen together with fever or a rash." },
    { q: "Do I need an MRI for knee pain?", a: "Usually not at the first visit. Most knee pain is diagnosed by examination and, after 45, a standing X-ray. An MRI is useful when the examination suggests a ligament or meniscus tear that would change the treatment plan, such as a knee that locks or gives way." },
    { q: "Is knee pain after 40 always arthritis?", a: "No. Between 30 and 50 the commonest causes are pain behind the kneecap from weak thigh muscles and degenerative meniscus tears. Osteoarthritis becomes the leading cause after about 45 to 50, and earlier in people who are overweight or had a previous knee injury." },
    { q: "Can knee pain be treated without surgery?", a: "Yes, in most cases. Structured quadriceps and hip strengthening, weight reduction, activity changes, and in selected cases an injection relieve most knee pain. Surgery is considered for mechanical problems such as a locked knee or an unstable ligament, and replacement for advanced arthritis that has failed other treatment." },
    { q: "When is knee pain an emergency?", a: "Seek same-day care if the knee is hot, red and swollen with fever, if you cannot bear weight after an injury, if the knee is locked and cannot straighten, or if the leg below the knee is cold, pale or numb." },
    { q: "How far is the Attibele clinic from Chandapura?", a: "Raghava Multispeciality Hospital on Sarjapura–Attibele Road is about 4 km from Chandapura circle, roughly an eight-minute drive. The outpatient clinic runs Monday to Saturday, 10 am to 6 pm, and the hospital has in-house X-ray." },
  ],
  "back-neck-pain-two-wheeler-commute-chandapura-hosur-road": [
    { q: "Can riding a two-wheeler cause back pain?", a: "Yes. Repeated jolts from potholes and speed breakers, a slumped or forward-leaning posture held for long periods, and a heavy backpack all strain the lower back and neck. Most of this is mechanical strain that improves with bike set-up, riding habits and strengthening." },
    { q: "Can a bike commute cause a slipped disc?", a: "Riding does not usually cause a healthy disc to herniate, but repeated jolting and a sudden hard bump can trigger symptoms in a disc that is already degenerating. Pain shooting down the leg below the knee, with or without tingling, suggests disc-related sciatica and should be assessed." },
    { q: "Should I stop riding if I have back pain?", a: "Not usually. Shorten or break up rides, slow down fully for road breaks, move the bag off your back and keep moving through the day. Stop riding and see a doctor if you have leg weakness, numbness or pain after a fall." },
    { q: "Do I need an MRI for back pain from riding?", a: "Most riders with back pain do not need an MRI. It is advised when there are nerve symptoms such as numbness or weakness, when pain is not improving after four to six weeks, or when red-flag signs are present." },
    { q: "What are the emergency signs with back pain?", a: "Numbness around the groin or inner thighs, new difficulty controlling urine or stools, or rapidly worsening weakness in both legs can indicate cauda equina syndrome and need emergency care the same day." },
    { q: "Where can I see a back pain doctor near Chandapura?", a: "Dr. Nitin N Sunku sees back and neck pain patients at Raghava Multispeciality Hospital on Sarjapura–Attibele Road, about eight minutes from Chandapura circle, Monday to Saturday, 10 am to 6 pm." },
  ],
  "elderly-fall-hip-fracture-signs-surgery-48-hours-attibele": [
    { q: "How do I know if an elderly person has broken their hip?", a: "Suspect a hip fracture if, after a fall, they have pain in the groin or hip, cannot stand or bear weight on the leg, or the leg looks shorter and turned outward. Some people can still walk with an impacted fracture, so an X-ray is needed to rule it out." },
    { q: "Is hip fracture surgery safe in people over 80?", a: "For most patients, surgery is safer than not operating. Prolonged bed rest causes pneumonia, clots, bedsores and confusion. Age alone is rarely a reason to avoid surgery; the team optimises medical conditions first and assesses the heart and lungs before anaesthesia." },
    { q: "How soon should hip fracture surgery be done?", a: "Guidelines recommend surgery on the day of admission or the next day, ideally within 24 to 48 hours. Delays beyond 48 hours are linked with more complications and higher mortality, so avoidable delays should be minimised." },
    { q: "Can a hip fracture heal without surgery?", a: "Rarely in elderly patients. Non-surgical treatment means weeks of bed rest and a high risk of complications and permanent loss of walking. It is reserved for a small number of patients who are too unwell for any anaesthetic or who have a stable, minimal crack." },
    { q: "How long does recovery from hip fracture surgery take?", a: "Most patients stand with a walker the day after surgery and go home within a few days. Walking with a stick usually follows over six to twelve weeks, depending on strength and other conditions. Physiotherapy and treating osteoporosis are essential parts of recovery." },
    { q: "Where can hip fracture surgery be done near Chandapura?", a: "Raghava Multispeciality Hospital in Attibele, about eight minutes from Chandapura circle, has 24/7 casualty, in-house X-ray, an operating theatre and an in-patient ward. Dr. Nitin N Sunku, orthopedic surgeon, treats hip fractures there; patients needing ICU backup are referred." },
  ],
  "joint-pain-after-chikungunya-viral-fever": [
    { q: "How long does joint pain last after chikungunya?", a: "For most people it settles within a few weeks to three months. A significant minority, more often people over 45 or those with existing arthritis, have pain or stiffness beyond three months, and some for a year or longer." },
    { q: "Which painkiller is safe for joint pain during viral fever?", a: "Paracetamol is the safest choice during the fever. Aspirin and anti-inflammatory painkillers such as ibuprofen and diclofenac should be avoided until a doctor has ruled out dengue, because of the risk of bleeding." },
    { q: "Does dengue cause long-term joint pain?", a: "Dengue causes severe body, muscle and joint aches during the illness, but these usually settle as the fever resolves. Long-lasting joint pain and swelling after a fever is much more typical of chikungunya." },
    { q: "Should I see an orthopedic doctor or a rheumatologist for post-viral joint pain?", a: "See an orthopedic doctor for persistent pain or swelling in one or a few large joints, a flared arthritic knee, or heel and tendon pain. See a rheumatologist if many small joints of the hands and feet stay swollen and stiff beyond about three months." },
    { q: "Is exercise good for joint pain after chikungunya?", a: "Yes. Gentle daily range-of-motion exercises and a gradual return to walking prevent stiffness and speed recovery. Long periods of rest tend to make post-viral joints stiffer." },
    { q: "Are steroid injections a good idea for chikungunya joint pain?", a: "Self-started steroid courses or injections are not advised. They can mask the problem and cause a rebound flare when stopped. If steroids are needed, they should be prescribed and tapered by a doctor." },
  ],
  "sprain-or-fracture-how-to-tell-when-you-need-an-x-ray": [
    { q: "How can I tell if it's a sprain or a fracture?", a: "You cannot tell reliably by swelling, bruising or whether you can move it. A fracture is more likely if pressing directly on specific points of bone is painful, or if you cannot take four steps. An X-ray is the only way to be sure." },
    { q: "Can you walk on a fractured ankle?", a: "Sometimes, yes. Some ankle and foot fractures still allow limping. Being able to walk does not rule out a fracture; tenderness at the tip or back edge of the ankle bones is a reason to get an X-ray." },
    { q: "When should I get an X-ray after an ankle injury?", a: "Get an X-ray if there is tenderness at the back edge or tip of either ankle bone, tenderness at the base of the fifth metatarsal or the navicular bone of the foot, or you cannot take four steps. These are the Ottawa ankle and foot rules used by doctors." },
    { q: "Why can a wrist fracture be missed on X-ray?", a: "Scaphoid fractures, at the base of the thumb, often do not show on the first X-ray. If there is tenderness in the anatomical snuffbox after a fall on the hand, the wrist is splinted as a fracture and re-imaged, because a missed scaphoid fracture can fail to heal." },
    { q: "Is it safe to go to a traditional bone-setter for a sprain?", a: "Not before an X-ray. Massage, pulling or tight bandaging can displace a fracture or restrict blood supply. Once a fracture has been ruled out, a sprain is best treated with protection, ice, elevation and graded exercise." },
    { q: "Where can I get an X-ray for an injury near Chandapura?", a: "Raghava Multispeciality Hospital on Sarjapura–Attibele Road, about eight minutes from Chandapura circle, has in-house X-ray and 24/7 casualty. Dr. Nitin N Sunku, orthopedic surgeon, treats fractures and sprains there." },
  ],
};
