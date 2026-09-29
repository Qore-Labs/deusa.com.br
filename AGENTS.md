<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Padrões do projeto

- Nas seções da home, mantenha a estrutura semântica e o conteúdo estático em `app/page.tsx`, que é um Server Component. Extraia para um Client Component somente a parte que precisa de estado, efeitos ou eventos do usuário, como um carrossel. Não crie um componente para a seção inteira apenas para organizá-la.
- Coloque os dados de slides e cards em `src/utils/content/<secao>.ts` e seus tipos em `src/types/<secao>.ts`. Importe esses dados nos componentes; evite arrays de conteúdo e textos repetíveis definidos dentro do JSX. Siga `empathy.ts` e `services.ts` como referências.
- Nos arquivos de `src/types/`, sempre extraia objetos aninhados e itens de arrays de objetos para tipos auxiliares nomeados, no mesmo arquivo do tipo principal. Use nomes ligados ao domínio, como `ImageServices`, `CTAServices` e `StickerServices` em `src/types/services.ts`, e referencie esses tipos no tipo exportado (`image: ImageServices`, `cta: CTAServices`, `stickers?: StickerServices[]`). Evite declarar a estrutura desses objetos diretamente dentro do tipo principal; mantenha campos primitivos simples nele. Exporte tipos auxiliares apenas quando forem usados em outros arquivos.
- Renderize coleções com `.map()` e um único componente reutilizável para cada tipo de card ou slide. Nos arquivos de conteúdo, importe `v4 as uuidv4` do pacote `uuid` e defina `id: uuidv4()` em cada objeto (`_id` quando o tipo existente já usar esse nome). Gere o ID na definição do array, nunca dentro do `.map()` ou da renderização do componente. Use esse ID como chave do item. Modele variações visuais e elementos opcionais nos dados e nos tipos, sem criar componentes ou ramificações fixas para cada item. Adicionar um card deve exigir apenas um novo objeto no array de conteúdo, quando ele seguir a estrutura existente.
- Antes de criar ou baixar imagens e ícones, procure os assets já existentes em `public/` e os ícones em `src/components/UI/Icons.tsx`. Ao implementar uma referência do Figma, use o plugin para conferir o design e baixe apenas as imagens que faltarem, da referência correta.
- Não coloque arquivos `.svg` em `public/`. Converta ícones SVG necessários em componentes React tipados e adicione-os a `src/components/UI/Icons.tsx`, seguindo o padrão dos ícones existentes.
- Prefira classes canônicas do Tailwind CSS v4 quando forem equivalentes no tema do projeto. Siga sugestões `tailwindcss(suggestCanonicalClasses)` que preservem o resultado visual, como `max-w-6xl` no lugar de `max-w-288`. Verifique os tokens e o espaçamento ativos antes de substituir classes e preserve variantes responsivas e de estado.
