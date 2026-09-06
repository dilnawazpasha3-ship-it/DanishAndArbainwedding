import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCinematicOpeningSound } from '../utils/audioEffects';
import { IslamicStar } from './OrnamentalElements';

/**
 * Hanging Islamic Golden Lantern (Fanoos) with warm ambient flicker
 */
const HangingFanoos = ({ className = '', delay = 0, swingAngle = 3 }) => (
  <motion.div
    animate={{ rotate: [-swingAngle, swingAngle, -swingAngle] }}
    transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay }}
    className={`flex flex-col items-center origin-top pointer-events-none ${className}`}
  >
    {/* Hanging Gold Chain */}
    <div className="w-[2px] h-20 sm:h-28 md:h-36 bg-gradient-to-b from-transparent via-gold-400 to-gold-500 shadow-[0_0_6px_rgba(212,175,55,0.6)]" />
    
    {/* Top Cap & Loop */}
    <div className="w-3.5 h-3.5 rounded-full border border-gold-300 bg-gold-500 -mt-1 shadow-sm" />
    <div className="w-7 h-2 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 rounded-t-sm border-t border-gold-200" />
    
    {/* Lantern Body (Octagonal Brass & Glass with Inner Glow) */}
    <div className="relative w-9 sm:w-11 h-14 sm:h-16 bg-gradient-to-b from-gold-400/30 via-amber-100/20 to-gold-500/40 border border-gold-300/80 rounded-md shadow-[0_0_25px_rgba(245,158,11,0.55)] flex items-center justify-center overflow-hidden">
      {/* Inner Glowing Flame */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.85, 1, 0.8, 0.85],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-200 to-white blur-[2px] shadow-[0_0_15px_#F59E0B]"
      />
      {/* Glass Panel Ribs */}
      <div className="absolute inset-0 border-x border-gold-400/40" />
      <div className="absolute top-1/2 inset-x-0 h-[1px] bg-gold-400/40" />
    </div>

    {/* Bottom Bell & Tassel Base */}
    <div className="w-6 h-2 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600 rounded-b-sm" />
    <div className="w-1.5 h-4 bg-gradient-to-b from-gold-400 to-transparent" />
  </motion.div>
);

/**
 * Cascading Bougainvillea Floral Garland (Pink & Emerald leaves)
 */
