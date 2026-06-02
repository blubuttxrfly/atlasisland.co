import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Mission() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        {/* Content starts immediately, minimal hero */}
        <section className="relative pt-12 sm:pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0515]" />
          <div className="relative max-w-[800px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10"
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#ff0099] mb-3">
                Why Atlas Island Exists
              </span>
              <h1 className="font-display text-[2rem] sm:text-[2.8rem] text-[#fad144] leading-tight">
                Mission & Purpose
              </h1>
            </motion.div>

            <div className="reveal space-y-10"
 >
              {/* Personal Declaration — FIRST and most prominent */}
              <div className="border-l-2 border-[#fad144]/40 pl-6 py-2">
                <h2 className="font-display text-[1.4rem] text-[#fad144] mb-4">
                  A Personal Declaration
                </h2>
                <div className="font-body text-[1.05rem] text-[#b8a8f0]/80 leading-relaxed space-y-4">
                  <p>
                    I know what it is like to be in a state of survival. And I also know what it is like to remember that I deserve to live my absolute best dream life now. I deserve to be in a world that I am living every day with conscious awareness of authentic joy. Especially when I remember there are infinite beings who feel the within their Heartlight to share their gifts, offerings, and healing.
                  </p>
                  <p>
                    Atlas Island is born from the wish that one day, beings would be able to live from a place thrival and fulfillment. I believe in me while believing in ALL beings who feel the call to co-create our Heartlight's dreams & wishes in life. I know that when beings have their life essentials met, when they can breathe freely, they naturally find what brings them authentic joy. It is genuinely unique and ever-evolving from one being to another, and every path is sacred.
                  </p>
                  <p className="text-[#fad144]/90 italic">
                    With Love of ALL the IS,<br />
                    Atlas Morphoenix
                  </p>
                  <div className="mt-6">
                    <img 
                      src="/AtlasSignature.png" 
                      alt="Atlas Morphoenix Signature" 
                      className="h-24 w-auto opacity-90"
                    />
                  </div>
                </div>
              </div>

              <div className="border-l-2 border-[#ff0099]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[#fad144] mb-3">
                  The Calling
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  A space for Queer/LGBTQIA+/Two-Spirit & Allies, neurodivergent, artists, healers, and beings of ALL walks of life who feel a call to co-create a meaningful & fulfilling life through unifying intentional, aligned exchanges.
                </p>
              </div>

              <div className="border-l-2 border-[#6455df]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[#fad144] mb-3">
                  What Atlas Island Is
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-3">
                  Atlas Island is a sovereign interdependent united state. The economy is a gift exchange through the Heartlight Exchange.
                </p>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-3">
                  Beings co-operate from a place of having their life essentials assured and fulfilled through the Heartlight Collective which serves as the unified resource collective of Atlas Island. Beings may contribute and co-create with the Heartlight Collective through various roles, such as artists, healers, builders, gardeners/farmers (agroforestry fields), caregivers, engineers, architects, visioneers, dreamers, and beings who feel a call to co-create with our Heartlight.
                </p>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  Our Heartlight is our universal heart & soul that comes from the remembrance of our sacred creation of ALL that IS.
                </p>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mt-3">
                  There is a Heartlight Collective which represents the beings who are Co-Creators & Sovereign Supporters. It is where beings who want to donate & support healing aligned resources, money, and opportunities can do so without yet directly joining Atlas Island and may also remain cloaked/minimum surveillance for our Heartlight's Greatest & Highest Good.
                </p>
              </div>

              <div className="border-l-2 border-[#dfff42]/30 pl-6">
                <h2 className="font-display text-[1.4rem] text-[#fad144] mb-3">
                  The Mission
                </h2>
                <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed">
                  To assure ALL beings life essentials to co-create from thrival. When beings have life essentials, they feel that they are able to breathe and find what brings them authentic joy in life. It is genuinely unique and ever-evolving from one being to another.
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  to="/connect"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#dfff42] text-[#0a0515] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(223,255,66,0.3)] hover:shadow-[0_0_35px_rgba(223,255,66,0.5)] hover:scale-[1.04] transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  Join Atlas Island as a Co-Creator
                </Link>

                <a
                  href="https://heartlight.atlasisland.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#6455df]/20 border border-[#6455df]/40 text-[#b8a8f0] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#6455df]/30 hover:border-[#fad144]/30 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                  Explore the Heartlight Collective
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
