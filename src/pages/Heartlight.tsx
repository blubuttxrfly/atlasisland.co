import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';

export function Heartlight() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="relative pt-16 sm:pt-24 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-25"
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
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#dfff42] mb-3">
                Gift Exchange Economy
              </span>
              <h1 className="font-display text-[2.2rem] sm:text-[3.2rem] text-[#fad144] leading-tight mb-5">
                Heartlight Exchange
              </h1>
              <p className="font-body text-[1.05rem] sm:text-[1.2rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[650px] mx-auto mb-8">
                The unified resource collective of Atlas Island. Assuring life essentials so ALL beings may co-create from thrival.
              </p>

              <a
                href="https://heartlight-exchange.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#dfff42] text-[#0a0515] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(223,255,66,0.3)] hover:shadow-[0_0_35px_rgba(223,255,66,0.5)] hover:scale-[1.04] transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Enter the Heartlight Exchange
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* How the Heartlight Exchange Is Built */}
        <section className="relative py-12 sm:py-16 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <Heart className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.4rem] text-[#fad144] mb-2">
                How the Heartlight Exchange Is Built
              </h2>
              <p className="font-body text-[0.95rem] text-[#b8a8f0]/60">
                The Heartlight Collective serves as the unified resource collective of Atlas Island.
              </p>
            </motion.div>

            <div className="space-y-8">
              <div className="border-l-2 border-[#dfff42]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[#fad144] mb-2">
                  The Heartlight Collective
                </h3>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-2">
                  The Heartlight Collective is the unified resource collective of Atlas Island. Beings co-operate from a place of having their life essentials assured and fulfilled through this collective. Resources, skills, and gifts flow with clarity and grace, creating a sacred space for co-creation beyond the scarcity paradigm.
                </p>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed">
                  Our Heartlight is our universal heart & soul that comes from the remembrance of our sacred creation of ALL that IS. The Exchange is how this Heartlight moves through form, how abundance becomes shared, how thrival becomes collective.
                </p>
              </div>

              <div className="border-l-2 border-[#6455df]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[#fad144] mb-2">
                  Atlastizens, Co-Creators
                </h3>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed">
                  Atlastizens are the beings who have stepped onto Atlas Island as Co-Creators. They contribute and co-create with the Heartlight Collective through various roles that align with their gifts and calling, artists, healers, builders, gardeners and farmers tending the agroforestry fields, caregivers, engineers, architects, visioneers, dreamers, and any being who feels the call to co-create with our Heartlight.
                </p>
              </div>

              <div className="border-l-2 border-[#ff0099]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[#fad144] mb-2">
                  Sovereign Supporters
                </h3>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-2">
                  Sovereign Supporters are beings who wish to donate and support healing aligned resources, currency, and opportunities without yet directly joining Atlas Island as Co-Creators. They may remain cloaked and with minimum surveillance for our Heartlight's Greatest & Highest Good.
                </p>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed">
                  Every contribution flows into the Heartlight Pool, a living reservoir that assures life essentials for ALL beings on Atlas Island so that co-creation may arise from thrival rather than survival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Pathways */}
        <section className="relative py-12 sm:py-16 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-[1.4rem] text-[#fad144] mb-2">
                Exchange Pathways
              </h2>
              <p className="font-body text-[0.95rem] text-[#b8a8f0]/60">
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

        {/* Bottom CTA */}
        <section className="relative py-12 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-body text-[1rem] text-[#b8a8f0]/60 mb-5">
                Explore the full community directory, cast wishes, and connect with Co-Creators.
              </p>
              <a
                href="https://heartlight-exchange.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-[#dfff42] text-[#dfff42] font-ui text-[0.78rem] uppercase tracking-[0.14em] hover:bg-[#dfff42]/10 hover:shadow-[0_0_30px_rgba(223,255,66,0.2)] transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Open Heartlight Exchange
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
