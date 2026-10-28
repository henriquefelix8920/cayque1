import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, BookOpen, Headphones, Guitar, ArrowRight, Star } from 'lucide-react';

const features = [
  { icon: Guitar, text: 'Levadas de piseiro — passo a passo da mão direita' },
  { icon: Headphones, text: 'Estudo de timbres — como construir seu som' },
  { icon: BookOpen, text: 'Acordes aplicados ao piseiro e arrocha' },
  { icon: Zap, text: 'Variações rítmicas para tocar em tempo real' },
  { icon: Star, text: 'Referências de Silvano Salles, Unha Pintada e mais' },
  { icon: Zap, text: 'Atualizações contínuas com a comunidade' },
];
const bonuses = ['Dicionário de acordes para consulta rápida', 'Aulas de arrocha — padrões e aplicações', 'Material complementar em evolução constante', 'Acesso à comunidade de alunos'];

const Course = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="curso" ref={sectionRef} className="relative overflow-hidden py-24 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(255,45,123,.12),transparent_28%),radial-gradient(circle_at_85%_65%,rgba(107,33,168,.16),transparent_30%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .7 }} className="mb-14 max-w-3xl lg:mb-20"><span className="eyebrow">Ato III — O curso</span><h2 className="mt-5 font-display text-4xl font-extrabold tracking-[-.055em] md:text-6xl">A Comunidade dos Ritmos</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">Uma comunidade para estudar levadas, timbres e acordes com Cayque Gomes — do piseiro ao arrocha, da aula à prática.</p></motion.div>
        <motion.div initial={{ opacity: 0, y: 35 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: .8, delay: .15 }} className="course-panel">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16"><div><h3 className="font-display text-2xl font-bold text-white">O que você recebe</h3><ul className="mt-7 grid gap-4 sm:grid-cols-2">{features.map((feature, i) => { const Icon = feature.icon; return <motion.li key={i} initial={{ opacity: 0, x: -15 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: .25 + i * .06 }} className="flex min-w-0 gap-3 text-sm leading-6 text-white/65"><Check size={17} className="mt-1 shrink-0 text-brand-pink" /><span className="min-w-0">{feature.text}</span><Icon size={14} className="mt-1 shrink-0 text-white/20" /></motion.li>; })}</ul></div>
            <div className="border-t border-white/10 pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><h3 className="font-display text-2xl font-bold text-white">Bônus inclusos</h3><ul className="mt-6 space-y-3">{bonuses.map((bonus) => <li key={bonus} className="flex gap-3 text-sm text-white/60"><Star size={14} className="mt-1 shrink-0 text-brand-gold" />{bonus}</li>)}</ul><div className="purchase-box mt-9"><div className="flex flex-col items-center gap-3 text-center"><div className="price-lockup"><span className="block text-xs uppercase tracking-[.2em] text-white/45">Investimento único</span><div className="mt-2 flex items-baseline justify-center gap-1"><span className="text-sm text-white/50">R$</span><span className="font-display text-6xl font-extrabold tracking-[-.06em] text-white">127</span></div></div><span className="rounded-full border border-brand-gold/30 px-3 py-1 text-xs text-brand-gold">sem mensalidade</span></div><p className="mt-4 text-center text-xs leading-5 text-white/45">Acesso imediato, atualizações contínuas e conteúdo em evolução.</p><a href="#" className="living-cta living-cta-primary mt-7 w-full justify-center text-center"><span className="living-cta-shine" aria-hidden="true" /><span className="relative z-10 flex w-full items-center justify-center"><span>Garantir meu acesso</span><ArrowRight className="absolute right-0" size={18} /></span></a></div></div>
          </div>
        </motion.div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-5 text-white/40">O curso cresce com as dúvidas da comunidade: novas aulas e materiais entram conforme a necessidade de quem está praticando.</p>
      </div>
    </section>
  );
};

export default Course;
