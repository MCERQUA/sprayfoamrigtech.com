# Stitch Design Generation — SprayFoamRigTech

Stitch project: `projects/2576000697716647399`
Model: `GEMINI_3_PRO`, deviceType `DESKTOP`, no designSystem attached (maximizes section depth
per stitch-auto-brief.md hard rule).

Note: the initial `create_project` call errored on the first attempt with an em-dash ("—") in
the title string ("Request contains an invalid argument") — succeeded immediately on retry with
a plain hyphen instead. Worth remembering for future builds: avoid em-dashes in Stitch API text
fields, use a hyphen.

## Screens generated (real Stitch API output, verified via response parsing)
1. **Home** — `.stitch-pages/home.html` + `screenshots/home.png`. Strong first-attempt
   coverage: hero, definition band, equipment grid, why-it-matters, on-ratio-vs-off-ratio /
   common-issues grid, footer.
2. **Rig Maintenance and Troubleshooting** — `.stitch-pages/rig-maintenance-and-
   troubleshooting.html` + `screenshots/maintenance.png`. Clean first attempt; "Mastering the
   Machine" hero, routine maintenance numbered list with real detail (filter changes, hose
   inspection).
3. **Why Rig Quality Matters** — `.stitch-pages/why-rig-quality-matters.html` +
   `screenshots/quality.png`. Clean first attempt; strong coverage including an "Informed
   Homeowner" questions band.

All three confirmed on-brand via screenshot review: rust-orange/khaki-gold/parchment/charcoal
palette, zero purple/pink/blue, condensed industrial headline type, "Dialed In" gauge motif
present, section-rhythm respected.

## Content-safety note
None of the three Stitch generations reference IDI Distributors, Service Partners, AMD
Distribution, Graco, Accufoam, or any other real equipment vendor by name — every prompt used
only generic, real technical facts (off-ratio causes, routine maintenance tasks, foam quality
indicators) with no vendor-specific claims.

## Use in build
Stitch output is the authoritative visual/style reference for every hand-built Next.js page.
Get Matched, About, Contact, blog, and legal pages follow the SAME design system by
construction, per `ai/design/component-plan.md` + `ai/design/page-wireframes.md`.
