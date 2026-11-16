import Script from "next/script";
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/gtag";

/**
 * Layout for the "Orthopedic Doctor Near Me" ad landing page.
 *
 * - Mounts Google Ads gtag (env: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID).
 * - Mounts Meta Pixel (env: NEXT_PUBLIC_META_PIXEL_ID).
 *
 * GA4 / GTM and the floating WhatsApp button are already loaded in
 * app/layout.tsx — do NOT duplicate them here.
 */
export default function OrthopedicDoctorNearMeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const adsId = GOOGLE_ADS_CONVERSION_ID;

    return (
        <>
            {adsId && (
                <>
                    <Script
                        id="google-ads-gtag-src"
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
                    />
                    <Script id="google-ads-gtag" strategy="afterInteractive">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${adsId}');
                        `}
                    </Script>
                </>
            )}

            {META_PIXEL_ID && (
                <>
                    <Script id="meta-pixel" strategy="afterInteractive">
                        {`
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '${META_PIXEL_ID}');
                            fbq('track', 'PageView');
                        `}
                    </Script>
                    <noscript>
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            )}

            {children}
        </>
    );
}
