import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const testimonials = [
  {
    src: '/assets/depo1.webp',
    width: 828,
    height: 1792,
    alt: 'Comentário de Simon: está aprendendo com Cayque e se identifica com sua visão da música como trabalho.',
  },
  {
    src: '/assets/depo2.webp',
    width: 828,
    height: 283,
    alt: 'Mensagem de um músico que admira Cayque e se inspira nele para tocar.',
  },
  {
    src: '/assets/depo3.webp',
    width: 828,
    height: 1187,
    alt: 'Mensagem sobre como os conselhos de Cayque ajudaram a repensar oportunidades e relações no mundo da música.',
  },
  {
    src: '/assets/depo4.webp',
    width: 828,
    height: 358,
    alt: 'Comentário de Albari: Isso me abriu a mente, obrigado amigo.',
  },
  {
    src: '/assets/depo5.webp',
    width: 828,
    height: 514,
    alt: 'Relato de quem não sabia tocar piseiro e conta que Cayque fez diferença em sua trajetória.',
  },
  {
    src: '/assets/depo6.webp',
    width: 828,
    height: 502,
    alt: 'Mensagem agradecendo pelas bases e pelas dicas que trazem uma perspectiva melhor sobre a música.',
  },
  {
    src: '/assets/depo7.webp',
    width: 828,
    height: 918,
    alt: 'Relato de um aluno sobre estudar piseiro, perceber a própria evolução e receber elogios do cantor com quem trabalha.',
  },
  {
    src: '/assets/depo8.webp',
    width: 828,
    height: 843,
    alt: 'Relato de um comprador elogiando o curso, a facilidade de aprendizado e a disposição de Cayque para ensinar e dar atenção.',
  },
];

type Testimonial = (typeof testimonials)[number];

function PrintSequence({ images, duplicate = false }: { images: Testimonial[]; duplicate?: boolean }) {
  return (
    <ul className="testimonial-ribbon-sequence" aria-hidden={duplicate ? true : undefined}>
      {images.map((image) => {
        const print = (
          <img
            src={image.src}
            alt={duplicate ? '' : image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        return (
          <li
            key={image.src}
            className="testimonial-ribbon-print"
            style={{ '--testimonial-ratio': image.width / image.height } as CSSProperties}
          >
            {duplicate ? (
              <span className="testimonial-print-surface">{print}</span>
            ) : (
              <a
                className="testimonial-print-surface"
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                title="Abrir depoimento em tamanho original"
                onFocus={(event) => event.currentTarget.scrollIntoView({
                  behavior: 'instant',
                  block: 'nearest',
                  inline: 'center',
                })}
              >
                {print}
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: '150px' });
  const reducedMotion = useReducedMotion();
  const [pageVisible, setPageVisible] = useState(true);
  const rows = [testimonials.slice(0, 4), testimonials.slice(4)];

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="testimonial-ribbons relative isolate overflow-hidden py-24 lg:py-32"
      aria-labelledby="testimonials-title"
      data-running={isInView && pageVisible && !reducedMotion ? 'true' : 'false'}
    >
      <div className="testimonial-ribbons-light" aria-hidden="true" />

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reducedMotion ? 0 : 0.8 }}
        className="relative mx-auto mb-12 max-w-7xl px-6 lg:mb-16 lg:px-10"
      >
        <span className="eyebrow">Ato IV — Quem vive o som</span>
        <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
          <h2
            id="testimonials-title"
            className="max-w-3xl font-display text-4xl font-extrabold leading-[.98] tracking-[-.06em] md:text-6xl lg:text-7xl"
          >
            O som é dele.<br />
            <span className="text-brand-pink text-glow-pink">A experiência é de quem vive.</span>
          </h2>
          <p className="max-w-sm text-base leading-7 text-white/60">
            Do conteúdo às aulas, a conexão vai além da guitarra. Veja o que músicos,
            seguidores e alunos compartilham sobre Cayque e sua forma de ensinar.
          </p>
        </div>
      </motion.div>

      <div className="testimonial-ribbons-reel">
        {rows.map((images, index) => (
          <div
            key={index}
            className={`testimonial-ribbon testimonial-ribbon-${index === 0 ? 'right' : 'left'}`}
            role="group"
            aria-label={`Depoimentos: faixa ${index + 1}. Selecione um print para ler em tamanho original.`}
          >
            <div className="testimonial-ribbon-track">
              <PrintSequence images={images} />
              <PrintSequence images={images} duplicate />
            </div>
          </div>
        ))}
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl px-6 text-center md:mt-16">
        <p className="font-display text-xl font-semibold tracking-[-.035em] text-white/90 md:text-2xl">
          A próxima história com a guitarra pode ser a sua.
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/55 md:text-base">
          Transforme a inspiração em prática. Na Comunidade dos ritmos, estude as levadas,
          os timbres e as variações para construir o seu próprio som.
        </p>
        <a href="#curso" className="testimonial-course-link">
          Conheça a Comunidade dos ritmos <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
