# Personal Website Repository Instructions

These instructions apply to the entire repository, including the Astro application in `website/`.

## 1. Read before changing anything

Before any code or content change:

1. Read this file completely.
2. For any UI, CSS, layout, component, page, image, or interaction change, also read `docs/UI_DESIGN_SYSTEM.md`.
3. Run `git status --short --branch` and inspect the diff. The worktree may contain changes from another Codex session. Do not overwrite, revert, stage, or reformat unrelated changes.
4. Inspect the target page and at least two established adjacent pages before designing. Existing code is evidence, not automatic approval: a recently added page may itself be the visual regression under review.
5. The active site is under `website/`. Run site commands from that directory.
6. Do not push or deploy unless the user explicitly asks.

## 2. Product direction

This is a Chinese-first personal site for an AI Agent researcher and engineer. It combines:

- Starfolio-like clarity, warmth, icons, spacing, and subtle motion;
- a research/engineering portfolio information architecture;
- structured projects, internships, CV, Blog, and personal stories;
- static-first Astro deployment to GitHub Pages.

The site must feel like one coherent product. A new page must not introduce a separate visual identity.

The design target is:

> Clear, calm, credible, lightly expressive, modern, and easy to scan.

The design target is not:

> Editorial spectacle, dashboard density, full-screen presentation slides, or isolated high-contrast theme experiments.

## 3. Non-negotiable visual rules

### 3.1 Color and contrast

- The default canvas is white or very light neutral gray.
- Use soft blue, violet, cyan, green, orange, or warm neutral accents in bounded components.
- Global tokens in `website/src/styles/global.css` are the source of truth. A page may add one principal accent and one soft tint; it must not define an independent multi-color product palette without approval.
- Black/dark colors are allowed for buttons, icons, small labels, bounded cards, code blocks, and focused media components.
- Do not insert a full-width or viewport-scale dark section into an otherwise light page without an explicit user decision.
- Do not switch an entire section to white text on near-black merely to create visual drama.
- Prefer a light tinted section (`#f7f8fb`, `#f1f6ff`, or a low-opacity gradient), white cards, colored borders, and subtle shadows.
- Large visual contrast changes must be discussed before implementation.

Historical rejected anti-pattern in this repository:

- An uncommitted draft of the internship page used `.internship-causal-section { background: #111a2a; color: white; }`. It created an abrupt presentation-slide block inside a light personal website. Commit `bc57ac5` changed that section to a light blue surface, so do not claim the dark rule is still current; retain it as a rejected historical example.
- Commit `bc57ac5` is **not** a visual baseline to copy wholesale. Although it corrected the black section, it still introduced a page-local palette, 11-12px structural labels, 1180px full-width sections, 46px section headings, 470px report-style cards, and a separate orange callout system. These are examples of partial correction without full product consistency.

### 3.2 Typography

- Chinese is the primary language. Use English only for established technical terms, product names, or short supporting labels.
- Avoid excessive tiny uppercase English eyebrows and numbered labels.
- Visible structural labels should normally be at least 13px. Do not use 11-12px text for section navigation, card meaning, status, or information the user must scan.
- Body text should generally be 16-20px on desktop and at least 15-16px on mobile.
- Section titles should use a consistent hierarchy. Do not invent one-off 60-80px titles in the middle of a page.
- Use bold and underline selectively to emphasize important facts; do not use color alone.
- Keep line lengths readable and avoid wide paragraphs spanning the full viewport.

### 3.3 Layout and spacing

- Reuse the established content widths and spacing scale in `website/src/styles/global.css`.
- Prefer `.container`, `.main-column`, `.page-header`, `.home-section` / `.content-section`, and `.section-heading` before creating page-specific width and heading systems.
- Keep sections aligned to the same page grid.
- Use stable document flow. Transforms and animations must not make cards overlap adjacent content or footers.
- Avoid large empty areas that do not contribute to hierarchy.
- Avoid dense multi-column grids when a simple list or two-column layout is easier to read.
- Every section transition must feel intentional: use spacing, a subtle divider, a soft background tint, or bounded cards—not an abrupt theme inversion.
- A page should not read like a sequence of presentation slides. Avoid repeating numbered chapter labels, oversized statements, KPI grids, and methodology frameworks when a concise personal narrative or case-study section is sufficient.

### 3.4 Components

