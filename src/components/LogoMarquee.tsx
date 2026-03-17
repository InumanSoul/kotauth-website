import { motion } from 'framer-motion';

const logos = [
  { name: 'Vercel', initials: 'VE' },
  { name: 'Stripe', initials: 'ST' },
  { name: 'Notion', initials: 'NO' },
  { name: 'Figma', initials: 'FI' },
  { name: 'Linear', initials: 'LI' },
  { name: 'Supabase', initials: 'SU' },
  { name: 'Railway', initials: 'RA' },
  { name: 'PlanetScale', initials: 'PS' },
];

export function LogoMarquee() {
  // Double the logos for seamless loop
  const allLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-8 border-y border-kotauth-surface-2">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-kotauth-bg-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-kotauth-bg-primary to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-16 items-center"
        animate={{
          x: [0, -50 * logos.length * 4],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
        whileHover={{ animationPlayState: 'paused' }}
      >
        {allLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 opacity-40 hover:opacity-70 transition-opacity duration-300 flex-shrink-0"
          >
            <div className="w-10 h-10 bg-kotauth-surface-2 flex items-center justify-center">
              <span className="text-sm font-semibold text-kotauth-text-secondary font-mono">
                {logo.initials}
              </span>
            </div>
            <span className="text-lg font-medium text-kotauth-text-secondary whitespace-nowrap font-mono">
              {logo.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
