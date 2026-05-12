import type { Metadata } from "next";
import { Inter, Poppins, Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, practicePostalAddress, practicePostalAddressSecondary } from "@/lib/data";
import { siteOrigin } from "@/lib/site-url";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});
// Editorial serif used by the new "editorial clinical" hero (direction A).
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

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
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
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
  // The Physician is the primary entity; both clinics are linked via `worksFor` / `affiliation`.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${siteOrigin}/#physician`,
        "name": "Dr. Nitin N Sunku",
        "url": `${siteOrigin}/about`,
        "image": `${siteOrigin}/logo.png`,
        "medicalSpecialty": ["Orthopedic", "SportsMedicine"],
        "telephone": siteConfig.phone,
        "email": siteConfig.email,
        "knowsLanguage": ["en", "kn", "hi"],
        "worksFor": [
          { "@id": `${siteOrigin}/#clinic-attibele` },
          { "@id": `${siteOrigin}/#clinic-hsr` }
        ],
        "sameAs": [
          "https://www.google.com/maps/place/Raghava+Multispeciality+Hospital/data=!4m2!3m1!1s0x0:0xaeb4c2023a37fea6",
          "https://www.google.com/maps/place/Health+Nest+Hospital/data=!4m2!3m1!1s0x0:0x13399aca4c9e0a68"
        ]
      },
      {
        "@type": "MedicalClinic",
        "@id": `${siteOrigin}/#clinic-attibele`,
        "name": "Dr. Nitin N Sunku Orthopedics — Raghava Multispeciality Hospital (Attibele)",
        "url": `${siteOrigin}/practice`,
        "logo": `${siteOrigin}/logo.png`,
        "image": `${siteOrigin}/og-image.jpg`,
        "address": practicePostalAddress,
        "telephone": siteConfig.phone,
        "medicalSpecialty": ["Orthopedic", "SportsMedicine"],
        "areaServed": [
          "Attibele",
          "Anekal",
          "Bommasandra",
          "Chandapura",
          "Hosur Road",
          "Electronic City"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "18:00"
          }
        ]
      },
      {
        "@type": "MedicalClinic",
        "@id": `${siteOrigin}/#clinic-hsr`,
        "name": "Dr. Nitin N Sunku Orthopedics — Health Nest Hospital (HSR Layout)",
        "url": `${siteOrigin}/practice`,
        "logo": `${siteOrigin}/logo.png`,
        "image": `${siteOrigin}/og-image.jpg`,
        "address": practicePostalAddressSecondary,
        "telephone": siteConfig.phoneSecondary,
        "medicalSpecialty": ["Orthopedic", "SportsMedicine"],
        "areaServed": [
          "HSR Layout",
          "Koramangala",
          "BTM Layout",
          "Bellandur",
          "Sarjapur Road"
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en-IN">
      <head>
        {/* Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GT-K8MTGRQ9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GT-K8MTGRQ9');
          `}
        </Script>
      </head>
      <body className={cn(inter.variable, poppins.variable, lora.variable, "font-sans bg-background text-text-primary")}>
        <JsonLd data={organizationSchema} />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
