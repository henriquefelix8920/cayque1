# Motion design — Comunidade dos Ritmos

## Direção

Movimento inspirado em palco e performance musical: entradas com ritmo, leitura em camadas e profundidade discreta. A intenção é conduzir o olhar sem competir com a música, as fotografias ou a copy.

## Motor e estratégia

- Framer Motion já presente no projeto para entradas do hero, animações de componentes e estados de interface.
- Controlador leve com requestAnimationFrame e getBoundingClientRect() para sincronizar as transições dos painéis com a rolagem nativa.
- IntersectionObserver para revelar títulos, subtítulos, parágrafos e ícones quando entram na área de leitura.
- Nenhuma dependência adicional foi instalada.

## Storyboard

| Área | Movimento |
|---|---|
| Hero | Mantém a entrada escalonada de eyebrow, título, texto e CTAs; vídeo/fundo e conteúdo já acompanham suavemente a rolagem. |
| História | Painel A: aproximação em perspectiva, escala e leve rotação 3D conforme o centro da seção atravessa a viewport. |
| Ritmos | Painel B: entrada de cima para baixo com perspectiva e escala reduzida. Os quatro ícones e blocos de texto são revelados ao entrar na viewport. |
| Curso/comunidade | Painel A: profundidade 2.5D aplicada à seção inteira, incluindo o plano de fundo. |
| Depoimentos | Painel B: deslocamento vertical contínuo; título, texto de apoio e ícones recebem reveal. |
| Comunidade e galeria | Mantêm a alternância A/B, com reveals nos títulos, textos e ícones. |
| CTA final | Mantém a entrada Framer Motion já existente e recebe painel A/B conforme a posição da seção na sequência. |
| Navegação e botões | Mantêm transições de hover/foco existentes; o botão flutuante abre uma conversa no WhatsApp. |

## Coreografia A/B das seções

Após o hero, as seções alternam:

- **A — profundidade:** perspective(1400px), translate3d, translateZ, rotateX, escala progressiva e opacidade. O painel avança visualmente do fundo ao primeiro plano.
- **B — descida:** translateY negativo que progride até zero quando a seção chega ao centro da viewport; inclui perspectiva, rotação e escala sutis.
- O estado é recalculado com a posição atual do scroll, portanto também regride ao rolar para cima. A rolagem nativa não é capturada nem substituída.

## Responsividade e acessibilidade

- Desktop: transição de profundidade completa, com amplitude limitada.
- Tablet: intensidade reduzida.
- Telas de até 700 px: painéis permanecem estáticos para preservar o fluxo vertical; os reveals de conteúdo continuam leves.
- prefers-reduced-motion: reduce: controlador de profundidade e reveals são desativados, e todo o conteúdo permanece visível.
- Caso IntersectionObserver não esteja disponível, os reveals não são aplicados e o conteúdo permanece visível.
- Não há pinning ou scroll-jacking.

## Validação

A implementação foi gravada no GitHub. A inspeção visual real em navegador, em diferentes viewports e com movimento reduzido, ainda precisa ser executada no ambiente de preview/publicação; não é declarada como concluída nesta etapa.