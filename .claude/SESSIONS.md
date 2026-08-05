# Portfolio 20026 — Session Log

Append-only. Newest entries at the top. Updated via `/wrap` at the end of each session.
Each entry: date, what changed, what's next, and anything worth promoting to
`../../KNOWLEDGE.md`.

---

## 2026-08-05 — Umami Part B, homepage IA restructure, subtitle repositioning

Shipped Umami Part B: tracking script in `index.html` + `data-umami-event` attrs on
`cv-download` (both nav buttons), `contact-email-click`, `email-copy`, `linkedin-click`
(commit `4662f97`). Prototyped the UX audit's "restructure by problem, not skill" IA
change as a toggleable Claude Artifact mockup, then implemented it on the real homepage:
"Browse Case Studies" (3 skill-category cards) replaced with "Featured Work" — a flat
grid of all 6 case studies using the existing shared `CaseStudyCard` component (same
title/description/pills/image as each case study's own category page, just surfaced a
level higher). Category pages/nav/routes untouched. Fixed a Contact-button corner-radius
mismatch between homepage and subpages (standardized on `rounded`, not `rounded-full`,
per Fernando's preference). Repositioned the hero/meta subtitle to lead with AI and cut
it from 245 to 178 characters — updated in `App.tsx` hero copy, `index.html` (meta
description, OG, Twitter), `JsonLd.tsx`, and both `public/llms*.txt` files.

**Next / open:** **Future work — AI case study promotion.** Fernando's upcoming Personal
Projects content (Timap, PrepShot as full launched products + several AI-built
experiments) should NOT stay in the lightweight "Personal Projects" bucket — they're now
the proof behind the new AI-positioned subtitle. Plan discussed: promote Timap + PrepShot
to full case-study treatment (same `CaseStudyCard`/`SubPageLayout` pattern, Problem/
Action/Result rigor) alongside the professional work; keep smaller experiments in a
lighter log/grid format. Not started — waiting on Fernando to provide the project
content. Also still open from prior sessions: `ferzapata_ux_audit.docx` has more
recommendations beyond the IA restructure (hero headline rewrite was partially done via
the subtitle change; impact metrics on cards are now present via the new grid; still
open: elevate 2-3 "featured" case studies more prominently, "Who I work with" section,
deprioritize old Personal Projects visually — largely superseded by the AI-repositioning
plan above). IA restructure, button fix, and subtitle changes are uncommitted in the
working tree — confirm with Fernando before committing/pushing.

## 2026-08-02 — Umami Part A landed (server)

Confirmed with Fernando: Umami analytics **Part A** is done — self-hosted Umami deployed on
Coolify at `analytics.ferzapata.fr` (Cloudflare DNS/tunnel/NPM per `.claude/deploy_umami.md`).
No site-side code in the repo yet: verified `index.html` and `src` have zero `umami` /
`data-umami-event` references; last commit still `d8e30d0`.

**Next / open:** **Part B is blocked on two values** from the Umami dashboard — Script URL
(`https://analytics.ferzapata.fr/script.js`) + Website ID (`data-website-id` UUID). Once
Fernando sends them, add the `<script>` to `index.html` and `data-umami-event` attrs on
`cv-download` (both CV buttons), `contact-email-click`, `email-copy`, `linkedin-click`, then
commit to redeploy. Also still open: `ferzapata_ux_audit.docx` triage; sub-page/TOC polish.

---

## 2026-08-01 — Reconcile open tasks

Verified repo state against the stale log.

**Done since seed entry:**
- LLM-findability complete: `public/llms.txt` + `llms-full.txt`, `JsonLd.tsx`, `Breadcrumb.tsx`
  shipped. `plan_llm_reading.md` removed. (Log had this as open.)
- Product Lead repositioning + LinkedIn/SEO meta (commit `d8e30d0`).

**Open:**
- **Umami analytics** — `deploy_umami.md`. Part A (server: Cloudflare DNS/tunnel/NPM/Coolify)
  is Fernando's; Part B (script tag + `data-umami-event` attrs) is blocked on him sending the
  Script URL + Website ID. No umami code in repo yet.
- `ferzapata_ux_audit.docx` (untracked, repo root) — UX audit findings not yet triaged/actioned.
- Ongoing project sub-page / TOC polish.

---

## 2026-06-03 — Workspace onboarding (seed entry)

Reconstructed from git history; not a real work session. Added this project to the
`Projects/` workspace: `.claude/CLAUDE.md`, this log, the read-only root mount in
`.claude/settings.json`, and the `.claude/hooks/guard-write.ps1` write-guard. Preserved
the existing `Bash(npm run build:*)` allow rule in settings.

**Where it stands** (git, latest first): bug fixes, **new sub-page structure for projects**,
table of contents on project pages, "llm findable" work, added index/sections, removed
`dist/` from git tracking, and `serve`-based static production hosting.

**Next / open:**
- Implement `plan_llm_reading.md` for `ferzapata.fr` — `llms.txt`, JSON-LD, semantic HTML
  (tracked in `../../home_server_summary.md` pending tasks).
- Continue polishing project sub-pages / TOC.

**Deploy note:** live on `ferzapata.fr` via Coolify since 2026-05-10.
