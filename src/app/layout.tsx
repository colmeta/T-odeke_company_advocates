import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T. Odeke & Co. Advocates | Institutional & Commercial Legal Experts",
  description:
    "Kampala's premier law firm specializing in Institutional & Administrative Law and Commercial Litigation. Led by Timothy Ayeet Odeke, we represent Uganda's leading institutions with world-class precision. Located at Plot 15 Luwum Street, Maria's Galleria.",
  keywords: ["best institutional lawyer kampala", "commercial litigation uganda", "administrative law expert uganda", "university legal counsel kampala", "T. Odeke advocates", "Timothy Ayeet Odeke"],
  openGraph: {
    title: "T. Odeke & Co. Advocates | Institutional & Commercial Sovereignty",
    description:
      "Bridging the gap between institutional governance and high-stakes litigation. ULS Verified (2024-2025) and experts in Uganda High Court Commercial Division.",
    url: "https://todekeadvocates.com",
    siteName: "T. Odeke & Co. Advocates",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "T. Odeke & Co. Advocates Office",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T. Odeke & Co. Advocates",
    description: "Premier law firm for institutional and commercial legal solutions in Kampala.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_ID");
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-secondary selection:text-secondary-foreground`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
