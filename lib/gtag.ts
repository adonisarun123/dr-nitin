// Google Analytics / Tag Manager helper functions.
//
// The site supports either:
//   - A GA4 measurement ID (prefix `G-`) → loaded directly with gtag.js
//   - A Google Tag Manager container ID (prefix `GT-` or `GTM-`) → still loaded
//     via gtag.js so on-page conversion events fire, but the operator MUST
//     ensure a GA4 configuration tag exists inside the container, otherwise
//     GA4 reports will be empty.
//
// Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in your environment. The previously
// hard-coded `GT-K8MTGRQ9` value is kept as a fallback so existing deploys
// keep working until the env var is configured.

const FALLBACK_GA_ID = 'GT-K8MTGRQ9';

export const GA_MEASUREMENT_ID: string =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || FALLBACK_GA_ID;

/** True if the configured ID is a GTM container rather than a GA4 measurement. */
export const GA_IS_GTM: boolean =
    GA_MEASUREMENT_ID.startsWith('GT-') || GA_MEASUREMENT_ID.startsWith('GTM-');

/** True if the configured ID is a GA4 measurement ID. */
export const GA_IS_GA4: boolean = GA_MEASUREMENT_ID.startsWith('G-');

/** Google Ads conversion ID + label used on the /thank-you success page. */
export const GOOGLE_ADS_CONVERSION_ID: string | undefined =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID;

export const initGA = () => {
    if (!GA_MEASUREMENT_ID) {
        console.warn('GA Measurement ID not found');
        return;
    }
    if (GA_IS_GTM && process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
            `[gtag] NEXT_PUBLIC_GA_MEASUREMENT_ID is set to a GTM container (${GA_MEASUREMENT_ID}). ` +
            `Ensure a GA4 configuration tag is configured inside that container, or switch to a G-… measurement ID.`,
        );
    }
};

// Track page view
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Track events
export const event = (action: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, params);
    }
};
