"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const tools = [
  { name: "Kotlin", logo: "kotlin" },
  { name: "Jetpack Compose", logo: "compose" },
  { name: "Java", logo: "java" },
  { name: "React", logo: "react" },
  { name: "Next.js", logo: "next" },
  { name: "TypeScript", logo: "typescript" },
  { name: "Tailwind CSS", logo: "tailwind" },
  { name: "Firebase", logo: "firebase" },
  { name: "Playwright", logo: "playwright" },
  { name: "Git", logo: "git" },
  { name: "AWS", logo: "aws" },
];

export default function ExpertiseMarquee() {
  const region = useRef<HTMLElement>(null);
  const group = useRef<HTMLUListElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
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
          {tools.map(({ name, logo }) => <li key={name}>
            <span className="os-tool-logo"><Image src={`/tool-logos/${logo}.svg`} alt="" width={52} height={52} loading="eager" unoptimized /></span>
            <span className="os-expertise-label">{name}</span>
          </li>)}
        </ul>)}
      </div>
    </div>
  </section>;
}
