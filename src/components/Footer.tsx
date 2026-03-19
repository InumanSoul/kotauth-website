import { Link } from 'react-router-dom';
import { Github, Twitter, MessageCircle } from 'lucide-react';

const GITHUB_URL = 'https://github.com/inumansoul/kotauth';
const DOCS_URL = 'https://docs.kotauth.com/';

type FooterLink = {
  label: string;
  href: string;
  external: boolean;
};

const footerLinks: Record<string, FooterLink[]> = {
  product: [
    { label: 'Features', href: '/features', external: false },
    { label: 'Roadmap', href: '/roadmap', external: false },
    { label: 'Changelog', href: `${GITHUB_URL}/releases`, external: true },
  ],
  resources: [
    { label: 'Documentation', href: DOCS_URL, external: true },
    { label: 'API Reference', href: `${GITHUB_URL}#rest-api`, external: true },
    { label: 'GitHub', href: GITHUB_URL, external: true },
    { label: 'Community', href: `${GITHUB_URL}/discussions`, external: true },
  ],
  company: [
    { label: 'Blog', href: `${GITHUB_URL}/discussions/categories/announcements`, external: true },
    { label: 'Contact', href: '/contact', external: false },
    { label: 'Privacy Policy', href: '/privacy', external: false },
    { label: 'Terms', href: '/terms', external: false },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/InumanSoul', label: 'Twitter' },
  { icon: Github, href: GITHUB_URL, label: 'GitHub' },
  { icon: MessageCircle, href: `${GITHUB_URL}/discussions`, label: 'Community' },
];

function FooterLink({ link }: { link: FooterLink }) {
  const className = 'text-sm text-kotauth-text-tertiary hover:text-kotauth-text-primary transition-colors font-mono';
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
        {link.label}
      </a>
    );
  }
  return <Link to={link.href} className={className}>{link.label}</Link>;
}

export function Footer() {
  return (
    <footer className="bg-kotauth-bg-secondary border-t border-kotauth-surface-2">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <img src='/brand/kotauth-negative.svg' alt="KotAuth Logo" className="h-10" height={'40px'} width={'160px'} />
            </Link>
            <p className="text-kotauth-text-secondary max-w-sm mb-6">
              Identity infrastructure for modern applications. Self-hosted, Docker-native, developer-first.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}><FooterLink link={link} /></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}><FooterLink link={link} /></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-kotauth-text-primary mb-4 font-mono">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}><FooterLink link={link} /></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-kotauth-surface-2 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-kotauth-text-muted font-mono">
            © {new Date().getFullYear()} Kotauth. Open source under{' '}
            <a
              href={`${GITHUB_URL}/blob/main/LICENSE`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-kotauth-text-secondary transition-colors"
            >
              MIT License
            </a>
            .
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-kotauth-text-muted hover:text-kotauth-text-secondary transition-colors font-mono">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-kotauth-text-muted hover:text-kotauth-text-secondary transition-colors font-mono">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
