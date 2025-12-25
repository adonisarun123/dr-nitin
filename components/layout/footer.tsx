import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-gray-100 py-16 border-t-4 border-orange-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-white mb-6">Dr. Nitin Sunku</h3>
                        <p className="text-blue-100 mb-6">
                            Expert orthopedic care specializing in arthroscopy, sports injuries, and joint replacements. Restoring mobility, empowering lives.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/dr.nitinsunku" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors"><Instagram className="h-5 w-5" /></Link>
                            <Link href="https://www.facebook.com/share/18zdyd1tuD/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors"><Facebook className="h-5 w-5" /></Link>
                            <Link href="https://www.linkedin.com/in/dr-nitin-sunku-0b0170204" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors"><Linkedin className="h-5 w-5" /></Link>
                            <Link href="https://www.youtube.com/@dr.nitinsunkuorthopedicsurgeon" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-orange-400 transition-colors"><Youtube className="h-5 w-5" /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-blue-100 hover:text-orange-400 transition-colors">About Dr. Nitin</Link></li>
                            <li><Link href="/services" className="text-blue-100 hover:text-orange-400 transition-colors">Services</Link></li>
                            <li><Link href="/testimonials" className="text-blue-100 hover:text-orange-400 transition-colors">Patient Stories</Link></li>
                            <li><Link href="/blog" className="text-blue-100 hover:text-orange-400 transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-blue-100 hover:text-orange-400 transition-colors">Book Appointment</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-3">
                            <li><Link href="/services/acl-care" className="text-blue-100 hover:text-orange-400 transition-colors">ACL Care</Link></li>
                            <li><Link href="/services/knee-replacement" className="text-blue-100 hover:text-orange-400 transition-colors">Knee Replacement</Link></li>
                            <li><Link href="/services/sports-medicine" className="text-blue-100 hover:text-orange-400 transition-colors">Sports Medicine</Link></li>
                            <li><Link href="/services/shoulder-care" className="text-blue-100 hover:text-orange-400 transition-colors">Shoulder Care</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-white mb-1">Raghava Multispeciality Hospital</p>
                                    <span className="text-sm text-blue-100">39, Sarjapura - Attibele Rd, opposite syndicate bank, Anekal, Bengaluru</span>
                                    <p className="text-sm mt-1 text-blue-100">📞 +91-9980031006</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-400 shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-white mb-1">Health Nest Hospital</p>
                                    <span className="text-sm text-blue-100">1162, 24th Main Rd Sector 2, HSR Layout, Bengaluru</span>
                                    <p className="text-sm mt-1 text-blue-100">📞 +91-9449031003</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-400" />
                                <span className="text-blue-100">+91-9449031003</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-400" />
                                <span className="text-blue-100">contact@drnitinsunku.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
                    <p>© {new Date().getFullYear()} Dr. Nitin Sunku. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-orange-400 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
