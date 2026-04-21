const plans = [
  {
    name: 'Starter',
    price: 'PKR 5,000',
    period: 'one-time',
    description: 'Perfect for absolute beginners to build a strong foundation.',
    features: [
      'Forex basics + terminology',
      'Candlestick and chart reading',
      'Risk management essentials',
      '1 onboarding guidance call',
    ],
    featured: false,
  },
  {
    name: 'Pro Trader',
    price: 'PKR 15,000',
    period: 'one-time',
    description: 'For serious learners seeking balanced, comprehensive education.',
    features: [
      'Advanced technical analysis',
      'Live market breakdown sessions',
      'Daily setup alerts',
      'WhatsApp mentorship community',
      'Extended support access',
    ],
    featured: true,
  },
  {
    name: 'VIP Mentorship',
    price: 'PKR 30,000',
    period: 'per month',
    description: 'Personalized roadmap with close founder-level mentorship.',
    features: [
      'Weekly 1-on-1 strategy calls',
      'Custom trade improvement plan',
      'Portfolio and execution review',
      'Priority support channel',
    ],
    featured: false,
  },
]

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-dark text-amber-50">
      <section className="relative overflow-hidden px-6 md:px-10 py-16 md:py-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 8% 12%, rgba(249,115,22,0.24), transparent 44%), radial-gradient(circle at 90% 85%, rgba(194,65,12,0.2), transparent 40%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-10">
            <a
              href="/"
              className="text-sm text-orange-200 hover:text-orange-100 transition-colors"
            >
              ← Back to Home
            </a>
            <a
              href="#pricing-cards"
              className="px-6 py-2.5 rounded-full bg-orange-600 text-white text-xs tracking-widest uppercase hover:bg-orange-500 hover:scale-110 shadow-lg hover:shadow-xl transition-all active:scale-95 font-semibold"
            >
              Explore Plans
            </a>
          </div>

          <span className="section-tag">Pricing</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">Choose Your Trading Path</h1>
          <p className="text-stone-300 max-w-2xl text-sm md:text-base leading-relaxed mb-10">
            Transparent packages for every level. Whether you're starting with basics or seeking advanced mentorship, you'll find a clear plan structure and support model.
          </p>

          <div id="pricing-cards" className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={
                  plan.featured
                    ? 'rounded-xl border border-orange-300/40 bg-[#26150f]/90 p-6 shadow-[0_20px_60px_rgba(124,45,18,0.4)]'
                    : 'rounded-xl border border-white/10 bg-dark-3/90 p-6'
                }
              >
                {plan.featured && (
                  <span className="inline-block mb-4 text-[10px] tracking-widest uppercase bg-orange-500/20 text-orange-200 border border-orange-300/30 px-3 py-1 rounded-sm">
                    Most Popular
                  </span>
                )}

                <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
                <p className="text-stone-400 text-sm mb-5">{plan.description}</p>

                <div className="mb-5">
                  <span className="font-serif text-3xl text-gold font-bold">{plan.price}</span>
                  <span className="text-stone-500 text-xs ml-2">/ {plan.period}</span>
                </div>

                <ul className="space-y-2 mb-7">
                  {plan.features.map((feature) => (
                    <li key={feature} className="text-sm text-stone-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={
                    plan.featured
                      ? 'block text-center rounded-full py-3 bg-orange-600 hover:bg-orange-500 hover:scale-105 text-white text-sm font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95'
                      : 'block text-center rounded-full py-3 border border-gold/40 text-amber-100 hover:bg-gold/10 hover:border-gold/70 hover:scale-105 text-sm font-semibold transition-all active:scale-95'
                  }
                >
                  Get Started
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
