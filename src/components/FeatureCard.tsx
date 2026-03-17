import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="group p-8 bg-kotauth-surface-1 border border-kotauth-surface-2 transition-all duration-300"
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }
      }}
    >
      <div className="mb-5">
        <motion.div
          className="w-12 h-12 bg-kotauth-primary/10 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon className="w-6 h-6 text-kotauth-primary" />
        </motion.div>
      </div>
      <h3 className="text-lg font-semibold text-kotauth-text-primary mb-3 font-mono">
        {title}
      </h3>
      <p className="text-kotauth-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
