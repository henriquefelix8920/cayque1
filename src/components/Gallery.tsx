import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Pause, Play } from 'lucide-react';

const photos = [
  { src: '/assets/gallery/gallery-01.avif', alt: 'Cayque Gomes no palco, retrato 1' },
  { src: '/assets/gallery/gallery-02.avif', alt: 'Cayque Gomes em um momento de performance, retrato 2' },
  { src: '/assets/gallery/gallery-03.avif', alt: 'Cayque Gomes em close, retrato 3' },
  { src: '/assets/gallery/gallery-04.avif', alt: 'Cayque Gomes nos bastidores, retrato 4' },
  { src: '/assets/gallery/gallery-05.avif', alt: 'Cayque Gomes em apresentação, retrato 5' },
  { src: '/assets/gallery/gallery-06.avif', alt: 'Cayque Gomes em ensaio, retrato 6' },
  { src: '/assets/gallery/gallery-07.avif', alt: 'Cayque Gomes em cena horizontal, retrato 7' },
  { src: '/assets/gallery/gallery-08.avif', alt: 'Cayque Gomes sorrindo, retrato 8' },
  { src: '/assets/gallery/gallery-09.avif', alt: 'Cayque Gomes em retrato vertical, retrato 9' },
];

const wrapIndex = (index: number) => (index + photos.length) % photos.length;

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const currentPhoto = photos[current];
  const progress = useMemo(() => `${String(current + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`, [current]);
  const next = () => setCurrent((index) => wrapIndex(index + 1));
  const previous = () => setCurrent((index) => wrapIndex(index - 1));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { rootMargin: '100px 0px', threshold: 0.01 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    if (!playing || !isVisible || !pageVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(next, 5600);
    return () => window.clearInterval(timer);
  }, [playing, isVisible, pageVisible]);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="gallery-section relative isolate overflow-hidden py-20 md:py-28"
      aria-roledescription="carrossel"
      aria-label="Fotos de Cayque Gomes"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') previous();
        if (event.key === 'ArrowRight') next();
      }}
      tabIndex={0}
    >
      <div className="gallery-glow gallery-glow-a" aria-hidden="true" />
      <div className="gallery-glow gallery-glow-b" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Ato IV — Fora do roteiro</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[.95] tracking-[-.065em] md:text-7xl">
              A música também <span className="text-brand-pink text-glow-pink">é imagem.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55 md:text-base">
            Entre o palco, os bastidores e os momentos que ficam. Um pouco do universo de Cayque, em movimento.
          </p>
        </div>

        <div className="gallery-carousel">
          <div
            className="gallery-carousel-stage"
            onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const distance = event.changedTouches[0].clientX - touchStartX.current;
              if (Math.abs(distance) > 45) (distance > 0 ? previous : next)();
              touchStartX.current = null;
            }}
          >
            <div className="gallery-carousel-frame" aria-live="polite">
              <div className="gallery-carousel-backdrop" style={{ backgroundImage: `url(${currentPhoto.src})` }} aria-hidden="true" />
              <img
                key={currentPhoto.src}
                className="gallery-carousel-image"
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                loading={current === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={current === 0 ? 'high' : 'auto'}
              />
              <span className="gallery-carousel-shade" aria-hidden="true" />
              <div className="gallery-carousel-topline" aria-hidden="true">
                <span>Cayque Gomes · arquivo visual</span>
                <span>{progress}</span>
              </div>
              <div className="gallery-carousel-meta">
                <span className="gallery-carousel-caption">{currentPhoto.alt}</span>
                <span className="gallery-carousel-swipe-hint">deslize para explorar</span>
              </div>
              <button className="gallery-carousel-arrow gallery-carousel-prev" type="button" onClick={previous} aria-label="Foto anterior">
                <ArrowLeft size={19} />
              </button>
              <button className="gallery-carousel-arrow gallery-carousel-next" type="button" onClick={next} aria-label="Próxima foto">
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

          <div className="gallery-carousel-controls">
            <div className="gallery-carousel-timeline" aria-hidden="true">
              <span style={{ width: `${((current + 1) / photos.length) * 100}%` }} />
            </div>
            <div className="gallery-carousel-dots" aria-label="Escolher foto">
              {photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  className={`gallery-carousel-dot ${index === current ? 'is-active' : ''}`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Mostrar foto ${index + 1}`}
                  aria-current={index === current ? 'true' : undefined}
                />
              ))}
            </div>
            <button className="gallery-carousel-play" type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Pausar carrossel' : 'Retomar carrossel'}>
              {playing ? <Pause size={13} /> : <Play size={13} />}
              <span>{playing ? 'Pausar' : 'Reproduzir'}</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/35">
          <Camera size={15} className="text-brand-pink" /> 09 registros · setas, toque ou deslize para navegar
        </div>
      </div>
    </section>
  );
}
