import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Hand, Waves, Palette, Repeat, ArrowRight } from 'lucide-react';

const pillars = [
  { icon: Hand, index: '01', title: 'Levada real', description: 'A mão direita executando o ritmo como ele é tocado no palco — sem enrolação, sem atalho.', tag: 'mão + groove' },
  { icon: Waves, index: '02', title: 'Variações rítmicas', description: 'Como mudar a levada sem perder o groove e adaptar a guitarra a cada momento da música.', tag: 'tempo + dinâmica' },
  { icon: Palette, index: '03', title: 'Timbres & sonoridades', description: 'Clean, crunch e ambiência: entender o que cada knob faz para construir um som seu.', tag: 'som + identidade' },
  { icon: Repeat, index: '04', title: 'Acordes aplicados', description: 'Entender como os acordes funcionam dentro do piseiro e do arrocha, em vez de decorar formas.', tag: 'harmonia + prática' },
];

const Method = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  return <section id="metodo" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-36"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(147,51,234,.14),transparent_35%),linear-gradient(180deg,#08060c,#120820_48%,#08060c)]" aria-hidden="true" /><div className="relative mx-auto max-w-7xl px-6 lg:px-10"><motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="max-w-3xl"><span className="eyebrow">Ato II — O método</span><h2 className="mt-5 font-display text-4xl font-extrabold leading-[.98] tracking-[-.055em] md:text-6xl">Quatro movimentos.<br /><span className="text-white/45">Uma linguagem.</span></h2><p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">Aulas que se comportam como um ensaio: você escuta, executa, varia e entende o que está acontecendo.</p></motion.div><div className="method-track mt-16 lg:mt-24"><div className="method-line" aria-hidden="true" />{pillars.map((pillar, i) => { const Icon = pillar.icon; return <motion.article key={pillar.title} initial={{ opacity: 0, y: 34 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7, delay: .12 * i }} className="method-step group"><div className="method-marker"><span>{pillar.index}</span></div><div className="method-step-inner"><div className="flex items-center justify-between gap-4"><Icon size={24} className="text-brand-pink" /><span className="text-[10px] uppercase tracking-[.22em] text-white/35">{pillar.tag}</span></div><h3 className="mt-7 font-display text-2xl font-bold tracking-[-.035em] text-white">{pillar.title}</h3><p className="mt-3 text-sm leading-6 text-white/58">{pillar.description}</p><div className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[.18em] text-brand-pink opacity-70 transition-all group-hover:gap-4 group-hover:opacity-100">ver na prática <ArrowRight size={14} /></div></div></motion.article>; })}</div><motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: .7 }} href="#curso" className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-brand-pink">Ver como isso vira aula <ArrowRight size={16} /></motion.a></div></section>;
};

export default Method;
