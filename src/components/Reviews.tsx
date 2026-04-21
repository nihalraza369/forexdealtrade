const reviews = [
  {
    name: 'Ahmed Raza',
    role: 'Gold Trader',
    text: 'After understanding risk management, my consistency improved significantly. Setup explanations are always clear and practical.',
    gain: '+18% in 2 months',
  },
  {
    name: 'Hassan Ali',
    role: 'Beginner Student',
    text: 'I was a complete beginner, but the step-by-step modules and live examples built my confidence quickly.',
    gain: 'First funded challenge passed',
  },
  {
    name: 'Sana Khan',
    role: 'Part-time Trader',
    text: 'Daily market breakdowns are concise. Even with a busy schedule, I can filter quality trades.',
    gain: '+42R quarter performance',
  },
  {
    name: 'Usman Tariq',
    role: 'Intraday Trader',
    text: 'Indicator confirmation and entry discipline helped me eliminate overtrading almost completely.',
    gain: 'Win rate 48% to 63%',
  },
  {
    name: 'Areeba Saeed',
    role: 'Forex Learner',
    text: 'Founder feedback is practical and actionable, not just motivational. Real corrections that improve my trading.',
    gain: 'Drawdown reduced by 35%',
  },
  {
    name: 'Bilal Zafar',
    role: 'Swing Trader',
    text: 'Market structure and risk-reward framework made my entries disciplined and selective.',
    gain: '+11% monthly average',
  },
]

export default function Reviews() {
  const loop = [...reviews, ...reviews]

  return (
    <section id="reviews" className="relative py-24 px-6 md:px-10 bg-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 10% 18%, rgba(249,115,22,0.2), transparent 40%), radial-gradient(circle at 85% 88%, rgba(194,65,12,0.16), transparent 38%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="section-tag">Student Reviews</span>
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight">
            Traders Love The
            <span className="text-orange-400"> ForexDeals Experience</span>
          </h2>
          <p className="text-stone-300 text-sm md:text-base mt-3 max-w-3xl mx-auto">
            Real learner feedback in a continuous loop. See what our community is achieving.
          </p>
        </div>

        <div className="space-y-4 overflow-hidden">
          <div className="marquee-track">
            {loop.map((item, idx) => (
              <article
                key={`${item.name}-${idx}`}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl border border-white/10 bg-[#161210]/90 p-4 sm:p-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white text-base font-semibold">{item.name}</h3>
                    <p className="text-orange-200 text-xs tracking-wide mt-0.5">{item.role}</p>
                  </div>
                  <img src="/fxarlogo.png" alt="ForexDeals" className="h-7 w-auto opacity-85" />
                </div>
                <p className="text-stone-300 text-sm leading-relaxed min-h-[74px]">{item.text}</p>
                <div className="mt-4 rounded-lg border border-orange-300/30 bg-orange-500/10 px-3 py-2 inline-block">
                  <span className="text-orange-200 text-xs tracking-wide">{item.gain}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="marquee-track reverse">
            {loop.map((item, idx) => (
              <article
                key={`rev-${item.name}-${idx}`}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl border border-white/10 bg-[#17110e]/90 p-4 sm:p-5 shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-white text-base font-semibold">{item.name}</h3>
                    <p className="text-orange-200 text-xs tracking-wide mt-0.5">{item.role}</p>
                  </div>
                  <img src="/fxarlogo.png" alt="ForexDeals" className="h-7 w-auto opacity-85" />
                </div>
                <p className="text-stone-300 text-sm leading-relaxed min-h-[74px]">{item.text}</p>
                <div className="mt-4 rounded-lg border border-orange-300/30 bg-orange-500/10 px-3 py-2 inline-block">
                  <span className="text-orange-200 text-xs tracking-wide">{item.gain}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: moveLeft 42s linear infinite;
        }
        .marquee-track.reverse {
          animation-name: moveRight;
          animation-duration: 48s;
        }
        @keyframes moveLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes moveRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
