import { Button } from "@/components/ui/button";

export const PhilosophyCTASection = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-16 py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-[#fefefe] via-[#f7fbf9] to-[#f5f8f5]">
      <div className="max-w-[90rem] mx-auto relative">
        {/* soft radial highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-12 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[120px] opacity-[0.22]"
        />

        {/* content panel */}
        <div className="relative max-w-4xl mx-auto   px-6 py-12 md:px-10 md:py-14 text-center flex flex-col items-center">
          {/* Headline */}
          <h2 className="text-[1.5rem] md:text-[1.5rem] lg:text-[2rem] leading-[1.1] font-medium text-black mb-4 md:mb-6">
            AI should reason like a human — and care like one.
          </h2>

          {/* Subtext */}
          <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-2xl mb-8 md:mb-8">
            Join the movement toward sustainable intelligence.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-5 mb-6 md:mb-8">
            <Button
              variant="solid"
              className="text-sm md:text-xs px-5 py-3 md:px-6 md:py-3 bg-black text-white hover:bg-black/90 rounded-full"
            >
              START USING SUSTAINABLE AI
            </Button>

            <Button
              variant="outline"
              className="text-sm md:text-xs px-5 py-3 md:px-6 md:py-3 rounded-full border border-black/20 text-black/80 font-mono"
            >
              READ THE MANIFESTO
            </Button>
          </div>

          {/* Proof / reassurance line */}
          <div className="inline-flex items-center gap-2 text-[11px] md:text-xs text-black/50 font-mono leading-relaxed mb-8 md:mb-10">
            <span className="rounded-full border border-black/10 bg-white/70 px-2 py-[2px] text-[10px] md:text-[11px] text-black/70">
              EU-hosted
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-2 py-[2px] text-[10px] md:text-[11px] text-black/70">
              open source
            </span>
            <span className="rounded-full border border-black/10 bg-white/70 px-2 py-[2px] text-[10px] md:text-[11px] text-black/70">
              renewable-backed
            </span>
          </div>

          {/* Ethical footer line */}
          <div className="w-full ">
            <p className="text-[11px] md:text-xs font-mono text-black/40 leading-relaxed">
              Every prompt is a choice. Choose wisely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
