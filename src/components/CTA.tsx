import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Guitar } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 EPÍLOGO — CTA Final
   "Entre em cena"
   
   Última chamada para ação com impacto
   visual máximo e urgência cinematográfica.
   ═══════════════════════════════════════════ */

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 lg:py-48 overflow-hidden"
    >
      {/* Background com glow intenso */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[180px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-purple/15 rounded-full blur-[150px]" />
      </div>

      <motion.div
        style={{ scale, opacity }}
        className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10"
      >
        {/* Ícone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-8"
        >
          <Guitar size={28} className="text-brand-pink" />
        </motion.div>

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] mb-6"
        >
          Seu lugar é no<br />
          <span className="text-glow-pink text-brand-pink">palco.</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-xl mx-auto text-lg md:text-xl text-brand-gray mb-10"
        >
          Pare de copiar. Comece a entender. Entre no curso e descubra 
          como a guitarra do piseiro funciona de verdade.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-brand-pink text-white font-display font-semibold text-xl rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,45,123,0.4)] hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-3">
              Entrar no curso agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink via-brand-purple-light to-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          <div className="flex items-center gap-4 mt-2">
            <span className="text-3xl font-display font-bold text-brand-gold">R$ 97</span>
            <span className="text-sm text-brand-gray">acesso imediato e vitalício</span>
          </div>
        </motion.div>

        {/* Garantia */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 text-xs text-brand-gray/50"
        >
          Pagamento seguro • Acesso instantâneo • Satisfação garantida
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CTA;
