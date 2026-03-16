import { useScrollReveal } from '../hooks/useScrollReveal'

const metrics = [
  { n: '$50M+', sub: 'Collective annual revenue' },
  { n: '5,000+', sub: 'Sellers mentored' },
  { n: '90+', sub: 'Training modules' },
  { n: '6+', sub: 'Years of results' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text */}
          <div>
            <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight text-ink mb-6">
              Built by sellers,{' '}
              <span className="text-brand-gradient">for sellers.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-5">
              We started in 2019 as an Amazon-focused community. Six years and 5,000+ members later,
              we've expanded across every major marketplace. Our team collectively generates over $50M
              in annual sales.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              No high-ticket upsells. No complicated funnels. One membership gets you everything:
              mentorship from 7 and 8-figure sellers, our proprietary FlipAlert software, 90+ training
              modules, and a private community that actually gives a damn about your success.
            </p>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className={`bg-surface border rounded-xl p-6 text-center card-lift ${
                  i < 2 ? 'border-brand/20' : 'border-border'
                }`}
              >
                <div className="font-display font-extrabold text-2xl text-ink mb-1">{m.n}</div>
                <div className="text-sm text-muted">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
