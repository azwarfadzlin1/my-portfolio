"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollChoreography() {
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const folders = Array.from(document.querySelectorAll<HTMLElement>(".os-resume-stack > section"));
      const contents = folders.map(folder => folder.querySelector<HTMLElement>(".os-resume-content")!);
      const markers = folders.map(folder => folder.previousElementSibling as HTMLElement);
      const overflow: number[] = [];
      const offsets: number[] = [];
      const measure = () => {
        folders.forEach((folder, index) => {
          const top = 48 + index * 32;
          const height = Math.max(220, window.innerHeight - top - 96);
          overflow[index] = Math.max(0, contents[index].offsetHeight - height + 2);
          offsets[index] = top;
          folder.style.setProperty("--folder-top", `${top}px`);
          folder.style.setProperty("--folder-height", `${height}px`);
          folder.style.setProperty("--folder-runway", `${overflow[index]}px`);
          (folder.nextElementSibling as HTMLElement).style.height = `${overflow[index]}px`;
          folder.dataset.scrollFolder = "true";
        });
      };
      measure();
      folders.forEach((folder, index) => {
        gsap.fromTo(folder, {
          y: 24, scale: 0.99, rotateX: 2, transformPerspective: 1200,
        }, {
          y: 0, scale: 1, rotateX: 0, ease: "none",
          scrollTrigger: {
            trigger: markers[index], start: "top 95%",
            end: () => `top ${offsets[index]}`,
            scrub: 0.24, invalidateOnRefresh: true,
            onToggle: trigger => { folder.style.willChange = trigger.isActive ? "transform" : "auto"; },
          },
        });
        gsap.to(contents[index], {
          y: () => -overflow[index], ease: "none",
          scrollTrigger: {
            trigger: markers[index], start: () => `top ${offsets[index]}`,
            end: () => `+=${Math.max(1, overflow[index])}`,
            scrub: true, invalidateOnRefresh: true,
          },
        });
        if (markers[index + 1]) gsap.to(contents[index], {
          opacity: 0, scale: 0.985, ease: "none",
          scrollTrigger: {
            trigger: markers[index + 1], start: "top 65%",
            end: () => `top ${offsets[index + 1] + 80}`,
            scrub: 0.18, invalidateOnRefresh: true,
          },
        });
      });
      // Markers remain in document flow while folder panels overlap.
      const refresh = () => { measure(); ScrollTrigger.refresh(); };
      const observer = new ResizeObserver(refresh);
      contents.forEach(content => observer.observe(content));
      window.addEventListener("resize", refresh);
      ScrollTrigger.addEventListener("refreshInit", measure);
      const initialAnchor = window.requestAnimationFrame(() => {
        const index = folders.findIndex(folder => `#${folder.id}` === window.location.hash);
        if (index >= 0) window.scrollTo({ top: window.scrollY + markers[index].getBoundingClientRect().top - offsets[index], behavior: "instant" });
      });
      const navigate = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
        if (!anchor) return;
        const index = folders.findIndex(folder => `#${folder.id}` === anchor.hash);
        if (index < 0) return;
        event.preventDefault();
        window.history.pushState(null, "", anchor.hash);
        window.scrollTo({ top: window.scrollY + markers[index].getBoundingClientRect().top - offsets[index], behavior: event.detail === 0 ? "instant" : "smooth" });
      };
      const revealFocus = (event: FocusEvent) => {
        const target = event.target as HTMLElement;
        const index = folders.findIndex(folder => folder.contains(target));
        if (index < 0) return;
        const area = folders[index].getBoundingClientRect();
        const rect = target.getBoundingClientRect();
        if (rect.top >= area.top && rect.bottom <= area.bottom && parseFloat(getComputedStyle(contents[index]).opacity) >= 0.99) return;
        const local = rect.top - contents[index].getBoundingClientRect().top;
        const distance = Math.max(0, Math.min(overflow[index], local - 40));
        window.scrollTo({ top: window.scrollY + markers[index].getBoundingClientRect().top - offsets[index] + distance, behavior: "instant" });
      };
      document.addEventListener("click", navigate);
      document.addEventListener("focusin", revealFocus);
      return () => {
        observer.disconnect();
        window.cancelAnimationFrame(initialAnchor);
        window.removeEventListener("resize", refresh);
        document.removeEventListener("click", navigate);
        document.removeEventListener("focusin", revealFocus);
        ScrollTrigger.removeEventListener("refreshInit", measure);
        folders.forEach(folder => {
          delete folder.dataset.scrollFolder;
          folder.style.removeProperty("will-change");
          (folder.nextElementSibling as HTMLElement).style.removeProperty("height");
          ["--folder-top", "--folder-height", "--folder-runway"].forEach(name => folder.style.removeProperty(name));
        });
      };
    });
    return () => media.revert();
  });
  return null;
}
