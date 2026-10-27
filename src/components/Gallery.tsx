import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
  const touchStartX = useRef<number | null>(null);

  const currentPhoto = photos[current];
  const next = () => setCurrent((index) => wrapIndex(index + 1));
  const previous = () => setCurrent((index) => wrapIndex(index - 1));

  return (
    <section
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
              <button className="gallery-carousel-arrow gallery-carousel-prev" type="button" onClick={previous} aria-label="Foto anterior">
                <ArrowLeft size={19} />
              </button>
              <button className="gallery-carousel-arrow gallery-carousel-next" type="button" onClick={next} aria-label="Próxima foto">
                <ArrowRight size={19} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
