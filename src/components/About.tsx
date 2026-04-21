const metrics = [
  { num: '305', label: 'Followers' },
  { num: '51', label: 'Posts' },
  { num: '100%', label: 'Dedicated' },
  { num: 'Daily', label: 'Setups' },
]

const points = [
  'Pro Signals aur Daily Market Setups',
  'Beginner se Advanced tak complete curriculum',
  'WhatsApp-based mentorship community',
  'Live trade analysis aur Q&A sessions',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-10 bg-dark-3">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Visual card */}
        <div className="bg-dark-4 border border-gold/10 rounded-lg p-10 text-center">
          <div className="font-serif text-6xl font-bold text-gold mb-2">FD</div>
          <div className="text-stone-500 text-xs tracking-widest mb-8">ForexDeals Karachi</div>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map(m => (
              <div key={m.label} className="bg-dark-3 border border-gold/10 rounded p-4 text-center">
                <div className="font-serif text-2xl font-bold text-gold">{m.num}</div>
                <div className="text-stone-500 text-xs mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="section-tag">About Us</span>
          <h2 className="font-serif text-3xl font-bold text-amber-50 mb-4">
            Training Future Forex Experts
          </h2>
          <p className="text-stone-400 text-sm leading-relaxed mb-3">
            ForexDeals Karachi ek professional forex training institute hai jo Pakistan ke
            traders ko world-class education deta hai. Hamara mission simple hai: Seekho, Trade Karo, Grow Karo.
          </p>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Hamari team experienced traders par mabni hai jo real markets mein trade karte hain
            aur apna knowledge students ke saath share karte hain.
          </p>
          <ul className="space-y-0 divide-y divide-gold/10">
            {points.map(p => (
              <li key={p} className="flex items-center gap-3 py-3 text-sm text-stone-400">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
