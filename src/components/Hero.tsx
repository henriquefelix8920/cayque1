import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Music2, Volume2 } from 'lucide-react';

const equalizerBars = [32, 54, 42, 72, 48, 84, 58, 38, 68, 50, 78, 46, 64, 36, 70, 52, 82, 44, 60, 34, 74, 48, 66, 40, 80, 56, 62, 42, 76, 50, 68, 38, 72, 46, 58, 34, 78, 52, 64, 44];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section id="inicio" ref={containerRef} className="hero relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <motion.div style={{ scale: videoScale, backgroundImage: "url('/assets/foto1.jpg')" }} className="absolute inset-0 pointer-events-none bg-cover bg-center" aria-hidden="true">
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/assets/foto1.jpg" aria-hidden="true"><source media="(max-width: 767px)" src="/assets/video1-mobile.mp4" type="video/mp4" /><source src="/assets/video1.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,6,12,.88)_0%,rgba(8,6,12,.46)_48%,rgba(8,6,12,.72)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,12,.38)_0%,transparent_40%,rgba(8,6,12,.96)_100%)]" />
        <div className="absolute inset-0 bg-brand-pink/10 mix-blend-screen" />
      </motion.div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"><div className="stage-light stage-light-one" /><div className="stage-light stage-light-two" /><div className="stage-grid" /></div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 w-full max-w-7xl px-6 pt-20 lg:px-10">
        <div className="max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .2 }} className="eyebrow mb-7"><Music2 size={14} /> <span>Do palco pro seu instrumento</span></motion.div>
          <motion.h1 style={{ y: titleY }} initial={{ opacity: 0, y: 42 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .35, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[.9] tracking-[-.07em]">A guitarra<br /><span className="text-brand-pink text-glow-pink">do piseiro</span><br /><span className="text-white/70 text-[.55em] font-medium tracking-[-.04em]">sem mistério.</span></motion.h1>
          <motion.p style={{ y: subtitleY }} initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .72 }} className="mt-8 max-w-2xl text-base leading-7 text-white/70 md:text-xl md:leading-8">Levadas, timbres, acordes e variações — aprenda com quem vive o palco, o ensaio e o estúdio. Do jeito que a mão realmente executa.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1 }} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><a href="#curso" className="living-cta living-cta-primary group"><span className="living-cta-shine" aria-hidden="true" /><span className="relative z-10 flex items-center gap-2"><Volume2 size={18} /> Entrar no curso</span></a><a href="#metodo" className="ghost-cta">Ver o método <ChevronDown size={16} /></a></motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 flex h-20 items-end justify-center gap-1 px-6 opacity-60" aria-hidden="true">{equalizerBars.map((height, index) => <span key={index} className="equalizer-bar w-[2px] rounded-full bg-gradient-to-t from-brand-pink to-brand-purple-light" style={{ height: `${height}%`, animationDelay: `${index * .06}s` }} />)}</div>
      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-[10px] uppercase tracking-[.28em] text-white/40 md:flex"><span className="h-px w-10 bg-white/25" /> Cena 01 / 05</div>
    </section>
  );
};

export default Hero;
