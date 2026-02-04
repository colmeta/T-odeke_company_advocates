"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const attorneys = [
    {
        name: "Timothy Ayeet Odeke",
        title: "Managing Partner & Principal Advocate",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
        specialties: ["Institutional Law", "Commercial Litigation", "Administrative Law"],
        bio: "The driving force behind the firm, Timothy Ayeet Odeke possesses a rare dual mastery. As both the Principal Advocate of the firm and a Senior Legal Officer for Nkumba University, he offers institutional clients a level of administrative foresight that is unmatched in Kampala. His record in the High Court Commercial Division, including major debt recoveries exceeding UGX 180M, cements his status as a dominant figure in Uganda's legal landscape."
    },
    {
        name: "Mututa Martin",
        title: "Counsel",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
        specialties: ["Corporate Advisory", "Civil Litigation"],
        bio: "A strategic legal mind dedicated to navigating the complexities of commercial law. Martin's approach combines rigorous case analysis with a human-centric focus on client goals, ensuring that every legal solution serves the long-term health of the business."
    },
    {
        name: "Julius",
        title: "Counsel",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        specialties: ["Employment Law", "Contractual Disputes"],
        bio: "Specializing in the intricate nuances of labor and commercial contracts, Julius is known for his ability to de-escalate volatile institutional disputes. His advocacy is built on the foundation of protecting institutional integrity while achieving fair outcomes in the High Court."
    },
    {
        name: "Ndagire Joan",
        title: "Junior Counsel",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
        specialties: ["Legal Research", "Compliance"],
        bio: "Representing the next generation of legal excellence, Joan provides the meticulous research and compliance auditing that anchors our high-stakes cases. Her dedication to the details ensures that our institutional clients are always one step ahead in regulatory matters."
    }
]

export default function AttorneysPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 bg-background">
            {/* Hero Section */}
            <section className="container px-4 md:px-8 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-primary">
                        The Minds Behind <span className="text-secondary">Excellence</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our team is composed of Uganda's sharpest legal minds. We are not just lawyers; we are strategists, defenders, and partners in your success.
                    </p>
                </motion.div>
            </section>

            {/* Grid */}
            <section className="container px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {attorneys.map((attorney, index) => (
                        <motion.div
                            key={attorney.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-secondary/50 transition-colors shadow-lg shadow-black/5"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-80 w-full overflow-hidden">
                                <img
                                    src={attorney.image}
                                    alt={attorney.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Social Links overlaid on image */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                                        <Linkedin className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                                        <Mail className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                <div className="absolute -top-10 left-6">
                                    <span className="bg-secondary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                                        {attorney.title}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-foreground mb-1 flex items-center justify-between group-hover:text-secondary transition-colors">
                                    {attorney.name}
                                    <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-secondary" />
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {attorney.specialties.map(s => (
                                        <span key={s} className="text-xs text-muted-foreground bg-accent px-2 py-0.5 rounded-sm">
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {attorney.bio}
                                </p>

                                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                    View Full Profile
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="container px-4 md:px-8 mt-32">
                <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold">Join the Elite</h2>
                        <p className="text-primary-foreground/80">
                            We are always looking for exceptional talent to join our ranks. If you have what it takes to be unstoppable, we want to hear from you.
                        </p>
                        <Button variant="premium" size="lg">
                            Careers at T. Odeke
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
