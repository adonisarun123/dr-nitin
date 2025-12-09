import { Star, Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Featured Testimonial */}
                    <div className="relative">
                        <Quote className="absolute -top-10 -left-6 h-24 w-24 text-blue-100 rotate-180" />
                        <blockquote className="relative z-10">
                            <p className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed">
                                &quot;Dr. Nitin was prompt, responsive and honest. He explained my ankle injury clearly and offered options instead of pushing unnecessary treatment.&quot;
                            </p>
                            <footer className="mt-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                                        JD
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">John Doe</div>
                                        <div className="text-sm text-gray-500">Ankle Sprain Patient</div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>

                    {/* Testimonial Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-indigo-50 p-6 rounded-2xl">
                            <div className="flex text-yellow-500 mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            </div>
                            <p className="text-gray-700 mb-4">"Honest advice & no unnecessary scans. Dr. Nitin is truly patient-centric."</p>
                            <div className="font-semibold text-gray-900">- Sarah K.</div>
                        </div>

                        <div className="bg-cyan-50 p-6 rounded-2xl">
                            <div className="flex text-yellow-500 mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            </div>
                            <p className="text-gray-700 mb-4">"Recovered fully after his prescribed physiotherapy. Highly recommended!"</p>
                            <div className="font-semibold text-gray-900">- Rajesh M.</div>
                        </div>

                        <div className="bg-pink-50 p-6 rounded-2xl">
                            <div className="flex text-yellow-500 mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                            </div>
                            <p className="text-gray-700 mb-4">"Very approachable and explains condition in detail. Best ortho in HSR."</p>
                            <div className="font-semibold text-gray-900">- Priya S.</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
