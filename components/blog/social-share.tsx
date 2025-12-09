"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Linkedin, Facebook, Link2 } from "lucide-react";
import { motion } from "framer-motion";

export function SocialShare({ title, slug }: { title: string; slug: string }) {
    const url = `https://drnitinsunku.com/blog/${slug}`;
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);

    const shareLinks = [
        { icon: Twitter, href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, color: "hover:text-blue-400" },
        { icon: Linkedin, href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`, color: "hover:text-blue-700" },
        { icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, color: "hover:text-blue-600" },
    ];

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        // Could add toast here
    };

    return (
        <div className="flex lg:flex-col gap-4 items-center">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest hidden lg:block mb-2">Share</p>
            {shareLinks.map((link, idx) => (
                <motion.a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className={`bg-white p-3 rounded-full shadow-sm border border-gray-100 text-gray-500 transition-colors ${link.color}`}
                >
                    <link.icon className="h-5 w-5" />
                </motion.a>
            ))}
            <motion.button
                onClick={copyToClipboard}
                whileHover={{ y: -3 }}
                className="bg-white p-3 rounded-full shadow-sm border border-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
            >
                <Link2 className="h-5 w-5" />
            </motion.button>
        </div>
    );
}
