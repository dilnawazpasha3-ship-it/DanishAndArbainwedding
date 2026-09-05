import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar, BismillahCalligraphy } from './OrnamentalElements';
import { CoupleIllustration2D } from './CoupleIllustration2D';
import { Calendar, Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export const HeroEnvelope = ({ isOpened, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenClick = () => {
    // Deluxe gold star and spark explosion
    try {
      // 1. Center burst
      confetti({
        particleCount: 70,
        spread: 100,
        origin: { y: 0.55 },
        colors: ['#F8ECC2', '#D4AF37', '#FFFFFF', '#E6CA65', '#B88E33'],
        shapes: ['circle', 'square'],
        scalar: 1.1,
        disableForReducedMotion: true,
      });
      // 2. Left and right cannons
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.6 },
          colors: ['#F8ECC2', '#D4AF37'],
          disableForReducedMotion: true,
        });
        confetti({
          particleCount: 40,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.6 },
          colors: ['#F8ECC2', '#D4AF37'],
          disableForReducedMotion: true,
        });
      }, 200);
    } catch (e) {
      // fallback safe
    }
    onOpen();
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden perspective-1000">
      {/* Background Radial Gold Glow & Vignette */}
      <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating floral botanical gold accents */}
      <motion.div
        animate={{
          y: [0, -16, 0],
          rotate: [0, 4, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-6 md:left-24 opacity-25 pointer-events-none hidden sm:block"
      >
        <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="14" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -4, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-12 right-6 md:right-24 opacity-25 pointer-events-none hidden sm:block"
      >
        <svg width="130" height="130" viewBox="0 0 100 100" fill="none">
          <path d="M50 0 C60 30 80 40 100 50 C80 60 60 70 50 100 C40 70 20 60 0 50 C20 40 40 30 50 0 Z" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="50" cy="50" r="14" stroke="#D4AF37" strokeWidth="0.8" strokeDasharray="3 3" />
        </svg>
      </motion.div>

      {/* Main Luxury Folio Card Container */}
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 w-full max-w-xl md:max-w-2xl rounded-[2.5rem] p-6 sm:p-10 md:p-14 text-center transition-all duration-1000 ${
          isOpened
            ? 'card-white-royal card-white-royal-glow text-[#1C1A17]'
            : 'bg-velvet-900/85 backdrop-blur-2xl border-2 border-gold-400/40 shadow-gold-glow-lg text-ivory-100 royal-halo'
        }`}
      >
        {/* Ornate Corner Flourishes */}
        <CornerFlourish position="top-left" className={`w-12 h-12 sm:w-16 sm:h-16 absolute top-3 left-3 ${isOpened ? 'text-gold-600/70' : 'text-gold-400/80'}`} />
        <CornerFlourish position="top-right" className={`w-12 h-12 sm:w-16 sm:h-16 absolute top-3 right-3 ${isOpened ? 'text-gold-600/70' : 'text-gold-400/80'}`} />
        <CornerFlourish position="bottom-left" className={`w-12 h-12 sm:w-16 sm:h-16 absolute bottom-3 left-3 ${isOpened ? 'text-gold-600/70' : 'text-gold-400/80'}`} />
        <CornerFlourish position="bottom-right" className={`w-12 h-12 sm:w-16 sm:h-16 absolute bottom-3 right-3 ${isOpened ? 'text-gold-600/70' : 'text-gold-400/80'}`} />

        {/* Double Gold Inner Border */}
        <div className={`absolute inset-2 sm:inset-3 border rounded-[2rem] pointer-events-none ${isOpened ? 'border-gold-500/30' : 'border-gold-400/25'}`} />

        {/* Bismillah Calligraphy Header with gentle breathing animation */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-4"
        >
          <BismillahCalligraphy className={`w-48 sm:w-64 mx-auto filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)] ${isOpened ? 'text-gold-600' : 'text-gold-300'}`} />
        </motion.div>

        {/* Royal Monogram Medallion Wax Seal */}
        <motion.div
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, type: 'spring', stiffness: 120 }}
          className="relative inline-flex items-center justify-center mb-6 cursor-pointer group"
          onClick={!isOpened ? handleOpenClick : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Pulsing Aura Rings */}
          <div className="absolute -inset-2 rounded-full border border-gold-400/40 animate-ping opacity-25 pointer-events-none" />
          <div className="absolute -inset-1 rounded-full border border-gold-400/30 animate-spin" style={{ animationDuration: '24s' }} />

          {/* 3D Wax Seal Badge */}
          <motion.div
            animate={{
              scale: isHovered && !isOpened ? 1.08 : 1,
              rotate: isHovered && !isOpened ? 3 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-gold-400/80 bg-gradient-to-br from-velvet-800 via-velvet-900 to-velvet-950 flex items-center justify-center shadow-gold-glow"
          >
            <span className="font-cinzel text-base sm:text-xl font-bold text-gold-300 tracking-widest">
              A <span className="text-gold-400 text-xs sm:text-sm font-normal">&amp;</span> D
            </span>
          </motion.div>
        </motion.div>

        {/* Small Elegant Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent to-gold-400/60" />
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-gold-300 font-semibold">
            WEDDING &amp; NIKAH
          </p>
          <span className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent to-gold-400/60" />
        </motion.div>

        {/* Main Typography Names with radiant gold sweep shine */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
          className="my-6 sm:my-8"
        >
          <h1 className="flex flex-col items-center justify-center gap-1 sm:gap-2">
            <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider gold-sweep drop-shadow-lg">
              Arbaeen
            </span>
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="font-script text-3xl sm:text-4xl md:text-5xl text-gold-300 py-1 font-normal select-none"
            >
              &amp;
            </motion.span>
            <span className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider gold-sweep drop-shadow-lg">
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
          transition={{ duration: 0.9, delay: 0.7 }}
          className="space-y-2 sm:space-y-3 mb-8"
        >
          <div className={`flex items-center justify-center gap-2 font-cormorant text-lg sm:text-2xl font-semibold tracking-widest uppercase ${
            isOpened ? 'text-[#1C1A17]' : 'text-ivory-100'
          }`}>
            <Calendar className={`w-4 h-4 sm:w-5 sm:h-5 ${isOpened ? 'text-gold-600' : 'text-gold-400'}`} />
            <span>14 DECEMBER 2026</span>
          </div>

          <div className={`flex items-center justify-center gap-2 font-sans text-sm sm:text-base tracking-widest uppercase font-medium ${
            isOpened ? 'text-gold-700' : 'text-gold-200/90'
          }`}>
            <Clock className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isOpened ? 'text-gold-600' : 'text-gold-400'}`} />
            <span>12:00 PM</span>
          </div>

          <div className={`flex items-center justify-center gap-2 font-sans text-xs sm:text-sm tracking-wide pt-1 font-medium ${
            isOpened ? 'text-[#4A4237]' : 'text-ivory-200/80'
          }`}>
            <MapPin className={`w-3.5 h-3.5 shrink-0 ${isOpened ? 'text-gold-600' : 'text-gold-400'}`} />
            <span>Shehnaz Palace Banquet Hall</span>
          </div>
        </motion.div>

        {/* OPEN INVITATION BUTTON */}
        <div className="relative pt-2">
          {!isOpened ? (
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleOpenClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-velvet-950 font-cinzel text-xs sm:text-sm font-bold tracking-[0.25em] uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 focus:ring-offset-velvet-950 overflow-hidden"
              >
                {/* Shining light sweep across button */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                <Sparkles className="w-4 h-4 text-velvet-950 animate-spin" style={{ animationDuration: '4s' }} />
                <span>OPEN INVITATION</span>
                <Sparkles className="w-4 h-4 text-velvet-950 animate-spin" style={{ animationDuration: '4s' }} />
                <span className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
              </motion.button>
              <p className="mt-3 text-[11px] text-gold-400/80 uppercase tracking-widest font-sans flex items-center gap-1.5">
                <Sparkles size={11} className="text-gold-400" />
                <span>Tap to unfold royal invitation</span>
                <Sparkles size={11} className="text-gold-400" />
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center w-full"
            >
              {/* 2D Royal Couple Animation */}
              <div className="my-4 w-full max-w-xs sm:max-w-sm mx-auto">
                <CoupleIllustration2D />
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-400/10 border border-gold-400/40 text-gold-300 text-xs font-sans tracking-widest uppercase shadow-inner-gold">
                <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400 animate-pulse" />
                <span>Royal Invitation Unveiled</span>
              </div>
              <motion.p
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-3 text-xs text-gold-300/80 font-sans"
              >
                ↓ Scroll down to explore ceremony details &amp; venue ↓
              </motion.p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
