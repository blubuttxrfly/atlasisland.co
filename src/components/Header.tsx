import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const currentItem = NAV_ITEMS.find(n => n.path === location.pathname) || NAV_ITEMS[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0515]/95 backdrop-blur-md border-b border-[#6455df]/20 shadow-lg shadow-[#0a0515]/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-[42px] h-[42px] flex items-center justify-center">
              <img
                src="/logo-42.png"
                alt="Atlas Island"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 rounded-full bg-[#6455df]/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[1.2rem] sm:text-[1.35rem] text-[#fad144] leading-tight tracking-wide">
                Atlas Island
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 rounded-lg font-ui text-[0.68rem] uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-[#0a0515] bg-[#fad144] shadow-[0_0_15px_rgba(250,209,68,0.3)]'
                    : 'text-[#b8a8f0] hover:text-[#fad144] hover:bg-[#fad144]/8'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: Dropdown */}
          <div className="lg:hidden relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#6455df]/20 border border-[#6455df]/30 text-[#fad144] font-ui text-[0.75rem] uppercase tracking-[0.1em]"
            >
              <span>{currentItem.label}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-[#6455df]/25 bg-[#120822]/98 backdrop-blur-md overflow-hidden shadow-2xl shadow-[#6455df]/10"
                >
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block px-5 py-3 font-ui text-[0.78rem] uppercase tracking-[0.1em] transition-all duration-200 border-b border-[#6455df]/10 last:border-0 ${
                        location.pathname === item.path
                          ? 'text-[#0a0515] bg-[#fad144]'
                          : 'text-[#b8a8f0] hover:text-[#fad144] hover:bg-[#fad144]/5'
                      }`}
                    >
                      <div>{item.label}</div>
                      <div className="text-[0.65rem] normal-case tracking-normal text-[#b8a8f0]/60 mt-0.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
