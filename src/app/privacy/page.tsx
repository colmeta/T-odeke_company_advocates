export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-lg">
                    <p className="mb-4">Last Updated: February 2026</p>
                    <p className="mb-6">
                        At T. Odeke & Co. Advocates, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or engage our legal services.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
                    <p className="mb-4">
                        We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and case details when you contact us through our website forms or via email.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Provide legal advice and representation.</li>
                        <li>Respond to your inquiries and schedule consultations.</li>
                        <li>Send important legal updates or newsletters (only if you subscribe).</li>
                        <li>Improve our website and client services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Attorney-Client Privilege</h2>
                    <p className="mb-6">
                        Please note that submitting information via our website forms does not automatically create an attorney-client relationship. However, we treat all communications with strict confidentiality in accordance with Uganda Law Society regulations.
                    </p>

                    <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at info@todekeadvocates.com.
                    </p>
                </div>
            </div>
        </div>
    );
}
