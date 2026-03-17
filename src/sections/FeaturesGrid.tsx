import { 
  Container, 
  Shield, 
  Building2, 
  Key, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const features = [
  {
    icon: Container,
    title: 'Docker-Native Deployment',
    description: 'One command deployment with Docker. No complex configuration, no dependencies to manage.',
  },
  {
    icon: Shield,
    title: 'OAuth 2.0 & OpenID Connect',
    description: 'Full standards compliance. Be an identity provider for your entire application ecosystem.',
  },
  {
    icon: Building2,
    title: 'Multi-Tenant Organizations',
    description: 'Built-in organization management with role-based access control for B2B applications.',
  },
  {
    icon: Key,
    title: 'Flexible Authentication',
    description: 'Password, magic links, passkeys, social login. Support every user preference.',
  },
  {
    icon: Clock,
    title: 'Advanced Session Control',
    description: 'JWT tokens with refresh rotation. Revoke sessions instantly across all devices.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'MFA, rate limiting, brute force protection, and comprehensive audit logs.',
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
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
  );
}
