import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Guitar, Mic2, Headphones, Users, ArrowUpRight } from 'lucide-react';

const stats = [
  { icon: Guitar, value: '10+', label: 'anos nos palcos', accent: 'da primeira levada ao show inteiro' },
  { icon: Mic2, value: '500+', label: 'shows realizados', accent: 'pressão, tempo e presença' },
  { icon: Headphones, value: '200+', label: 'horas em estúdio', accent: 'timbre que chega pronto' },
  { icon: Users, value: '1000+', label: 'alunos na comunidade', accent: 'gente tocando com mais segurança' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  const cardY = [
    useTransform(scrollYProgress, [0, 1], [18, -16]),
    useTransform(scrollYProgress, [0, 1], [-8, 24]),
    useTransform(scrollYProgress, [0, 1], [24, -10]),
    useTransform(scrollYProgress, [0, 1], [-14, 18]),
  ];

  return <section id="sobre" ref={sectionRef} className="relative isolate overflow-hidden py-24 lg:py-36">
    <motion.div style={{ y: imageY, backgroundImage: "url('/assets/foto1.jpg')" }} className="absolute inset-[-5%] -z-20 bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,6,12,.98)_8%,rgba(8,6,12,.82)_44%,rgba(8,6,12,.3)_100%)]" />
    <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#08060c_0%,transparent_18%,rgba(8,6,12,.92)_92%,#08060c_100%)]" />
    <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.82fr_1.18fr] lg:items-end lg:px-10">
      <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: .8 }}>
        <span className="eyebrow">Ato I — O músico</span>
        <h2 className="mt-5 max-w-xl font-display text-4xl font-extrabold leading-[.98] tracking-[-.055em] md:text-6xl">Quem coloca a mão na guitarra de verdade.</h2>
        <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-white/70 md:text-lg"><p><strong className="text-white">Cayque Gomes</strong> aprendeu no palco — no som alto, no aperto antes do show e na pressão de acertar a levada na hora certa.</p><p>O curso leva para o ensino aquilo que nenhum tutorial genérico entrega: <span className="text-brand-pink">como a mão realmente funciona</span> quando o bumbo marca e o trio inteiro está na sua frente.</p></div>
        <div className="mt-9 border-l border-brand-pink/70 pl-5"><p className="font-display text-xl italic text-white/90">“Eu ensino o que eu faço. Se funciona no show, funciona pra você.”</p><span className="mt-3 block text-xs uppercase tracking-[.22em] text-white/45">— Cayque Gomes</span></div>
      </motion.div>
      <div className="relative min-h-[25rem] lg:min-h-[32rem]"><div className="absolute right-0 top-0 max-w-xs text-right text-xs uppercase tracking-[.26em] text-white/45">A mão no instrumento<br />é onde tudo acontece</div><div className="absolute bottom-0 left-0 right-0 grid gap-3 sm:grid-cols-2">
        {stats.map((stat, index) => { const Icon = stat.icon; return <motion.article key={stat.label} style={{ y: cardY[index] }} initial={{ opacity: 0, scale: .96, rotate: index % 2 ? 1.5 : -1.5 }} animate={isInView ? { opacity: 1, scale: 1, rotate: index % 2 ? 1.5 : -1.5 } : {}} transition={{ duration: .65, delay: .15 + index * .1 }} whileHover={{ y: -8, rotate: 0, transition: { duration: .25 } }} className="stat-slab group"><div className="flex items-start justify-between"><Icon size={20} className="text-brand-pink" /><ArrowUpRight size={16} className="text-white/25 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><div className="mt-7 font-display text-4xl font-extrabold tracking-[-.05em] text-white">{stat.value}</div><div className="mt-1 text-sm font-semibold uppercase tracking-[.12em] text-white/80">{stat.label}</div><div className="mt-3 text-xs leading-5 text-white/45">{stat.accent}</div></motion.article>; })}
      </div></div>
    </div>
  </section>;
};

export default About;
