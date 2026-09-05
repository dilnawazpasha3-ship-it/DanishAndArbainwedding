import React from 'react';
import { motion } from 'framer-motion';

/**
 * Exquisite 2D Royal Couple Vector Illustration (Arbaeen & Danish)
 * Features traditional Muslim luxury wedding attire (Sherwani & Bridal Veil/Lehenga)
 * with animated gentle floating, breathing motion, sparkling jewelry, and falling petals.
 */
export const CoupleIllustration2D = ({ className = "w-full max-w-md mx-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Golden Halo & Arch Motif */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-400/15 via-gold-400/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Floating Rose/Jasmine Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: (i - 2.5) * 50, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, 160],
              x: [(i - 2.5) * 50, (i - 2.5) * 50 + (i % 2 === 0 ? 30 : -30)],
              opacity: [0, 0.8, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              delay: i * 0.9,
              ease: 'easeInOut',
            }}
            className="absolute top-2 left-1/2"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 0 C15 5 20 10 10 20 C0 10 5 5 10 0 Z"
                fill={i % 2 === 0 ? "#E6CA65" : "#F59E0B"}
                opacity="0.85"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main SVG Vector of the Couple */}
      <motion.div
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full"
      >
        <svg
          viewBox="0 0 400 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_10px_25px_rgba(212,175,55,0.25)]"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="goldLuster" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FBF7E8" />
              <stop offset="40%" stopColor="#D4AF37" />
              <stop offset="80%" stopColor="#9A7B2C" />
              <stop offset="100%" stopColor="#E4C560" />
            </linearGradient>

            <linearGradient id="sherwaniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C1B1F" />
              <stop offset="50%" stopColor="#0F0E11" />
              <stop offset="100%" stopColor="#070708" />
            </linearGradient>

            <linearGradient id="bridalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FAF7F0" />
              <stop offset="50%" stopColor="#EFE8D8" />
              <stop offset="100%" stopColor="#DFD5BE" />
            </linearGradient>

            <linearGradient id="veilGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#F8ECC2" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.05" />
            </linearGradient>

            <radialGradient id="auraLight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#070708" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Palace Arch Frame */}
          <circle cx="200" cy="180" r="140" fill="url(#auraLight)" />
          <path
            d="M80,380 V180 C80,110 130,60 200,60 C270,60 320,110 320,180 V380"
            stroke="url(#goldLuster)"
            strokeWidth="2"
            opacity="0.5"
            strokeDasharray="4 4"
          />
          <path
            d="M95,380 V185 C95,120 140,75 200,75 C260,75 305,120 305,185 V380"
            stroke="url(#goldLuster)"
            strokeWidth="1"
            opacity="0.3"
          />
          {/* Top Arch Star */}
          <circle cx="200" cy="45" r="4" fill="url(#goldLuster)" />
          <path d="M200,35 L202,43 L210,45 L202,47 L200,55 L198,47 L190,45 L198,43 Z" fill="url(#goldLuster)" />

          {/* ======================================================== */}
          {/* 1. GROOM (Danish - Left) */}
          {/* ======================================================== */}
          <g transform="translate(115, 120)">
            {/* Groom Shoulders & Royal Sherwani */}
            <path
              d="M35,110 C5,130 -15,180 -25,270 L85,270 C85,240 80,180 65,110 Z"
              fill="url(#sherwaniGrad)"
              stroke="url(#goldLuster)"
              strokeWidth="1.2"
            />
            {/* Sherwani Collar & Gold Embroidered Placket */}
            <path d="M25,100 L35,110 L45,100 L40,240 L30,240 Z" fill="#0A0A0C" stroke="url(#goldLuster)" strokeWidth="1" />
            {/* Gold Sherwani Buttons */}
            <circle cx="35" cy="130" r="2" fill="url(#goldLuster)" />
            <circle cx="35" cy="150" r="2" fill="url(#goldLuster)" />
            <circle cx="35" cy="170" r="2" fill="url(#goldLuster)" />
            <circle cx="35" cy="190" r="2" fill="url(#goldLuster)" />

            {/* Royal Gold Stole / Dupatta across shoulder */}
            <path
              d="M-5,140 Q15,170 35,210 Q45,240 40,270"
              stroke="url(#goldLuster)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              opacity="0.9"
            />
            <path
              d="M-8,140 Q12,170 32,210"
              stroke="#FBF7E8"
              strokeWidth="1"
              fill="none"
              strokeDasharray="2 3"
            />

            {/* Neck */}
            <rect x="26" y="85" width="18" height="20" rx="3" fill="#D7A87E" />

            {/* Groom Head & Jawline */}
            <path
              d="M20,65 C20,45 35,38 45,38 C55,38 60,48 60,65 C60,82 48,92 38,92 C28,92 20,82 20,65 Z"
              fill="#E5B88F"
            />

            {/* Groom Hair / Neat Royal Styling */}
            <path
              d="M18,60 C18,35 30,25 50,25 C62,25 65,36 65,50 C60,45 52,42 42,44 C32,46 24,52 18,60 Z"
              fill="#181513"
            />

            {/* Soft Ear */}
            <circle cx="19" cy="67" r="4.5" fill="#D7A87E" />

            {/* Subtle Profile Eye, Brow & Smile */}
            <path d="M42,50 Q48,49 53,52" stroke="#2B1A0E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <ellipse cx="48" cy="57" rx="2.5" ry="2" fill="#2B1A0E" />
            <path d="M54,63 L57,69 L53,70" stroke="#C99469" strokeWidth="1.2" fill="none" />
            <path d="M48,78 Q53,80 56,76" stroke="#B87B56" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>

          {/* ======================================================== */}
          {/* 2. BRIDE (Arbaeen - Right) */}
          {/* ======================================================== */}
          <g transform="translate(195, 125)">
            {/* Flowing Royal Ivory & Gold Bridal Veil (Dupatta) */}
            <path
              d="M45,40 C10,35 -10,80 -15,160 C-20,220 -15,270 -10,275 C10,280 80,280 120,270 C130,220 125,120 100,55 C85,38 65,40 45,40 Z"
              fill="url(#veilGlow)"
              stroke="url(#goldLuster)"
              strokeWidth="1.5"
            />

            {/* Ornate Gold Veil Border & Embroidery */}
            <path
              d="M38,40 C15,48 -5,95 -10,165 C-12,210 -8,255 0,275"
              stroke="url(#goldLuster)"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="4 2"
            />

            {/* Bridal Dress / Lehenga Torso */}
            <path
              d="M18,125 C8,145 0,185 -5,270 L95,270 C90,195 80,145 70,125 Z"
              fill="url(#bridalGrad)"
              stroke="url(#goldLuster)"
              strokeWidth="1.2"
            />
            {/* Intricate Gold Zari Patterns on Bridal Attire */}
            <path d="M15,160 Q45,175 75,160" stroke="url(#goldLuster)" strokeWidth="1.5" fill="none" />
            <path d="M10,190 Q45,210 80,190" stroke="url(#goldLuster)" strokeWidth="1.5" fill="none" />
            <path d="M5,225 Q45,250 85,225" stroke="url(#goldLuster)" strokeWidth="1.5" fill="none" />
            <circle cx="45" cy="180" r="3" fill="url(#goldLuster)" />
            <circle cx="45" cy="215" r="3" fill="url(#goldLuster)" />

            {/* Neck */}
            <rect x="36" y="90" width="16" height="22" rx="3" fill="#E8BD95" />

            {/* Royal Gold Bridal Necklace (Choker + Rani Haar) */}
            <path d="M30,110 Q44,122 58,110" stroke="url(#goldLuster)" strokeWidth="3" fill="none" />
            <path d="M26,118 Q44,136 62,118" stroke="url(#goldLuster)" strokeWidth="2" fill="none" strokeDasharray="3 2" />
            <circle cx="44" cy="128" r="2.5" fill="#E4C560" />

            {/* Bride Face */}
            <path
              d="M26,68 C26,48 38,40 46,40 C56,40 66,48 66,68 C66,84 56,95 46,95 C36,95 26,84 26,68 Z"
              fill="#F2CBB0"
            />

            {/* Bride Hair beneath Veil */}
            <path
              d="M26,65 C26,45 35,38 48,38 C58,38 66,48 66,65 C64,55 56,50 46,50 C36,50 28,55 26,65 Z"
              fill="#181513"
            />

            {/* Bridal Maang Tikka (Forehead Jewelry) with Sparkling Diamond */}
            <path d="M46,38 L46,52" stroke="url(#goldLuster)" strokeWidth="1.5" />
            <circle cx="46" cy="54" r="3.5" fill="url(#goldLuster)" />
            <circle cx="46" cy="54" r="1.5" fill="#FFFFFF" />

            {/* Bridal Earrings (Jhumkas) */}
            <path d="M24,73 L24,78 L20,83 L28,83 Z" fill="url(#goldLuster)" />
            <circle cx="24" cy="85" r="1" fill="#FFFFFF" />

            {/* Graceful Facial Features */}
            {/* Eyebrows */}
            <path d="M33,56 Q37,54 42,56" stroke="#2B1A0E" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            {/* Kajal / Kohled Eye */}
            <path d="M34,62 Q38,65 42,62" stroke="#1A110B" strokeWidth="1.6" fill="none" />
            <ellipse cx="38" cy="62" rx="2" ry="1.8" fill="#1A110B" />
            <circle cx="37.5" cy="61.5" r="0.6" fill="#FFFFFF" />
            {/* Delicate Nose Ring / Nath */}
            <path d="M43,68 L46,72 L42,73" stroke="#DCA276" strokeWidth="1" fill="none" />
            <circle cx="44" cy="73" r="2.5" stroke="url(#goldLuster)" strokeWidth="0.8" fill="none" />
            {/* Rose Lips */}
            <path d="M36,81 Q40,84 45,81" stroke="#D9534F" strokeWidth="2" fill="none" strokeLinecap="round" />
          </g>

          {/* ======================================================== */}
          {/* 3. CENTER EMBRACE / JOINED HANDS WITH MEHNDI */}
          {/* ======================================================== */}
          <g transform="translate(180, 275)">
            {/* Joined Hands Silhouette with Golden Henna/Mehndi Accents */}
            <circle cx="20" cy="15" r="12" fill="#DFB28B" />
            <circle cx="20" cy="15" r="8" fill="none" stroke="url(#goldLuster)" strokeWidth="1" strokeDasharray="2 2" />
            {/* Delicate Golden Rose between them */}
            <path
              d="M20,6 C16,0 24,0 20,6 Z M17,8 C12,5 15,12 18,10 Z M23,8 C28,5 25,12 22,10 Z"
              fill="url(#goldLuster)"
            />
            <circle cx="20" cy="8" r="2" fill="#FFFFFF" />
          </g>

          {/* Animated Twinkles on Jewelry */}
          <g>
            <circle cx="241" cy="179" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="150" cy="270" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
