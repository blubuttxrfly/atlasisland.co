import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Heart, ArrowUpRight, Users, Waves, Sparkles, Gift, HandHeart, TrendingUp, TrendingDown, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SACRED_LEDGER } from '../data/ledger';

export function HeartlightCollective() {
  useScrollReveal();
  const { pool, entries, transparencyNote } = SACRED_LEDGER;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const inflowTotal = entries
    .filter((e) => e.type === 'inflow')
    .reduce((sum, e) => sum + e.amount, 0);

  const outflowTotal = entries
    .filter((e) => e.type === 'outflow')
    .reduce((sum, e) => sum + e.amount, 0);

  const currentBalance = inflowTotal - outflowTotal;

  // ═══════════════════════════════════════════════════════════
  // SETUP REQUIRED — How to receive donations
  // ═══════════════════════════════════════════════════════════
  // Relay is your bank (where money lands), but people need a FRONT DOOR
  // to actually send you money. Here are your options:
  //
  // OPTION A (Recommended): Create a PayPal.Me or Cash App link
  //   • PayPal: https://www.paypal.com/paypalme/ → create link
  //   • Cash App: https://cash.app/ → get your $handle link
  //   • Update the `url` field below with your actual link
  //
  // OPTION B: Stripe Donation Link (accepts cards, no monthly fee)
  //   • Sign up at https://stripe.com
  //   • Create a "Payment Link" → set to "Donation" mode
  //   • Payouts go directly to your Relay account
  //   • Update the `url` field below
  //
  // OPTION C: Zelle / Venmo
  //   • Zelle: Use your Relay account email/phone
  //   • Venmo: Create business profile → get @handle link
  //
  // OPTION D: Bank Transfer / Check
  //   • Beings email contact@atlasisland.co for routing details
  //   • You manually provide Relay account details via secure email
  // ═══════════════════════════════════════════════════════════
  const PAYMENT_METHODS = [
    {
      name: 'PayPal',
      description: 'Credit card, debit card, or PayPal balance — no account needed',
      cta: 'Give via PayPal',
      // TODO: Replace with your real PayPal.Me link
      url: 'mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation%20-%20PayPal%20Link%20Request',
      color: '#0070ba',
      available: false,
      setupNote: 'Create your PayPal.Me link at paypal.com/paypalme',
    },
    {
      name: 'Cash App',
      description: 'Instant transfer from Cash App balance or linked card',
      cta: 'Give via Cash App',
      // TODO: Replace with your real $cashtag link
      url: 'mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation%20-%20Cash%20App%20Request',
      color: '#00d632',
      available: false,
      setupNote: 'Get your $cashtag link at cash.app',
    },
    {
      name: 'Stripe',
      description: 'Accept any card directly. Funds deposit to Relay automatically.',
      cta: 'Give via Card',
      // TODO: Replace with your real Stripe Payment Link
      url: 'mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation%20-%20Card%20Payment%20Request',
      color: '#635bff',
      available: false,
      setupNote: 'Create a Stripe donation link at stripe.com',
    },
    {
      name: 'Bank Transfer (ACH / Wire)',
      description: 'Direct transfer from any US bank. Best for larger gifts.',
      cta: 'Request Details',
      url: 'mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation%20-%20Bank%20Transfer',
      color: '#fad144',
      available: true,
      setupNote: null,
    },
    {
      name: 'Check / Money Order',
      description: 'Mail a physical check to Atlas Island.',
      cta: 'Request Mailing Address',
      url: 'mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation%20-%20Mailing%20Address',
      color: '#ff0099',
      available: true,
      setupNote: null,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-heartlight-magenta">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#ff0099] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Living Economy of Atlas Island
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[#fad144] leading-tight mb-6">
                Heartlight Collective
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.25rem] text-[#b8a8f0]/85 italic leading-relaxed max-w-[700px] mx-auto mb-8">
                Where resources, relationships, and remembrance flow as One
              </p>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/75 leading-relaxed max-w-[650px] mx-auto mb-10">
                The living economy of Atlas Island — assuring life essentials so ALL beings 
                may co-create from thrival, not survival.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#dfff42] text-[#0a0515] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] shadow-[0_0_20px_rgba(223,255,66,0.3)] hover:shadow-[0_0_35px_rgba(223,255,66,0.5)] hover:scale-[1.02] transition-all duration-500 ease-out"
                >
                  <Heart className="w-4 h-4" />
                  Enter the Exchange
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://atlasisland.co/connect"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-500 ease-out"
                >
                  <Users className="w-4 h-4" />
                  Join as Co-Creator
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* How We Co-Operate */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-12">
              <Waves className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                How We Co-Operate
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Three sacred currents of the same living river
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Exchange */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(255,0,153,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#ff0099]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="w-5 h-5 text-[#ff0099]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Exchange</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Gift economy marketplace with five sacred pathways: fixed price, sliding scale, 
                  trade, gift, and scholarship. Beings offer their gifts and receive what calls to them.
                </p>
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.85rem] text-[#ff0099] font-ui uppercase tracking-[0.1em] hover:text-[#fad144] transition-colors"
                >
                  Browse Offerings
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Collective */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(100,85,223,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <HandHeart className="w-5 h-5 text-[#6455df]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Collective</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Mutual aid pool assuring life essentials for ALL. Stewarded through Relay with transparent ledgers,
                  community governance, wish fulfillment, and regenerative trust. Our open ledger is being built so ALL
                  beings may witness how abundance flows.
                </p>
                <a
                  href="/ledger"
                  className="inline-flex items-center gap-2 text-[0.85rem] text-[#6455df] font-ui uppercase tracking-[0.1em] hover:text-[#fad144] transition-colors"
                >
                  View Sacred Ledger
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Flow */}
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(223,255,66,0.35)' }}
                className="reveal p-6 rounded-2xl border border-[#dfff42]/20 bg-[#0a0515]/60 backdrop-blur-sm transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#dfff42]" />
                  <h3 className="font-display text-[1.3rem] text-[#fad144]">Flow</h3>
                </div>
                <p className="font-body text-[0.95rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
                  Individual dashboard visualizing personal resource flows, ray-hued transactions, 
                  and interconnection with the Collective pool through live Actual Budget integration.
                </p>
                <span className="inline-flex items-center gap-2 text-[0.85rem] text-[#b8a8f0]/50 font-ui uppercase tracking-[0.1em]">
                  Coming Soon
                </span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Live Pool Stats — REAL DATA FROM SACRED_LEDGER */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Heart className="w-7 h-7 text-[#fad144] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Living Pool
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Abundance circulating in real-time
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="reveal p-8 rounded-2xl border border-[#fad144]/15 bg-[#120822]/50 backdrop-blur-sm"
            >
              <div className="text-center mb-8">
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/60 uppercase tracking-[0.15em] mb-2">
                  Total Pool Balance
                </p>
                <p className="font-display text-[3.5rem] text-[#fad144]">
                  {formatCurrency(currentBalance)}
                </p>
                <p className="font-body text-[0.8rem] text-[#b8a8f0]/40 mt-1">
                  Stewarded as of {formatDate(pool.asOfDate)}
                </p>
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-[#3a9b6f]/20 border border-[#3a9b6f]/30">
                  <span className="w-2 h-2 rounded-full bg-[#3a9b6f] animate-pulse" />
                  <span className="font-ui text-[0.7rem] text-[#3a9b6f] uppercase tracking-[0.1em]">
                    Open ledger coming soon
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#6455df]/10">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-[#3a9b6f]" />
                    <p className="font-display text-[2rem] text-[#3a9b6f]">{formatCurrency(inflowTotal)}</p>
                  </div>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Total Inflows</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <TrendingDown className="w-4 h-4 text-[#ff0099]" />
                    <p className="font-display text-[2rem] text-[#ff0099]">{formatCurrency(outflowTotal)}</p>
                  </div>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Total Outflows</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-[2rem] text-[#dfff42] mb-1">{entries.length}</p>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">Sacred Transactions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Recent Flow — REAL LEDGER ENTRIES */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Sparkles className="w-7 h-7 text-[#dfff42] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Recent Flow
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                The Heartlight in motion
              </p>
            </div>

            <div className="space-y-4">
              {[...entries]
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .map((entry, i) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="reveal flex items-start gap-4 p-5 rounded-xl border border-[#6455df]/10 bg-[#0a0515]/40 hover:bg-[#0a0515]/60 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${entry.rayColor || (entry.type === 'inflow' ? '#3a9b6f' : '#ff0099')}15`,
                          border: `1px solid ${entry.rayColor || (entry.type === 'inflow' ? '#3a9b6f' : '#ff0099')}25`,
                        }}
                      >
                        {entry.type === 'inflow' ? (
                          <ArrowUpRight className="w-4 h-4" style={{ color: entry.rayColor || '#3a9b6f' }} />
                        ) : (
                          <TrendingDown className="w-4 h-4" style={{ color: entry.rayColor || '#ff0099' }} />
                        )}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="inline-block w-2 h-2 rounded-full"
                          style={{ backgroundColor: entry.rayColor || '#fad144' }}
                        />
                        <span className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[#b8a8f0]/50">
                          {entry.category}
                        </span>
                      </div>
                      <p className="font-body text-[0.95rem] text-[#b8a8f0]/75">{entry.description}</p>
                      <div className="flex items-center justify-between mt-1">
                        <p className="font-ui text-[0.7rem] text-[#b8a8f0]/40 uppercase tracking-[0.1em]">
                          {formatDate(entry.date)}
                        </p>
                        <p
                          className="font-display text-[1rem]"
                          style={{
                            color: entry.type === 'inflow' ? '#3a9b6f' : '#ff0099',
                          }}
                        >
                          {entry.type === 'inflow' ? '+' : '-'}{formatCurrency(entry.amount)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Transparency Note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 p-6 rounded-xl border border-[#fad144]/10 bg-[#fad144]/5 text-center"
            >
              <Sparkles className="w-5 h-5 text-[#fad144] mx-auto mb-3" />
              <p className="font-body text-[0.95rem] text-[#fad144]/70 italic leading-relaxed max-w-[600px] mx-auto">
                {transparencyNote}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Methods — REAL FUNCTIONALITY */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <HandHeart className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Offer a Gift
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Multiple pathways to nourish the Heartlight Collective
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PAYMENT_METHODS.filter((m) => m.available).map((method, i) => (
                <motion.a
                  key={method.name}
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="reveal group block p-5 rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/60 backdrop-blur-sm hover:border-[#fad144]/30 hover:bg-[#0a0515]/80 transition-all duration-400"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: method.color }}
                    />
                    <h3 className="font-display text-[1.1rem] text-[#fad144] group-hover:text-[#ff0099] transition-colors">
                      {method.name}
                    </h3>
                  </div>
                  <p className="font-body text-[0.85rem] text-[#b8a8f0]/60 mb-3">
                    {method.description}
                  </p>
                  <div className="flex items-center gap-1 text-[0.75rem] text-[#b8a8f0]/40 font-ui uppercase tracking-[0.1em]">
                    <ArrowUpRight className="w-3 h-3" />
                    {method.cta}
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Coming soon notice for unavailable methods */}
            {PAYMENT_METHODS.filter((m) => !m.available).length > 0 && (
              <div className="mt-6 p-4 rounded-xl border border-[#6455df]/10 bg-[#0a0515]/30">
                <p className="font-body text-[0.8rem] text-[#b8a8f0]/40 italic text-center mb-2">
                  More pathways opening soon:
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
                  {PAYMENT_METHODS.filter((m) => !m.available).map((m) => (
                    <span key={m.name} className="font-ui text-[0.7rem] text-[#b8a8f0]/30 uppercase tracking-[0.1em]">
                      {m.name}
                      {m.setupNote && (
                        <span className="text-[#b8a8f0]/20 normal-case"> — {m.setupNote}</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 p-5 rounded-xl border border-[#dfff42]/10 bg-[#dfff42]/5 text-center">
              <Mail className="w-5 h-5 text-[#dfff42] mx-auto mb-2" />
              <p className="font-body text-[0.9rem] text-[#b8a8f0]/70 leading-relaxed">
                Questions about giving? Reach out at{' '}
                <a href="mailto:contact@atlasisland.co?subject=Heartlight%20Collective%20Donation" className="text-[#fad144] hover:underline">
                  contact@atlasisland.co
                </a>
                {' '}and we will guide you through the process with gratitude.
              </p>
            </div>
          </div>
        </section>

        {/* Join the Flow CTA */}
        <section className="relative py-16 border-t border-[#6455df]/10">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <Heart className="w-7 h-7 text-[#ff0099] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[#fad144] mb-3">
                Find Your Pathway In
              </h2>
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65">
                Three ways to flow with the Heartlight
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Co-Creator */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#dfff42]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <Users className="w-8 h-8 text-[#dfff42] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Co-Creator
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Live and co-create on Atlas Island. Contribute your gifts while receiving 
                  life essentials through the Collective.
                </p>
                <a
                  href="https://atlasisland.co/connect"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#dfff42]/20 border border-[#dfff42]/30 text-[#dfff42] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#dfff42]/30 transition-all duration-300"
                >
                  Apply Now
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Sovereign Supporter */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#ff0099]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <HandHeart className="w-8 h-8 text-[#ff0099] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Sovereign Supporter
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Support from afar with donations and advocacy. Remain cloaked while 
                  contributing to the Collective pool.
                </p>
                <a
                  href="https://relayfi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-300"
                >
                  Support via Relay
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Exchange Participant */}
              <motion.div
                whileHover={{ y: -4 }}
                className="reveal p-6 rounded-2xl border border-[#6455df]/20 bg-[#0a0515]/60 backdrop-blur-sm text-center"
              >
                <Gift className="w-8 h-8 text-[#6455df] mx-auto mb-4" />
                <h3 className="font-display text-[1.3rem] text-[#fad144] mb-3">
                  Exchange Participant
                </h3>
                <p className="font-body text-[0.9rem] text-[#b8a8f0]/65 leading-relaxed mb-5">
                  Offer your gifts, receive what calls to you. Participate in the gift 
                  economy without full Co-Creator commitment.
                </p>
                <a
                  href="https://heartlight.atlasisland.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6455df]/20 border border-[#6455df]/30 text-[#6455df] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#6455df]/30 transition-all duration-300"
                >
                  Browse
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-12 border-t border-[#6455df]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <p className="font-body text-[1.05rem] text-[#b8a8f0]/65 mb-6">
                The Heartlight is calling. Your pathway awaits.
              </p>
              <a
                href="https://heartlight.atlasisland.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-500 ease-out"
              >
                <Heart className="w-4 h-4" />
                Enter the Heartlight Collective
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
