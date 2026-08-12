import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Heartlight() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero */}
        <section className="relative pt-16 sm:pt-24 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
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
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-heartlight-green)] mb-3">
                Gift Exchange Economy
              </span>
              <h1 className="font-display text-[2.2rem] sm:text-[3.2rem] text-[var(--color-solar-gold)] leading-tight mb-5" style={ textShadow: 'var(--text-shadow-hero)' }
                Heartlight Exchange
              </h1>
              <p className="font-body text-[1.05rem] sm:text-[1.2rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[650px] mx-auto mb-8">
                The unified resource collective of Atlas Island. Assuring life essentials so ALL beings may co-create from thrival.
              </p>

              <a
                href="https://heartlight.atlasisland.co"
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
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10"
 >
              <Heart className="w-7 h-7 text-[var(--color-magenta-ray)] mx-auto mb-3" />
              <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-2">
                How the Heartlight Exchange Is Built
              </h2>
              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/60">
                The Heartlight Collective serves as the unified resource collective of Atlas Island.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-[var(--color-heartlight-green)]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[var(--color-solar-gold)] mb-2">
                  The Heartlight Collective
                </h3>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed mb-2">
                  The Heartlight Collective is the unified resource collective of Atlas Island. Beings co-operate from a place of having their life essentials assured and fulfilled through this collective. Resources, skills, and gifts flow with clarity and grace, creating a sacred space for co-creation beyond the scarcity paradigm.
                </p>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Our Heartlight is our universal heart & soul that comes from the remembrance of our sacred creation of ALL that IS. The Exchange is how this Heartlight moves through form, how abundance becomes shared, how thrival becomes collective.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-ray-400)]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[var(--color-solar-gold)] mb-2">
                  Atlastizens, Co-Creators
                </h3>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Atlastizens are the beings who have stepped onto Atlas Island as Co-Creators. They contribute and co-create with the Heartlight Collective through various roles that align with their gifts and calling, artists, healers, builders, gardeners and farmers tending the agroforestry fields, caregivers, engineers, architects, visioneers, dreamers, and any being who feels the call to co-create with our Heartlight.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-magenta-ray)]/30 pl-6">
                <h3 className="font-display text-[1.2rem] text-[var(--color-solar-gold)] mb-2">
                  Sovereign Supporters
                </h3>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed mb-2">
                  Sovereign Supporters are beings who wish to donate and support healing aligned resources, currency, and opportunities without yet directly joining Atlas Island as Co-Creators. They may remain cloaked and with minimum surveillance for our Heartlight's Greatest & Highest Good.
                </p>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Every contribution flows into the Heartlight Pool, a living reservoir that assures life essentials for ALL beings on Atlas Island so that co-creation may arise from thrival rather than survival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exchange Pathways */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10"
 >
              <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-2">
                Exchange Pathways
              </h2>
              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/60">
                Five forms of sacred reciprocity. Choose what resonates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: '💱', title: 'Currency Fixed Price', desc: 'A clear, agreed-upon offering in exchange for currency.' },
                { icon: '🎚️', title: 'Sliding Scale', desc: 'A range of exchange honoring different access to currency.' },
                { icon: '🤝', title: 'Value Exchange / Trade', desc: 'One offering in return for another. Energy flows both ways.' },
                { icon: '🎁', title: 'Gift Exchange', desc: 'Offered freely from overflow, as an act of love and service.' },
                { icon: '🌱', title: 'Scholarship Exchange', desc: 'Community-supported offerings for those without access.' },
              ].map((pathway, i) => (
                <div
 key={i} className="reveal flex items-start gap-4 p-5 rounded-xl border border-[var(--color-ray-green)]/15 bg-[var(--bg-card)]"
 >
                  <span className="text-2xl flex-shrink-0">{pathway.icon}</span>
                  <div>
                    <h3 className="font-display text-[1.05rem] text-[var(--color-solar-gold)] mb-1"{pathway.title}</h3>
                    <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/55">{pathway.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-12 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal" >
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/60 mb-5">
                Explore the full community directory, cast wishes, and connect with Co-Creators.
              </p>
              <a
                href="https://heartlight.atlasisland.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border-2 border-[#dfff42] text-[var(--color-heartlight-green)] font-ui text-[0.78rem] uppercase tracking-[0.14em] hover:bg-[var(--color-heartlight-green)]/10 hover:shadow-[0_0_30px_rgba(223,255,66,0.2)] transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Open Heartlight Exchange
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
