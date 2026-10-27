import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Method from './components/Method';
import Course from './components/Course';
import Testimonials from './components/Testimonials';
import SocialPlatforms from './components/SocialPlatforms';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-black text-brand-white overflow-x-hidden">
      <GrainOverlay />
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-pink to-brand-purple z-[100] origin-left"
        style={{ scaleX: smoothProgress }}
      />
      <Navigation />
      <Hero />
      <About />
      <Method />
      <Course />
      <Testimonials />
      <SocialPlatforms />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
