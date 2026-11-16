import { GA_MEASUREMENT_ID } from './gtag';

// Analytics event types
export type AnalyticsEvent = {
    action: string;
    category: string;
    label?: string;
    value?: number;
    metadata?: Record<string, any>;
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
    const { action, category, label, value, metadata } = event;

    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
            ...metadata,
        });
    }

    // Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('trackCustom', action, {
            category,
            label,
            value,
            ...metadata,
        });
    }

    // Console log in development
    if (process.env.NODE_ENV === 'development') {
        console.log('📊 Analytics Event:', { action, category, label, value, metadata });
    }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
    // Google Analytics 4 (id is configurable via NEXT_PUBLIC_GA_MEASUREMENT_ID)
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
            page_title: title,
        });
    }

    // Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
    }

    if (process.env.NODE_ENV === 'development') {
        console.log('📄 Page View:', { url, title });
    }
};

// Track conversions
export const trackConversion = (conversionType: 'lead' | 'contact' | 'phone_click', metadata?: Record<string, any>) => {
    // Google Analytics 4 / Google Tag Manager (id is configurable)
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            send_to: GA_MEASUREMENT_ID,
            conversion_type: conversionType,
            ...metadata,
        });
    }

    // Meta Pixel - Standard Events
    if (typeof window !== 'undefined' && (window as any).fbq) {
        if (conversionType === 'lead') {
            (window as any).fbq('track', 'Lead', metadata);
        } else if (conversionType === 'contact') {
            (window as any).fbq('track', 'Contact', metadata);
        } else if (conversionType === 'phone_click') {
            (window as any).fbq('trackCustom', 'PhoneClick', metadata);
        }
    }

    if (process.env.NODE_ENV === 'development') {
        console.log('🎯 Conversion:', { conversionType, metadata });
    }
};

// Track form interactions
export const trackFormEvent = (
    formName: string,
    eventType: 'start' | 'field_interaction' | 'submit' | 'success' | 'error' | 'abandon',
    metadata?: Record<string, any>
) => {
    trackEvent({
        action: `form_${eventType}`,
        category: 'Form',
        label: formName,
        metadata: {
            form_name: formName,
            ...metadata,
        },
    });

    // Track lead conversion ONLY on `success` (server confirmed the lead).
    // Firing on both `submit` and `success` previously caused duplicate Lead
    // events on every form, which inflated Meta / Google Ads optimisation
    // signals and distorted conversion-rate reporting.
    if (eventType === 'success') {
        trackConversion('lead', {
            form_name: formName,
            ...metadata,
        });
    }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, buttonLocation: string, metadata?: Record<string, any>) => {
    trackEvent({
        action: 'button_click',
        category: 'Engagement',
        label: buttonName,
        metadata: {
            button_name: buttonName,
            button_location: buttonLocation,
            ...metadata,
        },
    });
};

// Track phone number clicks
export const trackPhoneClick = (phoneNumber: string, location: string) => {
    trackButtonClick('Call Now', location, { phone_number: phoneNumber });
    trackConversion('phone_click', {
        phone_number: phoneNumber,
        location,
    });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
    trackEvent({
        action: 'scroll_depth',
        category: 'Engagement',
        label: `${percentage}%`,
        value: percentage,
    });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
    trackEvent({
        action: 'time_on_page',
        category: 'Engagement',
        value: seconds,
        metadata: {
            duration_seconds: seconds,
        },
    });
};

/**
 * The two-bucket label: did this visit cost money, or not?
 *
 * `channel` (below) keeps the detail — paid-google vs paid-meta tells you WHICH
 * platform to cut budget from. `lead_type` is the flat answer for reporting:
 * anything carrying a paid click ID or a paid utm_medium is 'paid'; everything
 * else — organic search, direct, referrals from Practo/JustDial, social — is
 * 'organic'. Both are stored, so a rollup never has to parse the channel string.
 */
export const deriveLeadType = (channel: string): 'paid' | 'organic' =>
    channel.startsWith('paid-') ? 'paid' : 'organic';

/**
 * Derive the acquisition channel from the click IDs / UTM tags on the landing URL.
 *
 * Why this exists: Google Ads auto-tagging appends `gclid` and frequently does NOT
 * append any `utm_*` parameters, and Meta appends `fbclid`. Before Aug 2026 we only
 * read `utm_*`, so a large share of genuine ad clicks arrived with NO stored
 * attribution at all — which is why every landing page hard-coded an `ads-` prefix
 * into its form `source` to fake the channel. Reading the click IDs makes the
 * channel a real, measured value instead of an assumption baked into the page.
 */
const SEARCH_ENGINE_LABELS = new Set([
    'google', 'bing', 'duckduckgo', 'yahoo', 'ecosia', 'brave', 'baidu', 'yandex',
]);
const SOCIAL_LABELS = new Set([
    'facebook', 'instagram', 'linkedin', 'twitter', 'youtube', 'whatsapp', 'reddit', 'quora', 'pinterest',
]);

