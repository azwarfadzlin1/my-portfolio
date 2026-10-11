# Portfolio redesign plan

Date: 11 October 2026
Status: Initial visual checkpoint implemented at /preview. Full content migration and final polish remain.

Implementation checkpoint: The preview includes the light desktop shell, app icons, project folders, live Malaysia clock/calendar, portrait, section navigation, native project dialogs, and initial supporting sections. It is separate from the current homepage and marked noindex. Lint, TypeScript via the production build, and the production build passed. Browser checks covered horizontal overflow at 320, 375, 768, 1024, and 1440px; project opening, Escape dismissal, focus return, mobile full-screen dialogs, dock navigation, and required form validation. Project narratives and lower sections are abbreviated for this first visual review. External email-app launch, full video playback, browser Back integration for dialogs, and cross-browser coverage are not verified in this checkpoint.

## Direction and agreed behavior

Build an Apple-inspired personal portfolio for Azwar Fadzlin: the spacious desktop composition of macOS, the rounded app icons and widgets of iOS, and a straightforward reading experience for recruiters and collaborators.

Reference: [Elena Gonci](https://elenagonci.com/), alongside the two screenshots supplied by Azwar. The live homepage was inspected at desktop size and at a 390 × 844 phone viewport. This plan describes observed presentation and behavior, not access to the reference site's source code or a claim about its framework.

Azwar selected:

- Hybrid navigation: dock items scroll to sections; projects open in app-like detail windows.
- Homepage widgets: Malaysia clock, calendar, and personal photo.
- Responsive layouts that rearrange the composition for smaller screens.

The earlier preference to preserve the dark theme applied to functional repairs. This new direction supersedes it for the redesign. `DESIGN.md` remains the factual baseline of the current website; this file describes the proposed replacement.

## What makes the reference work

The desktop hero uses a near-white canvas, a thin menu bar, a strong central introduction, and a few objects distributed around its edges. The empty space makes those objects feel like a personal desktop rather than a dashboard.

- White widget surfaces have rounded corners and broad, faint shadows.
- Blue folder silhouettes provide recognizable project entry points.
- Colorful rounded-square icons sit in a compact floating dock.
- Most of the page is neutral; color belongs mainly to icons and small actions.
- Below the hero, large folder-tab sections pair narrative text with small note-style windows.
- An About section uses familiar window chrome and red, yellow, and green controls.
- The reference dock links to home and page sections; project folders link to separate case-study pages. Its Terminal button opens an interactive window.

On the inspected phone viewport, the introduction becomes a large card, calendar and photo sit in a two-column row, and folders form a grid. Several desktop widgets are omitted. The important lesson is deliberate rearrangement rather than proportional scaling.

Our hybrid project windows are an adaptation chosen by Azwar. They are not a claim that the reference's project folders behave that way.

## Proposed visual system

These are starting values to tune in the first working visual checkpoint, not measurements extracted from the reference.

| Element | Proposed treatment |
| --- | --- |
| Canvas | Cool off-white, initially `#F7F8FA` |
| Main text | Near-black, initially `#15171A` |
| Supporting text | Medium gray with readable contrast, initially `#616772` |
| Surfaces | White or gently translucent white; blur limited to the dock and overlays |
| Borders | Thin cool-gray separators, initially `#E3E6EB` |
| Accent | Blue for actions; purple, coral, yellow, and green reserved for icon identities |
| Type | Native system sans-serif stack; SF on Apple devices, platform fallback elsewhere |
| Headings | Bold, compact, sentence case; size scales with available width |
| Corners | Approximately 20–28px widgets, 24–32px windows, proportional icon rounding |
| Elevation | Broad, low-opacity shadows plus restrained surface highlights |
| Spacing | 4px base scale; generous section space, compact controls |

### Icon specification

Create a consistent set of original SVG/CSS app icons. Each icon has a rounded-square colored surface, a simple recognizable glyph, subtle top highlight, and a small contact shadow. This dimensional treatment is central to the requested iOS feel.

- About: a personal monogram or profile glyph.
- Work: blue folder.
- Experience: purple briefcase or layers.
- Achievements: warm yellow award.
- Resume: document with a distinct neutral or blue surface.
- Contact: green address-book or coral envelope.
- Project folders: a separate blue folder silhouette with a visible tab, layered face, and label beneath.

Use one coherent glyph family inside the custom surfaces. Avoid emoji as primary navigation. Keep official brand marks recognizable for LinkedIn and GitHub, using assets with appropriate usage rights. Do not copy Elena's personal marks, app artwork, photographs, or case-study content.

Desktop dock tiles should begin around 44–48px; prominent mobile app tiles around 56–64px. Every action needs a touch target of at least 44 × 44px, an accessible name, and a readable visible label or tooltip that also works on keyboard focus. Color alone must not distinguish navigation items.

## Content and navigation

The opening screen should tell visitors who Azwar is, what he does now, and where to find his work. Suggested opening copy:

> I'm Azwar. I build software that makes work simpler.
>
> Software engineering student at UKM and Product Development Intern at FIUU.

This is proposed copy for review. Keep the FIUU title factual and avoid implying seniority or publishing private company material.

| Current content | New presentation |
| --- | --- |
| Hero and highlights | Central introduction, current-role note, clock/calendar/photo widgets |
| Selected Works | Blue folder shortcuts and a detailed Work section |
| FIUU and Experian experience | Experience folder section with outcome notes and a clear timeline |
| Technical Arsenal | Compact grouped skills inside Work or About, supported by project evidence |
| Certificates and awards | A short row of colorful achievement tiles plus readable details |
| Story and education | About window with education and personal context |
| References | Compact supporting block near Experience or Contact |
| Contact form | Mail-style contact window retaining the prefilled-email behavior |
| Resume and social links | Clearly labeled dock/action links and footer access |
| Visitor counter | Optional quiet footer detail; never a core visual feature |

Use the verified resume as the source for FIUU experience and dates. Audit existing project entries before promoting them to detailed case studies. UniMove can be a primary project; JomEco needs sufficient verified material; any older project needs clear ownership, scope, and evidence. Do not invent outcomes to fill the layout. Replace the stale screenshot of the current portfolio when the redesign is ready.

## Responsive behavior

| Width | Layout strategy |
| --- | --- |
| Below 640px | Introduction first; calendar/photo row where space permits; project folder grid; one-column sections; project details in a full-screen dialog |
| 640–1023px | Compact widget grid; fewer peripheral objects; two-column sections only when copy and media fit comfortably |
| 1024px and above | Desktop composition with central introduction, widget cluster, project rail, and floating dock |
| Very wide screens | Constrain the desktop content area so widgets and folders remain connected to the introduction |

Use CSS Grid and normal document flow for the main layout. Reserve absolute positioning for controlled decoration within a bounded component. On short laptop screens, allow the hero to grow and scroll rather than forcing objects into a fixed viewport height.

The mobile dock should have fewer always-visible actions, respect safe-area insets, and leave enough page padding to avoid covering content. Resume and contact must stay easy to reach. No essential behavior should depend on hover, dragging, double-clicking, or a desktop-style menu bar.

## Interaction contracts

- Dock section links use real anchors so navigation remains meaningful without animation.
- Project folders are buttons that open a focused project dialog with title, role, problem, approach, evidence, media, and relevant links.
- Desktop project dialogs use window chrome; mobile dialogs use the available screen with their own scrolling content.
- Close controls and Escape dismiss a dialog and restore focus to the opening folder. Keep background content inert while a modal is open.
- Only display window controls that have a real behavior. Start with Close; add minimize or maximize only if useful and implemented.
- Dragging is optional later polish, not a dependency of the first release.
- Preserve sensible browser Back behavior for project detail state; decide the URL representation during the component architecture stage.
- Malaysia clock uses `Asia/Kuala_Lumpur`. Calendar uses that same date boundary and highlights today. Do not imply booking functionality unless a real booking link is supplied.
- The photo uses an owner-provided image and suitable alt text. Choose an existing verified asset or request a replacement when implementing the hero.
- Contact opens a prefilled email draft, as previously selected; feedback must not claim the message was sent.
- Use brief opacity/scale transitions and restrained hover/press feedback. Honor reduced motion and retain obvious keyboard focus.

## Build sequence and checkpoints

### 1. Content inventory and structure

Confirm the project list, existing media, photo, social links, and resume facts. Define section anchors and project detail fields. Keep the current site working while building a replacement in small steps.

**Done when:** every proposed section has real content or an explicitly identified missing asset, and the primary visitor path is clear: introduction → work → evidence → resume/contact.

### 2. Visual foundation and icon set

Establish light-theme tokens, system typography, spacing, shadows, icon surfaces, folder artwork, and reusable window chrome. Produce a small preview containing the intended icon family, a widget, and a window.

**Done when:** the components share one visual language and the app icons look intentional at both dock and mobile sizes.

### 3. Hero and responsive shell — first main visual checkpoint

Build the status bar, central introduction, Malaysia clock, calendar, photo, project folders, and navigation dock. Test the hero on desktop, tablet, and phone before migrating the rest of the page.

**Done when:** the requested desktop/iOS character is visible, mobile has a deliberate composition, and no widget overlaps the heading or navigation.

### 4. Work and project windows

Build reusable project folders and the responsive project dialog. Populate the strongest verified projects with readable case-study content. Add useful media controls and external project links.

**Done when:** a visitor can open, read, and close every project using touch or keyboard, and focus and browser navigation behave predictably.

### 5. Experience, achievements, and About

Create the folder-tab section treatment, outcome note windows, FIUU/Experian experience, skills, awards, education, and About window. Keep large-screen whitespace balanced against a shorter mobile reading path.

**Done when:** the portfolio communicates engineering capability and current experience without relying on decorative widgets.

### 6. Contact and interaction polish

Restyle the existing email-draft form as a mail window, expose resume/social actions, and add restrained dock and window transitions. Tune focus, hover, pressed, loading, validation, and unavailable states.

**Done when:** all visible controls perform their described actions and motion remains comfortable with reduced motion enabled.

### 7. Release verification and design documentation

Check 320, 375/390, 768, 1024, and 1440px widths, plus a short laptop viewport. Verify no horizontal overflow, readable text, safe-area spacing, keyboard navigation, dialog focus, reduced motion, project media, PDF access, and email validation. Run the repository's lint, TypeScript, and production build checks. Check supported browsers where available and record any untested coverage.

Update the final design documentation and component examples to match what shipped. Retain a copy of the old design baseline before replacing its current-state description.

**Done when:** the redesign is verified, content is factual, and the documented design matches the implementation.

## Technical approach

Retain the existing Next.js, React, TypeScript, Tailwind, and Framer Motion stack. This appearance can be built with CSS, SVG, and the existing animation library; adopting Nuxt or v-gsap is unnecessary for this plan.

Before implementation, read the relevant installed guides under `node_modules/next/dist/docs/` as required by `AGENTS.md`. Keep static content server-rendered where practical; isolate clock updates, dialog state, and interactive navigation in small client components. Reuse the existing contact validation and reduced-motion support.

Suggested component boundaries: DesktopShell, StatusBar, AppIcon, FolderShortcut, Dock, ClockWidget, CalendarWidget, PhotoWidget, WindowFrame, ProjectDialog, FolderSection, and MailContact. These names describe responsibilities; final file organization should follow the implementation's needs.

Limit backdrop blur, avoid large continuously animated backgrounds, optimize photos and project media, and load project video on demand. A clock should not rerender the entire portfolio every second.

## Scope boundaries

The first release includes the agreed hybrid navigation and three widgets. Weather, music playback, an AI terminal, draggable window management, a second theme, and additional third-party services are optional later work. They are not required to achieve the selected visual direction.

The immediate next implementation step is **Stage 1**, followed by the small visual foundation and hero checkpoint. Complete and verify each stage before extending the design to the next part of the portfolio.

The animation checkpoint is now implemented at /preview: centered content, expertise marquee, desktop folder stack, compact dock, and reversible project dialogs. See MOTION-PLAN.md for behavior and verification coverage.
