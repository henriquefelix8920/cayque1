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
import CreatorSocials from './components/CreatorSocials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import FloatingCourseButton from './components/FloatingCourseButton';

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


  // Transições 2.5D entre os painéis: progresso contínuo e reversível pelo scroll.
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('#root > div');
    if (!root) return;

    const sections = Array.from(root.children).filter(
      (element): element is HTMLElement => element instanceof HTMLElement && element.tagName === 'SECTION'
    );
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compactScreen = window.matchMedia('(max-width: 700px)');
    let frame = 0;

    sections.forEach((section, index) => {
      section.classList.add('cinematic-scene');
      if (index > 0) section.dataset.motionDirection = index % 2 === 1 ? 'depth' : 'drop';
    });

    const clearSceneStyles = () => {
      sections.forEach((section) => {
        section.style.removeProperty('transform');
        section.style.removeProperty('opacity');
        section.style.removeProperty('z-index');
        section.style.removeProperty('will-change');
      });
    };

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const updateScenes = () => {
      if (reducedMotion.matches || compactScreen.matches) {
        clearSceneStyles();
        return;
      }

      const viewportHeight = window.innerHeight || 1;
      const intensity = window.innerWidth <= 1024 ? 0.68 : 1;

      sections.forEach((section, index) => {
        if (index === 0) return; // O hero já possui sua própria sequência de movimento.
        const rect = section.getBoundingClientRect();
        if (rect.bottom < -viewportHeight * 0.2 || rect.top > viewportHeight * 1.2) {
          section.style.removeProperty('transform');
          section.style.removeProperty('opacity');
          section.style.removeProperty('z-index');
          section.style.removeProperty('will-change');
          return;
        }

        const centerDelta = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const distance = Math.min(Math.abs(centerDelta) / 0.9, 1);
        const focus = 1 - distance;
        const isDepth = section.dataset.motionDirection === 'depth';
        let scale: number;
        let translateY: number;
        let translateZ: number;
        let rotateX: number;
        let opacity: number;

        if (isDepth) {
          scale = 1 - (1 - focus) * 0.12 * intensity;
          translateY = clamp(centerDelta * 28 * intensity, -28 * intensity, 28 * intensity);
          translateZ = -112 * (1 - focus) * intensity;
          rotateX = clamp(centerDelta * 5 * intensity, -5 * intensity, 5 * intensity);
          opacity = 0.72 + focus * 0.28;
        } else {
          scale = 1 - (1 - focus) * 0.045 * intensity;
          translateY = clamp(-centerDelta * 66 * intensity, -58 * intensity, 58 * intensity);
          translateZ = -26 * (1 - focus) * intensity;
          rotateX = clamp(-centerDelta * 2.4 * intensity, -2.4 * intensity, 2.4 * intensity);
          opacity = 0.8 + focus * 0.2;
        }

        section.style.transform = 'perspective(1400px) translate3d(0, ' + translateY + 'px, ' + translateZ + 'px) rotateX(' + rotateX + 'deg) scale(' + scale + ')';
        section.style.opacity = String(opacity);
        section.style.zIndex = String(2 + Math.round(focus * 6));
        section.style.willChange = 'transform, opacity';
      });
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateScenes();
      });
    };

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    reducedMotion.addEventListener('change', scheduleUpdate);
    compactScreen.addEventListener('change', scheduleUpdate);
    updateScenes();

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', scheduleUpdate);
      compactScreen.removeEventListener('change', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      clearSceneStyles();
    };
  }, []);

  // Revelações em títulos, textos e ícones, com fallback totalmente visível sem JS/Observer.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;

    const root = document.querySelector<HTMLElement>('#root');
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(
      'section:not(#inicio) h2, section:not(#inicio) h3, section:not(#inicio) h4, section:not(#inicio) .eyebrow, section:not(#inicio) p, section:not(#inicio) li, section:not(#inicio) svg'
    ));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -36px 0px' });

    targets.forEach((target, index) => {
      target.classList.add('scroll-reveal-target');
      target.style.setProperty('--reveal-delay', String((index % 4) * 55) + 'ms');
      observer.observe(target);
    });

    return () => observer.disconnect();
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
      <CreatorSocials />
      <CTA />
      <Footer />
      <FloatingCourseButton />
    </div>
  );
}

export default App;
