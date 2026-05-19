import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Escape a string for safe inclusion in HTML text content / attributes.
 * Use this around any user-controlled value that ends up inside the email
 * templates or any other HTML produced via template literals.
 */
export function escapeHtml(input: unknown): string {
    if (input === null || input === undefined) return "";
    return String(input)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

/** Mask all but the last 2 characters of a sensitive string (for logs). */
export function maskTail(value: string | undefined | null, visible = 2): string {
    if (!value) return "";
    const s = String(value);
    if (s.length <= visible) return "*".repeat(s.length);
    return "*".repeat(s.length - visible) + s.slice(-visible);
}
