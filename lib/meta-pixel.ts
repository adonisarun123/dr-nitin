// Meta Pixel helper functions

export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

// Initialize Meta Pixel
export const initMetaPixel = () => {
    if (!META_PIXEL_ID) {
        console.warn('Meta Pixel ID not found');
        return;
    }

    // Script is loaded via next/script in layout
};

// Track page view
export const pageview = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'PageView');
    }
};

// Track standard events
export const trackStandardEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', eventName, params);
    }
};

// Track custom events
export const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('trackCustom', eventName, params);
    }
};

// Standard events
export const trackLead = (params?: Record<string, any>) => {
    trackStandardEvent('Lead', params);
};

export const trackContact = (params?: Record<string, any>) => {
    trackStandardEvent('Contact', params);
};

export const trackCompleteRegistration = (params?: Record<string, any>) => {
    trackStandardEvent('CompleteRegistration', params);
};
