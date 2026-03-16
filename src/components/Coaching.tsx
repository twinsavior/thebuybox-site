import { useScrollReveal } from '../hooks/useScrollReveal'

const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

const coaches = [
  {
    name: 'Chad',
    focus: 'Intermediate & Advanced',
    tags: ['OA Sourcing', 'A2A / Flipalert', 'Keepa', 'SellerAmp', 'Repricing'],
  },
  {
    name: 'Cristian',
    focus: 'Scaling & Operations',
    tags: ['RA', 'Scaling', 'Team Management', 'Outsourcing', 'Mindset'],
  },
  {
    name: 'Jamie',
    focus: 'Mindset & Strategy',
    tags: ['Goal Setting', 'Time Management', 'OA / RA / A2A', 'AI / Vibe Coding', 'Mindset'],
  },
  {
    name: 'Joey',
    focus: 'Multi-Platform',
    tags: ['RA Sourcing', 'Walmart', 'Amazon FBM', 'Alt Scaling Methods'],
  },
  {
    name: 'Eric',
    focus: 'Beginners & Onboarding',
    tags: ['Onboarding', 'OA / Product Analysis', 'Beginners', 'Work-Life Balance'],
  },
  {
    name: 'Dre',
    focus: 'Wholesale & Software',
    tags: ['OA Sourcing', 'Wholesale', 'Tradeshows', 'SellerAmp', 'Repricers'],
  },
  {
    name: 'Talon',
    focus: 'Beginner & Intermediate',
    tags: ['RA', 'OA', 'Ungating', 'Amazon FBA'],
  },
]

const stats = [
  { value: '4', label: 'Sessions / Month' },
  { value: '7', label: 'Expert Operators' },
  { value: '2 hrs', label: 'Included Monthly' },
  { value: '$0', label: 'Extra Cost' },
]

export default function Coaching() {
  const ref = useScrollReveal()

  return (
    <section id="coaching" className="py-24 sm:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 hero-glow opacity-60" />

      <div ref={ref} className="fade-in-section relative max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand/10 border border-brand/15 text-brand text-xs font-semibold tracking-[0.12em] uppercase mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5l4 4 7-7.5" />
            </svg>
            Included With Your Membership
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-4">
            1-on-1 Access to <span className="text-brand-gradient">7 &amp; 8-Figure Operators</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Not generic coaches. Real sellers running real businesses. Book directly with the
            operator whose expertise matches exactly where you are right now.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex justify-center items-center gap-8 sm:gap-12 flex-wrap mb-14">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-brand leading-none mb-1">
                  {s.value}
                </div>
                <div className="text-xs text-dim font-medium uppercase tracking-[0.08em]">
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && (
                <div className="stat-divider hidden sm:block" />
              )}
            </div>
          ))}
        </div>

        {/* Coach grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-14">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className="card-lift group bg-elevated border border-brand/10 hover:border-brand/30 rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center font-display font-bold text-lg text-brand shrink-0">
                  {coach.name[0]}
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-ink leading-tight">
                    {coach.name}
                  </div>
                  <div className="text-xs text-dim font-medium">{coach.focus}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {coach.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-brand/5 border border-brand/10 text-[12px] font-medium text-brand-light/70 group-hover:bg-brand/8 group-hover:border-brand/18 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine inline-flex items-center gap-2.5 bg-brand hover:bg-brand-light text-void font-bold text-lg px-10 py-4 rounded-xl transition-colors"
          >
            Get Access Now
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <p className="text-sm text-dim mt-4">
            Members self-schedule anytime &middot; 30-min sessions via Discord or Zoom
          </p>
        </div>
      </div>
    </section>
  )
}
