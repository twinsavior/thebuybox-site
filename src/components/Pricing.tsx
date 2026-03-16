import { useScrollReveal } from '../hooks/useScrollReveal'

const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

const included = [
  { text: 'FlipAlert Software (normally $97/mo)', highlight: true },
  { text: '800K+ monthly price drop alerts' },
  { text: 'ASIN Tracker & Order Management' },
  { text: '90+ training modules & roadmaps' },
  { text: 'Weekly live sourcing calls' },
  { text: 'Curated lead lists (updated weekly)' },
  { text: '1:1 onboarding call' },
  { text: 'Office hours & private coaching' },
  { text: 'Un-gating bot for restricted categories' },
  { text: 'A2A & A2W Scanner access' },
  { text: 'Walmart data overlay tools' },
  { text: 'Private community access' },
  { text: 'Guest speaker sessions' },
  { text: 'Discounted LLC creation' },
  { text: 'In-house insurance agent' },
  { text: '30-day money-back guarantee' },
]

export default function Pricing() {
  const ref = useScrollReveal()

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 hero-glow opacity-60" />

      <div ref={ref} className="fade-in-section relative max-w-4xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Pricing
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4">
            One membership. <span className="text-brand-gradient">Everything included.</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            No tiers. No upsells. No hidden fees. Comparable mentorship programs charge $20,000+.
          </p>
        </div>

        {/* Pricing card */}
        <div className="bg-elevated border border-brand/20 rounded-3xl p-8 sm:p-12 brand-glow-border animate-breathe relative overflow-hidden">
          {/* Top gold line */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <h3 className="font-display font-bold text-2xl text-ink mb-2">The Buy Box Membership</h3>
              <p className="text-muted">Everything you need. Nothing you don't.</p>
            </div>
            <div className="md:text-right shrink-0">
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-5xl sm:text-6xl text-ink">$149</span>
                <span className="text-muted text-lg">/mo</span>
              </div>
              <p className="text-sm text-muted mt-1">7-day free trial &middot; Cancel anytime</p>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
            {included.map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-1.5">
                <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l4 4 7-7.5" />
                </svg>
                <span className={`text-sm ${f.highlight ? 'text-brand-light font-medium' : 'text-muted'}`}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={WHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine w-full sm:flex-1 bg-brand hover:bg-brand-light text-void font-bold text-center text-lg px-8 py-4 rounded-xl transition-colors"
            >
              Start Your 7-Day Free Trial
            </a>
            <div className="flex items-center gap-2 text-sm text-muted">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2" strokeLinecap="round"/>
              </svg>
              30-day money-back guarantee
            </div>
          </div>
        </div>

        {/* Coaching section now has its own dedicated component */}
      </div>
    </section>
  )
}
