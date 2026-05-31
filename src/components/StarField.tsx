import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';

/* ── 12 Ray Color Overlays ── */
const RAY_TINTS = [
  { name: 'Red',    tint: 'rgba(201,64,64,0.5)' },
  { name: 'Orange', tint: 'rgba(212,115,42,0.5)' },
  { name: 'Yellow', tint: 'rgba(212,184,48,0.5)' },
  { name: 'Green',  tint: 'rgba(58,155,111,0.5)' },
  { name: 'Teal',   tint: 'rgba(42,179,196,0.5)' },
  { name: 'Blue',   tint: 'rgba(100,85,223,0.5)' },
  { name: 'Indigo', tint: 'rgba(139,79,181,0.5)' },
  { name: 'Violet', tint: 'rgba(183,89,183,0.5)' },
  { name: 'Magenta', tint: 'rgba(255,0,153,0.5)' },
  { name: 'Gold',   tint: 'rgba(250,209,68,0.5)' },
  { name: 'Silver', tint: 'rgba(176,176,192,0.5)' },
  { name: 'White',  tint: 'rgba(220,220,235,0.5)' },
];

interface StarDef {
  id: number;
  /* Position on the celestial dome */
  angle: number;      /* radians around the dome, 0-2π */
  distance: number;    /* 0 = zenith (center), 1 = horizon (edge) */
  /* Visual properties */
  size: number;
  brightness: number; /* 0-1 base opacity */
  delay: number;
  duration: number;
  rayIndex: number;
  twinklePhase: number; /* random offset for twinkle timing */
}

/* Deterministic pseudo-random for permanent constellation */
function seededRandom(seed: number): number {
  let s = seed * 9301 + 49297;
  s = (s % 233280) / 233280;
  return s;
}

/* ── Generate a sacred constellation across the night sky ──
 * 200 stars scattered across a celestial dome.
 * Viewer stands at the center looking straight up at the zenith.
 * The dome slowly rotates around the zenith, like the real night sky.
 * Stars near the zenith are brighter and larger;
 * stars near the horizon are smaller and faded by atmospheric haze.
 */
function generateSkyDome(count: number): StarDef[] {
  const stars: StarDef[] = [];

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 7 + 1);
    const r2 = seededRandom(i * 13 + 3);
    const r3 = seededRandom(i * 19 + 5);
    const r4 = seededRandom(i * 31 + 11);
    const r5 = seededRandom(i * 47 + 17);

    /* Bias distribution: more stars toward the horizon band for realism */
    /* distance 0 = zenith, 1 = horizon */
    let distance = Math.sqrt(r1); /* sqrt biases toward outer edge (more sky area there) */
    distance = distance * 0.92 + 0.08; /* keep a small clear zone at very center */

    /* Size: zenith stars are naturally brighter; horizon stars dimmer */
    /* Base size depends on distance from zenith + random variation */
    const zenithBonus = (1 - distance) * 2.5; /* up to 2.5px extra near zenith */
    let size: number;
    if (r2 < 0.60) {
      size = 1 + r3 * 1.5 + zenithBonus * 0.3;      /* 1-2.5px + bonus */
    } else if (r2 < 0.88) {
      size = 2 + r3 * 2.5 + zenithBonus * 0.5;      /* 2-4.5px + bonus */
    } else if (r2 < 0.97) {
      size = 4 + r3 * 3 + zenithBonus * 0.7;          /* 4-7px + bonus */
    } else {
      size = 7 + r3 * 5 + zenithBonus;                /* 7-12px + bonus */
    }
    size = Math.min(size, 13); /* cap max size */

    /* Brightness: zenith stars shine clearer; horizon stars muted by air */
    const atmosphericFade = 1 - distance * 0.18; /* gentler fade at horizon */
    const brightness = (0.5 + r4 * 0.5) * atmosphericFade; /* 0.5–1.0 base */

    stars.push({
      id: i,
      angle: r5 * Math.PI * 2,
      distance,
      size: Math.round(size * 10) / 10,
      brightness,
      delay: r3 * 10,
      duration: 3 + r4 * 5, /* 3-8s twinkle cycle */
      rayIndex: Math.floor(r5 * RAY_TINTS.length),
      twinklePhase: r1 * Math.PI * 2,
    });
  }

  return stars;
}

