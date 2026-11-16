/**
 * REAL reviews from Dr. Nitin's Google Business Profile (HSR Layout listing),
 * copied 2026-11-16. Rules — these are shown on Google Ads landing pages, and
 * Google Ads / healthcare policy treats invented testimonials as
 * misrepresentation:
 * - Text is VERBATIM; "…" marks trimmed passages. Never reword or "improve".
 * - Name = reviewer's first name + surname initial, as shown on Google.
 * - No relative dates ("2 weeks ago") — hard-coded, they go stale and false.
 * - To refresh, copy new reviews from GOOGLE_REVIEWS_URL; never write them.
 */
export const GOOGLE_REVIEWS_URL = "https://share.google/VNszSfDfCspNnEhyU";
export const GOOGLE_RATING = "4.9";
/** Rounded down on purpose so it stays true as the count grows (553 on 2026-11-16). */
export const GOOGLE_REVIEW_COUNT_LABEL = "550+";

export const REAL_GOOGLE_REVIEWS = [
    {
        initial: "B",
        name: "Beeregowda B.",
        when: "Wrist fracture surgery",
        bg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
        text: "My mother had a distal radius fracture and underwent ORIF surgery with plating by Dr. Nitin Sunku. … Dr. Sunku explained the fracture, the need for surgery, and the procedure in a very clear and reassuring way.",
    },
    {
        initial: "K",
        name: "Kavya K.",
        when: "ACL & meniscus surgery",
        bg: "bg-gradient-to-br from-purple-400 to-purple-600",
        text: "I underwent ACL and meniscus surgery with Dr. Nitin Sunku, and I am extremely satisfied with the treatment. He explained the condition clearly, guided me through every step, and ensured a smooth surgery and recovery.",
    },
    {
        initial: "K",
        name: "Kiran G.",
        when: "Leg fracture",
        bg: "bg-gradient-to-br from-blue-400 to-blue-600",
        text: "Consulted Dr.Nitin Sunku, who is friendly, polite and patient enough to listen to all your problems and then provide the right diagnosis.",
    },
    {
        initial: "M",
        name: "Monalisa D.",
        when: "Leg fracture surgery",
        bg: "bg-gradient-to-br from-pink-400 to-pink-600",
        text: "Dr. Nitin is truly an outstanding orthopedic surgeon! One of my friends suffered a serious accident and broke her right leg. … The surgery was performed successfully, and thanks to his expertise, she is now on the road to a smooth recovery.",
    },
];

export type GoogleReview = (typeof REAL_GOOGLE_REVIEWS)[number];

/**
 * Testimonials for the homepage + /testimonials page — the same real Google
 * reviews in the { id, name, condition, quote, rating } shape those components
 * use, plus one extra short review. Same rules as above: verbatim only.
 * Index 0 is the homepage/showcase featured quote.
 */
export const PATIENT_TESTIMONIALS = [
    {
        id: 1,
        name: "Kavya K.",
        condition: "ACL & Meniscus Surgery",
        quote: "I underwent ACL and meniscus surgery with Dr. Nitin Sunku, and I am extremely satisfied with the treatment. He explained the condition clearly, guided me through every step, and ensured a smooth surgery and recovery.",
        rating: 5,
    },
    {
        id: 2,
        name: "Beeregowda B.",
        condition: "Wrist Fracture Surgery",
        quote: "My mother had a distal radius fracture and underwent ORIF surgery with plating by Dr. Nitin Sunku. … Dr. Sunku explained the fracture, the need for surgery, and the procedure in a very clear and reassuring way.",
        rating: 5,
    },
    {
        id: 3,
        name: "Monalisa D.",
        condition: "Leg Fracture Surgery",
        quote: "Dr. Nitin is truly an outstanding orthopedic surgeon! One of my friends suffered a serious accident and broke her right leg. … The surgery was performed successfully, and thanks to his expertise, she is now on the road to a smooth recovery.",
        rating: 5,
    },
    {
        id: 4,
        name: "Kiran G.",
        condition: "Leg Fracture",
        quote: "Consulted Dr.Nitin Sunku, who is friendly, polite and patient enough to listen to all your problems and then provide the right diagnosis.",
        rating: 5,
    },
    {
        id: 5,
        name: "Keerthana S.",
        condition: "Consultation",
        quote: "Dr.Nitin was kind and examined really well. Also the service of the hospital is good.",
        rating: 5,
    },
];
