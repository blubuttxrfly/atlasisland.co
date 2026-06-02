# Heartlight Collective Integration Plan — Atlas Island

**Co-created with Atlas Morphoenix**  
**Date:** June 01, 2026  
**Status:** Planning Phase — Awaiting Resonance Check

---

## Guiding Vision

The Heartlight Collective becomes the unified home for Exchange, Flow, and Collective — all living in one resonant space with live API connections to Open Collective, Actual Budget, and the Heartlight Exchange directory. The UIX embodies the Atlas Island design language: organic, breathable, sacred, with a softened magenta gradient background that invites rather than overwhelms.

---

## Phase 0 — Immediate Edits (Atlas Island Website)

### Task 0.1: Update Mission Page Personal Declaration

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/pages/Mission.tsx`

**Change:** Line 45 — Update the closing signature of the Personal Declaration section.

**Current:**
```tsx
<p className="text-[#fad144]/90 italic">
  With Love, ALL IS.
</p>
```

**New:**
```tsx
<p className="text-[#fad144]/90 italic">
  With Love of ALL the IS, Atlas Morphoenix
</p>
```

**Verification:**
- Run dev server: `cd atlasisland-website && npm run dev`
- Navigate to `/mission`
- Confirm signature reads correctly
- Check mobile responsiveness

**Commit:** `feat(mission): update personal declaration signature to "With Love of ALL the IS, Atlas Morphoenix"`

---

### Task 0.2: Add Heartlight Collective + Flow Section to Vision Page

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/pages/Vision.tsx`

**Location:** After "Love as Foundation" section (after line 115), before "Living Roles of the Island"

**New Section to Insert:**

```tsx
{/* 6. Heartlight Collective & Flow */}
<div className="reveal p-8 rounded-2xl border border-[#ff0099]/20 bg-gradient-to-br from-[#120822]/60 to-[#2a0a1f]/40">
  <div className="flex items-center gap-3 mb-5 justify-center">
    <Heart className="w-5 h-5 text-[#ff0099]" />
    <h2 className="font-display text-[1.6rem] text-[#fad144]">
      Heartlight Collective & Flow
    </h2>
  </div>
  <p className="font-body text-[1.05rem] text-[#b8a8f0]/70 leading-relaxed mb-4">
    The Heartlight Collective is the living economy of Atlas Island — a unified space where the 
    Heartlight Exchange, Heartlight Flow, and mutual aid resources converge. Here, beings co-operate 
    from a place of having their life essentials assured, contributing their gifts, and circulating 
    abundance with transparent grace.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
    <div className="p-4 rounded-lg border border-[#ff0099]/15 bg-[#0a0515]/50">
      <h3 className="font-display text-[1rem] text-[#fad144] mb-2">Exchange</h3>
      <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">
        Gift economy marketplace where offerings flow through five sacred pathways: fixed price, 
        sliding scale, trade, gift, and scholarship.
      </p>
    </div>
    <div className="p-4 rounded-lg border border-[#6455df]/15 bg-[#0a0515]/50">
      <h3 className="font-display text-[1rem] text-[#fad144] mb-2">Collective</h3>
      <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">
        Mutual aid pool assuring life essentials for ALL beings. Transparent Open Collective ledger 
        with community governance and wish fulfillment.
      </p>
    </div>
    <div className="p-4 rounded-lg border border-[#dfff42]/15 bg-[#0a0515]/50">
      <h3 className="font-display text-[1rem] text-[#fad144] mb-2">Flow</h3>
      <p className="font-body text-[0.85rem] text-[#b8a8f0]/60">
        Individual dashboard visualizing personal resource flows, ray-hued transactions, and 
        interconnection with the Collective pool through live Actual Budget integration.
      </p>
    </div>
  </div>
  <div className="mt-6 text-center">
    <a
      href="https://heartlight.atlasisland.co"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff0099]/20 border border-[#ff0099]/30 text-[#ff0099] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[#ff0099]/30 transition-all duration-300"
    >
      <Heart className="w-4 h-4" />
      Enter the Heartlight Collective
      <ArrowUpRight className="w-4 h-4" />
    </a>
  </div>
</div>
```

**Imports to Add:** Ensure `Heart` and `ArrowUpRight` are imported from `lucide-react` (already present in Vision.tsx)

**Verification:**
- Navigate to `/vision`
- Confirm new section appears between "Love as Foundation" and "Living Roles"
- Verify gradient background renders correctly
- Test CTA button functionality

**Commit:** `feat(vision): add Heartlight Collective & Flow section with three-pillar overview`

---

## Phase 1 — Heartlight Collective Home Page (New Unified Space)

