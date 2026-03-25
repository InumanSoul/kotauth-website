import { Link } from 'react-router-dom';
import {
  Container,
  Shield,
  Building2,
  Key,
  ShieldCheck,
  Webhook,
  ArrowRight,
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  {
    icon: Shield,
    title: 'OAuth 2.0 & OpenID Connect',
    description:
      'Authorization Code + PKCE, Client Credentials, token introspection (RFC 7662), revocation (RFC 7009), and OIDC Discovery — all out of the box.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant by Design',
    description:
      'Every workspace gets its own RS256 key pair, isolated user base, and slug-routed API — /t/{workspace}/api/v1. Zero cross-tenant data leakage by design.',
  },
  {
    icon: Key,
    title: 'Flexible Authentication',
    description:
      'Password + TOTP with recovery codes, Google and GitHub OAuth with automatic account linking by email. MFA enforced per workspace.',
  },
  {
    icon: ShieldCheck,
    title: 'Security That Ships by Default',
    description:
      'bcrypt passwords, AES-256-GCM SMTP credentials, SHA-256 API key hashing, HSTS headers, CSRF protection, and 5 req/min login rate limiting — hardened before your first deploy.',
  },
  {
    icon: Webhook,
    title: 'Real-time Webhooks',
    description:
      'HMAC-SHA256 signed payloads for 8 event types — user created, login, MFA enabled, password changed, and more. Exponential backoff retries built in.',
  },
  {
    icon: Container,
    title: 'Docker-Native Deployment',
    description:
      '~85 MB multi-stage image on GHCR. One-command quickstart or bring your own .env. Bundled PostgreSQL or connect to your own database (RDS, Supabase, Neon). Flyway migrations run automatically.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 lg:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
            Everything you need for modern authentication
          </h2>
          <p className="text-lg text-kotauth-text-secondary">
            Complete identity infrastructure with the simplicity developers expect
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index} className="h-full">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* See All Features CTA */}
        <AnimatedSection className="text-center mt-12">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-mono text-kotauth-primary hover:text-kotauth-primary-light transition-colors group"
          >
            Explore all features and technical details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
