# Comunidade dos Ritmos — Cayque Gomes

Landing page da Comunidade dos Ritmos, com conteúdo sobre guitarra aplicada a forró, piseiro, arrocha e corinho de fogo.

## Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Desenvolvimento
Requisitos: Node.js compatível com Vite 6 e npm.

```bash
npm install
npm run dev
```

## Verificações
```bash
npm run typecheck
npm run build
```

A saída de produção é gerada em `dist/`. Ela não deve ser versionada; a Vercel executa `npm run build` e publica o resultado.

## Publicação
O projeto `cayque1` está conectado à Vercel pela integração Git na branch `main`. Commits nessa branch podem iniciar um deployment de produção.

## SEO e domínio
Os metadados sociais e sitemap usam temporariamente `https://cayque1.vercel.app/`. Quando o domínio próprio for escolhido e conectado, atualizar `index.html` (Open Graph e canonical) e `public/sitemap.xml`/`public/robots.txt` para o novo endereço.