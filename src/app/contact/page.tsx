import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark text-amber-50">
      <section className="px-6 md:px-10 pt-10 pb-2">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <a href="/" className="text-sm text-purple-200 hover:text-purple-100 transition-colors">
            ← Back to Home
          </a>
          <span className="font-black uppercase tracking-[0.16em] text-white text-sm sm:text-base" style={{ textShadow: '0 0 18px rgba(168,85,247,0.45)' }}>
            DrWhoTrades
          </span>
        </div>
      </section>
      <Contact />
    </main>
  )
}
