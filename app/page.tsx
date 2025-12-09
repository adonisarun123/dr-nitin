import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutTeaser } from "@/components/sections/about-teaser";
import { Locations } from "@/components/sections/locations";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data";

export default function Home() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Nitin N Sunku",
    "description": siteConfig.description,
    "url": "https://drnitinsunkuortho.com/",
    "medicalSpecialty": [
      "Orthopedic",
      "SportsMedicine",
      "ArthroscopicSurgery",
      "JointReplacement"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry": "IN"
    },
    "telephone": siteConfig.phone,
    "image": "https://drnitinsunkuortho.com/doctor-placeholder.jpg",
    "priceRange": "$$",
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={physicianSchema} />
      <Hero />
      <Stats />
      <ServicesGrid />
      <Testimonials />
      <AboutTeaser />
      <Locations />
    </main>
  );
}
