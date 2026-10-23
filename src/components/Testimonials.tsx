import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 DEPOIMENTOS — A Comunidade
   "Quem já tá tocando diferente"
   
   Depoimentos em formato cinematográfico,
   como citações de um documentário.
   ═══════════════════════════════════════════ */

const testimonials = [
  {
    name: 'Lucas M.',
    role: 'Guitarrista — Banda de Piseiro',
    text: 'Eu já tocava há anos, mas nunca entendi de verdade como a levada funcionava. Com o Cayque, pela primeira vez senti que minha mão direita tinha propósito.',
  },
  {
    name: 'Rafael S.',
    role: 'Músico profissional',
    text: 'A diferença entre copiar e entender é absurda. Agora eu consigo adaptar qualquer música pro piseiro sem depender de tablatura.',
  },
  {
    name: 'Thiago R.',
    role: 'Guitarrista iniciante',
    text: 'Comecei do zero e em poucas semanas já estava tocando com a banda. O método é direto, sem enrolação, e funciona.',
  },
  {
    name: 'Diego A.',
    role: 'Instrumentista — Forró/Piseiro',
    text: 'O estudo de timbres mudou meu som completamente. Parei de soar genérico e agora tenho identidade no instrumento.',
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="font-mono text-xs text-brand-pink uppercase tracking-[0.3em] mb-4 block">
            A Comunidade
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Quem já tá tocando<br />
            <span className="text-brand-gray/60">diferente.</span>
          </h2>
        </motion.div>

        {/* Grid de depoimentos */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-brand-purple/20 transition-all duration-500 group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-brand-purple/20 mb-4 group-hover:text-brand-purple/40 transition-colors"
              />

              {/* Texto */}
              <p className="text-brand-white/80 text-lg leading-relaxed mb-6 font-light">
                "{testimonial.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center">
                  <span className="font-display font-semibold text-sm text-white">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <div className="font-display font-medium text-sm text-brand-white">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-brand-gray">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
