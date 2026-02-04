import Link from "next/link";

const posts = [
    {
        title: "Understanding Corporate Law in Uganda",
        excerpt: "Key regulations every business owner should know when operating in Kampala.",
        date: "February 1, 2026",
        category: "Corporate Law"
    },
    {
        title: "Steps to Take After a Wrongful Arrest",
        excerpt: "Protect your rights. Here is a guide on what to do if you or a loved one faces criminal charges.",
        date: "January 28, 2026",
        category: "Criminal Defense"
    },
    {
        title: "Child Custody: Best Interests of the Child",
        excerpt: "How Uganda's family courts determine custody arrangements during divorce proceedings.",
        date: "January 15, 2026",
        category: "Family Law"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-background">
            <section className="bg-primary-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights</h1>
                    <p className="text-xl max-w-2xl text-gray-200">
                        Stay informed with the latest legal news and updates from our expert attorneys.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, index) => (
                            <article key={index} className="bg-white p-6 rounded-lg shadow-md border hover:border-primary-500 transition duration-300">
                                <span className="text-sm text-primary-600 font-semibold uppercase tracking-wider">{post.category}</span>
                                <h3 className="text-2xl font-bold mt-2 mb-4 hover:text-primary-700">
                                    <Link href="#">{post.title}</Link>
                                </h3>
                                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                <div className="text-sm text-gray-400">{post.date}</div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
