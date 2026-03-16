import { useScrollReveal } from '../hooks/useScrollReveal'

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.4}>
        <circle cx="14" cy="9" r="4.5"/><path d="M5 24c0-4.97 4.03-9 9-9s9 4.03 9 9" strokeLinecap="round"/>
        <path d="M20 7l2.5-2.5m0 0H20m2.5 0V7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Expert Mentorship',
    description: 'Direct access to 7 and 8-figure sellers. 1:1 onboarding calls for every member. Weekly office hours. No gatekeeping — ever.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.4}>
        <path d="M15.5 3.5L7 16h6.5L12.5 24.5 21 12h-6.5l1-8.5z" strokeLinejoin="round" fill="rgba(200,166,76,0.1)"/>
      </svg>
    ),
    title: 'FlipAlert Software',
    description: 'Our proprietary sourcing engine tracks 800K+ price drops monthly. A2A and A2W arbitrage, ASIN tracking, order management. Included free ($97/mo value).',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.4}>
        <path d="M4 11l10-5.5L24 11l-10 5.5L4 11z"/><path d="M7.5 13v7c0 1.5 2.9 3.5 6.5 3.5s6.5-2 6.5-3.5v-7" strokeLinecap="round"/>
        <path d="M24 11v8.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '90+ Training Modules',
    description: 'From your first shipment to scaling to 7 figures. Beginner roadmaps, wholesale guides, ungating strategies, and advanced tactics.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28" stroke="currentColor" strokeWidth={1.4}>
        <circle cx="10" cy="10" r="3.5"/><circle cx="18" cy="10" r="3.5"/>
        <path d="M4 24c0-3.87 2.69-7 6-7 1.3 0 2.5.42 3.5 1.14M24 24c0-3.87-2.69-7-6-7-1.3 0-2.5.42-3.5 1.14" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Private Community',
    description: '500+ active sellers sharing wins, sourcing tips, and real-time support. Live sourcing calls. Guest speakers. Curated lead lists weekly.',
  },
]

export default function Features() {
  const ref = useScrollReveal()

  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            Everything You Need
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4">
            Four pillars. <span className="text-brand-gradient">Zero fluff.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Every tool, resource, and connection to build a real e-commerce business. All in one membership.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {features.map(f => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-elevated/40 p-8 sm:p-10 card-lift hover:border-brand/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
