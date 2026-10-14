"use client";



import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { animate, useReducedMotion } from "framer-motion";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion as useDockReducedMotion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";

import { ArrowUpRight, Award, BriefcaseBusiness, Code2, Folder, House, Mail, UserRound, X } from "lucide-react";

import { MusicWidget, WeatherWidget } from "./DesktopExtras";



const zone = "Asia/Kuala_Lumpur";

const projects = [

  { id: "unimove", name: "UniMove", category: "Android application", description: "Campus fitness tracking app, built as my final year project.", details: ["Tracks distance, pace, and routes in real time using Google Maps API and Play Services Location.", "Firebase Authentication and Cloud Firestore provide secure user management and real-time data synchronization.", "Leaderboards, challenges, and a community activity feed encourage participation.", "MVVM architecture and Kotlin Coroutines support responsive performance; system design extends to Wear OS smartwatch tracking."], tags: ["Kotlin", "Jetpack Compose", "Firebase", "Google Maps SDK", "MVVM", "Git", "Node.js"], image: "/unimove_logo.png", href: "https://github.com/azwarfadzlin1/UniMove", linkLabel: "View source on GitHub" },

  { id: "jomeco", name: "JomEco", category: "Sustainable lifestyle app", description: "An Android application for sustainable living and eco-friendly community engagement.", details: ["TensorFlow Lite and CameraX power real-time, on-device waste classification.", "ML Kit barcode scanning supports event check-ins and product information retrieval.", "Room Database provides offline persistence; Retrofit REST APIs synchronize environmental initiatives and community event data.", "Built with MVVM, Kotlin Coroutines, and responsive Material 3 UI components."], tags: ["TensorFlow Lite", "ML Kit", "CameraX", "Room", "Retrofit", "MVVM", "Coroutines", "Material 3"], image: null, href: null, linkLabel: null },

  { id: "product", name: "Product system", category: "Web & database project", description: "A web-based product and inventory management project for organizing structured records and query operations. This screenshot shows the project's Phone Seller interface.", details: [], tags: ["Web development", "Database design", "Product records"], image: "/web_product.png", href: null, linkLabel: null },

  { id: "portfolio", name: "Portfolio", category: "Design & development", description: "My personal corner of the web, built with Next.js, React, and TypeScript.", details: ["Responsive desktop-inspired interface with animated widgets, project windows, and accessible navigation.", "Tailwind CSS powers the responsive layout and UI styling.", "Integrated Supabase for backend data management and deployed on Vercel with automated CI/CD."], tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"], image: null, href: "https://github.com/azwarfadzlin1", linkLabel: "Visit my GitHub" },

];



export function AppIcon({ kind, tone }: { kind: "home" | "work" | "experience" | "awards" | "about" | "contact"; tone?: string }) {

  const icons = { home: House, work: Folder, experience: BriefcaseBusiness, awards: Award, about: UserRound, contact: Mail };

  const Glyph = icons[kind];

  return <span className={`os-app-icon os-tone-${tone ?? kind}`} aria-hidden="true"><Glyph size={25} strokeWidth={1.8} /></span>;

}



const dockSpring = { type: "spring" as const, stiffness: 420, damping: 30, mass: 0.18 };

const dockItems = [

  { kind: "home", label: "Home", target: "home" },

  { kind: "work", label: "Work", target: "projects" },

  { kind: "experience", label: "Experience", target: "experience" },

  { kind: "awards", label: "Awards", target: "certificates" },

  { kind: "about", label: "About", target: "about" },

  { kind: "contact", label: "Contact", target: "contact" },

] as const;



function DockItem({ item, mouseX, active, magnify, reduced }: {

  item: (typeof dockItems)[number]; mouseX: MotionValue<number>; active: boolean; magnify: boolean; reduced: boolean;

}) {

  const anchor = useRef<HTMLAnchorElement>(null);

  const [hint, setHint] = useState(false);

  const distance = useTransform(mouseX, cursor => {

    const bounds = anchor.current?.getBoundingClientRect();

    return bounds ? cursor - (bounds.left + bounds.width / 2) : Infinity;

  });

  const sizeTarget = useTransform(distance, [-140, -70, 0, 70, 140], [42, 48, 68, 48, 42]);

  const liftTarget = useTransform(distance, [-140, 0, 140], [0, -8, 0]);

  const size = useSpring(sizeTarget, dockSpring);

  const lift = useSpring(liftTarget, dockSpring);

  return <motion.a ref={anchor} href={`#${item.target}`} className={`os-dock-item ${item.kind === "experience" || item.kind === "awards" ? "os-dock-extra" : ""}`} aria-label={item.label} aria-current={active ? "location" : undefined}

    onHoverStart={() => setHint(true)} onHoverEnd={() => setHint(false)} onFocus={() => setHint(true)} onBlur={() => setHint(false)}>

    <AnimatePresence initial={false}>{hint && <motion.span key="hint" className="os-dock-tooltip" aria-hidden="true" initial={{ opacity: 0, y: reduced ? 0 : 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : 4 }} transition={reduced ? { duration: 0 } : dockSpring}>{item.label}</motion.span>}</AnimatePresence>

    <motion.span className="os-dock-spring-icon" style={{ width: magnify ? size : 42, height: magnify ? size : 42, y: magnify ? lift : 0 }} whileTap={reduced ? undefined : { scale: 0.95 }} transition={dockSpring}><AppIcon kind={item.kind} /></motion.span>

    <span className="os-dock-mobile-label">{item.label}</span>

    {active && <motion.span className="os-dock-indicator" layoutId={reduced ? undefined : "active-section"} transition={reduced ? { duration: 0 } : dockSpring} />}

  </motion.a>;

}



export function DesktopDock() {

  const [active, setActive] = useState("home");

  const [finePointer, setFinePointer] = useState(false);

  const reduced = useDockReducedMotion() ?? false;

  const mouseX = useMotionValue(Infinity);

  useEffect(() => {

    const observer = new IntersectionObserver(entries => {

      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id === "experian" ? "experience" : entry.target.id);

    }, { rootMargin: "-15% 0px -55% 0px" });

    document.querySelectorAll(".os-page section[id]").forEach(section => observer.observe(section));

    const pointer = window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 640px)");

    const updatePointer = () => { setFinePointer(pointer.matches); mouseX.set(Infinity); };

    updatePointer();

    pointer.addEventListener("change", updatePointer);

    return () => { observer.disconnect(); pointer.removeEventListener("change", updatePointer); };

  }, [mouseX]);

  const magnify = finePointer && !reduced;

  return <LayoutGroup id="portfolio-dock"><nav className="os-dock" aria-label="Portfolio sections"

    onPointerMove={event => { if (magnify && event.pointerType !== "touch") mouseX.set(event.clientX); }}

    onPointerLeave={() => mouseX.set(Infinity)} onPointerCancel={() => mouseX.set(Infinity)}>

    {dockItems.map(item => <DockItem key={item.kind} item={item} mouseX={mouseX} active={active === item.target} magnify={magnify} reduced={reduced} />)}

  </nav></LayoutGroup>;

}



