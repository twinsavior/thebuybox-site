import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Great community run by smart people genuinely concerned with member success. Absolute no-brainer.',
    name: 'Stuart K.',
    handle: '@ooey',
    tag: null,
  },
  {
    quote: 'Best group with the most value by far for online sellers. Great people always willing to help.',
    name: 'Aaron S.',
    handle: '@melaaron8681',
    tag: null,
  },
  {
    quote: 'Helpful reselling group loaded with educated people providing real value to your business.',
    name: 'Patrick M.',
    handle: '@patmullinsells',
    tag: null,
  },
  {
    quote: 'Non-stop value from the TBB team. No-brainer price point, great community.',
    name: 'Jerin',
    handle: '@coopsfba',
    tag: null,
  },
  {
    quote: 'Hit $200k in my first 12 months on Amazon. This group was a massive part of that journey.',
    name: 'Member',
    handle: 'Verified Buyer',
    tag: '$200K first year',
  },
  {
    quote: "Crossed $20k lifetime sales. TBB has been a large part of my success getting started.",
    name: 'Member',
    handle: 'Verified Buyer',
    tag: '$20K milestone',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 1l2.05 4.15L15 5.9l-3.5 3.41.83 4.82L8 11.77l-4.33 2.36.83-4.82L1 5.9l4.95-.75L8 1z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />

      <div ref={ref} className="fade-in-section relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4">
            Don't take our word for it<span className="text-brand">.</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <Stars />
            <span className="text-muted text-sm ml-2">5.0 on Whop (35+ reviews)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-elevated/40 p-7 flex flex-col card-lift hover:border-brand/20 transition-colors"
            >
              <Stars />
              <blockquote className="mt-4 mb-6 text-ink leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-ink">{t.name}</div>
                    <div className="text-xs text-dim">{t.handle}</div>
                  </div>
                </div>
                {t.tag && (
                  <span className="text-xs bg-brand/10 text-brand-light px-2.5 py-1 rounded-full font-medium">
                    {t.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
