import { PageHeader } from "@/components/ui/page-header";
import { teamData } from "@/lib/data";

export default function TeamPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Meet Our Team"
                description="Dedicated professionals committed to getting you back to your best."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {teamData.map((member) => (
                        <div key={member.name} className="flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100 items-start">
                            {/* Placeholder for image */}
                            <div className="w-full lg:w-48 aspect-square rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 font-bold shrink-0">
                                {member.name.split(" ").map(n => n[0]).join("")}
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h2>
                                <div className="text-primary font-medium mb-4">{member.role}</div>
                                <div className="text-sm text-gray-500 mb-4 font-medium">{member.qualifications}</div>
                                <p className="text-gray-600 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
