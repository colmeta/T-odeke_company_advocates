"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, ArrowRight, CheckCircle } from "lucide-react"

export function LeadMagnetModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // In production, integrate with email service
        console.log("Email submitted:", email);
        setSubmitted(true);
        setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setEmail("");
        }, 3000);
    };

    return (
        <>
            {/* Trigger Button */}
            <Button
                onClick={() => setIsOpen(true)}
                variant="outline"
                className="fixed bottom-6 right-6 z-40 shadow-2xl bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none text-base md:text-lg px-6 py-6 rounded-full"
            >
                <Download className="mr-2 h-5 w-5" />
                Free Legal Checklist
            </Button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        >
                            <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-muted rounded-full transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                {!submitted ? (
                                    <>
                                        <div className="mb-6">
                                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                                <Download className="h-8 w-8 text-secondary" />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold mb-3">
                                                Free Legal Checklist for Institutions
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Get our comprehensive 10-point legal governance checklist used by Uganda's leading universities and corporations.
                                            </p>
                                        </div>

                                        <ul className="space-y-3 mb-6 text-sm">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Essential compliance requirements</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Board governance best practices</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                                <span>Risk mitigation strategies</span>
                                            </li>
                                        </ul>

                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <Button type="submit" variant="premium" size="lg" className="w-full">
                                                Download Free Checklist
                                                <ArrowRight className="ml-2 h-5 w-5" />
                                            </Button>
                                            <p className="text-xs text-muted-foreground text-center">
                                                We respect your privacy. Unsubscribe anytime.
                                            </p>
                                        </form>
                                    </>
                                ) : (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                            <CheckCircle className="h-8 w-8 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">Check Your Email!</h3>
                                        <p className="text-muted-foreground">
                                            We've sent the legal checklist to <strong>{email}</strong>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
