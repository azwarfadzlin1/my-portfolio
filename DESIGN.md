---
name: Azwar Fadzlin Portfolio — Current Design
description: A source-derived baseline of the existing dark software engineering portfolio before its overhaul.
colors:
  canvas: "#000000"
  body-background: "oklch(14.1% 0.005 285.823)"
  glass-surface: "oklch(21% 0.006 285.885 / 40%)"
  project-surface: "#0A0A0A"
  contact-surface: "#0F0F11"
  form-surface: "#141416"
  field-surface: "#1A1A1C"
  heading: "#FFFFFF"
  text-primary: "oklch(98.5% 0 0)"
  text-secondary: "oklch(87.1% 0.006 286.286)"
  text-body: "oklch(70.5% 0.015 286.067)"
  text-muted: "oklch(55.2% 0.016 285.938)"
  border-subtle: "#FFFFFF1A"
  border-strong: "oklch(27.4% 0.006 286.033)"
  accent-blue: "oklch(70.7% 0.165 254.624)"
  accent-blue-solid: "oklch(54.6% 0.245 262.881)"
  accent-indigo: "oklch(58.5% 0.233 277.117)"
  accent-purple: "oklch(71.4% 0.203 305.504)"
  action-light: "oklch(93.2% 0.032 255.585)"
  action-ink: "oklch(37.9% 0.146 265.522)"
  focus-ring: "#93C5FD"
typography:
  display-mobile:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  display-desktop:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "6rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.333333
  body:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.625
  body-large:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.333333
rounded:
  control: "8px"
  field: "12px"
  card: "16px"
  project-card: "24px"
  pill: "9999px"
spacing:
  unit: "4px"
  small: "8px"
  compact: "12px"
  regular: "16px"
  gutter: "24px"
  card: "32px"
  wide: "48px"
  section-gap: "64px"
  section-padding: "80px"
components:
  button-email:
    backgroundColor: "{colors.action-light}"
    textColor: "{colors.action-ink}"
    rounded: "{rounded.field}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "#00000000"
    textColor: "{colors.heading}"
    rounded: "{rounded.control}"
    padding: "16px 32px"
  filter-active:
    backgroundColor: "{colors.accent-blue-solid}"
    textColor: "{colors.heading}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  glass-card:
    backgroundColor: "{colors.glass-surface}"
    rounded: "{rounded.card}"
    padding: "32px"
  project-card:
    backgroundColor: "{colors.project-surface}"
    rounded: "{rounded.project-card}"
  input:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.heading}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
  glass-chip:
    backgroundColor: "#FFFFFF0D"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: Azwar Fadzlin Portfolio

## Overview

**Status:** Current implementation snapshot, documented on 11 October 2026. This file describes the website before its proposed complete overhaul. It is a baseline, not an approved direction for the redesign. Existing choices are recorded accurately even where they would benefit from replacement.

**Current visual direction:** A dark technical portfolio with glass surfaces, blue and violet light effects, oversized geometric typography, and a large circular portrait. This is a descriptive label inferred from the implementation; no separate creative concept has been approved.

The page presents Azwar's software engineering work, current FIUU Product Development internship, education, and Experian experience. The visual hierarchy starts with a large personal introduction, then moves through project cards and résumé-style information. White headings and muted gray paragraphs sit on a nearly black canvas. Blue identifies actions and current status; purple and indigo distinguish capability categories and decorative effects.

**Key characteristics:**

- One long scrolling page with fixed navigation and anchor links.
- Black and charcoal surfaces with translucent white borders.
- Archivo display headings paired with Space Grotesk body text.
- Blue-to-indigo gradient lettering and localized colored glows.
- Repeated rounded cards, technology chips, and icon-led headings.
- A circular photograph as the hero's main visual asset.
- Staggered entrances, hover transitions, and continuous decorative motion.

### Page structure

| Order | Area | Current presentation |
| --- | --- | --- |
| 1 | Fixed header | Text wordmark, Home / Projects / Experience / Contact links, résumé download |
| 2 | Hero (`home`) | FIUU status pill, greeting and name, introduction, two actions, circular portrait |
| 3 | Featured Highlights | Three capability cards: Mobile Development, Web Development, Cloud & Data |
| 4 | Selected Works (`projects`) | Category filters and three project cards with media, descriptions, and technology tags |
| 5 | Experience (`experience`) | Two-column layout: story and education on the left; professional timeline on the right |
| 6 | Technical Arsenal (`skills`) | One large panel containing three grids of emoji-led skills |
| 7 | Certificates & Awards (`certificates`) | Heading and a bulleted list inside a glass card |
| 8 | References (`references`) | Two cards containing professional reference information |
| 9 | Contact (`contact`) | Layered outer panel, introductory text, contact-information card, email-draft form |
| 10 | Footer | Name, copyright, social/contact links, visitor badge |

