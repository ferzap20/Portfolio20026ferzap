# Portfolio 20026 (ferzap) — Project Context

> Part of the `Projects/` workspace. This is the **write boundary**: only edit files
> here. Root + sibling projects are read-only (enforced by the PreToolUse guard hook).
> See `../../CLAUDE.md` and `../../KNOWLEDGE.md` for global context and reusable fixes.

## What it is

Fernando's personal portfolio website. Originally a Figma export
(figma.com/design/NnszSsGtbs9RJrlTGFeK05), since extended with structured project
sub-pages, tables of contents, and LLM-findability work (semantic HTML / discoverability).

## Architecture

React + TypeScript + **Vite**, styled from the Figma export. Icons via FontAwesome
(`@fortawesome/*`) and Lucide; animation via `motion`. Content is organized into project
pages with sub-pages and TOCs. Static SPA build → `dist/`.

> **`.npmrc` gotcha:** FontAwesome packages are pinned to the public registry
> (`@fortawesome:registry=https://registry.npmjs.org/`) — keep that line or installs break.

## Run / build

- `npm i` — install
- `npm run dev` — Vite dev server
- `npm run build` — `vite build` → `dist/`
- `npm run preview` — preview the build
- `npm run start` — `serve -s dist -l 3000` (static production serve)

## Deployment

Coolify on the home server → **`ferzapata.fr`** (migrated from OVH hosting to Coolify on
2026-05-10; see `../../home_server_summary.md` §11/§16). Static SPA; `dist/` is git-ignored.

## In progress / notable

- **LLM-findability** (`llms.txt`, JSON-LD, semantic HTML) — there's a `plan_llm_reading.md`
  tracked as a pending task for `ferzapata.fr` in `../../home_server_summary.md`. Commit
  history shows initial "llm findable" work already landed.
- Project sub-page structure + tables of contents are the most recent feature work.

## Deeper references (in this repo)

- `.claude/implementation_guide_v2.md` — detailed build/implementation guide (large; the
  authoritative deep reference for structure and decisions).
- `guidelines/` — design/content guidelines from the Figma export.
