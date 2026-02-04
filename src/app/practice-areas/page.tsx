import { Button } from "@/components/ui/button";
import Link from "next/link";

const practices = [
    {
        title: "Corporate Law",
        description: "Expert guidance on business formation, mergers, acquisitions, and regulatory compliance.",
        icon: "⚖️"
    },
    {
        title: "Criminal Defense",
        description: "Aggressive representation for all types of criminal charges, protecting your rights and freedom.",
        icon: "🛡️"
    },
    {
        title: "Family Law",
        description: "Compassionate support for divorce, child custody, adoption, and other family matters.",
        icon: "👨‍👩‍👧‍👦"
    },
    {
        title: "Real Estate",
        description: "Legal assistance for property transactions, land disputes, and development projects.",
        icon: "🏘️"
    },
    {
        title: "Employment Law",
        description: "Advising both employers and employees on labor rights, contracts, and workplace disputes.",
        icon: "💼"
    },
    {
        title: "Intellectual Property",
        description: "Protecting your creative assets through trademarks, copyrights, and patents.",
        icon: "💡"
    }
];

export default function PracticeAreasPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Practice Areas</h1>
                    <p className="text-xl max-w-2xl text-gray-200">
                        Comprehensive legal solutions tailored to your unique needs.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {practices.map((practice, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md border hover:border-primary-500 transition-all hover:shadow-lg">
                                <div className="text-4xl mb-4">{practice.icon}</div>
                                <h3 className="text-2xl font-bold mb-3">{practice.title}</h3>
                                <p className="text-gray-600 mb-6">{practice.description}</p>
                                <Link href="/contact">
                                    <span className="text-primary-600 font-semibold hover:underline">Free Consultation →</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Legal Advice?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Our team is ready to listen to your case and provide the guidance you need.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg rounded-md">
                            Schedule a Consultation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
