import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark text-amber-50">
      <section className="px-6 md:px-10 pt-10 pb-2">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
          <a href="/" className="text-sm text-orange-200 hover:text-orange-100 transition-colors">
            ← Back to Home
          </a>
          <img src="/fxarlogo.png" alt="ForexDeals" className="h-9 w-auto" />
        </div>
      </section>
      <Contact />
    </main>
  )
}
