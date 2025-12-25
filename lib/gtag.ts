// Google Analytics 4 helper functions

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Initialize GA4
export const initGA = () => {
    if (!GA_MEASUREMENT_ID) {
        console.warn('GA Measurement ID not found');
        return;
    }

    // Script is loaded via next/script in layout
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
