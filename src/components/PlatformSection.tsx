export default function PlatformSection() {
  return (
    <section id="platform" className="relative py-24 px-6 md:px-10 bg-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 98% 10%, rgba(255,106,32,0.28), transparent 35%), radial-gradient(circle at 7% 90%, rgba(111,26,0,0.3), transparent 35%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-tag">Powerful Features</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
            For Smarter Forex Trading
          </h2>
          <p className="text-stone-400 text-sm mt-3">
            AI-optimized tools, risk controls aur real-time workflow ke saath better trading decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-5 rounded-3xl border border-white/10 bg-[#101113]/95 p-6 md:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.45)] mb-5">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-[2.1rem] leading-tight font-semibold text-white mb-3">
                Tools For Better
                <br />
                Forex Trading
              </h3>
              <p className="text-sm text-stone-400 max-w-md leading-relaxed">
                Smart workflow jo market analysis, risk planning aur trade execution ko ek hi place par organize karta hai.
              </p>
            </div>

            <a
              href="/pricing"
              className="inline-flex w-fit items-center gap-2 mt-6 rounded-full bg-orange-500 hover:bg-orange-400 text-white px-5 py-2.5 text-sm font-semibold transition-colors"
            >
              Buy Course
              <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center text-xs">
  &rarr;
</span>
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b1d24] to-[#15171d] p-4 md:p-5 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 20% 0%, rgba(255,118,72,0.24), transparent 50%)',
              }}
            />
            <svg viewBox="0 0 520 220" className="relative w-full h-[180px] md:h-[190px]">
              <defs>
                <linearGradient id="lineGlowPlatform" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
              <path
                d="M 0 150 C 42 38, 90 210, 145 145 C 190 95, 235 54, 290 84 C 345 112, 380 46, 430 62 C 462 72, 494 50, 520 54"
                fill="none"
                stroke="url(#lineGlowPlatform)"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
            <div className="relative mt-1 flex items-center justify-between text-[11px] tracking-widest uppercase text-stone-500">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
            <div className="relative mt-3 text-right">
              <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[11px] text-stone-300 bg-white/5">
                Equity Growth View
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <article className="rounded-3xl border border-white/10 bg-[#111317]/95 p-5 md:p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-orange-300 mb-4">Top Traders</p>
            <div className="space-y-3">
              {[
                { name: 'Ali Raza', pair: 'XAU/USD', profit: '+$126.40' },
                { name: 'Hassan Khan', pair: 'GBP/USD', profit: '+$84.20' },
                { name: 'M. Faisal', pair: 'EUR/USD', profit: '+$61.10' },
                { name: 'Daniyal', pair: 'USD/JPY', profit: '+$97.85' },
              ].map((row) => (
                <div key={row.name} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white font-medium">{row.name}</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">{row.pair}</p>
                  </div>
                  <p className="text-sm text-orange-300 font-semibold">{row.profit}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-[#111317]/95 p-5 md:p-6 relative overflow-hidden">
            <div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.32) 0%, rgba(249,115,22,0) 70%)' }}
            />
            <p className="relative text-xs tracking-[0.2em] uppercase text-orange-300 mb-6">Secure Execution</p>
            <div className="relative flex items-center justify-center py-6">
              <div className="w-20 h-20 rounded-full bg-orange-500/30 border border-orange-300/50 flex items-center justify-center text-2xl text-orange-100">
                OK
              </div>
            </div>
            <div className="relative grid grid-cols-2 gap-3 mt-4">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-stone-400 text-xs">Latency</p>
                <p className="text-white text-sm font-semibold mt-1">Low</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                <p className="text-stone-400 text-xs">Risk Control</p>
                <p className="text-white text-sm font-semibold mt-1">Enabled</p>
              </div>
            </div>
            <a
              href="/pricing"
              className="relative mt-6 inline-block text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors"
            >
              Buy Course &rarr;
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
