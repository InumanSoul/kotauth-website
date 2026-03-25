import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Palette, Server, Layers } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientGlow } from '@/components/GradientGlow';
import LoginMockup from '@/components/LoginMockup';
import { themes } from '@/lib/authThemes';
import type { ThemeKey } from '@/lib/authThemes';

// ─── Selling Points ───────────────────────────────────────────────────────────

const points = [
  {
    icon: Zap,
    title: 'Blazing fast',
    body: 'Auth pages are server-rendered HTML — no JS waterfall, no hydration delay. First byte to painted screen in under 100ms.',
  },
  {
    icon: Palette,
    title: 'Per-tenant theming',
    body: 'CSS variables injected at render time. Each workspace gets its own colors, logo, and favicon — no rebuild, no CDN invalidation.',
  },
  {
    icon: Server,
    title: 'Full screen set included',
    body: 'Login, register, forgot password, reset password, TOTP MFA, and email verification — all styled and production-ready.',
  },
  {
    icon: Layers,
    title: 'Three presets, infinite customization',
    body: 'Start with Dark, Light, or Simple. Override any token to match your brand exactly without writing a line of backend code.',
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export function AuthShowcase() {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('dark');

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <GradientGlow
        className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
        size={700}
        color="rgba(0, 119, 168, 0.18)"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Copy */}
          <AnimatedSection>
            <span className="eyebrow mb-4 block">Auth Experience</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
              Auth screens that{' '}
              <span className="gradient-text">don't look like auth screens</span>
            </h2>
            <p className="text-lg text-kotauth-text-secondary mb-10 leading-relaxed">
              Production-ready login, registration, MFA, and account management pages —
              beautiful by default, fully white-labeled per tenant, zero rebuild required.
            </p>

            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4"
                >
                  <div className="w-9 h-9 bg-kotauth-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <point.icon className="w-4 h-4 text-kotauth-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-kotauth-text-primary font-mono mb-1">
                      {point.title}
                    </p>
                    <p className="text-sm text-kotauth-text-secondary leading-relaxed">
                      {point.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Interactive Preview */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              {/* Subtle glow behind preview */}
              <div className="absolute inset-0 bg-kotauth-primary/5 blur-3xl -z-10 rounded-3xl" />

              {/* Browser chrome */}
              <div className="bg-kotauth-surface-1 border border-kotauth-surface-2 overflow-hidden shadow-2xl shadow-black/30">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-kotauth-surface-2 bg-kotauth-bg-secondary">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-kotauth-error/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-kotauth-warning/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-kotauth-success/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-kotauth-surface-2 rounded px-4 py-1 text-[11px] font-mono text-kotauth-text-muted w-48 text-center">
                      auth.acme.com/login
                    </div>
                  </div>
                  {/* Theme switcher tabs */}
                  <div className="flex gap-1">
                    {(Object.keys(themes) as ThemeKey[]).map((key) => (
                      <button
                        key={key}
                        onClick={() => setActiveTheme(key)}
                        className={`text-[10px] font-mono px-2 py-1 transition-all ${
                          activeTheme === key
                            ? 'bg-kotauth-primary text-white'
                            : 'text-kotauth-text-muted hover:text-kotauth-text-secondary'
                        }`}
                      >
                        {themes[key].label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preview area */}
                <div className="h-[360px] overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    <LoginMockup key={activeTheme} theme={activeTheme} />
                  </AnimatePresence>
                </div>
              </div>

              {/* Label below */}
              <p className="text-center text-xs text-kotauth-text-muted font-mono mt-3">
                Click the theme tabs to preview — same URL, different tenant config
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
