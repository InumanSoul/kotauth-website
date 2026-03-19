import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Shield,
  Building2,
  Key,
  ShieldCheck,
  Webhook,
  Container,
  Users,
  Palette,
  ArrowRight,
  Github,
  Lock,
  FileCode,
  Fingerprint,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '@/components/FeatureCard';
import { GradientGlow } from '@/components/GradientGlow';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { AuthShowcase } from '@/sections/AuthShowcase';
import { PageSEO } from '@/components/PageSEO';

const GITHUB_URL = 'https://github.com/inumansoul/kotauth';

// ─── All Features ─────────────────────────────────────────────────────────────

const allFeatures = [
  {
    icon: Shield,
    title: 'OAuth 2.0 & OpenID Connect',
    description:
      'Authorization Code + PKCE (required for all public clients), Client Credentials for machine-to-machine, Refresh Token rotation with immediate invalidation, token introspection (RFC 7662), revocation (RFC 7009), and OIDC Discovery at /.well-known/openid-configuration. Any OIDC-compliant client library works without modification.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant by Design',
    description:
      'Every workspace gets its own RS256 key pair provisioned on first use — no shared signing key across tenants. Isolated user directories, slug-routed APIs (/t/{workspace}/api/v1), independent issuer URLs, and configurable token TTLs. The same email address is treated as a completely separate identity in each workspace.',
  },
  {
    icon: Key,
    title: 'Flexible Authentication',
    description:
      'Password authentication with history tracking, blacklist checking, and complexity enforcement. TOTP MFA (RFC 6238) with recovery codes. Google and GitHub OAuth with automatic account linking by email — users who signed up with a password can link their social account without creating a duplicate. MFA enforcement is configurable per workspace.',
  },
  {
    icon: Users,
    title: 'RBAC with Groups & Inheritance',
    description:
      'Assign roles directly to users or via groups. Groups inherit roles, users inherit group membership. Composite inheritance means a user in multiple groups accumulates all permissions. Access revocation is immediate — no waiting for token expiry. Admin and user-initiated session revocation, plus bulk revocation from the admin console.',
  },
  {
    icon: ShieldCheck,
    title: 'Security That Ships by Default',
    description:
      'bcrypt password hashing, AES-256-GCM encrypted SMTP credentials per tenant, SHA-256 hashed API keys (plain text never stored), HSTS headers, X-Frame-Options, CSRF protection on all form endpoints, startup validation that refuses unsafe defaults in production, and 5 req/min login rate limiting per IP. Hardened before your first deploy.',
  },
  {
    icon: Webhook,
    title: 'Real-time Webhooks',
    description:
      'HMAC-SHA256 signed payloads delivered for 8 event types: user.created, user.updated, user.deleted, user.login, user.logout, mfa.enabled, password.changed, and session.revoked. Configurable endpoint URLs with exponential backoff retry logic built in. React to identity events without polling.',
  },
  {
    icon: Palette,
    title: 'White-label Auth Pages',
    description:
      'CSS variables injected server-side at render time — no CDN cache invalidation, no rebuild required. Custom primary color, background, logo, and favicon per tenant. Three presets included: Dark, Light, and Simple. Theming is fully isolated — changing one tenant\'s theme has zero effect on others.',
  },
  {
    icon: Container,
    title: 'Docker-Native Deployment',
    description:
      '120 MB multi-stage image published to GHCR (ghcr.io/inumansoul/kotauth). Bring your own .env and run docker compose up -d. Flyway migrations run automatically on startup — no init scripts, no manual schema setup. Compose stack includes PostgreSQL with a health check so Kotauth only starts when the database is ready.',
  },
];

// ─── RFC Standards ─────────────────────────────────────────────────────────────

const rfcBadges = [
  { label: 'RFC 7519', description: 'JSON Web Token (JWT)' },
  { label: 'RFC 7636', description: 'PKCE for OAuth 2.0' },
  { label: 'RFC 7009', description: 'Token Revocation' },
  { label: 'RFC 7662', description: 'Token Introspection' },
  { label: 'RFC 8414', description: 'Authorization Server Metadata' },
  { label: 'RFC 6238', description: 'TOTP Algorithm' },
  { label: 'RFC 7807', description: 'Problem Details for APIs' },
];

// ─── Security Primitives ────────────────────────────────────────────────────────

