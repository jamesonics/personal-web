# UI Design System and Visual Memory

This document records the visual direction established through repeated review and iteration with the site owner. Read it before designing or editing any page.

## 1. Design statement

The website should feel like a polished personal portfolio for an AI Agent researcher/engineer:

- clear before clever;
- credible before decorative;
- light, open, and calm;
- lively through icons, subtle backgrounds, real imagery, and small interactions;
- consistent across Home, Projects, Research, Blog, Internships, About, and CV.

The reference spirit is Starfolio: constrained reading width, strong but not oversized headings, comfortable typography, recognizable icons, rounded components, meaningful whitespace, and restrained animation.

Do not copy a template literally. Preserve the owner's Chinese-first research and engineering identity.

## 2. Existing visual language

### Base palette

Use existing CSS tokens whenever possible:

```css
--bg: #ffffff;
--surface: #f6f6f6;
--surface-hover: #f0f0f0;
--text: #171717;
--muted: #666666;
--subtle: #8a8a8a;
--border: #e4e4e4;
--black: #171717;
--white: #ffffff;
```

Recommended section surfaces:

- white: default page canvas;
- `#f7f8fb`: neutral light section;
- `#f1f6ff` to `#f8fbff`: soft blue research/engineering section;
- very low-opacity colored blobs or dot backgrounds for identity;
- bounded dark media cards only when visually justified.

### Accent colors

Use small amounts of:

- blue for system architecture and technical structure;
- cyan for tools/integration;
- orange for energy, status, or a warm focal point;
- green for validated/healthy states;
- violet for Blog/creative accents.

Accent color should not become a second page theme.

## 3. Typography

Primary font stack:

```css
'Outfit', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, sans-serif
```

Guidelines:

| Role | Desktop target | Mobile target |
|---|---:|---:|
| Home/page H1 | 48-72px | 38-48px |
| Section H2 | 27-42px | 25-35px |
| Card H3 | 18-25px | 18-23px |
| Lead/body | 17-22px | 16-18px |
| Secondary text | 13-16px | 13-15px |

Rules:

- Do not scatter many unrelated font sizes.
- Avoid visible text below 13px except compact metadata.
- Avoid long uppercase English labels. If used, keep them short and supporting.
- Chinese section titles carry the hierarchy; English is secondary.
- Important claims may use `font-weight: 700` plus underline with a comfortable underline offset.

## 4. Layout system

Established widths:

- `.container`: broad page content up to about 1120px;
- `.main-column`: primary readable content, typically 760-960px depending on page;
- Blog article body: about 720-760px;
- Article desktop TOC: about 260px.

Spacing principles:

- Standard section vertical padding: about 44-75px for ordinary sections;
- larger case-study sections may use 90-110px, but should not create empty screens;
- use 12-20px card gaps;
- keep consistent left edges between headings, text, cards, and figures.

## 5. Component rules

### Header

- Sticky white/translucent header.
- Centered primary navigation on desktop.
- GitHub action on the right.
- Mobile uses a clear menu button and full-screen light menu.
- Do not add a second competing header style on one page.

### Buttons

Use existing variants:

- primary: dark filled button;
- secondary: white/light outlined button.

Target:

- height 46-56px depending on prominence;
- 9-12px radius;
- clear text labels and familiar icons;
- hover lift no more than 2-3px;
- visible keyboard focus.

Do not create page-local buttons with incompatible padding, radius, icon style, or color rules.

### Cards

Default cards:

- white or lightly tinted background;
- `1px` subtle border;
- 14-22px radius;
- soft shadow only when elevation is useful;
- no layout-changing 3D tilt;
- predictable title, description, metadata, and action placement.

### Full-width sections

Default: light surfaces with subtle tint or border transitions.

Allowed dark usage:

- a bounded card, media panel, code block, tooltip, or primary CTA;
- a deliberate photo/story card that remains visually bounded and balanced.

Forbidden without explicit approval:

- an entire full-width section switching to near-black inside a light page;
- white 60px+ headings on a black slab that resembles a slide deck;
- dark tables connected edge-to-edge across the viewport.

### Logos and icons

- Use verified organization logos, official brand assets, or trusted icon libraries.
- Do not invent a company logo.
- Record third-party logo sources in `SOURCES.md`.
- Use horizontal wordmarks in wide containers; do not force them into circles.
- Icons must be recognizable and have labels/tooltips when meaning is not obvious.

### Dock

