import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CodeBlock } from '@/components/CodeBlock';
import { GradientGlow } from '@/components/GradientGlow';

const GITHUB_URL = 'https://github.com/inumansoul/kotauth';
const DEMO_URL = 'https://demo.kotauth.com';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const codeContent = `# Download the compose stack
$ curl -O https://raw.githubusercontent.com/inumansoul/kotauth/main/docker/docker-compose.yml
$ curl -O https://raw.githubusercontent.com/inumansoul/kotauth/main/docker/.env.example
$ cp .env.example .env

# Start Kotauth
$ docker compose up -d

Starting Kotauth Server v1.0.2...
✓ Identity server ready on port 8080
✓ Admin dashboard available at /admin
✓ API documentation at /swagger`;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background glows */}
      <GradientGlow 
        className="top-1/4 left-1/4 -translate-x-1/2" 
        size={800}
        color="rgba(0, 119, 168, 0.12)"
      />
      <GradientGlow 
        className="bottom-1/4 right-1/4 translate-x-1/2" 
        size={600}
        color="rgba(0, 163, 224, 0.08)"
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="eyebrow">Docker-Native Identity Platform</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-kotauth-text-primary leading-[1.1] tracking-tight mb-6 font-mono"
            >
              Identity infrastructure for{' '}
              <span className="gradient-text">modern applications</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-kotauth-text-secondary leading-relaxed mb-8"
            >
              The self-hosted authentication platform that combines enterprise power with 
              developer experience. Deploy in seconds, scale with confidence.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-kotauth-primary hover:bg-kotauth-primary-light text-white px-6 h-12 font-mono"
              >
                <a className='flex items-center' href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  <Play className="w-4 h-4 mr-2" />
                  Try the Demo
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-kotauth-surface-2 text-kotauth-text-primary hover:bg-kotauth-surface-1 hover:border-kotauth-primary/50 px-6 h-12 font-mono"
              >
                <a className='flex items-center' href={`${GITHUB_URL}#quick-start`} target="_blank" rel="noopener noreferrer">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1] as const
            }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-kotauth-primary/10 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-kotauth-primary-light/10 blur-2xl" />
              
              <CodeBlock 
                code={codeContent}
                language="bash"
                className="relative shadow-2xl shadow-kotauth-primary/5"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-kotauth-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
