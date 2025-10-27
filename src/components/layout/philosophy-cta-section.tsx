import { Button } from "@/components/ui/button";

export const PhilosophyCTASection = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#fafaf8] via-[#f7fbf8] to-[#f5f8f5] overflow-hidden">
      {/* subtle radial glow behind headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px] opacity-[0.25]"
      />

      <div className="relative w-full flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Headline */}
        <h2 className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] leading-[1.1] font-medium text-black mb-6 md:mb-8">
          AI should reason like a human — and care like one.
        </h2>

        {/* Subtext */}
        <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mb-10 md:mb-6">
          Join the movement toward sustainable intelligence.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
          <Button
            variant="solid"
            className="text-sm md:text-sm px-6 py-3 md:px-8 md:py-3 bg-black text-white hover:bg-black/90 rounded-full"
          >
            Start using sustainable AI
          </Button>

          <Button
            variant="outline"
            className="text-sm md:text-sm px-6 py-3 md:px-8 md:py-3 rounded-full border border-black/20 text-black  font-mono"
          >
            Read the manifesto
          </Button>
        </div>

        {/* Proof / reassurance line */}
        <p className="mt-8 text-[11px] md:text-xs text-black/50 font-mono leading-relaxed">
          Fully open. EU-hosted. Powered by renewables.
        </p>

        {/* Ethical footer line */}
        <div className="w-full max-w-md border-t border-black/10 mt-12 pt-6">
          <p className="text-[11px] md:text-xs font-mono text-black/40 leading-relaxed">
            Every prompt is a choice. Choose wisely.
          </p>
        </div>
      </div>
    </section>
  );
};
