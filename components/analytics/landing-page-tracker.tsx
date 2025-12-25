"use client";

import { useEffect, useRef } from 'react';
import { trackPageView, trackScrollDepth, trackTimeOnPage, captureUTMParameters } from '@/lib/analytics';

export function LandingPageTracker() {
    const scrollDepthTracked = useRef<Set<number>>(new Set());
    const timeTracked = useRef<Set<number>>(new Set());
    const startTime = useRef<number>(Date.now());

    useEffect(() => {
        // Capture UTM parameters on mount
        const utmParams = captureUTMParameters();

        // Track initial page view
        trackPageView(window.location.pathname + window.location.search, document.title);

        // Track scroll depth
        const handleScroll = () => {
            const scrollPercentage = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );

            // Track at 25%, 50%, 75%, 100%
            [25, 50, 75, 100].forEach(milestone => {
                if (scrollPercentage >= milestone && !scrollDepthTracked.current.has(milestone)) {
                    scrollDepthTracked.current.add(milestone);
                    trackScrollDepth(milestone);
                }
            });
        };

        // Track time on page
        const timeInterval = setInterval(() => {
            const secondsOnPage = Math.floor((Date.now() - startTime.current) / 1000);

            // Track at 10s, 30s, 60s, 120s
            [10, 30, 60, 120].forEach(milestone => {
                if (secondsOnPage >= milestone && !timeTracked.current.has(milestone)) {
                    timeTracked.current.add(milestone);
                    trackTimeOnPage(milestone);
                }
            });
        }, 1000);

        // Track exit intent (mouse leaving viewport)
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                trackEvent({
                    action: 'exit_intent',
                    category: 'Engagement',
                    label: 'Mouse left viewport',
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseleave', handleMouseLeave);
            clearInterval(timeInterval);
        };
    }, []);

    return null; // This component doesn't render anything
}

// Import trackEvent for exit intent
import { trackEvent } from '@/lib/analytics';
