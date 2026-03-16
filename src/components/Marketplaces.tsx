import { useScrollReveal } from '../hooks/useScrollReveal'

const marketplaces = [
  {
    name: 'Amazon',
    description: "From arbitrage to wholesale, dominate the world's largest marketplace.",
    bullets: ['Online & Retail Arbitrage', 'Wholesale Sourcing', 'Ungating Strategies', 'PPC & Listing Optimization'],
    gradient: 'from-amazon/10 to-amazon/[0.02]',
    border: 'hover:border-amazon/30',
    dot: 'bg-amazon',
    accent: 'text-amazon',
  },
  {
    name: 'Walmart',
    description: 'First-mover advantage on the fastest-growing e-commerce platform.',
    bullets: ['Walmart Seller Setup', 'A2W Arbitrage', 'Cross-Platform Strategy', 'Growth Playbooks'],
    gradient: 'from-walmart/10 to-walmart/[0.02]',
    border: 'hover:border-walmart/30',
    dot: 'bg-walmart',
    accent: 'text-walmart',
  },
  {
    name: 'eBay',
    description: 'Proven strategies for consistent profits on eBay.',
    bullets: ['Listing Optimization', 'Store Management', 'Flipping Strategies', 'Shipping & Logistics'],
    gradient: 'from-ebay/10 to-ebay/[0.02]',
    border: 'hover:border-ebay/30',
    dot: 'bg-ebay',
    accent: 'text-ebay',
  },
]

export default function Marketplaces() {
  const ref = useScrollReveal()

  return (
    <section id="marketplaces" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

      <div ref={ref} className="fade-in-section relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Multi-Marketplace
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4">
            One Membership.{' '}
            <span className="text-brand-gradient">Every Marketplace.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Strategies, software, and support for every platform you sell on.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {marketplaces.map(mp => (
            <div
              key={mp.name}
              className={`relative rounded-2xl border border-border ${mp.border} bg-gradient-to-b ${mp.gradient} p-8 card-lift transition-colors`}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div className={`w-3 h-3 rounded-full ${mp.dot}`} />
                <h3 className="text-2xl font-display font-bold text-ink">{mp.name}</h3>
              </div>
              <p className="text-muted mb-6 leading-relaxed">{mp.description}</p>
              <ul className="space-y-2.5">
                {mp.bullets.map(b => (
                  <li key={b} className="flex items-center gap-3 text-sm text-muted">
                    <svg className={`w-4 h-4 shrink-0 ${mp.accent}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 8.5l3 3 6-6.5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
