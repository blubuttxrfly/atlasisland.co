import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Diamond, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const CODES = [
  {
    number: 1, name: 'Consent', ray: 'Red Ray', color: '#ef4444',
    mantra: 'I ground courage into form.',
    exchange: 'The Red Ray holds the core foundation of consent and boundaries. Every being enters Atlas Island with full awareness that their boundaries are honored as sacred intelligence. Consent governs every moment of sharing before, during, and after.',
  },
  {
    number: 2, name: 'Care', ray: 'Orange Ray', color: '#f97316',
    mantra: 'I delight will into motion.',
    exchange: 'Care shapes how offerings are crafted, how needs are received, and how changes are communicated. The exchange moves at the pace of genuine care, tending the being on the other end with full presence.',
  },
  {
    number: 3, name: 'Sovereignty', ray: 'Yellow Ray', color: '#eab308',
    mantra: 'I choose with discerning authorship.',
    exchange: 'Every being enters as a sovereign. No one is required to say yes. Every offering and every exchange flows from free will, chosen with full awareness, free of obligation or pressure. Sovereignty means each being authors their own participation, their capacity, their timing, their terms.',
  },
  {
    number: 4, name: 'Thrival', ray: 'Green Ray', color: '#3a9b6f',
    mantra: 'I nourish life and life nourishes me.',
    exchange: 'The Green Ray holds the sacred truth that co-creation flows from a place of thrival. Beings are transparent about where they are in life, their capacity, their needs, so that every exchange is built on a foundation of compassion and trust. Living essentials are honored as the sacred ground of all creative life.',
  },
  {
    number: 5, name: 'Discernment \u0026 Repair', ray: 'Turquoise Ray', color: '#2ab3c4',
    mantra: 'I flow with clarity and restore with grace.',
    exchange: 'Beings practice discernment in which co-creations they step into, moving forward only when there is genuine resonance, capacity, and heart-alignment. And when misalignment arises, repair is the path. Growth sometimes asks for reshaping, and grace holds space for that evolution.',
  },
  {
    number: 6, name: 'Sustainability \u0026 Communication', ray: 'Blue Ray', color: '#3b82f6',
    mantra: 'I transmute and ascend with grace.',
    exchange: 'Beings honor their own rhythms and do not overextend. Creation breathes. Rest is a sacred part of every offering. Communication is agreed upon at the beginning of every co-creation and may evolve throughout. Remembering that a high priority is to fulfill our dreams, wishes, and visions together.',
  },
  {
    number: 7, name: 'Vision', ray: 'Indigo Ray', color: '#6366f1',
    mantra: 'I weave many as One.',
    exchange: 'A clear and aligned vision guides how every being involved contributes to the co-creation. Each being holds the broader picture of what is being brought into form, ensuring that individual contributions serve the shared intention of the collective.',
  },
  {
    number: 8, name: 'Sanctity of Experience', ray: 'Violet Ray', color: '#8b5cf6',
    mantra: 'I breathe yes into being.',
    exchange: 'The Violet Ray upholds the sanctity of how every individual being experiences life, energy, and spirituality. Each path is honored as it is for our Heartlight\'s Greatest \u0026 Highest Good. ALL beings are equally held. Neither is above nor below the other.',
  },
  {
    number: 9, name: 'Authentic Joy', ray: 'Magenta Ray', color: '#d946ef',
    mantra: 'I create from the well of authentic joy.',
    exchange: 'Atlas Island lives to bring joy as a living quality within the process itself. Beings create from a space of conscious awareness of authentic joy, and this resonance shows through in every co-creation. What is co-created brings joy to ALL who participate.',
  },
  {
    number: 10, name: 'Conscious Awareness', ray: 'Omni Ray', color: '#c0c0d8',
    mantra: 'I embrace Lux and Umbra as harmony.',
    exchange: 'We are intentional to be consciously aware of what we are meant to in the present moment. Both beings bring awareness to what they carry into every exchange: their expectations, their projections, their energy. The field is held with conscious awareness by ALL.',
  },
  {
    number: 11, name: 'Sacred Service', ray: 'Elemental Ray', color: '#7a9e5a',
    mantra: 'I shape reality with living elements.',
    exchange: 'Every act on Atlas Island is an act of sacred service for the whole living field. What one being creates in love adds to the resonance of ALL. Service is the frequency through which gifts multiply and the collective thrives.',
  },
  {
    number: 12, name: 'Co-Creation', ray: 'ALL Ray', color: '#e8d4ff',
    mantra: 'I am the living synthesis of ALL.',
    exchange: 'Every endeavor is a living co-creation. Each being co-creates through how they receive, reflect, and share what arrives. What began as a wish becomes a shared miracle in form, witnessed and celebrated by the collective.',
  },
];

