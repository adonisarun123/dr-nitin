"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
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

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex flex-col">
                        <span className="text-xl font-heading font-bold text-primary">Dr. Nitin Sunku</span>
                        <span className="text-xs text-text-secondary font-medium">Orthopedic & Sports Medicine</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text-secondary"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold leading-6 text-text-primary hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                    <Button asChild>
                        <Link href="/contact">Book Appointment</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={cn("lg:hidden", mobileMenuOpen ? "fixed inset-0 z-50" : "hidden")}>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-xl">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="text-xl font-heading font-bold text-primary">Dr. Nitin Sunku</span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-text-secondary"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-text-primary hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Button className="w-full" asChild onClick={() => setMobileMenuOpen(false)}>
                                    <Link href="/contact">Book Appointment</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
