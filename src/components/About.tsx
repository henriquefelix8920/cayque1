import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Guitar, Mic2, Headphones, Users, ArrowUpRight } from 'lucide-react';

const scenes = [
  { icon: Guitar, title: 'No palco', description: 'A primeira levada nasce onde a música precisa acontecer de verdade.' },
  { icon: Mic2, title: 'No ensaio', description: 'Tempo, pressão e presença para tocar junto sem perder o pulso.' },
  { icon: Headphones, title: 'No estúdio', description: 'Timbre, detalhe e intenção até o som chegar com personalidade.' },
  { icon: Users, title: 'Na comunidade', description: 'Prática compartilhada para transformar segurança em linguagem própria.' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const sceneY = [
    useTransform(scrollYProgress, [0, 1], [8, -6]),
    useTransform(scrollYProgress, [0, 1], [-5, 8]),
    useTransform(scrollYProgress, [0, 1], [7, -5]),
    useTransform(scrollYProgress, [0, 1], [-6, 7]),
  ];

  return <section id="sobre" ref={sectionRef} className="about-cinema relative isolate overflow-hidden py-24 lg:py-36">
    <motion.div style={{ y: imageY, backgroundImage: "url('/assets/foto1.webp')" }} className="absolute inset-[-5%] -z-20 bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,6,12,.98)_8%,rgba(8,6,12,.82)_44%,rgba(8,6,12,.3)_100%)]" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#08060c_0%,transparent_18%,rgba(8,6,12,.94)_92%,#08060c_100%)]" /><div className="about-cinema-line" aria-hidden="true" />
    <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:px-10">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }}>
        <span className="eyebrow">Ato I — O músico</span>
        <h2 className="animated-title mt-6 max-w-xl font-display text-4xl font-extrabold leading-[.92] tracking-[-.065em] md:text-6xl" aria-label="Quem coloca a mão na guitarra de verdade."><span className="animated-title-line"><motion.span initial={{ y: '110%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: .8, delay: .12, ease: [0.22, 1, 0.36, 1] }}>Quem coloca a mão</motion.span></span><span className="animated-title-line text-white/50"><motion.span initial={{ y: '110%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: .8, delay: .24, ease: [0.22, 1, 0.36, 1] }}>na guitarra de verdade.</motion.span></span></h2>
        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-white/70 md:text-lg"><p><strong className="text-white">Cayque Gomes</strong> aprendeu no palco — no som alto, no aperto antes do show e na pressão de acertar a levada na hora certa.</p><p>O curso leva para o ensino aquilo que nenhum tutorial genérico entrega: <span className="text-brand-pink">como a mão realmente funciona</span> quando o bumbo marca e o trio inteiro está na sua frente.</p></div>
        <div className="mt-9 border-l border-brand-pink/70 pl-5"><p className="font-display text-xl italic text-white/90">“Eu ensino o que eu faço. Se funciona no show, funciona pra você.”</p><span className="mt-3 block text-xs uppercase tracking-[.22em] text-white/45">— Cayque Gomes</span></div>
      </motion.div>

      <div className="about-scenes"><div className="mb-7 flex items-end justify-between gap-4"><span className="eyebrow">A mão no instrumento</span><span className="hidden text-right text-[10px] uppercase tracking-[.22em] text-white/40 sm:block">é onde tudo<br />acontece</span></div><div className="scene-list">{scenes.map((scene, index) => { const Icon = scene.icon; return <motion.div key={scene.title} style={{ y: sceneY[index] }} initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .65, delay: .2 + index * .1 }} className="scene-line group"><div className="scene-line-icon"><Icon size={20} /></div><div className="min-w-0 flex-1"><h3 className="font-display text-2xl font-bold tracking-[-.045em] text-white">{scene.title}</h3><p className="mt-1 max-w-md text-sm leading-6 text-white/55">{scene.description}</p></div><ArrowUpRight size={17} className="shrink-0 text-white/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-pink" /></motion.div>; })}</div></div>
    </div>
  </section>;
};

export default About;
