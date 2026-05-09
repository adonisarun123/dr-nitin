import { Award, Users, MapPin, Activity } from "lucide-react";

const stats = [
    { id: 1, name: "Patients consulted", value: "10K", suffix: "+", icon: Users },
    { id: 2, name: "Years experience", value: "10", suffix: "+", icon: Award },
    {
        id: 3,
        name: "Practice locations",
        value: "Two",
        desc: "Attibele · HSR Layout",
        icon: MapPin,
    },
    {
        id: 4,
        name: "Bengaluru FC",
        value: "Team",
        desc: "Doctor",
        icon: Activity,
    },
];

/**
 * Bold modern stats row — direction B.
 * Light surface that transitions from the dark hero. Tight bold numerals,
 * cyan accent on the "+" symbol, glass-style icon chips.
 */
export function StatsBold() {
    return (
        <section className="relative bg-white py-12 lg:py-16">
            {/* thin gradient line at the very top — bridges dark hero to light body */}
            <div
                aria-hidden
                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex items-start gap-4"
                        >
                            <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
                                <stat.icon className="h-5 w-5 text-blue-600" aria-hidden />
                            </div>
                            <div>
                                <div className="font-heading font-bold text-3xl lg:text-[2rem] tracking-[-0.03em] text-slate-900 leading-none">
                                    {stat.value}
                                    {stat.suffix && (
                                        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                            {stat.suffix}
                                        </span>
                                    )}
                                </div>
                                <div className="mt-2 text-[11px] uppercase tracking-[0.16em] font-semibold text-slate-500">
                                    {stat.name}
                                </div>
                                {stat.desc && (
                                    <div className="mt-0.5 text-xs text-slate-400">
                                        {stat.desc}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
