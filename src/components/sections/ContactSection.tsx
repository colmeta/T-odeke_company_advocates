"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react"

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Formspree integration - replace with your endpoint
            const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                setTimeout(() => setSubmitted(false), 5000);
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-primary/90 text-white">
            <div className="container px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Get Strategic Legal Counsel Today
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Don't wait until a legal crisis threatens your institution. Book a free 30-minute strategy session and discover how we can protect your interests.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Our Office</div>
                                    <div className="text-white/70 text-sm">
                                        Plot 15, Luwum Street<br />
                                        Maria Galleria Building, 6th Floor, Suite 003<br />
                                        Kampala, Uganda
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                    <Phone className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Call Us</div>
                                    <a href="tel:+256700000000" className="text-secondary hover:underline">
                                        +256 700 000 000
                                    </a>
                                    <div className="text-white/70 text-sm mt-1">Mon-Fri: 8:00 AM - 6:00 PM</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary/20 p-3 rounded-lg">
                                    <Mail className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <div className="font-semibold mb-1">Email Us</div>
                                    <a href="mailto:info@todekeadvocates.com" className="text-secondary hover:underline">
                                        info@todekeadvocates.com
                                    </a>
                                    <div className="text-white/70 text-sm mt-1">We respond within 2 hours</div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-10 pt-8 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <div className="text-2xl font-bold text-secondary">2 Hours</div>
                                    <div className="text-sm text-white/70">Average Response Time</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-secondary">100%</div>
                                    <div className="text-sm text-white/70">Free Consultations</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                    >
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder:text-white/50"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder:text-white/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder:text-white/50"
                                            placeholder="+256 ..."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Legal Matter *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white"
                                    >
                                        <option value="">Select a practice area</option>
                                        <option value="institutional">Institutional Law</option>
                                        <option value="commercial">Commercial Litigation</option>
                                        <option value="corporate">Corporate Advisory</option>
                                        <option value="employment">Employment & Labor</option>
                                        <option value="real-estate">Real Estate</option>
                                        <option value="other">Other Legal Matter</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-white placeholder:text-white/50 resize-none"
                                        placeholder="Tell us about your legal needs..."
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="premium"
                                    size="lg"
                                    disabled={isSubmitting}
                                    className="w-full text-lg"
                                >
                                    {isSubmitting ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-white/60 text-center">
                                    By submitting this form, you agree to receive communications from T. Odeke & Co. Advocates
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <CheckCircle className="h-8 w-8 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                                <p className="text-white/80">
                                    Thank you for reaching out. We'll respond within 2 hours during business hours.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
