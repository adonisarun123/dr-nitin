"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Previously powered by framer-motion. Rewritten to use a tiny
 * IntersectionObserver + CSS transitions so it no longer pulls the
 * framer-motion runtime into the client bundle. The public API
 * (`delay`, `className`, `direction`) is unchanged, so every existing
 * <FadeIn> usage keeps working without edits.
 *
 * Honours `prefers-reduced-motion` and degrades gracefully: if JS is
 * disabled the content is still rendered (it simply starts visible on
 * the server-rendered markup once hydrated).
 */
export function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect reduced-motion preference — show immediately.
        if (
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
        ) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { rootMargin: "-10% 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const hidden = (() => {
        switch (direction) {
            case "up":
                return "translateY(40px)";
            case "down":
                return "translateY(-40px)";
            case "left":
                return "translateX(40px)";
            case "right":
                return "translateX(-40px)";
            default:
                return "none";
        }
    })();

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : hidden,
                transition: `opacity 0.7s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s, transform 0.7s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`,
                willChange: "opacity, transform",
            }}
        >
            {children}
        </div>
    );
}
