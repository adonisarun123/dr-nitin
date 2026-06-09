"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
    /**
     * When true (default), the component also emits FAQPage JSON-LD for the listed items
     * so search engines can surface rich results. Disable when the page already emits a
     * higher-level FAQPage schema that includes these items.
     */
    emitSchema?: boolean;
}

/**
 * Accordion FAQ.
 *
 * Rewritten off framer-motion. Two wins for SEO/perf:
 *  1. No framer-motion runtime in the bundle.
 *  2. The answer text is now ALWAYS present in the rendered HTML (it's
 *     collapsed visually via a max-height/opacity CSS transition rather
 *     than conditionally mounted). Previously the answers only entered the
 *     DOM on click, so they were invisible to crawlers and absent from the
 *     initial markup — both of which depressed the text-to-HTML ratio and
 *     hid content from search engines.
 */
export function FAQ({ items, title = "Frequently Asked Questions", emitSchema = true }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqSchema = emitSchema && items.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(({ question, answer }) => ({
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": answer,
            },
        })),
    } : null;

    return (
        <div className="mt-12">
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
                    }}
                />
            )}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="space-y-4">
                {items.map((item, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200"
                        >
                            <button
                                onClick={() => toggle(idx)}
                                aria-expanded={isOpen}
                                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                            >
                                <span>{item.question}</span>
                                {isOpen ? (
                                    <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                                )}
                            </button>
                            {/* Answer is always rendered (good for crawlers); collapsed via CSS grid-rows trick. */}
                            <div
                                className="grid transition-all duration-300 ease-in-out"
                                style={{
                                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                                    opacity: isOpen ? 1 : 0,
                                }}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
