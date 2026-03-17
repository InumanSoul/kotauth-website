import { motion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingOrb } from '@/components/GradientGlow';

const GITHUB_URL = 'https://github.com/InumanSoul/kotauth';

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <FloatingOrb 
        className="top-1/4 left-1/4" 
        size={300}
        color="rgba(0, 119, 168, 0.15)"
      />
      <FloatingOrb 
        className="bottom-1/4 right-1/4" 
        size={250}
        color="rgba(0, 163, 224, 0.1)"
      />

      <div className="section-container relative z-10">
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Gradient background card */}
          <div className="absolute inset-0 bg-gradient-to-br from-kotauth-primary/10 via-kotauth-surface-1/50 to-kotauth-primary/5 blur-xl" />
          
          <div className="relative bg-kotauth-surface-1/80 backdrop-blur-sm border border-kotauth-surface-2 p-8 sm:p-12 lg:p-16">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-kotauth-text-primary leading-tight mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ready to simplify your{' '}
              <span className="gradient-text">authentication</span>?
            </motion.h2>

            <motion.p 
              className="text-lg text-kotauth-text-secondary mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Deploy Kotauth in under a minute. No credit card required.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button 
                size="lg"
                className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white px-8 h-12 font-mono"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-2 px-8 h-12 font-mono"
              >
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Star on GitHub
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
