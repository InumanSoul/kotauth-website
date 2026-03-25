import { motion } from 'framer-motion';

interface GradientGlowProps {
  className?: string;
  size?: number;
  color?: string;
}

export function GradientGlow({ 
  className = '', 
  size = 600,
  color = 'rgba(0, 119, 168, 0.22)'
}: GradientGlowProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(40px)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export function FloatingOrb({ 
  className = '', 
  size = 200,
  color = 'rgba(0, 119, 168, 0.2)'
}: GradientGlowProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: 'blur(30px)',
      }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
