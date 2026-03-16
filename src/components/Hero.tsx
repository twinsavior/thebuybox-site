const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden hero-glow grid-bg">
      {/* Ambient blurs */}
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-brand/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-brand/[0.025] rounded-full blur-[140px]" />
      {/* Bottom gold line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand/15 bg-brand/[0.06] text-brand-light text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
          Est. 2019 &middot; 5,000+ sellers strong
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight leading-[0.95] text-ink mb-6">
          Your Edge in{' '}
          <br className="hidden sm:block" />
          <span className="text-brand-gradient">E-Commerce</span>
        </h1>

        {/* Sub */}
        <p className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          The premier reseller community. Expert mentorship, proprietary sourcing software,
          and a private network generating{' '}
          <span className="text-ink font-medium">$50M+ annually</span>{' '}
          across Amazon, Walmart, and eBay.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine w-full sm:w-auto bg-brand hover:bg-brand-light text-void font-bold text-base px-8 py-4 rounded-xl transition-colors inline-flex items-center justify-center gap-2"
          >
            Start Your Free Trial
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto border border-border hover:border-border-glow text-muted hover:text-ink font-medium text-base px-8 py-4 rounded-xl transition-all"
          >
            See What's Inside
          </a>
        </div>

        {/* Marketplace tags */}
        <div className="flex items-center justify-center gap-8 sm:gap-10">
          {[
            { name: 'Amazon', color: 'text-amazon/70' },
            { name: 'Walmart', color: 'text-walmart/70' },
            { name: 'eBay', color: 'text-ebay/70' },
          ].map(mp => (
            <div key={mp.name} className={`flex items-center gap-2 ${mp.color}`}>
              <div className="w-2 h-2 rounded-full bg-current" />
              <span className="text-sm font-medium">{mp.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
