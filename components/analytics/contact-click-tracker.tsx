"use client";

import { useEffect } from "react";
import { CLINICS } from "@/lib/practice";

/**
 * Sitewide click-to-call / WhatsApp tracking — mounted once in app/layout.tsx.
 *
 * Why: GA4 key events were 0 because phone/WhatsApp clicks were only sent as
 * a gtag event named `conversion`, which never registered in GA4, and many
 * `tel:` links (header, footer, homepage hero, service pages) had no tracking
 * at all. This listener catches EVERY tel: / WhatsApp link click and sends a
 * single, distinctly named GA4 event:
 *   - `phone_click`    (marked as a GA4 key event)
 *   - `whatsapp_click` (marked as a GA4 key event)
 * Each carries `clinic` ("attibele" | "hsr-layout" | "unknown") so Attibele
 * calls can be separated from HSR calls in GA4.
 *
 * TrackedCall / TrackedWhatsApp still fire their own `button_click` and Meta
 * Pixel events; they do NOT send phone_click/whatsapp_click, so there is no
 * double count. Do not add another gtag phone_click elsewhere.
 */

const digitsOf = (s: string) => s.replace(/\D/g, "");

const clinicFor = (digits: string): string => {
    if (!digits) return "unknown";
    const last10 = digits.slice(-10);
    const match = CLINICS.find((c) => c.phoneDigits.slice(-10) === last10);
    return match ? match.id : "unknown";
};

export function ContactClickTracker() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = e.target as Element | null;
            const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
            if (!link) return;
            const href = link.getAttribute("href") || "";
            const gtag = (window as any).gtag;
            if (typeof gtag !== "function") return;

            let eventName: string | null = null;
            let digits = "";
            if (href.startsWith("tel:")) {
                eventName = "phone_click";
                digits = digitsOf(href);
            } else if (/(api\.whatsapp\.com|wa\.me|whatsapp:\/\/)/i.test(href)) {
                eventName = "whatsapp_click";
                try {
                    const u = new URL(href, window.location.href);
                    digits = digitsOf(u.searchParams.get("phone") || u.pathname);
                } catch {
                    digits = "";
                }
            }
            if (!eventName) return;

            gtag("event", eventName, {
                clinic: clinicFor(digits),
                phone_number: digits,
                link_text: (link.textContent || "").trim().slice(0, 80),
                page_path: window.location.pathname,
            });
        };
        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    return null;
}
