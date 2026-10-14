import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
      <a href="#home" className="skip-link">Skip to content</a>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 px-4 sm:px-6">
        <a href="#home" aria-label="Azwar Fadzlin home" className="py-5 font-heading text-lg sm:text-2xl font-black tracking-tight text-white">
          AZWAR<span className="text-zinc-400">FADZLIN</span>
        </a>
        <nav aria-label="Main navigation" className="order-3 flex w-full justify-between gap-2 pb-2 text-xs font-medium text-zinc-300 md:order-none md:w-auto md:gap-8 md:pb-0 md:text-sm">
          {[["home", "Home"], ["projects", "Projects"], ["experience", "Experience"], ["contact", "Contact"]].map(([id, label]) => (
            <a key={id} href={`#${id}`} className="flex min-h-11 items-center hover:text-white">{label}</a>
          ))}
        </nav>
        <a href="/Azwar%20Fadzlin%20Resume.pdf" download="Azwar_Fadzlin_Resume.pdf" className="flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 text-xs sm:text-sm font-medium text-white hover:bg-white/10">
          <Download className="h-4 w-4" aria-hidden="true" /> Resume
        </a>
      </div>
    </header>
  );
}

