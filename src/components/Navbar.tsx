import { useState, useEffect } from 'react'

const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Software', href: '#flipalert' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-void/90 backdrop-blur-xl border-b border-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="shrink-0">
          <img src="/logo.png" alt="The Buy Box" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-muted hover:text-ink transition-colors duration-200">
              {l.label}
            </a>
          ))}
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine bg-brand hover:bg-brand-light text-void font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-muted hover:text-ink" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open
              ? <><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></>
              : <><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></>
            }
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-shine block text-center bg-brand text-void font-semibold px-5 py-3 rounded-lg"
          >
            Start Free Trial
          </a>
        </div>
      )}
    </nav>
  )
}