const deriveChannel = (
    params: URLSearchParams,
    referrer: string,
): string => {
    if (params.get('gclid') || params.get('gbraid') || params.get('wbraid')) return 'paid-google';
    if (params.get('fbclid')) return 'paid-meta';
    if (params.get('msclkid')) return 'paid-bing';

    // `campaignid` only arrives via the Google Ads Final URL suffix, so it is a
    // Google Ads click even if auto-tagging (gclid) is ever switched off.
    if (params.get('campaignid')) return 'paid-google';

    const medium = (params.get('utm_medium') || '').toLowerCase();
    const source = (params.get('utm_source') || '').toLowerCase();
    // Map a paid utm_source to its platform so manually tagged ads are not lumped
    // into 'paid-other' (previously utm_source=google&utm_medium=cpc did that).
    const paidPlatform = (): string => {
        if (['google', 'adwords', 'googleads', 'google_ads'].includes(source)) return 'paid-google';
        if (['facebook', 'fb', 'instagram', 'ig', 'meta'].includes(source)) return 'paid-meta';
        if (['bing', 'microsoft', 'msads'].includes(source)) return 'paid-bing';
        return 'paid-other';
    };
    if (medium) {
        if (['cpc', 'ppc', 'paid', 'paidsearch', 'paid_search', 'display'].includes(medium)) return paidPlatform();
        // Paid social is PAID — it used to fall into 'social', which counted as organic.
        if (['paid_social', 'paid-social', 'paidsocial'].includes(medium)) {
            const p = paidPlatform();
            return p === 'paid-other' ? 'paid-social' : p;
        }
        if (['organic'].includes(medium)) return 'organic';
        if (['email'].includes(medium)) return 'email';
        if (['social'].includes(medium)) return 'social';
        return 'utm-' + medium;
    }
    if (params.get('utm_source')) return 'utm-' + params.get('utm_source');

    if (!referrer) return 'direct';
    try {
        const host = new URL(referrer).hostname.replace(/^www\./, '');
        if (host === window.location.hostname.replace(/^www\./, '')) return 'internal';
        const labels = host.split('.');
        // Label-based match rather than a substring regex: 'mygoogle.com' and
        // 'a.x.example.com' must NOT be classified as search or social.
        if (labels.some(l => SEARCH_ENGINE_LABELS.has(l))) return 'organic-search';
        if (host === 'x.com' || host === 't.co' || labels.some(l => SOCIAL_LABELS.has(l))) return 'social-referral';
        return 'referral:' + host;
    } catch {
        return 'referral';
    }
};

/**
 * Capture acquisition context on the FIRST page of the session and keep it.
 *
 * First touch wins: once a value is stored we never overwrite it, so a visitor who
 * lands on an ad, browses three pages and then converts still reports the ad — not
 * the last internal page they happened to be on.
 */
export const captureUTMParameters = () => {
    if (typeof window === 'undefined') return null;

    // First touch wins — do not clobber the landing context on later page views.
    const existing = sessionStorage.getItem('utm_params');
    if (existing) {
        try {
            return JSON.parse(existing);
        } catch {
            // Corrupted value — fall through and re-capture.
        }
    }

    const params = new URLSearchParams(window.location.search);
    const referrer = typeof document !== 'undefined' ? document.referrer : '';
    const channel = deriveChannel(params, referrer);

    const utmParams = {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content'),
        // Google Ads ValueTrack fields, passed via the campaign-level Final URL
        // suffix (campaignid={campaignid}&adgroupid={adgroupid}&matchtype=...).
        // They answer "which ad group / match type / device produced this lead"
        // without having to join against the Ads account by gclid.
        campaignid: params.get('campaignid'),
        adgroupid: params.get('adgroupid'),
        matchtype: params.get('matchtype'),
        device: params.get('device'),
        network: params.get('network'),
        // Click IDs — the only signal present on most real ad clicks.
        gclid: params.get('gclid'),
        gbraid: params.get('gbraid'),
        wbraid: params.get('wbraid'),
        fbclid: params.get('fbclid'),
        msclkid: params.get('msclkid'),
        // Two-bucket label for reporting: 'paid' or 'organic'.
        lead_type: deriveLeadType(channel),
        // Full detail, e.g. paid-google / organic-search / referral:practo.com.
        channel,
        // Landing context, so a lead can be traced to the page that earned it.
        landing_path: window.location.pathname,
        referrer: referrer || null,
    };

    // Always store now (previously we only stored when a utm_* was present, which
    // meant organic and direct visits carried no attribution whatsoever).
    sessionStorage.setItem('utm_params', JSON.stringify(utmParams));

    return utmParams;
};

// Get stored UTM parameters
export const getUTMParameters = () => {
    if (typeof window === 'undefined') return null;

    const stored = sessionStorage.getItem('utm_params');
    if (!stored) return null;
    try {
        return JSON.parse(stored);
    } catch {
        // Corrupted/edited sessionStorage value — fail soft rather than throw.
        return null;
    }
};