const BougainvilleaGarland = ({ side = 'left' }) => {
  const isLeft = side === 'left';
  return (
    <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} pointer-events-none z-30 opacity-90`}>
      <svg
        width="190"
        height="190"
        viewBox="0 0 160 160"
        fill="none"
        className={`w-28 sm:w-40 md:w-48 h-auto ${isLeft ? '' : 'transform -scale-x-100'}`}
      >
        <path
          d="M0,0 Q60,20 80,60 T130,120 Q140,150 160,160"
          stroke="#4A5D3E"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M10,0 Q40,40 55,90 T90,140"
          stroke="#394830"
          strokeWidth="2"
          fill="none"
        />
        {[
          { cx: 30, cy: 15, r: 6 },
          { cx: 55, cy: 30, r: 8 },
          { cx: 75, cy: 55, r: 7 },
          { cx: 95, cy: 80, r: 8 },
          { cx: 120, cy: 110, r: 7 },
          { cx: 45, cy: 75, r: 6 },
          { cx: 70, cy: 115, r: 6 },
        ].map((leaf, i) => (
          <ellipse
            key={`leaf-${i}`}
            cx={leaf.cx}
            cy={leaf.cy}
            rx={leaf.r}
            ry={leaf.r * 1.8}
            transform={`rotate(${30 + i * 20} ${leaf.cx} ${leaf.cy})`}
            fill="#527040"
            opacity="0.9"
          />
        ))}
        {[
          { x: 40, y: 22, s: 1.2 },
          { x: 68, y: 42, s: 1.4 },
          { x: 92, y: 70, s: 1.3 },
          { x: 115, y: 98, s: 1.5 },
          { x: 135, y: 135, s: 1.1 },
          { x: 25, y: 50, s: 1 },
          { x: 60, y: 95, s: 1.2 },
          { x: 80, y: 135, s: 1 },
        ].map((f, i) => (
          <g key={`flower-${i}`} transform={`translate(${f.x}, ${f.y}) scale(${f.s})`}>
            <path
              d="M0,-8 C-5,-14 -12,-8 -6,0 C-12,8 -5,14 0,8 C5,14 12,8 6,0 C12,-8 5,-14 0,-8 Z"
              fill={i % 2 === 0 ? '#E11D48' : '#DB2777'}
              stroke="#BE123C"
              strokeWidth="0.5"
              filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
            />
            <circle cx="0" cy="0" r="1.5" fill="#FEF08A" />
          </g>
        ))}
      </svg>
    </div>
  );
};

/**
 * Islamic Jaali Geometric Lattice Cutout Pattern
 */
const JaaliLatticePattern = () => (
  <svg width="100%" height="100%" className="absolute inset-0 opacity-25 pointer-events-none">
    <defs>
      <pattern id="mughal-jaali" width="60" height="60" patternUnits="userSpaceOnUse">
        <polygon
          points="30,5 37,20 55,20 40,30 46,47 30,37 14,47 20,30 5,20 23,20"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        <line x1="0" y1="30" x2="60" y2="30" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#D4AF37" strokeWidth="0.8" opacity="0.6" />
        <circle cx="30" cy="30" r="4" fill="#D4AF37" opacity="0.7" />
        <circle cx="0" cy="0" r="3" fill="#D4AF37" opacity="0.5" />
        <circle cx="60" cy="0" r="3" fill="#D4AF37" opacity="0.5" />
        <circle cx="0" cy="60" r="3" fill="#D4AF37" opacity="0.5" />
        <circle cx="60" cy="60" r="3" fill="#D4AF37" opacity="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#mughal-jaali)" />
  </svg>
);

/**
 * Royal Brass Door Knocker / Ring Handle
 */
const BrassDoorKnocker = ({ side = 'left' }) => (
  <div className={`flex flex-col items-center select-none ${side === 'left' ? 'mr-5 sm:mr-8' : 'ml-5 sm:ml-8'}`}>
    <div className="relative w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-gradient-to-br from-[#E6CA65] via-[#C5A059] to-[#876624] border-2 border-gold-200 shadow-[0_4px_15px_rgba(0,0,0,0.8)] flex items-center justify-center">
      <div className="absolute inset-1.5 rounded-full border border-dashed border-gold-900/60" />
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-white via-gold-200 to-gold-700 shadow-inner" />
    </div>

    <motion.div
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className="relative -mt-3 w-10 sm:w-14 h-14 sm:h-18 rounded-full border-[5px] sm:border-[6px] border-[#D4AF37] bg-transparent shadow-[0_8px_20px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.4)] flex items-end justify-center pb-1 origin-top"
    >
      <div className="w-3 h-2 bg-gold-200 rounded-sm shadow-sm" />
    </motion.div>
  </div>
);

/**
 * ULTRA-CINEMATIC 3D ROYAL PALACE GATE OPENING ANIMATION
 */
export const RoyalPalaceGate = ({ isOpened, onOpen }) => {
  const [isOpeningInternal, setIsOpeningInternal] = useState(false);

  const handleTriggerOpen = () => {
    if (isOpened || isOpeningInternal) return;
    setIsOpeningInternal(true);

    playCinematicOpeningSound();

    try {
      confetti({
        particleCount: 85,
        spread: 110,
        origin: { y: 0.5 },
        colors: ['#F8ECC2', '#D4AF37', '#FFFFFF', '#E6CA65', '#DB2777'],
        scalar: 1.15,
        disableForReducedMotion: true,
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 70,
          origin: { x: 0.15, y: 0.55 },
          colors: ['#F8ECC2', '#D4AF37', '#FFDF73', '#E11D48'],
          disableForReducedMotion: true,
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 70,
          origin: { x: 0.85, y: 0.55 },
          colors: ['#F8ECC2', '#D4AF37', '#FFDF73', '#E11D48'],
          disableForReducedMotion: true,
        });
      }, 250);
    } catch (e) {
      // safe fallback
    }

    onOpen();
  };

  return (
    <div
      className={`fixed inset-0 z-40 overflow-hidden select-none ${
        isOpened ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{ perspective: '1400px' }}
    >
      {/* 1. CINEMATIC ANAMORPHIC GOLDEN LIGHT BURST */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, scaleX: 0.1 }}
            animate={{
              opacity: [0, 1, 0.9, 0],
              scaleX: [0.1, 3, 7, 9],
              scaleY: [0.8, 1.2, 1.4, 1.6],
            }}
            transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="w-16 h-full bg-gradient-to-r from-transparent via-white to-transparent blur-lg" />
            <div className="absolute w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle,rgba(255,250,230,0.98)_0%,rgba(212,175,55,0.75)_35%,transparent_75%)] blur-3xl" />
            <div className="absolute w-full h-1.5 bg-gradient-to-r from-transparent via-white to-transparent blur-[2px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. GRAND MUGHAL PALACE APEX ARCH */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpened ? -140 : 0, opacity: isOpened ? 0 : 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.4, 1] }}
        className="absolute top-0 inset-x-0 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-[#0a0806] via-[#14100c] to-[#1e1712] border-b-2 border-gold-400/80 shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex items-center justify-center z-40"
      >
        <BougainvilleaGarland side="left" />
        <BougainvilleaGarland side="right" />

        <div className="absolute top-0 left-8 sm:left-20 md:left-32">
          <HangingFanoos delay={0} swingAngle={3.5} />
        </div>
        <div className="absolute top-0 right-8 sm:right-20 md:right-32">
          <HangingFanoos delay={1.2} swingAngle={3.5} />
        </div>

        <div className="relative z-30 flex items-center gap-3 md:gap-5 px-6 pt-2">
          <div className="h-[1px] w-10 sm:w-20 md:w-32 bg-gradient-to-r from-transparent via-gold-400 to-gold-200" />
          <div className="flex items-center gap-2">
            <IslamicStar size={16} className="text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-cinzel text-xs sm:text-sm md:text-base text-gold-200 uppercase tracking-[0.35em] font-bold drop-shadow-md">
              ROYAL PALACE GATE
            </span>
            <IslamicStar size={16} className="text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <div className="h-[1px] w-10 sm:w-20 md:w-32 bg-gradient-to-l from-transparent via-gold-400 to-gold-200" />
        </div>

        <div className="absolute bottom-0 inset-x-0 h-3 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.8)_4px,transparent_5px)] bg-[length:18px_10px]" />
      </motion.div>

      {/* 3. LEFT 3D ROYAL GATE DOOR */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{
          rotateY: isOpened ? -110 : 0,
          x: isOpened ? '-10%' : '0%',
          opacity: isOpened ? 0 : 1,
        }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: 'left center',
          transformStyle: 'preserve-3d',
        }}
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-[#0a0807] via-[#14100c] to-[#1f1812] border-r-4 border-gold-400/90 shadow-[20px_0_50px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden cursor-pointer"
        onClick={handleTriggerOpen}
      >
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent_0px,rgba(0,0,0,0.8)_20px,rgba(212,175,55,0.12)_40px,transparent_60px)] pointer-events-none" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(212,175,55,0.5)_0%,transparent_70%)] pointer-events-none" />

        <JaaliLatticePattern />

        <div className="absolute inset-3 sm:inset-5 md:inset-8 border-2 border-gold-400/60 rounded-lg pointer-events-none flex flex-col justify-between p-3">
          <div className="flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={`stud-top-${i}`} className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gold-200 to-gold-600 border border-gold-900 shadow-md" />
            ))}
          </div>

          <div className="relative w-full flex-1 my-4 border border-gold-400/40 rounded-t-full bg-gradient-to-b from-gold-500/10 via-transparent to-black/30 flex items-center justify-end">
            <BrassDoorKnocker side="left" />
          </div>

          <div className="flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={`stud-bot-${i}`} className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gold-200 to-gold-600 border border-gold-900 shadow-md" />
            ))}
          </div>
        </div>

        <div className="absolute left-0 top-1/4 -translate-y-1/2 w-6 h-16 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 border-y border-r border-gold-200 rounded-r-md shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black" />
        </div>
        <div className="absolute left-0 top-3/4 -translate-y-1/2 w-6 h-16 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 border-y border-r border-gold-200 rounded-r-md shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black" />
        </div>
      </motion.div>

      {/* 4. RIGHT 3D ROYAL GATE DOOR */}
      <motion.div
        initial={{ rotateY: 0, x: 0 }}
        animate={{
          rotateY: isOpened ? 110 : 0,
          x: isOpened ? '10%' : '0%',
          opacity: isOpened ? 0 : 1,
        }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: 'right center',
          transformStyle: 'preserve-3d',
        }}
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-[#0a0807] via-[#14100c] to-[#1f1812] border-l-4 border-gold-400/90 shadow-[-20px_0_50px_rgba(0,0,0,0.95)] flex flex-col justify-between overflow-hidden cursor-pointer"
        onClick={handleTriggerOpen}
      >
        <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(90deg,transparent_0px,rgba(0,0,0,0.8)_20px,rgba(212,175,55,0.12)_40px,transparent_60px)] pointer-events-none" />
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.5)_0%,transparent_70%)] pointer-events-none" />

        <JaaliLatticePattern />

        <div className="absolute inset-3 sm:inset-5 md:inset-8 border-2 border-gold-400/60 rounded-lg pointer-events-none flex flex-col justify-between p-3">
          <div className="flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={`stud-right-top-${i}`} className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gold-200 to-gold-600 border border-gold-900 shadow-md" />
            ))}
          </div>

          <div className="relative w-full flex-1 my-4 border border-gold-400/40 rounded-t-full bg-gradient-to-b from-gold-500/10 via-transparent to-black/30 flex items-center justify-start">
            <BrassDoorKnocker side="right" />
          </div>

          <div className="flex justify-around">
            {[...Array(6)].map((_, i) => (
              <div key={`stud-right-bot-${i}`} className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-gold-200 to-gold-600 border border-gold-900 shadow-md" />
            ))}
          </div>
        </div>

        <div className="absolute right-0 top-1/4 -translate-y-1/2 w-6 h-16 bg-gradient-to-l from-gold-300 via-gold-500 to-gold-700 border-y border-l border-gold-200 rounded-l-md shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black" />
        </div>
        <div className="absolute right-0 top-3/4 -translate-y-1/2 w-6 h-16 bg-gradient-to-l from-gold-300 via-gold-500 to-gold-700 border-y border-l border-gold-200 rounded-l-md shadow-lg flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-black" />
        </div>
      </motion.div>

      {/* 5. CENTER SHAHI MONOGRAM WAX SEAL & PALACE LOCK */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{
              scale: 1.8,
              opacity: 0,
              filter: 'blur(10px)',
              transition: { duration: 0.7 },
            }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              onClick={handleTriggerOpen}
              className="relative group w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-3 border-gold-300 bg-gradient-to-br from-[#2d2215] via-[#0e0c09] to-[#1a140d] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(212,175,55,0.7)] cursor-pointer"
            >
              <div className="absolute -inset-4 rounded-full border-2 border-gold-400/40 animate-ping opacity-35 pointer-events-none" />
              <div
                className="absolute -inset-2 rounded-full border border-dashed border-gold-300/60 animate-spin pointer-events-none"
                style={{ animationDuration: '26s' }}
              />
              <div className="absolute inset-2.5 rounded-full border border-gold-400/50 pointer-events-none" />

              <div className="flex flex-col items-center justify-center -space-y-1">
                <IslamicStar size={16} className="text-gold-400 mb-1" />
                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-200 tracking-wider drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)]">
                  A <span className="text-gold-400 text-lg sm:text-2xl font-light">&amp;</span> D
                </span>
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold-300 font-bold pt-2">
                  OPEN GATE
                </span>
              </div>
            </motion.button>

            <motion.div
              animate={{
                opacity: [0.75, 1, 0.75],
                y: [0, -3, 0],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              onClick={handleTriggerOpen}
              className="mt-6 sm:mt-8 flex items-center gap-2.5 text-xs sm:text-sm font-sans uppercase tracking-[0.3em] text-gold-200 font-semibold bg-[#0d0a08]/95 px-6 py-2.5 rounded-full border border-gold-400/60 shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer hover:border-gold-300 hover:scale-105 transition-transform"
            >
              <Sparkles size={14} className="text-gold-400 animate-pulse" />
              <span>Tap to unlock palace gates</span>
              <Sparkles size={14} className="text-gold-400 animate-pulse" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
