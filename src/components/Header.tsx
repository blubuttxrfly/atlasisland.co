import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { resolvedTheme, toggle } = useTheme();
  const isLight = resolvedTheme === 'light';

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
          ? 'bg-[var(--bg-header)] backdrop-blur-md border-b border-[var(--border-default)] shadow-lg shadow-[var(--color-ray-950)]/20'
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
              <div className="absolute inset-0 rounded-full bg-[var(--color-ray-400)]/20" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-display text-[1.2rem] sm:text-[1.35rem] text-[var(--color-solar-gold)] leading-tight tracking-wide"
                style={{ textShadow: 'var(--text-shadow-hero)' }}
              >
                Atlas Island
              </span>
            </div>
          </Link>

          {/* Desktop Nav + Theme Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <nav className="flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-lg font-ui text-[0.68rem] uppercase tracking-[0.1em] transition-all duration-300 whitespace-nowrap ${
                    location.pathname === item.path
                      ? 'text-[var(--color-ray-950)] bg-[var(--color-solar-gold)] shadow-[0_0_15px_rgba(250,209,68,0.3)]'
                      : 'text-[var(--text-primary)] hover:text-[var(--color-solar-gold)] hover:bg-[var(--color-solar-gold)]/8'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={toggle}
              aria-label={isLight ? 'Switch to Moon mode' : 'Switch to Sun mode'}
              title={isLight ? 'Switch to Moon mode' : 'Switch to Sun mode'}
              className="ml-2 w-10 h-10 rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-glow)] flex items-center justify-center transition-all duration-300 hover:border-[var(--color-solar-gold)]/40 hover:shadow-[0_0_15px_var(--shadow-glow)]"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isLight ? (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon className="w-[18px] h-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, rotate: 30, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -30, scale: 0.7 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun className="w-[18px] h-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile: Theme toggle + Dropdown */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={isLight ? 'Switch to Moon mode' : 'Switch to Sun mode'}
              title={isLight ? 'Switch to Moon mode' : 'Switch to Sun mode'}
              className="w-10 h-10 rounded-full border border-[var(--border-default)] bg-[var(--bg-card)] text-[var(--text-glow)] flex items-center justify-center transition-all duration-300 hover:border-[var(--color-solar-gold)]/40"
            >
              {isLight ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
            </button>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7B52DA] dark:bg-[rgba(123,82,218,0.2)] border border-[var(--border-default)] text-[var(--color-solar-gold)] font-ui text-[0.75rem] uppercase tracking-[0.1em]"
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
                    className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-[var(--border-default)] bg-[var(--bg-card)] backdrop-blur-md overflow-hidden shadow-2xl shadow-[var(--shadow-glow)]"
                  >
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-5 py-3 font-ui text-[0.78rem] uppercase tracking-[0.1em] transition-all duration-200 border-b border-[var(--border-default)] last:border-0 ${
                          location.pathname === item.path
                            ? 'text-[var(--color-ray-950)] bg-[var(--color-solar-gold)]'
                            : 'text-[var(--text-primary)] hover:text-[var(--color-solar-gold)] hover:bg-[var(--color-solar-gold)]/5'
                        }`}
                      >
                        <div>{item.label}</div>
                        <div className="text-[0.65rem] normal-case tracking-normal text-[var(--text-secondary)] mt-0.5">
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
      </div>
    </header>
  );
}
