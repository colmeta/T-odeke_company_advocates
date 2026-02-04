"use client"

import { motion } from "framer-motion"
import { Briefcase, Gavel, Users, Home, Scale, FileText, Globe, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const practices = [
    {
        title: "Institutional Law",
        description: "Navigating the complexities of administrative governance, board disputes, and institutional structural integrity for Uganda's leading universities and organizations.",
        icon: Globe,
        href: "/practice-areas"
    },
    {
        title: "Commercial Litigation",
        description: "Aggressive and strategic advocacy in the Commercial Division, focusing on high-value debt recovery, contract enforcement, and business protection.",
        icon: Scale,
        href: "/practice-areas"
    },
    {
        title: "Corporate Advisory",
        description: "Strategic legal partnership for businesses, from compliance auditing to complex merger transitions and regulatory filings.",
        icon: Briefcase,
        href: "/practice-areas"
    },
    {
        title: "Administrative Defense",
        description: "Expert challenges and defenses of statutory body decisions, ensuring that institutional governance remains unchallenged and effective.",
        icon: FileText,
        href: "/practice-areas"
    },
    {
        title: "Employment & Labor",
        description: "Managing sensitive workplace disputes and organizational restructuring with a focus on both legal compliance and institutional stability.",
        icon: Users,
        href: "/practice-areas"
    },
    {
        title: "Real Estate & Conveyancing",
        description: "Securing property interests and navigating Kampala's prime commercial real estate landscape with precision and transparency.",
        icon: Home,
        href: "/practice-areas"
    }
]

export function PracticeAreas() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container px-4 md:px-8">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-primary">
                        World-Class Legal Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We offer a comprehensive range of legal services designed to meet the complex needs of our corporate and individual clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={practice.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-card p-8 rounded-lg border border-border hover:border-secondary/50 shadow-sm hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-md bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                                <practice.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                                {practice.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 line-clamp-3">
                                {practice.description}
                            </p>
                            <Link href={practice.href} className="inline-flex items-center text-sm font-medium text-secondary hover:text-secondary/80">
                                Learn more <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button variant="outline" size="lg">
                        View All Practice Areas
                    </Button>
                </div>
            </div>
        </section>
    )
}
