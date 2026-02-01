"use client"

import { motion } from "framer-motion"
import { Briefcase, Gavel, Users, Home, Scale, FileText, Globe, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const practices = [
    {
        title: "Corporate Law",
        description: " Strategic legal counsel for businesses, mergers, and complex commercial transactions.",
        icon: Briefcase,
        href: "/practice-areas/corporate"
    },
    {
        title: "Criminal Defense",
        description: "Aggressive and strategic defense for those facing serious criminal charges.",
        icon: Gavel,
        href: "/practice-areas/criminal-defense"
    },
    {
        title: "Family Law",
        description: "Compassionate guidance through divorce, custody, and family disputes.",
        icon: Users,
        href: "/practice-areas/family-law"
    },
    {
        title: "Real Estate",
        description: "Protecting your property investments with solid legal frameworks.",
        icon: Home,
        href: "/practice-areas/real-estate"
    },
    {
        title: "Civil Litigation",
        description: "Winning courtroom strategies for high-stakes civil disputes.",
        icon: Scale,
        href: "/practice-areas/civil-litigation"
    },
    {
        title: "Intellectual Property",
        description: "Safeguarding your innovations and brand identity in a digital world.",
        icon: Globe,
        href: "/practice-areas/intellectual-property"
    },
    {
        title: "Employment Law",
        description: "Navigating the complexities of workplace regulations and rights.",
        icon: FileText,
        href: "/practice-areas/employment"
    },
    {
        title: "Tax Law",
        description: "Expert advice on compliance, disputes, and tax optimization.",
        icon: Shield,
        href: "/practice-areas/tax"
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
