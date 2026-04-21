export default function Signals() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-10 bg-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 8% 12%, rgba(249,115,22,0.2), transparent 45%), radial-gradient(circle at 85% 80%, rgba(194,65,12,0.18), transparent 42%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className="">
          <div className="relative group">
            <video
              controls
              preload="metadata"
              poster="/aralllaa.PNG"
              className="w-full h-[280px] sm:h-[360px] md:h-[380px] object-cover rounded-lg border border-white/10 bg-black"
            >
              <source src="/forexdeals-overview.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-black/75 border border-white/25 flex items-center justify-center group-hover:bg-black/85 transition-all">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </div>
        
        </div>

        <div>
          <span className="section-tag">About ForexDeals</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-amber-50 mb-4 md:mb-5 leading-tight">
            What is ForexDeals?
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-3 md:mb-4">
            ForexDeals Karachi is a results-focused trading platform where beginners and advanced students alike receive practical forex education. Our goal isn't just theory – it's building real market understanding, risk management, and disciplined trading habits.
          </p>
          <p className="text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed mb-5 md:mb-7">
            We focus on complete trader development: structured learning modules, live market practice, performance tracking, and long-term consistency. This means you won't just follow signals – you become a strong, independent decision-maker trader.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-3 sm:px-4 py-3 sm:py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Learning</p>
              <p className="text-white font-semibold text-sm mt-1">Step by Step</p>
            </div>
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-3 sm:px-4 py-3 sm:py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Execution</p>
              <p className="text-white font-semibold text-sm mt-1">Practical Workflow</p>
            </div>
            <div className="rounded-lg border border-orange-300/25 bg-orange-500/10 px-3 sm:px-4 py-3 sm:py-4">
              <p className="text-orange-200 text-xs uppercase tracking-widest">Outcome</p>
              <p className="text-white font-semibold text-sm mt-1">Consistent Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
