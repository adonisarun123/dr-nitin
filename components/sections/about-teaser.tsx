import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export function AboutTeaser() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        {/* Placeholder Image */}
                        <div className="aspect-[4/3] bg-gray-200 rounded-3xl w-full flex items-center justify-center text-gray-400 font-bold text-xl">
                            About Dr. Nitin Image
                        </div>
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Meet Dr. Nitin N Sunku</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Dr. Nitin is a fellowship-trained Orthopaedic Surgeon specializing in arthroscopy, sports medicine, and joint replacements. With experience at top institutes and as the Team Doctor for Bengaluru FC, he brings elite-level care to every patient.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "MBBS & MS Orthopaedics (Gold Medalist)",
                                "Fellowship in Arthroscopy & Sports Medicine",
                                "Team Doctor - Bengaluru Football Club",
                                "Visiting Consultant - Narayana Hrudayalaya & Manipal Hospital"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button asChild>
                            <Link href="/about">Read Full Profile</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
