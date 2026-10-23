import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Hand, Waves, Palette, Repeat, ArrowRight } from 'lucide-react';

const chapters = [
  { icon: Hand, title: 'Levada real', description: 'Entenda como a mão constrói o groove, sem atalhos.', tag: 'mão + groove' },
  { icon: Waves, title: 'Variações rítmicas', description: 'Mude a levada sem perder a identidade da música.', tag: 'tempo + dinâmica' },
  { icon: Palette, title: 'Timbres & sonoridades', description: 'Encontre o som que faz a guitarra ter personalidade.', tag: 'som + identidade' },
  { icon: Repeat, title: 'Acordes aplicados', description: 'Entenda como os acordes funcionam no piseiro e no arrocha.', tag: 'harmonia + prática' },
];

const Method = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const chapterY = [
    useTransform(scrollYProgress, [0, 1], [18, -12]),
    useTransform(scrollYProgress, [0, 1], [-10, 16]),
    useTransform(scrollYProgress, [0, 1], [14, -18]),
    useTransform(scrollYProgress, [0, 1], [-14, 12]),
  ];

  return <section id="metodo" ref={sectionRef} className="method-cinema relative overflow-hidden py-24 lg:py-36">
    <motion.div style={{ y: imageY, scale: imageScale, backgroundImage: "url('/assets/foto2.jpg')" }} className="absolute inset-[-7%] -z-20 bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,6,12,.96)_0%,rgba(8,6,12,.72)_42%,rgba(8,6,12,.28)_100%)]" aria-hidden="true" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#08060c_0%,rgba(8,6,12,.18)_25%,rgba(8,6,12,.62)_57%,#08060c_100%)]" aria-hidden="true" /><div className="method-cinema-noise" aria-hidden="true" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 34 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8 }} className="method-opening max-w-5xl">
        <span className="eyebrow">Ato II — O método</span>
        <h2 className="animated-title mt-6 max-w-5xl font-display text-[clamp(3.2rem,8vw,8.2rem)] font-extrabold leading-[.86] tracking-[-.08em]" aria-label="Não é só tocar. É entender a levada."><span className="animated-title-line"><motion.span initial={{ y: '110%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: .85, delay: .12, ease: [0.22, 1, 0.36, 1] }}>Não é só tocar.</motion.span></span><span className="animated-title-line text-brand-pink text-glow-pink"><motion.span initial={{ y: '110%' }} animate={isInView ? { y: 0 } : {}} transition={{ duration: .85, delay: .24, ease: [0.22, 1, 0.36, 1] }}>É entender a levada.</motion.span></span></h2>
        <p className="mt-8 max-w-lg text-base leading-7 text-white/75 md:text-lg">Do movimento da mão ao som que faz a música acontecer.</p>
      </motion.div>

      <div className="method-chapters mt-24 lg:mt-36">{chapters.map((chapter, index) => { const Icon = chapter.icon; return <motion.article key={chapter.title} style={{ y: chapterY[index] }} initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .75, delay: .15 + index * .12 }} className={`method-chapter method-chapter-${index + 1}`}><div className="method-chapter-index"><span className="method-chapter-index-line" /></div><div className="method-chapter-copy"><div className="flex items-center gap-3 text-brand-pink"><Icon size={19} strokeWidth={1.6} /><span className="font-mono text-[10px] uppercase tracking-[.24em] text-white/50">{chapter.tag}</span></div><h3 className="mt-5 font-display text-3xl font-bold tracking-[-.05em] text-white md:text-5xl">{chapter.title}</h3><p className="mt-4 max-w-md text-sm leading-6 text-white/70 md:text-base">{chapter.description}</p></div><div className="method-chapter-mark" aria-hidden="true"><span /><span /><span /></div></motion.article>; })}</div>

      <motion.a initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .9, duration: .7 }} href="#curso" className="method-cinema-cta mt-20 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-white/80 transition-colors hover:text-brand-pink md:mt-28">Ver como isso vira aula <ArrowRight size={17} /></motion.a>
    </div>
  </section>;
};

export default Method;
