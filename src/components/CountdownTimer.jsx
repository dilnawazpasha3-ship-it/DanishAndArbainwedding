import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { Clock } from 'lucide-react';

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
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative bg-velvet-900/80 backdrop-blur-xl border border-gold-400/30 rounded-3xl p-8 sm:p-12 shadow-gold-glow overflow-hidden"
      >
        <CornerFlourish position="top-left" className="w-10 h-10 text-gold-400/50 absolute top-2 left-2" />
        <CornerFlourish position="top-right" className="w-10 h-10 text-gold-400/50 absolute top-2 right-2" />
        <CornerFlourish position="bottom-left" className="w-10 h-10 text-gold-400/50 absolute bottom-2 left-2" />
        <CornerFlourish position="bottom-right" className="w-10 h-10 text-gold-400/50 absolute bottom-2 right-2" />

        <div className="flex items-center justify-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-gold-400" />
          <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold">
            COUNTING DOWN THE MOMENTS
          </span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-gold-gradient tracking-wide mb-2">
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-velvet-800/70 border border-gold-400/35 shadow-inner-gold group hover:border-gold-400/70 transition-all"
            >
              {/* Number display */}
              <div className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient tracking-tight">
                {formatNumber(unit.value)}
              </div>

              {/* Label */}
              <div className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-gold-300/80 font-medium mt-2">
                {unit.label}
              </div>

              {/* Subtle bottom gold line */}
              <div className="w-8 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent mt-3" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
