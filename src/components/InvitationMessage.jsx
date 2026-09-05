import React from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar, BismillahCalligraphy } from './OrnamentalElements';
import { HeartHandshake } from 'lucide-react';

export const InvitationMessage = () => {
  return (
    <section id="invitation-message" className="relative py-16 md:py-24 px-4 max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative bg-velvet-900/80 backdrop-blur-xl border border-gold-400/35 rounded-[2.5rem] p-8 sm:p-14 shadow-gold-glow-lg overflow-hidden"
      >
        <CornerFlourish position="top-left" className="w-12 h-12 text-gold-400/50 absolute top-3 left-3" />
        <CornerFlourish position="top-right" className="w-12 h-12 text-gold-400/50 absolute top-3 right-3" />
        <CornerFlourish position="bottom-left" className="w-12 h-12 text-gold-400/50 absolute bottom-3 left-3" />
        <CornerFlourish position="bottom-right" className="w-12 h-12 text-gold-400/50 absolute bottom-3 right-3" />

        {/* Small Bismillah header */}
        <BismillahCalligraphy className="w-48 sm:w-60 text-gold-300 mx-auto mb-4" />

        {/* Islamic Greeting in Arabic */}
        <p className="font-arabic text-xl sm:text-2xl text-gold-200 mb-2">
          السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </p>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-gold-400/80 mb-6 font-medium">
          As-Salāmu ‘Alaykum wa Raḥmatullāhi wa Barakātuh
        </p>

        <OrnateDivider className="mb-8 opacity-60" />

        {/* Heartfelt Letter */}
        <div className="space-y-5 font-cormorant text-lg sm:text-xl md:text-2xl text-ivory-100 leading-relaxed max-w-2xl mx-auto">
          <p>
            By the grace and mercy of <span className="text-gold-300 font-semibold">Allah (Subhanahu wa Ta&apos;ala)</span>, who created love and companionship in pairs, we take immense joy in inviting you and your family to celebrate the auspicious union of
          </p>

          <p className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-gold-gradient py-2">
            Arbaeen &amp; Danish
          </p>

          <p className="text-base sm:text-lg text-ivory-200/90 font-sans font-light leading-relaxed">
            Your presence, warmth, and heartfelt prayers (<span className="text-gold-300 font-normal italic">Du&apos;as</span>) will bring immense happiness to our families as we witness the solemnization of their sacred Nikah.
          </p>

          <p className="text-base sm:text-lg text-ivory-200/90 font-sans font-light leading-relaxed">
            May Allah bless this union with unending serenity, affection, barakah, and grant them a lifetime of steadfast faith together.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gold-400/20 max-w-md mx-auto">
          <p className="font-cinzel text-sm sm:text-base font-bold text-gold-300 tracking-wider">
            Warmly Invited By
          </p>
          <p className="font-sans text-xs sm:text-sm text-ivory-300/80 font-light mt-1">
            The Families of Arbaeen &amp; Danish
          </p>
        </div>
      </motion.div>
    </section>
  );
};
