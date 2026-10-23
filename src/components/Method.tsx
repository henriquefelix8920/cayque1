import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Hand, Waves, Palette, Repeat, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 ATO II — O Método
   "Como o aprendizado acontece"
   
   Timeline vertical mostrando os pilares
   do método de ensino prático.
   ═══════════════════════════════════════════ */

const pillars = [
  {
    icon: Hand,
    title: 'Levada Real',
    description: 'A mão direita executando o ritmo como ele é tocado no palco — sem enrolação, sem atalho.',
    color: 'from-brand-purple to-brand-purple-light'
  },
  {
    icon: Waves,
    title: 'Variações Rítmicas',
    description: 'Como mudar a levada sem perder o groove. Adaptação pra cada momento da música.',
    color: 'from-brand-pink to-brand-pink-light'
  },
  {
    icon: Palette,
    title: 'Timbres & Sonoridades',
    description: 'Construção do som do zero — clean, crunch, ambiência. Entender o que cada knob faz.',
    color: 'from-brand-purple-light to-brand-pink'
  },
  {
    icon: Repeat,
    title: 'Acordes Aplicados',
    description: 'Não decorar形状 — entender como os acordes funcionam dentro do piseiro e do arrocha.',
    color: 'from-brand-gold to-brand-pink'
  },
];

const Method = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="metodo"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple-deep/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
          <span className="font-mono text-xs text-brand-pink uppercase tracking-[0.3em] mb-4 block">
            Ato II — O Método
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Quatro pilares.<br />
            <span className="text-brand-gray/60">Uma linguagem.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-gray">
            Não é sobre decorar músicas. É sobre entender a linguagem do piseiro 
            e conseguir tocar qualquer coisa com ela.
          </p>
        </motion.div>

        {/* Grid de pilares */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-purple/30 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient glow no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
              
              {/* Número */}
              <span className="absolute top-6 right-6 font-display font-bold text-6xl text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                0{i + 1}
              </span>

              <pillar.icon
                size={28}
                className="text-brand-pink mb-5 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display font-semibold text-xl lg:text-2xl text-brand-white mb-3">
                {pillar.title}
              </h3>
              <p className="text-brand-gray leading-relaxed">
                {pillar.description}
              </p>

              {/* Linha decorativa */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r ${pillar.color} transition-all duration-700`} />
            </motion.div>
          ))}
        </div>

        {/* CTA intermediário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#curso"
            className="inline-flex items-center gap-2 text-brand-pink hover:text-brand-pink-light transition-colors group"
          >
            <span className="font-display font-medium">Ver como isso se transforma em aulas</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;
