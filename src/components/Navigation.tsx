import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Guitar } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Minha história', href: '#historia' },
  { label: 'Os ritmos', href: '#ritmos' },
  { label: 'O curso', href: '#curso' },
  { label: 'A comunidade', href: '#comunidade' },
  { label: 'Depoimentos', href: '#depoimentos' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <>
    <motion.nav initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: .65 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#08060c]/90 backdrop-blur-xl border-b border-violet-300/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="flex h-16 items-center justify-between lg:h-20">
        <a href="#inicio" className="group flex items-center gap-2"><Guitar className="h-5 w-5 text-violet-300 transition-colors group-hover:text-fuchsia-300"/><span className="font-display text-lg font-semibold tracking-tight">Comunidade<span className="text-violet-300">.</span>dos Ritmos</span></a>
        <div className="hidden items-center gap-6 lg:flex">{navLinks.map(link => <a key={link.href} href={link.href} className="group relative text-sm text-white/65 transition-colors hover:text-white">{link.label}<span className="absolute -bottom-1 left-0 h-px w-0 bg-violet-300 transition-all group-hover:w-full"/></a>)}<a href="#oferta" className="rounded-full border border-violet-300/30 bg-violet-400/10 px-5 py-2 text-sm font-semibold text-violet-200 transition hover:bg-violet-400/20">Fazer parte</a></div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 text-white lg:hidden" aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMobileOpen}>{isMobileOpen ? <X size={24}/> : <Menu size={24}/>}</button>
      </div></div>
    </motion.nav>
    <AnimatePresence>{isMobileOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#08060c]/[.98] backdrop-blur-2xl lg:hidden"><div className="flex flex-col items-center gap-7">{navLinks.map((link, i) => <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * .05 }} onClick={() => setIsMobileOpen(false)} className="font-display text-2xl font-medium text-white transition-colors hover:text-violet-300">{link.label}</motion.a>)}<a href="#oferta" onClick={() => setIsMobileOpen(false)} className="mt-3 rounded-full bg-violet-600 px-8 py-3 font-semibold text-white">Ver oferta</a></div></motion.div>}</AnimatePresence>
  </>;
};
export default Navigation;
