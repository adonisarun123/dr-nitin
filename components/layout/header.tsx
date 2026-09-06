"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Stethoscope, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";
import {
    CONDITION_LINKS,
    PROCEDURE_LINKS,
    LOCATION_LINKS,
} from "@/lib/landing-links";

// Desktop header nav. Kept to 6 links + the Conditions mega-menu: any more and
// the row overflows its flex track between the logo and the CTA, which made the
// items visually collide on 1024–1280px viewports.
const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Treatments", href: "/treatments" },
    { name: "Patient Stories", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

// About / Gallery / Team live in the footer (Quick Links) and in the mobile
// drawer, which has room for the full set. Awards & Publications are footer-only
// for the same reason.
const secondaryNavigation = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
];

/**
 * "Conditions" mega-menu. Added Aug 2026 — before this, the 15+ root-level
 * money pages (/knee-pain-bangalore, /knee-replacement-cost-bangalore, the geo
 * pages, …) were linked from `app/sitemap.ts` and nowhere else, so they had no
 * internal crawl path and received no link equity from the rest of the site.
 * Source of truth is `lib/landing-links.ts`.
 */
const megaMenu: { heading: string; links: { label: string; href: string }[] }[] = [
    { heading: "Conditions", links: CONDITION_LINKS },
    { heading: "Procedures & Costs", links: PROCEDURE_LINKS },
    { heading: "Locations", links: LOCATION_LINKS },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 backdrop-blur-lg shadow-lg border-b border-blue-900/50">
                <nav
                    className="mx-auto flex max-w-7xl items-center justify-between gap-2 xl:gap-4 p-4 lg:px-6 xl:px-8"
                    aria-label="Global"
                >
                    {/* Logo */}
                    <div className="flex shrink-0">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2.5 group" aria-label="Dr. Nitin N Sunku — Home">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-white/40 overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <img
                                    src="https://ik.imagekit.io/vlries1el/dr%20nitin/dr-nitin-sunku-logo.svg"
                                    alt="Dr. Nitin N Sunku - Orthopedic & Sports Medicine Specialist"
                                    className="h-11 w-11 object-contain"
                                    width={44}
                                    height={44}
                                />
                            </span>
                            <span className="hidden sm:flex flex-col leading-tight">
                                <span className="font-heading text-sm xl:text-base font-bold text-white whitespace-nowrap">
                                    Dr. Nitin N Sunku
                                </span>
                                <span className="hidden xl:block text-[11px] font-medium text-blue-100 tracking-wide whitespace-nowrap">
                                    Orthopedic &amp; Sports Medicine
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-white hover:bg-blue-700 transition-colors"
                            onClick={() => setMobileMenuOpen(true)}
                            aria-expanded={mobileMenuOpen}
                            aria-controls="mobile-menu-panel"
                            aria-label="Open main menu"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:items-center justify-center gap-x-0.5 xl:gap-x-1.5">
                        {navigation.map((item) => (
                            <Fragment key={item.name}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "relative whitespace-nowrap px-2 xl:px-3 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg group block",
                                        isActive(item.href)
                                            ? "text-white bg-blue-800/50"
                                            : "text-white hover:text-white hover:bg-blue-700/50"
                                    )}
                                >
                                    {item.name}
                                    <span
                                        className={cn(
                                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300",
                                            isActive(item.href)
                                                ? "w-3/4"
                                                : "w-0 group-hover:w-3/4"
                                        )}
                                    />
                                </Link>

                                {/* Conditions mega-menu sits directly after Treatments.
                                    CSS-only (group-hover + focus-within) so it needs no
                                    extra state and degrades to a plain link list without JS. */}
                                {item.name === "Treatments" && (
                                    <div className="relative group/mega">
                                        <button
                                            type="button"
                                            aria-haspopup="true"
                                            className="relative inline-flex items-center gap-1 whitespace-nowrap px-2 xl:px-3 py-2.5 text-sm font-semibold rounded-lg text-white hover:bg-blue-700/50 transition-all duration-200"
                                        >
                                            Conditions
                                            <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover/mega:rotate-180" />
                                        </button>

                                        <div className="invisible opacity-0 group-hover/mega:visible group-hover/mega:opacity-100 focus-within:visible focus-within:opacity-100 transition-all duration-150 absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                                            <div className="w-[46rem] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-6 grid grid-cols-3 gap-6">
                                                {megaMenu.map(({ heading, links }) => (
                                                    <div key={heading}>
                                                        <p className="text-[11px] font-bold uppercase tracking-widest text-blue-700 mb-3">
                                                            {heading}
                                                        </p>
                                                        <ul className="space-y-1.5">
                                                            {links.map((l) => (
                                                                <li key={l.href}>
                                                                    <Link
                                                                        href={l.href}
                                                                        className="block text-[13px] leading-snug text-gray-700 hover:text-blue-700 transition-colors"
                                                                    >
                                                                        {l.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex lg:items-center gap-2 xl:gap-3 shrink-0">
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="hidden xl:flex items-center gap-2 px-3 py-2 text-sm font-semibold text-blue-50 hover:text-white transition-colors rounded-lg hover:bg-blue-700 whitespace-nowrap"
                        >
                            <Phone className="h-4 w-4" />
                            <span>{siteConfig.phone}</span>
                        </a>
                        <Button asChild className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
                            <Link href="/contact">Book Appointment</Link>
                        </Button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu - moved outside header to avoid backdrop-filter containing block issue */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div id="mobile-menu-panel" className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg">
                                <Stethoscope className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-heading font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Dr. Nitin N Sunku
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-200">
                            {/* Navigation Links */}
                            <div className="space-y-1 py-6">
                                {[...navigation, ...secondaryNavigation].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "-mx-3 block rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200",
                                            isActive(item.href)
                                                ? "bg-blue-50 text-primary"
                                                : "text-gray-900 hover:bg-gray-50"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Money-page links on mobile. Same crawl-path rationale as the
                                desktop mega-menu — see lib/landing-links.ts. */}
                            {megaMenu.map(({ heading, links }) => (
                                <div key={heading} className="py-6 space-y-3">
                                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                        {heading}
                                    </h3>
                                    <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                                        {links.map((l) => (
                                            <Link
                                                key={l.href}
                                                href={l.href}
                                                className="block rounded-lg py-1.5 text-sm text-gray-700 hover:text-primary transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {l.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Contact Info */}
                            <div className="py-6 space-y-4">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                                >
                                    <div className="bg-green-50 p-2 rounded-lg">
                                        <Phone className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">{siteConfig.phone}</span>
                                </a>
                                <a
                                    href="mailto:contact@drnitinsunku.com"
                                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                                >
                                    <div className="bg-blue-50 p-2 rounded-lg">
                                        <Mail className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span className="font-medium text-sm">contact@drnitinsunku.com</span>
                                </a>
                            </div>

                            {/* CTA Button */}
                            <div className="py-6">
                                <Button className="w-full h-12 shadow-lg" asChild>
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                        Book Appointment
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
