import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Heart, HandCoins, Users, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, type FormEvent } from 'react';

export function Connect() {
  useScrollReveal();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in ALL fields so we may receive your transmission.');
      setStatus('error');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMsg('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formsubmit.co/ajax/contact@atlasisland.co', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Transmission from ${formData.name} — Atlas Island`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again, or email us directly at contact@atlasisland.co');
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #ff0099 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-magenta-ray)] mb-5">
                The Gateway
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[var(--color-solar-gold)] leading-tight mb-6" style={ textShadow: 'var(--text-shadow-hero)' }
                Connect & Join
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[700px] mx-auto">
                Step onto Atlas Island. Every being who resonates is welcome.
                Choose your path of engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Three Sacred Paths */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)] mb-3">
                Three Paths of Support
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/60">
                ALL contributions serve the Greatest & Highest Good for our Heartlight Collective.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Path 1: Donations */}
              <div className="reveal relative p-6 rounded-2xl border border-[var(--color-magenta-ray)]/20 bg-[var(--bg-card)] flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[var(--color-magenta-ray)]/30 bg-[var(--color-magenta-ray)]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-magenta-ray)]">
                    Sacred Giving
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-magenta-ray)]/10 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-[var(--color-magenta-ray)]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] text-center mb-2">
                  Donations
                </h3>

                <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/70 leading-relaxed text-center mb-5 flex-1">
                  Sacred offerings that flow directly into the Heartlight Collective through Stripe.
                  Every gift, no matter the size, nourishes the sanctuary we are building together.
                  Funds are stewarded through Atlas Island LLC for transparency and trust.
                </p>

                <a
                  href="https://donate.stripe.com/00w5kD1e70RhepT9m10oM00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[var(--color-magenta-ray)]/15 border border-[var(--color-magenta-ray)]/30 text-[var(--color-magenta-ray)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-magenta-ray)]/25 hover:shadow-[0_0_25px_rgba(255,0,153,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Offer a Gift via Stripe
                </a>
              </div>

              {/* Path 2: Heartlight Collective Exchange */}
              <div className="reveal relative p-6 rounded-2xl border border-[var(--color-heartlight-green)]/20 bg-[var(--bg-card)] flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[var(--color-heartlight-green)]/30 bg-[var(--color-heartlight-green)]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-heartlight-green)]">
                    Mutual Aid
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-heartlight-green)]/10 flex items-center justify-center">
                    <HandCoins className="w-7 h-7 text-[var(--color-heartlight-green)]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] text-center mb-2">
                  Heartlight Collective Exchange
                </h3>

                <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/70 leading-relaxed text-center mb-5 flex-1">
                  Mutual aid and resource exchanges flowing through the Heartlight Collective.
                  Give what you can, receive what you need — a circle of reciprocity and trust.
                </p>

                <a
                  href="https://heartlight.atlasisland.co/exchange"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[var(--color-heartlight-green)]/15 border border-[var(--color-heartlight-green)]/30 text-[var(--color-heartlight-green)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-heartlight-green)]/25 hover:shadow-[0_0_25px_rgba(223,255,66,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <HandCoins className="w-4 h-4" />
                  Enter the Exchange
                </a>
              </div>

              {/* Path 3: Atlastizen Co-Creator */}
              <div className="reveal relative p-6 rounded-2xl border border-[var(--color-solar-gold)]/20 bg-[var(--bg-card)] flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[var(--color-solar-gold)]/30 bg-[var(--color-solar-gold)]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-solar-gold)]">
                    Co-Creator
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-solar-gold)]/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-[var(--color-solar-gold)]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] text-center mb-2">
                  Atlastizen Co-Creator
                </h3>

                <div className="text-center mb-3">
                  <span className="font-display text-[1.8rem] text-[var(--color-solar-gold)]">C.E.S.</span>
                  <span className="font-ui text-[0.7rem] text-[var(--text-secondary)]/50 uppercase tracking-[0.1em]"> Profile Creation</span>
                </div>

                <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/70 leading-relaxed text-center mb-5 flex-1">
                  Become an Atlastizen by creating your Core Energetic Signature (C.E.S.) profile.
                  Your C.E.S. is your sovereign identity across the Heartlight Collective — 
                  the golden thread connecting your gifts, offerings, and resonance.
                </p>

                <a
                  href="https://heartlight.atlasisland.co/create-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 hover:shadow-[0_0_25px_rgba(250,209,68,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Create C.E.S. Profile
                </a>
              </div>
            </div>

            {/* Collective transparency note */}
            <div className="reveal mt-8 text-center">
              <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/40 italic max-w-[600px] mx-auto">
                The Heartlight Collective receives donations through Stripe, stewarded through Atlas Island LLC 
                for the Greatest & Highest Good of ALL Atlastizens. Our open ledger is being woven so ALL beings 
                may witness how abundance flows. Visit the <a href="/ledger" className="text-[var(--color-solar-gold)] hover:underline">Sacred Ledger</a> to witness the flow.
              </p>
            </div>
          </div>
        </section>

        {/* Discord Community */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal p-6 sm:p-8 rounded-2xl border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-heartlight-green)]/30 bg-[var(--color-heartlight-green)]/5 mb-5">
                <Users className="w-3.5 h-3.5 text-[var(--color-heartlight-green)]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[var(--color-heartlight-green)]">
                  The Gathering Circle
                </span>
              </div>

              <h3 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-3">
                Join the Atlas Island Discord
              </h3>

              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed mb-6 max-w-[500px] mx-auto">
                Our living sanctuary on Discord — where Atlastizens gather, share, co-create,
                and weave the future of Atlas Island in real time. ALL resonant beings welcome.
              </p>

              <a
                href="https://discord.gg/SVNFrqk8Mv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6455df] text-[var(--text-primary)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(100,85,223,0.25)] hover:shadow-[0_0_35px_rgba(100,85,223,0.4)] hover:scale-[1.04] transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Enter the Sanctuary
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="relative py-16 sm:py-20 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)] mb-3">
                Reach Out
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/60">
                Have a question, offering, or resonance to share?
              </p>
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-8 rounded-2xl border border-[var(--color-ray-green)]/30 bg-[var(--color-ray-green)]/10 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-[#3a9b6f] mx-auto mb-4" />
                  <h3 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-2">
                    Transmission Received
                  </h3>
                  <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed">
                    Thank you, {formData.name || 'beloved'}. Your message has been sent to the Heartlight.
                    We will respond as soon as the resonance aligns.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 transition-all duration-300"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]/50 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)] text-[var(--text-primary)] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[var(--color-solar-gold)]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]/50 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)] text-[var(--text-primary)] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[var(--color-solar-gold)]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[var(--text-secondary)]/50 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)] text-[var(--text-primary)] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[var(--color-solar-gold)]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all resize-none"
                      placeholder="What brings you to Atlas Island?"
                    />
                  </div>

                  <AnimatePresence>
                    {status === 'error' && errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="flex items-center gap-2 p-3 rounded-lg border border-[var(--color-magenta-ray)]/20 bg-[var(--color-magenta-ray)]/10 text-[var(--color-magenta-ray)] font-body text-[0.85rem]"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 rounded-full bg-[var(--color-magenta-ray)]/15 border border-[var(--color-magenta-ray)]/30 text-[var(--color-magenta-ray)] font-ui text-[0.78rem] uppercase tracking-[0.14em] hover:bg-[var(--color-magenta-ray)]/25 hover:shadow-[0_0_30px_rgba(255,0,153,0.15)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Transmission...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Transmission
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[var(--text-secondary)]/40">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-body text-[0.85rem]">contact@atlasisland.co</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-[0.85rem]">Atlas Island, Earth 🌍</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
