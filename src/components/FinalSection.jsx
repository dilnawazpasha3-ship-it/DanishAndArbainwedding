import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { Heart, Sparkles, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalSection = () => {
  const [blessed, setBlessed] = useState(false);

  const handleSendBlessing = () => {
    try {
      // 1. Center heart/gold shower
      confetti({
        particleCount: 85,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#F8ECC2', '#D4AF37', '#FFFFFF', '#C5A059'],
        disableForReducedMotion: true,
      });
      // 2. Continuous sparkling stars
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0.2, y: 0.7 },
          colors: ['#F8ECC2', '#D4AF37'],
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 0.8, y: 0.7 },
          colors: ['#F8ECC2', '#D4AF37'],
        });
      }, 250);
    } catch (e) {
      // safe fallback
    }
    setBlessed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="final-section" className="relative pt-16 pb-24 md:pb-32 px-4 max-w-4xl mx-auto text-center">
      {/* Premium Animated Closing Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-gradient-to-b from-velvet-900/90 via-velvet-950/95 to-velvet-950 border-2 border-gold-400/40 rounded-[2.5rem] p-8 sm:p-14 shadow-gold-glow-lg overflow-hidden royal-halo"
      >
        <CornerFlourish position="top-left" className="w-14 h-14 text-gold-400/60 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-14 h-14 text-gold-400/60 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-14 h-14 text-gold-400/60 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-14 h-14 text-gold-400/60 absolute bottom-3 right-3" />

        {/* Floating floral movement inside card */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 6, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full border border-gold-400/60 bg-velvet-800/90 flex items-center justify-center text-gold-300 shadow-inner-gold"
        >
          <IslamicStar size={32} className="text-gold-400" />
        </motion.div>

        {/* Closing Greeting Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-300 mb-4 select-none"
        >
          With Love &amp; Blessings
        </motion.p>

        {/* Couple Names */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider gold-sweep mb-4"
        >
          Arbaeen &amp; Danish
        </motion.h2>

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="font-cormorant text-xl sm:text-2xl text-ivory-100 uppercase tracking-[0.2em] font-semibold mb-8"
        >
          14 December 2026
        </motion.p>

        <OrnateDivider className="mb-8 opacity-60" />

        {/* Send Du'a / Blessing Interaction */}
        <div className="flex flex-col items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendBlessing}
            className="group relative inline-flex items-center gap-2.5 px-6 sm:px-9 py-3.5 sm:py-4 rounded-full border border-gold-400/50 bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 hover:border-gold-400 text-gold-200 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all shadow-gold-glow overflow-hidden focus:outline-none"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{blessed ? "Du'a & Blessings Sent ❤️" : "Send Du'a & Blessings"}</span>
            <Sparkles className="w-4 h-4 text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
          </motion.button>

          {blessed && (
            <motion.p
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="font-cormorant italic text-gold-200 text-lg sm:text-xl mt-4"
            >
              JazakAllah Khair for your heartfelt prayers!
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Return to Top button */}
      <div className="mt-12 flex justify-center">
        <motion.button
          whileHover={{ y: -3 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400/70 hover:text-gold-300 transition-colors p-2 font-sans focus:outline-none"
        >
          <ChevronUp size={16} />
          <span>Back to Top</span>
        </motion.button>
      </div>

      <div className="mt-6 text-center text-ivory-300/40 text-xs font-sans font-light">
        <p>In the name of Allah, the Most Gracious, the Most Merciful</p>
        <p className="mt-1">Arbaeen &amp; Danish • 14 December 2026 • Shehnaz Palace Banquet Hall</p>
      </div>
    </footer>
  );
};
