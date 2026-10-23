import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Music2, Volume2 } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 PRÓLOGO — Hero Cinematográfico
   "A guitarra do piseiro, sem mistério"
   
   Atmosfera: Iluminação de palco, roxo/rosa,
   partículas flutuantes, tipografia impactante
   ═══════════════════════════════════════════ */

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax: título sobe mais rápido que o fundo
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      id="inicio"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-stage"
    >
      {/* Imagem de fundo cinematográfica */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="https://image.qwenlm.ai/generated-images/c39b2f13-60f6-4155-b0a5-afffdd6cf36a/_result.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
      </div>

      {/* Luzes de palco — círculos de luz */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-brand-pink/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple-deep/30 rounded-full blur-[150px]" />
      </div>

      {/* Linhas de equalizador decorativas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 opacity-20 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-gradient-to-t from-brand-purple to-brand-pink rounded-full equalizer-bar"
            style={{
              height: `${Math.random() * 60 + 20}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${1 + Math.random() * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-purple/30 bg-brand-purple/5 backdrop-blur-sm"
        >
          <Music2 size={14} className="text-brand-pink" />
          <span className="text-xs font-mono text-brand-gray uppercase tracking-widest">
            Do palco pro seu instrumento
          </span>
        </motion.div>

        {/* Headline principal */}
        <motion.h1
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-6"
        >
          <span className="block text-brand-white">A guitarra</span>
          <span className="block mt-2">
            <span className="text-glow-pink text-brand-pink">do piseiro</span>
          </span>
          <span className="block mt-2 text-brand-white/80 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
            sem mistério.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-brand-gray leading-relaxed mb-10"
        >
          Levadas, timbres, acordes e variações — aprenda com quem vive o palco, 
          o ensaio e o estúdio. Do jeito que a mão realmente executa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#curso"
            className="group relative px-8 py-4 bg-brand-pink text-white font-display font-semibold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,45,123,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Volume2 size={18} />
              Entrar no curso
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-purple-light opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#metodo"
            className="px-8 py-4 text-brand-white/80 font-display font-medium text-lg border border-white/10 rounded-full hover:border-brand-purple/50 hover:text-brand-white transition-all duration-300"
          >
            Ver o método
          </a>
        </motion.div>

        {/* Preço destaque */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-8 inline-flex items-center gap-2"
        >
          <span className="text-sm text-brand-gray">Acesso completo por</span>
          <span className="text-2xl font-display font-bold text-brand-gold">R$ 97</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-brand-gray/60 uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} className="text-brand-gray/40" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
