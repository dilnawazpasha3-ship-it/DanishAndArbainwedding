import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCinematicOpeningSound } from '../utils/audioEffects';

/**
 * Ultra-Cinematic Royal Velvet Palace Curtains Opening Animation
 * - Left & Right deep royal noir & velvet drapes with realistic fold shadows
 * - Golden damask embroidered edge borders
 * - Dynamic swinging gold rope tassels
 * - Mughal scalloped arch valance pelmet at top
 * - Radiant anamorphic golden light burst / flare upon opening
 * - Instant celestial harp glissando Web Audio API sound effect
 * - Canvas confetti golden starburst
 */
export const RoyalCurtains = ({ isOpened, onOpen }) => {
  const [isOpeningInternal, setIsOpeningInternal] = useState(false);

  const handleTriggerOpen = () => {
    if (isOpened || isOpeningInternal) return;
    setIsOpeningInternal(true);

    // 1. Play celestial harp glissando chime
    playCinematicOpeningSound();

    // 2. Trigger golden starburst & petal confetti
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#F8ECC2', '#D4AF37', '#FFFFFF', '#E6CA65', '#B88E33'],
        shapes: ['circle', 'square'],
        scalar: 1.15,
        disableForReducedMotion: true,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 65,
          origin: { x: 0.15, y: 0.55 },
          colors: ['#F8ECC2', '#D4AF37', '#FFDF73'],
          disableForReducedMotion: true,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 65,
          origin: { x: 0.85, y: 0.55 },
          colors: ['#F8ECC2', '#D4AF37', '#FFDF73'],
          disableForReducedMotion: true,
        });
      }, 250);
    } catch (e) {
      // safe fallback
    }

    // 3. Inform parent
    onOpen();
  };

  return (
    <div
      className={`fixed inset-0 z-40 overflow-hidden ${
        isOpened ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* 1. CINEMATIC GOLDEN LIGHT FLARE (Bursts open along the center seam) */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0.1 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              scaleX: [0.1, 2.5, 6, 8],
              scaleY: [0.8, 1.2, 1.4, 1.5],
            }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            {/* Center Vertical Ray */}
            <div className="w-12 h-full bg-gradient-to-r from-transparent via-white to-transparent blur-md transform" />
            {/* Radial Core Burst */}
            <div className="absolute w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(255,248,220,0.95)_0%,rgba(212,175,55,0.7)_35%,transparent_75%)] blur-2xl" />
            {/* Horizontal Anamorphic Lens Flare Line */}
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. LEFT VELVET CURTAIN */}
      <motion.div
        initial={{ x: '0%', scaleX: 1 }}
        animate={{
          x: isOpened ? '-103%' : '0%',
          scaleX: isOpened ? 0.9 : 1,
        }}
        transition={{
          duration: 2.0,
          ease: [0.25, 1, 0.4, 1],
        }}
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0d0a08] via-[#171310] to-[#221c17] border-r-2 border-gold-400/60 shadow-[15px_0_40px_rgba(0,0,0,0.9)] flex flex-col justify-between origin-left overflow-hidden"
      >
        {/* Realistic Vertical Velvet Drape Folds and Highlights */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent_0px,rgba(0,0,0,0.7)_18px,rgba(212,175,55,0.14)_35px,transparent_52px)] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.35)_0%,transparent_70%)] pointer-events-none" />

        {/* Gold Damask Embroidered Border Trim along the Opening Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gold-500/30 to-transparent flex flex-col items-center justify-around py-8 pointer-events-none border-r border-gold-400/70">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 opacity-75">
              <div className="w-2.5 h-2.5 rotate-45 border border-gold-300 bg-gold-400/50 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
              <div className="w-1 h-1 rounded-full bg-gold-200" />
            </div>
          ))}
        </div>

        {/* Left Curtain Hanging Golden Rope Tieback & Tassel */}
        <motion.div
          animate={
            isOpened
              ? { rotate: [-10, 8, -4, 0], x: [-15, 0] }
              : { rotate: [0, 2, -2, 0] }
          }
          transition={
            isOpened
              ? { duration: 2.2, ease: 'easeOut' }
              : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none origin-top"
        >
          {/* Braided Gold Rope */}
          <div className="w-[3.5px] h-32 bg-gradient-to-b from-transparent via-gold-400 to-gold-500 shadow-[0_0_6px_rgba(212,175,55,0.4)]" />
          {/* Ornate Gold Medallion Knot */}
          <div className="w-6 h-8 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 border border-gold-200 shadow-gold-glow mt-1 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-velvet-950 border border-gold-300" />
          </div>
          {/* Rich Tassel Fringe */}
          <div className="w-8 h-12 bg-gradient-to-b from-gold-400 via-gold-500 to-transparent mt-1 rounded-b-md opacity-90 shadow-lg" style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }} />
        </motion.div>
      </motion.div>

      {/* 3. RIGHT VELVET CURTAIN */}
      <motion.div
        initial={{ x: '0%', scaleX: 1 }}
        animate={{
          x: isOpened ? '103%' : '0%',
          scaleX: isOpened ? 0.9 : 1,
        }}
        transition={{
          duration: 2.0,
          ease: [0.25, 1, 0.4, 1],
        }}
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-[#0d0a08] via-[#171310] to-[#221c17] border-l-2 border-gold-400/60 shadow-[-15px_0_40px_rgba(0,0,0,0.9)] flex flex-col justify-between origin-right overflow-hidden"
      >
        {/* Realistic Vertical Velvet Drape Folds and Highlights */}
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent_0px,rgba(0,0,0,0.7)_18px,rgba(212,175,55,0.14)_35px,transparent_52px)] pointer-events-none" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.35)_0%,transparent_70%)] pointer-events-none" />

        {/* Gold Damask Embroidered Border Trim along the Opening Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gold-500/30 to-transparent flex flex-col items-center justify-around py-8 pointer-events-none border-l border-gold-400/70">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 opacity-75">
              <div className="w-2.5 h-2.5 rotate-45 border border-gold-300 bg-gold-400/50 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
              <div className="w-1 h-1 rounded-full bg-gold-200" />
            </div>
          ))}
        </div>

        {/* Right Curtain Hanging Golden Rope Tieback & Tassel */}
        <motion.div
          animate={
            isOpened
              ? { rotate: [10, -8, 4, 0], x: [15, 0] }
              : { rotate: [0, -2, 2, 0] }
          }
          transition={
            isOpened
              ? { duration: 2.2, ease: 'easeOut' }
              : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none origin-top"
        >
          {/* Braided Gold Rope */}
          <div className="w-[3.5px] h-32 bg-gradient-to-b from-transparent via-gold-400 to-gold-500 shadow-[0_0_6px_rgba(212,175,55,0.4)]" />
          {/* Ornate Gold Medallion Knot */}
          <div className="w-6 h-8 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 border border-gold-200 shadow-gold-glow mt-1 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-velvet-950 border border-gold-300" />
          </div>
          {/* Rich Tassel Fringe */}
          <div className="w-8 h-12 bg-gradient-to-b from-gold-400 via-gold-500 to-transparent mt-1 rounded-b-md opacity-90 shadow-lg" style={{ clipPath: 'polygon(15% 0%, 85% 0%, 100% 100%, 0% 100%)' }} />
        </motion.div>
      </motion.div>

      {/* 4. TOP ROYAL VALANCE / ARCH PELMET */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpened ? -110 : 0 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.4, 1] }}
        className="absolute top-0 inset-x-0 h-16 sm:h-20 md:h-24 bg-gradient-to-b from-[#0a0807] via-[#16120e] to-[#201a14] border-b-2 border-gold-400/60 shadow-[0_8px_30px_rgba(0,0,0,0.85)] flex items-center justify-center pointer-events-none z-40"
      >
        {/* Scalloped Gold Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-3 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.7)_4px,transparent_5px)] bg-[length:18px_10px]" />

        <div className="flex items-center gap-3 md:gap-5 px-4">
          <div className="h-[1px] w-12 sm:w-24 md:w-36 bg-gradient-to-r from-transparent to-gold-400" />
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="font-cinzel text-[10px] sm:text-xs md:text-sm text-gold-300 uppercase tracking-[0.35em] font-bold">
              ROYAL WEDDING &amp; NIKAH
            </span>
            <Sparkles size={14} className="text-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
          </div>
          <div className="h-[1px] w-12 sm:w-24 md:w-36 bg-gradient-to-l from-transparent to-gold-400" />
        </div>
      </motion.div>

      {/* 5. CENTER MONOGRAM WAX SEAL EMBLEM ON CURTAINS */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 1.6,
              opacity: 0,
              filter: 'blur(8px)',
              transition: { duration: 0.6 },
            }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={handleTriggerOpen}
              className="relative group w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-2 border-gold-400/90 bg-gradient-to-br from-[#30281b] via-velvet-950 to-[#14100c] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.55)] cursor-pointer"
            >
              {/* Outer Golden Aura Pulsing Rings */}
              <div className="absolute -inset-3 rounded-full border-2 border-gold-400/40 animate-ping opacity-30 pointer-events-none" />
              <div
                className="absolute -inset-1.5 rounded-full border border-gold-300/40 animate-spin pointer-events-none"
                style={{ animationDuration: '22s' }}
              />

              {/* Inner Gold Beaded Border */}
              <div className="absolute inset-2 rounded-full border border-dashed border-gold-400/60 pointer-events-none" />

              {/* Monogram */}
              <div className="flex flex-col items-center justify-center -space-y-1">
                <span className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-200 tracking-wider drop-shadow-md">
                  A <span className="text-gold-400 text-base sm:text-lg">&amp;</span> D
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-gold-300 font-bold pt-1.5">
                  OPEN
                </span>
              </div>
            </motion.button>

            {/* Tap Prompt Banner */}
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7],
                y: [0, -3, 0],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleTriggerOpen}
              className="mt-6 flex items-center gap-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.3em] text-gold-200 font-semibold bg-velvet-950/90 px-5 py-2 rounded-full border border-gold-400/50 shadow-gold-glow cursor-pointer hover:border-gold-300"
            >
              <Sparkles size={13} className="text-gold-400" />
              <span>Tap to unveil royal invitation</span>
              <Sparkles size={13} className="text-gold-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
