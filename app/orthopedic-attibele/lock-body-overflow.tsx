"use client";

import { useEffect } from "react";

/**
 * Applies `overflow-x: hidden` to html + body while this page is mounted.
 *
 * Why this is needed:
 * Mobile devices can render an element slightly wider than the viewport
 * (because of absolutely-positioned decorative blur orbs, scrollbar-width
 * rounding, framer-motion x-axis translations during animation, or content
 * that doesn't break). `overflow-x-hidden` on a child element doesn't help
 * once a parent has overflowed — the html/body itself ends up scrollable.
 *
 * Setting overflow-x on html + body is the only reliable way to prevent
 * horizontal scroll on the page. We scope it to this page so other pages
 * keep their default behaviour.
 */
export function LockBodyOverflow() {
    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;

        const prevHtml = html.style.overflowX;
        const prevBody = body.style.overflowX;
        const prevHtmlMax = html.style.maxWidth;
        const prevBodyMax = body.style.maxWidth;

        html.style.overflowX = "hidden";
        body.style.overflowX = "hidden";
        html.style.maxWidth = "100%";
        body.style.maxWidth = "100%";

        return () => {
            html.style.overflowX = prevHtml;
            body.style.overflowX = prevBody;
            html.style.maxWidth = prevHtmlMax;
            body.style.maxWidth = prevBodyMax;
        };
    }, []);

    return null;
}
