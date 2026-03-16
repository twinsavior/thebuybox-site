import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '5,000+', label: 'Members' },
  { value: '$50M+', label: 'Annual Sales' },
  { value: '6+', label: 'Years Running' },
  { value: '5.0 ★', label: 'Star Rating' },
]

export default function Stats() {
  const ref = useScrollReveal()

  return (
    <div ref={ref} className="fade-in-section border-y border-border bg-surface/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 flex flex-wrap items-center justify-center gap-8 sm:gap-0 sm:justify-between">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-center gap-4">
            {i > 0 && <div className="stat-divider hidden sm:block mr-4" />}
            <div className="text-center sm:text-left">
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-ink">{s.value}</div>
              <div className="text-sm text-muted mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
