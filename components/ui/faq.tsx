"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
    title?: string;
}

export function FAQ({ items, title = "Frequently Asked Questions" }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="space-y-4">
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200"
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            <span>{item.question}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="h-5 w-5 text-primary shrink-0" />
                            ) : (
                                <ChevronDown className="h-5 w-5 text-gray-400 shrink-0" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
