type StepProps = {
  number: string;
  title: string;
  body: string;
  chip?: string;
  className?: string;
};

const Step = ({ number, title, body, chip, className = "" }: StepProps) => (
  <div className={`relative ${className}`}>
    <div className="flex items-start gap-4 mb-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green/20 text-black flex items-center justify-center font-mono text-lg font-medium border border-brand-green/50 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
        {number}
      </div>
      <div className="pt-1">
        <h3 className="text-xl md:text-2xl font-medium text-black mb-2">
          {title}
        </h3>
        {chip && (
          <div className="inline-flex items-center rounded-lg border border-black/10 bg-white px-2 py-1 text-[10px] md:text-[11px] font-mono text-black/70">
            {chip}
          </div>
        )}
      </div>
    </div>
    <p className="text-[0.95rem] md:text-base text-black/70 leading-relaxed md:pl-16">
      {body}
    </p>
  </div>
);

export const HowItWorksSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-background">
      <div className="w-full max-w-[90rem] mx-auto">
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] font-medium text-black mb-10 md:mb-14 lg:mb-16">
          How it works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
          <Step
            number="1"
            title="Query any model"
            body="Send prompts via our API or dashboard."
            chip="POST /v1/query"
          />
          <Step
            number="2"
            title="Track impact instantly"
            body="See energy use, model size, and efficiency score."
            chip="0.32 Wh · 92% less than baseline"
            className="md:border-l md:border-black/10 md:pl-8"
          />
          <Step
            number="3"
            title="Act sustainably"
            body="Earn rewards (tree planting, badges, offset credits) for efficient use."
            chip="Milestone: 100g CO₂e avoided"
            className="md:border-l md:border-black/10 md:pl-8"
          />
        </div>
      </div>
    </section>
  );
};
