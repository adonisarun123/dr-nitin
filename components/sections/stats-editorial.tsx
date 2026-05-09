import { Award, Users, MapPin, Activity } from "lucide-react";

const stats = [
    { id: 1, name: "Patients Consulted", value: "10K+", icon: Users },
    { id: 2, name: "Years Experience", value: "10+", icon: Award },
    {
        id: 3,
        name: "Practice Locations",
        value: "Two",
        desc: "Attibele · HSR Layout",
        icon: MapPin,
    },
    {
        id: 4,
        name: "Bengaluru FC",
        value: "Team Doctor",
        icon: Activity,
    },
];

/**
 * Editorial-clinical stats row — direction A.
 * Serif numbers, uppercase labels, thin dividers. No pill shapes, no shadows.
 */
export function StatsEditorial() {
    return (
        <section className="py-12 lg:py-16 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
                    {stats.map((stat) => (
                        <div
                            key={stat.id}
                            className="px-2 lg:px-8 py-4 lg:py-2 text-center lg:text-left first:lg:pl-0 last:lg:pr-0"
                        >
                            <div className="flex items-center gap-2 justify-center lg:justify-start text-blue-800 mb-2">
                                <stat.icon className="h-4 w-4" aria-hidden />
                                <span className="text-[11px] uppercase tracking-[0.18em] font-semibold">
                                    {stat.name}
                                </span>
                            </div>
                            <div className="font-editorial text-3xl lg:text-4xl text-gray-900 leading-tight">
                                {stat.value}
                            </div>
                            {stat.desc && (
                                <div className="mt-1 text-xs text-gray-500 italic font-editorial">
                                    {stat.desc}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
