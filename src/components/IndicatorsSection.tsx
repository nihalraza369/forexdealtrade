const candles = [
  { x: 20, open: 88, close: 102, high: 112, low: 76 },
  { x: 52, open: 102, close: 94, high: 110, low: 84 },
  { x: 84, open: 94, close: 106, high: 114, low: 90 },
  { x: 116, open: 106, close: 98, high: 118, low: 90 },
  { x: 148, open: 98, close: 92, high: 104, low: 80 },
  { x: 180, open: 92, close: 105, high: 112, low: 86 },
  { x: 212, open: 105, close: 112, high: 120, low: 96 },
  { x: 244, open: 112, close: 96, high: 118, low: 88 },
  { x: 276, open: 96, close: 90, high: 102, low: 80 },
  { x: 308, open: 90, close: 100, high: 108, low: 84 },
  { x: 340, open: 100, close: 108, high: 116, low: 92 },
  { x: 372, open: 108, close: 102, high: 114, low: 96 },
  { x: 404, open: 102, close: 116, high: 124, low: 100 },
]

export default function IndicatorsSection() {
  return (
    <section id="indicators" className="relative bg-dark overflow-hidden px-6 md:px-10 py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(245,158,11,0.2), transparent 45%), radial-gradient(circle at 85% 90%, rgba(120,53,15,0.18), transparent 42%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-6xl leading-tight font-semibold max-w-4xl mx-auto">
          Elevate Your <span className="text-amber-400">Trading</span> with
          <br />
          Advanced Market Tools
        </h2>
        <p className="text-stone-300 text-sm md:text-base max-w-3xl mx-auto mt-4 leading-relaxed">
          ForexDeals indicator suite highlights market momentum, entry zones, and risk levels clearly. This helps you make confident, structured decisions with precision.
        </p>

        <div className="mt-7 flex items-center justify-center gap-3">
          <a
            href="/pricing"
            className="px-8 py-3 rounded-full bg-amber-400 text-[#1a1308] text-sm font-semibold hover:bg-amber-300 hover:scale-110 shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Early Access
          </a>
          <a
            href="/contact"
            className="px-8 py-3 rounded-full bg-white/10 border border-white/15 text-white text-sm font-semibold hover:bg-white/20 hover:border-white/30 hover:scale-110 shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            Join Now
          </a>
        </div>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <div className="absolute inset-x-10 -top-4 h-full rounded-2xl border border-amber-400/20 bg-[#140f0b]/40 -rotate-[2deg]" />
          <div className="absolute inset-x-8 -top-2 h-full rounded-2xl border border-amber-400/30 bg-[#140f0b]/50 -rotate-[1deg]" />

          <div className="relative rounded-2xl border border-amber-400/40 bg-[#0d0b08]/95 px-5 md:px-8 py-6 text-left shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <p className="text-amber-100 text-sm font-medium">CFDs On Gold (US$/Oz.)</p>
              <div className="flex items-center gap-4 text-[11px] tracking-widest uppercase">
                <span className="text-emerald-300">Open +0.31%</span>
                <span className="text-emerald-300">High +0.77%</span>
                <span className="text-rose-300">Low -0.25%</span>
              </div>
            </div>

            <div className="relative rounded-xl border border-white/10 bg-black/25 p-4 overflow-hidden">
              <div
                className="absolute inset-0 opacity-35"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '60px 40px',
                }}
              />

              <svg viewBox="0 0 440 180" className="relative w-full h-[220px] md:h-[260px]">
                <rect x="230" y="40" width="120" height="95" fill="rgba(234,179,8,0.18)" />
                <rect x="228" y="82" width="110" height="34" fill="rgba(255,255,255,0.12)" />
                <rect x="40" y="128" width="250" height="8" fill="rgba(34,197,94,0.65)" />
                <rect x="290" y="128" width="80" height="8" fill="rgba(248,113,113,0.72)" />

                {candles.map((c) => {
                  const isBull = c.close > c.open
                  const bodyY = Math.min(c.open, c.close)
                  const bodyH = Math.max(6, Math.abs(c.open - c.close))
                  return (
                    <g key={c.x}>
                      <line
                        x1={c.x}
                        y1={c.high}
                        x2={c.x}
                        y2={c.low}
                        stroke={isBull ? '#4ade80' : '#f87171'}
                        strokeWidth="2"
                      />
                      <rect
                        x={c.x - 6}
                        y={bodyY}
                        width="12"
                        height={bodyH}
                        fill={isBull ? '#22c55e' : '#ef4444'}
                        rx="2"
                      />
                    </g>
                  )
                })}

                <line x1="0" y1="150" x2="440" y2="95" stroke="rgba(234,179,8,0.42)" strokeWidth="2" />
              </svg>

              <div className="absolute left-4 bottom-6 rounded-lg border border-amber-300/35 bg-amber-400/90 text-[#1e160a] text-xs px-4 py-3 font-medium max-w-[280px]">
                Indicator provides smart confirmation for clearer entries and stop-loss placements.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
