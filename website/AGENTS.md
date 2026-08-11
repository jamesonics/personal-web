# Astro Frontend Instructions

This directory inherits all rules from [`../AGENTS.md`](../AGENTS.md).

Before changing any Astro page, component, CSS, visual asset, layout, or interaction:

1. Read `../AGENTS.md` completely.
2. Read `../docs/UI_DESIGN_SYSTEM.md` completely.
3. Inspect the target page and at least two established neighboring pages.
4. Reuse shared tokens and components before adding route-specific CSS.
5. Remember that recent implementation is not automatically the approved baseline. In particular, commit `bc57ac5` contains useful content work and a corrected light causal section, but its page-local palette, tiny labels, oversized repeated headings, report-style cards, and one-off callout must not be copied as the site-wide visual direction.
6. Validate at desktop 1440px and mobile 390px, then run `npm run check` and `npm run build`.

Do not push or deploy without explicit user authorization.
