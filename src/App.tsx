import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';
import { Home } from './pages/Home';
import { Mission } from './pages/Mission';
import { Vision } from './pages/Vision';
import { Broadcast } from './pages/Broadcast';
import { Heartlight } from './pages/Heartlight';
import { AtlasOfAll } from './pages/AtlasOfAll';
import { Connect } from './pages/Connect';

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
        <Route path="/heartlight" element={<Heartlight />} />
        <Route path="/connect" element={<Connect />} />
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
        <AnimatedRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
