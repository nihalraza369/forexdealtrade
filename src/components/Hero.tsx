'use client'

import { useState } from 'react'

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hello! My name is ${form.name}.\nContact: ${form.phone}\n\nI want to enroll in the DrWhoTrades course.`
    )
    window.open(`https://wa.me/923000000000?text=${msg}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section
      id="home"
      className="relative min-h-[88vh] md:min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* FULL BACKGROUND IMAGE - HIDDEN ON MOBILE */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        style={{
          backgroundImage: 'url(/gemini.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Mobile Dark Background */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background: '#0A0A0A',
        }}
      />

      {/* Top fade */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(12,6,4,0.22) 0%, transparent 32%)',
        }}
      />

      {/* Bottom black shadow */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-56 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.7) 38%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* CONTENT — left side */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-16 pt-20 sm:pt-24 pb-8 sm:pb-10 md:pt-20 md:pb-8">
        <div className="max-w-lg">

          {/* Brand */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-7">
            <div>
              <div
                className="font-black uppercase leading-none"
                style={{
                  fontSize: 'clamp(24px, 5vw, 30px)',
                  color: '#fff',
                  textShadow: '0 0 40px rgba(168,85,247,0.45)',
                  letterSpacing: '-0.01em',
                }}
              >
                DRWHO<span style={{ color: '#a855f7' }}>TRADES</span>
              </div>
            </div>
          </div>

          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 mb-5 sm:mb-7 px-3 sm:px-4 py-2 rounded text-[10px] sm:text-xs font-semibold"
            style={{
              background: 'rgba(207, 0, 10, 0.4)',
              color: '#ffffff',
              border: '1px solid rgba(218, 0, 0, 0.35)',
              letterSpacing: '0.08em',
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-red-400"
              style={{ animation: 'pulse 1.5s infinite' }}
            />
            <span className="hidden sm:inline">ONLINE &nbsp;•&nbsp; FREE SEMINAR &nbsp;•&nbsp; LIVE</span>
            <span className="sm:hidden">LIVE SESSION</span>
          </div>

          {/* Headline */}
          <h1
            className="font-black uppercase leading-none mb-5"
            style={{
              fontSize: 'clamp(34px, 4.2vw, 54px)',
              color: '#ffffff',
              textShadow: '0 2px 30px rgba(0,0,0,0.8)',
              letterSpacing: '-0.02em',
            }}
          >
            FOREX TRADING<br />
            <span style={{ color: '#a855f7' }}>LEARN</span><br />
            THE EASY WAY
          </h1>

          {/* Subtitle */}
          <p className="text-purple-100 text-base mb-1 leading-relaxed">
            And build your path to <strong className="text-white">financial freedom</strong>
          </p>
          <p className="text-purple-200 text-sm mb-8">
            Enter your name and WhatsApp number to start:
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              required
              placeholder="ENTER YOUR NAME"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 text-sm font-medium outline-none placeholder:text-purple-200/50 transition-all"
              style={{
                background: 'rgba(34,14,8,0.62)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '12px',
                color: '#fff',
                letterSpacing: '0.08em',
              }}
            />
            <input
              type="text"
              required
              placeholder="ENTER YOUR WHATSAPP NUMBER"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-4 text-sm font-medium outline-none placeholder:text-purple-200/50 transition-all"
              style={{
                background: 'rgba(34,14,8,0.62)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '12px',
                color: '#fff',
                letterSpacing: '0.08em',
              }}
            />
            <button
              type="submit"
              className="w-full py-4 font-black tracking-widest text-sm uppercase transition-all hover:shadow-lg hover:scale-105 active:scale-100"
              style={{
                background: 'linear-gradient(90deg, #7c3aed 0%, #a855f7 100%)',
                borderRadius: '12px',
                color: '#fff',
                letterSpacing: '0.12em',
                boxShadow: '0 4px 30px rgba(168,85,247,0.45)',
              }}
            >
              {submitted ? 'REGISTERED ✓' : 'REGISTER NOW →'}
            </button>
          </form>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0A0A0A)' }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}