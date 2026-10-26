import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ArrowUpRight, Camera } from 'lucide-react';

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

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const shuffled = useMemo(() => photos.map((photo, index) => ({ ...photo, index, drift: (Math.random() * 2 - 1) * 14, delay: Math.random() * 1.8, duration: 4 + Math.random() * 4, tilt: (Math.random() * 2 - 1) * 3 })), []);
  return (
    <section id="galeria" className="gallery-section relative isolate overflow-hidden py-24 md:py-32">
      <div className="gallery-glow gallery-glow-a" aria-hidden="true" />
      <div className="gallery-glow gallery-glow-b" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .7 }} className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Ato IV — Fora do roteiro</span>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[.95] tracking-[-.065em] md:text-7xl">A música também <span className="text-brand-pink text-glow-pink">é imagem.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/55 md:text-base">Entre o palco, os bastidores e os momentos que ficam. Um pouco do universo de Cayque, em movimento.</p>
        </motion.div>
        <div className="gallery-grid">
          {shuffled.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setSelected(photo.index)}
              aria-label={`Abrir foto ${photo.index + 1} em tamanho ampliado`}
              className={`gallery-photo gallery-photo-${i + 1}`}
              initial={{ opacity: 0, y: 30, rotate: photo.tilt }}
              whileInView={{ opacity: 1, y: 0, rotate: photo.tilt }}
              viewport={{ once: true, amount: .15 }}
              transition={{ duration: .65, delay: (i % 4) * .08 }}
              animate={{ y: [0, photo.drift, 0], rotate: [photo.tilt, photo.tilt * -1, photo.tilt] }}
              whileHover={{ scale: 1.045, rotate: 0, zIndex: 10, transition: { duration: .25 } }}
              whileTap={{ scale: .98 }}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery-photo-index">0{photo.index + 1}</span>
              <span className="gallery-photo-open"><ArrowUpRight size={20} /></span>
            </motion.button>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[.22em] text-white/35"><Camera size={15} className="text-brand-pink" /> 09 registros · movimento aleatório</div>
      </div>
      {selected !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Foto ampliada" onClick={() => setSelected(null)} onKeyDown={(e) => e.key === 'Escape' && setSelected(null)}>
          <button type="button" className="gallery-lightbox-close" aria-label="Fechar imagem" onClick={() => setSelected(null)}><X size={24} /></button>
          <button type="button" className="gallery-lightbox-prev" aria-label="Foto anterior" onClick={(e) => { e.stopPropagation(); setSelected((selected + photos.length - 1) % photos.length); }}>‹</button>
          <img src={photos[selected].src} alt={photos[selected].alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" className="gallery-lightbox-next" aria-label="Próxima foto" onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % photos.length); }}>›</button>
          <span className="gallery-lightbox-count">{String(selected + 1).padStart(2, '0')} / 09</span>
        </div>
      )}
    </section>
  );
};

export default Gallery;
