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
        className="relative card-white-royal rounded-[2.5rem] p-8 sm:p-14 shadow-gold-glow overflow-hidden"
      >
        {/* Decorative corner flourishes */}
        <CornerFlourish position="top-left" className="w-14 h-14 text-gold-600/70 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-14 h-14 text-gold-600/70 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-14 h-14 text-gold-600/70 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-14 h-14 text-gold-600/70 absolute bottom-3 right-3" />

        {/* Small Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/50 bg-gold-400/15 text-gold-800 text-xs uppercase tracking-[0.25em] font-sans font-semibold mb-6">
          <Sparkles size={13} className="text-gold-600" />
          <span>Sacred Solemnization</span>
          <Sparkles size={13} className="text-gold-600" />
        </div>

        {/* Main Section Header */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-gold-rich mb-4">
          Wedding &amp; Nikah
        </h2>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#1C1A17] max-w-xl mx-auto mb-8 leading-relaxed font-normal">
          &ldquo;Marriage is from my Sunnah, and whoever does not follow my Sunnah is not from me.&rdquo;
        </p>

        <OrnateDivider className="mb-10 opacity-70" />

        {/* Highlighted Ceremony Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-8">
          {/* Date Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FBF8F1] border border-gold-400/50 shadow-inner-gold">
            <Calendar className="w-8 h-8 text-gold-600 mb-3" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-800 font-semibold mb-1">
              Date
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-wider">
              14 December 2026
            </span>
            <span className="text-xs font-sans text-gold-700 tracking-widest uppercase mt-1 font-medium">
              Monday
            </span>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#FBF8F1] border border-gold-400/50 shadow-inner-gold">
            <Clock className="w-8 h-8 text-gold-600 mb-3" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold-800 font-semibold mb-1">
              Ceremony Time
            </span>
            <span className="font-cormorant text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-wider">
              12:00 PM
            </span>
            <span className="text-xs font-sans text-gold-700 tracking-widest uppercase mt-1 font-medium">
              Afternoon Gathering
            </span>
          </div>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#38332B] max-w-md mx-auto leading-relaxed font-normal">
          We warmly request your auspicious presence and heartfelt du&apos;as as the sacred knot of Nikah is solemnized.
        </p>
      </motion.div>
    </section>
  );
};
