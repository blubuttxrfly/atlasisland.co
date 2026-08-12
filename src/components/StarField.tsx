import { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

const RAY_COLORS = [
  '255,255,255',
  '255,240,220',
  '220,230,255',
  '250,220,180',
  '200,210,255',
  '255,230,200',
];

function generateStars(count: number, width: number, height: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    // Mostly tiny stars, occasional slightly larger
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
      color: RAY_COLORS[Math.floor(Math.random() * RAY_COLORS.length)],
    });
  }
  return stars;
}

export function StarField({ count = 70 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);
  const dimsRef = useRef({ w: 0, h: 0 });

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
      starsRef.current = generateStars(count, w, h);
    };

    resize();
    window.addEventListener('resize', resize);

    let frame = 0;
    const draw = () => {
      frame++;
      const { w, h } = dimsRef.current;
      ctx.clearRect(0, 0, w, h);

      // Atmospheric gradient
      const grad = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, Math.max(w, h) * 0.7);
      grad.addColorStop(0, 'rgba(10,5,21,0)');
      grad.addColorStop(0.7, 'rgba(10,5,21,0.3)');
      grad.addColorStop(1, 'rgba(10,5,21,0.6)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      const stars = starsRef.current;
      const skip = frame % 2 === 0 && stars.length > 60;
      for (let i = 0; i < stars.length; i++) {
        if (skip && i % 2 !== 0) continue;
        const s = stars[i];
        const twinkle = Math.sin(Date.now() * s.twinkleSpeed + s.twinkleOffset);
        const alpha = s.opacity * (0.5 + 0.5 * twinkle);

        // Soft glow — all stars glow, larger for bigger stars
        ctx.beginPath();
        const glowRadius = s.size * (s.size > 1.2 ? 6 : 8);
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
  }, [count]);

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
      }}
    />
  );
}
