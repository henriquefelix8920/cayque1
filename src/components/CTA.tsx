import { motion } from 'framer-motion';
import { ArrowRight, Guitar, Check } from 'lucide-react';

const CTA = () => <section id="oferta" className="relative overflow-hidden py-24 lg:py-36">
  <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_35%,rgba(124,58,237,.3),transparent_55%),linear-gradient(145deg,#08060c,#10091a_55%,#08060c)]"/>
  <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet-300/50 to-transparent"/>
  <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .65 }} className="mx-auto max-w-4xl px-6 text-center lg:px-10">
    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-violet-300/30 bg-violet-400/10"><Guitar size={27} className="text-violet-200"/></div>
    <span className="eyebrow mt-7">Seu próximo passo na guitarra</span>
    <h2 className="mt-5 font-display text-4xl font-extrabold leading-[.94] tracking-[-.065em] md:text-7xl">Os ritmos você já ama.<br/><span className="text-violet-300">Agora, entenda como tocar.</span></h2>
    <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/65 md:text-lg">Se você já toca guitarra e quer explorar forró, piseiro, arrocha e corinho de fogo com mais clareza, a Comunidade dos Ritmos foi criada pensando em você.</p>
    <div className="mx-auto mt-10 max-w-2xl border border-violet-300/25 bg-[#100b19]/90 p-7 text-left md:p-10">
      <div className="flex flex-col gap-2 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs uppercase tracking-[.22em] text-violet-300">Acesso à comunidade</p><p className="mt-2 font-display text-2xl font-bold">Pagamento único</p></div><div className="sm:text-right"><span className="font-display text-5xl font-extrabold tracking-[-.06em] text-white">R$ 97</span><p className="mt-1 text-xs text-white/45">sem mensalidade</p></div></div>
      <ul className="mt-7 space-y-3">{['Acesso vitalício ao conteúdo', 'Atualizações adicionadas ao longo do tempo', 'Contato direto com Cayque', 'Grupo de WhatsApp com dicas complementares', 'Uma aula ao vivo por mês'].map(item => <li key={item} className="flex gap-3 text-sm text-white/70"><Check size={17} className="mt-0.5 shrink-0 text-violet-300"/>{item}</li>)}</ul>
      <a href="#curso" className="living-cta living-cta-primary mt-8 flex w-full justify-center text-center"><span className="living-cta-shine" aria-hidden="true"/><span className="relative z-10 flex items-center gap-2">Quero fazer parte <ArrowRight size={18}/></span></a>
      <p className="mt-4 text-center text-xs leading-5 text-white/40">O link de matrícula será conectado assim que o endereço oficial de pagamento for informado.</p>
    </div>
    <p className="mx-auto mt-7 max-w-xl text-xs leading-5 text-white/40">A Comunidade dos Ritmos é indicada para quem já toca guitarra. Se você está começando do zero, este conteúdo ainda não é o ideal para sua etapa.</p>
  </motion.div>
</section>;
export default CTA;
