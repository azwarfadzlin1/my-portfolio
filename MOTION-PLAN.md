# Animation placement and alignment plan

Reference reviewed: owner's local `portoflio idea.mp4`, duration 38.6 seconds, supplied 11 October 2026. Frame sequences were inspected across the recording, with closer sampling at 24-31 seconds. The core enhancement is implemented at /preview. The reference observations below describe visible behavior, not the reference site's source code.

## Observed reference behavior

- Around 20-24 seconds, the “In the press” cards travel horizontally from right to left. This is a horizontal marquee, often implemented with a duplicated track for a seamless loop. The direction is visible in the recording; its exact code and loop construction are not.
- Around 25-31 seconds, broad folder panels move over preceding panels as scrolling continues. Tabs remain near the top while newer content enters beneath them, creating a layered stack.
- The dock is near the bottom on the opening desktop and near the top in the scrolled sequence.
- The recording also shows case-study navigation. It does not establish that a project icon morphs into a window; that animation below is an original proposal for our selected hybrid interface.
- The recording shows smooth page movement, but cannot establish whether the site uses browser scrolling, CSS smooth scrolling, or a scroll-smoothing library. Do not describe a specific library as something identified from the video.

## Updated direction from Azwar

Center the main text composition and add a horizontally moving display of expertise icons. The expertise display must travel **from right to left**, adapting the reference's moving press strip. These changes come before expanding the stacked folder effect.

### Text alignment and positioning

- Center the hero heading, supporting copy, and primary action around the actual viewport midpoint. The current unequal grid columns place the heading too far right even though its text is center-aligned.
- Give the text an independent centered region with a comfortable maximum width. Reserve space around it for widgets and the project rail, rather than using negative margins to approximate centering.
- At widths where the text and side objects cannot coexist, reflow widgets below the centered introduction. On phones, keep the introduction center-aligned too; remove the current mobile left-alignment override.
- Center the Work, Expertise, Experience, Achievements, About, and Contact introductions. Center short achievement captions and expertise icon labels.
- Inside a note window, long project narrative, or contact form, retain readable paragraph/field alignment. The window itself remains centered in its available space.
- No horizontal text travel, typewriter effect, or continually changing headline. The moving icon strip supplies the continuous motion while the message remains stable.

### Expertise marquee

Placement: a dedicated full-width strip **after the hero and before Work**. A centered heading, “Tools I work with”, stays still above the moving icons. This makes expertise visible early without competing with the main introduction or dock.

Initial icon set, based on existing site/resume evidence: Kotlin, Jetpack Compose, Java, React, Next.js, TypeScript, Tailwind CSS, Firebase, Playwright, Git, and AWS. Treat this as a set of tools used, not a claim of equal proficiency or expert status. Group details can remain in About.

Appearance: consistent iOS-like rounded-square tiles with recognizable tool marks and short labels underneath. Keep brand marks recognizable within restrained app surfaces; use real licensed icon assets. The row should be one tile high, with soft edge masking to indicate continuation.

Behavior:

- Travel continuously from right to left with linear timing, independent of the visitor's scroll direction.
- Start around 24-32px per second and tune visually. Calculate loop duration from track length so adding tools does not unexpectedly increase speed.
- Duplicate one complete track with identical spacing to avoid a visible restart. Mark the duplicate aria-hidden and ensure it contains no focusable controls.
- Keep the original tool names available as a semantic list; the display does not need to be clickable.
- Provide a visible Pause/Play control. Also pause on hover/focus and while offscreen or the tab is hidden. Resume without jumping back to the beginning.
- On phones, retain one row with smaller tiles and a calm pace. Users should not have to chase an icon to read its name.
- With reduced motion, show a static wrapped grid of the same tools. Do not hide the expertise content or require dragging to see it.
- Use one marquee on the page. Do not add separate left-moving and right-moving rows.

## Animation placement map

All durations below are proposed starting values, not measurements extracted from the recording.

