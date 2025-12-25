"use client";

import { useEffect } from "react";

export function HideNavigation() {
    useEffect(() => {
        // Hide header and footer on mount
        const header = document.querySelector('header');
        const footer = document.querySelector('footer');

        if (header) header.style.display = 'none';
        if (footer) footer.style.display = 'none';

        // Show them again on unmount (when navigating away)
        return () => {
            if (header) header.style.display = '';
            if (footer) footer.style.display = '';
        };
    }, []);

    return null;
}
