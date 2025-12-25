"use client";

import { ReactNode, MouseEvent } from 'react';
import { trackButtonClick } from '@/lib/analytics';

interface TrackedButtonProps {
    children: ReactNode;
    buttonName: string;
    buttonLocation: string;
    onClick?: () => void;
    className?: string;
    href?: string;
    metadata?: Record<string, any>;
}

export function TrackedButton({
    children,
    buttonName,
    buttonLocation,
    onClick,
    className,
    href,
    metadata,
}: TrackedButtonProps) {
    const handleClick = (e: MouseEvent) => {
        // Track the click
        trackButtonClick(buttonName, buttonLocation, metadata);

        // Call the original onClick if provided
        if (onClick) {
            onClick();
        }
    };

    if (href) {
        return (
            <a
                href={href}
                className={className}
                onClick={handleClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={className}
            onClick={handleClick}
        >
            {children}
        </button>
    );
}