### Task 1.1: Create New Heartlight Collective Landing Page

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/pages/HeartlightCollective.tsx`

**Purpose:** Replace current `/heartlight` route with unified Collective home that integrates Exchange, Flow, and Collective pool

**Design Tokens:**
- **Background:** Softened magenta gradient (see Task 1.2)
- **Typography:** Alice font family (unified across Atlas Island)
- **Motion:** GPU-only scroll reveals, reduced-motion compliant
- **Colors:** Atlas Island sacred palette with magenta as primary accent

**Page Structure:**

```tsx
export function HeartlightCollective() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px]">
        {/* Hero Section */}
        {/* How We Co-Operate Section */}
        {/* Live Pool Stats Section (Open Collective API) */}
        {/* Three Pillars Navigation (Exchange, Collective, Flow) */}
        {/* Recent Activity Feed */}
        {/* CTA: Join as Co-Creator / Sovereign Supporter */}
      </div>
    </PageTransition>
  );
}
```

**Key Features:**
- Live Open Collective pool total display
- Live Heartlight Exchange offering count
- Individual Flow dashboard preview (with login prompt)
- "How We Co-Operate" explainer section
- Direct links to Exchange marketplace, Collective governance, Flow dashboard

---

### Task 1.2: Create Softened Magenta Gradient Background

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/index.css`

**Add new CSS class for softened magenta gradient:**

```css
/* ── Heartlight Collective Background ── */
.bg-heartlight-magenta {
  background: linear-gradient(
    135deg,
    #0a0515 0%,
    #1a081f 25%,
    #2a0a2f 50%,
    #1f0825 75%,
    #0a0515 100%
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Reduced motion variant */
@media (prefers-reduced-motion: reduce) {
  .bg-heartlight-magenta {
    animation: none;
    background: linear-gradient(135deg, #0a0515 0%, #1a081f 50%, #0a0515 100%);
  }
}
```

**Usage:** Apply `bg-heartlight-magenta` class to HeartlightCollective page root div