Only four areas appear in the main navigation. Skills, certificates, and references remain part of the page without dedicated navigation links. There are no project detail routes, modal case studies, or theme switcher.

### Layout and responsive behavior

- Main content and header use a centered maximum width of 80rem (1280px), including their padding.
- Main horizontal padding is 24px, increasing to 32px at the large breakpoint. Header padding is 16px, increasing to 24px at the small breakpoint.
- The main wrapper has 128px top padding and 64px bottom padding. Most sections use 80px padding above and below; adjacent sections therefore create substantial vertical separation.
- Grid gaps commonly use 24px or 32px. The hero and desktop experience columns use 64px gaps.
- Paragraph introductions frequently use a maximum width of 42rem (672px); this is a width constraint, not a consistent character-based measure.
- Breakpoints come from Tailwind defaults: small at 640px, medium at 768px, large at 1024px. These are implementation breakpoints, not device detection.
- The hero stacks with the portrait above its text below 1024px, then becomes a horizontal two-column composition.
- Highlight cards become three columns at 768px. Projects become two columns at 768px. Story/experience, references, and contact become two columns at 1024px.
- Skill grids start with two columns. At 640px they become three; at 1024px the three groups use six, four, and five columns respectively.
- Navigation becomes a second, full-width row below 768px. There is no hamburger menu. Links retain a minimum height of 44px.
- Anchor sections have 144px scroll margin to accommodate the fixed header. Long headings, paragraphs, and links allow wrapping anywhere. The main wrapper clips overflow.

### How the website is built

| Source | Responsibility |
| --- | --- |
| `app/layout.tsx` | Root HTML/body, English language, metadata, font loading, decorative background, motion provider, no-JavaScript reveal fallback |
| `app/page.tsx` | Server Component composing page sections and static portfolio content; uses client motion primitives through `framer-motion/client` |
| `app/globals.css` | Tailwind import, font aliases, blob animation, glass-card/chip classes, focus styling, anchor spacing, reduced-motion rules, scrollbars |
| `components/Navbar.tsx` | Server-rendered fixed header, responsive anchor links, résumé link, skip link |
| `components/ProjectGallery.tsx` | Client-side filter state, project card markup, media and source/demo links |
| `components/ContactForm.tsx` | Client-side native form validation, whitespace validation, encoded `mailto:` draft, feedback text |
| `components/VisitorCounter.tsx` | External visitor-count request, validation, timeout, loading/error/count display |
| `components/MotionProvider.tsx` | Framer Motion configuration respecting the user's reduced-motion preference |
| `lib/animations.ts` | Shared fade-and-rise and stagger variants |
| `lib/supabase.js` | Optional Supabase client; not imported by the current portfolio page |
| `public/` | Portrait, project screenshots, local image assets, favicon, current and older résumé PDFs |

The stack is Next.js 16.2.6 App Router, React 19.2.4, TypeScript, Tailwind CSS 4, Framer Motion 12, Lucide React, and React Icons. Styling is primarily inline Tailwind utility composition, with two reusable CSS component classes. There is no custom Tailwind configuration file or comprehensive semantic token layer. Most colors, radii, and spacing decisions remain embedded in markup.

Fonts are loaded with `next/font/google`, exposed as CSS variables, and mapped to the `font-sans` and `font-heading` utilities in Tailwind's CSS-first theme. Images use `next/image` with responsive size hints. The homepage is statically prerendered, then interactive components hydrate in the browser. Content is hardcoded, without a CMS. The package scripts provide development, production build, production serving, and ESLint commands.

## Colors

The palette combines a nearly black foundation, cool zinc text, and blue/purple accents. Frontmatter records the source values: Tailwind colors retain their canonical OKLCH notation, while literal project colors remain hex. Alpha values describe translucent layers, not their final composited screen color. Some external token tools prefer hex and may need conversion when importing this document.

### Primary

- **Action Blue** (`accent-blue`): Contact links, form labels, highlight icons, status indicators, and the hero-name gradient's starting point.
- **Solid Action Blue** (`accent-blue-solid`): Selected project filter and blue tinted hero action treatment. Hero button backgrounds use 20% opacity at rest and 30% on hover rather than solid blue.
- **Pale Action Blue** (`action-light`): Email-draft button background and hero action text. The email button pairs it with dark blue ink.

### Secondary

