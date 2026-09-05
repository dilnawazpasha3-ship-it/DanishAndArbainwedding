import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { Clock, MapPin, Sparkles, Heart } from 'lucide-react';

export const EventTimeline = () => {
  return (
    <section id="timeline" className="relative py-16 md:py-24 px-4 max-w-3xl mx-auto text-center">
      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-4"
      >
        <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold block mb-2">
          SACRED SCHEDULE
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-gradient tracking-wide">
          Event Timeline
        </h2>
      </motion.div>

      <OrnateDivider className="mb-12 opacity-60" />

      {/* Luxury Timeline Display */}
      <div className="relative">
        {/* Central Vertical Gold Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold-400/20 via-gold-400/60 to-gold-400/20" />

        {/* Confirmed Milestone Node */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Glowing Center Badge */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-velvet-950 border-2 border-gold-400 shadow-gold-glow mb-6">
            <Clock className="w-6 h-6 text-gold-400" />
            <div className="absolute -inset-1 rounded-full border border-gold-400/40 animate-ping opacity-25 pointer-events-none" />
          </div>

          {/* Timeline Event Card */}
          <div className="w-full max-w-xl bg-velvet-900/80 backdrop-blur-md border border-gold-400/40 rounded-3xl p-6 sm:p-8 shadow-gold-glow">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 font-sans text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles size={12} className="text-gold-400" />
              <span>Confirmed Time</span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-ivory-50 tracking-wider mb-2">
              12:00 PM
            </h3>

            <p className="font-cormorant text-xl sm:text-2xl font-semibold text-gold-300 mb-3">
              Wedding &amp; Nikah Ceremony
            </p>

            <div className="flex items-center justify-center gap-2 text-ivory-200/80 font-sans text-sm mb-4">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span>Shehnaz Palace Banquet Hall</span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-ivory-300/70 max-w-md mx-auto leading-relaxed font-light">
              Solemnization of the Nikah ceremony followed by celebratory banquet reception and heartfelt prayers with family and friends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
