"use client";

import { ReactNode } from "react";
import { trackButtonClick, trackConversion } from "@/lib/analytics";

interface TrackedWhatsAppProps {
    children: ReactNode;
    phoneDigits: string;
    message: string;
    location: string;
    className?: string;
}

/**
 * WhatsApp CTA that also fires a tracked "WhatsApp Click" event in GA4 +
 * Meta Pixel (as a Contact conversion) and Google Ads (if configured).
 * Use for all WhatsApp CTAs on ad landing pages so we can attribute ad
 * spend to chat opens, not just form submits or phone calls.
 */
export function TrackedWhatsApp({
    children,
    phoneDigits,
    message,
    location,
    className,
}: TrackedWhatsAppProps) {
    const url = `https://api.whatsapp.com/send?phone=${phoneDigits}&text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        trackButtonClick("WhatsApp Chat", location, {
            phone_number: phoneDigits,
            channel: "whatsapp",
        });
        // Meta Pixel "Contact" + GA4 "conversion" so this is countable in Ads Manager.
        trackConversion("contact", {
            channel: "whatsapp",
            phone_number: phoneDigits,
            location,
        });
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={handleClick}
            className={className}
            aria-label="Chat on WhatsApp"
        >
            {children}
        </a>
    );
}
