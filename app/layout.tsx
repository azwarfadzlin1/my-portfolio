import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Azwar Fadzlin | Software Engineer",
  description: "Azwar Fadzlin's software engineering portfolio: Product Development Intern at FIUU, with experience in fintech testing, automation, Android and web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} antialiased bg-zinc-950 text-zinc-50 min-h-screen selection:bg-blue-500/30 font-sans`}
      >
        <div aria-hidden="true" className="fixed inset-0 z-[-1] bg-black">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        <noscript><style>{`[data-reveal] { opacity: 1 !important; transform: none !important; }`}</style></noscript>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
