import { Button } from "@/components/ui/button";
import Link from "next/link";

const results = [
    {
        category: "Institutional Defense",
        title: "Preserving Institutional Stability",
        description: "Represented a major Ugandan University in a high-stakes board dispute. We successfully fought against a temporary injunction that threatened to paralyze recruitment and operations, ensuring the institution remained functional and legally compliant.",
        outcome: "Injunction Dismissed / Operations Secured"
    },
    {
        category: "Commercial Litigation",
        title: "High-Value Debt Recovery",
        description: "Successfully navigated a complex contract dispute in the High Court Commercial Division. Our strategic advocacy resulted in the recovery of over UGX 180,000,000 in commercial debt for our client.",
        outcome: "Full Recovery Secured"
    },
    {
        category: "Employment Law",
        title: "Strategic Labor Resolution",
        description: "Advised an institutional board on a high-visibility recruitment dispute. By focusing on administrative compliance and the Universities and Other Tertiary Institutions Act, we secured a favorable outcome that protected our client's governance powers.",
        outcome: "Institutional Authority Upheld"
    },
    {
        category: "Real Estate",
        title: "Maria's Galleria Acquisition",
        description: "Guided a commercial development team through the legal complexities of property rights and tenant management in Kampala's business heart.",
        outcome: "Project Success"
    }
];

export default function CaseResultsPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Results</h1>
                    <p className="text-xl max-w-2xl text-gray-200">
                        A track record of success. We fight to win for our clients.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {results.map((result, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary-500">
                                <span className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                    {result.category}
                                </span>
                                <h3 className="text-2xl font-bold mb-3">{result.title}</h3>
                                <p className="text-gray-600 mb-4">{result.description}</p>
                                <div className="font-bold text-green-600">
                                    Result: {result.outcome}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary-900 text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Let Us Fight For You</h2>
                    <p className="mb-8 text-gray-300">Every case is different. Contact us to discuss the specifics of your situation.</p>
                    <Link href="/contact">
                        <Button variant="secondary" className="px-8 py-6 text-lg">
                            Get Free Case Evaluation
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
