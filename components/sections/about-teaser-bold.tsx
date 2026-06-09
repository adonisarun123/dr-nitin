import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials = [
    "MBBS & MS Orthopedics (Gold Medalist)",
    "Fellowship in Arthroscopy & Sports Medicine",
    "Team Doctor - Bengaluru Football Club",
    "Visiting Consultant - Narayana Hrudayalaya & Manipal Hospital",
];

/**
 * Bold modern "Meet the doctor" — direction B.
 * Original copy preserved; visual language only.
 */
export function AboutTeaserBold() {
    return (
        <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative w-full max-w-[440px] mx-auto lg:max-w-none">
                            <div
                                aria-hidden
                                className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-br from-cyan-300/30 via-blue-400/20 to-transparent blur-2xl"
                            />
                            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden bg-slate-100 ring-1 ring-blue-100">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                    alt="Dr. Nitin N Sunku"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 440px, 38vw"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <h2 className="font-heading font-bold text-4xl lg:text-[3rem] tracking-[-0.03em] text-slate-950 leading-[1.05] mb-6">
                            Meet{" "}
                            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                Dr. Nitin N Sunku
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Dr. Nitin is a fellowship-trained Orthopedic Surgeon
                            specializing in arthroscopy, sports medicine, and joint
                            replacements. With experience at top institutes and as the
                            Team Doctor for Bengaluru FC, he brings elite-level care to
                            every patient.
                        </p>

                        <ul className="space-y-3 mb-9">
                            {credentials.map((c) => (
                                <li
                                    key={c}
                                    className="flex items-start gap-3 text-slate-700"
                                >
                                    <span className="shrink-0 mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                                        <Check className="h-3 w-3 stroke-[3]" aria-hidden />
                                    </span>
                                    <span className="leading-relaxed">{c}</span>
                                </li>
                            ))}
                        </ul>

                        <Button
                            size="lg"
                            className="h-12 px-7 rounded-full bg-slate-950 hover:bg-slate-800 text-white shadow-none hover:translate-y-0 font-semibold"
                            asChild
                        >
                            <Link href="/about">
                                Read Full Profile
                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
