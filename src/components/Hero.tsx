import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Guitar, Users } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const contentOpacity = useTransform(scrollYProgress, [0, .8], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    const section = containerRef.current;
    if (!video || !section) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      const rect = section.getBoundingClientRect();
      if (reducedMotion.matches || document.hidden || rect.bottom <= 0 || rect.top >= window.innerHeight) video.pause();
      else void video.play().catch(() => {});
    };
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting ? syncPlayback() : video.pause(), { threshold: .01 });
    observer.observe(section);
    document.addEventListener('visibilitychange', syncPlayback);
    reducedMotion.addEventListener('change', syncPlayback);
    syncPlayback();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', syncPlayback); reducedMotion.removeEventListener('change', syncPlayback); video.pause(); };
  }, []);

  return <section id="inicio" ref={containerRef} className="hero relative flex min-h-[100svh] items-center overflow-hidden">
    <motion.div style={{ scale: useTransform(scrollYProgress, [0, 1], [1.02, 1.07]) }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/assets/foto1.webp')" }} />
      <video ref={videoRef} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/assets/foto1.webp" aria-hidden="true">
        <source media="(max-width: 767px)" src="/assets/video1-mobile.mp4" type="video/mp4" />
        <source src="/assets/video1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,10,.94)_0%,rgba(5,4,10,.65)_52%,rgba(5,4,10,.38)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,10,.3)_0%,transparent_42%,#08060c_100%)]" />
      <div className="absolute inset-0 bg-violet-700/10 mix-blend-screen" />
    </motion.div>
    <motion.div style={{ scaleX: smoothProgress }} className="absolute top-0 left-0 right-0 z-20 h-[2px] origin-left bg-gradient-to-r from-violet-700 via-fuchsia-400 to-violet-700" />
    <motion.div style={{ opacity: contentOpacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 pb-28 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="eyebrow mb-7"><span>Um lugar para quem vive a música</span></motion.div>
      <motion.h1 style={{ y: titleY }} initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .12 }} className="max-w-5xl font-display text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[.88] tracking-[-.075em]">
        Toque os ritmos<br />que fazem o Brasil<br /><span className="text-violet-300 text-glow-pink">dançar.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .3 }} className="mt-8 max-w-2xl text-base leading-7 text-white/75 md:text-xl md:leading-8">
        Aprenda forró, piseiro, arrocha e corinho de fogo na guitarra, com explicações detalhadas e atuais — junto de quem ensina música há mais de uma década.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .45 }} className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <a href="#ritmos" className="living-cta living-cta-primary group"><span className="living-cta-shine" aria-hidden="true" /><span className="relative z-10 flex items-center gap-2"><Users size={18} /> Conheça a comunidade</span></a>
        <a href="#historia" className="ghost-cta">Conheça minha história <ArrowDown size={16} /></a>
      </motion.div>
      <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[.16em] text-white/60"><span className="flex items-center gap-2"><Guitar size={14} className="text-violet-300" /> Para quem já toca guitarra</span><span>•</span><span>Aprendizado específico por estilo</span></div>
    </motion.div>
  </section>;
};
export default Hero;