const securityPrimitives = [
  { icon: Lock, label: 'bcrypt', detail: 'Password hashing' },
  { icon: Shield, label: 'AES-256-GCM', detail: 'SMTP credential encryption' },
  { icon: Fingerprint, label: 'SHA-256', detail: 'API key hashing' },
  { icon: FileCode, label: 'RS256', detail: 'Per-tenant JWT signing' },
  { icon: RefreshCw, label: 'Token rotation', detail: 'Refresh token invalidation' },
  { icon: ShieldCheck, label: 'HSTS + CSRF', detail: 'Transport & request hardening' },
];

// ─── Page ──────────────────────────────────────────────────────────────────────

export function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <PageSEO
        title="Features — Kotauth"
        description="Every feature Kotauth ships in v1.0.2: OAuth 2.0 & OIDC, multi-tenant workspaces, RBAC, TOTP MFA, social login, HMAC webhooks, white-label auth screens, and Docker-native deployment. RFC 7009, 7662, 7636, 8414 compliant."
        path="/features"
      />
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <GradientGlow
          className="top-0 left-1/2 -translate-x-1/2"
          size={800}
          color="rgba(0, 119, 168, 0.1)"
        />
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-3xl">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-kotauth-text-tertiary hover:text-kotauth-primary transition-colors mb-8 group"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to home
            </Link>
            <span className="eyebrow mb-4 block">Features</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-kotauth-text-primary leading-[1.1] tracking-tight mb-6 font-mono">
              What Kotauth{' '}
              <span className="gradient-text">actually ships</span>
            </h1>
            <p className="text-lg text-kotauth-text-secondary leading-relaxed max-w-2xl">
              Every feature listed here is in production today. No beta labels, no roadmap
              promises — this is the current v1.0.2 release.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Auth UI Showcase */}
      <AuthShowcase />

      {/* All Features Grid */}
      <section className="py-8 pb-24">
        <div className="section-container">
          <StaggerContainer
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-0"
            staggerDelay={0.07}
          >
            {allFeatures.map((feature, index) => (
              <StaggerItem key={index} className="h-full">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* RFC Standards Compliance */}
      <section className="py-24 relative overflow-hidden">
        <GradientGlow
          className="bottom-0 right-0 translate-x-1/3"
          size={600}
          color="rgba(0, 163, 224, 0.07)"
        />
        <div className="section-container relative z-10">
          <AnimatedSection className="mb-12">
            <span className="eyebrow mb-4 block">Standards</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono mb-3">
              Built on open standards
            </h2>
            <p className="text-kotauth-text-secondary max-w-xl">
              Any OIDC-compliant client library works with Kotauth without modification.
              These are the RFCs implemented — not approximated.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {rfcBadges.map((rfc, index) => (
              <motion.div
                key={rfc.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bg-kotauth-surface-1 border border-kotauth-surface-2 p-4 hover:border-kotauth-primary/30 transition-colors"
              >
                <p className="text-sm font-semibold text-kotauth-primary font-mono mb-1">
                  {rfc.label}
                </p>
                <p className="text-xs text-kotauth-text-tertiary font-mono leading-relaxed">
                  {rfc.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Primitives */}
      <section className="py-24 bg-kotauth-bg-secondary border-y border-kotauth-surface-2">
        <div className="section-container">
          <AnimatedSection className="mb-12">
            <span className="eyebrow mb-4 block">Security</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono mb-3">
              Hardened before your first deploy
            </h2>
            <p className="text-kotauth-text-secondary max-w-xl">
              Security decisions are made at the framework level — not left as configuration
              exercises for the operator.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {securityPrimitives.map((prim, index) => (
              <motion.div
                key={prim.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 p-5 bg-kotauth-surface-1 border border-kotauth-surface-2 hover:border-kotauth-primary/30 transition-colors"
              >
                <div className="w-9 h-9 bg-kotauth-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <prim.icon className="w-4 h-4 text-kotauth-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-kotauth-text-primary font-mono mb-0.5">
                    {prim.label}
                  </p>
                  <p className="text-xs text-kotauth-text-tertiary font-mono">
                    {prim.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold text-kotauth-text-primary font-mono mb-4">
              Ready to deploy?
            </h2>
            <p className="text-kotauth-text-secondary mb-8">
              Everything above ships in a single Docker image. No licensing, no per-seat cost,
              no SaaS dependency.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white px-6 h-12 font-mono"
              >
                <a href={`${GITHUB_URL}#quick-start`} target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-1 hover:border-kotauth-primary/50 px-6 h-12 font-mono"
              >
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
