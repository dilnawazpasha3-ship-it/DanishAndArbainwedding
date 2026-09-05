/**
 * Web Audio API Sound Effects Synthesizer
 * Provides instant, zero-dependency, ultra-realistic celestial harp glissando
 * and sparkling bell chimes when the royal curtains and wax seal open.
 */

export const playCinematicOpeningSound = () => {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.4, now);
    masterGain.connect(ctx.destination);

    // 1. Low warm ambient sub boom/swell on curtain start
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(80, now);
    subOsc.frequency.exponentialRampToValueAtTime(140, now + 1.2);
    subGain.gain.setValueAtTime(0.001, now);
    subGain.gain.linearRampToValueAtTime(0.25, now + 0.3);
    subGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);
    subOsc.connect(subGain);
    subGain.connect(masterGain);
    subOsc.start(now);
    subOsc.stop(now + 2.6);

    // 2. Rising celestial harp chime glissando (Oriental Pentatonic scale)
    // Frequencies: D4, F#4, A4, B4, D5, E5, F#5, A5, B5, D6, F#6
    const glissNotes = [
      293.66, 369.99, 440.00, 493.88, 587.33, 659.25, 739.99, 880.00, 987.77,
      1174.66, 1479.98,
    ];

    glissNotes.forEach((freq, i) => {
      const noteTime = now + 0.15 + i * 0.085;
      const osc = ctx.createOscillator();
      const oscHarmonic = ctx.createOscillator();
      const noteGain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // Triangle for harp body + sine for crystalline chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, noteTime);

      oscHarmonic.type = 'sine';
      oscHarmonic.frequency.setValueAtTime(freq * 2, noteTime);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq * 1.5, noteTime);
      filter.Q.setValueAtTime(2.0, noteTime);

      const duration = 2.2;
      noteGain.gain.setValueAtTime(0.0001, noteTime);
      noteGain.gain.linearRampToValueAtTime(0.12 - i * 0.006, noteTime + 0.02);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + duration);

      osc.connect(filter);
      oscHarmonic.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(noteTime);
      oscHarmonic.start(noteTime);
      osc.stop(noteTime + duration + 0.1);
      oscHarmonic.stop(noteTime + duration + 0.1);
    });

    // 3. Shimmering high bell sparkle finish (wind chime burst)
    const sparkleNotes = [1760.00, 2093.00, 2349.32, 2793.83];
    sparkleNotes.forEach((freq, idx) => {
      const noteTime = now + 1.1 + idx * 0.09;
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      noteGain.gain.setValueAtTime(0.0001, noteTime);
      noteGain.gain.linearRampToValueAtTime(0.06, noteTime + 0.015);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, noteTime + 1.8);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(noteTime);
      osc.stop(noteTime + 1.9);
    });
  } catch (err) {
    // Graceful fallback if audio is not allowed
  }
};
