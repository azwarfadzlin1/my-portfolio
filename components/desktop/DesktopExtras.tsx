"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { WeatherForecast } from "@/lib/weather";
import { SiFigma, SiGmail } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { Pause, Play, SkipBack, SkipForward, Sun, CloudRain, CloudLightning, Haze, FileText } from "lucide-react";

const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

export function MusicWidget() {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Metadata may arrive before hydration attaches the media event handlers.
    const timer = setTimeout(() => {
      const value = audio.current?.duration;
      if (value && Number.isFinite(value)) setDuration(value);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  async function togglePlayback() {
    const player = audio.current;
    if (!player) return;
    if (!player.paused) { player.pause(); return; }
    try { await player.play(); setError(null); }
    catch { setError("Couldn't play audio. Try again."); }
  }
  function updateDuration() {
    const value = audio.current?.duration;
    if (value && Number.isFinite(value)) setDuration(value);
  }
  return <section className="os-music os-widget" aria-label="Music player: Who's Lovin' You by The Jackson 5">
    <audio ref={audio} src="/videoplayback.weba" preload="metadata" onLoadedMetadata={updateDuration} onDurationChange={updateDuration} onTimeUpdate={() => setElapsed(audio.current?.currentTime ?? 0)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setError("Audio unavailable. Please reload."); }} />
    <div className="os-music-main"><Image className="os-album-art" src="/music/jackson-5-ultimate-collection.jpg" alt="The Ultimate Collection album artwork by Jackson 5" width={65} height={65} /><div className="os-track-details"><strong>Who&apos;s Lovin&apos; You</strong><p>The Jackson 5</p><div className="os-music-controls">
      <button type="button" aria-label="Restart track" onClick={() => { if (audio.current) audio.current.currentTime = 0; setElapsed(0); }}><SkipBack size={13} /></button>
      <button type="button" aria-label={playing ? "Pause music" : "Play music"} onClick={() => void togglePlayback()}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>
      <button type="button" disabled aria-label="Next track (only one song)"><SkipForward size={13} /></button>
    </div></div></div>
    <input className="os-music-seek" style={{ backgroundImage: `linear-gradient(to right, #666 ${duration ? elapsed / duration * 100 : 0}%, #dfe0e3 ${duration ? elapsed / duration * 100 : 0}%)` }} type="range" aria-label="Seek in song" aria-valuetext={`${formatTime(elapsed)} of ${formatTime(duration)}`} min={0} max={duration || 1} step={0.1} value={Math.min(elapsed, duration || 0)} disabled={!duration} onChange={event => { const value = Number(event.target.value); if (audio.current) audio.current.currentTime = value; setElapsed(value); }} />
    <div className="os-music-time"><span>{formatTime(elapsed)}</span><span>{duration ? `−${formatTime(Math.max(0, duration - elapsed))}` : "—:——"}</span></div>
    {error && <p className="os-music-status" role="status">{error}</p>}
  </section>;
}

export function WeatherWidget() {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    async function load() {
      try {
        const response = await fetch("/api/weather", { signal: controller.signal });
        if (!response.ok) throw new Error("Forecast unavailable");
        const data: WeatherForecast = await response.json();
        if (!data.days?.length) throw new Error("Empty forecast");
        setForecast(data); setError(false);
      } catch { if (!controller.signal.aborted) setError(true); }
    }
    void load();
    const timer = setInterval(() => void load(), 30 * 60 * 1000);
    return () => { controller.abort(); clearInterval(timer); };
  }, [attempt]);
  return <section className="os-weather os-widget" aria-label="Shah Alam weather forecast">
    <div><span>Shah Alam</span><a href="https://developer.data.gov.my/realtime-api/weather" target="_blank" rel="noopener noreferrer" aria-label="Weather source: MET Malaysia via data.gov.my">MET Malaysia</a></div>
    {forecast ? <ul>{forecast.days.map(day => {
      const summary = day.summary.toLowerCase();
      const Icon = summary.includes("ribut") ? CloudLightning : summary.includes("tiada") ? Sun : summary.includes("hujan") ? CloudRain : Haze;
      const date = new Date(`${day.date}T12:00:00+08:00`);
      const weekday = new Intl.DateTimeFormat("en-GB", { weekday: "short", timeZone: "Asia/Kuala_Lumpur" }).format(date);
      return <li key={day.date} title={`${day.date}: ${day.summary}, ${day.low}–${day.high}°C`} aria-label={`${weekday}, ${day.summary}, low ${day.low}, high ${day.high} degrees Celsius`}><time dateTime={day.date}>{weekday}</time><Icon size={14} aria-hidden="true" /><span>{day.high}°<small>{day.low}°</small></span></li>;
    })}</ul> : !error && <p className="os-weather-message" role="status">Loading forecast…</p>}
    {error && <p className="os-weather-message" role="status">{forecast ? "Couldn't refresh forecast." : "Forecast unavailable."} <button type="button" onClick={() => { setError(false); setAttempt(value => value + 1); }}>Retry</button></p>}
  </section>;
}

