"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, Calendar, Shield } from "lucide-react"

export function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-background py-20 md:py-0">
            {/* Background with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-background z-10 opacity-90" />
                {/* Placeholder for legal library/office image - using a subtle pattern for now */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay" />
            </div>

            <div className="container relative z-20 px-4 md:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6 md:space-y-8 max-w-5xl"
                >
                    <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs md:text-sm font-medium text-secondary">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        Approved Law Firm 2024–2025 • Uganda Judiciary & Law Society
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white text-balance drop-shadow-lg leading-tight">
                        Protect Your Institution's Future. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#f3cf55]">Dominate Commercial Litigation.</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light px-4 md:px-0">
                        Uganda's premier legal counsel for universities, corporations, and institutions. Over <strong className="text-secondary">UGX 180M+ recovered</strong> in commercial disputes. We don't just defend—we eliminate threats before they destabilize your operations.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-8 w-full sm:w-auto px-4 sm:px-0"
                    >
                        <Button size="lg" variant="premium" className="text-base md:text-lg px-8 md:px-10 h-14 md:h-16 w-full sm:w-auto shadow-2xl shadow-secondary/30">
                            <Calendar className="mr-2 h-5 w-5" />
                            Book Free Strategy Session
                        </Button>
                        <Button size="lg" variant="outline" className="text-base md:text-lg px-8 md:px-10 h-14 md:h-16 w-full sm:w-auto bg-white/5 text-white border-white/30 hover:bg-white/10 hover:text-white hover:border-white/50 backdrop-blur-sm">
                            <Shield className="mr-2 h-5 w-5" />
                            View UGX 180M+ Recovery Case
                        </Button>
                    </motion.div>

                    {/* Trust Micro-Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-6 flex items-center justify-center gap-3 text-white/70 text-xs md:text-sm"
                    >
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-white/20 flex items-center justify-center text-xs font-bold">N</div>
                            <div className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-white/20 flex items-center justify-center text-xs font-bold">U</div>
                            <div className="w-8 h-8 rounded-full bg-secondary/30 border-2 border-white/20 flex items-center justify-center text-xs font-bold">+</div>
                        </div>
                        <span className="text-white/80">Trusted by <strong className="text-secondary">Nkumba University</strong> + leading institutions</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Credibility Badges - Improved Mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-16 md:bottom-24 left-0 right-0 z-20 flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-16 px-4 py-6 bg-black/20 backdrop-blur-sm border-y border-white/5"
            >
                <div className="text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-bold text-secondary">UGX 180M+</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60">Commercial Recoveries</div>
                </div>
                <div className="text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-bold text-secondary">18+ Years</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60">Legal Excellence</div>
                </div>
                <div className="text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-bold text-secondary">ULS Verified</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60">2024-2025 Approved</div>
                </div>
                <div className="text-center min-w-[100px]">
                    <div className="text-xl md:text-2xl font-bold text-secondary">200+ Wins</div>
                    <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/60">Institutional Cases</div>
                </div>
            </motion.div>

            {/* Scroll Indicator - Hidden on Mobile */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex-col items-center gap-2 hidden md:flex"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
            </motion.div>
        </section>
    )
}
