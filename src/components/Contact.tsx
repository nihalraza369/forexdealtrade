'use client'

import { useState } from 'react'

const contactMethods = [
  { icon: 'WA', label: 'WhatsApp', value: '+92 300 0000000', href: 'https://wa.me/923000000000' },
  { icon: 'IG', label: 'Instagram', value: '@DrWhoTrades', href: 'https://instagram.com/DrWhoTrades' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp redirect with prefilled message
    const msg = encodeURIComponent(
      `Hello! My name is ${form.name}.\nPhone: ${form.phone}\n\n${form.message}`
    )
    window.open(`https://wa.me/923000000000?text=${msg}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-24 px-10 bg-dark">
      <div className="max-w-5xl mx-auto">
        <span className="section-tag">Get In Touch</span>
        <h2 className="section-title">Start Your Trading Journey</h2>
        <p className="section-sub">
          Any questions? We're here to help. Contact us via WhatsApp or the form below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact info */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-purple-100 mb-3">Get In Touch</h3>
            <p className="text-stone-400 text-sm leading-relaxed mb-8">
              Ask about our courses, signals, or mentorship. Our team responds quickly.
            </p>
            <div className="flex flex-col gap-3">
              {contactMethods.map(c => {
                const Inner = (
                  <div className="flex items-center gap-4 bg-dark-3 border border-gold/10
                    rounded-lg px-4 py-3.5 hover:border-purple-500/70 transition-colors">
                    <div className="w-9 h-9 bg-gold/10 rounded flex items-center justify-center text-[11px] font-semibold tracking-wide text-purple-200 flex-shrink-0">
                      {c.icon}
                    </div>
                    <div>
                      <div className="text-stone-500 text-xs tracking-wide">{c.label}</div>
                      <div className="text-purple-100 text-sm font-medium">{c.value}</div>
                    </div>
                  </div>
                )
                return c.href ? (
                  <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer">
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label}>{Inner}</div>
                )
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}
            className="bg-dark-3 border border-gold/10 rounded-lg p-7 space-y-4">
            <div>
              <label className="block text-stone-500 text-xs mb-1.5 tracking-wide">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ahmed Khan"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-dark-4 border border-gold/10 rounded-lg px-3.5 py-2.5
                  text-purple-100 text-sm outline-none focus:border-purple-500/70
                  placeholder:text-stone-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-stone-500 text-xs mb-1.5 tracking-wide">WhatsApp Number</label>
              <input
                type="text"
                required
                placeholder="+92 3XX XXXXXXX"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-dark-4 border border-gold/10 rounded-lg px-3.5 py-2.5
                  text-purple-100 text-sm outline-none focus:border-purple-500/70
                  placeholder:text-stone-600 transition-colors"
              />
            </div>
            <div>
              <label className="block text-stone-500 text-xs mb-1.5 tracking-wide">What would you like to know?</label>
              <textarea
                required
                rows={4}
                placeholder="Course inquiry, signal subscription, or any other question..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-dark-4 border border-gold/10 rounded-lg px-3.5 py-2.5
                  text-purple-100 text-sm outline-none focus:border-purple-500/70
                  placeholder:text-stone-600 transition-colors resize-none"
              />
            </div>
            <button type="submit"
              className="w-full bg-gold text-dark font-medium py-3 rounded-full text-sm
                hover:bg-gold-light hover:scale-105 active:scale-100 transition-all shadow-lg hover:shadow-xl">
              {sent ? 'Sent via WhatsApp! ✓' : 'Send Message via WhatsApp'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
