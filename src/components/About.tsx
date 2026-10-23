import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Guitar, Mic2, Headphones, Users } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 ATO I — Quem é Cayque
   "O músico por trás do som"
   
   Revela a trajetória do palco ao ensino,
   mostrando experiência real e autoridade.
   ═══════════════════════════════════════════ */

const stats = [
  { icon: Guitar, value: '10+', label: 'Anos nos palcos' },
  { icon: Mic2, value: '500+', label: 'Shows realizados' },
  { icon: Headphones, value: '200+', label: 'Horas em estúdio' },
  { icon: Users, value: '1000+', label: 'Alunos impactados' },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background decorativo */}
      <motion.div
        style={{ y: bgY }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título da seção */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-24"
        >
          <span className="font-mono text-xs text-brand-pink uppercase tracking-[0.3em] mb-4 block">
            Ato I — O Músico
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
            Quem coloca a mão<br />
            <span className="text-brand-gray/60">na guitarra de verdade.</span>
          </h2>
        </motion.div>

        {/* Grid: Texto + Stats */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6 text-lg text-brand-gray leading-relaxed">
              <p>
                <span className="text-brand-white font-medium">Cayque Gomes</span> não aprendeu 
                guitarra em livro. Aprendiu no palco — no som alto, no aperto antes do show, 
                na pressão de acertar a levada na hora certa.
              </p>
              <p>
                Com anos de estrada tocando piseiro, arrocha e ritmos do Nordeste, ele traz 
                pro ensino aquilo que nenhum tutorial ensina: <span className="text-brand-pink">como a mão realmente funciona</span> quando 
                o bumbo marca e o trio inteiro tá na sua frente.
              </p>
              <p>
                O objetivo não é formar teóricos. É formar músicos que tocam com segurança, 
                entendem o que estão fazendo e conseguem se virar em qualquer palco, ensaio ou gravação.
              </p>
            </div>

            {/* Citação */}
            <div className="mt-10 pl-6 border-l-2 border-brand-pink/50">
              <p className="text-xl font-display italic text-brand-white/90">
                "Eu ensino o que eu faço. Se funciona no show, funciona pra você."
              </p>
              <span className="mt-3 block text-sm text-brand-gray font-mono">
                — Cayque Gomes
              </span>
            </div>
          </motion.div>

          {/* Stats Grid + Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Imagem cinematográfica */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2] border border-white/[0.05]">
              <img
                src="https://image.qwenlm.ai/generated-images/dbf4d546-95c3-4601-85a1-a5faff877a78/_result.png"
                alt="Mãos executando levada na guitarra"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="font-mono text-xs text-brand-pink/80 uppercase tracking-wider">
                  A mão no instrumento — é aqui que tudo acontece
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm hover:border-brand-purple/30 transition-all duration-500 group"
              >
                <stat.icon
                  size={20}
                  className="text-brand-pink/60 mb-3 group-hover:text-brand-pink transition-colors"
                />
                <div className="font-display font-bold text-3xl lg:text-4xl text-brand-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-brand-gray">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
