import { motion } from 'framer-motion';
import { Users, Server, LayoutGrid, BarChart3, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { GradientGlow } from '@/components/GradientGlow';

const architectureSteps = [
  {
    icon: Users,
    title: 'Unified Identity',
    description: 'One user base across all your applications',
  },
  {
    icon: LayoutGrid,
    title: 'Simple Integration',
    description: 'Add authentication to any app in minutes',
  },
  {
    icon: BarChart3,
    title: 'Complete Visibility',
    description: 'Monitor and manage everything from one dashboard',
  },
];

export function Architecture() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <GradientGlow 
        className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
        size={900}
        color="rgba(0, 119, 168, 0.05)"
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Architecture</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight mb-4 font-mono">
            Centralized identity for your entire stack
          </h2>
          <p className="text-lg text-kotauth-text-secondary">
            One identity platform, unlimited applications
          </p>
        </AnimatedSection>

        {/* Architecture Diagram */}
        <AnimatedSection className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Flow Diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              {/* Users */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-kotauth-surface-1 border border-kotauth-surface-2 flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-kotauth-primary" />
                </div>
                <span className="text-sm font-medium text-kotauth-text-secondary font-mono">Users</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="lg:rotate-0 rotate-90"
              >
                <ArrowRight className="w-6 h-6 text-kotauth-primary" />
              </motion.div>

              {/* Kotauth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center"
              >
                <div className="w-28 h-28 bg-kotauth-primary/10 border-2 border-kotauth-primary flex items-center justify-center mb-3 relative">
                  <div className="absolute inset-0 bg-kotauth-primary/5 animate-pulse-glow" />
                  <Server className="w-10 h-10 text-kotauth-primary relative z-10" />
                </div>
                <span className="text-sm font-medium text-kotauth-text-primary font-mono">Kotauth</span>
                <span className="text-xs text-kotauth-text-tertiary font-mono">Identity Server</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="lg:rotate-0 rotate-90"
              >
                <ArrowRight className="w-6 h-6 text-kotauth-primary" />
              </motion.div>

              {/* Applications */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-kotauth-surface-1 border border-kotauth-surface-2 flex items-center justify-center mb-3">
                  <LayoutGrid className="w-8 h-8 text-kotauth-primary-light" />
                </div>
                <span className="text-sm font-medium text-kotauth-text-secondary font-mono">Applications</span>
              </motion.div>
            </div>

            {/* Admin Dashboard connection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center mt-8"
            >
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-8 bg-kotauth-surface-2" />
                <div className="w-20 h-20 bg-kotauth-surface-1 border border-kotauth-surface-2 flex items-center justify-center mb-3">
                  <BarChart3 className="w-8 h-8 text-kotauth-text-tertiary" />
                </div>
                <span className="text-sm font-medium text-kotauth-text-secondary font-mono">Admin Dashboard</span>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {architectureSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const
              }}
              className="text-center p-6"
            >
              <div className="w-12 h-12 bg-kotauth-surface-1 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-6 h-6 text-kotauth-primary" />
              </div>
              <h3 className="text-lg font-semibold text-kotauth-text-primary mb-2 font-mono">
                {step.title}
              </h3>
              <p className="text-sm text-kotauth-text-secondary">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
