import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const credentials: { label: string; value: string }[] = [
    { label: "Education", value: "MBBS · MS Orthopedics (Gold Medalist)" },
    { label: "Fellowship", value: "Arthroscopy & Sports Medicine" },
    { label: "Sport", value: "Team Doctor — Bengaluru Football Club" },
    {
        label: "Affiliations",
        value: "Visiting Consultant — Narayana Hrudayalaya, Manipal Hospital",
    },
];

/**
 * Editorial-clinical "Meet the doctor" section — direction A.
 * Image left (4:5 portrait, thin blue ring), serif H2 right, definition-list
 * for credentials. No green tick icons — typographic dividers only.
 */
export function AboutTeaserEditorial() {
    return (
        <section className="py-20 lg:py-28 bg-gray-50/60 border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Photo */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <figure className="relative">
                            <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:max-w-none rounded-sm overflow-hidden bg-blue-50 ring-1 ring-blue-100">
                                <Image
                                    src="https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png"
                                    alt="Dr. Nitin N Sunku"
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 440px, 38vw"
                                />
                            </div>
                            <div
                                aria-hidden
                                className="hidden lg:block absolute -bottom-3 -left-3 h-12 w-12 border-l-2 border-b-2 border-blue-900"
                            />
                        </figure>
                    </div>

                    {/* Copy */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800">
                            <span aria-hidden className="h-px w-8 bg-blue-800/60" />
                            About the doctor
                        </div>

                        <h2 className="font-editorial text-3xl lg:text-[2.5rem] leading-[1.15] tracking-[-0.015em] text-gray-900 mt-4 mb-5">
                            Meet Dr. Nitin N Sunku.
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-3">
                            Dr. Nitin N Sunku is a fellowship-trained orthopedic surgeon
                            with a focus on arthroscopy, sports medicine, and modern
                            non-surgical care. His practice runs on a simple rule:
                            recommend surgery when it&apos;s clearly the right answer —
                            and find a better way when it isn&apos;t.
                        </p>

                        <blockquote className="font-editorial italic text-xl text-blue-900 border-l-2 border-blue-900 pl-5 my-7 leading-relaxed">
                            &ldquo;Listen carefully, examine properly, image only when it
                            changes the plan, and explain everything in language a patient
                            can act on.&rdquo;
                        </blockquote>

                        <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-5 mb-8 max-w-2xl">
                            {credentials.map((c) => (
                                <div
                                    key={c.label}
                                    className="border-t border-gray-200 pt-3"
                                >
                                    <dt className="text-[11px] uppercase tracking-[0.18em] font-semibold text-blue-800">
                                        {c.label}
                                    </dt>
                                    <dd className="font-editorial text-base lg:text-lg text-gray-900 mt-1 leading-snug">
                                        {c.value}
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        <Button
                            className="h-11 px-6 rounded-md bg-blue-900 hover:bg-blue-800 text-white shadow-none hover:translate-y-0"
                            asChild
                        >
                            <Link href="/about">
                                Read full profile
                                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
