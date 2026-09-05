import React, { useEffect, useRef } from 'react';

/**
 * Ultra-Premium Floating Gold Dust, Twinkling Stars & Drifting Flower Petals
 * High-performance 60fps HTML5 Canvas Particle Engine
 * Renders:
 * - 4-point twinkling golden starbursts
 * - Golden ambient dust embers
 * - Drifting rose & jasmine flower petals with natural fluttering rotation
 */
export const FloatingParticles = ({ count = 60 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle types:
    // 0: Golden Dust Particle
    // 1: Twinkling 4-Point Starburst
    // 2: Drifting Rose Petal (Velvet Crimson / Warm Gold)
    // 3: Delicate Jasmine Petal (Ivory / Pearl White)
    const createParticle = () => {
      const rand = Math.random();
      let type = 0;
      if (rand > 0.78) {
        type = 1; // Starburst
      } else if (rand > 0.52) {
        type = 2; // Rose Petal
      } else if (rand > 0.38) {
        type = 3; // Jasmine Petal
      } else {
        type = 0; // Dust
      }

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        type,
        size:
          type === 1
            ? Math.random() * 2.8 + 1.6
            : type === 2
            ? Math.random() * 8 + 6 // Rose petal
            : type === 3
            ? Math.random() * 6 + 5 // Jasmine petal
            : Math.random() * 2.2 + 0.8, // Dust
        speedY:
          type === 2 || type === 3
            ? Math.random() * 0.8 + 0.45 // Petals fall down gently
            : -(Math.random() * 0.4 + 0.15), // Dust & stars float up
        speedX: (Math.random() - 0.5) * 0.4,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.02 + 0.015,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.03,
        baseAlpha:
          type === 2 || type === 3
            ? Math.random() * 0.4 + 0.3
            : Math.random() * 0.65 + 0.25,
        alpha: 0,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.02 + Math.random() * 0.03,
        color:
          type === 2
            ? Math.random() > 0.5
              ? '#D93850' // Rose Crimson
              : '#E6A540' // Golden Rose
            : type === 3
            ? '#FAF6EE' // Jasmine Ivory
            : Math.random() > 0.35
            ? '#D4AF37'
            : '#F8ECC2',
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
      ctx.shadowBlur = outerRadius * 3;
      ctx.shadowColor = '#D4AF37';
      ctx.fill();
    };

    // Draw floating curved petal
    const drawPetal = (x, y, size, rotation, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = alpha;
      ctx.fillStyle = color;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.2)';

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.bezierCurveTo(size * 0.8, -size * 0.4, size * 0.9, size * 0.6, 0, size);
      ctx.bezierCurveTo(-size * 0.9, size * 0.6, -size * 0.8, -size * 0.4, 0, -size);
      ctx.closePath();
      ctx.fill();

      // Delicate inner rib line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -size * 0.7);
      ctx.lineTo(0, size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.swayAngle += p.swaySpeed;
        p.rotation += p.rotSpeed;
        p.phase += p.phaseSpeed;

        if (p.type === 2 || p.type === 3) {
          // Petals drift downwards with horizontal breeze oscillation
          p.y += p.speedY;
          p.x += Math.sin(p.swayAngle) * 0.7 + p.speedX;
          p.alpha = p.baseAlpha * (0.8 + 0.2 * Math.sin(p.phase));

          if (p.y > height + 20) {
            p.y = -20;
            p.x = Math.random() * width;
          }
          if (p.x < -20) p.x = width + 20;
          if (p.x > width + 20) p.x = -20;

          drawPetal(p.x, p.y, p.size, p.rotation, p.color, p.alpha);
        } else {
          // Dust and Stars float upward gently
          p.y += p.speedY;
          p.x += p.speedX;
          p.alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(p.phase));

          if (p.y < -15) {
            p.y = height + 15;
            p.x = Math.random() * width;
          }
          if (p.x < -15) p.x = width + 15;
          if (p.x > width + 15) p.x = -15;

          if (p.type === 1) {
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
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-85"
    />
  );
};
