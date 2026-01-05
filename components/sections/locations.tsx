import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
    {
        name: "Raghava Multispeciality Hospital",
        address: "39, Sarjapura - Attibele Rd, opposite syndicate bank, Anekal, Bengaluru, Karnataka 562107",
        phone: "+91-9980031006",
        mapLink: "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6?sa=X&ved=1t:2428&ictx=111",
    },
    {
        name: "Health Nest Hospital",
        address: "1162, 24th Main Rd Sector 2, HSR Layout, Bengaluru, Karnataka 560102",
        phone: "+91-9449031003",
        mapLink: "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68?sa=X&ved=1t:2428&ictx=111",
    }
];

export function Locations() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Visit Us</h2>
                    <p className="mt-4 text-gray-600">Consult Dr. Nitin at these convenient locations in HSR Layout.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {locations.map((loc) => (
                        <div key={loc.name} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-start hover:border-primary/50 transition-colors">
                            <div className="bg-blue-50 p-3 rounded-xl mb-6">
                                <MapPin className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{loc.name}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{loc.address}</p>

                            <div className="space-y-3 w-full">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                    <span className="font-medium">{loc.phone}</span>
                                </div>

                                <Button variant="outline" className="w-full mt-4" asChild>
                                    <a href={loc.mapLink} target="_blank" rel="noopener noreferrer">Get Directions</a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
