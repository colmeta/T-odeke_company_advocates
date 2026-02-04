"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
    const phoneNumber = "256700000000"; // Replace with actual number
    const message = "Hello! I'm interested in legal consultation regarding...";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center gap-2 group"
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="h-6 w-6" />
            <span className="hidden group-hover:inline-block pr-2 text-sm font-semibold whitespace-nowrap">
                Chat on WhatsApp
            </span>
        </a>
    );
}