const apps = [
  { label: "GitHub (placeholder)", image: "/app_icon_image/github.webp", Icon: null, tone: "", href: null },
  { label: "LinkedIn (placeholder)", image: "/app_icon_image/LinkedIn_icon.svg.webp", Icon: null, tone: "", href: null },
  { label: "Gmail (placeholder)", image: null, Icon: SiGmail, tone: "gmail", href: null },
  { label: "X (profile not configured)", image: null, Icon: FaXTwitter, tone: "x", href: null },
  { label: "Resume (placeholder)", image: null, Icon: FileText, tone: "resume", href: null },
  { label: "Facebook (profile not configured)", image: "/app_icon_image/2023_Facebook_icon.svg.webp", Icon: null, tone: "", href: null },
  { label: "YouTube (channel not configured)", image: "/app_icon_image/youtube.png", Icon: null, tone: "", href: null },
  { label: "WhatsApp: +60 14-2913-880", image: "/app_icon_image/whatsapp.webp", Icon: null, tone: "", href: "https://wa.me/60142913880" },
  { label: "Figma (placeholder)", image: null, Icon: SiFigma, tone: "figma", href: null },
  { label: "Visual Studio Code (placeholder)", image: null, Icon: VscVscode, tone: "vscode", href: null },
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
  return <div ref={bounds} className="os-app-drag-bounds"><motion.section ref={panel} className="os-app-palette os-widget" tabIndex={0} onKeyDown={event => {
      const steps: Record<string, [number, number]> = { ArrowLeft: [-20, 0], ArrowRight: [20, 0], ArrowUp: [0, -20], ArrowDown: [0, 20] };
      const step = steps[event.key];
      if (!step || !bounds.current || !panel.current) return;
      event.preventDefault();
      const area = bounds.current.getBoundingClientRect(), rect = panel.current.getBoundingClientRect();
      x.set(x.get() + Math.max(area.left - rect.left, Math.min(step[0], area.right - rect.right)));
      y.set(y.get() + Math.max(area.top - rect.top, Math.min(step[1], area.bottom - rect.bottom)));
    }} aria-label="App shortcuts; drag anywhere or use arrow keys to move" drag dragConstraints={bounds} dragElastic={reduced ? 0 : 0.06} dragMomentum={false} style={{ x, y }} onPointerDownCapture={() => { dragged.current = false; }} onDragStart={() => { dragged.current = true; }} onClickCapture={event => { if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; } }}>
    <div className="os-palette-grid">{apps.map(app => {
      const Icon = app.Icon;
      const icon = app.image ? <Image src={app.image} alt="" width={34} height={34} draggable={false} /> : Icon && <Icon aria-hidden="true" />;
      const className = `os-app-asset${app.tone ? ` os-brand-${app.tone}` : ""}`;
      return app.href ? <a key={app.label} className={className} draggable={false} href={app.href} download={app.tone === "resume" || undefined} title={app.label} aria-label={app.label} target={app.href.startsWith("https") ? "_blank" : undefined} rel={app.href.startsWith("https") ? "noopener noreferrer" : undefined}>{icon}</a> : <span className={`os-app-placeholder ${className}`} key={app.label} title={app.label} aria-label={app.label}>{icon}</span>;
    })}</div>
  </motion.section></div>;
}
