import { Guitar, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const footerLinks = [
  { label: 'Minha história', href: '#historia' },
  { label: 'Os ritmos', href: '#ritmos' },
  { label: 'O que você recebe', href: '#curso' },
  { label: 'A comunidade', href: '#comunidade' },
  { label: 'Oferta', href: '#oferta' },
];

const Footer = () => <footer className="relative border-t border-violet-300/10 py-14 lg:py-18">
  <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-3 lg:px-10">
    <div><a href="#inicio" className="mb-4 flex items-center gap-2"><Guitar className="h-5 w-5 text-violet-300"/><span className="font-display text-lg font-semibold">Comunidade<span className="text-violet-300">.</span>dos Ritmos</span></a><p className="max-w-sm text-sm leading-6 text-white/50">Com Cayque Gomes. Forró, piseiro, arrocha e corinho de fogo para guitarristas que querem compreender os detalhes e tocar com mais intenção.</p></div>
    <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Explore</h4><ul className="space-y-3">{footerLinks.map(link => <li key={link.href}><a href={link.href} className="text-sm text-white/55 transition hover:text-white">{link.label}</a></li>)}</ul></div>
    <div><h4 className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-violet-300">Acompanhe a jornada</h4><p className="text-sm leading-6 text-white/50">Os links oficiais das redes sociais serão adicionados assim que forem enviados.</p><div className="mt-4 flex gap-3"><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40"><Instagram size={17}/></span><span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white/40"><Youtube size={17}/></span></div><a href="#oferta" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white">Conheça a oferta <ArrowUpRight size={15}/></a></div>
  </div>
  <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 lg:px-10"><p className="text-xs text-white/35">© {new Date().getFullYear()} Cayque Gomes. Todos os direitos reservados.</p></div>
</footer>;
export default Footer;
