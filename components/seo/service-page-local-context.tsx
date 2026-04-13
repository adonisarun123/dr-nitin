export function ServicePageLocalContext({ serviceTitle }: { serviceTitle: string }) {
    return (
        <section
            className="border-t border-gray-100 pt-8 mt-8"
            aria-labelledby="service-local-context-heading"
        >
            <h2
                id="service-local-context-heading"
                className="text-2xl font-bold text-gray-900 mb-4"
            >
                Where we see {serviceTitle.toLowerCase()} patients
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                    Most in-person reviews and operative planning for {serviceTitle.toLowerCase()} are centred
                    at <strong>Raghava Multispeciality Hospital, Attibele</strong>, on Sarjapura–Attibele Road.
                    That site is straightforward for people living in Attibele, Anekal, Chandapura, Jigani,
                    Bommasandra, and along the Sarjapura and Hosur corridors, including many who work near
                    Electronic City and prefer a South Bengaluru base close to home.
                </p>
                <p>
                    We also run sessions at <strong>Health Nest Hospital, HSR Layout</strong> (24th Main, Sector
                    2) for follow-up visits, pre-operative checks, and patients who find HSR, Koramangala,
                    BTM Layout, or Bellandur easier on a given day. The aim is the same at both hospitals: clear
                    examination, imaging only when it changes the plan, and a written summary you can share
                    with family or physiotherapy.
                </p>
                <p>
                    If you are unsure which location to book, use the contact page and mention your pin code
                    and whether you need urgent fracture review, a second opinion, or routine arthroscopy
                    follow-up. Bring prior MRI or X-ray reports, a list of medicines, and comfortable clothing
                    so the joint can be examined properly.
                </p>
            </div>
        </section>
    );
}
