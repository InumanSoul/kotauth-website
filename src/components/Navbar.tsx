import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';
const QUICKSTART_URL = `${GITHUB_URL}#quick-start`;

type NavLink = {
  label: string;
  href: string;
  external: boolean;
};

const navLinks: NavLink[] = [
  { label: 'Features', href: '/#features', external: false },
  { label: 'Roadmap', href: '/roadmap', external: false },
  { label: 'Docs', href: `${GITHUB_URL}#readme`, external: true },
  { label: 'Contact', href: '/contact', external: false },
];

function NavLinkItem({
  link,
  className,
  onClick,
}: {
  link: NavLink;
  className?: string;
  onClick?: () => void;
}) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.href} onClick={onClick} className={className}>
      {link.label}
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
            <img src='/brand/kotauth-negative.svg' alt="KotAuth Logo" className="h-10" height={'40px'} width={'160px'} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLinkItem
                key={link.label}
                link={link}
                className="text-sm text-kotauth-text-secondary hover:text-kotauth-text-primary transition-colors font-mono"
              />
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
              className="w-[300px] bg-kotauth-bg-secondary border-kotauth-surface-2"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <NavLinkItem
                    key={link.label}
                    link={link}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-kotauth-text-secondary hover:text-kotauth-text-primary transition-colors font-mono"
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
