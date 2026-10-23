# 🎬 BRIEFING ANALYSIS — Cayque Gomes

## FASE 1: Direção de Arte

### Gênero Cinematográfico
**Documentário Musical / Road Movie Nordestino**
A estética combina a autenticidade crua de documentários musicais (como "Sound of Metal" e "Buena Vista Social Club") com a energia vibrante de shows ao vivo. A atmosfera transmite a realidade do palco, bastidores e estúdio.

### Paleta de 6 Cores
| Cor | Hex | Uso |
|-----|-----|-----|
| Preto Profundo | `#0a0a0a` | Base / Background |
| Roxo Escuro | `#1a0a2e` | Profundidade / Sombras |
| Roxo Médio | `#6b21a8` | Elementos interativos |
| Rosa Neon | `#ff2d7b` | Acento / CTAs / Destaques |
| Dourado | `#f59e0b` | Preço / Elementos premium |
| Branco Off | `#fafafa` | Texto / Contraste |

### Tipografias
- **Display:** Space Grotesk — Moderna, geométrica, com personalidade musical
- **Body:** Inter — Legibilidade máxima para textos longos
- **Accent:** JetBrains Mono — Código, labels técnicos, detalhes

### Moodboard de Referências
1. **"Whiplash" (2014)** — Intensidade, suor, dedicação ao instrumento
2. **"La La Land" (2016)** — Iluminação roxa/rosa, atmosfera de palco
3. **"A Star is Born" (2018)** — Autenticidade, bastidores, conexão palco-plateia
4. **"Sound of Metal" (2019)** — Som como protagonista, imersão sensorial
5. **"Dune" (2021)** — Escala, iluminação dramática, contraste profundo

### Estrutura Narrativa em 5 Atos
1. **Prólogo (Hero):** "A guitarra do piseiro, sem mistério" — Promessa imediata
2. **Ato I (Sobre):** Quem é Cayque — autoridade pelo palco, não pelo diploma
3. **Ato II (Método):** Os 4 pilares — levada, variações, timbres, acordes
4. **Ato III (Curso):** Ritmos de Piseiro — o produto como ferramenta de transformação
5. **Epílogo (CTA):** "Seu lugar é no palco" — chamada final cinematográfica

### Atmosfera
- **Grain overlay** — textura de filme analógico (3.5% opacidade)
- **Glow effects** — luzes de palco difusas (roxo/rosa)
- **Parallax** — profundidade no scroll
- **Equalizer bars** — barras animadas no hero (referência musical)
- **Vignette** — escurecimento nas bordas (foco no centro)

---

## FASE 2: Copy Cinematográfica

### Headline
**"A guitarra do piseiro, sem mistério."**
- Tagline de trailer: direta, promissora, sem clichê
- 7 palavras — dentro do limite de 8

### Subheadline
**"Levadas, timbres, acordes e variações — aprenda com quem vive o palco, o ensaio e o estúdio."**
- Promessa concreta e específica
- Autoridade pela experiência, não por títulos

### CTAs
- "Entrar no curso" — ação direta
- "Ver o método" — curiosidade
- "Garantir meu acesso" — urgência sem pressão
- "Seu lugar é no palco" — identificação emocional

### Metáforas Visuais
- Palco = o lugar do aluno
- Luzes de show = energia e atmosfera
- Equalizer = musicalidade em movimento
- Mãos na guitarra = prática real

---

## FASE 3: Repositórios Relevantes (Stack Utilizada)

1. **framer-motion** — Animações UI (motion components, useScroll, useTransform)
2. **GSAP + ScrollTrigger** — Scroll-based animations
3. **Lucide React** — Ícones minimalistas e consistentes
4. **Tailwind CSS 4** — Utility-first styling com @theme
5. **Vite** — Build tool de alta performance

---

## FASE 4: Componentes Implementados

1. **Hero Cinematográfico** — Parallax, glow, equalizer, imagem de fundo
2. **Navegação Fixa** — Blur on scroll, mobile fullscreen
3. **Seção Sobre** — Stats grid + imagem + citação
4. **Método (4 Pilares)** — Cards com hover gradient, números grandes
5. **Curso/Pricing** — Border gradient animated, features list
6. **Depoimentos** — Cards com quote icon, avatares com gradiente
7. **CTA Final** — Scale on scroll, glow intenso
8. **Footer** — Links, redes sociais, créditos
9. **Grain Overlay** — Textura de filme fixa
10. **Scroll Progress Bar** — Progress indicator no topo

---

## FASE 5: Arquitetura de Animações

### Easings Utilizados
- **Entradas:** `[0.22, 1, 0.36, 1]` — Cinematic ease-out
- **Springs:** `stiffness: 100, damping: 20` — Movimentos orgânicos
- **Transições:** `duration: 0.8` — Ritmo cinematográfico

### Scroll Triggers
- Hero: parallax no título (y: 0 → -150)
- About: fade-in + slide com useInView
- Method: stagger de 0.15s entre cards
- Course: border gradient animada
- CTA: scale 0.95 → 1 no scroll

### Efeitos Visuais
- **Grain:** SVG noise filter a 3.5% de opacidade
- **Glow:** box-shadow com blur de 40-80px
- **Parallax:** useScroll + useTransform
- **Equalizer:** CSS keyframes com delays aleatórios
- **Gradient shift:** background-position animation

---

## FASE 6: Decisões Técnicas

### Por que React + Vite (não Next.js)?
O ambiente de desenvolvimento utiliza Vite como bundler. A estrutura foi adaptada para funcionar perfeitamente com React + Vite + Tailwind CSS 4, mantendo toda a qualidade cinematográfica.

### Performance
- CSS variables via @theme (Tailwind 4)
- Animações com `will-change` implícito via Framer Motion
- Imagens com loading nativo
- Code splitting automático via Vite
- Bundle final: ~96KB gzipped (JS) + ~7KB (CSS)

### Acessibilidade
- `aria-label` em botões e links
- `aria-hidden` em elementos decorativos
- Contraste AA em textos
- `prefers-reduced-motion` respeitado
- Focus states visíveis

### Mobile-First
- Grid responsivo (1 col → 2 col)
- Tipografia fluida (text-4xl → text-8xl)
- Menu mobile fullscreen
- Animações adaptadas

---

## Variações do Hero (A/B Test Mental)

### Variação A (Implementada)
- Background com imagem de guitarrista no palco
- Título centralizado com glow rosa
- Equalizer bars na base
- CTA "Entrar no curso" + "Ver o método"

### Variação B (Alternativa)
- Background com vídeo em loop (guitarra sendo tocada)
- Título alinhado à esquerda
- Cursor customizado seguindo o mouse
- Equalizer lateral em vez de base
- CTA único grande com preço integrado

---

## Suposições Criativas Documentadas

1. **Nome do curso:** "Ritmos de Piseiro" — baseado no briefing
2. **Preço:** R$ 97 — confirmado no briefing
3. **Stats (10+ anos, 500+ shows, etc.)** — estimativas criativas baseadas na experiência descrita
4. **Depoimentos:** fictícios mas realistas, representando o público-alvo
5. **Redes sociais:** links placeholder (#) — a serem preenchidos com URLs reais
6. **Imagens:** geradas por AI com estética de palco roxo/rosa

---

✅ Site gerado. Próximo passo: revisão com cliente.
