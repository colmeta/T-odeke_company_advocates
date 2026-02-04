import { Button } from "@/components/ui/button";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-900 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl max-w-2xl text-gray-200">
                        Get in touch with our legal team for a free consultation.
                    </p>
                </div>
            </section>

            {/* Contact Details Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                            <div className="space-y-6 text-lg">
                                <div>
                                    <h3 className="font-semibold mb-2">Office Address</h3>
                                    <p className="text-gray-600">
                                        MS T. Odeke & Co Advocates<br />
                                        Plot 15 Luwum Street, Maria Galleria Building<br />
                                        6th Floor, Suite 003<br />
                                        Kampala, Uganda
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Postal Address</h3>
                                    <p className="text-gray-600">P.O. Box 40285, Kampala</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Phone</h3>
                                    <p className="text-gray-600">
                                        <a href="tel:+256700000000" className="hover:text-primary-600 transition-colors">
                                            +256 700 000 000
                                        </a>
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Email</h3>
                                    <p className="text-gray-600">
                                        <a href="mailto:info@todekeadvocates.com" className="hover:text-primary-600 transition-colors">
                                            info@todekeadvocates.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                                        placeholder="Your Phone Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary-500 outline-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-md font-semibold text-lg transition-colors">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
