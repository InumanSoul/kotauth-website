import { motion } from 'framer-motion';
import { CheckCircle2, Circle } from 'lucide-react';

export interface Phase {
  number: number;
  title: string;
  tagline: string;
  items: string[];
}

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface PhaseCardProps {
  phase: Phase;
  shipped: boolean;
}

export function PhaseCard({ phase, shipped }: PhaseCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative flex gap-6 pb-12 last:pb-0 ${!shipped ? 'opacity-80' : ''}`}
    >
      {/* Timeline stem */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className={`w-10 h-10 flex items-center justify-center border-2 z-10 flex-shrink-0 ${
            shipped
              ? 'bg-kotauth-primary/15 border-kotauth-primary text-kotauth-primary'
              : 'bg-kotauth-surface-1 border-kotauth-surface-3 text-kotauth-text-muted'
          }`}
        >
          {shipped ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </div>
        {/* Stem line — hidden on last item via last:pb-0 on parent */}
        <div className="w-px flex-1 mt-2 bg-kotauth-surface-2" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pt-1.5">
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <span className="text-xs font-mono text-kotauth-text-muted">Phase {phase.number}</span>
          {shipped ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono bg-kotauth-success/10 text-kotauth-success border border-kotauth-success/20">
              ✓ Shipped
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono bg-kotauth-surface-2 text-kotauth-text-muted border border-kotauth-surface-3">
              Planned
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-kotauth-text-primary font-mono mb-1">
          {phase.title}
        </h3>
        <p className="text-sm text-kotauth-text-secondary mb-5 italic">{phase.tagline}</p>

        <ul className="space-y-2.5">
          {phase.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`mt-1.5 w-1.5 h-1.5 flex-shrink-0 ${
                  shipped ? 'bg-kotauth-primary' : 'bg-kotauth-surface-3'
                }`}
              />
              <span className="text-sm text-kotauth-text-tertiary leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
