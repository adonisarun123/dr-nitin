import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthorBio() {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left mt-16">
            <div className="shrink-0 relative">
                <div className="relative w-24 h-24 rounded-full bg-blue-100 overflow-hidden border-4 border-white shadow-lg">
                    <Image
                        src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                        alt="Dr. Nitin N Sunku — Orthopedic & Sports Medicine Specialist, Bengaluru"
                        fill
                        sizes="96px"
                        className="object-cover"
                    />
                </div>
            </div>
            <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">About the Author</h3>
                <p className="text-sm font-semibold text-primary mb-1">Dr. Nitin N Sunku</p>
                <p className="text-xs text-gray-500 mb-3">
                    MBBS, MS (Orthopedics), Fellowship in Arthroscopy &amp; Sports Medicine
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Dr. Nitin N Sunku is a Consultant Orthopedic &amp; Sports Medicine Surgeon with over
                    10 years of focused practice in Bengaluru. He serves as the Team Doctor for
                    Bengaluru FC and consults at Raghava Multispeciality Hospital (Attibele) and
                    Health Nest Hospital (HSR Layout). His clinical interests include arthroscopy,
                    ligament &amp; meniscus care, regenerative orthopedic medicine, ultrasound-guided
                    injections, and joint replacement.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/about">View Full Profile</Link>
                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/contact">Book Consultation</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