export function MalaysiaWidgets() {

  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {

    const update = () => setNow(new Date());

    const first = setTimeout(update, 0);

    const timer = setInterval(update, 1000);

    return () => { clearTimeout(first); clearInterval(timer); };

  }, []);

  const parts = now ? new Intl.DateTimeFormat("en-GB", { timeZone: zone, year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" }).formatToParts(now) : [];

  const get = (name: string) => Number(parts.find(part => part.type === name)?.value ?? 0);

  const year = get("year"), month = get("month"), day = get("day"), hour = get("hour"), minute = get("minute"), second = get("second");

  const offset = now ? (new Date(Date.UTC(year, month - 1, 1)).getUTCDay() + 6) % 7 : 0;

  const days = now ? new Date(Date.UTC(year, month, 0)).getUTCDate() : 0;

  const timeLabel = now ? new Intl.DateTimeFormat("en-MY", { timeZone: zone, hour: "numeric", minute: "2-digit" }).format(now) : "Malaysia time";

  const monthLabel = now ? new Intl.DateTimeFormat("en-GB", { timeZone: zone, month: "long", year: "numeric" }).format(now) : "Calendar";

  return <div className="os-widget-cluster">

    <div className="os-mobile-clock"><span>Malaysia</span><time>{timeLabel} MYT</time></div>

    <div className="os-clock os-widget" role="img" aria-label={`Malaysia clock, ${timeLabel}`}>

      <div className="os-clock-face">

        {Array.from({ length: 12 }, (_, i) => <i key={i} className="os-clock-tick" style={{ transform: `rotate(${i * 30}deg)` }} />)}

        <span className="os-clock-city">MALAYSIA</span>

        <span className="os-clock-hand os-clock-hour" style={{ transform: `rotate(${hour * 30 + minute / 2}deg)` }} />

        <span className="os-clock-hand os-clock-minute" style={{ transform: `rotate(${minute * 6 + second / 10}deg)` }} />

        <span className="os-clock-hand os-clock-second" style={{ transform: `rotate(${second * 6}deg)` }} />

        <span className="os-clock-pin" />

      </div><span className="os-clock-caption">{timeLabel} MYT</span>

    </div>

    <div className="os-calendar os-widget" aria-label={`Malaysia calendar, ${monthLabel}`}>

      <p className="os-calendar-weekday">{now ? new Intl.DateTimeFormat("en-GB", { timeZone: zone, weekday: "long" }).format(now) : "TODAY"}</p>

      <p className="os-calendar-date">{now ? day : "\u00a0"}</p>

      <p className="os-calendar-month">{monthLabel}</p>

      <div className="os-calendar-grid" style={{ gridTemplateRows: `repeat(${1 + Math.ceil((offset + days) / 7)}, minmax(0, 1fr))` }}>

        {["M", "T", "W", "T", "F", "S", "S"].map((letter, i) => <span className="os-calendar-heading" key={`h${i}`}>{letter}</span>)}

        {Array.from({ length: offset }, (_, i) => <span key={`s${i}`} />)}

        {Array.from({ length: days }, (_, i) => <span key={i} className={i + 1 === day ? "os-calendar-today" : ""} aria-current={i + 1 === day ? "date" : undefined}>{i + 1}</span>)}

      </div>

    </div>

    <MusicWidget />

    <WeatherWidget />

    <figure className="os-photo os-widget"><Image src="/azwar_image.jpeg" alt="Azwar Fadzlin smiling in a suit" fill sizes="(max-width: 639px) 44vw, 136px" preload /><figcaption>Little moments, big ambitions.</figcaption></figure>

  </div>;

}



export function ProjectFolders({ location = "hero" }: { location?: "hero" | "section" }) {

  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const dialog = useRef<HTMLDialogElement>(null);

  const opener = useRef<HTMLButtonElement | null>(null);

  const animation = useRef<{ stop: () => void } | null>(null);

  const closing = useRef(false);

  const reducedMotion = useReducedMotion();

  useEffect(() => () => animation.current?.stop(), []);



  function windowOffset() {

    const source = opener.current?.getBoundingClientRect();

    const destination = dialog.current?.getBoundingClientRect();

    const mobile = window.matchMedia("(max-width: 639px)").matches;

    if (mobile || !source || !destination || source.bottom < 0 || source.top > window.innerHeight) return { x: 0, y: mobile ? 20 : 8 };

    return {

      x: (source.left + source.width / 2 - destination.left - destination.width / 2) * 0.35,

      y: (source.top + source.height / 2 - destination.top - destination.height / 2) * 0.35,

    };

  }



  function openProject(button: HTMLButtonElement, project: (typeof projects)[number]) {

    if (closing.current) return;

    animation.current?.stop();

    opener.current = button;

    setSelected(project);

    const element = dialog.current;

    if (!element) return;

    element.style.transform = "none";

    element.style.opacity = "1";

    element.showModal();

    if (reducedMotion) return;

    const offset = windowOffset();

    const mobile = window.matchMedia("(max-width: 639px)").matches;

    animation.current = animate(element, { x: [offset.x, 0], y: [offset.y, 0], scale: [mobile ? 1 : 0.9, 1], opacity: [0, 1] }, { duration: 0.28, ease: [0.22, 1, 0.36, 1] });

  }



  async function closeProject() {

    const element = dialog.current;

    if (!element?.open || closing.current) return;

    closing.current = true;

    animation.current?.stop();

    if (!reducedMotion) {

      const offset = windowOffset();

      const mobile = window.matchMedia("(max-width: 639px)").matches;

      const exit = animate(element, { x: offset.x * 0.6, y: offset.y * 0.6, scale: mobile ? 1 : 0.94, opacity: 0 }, { duration: 0.22, ease: [0.22, 1, 0.36, 1] });

      animation.current = exit;

      await exit;

    }

    element.close();

    closing.current = false;

  }

  useEffect(() => {

    if (!selected) return;

    const previous = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => { document.body.style.overflow = previous; };

  }, [selected]);

  return <>

    <div className={`os-folders os-folders-${location}`} aria-label="Project folders">

      {projects.map((project, i) => <button key={project.id} type="button" className="os-folder-button" onClick={event => openProject(event.currentTarget, project)} aria-haspopup="dialog">

        <span className={`os-folder-art os-folder-${i}`} aria-hidden="true"><span className="os-folder-paper" /><span className="os-folder-front" /></span>

        <span className="os-folder-label">{project.name}</span>{location === "section" && <span className="os-folder-category">{project.category}</span>}

      </button>)}

    </div>

    <dialog ref={dialog} className="os-project-dialog" aria-labelledby={`project-title-${location}`} onCancel={event => { event.preventDefault(); void closeProject(); }} onClose={() => { setSelected(null); opener.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) void closeProject(); }}>

      <div className="os-window-bar"><button type="button" className="os-close" aria-label="Close project" onClick={() => void closeProject()}><X size={12} /></button><span>{selected?.name ?? "Project"}</span><Code2 size={14} aria-hidden="true" /></div>

      {selected && <div className="os-project-body">

        <p className="os-eyebrow">{selected.category}</p><h2 id={`project-title-${location}`}>{selected.name}</h2><p>{selected.description}</p>
        {selected.details.length > 0 && <ul className="os-project-features">{selected.details.map(detail => <li key={detail}>{detail}</li>)}</ul>}

        {selected.id === "unimove" ? <video controls playsInline preload="none" poster="/unimove_logo.png" aria-label="UniMove app demonstration" src="https://qclpiuhdwqbptuswqouv.supabase.co/storage/v1/object/public/unimove_videos/unimove-videos_GqQc8gWa.mp4" /> : selected.image && <Image src={selected.image} alt="Phone Seller product management project interface" width={1844} height={892} sizes="(max-width: 767px) 90vw, 650px" />}

        <div className="os-tags">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>

        {selected.href && <a className="os-text-link" href={selected.href} target="_blank" rel="noopener noreferrer">{selected.linkLabel}<ArrowUpRight size={16} /></a>}

      </div>}

    </dialog>

  </>;

}

