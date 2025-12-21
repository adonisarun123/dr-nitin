import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">Dr. Nitin Sunku</h3>
                        <p className="text-gray-400 mb-6">
                            Expert orthopedic care specializing in arthroscopy, sports injuries, and joint replacements. Restoring mobility, empowering lives.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Dr. Nitin</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/testimonials" className="hover:text-white transition-colors">Patient Stories</Link></li>
                            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Book Appointment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/acl-care" className="hover:text-white transition-colors">ACL Care</Link></li>
                            <li><Link href="/services/knee-replacement" className="hover:text-white transition-colors">Knee Replacement</Link></li>
                            <li><Link href="/services/sports-medicine" className="hover:text-white transition-colors">Sports Medicine</Link></li>
                            <li><Link href="/services/shoulder-care" className="hover:text-white transition-colors">Shoulder Care</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-white mb-1">Attibele Clinic</p>
                                    <span className="text-sm">39, Sarjapura - Attibele Rd, opposite syndicate bank, Anekal, Bengaluru</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-gray-500 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-white mb-1">Health Nest Hospital</p>
                                    <span className="text-sm">HSR Layout, Bengaluru</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-gray-500" />
                                <span>+91-9449031003</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-gray-500" />
                                <span>contact@drnitinsunku.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Dr. Nitin Sunku. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
