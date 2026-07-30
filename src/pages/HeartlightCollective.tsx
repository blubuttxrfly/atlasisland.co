import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, Users, Waves, Sparkles, Gift, HandHeart, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function HeartlightCollective() {
  useScrollReveal();

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-heartlight-magenta">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#ff0099] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Living Economy of Atlas Island
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Heartlight Collective
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.25rem] text-[#b8a8f0]/85 italic leading-relaxed max-w-[700px] mx-auto mb-8">
                Where resources, relationships, and remembrance flow as One
              </p>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/75 leading-relaxed max-w-[650px] mx-auto mb-10">
                The living economy of Atlas Island — assuring life essentials so ALL beings 
                may co-create from thrival, not survival.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#dfff42] text-[#0a0515] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(223,255,66,0.3)] hover:shadow-[0_0_35px_rgba(223,255,66,0.5)] hover:scale-[1.02] transition-all duration-500 ease-out"
                >
                  <Heart className="w-4 h-4" />
                  Enter the Exchange
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://atlasisland.co/connect"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-500 ease-out"
                >
                  <Users className="w-4 h-4" />
                  Join as Co-Creator
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Co-Operate */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-12">
              <Waves className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                How We Co-Operate
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Three sacred currents of the same living river
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Exchange */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(255,0,153,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#ff0099]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-5 h-5 text-[#ff0099]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Exchange</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Gift economy marketplace with five sacred pathways: fixed price, sliding scale, 
                  trade, gift, and scholarship. Beings offer their gifts and receive what calls to them.
                </p>
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.85rem] text-[#ff0099] font-ui uppercase tracking-[0.1em] hover:text-[#fad144] transition-colors"
                >
                  Browse Offerings
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Collective */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(100,85,223,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <HandHeart className="w-5 h-5 text-[#6455df]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Collective</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Mutual aid pool assuring life essentials for ALL. Stewarded through Relay with transparent ledgers,
                  community governance, wish fulfillment, and regenerative trust. Our open ledger is being built so ALL
                  beings may witness how abundance flows.
                </p>
                <a
                  href="https://relayfi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.85rem] text-[#6455df] font-ui uppercase tracking-[0.1em] hover:text-[#fad144] transition-colors"
                >
                  Stewarded via Relay
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Flow */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(223,255,66,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#dfff42]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#dfff42]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Flow</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Individual dashboard visualizing personal resource flows, ray-hued transactions, 
                  and interconnection with the Collective pool through live Actual Budget integration.
                </p>
                <span className="inline-flex items-center gap-2 text-[0.85rem] text-[#b8a8f0]/50 font-ui uppercase tracking-[0.1em]">
                  Coming Soon
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Pool Stats */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Heart className="w-7 h-7 text-[#fad144] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Living Pool
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Abundance circulating in real-time
              </p>
            </div>

            <div className="reveal p-8 rounded-2xl border border-[#fad144]/15 bg-[#120822]/50 backdrop-blur-sm">
              <div className="text-center mb-8">
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/60 uppercase tracking-[0.15em] mb-2">
                  Total Pool Balance
                </p>
                <p className="font-display text-[3.5rem] text-[#fad144]">
                  $12,847.56
                </p>
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-[#3a9b6f]/20 border border-[#3a9b6f]/30">
                  <span className="w-2 h-2 rounded-full bg-[#3a9b6f] animate-pulse" />
                  <span className="font-ui text-[0.7rem] text-[#3a9b6f] uppercase tracking-[0.1em]">
                    Open ledger coming soon
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#6455df]/10">
                <div className="text-center">
                  <p className="font-display text-[2rem] text-[#ff0099] mb-1">47</p>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Active Offerings</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[2rem] text-[#6455df] mb-1">12</p>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Wishes This Moon</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[2rem] text-[#dfff42] mb-1">156</p>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Co-Creators</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Sparkles className="w-7 h-7 text-[#dfff42] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Recent Flow
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                The Heartlight in motion
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: '🌟',
                  text: 'Solar panel installation funded for the Alentejo sanctuary',
                  time: '2 hours ago',
                  color: '#dfff42'
                },
                {
                  icon: '💫',
                  text: '3 new healers joined the Exchange this week',
                  time: '1 day ago',
                  color: '#ff0099'
                },
                {
                  icon: '🎶',
                  text: 'Monthly pool goal reached: $500 for community meals',
                  time: '3 days ago',
                  color: '#6455df'
                },
                {
                  icon: '🌱',
                  text: 'Rainwater filtration system wish fulfilled for TDF',
                  time: '5 days ago',
                  color: '#3a9b6f'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="reveal flex items-start gap-4 p-5 rounded-xl border border-[#6455df]/10 bg-[#0a0515]/40"
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <p className="font-body text-[1rem] text-[#b8a8f0]/75">{item.text}</p>
                    <p className="font-ui text-[0.75rem] text-[#b8a8f0]/40 uppercase tracking-[0.1em] mt-1">
                      {item.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the Flow CTA */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Heart className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Find Your Pathway In
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Three ways to flow with the Heartlight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Co-Creator */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#dfff42]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <Users className="w-8 h-8 text-[#dfff42] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Co-Creator
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Live and co-create on Atlas Island. Contribute your gifts while receiving 
                  life essentials through the Collective.
                </p>
                <a
                  href="https://atlasisland.co/connect"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#dfff42]/20 border border-[#dfff42]/30 text-[#dfff42] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#dfff42]/30 transition-all duration-300"
                >
                  Apply Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Sovereign Supporter */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#ff0099]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <HandHeart className="w-8 h-8 text-[#ff0099] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Sovereign Supporter
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Support from afar with donations and advocacy. Remain cloaked while 
                  contributing to the Collective pool.
                </p>
                <a
                  href="https://relayfi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-300"
                >
                  Support via Relay
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Exchange Participant */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <Gift className="w-8 h-8 text-[#6455df] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Exchange Participant
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Offer your gifts, receive what calls to you. Participate in the gift 
                  economy without full Co-Creator commitment.
                </p>
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6455df]/20 border border-[#6455df]/30 text-[#6455df] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#6455df]/30 transition-all duration-300"
                >
                  Browse
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-12 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65 mb-6">
                The Heartlight is calling. Your pathway awaits.
              </p>
              <a
                href="https://heartlight.atlasisland.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-500 ease-out"
              >
                <Heart className="w-4 h-4" />
                Enter the Heartlight Collective
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
