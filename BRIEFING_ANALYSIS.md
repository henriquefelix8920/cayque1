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

## Auditoria mobile e velocidade — rodada final

- O hero mantém o vídeo como fundo em telas médias e grandes; abaixo de 768px, o vídeo não é instanciado e `foto1.jpg` otimizada assume o fundo. Isso elimina cerca de 2 MB e o custo de decodificação contínua do vídeo no celular sem deixar a primeira dobra vazia.
- O preço e a frase “Acesso completo · atualizações contínuas” foram retirados do hero.
- As amplitudes de parallax dos boxes foram reduzidas para movimentos sutis, evitando que os cards se sobreponham quando a seção vira uma coluna no celular.
- O Ato II agora usa ícones de cada pilar em marcadores animados, em vez de números; a animação tem flutuação e rotação leves e mantém o fallback para movimento reduzido.
- O painel de compra ganhou `min-width: 0`, quebra segura de cabeçalho e CTA com o título centralizado de forma independente da seta.
- No mobile, os glows grandes foram removidos, o `backdrop-filter` dos slabs foi desligado, os painéis ganharam padding menor e os CTAs ocupam uma largura limitada e segura para toque.
- Validação final: `npm run typecheck`, `npm run build`, `git diff --check`, preview local HTTP 200 e inspeção do DOM em viewport 375×812.

## Correções finais solicitadas

- O vídeo voltou a ser o plano de fundo real do hero em todos os breakpoints. Para preservar velocidade, o desktop usa `video1.mp4` em 1280×720 e telas menores usam `video1-mobile.mp4`, uma derivação H.264 de 640×360 com aproximadamente 494 KB.
- O Ato I deixou os cards e passou a usar uma lista editorial em fluxo normal, com linhas, ícones, números e descrição. A estrutura não usa mais um grid absoluto sobre o texto, eliminando a sobreposição no mobile.
- O Ato II mantém apenas os ícones animados nos marcadores externos; os boxes internos exibem somente tag, título, descrição e ação.
- O valor `R$ 97` foi reorganizado em um price lockup centralizado dentro do box de compra, com o CTA separado e também centralizado.

## Fundo da seção final

- A seção “Seu lugar é no palco” agora usa `foto3.jpg` como plano de fundo, com parallax vertical suave, overlay escuro em gradiente e glow rosa para manter o texto e o CTA legíveis em desktop e mobile.

## Redesign cinematográfico do Ato II

- Os quatro boxes, a linha de conexão e os marcadores circulares anteriores foram removidos como estrutura visual. O Ato II agora funciona como uma narrativa editorial contínua sobre a foto2.jpg.
- A abertura usa a headline “Não é só tocar. É entender a levada.” em escala expressiva, seguida de quatro capítulos assimétricos: Levada real, Variações rítmicas, Timbres & sonoridades e Acordes aplicados.
- Cada capítulo usa índice, ícone discreto, tag, texto curto e uma marca gráfica vertical que pulsa como um sinal de groove. Não há dependência de hover para compreender o conteúdo.
- O scroll movimenta a fotografia e desloca os capítulos com amplitudes moderadas. Em telas pequenas, a composição vira fluxo vertical, sem pinning e sem deslocamentos agressivos.
- A implementação usa Framer Motion e CSS, já presentes no projeto, em vez de adicionar dependências. A escolha segue a referência de storytelling com ScrollTrigger, que recomenda animar transform/opacity e simplificar por breakpoint, e a referência Lenis, que reforça manter o scroll nativo e respeitar reduced motion.

Referências técnicas consultadas: [GSAP ScrollTrigger Storytelling](https://github.com/MengTo/Skills/blob/main/agent-skills/web-design/gsap-scrolltrigger-storytelling/SKILL.md) e [Lenis](https://github.com/darkroomengineering/lenis).

## Ajuste de títulos e índices dos Atos I e II

- Os índices numéricos dos capítulos do Ato II foram removidos. A leitura agora acontece por tag, ícone, título e descrição, sem a sequência visual 01–04.
- O Ato I foi recriado como uma narrativa de quatro cenas — No palco, No ensaio, No estúdio e Na comunidade — sem os antigos números de experiência, shows, horas e alunos.
- Os títulos principais dos dois atos usam revelação tipográfica vertical por linha, com clipping, easing editorial e fallback para movimento reduzido.
