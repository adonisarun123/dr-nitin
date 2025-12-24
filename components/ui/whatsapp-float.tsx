"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "919449031003"; // +91-9449031003 in international format without + and -
    const message = "Hi, I would like to book an appointment with Dr. Nitin Sunku";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        // Show button after a short delay for better UX
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-6 right-6 z-50 group transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            aria-label="Chat on WhatsApp"
        >
            {/* Floating Button */}
            <div className="relative">
                {/* Pulse Animation Ring */}
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>

                {/* Main Button */}
                <div className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                    <MessageCircle className="h-7 w-7" strokeWidth={2} />
                </div>

                {/* Notification Badge */}
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                    1
                </div>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    Chat with us on WhatsApp
                    <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </div>
            </div>
        </a>
    );
}