| Page location | Animation | Trigger / direction | Starting timing | Relationship to video |
| --- | --- | --- | --- | --- |
| Hero text | Stable centered composition; optional one-time opacity and 8px settling entrance | Initial page view, slightly upward into place | 250-350ms, ease-out | Added for our layout; not established by the recording |
| Clock, calendar, photo | Gentle one-time arrival as a small group; clock hands retain real-time behavior | Initial page view; no perpetual floating | 200-300ms, small stagger | Widgets are visible in the reference; entrance timing is proposed |
| Expertise strip below hero | Seamless horizontal icon marquee | Automatic, right to left | Linear, initially 24-32px/s | Adaptation of the moving press cards at roughly 20-24s |
| Work / Experience folder panels | Sticky overlapping folder stack with visible tabs | Scroll forward and reverse; incoming panel covers preceding panel | Scroll-linked, not a fixed-duration entrance | Main folder effect at roughly 25-31s |
| Note windows inside folder panels | Very small vertical settling motion as a panel becomes active | Tied to panel entry; no independent floating | Roughly 12px travel | Proposed supporting polish; avoid claiming it is visible in the clip |
| Desktop dock | Bottom hero position to compact top position | Leaving/returning to the hero | About 250-300ms or a short scroll-linked segment | Dock changes location across the recorded sequence |
| Dock app icons | Subtle lift/scale and tooltip | Fine-pointer hover or keyboard focus | 140-180ms | Familiar dock behavior, proposed tuning |
| Small project folders | Flap tilt, paper lift, press compression | Hover and activation | 160-200ms hover, 80-120ms press | Original interaction refinement for our folders |
| Project detail window | Spatially connected open and reverse close | Folder activation / Close / Escape | About 280ms open, 220ms close | Our hybrid-window adaptation, not demonstrated as a folder morph in the clip |
| Achievements | Keep readable; at most a short icon-group reveal | First entry into view | About 200ms | No need to add another marquee |
| About window | Restrained one-time opacity/position reveal | First entry into view | About 220ms, 8px travel | Window styling comes from the reference; reveal is proposed |
| Contact | Button press and validation-state feedback only | User input | About 100-160ms | Functional polish; no constant motion |

## Stacked folder scrolling

Apply the effect to a small group of meaningful Work/Experience panels, keeping achievements and contact in normal flow. Do not force every section into the same scroll treatment.

- Start with native CSS sticky positioning and progressively offset tabs. Keep text and media in normal layout inside each panel.
- Add a subtle scroll-linked scale change to the covered panel, approximately 1 to 0.98, and restrained shadow changes to clarify layering. Avoid blurring readable text.
- Use the installed GSAP ScrollTrigger only for scroll-linked transforms and the dock state if native sticky cannot deliver the required sequence cleanly.
- If pinning is necessary, use one scoped timeline and explicit end boundary. Release the stack before About/Contact so visitors can continue scrolling normally.
- Keep native wheel/touch scrolling. Do not add artificial scroll inertia or mandatory snapping in the first pass.
- Short screens or panels taller than available space must fall back to normal flow rather than hiding content under sticky layers.

## Dock transition

On desktop, transition from the hero's bottom position into a compact navigation position above the folder stack when leaving the hero. Animate its position and size without duplicating accessible navigation links. Preserve a clear active-section indicator.

On phones, keep the dock at the bottom. Moving a frequent navigation target across the screen on touch devices offers little benefit.

## Small project-folder interaction

These values are starting points to tune against the working interface, not measured timings from the video.

| State | Proposed animation |
| --- | --- |
| Hover, fine pointer only | Folder rises 3px; front flap opens about 8-12 degrees; paper lifts 3-5px; shadow deepens slightly, over 160-200ms |
| Press | Whole folder compresses to 0.97 over about 80ms; feedback begins immediately |
| Open, desktop | Brief flap response followed by a restrained window transition from the opening folder's position toward its final bounds, about 280-360ms total |
| Close, desktop | Reverse toward the opening folder over about 200-240ms, then restore focus |
| Open/close, phone | Full-screen sheet with a short 16-24px translation and fade, about 220-280ms; avoid a large cross-screen zoom |
| Reduced motion | Instant state change or short opacity transition; no scroll-linked scale, parallax, or dock travel |

