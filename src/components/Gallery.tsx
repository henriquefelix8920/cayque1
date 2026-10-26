import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Camera, Pause, Play } from 'lucide-react';

const photos = [
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/cayque1.PNG', alt: 'Cayque Gomes — retrato 1' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/cayque2.jpeg', alt: 'Cayque Gomes — retrato 2' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/cayque3.JPEG', alt: 'Cayque Gomes — retrato 3' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque4.JPEG', alt: 'Cayque Gomes — retrato 4' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque5.JPEG', alt: 'Cayque Gomes — retrato 5' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque6.JPEG', alt: 'Cayque Gomes — retrato 6' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque7.JPEG', alt: 'Cayque Gomes — retrato 7' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque8.JPEG', alt: 'Cayque Gomes — retrato 8' },
  { src: 'https://raw.githubusercontent.com/henriquefelix8920/cayque1/main/dist/assets/cayque9.JPEG', alt: 'Cayque Gomes — retrato 9' },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = () => setCurrent((index) => (index + 1) % photos.length);
  const previous = () => setCurrent((index) => (index - 1 + photos.length) % photos.length);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % photos.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [playing]);

  return (
    <section id="galeria" className="gallery-section relative isolate overflow-hidden py-20 md:py-28">
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

        <div className="gallery-carousel" aria-roledescription="carrossel" aria-label="Fotos de Cayque Gomes">
          <div className="gallery-carousel-frame">
            <img
              key={photos[current].src}
              className="gallery-carousel-image"
              src={photos[current].src}
              alt={photos[current].alt}
              loading={current === 0 ? 'eager' : 'lazy'}
              decoding="async"
              fetchPriority={current === 0 ? 'high' : 'auto'}
            />
            <span className="gallery-carousel-shade" aria-hidden="true" />
            <span className="gallery-carousel-number">0{current + 1} <span>/ 09</span></span>
            <button className="gallery-carousel-arrow gallery-carousel-prev" type="button" onClick={previous} aria-label="Foto anterior">
              <ArrowLeft size={21} />
            </button>
            <button className="gallery-carousel-arrow gallery-carousel-next" type="button" onClick={next} aria-label="Próxima foto">
              <ArrowRight size={21} />
            </button>
          </div>

          <div className="gallery-carousel-controls">
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
            <button
              className="gallery-carousel-play"
              type="button"
              onClick={() => setPlaying((value) => !value)}
              aria-label={playing ? 'Pausar carrossel' : 'Retomar carrossel'}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
              <span>{playing ? 'Pausar' : 'Reproduzir'}</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/35">
          <Camera size={15} className="text-brand-pink" /> 09 registros · carrossel automático
        </div>
      </div>
    </section>
  );
}
