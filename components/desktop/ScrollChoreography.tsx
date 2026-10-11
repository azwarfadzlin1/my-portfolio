"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollChoreography() {
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 1200px) and (min-height: 800px) and (prefers-reduced-motion: no-preference)", () => {
      const folders = Array.from(document.querySelectorAll<HTMLElement>(".os-folder-stack > section"));
      folders.forEach((folder, index) => {
        const next = folders[index + 1];
        const content = folder.querySelector(".os-stack-content, .os-experience-layout");
        if (next && content) gsap.to(content, {
          scale: 0.98, y: -14, ease: "none",
          scrollTrigger: { trigger: next, start: "top 80%", end: () => `top ${getComputedStyle(next).top}`, scrub: 0.25, invalidateOnRefresh: true },
        });
        const note = folder.querySelector(".os-evidence-note");
        if (note) gsap.fromTo(note, { y: 12 }, {
          y: 0, ease: "none",
          scrollTrigger: { trigger: folder, start: "top 85%", end: "top 30%", scrub: 0.25 },
        });
      });
    });
    return () => media.revert();
  });
  return null;
}
