# ph-decks Guidelines & Rules

## Project Overview
"ph-decks" is a specialized slide presentation app for a 90-video SQA course (Programming Hero).
Built on a create-t3-app scaffold (Next.js App Router, TypeScript, Tailwind, `~/` alias, `src/` dir). No tRPC, no DB, no auth.

## Core Rules

1. **Stage**: Fixed 1920x1080 canvas, scaled uniformly via `transform: scale()`, letterboxed, no responsive reflow. Slides switch via `opacity`/`visibility`/`pointer-events`, NEVER `display: none`. Every slide root has `class="slide"`. Respect `prefers-reduced-motion`. Stage and slide components are `'use client'`.
2. **Theme**: Chosen style -> CSS variables -> Tailwind tokens. No raw hex colors in components. Fonts: display font + Noto Sans Bengali via `--font-bangla` (`.bangla { line-height: 1.5 }`). Bengali text must render with no clipping.
3. **Dedicated Slide Components & Lean Manifests**:
   - Each slide component lives in its own dedicated file: `src/components/slides/deckNN/SlideXX.tsx`.
   - `deck.ts` must ALWAYS remain a lean, clean registration manifest (<150 lines) importing those components and registering them via `{ type: "custom", component: SlideXX, stepCount: N, notes: "..." }`.
   - **STRICTLY BAN INLINE ARCHETYPE DICTIONARIES**: Never dump 800+ lines of raw JSON objects or inline archetype props into `deck.ts`.
4. **Dual Pipeline Standard (Mandatory for ALL Decks)**:
   Every presentation must exist in BOTH:
   1. `presentations/NN_slug/slides/slide-XX/` (HTML/CSS/MDX) compiled via `python build.py NN` into double-clickable, offline `presentation.html` with GSAP, linked in `index.html`.
   2. `ph-decks/src/components/slides/deckNN/SlideXX.tsx` as dedicated, bespoke React components with 60fps transitions and zero layout glitching.
5. **Registry**: `src/decks/index.ts` exports the list of metas and a `slug -> () => import("./NN_slug/deck")` map. Update it whenever a deck is added. Load metas eagerly, deck code lazily (per deck, not per slide).
6. **Routes**:
   - `app/page.tsx`: Home page, server component. Lists decks grouped by module with a client-side search field (filters title, titleBn, tags) and a status badge.
   - `app/deck/[slug]/page.tsx`: Deck viewer with `generateStaticParams`.
   - Current slide synced to `?slide=N` so a refresh keeps position.
   - Keys: `ArrowLeft`/`Right`, `Space`, `Home`/`End`, `F` fullscreen. In fullscreen hide all UI chrome and the cursor (recording mode).
7. **Animation & Transition Standard**:
   - Slide entrance: `.slide.visible .reveal`, `.reveal-left`, `.reveal-scale` with `.d1`–`.d10` delays.
   - Interactive steps: Driven by `#slide-X[data-step="N"]` attribute selectors or GSAP timelines.
   - Zero React re-render flashing; buttery 60fps transitions.
8. **Steps**: Step count is specified per slide (`stepCount: N`). A React context + `useStep()` hook drives reveals. Right arrow / Space advances step, then slide.
9. **Density & Layout**: Low-density default. One idea per slide, 1-3 bullets max, large type. Safe area: x 100–1820, y 72–940 (100px bottom clearance for floating nav).
10. **Export**: `scripts/export-pdf.ts` using Playwright, 1920x1080, waits for `document.fonts.ready`, loads each deck with `?export=true` (forces all steps revealed), screenshots every slide into a PDF, and reports any element that overflows the stage or overlaps another panel.
11. **Quality**: After each deck run `pnpm typecheck` and `pnpm lint`, and fix errors before reporting done. Keep code commented per section.
12. **Presentation Identity (Google Slides / PowerPoint Standard)**:
    - Every slide must look and feel like a high-end presentation deck (like in PowerPoint, Keynote, or Google Slides).
    - **Zero Debug / Test Harness Clutter**: Strictly NO unnecessary metadata pills, debug labels, or status tags inside the slide stage (e.g. `LIVE STAGE`, `SPEAKER-LED`, `16:9 FIXED`).
    - **Header Footprint**: Minimal, non-intrusive header with a sleek eyebrow on the left and the official Programming Hero SVG logo (`/ph-logo-svg/Secondary-White.svg` or `/ph-logo-svg/Main-White.svg`) on the right. Never waste vertical stage space.
    - **Stage Utilization**: Use the full 1920×1080 canvas with vertically centered content, bold confident typography, well-spaced cards, and 100px bottom clearance above the floating navigation pill.
    - **Title Highlights**: Always guarantee `titleHighlight` is rendered with accent gradients/colors, regardless of whether `title` already contains it.

## Phased Deck Creation Workflow (Automated Protocol)

When creating or planning a new presentation deck (Videos 02–90):
1. **Step 1 — Source Input & Mandatory Interview**:
   - Read `DECK_BRIEF.md` at project root for the user's slide outline, raw notes, or bullet points.
   - **Ask questions upfront** regarding layout, step reveals, animation preferences, and key callouts.
2. **Step 2 — Structure into 3–4 Narrative Phases**:
   - Break the slide deck into 3–4 logical phases (e.g., Phase 1: Hook & Core Problem, Phase 2: The Core Lifecycle/Wheel Diagram, Phase 3: Applied Comparisons & Scenarios, Phase 4: Synthesis & Takeaways).
3. **Step 3 — Present Design & Motion Plan (STOP & WAIT FOR APPROVAL)**:
   - For every slide in each phase, specify:
     - **Title & Bengali line** (enforcing `.bangla` line-height 1.5 and min 18px text).
     - **Visual Archetype** (`HeroTitle`, `CircularWheel`, `ComparisonSplit`, `ProcessLane`, `ThreeColumn`, `Matrix2x2`, `BugReportMonospace`, `RecapGrid`, or Custom SVG).
     - **Motion & Step Reveal**: Step count (`data-steps`), initial step, entrance animation delays (`.d1`–`.d8`), or orbital travel dot keyframes.
     - **Safe Area**: Enforce 100px clearance above stage bottom for the floating navigation pill.
   - **STOP and wait for the user's approval** before writing code.
4. **Step 4 — Implement Dual Pipeline & Verify**:
   - Create source slides in `presentations/NN_slug/slides/slide-XX/` (`slide-XX.html`, `slide-XX.css`, `preview.html`).
   - Run `python build.py NN` to produce standalone `presentation.html` and update `index.html`.
   - Create dedicated React slide components in `ph-decks/src/components/slides/deck02/SlideXX.tsx`.
   - Wire deck into `ph-decks/src/decks/NN_slug/deck.ts` with `{ type: "custom", component: SlideXX }`.
   - Run `pnpm typecheck` and `pnpm lint`.
   - Run Playwright export script `scripts/export-pdf.ts` to verify 0 stage overflows at 1920×1080 and generate the PDF.
   - Report live preview URL at `http://localhost:3005/deck/NN_slug`.
