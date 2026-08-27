# Central SGD — SIPIA-CT (Teresina/PI)

Aplicação web de integração, orientação e capacitação dos órgãos do Sistema de
Garantia de Direitos (SGD) de Teresina/PI em relação ao SIPIA-CT.

**Importante:** esta Central não substitui o SIPIA-CT oficial e não realiza
cadastro de operadores. Ela apenas orienta, organiza e acompanha o fluxo
municipal.

## Stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS
- Sem backend nesta V1 — dados das instituições ficam no `localStorage` do
  navegador, com a estrutura já pensada para migrar ao Supabase.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Deploy na Vercel

1. Suba este projeto para um repositório no GitHub/GitLab/Bitbucket.
2. Em https://vercel.com, clique em **New Project** e importe o repositório.
3. Framework preset: **Next.js** (detectado automaticamente). Não é
   necessário configurar variáveis de ambiente nesta V1.
4. Clique em **Deploy**.

## Próximos passos (V2 — Supabase)

A camada de dados está isolada em `lib/data.js`. Para migrar para o Supabase:

1. Criar as tabelas `instituicoes` e `responsaveis` conforme os comentários
   no topo de `lib/data.js`.
2. Instalar `@supabase/supabase-js` e configurar as variáveis de ambiente
   `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` na Vercel.
3. Substituir as funções `listInstituicoes`, `getInstituicao`,
   `createInstituicao`, `updateInstituicao` e `removeInstituicao` por
   chamadas ao client do Supabase, mantendo as mesmas assinaturas — as
   páginas não precisam ser alteradas.
4. Avaliar autenticação (ex.: Supabase Auth) para proteger o Painel
   administrativo, hoje aberto por V1 ser uma versão simples e de baixo
   custo.

## Estrutura de páginas

- `/` — Página inicial institucional
- `/fluxo` — Explicação do fluxo SGD → Conselho Tutelar
- `/sipia` — Passo a passo de cadastro e uso do SIPIA-CT (orientativo)
- `/instituicoes` — Lista de instituições participantes
- `/instituicoes/nova` — Cadastro de instituição e responsáveis
- `/materiais` — Manuais, tutoriais e materiais de apoio
- `/painel` — Painel administrativo da Coordenação Municipal do SIPIA
