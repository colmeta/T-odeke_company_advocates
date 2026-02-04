import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { Testimonials } from "@/components/sections/Testimonials";
import { CaseResults } from "@/components/sections/CaseResults";
import { ContactSection } from "@/components/sections/ContactSection";
import { LeadMagnetModal } from "@/components/sections/LeadMagnetModal";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PracticeAreas />
      <CaseResults />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <LeadMagnetModal />
      <WhatsAppButton />
    </main>
  );
}
