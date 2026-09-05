import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export const NikahDetails = () => {
  return (
    <section id="nikah" className="relative py-16 md:py-24 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative bg-gradient-to-b from-velvet-900/90 to-velvet-950/90 backdrop-blur-xl border-2 border-gold-400/40 rounded-[2.5rem] p-8 sm:p-14 shadow-gold-glow-lg overflow-hidden"
      >
        {/* Decorative corner flourishes */}
        <CornerFlourish position="top-left" className="w-14 h-14 text-gold-400/60 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-14 h-14 text-gold-400/60 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-14 h-14 text-gold-400/60 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-14 h-14 text-gold-400/60 absolute bottom-3 right-3" />

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-300 text-xs uppercase tracking-[0.25em] font-sans mb-6">
          <Sparkles size={13} className="text-gold-400" />
          <span>Sacred Solemnization</span>
          <Sparkles size={13} className="text-gold-400" />
        </div>

        {/* Main Section Header */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-gold-gradient mb-4">
          Wedding &amp; Nikah
        </h2>

        <p className="font-cormorant italic text-lg sm:text-xl text-ivory-200/90 max-w-xl mx-auto mb-8 leading-relaxed">
          &ldquo;Marriage is from my Sunnah, and whoever does not follow my Sunnah is not from me.&rdquo;
        </p>

        <OrnateDivider className="mb-10 opacity-60" />

        {/* Highlighted Ceremony Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
          {/* Date Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-velvet-800/60 border border-gold-400/30 shadow-inner-gold">
            <Calendar className="w-8 h-8 text-gold-400 mb-3" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-300/80 mb-1">
              Date
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-ivory-50 tracking-wider">
              14 December 2026
            </span>
            <span className="text-xs font-sans text-gold-400/70 tracking-widest uppercase mt-1">
              Monday
            </span>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-velvet-800/60 border border-gold-400/30 shadow-inner-gold">
            <Clock className="w-8 h-8 text-gold-400 mb-3" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-300/80 mb-1">
              Ceremony Time
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-ivory-50 tracking-wider">
              12:00 PM
            </span>
            <span className="text-xs font-sans text-gold-400/70 tracking-widest uppercase mt-1">
              Afternoon Gathering
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-ivory-300/70 max-w-md mx-auto leading-relaxed font-light">
          We warmly request your auspicious presence and heartfelt du&apos;as as the sacred knot of Nikah is solemnized.
        </p>
      </motion.div>
    </section>
  );
};
