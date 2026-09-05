import React, { useEffect, useRef } from 'react';

/**
 * Ultra-Premium Floating Gold Dust & Twinkling Starburst Particles
 * 60fps canvas particle field with 4-point sparkling stars and golden embers
 */
export const FloatingParticles = ({ count = 55 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle types: circles (dust) and 4-point starbursts (twinkling stars)
    const createParticle = () => {
      const isStar = Math.random() > 0.72;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: isStar ? Math.random() * 3 + 1.8 : Math.random() * 2.2 + 0.6,
        isStar,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.35,
        baseAlpha: Math.random() * 0.65 + 0.25,
        alpha: 0,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.02 + Math.random() * 0.03,
        color: Math.random() > 0.3 ? '#D4AF37' : '#F8ECC2',
      };
    };

    const particles = Array.from({ length: count }, createParticle);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Draw 4-point starburst
    const drawStar = (cx, cy, spikes, outerRadius, innerRadius, color, alpha) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      ctx.shadowBlur = outerRadius * 4;
      ctx.shadowColor = '#F8ECC2';
      ctx.fill();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.phase += p.phaseSpeed;

        p.alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.phase));

        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        if (p.isStar) {
          drawStar(p.x, p.y, 4, p.size * 2, p.size * 0.5, p.color, p.alpha);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = p.size * 3;
          ctx.shadowColor = '#D4AF37';
          ctx.fill();
        }
      });

      ctx.globalAlpha = 1.0;
      ctx.shadowBlur = 0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-75"
    />
  );
};
