import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../lib/constants';

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-[#6455df]/15 bg-[#0a0515]">
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#fad144]/40 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Sigil */}
          <div className="relative w-12 h-12">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full animate-rotate-sigil"
              style={{ filter: 'drop-shadow(0 0 8px rgba(250,209,68,0.3))' }}
            >
              <polygon
                points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                fill="none"
                stroke="#fad144"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <polygon
                points="50,20 80,35 80,65 50,80 20,65 20,35"
                fill="none"
                stroke="#6455df"
                strokeWidth="1"
                opacity="0.4"
              />
              <circle cx="50" cy="50" r="8" fill="none" stroke="#ff0099" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>

          {/* Sacred phrase */}
          <p className="font-body italic text-[0.85rem] sm:text-[0.9rem] text-[#fad144]/80 tracking-wide leading-relaxed">
            🌈🎶 "Atlas Island - Home for the Heartlight of You & Me, Atlas Island - Where Every Being is Free" 💫🎶
          </p>

          {/* Icon row — social + app links together */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#6455df]/15 border border-[#6455df]/25 flex items-center justify-center hover:bg-[#fad144]/10 hover:border-[#fad144]/30 transition-all duration-300"
                aria-label={link.name}
              >
                <img
                  src={link.iconImage}
                  alt={link.alt}
                  className="w-5 h-5 object-contain"
                />
              </a>
            ))}
            <a
              href="https://heartlight.atlasisland.co"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#6455df]/15 border border-[#6455df]/25 flex items-center justify-center hover:bg-[#fad144]/10 hover:border-[#fad144]/30 transition-all duration-300"
              aria-label="Heartlight Collective"
            >
              <img
                src="/heartlight-icon.png"
                alt="Heartlight Collective"
                className="w-6 h-6 object-contain rounded"
              />
            </a>
            <a
              href="https://aut.atlasisland.co"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#6455df]/15 border border-[#6455df]/25 flex items-center justify-center hover:bg-[#fad144]/10 hover:border-[#fad144]/30 transition-all duration-300"
              aria-label="AUT Time & Tools"
            >
              <img
                src="/aut-icon.png"
                alt="AUT Time & Tools"
                className="w-6 h-6 object-contain rounded"
              />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 font-ui text-[0.65rem] text-[#b8a8f0]/40">
            <span>© 2025 Atlas Island</span>
            <Heart className="w-3 h-3 text-[#ff0099]/50" />
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
