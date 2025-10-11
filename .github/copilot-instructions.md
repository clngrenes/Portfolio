# Copilot Instructions

## Fast overview
- Next.js 14 App Router project; global shell lives in `app/layout.tsx` and imports `app/components/layout/base.css` for CSS variables, Tailwind preflight, and typography.
- Landing page content is composed in `app/page.tsx` from section components under `app/components/sections`; stick to the `site-section` class to inherit spacing rules from `app/styles/layout.css`.

## Styling, motion, accessibility
- Animations rely on the `[data-animate="blur-fade"]` pattern plus `BlurFadeObserver` (see `app/components/layout/BlurFadeObserver.tsx`); add the data attribute and optional `data-animate-delay` instead of new animation hooks.
- `app/styles/layout.css` defines all spacing, typography, and color tokens—reuse those CSS variables before adding new values.
- Base styles re-export Tailwind v4 utilities, but the codebase favors handcrafted CSS classes; only reach for Tailwind utilities already exposed via `layout.css` helpers.
- Maintain `aria-*` attributes already present (e.g., FAQ list roles, carousel buttons) when editing interactive components.

## Navigation contracts
- The sticky tab bar in `app/components/navigation/FixedNavigation.tsx` watches section IDs (`recent-projects`, `about-me`, `insights`, `contact-section`); update `navigationTabs` if you rename sections.
- Project and insight detail pages use `LeftProjectNavigation` (`app/components/navigation/LeftProjectNavigation.tsx`) to build sidebars. Add new anchors through the `legacySectionMap` or pass a custom `items` prop when sections change.

## Project & insight shells
- `ProjectShell` and helpers in `app/components/projects/index.tsx` wrap every case study; use `ProjectSection` so the `data-project-anchor` attribute stays in sync with the sidebar.
- Cover media can be a static image or video: set `cover.video = true` to automatically route through `VideoEmbed` which resolves YouTube/Vimeo URLs and local files.
- Insight articles (`app/insights/**/page.tsx`) reuse the same shell; components in `app/insights/components` provide ready-made sections (`SpotifySections`, etc.).
- Unpublished insight routes can return `notFound()` (see `app/insights/choice-overload-ai/page.tsx`).

## Contact workflow
- The contact form (`app/components/sections/Contact.tsx`) posts via EmailJS using `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, and `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`; without these env vars it falls back to a simulated delay.
- Keep the honeypot `company` field and `aria-live` feedback when changing validation or status handling.

## Assets & media
- Import imagery and video through the `@assets` alias configured in `next.config.js`; supported file types are declared in `global.d.ts` so TypeScript knows about them.
- When adding new media folders, follow the existing `ASSETS/<PROJECT>` naming and reference files via static imports to benefit from Next Image optimization.

## Tooling & expectations
- Package manager is pnpm (`pnpm-lock.yaml`); use `pnpm install`, `pnpm dev`, `pnpm build`, and `pnpm lint`.
- TypeScript is `strict`; introduce new client components with a leading `'use client'` directive whenever they touch state, effects, or browser APIs.
- Prefer extending existing section data arrays (e.g., project lists in `Projects.tsx`, FAQ items) rather than hardcoding JSX duplicates.
- No automated tests are configured; rely on `pnpm lint` and a manual Next preview when verifying changes.
- For additional libraries, update `package.json` and commit the regenerated lockfile.