- **Indigo** (`accent-indigo`): Hero gradient endpoint and cloud/data accents. The experience heading uses lighter blue and indigo variants than the hero name.
- **Purple** (`accent-purple`): Web capability icon and related skill-group accents. Blue, purple, and indigo backgrounds under the skill groups use low-opacity fills and borders.

### Neutral

- **Black Canvas** (`canvas`) and **Body Charcoal** (`body-background`): Page foundation. A fixed black decorative layer sits behind the body content.
- **Glass Charcoal** (`glass-surface`): Reused information cards, combined with blur and a white border.
- **Project Charcoal** (`project-surface`): Project cards. Media regions use a separate zinc-dark background.
- **Contact / Form / Field Charcoal**: Distinct hardcoded surface shades in the nested contact area.
- **White / Primary Text**: Major headings and primary control text.
- **Secondary Text**: Supporting labels, chips, helper text, and form guidance.
- **Body Gray**: The dominant paragraph and navigation gray.
- **Muted Gray**: Tertiary education details, footer copy, and small labels. Its use at small sizes should be reviewed during the overhaul; this snapshot is not a contrast certification.
- **Subtle Border**: White at approximately 10% opacity. Stronger hover borders use 20%. Inputs use 15%; some nested contact cards use 5%.

### Background effects

Three fixed circles, each 288px across, use blue, purple, and indigo fills at 20% opacity, 128px blur, and multiply blending. Their positions animate. Because multiply blending against black can greatly suppress color, these configured effects should not be assumed to create strong visible lighting. The portrait has a separate blue halo with 100px blur and a pulse.

Text selection uses a blue tint at 30% opacity. Scrollbar thumbs use the literal gray `#3F3F46`; tracks are transparent.

## Typography

**Display font:** Archivo, with system sans-serif fallbacks. Used for the wordmark, hero, most section headings, and project titles.

**Body font:** Space Grotesk, with system sans-serif fallbacks. Used for paragraphs, navigation, forms, and most labels. Some experience and education headings inherit this body font rather than explicitly using Archivo.

**Monospace:** The system monospace stack is used only for the visitor count. No separate monospace font is loaded.

The pairing gives the site a geometric, technical appearance. Hierarchy relies heavily on very large black-weight headings above much smaller gray body text. Font loading requests the Latin subsets.

### Current hierarchy

| Role | Size and weight | Treatment |
| --- | --- | --- |
| Hero heading | 48px base, 60px at 640px, 96px at 1024px; 900 | Line height 1.25; tracking -0.025em; explicit break after greeting; name can wrap further |
| Projects / experience headings | 48px base, 72px at 1024px; 900 | Tracking -0.025em; experience heading overrides line height to 1.25 |
| Skills / certificates / references headings | 36px base, 48px at 1024px; 900 | Default size-based line height |
| Contact heading | 36px base, 60px at 1024px; 900 | Centered, tight tracking |
| Highlights heading | 30px base, 36px at 1024px; 700 | Smaller than the main section headings |
| Project titles / subsection headings | Usually 24px; 700 | Project titles and many subsection headings use Archivo |
| Experience / education titles | Usually 18px; 700 | Compact résumé hierarchy |
| Hero and project introduction | 18px base, 20px at 1024px; 400 | Often line height 1.625; muted gray |
| Card descriptions and timeline bullets | Usually 14px; 400 | Relaxed line height 1.625 |
| Buttons and filters | 14px or 16px; 500–700 | Text case varies by component |
| Technology tags | 12px; 500 | Compact pills or rounded rectangles |
| Skill category labels | 14px; 700 | Uppercase with wide tracking |
| Visitor label | 10px; 700 | Uppercase with very wide tracking |

Typography is breakpoint-stepped, not fluid `clamp()` typography. The wordmark uses tighter tracking than headings. There is no global text balancing rule or fully normalized heading scale.

## Elevation

Depth is built from a combination of dark surface layers, thin translucent borders, backdrop blur, soft black shadows, and colored glows. It is a decorative glass-style system rather than a flat interface. There is no central elevation token scale; effects are spread across CSS and individual utility strings.

### Shadow and blur vocabulary

| Element | Current effect |
| --- | --- |
| Shared glass card | `0 4px 30px rgba(0,0,0,0.1)`; backdrop blur 24px; 1px white/10 border |
| Glass-card hover | Border increases to white/20, card rises 4px, and a blue-tinted large Tailwind shadow replaces its resting shadow |
| Glass-card overlay | White/5-to-transparent diagonal pseudo-element, appearing on hover |
| Hero portrait | `0 0 50px rgba(0,0,0,0.5)`; blue halo outside the image |
| View Work action | `0 0 20px rgba(37,99,235,0.2)` |
| Project cards | Tailwind extra-large default shadow, plus a dark border that lightens on hover |
| Active project filter | Tailwind large shadow with blue/30 coloring |
| Visitor badge | `0 0 15px rgba(0,0,0,0.5)` and an outer blurred blue-to-indigo hover glow |
| Header / visitor badge | 12px backdrop blur |

