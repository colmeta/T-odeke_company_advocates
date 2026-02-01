import Link from "next/link"
import { Scale, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground border-t border-white/10">
            <div className="container px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-secondary p-1.5 rounded-sm">
                                <Scale className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight leading-none text-white">
                                    T. ODEKE & CO
                                </span>
                                <span className="text-[0.65rem] tracking-widest uppercase text-white/70">
                                    Advocates
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Uganda's premier legal counsel. Unstoppable advocacy for those who demand excellence. We build the future of law, one case at a time.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-secondary hover:text-primary transition-colors">
                                    <Icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/attorneys" className="hover:text-secondary transition-colors">Our Attorneys</Link></li>
                            <li><Link href="/case-results" className="hover:text-secondary transition-colors">Case Results</Link></li>
                            <li><Link href="/blog" className="hover:text-secondary transition-colors">Legal Insights</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Practice Areas */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-secondary">Practice Areas</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/practice-areas/corporate" className="hover:text-secondary transition-colors">Corporate Law</Link></li>
                            <li><Link href="/practice-areas/criminal-defense" className="hover:text-secondary transition-colors">Criminal Defense</Link></li>
                            <li><Link href="/practice-areas/family-law" className="hover:text-secondary transition-colors">Family Law</Link></li>
                            <li><Link href="/practice-areas/real-estate" className="hover:text-secondary transition-colors">Real Estate & Property</Link></li>
                            <li><Link href="/practice-areas/civil-litigation" className="hover:text-secondary transition-colors">Civil Litigation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-secondary">Contact Us</h3>
                        <div className="space-y-4 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                                <span>
                                    Plot 123, Kampala Road<br />
                                    Nakasero, Kampala<br />
                                    Uganda
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <span>+256 700 000 000</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <span>info@todekeadvocates.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} T. Odeke & Co. Advocates. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
