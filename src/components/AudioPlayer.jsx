import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

/**
 * Luxury Ambient Audio Controller
 * Uses Web Audio API to synthesize a serene, meditative acoustic harp & pad
 * chord progression in oriental pentatonic / serene harmonic minor scale.
 * Zero external audio file download dependencies, 100% offline & reliable.
 */
export const AudioPlayer = ({ isTriggered = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioCtxRef = useRef(null);
  const gainNodeRef = useRef(null);
  const intervalRef = useRef(null);
  const stepRef = useRef(0);

  // Serene Eastern / Celtic Pentatonic frequencies (D, E, F#, A, B, d, e, f#)
  const notes = [
    146.83, // D3 (warm drone)
    220.00, // A3
    293.66, // D4
    329.63, // E4
    369.99, // F#4
    440.00, // A4
    493.88, // B4
    587.33, // D5
    659.25, // E5
    739.99, // F#5
    880.00, // A5
  ];

  // Pluck a realistic gentle harp note
  const playHarpNote = (freq, ctx, masterGain, duration = 2.5, velocity = 0.08) => {
    if (!ctx || ctx.state === 'suspended') return;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const noteGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm triangle + subtle sine harmonic
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Warm acoustic low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.frequency.exponentialRampToValueAtTime(300, now + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(velocity, now + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(masterGain);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  };

  // Init Audio Context
  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.35, ctx.currentTime);
      gain.connect(ctx.destination);

      audioCtxRef.current = ctx;
      gainNodeRef.current = gain;
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const startMusicLoop = () => {
    initAudio();
    if (!audioCtxRef.current || !gainNodeRef.current) return;

    // Peaceful recurring arpeggio patterns
    const pattern = [
      [146.83, 293.66, 440.00], // D - A
      [369.99],
      [440.00, 587.33],
      [329.63],
      [220.00, 440.00, 659.25], // A - E
      [493.88],
      [587.33, 739.99],
      [440.00],
    ];

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const ctx = audioCtxRef.current;
      const masterGain = gainNodeRef.current;
      if (!ctx || !masterGain || isMuted) return;

      const chord = pattern[stepRef.current % pattern.length];
      chord.forEach((freq, idx) => {
        setTimeout(() => {
          playHarpNote(freq, ctx, masterGain, 3.2, 0.07);
        }, idx * 120);
      });

      stepRef.current += 1;
    }, 1800);

    setIsPlaying(true);
  };

  const stopMusicLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMusicLoop();
    } else {
      startMusicLoop();
    }
  };

  const toggleMute = () => {
    if (!gainNodeRef.current || !audioCtxRef.current) return;
    if (isMuted) {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.35, audioCtxRef.current.currentTime + 0.5);
      setIsMuted(false);
    } else {
      gainNodeRef.current.gain.linearRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
      setIsMuted(true);
    }
  };

  // React to parent trigger (e.g. user clicks "Open Invitation")
  useEffect(() => {
    if (isTriggered && !isPlaying) {
      startMusicLoop();
    }
    return () => {
      stopMusicLoop();
    };
  }, [isTriggered]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <div className="flex items-center gap-2 bg-[#FAF7F0]/95 backdrop-blur-md border border-gold-500/50 rounded-full px-3.5 py-2 shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-800 hover:text-gold-900 transition-colors focus:outline-none"
          title={isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
          aria-label={isPlaying ? "Pause Ambient Music" : "Play Ambient Music"}
        >
          <span className="relative flex h-2.5 w-2.5">
            {isPlaying && !isMuted && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
            )}
            <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying && !isMuted ? 'bg-gold-500' : 'bg-gold-600/50'}`}></span>
          </span>

          <span className="hidden sm:inline font-sans text-[11px] text-gold-800 font-bold">
            {isPlaying ? "Nikah Melody" : "Play Music"}
          </span>

          {/* Mini Equalizer visualizer bars */}
          {isPlaying && !isMuted ? (
            <div className="flex items-end gap-[2px] h-3.5 px-0.5">
              <div className="w-[2.5px] bg-gold-600 animate-bounce h-2" style={{ animationDelay: '0ms', animationDuration: '600ms' }}></div>
              <div className="w-[2.5px] bg-gold-600 animate-bounce h-3.5" style={{ animationDelay: '150ms', animationDuration: '800ms' }}></div>
              <div className="w-[2.5px] bg-gold-600 animate-bounce h-2.5" style={{ animationDelay: '300ms', animationDuration: '700ms' }}></div>
            </div>
          ) : (
            <Music size={14} className="text-gold-700" />
          )}
        </button>

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="text-gold-700 hover:text-gold-900 ml-1 p-1 rounded-full hover:bg-gold-500/10 transition"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </div>
    </div>
  );
};
