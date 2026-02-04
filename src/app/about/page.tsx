"use client"

import { motion } from "framer-motion"
import { Scale, Trophy, Clock, MapPin, CheckCircle2, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background overflow-hidden">

            {/* Hero Section */}
            <section className="container px-4 md:px-8 mb-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary">
                            Approved Law Firm 2024–2025
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground text-balance">
                            Where Legal <span className="text-secondary">Integrity</span> Meets Institutional Strength.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Under the leadership of Timothy Ayeet Odeke, T. Odeke & Co. Advocates has redefined the landscape of institutional and commercial law in Uganda. Based in the heart of Kampala at Maria's Galleria, we have spent nearly two decades navigating the complexities of administrative governance and high-stakes commercial disputes.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our team stands as a verified pillar of the legal fraternity, recognized for our role as the primary legal representative for leading Ugandan institutions like Nkumba University. We don't just practice law; we provide the strategic foresight that allows organizations to thrive.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="premium" size="lg">Our Expertise</Button>
                            <Button variant="outline" size="lg">The Legal Team</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-4 bg-secondary/20 rounded-2xl blur-2xl -z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop"
                            alt="Legal Consultation at T. Odeke"
                            className="rounded-2xl shadow-2xl border border-white/10"
                        />

                        {/* Floating Stat Card */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -bottom-10 -left-10 bg-card p-6 rounded-xl shadow-xl border border-border max-w-xs hidden md:block"
                        >
                            <div className="flex items-center gap-4 mb-2">
                                <div className="bg-secondary/20 p-2 rounded-full text-secondary">
                                    <Trophy className="h-6 w-6" />
                                </div>
                                <span className="font-bold text-lg">Judiciary Approved</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Officially listed in the 2025 Judiciary Report of Approved Law Firms.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary text-primary-foreground py-20 mb-24">
                <div className="container px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                        {[
                            { label: "Approved Firm", value: "2024-25" },
                            { label: "Institutional Wins", value: "200+" },
                            { label: "Strategic Locations", value: "3" },
                            { label: "Suite", value: "003" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-4"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">{stat.value}</div>
                                <div className="text-sm uppercase tracking-widest opacity-70">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative Story Section */}
            <section className="container px-4 md:px-8 mb-24">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-bold">The T. Odeke Standard</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground">
                        <p>
                            In the legal corridors of Kampala, reputation is everything. At T. Odeke & Co. Advocates, we have built ours through consistent, high-impact results in the Commercial and Civil Divisions. We are the architects of legal defense for institutions, managing employment disputes and board injunctions that would otherwise paralyze operations.
                        </p>
                        <p>
                            Our Principal Advocate, Timothy Ayeet Odeke, brings a unique perspective—serving as an officer of the court and a senior legal officer within the educational sector. This dual mastery ensures that our clients receive advice that is not only legally sound but institutionally savvy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="container px-4 md:px-8">
                <div className="rounded-3xl bg-zinc-900 text-white p-12 overflow-hidden relative border border-white/5">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold">Headquarters: Maria's Galleria</h2>
                            <p className="text-white/70">
                                Located at Plot 15, Luwum Street, 6th Floor, Suite 003. We are positioned in the heart of Kampala's business pulse to serve you with immediate proximity and priority.
                            </p>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <MapPin className="h-5 w-5 text-secondary" />
                                    <div>
                                        <div className="font-semibold text-sm">Plot 15, Luwum Street</div>
                                        <div className="text-xs text-white/50">6th Floor, Suite 003, Kampala</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Link href="/contact" className="w-full md:w-auto">
                            <Button variant="premium" className="h-14 px-8 text-lg w-full">
                                Book a Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}