Use a fast-starting, gently settling ease-out with no overshoot. Text should remain legible while a project opens; do not enlarge a tiny rasterized copy of the whole window from zero size. If the trigger is offscreen or its geometry becomes invalid after resizing, use a centered fade/scale fallback.

## Implementation responsibilities

- CSS owns folder hover and press feedback.
- Framer Motion owns project-window entry/exit. Retain native dialog focus containment, Escape support, background inertness, and scroll locking. Animate exit before calling close, and make interruption/repeated input safe.
- GSAP, if used, owns the section scroll timeline and desktop dock transition. Do not let two animation systems write the same transform.
- Refresh geometry on responsive layout changes and clean up listeners, timelines, and inline styles on unmount.
- During scrolling, use transforms and opacity rather than React state updates on every frame. Avoid animating layout height and expensive full-screen blur.

## Implementation order

1. Correct hero positioning and center the section introductions across desktop, tablet, and phone. Verify that side widgets do not collide with the text.
2. Build the expertise icon tiles and the right-to-left marquee below the hero, including pause behavior and the static reduced-motion layout. Review this first visual checkpoint.
3. Build and verify two stacked folder panels on desktop, with normal-flow phone, short-screen, and reduced-motion fallbacks.
4. Add the compact desktop dock transition and check it does not cover tabs or headings. Keep the phone dock at the bottom.
5. Refine folder hover and press feedback, then implement reversible project-window entry/exit. Preserve focus management, Escape, and scroll locking.
6. Add only the small supporting entrances that improve hierarchy. Check fast/reverse scrolling, repeated opening/closing, keyboard access, pause/resume, resize/orientation changes, and short screens. Inspect desktop and phone recordings before expanding the effect.

## Checkpoint acceptance

- The hero text is visually centered relative to the viewport at 375/390, 768, 1024, and 1440px, with a separate 320px and short-laptop check.
- Expertise icons visibly travel right to left at constant speed, with no gap or jump at the loop boundary.
- The strip has an operable Pause/Play control; keyboard users and reduced-motion users can read every tool name.
- Folder panels remain readable, release at the end of their stack, and do not cover later content.
- Dock movement never overlaps an active folder tab or traps access to navigation.
- Motion systems do not compete for the same property. Scroll remains native and responsive.

## Implemented checkpoint — 11 October 2026

- Centered hero and section introductions, with symmetric desktop columns and reflowed tablet/phone layouts.
- Expertise marquee: 11 tools, duplicated equal-width tracks, right-to-left linear motion at 28px/s, visible pause/resume, hover pause, offscreen and hidden-tab suspension. Playwright uses a generic testing symbol; other tools use packaged brand icons.
- Native sticky Work/Experience stack at widths of at least 1200px and heights of at least 800px. GSAP adds a subtle covered-panel scale and note settling; smaller/shorter screens and reduced motion use normal flow.
- Desktop dock follows the intro bottom upward with native scrolling, then stays 16px from the top. A passive scroll listener with requestAnimationFrame updates its transform; there is no timed cross-screen transition. Phone/tablet dock stays at the bottom.
- CSS folder flap/paper feedback and Framer Motion project-window opening/reverse closing. Native dialog retains focus containment, Escape, scroll lock, and focus restoration.
- Optional hero/widget/achievement/About entrance animations remain deferred; the main text is stable.

Verification: lint, TypeScript and production build passed. Browser checks at 320, 375, 390, 768, 1024 and 1440px found centered hero content and no horizontal overflow. The short desktop fallback, stack release before About, marquee pause/resume, and Escape/focus restoration were checked. Reduced-motion fallbacks were inspected in code; an actual OS preference and additional browser engines were not exercised. Equal track widths were verified; a full loop-boundary recording remains a visual follow-up.

