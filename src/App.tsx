import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/Hero';
import { FeaturesGrid } from '@/sections/FeaturesGrid';
import { CodeShowcase } from '@/sections/CodeShowcase';
import { ComparisonTable } from '@/sections/ComparisonTable';
import { Architecture } from '@/sections/Architecture';
import { CTASection } from '@/sections/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-kotauth-bg-primary">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesGrid />
        <CodeShowcase />
        <ComparisonTable />
        <Architecture />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
