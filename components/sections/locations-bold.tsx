import { ArrowUpRight, Phone, MapPin } from "lucide-react";

const locations = [
    {
        name: "Raghava Multispeciality Hospital",
        area: "Attibele",
        addressLines: [
            "39, Sarjapura–Attibele Road",
            "opposite Syndicate Bank, Anekal",
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
 * Bold modern "Visit us" — direction B.
 * Cards use dark surfaces with cyan/blue glow accents; pill button for
 * directions; phone link in monospace-ish prominence.
 */
export function LocationsBold() {
    return (
        <section className="relative py-24 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-14 lg:mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 mb-5">
                        <MapPin className="h-3.5 w-3.5 text-cyan-500" aria-hidden />
                        Visit us
                    </div>
                    <h2 className="font-heading font-bold text-4xl lg:text-[3rem] tracking-[-0.03em] text-slate-950 leading-[1.05]">
                        Two clinics across{" "}
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            South Bengaluru.
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                        Most consultations are anchored at Raghava Multispeciality
                        Hospital, Attibele. Health Nest Hospital, HSR Layout, supports
                        follow-up and consults closer to the city.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
                    {locations.map((loc) => (
                        <article
                            key={loc.name}
                            className="relative rounded-3xl bg-slate-950 text-white p-7 lg:p-9 overflow-hidden flex flex-col"
                        >
                            <div
                                aria-hidden
                                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
                            />
                            <div
                                aria-hidden
                                className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl pointer-events-none"
                            />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-cyan-200 mb-4">
                                    {loc.area}
                                </div>

                                <h3 className="font-heading font-bold text-2xl lg:text-3xl tracking-[-0.02em] leading-tight mb-5 text-white">
                                    {loc.name}
                                </h3>

                                <address className="not-italic text-blue-100/80 leading-relaxed mb-6">
                                    {loc.addressLines.map((line, i) => (
                                        <span key={i} className="block">
                                            {line}
                                        </span>
                                    ))}
                                </address>

                                <div className="grid sm:grid-cols-2 gap-4 mb-7 pt-5 border-t border-white/10">
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold mb-1.5">
                                            Telephone
                                        </div>
                                        <a
                                            href={`tel:${loc.phone}`}
                                            className="inline-flex items-center gap-2 text-white font-semibold hover:text-cyan-200 transition-colors"
                                        >
                                            <Phone className="h-4 w-4" aria-hidden />
                                            {loc.phone}
                                        </a>
                                    </div>
                                    <div>
                                        <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-semibold mb-1.5">
                                            Service area
                                        </div>
                                        <p className="text-sm text-blue-100/80 leading-snug">
                                            {loc.serves}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={loc.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="self-start inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-100 transition-colors"
                                >
                                    Open in Google Maps
                                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
