export const SolutionSection = () => {
  return (
    <section className="relative w-full px-4 md:px-0  lg:px-0 py-16 md:py-24 lg:py-32 bg-background max-w-[90rem] mx-auto">
      <div className="w-full">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black mb-8 md:mb-12">
          See your AI footprint. Then shrink it.
        </h2>

        {/* Body Copy */}
        <p className="text-base md:text-lg lg:text-xl text-black/70 leading-relaxed mb-12 md:mb-16 lg:mb-20 max-w-4xl">
          Our platform displays real-time environmental metrics for every
          request — showing compute cost, energy source mix, and carbon
          equivalent. Compare models, track improvements, and choose greener
          options without sacrificing performance.
        </p>

        {/* Platform Mockup */}
        <div className="w-full bg-background border border-black/10 rounded-[30px] md:rounded-[40px] p-6 md:p-10 lg:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Chat History */}
            <div className="flex flex-col h-full">
              <div className="text-xs font-mono text-black/40 uppercase tracking-wide mb-4">
                Conversation
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 flex-1 overflow-y-auto mb-4">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-black text-background px-4 py-3 rounded-[20px] rounded-tr-sm max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      Explain how photosynthesis works
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-black/5 text-black px-4 py-3 rounded-[20px] rounded-tl-sm max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      Photosynthesis is the process by which plants convert
                      light energy into chemical energy. It occurs in
                      chloroplasts and involves capturing sunlight to transform
                      carbon dioxide and water into glucose and oxygen.
                    </p>
                  </div>
                </div>

                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-black text-background px-4 py-3 rounded-[20px] rounded-tr-sm max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      What are the main stages?
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-black/5 text-black px-4 py-3 rounded-[20px] rounded-tl-sm max-w-[85%]">
                    <p className="text-sm leading-relaxed">
                      The two main stages are the light-dependent reactions,
                      which occur in the thylakoid membranes and produce ATP and
                      NADPH, and the Calvin cycle...
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a follow-up..."
                  className="w-full px-4 py-3 pr-12 bg-black/5 text-black placeholder:text-black/40 focus:outline-none rounded-[20px] border border-black/10 text-sm"
                  disabled
                />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-brand-green/20 border border-brand-green/50 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right: Metrics */}
            <div className="space-y-6">
              <div className="text-xs font-mono text-black/40 uppercase tracking-wide mb-4">
                Environmental Impact
              </div>

              {/* CO2 Metric */}
              <div className="bg-brand-green/5 border border-brand-green/20 rounded-[24px] p-6">
                <div className="text-sm font-mono text-black/60 mb-2">
                  Carbon Footprint
                </div>
                <div className="text-4xl font-medium text-brand-green mb-1">
                  0.42g
                </div>
                <div className="text-xs text-black/50">CO₂ equivalent</div>
              </div>

              {/* Energy Metric */}
              <div className="bg-black/5 border border-black/10 rounded-[24px] p-6">
                <div className="text-sm font-mono text-black/60 mb-2">
                  Energy Used
                </div>
                <div className="text-4xl font-medium text-black mb-1">
                  1.2 Wh
                </div>
                <div className="text-xs text-black/50">
                  Total compute energy
                </div>
              </div>

              {/* Energy Source Mix */}
              <div className="border border-black/10 rounded-[24px] p-6">
                <div className="text-sm font-mono text-black/60 mb-4">
                  Energy Source Mix
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-black/5 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-brand-green h-full rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="text-xs font-mono text-black/60 w-16 text-right">
                      65% renewable
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-black/5 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-black/30 h-full rounded-full"
                        style={{ width: "35%" }}
                      ></div>
                    </div>
                    <div className="text-xs font-mono text-black/60 w-16 text-right">
                      35% fossil
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
