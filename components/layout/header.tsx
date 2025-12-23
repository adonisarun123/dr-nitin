"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Stethoscope, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Patient Stories", href: "/testimonials" },
    { name: "Gallery", href: "/gallery" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white/95 via-white/90 to-blue-50/30 backdrop-blur-lg shadow-md border-b border-gray-200/50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            <Stethoscope className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Dr. Nitin Sunku
                            </span>
                            <span className="text-xs text-gray-600 font-medium">Orthopedic & Sports Medicine</span>
                        </div>
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:gap-x-1">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative px-3 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group",
                                isActive(item.href)
                                    ? "text-primary"
                                    : "text-gray-700 hover:text-primary hover:bg-blue-50/50"
                            )}
                        >
                            {item.name}
                            <span
                                className={cn(
                                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300",
                                    isActive(item.href)
                                        ? "w-3/4"
                                        : "w-0 group-hover:w-3/4"
                                )}
                            />
                        </Link>
                    ))}
                </div>

                {/* Desktop CTAs */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center gap-3">
                    <a
                        href="tel:+919449031003"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-primary transition-colors rounded-lg hover:bg-blue-50/50 whitespace-nowrap"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+91-9449031003</span>
                    </a>
                    <Button asChild className="shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                        <Link href="/contact">Book Appointment</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl animate-in slide-in-from-right duration-300">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                            <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-2 rounded-lg">
                                <Stethoscope className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg font-heading font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                                Dr. Nitin Sunku
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
                                {navigation.map((item) => (
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

                            {/* Contact Info */}
                            <div className="py-6 space-y-4">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
                                <a
                                    href="tel:+919449031003"
                                    className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors"
                                >
                                    <div className="bg-green-50 p-2 rounded-lg">
                                        <Phone className="h-5 w-5 text-green-600" />
                                    </div>
                                    <span className="font-medium">+91-9449031003</span>
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
        </header>
    );
}
