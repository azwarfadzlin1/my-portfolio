# Azwar Fadzlin's portfolio

Single-page portfolio built with Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4 and Framer Motion.

## Development

Run npm ci, then npm run dev. Open http://localhost:3000. Run npm run lint and npm run build before deploying. npm start serves the production build.

## Structure

- app/preview/page.tsx and app/preview/preview.css: initial Apple-inspired redesign at /preview. The current homepage remains at /. The preview has its own scoped styles and is marked noindex while under review.
- components/desktop/DesktopControls.tsx: Malaysia clock/calendar, section dock, project folder shortcuts, and native project dialogs. On phones, dialogs fill the screen and the clock uses a compact digital display.

- components/desktop/ExpertiseMarquee.tsx: right-to-left tool tiles with pause and reduced-motion support.
- components/desktop/ScrollChoreography.tsx: scoped desktop scroll transforms for the Work/Experience folder stack.
- MOTION-PLAN.md: animation placement, implementation status, and verification coverage.

- app/page.tsx: server-rendered portfolio content, including FIUU and Experian experience.
- components/Navbar.tsx: navigation accessible on desktop and mobile.
- components/ProjectGallery.tsx: interactive All / Kotlin / Web / Database filters.
- components/ContactForm.tsx: validates input and opens a prefilled email draft. It does not send email or save submissions. The visitor needs an email app or mailto handler and must send the draft themselves.
- components/VisitorCounter.tsx: optional external visitor API with response validation and a ten-second timeout.
- components/MotionProvider.tsx and lib/animations.ts: shared motion preferences and variants.
- app/globals.css: styles, focus indicators, responsive text handling and reduced-motion overrides.
- public/Azwar Fadzlin Resume.pdf: downloadable resume. Keep portfolio facts synchronized when replacing it.

## Optional environment configuration

Set NEXT_PUBLIC_VISITOR_API in .env.local to an endpoint returning a JSON object with a non-negative integer count property. It must allow requests from the portfolio's origin. Without a working endpoint, the badge shows Unavailable.

The client shares one request per page session. Unique visitor identification, persistence and deduplication across reloads or devices must be implemented by the external API; the repository does not contain that backend. No localStorage flag is treated as proof of a unique visitor.

lib/supabase.js exports an optional client using NEXT_PUBLIC_SUPABASE_URL and either NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY (preferred) or NEXT_PUBLIC_SUPABASE_ANON_KEY. It is currently unused by the page. Never place service-role keys, database passwords or other secrets in NEXT_PUBLIC_* variables. Configure Supabase access policies before adding database functionality.

## Content and assets

Project filter membership is defined in ProjectGallery.tsx. UniMove's demo video is hosted in Supabase Storage and uses manual playback. Portfolio imagery and the resume are served from public/. Everything under public/, including older resume files, is publicly accessible when deployed.

The page's static content remains server rendered. Small client components handle filtering, email drafts, visitor count and motion. Reduced-motion preferences disable decorative motion; a no-JavaScript fallback keeps animated content visible.

The historical product management project's precise technology stack should be confirmed before adding specific database/tool claims. Existing Experian role dates are preserved because the resume's consolidated service desk date range overlaps its internship entries.

## Production routes

The desktop-inspired redesign is the homepage at `/`. The former `/preview` route redirects to `/`. The original dark portfolio remains available at `/classic` and is excluded from search indexing. Weather is served by `/api/weather`.
