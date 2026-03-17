import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "We migrated from Keycloak to Kotauth and reduced our authentication infrastructure complexity by 80%. The Docker deployment is a game-changer.",
    author: "Sarah Chen",
    role: "CTO at TechStart",
    avatar: "SC",
  },
  {
    quote: "Finally, an identity platform that understands developers. Set up in minutes, not days. The API is clean and the documentation is excellent.",
    author: "Marcus Johnson",
    role: "Lead Engineer at CloudScale",
    avatar: "MJ",
  },
  {
    quote: "The modern UI makes user management actually enjoyable. Our support team loves how intuitive everything is compared to our old system.",
    author: "Elena Rodriguez",
    role: "Product Manager at AppFlow",
    avatar: "ER",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-kotauth-text-primary leading-tight font-mono">
            Loved by developers
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-kotauth-primary/10 flex items-center justify-center">
              <Quote className="w-6 h-6 text-kotauth-primary" />
            </div>

            {/* Testimonial Content */}
            <div className="bg-kotauth-surface-1 border border-kotauth-surface-2 p-8 sm:p-12 min-h-[280px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  className="text-center"
                >
                  <p className="text-lg sm:text-xl text-kotauth-text-primary leading-relaxed mb-8">
                    "{testimonials[current].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-12 h-12 bg-kotauth-primary/20 flex items-center justify-center">
                      <span className="text-sm font-semibold text-kotauth-primary font-mono">
                        {testimonials[current].avatar}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-kotauth-text-primary font-mono">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-kotauth-text-tertiary font-mono">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goPrev}
                className="w-10 h-10 bg-kotauth-surface-1 border border-kotauth-surface-2 flex items-center justify-center text-kotauth-text-tertiary hover:text-kotauth-text-primary hover:bg-kotauth-surface-2 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goTo(index)}
                    className={`h-2 transition-all ${
                      index === current 
                        ? 'w-6 bg-kotauth-primary' 
                        : 'w-2 bg-kotauth-surface-2 hover:bg-kotauth-surface-3'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={goNext}
                className="w-10 h-10 bg-kotauth-surface-1 border border-kotauth-surface-2 flex items-center justify-center text-kotauth-text-tertiary hover:text-kotauth-text-primary hover:bg-kotauth-surface-2 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
