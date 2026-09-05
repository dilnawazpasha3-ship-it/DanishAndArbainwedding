import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { CoupleIllustration2D } from './CoupleIllustration2D';
import { Moon } from 'lucide-react';

export const CoupleSection = () => {
  return (
    <section id="couple" className="relative py-16 md:py-24 px-4 max-w-5xl mx-auto text-center">
      {/* Quranic Blessing Card */}
      <motion.div
        initial={{ opacity: 0, y: 35, filter: 'blur(6px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative card-white-royal rounded-[2.5rem] p-6 sm:p-10 mb-16 shadow-gold-glow overflow-hidden"
      >
        <CornerFlourish position="top-left" className="w-10 h-10 text-gold-600/60 absolute top-2 left-2" />
        <CornerFlourish position="top-right" className="w-10 h-10 text-gold-600/60 absolute top-2 right-2" />
        <CornerFlourish position="bottom-left" className="w-10 h-10 text-gold-600/60 absolute bottom-2 left-2" />
        <CornerFlourish position="bottom-right" className="w-10 h-10 text-gold-600/60 absolute bottom-2 right-2" />

        {/* Arabic Quranic Verse in Majestic Gold */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-arabic text-xl sm:text-2xl md:text-3xl text-gold-600 leading-loose mb-4 filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.2)]"
        >
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
        </motion.p>

        {/* English Translation */}
        <p className="font-cormorant italic text-base sm:text-xl text-[#1C1A17] max-w-2xl mx-auto leading-relaxed font-normal">
          &ldquo;And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy.&rdquo;
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-gold-700 font-sans mt-3 font-semibold flex items-center justify-center gap-2">
          <span>— Surah Ar-Rum (30:21)</span>
        </p>
      </motion.div>

      {/* Section Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6"
      >
        <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-700 font-semibold block mb-2">
          THE UNION OF TWO SOULS
        </span>
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-rich tracking-wide">
          Arbaeen &amp; Danish
        </h2>
      </motion.div>

      {/* Center 2D Royal Couple Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring', stiffness: 90 }}
        className="max-w-xs sm:max-w-md mx-auto mb-10"
      >
        <CoupleIllustration2D />
      </motion.div>

      <OrnateDivider className="mb-12 opacity-80" />

      {/* Couple Introduction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-center">
        {/* Bride Card: Arbaeen */}
        <motion.div
          initial={{ opacity: 0, x: -35, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group card-white-royal rounded-3xl p-8 sm:p-10 shadow-lg hover:border-gold-500 hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
        >
          {/* Subtle gold sheen on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/0 via-gold-400/10 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Floral Moon Icon Seal */}
          <motion.div
            animate={{ rotate: [0, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-400/60 bg-[#FBF7EE] flex items-center justify-center text-gold-700 shadow-inner-gold group-hover:scale-110 transition-transform duration-300"
          >
            <Moon className="w-7 h-7 text-gold-600 stroke-[1.5]" />
          </motion.div>

          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-700 font-semibold block mb-1">
            The Bride
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-wider mb-4 group-hover:text-gold-700 transition-colors">
            Arbaeen
          </h3>

          <p className="font-sans text-sm text-[#38332B] leading-relaxed font-normal">
            With grace, faith, and radiant joy, entering this sacred covenant with devotion, ready to build a home grounded in love, patience, and mutual tranquility.
          </p>
        </motion.div>

        {/* Groom Card: Danish */}
        <motion.div
          initial={{ opacity: 0, x: 35, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          whileHover={{ y: -6, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative group card-white-royal rounded-3xl p-8 sm:p-10 shadow-lg hover:border-gold-500 hover:shadow-gold-glow transition-all duration-500 overflow-hidden"
        >
          {/* Subtle gold sheen on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/0 via-gold-400/10 to-gold-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Star Icon Seal */}
          <motion.div
            animate={{ rotate: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-400/60 bg-[#FBF7EE] flex items-center justify-center text-gold-700 shadow-inner-gold group-hover:scale-110 transition-transform duration-300"
          >
            <IslamicStar size={26} className="text-gold-600" />
          </motion.div>

          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold-700 font-semibold block mb-1">
            The Groom
          </span>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1C1A17] tracking-wider mb-4 group-hover:text-gold-700 transition-colors">
            Danish
          </h3>

          <p className="font-sans text-sm text-[#38332B] leading-relaxed font-normal">
            With steadfast faith, honor, and gratitude, embracing this blessed union with the promise of lifelong care, companionship, and walking together upon the path of righteousness.
          </p>
        </motion.div>
      </div>

      {/* Story / Covenant Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 max-w-2xl mx-auto"
      >
        <p className="font-cormorant italic text-lg sm:text-xl text-gold-700 font-semibold leading-relaxed">
          &ldquo;Together, by the grace of Allah Subhanahu wa Ta&apos;ala, they begin an eternal chapter of companionship, joy, and shared devotion.&rdquo;
        </p>
      </motion.div>
    </section>
  );
};
