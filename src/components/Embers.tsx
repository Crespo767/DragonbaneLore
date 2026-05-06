import { useEffect, useState } from "react";

export function Embers({ count = 25 }: { count?: number }) {
  const [items] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 14,
      size: 1 + Math.random() * 3,
    }))
  );
  useEffect(() => {}, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {items.map((e) => (
        <span
          key={e.id}
          className="ember"
          style={{
            left: `${e.left}%`,
            animationDelay: `${e.delay}s`,
            animationDuration: `${e.duration}s`,
            width: e.size,
            height: e.size,
          }}
        />
      ))}
    </div>
  );
}
