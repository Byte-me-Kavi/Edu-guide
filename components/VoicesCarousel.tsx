"use client";

import { useState, useEffect } from "react";

export default function VoicesCarousel({ voices }: { voices: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-swap every 5 seconds if we have more than 3 reviews
  useEffect(() => {
    if (voices.length <= 3) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % voices.length);
        setIsAnimating(false);
      }, 300); // 300ms fade duration
    }, 3000);

    return () => clearInterval(timer);
  }, [voices.length]);

  // We always show exactly 3 cards. If we're rotating, we pick the next 3.
  const displayVoices = [];
  for (let i = 0; i < 3; i++) {
    displayVoices.push(voices[(currentIndex + i) % voices.length] || voices[i]);
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
      {displayVoices.map((v, i) => (
        <figure
          key={`${currentIndex}-${i}`}
          className={`relative bg-cream-paper border border-navy/15 rounded-3xl p-6 lg:p-7 shadow-[0_20px_50px_-25px_rgba(18,40,66,0.15)] transition-opacity duration-300 ${
            isAnimating ? "opacity-0" : "opacity-100"
          } ${i === 1 ? "md:translate-y-6" : ""} ${
            i === 2 ? "md:translate-y-2" : ""
          }`}
        >
          <span
            aria-hidden
            className="absolute -top-4 left-6 font-display text-7xl text-gold leading-none select-none"
          >
            &ldquo;
          </span>
          <blockquote
            className="font-display text-base lg:text-lg text-navy leading-snug pt-2 tracking-tight"
            dangerouslySetInnerHTML={{ __html: v.quote }}
          />
          <figcaption className="mt-4 pt-4 border-t border-navy/15 flex items-baseline justify-between gap-3">
            <div>
              <div className="font-display italic text-navy text-[14px]">
                — {v.name}
              </div>
              <div className="text-[11px] text-navy/55 mt-0.5">{v.role}</div>
            </div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-gold font-medium">
              {v.school}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
