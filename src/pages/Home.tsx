import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Users, Heart, Clock, BookOpen, TrendingUp, ChevronDown, MapPin } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { QUICK_LINKS } from '../lib/constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Youtube: <Play className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

function renderLinkIcon(link: typeof QUICK_LINKS[0]) {
  if (link.iconImage) {
    return (
      <img
        src={link.iconImage}
        alt=""
        className="w-6 h-6 object-contain rounded"
        style={{ imageRendering: 'auto' }}
      />
    );
  }
  return iconMap[link.icon] || <Heart className="w-5 h-5" />;
}

export function Home() {
  useScrollReveal();
  const [logoError, setLogoError] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* ── HERO ── */}
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute inset-0 bg-transparent" />

          {/* Light-mode corner shadows — soft lavender, not dark */}
          <div
            className="absolute top-0 left-0 w-[65%] h-[35%] light-only"
            style={{
              background: 'radial-gradient(ellipse 100% 90% at 25% 5%, rgba(152, 120, 226, 0.25), transparent 55%)',
            }}
          />
          <div
            className="absolute top-0 right-0 w-[65%] h-[35%] light-only"
            style={{
              background: 'radial-gradient(ellipse 100% 90% at 85% 5%, rgba(152, 120, 226, 0.28), transparent 55%)',
            }}
          />

          {/* Center glow */}
          <div
            className="absolute inset-0 opacity-40 dark:opacity-30"
            style={{
              background: 'radial-gradient(ellipse 70% 40% at 50% 45%, var(--color-ray-400) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-25 dark:opacity-15"
            style={{
              background: 'radial-gradient(ellipse 50% 30% at 50% 60%, var(--color-solar-gold) 0%, transparent 50%)',
            }}
          />

          {/* Atlas Island Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 text-center mb-4"
          >
            <div
              className="absolute inset-0 -m-8 light-only"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,255,255,0.75), transparent 55%)',
                filter: 'blur(10px)',
              }}
            />
            <img
              src="/logo-42.png"
              alt="Atlas Island"
              className="relative w-[180px] sm:w-[240px] md:w-[300px] h-auto mx-auto"
              style={{ display: logoError ? 'none' : 'block' }}
              onError={() => setLogoError(true)}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 font-body text-[1rem] sm:text-[1.15rem] text-[var(--color-heartlight-green)] text-center mb-8 max-w-[90%]"
            style={{
              textShadow: 'var(--text-shadow-hero)',
            }}
          >
            Earth-conscious Regenerative Co-Creator Community
          </motion.p>

          {/* Scroll hint */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            onClick={() => document.getElementById('about-island')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group z-10"
          >
            <span
              className="absolute inset-0 -m-6 light-only"
              style={{
                background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.6), transparent 55%)',
                filter: 'blur(6px)',
              }}
            />
            <span className="relative font-ui text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-secondary)] group-hover:text-[var(--color-solar-gold)] transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown
              className="relative w-5 h-5 text-[var(--color-solar-gold)] group-hover:text-[var(--color-heartlight-green)] transition-all duration-300"
              style={{ filter: 'drop-shadow(0 0 4px rgba(250,209,68,0.4))' }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 12px rgba(250,209,68,0.9))';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.filter = 'drop-shadow(0 0 4px rgba(250,209,68,0.4))';
              }}
            />
          </motion.button>
        </section>

        {/* ── ABOUT ATLAS ISLAND ── */}
        <section id="about-island" className="relative pt-24 sm:pt-32 pb-20 sm:pb-24 bg-[var(--bg-surface)]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center max-w-[720px] mx-auto glass-card p-8 sm:p-12">
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--text-glow)] mb-6">
                About Atlas Island
              </h2>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[var(--text-secondary)]/80 max-w-[650px] mx-auto leading-relaxed mb-8">
                Atlas Island is a sovereign interdependent universal hub born from a remembrance that we are One with our Earth, one another, and our Universe of ALL that breathes with & through us. We sovereignly choose to be the change we wish to be on our Earth, collectively. This is a sanctuary for beings who feel the call to co-create an Earth-conscious regenerative world that honors ALL living beings as sacred and upheld by the <Link to="/codes" className="text-[var(--color-solar-gold)] hover:underline">12 Codes of ALL</Link>.
              </p>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[var(--text-secondary)]/80 max-w-[650px] mx-auto leading-relaxed mb-8">
                Atlas Island is a place beings throughout time have envisioned. A network of communities where beings have their essentials assured, leading them to live life through a place of joy, flow, abundance and fulfillment. At Atlas Island, we are here to uphold the sanctity and thrival of living our absolute best dream lives with & for our Heartlight's Greatest & Highest Good.
              </p>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[var(--text-secondary)]/80 max-w-[650px] mx-auto leading-relaxed mb-8">
                Atlastizens are the change we wish to be in our world. If you feel the call to co-creating New Earth, feel free to join our Discord and Heartlight Collective to become a co-creator today. ALL beings who co-create from a place of authentic joy and conscious awareness are welcome & home with Atlas Island.
              </p>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[var(--text-glow)]/80 leading-relaxed text-center italic mb-10">
                "Our wishes and dreams deserve to have a space to be seen, felt, and living."
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/vision"
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-ray-400)]/15 border border-[var(--border-default)] text-[var(--text-muted)] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[var(--color-ray-400)]/25 hover:border-[var(--color-solar-gold)]/30 transition-all duration-300"
                >
                  Vision
                </Link>
                <Link
                  to="/mission"
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-solar-gold)]/10 border border-[var(--color-solar-gold)]/25 text-[var(--color-solar-gold)] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/20 transition-all duration-300"
                >
                  Mission &amp; Purpose
                </Link>
                <Link
                  to="/connect"
                  className="px-5 py-2.5 rounded-xl bg-[var(--color-heartlight-green)]/10 border border-[var(--color-heartlight-green)]/25 text-[var(--color-heartlight-green)] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[var(--color-heartlight-green)]/20 transition-all duration-300"
                >
                  Connect &amp; Join
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CO-CREATORS OF ATLAS ISLAND ── */}
        <section className="relative py-6 sm:py-10 bg-[var(--bg-surface)]/50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center mb-8 glass-card max-w-[720px] mx-auto p-6 sm:p-10">
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--text-glow)] mb-4">
                Co-Creators of Atlas Island
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-muted)]/70 max-w-[500px] mx-auto">
                Souls who have heard the call and stepped forward to weave this sanctuary into being.
              </p>
            </div>

            {/* Co-Creator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  name: 'Z Atlas Morphoenix',
                  subtitle: 'Co-Creator of Atlas Island · they/she · Energy Healer & Reader · Artist of Life',
                  location: 'Charlotte, North Carolina USA',
                  bio: 'Multidimensional being, Energy healer, and who shares their visions & wishes of Atlas Island. Where ALL beings are sovereign, thriving, and living their absolute best dream lives.',
                  image: '/z-portrait.jpg',
                  color: '#fad144',
                },
                {
                  name: 'You?',
                  subtitle: 'Your gifts, your frequency, your calling',
                  location: 'Wherever you are',
                  bio: 'Atlas Island is calling co-creators who feel resonance with this vision. Every role is welcome, every gift is needed, every soul has a place in this sanctuary.',
                  image: '',
                  color: '#dfff42',
                },
              ].map((creator) => (
                <div
 key={creator.name} className="reveal group relative rounded-2xl border border-[var(--border-default)] bg-[var(--bg-page)]/80 backdrop-blur-sm p-6 transition-all duration-400 hover:border-[var(--color-solar-gold)]/30 hover:shadow-[0_8px_40px_var(--shadow-glow)]"
 >
   <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--border-default)] group-hover:border-[var(--color-solar-gold)]/40 transition-colors">
     {creator.image ? (
       <img
         src={creator.image}
         alt={creator.name}
         className="w-full h-full object-cover"
         onError={(e) => {
           (e.target as HTMLImageElement).style.display = 'none';
         }}
       />
     ) : (
       <div className="w-full h-full flex items-center justify-center bg-[var(--bg-surface)]/60">
         <Users className="w-8 h-8 text-[var(--text-muted)]/40" />
       </div>
     )}
   </div>
   <h3 className="font-display text-[1.1rem] text-[var(--text-glow)] text-center mb-1">
     {creator.name}
   </h3>
   <p className="font-ui text-[0.65rem] text-[var(--text-muted)]/60 uppercase tracking-[0.1em] text-center mb-2">
     {creator.subtitle}
   </p>
   <div className="flex items-center justify-center gap-1 text-[var(--text-muted)]/40 mb-3">
     <MapPin className="w-3 h-3" />
     <span className="font-body text-[0.75rem]">{creator.location}</span>
   </div>
   <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/70 text-center leading-relaxed">
                    {creator.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SACRED PATHWAYS ── */}
        <section className="relative py-12 sm:py-16 bg-[var(--bg-surface)]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="reveal text-center mb-8 glass-card max-w-[720px] mx-auto p-6 sm:p-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-magenta-ray)]/30 bg-[var(--color-magenta-ray)]/5 mb-5">
                <Heart className="w-3.5 h-3.5 text-[var(--color-magenta-ray)]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-magenta-ray)]">
                  Ways to Connect
                </span>
              </div>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--text-glow)] mb-4">
                Sacred Pathways
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-muted)]/70 max-w-[500px] mx-auto">
                Portals into the Heartlight of Atlas Island, each one a unique frequency of co-creation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {QUICK_LINKS.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="reveal group block relative rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)]/60 backdrop-blur-sm p-6 transition-all duration-400 hover:border-[var(--color-magenta-ray)]/30 hover:bg-[var(--bg-surface)]/90 hover:shadow-[0_8px_40px_var(--shadow-glow)]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-ray-400)]/10 border border-[var(--border-default)] flex items-center justify-center group-hover:border-[var(--color-magenta-ray)]/30 group-hover:bg-[var(--color-magenta-ray)]/10 transition-all">
                    <span className="text-[var(--text-muted)] group-hover:text-[var(--color-magenta-ray)] transition-colors">
                      {renderLinkIcon(link)}
                    </span>
                    </div>
                    <div>
                      <h3 className="font-ui text-[0.85rem] font-semibold text-[var(--text-glow)] group-hover:text-[var(--color-magenta-ray)] transition-colors">
                        {link.title}
                      </h3>
                      <p className="font-body text-[0.75rem] text-[var(--text-muted)]/50">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMUNITY CTA ── */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="reveal glass-card p-8 sm:p-12">
              <h2 className="font-display text-[1.6rem] sm:text-[2rem] text-[var(--text-glow)] mb-4">
                The Island is Calling
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-muted)]/70 mb-6 max-w-[500px] mx-auto">
                Whether you feel drawn to build, to heal, to teach, to tend, or simply to belong, there is a place for you here.
              </p>
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[var(--color-heartlight-green)] text-[var(--color-heartlight-green)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-heartlight-green)]/10 hover:shadow-[0_0_30px_rgba(223,255,66,0.2)] transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Step Into the Circle
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
