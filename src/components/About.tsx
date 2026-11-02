import { motion } from 'framer-motion';
import { Guitar, Heart, Music2 } from 'lucide-react';

const About = () => <section id="historia" className="about-cinema relative isolate overflow-hidden py-24 lg:py-36">
  <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_75%_25%,rgba(124,58,237,.2),transparent_45%),linear-gradient(145deg,#08060c,#10091a_55%,#08060c)]" />
  <div className="absolute right-0 top-0 -z-10 h-full w-px bg-gradient-to-b from-transparent via-violet-400/40 to-transparent" />
  <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 lg:px-10">
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7 }}>
      <span className="eyebrow">Antes da comunidade, a minha história</span>
      <h2 className="mt-6 font-display text-4xl font-extrabold leading-[.94] tracking-[-.065em] md:text-6xl">Pra mim, música nunca foi só <span className="text-violet-300">tocar.</span></h2>
      <div className="mt-8 space-y-5 text-base leading-7 text-white/70 md:text-lg">
        <p>Eu sou <strong className="text-white">Cayque Gomes</strong>, músico, moro no interior do Rio de Janeiro e comecei minha caminhada na música aos 15 anos.</p>
        <p>Desde o primeiro ano tocando, eu também já ensinava. Enquanto ainda dividia o tempo com a bola, descobri que gostava tanto de entender a música quanto de ajudar outras pessoas a tocar.</p>
        <p>Com o tempo, uma coisa ficou clara: <strong className="text-white">música é para todo mundo.</strong> Você pode tocar, cantar, cantarolar ou simplesmente admirar. Cada pessoa pode fazer parte dela de um jeito.</p>
        <p>Criei a Comunidade dos Ritmos para compartilhar o que aprendi, explicar os detalhes que muitas vezes ficam de fora e ajudar outros guitarristas a encontrarem seu próprio caminho nesses estilos.</p>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, delay: .12 }} className="relative">
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-violet-600/10 blur-2xl" />
      <div className="border border-violet-300/20 bg-[#100b19]/80 p-7 md:p-10">
        <span className="font-mono text-xs uppercase tracking-[.24em] text-violet-300">O que me trouxe até aqui</span>
        <div className="mt-8 space-y-7">
          <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-300/30 bg-violet-400/10 text-violet-200"><Guitar size={21}/></span><div><h3 className="font-display text-xl font-bold">Músico desde os 15</h3><p className="mt-1 text-sm leading-6 text-white/55">Anos de prática, escuta e descoberta dentro da música.</p></div></div>
          <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-300/30 bg-violet-400/10 text-violet-200"><Music2 size={21}/></span><div><h3 className="font-display text-xl font-bold">Professor desde o começo</h3><p className="mt-1 text-sm leading-6 text-white/55">Explicar o detalhe sempre fez parte da minha relação com o instrumento.</p></div></div>
          <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-violet-300/30 bg-violet-400/10 text-violet-200"><Heart size={21}/></span><div><h3 className="font-display text-xl font-bold">Música feita para compartilhar</h3><p className="mt-1 text-sm leading-6 text-white/55">A comunidade nasceu para ninguém precisar ficar perdido nos detalhes dos ritmos.</p></div></div>
        </div>
        <p className="mt-9 border-t border-white/10 pt-6 font-display text-xl italic leading-7 text-white/85">“Eu quero que você faça parte de um pedaço meu na música.”</p>
        <p className="mt-3 text-xs uppercase tracking-[.2em] text-violet-300">— Cayque Gomes</p>
      </div>
    </motion.div>
  </div>
</section>;
export default About;
