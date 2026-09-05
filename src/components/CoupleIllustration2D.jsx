import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { IslamicStar, CornerFlourish } from './OrnamentalElements';
import coupleImg from '../assets/royal-couple-2d.jpg';

/**
 * Ultra-Luxurious 2D Royal Couple Portrait & Animation (Arbaeen & Danish)
 * Features:
 * - High-definition 2D royal wedding portrait
 * - Danish: Midnight noir embroidered sherwani, royal silk turban with jeweled kalgi plume
 * - Arbaeen: Exquisite bridal lehenga, sheer scalloped dupatta, kundan maang tikka, nath, jhumkas, and rose bouquet
 * - Mughal palace mihrab arch frame with double gold foil borders
 * - Shimmering dynamic jewelry starburst twinkles
 * - Floating falling red velvet & gold rose petals
 * - Smooth breathing & floating animation
 */
export const CoupleIllustration2D = ({ className = "w-full max-w-md mx-auto" }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Background Soft Golden Halo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.25)_0%,rgba(212,175,55,0.08)_50%,transparent_75%)] blur-2xl pointer-events-none transform -translate-y-2" />

      {/* Main Animated Royal Arch Container */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full max-w-[340px] sm:max-w-[390px] md:max-w-[420px]"
      >
        {/* Top Arch Peak Star Crest */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FAF5E6] via-[#F3E9CD] to-[#DFCBA1] border-2 border-gold-400 flex items-center justify-center shadow-gold-glow">
            <IslamicStar size={18} className="text-gold-700" />
          </div>
          <div className="w-[1.5px] h-3 bg-gold-400 shadow-sm" />
        </div>

        {/* Mughal Palace Mihrab Arch Frame */}
        <div className="relative rounded-t-[10rem] sm:rounded-t-[12rem] rounded-b-[2.5rem] p-2 sm:p-2.5 bg-gradient-to-b from-[#F5E296] via-[#D4AF37] to-[#876624] shadow-[0_15px_40px_rgba(212,175,55,0.35)] overflow-hidden">
          {/* Inner Beaded Border */}
          <div className="relative rounded-t-[9.5rem] sm:rounded-t-[11.5rem] rounded-b-[2.2rem] p-1 bg-[#FAF7F2] overflow-hidden">
            <div className="relative rounded-t-[9.2rem] sm:rounded-t-[11.2rem] rounded-b-[2rem] overflow-hidden bg-velvet-950 aspect-[4/4.5] sm:aspect-square">
              {/* The 2D Royal Couple Artwork */}
              <motion.img
                src={coupleImg}
                alt="2D Royal Couple - Arbaeen and Danish"
                className="w-full h-full object-cover object-center transform scale-[1.02] hover:scale-105 transition-transform duration-700"
                animate={{
                  scale: [1, 1.018, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Gentle Vignette Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 pointer-events-none" />

              {/* Dynamic Jewelry Starburst Twinkles */}
              {/* 1. Danish's Turban Kalgi Jewel */}
              <div className="absolute top-[16.5%] left-[49.5%] pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-80" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white shadow-[0_0_10px_#FFFFFF]" />
                </span>
              </div>

              {/* 2. Arbaeen's Forehead Maang Tikka Diamond */}
              <div className="absolute top-[31%] left-[56.8%] pointer-events-none">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" style={{ animationDelay: '0.8s', animationDuration: '2.5s' }} />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white shadow-[0_0_12px_#FFFFFF]" />
                </span>
              </div>

              {/* 3. Arbaeen's Bridal Nath (Nose Ring) */}
              <div className="absolute top-[39.8%] left-[56.5%] pointer-events-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" style={{ animationDelay: '1.4s', animationDuration: '3s' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-100 shadow-[0_0_8px_#FFF9E6]" />
                </span>
              </div>

              {/* 4. Arbaeen's Royal Rani Haar Gemstone */}
              <div className="absolute top-[52.5%] left-[58.5%] pointer-events-none">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70" style={{ animationDelay: '2s', animationDuration: '3.2s' }} />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-[0_0_8px_#FFFFFF]" />
                </span>
              </div>

              {/* Floating Flower Petals inside the Frame */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: -30, x: (i - 2.5) * 55, opacity: 0, rotate: 0 }}
                    animate={{
                      y: [0, 380],
                      x: [
                        (i - 2.5) * 55,
                        (i - 2.5) * 55 + (i % 2 === 0 ? 30 : -30),
                      ],
                      opacity: [0, 0.9, 0],
                      rotate: [0, 260],
                    }}
                    transition={{
                      duration: 4.8 + i * 0.8,
                      repeat: Infinity,
                      delay: i * 0.7,
                      ease: 'easeInOut',
                    }}
                    className="absolute top-0 left-1/2"
                  >
                    <svg width={i % 2 === 0 ? "16" : "12"} height={i % 2 === 0 ? "16" : "12"} viewBox="0 0 20 20" fill="none">
                      <path
                        d="M10 0 C16 4 20 10 10 20 C0 10 4 4 10 0 Z"
                        fill={i % 3 === 0 ? "#E11D48" : i % 2 === 0 ? "#BE123C" : "#F59E0B"}
                        opacity="0.85"
                      />
                    </svg>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Subtle Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-8 pb-3 px-4 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <Sparkles size={13} className="text-gold-400" />
                  <span className="font-cinzel text-xs sm:text-sm font-bold text-gold-200 tracking-[0.2em] uppercase drop-shadow-md">
                    Arbaeen &amp; Danish
                  </span>
                  <Sparkles size={13} className="text-gold-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ornate Gold Corner Flourishes on Frame Base */}
        <CornerFlourish position="bottom-left" className="w-10 h-10 text-gold-500 absolute -bottom-2 -left-2 pointer-events-none" />
        <CornerFlourish position="bottom-right" className="w-10 h-10 text-gold-500 absolute -bottom-2 -right-2 pointer-events-none" />
      </motion.div>

      {/* Royal Seal Tag below Image */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-gold-500/15 via-gold-400/25 to-gold-500/15 border border-gold-500/60 shadow-sm"
      >
        <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse" />
        <span className="font-cormorant text-base sm:text-lg font-bold text-gold-900 tracking-wider">
          Sacred Bond of Love &amp; Companionship
        </span>
        <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-pulse" />
      </motion.div>
    </div>
  );
};