/* ── Static glowing star with gentle opacity twinkle only ── */
function GlowingStar({
  size,
  tint,
  brightness,
  baseDuration,
  twinklePhase,
}: {
  size: number;
  tint: string;
  brightness: number;
  baseDuration: number;
  twinklePhase: number;
}) {
  const [hovered, setHovered] = useState(false);

  /* Gentle opacity cycle — real stars twinkle, they don't grow/shrink */
  const minOp = brightness * 0.45;
  const maxOp = brightness;

  return (
    <div
      className="relative rounded-full cursor-crosshair"
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer glow halo — static position, only opacity breathes */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size * 3,
          height: size * 3,
          left: -size,
          top: -size,
          background: `radial-gradient(circle, ${tint} 0%, transparent 75%)`,
          filter: 'blur(1.2px)',
        }}
        animate={{
          opacity: hovered ? [0.6, 0.95, 0.6] : [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: hovered ? 0.9 : baseDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: twinklePhase * 0.3,
        }}
      />

      {/* Star core — gentle opacity twinkle only, no scale */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: size,
          height: size,
          inset: 0,
          background: `radial-gradient(circle, rgba(255,255,255,${hovered ? 1 : 0.92}) 0%, rgba(245,240,230,0.6) 30%, ${tint} 65%, transparent 100%)`,
          boxShadow: hovered
            ? `0 0 ${size * 4}px ${size * 1.2}px ${tint}, 0 0 ${size * 8}px ${size * 3}px rgba(255,255,255,0.15)`
            : `0 0 ${size * 2}px ${size * 0.4}px ${tint}`,
        }}
        animate={{
          opacity: hovered ? 1 : [minOp, maxOp, minOp],
        }}
        transition={{
          duration: hovered ? 0.25 : baseDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: twinklePhase * 0.3,
        }}
      />
    </div>
  );
}

/* ── Shooting star that streaks across the dome ── */
function ShootingStar({ spread, seed }: { spread: number; seed: number }) {
  const r1 = seededRandom(seed % 9973);
  const r2 = seededRandom(seed % 10007);
  const r3 = seededRandom(seed % 10013);
  const r4 = seededRandom(seed % 10039);

  /* Any direction across the sky, full 360° */
  const travelAngle = r1 * Math.PI * 2;

  const tailLength = 90 + r3 * 130; /* 90–220px tail */
  const duration = 2.2 + r4 * 2.3; /* 2.2–4.5 seconds visible streak */

  const viewportHalf = spread / 1.6;
  const aspect = 0.7; /* estimated viewport height / width */

  /* Start somewhere near the center of the viewport */
  const startX = (r2 - 0.5) * viewportHalf;
  const startY = (r3 - 0.5) * viewportHalf * aspect;

  /* Travel far enough to cross the entire viewport */
  const moveDist = viewportHalf * 2.8;
  const dx = Math.cos(travelAngle) * moveDist;
  const dy = Math.sin(travelAngle) * moveDist;

  /* Tail points opposite to travel direction.
   * travelAngle is already in CSS clockwise convention (0=right, π/2=down, π=left, 3π/2=up).
   * The tail bar's transformOrigin is 'left center' — the left end is the head.
   * We rotate the bar so it extends opposite to the travel angle.
   */
  const tailAngleDeg = (travelAngle + Math.PI) * (180 / Math.PI);

  /* Smooth fade: 0%→invisible, 15%→full bright, 85%→full bright, 100%→out */
  const times = [0, 0.15, 0.85, 1];

  return (
    <div className="absolute pointer-events-none" style={{ left: '50%', top: '50%' }}>
      {/* Glowing tail: bright at the head end, fading behind */}
      <motion.div
        className="absolute"
        style={{
          width: tailLength,
          height: 3,
          left: 0,
          top: -1.5,
          transformOrigin: 'left center',
          /* left = head side (bright), right = tail end (fade) */
          background:
            'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(250,235,180,0.75) 10%, rgba(250,209,68,0.35) 45%, rgba(250,209,68,0.08) 75%, transparent 100%)',
          borderRadius: 2,
          filter: 'blur(0.6px)',
          transform: `rotate(${tailAngleDeg}deg)`,
        }}
        initial={{ x: startX, y: startY, opacity: 0, scaleX: 0.4 }}
        animate={{
          x: [startX, startX + dx],
          y: [startY, startY + dy],
          opacity: [0, 1, 1, 0],
          scaleX: [0.4, 1, 1, 0.6],
        }}
        transition={{ duration, ease: 'easeOut', times }}
      />
      {/* Bright head star — the burning meteoroid */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          background:
            'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,245,200,0.95) 30%, rgba(250,209,68,0.8) 60%, transparent 100%)',
          boxShadow:
            '0 0 14px 6px rgba(250,209,68,0.55), 0 0 28px 14px rgba(255,255,255,0.1)',
        }}
        initial={{ x: startX, y: startY, opacity: 0, scale: 0 }}
        animate={{
          x: [startX, startX + dx],
          y: [startY, startY + dy],
          opacity: [0, 1, 1, 0],
          scale: [0, 2.2, 1.6, 0.8],
        }}
        transition={{ duration, ease: 'easeOut', times }}
      />
    </div>
  );
}

