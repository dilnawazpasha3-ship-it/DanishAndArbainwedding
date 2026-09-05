import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * Royal Velvet Palace Curtains Opening Animation
 * Features left and right deep royal noir velvet curtains with gold damask trims,
 * golden rope tiebacks, and an ornate top pelmet.
 * Opens gracefully across the screen when user taps "OPEN INVITATION".
 */
export const RoyalCurtains = ({ isOpened, onOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 pointer-events-none overflow-hidden ${
        isOpened ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
    >
      {/* LEFT CURTAIN */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isOpened ? '-102%' : '0%' }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-velvet-950 via-[#141215] to-[#1e1b19] border-r-4 border-gold-400/60 shadow-[10px_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-between"
      >
        {/* Velvet Vertical Drape Folds Effect */}
        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(212,175,55,0.12)_30px,rgba(0,0,0,0.5)_40px)] pointer-events-none" />

        {/* Gold Damask Vertical Border Trim on Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gold-500/30 to-transparent flex flex-col items-center justify-around py-12 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-400/40" />
          ))}
        </div>

        {/* Left Curtain Hanging Gold Rope & Tassel */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-[3px] h-28 bg-gradient-to-b from-transparent via-gold-400 to-gold-500" />
          <div className="w-5 h-7 rounded-full bg-gold-400 border border-gold-200 shadow-gold-glow mt-1" />
          {/* Tassel Frills */}
          <div className="w-7 h-10 bg-gradient-to-b from-gold-500 to-transparent mt-1 clip-tassel" />
        </div>
      </motion.div>

      {/* RIGHT CURTAIN */}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: isOpened ? '102%' : '0%' }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 bottom-0 w-1/2 bg-gradient-to-l from-velvet-950 via-[#141215] to-[#1e1b19] border-l-4 border-gold-400/60 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] flex flex-col justify-between"
      >
        {/* Velvet Vertical Drape Folds Effect */}
        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent,transparent_28px,rgba(212,175,55,0.12)_30px,rgba(0,0,0,0.5)_40px)] pointer-events-none" />

        {/* Gold Damask Vertical Border Trim on Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gold-500/30 to-transparent flex flex-col items-center justify-around py-12 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-400/40" />
          ))}
        </div>

        {/* Right Curtain Hanging Gold Rope & Tassel */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-[3px] h-28 bg-gradient-to-b from-transparent via-gold-400 to-gold-500" />
          <div className="w-5 h-7 rounded-full bg-gold-400 border border-gold-200 shadow-gold-glow mt-1" />
          {/* Tassel Frills */}
          <div className="w-7 h-10 bg-gradient-to-b from-gold-500 to-transparent mt-1 clip-tassel" />
        </div>
      </motion.div>

      {/* TOP ROYAL VALANCE / ARCH PELMET */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpened ? -90 : 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 inset-x-0 h-16 md:h-20 bg-gradient-to-b from-velvet-950 via-[#181615] to-[#1a1714] border-b-2 border-gold-400/50 shadow-lg flex items-center justify-center pointer-events-none"
      >
        {/* Scalloped Gold Fringe */}
        <div className="absolute bottom-0 inset-x-0 h-2 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.6)_4px,transparent_5px)] bg-[length:16px_8px]" />
        <div className="flex items-center gap-3">
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-cinzel text-[11px] md:text-xs text-gold-300 uppercase tracking-[0.3em] font-bold">
            ROYAL WEDDING &amp; NIKAH
          </span>
          <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-gold-400" />
        </div>
      </motion.div>

      {/* CENTER WAX SEAL EMBLEM ON CURTAINS (Visible only before opening) */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center pointer-events-auto"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={onOpen}
              className="relative group w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gold-400 bg-gradient-to-br from-[#2a241a] via-velvet-900 to-[#16120e] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.45)] cursor-pointer"
            >
              {/* Outer Golden Aura Ring */}
              <div className="absolute -inset-2 rounded-full border border-gold-400/40 animate-ping opacity-30" />
              <div className="absolute -inset-1 rounded-full border border-gold-400/30 animate-spin" style={{ animationDuration: '20s' }} />

              <span className="font-cinzel text-xl md:text-2xl font-bold text-gold-200 tracking-wider">
                A <span className="text-gold-400 text-sm">&amp;</span> D
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-gold-300/90 font-semibold mt-1">
                OPEN
              </span>
            </motion.button>
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xs font-sans uppercase tracking-[0.3em] text-gold-300 font-medium bg-velvet-950/80 px-4 py-1.5 rounded-full border border-gold-400/30 shadow-md"
            >
              Tap to unveil royal invitation
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
