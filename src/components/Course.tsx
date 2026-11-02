import { motion } from 'framer-motion';
import { Check, Users, Video, MessageCircle, RefreshCw, Guitar, ArrowRight } from 'lucide-react';

const items = [
  'Aulas focadas nos detalhes de cada ritmo',
  'Explicações sobre levadas, variações e execução',
  'Orientações para tocar de forma atual e consciente',
  'Conteúdo pensado para quem já toca guitarra',
];

const Course = () => <section id="curso" className="relative overflow-hidden py-24 lg:py-36">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(124,58,237,.16),transparent_32%),radial-gradient(circle_at_90%_70%,rgba(168,85,247,.08),transparent_30%)]" aria-hidden="true"/>
  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
    <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="mb-12 max-w-3xl">
      <span className="eyebrow">Aprenda junto. Evolua junto.</span>
      <h2 className="mt-5 font-display text-4xl font-extrabold leading-[.95] tracking-[-.06em] md:text-6xl">Não é só um curso.<br/><span className="text-violet-300">É uma comunidade.</span></h2>
      <p className="mt-6 text-base leading-7 text-white/65 md:text-lg">A Comunidade dos Ritmos nasceu de uma dificuldade real do Cayque: encontrar explicações claras para os detalhes desses estilos. Agora, a ideia é encurtar esse caminho para outros guitarristas.</p>
    </motion.div>
    <div className="course-panel">
      <div className="grid gap-12 lg:grid-cols-[1fr_.85fr] lg:gap-16">
        <div>
          <h3 className="font-display text-2xl font-bold">O que você vai estudar</h3>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/70"><Check size={18} className="mt-1 shrink-0 text-violet-300"/><span>{item}</span></li>)}</ul>
          <div className="mt-9 border-t border-white/10 pt-7"><h4 className="font-display text-lg font-bold">Para quem é?</h4><p className="mt-3 text-sm leading-6 text-white/60">Para músicos de nível intermediário ao avançado que já tocam guitarra e querem aprender esses estilos ou dar o próximo passo no que já tocam.</p><p className="mt-3 text-sm leading-6 text-white/50">Se você nunca tocou guitarra, esta comunidade não é o ponto de partida ideal — e preferimos deixar isso claro desde já.</p></div>
        </div>
        <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <h3 className="font-display text-2xl font-bold">O diferencial está nas pessoas</h3>
          <div className="mt-7 space-y-6">
            <div className="flex gap-4"><Users className="mt-1 shrink-0 text-violet-300" size={22}/><div><h4 className="font-semibold">Contato real com Cayque</h4><p className="mt-1 text-sm leading-6 text-white/55">Você fala com o próprio professor — não apenas com uma equipe de atendimento.</p></div></div>
            <div className="flex gap-4"><MessageCircle className="mt-1 shrink-0 text-violet-300" size={22}/><div><h4 className="font-semibold">Grupo no WhatsApp</h4><p className="mt-1 text-sm leading-6 text-white/55">Dicas complementares e troca com quem também está estudando os ritmos.</p></div></div>
            <div className="flex gap-4"><Video className="mt-1 shrink-0 text-violet-300" size={22}/><div><h4 className="font-semibold">Encontro ao vivo mensal</h4><p className="mt-1 text-sm leading-6 text-white/55">Uma aula ao vivo por mês para aprofundar o aprendizado.</p></div></div>
            <div className="flex gap-4"><RefreshCw className="mt-1 shrink-0 text-violet-300" size={22}/><div><h4 className="font-semibold">Acesso vitalício e atualizações</h4><p className="mt-1 text-sm leading-6 text-white/55">Entre uma vez e acompanhe as atualizações adicionadas ao longo do tempo.</p></div></div>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-violet-300/15 pt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-white/55">Uma comunidade para aprender os detalhes, tirar dúvidas e não precisar descobrir tudo sozinho.</p><a href="#depoimentos" className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition-colors hover:text-white">Ver relatos <ArrowRight size={16}/></a></div>
    </div>
  </div>
</section>;
export default Course;
