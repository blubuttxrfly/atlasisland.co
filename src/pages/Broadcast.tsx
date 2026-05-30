import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Play, FileText } from 'lucide-react';

export function Broadcast() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        <section className="relative py-24 sm:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #c94040 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#c94040] mb-5">
                Transmissions from the Island
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Broadcast
              </h1>
              <p className="font-body text-[1.15rem] sm:text-[1.3rem] text-[#b8a8f0]/80 italic leading-relaxed max-w-[700px] mx-auto">
                Videos, writings, and transmissions from Atlas Island.
                Each one a doorway into deeper remembrance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="relative py-16 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-8 text-center">
                Latest Transmission
              </h2>

              <div className="max-w-[800px] mx-auto aspect-video rounded-2xl border border-[#6455df]/20 bg-[#120822]/60 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <Play className="w-16 h-16 text-[#fad144]/30 mx-auto mb-4" />
                  <p className="font-body text-[#b8a8f0]/40 italic">
                    First transmission loading...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Garden */}
        <section className="relative py-16 sm:py-20 border-t border-[#6455df]/10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-[1.6rem] text-[#fad144] mb-8 text-center">
                Written Garden
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: 'The Carbon Ray', desc: 'Primordial Ray of Center, the bridge between seen and unseen.', ray: '#2a0050' },
                  { title: 'Rays of the Week', desc: 'The Earth-Cycle Spiral, lunar and solar rhythms.', ray: '#5a4a9e' },
                  { title: 'Heartlight Exchange', desc: 'Gift economy as sacred practice.', ray: '#3a9b6f' },
                ].map((article, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-xl border border-[#6455df]/15 bg-[#120822]/40 hover:border-[#ff0099]/25 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: article.ray + '20', color: article.ray }}
                      >
                        <FileText className="w-4 h-4" />
                      </div>
                      <span className="font-ui text-[0.6rem] uppercase tracking-[0.15em] text-[#b8a8f0]/40">
                        Article
                      </span>
                    </div>
                    <h3 className="font-display text-[1.15rem] text-[#fad144] mb-2 group-hover:text-[#ffe478] transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-[0.9rem] text-[#b8a8f0]/50">
                      {article.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
