import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap, BookOpen, Headphones, Guitar, ArrowRight, Star } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 ATO III — O Curso
   "Ritmos de Piseiro"
   
   Apresentação do produto com pricing
   cinematográfico e lista de benefícios.
   ═══════════════════════════════════════════ */

const features = [
  { icon: Guitar, text: 'Levadas de piseiro — passo a passo da mão direita' },
  { icon: Headphones, text: 'Estudo de timbres — como construir seu som do zero' },
  { icon: BookOpen, text: 'Acordes aplicados ao contexto do piseiro e arrocha' },
  { icon: Zap, text: 'Variações rítmicas — adaptar a levada em tempo real' },
  { icon: Star, text: 'Referências de Silvano Salles, Unha Pintada e mais' },
  { icon: Zap, text: 'Atualizações contínuas com base nas dúvidas da comunidade' },
];

const bonuses = [
  'Dicionário de acordes para consulta rápida',
  'Aulas de arrocha — padrões e aplicações',
  'Material complementar em evolução constante',
  'Acesso à comunidade de alunos',
];

const Course = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="curso"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="font-mono text-xs text-brand-pink uppercase tracking-[0.3em] mb-4 block">
            Ato III — O Curso
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Ritmos de Piseiro
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-brand-gray">
            O curso que te coloca no palco com a guitarra certa, no ritmo certo, 
            com a mão certa. Sem enrolação.
          </p>
        </motion.div>

        {/* Card principal do curso */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border-gradient-animated p-8 lg:p-12 rounded-3xl">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Coluna esquerda: Conteúdo */}
              <div>
                <h3 className="font-display font-semibold text-2xl text-brand-white mb-6">
                  O que você recebe:
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <Check size={18} className="text-brand-pink mt-0.5 flex-shrink-0" />
                      <span className="text-brand-gray text-sm leading-relaxed">
                        {feature.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Coluna direita: Bônus + Preço */}
              <div>
                <h3 className="font-display font-semibold text-2xl text-brand-white mb-6">
                  Bônus inclusos:
                </h3>
                <ul className="space-y-3 mb-10">
                  {bonuses.map((bonus, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <Star size={14} className="text-brand-gold mt-1 flex-shrink-0" />
                      <span className="text-brand-gray text-sm">
                        {bonus}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Preço */}
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm text-brand-gray">Investimento único</span>
                  </div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-sm text-brand-gray">R$</span>
                    <span className="font-display font-bold text-5xl text-brand-white">97</span>
                  </div>
                  <p className="text-xs text-brand-gray mb-6">
                    Acesso imediato • Atualizações contínuas • Sem mensalidade
                  </p>
                  <a
                    href="#"
                    className="group flex items-center justify-center gap-2 w-full py-4 bg-brand-pink text-white font-display font-semibold text-lg rounded-xl hover:bg-brand-pink-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,45,123,0.3)]"
                  >
                    Garantir meu acesso
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nota sobre atualizações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10 max-w-xl mx-auto"
        >
          <p className="text-sm text-brand-gray/70 italic">
            O curso está em construção contínua — novas aulas e materiais são adicionados 
            conforme as dúvidas e necessidades da comunidade de alunos surgem.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Course;
