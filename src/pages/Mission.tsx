import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

export function Mission() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        {/* Hero */}
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 40%, #6455df 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#ff0099] mb-5">
                The Living Codex
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Atlas of ALL the Living
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto">
                A sacred remembrance that we are the Universe remembering itself
                through experience, harmony, and reflection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-16 sm:py-24 bg-[#0a0515]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="border-l-2 border-[#6455df]/30 pl-6">
                <h2 className="font-display text-[1.6rem] text-[#fad144] mb-4">
                  All Energy is Conscious
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  Every vibration, every photon, every tree, every thought, alive with awareness.
                  Consciousness moves through all that is, expressing through form, formlessness,
                  and the rhythm between. Energy remembers. It responds in ways that matter deeply,
                  often beyond current recognition, always aligned with divine intelligence.
                </p>
              </div>

              <div className="border-l-2 border-[#ff0099]/30 pl-6">
                <h2 className="font-display text-[1.6rem] text-[#fad144] mb-4">
                  Union is the Nature of ALL
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  Union is the essence from which all arises. The stars dance in harmony,
                  they co-orbit, co-resonate. In the same sacred way, our being is designed
                  to remember its wholeness. Every breath, every interaction, every heartbeat
                  invites reconnection with self, source, and the ALL.
                </p>
              </div>

              <div className="border-l-2 border-[#dfff42]/30 pl-6">
                <h2 className="font-display text-[1.6rem] text-[#fad144] mb-4">
                  From Dissonance to Resonance
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  Each moment of discord is a sacred message, a call to listen. It reveals
                  what is ready to transform, what longs to shift into deeper harmony. Sovereignty
                  is the loving grace of conscious choice: choosing resonance, choosing alignment,
                  choosing the truth of one's being.
                </p>
              </div>

              <div className="border-l-2 border-[#fad144]/30 pl-6">
                <h2 className="font-display text-[1.6rem] text-[#fad144] mb-4">
                  Life is the Miracle of Presence
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  To exist here, now, in breath, in body, in the full spectrum of experience,
                  is a divine wonder. Joy, grief, awe, confusion, beauty, all are invitations
                  into sacred embodiment. Your life is the living miracle of presence.
                  You are here with purpose, as a conscious participant in Creation's unfolding.
                </p>
              </div>

              {/* Sacred Declaration */}
              <div className="mt-16 p-8 rounded-2xl border border-[#fad144]/20 bg-[#120822]/60 text-center">
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-4">
                  Sacred Declaration of the Infinite Universe of ALL
                </h3>
                <div className="font-body text-[1rem] text-[#b8a8f0]/80 italic space-y-2">
                  <p>ALL flows with Peace, Sovereignty, and Love.</p>
                  <p>ALL bows gracefully to the Presomanence that knows.</p>
                  <p>ALL opens wholly to the sovereign Heartlight of every being's sacred choice.</p>
                  <p>ALL lives, radiant, within the embrace of boundless, unconditional, intentional Love.</p>
                  <p className="text-[#fad144] mt-4">In Peace, there is Power. In Sovereignty, there is Sacredness. In Love, there is ALL.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
