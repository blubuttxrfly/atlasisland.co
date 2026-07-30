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

export const SACRED_LEDGER: SacredLedger = {
  pool: {
    asOfDate: '2025-07-30',
    totalBalance: 1242,
    totalInflows: 3500,
    totalOutflows: 2258,
  },
  entries: [
    {
      id: '1',
      date: '2025-07-15',
      type: 'inflow',
      category: 'Sovereign Supporter',
      amount: 500,
      description: 'Sacred offering from a resonant being toward sanctuary essentials',
      rayColor: '#ff0099',
    },
    {
      id: '2',
      date: '2025-07-10',
      type: 'inflow',
      category: 'Heartlight Exchange',
      amount: 250,
      description: 'Gift economy exchange — energy healing session contribution',
      rayColor: '#3a9b6f',
    },
    {
      id: '3',
      date: '2025-07-05',
      type: 'outflow',
      category: 'Sanctuary Operations',
      amount: 800,
      description: 'Monthly sanctuary space and utilities for Atlas Island gathering',
      rayColor: '#fad144',
    },
    {
      id: '4',
      date: '2025-07-01',
      type: 'inflow',
      category: 'Atlastizen Co-Creator',
      amount: 120,
      description: 'Monthly contribution from a new co-creator joining the Heartlight',
      rayColor: '#dfff42',
    },
    {
      id: '5',
      date: '2025-06-28',
      type: 'outflow',
      category: 'Mutual Aid',
      amount: 600,
      description: 'Emergency support for community member — life essentials assured',
      rayColor: '#6455df',
    },
  ],
  transparencyNote: 'This ledger is a living, sacred document. Every entry is stewarded with intention for our Heartlight\'s Greatest \u0026 Highest Good. If you feel called to contribute or have questions about how abundance flows, reach out through Connect.',
};
