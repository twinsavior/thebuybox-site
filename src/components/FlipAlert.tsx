import { useScrollReveal } from '../hooks/useScrollReveal'

const bulletFeatures = [
  'Browser extension for seamless workflow',
  'A2A and A2W arbitrage scanning',
  'ASIN tracking with custom price alerts',
  'Amazon order tracking & management',
  'Walmart data overlay on Amazon pages',
  'Team collaboration & VA access',
]

const mockDeals = [
  { name: 'Wireless Earbuds Pro', buy: '$18.50', sell: '$34.99', roi: '89%' },
  { name: 'Kitchen Scale Digital', buy: '$12.00', sell: '$24.99', roi: '108%' },
  { name: 'Phone Case Bundle x3', buy: '$8.75', sell: '$19.99', roi: '128%' },
  { name: 'LED Desk Lamp', buy: '$22.00', sell: '$39.99', roi: '82%' },
]

export default function FlipAlert() {
  const ref = useScrollReveal()

  return (
    <section id="flipalert" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.015] to-transparent" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand/[0.03] rounded-full blur-[120px]" />

      <div ref={ref} className="fade-in-section relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand/20 bg-brand/[0.06] text-brand-light text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
                <path d="M8.5 2L4 9h3.5l-.5 5 4.5-7H8l.5-5z" strokeLinejoin="round"/>
              </svg>
              Included Free &middot; $97/mo value
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4 leading-tight">
              FlipAlert<span className="text-brand">.</span><br />
              <span className="text-muted text-2xl sm:text-3xl font-semibold">Sourcing made instant.</span>
            </h2>

            <p className="text-muted text-lg mb-8 leading-relaxed">
              Our proprietary sourcing engine surfaces profitable arbitrage opportunities across
              Amazon and Walmart in real time. Normally $97/month standalone — included free with every membership.
            </p>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { n: '800K+', sub: 'Price drops monthly' },
                { n: '10M+', sub: 'Historical leads' },
                { n: '$3M+', sub: 'Sourced by users' },
                { n: '24/7', sub: 'Real-time alerts' },
              ].map(s => (
                <div key={s.n} className="bg-surface border border-border rounded-xl p-4">
                  <div className="font-display font-bold text-lg text-brand">{s.n}</div>
                  <div className="text-xs text-muted mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Bullet features */}
            <ul className="space-y-3">
              {bulletFeatures.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l4 4 7-7.5" />
                  </svg>
                  <span className="text-muted text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-border bg-elevated/70 backdrop-blur-sm p-6 sm:p-8 brand-glow-border">
              {/* Window chrome */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-ebay/40" />
                  <div className="w-3 h-3 rounded-full bg-amazon/40" />
                  <div className="w-3 h-3 rounded-full bg-green/40" />
                </div>
                <div className="flex-1 bg-surface rounded-lg px-4 py-1.5 text-sm text-dim">flipalert.co</div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Leads Today', val: '2,847' },
                  { label: 'Avg ROI', val: '47%' },
                  { label: 'Price Drops', val: '12.4K' },
                ].map(s => (
                  <div key={s.label} className="rounded-xl bg-surface/80 border border-border p-3 text-center">
                    <div className="text-lg font-bold text-ink">{s.val}</div>
                    <div className="text-xs text-dim">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Deal table */}
              <div className="space-y-2">
                {mockDeals.map(d => (
                  <div key={d.name} className="flex items-center justify-between rounded-lg bg-surface/60 border border-border/50 px-4 py-3 text-sm hover:border-brand/20 transition-colors">
                    <span className="text-muted truncate flex-1 mr-4">{d.name}</span>
                    <span className="text-dim mr-4 hidden sm:block">{d.buy}</span>
                    <span className="text-ink mr-4 hidden sm:block">{d.sell}</span>
                    <span className="font-semibold text-green">{d.roi}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-brand text-void text-xs font-bold px-3 py-1.5 rounded-full animate-float shadow-lg shadow-brand/20">
              $97/mo FREE
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
