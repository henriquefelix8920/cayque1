import { Guitar, Instagram, Youtube, MessageCircle } from 'lucide-react';

/* ═══════════════════════════════════════════
   🎬 CRÉDITOS — Footer
   Links, redes sociais e informações finais.
   ═══════════════════════════════════════════ */

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

const footerLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Método', href: '#metodo' },
  { label: 'Curso', href: '#curso' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/[0.05] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Coluna 1: Marca */}
          <div>
            <a href="#inicio" className="flex items-center gap-2 mb-4 group">
              <Guitar className="w-5 h-5 text-brand-pink group-hover:text-brand-purple-light transition-colors" />
              <span className="font-display font-semibold text-lg tracking-tight">
                Cayque<span className="text-brand-pink">.</span>Gomes
              </span>
            </a>
            <p className="text-sm text-brand-gray leading-relaxed max-w-xs">
              A Comunidade dos ritmos, por Cayque Gomes. Guitarra do piseiro e do arrocha,
              com a prática real de quem vive a música.
            </p>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h4 className="font-display font-medium text-sm text-brand-white mb-4 uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-brand-pink transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Redes */}
          <div>
            <h4 className="font-display font-medium text-sm text-brand-white mb-4 uppercase tracking-wider">
              Redes
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-brand-pink/30 hover:bg-brand-pink/5 transition-all duration-300 group"
                >
                  <social.icon size={16} className="text-brand-gray group-hover:text-brand-pink transition-colors" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-brand-gray">
              Conteúdos, bastidores e novidades.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-brand-gray/50">
              © {new Date().getFullYear()} Cayque Gomes. Todos os direitos reservados.
            </p>
            <p className="text-xs text-brand-gray/30 font-mono">
              Feito com 🎸 e muito piseiro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
