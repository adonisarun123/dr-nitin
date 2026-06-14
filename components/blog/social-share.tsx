"use client";

import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { siteOrigin } from "@/lib/site-url";

/**
 * Social share buttons.
 *
 * Rewritten off framer-motion — the only animation was a hover lift
 * (`whileHover={{ y: -3 }}`), now done with a pure CSS `hover:-translate-y-[3px]`
 * + transition. Removes framer-motion from this component's bundle.
 */
export function SocialShare({ title, slug }: { title: string; slug: string }) {
    const url = `${siteOrigin}/blog/${slug}`;
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    const shareLinks = [
        { icon: Twitter, label: "Share on X (Twitter)", href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, color: "hover:text-blue-400" },
        { icon: Linkedin, label: "Share on LinkedIn", href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, color: "hover:text-blue-700" },
        { icon: Facebook, label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: "hover:text-blue-600" },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        // Could add toast here
    };

    const lift =
        "transition-transform duration-200 ease-out hover:-translate-y-[3px]";

    return (
        <div className="flex lg:flex-col gap-4 items-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden lg:block mb-2">Share</p>
            {shareLinks.map((link, idx) => (
                <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`bg-white p-3 rounded-full shadow-sm border border-gray-100 text-gray-500 ${lift} ${link.color}`}
                >
                    <link.icon className="h-5 w-5" aria-hidden />
                </a>
            ))}
            <button
                onClick={copyToClipboard}
                aria-label="Copy link to this article"
                className={`bg-white p-3 rounded-full shadow-sm border border-gray-100 text-gray-500 hover:text-gray-900 ${lift}`}
            >
                <Link2 className="h-5 w-5" aria-hidden />
            </button>
        </div>
    );
}
