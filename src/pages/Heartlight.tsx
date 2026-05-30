import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

export function Heartlight() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #3a9b6f 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#dfff42] mb-5">
                Gift Exchange Economy
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Heartlight Exchange
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto">
                Where resources, skills, and gifts flow with clarity and grace.
                A sacred space for co-creation beyond the scarcity paradigm.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-4">
                Exchange Pathways
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60">
                Five forms of sacred reciprocity. Choose what resonates.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '💱', title: 'Currency Fixed Price', desc: 'A clear, agreed-upon offering in exchange for currency.' },
                { icon: '🎚️', title: 'Sliding Scale', desc: 'A range of exchange honoring different access to currency.' },
                { icon: '🤝', title: 'Value Exchange / Trade', desc: 'One offering in return for another. Energy flows both ways.' },
                { icon: '🎁', title: 'Gift Exchange', desc: 'Offered freely from overflow, as an act of love and service.' },
                { icon: '🌱', title: 'Scholarship Exchange', desc: 'Community-supported offerings for those without access.' },
              ].map((pathway, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-[#3a9b6f]/15 bg-[#120822]/40"
                >
                  <span className="text-2xl flex-shrink-0">{pathway.icon}</span>
                  <div>
                    <h3 className="font-display text-[1.05rem] text-[#fad144] mb-1">{pathway.title}</h3>
                    <p className="font-body text-[0.9rem] text-[#b8a8f0]/55">{pathway.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Heart className="w-8 h-8 text-[#ff0099] mx-auto mb-4" />
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-3">
                Contribute to the Exchange
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60">
                Sacred donation tiers aligned with the Rays of ALL.
                All contributions flow into the Heartlight Pool.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { amount: '$11', name: 'Ray of Union', color: '#3a9b6f', desc: 'Green Ray — Heart-centered giving' },
                { amount: '$22', name: 'Master Co-Creator', color: '#d4b830', desc: 'Orichalcum Ray — Building together' },
                { amount: '$33', name: 'Life Prism', color: '#c94040', desc: 'Crystalline-Carbon — Full spectrum' },
                { amount: '$42', name: '42SOA', color: '#ff0099', desc: 'The Answer — Ultimate resonance' },
              ].map((tier) => (
                <motion.button
                  key={tier.amount}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative p-5 rounded-xl border-2 text-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                  style={{
                    borderColor: tier.color + '40',
                    backgroundColor: tier.color + '08',
                  }}
                >
                  <div
                    className="font-display text-[1.6rem] mb-1"
                    style={{ color: tier.color }}
                  >
                    {tier.amount}
                  </div>
                  <div className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[#fad144] mb-2">
                    {tier.name}
                  </div>
                  <div className="font-body text-[0.75rem] text-[#b8a8f0]/50">
                    {tier.desc}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1 text-[0.7rem] text-[#b8a8f0]/40 group-hover:text-[#fad144] transition-colors">
                    <span className="font-ui uppercase tracking-wider">Give</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="font-body text-[0.85rem] text-[#b8a8f0]/40 italic">
                Stripe integration coming soon. For now, reach out through Connect & Join.
              </p>
            </div>
          </div>
        </section>

        {/* Link to Exchange */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display text-[1.4rem] text-[#fad144] mb-4">
                Enter the Heartlight Exchange
              </h3>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60 mb-6">
                Explore the full community directory, cast wishes, and connect with Co-Creators.
              </p>
              <a
                href="https://heartlight-exchange.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full border-2 border-[#dfff42] text-[#dfff42] font-ui text-[0.78rem] uppercase tracking-[0.14em] hover:bg-[#dfff42]/10 hover:shadow-[0_0_30px_rgba(223,255,66,0.2)] transition-all duration-300"
              >
                Open Heartlight Exchange
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
