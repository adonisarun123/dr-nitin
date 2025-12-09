import { PageHeader } from "@/components/ui/page-header";

export default function GalleryPage() {
    // Placeholder structure for gallery images
    const images = Array.from({ length: 6 }).map((_, i) => i);

    return (
        <main className="min-h-screen pb-20">
            <PageHeader
                title="Gallery"
                description="A glimpse into our clinic, advanced facilities, and happy moments."
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {images.map((img) => (
                        <div key={img} className="break-inside-avoid bg-gray-100 rounded-2xl overflow-hidden shadow-md">
                            <div className={`w-full ${img % 2 === 0 ? 'aspect-video' : 'aspect-square'} bg-gray-200 flex items-center justify-center text-gray-400 font-medium`}>
                                Gallery Image {img + 1}
                            </div>
                            <div className="p-4 bg-white">
                                <p className="text-sm font-medium text-gray-900">Clinic / Surgery / Event Description</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
