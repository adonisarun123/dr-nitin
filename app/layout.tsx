import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data";
import {
    ATTIBELE_CLINIC,
    HSR_CLINIC,
    clinicOpeningHoursSpec,
    clinicPostalAddress,
} from "@/lib/practice";
import { siteOrigin } from "@/lib/site-url";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";
import { GA_MEASUREMENT_ID } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});
// (Lora editorial serif was previously loaded for design-direction-A samples,
// which are no longer shipped. Re-add here if the editorial direction is ever
// revived.)

export const metadata: Metadata = {
  title: {
    default: "Dr. Nitin N Sunku | Orthopedic & Sports Medicine Specialist",
    template: "%s | Dr. Nitin N Sunku",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteOrigin),
  verification: {
    google: "sjlvelpdhlvU4nWP7nRTltuK_TelCCIddJlm67csZSM",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteOrigin,
    siteName: siteConfig.name,
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Nitin N Sunku | Orthopedic & Sports Medicine Specialist",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Root-level JSON-LD: a @graph with the practice's Physician + two MedicalClinic locations.
  // The Physician is the primary entity; both clinics are linked via `affiliation`.
  // (`worksFor` is a Person-only property and is invalid on Physician, which is a
  // MedicalBusiness subtype — `affiliation` is the correct MedicalOrganization link.)
  // Clinic data is driven from lib/practice.ts so addresses, hours, phones, and areaServed
  // can never drift between schema and on-page content.
  const clinicNodes = [ATTIBELE_CLINIC, HSR_CLINIC].map((c) => ({
    "@type": "MedicalClinic",
    "@id": `${siteOrigin}/#clinic-${c.id}`,
    "name": `Dr. Nitin N Sunku Orthopedics — ${c.name} (${c.shortLocality})`,
    "url": `${siteOrigin}/practice`,
    "logo": `${siteOrigin}/logo.png`,
    "image": `${siteOrigin}/og-image.jpg`,
    "address": clinicPostalAddress(c),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": c.geo.latitude,
      "longitude": c.geo.longitude,
    },
    "hasMap": c.mapLink,
    "telephone": c.phone,
    "priceRange": "₹₹",
    "medicalSpecialty": "https://schema.org/Orthopedic",
    "areaServed": c.areaServed,
    "openingHoursSpecification": clinicOpeningHoursSpec(c),
    "sameAs": c.sameAs,
  }));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${siteOrigin}/#physician`,
        "name": "Dr. Nitin N Sunku",
        "url": `${siteOrigin}/about`,
        "image": "https://ik.imagekit.io/surwahi/Arun/dr-nitin/dr-nitin.png",
        "medicalSpecialty": "https://schema.org/Orthopedic",
        "knowsAbout": [
          "Sports Medicine",
          "Knee Arthroscopy",
          "Joint Replacement",
          "Arthroscopic Surgery",
          "Trauma Care",
        ],
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "address": clinicPostalAddress(ATTIBELE_CLINIC),
        "knowsLanguage": ["en", "kn", "hi"],
        "affiliation": clinicNodes.map((c) => ({ "@id": c["@id"] })),
        "sameAs": [ATTIBELE_CLINIC.sameAs, HSR_CLINIC.sameAs],
      },
      ...clinicNodes,
    ],
  };

  return (
    <html lang="en-IN">
      <head>
        {/*
          Google tag (gtag.js).
          ID is read from NEXT_PUBLIC_GA_MEASUREMENT_ID at build time
          (lib/gtag.ts). If the ID starts with `GT-`/`GTM-` it's a Google
          Tag Manager container — ensure a GA4 configuration tag is
          configured inside it, or switch to a GA4 `G-…` measurement ID.
        */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className={cn(inter.variable, poppins.variable, "font-sans bg-background text-text-primary")}>
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
