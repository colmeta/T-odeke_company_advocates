import { Hero } from "@/components/sections/Hero";
import { PracticeAreas } from "@/components/sections/PracticeAreas";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <PracticeAreas />
      {/* Additional sections will go here */}
    </main>
  );
}
