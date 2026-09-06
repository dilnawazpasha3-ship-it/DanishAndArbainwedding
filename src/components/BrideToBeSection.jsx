import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Calendar } from 'lucide-react';
import { CornerFlourish, OrnateDivider } from './OrnamentalElements';
import brideImg from '../assets/bride-tobe.jpg';

/**
 * Aesthetic Bride-To-Be Section ("Dear December")
 */
export const BrideToBeSection = () => {
  return (
    <section id="bride-to-be" className="relative py-14 md:py-20 px-4 max-w-4xl mx-auto text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative card-white-royal rounded-[2.5rem] p-6 sm:p-10 md:p-12 shadow-gold-glow overflow-hidden"
      >
        <CornerFlourish position="top-left" className="w-12 h-12 text-gold-600/70 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-12 h-12 text-gold-600/70 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-12 h-12 text-gold-600/70 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-12 h-12 text-gold-600/70 absolute bottom-3 right-3" />

        <div className="absolute top-0 left-6 sm:left-12 pointer-events-none hidden sm:block">
          <motion.div
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center origin-top"
          >
            <div className="w-[1.5px] h-14 bg-gradient-to-b from-transparent to-gold-500" />
            <div className="w-6 h-9 rounded-md bg-gradient-to-b from-gold-400/40 via-amber-200/50 to-gold-600/50 border border-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.5)] flex items-center justify-center">
              <div className="w-2 h-3 rounded-full bg-amber-400 blur-[1px] animate-pulse" />
            </div>
          </motion.div>
        </div>

        <div className="absolute top-0 right-6 sm:right-12 pointer-events-none hidden sm:block">
          <motion.div
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="flex flex-col items-center origin-top"
          >
            <div className="w-[1.5px] h-14 bg-gradient-to-b from-transparent to-gold-500" />
            <div className="w-6 h-9 rounded-md bg-gradient-to-b from-gold-400/40 via-amber-200/50 to-gold-600/50 border border-gold-400 shadow-[0_0_12px_rgba(212,175,55,0.5)] flex items-center justify-center">
              <div className="w-2 h-3 rounded-full bg-amber-400 blur-[1px] animate-pulse" />
            </div>
          </motion.div>
        </div>

        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-rose-500/10 via-gold-400/20 to-rose-500/10 border border-gold-500/50 text-gold-900 text-xs font-sans tracking-[0.25em] uppercase font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-spin" style={{ animationDuration: '6s' }} />
          <span>BRIDE TO BE</span>
          <Sparkles className="w-3.5 h-3.5 text-gold-600 animate-spin" style={{ animationDuration: '6s' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-2"
        >
          <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-teal-700 drop-shadow-[0_2px_10px_rgba(20,184,166,0.25)] font-normal tracking-wide">
            Dear December
          </h2>
          <p className="font-cinzel text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-700 font-bold mt-1">
            Arbaeen&apos;s Bridal Journey
          </p>
        </motion.div>

        <OrnateDivider className="my-5 opacity-70" />

        <div className="relative my-6 max-w-[260px] sm:max-w-[300px] mx-auto select-none">
          <div className="relative rounded-t-[9rem] rounded-b-[2rem] p-2 bg-gradient-to-b from-[#F5E296] via-[#D4AF37] to-[#876624] shadow-[0_15px_35px_rgba(212,175,55,0.35)]">
            <div className="relative rounded-t-[8.5rem] rounded-b-[1.8rem] overflow-hidden bg-velvet-950 aspect-[9/14] border-2 border-gold-200/80">
              <motion.img
                src={brideImg}
                alt="Bride to Be - Arbaeen"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute top-[38%] left-[54%] pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-90" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_10px_#FFFFFF]" />
                </span>
              </div>

              <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 text-gold-200 font-cinzel text-xs font-bold uppercase tracking-widest drop-shadow">
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                <span>Bride to Be • Arbaeen</span>
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-xl mx-auto space-y-3 mt-4 text-[#2D2821]">
          <p className="font-cormorant italic text-lg sm:text-xl md:text-2xl text-gold-900 leading-relaxed font-semibold">
            &ldquo;A beautiful new chapter is waiting to begin, filled with love, dreams &amp; endless little moments of happiness.&rdquo;
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#4D4539] leading-relaxed font-normal">
            She is stepping closer to her forever, and every moment feels more magical than the last. May Allah grant their union endless barkat, joy, and peace.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 border border-gold-500/60 shadow-sm"
        >
          <Calendar className="w-4 h-4 text-gold-700" />
          <span className="font-cinzel text-xs sm:text-sm font-bold text-gold-900 tracking-widest uppercase">
            14 December 2026 • The Blessed Day
          </span>
          <Heart className="w-4 h-4 text-rose-600 fill-rose-600 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
};
