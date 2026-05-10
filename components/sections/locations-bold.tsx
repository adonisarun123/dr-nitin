import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
    {
        name: "Raghava Multispeciality Hospital",
        address:
            "39, Sarjapura - Attibele Rd, opposite syndicate bank, Anekal, Bengaluru, Karnataka 562107",
        phone: "+91-9980031006",
        mapLink:
            "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6?sa=X&ved=1t:2428&ictx=111",
    },
    {
        name: "Health Nest Hospital",
        address:
            "1162, 24th Main Rd Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
        phone: "+91-9449031003",
        mapLink:
            "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68?sa=X&ved=1t:2428&ictx=111",
    },
];

/**
 * Bold modern "Visit Us" — direction B.
 * Original copy preserved (headline, subhead, addresses, phone numbers).
 * Cards rendered as dark surfaces for high-contrast moment.
 */
export function LocationsBold() {
    return (
        <section className="relative py-24 lg:py-32 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-16">
                    <h2 className="font-heading font-bold text-4xl lg:text-[3rem] tracking-[-0.03em] text-slate-950 leading-[1.05]">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Visit Us
                        </span>
                    </h2>
                    <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                        Consult Dr. Nitin at these convenient locations in Bengaluru.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
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
                                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/20 mb-6">
                                    <MapPin className="h-6 w-6 text-cyan-300" aria-hidden />
                                </div>

                                <h3 className="font-heading font-bold text-xl lg:text-[1.5rem] tracking-[-0.02em] leading-tight mb-4 text-white">
                                    {loc.name}
                                </h3>

                                <p className="text-blue-100/80 leading-relaxed mb-6 flex-grow">
                                    {loc.address}
                                </p>

                                <div className="space-y-3 w-full pt-5 border-t border-white/10">
                                    <a
                                        href={`tel:${loc.phone}`}
                                        className="inline-flex items-center gap-3 text-white font-medium hover:text-cyan-200 transition-colors"
                                    >
                                        <Phone className="h-5 w-5 text-cyan-300" aria-hidden />
                                        {loc.phone}
                                    </a>

                                    <Button
                                        variant="outline"
                                        className="w-full mt-2 rounded-full border-white/25 bg-white/5 text-white hover:bg-white hover:text-slate-950 hover:translate-y-0"
                                        asChild
                                    >
                                        <a
                                            href={loc.mapLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Get Directions
                                            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
