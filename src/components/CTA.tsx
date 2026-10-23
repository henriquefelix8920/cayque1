import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Guitar } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, .5], [.96, 1]);
  return <section ref={sectionRef} className="relative overflow-hidden py-28 lg:py-44"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(255,45,123,.16),transparent_34%)]" aria-hidden="true" /><motion.div style={{ scale }} className="relative mx-auto max-w-4xl px-6 text-center lg:px-10"><motion.div initial={{ opacity: 0, scale: .6 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ type: 'spring', stiffness: 100, damping: 20 }} className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-brand-pink/30 bg-brand-pink/10"><Guitar size={27} className="text-brand-pink" /></motion.div><motion.h2 initial={{ opacity: 0, y: 25 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .15, duration: .7 }} className="mt-8 font-display text-5xl font-extrabold leading-[.95] tracking-[-.06em] md:text-7xl">Seu lugar é no<br /><span className="text-brand-pink text-glow-pink">palco.</span></motion.h2><motion.p initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .3, duration: .7 }} className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/65 md:text-lg">Pare de copiar. Comece a entender. Entre no curso e descubra como a guitarra do piseiro funciona de verdade.</motion.p><motion.div initial={{ opacity: 0, y: 18 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: .45, duration: .7 }} className="mt-10 flex flex-col items-center gap-4"><a href="#curso" className="living-cta living-cta-primary text-lg"><span className="living-cta-shine" aria-hidden="true" /><span className="relative z-10 flex items-center gap-3">Entrar no curso agora <ArrowRight size={20} /></span></a><div className="flex items-center gap-3"><span className="font-display text-3xl font-extrabold text-brand-gold">R$ 97</span><span className="text-sm text-white/45">acesso imediato e vitalício</span></div></motion.div><p className="mt-8 text-xs text-white/35">Pagamento seguro · Acesso instantâneo · Satisfação garantida</p></motion.div></section>;
};

export default CTA;
