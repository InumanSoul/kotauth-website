import { Hero } from '@/sections/Hero';
import { FeaturesGrid } from '@/sections/FeaturesGrid';
import { AuthShowcase } from '@/sections/AuthShowcase';
import { CodeShowcase } from '@/sections/CodeShowcase';
import { LiveDemo } from '@/sections/LiveDemo';
import { ComparisonTable } from '@/sections/ComparisonTable';
import { Architecture } from '@/sections/Architecture';
import { CTASection } from '@/sections/CTASection';
import { PageSEO } from '@/components/PageSEO';

export function HomePage() {
  return (
    <>
      <PageSEO
        title="Kotauth — Self-hosted authentication for modern applications"
        description="The open-source, Docker-native identity platform. OAuth 2.0, OpenID Connect, multi-tenancy, white-label auth screens, and webhooks — deploy in seconds with a single docker compose up. Try the live demo at demo.kotauth.com."
        path="/"
      />
      <Hero />
      <FeaturesGrid />
      <AuthShowcase />
      <CodeShowcase />
      <LiveDemo />
      <ComparisonTable />
      <Architecture />
      <CTASection />
    </>
  );
}
