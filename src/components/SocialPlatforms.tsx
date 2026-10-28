import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const InstagramMark = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className="social-platform-logo social-platform-logo-instagram">
    <defs>
      <linearGradient id="instagram-gradient" x1="8" y1="92" x2="92" y2="8" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ffcf46" />
        <stop offset=".48" stopColor="#ff2d7b" />
        <stop offset="1" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <rect x="8" y="8" width="84" height="84" rx="24" fill="url(#instagram-gradient)" />
    <rect x="27" y="27" width="46" height="46" rx="14" fill="none" stroke="white" strokeWidth="7" />
    <circle cx="50" cy="50" r="11" fill="none" stroke="white" strokeWidth="7" />
    <circle cx="68" cy="32" r="4.5" fill="white" />
  </svg>
);

const YouTubeMark = () => (
  <svg viewBox="0 0 120 84" aria-hidden="true" className="social-platform-logo social-platform-logo-youtube">
    <path d="M114.2 18.4a14 14 0 0 0-9.9-9.9C95.6 6.2 60 6.2 60 6.2S24.4 6.2 15.7 8.5a14 14 0 0 0-9.9 9.9C3.5 27.1 3.5 42 3.5 42s0 14.9 2.3 23.6a14 14 0 0 0 9.9 9.9c8.7 2.3 44.3 2.3 44.3 2.3s35.6 0 44.3-2.3a14 14 0 0 0 9.9-9.9c2.3-8.7 2.3-23.6 2.3-23.6s0-14.9-2.3-23.6Z" fill="#ff0033" />
    <path d="m49 59.2 29-17.2-29-17.2v34.4Z" fill="white" />
  </svg>
);

const platforms = [
  {
    key: 'instagram',
    label: 'Instagram',
    eyebrow: 'Bastidores & rotina',
    copy: 'Acompanhe os bastidores, os estudos e os momentos que fazem o som acontecer.',
    // Insira aqui a URL real do perfil quando ela estiver disponível.
    href: '',
    mark: <InstagramMark />,
  },
  {
    key: 'youtube',
    label: 'YouTube',
    eyebrow: 'Aulas & performance',
    copy: 'Veja as levadas em ação, aprenda com vídeos diretos e escute o piseiro por outro ângulo.',
    // Insira aqui a URL real do canal quando ela estiver disponível.
    href: '',
    mark: <YouTubeMark />,
  },
];

export default function SocialPlatforms() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const cards = cardsRef.current;
    const ctx = gsap.context(() => {
      gsap.fromTo('.social-platform-kicker', { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: .8, ease: 'power3.out', scrollTrigger: undefined });
      gsap.fromTo(cards, { opacity: 0, y: 70, rotateX: 12 }, { opacity: 1, y: 0, rotateX: 0, duration: 1.05, stagger: .14, ease: 'power4.out', delay: .12 });
      gsap.fromTo('.social-platform-orbit', { scale: .72, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.8, ease: 'power3.out', delay: .25 });
    }, section);

    const cleanups = cards.map((card) => {
      const rotateX = gsap.quickTo(card, 'rotationX', { duration: .5, ease: 'power3.out' });
      const rotateY = gsap.quickTo(card, 'rotationY', { duration: .5, ease: 'power3.out' });
      const lift = gsap.quickTo(card, 'y', { duration: .5, ease: 'power3.out' });
      const onMove = (event: MouseEvent) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - .5;
        const y = (event.clientY - bounds.top) / bounds.height - .5;
        rotateX(-y * 7);
        rotateY(x * 9);
        lift(-7);
      };
      const reset = () => {
        rotateX(0);
        rotateY(0);
        lift(0);
      };
      card.addEventListener('pointermove', onMove);
      card.addEventListener('pointerleave', reset);
      return () => {
        card.removeEventListener('pointermove', onMove);
        card.removeEventListener('pointerleave', reset);
      };
    });

    const moveOrb = (event: PointerEvent) => {
      if (!orbRef.current) return;
      const bounds = section.getBoundingClientRect();
      gsap.to(orbRef.current, { x: (event.clientX - bounds.left - bounds.width / 2) * .08, y: (event.clientY - bounds.top - bounds.height / 2) * .06, duration: 1.2, ease: 'power3.out', overwrite: true });
    };
    section.addEventListener('pointermove', moveOrb);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      section.removeEventListener('pointermove', moveOrb);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="comunidade" className="social-platforms relative overflow-hidden py-24 md:py-32">
      <div ref={orbRef} className="social-platform-orbit" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="social-platform-heading mx-auto max-w-3xl text-center">
          <span className="social-platform-kicker eyebrow">Ato V — Continue a jornada</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[.94] tracking-[-.065em] md:text-7xl">
            O palco não termina<br /><span className="text-brand-pink text-glow-pink">quando a aula acaba.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Entre para a comunidade, veja o método em movimento e acompanhe de perto tudo o que está fazendo a guitarra do piseiro soar diferente.
          </p>
        </div>

        <div className="social-platform-grid mt-14 md:mt-20">
          {platforms.map((platform, index) => (
            <div
              key={platform.key}
              ref={(element) => { if (element) cardsRef.current[index] = element; }}
              className={`social-platform-card social-platform-card-${platform.key}`}
            >
              <span className="social-platform-card-glow" aria-hidden="true" />
              <a
                className="social-platform-logo-wrap"
                href={platform.href || '#'}
                {...(platform.href && platform.href !== '#'
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                onClick={(event) => {
                  if (!platform.href || platform.href === '#') event.preventDefault();
                }}
                aria-label={platform.label}
              >
                {platform.mark}
              </a>
              <span className="social-platform-copy">
                <span className="social-platform-eyebrow">{platform.eyebrow}</span>
                <strong>{platform.label}</strong>
                <span className="social-platform-description">{platform.copy}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
