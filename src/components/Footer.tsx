import { Github, Twitter, MessageCircle } from 'lucide-react';

const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Changelog', href: '#changelog' },
    { label: 'Roadmap', href: '#roadmap' },
  ],
  resources: [
    { label: 'Documentation', href: '#docs' },
    { label: 'API Reference', href: '#api' },
    { label: 'GitHub', href: GITHUB_URL },
    { label: 'Community', href: '#community' },
  ],
  company: [
    { label: 'Blog', href: '#blog' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: MessageCircle, href: '#', label: 'Discord' },
];

export function Footer() {
  return (
    <footer className="bg-kotauth-bg-secondary border-t border-kotauth-surface-2">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <img src='/brand/kotauth-negative.svg' alt="KotAuth Logo" className="h-10" height={'40px'} width={'160px'}/>
            </a>
            <p className="text-kotauth-text-secondary max-w-sm mb-6">
              Identity infrastructure for modern applications. Self-hosted, Docker-native, developer-first.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 bg-kotauth-surface-1 flex items-center justify-center text-kotauth-text-tertiary hover:text-kotauth-text-primary hover:bg-kotauth-surface-2 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-kotauth-text-tertiary hover:text-kotauth-text-primary transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-kotauth-text-tertiary hover:text-kotauth-text-primary transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-kotauth-text-tertiary hover:text-kotauth-text-primary transition-colors font-mono"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-kotauth-surface-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-kotauth-text-muted font-mono">
            © 2025 Kotauth. Open source under MIT License.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-kotauth-text-muted hover:text-kotauth-text-secondary transition-colors font-mono">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-kotauth-text-muted hover:text-kotauth-text-secondary transition-colors font-mono">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
