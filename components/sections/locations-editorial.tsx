import { ArrowUpRight, Phone } from "lucide-react";

const locations = [
    {
        name: "Raghava Multispeciality Hospital",
        area: "Attibele",
        addressLines: [
            "39, Sarjapura–Attibele Road",
            "opposite Canara Bank (formerly Syndicate Bank), Attibele",
            "Bengaluru, Karnataka 562107",
        ],
        phone: "+91-9980031006",
        mapLink:
            "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6?sa=X&ved=1t:2428&ictx=111",
        serves: "Anekal · Bommasandra · Chandapura · Hosur Road · Electronic City",
    },
    {
        name: "Health Nest Hospital",
        area: "HSR Layout",
        addressLines: [
            "1162, 24th Main Road",
            "Sector 2, HSR Layout",
            "Bengaluru, Karnataka 560102",
        ],
        phone: "+91-9449031003",
        mapLink:
            "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68?sa=X&ved=1t:2428&ictx=111",
        serves: "HSR Layout · Koramangala · BTM Layout · Sarjapur Road · Bellandur",
    },
];

/**
 * Editorial-clinical Visit Us section — direction A.
 * Address-card layout reads like a clinic letterhead: serif name, sans address
 * block, rule-divided sections, no pills or oversized icons.
 */
export function LocationsEditorial() {
    return (
        <section className="py-20 lg:py-28 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-12 lg:mb-16">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                        <span aria-hidden className="h-px w-8 bg-blue-800/60" />
                        Visit us
                    </div>
                    <h2 className="font-editorial text-4xl lg:text-5xl tracking-[-0.015em] text-gray-900 leading-[1.1] mt-4">
                        Two clinics across South Bengaluru.
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Most consultations are anchored at Raghava Multispeciality
                        Hospital, Attibele. Health Nest Hospital, HSR Layout, supports
                        follow-up and consults closer to the city.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-px bg-gray-200">
                    {locations.map((loc) => (
                        <article
                            key={loc.name}
                            className="bg-white p-8 lg:p-10 flex flex-col"
                        >
                            <div className="text-[11px] uppercase tracking-[0.22em] font-semibold text-blue-800 mb-3">
                                {loc.area}
                            </div>

                            <h3 className="font-editorial text-2xl lg:text-3xl leading-tight text-gray-900 mb-5">
                                {loc.name}
                            </h3>

                            <address className="not-italic text-gray-700 leading-relaxed mb-6">
                                {loc.addressLines.map((line, i) => (
                                    <span key={i} className="block">
                                        {line}
                                    </span>
                                ))}
                            </address>

                            <div className="border-t border-gray-200 pt-5 mb-5">
                                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-blue-800 mb-2">
                                    Telephone
                                </div>
                                <a
                                    href={`tel:${loc.phone}`}
                                    className="inline-flex items-center gap-2 font-editorial text-lg text-gray-900 hover:text-blue-900 transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-blue-800" aria-hidden />
                                    {loc.phone}
                                </a>
                            </div>

                            <div className="border-t border-gray-200 pt-5 mb-7 flex-grow">
                                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-blue-800 mb-2">
                                    Service area
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {loc.serves}
                                </p>
                            </div>

                            <a
                                href={loc.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 self-start text-blue-900 font-semibold underline underline-offset-[6px] decoration-blue-900/30 hover:decoration-blue-900"
                            >
                                Open in Google Maps
                                <ArrowUpRight className="h-4 w-4" aria-hidden />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