The header is fixed at z-index 50. Decorative root backgrounds use z-index -1. Project media overlays and nested contact content use local positive stacking values. These are individual implementation choices, without a documented application-wide stacking scale.

## Components

### Header and navigation

The text wordmark joins a white first name and gray surname. A mostly opaque black background (90%) and thin bottom border separate the header from content. Desktop navigation sits between the wordmark and résumé pill. On small screens the links occupy a second row, with 12px labels; desktop labels are 14px.

The résumé is a real PDF download with a download icon and a 44px minimum height. Navigation hover changes text to white. There is no active-section tracking, sticky progress indicator, dropdown, or mobile drawer. The skip link is positioned above the viewport until focused, then appears with a pale-blue background and dark text.

### Hero

The status pill uses white/5 background, white/10 border, 14px medium text, and an 8px pulsing blue dot. Two equal-flex columns contain the introduction and portrait on desktop. The heading includes a white greeting and blue-to-indigo gradient name.

The portrait container is 256px on the smallest screens, 320px from 640px, and 500px from 1024px. It clips the photograph into a circle; the image uses cover cropping, screen blending, and 90% opacity. The surrounding halo is decorative.

The View Work action is blue tinted with a colored border and glow; Contact Me is transparent with a subtle border. Both have 8px corners and 16px vertical / 32px horizontal padding. Actions wrap when necessary.

### Shared information cards and chips

`.glass-card` defines the reusable glass surface, 16px corners, border, blur, shadow, overlay, and hover lift. Padding is applied at call sites: typically 24px or 32px, with special responsive padding for larger containers. The same hover lift is applied to informational and structural panels, including containers that are not clickable.

`.glass-chip` is a static technology label: pill shape, 12px medium text, white/5 fill, white/10 border, and 4px vertical / 12px horizontal padding. It does not behave like a button. Project tags use a separate solid zinc treatment, 8px corners, and 6px vertical padding.

### Project gallery

The gallery contains UniMove, Personal Portfolio Website, and Web-Based Product Management System. Cards have 24px corners, a 4:3 media area, a dark border, and a 32px padded text area. Descriptions have a 100px minimum height to help align tag rows. This fixed minimum can leave extra empty space when text is short.

Filters are pill buttons with 10px vertical / 20px horizontal padding. Active state is solid blue with white text and a colored shadow; inactive state is translucent white with muted text and a border. `aria-pressed` communicates selection and `aria-controls` points to the gallery. Filtering conditionally mounts cards:

| Filter | Visible cards |
| --- | --- |
| All | All three |
| Kotlin | UniMove |
| Web | Portfolio and product management system |
| Database | Product management system |

UniMove uses a Supabase-hosted video, local logo poster, visible playback controls, muted audio, inline playback, and looping. It does not autoplay. The portfolio card uses `image_portfolio_website.png`, a screenshot of an earlier hero design; it is not a live rendering of the current page. The product card uses `web_product.png`. Source/demo links appear on UniMove and the product system; the portfolio card has no corresponding action.

Images scale to 105% on card hover; the video scales to 102%. Borders also lighten. Reduced-motion CSS suppresses these hover transforms. Precise implementation details for the historical product system remain unconfirmed, so its current text avoids specific database-tool claims.

### Story, education, and experience

Story text and education are glass cards. Education entries use text with a separate compact CGPA badge, stacking below 640px and arranging horizontally above it.

Professional experience uses a vertical line with circular markers, 32px left indentation, and bulleted achievements. FIUU and the service-desk entry both have larger blue markers; older internship entries use smaller gray markers. The design therefore does not uniquely reserve blue for only the current role.

### Skills, certificates, and references

The skills panel has 20px mobile padding, increasing to 48px at 640px. Three category headers use icons, uppercase labels, and dividers. Skill tiles use emoji, centered 12px text, 8px corners, and low-opacity blue, purple, or indigo backgrounds. They are informational tiles with hover background changes, not links or proficiency charts.

Certificates and awards are a simple bulleted list without verification links or certificate images. References are two glass cards with names, roles, email addresses, and telephone numbers presented as text. These are public page contents, not protected fields.

### Contact area and form

