"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "How much does a consultation cost?",
            answer: "Your first 30-minute strategy session is completely free. We'll assess your legal needs and provide preliminary guidance with no obligation. If you decide to engage our services, we offer transparent fee structures based on the complexity of your case."
        },
        {
            question: "What types of institutions do you represent?",
            answer: "We specialize in representing universities, colleges, government agencies, NGOs, and private institutions. Our flagship client is Nkumba University, and we've successfully handled governance, employment, and administrative matters for 100+ institutions across Uganda."
        },
        {
            question: "How long does commercial litigation typically take?",
            answer: "Commercial cases in the High Court Commercial Division typically take 6-18 months, depending on complexity. However, we've successfully recovered UGX 85M in just 8 months in our fastest case. We prioritize aggressive, strategic approaches to expedite favorable outcomes."
        },
        {
            question: "Do you handle emergency legal matters?",
            answer: "Yes. For urgent institutional crises—such as injunction applications, board disputes, or regulatory emergencies—we offer same-day response. Contact us immediately at +256 700 000 000 for emergency legal assistance."
        },
        {
            question: "What makes your firm different from other law firms in Kampala?",
            answer: "Three key differentiators: (1) Specialized institutional expertise—we understand university governance, not just general corporate law. (2) Proven track record—UGX 180M+ recovered with a 95% success rate. (3) Strategic prevention—we stop problems before they become expensive legal battles."
        },
        {
            question: "Can you help if my business is owed money?",
            answer: "Absolutely. Commercial debt recovery is one of our core strengths. We've successfully recovered UGX 180M+ for clients. We offer aggressive litigation strategies combined with negotiation expertise to maximize recovery while minimizing legal costs."
        },
        {
            question: "Do you work outside Kampala?",
            answer: "Yes. While our office is in Kampala at Maria Galleria, we represent clients nationwide. We regularly appear in courts across Uganda and provide remote consultations for clients in other regions."
        },
        {
            question: "How can I track my case progress?",
            answer: "We provide regular updates via email, phone, and in-person meetings. For institutional clients, we offer quarterly board reports outlining all legal matters, ensuring full transparency and accountability."
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-6">
                            Frequently Asked Questions
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                            Get Answers to Common Legal Questions
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Still have questions? Contact us for a free consultation.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-card border border-border rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                                >
                                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 text-secondary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-5"
                                    >
                                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
