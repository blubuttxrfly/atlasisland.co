import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

/* ── 12 Ray Color Overlays ── */
const RAY_TINTS = [
  { name: 'Red',    tint: 'rgba(201,64,64,0.35)' },
  { name: 'Orange', tint: 'rgba(212,115,42,0.35)' },
  { name: 'Yellow', tint: 'rgba(212,184,48,0.35)' },
  { name: 'Green',  tint: 'rgba(58,155,111,0.35)' },
  { name: 'Teal',   tint: 'rgba(42,179,196,0.35)' },
  { name: 'Blue',   tint: 'rgba(100,85,223,0.35)' },
  { name: 'Indigo', tint: 'rgba(139,79,181,0.35)' },
  { name: 'Violet', tint: 'rgba(183,89,183,0.35)' },
  { name: 'Magenta', tint: 'rgba(255,0,153,0.35)' },
  { name: 'Gold',   tint: 'rgba(250,209,68,0.35)' },
  { name: 'Silver', tint: 'rgba(176,176,192,0.35)' },
  { name: 'White',  tint: 'rgba(220,220,235,0.35)' },
];

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  rayIndex: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 7 + Math.random() * 11,    // 7px – 18px
    delay: Math.random() * 10,
    duration: 4 + Math.random() * 6,
    rayIndex: Math.floor(Math.random() * RAY_TINTS.length),
  }));
}

/* Classic 4-pointed diamond star SVG path */
const DIAMOND_STAR_PATH = 'M12 0l2.8 9.2L24 12l-9.2 2.8L12 24l-2.8-9.2L0 12l9.2-2.8z';

/** Hoverable 4-pointed diamond star */
function DiamondStar({
  size,
  tint,
  baseDuration,
}: {
  size: number;
  tint: string;
  baseDuration: number;
}) {
  const [hovered, setHovered] = useState(false);
  const s = size;
  const glowSize = hovered ? s * 5 : s * 2.2;

  return (
    <div
      className="relative flex items-center justify-center cursor-crosshair"
      style={{ width: s * 2, height: s * 2, marginLeft: -s * 0.5, marginTop: -s * 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer radiating glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: glowSize,
          height: glowSize,
          background: `radial-gradient(circle, rgba(220,220,235,${hovered ? 0.6 : 0.25}) 0%, transparent 65%)`,
          filter: `blur(${hovered ? 4 : 2}px)`,
        }}
        animate={{
          scale: hovered ? [1, 2.2, 1.5] : [1, 1.7, 1],
          opacity: hovered ? [0.5, 1, 0.6] : [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: hovered ? 1.2 : baseDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: s * 1.3,
          height: s * 1.3,
          background: `radial-gradient(circle, ${tint} 0%, transparent 60%)`,
          filter: 'blur(1px)',
        }}
        animate={{
          scale: hovered ? 1.6 : [1, 1.25, 1],
          opacity: hovered ? 0.95 : [0.3, 0.75, 0.3],
        }}
        transition={{
          duration: hovered ? 0.8 : baseDuration * 0.7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 4-pointed diamond star SVG */}
      <motion.svg
        viewBox="0 0 24 24"
        className="relative pointer-events-none"
        style={{ width: s, height: s }}
        animate={{
          scale: hovered ? 1.5 : [1, 1.12, 1],
          rotate: hovered ? [0, 12, -12, 0] : 0,
        }}
        transition={{
          scale: { duration: hovered ? 0.3 : baseDuration * 0.5, ease: 'easeOut' },
          rotate: { duration: 0.6, ease: 'easeInOut' },
        }}
      >
        <defs>
          <linearGradient id={`starGrad-${size}`} x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#f5efe0" />
            <stop offset="100%" stopColor="#d8d0c0" />
          </linearGradient>
        </defs>

        {/* Base fill */}
        <path
          d={DIAMOND_STAR_PATH}
          fill={`url(#starGrad-${size})`}
          opacity={0.95}
        />
        
        {/* Ray tint overlay */}
        <path
          d={DIAMOND_STAR_PATH}
          fill={tint}
          opacity={0.9}
        />
        
        {/* Bright core */}
        <path
          d={DIAMOND_STAR_PATH}
          fill="rgba(255,255,255,0.5)"
          style={{ transform: 'scale(0.55)', transformOrigin: 'center' }}
          opacity={0.8}
        />
      </motion.svg>
    </div>
  );
}

export function StarField({ count = 80 }: { count?: number }) {
  const stars = useMemo(() => generateStars(count), [count]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    >
      {stars.map((star) => {
        const ray = RAY_TINTS[star.rayIndex];
        return (
          <motion.div
            key={star.id}
            className="absolute pointer-events-none"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.06, 0.55, 0.06],
            }}
            transition={{
              opacity: {
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            <DiamondStar
              size={star.size}
              tint={ray.tint}
              baseDuration={star.duration}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