The contact area uses several nested surfaces: a glass outer shell, indigo border and gradient overlay, dark inner container, contact-information card, and separate form card. The inner container's padding grows from 16px to 40px and then 64px. Contact and form columns stack until 1024px.

Contact methods pair 48px circular icon containers with text. Social links use 40px square controls with 8px corners. Icons come from Lucide, with GitHub and LinkedIn marks from React Icons.

Fields have 12px corners, dark literal backgrounds, white/15 borders, white text, muted placeholders, and 12px vertical / 16px horizontal padding. Labels are 14px bold blue. Inputs have associated labels and name/email autocomplete; the textarea resizes vertically. Focus changes the border to blue and uses the global 2px pale-blue outline with 4px offset.

The form requires all fields, checks email syntax through native validation, rejects whitespace-only messages, and limits name/email/message lengths to 100/254/2000 characters. Errors are native browser validation messages, including a custom message for whitespace. There is no dedicated error component or disabled/loading button state.

The action reads **Open email draft**. It URL-encodes a subject and body and requests the visitor's configured `mailto:` handler. Feedback is an accessible status message. There is no direct email delivery endpoint, database submission, or delivery-success confirmation. Contact copy accurately explains that the visitor reviews and sends the draft in their email app.

### Footer and visitor badge

The footer uses black/80, a thin top border, 40px vertical padding, and a wrapping flex layout. Content stacks on small screens and becomes a row from 768px.

The visitor badge combines a dark translucent pill, 14px bold monospace count, small Users icon, pulsing dot, and 10px uppercase label. It displays `Loading…`, a validated non-negative integer, or `Unavailable`. The request has a ten-second timeout and is shared across mounts within the page session. Unique-visitor behavior across reloads/devices belongs to the external API and is not guaranteed by the component.

### Motion and accessibility behavior

- Shared reveal: opacity 0 to 1 and vertical translation 30px to 0 over 600ms.
- Shared orchestration: children stagger by 200ms. Hero starts on load; later sections reveal once when entering the viewport, using a -100px viewport margin.
- Project filter/card wrappers start visible and animate to the visible variant, avoiding hidden cards when filters change.
- Glass cards and filters commonly transition over 300ms. Project media transforms use 700ms. Badge glow uses 500ms. Utilities without explicit duration inherit Tailwind's 150ms default transition.
- Background blobs run a seven-second infinite transform animation, with 0/2/4-second delays. Pulse and ping utilities animate status/decorative indicators.
- `MotionConfig` uses `reducedMotion="user"`. The media query disables CSS animation/transitions, restores reveal visibility, removes relevant transforms, and disables smooth scrolling.
- A `<noscript>` style exposes elements marked `data-reveal`; this preserves static content visibility but does not make client-only interactions work without JavaScript.
- Global visible focus styling, associated form labels, accessible names on icon links, English document language, and responsive navigation are implemented.
- No formal WCAG audit is implied. Contrast, all control target sizes, focus movement, motion performance, and no-JavaScript interaction behavior need explicit evaluation in the overhaul.

## Do's and Don'ts

These are handoff rules for using this baseline. They do not require the overhaul to preserve the old visual language. `PRODUCT.md` currently contains repair-era guidance to preserve the dark palette and typography; that guidance predates the owner's request for a complete overhaul and should be revisited when the new direction is agreed.

### Do

- **Do** use this document to understand what exists and where it is implemented before replacing it.
- **Do** preserve accurate portfolio facts, real project assets, résumé access, and working contact routes unless the owner requests a content change.
- **Do** keep mobile navigation, keyboard focus, form-label associations, and reduced-motion behavior in the replacement.
- **Do** distinguish static labels from clickable actions and keep action labels accurate about what happens.
- **Do** define a coherent replacement token system for colors, typography, spacing, radii, elevation, and motion when the overhaul begins.
- **Do** review the long page's hierarchy, repeated card treatments, large heading jumps, public reference details, and nested contact containers as redesign opportunities.

### Don't

- **Don't** treat current glass effects, gradients, black backgrounds, circular imagery, or typography as approved requirements for the overhaul.
- **Don't** invent a future creative direction, component library, CMS, email service, or animation library and describe it as already implemented.
- **Don't** present the old portfolio screenshot as a screenshot of the current website.
- **Don't** claim the contact form sends email directly or that opening a draft confirms delivery.
- **Don't** claim the visitor badge measures unique people without verifying the external API's counting rules.
- **Don't** remove accessibility fallbacks while changing reveals, hover effects, or navigation.
- **Don't** confuse source-derived documentation with a live visual audit or an approved redesign specification.
