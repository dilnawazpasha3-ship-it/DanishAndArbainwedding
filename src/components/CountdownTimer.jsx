import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { Clock, Sparkles } from 'lucide-react';

export const CountdownTimer = () => {
  // Target: 14 December 2026, 12:00:00 PM
  const targetDate = new Date(2026, 11, 14, 12, 0, 0).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="relative py-16 md:py-24 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1 }}
        className="relative bg-velvet-900/80 backdrop-blur-2xl border border-gold-400/35 rounded-[2.5rem] p-8 sm:p-12 shadow-gold-glow-lg overflow-hidden royal-halo"
      >
        <CornerFlourish position="top-left" className="w-10 h-10 text-gold-400/50 absolute top-2 left-2" />
        <CornerFlourish position="top-right" className="w-10 h-10 text-gold-400/50 absolute top-2 right-2" />
        <CornerFlourish position="bottom-left" className="w-10 h-10 text-gold-400/50 absolute bottom-2 left-2" />
        <CornerFlourish position="bottom-right" className="w-10 h-10 text-gold-400/50 absolute bottom-2 right-2" />

        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '16s' }} />
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold">
            COUNTING DOWN THE MOMENTS
          </span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold gold-sweep tracking-wide mb-2">
          Until The Blessed Day
        </h2>

        <p className="font-sans text-xs sm:text-sm text-ivory-200/80 font-light mb-8">
          14 December 2026 • 12:00 PM
        </p>

        <OrnateDivider className="mb-10 opacity-50" />

        {/* Countdown Units Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-velvet-800/80 border border-gold-400/40 shadow-inner-gold group hover:border-gold-400/80 hover:shadow-gold-glow transition-all overflow-hidden"
            >
              {/* Subtle top gloss reflection */}
              <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

              {/* Number display with smooth keyframe transition */}
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={unit.value}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight"
                >
                  {formatNumber(unit.value)}
                </motion.div>
              </AnimatePresence>

              {/* Label */}
              <div className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold mt-2">
                {unit.label}
              </div>

              {/* Pulsing bottom gold line */}
              <div className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/70 to-transparent mt-3" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
