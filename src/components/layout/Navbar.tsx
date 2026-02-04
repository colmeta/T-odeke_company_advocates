"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Scale } from "lucide-react"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Attorneys", href: "/attorneys" },
    { name: "Case Results", href: "/case-results" },
    { name: "About Us", href: "/about" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass-panel shadow-md py-3"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-secondary p-1.5 rounded-sm">
                        <Scale className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-bold tracking-tight leading-none ${scrolled ? "text-primary" : "text-white"}`}>
                            T. ODEKE & CO
                        </span>
                        <span className={`text-[0.65rem] tracking-widest uppercase ${scrolled ? "text-primary/70" : "text-white/80"}`}>
                            Advocates
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`text-sm font-medium transition-colors hover:text-secondary ${scrolled ? "text-primary" : "text-white/90"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button variant="premium" size="sm" className="ml-4">
                        <Phone className="mr-2 h-4 w-4" />
                        Free Consultation
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className={scrolled ? "text-primary" : "text-white"} />
                    ) : (
                        <Menu className={scrolled ? "text-primary" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-background border-t border-border"
                >
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-foreground font-medium py-2 border-b border-border/40"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button variant="premium" className="w-full">
                            Book Consultation
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    )
}
