import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingParticles } from './components/FloatingParticles';
import { AudioPlayer } from './components/AudioPlayer';
import { RoyalCurtains } from './components/RoyalCurtains';
import { HeroEnvelope } from './components/HeroEnvelope';
import { CoupleSection } from './components/CoupleSection';
import { NikahDetails } from './components/NikahDetails';
import { VenueCard } from './components/VenueCard';
import { EventTimeline } from './components/EventTimeline';
import { CountdownTimer } from './components/CountdownTimer';
import { InvitationMessage } from './components/InvitationMessage';
import { FinalSection } from './components/FinalSection';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const invitationContentRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    // Allow the theatrical 2.2s curtain unveiling to complete before gently inviting exploration
    setTimeout(() => {
      invitationContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2200);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-1000 ${
      isOpened
        ? 'bg-ivory-pattern text-[#1C1A17] selection:bg-gold-500/20 selection:text-gold-900'
        : 'bg-velvet-950 text-ivory-100 bg-islamic-pattern selection:bg-gold-400/30 selection:text-gold-200'
    } overflow-x-hidden`}>
      {/* Dynamic Gold Dust, Stars & Drifting Flower Petals Canvas */}
      <FloatingParticles count={60} />

      {/* Royal Velvet Palace Curtains Opening Animation */}
      <RoyalCurtains isOpened={isOpened} onOpen={handleOpenInvitation} />

      {/* Persistent Floating Audio Controller */}
      <AudioPlayer isTriggered={isOpened} />

      {/* Main Container */}
      <main className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* 1. HERO SECTION (Opening Experience with 2D Couple Revelation) */}
        <HeroEnvelope isOpened={isOpened} onOpen={handleOpenInvitation} />

        {/* REVEALED INVITATION CONTENT */}
        <AnimatePresence>
          {isOpened && (
            <motion.div
              ref={invitationContentRef}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full space-y-6 md:space-y-12"
            >
              {/* 2. COUPLE SECTION */}
              <CoupleSection />

              {/* 3. WEDDING & NIKAH SECTION */}
              <NikahDetails />

              {/* 4. VENUE SECTION */}
              <VenueCard />

              {/* 5. EVENT TIMELINE */}
              <EventTimeline />

              {/* 6. COUNTDOWN */}
              <CountdownTimer />

              {/* 7. INVITATION MESSAGE */}
              <InvitationMessage />

              {/* 8. FINAL SECTION */}
              <FinalSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
