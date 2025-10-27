import Image from "next/image";

function TrustTile({
  tone = "default",
  icon,
  title,
  desc,
}: {
  tone?: "default" | "green";
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  const toneClasses =
    tone === "green"
      ? "bg-brand-green/5 border-brand-green/30"
      : "bg-background border-black/10";

  const iconBgClasses =
    tone === "green"
      ? "bg-brand-green text-background"
      : "bg-black text-background";

  return (
    <div
      className={`rounded-2xl border ${toneClasses} p-4 flex items-start gap-4`}
    >
      <div
        className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center ${iconBgClasses}`}
      >
        {icon}
      </div>

      <div className="flex flex-col">
        <div className="font-mono text-sm text-black">{title}</div>
        <div className="text-[11px] text-black/60 font-mono leading-relaxed">
          {desc}
        </div>
      </div>
    </div>
  );
}

export const WhyLeafSection = () => {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left column */}
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.1] font-medium text-black mb-6">
            Hosted where green isn't optional.
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-black/70 leading-relaxed max-w-xl">
            Powered by renewable-energy data centers in Europe. Transparent
            supply chains. Minimal waste. Every inference runs on infrastructure
            that's measurably lower impact — and provably yours to audit.
          </p>
        </div>

        {/* Right column */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TrustTile
              tone="default"
              icon={
                <Image
                  src="/leafCloud.png"
                  alt="Leaf.cloud"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              }
              title="Leaf.cloud"
              desc="EU-based, renewable-first hosting"
            />

            <TrustTile
              tone="green"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="100% Renewable"
              desc="Powered by clean European energy"
            />

            <TrustTile
              tone="default"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              }
              title="Open Source"
              desc="Auditable. Self-hostable."
            />

            <TrustTile
              tone="green"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="CO₂ Neutral"
              desc="Operational emissions offset"
            />
          </div>

          {/* Compliance kicker */}
          <p className="text-[11px] md:text-xs text-black/50 font-mono leading-relaxed mt-8 max-w-md">
            Running cleaner infrastructure isn't just ethical. For EU banks,
            insurers, and public sector, it's becoming policy.
          </p>
        </div>
      </div>
    </section>
  );
};
