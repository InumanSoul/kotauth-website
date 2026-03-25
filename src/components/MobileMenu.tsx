import { useState } from 'react';
import { Menu, Github, ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const GITHUB_URL = 'https://github.com/inumansoul/kotauth';
const QUICKSTART_URL = 'https://docs.kotauth.com/getting-started/quickstart/';
const DEMO_URL = 'https://demo.kotauth.com';

type NavLinkDef = {
  label: string;
  href: string;
  external: boolean;
};

const navLinks: NavLinkDef[] = [
  { label: 'Features', href: '/features', external: false },
  { label: 'Roadmap', href: '/roadmap', external: false },
  { label: 'Docs', href: 'https://docs.kotauth.com/getting-started/introduction/', external: true },
  { label: 'Contact', href: '/contact', external: false },
];

function MobileNavItem({ link, onClose }: { link: NavLinkDef; onClose: () => void }) {
  const base = 'text-lg font-mono transition-colors duration-150';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isActive = !link.external && currentPath === link.href;

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
    <a
      href={link.href}
      onClick={onClose}
      className={`${base} ${
        isActive
          ? 'text-kotauth-primary'
          : 'text-kotauth-text-secondary hover:text-kotauth-text-primary'
      }`}
    >
      {link.label}
    </a>
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
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
              onClose={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
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
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
