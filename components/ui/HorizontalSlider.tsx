"use client";

import { useRef } from "react";

export default function HorizontalSlider({
  children,
}: {
  children: React.ReactNode;
}) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.offsetWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      
      {/* LEFT GRADIENT + ARROW */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <button
        onClick={() => scroll("left")}
        className="pointer-events-auto absolute left-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/70 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition hover:border-[#ff3131]"
      >
        ◀
      </button>

      {/* RIGHT GRADIENT + ARROW */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
      <button
        onClick={() => scroll("right")}
        className="pointer-events-auto absolute right-4 top-1/2 -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-black/70 border border-white/20 text-white opacity-0 group-hover:opacity-100 transition hover:border-[#ff914d]"
      >
        ▶
      </button>
      
      {/* SLIDER ROW */}
      <div
  ref={sliderRef}
  className="
    flex gap-6 px-16
    overflow-x-auto
    scroll-smooth
    scrollbar-hide
  "
>
  {children}
</div>
    </div>
  );
}
