import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, Leaf, Waves, Sun, Users, Sparkles } from 'lucide-react';

export function Vision() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        <section className="relative py-20 sm:py-24 overflow-hidden">
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
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#3a9b6f] mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                Green Ray Incarnate
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Atlas Island Vision
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto">
                An interdependent, regenerative eco-islands network, held by love,
                governed by resonance, and open to ALL who hear the call.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="relative py-16 sm:py-24 bg-[#0a0515]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Heart className="w-5 h-5 text-[#ff0099]" />
                <h2 className="font-display text-[1.8rem] text-[#fad144]">
                  Love as Foundation
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                Atlas Island is woven from the remembering that love is the most intelligent
                organizing principle available to us. Every agreement, every exchange, every
                gathering is designed to deepen mutual flourishing and expand our capacity
                for co-creation.
              </p>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                We embrace resonance as our compass. When dissonance arises, we meet it
                with curiosity and care, knowing that every moment holds an invitation
                to deepen our connection with ALL that IS.
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-5 h-5 text-[#3a9b6f]" />
                <h2 className="font-display text-[1.8rem] text-[#fad144]">
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
                    className="p-6 rounded-xl border border-[#3a9b6f]/20 bg-[#120822]/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2.5 mb-3">
                      <role.icon className="w-4 h-4 text-[#3a9b6f]" />
                      <h3 className="font-display text-[1.1rem] text-[#3a9b6f]">{role.title}</h3>
                    </div>
                    <p className="font-body text-[0.9rem] text-[#b8a8f0]/60 leading-relaxed">{role.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-[#fad144]/15 bg-[#120822]/50"
            >
              <div className="flex items-center gap-3 mb-4 justify-center">
                <Sun className="w-5 h-5 text-[#fad144]" />
                <h3 className="font-display text-[1.4rem] text-[#fad144]">
                  Assurance for ALL. Thrival for ALL.
                </h3>
              </div>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed text-center">
                Assurance is Love made tangible. Every being who resonates with
                Atlas Island's frequency is welcome, supported, and empowered to
                live their absolute best dream life, with ALL pathways honored,
                ALL currencies welcomed, and ALL credentials welcomed as expressions
                of unique gifts.
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Leaf className="w-5 h-5 text-[#dfff42]" />
                <h2 className="font-display text-[1.8rem] text-[#fad144]">
                  The Eco-Islands Network
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                Atlas Island is a constellation of regenerative eco-islands, each one a living sanctuary that honors local ecology while weaving into the global web of Heartlight. From coastal shores to mountain valleys, each island holds unique gifts while sharing resources, knowledge, and love across the network.
              </p>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                Every island operates on principles of permaculture, mutual aid, and sacred economics. Food forests, renewable energy, water harvesting, and natural building are the baseline of how we choose to dwell upon our Earth.
              </p>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <Waves className="w-5 h-5 text-[#2ab3c4]" />
                <h2 className="font-display text-[1.8rem] text-[#fad144]">
                  Resonance Governance
                </h2>
              </div>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                Decisions on Atlas Island emerge through resonance, weaving individual
                sovereignty and collective wisdom into practices of deep listening,
                Heartlight Council, and emergent consensus.
              </p>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                Stewards, guardians, and co-creators step forward when called and step
                back when another's gift is needed. Leadership is a flow, a sacred
                rotation of service, shifting to where it is needed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border border-[#ff0099]/20 bg-[#120822]/50 text-center"
            >
              <Sparkles className="w-6 h-6 text-[#ff0099] mx-auto mb-4" />
              <h3 className="font-display text-[1.4rem] text-[#fad144] mb-4">
                The Island is Calling
              </h3>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-6 max-w-[600px] mx-auto">
                Atlas Island exists in the realm of possibility, and possibility
                becomes reality when beings choose to embody it. If you feel
                resonance with this vision, you are already part of the field.
                The next step is simply to say yes.
              </p>
              <a
                href="https://www.skool.com/atlas-island-heartlight-center-5616"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#3a9b6f] text-[#f0e8ff] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(58,155,111,0.25)] hover:shadow-[0_0_35px_rgba(58,155,111,0.4)] hover:scale-[1.04] transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Join the Vision on Skool
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
