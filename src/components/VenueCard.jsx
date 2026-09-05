import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CornerFlourish, OrnateDivider, IslamicStar } from './OrnamentalElements';
import { MapPin, Navigation, CalendarPlus, Check, Copy } from 'lucide-react';

export const VenueCard = () => {
  const [copied, setCopied] = useState(false);
  const venueName = "Shehnaz Palace Banquet Hall";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueName)}`;

  // Google Calendar link
  // 14 December 2026, 12:00 PM to 4:00 PM (20261214T120000 / 20261214T160000)
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Arbaeen & Danish | Wedding & Nikah"
  )}&dates=20261214T120000/20261214T160000&details=${encodeURIComponent(
    "Celebration of the Wedding & Nikah of Arbaeen and Danish at Shehnaz Palace Banquet Hall."
  )}&location=${encodeURIComponent(venueName)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(venueName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="venue" className="relative py-16 md:py-24 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9 }}
        className="relative card-white-royal rounded-[2.5rem] p-8 sm:p-12 shadow-gold-glow overflow-hidden"
      >
        <CornerFlourish position="top-left" className="w-12 h-12 text-gold-600/60 absolute top-2 left-2" />
        <CornerFlourish position="top-right" className="w-12 h-12 text-gold-600/60 absolute top-2 right-2" />
        <CornerFlourish position="bottom-left" className="w-12 h-12 text-gold-600/60 absolute bottom-2 left-2" />
        <CornerFlourish position="bottom-right" className="w-12 h-12 text-gold-600/60 absolute bottom-2 right-2" />

        {/* Palace Icon Badge */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-gold-400/60 bg-[#FBF7EE] flex items-center justify-center text-gold-700 shadow-inner-gold">
          <MapPin className="w-8 h-8 text-gold-600 animate-bounce" style={{ animationDuration: '2.5s' }} />
        </div>

        <span className="font-sans text-xs uppercase tracking-[0.35em] text-gold-700 font-semibold block mb-2">
          THE BANQUET VENUE
        </span>

        {/* Venue Title */}
        <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-gold-rich tracking-wide mb-4">
          Shehnaz Palace Banquet Hall
        </h2>

        <p className="font-sans text-sm text-[#38332B] max-w-lg mx-auto leading-relaxed font-normal mb-8">
          An exquisite royal palace setting chosen to host our families, friends, and esteemed guests for this momentous celebration.
        </p>

        <OrnateDivider className="mb-8 opacity-70" />

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* GET DIRECTIONS Button */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-velvet-950 font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <Navigation className="w-4 h-4 text-velvet-950 fill-velvet-950" />
            <span>GET DIRECTIONS</span>
          </a>

          {/* ADD TO CALENDAR Button */}
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full border border-gold-400/60 bg-[#FBF7EE] hover:bg-gold-400/20 text-gold-800 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-gold-400"
          >
            <CalendarPlus className="w-4 h-4 text-gold-600" />
            <span>Add to Calendar</span>
          </a>

          {/* Copy Address Button */}
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-gold-400/40 bg-white hover:bg-[#FBF7EE] text-[#38332B] font-sans text-xs tracking-wider transition-all focus:outline-none shadow-sm"
            title="Copy Venue Name"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gold-600" />
                <span>Copy Name</span>
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};
