// Sacred Ledger — Living financial transparency for the Heartlight Collective
// Edit this file directly to update the ledger. Every entry is sacred.

export interface LedgerEntry {
  id: string;
  date: string;
  type: 'inflow' | 'outflow';
  category: string;
  amount: number;
  description: string;
  rayColor?: string;
}

export interface LedgerPool {
  asOfDate: string;
  totalBalance: number;
  totalInflows: number;
  totalOutflows: number;
}

export interface SacredLedger {
  pool: LedgerPool;
  entries: LedgerEntry[];
  transparencyNote: string;
}

// ═══════════════════════════════════════════════════════════
// HOW TO UPDATE THIS LEDGER
// ═══════════════════════════════════════════════════════════
// 1. Open this file in any text editor
// 2. Add a new entry to the `entries` array (copy an existing one and modify)
// 3. Update `pool.asOfDate` to today's date
// 4. The pool balance auto-calculates from entries — do NOT edit totalBalance manually
// 5. Commit and push
//
// Entry categories you might use:
//   'Sovereign Supporter' | 'Atlastizen Co-Creator' | 'Heartlight Exchange'
//   'Sanctuary Operations' | 'Mutual Aid' | 'Earth Initiatives'
// ═══════════════════════════════════════════════════════════

export const SACRED_LEDGER: SacredLedger = {
  pool: {
    // Update this date whenever you add new entries
    asOfDate: '2026-07-30',
    // These fields are computed from entries below. You do not need to edit them.
    totalBalance: 0,
    totalInflows: 0,
    totalOutflows: 0,
  },
  // ═══════════════════════════════════════════════════════════
  // ENTRIES
  // ═══════════════════════════════════════════════════════════
  // This ledger begins empty. When you receive your first donation or spend
  // your first dollar, add it here. Every entry is a sacred witness.
  // ═══════════════════════════════════════════════════════════
  entries: [
    // EXAMPLE — remove the // below and fill in your real data:
    // {
    //   id: '1',
    //   date: '2025-07-30',
    //   type: 'inflow',
    //   category: 'Sovereign Supporter',
    //   amount: 50,
    //   description: 'First sacred offering to the Heartlight Collective',
    //   rayColor: '#ff0099',
    // },
  ],
  transparencyNote:
    'This ledger was established on July 30, 2025. It is a living, sacred document. Every entry is stewarded with intention for our Heartlight\'s Greatest \u0026 Highest Good. If you feel called to contribute, use the Relay payment link on the Heartlight Collective page.',
};
