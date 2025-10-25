## Project Snapshot
- Next.js 14 App Router app lives in `app/`; `app/layout.tsx` wires fonts, metadata, the global blur-fade observer, and base styles from `app/components/layout/base.css` (imports Tailwind preflight + project tokens).
- Home sections sit in `app/components/sections/` and are mounted by `app/page.tsx`; most files start with `'use client';` because scroll/animation hooks rely on the browser.
- Primary navigation comes from `app/components/navigation/FixedNavigation.tsx`; it maps IDs in `navigationTabs` (e.g. `recent-projects`, `about-me`) to observed sections, so keep IDs stable when adding or reordering content.
- Project case studies live under `app/projects/<slug>/`; each `page.tsx` wraps content in `<ProjectShell>` from `app/components/projects/index.tsx` and wires a `LeftProjectNavigation` sidebar.

## Styling & Assets
- Global spacing, type ramps, and CSS variables are defined in `app/styles/layout.css`; tweak tokens there instead of scattering hard-coded values.
- Section-specific CSS lives beside components in `app/components/**/styles/`; import the needed file at the top of each component rather than using Tailwind utility classes.
- Static media is stored in `ASSETS/` and pulled in via the `@assets/*` alias; `@/*` resolves to `app/*` (see `tsconfig.json`).
- `global.d.ts` declares modules for images/video so TypeScript accepts `import hero from '@assets/PULSE/posters.jpg';` without extra typing work.

## Animation & Interaction Patterns
- `app/components/layout/BlurFadeObserver.tsx` auto-observes nodes marked with `data-animate="blur-fade"` and optional `data-animate-delay`; tag new elements to inherit the reveal effect.
- `FixedNavigation` and `LeftProjectNavigation` both depend on IntersectionObserver; avoid removing the hidden radio inputs or `aria` attributes that support focus states.
- `LeftProjectNavigation` derives anchors from `legacySectionMap` when given a `projectType`; ensure each `<ProjectSection>` sets `anchor`/`id` matching that map (e.g. `ProjectSection anchor="pulse-research"`).
- Use `<SectionDivider />` between project sections for consistent spacing and scroll tracking; the divider also doubles as a nav anchor target.

## Project Components
- `ProjectShell` accepts an optional `cover` with image or video props; videos go through `VideoEmbed`, which rewrites YouTube/Vimeo URLs and handles autoplay/loop flags.
- `ProjectMeta` inside `ProjectShell` auto-groups entries; labels listed in `inlineMetaLabels` render inline, so prefer those keys (`Year`, `Team`) for concise summaries.
- Galleries use `MediaCarousel` (`app/components/projects/MediaCarousel.tsx`); pass `autoPlay={false}` if motion should pause and mind the CSS vars it emits for thumbnail grids.
- Shared survey charts and cards for the Pulse project live in `app/components/projects/SurveyStats.tsx`; edit the data arrays there instead of duplicating markup.

## Forms, Builds & Env
- `app/components/sections/Contact.tsx` posts via EmailJS; set `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in `.env.local`. Without them the form simulates success but does not send mail.
- Preserve the hidden `company` honeypot field in the contact form; it prevents spam submissions.
- Install dependencies with `pnpm install`, run locally via `pnpm dev`, lint with `pnpm lint`, and create production builds using `pnpm build` followed by `pnpm start` for smoke tests.
- No automated tests exist; rely on manual verification plus linting when introducing new interactive flows.
