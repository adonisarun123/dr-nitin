"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = "up"
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 40 };
            case "down": return { opacity: 0, y: -40 };
            case "left": return { opacity: 0, x: 40 };
            case "right": return { opacity: 0, x: -40 };
            case "none": return { opacity: 0 };
            default: return { opacity: 0, y: 40 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitial()}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : getInitial()}
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like ease
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
