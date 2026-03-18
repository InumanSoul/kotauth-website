import { Hero } from '@/sections/Hero';
import { FeaturesGrid } from '@/sections/FeaturesGrid';
import { CodeShowcase } from '@/sections/CodeShowcase';
import { ComparisonTable } from '@/sections/ComparisonTable';
import { Architecture } from '@/sections/Architecture';
import { CTASection } from '@/sections/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <CodeShowcase />
      <ComparisonTable />
      <Architecture />
      <CTASection />
    </>
  );
}
