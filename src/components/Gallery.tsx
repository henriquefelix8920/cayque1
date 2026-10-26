import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, Shuffle, X } from 'lucide-react';

/* ═══════════════════════════════════════════
   📸 GALERIA — Bastidores de Cayque Gomes
   9 fotos (cayque1 → cayque9) exibidas em
   ordem ALEATÓRIA (shuffle Fisher–Yates),
   re-embaralhadas a cada visita da seção.

   Interatividade:
   - Hover/tap nas fotos → zoom + legenda
   - Clique → lightbox com navegação
     (setas, teclado ←/→/Esc, autoplay opcional)
   - Botão "Embaralhar" → nova ordem aleatória
   ═══════════════════════════════════════════ */

const galleryPhotos = [
  { src: '/assets/cayque1.PNG', label: 'Cayque Gomes — registro 01' },
  { src: '/assets/cayque2.jpeg', label: 'Cayque Gomes — registro 02' },
  { src: '/assets/cayque3.JPEG', label: 'Cayque Gomes — registro 03' },
  { src: '/assets/cayque4.JPEG', label: 'Cayque Gomes — registro 04' },
  { src: '/assets/cayque5.jpg', label: 'Cayque Gomes — registro 05' },
  { src: '/assets/cayque6.jpg', label: 'Cayque Gomes — registro 06' },
  { src: '/assets/cayque7.jpg', label: 'Cayque Gomes — registro 07' },
  { src: '/assets/cayque8.jpg', label: 'Cayque Gomes — registro 08' },
  { src: '/assets/cayque9.jpg', label: 'Cayque Gomes — registro 09' },
];

/** Embaralhamento Fisher–Yates */
const shuffle = <T,>(arr: T[]): T[] => {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Ordem aleatória das fotos (garante que a primeira ≠ última embaralhada anterior)
  const getFreshOrder = useCallback((prev?: number[]) => {
    let next = shuffle(galleryPhotos.map((_, i) => i));
    if (prev && prev.length === next.length && next[0] === prev[0]) {
      next = shuffle(next);
    }
    return next;
  }, []);

  const [order, setOrder] = useState<number[]>(() => getFreshOrder());
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(false);

  // Re-embaralha quando a seção entra na tela (fotos sempre em ordem aleatória)
  useEffect(() => {
    if (isInView) setOrder((prev) => getFreshOrder(prev));
  }, [isInView, getFreshOrder]);

  const orderedPhotos = useMemo(
    () => order.map((i) => galleryPhotos[i]),
    [order]
  );

  // Lightbox: navegação por teclado
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight')
        setLightboxIndex((p) => (p === null ? p : (p + 1) % orderedPhotos.length));
      if (e.key === 'ArrowLeft')
        setLightboxIndex((p) =>
          p === null ? p : (p - 1 + orderedPhotos.length) % orderedPhotos.length
        );
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, orderedPhotos.length]);

  // Lightbox: autoplay alternando as fotos
  useEffect(() => {
    if (!autoplay || lightboxIndex === null) return;
    const id = setInterval(
      () => setLightboxIndex((p) => (p === null ? p : (p + 1) % orderedPhotos.length)),
      3500
    );
    return () => clearInterval(id);
  }, [autoplay, lightboxIndex, orderedPhotos.length]);

  // Trava o scroll do body com o lightbox aberto
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const reshuffle = () => setOrder((prev) => getFreshOrder(prev));

  return (
    <section
      id="galeria"
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
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-20"
        >
          <div>
            <span className="eyebrow mb-4">
              <Camera size={14} />
              <span>Bastidores</span>
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
              Do palco pro<br />
              <span className="text-brand-pink text-glow-pink">registro.</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={reshuffle}
            className="ghost-cta self-start md:self-auto"
            aria-label="Embaralhar as fotos da galeria"
          >
            <Shuffle size={16} /> Embaralhar
          </motion.button>
        </motion.div>

        {/* Grid aleatório — layout estilo mosaico cinematográfico */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 auto-rows-[minmax(160px,24vw)]">
          <AnimatePresence mode="popLayout">
            {orderedPhotos.map((photo, pos) => {
              const isLarge = pos === 0 || pos === 4 || pos === 8;
              const isTall = pos === 2 || pos === 6;
              return (
                <motion.button
                  key={photo.src}
                  layout
                  layoutId={photo.src}
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    duration: 0.55,
                    delay: pos * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                    layout: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  }}
                  onClick={() => setLightboxIndex(pos)}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-brand-pink/40 transition-colors duration-500 cursor-zoom-in focus-visible:outline-brand-pink ${
                    isLarge ? 'col-span-2 row-span-2' : isTall ? 'row-span-2' : ''
                  }`}
                  aria-label={`Abrir foto: ${photo.label}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Véu cinematográfico */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/85 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  {/* Legenda no hover/tap */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 transition-all duration-500">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brand-pink">
                      Cena {String(pos + 1).padStart(2, '0')} / 09
                    </span>
                    <p className="font-display font-semibold text-sm md:text-base text-white mt-1 truncate">
                      {photo.label}
                    </p>
                  </div>
                  {/* Brilho na borda ao hover */}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-brand-pink/25 transition-all duration-500 pointer-events-none" />
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        <p className="mt-8 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-brand-gray/50">
          Ordem aleatória — clique numa foto pra abrir · ← → navegam · Esc fecha
        </p>
      </div>

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualização ampliada da galeria"
          >
            {/* Fechar */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              className="absolute top-5 right-5 md:top-8 md:right-8 grid place-items-center w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-brand-pink/60 hover:bg-brand-pink/10 transition-all"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(
                  (p) => (p! - 1 + orderedPhotos.length) % orderedPhotos.length
                );
              }}
              className="absolute left-3 md:left-8 z-10 grid place-items-center w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-brand-pink/60 hover:bg-brand-pink/10 transition-all"
              aria-label="Foto anterior"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Próxima */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((p) => (p! + 1) % orderedPhotos.length);
              }}
              className="absolute right-3 md:right-8 z-10 grid place-items-center w-11 h-11 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-brand-pink/60 hover:bg-brand-pink/10 transition-all"
              aria-label="Próxima foto"
            >
              <ChevronRight size={22} />
            </button>

            {/* Foto */}
            <motion.figure
              key={orderedPhotos[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl max-h-full flex flex-col items-center"
            >
              <img
                src={orderedPhotos[lightboxIndex].src}
                alt={orderedPhotos[lightboxIndex].label}
                className="max-h-[78vh] w-auto rounded-xl shadow-[0_0_80px_rgba(255,45,123,.18)] object-contain"
              />
              <figcaption className="mt-5 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.25em] text-brand-gray">
                <span className="text-brand-pink">
                  {String(lightboxIndex + 1).padStart(2, '0')} / 09
                </span>
                <span>{orderedPhotos[lightboxIndex].label}</span>
              </figcaption>
            </motion.figure>

            {/* Autoplay toggle */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setAutoplay((a) => !a);
              }}
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] transition-all ${
                autoplay
                  ? 'border-brand-pink/60 bg-brand-pink/15 text-brand-pink'
                  : 'border-white/15 text-white/50 hover:text-white'
              }`}
              aria-label={autoplay ? 'Pausar apresentação automática' : 'Iniciar apresentação automática'}
            >
              <Shuffle size={12} />
              {autoplay ? 'Apresentação ativa' : 'Apresentação automática'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
