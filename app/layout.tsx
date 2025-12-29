import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/data";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Nitin N Sunku | Orthopedic & Sports Medicine Specialist",
    template: "%s | Dr. Nitin N Sunku",
  },
  description: siteConfig.description,
  metadataBase: new URL("https://drnitinsunkuortho.com"),
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
    locale: "en_IE",
    url: "https://drnitinsunkuortho.com",
    siteName: siteConfig.name,
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: siteConfig.name,
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Dr Nitin Sunku Orthopaedics",
    "url": "https://drnitinsunkuortho.com/",
    "logo": "https://drnitinsunkuortho.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560102",
      "addressCountry ": "IN"
    },
    "telephone": siteConfig.phone,
    "priceRange": "$$",
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KD458LQT');
          `}
        </Script>
        {/* End Google Tag Manager */}
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
