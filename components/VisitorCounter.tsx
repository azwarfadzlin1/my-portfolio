"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const visited = localStorage.getItem("visited");

        if (!visited) {
          const response = await fetch(
            process.env.NEXT_PUBLIC_VISITOR_API!
          );

          const data = await response.json();

          setCount(data.count);
          localStorage.setItem("visited", "true");
        }
      } catch (error) {
        console.error("Failed to fetch visitor count", error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="glass-chip">
      👁 {count ?? "..."} visitors
    </div>
  );
}
