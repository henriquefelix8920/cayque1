import { motion } from 'framer-motion';
import { MessageCircle, Users, Video, HeartHandshake } from 'lucide-react';

const SocialPlatforms = () => <section id="comunidade" className="social-platforms relative overflow-hidden py-24 md:py-32">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(124,58,237,.16),transparent_55%),#08060c]" />
  <div className="mx-auto max-w-7xl px-6 lg:px-10">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
      <span className="eyebrow">Mais perto do que um vídeo gravado</span>
      <h2 className="mt-5 font-display text-4xl font-extrabold leading-[.94] tracking-[-.065em] md:text-7xl">Aprender música também é <span className="text-violet-300">trocar experiência.</span></h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">A proposta da Comunidade dos Ritmos é ter gente de verdade do outro lado: um professor presente, um espaço de troca e oportunidades para aprofundar o estudo.</p>
    </motion.div>
    <div className="mt-14 grid gap-4 md:grid-cols-2">
      {[
        { icon: HeartHandshake, title: 'Contato direto com Cayque', text: 'Suas dúvidas não ficam apenas nas mãos de uma equipe. A proposta é ter contato real com o músico e professor que criou a comunidade.' },
        { icon: MessageCircle, title: 'Dicas no grupo de WhatsApp', text: 'Um espaço complementar para receber orientações e continuar a conversa além das aulas.' },
        { icon: Video, title: 'Uma aula ao vivo por mês', text: 'Um encontro mensal para aprofundar assuntos, esclarecer dúvidas e estudar junto.' },
        { icon: Users, title: 'Uma comunidade de guitarristas', text: 'Aprenda com mais contexto, compartilhe sua caminhada e acompanhe as atualizações do conteúdo.' },
      ].map((item, i) => { const Icon = item.icon; return <motion.article key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .07 }} className="border border-violet-300/15 bg-[#100b19]/75 p-6 md:p-8"><Icon size={24} className="text-violet-300"/><h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{item.text}</p></motion.article>; })}
    </div>
  </div>
</section>;
export default SocialPlatforms;
