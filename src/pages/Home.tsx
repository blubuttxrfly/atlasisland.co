import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Users, Heart, Clock, BookOpen, TrendingUp, ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { QUICK_LINKS } from '../lib/constants';

const iconMap: Record<string, React.ReactNode> = {
  Youtube: <Play className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export function Home() {
  const [logoError, setLogoError] = useState(false);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* ── HERO ── */}
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-4">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 70% 40% at 50% 45%, #6455df 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse 50% 30% at 50% 60%, #fad144 0%, transparent 50%)',
            }}
          />

          {/* Atlas Island Logo — Main Title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10 text-center mb-4"
          >
            <img
              src="/logo-42.png"
              alt="Atlas Island"
              className="w-[180px] sm:w-[240px] md:w-[300px] h-auto mx-auto"
              style={{ display: logoError ? 'none' : 'block' }}
              onError={() => setLogoError(true)}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 font-body text-[1rem] sm:text-[1.15rem] text-[#dfff42] text-center mb-8 max-w-[90%]"
          >
            Earth-conscious Regenerative Co-Creator Community
          </motion.p>

          {/* Scroll hint — hover glow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            onClick={() => document.getElementById('about-island')?.scrollIntoView({ behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer group"
          >
            <span className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-[#b8a8f0] group-hover:text-[#fad144] transition-colors duration-300">
              Scroll to explore
            </span>
            <ChevronDown
              className="w-5 h-5 text-[#fad144] group-hover:text-[#dfff42] transition-all duration-300"
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
        <section id="about-island" className="relative pt-16 sm:pt-20 pb-12 sm:pb-16 bg-[#120822]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[#fad144] mb-4">
                About Atlas Island
              </h2>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[#b8a8f0]/80 max-w-[650px] mx-auto leading-relaxed">
                Atlas Island is a living sanctuary for Earth-conscious souls who feel called to co-create a regenerative future. Here, we honor ALL pathways, ALL currencies, and ALL beings as expressions of unique gifts in service of the Greatest &amp; Highest Good.
              </p>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[#fad144]/80 leading-relaxed text-center italic mt-4 mb-2">
                "Our wishes and dreams deserve to have a space to be seen, felt, and living."
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <Link
                  to="/vision"
                  className="px-5 py-2.5 rounded-xl bg-[#6455df]/15 border border-[#6455df]/30 text-[#b8a8f0] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[#6455df]/25 hover:border-[#fad144]/30 transition-all duration-300"
                >
                  Vision
                </Link>
                <Link
                  to="/mission"
                  className="px-5 py-2.5 rounded-xl bg-[#fad144]/10 border border-[#fad144]/25 text-[#fad144] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[#fad144]/20 transition-all duration-300"
                >
                  Mission &amp; Purpose
                </Link>
                <Link
                  to="/connect"
                  className="px-5 py-2.5 rounded-xl bg-[#dfff42]/10 border border-[#dfff42]/25 text-[#dfff42] font-ui text-[0.7rem] uppercase tracking-[0.12em] hover:bg-[#dfff42]/20 transition-all duration-300"
                >
                  Connect &amp; Join
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CO-CREATORS OF ATLAS ISLAND ── */}
        <section className="relative py-6 sm:py-10 bg-[#120822]/50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[#fad144] mb-4">
                Co-Creators of Atlas Island
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/70 max-w-[500px] mx-auto">
                Souls who have heard the call and stepped forward to weave this sanctuary into being.
              </p>
            </motion.div>

            {/* Co-Creator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  name: 'Atlas Morphoenix',
                  subtitle: 'Founder, Vision Keeper, Ray Weaver',
                  location: 'Charlotte, North Carolina',
                  bio: 'Artist of Life and Co-Creator of Atlas Island. Rising Virgo with Aquarius Earth, Neptune, and Uranus placements. Weaving Heartlight into form through sacred technology and community.',
                  image: '/profile-aura.png',
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
              ].map((creator, i) => (
                <motion.div
                  key={creator.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/80 backdrop-blur-sm p-6 transition-all duration-400 hover:border-[#fad144]/30 hover:shadow-[0_8px_40px_rgba(100,85,223,0.12)]"
                >
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#6455df]/30 group-hover:border-[#fad144]/40 transition-colors">
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
                      <div className="w-full h-full flex items-center justify-center bg-[#120822]/60">
                        <Users className="w-8 h-8 text-[#b8a8f0]/40" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-display text-[1.1rem] text-[#fad144] text-center mb-1">
                    {creator.name}
                  </h3>
                  <p className="font-ui text-[0.65rem] text-[#b8a8f0]/60 uppercase tracking-[0.1em] text-center mb-2">
                    {creator.subtitle}
                  </p>
                  <div className="flex items-center justify-center gap-1 text-[#b8a8f0]/40 mb-3">
                    <MapPin className="w-3 h-3" />
                    <span className="font-body text-[0.75rem]">{creator.location}</span>
                  </div>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/70 text-center leading-relaxed">
                    {creator.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SACRED PATHWAYS ── */}
        <section className="relative py-12 sm:py-16 bg-[#120822]/30">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff0099]/30 bg-[#ff0099]/5 mb-5">
                <Heart className="w-3.5 h-3.5 text-[#ff0099]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#ff0099]">
                  Ways to Connect
                </span>
              </div>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[#fad144] mb-4">
                Sacred Pathways
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/70 max-w-[500px] mx-auto">
                Portals into the Heartlight of Atlas Island, each one a unique frequency of co-creation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {QUICK_LINKS.map((link, i) => (
                <motion.a
                  key={link.title}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group block relative rounded-2xl border border-[#6455df]/20 bg-[#120822]/60 backdrop-blur-sm p-6 transition-all duration-400 hover:border-[#ff0099]/30 hover:bg-[#120822]/90 hover:shadow-[0_8px_40px_rgba(100,85,223,0.12)]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#6455df]/10 border border-[#6455df]/20 flex items-center justify-center group-hover:border-[#ff0099]/30 group-hover:bg-[#ff0099]/10 transition-all">
                      <span className="text-[#b8a8f0] group-hover:text-[#ff0099] transition-colors">
                        {iconMap[link.icon] || <Heart className="w-5 h-5" />}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-ui text-[0.85rem] font-semibold text-[#fad144] group-hover:text-[#ff0099] transition-colors">
                        {link.title}
                      </h3>
                      <p className="font-body text-[0.75rem] text-[#b8a8f0]/50">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12 RAYS FEATURED CALLING ── */}
        <section className="relative py-14 sm:py-20 bg-[#120822]/50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff0099]/30 bg-[#ff0099]/5 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#ff0099]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#ff0099]">
                  The Spectrum
                </span>
              </div>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[#fad144] mb-4">
                12 Rays Featured Calling
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/70 max-w-[500px] mx-auto mb-8">
                A sacred framework for understanding your unique frequency and how it serves the collective.
              </p>
              <Link
                to="/12-rays"
                className="inline-block px-8 py-3 rounded-full bg-[#ff0099]/15 border border-[#ff0099]/40 text-[#ff0099] font-ui text-[0.75rem] uppercase tracking-[0.14em] hover:bg-[#ff0099]/25 hover:shadow-[0_0_30px_rgba(255,0,153,0.15)] transition-all duration-300"
              >
                Discover Your Ray
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── COMMUNITY CTA ── */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-[1.6rem] sm:text-[2rem] text-[#fad144] mb-4">
                The Island is Calling
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/70 mb-6 max-w-[500px] mx-auto">
                Whether you feel drawn to build, to heal, to teach, to tend, or simply to belong, there is a place for you here.
              </p>
              <Link
                to="/connect"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-[#dfff42] text-[#dfff42] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#dfff42]/10 hover:shadow-[0_0_30px_rgba(223,255,66,0.2)] transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Step Into the Circle
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
