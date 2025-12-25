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
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
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
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
            send_to: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
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

    // Track lead conversion on form submission
    if (eventType === 'submit' || eventType === 'success') {
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

// Capture UTM parameters
export const captureUTMParameters = () => {
    if (typeof window === 'undefined') return null;

    const params = new URLSearchParams(window.location.search);
    const utmParams = {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content'),
    };

    // Store in sessionStorage for later use
    if (Object.values(utmParams).some(v => v !== null)) {
        sessionStorage.setItem('utm_params', JSON.stringify(utmParams));
    }

    return utmParams;
};

// Get stored UTM parameters
export const getUTMParameters = () => {
    if (typeof window === 'undefined') return null;

    const stored = sessionStorage.getItem('utm_params');
    return stored ? JSON.parse(stored) : null;
};
