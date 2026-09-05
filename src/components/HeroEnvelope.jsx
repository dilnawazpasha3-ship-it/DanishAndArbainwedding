import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerFlourish, IslamicStar, OrnateDivider, BismillahCalligraphy } from './OrnamentalElements';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroEnvelope = ({ isOpened, onOpen }) => {
  const handleOpenClick = () => {
    // Trigger celebratory gold confetti sparks
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5E296', '#D4AF37', '#FDFBF7', '#C5A059'],
        disableForReducedMotion: true,
      });
    } catch (e) {
      // safe fallback if confetti fails
    }
    onOpen();
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Background Decorative Arch Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

      {/* Floating floral botanical gold accents */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-6 md:left-20 opacity-20 pointer-events-none hidden sm:block"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="12" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 14, 0],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-12 right-6 md:right-20 opacity-20 pointer-events-none hidden sm:block"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" stroke="#D4AF37" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="12" stroke="#D4AF37" strokeWidth="0.6" strokeDasharray="2 2" />
        </svg>
      </motion.div>

      {/* Main Luxury Invitation Card Container */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-xl md:max-w-2xl bg-velvet-900/80 backdrop-blur-xl border border-gold-400/40 rounded-3xl p-6 sm:p-10 md:p-14 shadow-gold-glow-lg text-center"
      >
        {/* Ornate Corner Flourishes */}
        <CornerFlourish position="top-left" className="w-12 h-12 sm:w-16 sm:h-16 text-gold-400/80 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-12 h-12 sm:w-16 sm:h-16 text-gold-400/80 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-12 h-12 sm:w-16 sm:h-16 text-gold-400/80 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-12 h-12 sm:w-16 sm:h-16 text-gold-400/80 absolute bottom-3 right-3" />

        {/* Outer and Inner Double Gold Border */}
        <div className="absolute inset-2 sm:inset-3 border border-gold-400/25 rounded-2xl pointer-events-none" />

        {/* Bismillah Calligraphy Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <BismillahCalligraphy className="w-48 sm:w-64 text-gold-300 mx-auto" />
        </motion.div>

        {/* Royal Monogram Medallion */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative inline-flex items-center justify-center mb-6"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-gold-400/60 bg-gradient-to-br from-velvet-800 to-velvet-950 flex items-center justify-center shadow-inner-gold">
            <span className="font-cinzel text-base sm:text-xl font-bold text-gold-300 tracking-wider">
              A <span className="text-gold-400 text-xs sm:text-sm font-normal">&amp;</span> D
            </span>
          </div>
          <div className="absolute -inset-1 rounded-full border border-gold-400/20 animate-spin" style={{ animationDuration: '30s' }} />
        </motion.div>

        {/* Small Elegant Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-[1px] w-8 sm:w-12 bg-gold-400/40" />
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-gold-300/90 font-medium">
            WEDDING &amp; NIKAH
          </p>
          <span className="h-[1px] w-8 sm:w-12 bg-gold-400/40" />
        </motion.div>

        {/* Main Typography Names */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-6 sm:my-8"
        >
          <h1 className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-gold-gradient drop-shadow-md">
              Arbaeen
            </span>
            <span className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-300 py-1 font-normal select-none">
              &amp;
            </span>
            <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-gold-gradient drop-shadow-md">
              Danish
            </span>
          </h1>
        </motion.div>

        {/* Ornate Divider */}
        <OrnateDivider className="my-5 opacity-70" />

        {/* Wedding Date, Time & Venue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="space-y-2 sm:space-y-3 mb-8"
        >
          <div className="flex items-center justify-center gap-2 text-ivory-100 font-cormorant text-lg sm:text-2xl font-semibold tracking-widest uppercase">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
            <span>14 DECEMBER 2026</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-gold-200/90 font-sans text-sm sm:text-base tracking-widest uppercase font-light">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400" />
            <span>12:00 PM</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-ivory-200/80 font-sans text-xs sm:text-sm tracking-wide pt-1">
            <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="font-light">Shehnaz Palace Banquet Hall</span>
          </div>
        </motion.div>

        {/* OPEN INVITATION BUTTON (Or Invitation Opened Badge) */}
        <div className="relative pt-2">
          {!isOpened ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <button
                onClick={handleOpenClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-velvet-950 font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-velvet-950"
              >
                <Sparkles className="w-4 h-4 text-velvet-950 animate-pulse" />
                <span>OPEN INVITATION</span>
                <Sparkles className="w-4 h-4 text-velvet-950 animate-pulse" />
                <span className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
              </button>
              <p className="mt-3 text-[11px] text-gold-400/70 uppercase tracking-widest font-sans">
                Tap to unfold royal invitation
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-sans tracking-widest uppercase">
                <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                <span>Invitation Unfolded</span>
              </div>
              <p className="mt-2 text-xs text-ivory-300/60 font-sans">
                Scroll down to view ceremony details &amp; venue
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
