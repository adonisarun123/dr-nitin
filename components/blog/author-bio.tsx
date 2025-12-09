import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AuthorBio() {
    return (
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left mt-16">
            <div className="shrink-0 relative">
                <div className="w-24 h-24 rounded-full bg-blue-100 overflow-hidden border-4 border-white shadow-lg">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center text-blue-300 font-bold text-xs">Dr. Nitin</div>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">About the Author</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                    Dr. Nitin N Sunku is a leading Orthopedic Specialist and Team Doctor for Bengaluru FC. He is dedicated to helping patients recover from sports injuries and joint pain through evidence-based care.
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
