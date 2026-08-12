import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight, Heart, Eye, Sparkles, Scale } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SACRED_LEDGER } from '../data/ledger';

export function Ledger() {
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

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero Section */}
        <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[#3a9b6f] mb-4">
                <Eye className="w-3.5 h-3.5" />
                Living Transparency
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[var(--color-solar-gold)] leading-tight mb-6" style={ textShadow: 'var(--text-shadow-hero)' }
                Sacred Ledger
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.25rem] text-[var(--text-secondary)]/85 italic leading-relaxed max-w-[700px] mx-auto mb-8">
                Where abundance is witnessed, honored, and shared in sacred trust
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/65 leading-relaxed max-w-[650px] mx-auto mb-10">
                The Heartlight Collective stewarded through Relay. Every inflow and outflow
                is recorded here so ALL beings may witness how resources circulate for our
                Greatest & Highest Good.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pool Balance — Center Stage */}
        <section className="relative pb-16">
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="reveal p-8 sm:p-10 rounded-2xl border border-[var(--color-solar-gold)]/15 bg-[var(--bg-card)] backdrop-blur-sm text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <Scale className="w-5 h-5 text-[var(--color-solar-gold)]" />
                <span className="font-ui text-[0.75rem] uppercase tracking-[0.15em] text-[var(--color-solar-gold)]/70">
                  Heartlight Collective Pool
                </span>
              </div>
              <p className="font-display text-[3.5rem] sm:text-[4.5rem] text-[var(--color-solar-gold)] leading-none mb-2">
                {formatCurrency(currentBalance)}
              </p>
              <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/50 mb-6">
                Stewarded as of {formatDate(pool.asOfDate)}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6 border-t border-[var(--color-ray-400)]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-ray-green)]/15 border border-[var(--color-ray-green)]/25 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#3a9b6f]" />
                  </div>
                  <div className="text-left">
                    <p className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-secondary)]/50">
                      Total Inflows
                    </p>
                    <p className="font-display text-[1.3rem] text-[#3a9b6f]">
                      {formatCurrency(inflowTotal)}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-[var(--color-ray-400)]/15" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-magenta-ray)]/15 border border-[var(--color-magenta-ray)]/25 flex items-center justify-center">
                    <TrendingDown className="w-5 h-5 text-[var(--color-magenta-ray)]" />
                  </div>
                  <div className="text-left">
                    <p className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-secondary)]/50">
                      Total Outflows
                    </p>
                    <p className="font-display text-[1.3rem] text-[var(--color-magenta-ray)]">
                      {formatCurrency(outflowTotal)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transaction Feed */}
        <section className="relative py-16 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <BookOpen className="w-7 h-7 text-[var(--color-solar-gold)] mx-auto mb-3" />
              <h2 className="font-display text-[1.8rem] text-[var(--color-solar-gold)] mb-3">
                Flow of Abundance
              </h2>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/65">
                Every sacred exchange, witnessed
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
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="reveal flex flex-col sm:flex-row sm:items-center gap-3 p-5 rounded-xl border border-[var(--color-ray-400)]/10 bg-[var(--bg-page)]/40 hover:bg-[var(--bg-page)]/60 hover:border-[var(--color-ray-400)]/20 transition-all duration-300"
                  >
                    {/* Type indicator */}
                    <div className="flex-shrink-0">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          backgroundColor: `${entry.rayColor || (entry.type === 'inflow' ? '#3a9b6f' : '#ff0099')}15`,
                          border: `1px solid ${entry.rayColor || (entry.type === 'inflow' ? '#3a9b6f' : '#ff0099')}25`,
                        }}
                      >
                        {entry.type === 'inflow' ? (
                          <ArrowUpRight
                            className="w-5 h-5"
                            style={{ color: entry.rayColor || '#3a9b6f' }}
                          />
                        ) : (
                          <ArrowDownRight
                            className="w-5 h-5"
                            style={{ color: entry.rayColor || '#ff0099' }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="inline-block w-2 h-2 rounded-full"
                              style={{ backgroundColor: entry.rayColor || '#fad144' }}
                            />
                            <span className="font-ui text-[0.65rem] uppercase tracking-[0.12em] text-[var(--text-secondary)]/50">
                              {entry.category}
                            </span>
                          </div>
                          <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/80 leading-relaxed">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-left sm:text-right mt-1 sm:mt-0">
                          <p
                            className="font-display text-[1.1rem]"
                            style={{
                              color: entry.type === 'inflow' ? '#3a9b6f' : '#ff0099',
                            }}
                          >
                            {entry.type === 'inflow' ? '+' : '-'}
                            {formatCurrency(entry.amount)}
                          </p>
                          <p className="font-ui text-[0.65rem] text-[var(--text-secondary)]/40 uppercase tracking-[0.1em]">
                            {formatDate(entry.date)}
                          </p>
                        </div>
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
              className="mt-10 p-6 rounded-xl border border-[var(--color-solar-gold)]/10 bg-[var(--color-solar-gold)]/5 text-center"
            >
              <Sparkles className="w-5 h-5 text-[var(--color-solar-gold)] mx-auto mb-3" />
              <p className="font-body text-[0.95rem] text-[var(--color-solar-gold)]/70 italic leading-relaxed max-w-[600px] mx-auto">
                {transparencyNote}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12 border-t border-[var(--color-ray-400)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <div className="reveal">
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed max-w-[600px] mx-auto mb-8">
                The Heartlight Collective is stewarded through Relay. Every inflow and outflow
                is recorded with sacred intention for the Greatest & Highest Good of ALL.
              </p>
              <a
                href="https://donate.stripe.com/00w5kD1e70RhepT9m10oM00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-magenta-ray)]/15 border border-[var(--color-magenta-ray)]/30 text-[var(--color-magenta-ray)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-magenta-ray)]/25 transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Offer a Gift via Stripe
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
