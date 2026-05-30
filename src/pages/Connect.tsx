import { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Heart, HandCoins, Users, Sparkles } from 'lucide-react';

export function Connect() {
  const [collectiveAmount] = useState(1242);

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
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
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#ff0099] mb-5">
                The Gateway
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Connect & Join
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto">
                Step onto Atlas Island. Every being who resonates is welcome.
                Choose your path of engagement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Three Sacred Paths */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-3">
                Three Paths of Support
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60">
                ALL contributions serve the Greatest & Highest Good for our Heartlight Collective.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Path 1: Donations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl border border-[#ff0099]/20 bg-[#120822]/40 flex flex-col"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[#ff0099]/30 bg-[#ff0099]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[#ff0099]">
                    Sacred Giving
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#ff0099]/10 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-[#ff0099]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[#fad144] text-center mb-2">
                  Donations
                </h3>

                <p className="font-body text-[0.9rem] text-[#b8a8f0]/70 leading-relaxed text-center mb-5 flex-1">
                  Sacred offerings that flow directly into the Heartlight Collective.
                  Every gift, no matter the size, nourishes the sanctuary we are building together.
                </p>

                <a
                  href="https://www.heartlightexchange.com/donate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#ff0099]/15 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#ff0099]/25 hover:shadow-[0_0_25px_rgba(255,0,153,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Offer a Gift
                </a>
              </motion.div>

              {/* Path 2: Heartlight Collective Exchange */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl border border-[#dfff42]/20 bg-[#120822]/40 flex flex-col"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[#dfff42]/30 bg-[#dfff42]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[#dfff42]">
                    Mutual Aid
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#dfff42]/10 flex items-center justify-center">
                    <HandCoins className="w-7 h-7 text-[#dfff42]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[#fad144] text-center mb-2">
                  Heartlight Collective Exchange
                </h3>

                <p className="font-body text-[0.9rem] text-[#b8a8f0]/70 leading-relaxed text-center mb-5 flex-1">
                  Mutual aid and resource exchanges flowing through the Heartlight Collective.
                  Give what you can, receive what you need — a circle of reciprocity and trust.
                </p>

                <a
                  href="https://www.heartlightexchange.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#dfff42]/15 border border-[#dfff42]/30 text-[#dfff42] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#dfff42]/25 hover:shadow-[0_0_25px_rgba(223,255,66,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <HandCoins className="w-4 h-4" />
                  Enter the Exchange
                </a>
              </motion.div>

              {/* Path 3: Atlastizen Co-Creator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -4 }}
                className="relative p-6 rounded-2xl border border-[#fad144]/20 bg-[#120822]/40 flex flex-col"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full border border-[#fad144]/30 bg-[#fad144]/10">
                  <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[#fad144]">
                    Co-Creator
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#fad144]/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#fad144]" />
                  </div>
                </div>

                <h3 className="font-display text-[1.3rem] text-[#fad144] text-center mb-2">
                  Atlastizen Co-Creator
                </h3>

                <div className="text-center mb-3">
                  <span className="font-display text-[1.8rem] text-[#fad144]">$12</span>
                  <span className="font-ui text-[0.7rem] text-[#b8a8f0]/50 uppercase tracking-[0.1em]"> / month</span>
                </div>

                <p className="font-body text-[0.9rem] text-[#b8a8f0]/70 leading-relaxed text-center mb-5 flex-1">
                  An encouraged contribution to become an Atlastizen Co-Creator.
                  Your $12 flows directly into the Heartlight Collective — transparently
                  displayed and collectively stewarded for the Greatest & Highest Good.
                </p>

                {/* Collective Resource Display */}
                <div className="mb-5 p-3 rounded-xl border border-[#6455df]/20 bg-[#0a0515]/50">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#fad144]" />
                    <span className="font-ui text-[0.6rem] uppercase tracking-[0.12em] text-[#b8a8f0]/50">
                      Heartlight Collective
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-display text-[1.4rem] text-[#fad144]">
                      ${collectiveAmount.toLocaleString()}
                    </span>
                    <p className="font-ui text-[0.6rem] text-[#b8a8f0]/40 uppercase tracking-[0.1em] mt-0.5">
                      Currently stewarded
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.heartlightexchange.com/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#fad144]/15 border border-[#fad144]/30 text-[#fad144] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#fad144]/25 hover:shadow-[0_0_25px_rgba(250,209,68,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Become an Atlastizen
                </a>
              </motion.div>
            </div>

            {/* Collective transparency note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 text-center"
            >
              <p className="font-body text-[0.85rem] text-[#b8a8f0]/40 italic max-w-[600px] mx-auto">
                The Heartlight Collective resource amount is transparently displayed and stewarded
                for the Greatest & Highest Good of ALL Atlastizens. We are expanding and building
                the Heartlight Collective together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Discord Community */}
        <section className="relative py-12 sm:py-16 border-t border-[#6455df]/10">
          <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 rounded-2xl border border-[#6455df]/20 bg-[#120822]/40"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#dfff42]/30 bg-[#dfff42]/5 mb-5">
                <Users className="w-3.5 h-3.5 text-[#dfff42]" />
                <span className="font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#dfff42]">
                  The Gathering Circle
                </span>
              </div>

              <h3 className="font-display text-[1.4rem] text-[#fad144] mb-3">
                Join the Atlas Island Discord
              </h3>

              <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-6 max-w-[500px] mx-auto">
                Our living sanctuary on Discord — where Atlastizens gather, share, co-create,
                and weave the future of Atlas Island in real time. ALL resonant beings welcome.
              </p>

              <a
                href="https://discord.gg/SVNFrqk8Mv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6455df] text-[#f0e8ff] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(100,85,223,0.25)] hover:shadow-[0_0_35px_rgba(100,85,223,0.4)] hover:scale-[1.04] transition-all duration-300"
              >
                <Users className="w-4 h-4" />
                Enter the Sanctuary
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[600px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-3">
                Reach Out
              </h2>
              <p className="font-body text-[1rem] text-[#b8a8f0]/60">
                Have a question, offering, or resonance to share?
              </p>
            </motion.div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#b8a8f0]/50 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-[#6455df]/20 bg-[#120822]/60 text-[#f0e8ff] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[#fad144]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#b8a8f0]/50 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#6455df]/20 bg-[#120822]/60 text-[#f0e8ff] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[#fad144]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-ui text-[0.65rem] uppercase tracking-[0.15em] text-[#b8a8f0]/50 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#6455df]/20 bg-[#120822]/60 text-[#f0e8ff] font-body text-[0.95rem] placeholder-[#b8a8f0]/30 focus:outline-none focus:border-[#fad144]/40 focus:shadow-[0_0_15px_rgba(250,209,68,0.1)] transition-all resize-none"
                  placeholder="What brings you to Atlas Island?"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#ff0099]/15 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.78rem] uppercase tracking-[0.14em] hover:bg-[#ff0099]/25 hover:shadow-[0_0_30px_rgba(255,0,153,0.15)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Transmission
              </button>
            </form>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-[#b8a8f0]/40">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-body text-[0.85rem]">hello@atlasisland.co</span>
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
