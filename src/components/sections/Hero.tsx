"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-background">
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
                    className="space-y-6 max-w-4xl"
                >
                    <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                        <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                        Premier Legal Counsel in Uganda
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white text-balance drop-shadow-lg">
                        Unstoppable <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-[#f3cf55]">Advocacy</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
                        We don't just represent you. We elevate you. Defending your future with Fortune 500 precision and unwavering integrity.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
                    >
                        <Button size="lg" variant="premium" className="text-lg px-10 h-14">
                            Get Legal Help Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-10 h-14 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                            View Practice Areas
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
                <ChevronDown className="h-6 w-6 animate-bounce" />
            </motion.div>
        </section>
    )
}
