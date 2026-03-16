const WHOP_URL = 'https://whop.com/thebuybox/thebuybox/'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img src="/logo.png" alt="The Buy Box" className="h-8 w-auto" />
            </div>
            <p className="text-dim text-sm leading-relaxed">
              The premier e-commerce reseller community. Est. 2019.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ink mb-4">Product</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Features', href: '#features' },
                { label: 'FlipAlert', href: '#flipalert' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
              ].map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-dim hover:text-muted transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ink mb-4">Community</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={WHOP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-muted transition-colors">
                  Join on Whop
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-dim hover:text-muted transition-colors">Reviews</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-sm text-ink mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="https://twitter.com/thebuyboxio" target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-muted transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="https://instagram.com/thebuyboxio" target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-muted transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.flipalert.co" target="_blank" rel="noopener noreferrer" className="text-sm text-dim hover:text-muted transition-colors">
                  FlipAlert
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dim">&copy; {new Date().getFullYear()} The Buy Box. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-dim hover:text-muted transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-dim hover:text-muted transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
