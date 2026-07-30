import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Suspense, lazy } from 'react';
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
        <Route path="/connect" element={<Connect />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <StarField />
      <div className="min-h-screen flex flex-col bg-[#0a0515]">
        <Header />
        <Suspense fallback={
          <main className="flex-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[#fad144]/30 border-t-[#fad144] animate-spin" />
          </main>
        }>
          <AnimatedRoutes />
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
