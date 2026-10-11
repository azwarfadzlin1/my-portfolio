# Redesign content map

Stage 1, prepared 11 October 2026. This inventory establishes the first implementation scope using the current source, local assets, and resume facts reviewed earlier in this conversation. Links listed below were found in source; their external availability has not been rechecked in this stage.

## Opening screen

**Name:** Azwar Fadzlin

**Heading:** I'm Azwar. I build mobile and web applications.

**Supporting copy:** Software engineering student at UKM and Product Development Intern at FIUU, working on fintech testing and automation.

**Menu-bar role:** Product Development Intern at FIUU

**Main actions:** View work and Download resume. Keep Contact reachable from the dock and a normal text link.

**Widgets:** Malaysia clock using Asia/Kuala_Lumpur; current-month calendar using the same timezone; personal photo. Calendar is informational, with no booking implication.

**Photo:** public/azwar_image.jpeg. Inspected: a genuine portrait against curtains, suitable for a rounded photo widget. Crop with CSS object-position to keep the face visible; preserve the original file. No replacement image is needed for the first build.

This copy is specific to the existing evidence. The hierarchy should make current role and personal projects understandable within a quick scan.

## Page order and dock

| Order | Section | Anchor | Contents |
| --- | --- | --- | --- |
| 1 | Home | #home | Introduction, widgets, project folder shortcuts |
| 2 | Work | #projects | Selected projects and project detail windows |
| 3 | Experience | #experience | FIUU, then Experian; compact outcome notes |
| 4 | Achievements | #certificates | Verified awards and certifications |
| 5 | About | #about | Short personal story, education, grouped technical skills |
| 6 | Contact | #contact | Email-draft form, email and social links |

The six dock items follow this order. Resume is a separately labeled download action in the shell and Contact section, not a seventh mobile dock tile. Keep existing #projects, #experience, #certificates, and #contact anchors to preserve useful inbound links. Add #about for the new About section. Give #references a supporting destination near Contact if existing links require it.

On mobile use Home, Work, About, and Contact in the compact dock. Experience and Achievements remain reachable through normal page links. Dock labels remain visible on touch screens.

## Project inventory and first-release selection

### 1. UniMove: primary personal project

- Folder label: UniMove.
- Summary: Android fitness tracking with routes, pace, challenges, and a community feed.
- Existing evidence: Kotlin, Jetpack Compose, Firebase, Google Maps, and Wear OS support in the reviewed resume/site content.
- Local asset: public/unimove_logo.png, inspected and usable as project branding or a video poster. It is not an app screenshot.
- Demo: existing Supabase-hosted MP4 referenced by components/ProjectGallery.tsx. Load on demand inside details; retain accessible playback controls. Verify availability during implementation.
- Source: https://github.com/azwarfadzlin1/UniMove.git
- Detail window: overview, features, technology, demonstration, source link.
- Do not add download counts, adoption metrics, or performance claims without evidence.

### 2. Product management system: supporting project

- Folder label: Product system.
- Summary: A web project for product records and inventory management.
- Local asset: public/web_product.png, inspected. It shows a Phone Seller web interface, not a modern analytics dashboard.
- Existing demo: http://lrgs.ftsm.ukm.my/users/a209041/myPT3/index.php
- Detail window: concise project overview and screenshot; show the live link only after checking its behavior.
- Exact backend stack, individual contribution, and deeper feature set need confirmation before writing an extensive case study. Do not reinstate the earlier unverified Microsoft Access claim.

### 3. This portfolio: supporting project

- Folder label: Portfolio.
- Summary: Responsive personal portfolio built with Next.js, React, TypeScript, Tailwind, and Framer Motion.
- Evidence: this repository and its implemented features.
- Existing public/image_portfolio_website.png is an old dark-theme capture. Inspected and unsuitable as the redesigned site's current screenshot.
- Capture the redesigned interface after it exists. Until then, present the project without a fake replacement screenshot.
- Detail window: layout decisions, responsive adaptations, accessibility, stack, and verified behavior. Do not claim checks that have not been performed.

### Future candidate: JomEco

