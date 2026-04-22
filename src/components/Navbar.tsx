'use client'

import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Platform', href: '#platform' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('#home')
  const [hovered, setHovered] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 md:px-10 py-3 md:py-4 flex justify-between items-center ">
      {/* LOGO */}
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}
      >
        <span
          style={{
            fontFamily: `'DM Sans', 'Segoe UI', sans-serif`,
            fontSize: '18px',
            fontWeight: 900,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#fff',
            textShadow: '0 0 24px rgba(168,85,247,0.45)',
          }}
        >
          DrWhoTrades
        </span>

      </a>

      {/* Desktop NAV LINKS */}
      <ul
        className="hidden md:flex"
        style={{
          gap: '32px',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={() => setActive(l.href)}
              style={{
                position: 'relative',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                fontFamily: `'DM Sans', 'Segoe UI', sans-serif`,
                color:
                  active === l.href ? '#ffffff' : 'rgba(255,225,210,0.82)',
                paddingBottom: '6px',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => {
                setHovered(l.href)
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={(e) => {
                setHovered(null)
                if (active !== l.href) {
                  e.currentTarget.style.color = 'rgba(255,225,210,0.82)'
                }
              }}
            >
              {l.label}

              {/* Hover underline */}
              <span
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                  transform:
                    active === l.href || hovered === l.href
                      ? 'scaleX(1)'
                      : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.25s ease',
                }}
                className="hover-line"
              />
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop BUTTON */}
      <a
        href="/pricing"
        className="hidden md:inline-block"
        style={{
          textDecoration: 'none',
          fontSize: '12px',
          fontWeight: '900',
          padding: '10px 24px',
          borderRadius: '20px',
          color: '#fff',
          background:
            'linear-gradient(90deg, #7c3aed, #a855f7)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1.08) translateY(-2px)'
          el.style.boxShadow = '0 8px 30px rgba(168,85,247,0.6)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1) translateY(0)'
          el.style.boxShadow = 'none'
        }}
      >
        Buy Course →
      </a>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden w-10 h-10 rounded-full border border-purple-400/35 bg-purple-500/10 text-purple-200 flex items-center justify-center"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-purple-400/20 bg-[#120d0b]/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.45)] p-4">
            <ul className="flex flex-col gap-2">
              {links.map((l) => (
                <li key={`mobile-${l.href}`}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setActive(l.href)
                      setMenuOpen(false)
                    }}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                      active === l.href
                        ? 'bg-purple-500/20 text-white border border-purple-300/30'
                        : 'text-purple-100/90 hover:bg-purple-500/10'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="mt-4 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-purple-500 shadow-[0_8px_28px_rgba(168,85,247,0.45)] hover:scale-[1.02] transition-transform"
            >
              Buy Course →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}