"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Code2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  return <>
          <motion.div className="flex flex-wrap gap-3 mb-12" initial={false} animate="visible" variants={fadeInUp}>
            {['All', 'Kotlin', 'Web', 'Database'].map(filter => (
              <button 
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                aria-controls="project-list"
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'bg-white/5 text-zinc-400 hover:bg-white/10 border border-white/10'}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div id="project-list" className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* UniMove Project */}
            {(activeFilter === "All" || activeFilter === "Kotlin") && (
            <motion.div className="bg-[#0A0A0A] rounded-3xl overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl" initial={false} animate="visible" variants={fadeInUp}>
              <div className="aspect-4/3 bg-zinc-900 relative overflow-hidden flex items-center justify-center p-2">
                <div className="w-full h-full bg-zinc-800/50 rounded-xl border border-zinc-700/50 group-hover:bg-zinc-800 transition-colors relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <video
                    src="https://qclpiuhdwqbptuswqouv.supabase.co/storage/v1/object/public/unimove_videos/unimove-videos_GqQc8gWa.mp4"
                    className="relative z-10 h-full w-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    controls
                    aria-label="UniMove app demonstration"
                    poster="/unimove_logo.png"
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading">UniMove</h3>
                  <a aria-label="View UniMove source on GitHub" href="https://github.com/azwarfadzlin1/UniMove.git" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-25">
                  Android fitness tracking app that monitors distance, pace, and routes with Google Maps. Built leaderboards, challenges, and a community feed, with Firebase Auth and Firestore for real-time data sync and Wear OS support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Kotlin</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Jetpack Compose</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Firebase</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Google Maps SDK</span>
                </div>
              </div>
            </motion.div>
            )}

            {/* Personal Portfolio Website */}
            {(activeFilter === "All" || activeFilter === "Web") && (
            <motion.div className="bg-[#0A0A0A] rounded-3xl overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl" initial={false} animate="visible" variants={fadeInUp}>
              <div className="aspect-4/3 bg-zinc-900 relative overflow-hidden">
                <Image 
                  src="/image_portfolio_website.png" 
                  alt="Personal Portfolio Website" 
                  fill 
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 50vw, 592px"
                  className="object-contain group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading">Personal Portfolio Website</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-25">
                  Modern responsive portfolio built with Next.js, React, and TypeScript. Uses Framer Motion for animations, Tailwind CSS for styling, Supabase-hosted media, and an external visitor counter API.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Next.js</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">React</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">TypeScript</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Tailwind CSS</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Supabase</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Vercel</span>
                </div>
              </div>
            </motion.div>
            )}

            {/* Product Management System */}
            {(activeFilter === "All" || activeFilter === "Web" || activeFilter === "Database") && (
            <motion.div className="bg-[#0A0A0A] rounded-3xl overflow-hidden group border border-zinc-800 hover:border-zinc-700 transition-all shadow-xl" initial={false} animate="visible" variants={fadeInUp}>
              <div className="aspect-4/3 bg-zinc-900 relative overflow-hidden">
                <Image 
                  src="/web_product.png" 
                  alt="Product Management System" 
                  fill 
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 50vw, 592px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading">Web-Based Product Management System</h3>
                  <a aria-label="Open product management system demo" href="http://lrgs.ftsm.ukm.my/users/a209041/myPT3/index.php" className="text-zinc-400 hover:text-white transition-colors">
                    <Code2 className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 min-h-25">
                  Product and inventory management project using structured records and query operations for tracking and data management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Database</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Database Design</span>
                  <span className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">Product Management</span>
                </div>
              </div>
            </motion.div>
            )}
          </div>
  </>;
}
