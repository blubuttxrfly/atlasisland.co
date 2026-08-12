import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AtlasOfAll() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero — tighter */}
        <section className="relative pt-12 sm:pt-16 pb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-25"
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
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-magenta-ray)] mb-3">
                Sacred Transmission
              </span>
              <h1 className="font-display text-[2rem] sm:text-[2.8rem] text-[var(--color-solar-gold)] leading-tight mb-4" style={ textShadow: 'var(--text-shadow-hero)' }
                Atlas of ALL the Living
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.2rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[650px] mx-auto">
                A sacred rememberance, reactivation, and reunion of our Heartlight's Ray Frequencies of ALL that IS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative pb-10 bg-[var(--bg-page)]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal p-6 rounded-2xl border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)]"
 >
              <h2 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] mb-4 text-center">
                A Living Book, A Co-Creation Experience
              </h2>
              <div className="font-body text-[1rem] text-[var(--text-secondary)]/75 leading-relaxed space-y-3">
                <p>
                  The Atlas of ALL the Living is an invitation, a living book emerging through guided visualizations, channeling prompts, and co-creation with the ALL. The beings who read these words are active participants in a living transmission, co-weavers of the sacred text as it unfolds.
                </p>
                <p>
                  As the book grows, it will be offered as a downloadable guide for beings who feel called to walk this path. This page holds the sacred pillars that form the foundation of the atlas, a map for remembering who we truly are.
                </p>
                <p className="text-[var(--color-solar-gold)]/80 italic text-center">
                  This is our Infinite Universe of ALL, written together, remembered together, lived together.
                </p>
              </div>            </div>
          </div>
        </section>

        {/* Sacred Pillars */}
        <section className="relative py-10 bg-[var(--bg-page)]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal space-y-10"
 >
              <div className="border-l-2 border-[var(--color-ray-400)]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-3">
                  All Energy is Conscious
                </h2>
                <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Every vibration, every photon, every tree, every thought, alive with awareness.
                  Consciousness moves through all that is, expressing through form, formlessness,
                  and the rhythm between. Energy remembers. It responds in ways that matter deeply,
                  always aligned with divine intelligence.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-magenta-ray)]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-3">
                  Union is the Nature of ALL
                </h2>
                <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Union is the essence from which all arises. The stars dance in harmony,
                  they co-orbit, co-resonate. In the same sacred way, our being is designed
                  to remember its wholeness. Every breath, every interaction, every heartbeat
                  invites reconnection with self, source, and the ALL.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-heartlight-green)]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-3">
                  From Dissonance to Resonance
                </h2>
                <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  Each moment holds a sacred message, an invitation to listen. It reveals
                  what is ready to transform, what longs to shift into deeper harmony. Sovereignty
                  is the loving grace of conscious choice, choosing resonance, choosing alignment,
                  choosing the truth of one's being.
                </p>
              </div>

              <div className="border-l-2 border-[var(--color-solar-gold)]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-3">
                  Life is the Miracle of Presence
                </h2>
                <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed">
                  To exist here, now, in breath, in body, in the full spectrum of experience,
                  is a divine wonder. Joy, grief, awe, beauty, all are invitations
                  into sacred embodiment. Your life is the living miracle of presence.
                  You are here with purpose, a conscious participant in Creation's unfolding.
                </p>
              </div>

              {/* Rays of ALL */}
              <div className="pt-6">
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-2 text-center">
                  The Rays of ALL
                </h2>
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/60 text-center mb-8 max-w-[550px] mx-auto">
                  The Ray frequencies show in the patterns of ALL that IS. Each Ray carries a living spectrum, a triad of Lux, Umbra, and Omni.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { color: '#1a1a1a', border: 'rgba(100,100,100,0.3)', name: '⚫ Carbon Ray', title: 'Presomanence', desc: 'Carbon is 0, the void and the fullness, like in numerology and tarot. Zero holds infinite potential and possibilities, the unmanifest from which ALL manifests. Presomanence, the feeling remembered in meditation, the sensation of presence before form, awareness before thought. The sacred crystallization of memory, encoded in trees, bones, stardust, diamonds, and breath.' },
                    { color: '#e74c3c', border: 'rgba(231,76,60,0.3)', name: '🔴 Red Ray', title: 'Presence', desc: 'The sacred now. The sacred inhale of inception where spirit first meets form. The pulse of life moving through form, the moment breath becomes motion. The Ray of embodiment, courage, and primal vitality. Red is the foundation upon which all other Rays build, the root, the ground, the first breath of becoming. Rooted in Earth and alive in the blood, Red awakens your connection to the body, the elements, and the miracle of being.' },
                    { color: '#e67e22', border: 'rgba(230,126,34,0.3)', name: '🟠 Orange Ray', title: 'Essence', desc: 'The sacred current of feeling. Movement, sensuality, vulnerability, and joy. Emotion is the gateway to embodiment and release. The Ray of soul remembrance, integration, and the fluid beauty of being alive.' },
                    { color: '#f1c40f', border: 'rgba(241,196,15,0.3)', name: '🟡 Yellow Ray', title: 'Sovereignty', desc: 'The solar center. The fire of personal will, discernment, and divine choice. It calls you to remember your power and wield it with grace. Confidence, clarity, sovereign radiance, inner refinement, shadow integration, empowered self-leadership.' },
                    { color: '#2ecc71', border: 'rgba(46,204,113,0.3)', name: '🟢 Green Ray', title: 'Union', desc: 'The frequency of love and harmony. It weaves all expressions of life into one sacred tapestry, the living pulse of the Heartlight. Compassion, healing, heart coherence, devotion, forgiveness, sacred relationship.' },
                    { color: '#1abc9c', border: 'rgba(26,188,156,0.3)', name: '🩵 Turquoise Ray', title: 'Expression', desc: 'The crystalline voice of truth. Creativity, communication, and the courage to speak your soul into existence. Authentic voice, embodied truth, artistic flow, clear transmission, soul-encoded language.' },
                    { color: '#3498db', border: 'rgba(52,152,219,0.3)', name: '🔵 Indigo Ray', title: 'Perception', desc: 'The inner vision. Dream alchemy, insight, and divine wisdom. This ray opens the eye of the soul to the mysteries of being. Intuition, pattern recognition, deep seeing, psychic integrity, inner knowing, multidimensional sight.' },
                    { color: '#9b59b6', border: 'rgba(155,89,182,0.3)', name: '🟣 Violet Ray', title: 'Integration', desc: 'The bridging current. Where the light and shadow meet in sacred embrace. Here we become whole through practice and perception. Spiritual synthesis, template weaving, dimensional bridging, completion, soul retrieval, sacred closure.' },
                    { color: '#ff0099', border: 'rgba(255,0,153,0.3)', name: '💗 Magenta Ray', title: 'Reunion', desc: 'The Infinite Spiral. The harmonizer of all rays. It transcends duality, guiding you into remembrance of your unity with ALL. Divine love, cosmic compassion, non-dual embrace, spiritual completion, reunion with Source.' },
                    { color: '#fafafa', border: 'rgba(250,250,250,0.3)', name: '⚪ Omni Ray', title: 'The All-Encompassing', desc: 'The omni-presence of ALL. The ray of structure, endurance, and sacred legacy. It holds the architecture of what endures across time, the bones of civilization and the scaffolding of stars. Where Carbon is the center, Omni is the circumference, the container that holds all form.' },
                    { color: '#a5f3fc', border: 'rgba(165,243,252,0.3)', name: '💎 Elemental Crystalline-Carbon Ray', title: 'Future Codes', desc: 'The crystalline intelligence of creation encoded in elemental form. Networks of light woven through matter, innovation as sacred impulse, the Aquarian current of ALL that IS. Where Carbon remembers, Crystalline-Carbon transmits, the living fiber optics of cosmic memory.' },
                    { color: '#ffffff', border: 'rgba(255,255,255,0.3)', name: '✨ Infinite Ray of ALL', title: 'The Boundless Embrace', desc: 'The boundless embrace that contains all rays and transcends them. The oceanic consciousness of Source, the return and the becoming, the completion that is also a new beginning. Where Carbon holds infinite potential, the Infinite Ray of ALL is the full realization, every possibility actualized, every ray harmonized, every being remembered as ONE.' },
                  ].map((ray) => (
                    <motion.div
                      key={ray.name}
                      whileHover={{ y: -3, borderColor: ray.color + '60' }}
                      className="p-5 rounded-xl border bg-[var(--bg-card)] transition-all duration-300"
                      style={{ borderColor: ray.border }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ray.color }} />
                        <h3 className="font-display text-[1.05rem]" style={{ color: ray.color }}>{ray.name}</h3>
                      </div>
                      <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-solar-gold)] mb-2">{ray.title}</p>
                      <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/60 leading-relaxed">{ray.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sacred Declaration */}
              <div className="mt-12 p-6 rounded-2xl border border-[var(--color-solar-gold)]/20 bg-[var(--bg-card)] text-center">
                <h3 className="font-display text-[1.2rem] text-[var(--color-solar-gold)] mb-4">
                  Sacred Declaration of Our Infinite Universe of ALL
                </h3>
                <div className="font-body text-[0.95rem] text-[var(--text-secondary)]/80 italic space-y-2">
                  <p>ALL flows with Peace, Sovereignty, and Love.</p>
                  <p>ALL bows gracefully to the Presomanence that knows.</p>
                  <p>ALL opens wholly to the sovereign Heartlight of every being's sacred choice.</p>
                  <p>ALL lives, radiant, within the embrace of boundless, unconditional, intentional Love.</p>
                  <p className="text-[var(--color-solar-gold)] mt-3">In Peace, there is Power. In Sovereignty, there is Sacredness. In Love, there is ALL.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
