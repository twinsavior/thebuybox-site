import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  'Full Brick Dynasty app access ($5/mo value)',
  'Brick Check — scan 50 nearby Walmarts in seconds',
  'In-store pricing, stock levels & aisle locations',
  'LEGO set retirement alerts & price tracking',
  'Exclusive live calls with the Brick Dynasty team',
  'Community integrated into BuyBox Discord',
]

const mockSets = [
  { name: 'LEGO Icons Corvette 10321', retail: '$49.99', clearance: '$24.97', status: 'In Stock' },
  { name: 'City Deep-Sea Sub 60379', retail: '$34.99', clearance: '$15.00', status: '3 left' },
  { name: 'Creator 3-in-1 Castle 31120', retail: '$99.99', clearance: '$48.00', status: 'In Stock' },
  { name: 'Technic Monster Truck 42118', retail: '$19.99', clearance: '$9.00', status: '1 left' },
]

export default function BrickDynasty() {
  const ref = useScrollReveal()

  return (
    <section id="brick-dynasty" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.01] to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand/[0.03] rounded-full blur-[120px]" />

      <div ref={ref} className="fade-in-section relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Dashboard mockup — left side (flipped from FlipAlert) */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl border border-border bg-elevated/70 backdrop-blur-sm p-6 sm:p-8 brand-glow-border">
              {/* Window chrome */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-ebay/40" />
                  <div className="w-3 h-3 rounded-full bg-amazon/40" />
                  <div className="w-3 h-3 rounded-full bg-green/40" />
                </div>
                <div className="flex-1 bg-surface rounded-lg px-4 py-1.5 text-sm text-dim">Brick Check</div>
              </div>

              {/* Search bar */}
              <div className="flex items-center gap-3 mb-5 bg-surface/80 border border-border rounded-xl px-4 py-3">
                <svg className="w-4 h-4 text-dim shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="7" cy="7" r="4.5" /><path d="M10.5 10.5L14 14" strokeLinecap="round" />
                </svg>
                <span className="text-sm text-muted">Scanning 50 nearby stores...</span>
                <span className="ml-auto text-xs font-semibold text-green">Live</span>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Stores Found', val: '47' },
                  { label: 'Clearance Hits', val: '12' },
                  { label: 'Avg Discount', val: '55%' },
                ].map(s => (
                  <div key={s.label} className="rounded-xl bg-surface/80 border border-border p-3 text-center">
                    <div className="text-lg font-bold text-ink">{s.val}</div>
                    <div className="text-xs text-dim">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Deal rows */}
              <div className="space-y-2">
                {mockSets.map(d => (
                  <div key={d.name} className="flex items-center justify-between rounded-lg bg-surface/60 border border-border/50 px-4 py-3 text-sm hover:border-brand/20 transition-colors">
                    <span className="text-muted truncate flex-1 mr-4">{d.name}</span>
                    <span className="text-dim line-through mr-3 hidden sm:block">{d.retail}</span>
                    <span className="font-semibold text-green mr-3">{d.clearance}</span>
                    <span className="text-xs text-brand-light/60 hidden sm:block">{d.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -left-3 bg-brand text-void text-xs font-bold px-3 py-1.5 rounded-full animate-float shadow-lg shadow-brand/20">
              Included FREE
            </div>
          </div>

          {/* Text side — right */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand/20 bg-brand/[0.06] text-brand-light text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
                <path d="M4 2v4l2.5 2L4 10v4l8-6-8-6z" strokeLinejoin="round"/>
              </svg>
              Partnership &middot; Free for Members
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4 leading-tight">
              Brick Dynasty<span className="text-brand">.</span><br />
              <span className="text-muted text-2xl sm:text-3xl font-semibold">LEGO investing, unlocked.</span>
            </h2>

            <p className="text-muted text-lg mb-8 leading-relaxed">
              LEGO is one of the most consistent alternative investments out there — retired sets regularly
              appreciate 50-200%+. Our partnership with Brick Dynasty gives you the tools, the data, and
              direct access to the experts. All inside your BuyBox membership.
            </p>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { n: '50+', sub: 'Stores scanned instantly' },
                { n: '4.8★', sub: 'Community rating' },
                { n: '200%+', sub: 'Retired set returns' },
                { n: 'Live', sub: 'Expert calls included' },
              ].map(s => (
                <div key={s.n} className="bg-surface border border-border rounded-xl p-4">
                  <div className="font-display font-bold text-lg text-brand">{s.n}</div>
                  <div className="text-xs text-muted mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Bullet features */}
            <ul className="space-y-3">
              {features.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand shrink-0 mt-0.5" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l4 4 7-7.5" />
                  </svg>
                  <span className="text-muted text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
