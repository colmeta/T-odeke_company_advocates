import React from 'react';

interface TestimonialsProps { }

export function Testimonials({ }: TestimonialsProps) {
    const testimonials = [
        {
            quote: "Outstanding legal representation. They successfully defended our institution against a complex administrative challenge that threatened our operations. Their strategic approach saved us millions.",
            author: "Dr. Samuel Mwebaze",
            position: "Vice Chancellor",
            institution: "Nkumba University",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop"
        },
        {
            quote: "Recovered UGX 85M in commercial debt for our company in record time. The team's expertise in commercial litigation is unmatched in Uganda. Professional, efficient, and results-driven.",
            author: "Patricia Namuli",
            position: "Managing Director",
            institution: "Kampala Trading Corporation",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&fit=crop"
        },
        {
            quote: "The best legal counsel for institutional governance matters. They provided strategic advice that prevented costly board disputes and strengthened our administrative framework.",
            author: "Hon. James Okello",
            position: "Board Chairman",
            institution: "Regional Education Trust",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&fit=crop"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/95 to-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary mb-6">
                        Client Success Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Uganda's Leading Institutions
                    </h2>
                    <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.author}
                                    className="w-16 h-16 rounded-full border-2 border-secondary"
                                />
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-secondary">{testimonial.position}</div>
                                    <div className="text-xs text-white/60">{testimonial.institution}</div>
                                </div>
                            </div>
                            <p className="text-white/80 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex gap-1 mt-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Bar */}
                <div className="mt-16 text-center">
                    <p className="text-white/60 text-sm mb-6">TRUSTED BY LEADING ORGANIZATIONS</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        <div className="text-white/40 font-bold text-xl">NKUMBA UNIVERSITY</div>
                        <div className="text-white/40 font-bold text-xl">• UGANDA LAW SOCIETY •</div>
                        <div className="text-white/40 font-bold text-xl">100+ INSTITUTIONS</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
