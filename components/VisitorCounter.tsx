"use client";

import { useEffect, useState } from "react";
import { Users } from "lucide-react";

// Share the request across mounts, including React's development effect replay.
let countRequest: Promise<number> | undefined;

function getVisitorCount() {
  if (!countRequest) {
    countRequest = (async () => {
      const endpoint = process.env.NEXT_PUBLIC_VISITOR_API;
      if (!endpoint) throw new Error("Visitor API is not configured");
      const response = await fetch(endpoint, { signal: AbortSignal.timeout(10000) });
      if (!response.ok) throw new Error("Visitor API request failed");
      const data: unknown = await response.json();
      if (!data || typeof data !== "object" || !("count" in data) ||
          typeof data.count !== "number" || !Number.isSafeInteger(data.count) || data.count < 0) {
        throw new Error("Invalid visitor count");
      }
      return data.count;
    })().catch((error) => {
      countRequest = undefined;
      throw error;
    });
  }
  return countRequest;
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    getVisitorCount().then(
      (value) => { if (active) setCount(value); },
      () => { if (active) setFailed(true); },
    );
    return () => { active = false; };
  }, []);

  return (
    <div className="relative group cursor-default">
      {/* Subtle animated glowing backdrop */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/50 to-indigo-500/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
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
            {failed ? "Unavailable" : count ?? "Loading…"}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 ml-0.5">
            Visitors
          </span>
        </div>
      </div>
    </div>
  );

  
}


