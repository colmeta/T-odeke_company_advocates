"use client"

import { motion } from "framer-motion"
import { Scale, CheckCircle2, Trophy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

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
                            Since 2005
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground text-balance">
                            Defining the <span className="text-secondary">Standard</span> of Legal Excellence.
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            T. Odeke & Co. Advocates isn't just a law firm; it's a fortress of integrity and a launchpad for success. We were founded on the belief that true advocacy requires more than just knowledge of the law—it requires unmatched strategy and unwavering dedication.
                        </p>
                        <div className="flex gap-4">
                            <Button variant="premium" size="lg">Our History</Button>
                            <Button variant="outline" size="lg">Meet the Team</Button>
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
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                            alt="Law Office"
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
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <Trophy className="h-6 w-6" />
                                </div>
                                <span className="font-bold text-lg">Award Winning</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Recognized as Uganda's Leading Corporate Firm for 3 consecutive years.
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
                            { label: "Years Experience", value: "20+" },
                            { label: "Cases Won", value: "1,500+" },
                            { label: "Attorneys", value: "15" },
                            { label: "Locations", value: "3" }
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

            {/* Values Section */}
            <section className="container px-4 md:px-8 mb-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
                    <p className="text-muted-foreground">
                        We believe that the way we work is just as important as the results we achieve. These principles guide every decision we make.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Integrity Uncompromised", desc: "Honesty is our currency. We build trust through transparency and ethical practice.", icon: Scale },
                        { title: "Client Obsession", desc: "Your win is our win. We dive deep into your world to provide tailored solutions.", icon: Users },
                        { title: "Relentless Excellence", desc: "Good enough is not in our vocabulary. We strive for perfection in every brief.", icon: CheckCircle2 }
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-muted/30 rounded-xl border border-border hover:bg-card hover:shadow-lg transition-all"
                        >
                            <div className="bg-background w-12 h-12 rounded-lg flex items-center justify-center border border-border mb-6 shadow-sm">
                                <value.icon className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}

                    {/* Note: 'Users' icon needs to be imported if used above. Adding import to top of file if missing. */}
                </div>
            </section>

            {/* Locations */}
            <section className="container px-4 md:px-8">
                <div className="rounded-3xl bg-zinc-900 text-white p-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div className="space-y-6 max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold">Visit Our Offices</h2>
                            <p className="text-white/70">
                                With strategic locations in Nakasero, Nsambya, and Soroti, we are accessible wherever you need us.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                                    <Clock className="h-5 w-5 text-secondary" />
                                    <div>
                                        <div className="font-semibold">Monday - Friday</div>
                                        <div className="text-sm text-white/50">8:00 AM - 6:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button variant="premium" className="h-14 px-8 text-lg w-full md:w-auto">
                            Get Directions
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}

function Users(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