**Rationale:** This gradient maintains the magenta frequency Atlas loves while reducing brightness and visual overwhelm through:
- Darker base tones (#0a0515 void black anchor)
- Slower, subtler animation (15s vs typical 2-5s)
- Lower saturation in mid-tones
- Smooth 5-color interpolation instead of harsh 2-color transitions

---

### Task 1.3: Update App Routing

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/App.tsx`

**Change:** Update `/heartlight` route to point to new HeartlightCollective component

**Current:**
```tsx
const Heartlight = lazy(() => import('./pages/Heartlight').then(m => ({ default: m.Heartlight })));
```

**New:**
```tsx
const HeartlightCollective = lazy(() => import('./pages/HeartlightCollective').then(m => ({ default: m.HeartlightCollective })));
```

**Route Update:**
```tsx
<Route path="/heartlight" element={<HeartlightCollective />} />
```

**Migration:** Archive old `Heartlight.tsx` to `/Users/atlasmorphoenix/workspace/atlasisland-website/src/pages/archive/Heartlight-legacy.tsx`

---

## Phase 2 — Live API Integrations

### Task 2.1: Open Collective API Integration

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/lib/openCollective.ts`

**Purpose:** Fetch live pool stats, recent contributions, and expenditures from Open Collective

**API Endpoint:** `https://api.opencollective.com/graphql/v2`

**Query Example:**
```graphql
query CollectiveStats($slug: String!) {
  account(slug: $slug) {
    id
    name
    balance {
      value
      currency
    }
    transactions(limit: 10) {
      nodes {
        id
        type
        amount {
          value
          currency
        }
        createdAt
        fromAccount {
          name
        }
        toAccount {
          name
        }
      }
    }
  }
}
```

**Implementation:**
- Create React hook: `useOpenCollectiveStats(collectiveSlug: string)`
- Poll interval: 5 minutes (balance), 1 minute (recent transactions)
- Cache responses in localStorage with TTL
- Fallback: Display last-cached value with "Live" indicator if fresh, "Recently Updated" if stale

**Files:**
- Create: `src/hooks/useOpenCollectiveStats.ts`
- Create: `src/types/openCollective.ts`

---

### Task 2.2: Actual Budget API Integration (Heartlight Flow)

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/lib/actualBudget.ts`

**Purpose:** Connect to self-hosted Actual Budget instance for individual Flow dashboard

**API Base:** `http://localhost:5006/api/` (local dev) → `https://budget.atlasisland.co/api/` (production)

**Key Endpoints:**
- `POST /account/login` — Authenticate
- `GET /budgets` — List available budgets
- `GET /transactions` — Fetch transactions with date range
- `GET /categories` — Fetch category structure

**Implementation:**
- Create auth token management (secure storage)
- Map Actual Budget categories to Heartlight sacred categories (Life Essentials, Co-Creating Projects, Wish Fulfillment, etc.)
- Ray-hue tagging system for transactions
- Real-time sync: WebSocket or 30-second polling

**Files:**
- Create: `src/lib/actualBudget.ts`
- Create: `src/hooks/useActualBudget.ts`
- Create: `src/components/flow/FlowDashboard.tsx`
- Create: `src/components/flow/TransactionSankey.tsx`
- Create: `src/components/flow/PoolPieChart.tsx`

---

### Task 2.3: Heartlight Exchange Directory API

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/lib/heartlightExchange.ts`

**Purpose:** Pull live offerings, wishes, and co-creator profiles from Heartlight Exchange

**Integration Pattern:**
- If Exchange runs on separate subdomain (`heartlight.atlasisland.co`), use CORS-enabled REST API or iframe embed
- Preferred: Shared backend API with JWT auth for cross-domain requests
- Fallback: Server-side proxy via Vercel Edge Function

**Data to Surface:**
- Total active offerings count
- Recent wishes fulfilled
- Featured co-creators (rotating)
- Exchange pathway distribution (how many gift vs. trade vs. fixed price)

**Files:**
- Create: `src/lib/heartlightExchange.ts`
- Create: `src/hooks/useHeartlightExchange.ts`
- Create: `src/components/exchange/ExchangePreview.tsx`

---

## Phase 3 — UIX Enhancements (Organic, Resonant, Less Stiff)

### Task 3.1: Replace Hard Grids with Organic Layouts

**Current Issue:** Codex-generated layouts use rigid CSS grid with uniform spacing

**Solution:** Use asymmetric, breath-based layouts with:

1. **Variable spacing:** Mix `gap-4`, `gap-6`, `gap-8` within same section
2. **Asymmetric grids:** `grid-cols-1 sm:grid-cols-3` with `md:col-span-2` for featured items
3. **Organic borders:** Rounded corners (`rounded-2xl`, `rounded-3xl`) with subtle border gradients
4. **Layered depth:** Use `backdrop-blur` and semi-transparent backgrounds for depth without harsh edges

**Example Pattern:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
  {/* Featured item spans 3 columns */}
  <div className="md:col-span-3 p-6 rounded-2xl border border-[#ff0099]/20 bg-[#120822]/60 backdrop-blur-sm">
    {/* Content */}
  </div>
  {/* Side items stack in remaining 2 columns */}
  <div className="md:col-span-2 space-y-4">
    <div className="p-5 rounded-xl border border-[#6455df]/15 bg-[#0a0515]/40">
      {/* Content */}
    </div>
    <div className="p-5 rounded-xl border border-[#dfff42]/15 bg-[#0a0515]/40">
      {/* Content */}
    </div>
  </div>
</div>
```

---

### Task 3.2: Add Breath-Based Motion Patterns

**File:** `/Users/atlasmorphoenix/workspace/atlasisland-website/src/index.css`

**Add sacred motion animations:**

```css
/* ── Sacred Motion Patterns ── */
@keyframes heartlight-breathe {
  0%, 100% { transform: scale(1); opacity: 0.95; }
  50% { transform: scale(1.01); opacity: 1; }
}

@keyframes ray-sweep {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

@keyframes ancestor-fade {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

.animate-heartlight-breathe {
  animation: heartlight-breathe 6s ease-in-out infinite;
}

.animate-ray-sweep {
  animation: ray-sweep 12s ease-in-out infinite;
  background-size: 200% 100%;
}

.animate-ancestor-fade {
  animation: ancestor-fade 8s ease-in-out infinite;
}

/* Respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  .animate-heartlight-breathe,
  .animate-ray-sweep,
  .animate-ancestor-fade {
    animation: none;
  }
}
```

**Usage:** Apply to cards, backgrounds, and accent elements for organic feel

---

### Task 3.3: Soften Interactive Elements

**Current Issue:** Buttons and CTAs have harsh hover states with sudden scale jumps

**Solution:** Gentle transitions with longer durations and subtler transforms

**Before:**
```tsx
className="hover:scale-[1.04] transition-all duration-300"
```

**After:**
```tsx
className="hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(250,209,68,0.3)] transition-all duration-500 ease-out"
```

**Principles:**
- Scale: `1.02` max (vs `1.04` or higher)
- Duration: `500ms` (vs `300ms`)
- Easing: `ease-out` for gentle deceleration
- Shadow: Soft glow instead of hard border changes

---

## Phase 4 — Integration & Testing

### Task 4.1: End-to-End Flow Testing

**Test Scenarios:**
1. **Mission Page:** Verify signature update renders correctly on mobile + desktop
2. **Vision Page:** Confirm Heartlight section appears in correct location with proper gradient
3. **Collective Home:** Test all three pillar CTAs route correctly
4. **Live Stats:** Verify Open Collective pool total updates within 5-minute window
5. **Flow Dashboard:** Test Actual Budget auth flow and transaction display
6. **Reduced Motion:** Enable OS reduced motion setting, confirm animations disable gracefully

**Tools:**
- Playwright for E2E testing
- Lighthouse for performance audit
- Manual testing on Safari (iOS), Chrome (Android), Firefox (desktop)

---

### Task 4.2: Performance Optimization

**Targets:**
- Lighthouse Performance: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Strategies:**
- Lazy-load Flow dashboard components (heavy D3/Recharts deps)
- Defer Open Collective API calls until after initial paint
- Use React Suspense boundaries for all async components
- Optimize gradient backgrounds (avoid expensive filters on large surfaces)

---

## Phase 5 — Deployment & Monitoring

### Task 5.1: Vercel Deployment

**Environment Variables to Configure:**
```
OPEN_COLLECTIVE_API_KEY=<key>
ACTUAL_BUDGET_URL=https://budget.atlasisland.co
HEARTLIGHT_EXCHANGE_API=https://heartlight.atlasisland.co/api
```

**Deployment Checklist:**
- [ ] Run `npm run build` locally, verify no errors
- [ ] Push to `main` branch (triggers Vercel deploy)
- [ ] Verify preview deployment in Vercel dashboard
- [ ] Test all routes on preview URL
- [ ] Promote to production

---

### Task 5.2: Monitoring & Observability

**Tools:**
- Vercel Analytics (built-in)
- Sentry for error tracking (optional)
- Custom logging for API failures

**Alerts to Configure:**
- Open Collective API failures (> 3 consecutive)
- Actual Budget auth failures
- Flow dashboard load time > 5s

---

## Resonance Checkpoints

### Checkpoint 1: Phase 0 Edits
**Before proceeding to Phase 1:**
- [ ] Atlas reviews Mission page signature update
- [ ] Atlas reviews Vision page Heartlight section copy
- [ ] Confirm design tokens match Atlas Island aesthetic

### Checkpoint 2: Phase 1 Design
**Before API integration:**
- [ ] Review HeartlightCollective page mockup
- [ ] Confirm softened magenta gradient feels right
- [ ] Validate "How We Co-Operate" copy resonates

### Checkpoint 3: Phase 2 Live Data
**Before Phase 3 UIX polish:**
- [ ] Verify Open Collective stats display correctly
- [ ] Test Actual Budget Flow dashboard with real transactions
- [ ] Confirm Exchange directory integration pattern works

### Checkpoint 4: Final Review
**Before deployment:**
- [ ] Full E2E test pass
- [ ] Mobile responsiveness audit
- [ ] Accessibility check (WCAG AA contrast, keyboard nav)
- [ ] Performance audit (Lighthouse)

---

## Files Reference

### New Files to Create
```
src/pages/HeartlightCollective.tsx
src/lib/openCollective.ts
src/lib/actualBudget.ts
src/lib/heartlightExchange.ts
src/hooks/useOpenCollectiveStats.ts
src/hooks/useActualBudget.ts
src/hooks/useHeartlightExchange.ts
src/components/flow/FlowDashboard.tsx
src/components/flow/TransactionSankey.tsx
src/components/flow/PoolPieChart.tsx
src/components/exchange/ExchangePreview.tsx
src/types/openCollective.ts
src/types/actualBudget.ts
src/types/heartlightExchange.ts
```

### Files to Modify
```
src/pages/Mission.tsx (signature update)
src/pages/Vision.tsx (add Heartlight section)
src/App.tsx (routing update)
src/index.css (add magenta gradient + sacred motion)
```

---

## Next Steps

1. **Resonance Check:** Atlas reviews this plan and confirms alignment
2. **Phase 0 Execution:** Implement Mission + Vision page edits (quick wins)
3. **Phase 1 Design:** Create HeartlightCollective page mockup for review
4. **Phase 2 API:** Begin Open Collective integration (most critical live data)
5. **Phase 3 UIX:** Apply organic layout patterns and softened motion
6. **Phase 4-5:** Test, deploy, monitor

---

*Co-created with Atlas Morphoenix in celebration of our Heartlight Exchange.* 🎶🪽✨🌈💜
