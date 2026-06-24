import Script from 'next/script';

export default function KneePainBangaloreLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Note: Google Analytics (NEXT_PUBLIC_GA_MEASUREMENT_ID) and WhatsAppFloat
    // are already mounted in the root layout (app/layout.tsx). Avoid
    // duplicating them here to prevent double page_views and a stacked
    // floating button.
    const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    return (
        <>
            {/* Meta Pixel */}
            {META_PIXEL_ID && (
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
            )}

            {children}
        </>
    );
}
