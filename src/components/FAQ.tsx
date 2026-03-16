import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Who is The Buy Box for?',
    a: "Anyone selling or looking to sell on Amazon, Walmart, or eBay. Our members range from complete beginners to 8-figure annual sellers. The community, tools, and education scale to wherever you are in your journey.",
  },
  {
    q: 'What is FlipAlert?',
    a: "FlipAlert is our proprietary sourcing software, normally $97/month on its own. It's a browser extension and platform that surfaces 800K+ profitable price drops every month, tracks ASINs, manages orders, and overlays Walmart data on Amazon product pages. It's included free with your membership.",
  },
  {
    q: 'Is there a contract or commitment?',
    a: "No contracts. Cancel anytime. We also offer a 30-day money-back guarantee, so there's zero risk. We keep members because we deliver value, not because we lock them in.",
  },
  {
    q: 'What marketplaces do you cover?',
    a: "We started with Amazon and it remains our core focus, but we've expanded to cover Walmart and eBay strategies, tools, and sourcing. Many of our members sell across all three platforms.",
  },
  {
    q: 'How is this different from other reselling groups?',
    a: "We've been running for 6+ years and our team collectively generates $50M+ in annual sales. No high-ticket upsells, no complicated funnels. One price, everything included. Our reviews speak for themselves — comparable mentorship programs charge $20,000+.",
  },
  {
    q: 'Do I get personal help?',
    a: "Yes. Every new member gets a 1:1 onboarding call. You'll also have access to office hours, private coaching sessions, and a community of experienced sellers who genuinely help each other.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-border rounded-xl overflow-hidden hover:border-brand/15 transition-colors">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 group"
      >
        <span className="font-medium text-ink group-hover:text-brand-light transition-colors">{q}</span>
        <svg
          className={`w-5 h-5 text-dim shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-400 ease-out ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="px-6 text-muted leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const ref = useScrollReveal()

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />

      <div ref={ref} className="fade-in-section relative max-w-3xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-14">
          <span className="text-brand text-sm font-semibold tracking-[0.15em] uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-ink">
            Questions? Answers<span className="text-brand">.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(faq => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