## Dock and folder revision — 11 October 2026

The dock is anchored to the intro bottom and clamps to the top while scrolling. Folder labels now sit on curved tabs at the top right, with the covered Work tab offset so both labels remain visible. Additional scroll space lets the Experience folder settle over Work before the stack releases. The 800–899px desktop layout uses tighter spacing to keep all experience content visible. Browser checks confirmed dock positions at 804px, 354px, and 16px while scrolling a 900px viewport; desktop overlap, release into About, and the mobile bottom dock were also checked.

## Compact desktop checkpoint — 11 October 2026

The hero now contains only “I'm Azwar” and “Product Development Intern at FIUU”. Supporting copy and the hero CTA were removed; background and role details remain in About and Experience. The desktop canvas spans the viewport, with reference-scale widgets at the upper left, smaller folder shortcuts at the right, and a compact dock.

At the supplied approximately 1848px reference width: heading reduced from 70px to about 52px, hero folders from 71px to 48px, dock tiles from 45px to 36px, and clock/calendar surfaces from 162×175px to 136×136px. These reference sizes are visual estimates, not measurements of Elena's source.

Music and weather are explicitly marked placeholders. The music play button demonstrates state only, with no audio connection; weather has no live readings. App shortcuts use text placeholders pending owner-supplied icons. Known GitHub, LinkedIn, email and resume destinations work; X and spare app slots are disabled placeholders.

The app tray uses installed Framer Motion drag constraints, a dedicated pointer handle, arrow-key movement and reset. It stays within the intro area, resets on resize, and disables release momentum to prevent unwanted drifting. GSAP continues to own folder scroll transforms. No additional animation package was necessary.

## Typography and personal-details revision — 11 October 2026

Inspected the live heading on https://elenagonci.com/: computed font family Bricolage Grotesque, weight 800, 48px at the inspected viewport, letter spacing -1.2px. The preview now self-hosts Bricolage Grotesque through next/font/google, uses weight 800 and -.025em tracking, and retains its agreed responsive sizes. A centered two-line description summarizes mobile/web development, fintech testing and workflow automation.

The compact photo again has a white tilted frame and caption. The FIUU sticky note sits beside it. Music and weather remain placeholders. The entire app tray now initiates dragging, including links and placeholder slots; a drag suppresses click navigation, while ordinary clicks remain usable. Keyboard movement, reset, bounds and resize reset remain available.

Validation: lint and production build passed. Browser inspection confirmed the loaded font family/weight, no horizontal overflow at 320, 390, 768, 1024 and 1440px, and a drag originating on GitHub moved the whole tray by -300/-80px without opening a new tab.

## Spring dock checkpoint — 11 October 2026

The desktop dock is approximately 15% larger: 36px icon tiles are now 41.4px, with proportional glyphs, gaps, padding and corners. Actual dock width measured 321.56px versus approximately 280px previously. Phone dimensions remain fitted to the narrow viewport.

Dock gestures use the installed motion/react package and physics-based springs (stiffness 300, damping 20, mass 0.8), with hover scale 1.05 and pressed scale 0.95. CSS no longer animates the icon transform. A shared layoutId moves the active-section indicator; AnimatePresence retains tooltips during exit. Reduced motion removes decorative displacement. The dock's native scroll anchor remains independent of gesture transforms.

Lint and production build passed. Browser checks confirmed the enlarged dimensions, top pinning at 16px, one active indicator, and no desktop horizontal overflow.

## Cursor-driven dock revision - 11 October 2026

