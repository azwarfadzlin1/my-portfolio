"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

useEffect(() => {
  const fetchCount = async () => {
    try {
      const visited = localStorage.getItem("visited");

      const response = await fetch(process.env.NEXT_PUBLIC_VISITOR_API!);
      const data = await response.json();

      setCount(data.count);

      if (!visited) {
        localStorage.setItem("visited", "true");
      }
    } catch (error) {
      console.error("Failed to fetch visitor count", error);
    }
  };

  fetchCount();
}, []);

  return (
    <div className="relative group cursor-default">
      {/* Subtle animated glowing backdrop */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-indigo-500/50 rounded-full blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Badge Content */}
      <div className="relative flex items-center gap-2.5 px-4 py-2 bg-[#09090b]/80 backdrop-blur-md border border-white/10 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:bg-[#09090b] group-hover:border-white/20">
        
        {/* Pulsing indicator */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        
        <div className="flex items-center gap-1.5">
          <Users className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-mono text-sm font-bold text-zinc-200 tracking-tight">
            {count ?? "..."}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 ml-0.5">
            Visitors
          </span>
        </div>
      </div>
    </div>
  );

  
}


