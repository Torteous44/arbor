import { Button } from "@/components/ui/button";

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="text-4xl md:text-5xl font-medium text-brand-green mb-2">
        {value}
      </div>
      <div className="text-[11px] md:text-xs text-black/60 font-mono">
        {label}
      </div>
    </div>
  );
}

function Equals() {
  return (
    <div className="text-xl md:text-2xl text-black/30 font-light mb-6">=</div>
  );
}

export const ProblemSection = () => {
  return (
    <section className="bg-[rgb(250,250,248)] px-4 md:px-8 lg:px-16 py-16 md:py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-[90rem] mx-auto">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <div className="">
            <h2 className="text-[1.75rem] sm:text-[2rem] md:text-[2.25rem] leading-[1.1] font-medium text-black mb-4">
              AI is powerful. But it's energy-hungry.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-black/70 leading-relaxed mb-8">
              Large AI models consume immense amounts of energy — from cloud
              inference to training runs spanning millions of GPU hours. But
              these impacts are invisible to the average user. We believe
              sustainability should be as transparent as accuracy or latency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline">LEARN MORE</Button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          <div className="bg-white border border-black/10 rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.04)] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center">
            {/* header chip and note now act like a title for this card */}
            <div className="mb-8 flex flex-col items-center">
              <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] font-mono text-black/60">
                <span className="rounded border border-black/10 bg-black/[0.03] px-2 py-1 uppercase tracking-wide">
                  impact
                </span>
                <span>per ~1K prompts</span>
              </div>
            </div>

            {/* stacked math, but tighter */}
            <div className="flex flex-col items-center text-center">
              <Stat value="1,000" label="AI prompts" />
              <Equals />
              <Stat value="1 kWh" label="energy consumed" />
              <Equals />
              <Stat value="5 km" label="driven by petrol car" />
            </div>

            {/* footer note sits INSIDE card so it feels like part of the data block */}
            <div className="w-full border-t border-black/10 mt-8 pt-4">
              <p className="text-[10px] font-mono text-black/40 text-center leading-relaxed">
                based on typical large-model inference
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
