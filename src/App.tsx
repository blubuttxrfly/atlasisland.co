import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';

const Home      = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Mission   = lazy(() => import('./pages/Mission').then(m => ({ default: m.Mission })));
const Vision    = lazy(() => import('./pages/Vision').then(m => ({ default: m.Vision })));
const Broadcast = lazy(() => import('./pages/Broadcast').then(m => ({ default: m.Broadcast })));
const HeartlightCollective = lazy(() => import('./pages/HeartlightCollective').then(m => ({ default: m.HeartlightCollective })));
const AtlasOfAll = lazy(() => import('./pages/AtlasOfAll').then(m => ({ default: m.AtlasOfAll })));
const Ledger    = lazy(() => import('./pages/Ledger').then(m => ({ default: m.Ledger })));
const Codes      = lazy(() => import('./pages/Codes').then(m => ({ default: m.Codes })));
const Connect   = lazy(() => import('./pages/Connect').then(m => ({ default: m.Connect })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/atlas-of-all" element={<AtlasOfAll />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/heartlight" element={<HeartlightCollective />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen flex flex-col bg-atlas-page">
          <div className="bg-aurora" aria-hidden="true" />
          <StarField />

          <div className="relative z-10 flex flex-col min-h-screen">
            <Header />
            <Suspense fallback={
              <main className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-[var(--color-solar-gold)]/30 border-t-[var(--color-solar-gold)] animate-spin" />
              </main>
            }>
              <AnimatedRoutes />
            </Suspense>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
