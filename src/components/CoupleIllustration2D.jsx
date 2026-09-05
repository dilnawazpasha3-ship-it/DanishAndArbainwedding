import React from 'react';
import { motion } from 'framer-motion';

/**
 * Exquisite 2D Royal Couple Vector Illustration (Arbaeen & Danish)
 * Features traditional Muslim luxury royal wedding attire:
 * - Groom Danish: Royal midnight noir & gold embroidered Sherwani, Royal Safaa/Turban with jeweled Kalgi (brooch & plume), and gold stole.
 * - Bride Arbaeen: Royal ivory & gold bridal lehenga, sheer scalloped Dupatta (veil), sparkling Maang Tikka, Jhumkas, bridal Nath, and layered Rani Haar.
 * - Palace Setting: Mughal Mihrab arch with jaali latticework, hanging royal fanoos lanterns, and continuously falling flower petals.
 */
export const CoupleIllustration2D = ({ className = "w-full max-w-md mx-auto" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Golden Halo */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold-400/20 via-gold-400/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Floating Rose & Jasmine Flower Petals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: (i - 3.5) * 45, opacity: 0, rotate: 0 }}
            animate={{
              y: [0, 240],
              x: [
                (i - 3.5) * 45,
                (i - 3.5) * 45 + (i % 2 === 0 ? 35 : -35),
              ],
              opacity: [0, 0.9, 0],
              rotate: [0, 220],
            }}
            transition={{
              duration: 4.5 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
            className="absolute top-0 left-1/2"
          >
            <svg width={i % 3 === 0 ? "16" : "12"} height={i % 3 === 0 ? "16" : "12"} viewBox="0 0 20 20" fill="none">
              <path
                d="M10 0 C16 4 20 10 10 20 C0 10 4 4 10 0 Z"
                fill={i % 3 === 0 ? "#E11D48" : i % 2 === 0 ? "#F59E0B" : "#FFF7ED"}
                opacity="0.85"
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Main SVG Vector Container with Gentle Royal Floating Motion */}
      <motion.div
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 w-full"
      >
        <svg
          viewBox="0 0 440 450"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto filter drop-shadow-[0_12px_30px_rgba(212,175,55,0.28)]"
        >
          <defs>
            {/* Liquid Gold Foil Gradient */}
            <linearGradient id="goldRoyalLuster" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF9E6" />
              <stop offset="25%" stopColor="#F5D77F" />
              <stop offset="55%" stopColor="#D4AF37" />
              <stop offset="85%" stopColor="#9A7B2C" />
              <stop offset="100%" stopColor="#E6CA65" />
            </linearGradient>

            {/* Groom Midnight Sherwani Gradient */}
            <linearGradient id="sherwaniNoir" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#242124" />
              <stop offset="45%" stopColor="#141214" />
              <stop offset="100%" stopColor="#080708" />
            </linearGradient>

            {/* Groom Turban / Safaa Gradient */}
            <linearGradient id="turbanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A3226" />
              <stop offset="50%" stopColor="#221C14" />
              <stop offset="100%" stopColor="#120E0A" />
            </linearGradient>

            {/* Bridal Ivory & Rose Silk Lehenga Gradient */}
            <linearGradient id="bridalSilks" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="40%" stopColor="#FBF7EE" />
              <stop offset="80%" stopColor="#F2E6D0" />
              <stop offset="100%" stopColor="#E3D1B4" />
            </linearGradient>

            {/* Sheer Shimmering Bridal Dupatta Veil */}
            <linearGradient id="sheerVeil" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F5D77F" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.32" />
              <stop offset="80%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F8ECC2" stopOpacity="0.05" />
            </linearGradient>

            {/* Lantern Candle Glow */}
            <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFED4A" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </radialGradient>

            {/* Arch Center Backdrop Glow */}
            <radialGradient id="palaceArchGlow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
              <stop offset="70%" stopColor="#D4AF37" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FAF7F2" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. MUGHAL PALACE MIHRAB ARCH & JAALI BACKGROUND */}
          {/* ======================================================== */}
          <rect x="60" y="50" width="320" height="380" rx="160" fill="url(#palaceArchGlow)" />

          {/* Outer Arch Border */}
          <path
            d="M70,410 V190 C70,105 135,45 220,45 C305,45 370,105 370,190 V410"
            stroke="url(#goldRoyalLuster)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Inner Dotted Arch Border */}
          <path
            d="M85,410 V195 C85,118 142,62 220,62 C298,62 355,118 355,195 V410"
            stroke="url(#goldRoyalLuster)"
            strokeWidth="1.2"
            strokeDasharray="5 4"
            opacity="0.6"
          />

          {/* Arch Peak Islamic Star & Medallion */}
          <g transform="translate(220, 32)">
            <circle cx="0" cy="0" r="10" fill="#FAF7F2" stroke="url(#goldRoyalLuster)" strokeWidth="1.5" />
            {/* 8-point Islamic Star */}
            <path
              d="M-5,-5 L0,-8 L5,-5 L8,0 L5,5 L0,8 L-5,5 L-8,0 Z"
              fill="url(#goldRoyalLuster)"
            />
          </g>

          {/* Jaali Geometric Latticework Details on Arch Sides */}
          <g opacity="0.25" stroke="url(#goldRoyalLuster)" strokeWidth="0.8">
            <line x1="85" y1="120" x2="140" y2="120" />
            <line x1="85" y1="145" x2="140" y2="145" />
            <line x1="85" y1="170" x2="140" y2="170" />
            <line x1="300" y1="120" x2="355" y2="120" />
            <line x1="300" y1="145" x2="355" y2="145" />
            <line x1="300" y1="170" x2="355" y2="170" />
          </g>

          {/* ======================================================== */}
          {/* 2. HANGING ROYAL PALACE LANTERNS (FANOOS) */}
          {/* ======================================================== */}
          {/* Left Lantern */}
          <g transform="translate(95, 90)">
            <line x1="0" y1="-30" x2="0" y2="0" stroke="url(#goldRoyalLuster)" strokeWidth="1" />
            {/* Lantern Cap */}
            <path d="M-8,0 L8,0 L6,5 L-6,5 Z" fill="url(#goldRoyalLuster)" />
            {/* Glass Cage */}
            <path d="M-7,5 L-5,22 L5,22 L7,5 Z" stroke="url(#goldRoyalLuster)" strokeWidth="1" fill="#FAF7F2" fillOpacity="0.4" />
            {/* Candle Flame & Warm Halo */}
            <circle cx="0" cy="14" r="12" fill="url(#lanternGlow)" />
            <ellipse cx="0" cy="14" rx="1.8" ry="3" fill="#FFFFFF" />
            {/* Bottom Finial */}
            <path d="M-4,22 L4,22 L0,28 Z" fill="url(#goldRoyalLuster)" />
          </g>

          {/* Right Lantern */}
          <g transform="translate(345, 90)">
            <line x1="0" y1="-30" x2="0" y2="0" stroke="url(#goldRoyalLuster)" strokeWidth="1" />
            {/* Lantern Cap */}
            <path d="M-8,0 L8,0 L6,5 L-6,5 Z" fill="url(#goldRoyalLuster)" />
            {/* Glass Cage */}
            <path d="M-7,5 L-5,22 L5,22 L7,5 Z" stroke="url(#goldRoyalLuster)" strokeWidth="1" fill="#FAF7F2" fillOpacity="0.4" />
            {/* Candle Flame & Warm Halo */}
            <circle cx="0" cy="14" r="12" fill="url(#lanternGlow)" />
            <ellipse cx="0" cy="14" rx="1.8" ry="3" fill="#FFFFFF" />
            {/* Bottom Finial */}
            <path d="M-4,22 L4,22 L0,28 Z" fill="url(#goldRoyalLuster)" />
          </g>

          {/* ======================================================== */}
          {/* 3. GROOM (Danish - Left) */}
          {/* ======================================================== */}
          <g transform="translate(130, 115)">
            {/* Sherwani Torso & Robes */}
            <path
              d="M40,125 C8,145 -15,200 -25,295 L95,295 C95,260 90,195 72,125 Z"
              fill="url(#sherwaniNoir)"
              stroke="url(#goldRoyalLuster)"
              strokeWidth="1.5"
            />

            {/* Mandarin Collar */}
            <path d="M28,112 L40,125 L52,112 L46,128 L34,128 Z" fill="#0C0A0C" stroke="url(#goldRoyalLuster)" strokeWidth="1.2" />

            {/* Center Royal Gold Brocade Placket & Buttons */}
            <rect x="36" y="125" width="8" height="150" fill="#120F12" stroke="url(#goldRoyalLuster)" strokeWidth="0.8" />
            {[135, 155, 175, 195, 215, 235].map((yVal, btnIdx) => (
              <circle key={btnIdx} cx="40" cy={yVal} r="2.2" fill="url(#goldRoyalLuster)" />
            ))}

            {/* Royal Gold Stole / Dupatta across Groom's Shoulder */}
            <path
              d="M-8,155 Q15,190 38,235 Q50,270 42,295"
              stroke="url(#goldRoyalLuster)"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M-11,155 Q12,190 35,235"
              stroke="#FFF9E6"
              strokeWidth="1.2"
              fill="none"
              strokeDasharray="2 3"
            />

            {/* Neck */}
            <rect x="31" y="98" width="18" height="18" rx="3" fill="#D7A87E" />

            {/* Face */}
            <path
              d="M24,75 C24,55 38,48 48,48 C58,48 64,56 64,75 C64,92 53,103 42,103 C31,103 24,92 24,75 Z"
              fill="#E5B88F"
            />

            {/* Hair / Beard Trim */}
            <path
              d="M22,70 C22,46 32,38 48,38 C56,38 64,46 64,60 C60,54 52,50 42,52 C32,54 26,62 22,70 Z"
              fill="#181513"
            />

            {/* ROYAL GROOM TURBAN (Safaa / Pagdi) */}
            <g>
              {/* Turban Folds Wrap */}
              <path
                d="M18,52 C14,35 28,18 48,18 C68,18 78,35 74,52 C70,44 60,38 48,38 C36,38 24,44 18,52 Z"
                fill="url(#turbanGrad)"
                stroke="url(#goldRoyalLuster)"
                strokeWidth="1.2"
              />
              <path
                d="M16,42 Q48,26 76,42"
                stroke="url(#goldRoyalLuster)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M18,34 Q48,18 74,34"
                stroke="url(#goldRoyalLuster)"
                strokeWidth="1"
                fill="none"
              />

              {/* Royal Kalgi (Feather Brooch) with Jewel */}
              <g transform="translate(48, 20)">
                {/* Golden Plume / Feather Feathers */}
                <path d="M0,0 Q-4,-18 -1,-26 Q4,-18 0,0" fill="url(#goldRoyalLuster)" />
                <path d="M-1,-26 Q2,-32 1,-24" stroke="#FFF9E6" strokeWidth="0.8" fill="none" />
                {/* Ruby & Emerald Kalgi Brooch */}
                <circle cx="0" cy="0" r="4.5" fill="#991B1B" stroke="url(#goldRoyalLuster)" strokeWidth="1.2" />
                <circle cx="0" cy="0" r="2" fill="#047857" />
                {/* Cascading Pearl Strand */}
                <path d="M0,4 Q10,12 18,8" stroke="url(#goldRoyalLuster)" strokeWidth="1.2" strokeDasharray="2 2" fill="none" />
              </g>
            </g>

            {/* Groom Facial Features */}
            {/* Ear */}
            <circle cx="23" cy="77" r="4.5" fill="#D7A87E" />
            {/* Eyebrow */}
            <path d="M44,60 Q50,58 56,62" stroke="#2B1A0E" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            {/* Kohled Eye */}
            <ellipse cx="50" cy="67" rx="2.5" ry="2" fill="#2B1A0E" />
            <circle cx="49.5" cy="66.5" r="0.6" fill="#FFFFFF" />
            {/* Nose */}
            <path d="M57,72 L60,78 L56,79" stroke="#C99469" strokeWidth="1.2" fill="none" />
            {/* Smile */}
            <path d="M50,88 Q55,90 58,86" stroke="#B87B56" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>

          {/* ======================================================== */}
          {/* 4. BRIDE (Arbaeen - Right) */}
          {/* ======================================================== */}
          <g transform="translate(210, 120)">
            {/* Flowing Royal Bridal Dupatta / Veil (Glow & Silhouette) */}
            <path
              d="M48,32 C12,28 -12,75 -18,160 C-24,225 -16,285 -10,290 C12,295 90,295 135,285 C145,230 140,120 110,50 C94,32 70,32 48,32 Z"
              fill="url(#sheerVeil)"
              stroke="url(#goldRoyalLuster)"
              strokeWidth="1.6"
            />

            {/* Scalloped Gota Patti Gold Border along Bridal Veil Edge */}
            <path
              d="M42,32 C18,40 -6,90 -12,165 C-14,215 -10,265 0,290"
              stroke="url(#goldRoyalLuster)"
              strokeWidth="2.8"
              fill="none"
              strokeDasharray="5 2.5"
            />

            {/* Bridal Lehenga Torso & Silk Blouse */}
            <path
              d="M20,130 C8,150 -2,195 -8,290 L102,290 C96,210 86,150 74,130 Z"
              fill="url(#bridalSilks)"
              stroke="url(#goldRoyalLuster)"
              strokeWidth="1.4"
            />

            {/* Intricate Royal Zardozi Gold Motifs on Lehenga */}
            <path d="M16,168 Q50,185 84,168" stroke="url(#goldRoyalLuster)" strokeWidth="1.8" fill="none" />
            <path d="M10,200 Q50,222 90,200" stroke="url(#goldRoyalLuster)" strokeWidth="1.8" fill="none" />
            <path d="M4,238 Q50,265 96,238" stroke="url(#goldRoyalLuster)" strokeWidth="1.8" fill="none" />
            <circle cx="50" cy="190" r="3.5" fill="url(#goldRoyalLuster)" />
            <circle cx="50" cy="228" r="3.5" fill="url(#goldRoyalLuster)" />

            {/* Neck */}
            <rect x="40" y="94" width="16" height="22" rx="3" fill="#E8BD95" />

            {/* Royal Gold Bridal Choker & Layered Rani Haar Necklace */}
            <path d="M34,115 Q48,128 62,115" stroke="url(#goldRoyalLuster)" strokeWidth="3.5" fill="none" />
            <path d="M30,124 Q48,144 66,124" stroke="url(#goldRoyalLuster)" strokeWidth="2.2" fill="none" strokeDasharray="3 2" />
            {/* Emerald Center Pendant */}
            <circle cx="48" cy="136" r="3.5" fill="#047857" stroke="url(#goldRoyalLuster)" strokeWidth="1" />
            <circle cx="48" cy="136" r="1.5" fill="#FFF9E6" />

            {/* Bride Face */}
            <path
              d="M30,70 C30,48 42,40 50,40 C60,40 70,48 70,70 C70,88 60,99 50,99 C40,99 30,88 30,70 Z"
              fill="#F2CBB0"
            />

            {/* Hair under Veil */}
            <path
              d="M30,66 C30,44 40,38 52,38 C62,38 70,46 70,66 C68,54 60,48 50,48 C40,48 32,54 30,66 Z"
              fill="#181513"
            />

            {/* BRIDAL MAANG TIKKA (Forehead Jewel with Sparkling Diamond) */}
            <g>
              <line x1="50" y1="38" x2="50" y2="54" stroke="url(#goldRoyalLuster)" strokeWidth="1.5" />
              <circle cx="50" cy="56" r="4" fill="url(#goldRoyalLuster)" />
              <circle cx="50" cy="56" r="1.8" fill="#FFFFFF" />
            </g>

            {/* Royal Bridal Jhumkas (Earrings with Pearl Drops) */}
            <g transform="translate(27, 76)">
              <circle cx="0" cy="0" r="2" fill="url(#goldRoyalLuster)" />
              <path d="M-4,3 L4,3 L3,8 L-3,8 Z" fill="url(#goldRoyalLuster)" />
              <circle cx="0" cy="10" r="1.4" fill="#FFFFFF" />
            </g>

            {/* Bride Facial Features */}
            {/* Eyebrows */}
            <path d="M37,58 Q42,55 47,58" stroke="#2B1A0E" strokeWidth="1.4" fill="none" strokeLinecap="round" />
            {/* Kohled Bridal Eye */}
            <path d="M38,64 Q42,67 47,64" stroke="#1A110B" strokeWidth="1.8" fill="none" />
            <ellipse cx="42" cy="64" rx="2.2" ry="1.9" fill="#1A110B" />
            <circle cx="41.5" cy="63.5" r="0.7" fill="#FFFFFF" />
            {/* Bridal Nath (Nose Ring with Delicate Chain) */}
            <path d="M47,70 L50,74 L46,75" stroke="#DCA276" strokeWidth="1" fill="none" />
            <circle cx="48" cy="75" r="2.8" stroke="url(#goldRoyalLuster)" strokeWidth="1" fill="none" />
            <path d="M48,77 Q38,82 28,78" stroke="url(#goldRoyalLuster)" strokeWidth="0.8" fill="none" strokeDasharray="1.5 1.5" />
            {/* Rose Lips */}
            <path d="M40,84 Q45,87 50,84" stroke="#E11D48" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </g>

          {/* ======================================================== */}
          {/* 5. CENTER EMBRACE / JOINED HANDS WITH MEHNDI */}
          {/* ======================================================== */}
          <g transform="translate(198, 285)">
            {/* Joined Hands with Mehndi/Henna Motif */}
            <circle cx="22" cy="18" r="14" fill="#DFB28B" />
            <circle cx="22" cy="18" r="10" fill="none" stroke="url(#goldRoyalLuster)" strokeWidth="1.2" strokeDasharray="2 2" />

            {/* Sacred Rose of Love between them */}
            <path
              d="M22,8 C17,1 27,1 22,8 Z M18,10 C13,6 16,14 20,12 Z M26,10 C31,6 28,14 24,12 Z"
              fill="#E11D48"
            />
            <circle cx="22" cy="10" r="2.5" fill="url(#goldRoyalLuster)" />
          </g>

          {/* ======================================================== */}
          {/* 6. ANIMATED DIAMOND & GOLD JEWELRY TWINKLES */}
          {/* ======================================================== */}
          <g>
            <circle cx="260" cy="176" r="2.2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '2.8s' }} />
            <circle cx="178" cy="135" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '3.6s', animationDelay: '1.2s' }} />
            <circle cx="220" cy="32" r="2" fill="#FFFFFF" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};
