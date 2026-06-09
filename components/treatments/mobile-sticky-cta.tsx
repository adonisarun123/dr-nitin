import Link from "next/link";
import { Calendar, MessageCircle, Phone } from "lucide-react";

/**
 * Mobile-only sticky CTA bar shown at the bottom of treatment detail pages.
 * Hidden on md+ where the sticky sidebar already provides Book / WhatsApp /
 * Call. Sits above the global WhatsApp float via a higher z-index and uses
 * `pb-[env(safe-area-inset-bottom)]` for iOS notch comfort.
 */
export function TreatmentMobileStickyCta({ phone }: { phone: string }) {
    // Strip non-digit characters for the wa.me link (it requires E.164 without "+").
    const waNumber = phone.replace(/\D/g, "");
    return (
        <div
            role="region"
            aria-label="Quick contact actions"
            className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] pb-[env(safe-area-inset-bottom)]"
        >
            <div className="grid grid-cols-3 divide-x divide-gray-200">
                <Link
                    href="/contact"
                    className="flex flex-col items-center justify-center py-3 text-primary hover:bg-blue-50 active:bg-blue-100 transition-colors"
                >
                    <Calendar className="h-5 w-5" />
                    <span className="text-[11px] font-semibold mt-1">Book</span>
                </Link>
                <a
                    href={`https://wa.me/${waNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-3 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 transition-colors"
                >
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
                </a>
                <a
                    href={`tel:${phone}`}
                    className="flex flex-col items-center justify-center py-3 text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                    <Phone className="h-5 w-5" />
                    <span className="text-[11px] font-semibold mt-1">Call</span>
                </a>
            </div>
        </div>
    );
}
