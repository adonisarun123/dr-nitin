import { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Locations } from "@/components/sections/locations";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, practicePostalAddress } from "@/lib/data";
import { siteOrigin } from "@/lib/site-url";
import { FadeIn } from "@/components/animations/fade-in";

export const metadata: Metadata = {
  title: "Dr. Nitin N Sunku | Orthopedic & Sports Medicine Specialist",
  description: "Consult Dr Nitin N Sunku, trusted orthopedic & sports medicine surgeon for joint pain, fractures, ligament injuries and advanced orthopedic care.",
};

export default function Home() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Nitin N Sunku",
    "description": siteConfig.description,
    "url": `${siteOrigin}/`,
    "medicalSpecialty": [
      "Orthopedic",
      "SportsMedicine",
      "ArthroscopicSurgery",
      "JointReplacement"
    ],
    "address": practicePostalAddress,
    "telephone": siteConfig.phone,
    "image": `${siteOrigin}/doctor-placeholder.jpg`,
    "priceRange": "$$",
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={physicianSchema} />
      <Hero />
      <FadeIn delay={0.2}><Stats /></FadeIn>
      <ServicesGrid />
      <FadeIn delay={0.2}><Testimonials /></FadeIn>
      <FadeIn delay={0.2}><AboutTeaser /></FadeIn>
      <FadeIn delay={0.2}><Locations /></FadeIn>

      <section
        className="bg-slate-50 border-t border-slate-200 py-16 lg:py-20"
        aria-labelledby="home-practice-overview"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 id="home-practice-overview" className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-6">
            Evidence-based orthopaedic care for every stage of recovery
          </h2>
          <div className="space-y-4 text-gray-700 text-base lg:text-lg leading-relaxed">
            <p>
              Choosing an orthopaedic surgeon is about trust, clear communication, and a plan that fits your
              lifestyle. Dr. Nitin N. Sunku combines fellowship-level training in arthroscopy and sports
              medicine with a conservative-first mindset: surgery is recommended when the benefits clearly
              outweigh the risks, and non-operative care—including activity modification, targeted
              physiotherapy, injections where appropriate, and bracing—is explored whenever it can deliver a
              durable result.
            </p>
            <p>
              Whether you are dealing with a twisted knee on the football pitch, frozen shoulder stiffness at
              your desk, hip arthritis that disturbs sleep, or a fracture that needs urgent stabilisation, you
              receive the same structured approach: accurate history, focused examination, imaging only when
              it changes management, and a written plan you can follow. Same-day questions about postoperative
              recovery or return-to-work timelines are addressed during follow-up so you always know the next
              step.
            </p>
            <p>
              New patients are seen at Health Nest Hospital in HSR Layout and at Raghava Multispeciality
              Hospital near Attibele. Use the booking form on the contact page, call the numbers in the
              footer, or read the blog library first if you want plain-language background before your visit.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
