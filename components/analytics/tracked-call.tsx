"use client";

import { ReactNode } from "react";
import { trackPhoneClick } from "@/lib/analytics";

interface TrackedCallProps {
    children: ReactNode;
    phone: string;
    location: string;
    className?: string;
}

/**
 * Click-to-call CTA. Fires `trackPhoneClick` which logs:
 *   - GA4 `button_click` (Engagement)
 *   - GA4 `conversion` with conversion_type=phone_click
 *   - Meta Pixel custom `PhoneClick` event
 *
 * Use for every tel: link on the ad landing page so we get a unified
 * "Call" conversion across Google Ads, GA4 and Meta Ads Manager.
 */
export function TrackedCall({
    children,
    phone,
    location,
    className,
}: TrackedCallProps) {
    const handleClick = () => {
        trackPhoneClick(phone, location);
    };

    return (
        <a
            href={`tel:${phone}`}
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}
