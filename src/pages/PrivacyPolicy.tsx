import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Globe, Heart, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function PrivacyPolicy() {
  useScrollReveal();

  const lastUpdated = 'July 30, 2026';

  const sections = [
    {
      icon: Eye,
      title: 'What We Collect',
      content: `We collect only what is necessary to serve the Greatest & Highest Good of ALL beings who flow through Atlas Island:

• Contact information (name, email) when you reach out via our Connect form or join our Discord sanctuary
• Donation records processed through Stripe — including amount, date, and payment method
• Transaction data from our Relay business bank account, used solely for reconciliation and the Sacred Ledger
• Usage data (anonymous page views and navigation patterns) to understand how beings move through the site

We do NOT collect: location data, browsing history outside of Atlas Island, biometric data, or data from children under 13.`,
    },
    {
      icon: Lock,
      title: 'How We Protect Your Data',
      content: `Your data is treated as sacred trust. We employ the following safeguards:

• All data is stored in the United States, in compliance with Stripe's Financial Connections requirements
• Stripe handles all payment processing with PCI-DSS Level 1 compliance — we never see your full card numbers
• Relay secures our banking data with industry-standard encryption
• We do not sell, trade, or rent your personal information to any third party
• Access to donation and transaction records is limited to Z Atlas Morphoenix as steward of Atlas Island LLC`,
    },
    {
      icon: Globe,
      title: 'How We Use Data',
      content: `Every byte of data serves a sacred purpose:

• Communication: Responding to your messages, welcoming you to the Discord sanctuary, sharing Heartlight Collective updates
• Transparency: Recording donations in the Sacred Ledger (with your consent — you may remain anonymous)
• Reconciliation: Matching Stripe payouts to our Relay account to ensure every gift is accounted for
• Improvement: Understanding which pages and pathways serve beings best, so we may refine the experience

We never use your data for advertising, profiling, or any purpose beyond the direct functioning of Atlas Island.`,
    },
    {
      icon: Heart,
      title: 'Your Sovereign Rights',
      content: `As a sovereign being, you retain full rights over your data:

• Right to Access: You may request a copy of all data we hold about you
• Right to Correction: If any information is inaccurate, we will correct it promptly
• Right to Deletion: You may request deletion of your personal data (note: donation records required for tax/accounting purposes may be retained as legally necessary)
• Right to Anonymity: When donating, you may choose to remain cloaked — your name will not appear in the Sacred Ledger unless you explicitly consent
• Right to Withdraw Consent: You may opt out of communications at any time`,
    },
    {
      icon: Shield,
      title: 'Third-Party Services',
      content: `We work with a small circle of trusted stewards to operate Atlas Island:

• Stripe: Processes all card and bank donations. Their privacy policy governs payment data during transmission.
• Relay: Holds our business bank account. Their privacy policy governs banking data.
• Discord: Hosts our community sanctuary. Their privacy policy governs Discord messages and profile data.
• Vercel: Hosts our website. Their privacy policy governs server logs and analytics.

We only share the minimum data necessary for each service to fulfill its role. No data is shared for marketing or profiling purposes.`,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #6455df 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[800px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-ray-400)] mb-4">
                <Shield className="w-3.5 h-3.5" />
                Sacred Trust
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[var(--color-solar-gold)] leading-tight mb-6" style={ textShadow: 'var(--text-shadow-hero)' }
                Privacy Policy
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.25rem] text-[var(--text-secondary)]/85 italic leading-relaxed max-w-[650px] mx-auto mb-4">
                Your data is held as sacred trust. We steward it with the same care we steward the Heartlight Collective itself.
              </p>
              <p className="font-ui text-[0.7rem] text-[var(--text-secondary)]/40 uppercase tracking-[0.15em]">
                Last Updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 sm:py-16">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="reveal"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-ray-400)]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-[var(--color-ray-400)]" />
                  </div>
                  <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)]">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-[52px]">
                  <div className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="reveal pt-8 border-t border-[var(--color-ray-400)]/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-magenta-ray)]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[var(--color-magenta-ray)]" />
                </div>
                <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)]">
                  Questions or Requests?
                </h2>
              </div>
              <div className="pl-[52px]">
                <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed mb-4">
                  If you have questions about this privacy policy, wish to exercise your data rights, 
                  or simply want to discuss how we steward information at Atlas Island, please reach out.
                </p>
                <a
                  href="mailto:contact@atlasisland.co"
                  className="inline-flex items-center gap-2 text-[var(--color-magenta-ray)] font-ui text-[0.8rem] uppercase tracking-[0.1em] hover:text-[var(--color-solar-gold)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@atlasisland.co
                </a>
              </div>
            </motion.div>

            {/* Sign-off */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="reveal text-center pt-8"
            >
              <p className="font-body text-[0.9rem] text-[var(--text-secondary)]/50 italic">
                With Love of ALL that IS, this policy is stewarded by Z Atlas Morphoenix for Atlas Island LLC.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