Supersedes earlier top-pinning and hover-scale checkpoints. The dock now remains fixed at the bottom on every viewport. A shared cursor-x MotionValue drives each icon's distance transform: 42 / 48 / 68 / 48 / 42px over a 140px radius. Spring-smoothed width and height push neighbouring icons sideways; lift reaches 8px. Pointer leave restores normal dimensions. Fine-pointer devices at 640px and above enable magnification; touch and reduced-motion layouts stay static. Navigation, the active-section shared indicator, focus labels and AnimatePresence tooltips remain.

Removed the hero FIUU sticky note, retained the polaroid, and removed the app tray's circular reset button. The whole tray remains draggable with arrow-key movement and resize reset. Supplied GitHub, LinkedIn, Facebook and YouTube assets fill four tray slots; Facebook/YouTube remain placeholders until destinations are provided.

Validation: ESLint and production build (including TypeScript) passed. Browser checks at 320, 768 and 1440px found no horizontal overflow. Cursor-driven tiles reached 66.7px with adjacent tiles at 54.7px and 52.1px; distant tiles remained 42px. Leaving restored 42px tiles. The desktop dock retained a 23px bottom gap after section navigation (14px on mobile). All four supplied logo images loaded. Dragging from GitHub moved the entire tray by -140/-50px without navigation. Reduced-motion behavior was inspected in code; an OS preference toggle was not exercised.

## App tray and internship folders - 11 October 2026

Removed the empty app-toolbar row entirely. The panel itself remains focusable for arrow-key movement and draggable from anywhere. All ten slots now show supplied artwork or installed brand glyphs, plus a document glyph for the resume. Per the owner's clarification, only WhatsApp is an active tray shortcut (https://wa.me/60142913880); every other icon remains a placeholder. Added the confirmed WhatsApp number to Contact.

Removed the marquee pause button and manual paused state. Hover, offscreen, background-tab and reduced-motion behavior remain. Work now precedes separate FIUU Internship and Experian Internships folders. Experian summarizes the existing site's IT support and vulnerability-management internship facts without adding disputed dates or new metrics. Three staggered sticky positions and offset tabs retain the folder stack; scroll transforms now apply between successive panels. The dock treats Experian as part of Experience.

Validation: final ESLint and production build passed. Browser confirmed ten tray icons, exactly one active tray link (WhatsApp), no toolbar buttons, loaded supplied images and no marquee pause control. The app panel height is 104px. At 1440px the three folder tabs remain visible through the overlap, and Experian keeps the Experience dock item active. At 320px the panels return to normal flow with no horizontal overflow. The compact 800px desktop layout keeps internship notes above the dock before release.

## Live weather, local music and calendar sizing - 11 October 2026

The weather widget now requests /api/weather. The server fetches MET Malaysia forecasts from data.gov.my for Shah Alam (Tn070), caches the upstream response for one hour, validates and sorts the current/future dates, removes duplicates and returns up to seven days. The widget labels daily high/low temperatures, retains the Bahasa Melayu condition summaries in accessible labels/tooltips, credits the source, refreshes every 30 minutes and offers loading/error/retry states. Forecast data is not presented as a live temperature reading.

The music widget plays the owner-supplied /videoplayback.weba only after a click. It displays Who's Lovin' You by The Jackson 5, with The Ultimate Collection artwork obtained through Apple's iTunes Search API (source recorded in public/music/ARTWORK.md). Native audio events drive play/pause, restart, seek position, elapsed and remaining times. Initial metadata is synchronized after hydration so fast cached loads still enable seeking. No autoplay.

Calendar columns now shrink within their surface and rows divide the available height, including months with six calendar weeks. Day cells no longer impose widths that overflow small screens.

Validation: ESLint and production build including TypeScript passed. The local weather route returned seven ascending forecast dates with valid temperature values. Browser checks confirmed seven rendered days, loaded artwork, 241.781-second audio duration, actual playback and pause, keyboard seeking to 24.2 seconds, and restart to zero. Calendar cells were contained with no calendar or page overflow at 320, 390, 640, 768, 1024, 1199, 1200 and 1440px. Browser verification used the in-app controls because the browser-use backend was unavailable.
