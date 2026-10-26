import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Guitar } from 'lucide-react';

/* ═══ Navegação Cinematográfica ═══ 
   Navbar fixa com transição de fundo ao scroll.
   Mobile: menu fullscreen com animação. */

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Método', href: '#metodo' },
  { label: 'Curso', href: '#curso' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Galeria', href: '#galeria' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-brand-black/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#inicio" className="flex items-center gap-2 group">
              <Guitar className="w-5 h-5 text-brand-pink group-hover:text-brand-purple-light transition-colors" />
              <span className="font-display font-semibold text-lg tracking-tight">
                Cayque<span className="text-brand-pink">.</span>Gomes
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-brand-gray hover:text-brand-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-pink group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a
                href="#curso"
                className="px-5 py-2 text-sm font-medium bg-brand-pink/10 border border-brand-pink/30 text-brand-pink rounded-full hover:bg-brand-pink/20 hover:border-brand-pink/50 transition-all duration-300"
              >
                Começar agora
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-brand-white"
              aria-label="Menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-2xl font-display font-medium text-brand-white hover:text-brand-pink transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#curso"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 px-8 py-3 text-lg font-medium bg-brand-pink text-brand-white rounded-full"
              >
                Começar agora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