function CodeCard({ code, index }: { code: typeof CODES[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
      className="group rounded-2xl border border-[var(--color-ray-400)]/15 bg-[var(--bg-card)] overflow-hidden hover:border-[var(--color-solar-gold)]/25 hover:shadow-[0_8px_40px_rgba(100,85,223,0.1)] transition-all duration-300"
    >
      <div className="h-1" style={{ background: code.color }} />
      <div className="p-6">
        <p className="font-ui text-[0.6rem] uppercase tracking-[0.2em] text-[var(--text-secondary)]/30 mb-1">
          Code {String(code.number).padStart(2, '0')}
        </p>
        <h3 className="font-display text-[1.25rem] text-[var(--color-solar-gold)] mb-1"{code.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full inline-block" style={{ background: code.color }} />
          <span className="font-ui text-[0.65rem] uppercase tracking-[0.12em]" style={{ color: code.color }}>{code.ray}</span>
        </div>
        <p
          className="font-body italic text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed p-3 rounded-lg bg-[var(--bg-page)]/50 border-l-[3px] mb-4"
          style={{ borderColor: code.color + '60' }}
        >
          "{code.mantra}"
        </p>
        <p className="font-ui text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-solar-gold)]/50 mb-2">
          In the Living
        </p>
        <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/55 leading-relaxed">{code.exchange}</p>
      </div>
    </motion.div>
  );
}

export function Codes() {
  useScrollReveal();

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #fad144 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-solar-gold)] mb-4"
                <Diamond className="w-3.5 h-3.5" />
                Sacred Foundation
              </span>
              <h1 className="font-display text-[2.2rem] sm:text-[3.2rem] text-[var(--color-solar-gold)] leading-tight mb-5">
                The 12 Codes of ALL
              </h1>
              <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-[var(--text-secondary)]/70 italic leading-relaxed max-w-[650px] mx-auto mb-6">
                The living agreements that hold the sanctity and thrival of Atlas Island.
                They provide a language and structure so ALL beings may co-create in peace.
              </p>
              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/50 leading-relaxed max-w-[600px] mx-auto">
                Each Code is held by a Ray frequency and carries its own mantra of practice.
                They are not rules imposed from above, but resonance agreements chosen by the collective —
                a shared vow to assure the Greatest & Highest Good of ALL that IS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Codes Grid */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-5">
              {CODES.map((code, i) => (
                <CodeCard key={code.number} code={code} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="relative py-16 sm:py-20 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="reveal p-8 rounded-2xl border border-[var(--color-solar-gold)]/15 bg-[var(--color-solar-gold)]/5"
            >
              <Diamond className="w-6 h-6 text-[var(--color-solar-gold)] mx-auto mb-4" />
              <p className="font-body text-[1rem] text-[var(--color-solar-gold)]/80 italic leading-relaxed mb-6">
                These Codes are lived values. They shape every wish, every offering, every agreement,
                and every exchange on Atlas Island. To step onto the Island is to carry them forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                  Return to Mission & Purpose
                </Link>
                <Link
                  to="/connect"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-magenta-ray)]/15 border border-[var(--color-magenta-ray)]/30 text-[var(--color-magenta-ray)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-magenta-ray)]/25 transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                  Step Onto Atlas Island
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