- Reuse existing shared components before creating page-specific variants.
- Buttons should follow the existing `.button.primary` and `.button.secondary` language.
- New buttons must have clear labels, adequate hit targets, consistent radius, and visible hover/focus states.
- Cards should use the established white/light surface, subtle border, moderate radius, and soft shadow.
- Icons must be recognizable. Prefer trusted icon libraries or verified official logos. Record third-party logo/image sources.
- Do not use unexplained abstract glyphs when a standard home, folder, article, mail, GitHub, or briefcase icon exists.
- Do not add another local navigation or Dock style that conflicts with the global header and Dock.
- If a single page requires a new palette plus new heading, card, badge, callout, and navigation styles, stop: first simplify the design or extract a genuinely shared component system.

## 4. Page-specific rules

### Home

- Lead with identity, role, and strongest proof.
- Keep the hero compact enough that the next section is visible or nearly visible on a normal laptop.
- Visual motion should support the introduction, not dominate it.

### Projects

- Project lists must show all projects clearly and remain in normal document flow.
- Detail pages should distinguish actual implementation, evidence, metrics, and external reference material.
- Do not present external research figures, benchmarks, or assets as original work without clear permission and provenance.
- Crop embedded paper captions/page numbers when the page already provides its own caption.

### Internships and CV

- Use real, verified organization logos. Store source records near the assets.
- Keep descriptions evidence-based. Draft or inferred claims must be marked as drafts until confirmed.
- Avoid turning the internship page into a corporate presentation deck. It must still look like the same personal site.
- Lead with company, role, contribution, and a small number of outcomes. Detailed methodology, causal frameworks, or metric taxonomies belong in a linked project case study or Blog unless they materially improve the résumé narrative.
- Do not publish internal platform names, vulnerability classes, security findings, operational details, or company metrics unless the owner explicitly approves the exact public wording.

### Blog

- Markdown H2/H3/H4 headings automatically drive the article table of contents.
- Preserve readable article width, sticky desktop TOC, mobile collapsible TOC, and anchor behavior.
- Imported Feishu/Markdown content should keep logical heading hierarchy and localize images.

## 5. Motion and background rules

- Motion must be subtle, optional, and safe for `prefers-reduced-motion`.
- Good: small fade/reveal, soft floating background, icon hover, gentle card elevation.
- Bad: large parallax, strong 3D tilt, constant distracting movement, or animation that changes layout geometry.
- Background effects must remain low contrast and cannot reduce text legibility.

## 6. Content and source integrity

- Do not fabricate project results, metrics, employment details, or completed capabilities.
- Clearly distinguish verified results, current work, drafts, and future direction.
- Keep third-party image/logo provenance in a nearby `SOURCES.md` when applicable.
- Do not strip required attribution or imply authorship of third-party work.
- Public pages must not expose private/internal information or sensitive company details.

## 7. Required validation for UI work

A UI task is not complete after source edits. At minimum:

1. Run from `website/`:
   - `npm run check`
   - `npm run build`
2. Inspect the real page in a browser at a desktop viewport around 1440px.
3. Inspect at a mobile viewport around 390px.
4. Check for horizontal overflow, clipped text, overlapping cards, broken images, unreadable contrast, and misplaced sticky/fixed elements.
5. Verify interactive behavior: navigation, menu, Dock/tooltips, filters/search, TOC, anchors, and downloads as applicable.
6. Compare the page against adjacent existing pages. The new page must look like the same product.
7. A successful build and a commit message claiming visual consistency are not design validation. Report the actual desktop/mobile comparison and any intentional deviations from shared tokens/components.
8. If deploying, verify the live GitHub Pages URL and important assets after the workflow succeeds.

## 8. Design review stop conditions

Stop and discuss before implementation if a proposal would:

- change the global color palette or typography;
- introduce a full-width dark theme section;
- replace the header, Dock, button system, or card system;
- add a new animation library or heavy client-side framework;
- create a page with a fundamentally different visual language;
- introduce more than one page-specific accent family or a parallel typography/card system;
- publish uncertain claims or private company information;
- substantially alter responsive breakpoints or navigation structure.

## 9. Git and deployment

- Preserve unrelated worktree changes.
- Do not rewrite history or use destructive Git commands.
- Use the existing `codex/` branch workflow unless the user requests otherwise.
- Do not push until explicitly authorized.
- Deployment builds from `main`, updates `gh-pages`, and is served from `gh-pages / (root)`. Recheck current workflow and branch state before deploying.
