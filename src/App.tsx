import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import Course from './components/Course';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

/* ═══════════════════════════════════════════
   🎬 CAYQUE GOMES — Site Cinematográfico
   Direção de Arte: Documentário Musical / Road Movie Nordestino
   Atmosfera: Palco, bastidores, iluminação roxa/rosa
   ═══════════════════════════════════════════ */

function App() {
  // Scroll progress para efeitos globais
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Smooth scroll nativo
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white overflow-x-hidden">
      {/* Grain overlay — textura cinematográfica */}
      <GrainOverlay />

      {/* Barra de progresso do scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-pink to-brand-purple z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />

      {/* Navegação */}
      <Navigation />

      {/* ═══ PRÓLOGO — Hero ═══ */}
      <Hero />

      {/* ═══ ATO I — Quem é Cayque ═══ */}
      <About />

      {/* ═══ ATO II — O Método ═══ */}
      <Method />

      {/* ═══ ATO III — O Curso ═══ */}
      <Course />

      {/* ═══ DEPOIMENTOS — A Comunidade ═══ */}
      <Testimonials />

      {/* ═══ GALERIA — Bastidores em fotos ═══ */}
      <Gallery />

      {/* ═══ EPÍLOGO — CTA Final ═══ */}
      <CTA />

      {/* ═══ CRÉDITOS — Footer ═══ */}
      <Footer />
    </div>
  );
}

export default App;