Mentioned in the updated resume, but no matching local project media was found in public/. Hold the homepage folder and detailed case study until there is enough verified information about contribution, technology, and demonstration. This does not block the first visual checkpoint.

## Experience evidence

FIUU (Razer Merchant Services), Product Development Intern, August 2026 to present, Shah Alam. Lead with this role.

- Configuration-as-code proof of concept alongside a Senior Software Engineer addressing 30+ manual database queries across Production, UAT, and Sandbox. Describe it as a proof of concept, not a completed production migration.
- Playwright onboarding automation reducing repetitive form completion from 15 minutes to 3 minutes. Label this narrowly as form completion, not the whole merchant onboarding lifecycle.
- 30+ UAT scenarios across 3+ fintech products, including online and terminal payment flows.
- Bug reproduction, issue investigation, fix validation, test evidence, and engineering documentation.

Use resume-derived summaries and abstract diagrams if needed. No internal screenshots, customer data, or company code is needed for the portfolio.

Experian follows as earlier experience. Preserve the existing role progression: IT Support Intern, Desktop Vulnerability Management Analyst Intern, and Service Desk Analyst Contract. The site's detailed dates and the newer resume's consolidated period differ, so reconcile dates before rewriting the timeline; this does not block the hero or icon foundation.

## About, education, achievements

- About: short account of mobile/web development, current fintech work, and earlier enterprise IT experience. Avoid duplicating the complete Experience section.
- UKM: Bachelor in Software Engineering (Information System), expected March 2027, CGPA 3.88. Continue describing Azwar as a student while this is the stated expected completion date.
- KPM: Diploma in Computer Science, June 2024. Retain supporting details from existing verified material when building the section.
- Skills: grouped text for Mobile, Web, Testing, and Data/Tools, supported by actual work; replace the current emoji grid.
- Achievements: AWS Certified Cloud Practitioner, AWS Academy Graduate, Dice 3.0 Gold Medal, seven consecutive Dean's List semesters at KPM, and robotics competition third runner-up, based on reviewed material.
- Do not imply a certification is currently valid if expiry has not been checked. Omit issue/expiry dates until verified.
- References: keep a quiet supporting treatment. Prefer “References available on request” over placing third-party phone numbers in prominent design elements.

## Contact and destinations

- Resume: public/Azwar Fadzlin Resume.pdf, current document. Do not accidentally link an old resume from public/old resume/.
- Email: azwarfadzlin1@gmail.com.
- LinkedIn: https://linkedin.com/in/azwarfadzlin/
- GitHub: https://github.com/azwarfadzlin1
- Location: Bangi, Selangor, from the current site; clock labeled Malaysia to avoid implying live location tracking.
- Form: retain name/email/message validation and open a prefilled email. Feedback says a draft was requested, not that mail was delivered.
- Visitor counter: optional footer detail. Its external dependency must not affect core navigation or layout.

## Asset disposition

| Asset | Decision |
| --- | --- |
| azwar_image.jpeg | Use for personal photo widget |
| unimove_logo.png | Use as project identity/poster |
| web_product.png | Use as existing project screenshot with accurate caption |
| image_portfolio_website.png | Archive in place; replace its displayed use with a new capture after implementation |
| hero.png | Omit from new design; neon technical illustration conflicts with chosen reference |
| product_ui.png | Omit pending verification; inspected dashboard artwork does not establish the actual product's UI |
| customer_ui.png | Omit pending review; no established purpose in the selected first-release projects |
| next.svg, vercel.svg, file.svg, globe.svg, window.svg | No first-release brand role; leave files in place |
| Old resume PDFs | Keep in place; never use as current resume target |

## Stage 1 outcome and next build

The initial page hierarchy, copy, three project folders, portrait, resume target, and contact behavior are sufficiently defined for the next stage. Deeper project narratives and the Experian date reconciliation remain content follow-ups, not blockers for the visual foundation.

Next build: light-theme tokens, rounded app icon surfaces using a consistent existing glyph family, blue folder treatment, widget surface, and window chrome. Apply them first to the homepage shell at desktop and phone widths. Show that working visual checkpoint before expanding the treatment to every lower section.
