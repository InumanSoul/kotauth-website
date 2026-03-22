import { motion } from 'framer-motion';
import { Play, Users, Shield, Building2, KeyRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';

const DEMO_URL = 'https://demo.kotauth.com';

const demoHighlights = [
  {
    icon: Building2,
    title: 'Two workspaces',
    description: 'Acme Corp and StartupLabs — each with isolated users, roles, and applications.',
  },
  {
    icon: Users,
    title: 'Pre-seeded users',
    description: 'Admins, developers, and viewers already configured with roles and group memberships.',
  },
  {
    icon: Shield,
    title: 'Full RBAC in action',
    description: 'Roles, groups, composite inheritance, and audit trails — all populated and visible.',
  },
  {
    icon: KeyRound,
    title: 'OAuth apps & API keys',
    description: 'Registered applications with client credentials and scoped API keys ready to inspect.',
  },
];

export function LiveDemo() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-kotauth-bg-secondary border-y border-kotauth-surface-2">
      <div className="section-container relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Live Demo</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
            See it running —{' '}
            <span className="gradient-text">no install required</span>
          </h2>
          <p className="text-lg text-kotauth-text-secondary">
            A public instance with seeded data. Explore the admin console, user management,
            OAuth configuration, and audit logs. Data resets periodically.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          staggerDelay={0.07}
        >
          {demoHighlights.map((item, index) => (
            <StaggerItem key={index}>
              <div className="bg-kotauth-surface-1 border border-kotauth-surface-2 p-5 h-full hover:border-kotauth-primary/30 transition-colors">
                <div className="w-9 h-9 bg-kotauth-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-4 h-4 text-kotauth-primary" />
                </div>
                <p className="text-sm font-semibold text-kotauth-text-primary font-mono mb-1.5">
                  {item.title}
                </p>
                <p className="text-xs text-kotauth-text-tertiary font-mono leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white px-8 h-12 font-mono"
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              <Play className="w-4 h-4 mr-2" />
              Launch the Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
