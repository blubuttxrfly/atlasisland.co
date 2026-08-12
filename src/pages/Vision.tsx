import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, Leaf, Waves, Sun, Users, Sparkles, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Vision() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        <section className="relative pt-16 sm:pt-20 pb-8 overflow-hidden">
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
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#3a9b6f] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Green Ray Incarnate
              </span>
              <h1 className="font-display text-[2.2rem] sm:text-[3.2rem] text-[var(--color-solar-gold)] leading-tight mb-5" style={ textShadow: 'var(--text-shadow-hero)' }
                Atlas Island Vision
              </h1>
              <p className="font-body text-[1.05rem] sm:text-[1.2rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[650px] mx-auto">
                A peaceful, sovereign, interdependent nation of regenerative eco-islands, co-created with conscious awareness and authentic joy, governed by the <a href="/codes" className="text-[var(--color-solar-gold)] hover:underline">12 Codes of ALL</a>, and open to ALL who feel the call to New Earth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative py-12 sm:py-16 bg-[var(--bg-page)]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-12">
            {/* 1. The Eco-Islands Network */}
            <div className="reveal" >
              <div className="flex items-center gap-3 mb-5">
                <Leaf className="w-5 h-5 text-[var(--color-heartlight-green)]" />
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  The Eco-Islands Network
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed mb-4">
                Atlas Island is a constellation of regenerative eco-islands, each one a living sanctuary that honors local ecology while weaving into the global web of Heartlight. From coastal shores to mountain valleys, each island holds unique gifts while sharing resources, knowledge, and love across the network.
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed">
                Every island operates on principles of permaculture, mutual aid, and sacred economics. Food forests, renewable energy, water harvesting, and natural building are the baseline of how we choose to dwell upon our Earth.
              </p>
            </div>

            {/* 2. Resonance Governance */}
            <div className="reveal" >
              <div className="flex items-center gap-3 mb-5">
                <Waves className="w-5 h-5 text-[#2ab3c4]" />
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Resonance Governance
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed mb-4">
                Decisions on Atlas Island emerge through resonance, weaving individual
                sovereignty and collective wisdom into practices of deep listening,
                Heartlight Council, and emergent consensus.
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed">
                Stewards, guardians, and co-creators step forward when called and step
                back when another's gift is needed. Leadership is a flow, a sacred
                rotation of service, shifting to where it is needed.
              </p>
            </div>

            {/* 3. Assurance for ALL. Thrival for ALL. */}
            <div className="reveal p-8 rounded-2xl border border-[var(--color-solar-gold)]/15 bg-[var(--bg-card)]"
 >
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Sun className="w-5 h-5 text-[var(--color-solar-gold)]" />
                <h3 className="font-display text-[1.3rem] text-[var(--color-solar-gold)]">
                  Assurance for ALL. Thrival for ALL.
                </h3>
              </div>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed text-center">
                Assurance is Love made tangible. Every being who resonates with
                Atlas Island's frequency is welcome, supported, and empowered to
                live their absolute best dream life, with ALL pathways honored,
                ALL currencies welcomed, and ALL credentials welcomed as expressions
                of unique gifts.
              </p>
            </div>

            {/* 4. Love as Foundation */}
            <div className="reveal" >
              <div className="flex items-center gap-3 mb-5">
                <Heart className="w-5 h-5 text-[var(--color-magenta-ray)]" />
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Love as Foundation
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed mb-4">
                Atlas Island is woven from the remembering that love is the most intelligent
                organizing principle available to us. Every agreement, every exchange, every
                gathering is designed to deepen mutual flourishing and expand our capacity
                for co-creation.
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed">
                We embrace resonance as our compass. When dissonance arises, we meet it
                with curiosity and care, knowing that every moment holds an invitation
                to deepen our connection with ALL that IS.
              </p>
            </div>

            {/* 6. Heartlight Collective & Flow */}
            <div className="reveal p-8 rounded-2xl border border-[var(--color-magenta-ray)]/20 bg-gradient-to-br from-[#120822]/60 to-[#2a0a1f]/40">
              <div className="flex items-center gap-3 mb-5 justify-center">
                <Heart className="w-5 h-5 text-[var(--color-magenta-ray)]" />
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Heartlight Collective & Flow
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed mb-4">
                The Heartlight Collective is the living economy of Atlas Island — a unified space where the 
                Heartlight Exchange, Heartlight Flow, and mutual aid resources converge. Here, beings co-operate 
                from a place of having their life essentials assured, contributing their gifts, and circulating 
                abundance with transparent grace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-lg border border-[var(--color-magenta-ray)]/15 bg-[var(--bg-page)]/50">
                  <h3 className="font-display text-[1rem] text-[var(--color-solar-gold)] mb-2">Exchange</h3>
                  <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/60">
                    Gift economy marketplace where offerings flow through five sacred pathways: fixed price, 
                    sliding scale, trade, gift, and scholarship.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-ray-400)]/15 bg-[var(--bg-page)]/50">
                  <h3 className="font-display text-[1rem] text-[var(--color-solar-gold)] mb-2">Collective</h3>
                  <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/60">
                    Mutual aid pool assuring life essentials for ALL beings. Transparent ledgers stewarded through Relay with community governance and wish fulfillment.
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-[var(--color-heartlight-green)]/15 bg-[var(--bg-page)]/50">
                  <h3 className="font-display text-[1rem] text-[var(--color-solar-gold)] mb-2">Flow</h3>
                  <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/60">
                    Individual dashboard visualizing personal resource flows, ray-hued transactions, and 
                    interconnection with the Collective pool through live Actual Budget integration.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-magenta-ray)]/20 border border-[var(--color-magenta-ray)]/30 text-[var(--color-magenta-ray)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-magenta-ray)]/30 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                  Enter the Heartlight Collective
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* 5. Living Roles — to be updated when Atlas channels the full set */}
            <div className="reveal" >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-[#3a9b6f]" />
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Living Roles of the Island
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { 
                    icon: Sun,
                    title: 'Threshold Guardians', 
                    desc: 'Frequency weavers who tend to the sacred space, coherence, and resonance of Atlas Island. They hold the container so ALL may create within it.' 
                  },
                  { 
                    icon: Users,
                    title: 'Atlastizen Co-Creators', 
                    desc: 'The heartbeat of Atlas Island. Beings who live, learn, play, and grow within the eco-village, contributing their unique gifts to the collective.' 
                  },
                  { 
                    icon: Leaf,
                    title: 'Earth Stewards', 
                    desc: 'Caregivers of land, water, food systems, and living infrastructure. They tend the physical body of the Island with reverence and skill.',
                  },
                  { 
                    icon: Waves,
                    title: 'Sacred Architects', 
                    desc: 'Visionaries and makers who design the systems, spaces, and tools that enable collective thriving for ALL beings.' 
                  },
                ].map((role) => (
                  <motion.div
                    key={role.title}
                    whileHover={{ y: -3, borderColor: 'rgba(58,155,111,0.35)' }}
                    className="p-6 rounded-xl border border-[var(--color-ray-green)]/20 bg-[var(--bg-card)] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <role.icon className="w-4 h-4 text-[#3a9b6f]" />
                      <h3 className="font-display text-[1.1rem] text-[#3a9b6f]">{role.title}</h3>
                    </div>
                    <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/60 leading-relaxed">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="reveal p-8 rounded-2xl border border-[var(--color-magenta-ray)]/20 bg-[var(--bg-card)] text-center"
 >
              <Sparkles className="w-6 h-6 text-[var(--color-magenta-ray)] mx-auto mb-4" />
              <h3 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] mb-4">
                The Island is Calling
              </h3>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/70 leading-relaxed mb-6 max-w-[600px] mx-auto">
                Atlas Island exists in the realm of possibility, and possibility
                becomes reality when beings choose to embody it. If you feel
                resonance with this vision, you are already part of the field.
                The next step is simply to say yes.
              </p>
              <a
                href="https://discord.gg/SVNFrqk8Mv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#3a9b6f] text-[var(--text-primary)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(58,155,111,0.25)] hover:shadow-[0_0_35px_rgba(58,155,111,0.4)] hover:scale-[1.04] transition-all duration-300"
              >
                <img src="/discord-icon.webp" alt="" className="w-5 h-5 rounded" />
                Join the Discord
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
