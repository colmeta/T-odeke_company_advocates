"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Check, ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function CaseResults() {
    const results = [
        {
            amount: "UGX 85M",
            category: "Commercial Debt Recovery",
            client: "Kampala Trading Corp",
            description: "Successfully recovered outstanding commercial debt through strategic litigation in the Commercial Division",
            outcome: "Full recovery + legal costs"
        },
        {
            amount: "UGX 52M",
            category: "Contract Enforcement",
            client: "National Construction Ltd",
            description: "Enforced high-value construction contract and secured payment for completed works",
            outcome: "100% contract value recovered"
        },
        {
            amount: "UGX 43M",
            category: "Institutional Defense",
            client: "Private University",
            description: "Defended against frivolous administrative challenge that threatened institutional stability",
            outcome: "Case dismissed with costs"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container px-4 md:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-6">
                        Proven Track Record
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                        UGX 180M+ Recovered for Our Clients
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Real results for real clients. We don't just practice law—we deliver measurable outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-secondary/50 transition-all duration-300"
                        >
                            <div className="text-4xl font-bold text-secondary mb-2">{result.amount}</div>
                            <div className="text-sm uppercase tracking-wider text-secondary/80 font-semibold mb-4">
                                {result.category}
                            </div>
                            <div className="text-sm text-muted-foreground mb-4">
                                <strong className="text-foreground">Client:</strong> {result.client}
                            </div>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {result.description}
                            </p>
                            <div className="flex items-start gap-2 pt-4 border-t border-border">
                                <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                                <span className="text-sm font-semibold text-foreground">{result.outcome}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">180M+</div>
                            <div className="text-sm uppercase tracking-wider text-white/70">UGX Recovered</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">200+</div>
                            <div className="text-sm uppercase tracking-wider text-white/70">Cases Won</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">95%</div>
                            <div className="text-sm uppercase tracking-wider text-white/70">Success Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">18+</div>
                            <div className="text-sm uppercase tracking-wider text-white/70">Years Experience</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link href="/case-results">
                        <Button variant="premium" size="lg" className="shadow-2xl shadow-secondary/20">
                            <Download className="mr-2 h-5 w-5" />
                            Download Full Case Studies
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
