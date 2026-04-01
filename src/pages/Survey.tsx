import { useState } from 'react'

const TOTAL_STEPS = 7

const VALUE_OPTIONS = [
  'Daily Deals & Lead Lists',
  'FlipAlert Software',
  '1:1 Coaching & Mentorship',
  'Live Sourcing Calls',
  'Training Modules & Roadmaps',
  'Private Community & Networking',
  'Brick Dynasty (LEGO Investing)',
  'Un-gating Support',
  'Walmart / Multi-Marketplace Tools',
]

const IMPROVEMENT_OPTIONS = [
  'More / better daily deals',
  'FlipAlert software features',
  'More coaching availability',
  'Community engagement & events',
  'More advanced training content',
  'Better onboarding experience',
  'Pricing / value for money',
  'Communication & updates from the team',
]

const TENURE_OPTIONS = [
  'Less than 1 month',
  '1–3 months',
  '3–6 months',
  '6–12 months',
  '1–2 years',
  '2+ years',
]

interface SurveyData {
  npsScore: number | null
  npsReason: string
  valueDrivers: string[]
  improvements: string[]
  improvementOther: string
  tenure: string
  overallRating: number | null
  biggestWin: string
  openFeedback: string
  name: string
}

export default function Survey() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState<SurveyData>({
    npsScore: null,
    npsReason: '',
    valueDrivers: [],
    improvements: [],
    improvementOther: '',
    tenure: '',
    overallRating: null,
    biggestWin: '',
    openFeedback: '',
    name: '',
  })

  const progress = ((step + 1) / TOTAL_STEPS) * 100

  function next() {
    if (step < TOTAL_STEPS - 1) setStep(s => s + 1)
  }

  function back() {
    if (step > 0) setStep(s => s - 1)
  }

  function toggleValue(val: string) {
    setData(d => ({
      ...d,
      valueDrivers: d.valueDrivers.includes(val)
        ? d.valueDrivers.filter(v => v !== val)
        : [...d.valueDrivers, val],
    }))
  }

  function toggleImprovement(val: string) {
    setData(d => ({
      ...d,
      improvements: d.improvements.includes(val)
        ? d.improvements.filter(v => v !== val)
        : [...d.improvements, val],
    }))
  }

  function handleSubmit() {
    console.log('Survey submitted:', data)
    setSubmitted(true)
  }

  function getNpsLabel() {
    if (data.npsScore === null) return ''
    if (data.npsScore <= 6) return 'We appreciate your honesty. What could we do better?'
    if (data.npsScore <= 8) return 'Thanks! What would make us a 10?'
    return "That's amazing! What do you love most?"
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-void flex items-center justify-center px-5">
        <div className="text-center max-w-lg">
          <div className="w-20 h-20 rounded-full bg-brand/15 text-brand flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mb-4">
            Thank you{data.name ? `, ${data.name}` : ''}!
          </h1>
          <p className="text-muted text-lg mb-3">
            Your feedback means the world to us. Every response helps us build a better TBB for you and the entire community.
          </p>
          <p className="text-dim text-sm">
            We read every single response. If you shared something we can act on, you'll see it happen.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-void flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50 bg-surface/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TBB" className="h-8 w-auto" />
            <span className="font-display font-bold text-ink text-lg hidden sm:block">Member Survey</span>
          </div>
          <span className="text-sm text-dim">
            {step + 1} of {TOTAL_STEPS}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-border/30">
          <div
            className="h-full bg-brand transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-5 py-12 sm:py-16">
        <div className="w-full max-w-2xl">

          {/* Step 0: Welcome */}
          {step === 0 && (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink mb-5">
                We want to hear <span className="text-brand-gradient">from you.</span>
              </h1>
              <p className="text-muted text-lg max-w-xl mx-auto mb-4">
                Your honest feedback helps us build a better TBB. This takes about 3 minutes, and every answer — good, bad, or brutally honest — helps us improve.
              </p>
              <p className="text-dim text-sm mb-10">
                All responses are anonymous unless you choose to share your name.
              </p>
              <button
                onClick={next}
                className="btn-shine bg-brand hover:bg-brand-light text-void font-bold text-lg px-10 py-4 rounded-xl transition-colors"
              >
                Let's Go
              </button>
            </div>
          )}

          {/* Step 1: NPS Score */}
          {step === 1 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                How likely are you to recommend The Buy Box to a friend or colleague?
              </h2>
              <p className="text-muted mb-10">0 = Not at all likely &middot; 10 = Extremely likely</p>

              <div className="grid grid-cols-11 gap-1.5 sm:gap-2 mb-6">
                {Array.from({ length: 11 }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setData(d => ({ ...d, npsScore: i }))}
                    className={`aspect-square rounded-xl font-bold text-lg sm:text-xl transition-all duration-200 border ${
                      data.npsScore === i
                        ? 'bg-brand text-void border-brand scale-110 shadow-lg shadow-brand/20'
                        : i <= 6
                          ? 'bg-elevated/60 text-muted border-border hover:border-red-500/40 hover:text-red-400'
                          : i <= 8
                            ? 'bg-elevated/60 text-muted border-border hover:border-yellow-500/40 hover:text-yellow-400'
                            : 'bg-elevated/60 text-muted border-border hover:border-green-500/40 hover:text-green-400'
                    }`}
                  >
                    {i}
                  </button>
                ))}
              </div>

              <div className="flex justify-between text-xs text-dim mb-8">
                <span>Not likely</span>
                <span>Extremely likely</span>
              </div>

              {data.npsScore !== null && (
                <p className="text-sm text-muted italic text-center mb-6">{getNpsLabel()}</p>
              )}

              <div className="flex justify-between">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={data.npsScore === null}
                  className="bg-brand hover:bg-brand-light disabled:opacity-30 disabled:cursor-not-allowed text-void font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: NPS Follow-up */}
          {step === 2 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                {data.npsScore !== null && data.npsScore <= 6
                  ? "What's the biggest reason for your score?"
                  : data.npsScore !== null && data.npsScore <= 8
                    ? "What would need to change for you to rate us higher?"
                    : "What's the #1 reason you'd recommend us?"}
              </h2>
              <p className="text-muted mb-8">Be as specific as you'd like. There are no wrong answers.</p>

              <textarea
                value={data.npsReason}
                onChange={e => setData(d => ({ ...d, npsReason: e.target.value }))}
                placeholder="Tell us what's on your mind..."
                rows={5}
                className="w-full bg-elevated border border-border rounded-xl px-5 py-4 text-ink placeholder-dim focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 resize-none transition-colors"
              />

              <div className="flex justify-between mt-8">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={next}
                  className="bg-brand hover:bg-brand-light text-void font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Value Drivers */}
          {step === 3 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                What do you value most about your TBB membership?
              </h2>
              <p className="text-muted mb-8">Select all that apply.</p>

              <div className="grid sm:grid-cols-2 gap-3">
                {VALUE_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => toggleValue(opt)}
                    className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                      data.valueDrivers.includes(opt)
                        ? 'bg-brand/10 border-brand/40 text-ink'
                        : 'bg-elevated/40 border-border text-muted hover:border-border-hover hover:text-ink'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        data.valueDrivers.includes(opt) ? 'bg-brand border-brand' : 'border-dim'
                      }`}>
                        {data.valueDrivers.includes(opt) && (
                          <svg className="w-3 h-3 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </span>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={next}
                  className="bg-brand hover:bg-brand-light text-void font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Improvements */}
          {step === 4 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                Where can we do better?
              </h2>
              <p className="text-muted mb-8">Select any areas you'd like to see improved. Be honest — it helps us grow.</p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {IMPROVEMENT_OPTIONS.map(opt => (
                  <button
                    key={opt}
                    onClick={() => toggleImprovement(opt)}
                    className={`text-left px-5 py-4 rounded-xl border transition-all duration-200 ${
                      data.improvements.includes(opt)
                        ? 'bg-brand/10 border-brand/40 text-ink'
                        : 'bg-elevated/40 border-border text-muted hover:border-border-hover hover:text-ink'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
                        data.improvements.includes(opt) ? 'bg-brand border-brand' : 'border-dim'
                      }`}>
                        {data.improvements.includes(opt) && (
                          <svg className="w-3 h-3 text-void" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        )}
                      </span>
                      {opt}
                    </span>
                  </button>
                ))}
              </div>

              <textarea
                value={data.improvementOther}
                onChange={e => setData(d => ({ ...d, improvementOther: e.target.value }))}
                placeholder="Anything else? Ideas big or small are welcome..."
                rows={3}
                className="w-full bg-elevated border border-border rounded-xl px-5 py-4 text-ink placeholder-dim focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 resize-none transition-colors"
              />

              <div className="flex justify-between mt-8">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={next}
                  className="bg-brand hover:bg-brand-light text-void font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Tenure + Overall Rating + Biggest Win */}
          {step === 5 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-8">
                A few more quick ones.
              </h2>

              {/* Tenure */}
              <div className="mb-10">
                <label className="block text-ink font-semibold mb-4">How long have you been a TBB member?</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TENURE_OPTIONS.map(opt => (
                    <button
                      key={opt}
                      onClick={() => setData(d => ({ ...d, tenure: opt }))}
                      className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 ${
                        data.tenure === opt
                          ? 'bg-brand/10 border-brand/40 text-ink'
                          : 'bg-elevated/40 border-border text-muted hover:border-border-hover hover:text-ink'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Overall Rating */}
              <div className="mb-10">
                <label className="block text-ink font-semibold mb-4">How would you rate your overall experience?</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <button
                      key={star}
                      onClick={() => setData(d => ({ ...d, overallRating: star }))}
                      className="group transition-transform hover:scale-110"
                    >
                      <svg
                        className={`w-10 h-10 sm:w-12 sm:h-12 transition-colors ${
                          data.overallRating !== null && star <= data.overallRating
                            ? 'text-brand fill-brand'
                            : 'text-dim fill-none hover:text-brand/50'
                        }`}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>

              {/* Biggest Win */}
              <div className="mb-8">
                <label className="block text-ink font-semibold mb-4">
                  What's your biggest win since joining TBB?
                </label>
                <textarea
                  value={data.biggestWin}
                  onChange={e => setData(d => ({ ...d, biggestWin: e.target.value }))}
                  placeholder="A great deal you found, a milestone you hit, something you learned..."
                  rows={3}
                  className="w-full bg-elevated border border-border rounded-xl px-5 py-4 text-ink placeholder-dim focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 resize-none transition-colors"
                />
              </div>

              <div className="flex justify-between">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={next}
                  className="bg-brand hover:bg-brand-light text-void font-bold px-8 py-3 rounded-xl transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Open Feedback + Name + Submit */}
          {step === 6 && (
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">
                Last one — anything else on your mind?
              </h2>
              <p className="text-muted mb-8">
                Dream features, frustrations, things you wish existed, compliments, roasts — all fair game.
              </p>

              <textarea
                value={data.openFeedback}
                onChange={e => setData(d => ({ ...d, openFeedback: e.target.value }))}
                placeholder="No idea is too big or too small..."
                rows={5}
                className="w-full bg-elevated border border-border rounded-xl px-5 py-4 text-ink placeholder-dim focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 resize-none transition-colors mb-8"
              />

              <div className="bg-elevated/60 border border-border rounded-xl p-6 mb-8">
                <label className="block text-ink font-semibold mb-2">
                  Your name <span className="text-dim font-normal">(optional)</span>
                </label>
                <p className="text-sm text-dim mb-4">Only if you'd like us to follow up with you personally.</p>
                <input
                  type="text"
                  value={data.name}
                  onChange={e => setData(d => ({ ...d, name: e.target.value }))}
                  placeholder="First name or Whop username"
                  className="w-full bg-surface border border-border rounded-xl px-5 py-3 text-ink placeholder-dim focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/20 transition-colors"
                />
              </div>

              <div className="flex justify-between items-center">
                <button onClick={back} className="text-muted hover:text-ink transition-colors px-4 py-2">
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="btn-shine bg-brand hover:bg-brand-light text-void font-bold text-lg px-10 py-4 rounded-xl transition-colors"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6">
        <p className="text-center text-sm text-dim">
          Your responses help us build a better TBB. Thank you for being a member.
        </p>
      </footer>
    </div>
  )
}
