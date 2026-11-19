# Relatório de auditoria — Comunidade dos Ritmos

**Data:** 19 de novembro de 2026  
**Repositório:** `henriquefelix8920/cayque1`  
**Branch auditada:** `main`  
**Hospedagem:** Vercel — projeto `cayque1`

## Resumo executivo

A versão anterior estava publicada e respondia normalmente, mas havia pontos de fluidez, manutenção e SEO a corrigir antes da ligação do domínio. Esta rodada corrige os problemas identificados no código e prepara metadados e arquivos de indexação. A inspeção visual em navegador e a medição Lighthouse/PageSpeed não puderam ser executadas neste ambiente; portanto, não há pontuação de Core Web Vitals ou aprovação visual presumida.

## Desempenho e velocidade

### Medidas confirmadas no build de produção anterior a esta rodada

| Item | Resultado do build |
|---|---:|
| Build Vite | 3,55 s |
| Tempo total até deployment | aproximadamente 6 s |
| Módulos transformados | 1.724 |
| HTML | 1,07 kB (0,58 kB gzip) |
| CSS | 79,59 kB (14,86 kB gzip) |
| JavaScript | 318,29 kB (101,02 kB gzip) |

Os tamanhos vieram do log Vercel; não representam medição de velocidade percebida nem substituem Lighthouse ou dados de usuários.

### Assets relevantes

- Vídeo desktop do hero: aproximadamente 2,00 MB.
- Vídeo mobile do hero: aproximadamente 505,5 kB.
- Poster do hero (`foto1.webp`): aproximadamente 122,7 kB.
- Fotografias AVIF da galeria: aproximadamente 22–55 kB cada.
- Prints de depoimentos WebP: aproximadamente 22–85 kB cada.

### Causas prováveis dos engasgos encontradas e correções aplicadas

1. As seções usavam `content-visibility: auto` com `contain-intrinsic-size: 800px`. A altura provisória fixa pode mudar quando o conteúdo real é renderizado e provocar deslocamentos durante a rolagem. A regra foi removida.
2. O controlador 2.5D calculava o progresso por `getBoundingClientRect()` depois de aplicar `transform` no próprio painel. Isso criava realimentação entre a posição medida e a transformação anterior. O cálculo agora usa `offsetTop`/`offsetHeight` e a posição de layout.
3. O vídeo do hero tinha `preload="metadata"` e `autoPlay`, mesmo quando a reprodução era controlada por um `IntersectionObserver`. Agora o navegador recebe `preload="none"` e o vídeo começa apenas quando o hero está visível e a preferência de movimento permite.
4. O HTML carregava `/portfolio-preview-scroll.js`, mas esse caminho respondia 404 na implantação. A referência foi removida, eliminando uma requisição quebrada e o aviso correspondente do Vite.
5. A animação continua com scroll nativo, `requestAnimationFrame`, simplificação para telas de até 700 px e respeito a `prefers-reduced-motion`.

### Métricas de campo

- Não há valores de LCP, INP, CLS, FCP ou TTFB apresentados: não foi obtida amostra válida de Speed Insights/CrUX para este projeto.
- Lighthouse/PageSpeed não foi executado nesta rodada.
- HTML e assets principais foram consultados na implantação Vercel anterior e respondiam HTTP 200. Isso confirma disponibilidade, não a fluidez da renderização no dispositivo.

## Responsividade

### Revisão estática

- Há regras específicas de layout em 560, 620, 700, 760 e 900 px.
- A galeria adapta a composição para telas menores.
- Os cartões de redes sociais passam de três colunas para uma coluna em telas menores.
- A animação de profundidade das seções é desligada em até 700 px; a intensidade é reduzida em tablets.
- O hero utiliza um arquivo de vídeo mobile separado e menor que o desktop.
- Menu mobile, navegação por âncoras, botões de contato e CTAs foram revisados estaticamente.

### Limitação

Não foi possível abrir a página em navegador com viewports reais de 360×800, 390×844, 768×1024, 1024×768 e 1440×900. Overflow, cortes, sobreposições, toque e fluidez visual ainda precisam de inspeção visual no preview após o novo build.

## SEO técnico

- `lang="pt-BR"` mantido.
- Título e descrição revisados para refletir a oferta e os ritmos ensinados.
- Metadados Open Graph e Twitter adicionados.
- Favicon SVG adicionado.
- `robots.txt` e `sitemap.xml` adicionados.
- A referência de script de preview que retornava 404 foi removida.
- O endereço canônico foi deixado pendente até a definição do domínio próprio. `og:url` e sitemap usam `https://cayque1.vercel.app/` como endereço provisório e devem ser atualizados na etapa do domínio.

## Acessibilidade e experiência

- `prefers-reduced-motion` permanece contemplado no CSS e nos controladores de movimento.
- Foco visível permanece definido por `:focus-visible`.
- Imagens informativas da galeria e depoimentos possuem texto alternativo; imagens secundárias decorativas usam `alt` vazio.
- Textos de microcopy com opacidade baixa (`text-white/35`, `/40` e `/45`) foram elevados para melhorar a legibilidade sobre o fundo escuro.
- Não foi executado axe, Lighthouse Accessibility ou teste manual com leitor de tela/teclado nesta rodada.

## Integridade do repositório

- `BRIEFING_ANALYSIS.md` continha notas internas antigas e informações desatualizadas; foi removido da árvore pública.
- A pasta `dist/` versionada era uma compilação antiga e redundante. Foi retirada do repositório e adicionada ao `.gitignore`; a Vercel continua gerando `dist/` no build.
- O README vazio foi substituído por instruções de instalação, build e publicação.

## Pendências antes de ligar o domínio

1. Confirmar o novo build Vercel desta revisão e abrir o preview em desktop e celular.
2. Executar Lighthouse/PageSpeed depois do novo build e, depois de receber tráfego, acompanhar Core Web Vitals de usuários reais.
3. Ao definir o domínio, atualizar `og:url`, as URLs do sitemap e adicionar `rel="canonical"` apontando para o domínio definitivo.
4. Confirmar com Cayque as informações comerciais exibidas (preço de R$ 127, acesso vitalício, atualizações e aula mensal) antes de promover a página como versão final.

**Conclusão:** as correções estáticas de desempenho, SEO básico e higiene do repositório foram preparadas. O domínio próprio deve aguardar a verificação visual do novo deploy, pois não seria correto declarar responsividade ou Core Web Vitals aprovados sem essas medições.