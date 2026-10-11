import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight, Code2, GraduationCap, Mail } from "lucide-react";
import { DraggableApps } from "@/components/desktop/DesktopExtras";
import { AppIcon, DesktopDock, MalaysiaWidgets, ProjectFolders } from "@/components/desktop/DesktopControls";
import ContactForm from "@/components/ContactForm";
import ExpertiseMarquee from "@/components/desktop/ExpertiseMarquee";
import ScrollChoreography from "@/components/desktop/ScrollChoreography";
import "./preview/preview.css";

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
      <div className="os-folder-stack">
      <section id="projects" className="os-section os-work-section os-stack-work"><div className="os-section-tab">WORK</div><div className="os-stack-content"><div className="os-section-heading"><p className="os-eyebrow">A few things I&apos;ve built</p><h2>Good ideas deserve<br />a working version.</h2><p>From an Android fitness app to this corner of the web.<br />Open a folder and take a look.</p></div><ProjectFolders location="section" /></div></section>
      <section id="experience" className="os-folder-section os-stack-experience os-stack-fiuu"><div className="os-section-tab">FIUU INTERNSHIP</div><div className="os-experience-layout"><div><p className="os-eyebrow">Currently at FIUU</p><h2>Making the repetitive<br />a little less repetitive.</h2><p>As a Product Development Intern, I work on fintech testing, automation, and the details that help engineers ship with confidence.</p><span className="os-date-label">August 2026 to present · Shah Alam</span></div><div className="os-evidence-note"><div className="os-note-header">A few things I&apos;m working on</div><ul><li><strong>15 minutes → 3 minutes</strong><span>Merchant onboarding form completion with Playwright automation.</span></li><li><strong>30+ UAT scenarios</strong><span>Testing across 3+ fintech products, including online and terminal payments.</span></li><li><strong>Configuration as code</strong><span>A proof of concept with a Senior Software Engineer addressing 30+ manual database queries.</span></li></ul></div></div></section>
      <section id="experian" className="os-folder-section os-stack-experience os-stack-experian" aria-labelledby="experian-heading"><div className="os-section-tab">EXPERIAN INTERNSHIPS</div><div className="os-experience-layout"><div><p className="os-eyebrow">Previously at Experian</p><h2 id="experian-heading">Supporting people.<br />Securing endpoints.</h2><p>My internships at Experian took me from hands-on IT support to desktop vulnerability management, helping keep people productive and their devices secure.</p><span className="os-date-label">IT Support Intern → Desktop Vulnerability Management Analyst Intern</span></div><div className="os-evidence-note"><div className="os-note-header">Two internships, a broader foundation</div><ul><li><strong>IT support &amp; deployment</strong><span>Troubleshooting laptops and workstations, OS imaging, BIOS configuration, and preparing IT assets for deployment.</span></li><li><strong>Endpoint vulnerability management</strong><span>Remediating vulnerabilities, deploying SCCM updates, and validating patching and encryption compliance.</span></li><li><strong>Everyday technical problem-solving</strong><span>Enterprise software installation, BitLocker support, and WiFi and VPN troubleshooting.</span></li></ul></div></div></section>

      </div>
      <section id="certificates" className="os-section os-awards-section"><div className="os-section-heading"><p className="os-eyebrow">Along the way</p><h2>Small milestones.<br />Plenty more to learn.</h2></div><div className="os-achievements"><article><AppIcon kind="awards" /><h3>AWS Cloud Practitioner</h3><p>Cloud foundations and certification.</p></article><article><AppIcon kind="experience" tone="experience" /><h3>Dice 3.0 Gold Medal</h3><p>A proud moment in the journey.</p></article><article><AppIcon kind="about" /><h3>7 Dean&apos;s List semesters</h3><p>Consecutive awards at KPM.</p></article></div></section>
      <section id="about" className="os-section os-about-section"><div className="os-about-title"><AppIcon kind="about" /><h2>The person<br />behind the projects.</h2></div><div className="os-about-window"><div className="os-window-bar"><span className="os-window-dots" aria-hidden="true"><i /><i /><i /></span><span>about-azwar.txt</span><Code2 size={14} aria-hidden="true" /></div><div className="os-about-body"><div><p className="os-eyebrow">A little background</p><p>I&apos;m a software engineering student who enjoys turning ideas into useful mobile and web applications. My experience spans Android development, enterprise IT, and now fintech product development at FIUU.</p><a className="os-text-link" href={resume} download>Read my resume <ArrowUpRight size={15} /></a></div><div><GraduationCap size={22} aria-hidden="true" /><h3>Universiti Kebangsaan Malaysia</h3><p>Software Engineering (Information System)<br />Expected March 2027 · CGPA 3.88</p><div className="os-about-skills"><span>Kotlin & Jetpack Compose</span><span>React & Next.js</span><span>Playwright & UAT</span></div></div></div></div></section>
      <section id="contact" className="os-section os-contact-section"><div><AppIcon kind="contact" /><h2>Have something<br />in mind?</h2><p>I&apos;d love to hear about it.</p><a className="os-text-link" href="mailto:azwarfadzlin1@gmail.com">azwarfadzlin1@gmail.com <ArrowUpRight size={16} /></a><br /><a className="os-text-link" href="https://wa.me/60142913880" target="_blank" rel="noopener noreferrer">WhatsApp · +60 14-2913-880 <ArrowUpRight size={16} /></a></div><div className="os-contact-window"><div className="os-window-bar"><Mail size={14} aria-hidden="true" /><span>New message</span><span>To: Azwar</span></div><div className="os-contact-form"><ContactForm /></div></div></section>
    </main>
    <footer className="os-footer"><a href="#home" className="os-monogram">af.</a><span>Azwar Fadzlin © 2026</span><Link href="/classic">View classic site <ArrowUpRight size={13} /></Link></footer>
    <DesktopDock />
    <ScrollChoreography />
  </div>;
}
