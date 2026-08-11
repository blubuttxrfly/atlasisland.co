import { useRef, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

const MOON_COLORS = [
  '255,255,255',
  '255,250,240',
  '250,245,220',
  '255,240,210',
  '245,250,255',
  '255,235,200',
];

const SUN_COLORS = [
  '255,0,153',    // Magenta Ray — luminous on lavender
  '250,209,68',   // Gold Ray — bright sun spark
  '42,179,196',   // Teal Ray — airy contrast
  '201,64,64',    // Red Ray — warm ember
  '58,155,111',   // Green Ray — living light
  '212,115,42',   // Orange Ray — solar flare
];

function generateStars(count: number, width: number, height: number, isLight: boolean): Star[] {
  const stars: Star[] = [];
  const palette = isLight ? SUN_COLORS : MOON_COLORS;
  for (let i = 0; i < count; i++) {
    const size = Math.random() < 0.85
      ? 0.5 + Math.random() * 1.0
      : 1.2 + Math.random() * 1.0;
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size,
      opacity: 0.25 + Math.random() * 0.55,
      twinkleSpeed: 0.001 + Math.random() * 0.002,
      twinkleOffset: Math.random() * Math.PI * 2,
      color: palette[Math.floor(Math.random() * palette.length)],
    });
  }
  return stars;
}

export function StarField({ count = 70 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const dimsRef = useRef({ w: 0, h: 0 });
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimsRef.current = { w, h };
      starsRef.current = generateStars(isLight ? Math.floor(count * 0.7) : count, w, h, isLight);
    };

    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const draw = () => {
      frame++;
      const { w, h } = dimsRef.current;
      ctx.clearRect(0, 0, w, h);

      // Atmospheric gradient — dark mode only
      if (!isLight) {
        const grad = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, Math.max(w, h) * 0.7);
        grad.addColorStop(0, 'rgba(10,5,21,0)');
        grad.addColorStop(0.7, 'rgba(10,5,21,0.3)');
        grad.addColorStop(1, 'rgba(10,5,21,0.6)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      // Draw stars
      const stars = starsRef.current;
      const skip = frame % 2 === 0 && stars.length > 60;
      for (let i = 0; i < stars.length; i++) {
        if (skip && i % 2 !== 0) continue;
        const s = stars[i];
        const twinkle = Math.sin(Date.now() * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * (0.5 + 0.5 * twinkle);

        // Soft glow — smaller in light mode
        ctx.beginPath();
        const glowRadius = s.size * (s.size > 1.2 ? (isLight ? 5 : 6) : (isLight ? 6 : 8));
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowRadius);
        glow.addColorStop(0, `rgba(${s.color},${alpha * 0.6})`);
        glow.addColorStop(0.4, `rgba(${s.color},${alpha * 0.15})`);
        glow.addColorStop(1, `rgba(${s.color},0)`);
        ctx.fillStyle = glow;
        ctx.arc(s.x, s.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${alpha * 0.9})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [count, isLight]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: isLight ? 0.75 : 1,
      }}
    />
  );
}
