import { PageHeader } from "@/components/ui/page-header";
import { testimonialsData } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Patient Stories"
                description="Hear from patients who have regained their mobility and active lifestyle with Dr. Nitin's care."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-5 w-5 ${i < t.rating ? "fill-current" : "text-gray-300"}`} />
                                ))}
                            </div>

                            <Quote className="h-8 w-8 text-primary/20 rotate-180 mb-4" />

                            <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                                "{t.quote}"
                            </blockquote>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                                <div>
                                    <div className="font-bold text-gray-900">{t.name}</div>
                                    <div className="text-xs text-primary font-medium">{t.condition}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
