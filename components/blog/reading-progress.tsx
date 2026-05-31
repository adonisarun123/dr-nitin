"use client";

import { useEffect, useRef } from "react";

/**
 * Top-of-page reading progress bar.
 *
 * Rewritten off framer-motion to a plain scroll listener that drives a
 * CSS `transform: scaleX(...)`. Removes the framer-motion runtime from
 * the bundle. Uses requestAnimationFrame to stay smooth without a spring.
 */
export function ReadingProgress() {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let raf = 0;
        const update = () => {
            raf = 0;
            const el = barRef.current;
            if (!el) return;
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight - window.innerHeight;
            const progress = height > 0 ? Math.min(scrollTop / height, 1) : 0;
            el.style.transform = `scaleX(${progress})`;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div
            ref={barRef}
            className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
            style={{ transform: "scaleX(0)", transition: "transform 0.1s linear" }}
        />
    );
}
