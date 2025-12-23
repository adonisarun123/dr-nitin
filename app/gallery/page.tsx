import Image from "next/image";
import { PageHeader } from "@/components/ui/page-header";
import { FadeIn } from "@/components/animations/fade-in";

export default function GalleryPage() {
    const images = [
        {
            src: "/hsr-waiting-area.jpg",
            alt: "HSR Layout Clinic - Waiting Area",
            caption: "Spacious and comfortable waiting area at Health Nest Hospital, HSR Layout",
            location: "HSR Layout"
        },
        {
            src: "/hsr-reception.jpg",
            alt: "HSR Layout Clinic - Reception",
            caption: "Modern reception desk with welcoming ambiance",
            location: "HSR Layout"
        },
        {
            src: "/hsr-examination-room.jpg",
            alt: "HSR Layout Clinic - Examination Room",
            caption: "Well-equipped examination room with state-of-the-art facilities",
            location: "HSR Layout"
        },
        {
            src: "/hsr-consultation-room.jpg",
            alt: "HSR Layout Clinic - Consultation Room",
            caption: "Private consultation room for personalized patient care",
            location: "HSR Layout"
        },
        {
            src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/surgery-2.png",
            alt: "Surgical Procedure",
            caption: "Advanced arthroscopic surgery being performed with precision",
            location: "Surgery"
        },
        {
            src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/health-nest-hospital.png",
            alt: "Health Nest Hospital",
            caption: "Health Nest Hospital, HSR Layout - Our state-of-the-art facility",
            location: "HSR Layout"
        },
        {
            src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/surgery-1.png",
            alt: "Surgical Procedure",
            caption: "Minimally invasive arthroscopic procedure in progress",
            location: "Surgery"
        },
        {
            src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/surgery.png",
            alt: "Surgical Team",
            caption: "Expert surgical team performing orthopedic procedure",
            location: "Surgery"
        },
        {
            src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-sunil-chhetri.png",
            alt: "Dr. Nitin with Sunil Chhetri",
            caption: "Dr. Nitin with Indian football captain Sunil Chhetri - Team Doctor for Bengaluru FC",
            location: "Bengaluru FC"
        }
    ];

    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Gallery"
                description="A glimpse into our clinic, advanced facilities, and patient-centered care environment."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1} className="group">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-blue-50 rounded-full">
                                            {image.location}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">{image.caption}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </main>
    );
}
