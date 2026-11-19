import { motion, useReducedMotion } from 'framer-motion';
import type { SVGProps } from 'react';

type BrandIconProps = SVGProps<SVGSVGElement>;

function InstagramMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.55" cy="6.6" r="1.15" fill="currentColor" />
    </svg>
  );
}

function YouTubeMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M21.2 7.1a2.65 2.65 0 0 0-1.86-1.88C17.7 4.77 12 4.77 12 4.77s-5.7 0-7.34.45A2.65 2.65 0 0 0 2.8 7.1 27.6 27.6 0 0 0 2.35 12c0 1.65.15 3.29.45 4.9a2.65 2.65 0 0 0 1.86 1.88c1.64.45 7.34.45 7.34.45s5.7 0 7.34-.45a2.65 2.65 0 0 0 1.86-1.88c.3-1.61.45-3.25.45-4.9s-.15-3.29-.45-4.9Z" fill="currentColor" />
      <path d="m10 15.55 5.2-3.55L10 8.45v7.1Z" fill="#100b19" />
    </svg>
  );
}

function TikTokMark(props: BrandIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M15.7 3.2c.28 2.27 1.55 3.65 3.8 3.8v3.35a8.1 8.1 0 0 1-3.78-1.05v6.93a5.75 5.75 0 1 1-5.75-5.75c.38 0 .75.04 1.1.11v3.55a2.35 2.35 0 1 0 1.2 2.04V3.2h3.43Z" fill="currentColor" />
      <path d="M14.75 4.25v10.9a2.35 2.35 0 0 1-2.35 2.35c-.5 0-.96-.16-1.34-.43a2.35 2.35 0 0 0 3.65-1.93V4.25h.04Z" fill="currentColor" opacity=".38" />
    </svg>
  );
}

const socials = [
  {
    name: 'Instagram',
    handle: '@cayquegomess',
    description: 'Acompanhe publicações, novidades e momentos da caminhada musical.',
    href: 'https://www.instagram.com/cayquegomess/',
    Icon: InstagramMark,
    className: 'creator-social-card-instagram',
    label: 'Visitar o Instagram de Cayque Gomes',
  },
  {
    name: 'YouTube',
    handle: '@CayqueGomes97',
    description: 'Confira os vídeos e conteúdos publicados no canal.',
    href: 'https://www.youtube.com/@CayqueGomes97',
    Icon: YouTubeMark,
    className: 'creator-social-card-youtube',
    label: 'Visitar o canal de Cayque Gomes no YouTube',
  },
  {
    name: 'TikTok',
    handle: '@cayque.gomes0',
    description: 'Veja os vídeos curtos e acompanhe Cayque também por lá.',
    href: 'https://www.tiktok.com/@cayque.gomes0',
    Icon: TikTokMark,
    className: 'creator-social-card-tiktok',
    label: 'Visitar o TikTok de Cayque Gomes',
  },
];

export default function CreatorSocials() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="redes-sociais" className="creator-socials relative isolate overflow-hidden py-24 md:py-32" aria-labelledby="creator-socials-title">
      <div className="creator-socials-glow creator-socials-glow-one" aria-hidden="true" />
      <div className="creator-socials-glow creator-socials-glow-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="eyebrow">Continue por perto</span>
          <h2 id="creator-socials-title" className="mt-5 font-display text-4xl font-extrabold leading-[.94] tracking-[-.065em] md:text-7xl">
            A música continua <span className="text-violet-300">nas redes.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
            Acompanhe Cayque Gomes nas plataformas e fique por dentro dos conteúdos e novidades.
          </p>
        </motion.div>

        <div className="creator-social-grid mt-14">
          {socials.map(({ name, handle, description, href, Icon, className, label }, index) => (
            <motion.a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: reducedMotion ? 0 : index * 0.1 }}
              className={`creator-social-card ${className}`}
            >
              <span className="creator-social-icon-wrap">
                <Icon className="creator-social-icon" />
              </span>
              <span className="creator-social-copy">
                <span className="creator-social-label">Acompanhe no</span>
                <strong>{name}</strong>
                <span className="creator-social-handle">{handle}</span>
                <span className="creator-social-description">{description}</span>
                <span className="creator-social-action">Acessar perfil <span aria-hidden="true">↗</span></span>
              </span>
              <span className="creator-social-card-glow" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
