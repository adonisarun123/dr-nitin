import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig, practicePostalAddress } from "@/lib/data";
import { siteOrigin } from "@/lib/site-url";
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
    locale: "en_IE",
    url: siteOrigin,
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
    "@id": `${siteOrigin}/#clinic`,
    "name": "Dr Nitin Sunku Orthopaedics",
    "url": `${siteOrigin}/`,
    "logo": `${siteOrigin}/logo.png`,
    "address": practicePostalAddress,
    "telephone": siteConfig.phone,
    "priceRange": "$$",
  };

  return (
    <html lang="en">
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
