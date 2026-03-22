import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Github, ExternalLink, Play } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const GITHUB_URL    = 'https://github.com/inumansoul/kotauth';
const QUICKSTART_URL = 'https://docs.kotauth.com/getting-started/quickstart/';
const DOCS_URL      = 'https://docs.kotauth.com/getting-started/introduction/';
const DEMO_URL      = 'https://demo.kotauth.com';

type NavLinkDef = {
  label: string;
  href: string;
  external: boolean;
};

const navLinks: NavLinkDef[] = [
  { label: 'Features', href: '/features', external: false },
  { label: 'Roadmap', href: '/roadmap',   external: false },
  { label: 'Docs',    href: DOCS_URL,     external: true  },
  { label: 'Contact', href: '/contact',   external: false },
];

// ─── Desktop nav item ─────────────────────────────────────────────────────────

function DesktopNavItem({ link }: { link: NavLinkDef }) {
  const base = 'text-sm font-mono transition-colors duration-150';

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} inline-flex items-center gap-1 text-kotauth-text-secondary hover:text-kotauth-text-primary`}
      >
        {link.label}
        <ExternalLink className="w-3 h-3 opacity-50" />
      </a>
    );
  }

  return (
    <NavLink
      to={link.href}
      className={({ isActive }) =>
        `${base} ${
          isActive
            ? 'text-kotauth-primary'
            : 'text-kotauth-text-secondary hover:text-kotauth-text-primary'
        }`
      }
    >
      {link.label}
    </NavLink>
  );
}

// ─── Mobile nav item ──────────────────────────────────────────────────────────

function MobileNavItem({ link, onClose }: { link: NavLinkDef; onClose: () => void }) {
  const base = 'text-lg font-mono transition-colors duration-150';

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        className={`${base} inline-flex items-center gap-1.5 text-kotauth-text-secondary hover:text-kotauth-text-primary`}
      >
        {link.label}
        <ExternalLink className="w-3.5 h-3.5 opacity-50" />
      </a>
    );
  }

  return (
    <NavLink
      to={link.href}
      onClick={onClose}
      className={({ isActive }) =>
        `${base} ${
          isActive
            ? 'text-kotauth-primary'
            : 'text-kotauth-text-secondary hover:text-kotauth-text-primary'
        }`
      }
    >
      {link.label}
    </NavLink>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kotauth-bg-primary/80 backdrop-blur-xl border-b border-kotauth-surface-2'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/brand/kotauth-negative.svg"
              alt="KotAuth Logo"
              className="h-10"
              height="40px"
              width="160px"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.label} link={link} />
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-kotauth-text-secondary hover:text-kotauth-text-primary hover:bg-kotauth-surface-1 font-mono"
            >
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-1 hover:border-kotauth-primary/50 font-mono"
            >
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <Play className="w-3.5 h-3.5 mr-1.5" />
                Demo
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white font-mono"
            >
              <a href={QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-kotauth-bg-secondary border-kotauth-surface-2 p-10"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <MobileNavItem
                    key={link.label}
                    link={link}
                    onClose={() => setMobileOpen(false)}
                  />
                ))}
                <hr className="border-kotauth-surface-2" />
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start text-kotauth-text-secondary hover:text-kotauth-text-primary font-mono"
                >
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-1 font-mono"
                >
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try the Demo
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white font-mono"
                >
                  <a
                    href={QUICKSTART_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </motion.header>
  );
}
