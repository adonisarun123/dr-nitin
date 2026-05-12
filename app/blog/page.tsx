import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { Button } from "@/components/ui/button";
import { BlogGrid } from "@/components/blog/blog-grid";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
    title: "Orthopedic & Sports Medicine Blog",
    description:
        "Read expert blogs by Dr. Nitin N Sunku on orthopedic care, sports injuries, knee pain, joint health and recovery tips for patients.",
};

export default function BlogPage() {
    const sortedPosts = [...blogPosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <main className="min-h-screen pb-20 bg-slate-50/40">
            <PageHeaderBold
                title="Ortho Blog"
                description="Expert insights, tips, and updates from Dr. Nitin N Sunku on orthopedic health and sports medicine."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-10 max-w-3xl">
                <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                    <p>
                        Articles are organised by topic — knee ligaments, meniscus,
                        shoulder pain, spine symptoms, running injuries, joint replacement,
                        and recovery after sports trauma. Skim the excerpts below to find a
                        guide that matches your question, then read the full post for
                        structured explanations you can discuss with Dr. Nitin N Sunku
                        during a consultation in HSR Layout or Attibele. New guides are
                        added when common themes emerge from clinic discussions.
                    </p>
                    <p>
                        Most long-form pieces are written for adults in Bengaluru who want
                        clearer language before they commit to time off work or sport for
                        treatment. You will see repeated themes: how imaging is used, when
                        keyhole surgery is discussed, what physiotherapy usually involves,
                        and how return-to-run or return-to-court timelines are staged. None
                        of this replaces your own examination.
                    </p>
                </div>
            </div>

            {/* Interactive grid (featured + filter + cards) */}
            <BlogGrid posts={sortedPosts} />

            {/* ───────── Closing CTA ───────── */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-10 lg:p-14">
                    <div
                        aria-hidden
                        className="absolute -top-32 -right-20 h-72 w-72 rounded-full bg-cyan-500/25 blur-[100px] pointer-events-none"
                    />
                    <div
                        aria-hidden
                        className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[100px] pointer-events-none"
                    />
                    <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold text-cyan-200 mb-5">
                                Have questions?
                            </div>
                            <h2 className="font-heading font-bold text-3xl lg:text-[2.5rem] tracking-[-0.025em] leading-[1.1] text-white">
                                Reading is helpful.{" "}
                                <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                    A consultation is better.
                                </span>
                            </h2>
                            <p className="mt-5 text-blue-100/80 text-base lg:text-lg leading-relaxed max-w-xl">
                                Bring your imaging, prior reports, and the questions you took
                                away from these articles. Dr. Nitin N Sunku will review them
                                and walk you through the right plan for your case.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex flex-wrap lg:flex-col gap-3 lg:items-stretch">
                            <Button
                                size="lg"
                                className="h-12 px-7 rounded-full bg-white text-slate-950 hover:bg-white/90 shadow-none hover:translate-y-0 font-semibold flex-1 lg:flex-none"
                                asChild
                            >
                                <Link href="/contact">
                                    Book a consultation
                                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 px-7 rounded-full border-white/25 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:text-white shadow-none hover:translate-y-0 flex-1 lg:flex-none"
                                asChild
                            >
                                <Link href="/treatments">Explore treatments</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
