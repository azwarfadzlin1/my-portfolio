"use client";

import { useEffect, useRef, useState } from "react";
import { TestTubes } from "lucide-react";
import { FaAws, FaJava } from "react-icons/fa";
import { SiFirebase, SiGit, SiJetpackcompose, SiKotlin, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const tools = [
  { name: "Kotlin", Icon: SiKotlin, tone: "kotlin" },
  { name: "Jetpack Compose", Icon: SiJetpackcompose, tone: "compose" },
  { name: "Java", Icon: FaJava, tone: "java" },
  { name: "React", Icon: SiReact, tone: "react" },
  { name: "Next.js", Icon: SiNextdotjs, tone: "next" },
  { name: "TypeScript", Icon: SiTypescript, tone: "typescript" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, tone: "tailwind" },
  { name: "Firebase", Icon: SiFirebase, tone: "firebase" },
  { name: "Playwright", Icon: TestTubes, tone: "playwright" },
  { name: "Git", Icon: SiGit, tone: "git" },
  { name: "AWS", Icon: FaAws, tone: "aws" },
];

export default function ExpertiseMarquee() {
  const region = useRef<HTMLElement>(null);
  const group = useRef<HTMLUListElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    if (region.current) observer.observe(region.current);
    const visibility = () => setHidden(document.hidden);
    document.addEventListener("visibilitychange", visibility);
    const resize = new ResizeObserver(() => {
      if (group.current && track.current) {
        track.current.style.setProperty("--marquee-duration", `${group.current.getBoundingClientRect().width / 28}s`);
      }
    });
    if (group.current) resize.observe(group.current);
    return () => {
      observer.disconnect();
      resize.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);

  return <section id="expertise" ref={region} className="os-expertise" aria-labelledby="expertise-heading">
    <div className="os-section-heading">
      <p className="os-eyebrow">Mobile. Web. Everything in between.</p>
      <h2 id="expertise-heading">Tools I work with.</h2>
      <p>A mix of building, testing, and figuring things out.</p>
    </div>
    <div className="os-marquee-viewport" data-paused={!inView || hidden}>
      <div ref={track} className="os-expertise-track">
        {[false, true].map(duplicate => <ul key={String(duplicate)} ref={duplicate ? undefined : group} className="os-expertise-group" aria-hidden={duplicate || undefined} aria-label={duplicate ? undefined : "Tools and technologies"}>
          {tools.map(({ name, Icon, tone }) => <li key={name}>
            <span className={`os-expertise-icon os-tool-${tone}`}><Icon aria-hidden="true" /></span>
            <span className="os-expertise-label">{name}</span>
          </li>)}
        </ul>)}
      </div>
    </div>
  </section>;
}