export function StarField({ count = 200 }: { count?: number }) {
  const stars = useMemo(() => generateSkyDome(count), [count]);
  const [shootingKey, setShootingKey] = useState(0);
  const [hasShooting, setHasShooting] = useState(false);

  /* Trigger shooting stars every so often */
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.0) { /* paused while we refine */
        setShootingKey((k) => k + 1);
        setHasShooting(true);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* Auto-clear after duration so old one unmounts */
  useEffect(() => {
    if (!hasShooting) return;
    const t = setTimeout(() => setHasShooting(false), 5200);
    return () => clearTimeout(t);
  }, [hasShooting, shootingKey]);

  /* The dome radius: large enough to extend past viewport edges */
  const DOME_RADIUS = Math.max(
    typeof window !== 'undefined' ? window.innerWidth : 1200,
    typeof window !== 'undefined' ? window.innerHeight : 800
  ) * 0.85;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
    >
      {/* Atmospheric gradient: darker at zenith, softer near horizon */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 45%, transparent 0%, rgba(10,5,21,0.3) 70%, rgba(10,5,21,0.6) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* The rotating celestial dome */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{
          width: DOME_RADIUS * 2.4,
          height: DOME_RADIUS * 2.4,
          left: `calc(50% - ${DOME_RADIUS * 1.2}px)`,
          top: `calc(50% - ${DOME_RADIUS * 1.2}px)`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 720, /* 12 minutes for a full sky rotation */
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {stars.map((star) => {
          const ray = RAY_TINTS[star.rayIndex];

          /* Convert polar dome coords to cartesian position within the circle */
          const radius = star.distance * DOME_RADIUS;
          const x = Math.cos(star.angle) * radius + DOME_RADIUS * 1.2 - star.size / 2;
          const y = Math.sin(star.angle) * radius + DOME_RADIUS * 1.2 - star.size / 2;

          /* Atmospheric perspective: stars near horizon (distance ≈ 1) are slightly faded */
          const horizonFade = 0.65 + (1 - star.distance) * 0.35;

          return (
            <div
              key={star.id}
              className="absolute pointer-events-auto"
              style={{
                left: x,
                top: y,
                opacity: horizonFade,
              }}
            >
              <GlowingStar
                size={star.size}
                tint={ray.tint}
                brightness={star.brightness}
                baseDuration={star.duration}
                twinklePhase={star.twinklePhase}
              />
            </div>
          );
        })}
      </motion.div>

      {/* Shooting star layer */}
      {hasShooting && (
        <div className="absolute inset-0 pointer-events-none" key={shootingKey}>
          <ShootingStar spread={DOME_RADIUS * 1.6} seed={shootingKey} />
        </div>
      )}
    </div>
  );
}
