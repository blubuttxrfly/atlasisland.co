import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Play, FileText, ExternalLink, Radio, Mail, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SOCIAL_LINKS } from '../lib/constants';

const BROADCAST_CHANNELS = [
  {
    id: 'youtube',
    name: 'YouTube',
    tagline: 'The Broadcast Tower',
    description: 'Long-form transmissions, Ray teachings, and visual journeys into the heart of Atlas Island.',
    color: '#c94040',
    bgColor: '#c9404015',
    borderColor: '#c9404030',
    icon: Play,
    embedUrl: 'https://www.youtube.com/embed?listType=user_uploads&list=AtlasIslandCo',
    cta: 'Watch Transmissions',
  },
  {
    id: 'substack',
    name: 'Substack',
    tagline: 'The Written Garden',
    description: 'Weekly dispatches from the Island — essays on sacred economics, co-creation, and the 12 Rays of ALL.',
    color: '#FF6719',
    bgColor: '#FF671915',
    borderColor: '#FF671930',
    icon: Mail,
    embedUrl: null,
    cta: 'Read the Newsletter',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    tagline: 'The Resonance Field',
    description: 'Visual storytelling, daily Ray reflections, and snapshots of the Heartlight Collective in motion.',
    color: '#E1306C',
    bgColor: '#E1306C15',
    borderColor: '#E1306C30',
    icon: Radio,
    embedUrl: null,
    cta: 'Follow the Field',
  },
  {
    id: 'threads',
    name: 'Threads',
    tagline: 'The Living Thread',
    description: 'Conversations, reflections, and real-time weaving of the Atlas Island narrative.',
    color: '#000000',
    bgColor: '#00000015',
    borderColor: '#00000030',
    icon: MessageCircle,
    embedUrl: null,
    cta: 'Join the Thread',
  },
];

const ARTICLES = [
  {
    title: 'The Carbon Ray',
    desc: 'Primordial Ray of Center, the bridge between seen and unseen.',
    ray: '#2a0050',
    channel: 'Substack',
  },
  {
    title: 'Rays of the Week',
    desc: 'The Earth-Cycle Spiral, lunar and solar rhythms.',
    ray: '#5a4a9e',
    channel: 'YouTube',
  },
  {
    title: 'Heartlight Exchange',
    desc: 'Gift economy as sacred practice.',
    ray: '#3a9b6f',
    channel: 'Substack',
  },
];

export function Broadcast() {
  useScrollReveal();

  const getChannelUrl = (id: string) => {
    const link = SOCIAL_LINKS.find((l) => l.id === id);
    return link?.url || '#';
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #c94040 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#c94040] mb-5">
                Transmissions from the Island
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Broadcast
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto mb-10">
                Videos, writings, and transmissions from Atlas Island.
                Each one a doorway into deeper remembrance.
              </p>

              {/* Channel quick links */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {BROADCAST_CHANNELS.map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <a
                      key={ch.id}
                      href={getChannelUrl(ch.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border font-ui text-[0.7rem] uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.04]"
                      style={{
                        borderColor: ch.borderColor,
                        backgroundColor: ch.bgColor,
                        color: ch.color,
                      }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {ch.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured YouTube Video */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#c94040]/15 border border-[#c94040]/25 flex items-center justify-center">
                  <Play className="w-5 h-5 text-[#c94040]" />
                </div>
                <div>
                  <h2 className="font-display text-[1.6rem] text-[#fad144]">
                    Latest Transmission
                  </h2>
                  <p className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[#b8a8f0]/40">
                    From the YouTube Broadcast Tower
                  </p>
                </div>
              </div>

              <div className="max-w-[900px] mx-auto aspect-video rounded-2xl border border-[#6455df]/20 bg-[#120822]/60 overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/afD6L1HnWWk"
                  title="Atlas Island Broadcast"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Channel Grid */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-3">
                Resonance Channels
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60 max-w-[600px] mx-auto">
                Each channel carries a unique frequency. Follow the ones that call to your Heartlight.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {BROADCAST_CHANNELS.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <motion.a
                    key={ch.id}
                    href={getChannelUrl(ch.id)}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      borderColor: ch.borderColor,
                      backgroundColor: ch.bgColor,
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: ch.color + '20',
                          border: `1px solid ${ch.color}30`,
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: ch.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display text-[1.2rem] text-[#fad144] group-hover:text-[#ffe478] transition-colors">
                            {ch.name}
                          </h3>
                          <ExternalLink className="w-3.5 h-3.5 text-[#b8a8f0]/30 group-hover:text-[#fad144]/60 transition-colors" />
                        </div>
                        <p className="font-ui text-[0.65rem] uppercase tracking-[0.12em] mb-2" style={{ color: ch.color }}>
                          {ch.tagline}
                        </p>
                        <p className="font-body text-[0.9rem] text-[#b8a8f0]/60 leading-relaxed">
                          {ch.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#6455df]/10">
                      <span
                        className="inline-flex items-center gap-1.5 font-ui text-[0.7rem] uppercase tracking-[0.1em]"
                        style={{ color: ch.color }}
                      >
                        {ch.cta}
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Substack Embed */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF6719]/30 bg-[#FF6719]/10 mb-5">
                <Mail className="w-3.5 h-3.5 text-[#FF6719]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#FF6719]">
                  The Written Garden
                </span>
              </div>
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-3">
                Subscribe to the Newsletter
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60 max-w-[500px] mx-auto">
                Receive weekly transmissions from Atlas Island directly in your inbox.
                No noise, only resonance.
              </p>
            </div>

            <div className="rounded-2xl border border-[#FF6719]/20 bg-[#120822]/40 p-6 sm:p-8">
              <iframe
                src="https://zatlasmorphoenix.substack.com/embed"
                width="100%"
                height="320"
                className="rounded-xl border-0"
                title="Atlas Island Substack"
              />
            </div>
          </div>
        </section>

        {/* Article Garden */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#3a9b6f]/15 border border-[#3a9b6f]/25 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-[#3a9b6f]" />
                </div>
                <div>
                  <h2 className="font-display text-[1.6rem] text-[#fad144]">
                    Written Garden
                  </h2>
                  <p className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[#b8a8f0]/40">
                    Archived transmissions from across the channels
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {ARTICLES.map((article, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-xl border border-[#6455df]/15 bg-[#120822]/40 hover:border-[#ff0099]/25 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: article.ray + '20', color: article.ray }}
                      >
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[#b8a8f0]/40">
                        {article.channel}
                      </span>
                    </div>
                    <h3 className="font-display text-[1.15rem] text-[#fad144] mb-2 group-hover:text-[#ffe478] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-[0.9rem] text-[#b8a8f0]/50">
                      {article.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
