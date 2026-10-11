"use client";



import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion, useMotionValue, useReducedMotion } from "framer-motion";

import { Music2, Pause, Play, SkipBack, SkipForward, Sun, Cloud } from "lucide-react";



export function MusicPlaceholder() {

  const [playing, setPlaying] = useState(false);

  return <section className="os-music os-widget" aria-label="Music player placeholder"><div className="os-music-main"><div className="os-album-placeholder"><Music2 size={23} /><span>ARTWORK</span></div><div><strong>Your favourite track</strong><p>Music placeholder</p><div className="os-music-controls"><button disabled aria-label="Previous track"><SkipBack size={13} /></button><button aria-label={playing ? "Pause music preview" : "Play music preview"} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={15} /> : <Play size={15} />}</button><button disabled aria-label="Next track"><SkipForward size={13} /></button></div></div></div><div className="os-music-progress" /><p className="os-music-status" aria-live="polite">{playing ? "Visual preview · no audio connected" : "Add your song later · no audio connected"}</p></section>;

}



export function WeatherPlaceholder() {

  return <section className="os-weather os-widget" aria-label="Malaysia weather placeholder"><div><span>Malaysia</span><span>Weather preview</span></div><ul>{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => <li key={day}><span>{day}</span>{i === 2 || i === 3 ? <Cloud size={14} /> : <Sun size={14} />}<span>—</span></li>)}</ul></section>;

}



const apps = [

  { label: "GitHub", mark: "GH", image: "/app_icon_image/github.webp", href: "https://github.com/azwarfadzlin1" },

  { label: "LinkedIn", mark: "in", image: "/app_icon_image/LinkedIn_icon.svg.webp", href: "https://linkedin.com/in/azwarfadzlin/" },

  { label: "Gmail", mark: "M", image: null, href: "mailto:azwarfadzlin1@gmail.com" },

  { label: "Whatsapp", mark: "WS", image: "/app_icon_image/whatsapp.webp", href: "https://wa.me/<60><142913880>" },

  { label: "Resume", mark: "CV", image: null, href: "/Azwar%20Fadzlin%20Resume.pdf" },

  { label: "Facebook — profile not configured", mark: "", image: "/app_icon_image/2023_Facebook_icon.svg.webp", href: null },

  { label: "YouTube — channel not configured", mark: "", image: "/app_icon_image/youtube.png", href: null },

  ...Array.from({ length: 3 }, (_, i) => ({ label: `App ${i + 1} — placeholder`, mark: "·", image: null, href: null })),

];



export function DraggableApps() {

  const bounds = useRef<HTMLDivElement>(null);

  const panel = useRef<HTMLElement>(null);

  const dragged = useRef(false);

  const x = useMotionValue(0), y = useMotionValue(0);

  const reduced = useReducedMotion();

  useEffect(() => {

    const reset = () => { x.set(0); y.set(0); };

    window.addEventListener("resize", reset);

    return () => window.removeEventListener("resize", reset);

  }, [x, y]);

  return <div ref={bounds} className="os-app-drag-bounds"><motion.section ref={panel} className="os-app-palette os-widget" aria-label="App shortcuts with placeholder icons" drag dragConstraints={bounds} dragElastic={reduced ? 0 : 0.06} dragMomentum={false} style={{ x, y }} onPointerDownCapture={() => { dragged.current = false; }} onDragStart={() => { dragged.current = true; }} onClickCapture={event => { if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; } }}>

    <div className="os-palette-toolbar"><button className="os-palette-handle" aria-label="Move app shortcuts; use arrow keys or drag anywhere" onKeyDown={event => {

      const steps: Record<string, [number, number]> = { ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20] };

      const step = steps[event.key];

      if (!step || !bounds.current || !panel.current) return;

      event.preventDefault();

      const area = bounds.current.getBoundingClientRect(), rect = panel.current.getBoundingClientRect();

      x.set(x.get() + Math.max(area.left - rect.left, Math.min(step[0], area.right - rect.right)));

      y.set(y.get() + Math.max(area.top - rect.top, Math.min(step[1], area.bottom - rect.bottom)));

    }}></button></div>

    <div className="os-palette-grid">{apps.map(app => {

      const icon = app.image ? <Image src={app.image} alt="" width={34} height={34} draggable={false} /> : <span aria-hidden="true">{app.mark}</span>;

      return app.href ? <a key={app.label} className={app.image ? "os-app-asset" : undefined} draggable={false} href={app.href} title={app.image ? app.label : `${app.label} · icon pending`} aria-label={app.label} target={app.href.startsWith("https") ? "_blank" : undefined} rel={app.href.startsWith("https") ? "noopener noreferrer" : undefined}>{icon}</a> : <span className={`os-app-placeholder${app.image ? " os-app-asset" : ""}`} key={app.label} title={app.label} aria-label={app.label}>{icon}</span>;

    })}</div>

  </motion.section></div>;

}

