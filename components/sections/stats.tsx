import { Award, Users, MapPin, Activity } from "lucide-react";

const stats = [
    {
        id: 1,
        name: "Patients Consulted",
        value: "10K+",
        icon: Users,
    },
    {
        id: 2,
        name: "Years Experience",
        value: "7+",
        icon: Award,
    },
    {
        id: 3,
        name: "Practice Locations",
        value: "2+",
        desc: "Health Nest & Raghava",
        icon: MapPin,
    },
    {
        id: 4,
        name: "Bengaluru FC",
        value: "Team Doctor",
        icon: Activity,
    },
];

export function Stats() {
    return (
        <section className="py-10 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <stat.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm font-medium text-gray-500">{stat.name}</div>
                                {stat.desc && <div className="text-xs text-gray-400">{stat.desc}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