- Use standard icons and explicit tooltips.
- Desktop only; hidden on mobile.
- Must not cover important page content.
- Long case studies may hide the Dock if it interferes with reading.

## 6. Background and motion

Good background treatments:

- low-opacity dot canvas;
- soft colored blobs fading into white;
- light blue/gray gradients;
- subtle grid lines in bounded technical hero areas.

Bad background treatments:

- a sudden full-screen near-black block;
- high-saturation gradients behind long text;
- movement that competes with content;
- decorative elements that create horizontal overflow.

Motion rules:

- respect `prefers-reduced-motion`;
- use 150-500ms transitions for UI interaction;
- use long, low-amplitude loops only for decorative background elements;
- never animate layout dimensions or create overlap.

## 7. Known failures and lessons

### Failure A: full-width dark causal section

Observed implementation:

```css
.internship-causal-section {
  background: #111a2a;
  color: white;
}
```

Combined with a very large white heading and connected dark grid cells, this creates a presentation-slide aesthetic and breaks continuity with the light personal site.

Why it fails:

- contrast changes at the scale of the whole viewport;
- it introduces a new page-specific theme;
- text hierarchy no longer matches Home/Projects/Blog;
- the section feels like a pasted deck rather than part of a portfolio;
- buttons, labels, and cells use a different visual grammar.

Preferred correction:

- use `#f1f6ff` or `#f7f8fb` section background;
- use dark text and blue accent;
- split content into independent white cards;
- use subtle borders and small colored labels;
- preserve the same section heading scale as adjacent sections.

### Failure B: connected project cards with 3D transforms

Earlier project cards visually left their grid and overlapped content/footer.

Rule: animations may elevate cards visually but must never change layout or cover adjacent content.

### Failure C: too many tiny English labels

The site previously used many 9-12px uppercase English eyebrows, making scanning difficult.

Rule: Chinese-first headings, fewer labels, and consistent typography.

### Failure D: abrupt visual reinvention per page

A single page must not define a new color palette, new heading system, new button system, and new card system together.

Rule: page-specific identity comes from content, illustrations, a small accent, and layout variation—not an entirely new design system.

### Failure E: source screenshots with embedded paper captions

Project images previously retained Figure labels, page numbers, and surrounding text.

Rule: crop source assets carefully, keep only the useful visual, and provide page-level captions/provenance separately.

## 8. Content presentation rules

- Lead with the user's role, contribution, and evidence.
- Quantified claims require an explainable baseline or source.
- Separate actual implementation from reference architecture or future direction.
- Do not expose internal ByteDance details or private data.
- Keep internship claims inside the publicly approved boundary.
- Project pages should read as credible case studies, not academic papers or pitch decks.

## 9. Responsive rules

Required viewports:

- desktop around 1440px;
- mobile around 390px.

Check:

- `document.documentElement.scrollWidth === innerWidth` or no visible overflow;
- navigation changes correctly;
- cards stack without clipping;
- images remain legible;
- sticky/fixed components do not cover text;
- headings do not create single-character or awkward line breaks;
- touch targets remain at least about 40-44px.

## 10. UI implementation workflow

Before editing:

1. Read root `AGENTS.md` and this document.
2. Inspect the target page and at least two adjacent pages.
3. Identify existing reusable components and tokens.
4. State whether the change preserves or alters the design system.

During editing:

1. Reuse shared components.
2. Keep CSS local to a component/page only when necessary.
3. Avoid appending a large new design system to `global.css` without reviewing existing selectors.
4. Do not override the same selector repeatedly at the bottom of the CSS file unless consolidating afterward.

After editing:

1. Run `npm run check` and `npm run build` from `website/`.
2. Preview locally.
3. Inspect desktop and mobile.
4. Check console errors and broken images.
5. Test interactions.
6. Compare against Home, Projects, and Blog.
7. Ask: “Does this still look like the same website?”

## 11. UI acceptance checklist

A page is acceptable only if all are true:

- [ ] It uses the established typography and color tokens.
- [ ] It has no unapproved full-width dark section.
- [ ] Buttons and cards match shared component language.
- [ ] Chinese is primary; English labels are limited.
- [ ] No text is unnecessarily tiny.
- [ ] No overlapping or horizontal overflow occurs.
- [ ] Mobile layout is intentionally designed, not merely compressed.
- [ ] Images and logos are verified and properly cropped.
- [ ] Animation is subtle and respects reduced motion.
- [ ] Claims and sources are honest.
- [ ] Build and browser validation passed.
