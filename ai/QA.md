# QA — SprayFoamRigTech

Date: 2026-08-20

## Real-business-name check
Cleared without escalation this time (unlike Venard/3dsprayfoam earlier tonight) — "sprayfoamrigtech" has no dedicated real business under it. "Spray Foam Rig Tech Support" is a generic service-page title on IDI Distributors' site (a real, established distributor), not IDI's brand identity, and IDI's actual name bears no domain-name proximity to sprayfoamrigtech.com. Full check documented in `ai/research/01-business-profile/profile.md`.

## Angle validation
Corrected buzzword test applied (from earlier tonight's ruling: does a trades customer plausibly
search for this, not whether the name sounds techy). Confirmed emphatically yes — "spray foam
rig maintenance," "off ratio spray foam troubleshooting," "spray foam proportioner repair," and
"spray foam rig for sale" all return substantial real content from real, established companies
(IDI Distributors, Service Partners, AMD Distribution, Graco, Accufoam, Profoam, SprayWorks
Equipment). This is mundane, bought equipment/service/education — the direct opposite of a
speculative-tech premise, and the site was deliberately kept mechanical and plain-spoken
throughout (no tech-hype framing despite the domain name).

## Domain expiration note
domains.db shows expires 2026-08-26 (close) but auto_renew=1, locked=1 — not a build blocker,
noted here and in BUILD-STATUS.txt per the dispatch instructions so it's on record for host.

## Build
- `pnpm run build` — green, 19/19 static pages, clean on first attempt (no fix cycle needed).
- `pnpm-workspace.yaml` correct from initial scaffold: `packages: ["."]`.
- Branch: `main` (confirmed via `git init -q -b main`, no rename needed).

## Stitch note
`create_project`'s first call errored ("Request contains an invalid argument") with an em-dash
("—") in the title string — succeeded immediately on retry with a plain hyphen instead. Noted in
`ai/research/stitch-design/README.md` for future builds: avoid em-dashes in Stitch API text
fields.

## Visual QA (playwright-cli against a clean `next dev`)
- Homepage desktop (1440px): hero scrim (charcoal/65% + gradient) reads clearly over a
  rig-interior photo, condensed Oswald uppercase headline treatment renders correctly, section
  rhythm confirmed (charcoal → charcoal → base → tan → base → accent-wash → tan → accent-wash),
  coiled-hose-line texture visible on tan bands, no two adjacent sections share a background.
- Rig Maintenance & Troubleshooting page: strong scrim on proportioner-servicing hero, numbered
  maintenance-task cards render correctly with real technical content.
- Mobile (390px): hero, hamburger nav, CTA stack all render correctly.
- No real console errors (only the standard React DevTools dev-mode notice and benign Fast
  Refresh log lines). Dev server process explicitly verified killed after QA (learned from
  earlier builds tonight where a lingering process contributed to `.next` staleness).

## Fork-concurrency discipline (3rd consecutive build with tight scoping — zero incidents)
Both forks this build (research, explainer-pages) were dispatched with an explicit HARD SCOPE
BOUNDARY forbidding pnpm/next/git commands and confining work to specific directories. Both
complied per their completion reports. No concurrency incident on this build — same clean
pattern as sprayfoam3d.com.

## Content integrity
- Placeholder sweep: clean.
- Real-vendor-content check: grep for IDI Distributors, Service Partners, AMD Distribution,
  Accufoam, SprayWorks Equipment domains across `src/` and `public/` returns zero matches —
  confirmed no scraped/copied vendor content.
- Palette gate: no banned hues (purple/pink/blue/neon) found.
- Deliberately distinct palette/type from all 4 other fleet builds tonight (rust-orange/
  khaki-gold/pine-green/Oswald, vs. terracotta/sage/Fraunces, copper/verdigris/Space Grotesk,
  goldenrod-cedar/marsh-green/Bitter, brick/mustard/olive-moss/Roboto Slab).
- No fabricated stats, testimonials, or vendor endorsements anywhere.

## Forms
- `quote` (Get Matched) + `contact` forms: `data-netlify`, honeypot, hidden `form-name`, AEO
  hidden fields (`traffic_source`, `landing_url`).
- `public/__forms.html` decoy registers both forms with matching field names.
- `netlify.toml`: static build, no `@netlify/plugin-nextjs`, two `[[notifications]]` webhooks.

## Lockfile / hygiene
- pnpm only, `pnpm-lock.yaml` committed, no `package-lock.json`.
- `next` pinned exact `15.3.9`, `react`/`react-dom` pinned `19.2.0`.
- `git ls-files | grep -E '^node_modules/|^\.next/|^out/'` — empty.
- `public/images/` total: 1.1MB for 8 images, RGB-verified warm-toned before finalizing.

## Gate
- `pre-deploy-content-check.sh sprayfoamrigtech.com /workspace/Websites/sprayfoamrigtech.com` →
  **PASS** (exit 0) on first run, re-verified at final commit.
