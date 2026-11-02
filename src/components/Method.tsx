import { motion } from 'framer-motion';
import { Music2, Guitar, AudioLines, Flame } from 'lucide-react';

const rhythms = [
  { icon: Music2, number: '01', name: 'Forró', line: 'Entenda a levada, o balanço e os detalhes que ajudam a guitarra a conversar com o ritmo.' },
  { icon: AudioLines, number: '02', name: 'Piseiro', line: 'Explore a linguagem atual do piseiro, com atenção aos padrões, às variações e à execução.' },
  { icon: Guitar, number: '03', name: 'Arrocha', line: 'Trabalhe a intenção, os acordes e as escolhas que dão identidade à guitarra no arrocha.' },
  { icon: Flame, number: '04', name: 'Corinho de fogo', line: 'Conheça recursos e nuances desse estilo com explicações voltadas para a prática musical.' },
];

const Method = () => <section id="ritmos" className="method-cinema relative overflow-hidden py-24 lg:py-36">
  <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(8,6,12,.96) 0%, rgba(8,6,12,.88) 55%, rgba(8,6,12,.72) 100%), linear-gradient(0deg, rgba(8,6,12,.92), rgba(8,6,12,.45)), url('/assets/foto2.webp')", backgroundPosition: "center", backgroundSize: "cover" }} aria-hidden="true" />
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7 }} className="max-w-4xl">
      <span className="eyebrow">Quatro ritmos. Uma comunidade.</span>
      <h2 className="mt-6 font-display text-[clamp(2.8rem,7vw,6.8rem)] font-extrabold leading-[.9] tracking-[-.075em]">Não fique preso ao básico.<br/><span className="text-violet-300">Entenda o sotaque.</span></h2>
      <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">Não basta decorar uma sequência de notas. A proposta é compreender os detalhes, a intenção e a forma de tocar que fazem cada ritmo soar como ele deve.</p>
    </motion.div>
    <div className="mt-14 grid gap-px border border-violet-300/15 bg-violet-300/15 sm:grid-cols-2">
      {rhythms.map((rhythm, i) => { const Icon = rhythm.icon; return <motion.article key={rhythm.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i * .08 }} className="group min-h-60 bg-[#0c0812] p-7 transition-colors hover:bg-[#160d23] md:p-10">
        <div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[.2em] text-violet-300">{rhythm.number} / RITMO</span><Icon size={23} className="text-violet-300 transition-transform group-hover:scale-110"/></div>
        <h3 className="mt-9 font-display text-3xl font-bold tracking-[-.04em] md:text-4xl">{rhythm.name}</h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/60 md:text-base">{rhythm.line}</p>
      </motion.article>; })}
    </div>
    <p className="mt-8 max-w-2xl text-sm leading-6 text-white/45">E a conversa não precisa parar nesses quatro: a comunidade também abre espaço para outros estilos e para as dúvidas que aparecem na prática.</p>
  </div>
</section>;
export default Method;
