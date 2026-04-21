export default function FounderSection() {
  return (
    <section id="founder" className="relative py-24 px-6 md:px-10 bg-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 12% 18%, rgba(249,115,22,0.2), transparent 42%), radial-gradient(circle at 88% 75%, rgba(194,65,12,0.17), transparent 40%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-center">
        <article className="">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src="/arfounder.PNG"
              alt="Founder ForexDeals Karachi"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <img src="/fxarlogo.png" alt="ForexDeals Logo" className="h-10 w-auto" />
            <div>
              <p className="text-orange-200 text-xs tracking-[0.18em] uppercase">Founder</p>
              <p className="text-white text-base font-semibold">ForexDeals Karachi</p>
            </div>
          </div>
        </article>

        <div>
          <span className="section-tag">Meet The Founder</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 mb-4 leading-tight">
            Real Market Experience,
            <br />
            Real Trader Mentorship
          </h2>

          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-4">
            ForexDeals founder's core focus is ensuring every student understands the market before trading. This approach stands on three pillars: discipline, risk control, and psychology training.
          </p>
          <p className="text-stone-300 text-sm md:text-base leading-relaxed mb-8">
            Through daily analysis sessions, practical examples, and performance reviews, students are guided step-by-step. The mentorship model's goal is building long-term consistency so traders make stable decisions in every market condition.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-4 py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Mentorship</p>
              <p className="text-white font-semibold mt-1">Hands-On Guidance</p>
            </div>
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-4 py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Approach</p>
              <p className="text-white font-semibold mt-1">Risk First</p>
            </div>
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-4 py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Result</p>
              <p className="text-white font-semibold mt-1">Better Decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
