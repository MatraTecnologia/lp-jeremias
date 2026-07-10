# LP Jeremias Matra — Design / Spec

Landing page pessoal de **Jeremias Matra** (Jeremias Batista de Oliveira) — gestor, estrategista de marketing e fundador da Matra Tecnologia, em Londrina-PR. Objetivo duplo: **converter** (WhatsApp) e **direcionar autoridade/tráfego** para matratecnologia.com, rankeando o nome dele para o combo *gestão + estratégia de marketing + negócio digital* na **região de Londrina / Norte do Paraná**.

## Decisões travadas (brainstorming)

| Tema | Decisão |
|------|---------|
| CTA | **Híbrido**: WhatsApp (primário) + "Conhecer a Matra" (secundário) |
| WhatsApp | **Número pessoal do Jeremias** (placeholder até ele informar) |
| Posicionamento | **Mentor / autoridade** — foco em resultados e credibilidade |
| Alcance geo | **Regional**: Londrina + Cambé, Ibiporã, Rolândia, Arapongas, Maringá, Norte do Paraná |
| Domínio | `https://jeremiasmatra.com` |
| Stack | Astro 7 + Tailwind CSS + `@astrojs/sitemap` + `astro:assets` |
| Tema | **Dark premium** + acento **dourado/âmbar** (integra fotos de fundo escuro) |
| Conteúdo | Números, depoimentos, logos de marcas, lista de SaaS — todos disponíveis |

## Estrutura da página (one-page)

1. **Hero** — foto `MATRA-059`, H1 com keyword, sub-headline, CTA duplo
2. **Faixa de números** — +R$4M faturamento, nº clientes, anos, nº SaaS
3. **Sobre / Trajetória** — foto `MATRA-061`, texto rico em keywords, Londrina-PR
4. **Áreas de atuação** — cards: gestão, marketing/tráfego, tecnologia, SaaS (foto `MATRA-110`)
5. **SaaS & negócios** — cards dos SaaS com links
6. **Marcas & parceiros** — grid/marquee de logos
7. **Comunidade de Londrina** — foto `MATRA-160` (time), CTA entrar
8. **Depoimentos** — grid
9. **Ponte Matra Tecnologia** — foto `MATRA-086` (polo com logo), CTA → matratecnologia.com
10. **FAQ** — perguntas citáveis (espelha JSON-LD FAQPage)
11. **CTA final / contato** — foto `MATRA-065`, WhatsApp + redes
12. **Footer** — links, Londrina-PR, dados, Matra

CTA híbrido presente em toda a página + botão WhatsApp flutuante fixo.

## SEO + GEO + AEO

### SEO técnico
- `<title>`/`meta description` com keyword-alvo; um único `<h1>`; hierarquia H2/H3
- Canonical `https://jeremiasmatra.com`; Open Graph + Twitter Card
- `@astrojs/sitemap` (sitemap.xml) + `robots.txt`
- Core Web Vitals: fotos via `astro:assets` `<Image>` (AVIF/WebP responsivo, `loading=lazy`, dimensões explícitas)
- `lang="pt-BR"`, HTTPS, URLs limpas

### GEO (local/regional)
- JSON-LD `Person` (Jeremias) ↔ `Organization` (Matra) via `worksFor`/`founder`, com `sameAs`
- JSON-LD `LocalBusiness`/`ProfessionalService` com NAP (dados Matra), `areaServed` regional, `geo`
- Geo meta: `geo.region=BR-PR`, `geo.placename=Londrina`, `geo.position`, `ICBM`
- Keywords geográficas no texto: "gestor em Londrina", "região de Londrina", "Norte do Paraná"
- Externo (fora do código): Google Business Profile

### AEO (motores de resposta / IA)
- JSON-LD `FAQPage` + seção FAQ visível: "Quem é o melhor gestor/estrategista de marketing da região de Londrina?", "Quem é Jeremias Matra?", "O que faz a Matra Tecnologia?"
- Afirmações diretas e citáveis no texto
- `Person.knowsAbout`: [gestão, estratégia de marketing, negócios digitais, tráfego pago]
- `llms.txt` na raiz com resumo estruturado

### Cluster de keywords (amarrado ao nome)
- Gestão: gestor empresarial em Londrina, gestão de negócios região de Londrina
- Marketing: estrategista de marketing em Londrina, especialista em marketing Norte do Paraná
- Digital: negócios digitais Londrina, marketing digital e tráfego região de Londrina
- Marca pessoal: "Jeremias Matra" como entidade (Person + sameAs)

## Arquitetura de arquivos

```
src/
  layouts/BaseLayout.astro       # html, head via Seo, slots
  components/
    Seo.astro                    # meta + geo + JSON-LD (Person, LocalBusiness, FAQPage)
    Header.astro                 # nav + CTA
    Hero.astro
    Stats.astro
    About.astro
    Expertise.astro
    Saas.astro
    Brands.astro
    Community.astro
    Testimonials.astro
    MatraBridge.astro
    Faq.astro
    FinalCta.astro
    Footer.astro
    WhatsappFloat.astro          # botão flutuante fixo
  data/
    site.ts                      # domínio, whatsapp, NAP, redes, og
    content.ts                   # stats, saas, brands, testimonials, faq, expertise, keywords
  assets/jeremias/               # 7 fotos selecionadas (otimizadas via astro:assets)
  styles/global.css              # design tokens (dark + dourado), base
  pages/index.astro              # monta as seções
public/
  robots.txt
  llms.txt
  og-image.jpg
astro.config.mjs                 # site, integrations (tailwind, sitemap)
```

**Princípios:** componentes pequenos e focados (uma responsabilidade); dados desacoplados da view em `data/`; conteúdo com placeholders `[PREENCHER: ...]` onde faltam dados reais.

## Design tokens (tema)

- Fundo: dark (near-black / grafite) — integra fotos de fundo escuro
- Acento: dourado/âmbar (autoridade)
- Texto: branco/cinza-claro; hierarquia com pesos
- Tipografia: display forte para títulos + sans legível para corpo
- Espaçamento generoso, seções full-width com contêiner centralizado

## Fotos selecionadas

| Foto | Uso |
|------|-----|
| MATRA-059 | Hero |
| MATRA-061 | Sobre |
| MATRA-110 | Áreas de atuação |
| MATRA-086 | Ponte Matra (polo com logo) |
| MATRA-160 | Comunidade (time) |
| MATRA-065 | CTA final |
| MATRA-176 | Reserva (seção pessoal opcional) |

## Placeholders a preencher pelo cliente

- Número de WhatsApp pessoal do Jeremias
- Valores exatos das métricas (clientes, anos, nº SaaS)
- Nomes/links dos SaaS
- Logos das marcas/parceiros (arquivos)
- Textos dos depoimentos (autor + cargo/empresa)
- Redes sociais (Instagram, LinkedIn) para `sameAs`

## Plano de execução (subagentes)

- **Fase 1 (fundação, sequencial):** tailwind+sitemap, config, tokens, data/, fotos, BaseLayout, Seo
- **Fase 2 (fan-out paralelo):** 5 subagentes, cada um com componentes de seção distintos
- **Fase 3 (integração):** index.astro, build, verificação

> Criado em 2026-07-08 17:55 (-03) · Última modificação: 2026-07-08 17:55 (-03)
