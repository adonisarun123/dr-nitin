import Script from "next/script";
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/gtag";

/**
 * Layout for the Attibele ad landing page.
 *
 * - Mounts Meta Pixel (env: NEXT_PUBLIC_META_PIXEL_ID) so FB / Instagram ads
 *   can track PageView + Lead + Contact + custom events fired from the page.
 * - Mounts Google Ads gtag (env: NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID, e.g.
 *   "AW-123456789") so Google Ads conversion actions can fire via
 *   gtag('event', 'conversion', { send_to: 'AW-XXX/LABEL' }).
 *
 * GA4 / GTM is already loaded in app/layout.tsx — do NOT duplicate it here.
 * The floating WhatsApp button is also mounted in the root layout.
 */
export default function OrthopedicAttibeleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
    const adsId = GOOGLE_ADS_CONVERSION_ID;

    return (
        <>
            {/* Google Ads gtag (separate AW- container so Google Ads conversions
                can be configured independently of GA4). */}
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

            {/* Meta Pixel */}
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
                    {/* noscript fallback */}
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
