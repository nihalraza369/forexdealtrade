export default function Footer() {
  return (
    <footer className="relative bg-dark overflow-hidden">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.6), transparent)',
        }}
      />

      <div className="px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand Column */}
            <div>
              <div className="mb-4">
                <img src="/fxarlogo.png" alt="ForexDeals" className="h-12 w-auto mb-3" />
                <h3 className="font-serif text-2xl font-bold text-white mb-2">ForexDeals</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Professional forex education and mentorship in Karachi. Building disciplined traders, not just signal followers.
                </p>
              </div>
              <div className="flex gap-3 mt-6">
                <a
                  href="https://instagram.com/forexdealskarachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-300 hover:bg-orange-500/40 hover:text-orange-200 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.69.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/923000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-300 hover:bg-orange-500/40 hover:text-orange-200 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.98 1.514A9.92 9.92 0 002.026 12c0 5.487 4.471 9.936 9.936 9.936a9.9 9.9 0 006.94-2.837l.55-.527 1.197.204 3.826.656-1.225-4.47.727-1.05c1.602-2.311 2.509-5.02 2.509-7.932A9.936 9.936 0 0012.051 6.979z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-orange-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="text-stone-400 text-sm hover:text-orange-200 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-stone-400 text-sm hover:text-orange-200 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-stone-400 text-sm hover:text-orange-200 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-stone-400 text-sm hover:text-orange-200 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-orange-300">
                Programs
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-stone-400 text-sm">Forex Basics</span>
                </li>
                <li>
                  <span className="text-stone-400 text-sm">Advanced Trading</span>
                </li>
                <li>
                  <span className="text-stone-400 text-sm">VIP Mentorship</span>
                </li>
                <li>
                  <span className="text-stone-400 text-sm">Live Signals</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 text-orange-300">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-orange-300 mt-1 flex-shrink-0">📍</span>
                  <span className="text-stone-400 text-sm">Karachi, Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-300 mt-1 flex-shrink-0">💬</span>
                  <a
                    href="https://wa.me/923000000000"
                    className="text-stone-400 text-sm hover:text-orange-200 transition-colors"
                  >
                    WhatsApp: +92 300 0000000
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-300 mt-1 flex-shrink-0">📧</span>
                  <span className="text-stone-400 text-sm">hello@forexdeals.pk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-8"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)',
            }}
          />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-stone-500 text-xs md:text-sm text-center md:text-left">
              © 2024 ForexDeals Karachi. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-stone-500">
              <a href="#" className="hover:text-orange-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-orange-300 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div
        className="absolute bottom-0 left-1/2 w-96 h-40 -translate-x-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.15), transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
    </footer>
  )
}
