export default function MarketShowcase() {
  const brokers = ['MetaTrade', 'PipZone', 'NovaFX', 'PrimeCharts']

  return (
    <section className="relative bg-dark overflow-hidden px-6 md:px-10 pt-20 pb-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 12%, rgba(239,68,10,0.35), transparent 40%), radial-gradient(circle at 50% 18%, rgba(153,27,27,0.22), transparent 60%)',
        }}
      />

      <div className="absolute inset-x-0 top-8 flex justify-between max-w-6xl mx-auto px-2 md:px-6 pointer-events-none">
        <span className="text-[11px] text-stone-300 border border-white/15 bg-white/5 rounded-full px-3 py-1">Global Signals</span>
        <span className="text-[11px] text-stone-300 border border-white/15 bg-white/5 rounded-full px-3 py-1">Real-Time Alerts</span>
      </div>

      <div className="absolute inset-x-0 top-20 flex justify-between max-w-5xl mx-auto px-4 md:px-16 pointer-events-none">
        <span className="text-[11px] text-stone-300 border border-white/15 bg-white/5 rounded-full px-3 py-1">Smart Entry</span>
        <span className="text-[11px] text-stone-300 border border-white/15 bg-white/5 rounded-full px-3 py-1">Risk Shield</span>
      </div>

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[850px] h-[420px] pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-purple-600/40" />
        <div className="absolute inset-[9%] rounded-full border border-purple-500/30" />
        <div className="absolute inset-[18%] rounded-full border border-purple-400/25" />
        <div className="absolute inset-[27%] rounded-full border border-purple-300/20" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center pt-4">
        <h2 className="text-white font-semibold leading-tight text-4xl md:text-6xl">
          Trade The Market
          <br />
          With More Confidence
        </h2>
        <p className="text-stone-300 text-sm md:text-base mt-3 max-w-2xl mx-auto">
          DrWhoTrades tools aapko analysis, execution aur risk discipline ko ek focused workflow me lane me help karte hain.
        </p>

        <a
          href="/pricing"
          className="inline-flex items-center gap-2 mt-6 rounded-full bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 text-sm font-semibold transition-colors"
        >
          Buy Course
          <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center text-xs">+</span>
        </a>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left">
          <article className="rounded-2xl border border-white/10 bg-[#17191f]/95 p-5">
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-3">Market Watch</p>
            <div className="space-y-3">
              {[
                { pair: 'EUR/USD', val: '1.0852', move: '+0.23%' },
                { pair: 'GBP/USD', val: '1.2701', move: '+0.12%' },
                { pair: 'XAU/USD', val: '2322.8', move: '+0.48%' },
              ].map((row) => (
                <div key={row.pair} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white font-medium">{row.pair}</p>
                    <p className="text-[11px] text-stone-400 mt-0.5">Live Feed</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-stone-200">{row.val}</p>
                    <p className="text-[11px] text-purple-300">{row.move}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#17191f]/95 p-5">
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-3">Equity Panel</p>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="text-3xl font-semibold text-white mb-1">$15,478</div>
              <p className="text-xs text-stone-400 mb-4">Total Balance</p>
              <svg viewBox="0 0 380 150" className="w-full h-24">
                <path
                  d="M0 120 C34 104, 58 125, 84 88 C108 53, 138 108, 168 92 C192 80, 222 32, 252 68 C276 98, 308 45, 338 59 C355 65, 368 52, 380 48"
                  fill="none"
                  stroke="#a855f7"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className="mt-2 flex justify-between text-[11px] uppercase tracking-widest text-stone-500">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-[#17191f]/95 p-5">
            <p className="text-stone-400 text-xs uppercase tracking-widest mb-3">Execution Quality</p>
            <div className="space-y-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between">
                <p className="text-sm text-stone-300">Order Speed</p>
                <p className="text-sm text-white font-semibold">Ultra Fast</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between">
                <p className="text-sm text-stone-300">Slippage Guard</p>
                <p className="text-sm text-white font-semibold">Active</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center justify-between">
                <p className="text-sm text-stone-300">Risk Limit</p>
                <p className="text-sm text-white font-semibold">Custom</p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-stone-500 mb-4">Trusted By Active Learners</p>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8 text-stone-400 text-sm">
            {brokers.map((b) => (
              <span key={b} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
