import { Metadata } from "next";
import { PageHeaderBold } from "@/components/ui/page-header-bold";
import { PageInternalLinks } from "@/components/ui/page-internal-links";
import { GalleryClient, type GalleryImage } from "@/components/gallery/gallery-client";
import { siteOrigin } from "@/lib/site-url";

export const metadata: Metadata = {
    title: {
        absolute: "Clinic & Treatment Gallery | Dr. Nitin N Sunku Ortho",
    },
    description:
        "Explore clinic, treatment and patient care gallery of Dr. Nitin N Sunku, experienced orthopedic & sports medicine specialist in Attibele.",
    alternates: { canonical: `${siteOrigin}/gallery` },
};

/** Preferred order for the category filter tabs. */
const CATEGORY_ORDER = [
    "Surgery & Procedures",
    "Clinic & Facilities",
    "Team & Community",
];

/**
 * Arthroscopic knee surgery shoot (30 Jul), hosted on ImageKit as a contiguous
 * DSC image sequence. Rather than hard-coding ~150 objects, we generate them
 * from the numeric range and subtract the file numbers that don't exist in the
 * folder (verified 404s). Keep the missing set in sync if the shoot is
 * re-exported.
 */
const ARTHO_BASE =
    "https://ik.imagekit.io/M0nger/Dr-nitin/Artho_Knee_30%20Jul_web";
const ARTHO_RANGE = { start: 5658, end: 5836 };
const ARTHO_MISSING = new Set<number>([
    5666, 5671, 5703, 5804, 5811, 5813,
    // 5734–5759 were not exported in this batch
    ...Array.from({ length: 5759 - 5734 + 1 }, (_, i) => 5734 + i),
]);

const arthroImages: GalleryImage[] = [];
for (let n = ARTHO_RANGE.start, i = 0; n <= ARTHO_RANGE.end; n++) {
    if (ARTHO_MISSING.has(n)) continue;
    i += 1;
    const id = String(n).padStart(5, "0");
    arthroImages.push({
        src: `${ARTHO_BASE}/DSC${id}.webp`,
        alt: `Knee arthroscopy surgery by Dr. Nitin N Sunku — procedure photo ${i}`,
        caption:
            "Arthroscopic knee surgery — minimally invasive procedure performed by Dr. Nitin N Sunku and the surgical team.",
        category: "Surgery & Procedures",
    });
}

/** Clinic facilities & community photos (locally hosted + ImageKit). */
const practiceImages: GalleryImage[] = [
    {
        src: "/hsr-waiting-area.jpg",
        alt: "HSR Layout Clinic - Waiting Area",
        caption:
            "Spacious and comfortable waiting area at Health Nest Hospital, HSR Layout.",
        category: "Clinic & Facilities",
    },
    {
        src: "/hsr-reception.jpg",
        alt: "HSR Layout Clinic - Reception",
        caption: "Modern reception desk with a welcoming ambiance.",
        category: "Clinic & Facilities",
    },
    {
        src: "/hsr-examination-room.jpg",
        alt: "HSR Layout Clinic - Examination Room",
        caption:
            "Well-equipped examination room with state-of-the-art facilities.",
        category: "Clinic & Facilities",
    },
    {
        src: "/hsr-consultation-room.jpg",
        alt: "HSR Layout Clinic - Consultation Room",
        caption: "Private consultation room for personalized patient care.",
        category: "Clinic & Facilities",
    },
    {
        src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/health-nest-hospital.png",
        alt: "Health Nest Hospital",
        caption:
            "Health Nest Hospital, HSR Layout — our state-of-the-art facility.",
        category: "Clinic & Facilities",
    },
    {
        src: "https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin-sunil-chhetri.png",
        alt: "Dr. Nitin with Sunil Chhetri",
        caption:
            "Dr. Nitin with Indian football legend Sunil Chhetri during his role as Team Doctor for Bengaluru FC.",
        category: "Team & Community",
    },
];

// Surgery photos lead (matching the shoot the page was built around), followed
// by the clinic & community context images.
const images: GalleryImage[] = [...arthroImages, ...practiceImages];

export default function GalleryPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageHeaderBold
                eyebrow="Photo Gallery"
                title="Inside Our"
                titleAccent="Practice"
                description="A glimpse into our surgical care, clinic facilities, and the patient-centered environment behind every treatment."
                trail={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 max-w-4xl">
                <div className="text-gray-700 leading-relaxed space-y-4 text-base">
                    <p>
                        This gallery documents real orthopedic and sports medicine care — from arthroscopic
                        knee surgery in the operating theatre to the consulting and waiting spaces where
                        recovery begins. You will see the surgical precision applied during minimally invasive
                        procedures, alongside private examination and consultation rooms designed for comfort
                        and clear, unhurried discussion before any treatment.
                    </p>
                    <p>
                        Facilities are located at Health Nest Hospital in HSR Layout, Bengaluru, with
                        additional sessions at Raghava Multispeciality Hospital on Sarjapura–Attibele Road.
                        Images may include surgical procedures, team, and community events where Dr. Sunku
                        provides medical coverage; these reflect the same attention to detail applied to
                        every patient recovering from injury or arthritis.
                    </p>
                </div>
            </div>

            <GalleryClient images={images} categoryOrder={CATEGORY_ORDER} />

            <PageInternalLinks
                heading="Explore the practice"
                links={[
                    { label: "Meet Dr. Nitin N Sunku & the team", href: "/team" },
                    { label: "Our clinics & locations", href: "/practice" },
                    { label: "Treatments we offer", href: "/treatments" },
                    { label: "Patient testimonials", href: "/testimonials" },
                    { label: "Book an appointment", href: "/contact" },
                ]}
            />
        </main>
    );
}
