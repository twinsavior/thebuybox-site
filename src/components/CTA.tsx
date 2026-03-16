import { useScrollReveal } from '../hooks/useScrollReveal'

const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div ref={ref} className="fade-in-section relative max-w-3xl mx-auto px-5 sm:px-6 text-center">
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-6">
          Ready to scale<span className="text-brand">?</span>
        </h2>
        <p className="text-muted text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Join 5,000+ sellers who've transformed their e-commerce business with The Buy Box. Start your free trial today.
        </p>
        <a
          href={WHOP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-void font-bold text-lg px-10 py-4 rounded-xl transition-colors"
        >
          Start Your Free Trial
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
        <p className="text-sm text-dim mt-4">No credit card required &middot; Cancel anytime</p>
      </div>
    </section>
  )
}
