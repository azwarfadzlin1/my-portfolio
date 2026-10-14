import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { DraggableApps } from "@/components/desktop/DesktopExtras";
import { DesktopDock, MalaysiaWidgets, ProjectFolders } from "@/components/desktop/DesktopControls";
import ResumeFolders from "@/components/desktop/ResumeFolders";
import ExpertiseMarquee from "@/components/desktop/ExpertiseMarquee";
import ScrollChoreography from "@/components/desktop/ScrollChoreography";
import "./preview/preview.css";
import "./resume-folders.css";

export const metadata: Metadata = {
  title: "Azwar Fadzlin | A little desktop, a lot of possibilities",
  description: "Software engineering student and Product Development Intern at FIUU. Explore Azwar's mobile and web projects.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.azwar.me/" },
};

const resume = "/Azwar%20Fadzlin%20Resume.pdf";
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-preview", display: "swap" });

export default function PortfolioPage() {
  return <div className={`os-page ${bricolage.variable}`}>
    <a className="os-skip" href="#main-content">Skip to content</a>
    <header className="os-status-bar"><a href="#home" className="os-monogram" aria-label="Azwar Fadzlin home">af.</a><span>Azwar Fadzlin</span><span className="os-status-role">Product Development Intern</span><a href={resume} download className="os-resume-link">Download resume <ArrowDownToLine size={12} /></a></header>
    <main id="main-content">
      <section id="home" className="os-desktop" aria-labelledby="intro-heading">
        <MalaysiaWidgets />
        <div className="os-intro"><h1 id="intro-heading">I&apos;m Azwar<br /><span>Product Development Intern at <a href="#experience">FIUU</a></span></h1><p className="os-intro-summary">Building mobile and web applications, testing fintech products,<br className="os-summary-break" /> and turning repetitive tasks into simpler workflows.</p></div>
        <div className="os-project-rail"><span className="os-rail-heading">SELECTED WORK</span><ProjectFolders /></div>
        <DraggableApps />
        
      </section>
      <ExpertiseMarquee />
      <ResumeFolders />
      <section id="contact" className="os-contact-strip" aria-labelledby="contact-heading">
        <div><h2 id="contact-heading">Let&apos;s build something useful.</h2><p>Bangi, Selangor &middot; Open to conversations and collaboration.</p></div>
        <div className="os-contact-links"><a href="mailto:azwarfadzlin1@gmail.com">Email Azwar <ArrowUpRight size={15} /></a><a href="https://wa.me/60142913880" target="_blank" rel="noopener noreferrer">WhatsApp &middot; +60 14-2913-880 <ArrowUpRight size={15} /></a><a href="https://linkedin.com/in/azwarfadzlin/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={15} /></a></div>
      </section>
    </main>
    <footer className="os-footer"><a href="#home" className="os-monogram">af.</a><span>Azwar Fadzlin © 2026</span></footer>
    <DesktopDock />
    <ScrollChoreography />
  </div>;
}
