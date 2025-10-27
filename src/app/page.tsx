import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/layout/hero";
import { ProblemSection } from "@/components/layout/problem-section";
import { SolutionSection } from "@/components/layout/solution-section";
import { HowItWorksSection } from "@/components/layout/how-it-works-section";
import { WhyLeafSection } from "@/components/layout/why-leaf-section";
import { PhilosophyCTASection } from "@/components/layout/philosophy-cta-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyLeafSection />
      <HowItWorksSection />
      <PhilosophyCTASection />
    </main>
  );
}
