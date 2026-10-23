# Briefing Analysis — Cayque Gomes

## Direção de arte

A direção escolhida é **documentário musical / road movie nordestino**: palco, ensaio e estúdio tratados como cenas de uma mesma jornada. A composição usa preto profundo e grafite para criar silêncio visual; roxo e rosa entram como luz de palco, enquanto o dourado reserva atenção ao preço e a sinais de valor.

A tipografia foi trocada para **Sora** nos títulos, **DM Sans** no corpo e **IBM Plex Mono** nos rótulos. Sora tem presença geométrica sem perder legibilidade em títulos grandes; DM Sans mantém o texto de venda mais confortável em telas pequenas.

A narrativa segue cinco momentos: abertura no vídeo do palco, autoridade e trajetória sobre a foto1, método em trilha de quatro movimentos sobre a foto2, oferta em painel de compra e encerramento com a chamada “Seu lugar é no palco”.

## Pesquisa de referências no GitHub

A pesquisa priorizou interfaces com scroll, motion e composição cinematográfica. Os repositórios foram usados como referência de padrões de interação, não como código copiado.

1. [Temitayo-spec/Raft-Landing-Page](https://github.com/Temitayo-spec/Raft-Landing-Page) — landing page com Next.js, GSAP e Framer Motion. Adaptação: ritmo de entrada e transições entre blocos, reduzidos para manter foco no curso.
2. [moumen-soliman/uitripled](https://github.com/moumen-soliman/uitripled) — blocos e páginas com Framer Motion e shadcn/Base UI. Adaptação: linguagem de componentes com estados de hover e foco consistentes, sem importar uma biblioteca visual pesada.
3. [mohitvirli/mohitvirli.github.io](https://github.com/mohitvirli/mohitvirli.github.io) — portfólio com React Three Fiber, Drei e GSAP. Adaptação: a ideia de profundidade e cena foi mantida em CSS e vídeo, evitando WebGL porque não acrescentaria informação ao produto.
4. [VinayMatta63/threejs-portfolio](https://github.com/VinayMatta63/threejs-portfolio) — portfólio interativo com Three.js e React Three Fiber. Adaptação: referência de narrativa por etapas; a execução final usa uma trilha CSS mais leve para o método.
5. [zubair-trabzada/scroll-cinematic-claude](https://github.com/zubair-trabzada/scroll-cinematic-claude) — exploração de scroll cinematográfico e sequências de cena. Adaptação: parallax suave no vídeo e na foto, sem scroll-scrubbing de frames, que aumentaria o custo de carregamento.

## Implementação aplicada

- O hero usa `public/assets/video1.mp4` como fundo, com `autoplay`, `muted`, `loop`, `playsInline`, `preload="metadata"` e `foto1.jpg` como poster.
- O CTA “Entrar no curso”, o botão “Garantir meu acesso” e o CTA final compartilham a classe `living-cta`: brilho que atravessa o botão, gradiente em movimento, respiração de luz e elevação no hover.
- A seção Sobre deixou de ter uma foto isolada. A `foto1.jpg` virou o fundo integral da cena e os quatro indicadores passaram a ser slabs editoriais com entrada escalonada, rotação sutil e elevação no hover.
- A seção Método usa `foto2.jpg` como plano de fundo e deixou a grade estática para virar uma trilha de quatro movimentos, com linha de continuidade, marcadores numerados, microinteração no hover e adaptação para duas colunas e uma coluna.
- Os quatro boxes da seção Sobre e os quatro boxes do Método têm deslocamentos independentes vinculados ao `scrollYProgress`, criando flutuação percebida também em telas pequenas.
- O texto foi mantido em tom próximo, didático e prático. Não foram adicionadas promessas financeiras ou depoimentos novos.
- Foi preservado o fallback de `prefers-reduced-motion` para reduzir animações não essenciais.

## Auditoria de performance e acessibilidade

- `Math.random()` foi removido do render das barras do equalizador; as alturas agora são determinísticas, evitando variações e trabalho desnecessário em renderizações.
- As imagens foram redimensionadas para o uso real e o vídeo foi recomprimido para 1280px, de aproximadamente 9,4 MB para aproximadamente 2 MB.
- O CSS usa `content-visibility: auto` nas seções abaixo da dobra e animações baseadas principalmente em `transform` e `opacity`.
- O vídeo é carregado com `preload="metadata"`, conforme orientação do MDN para limitar o custo de carregamento; em dispositivos com redução de movimento, as animações são neutralizadas e o poster continua disponível.
- Os CTAs foram reforçados com halo neon, anel pulsante e flutuação contínua; o efeito é desligado no modo de movimento reduzido.
- Foram adicionados estados de foco visíveis, manifesto `public/manus-routes.json`, metadados de tema e descrição, e `.gitignore` para não versionar `node_modules` ou `dist` gerado.
- Validação executada: `npm ci`, `npm run typecheck` e `npm run build` concluídos com sucesso.

## Limitações conhecidas

Os links de compra e redes sociais continuam como placeholders (`#`) porque o briefing não trouxe URLs finais. O próximo passo comercial é substituir esses destinos antes da publicação.

## Referências técnicas

- [MDN — HTML video](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
- [MDN — prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
