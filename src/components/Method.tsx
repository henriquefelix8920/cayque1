import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Hand, Waves, Palette, Repeat, ArrowRight } from 'lucide-react';

const pillars = [
  { icon: Hand, title: 'Levada real', description: 'A mão direita executando o ritmo como ele é tocado no palco — sem enrolação, sem atalho.', tag: 'mão + groove' },
  { icon: Waves, title: 'Variações rítmicas', description: 'Como mudar a levada sem perder o groove e adaptar a guitarra a cada momento da música.', tag: 'tempo + dinâmica' },
  { icon: Palette, title: 'Timbres & sonoridades', description: 'Clean, crunch e ambiência: entender o que cada knob faz para construir um som seu.', tag: 'som + identidade' },
  { icon: Repeat, title: 'Acordes aplicados', description: 'Entender como os acordes funcionam dentro do piseiro e do arrocha, em vez de decorar formas.', tag: 'harmonia + prática' },
];

const Method = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const panelY = [
    useTransform(scrollYProgress, [0, 1], [10, -8]),
    useTransform(scrollYProgress, [0, 1], [-6, 12]),
    useTransform(scrollYProgress, [0, 1], [9, -10]),
    useTransform(scrollYProgress, [0, 1], [-8, 10]),
  ];

  return <section id="metodo" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-36">
    <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ['-3%', '3%']), backgroundImage: "url('/assets/foto2.jpg')" }} className="absolute inset-[-5%] -z-20 bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,6,12,.96)_0%,rgba(8,6,12,.72)_48%,rgba(8,6,12,.9)_100%)]" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#08060c_0%,rgba(8,6,12,.2)_24%,rgba(18,8,32,.82)_58%,#08060c_100%)]" />
    <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="max-w-3xl"><span className="eyebrow">Ato II — O método</span><h2 className="mt-5 font-display text-4xl font-extrabold leading-[.98] tracking-[-.055em] md:text-6xl">Quatro movimentos.<br /><span className="text-white/45">Uma linguagem.</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">Aulas que se comportam como um ensaio: você escuta, executa, varia e entende o que está acontecendo.</p></motion.div>
      <div className="method-track mt-16 lg:mt-24"><div className="method-line" aria-hidden="true" />{pillars.map((pillar, i) => { const Icon = pillar.icon; return <motion.article key={pillar.title} style={{ y: panelY[i] }} initial={{ opacity: 0, scale: .96 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: .7, delay: .12 * i }} className="method-step group"><div className="method-marker" aria-hidden="true"><motion.div animate={{ y: [0, -3, 0], rotate: [-4, 4, -4], scale: [1, 1.08, 1] }} transition={{ duration: 2.8 + i * .25, repeat: Infinity, ease: 'easeInOut', delay: i * .18 }}><Icon size={22} strokeWidth={1.8} /></motion.div></div><div className="method-step-inner"><div className="flex items-center justify-end gap-4"><span className="text-[10px] uppercase tracking-[.22em] text-white/35">{pillar.tag}</span></div><h3 className="mt-7 font-display text-2xl font-bold tracking-[-.035em] text-white">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{pillar.description}</p><div className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[.18em] text-brand-pink opacity-70 transition-all group-hover:gap-4 group-hover:opacity-100">ver na prática <ArrowRight size={14} /></div></div></motion.article>; })}</div>
      <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: .7 }} href="#curso" className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-brand-pink">Ver como isso vira aula <ArrowRight size={16} /></motion.a>
    </div>
  </section>;
};

export default Method;
