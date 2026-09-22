// import { ImageIcon } from "lucide-react";

// const placeholderItems = Array.from({ length: 6 }, (_, i) => i + 1);

// export default function PhotoGallery() {
//   return (
//     <section className="w-full bg-white py-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-1 h-7 bg-[#003d7a] rounded" />
//           <h2 className="text-xl font-bold text-[#003d7a]">Photo Gallery</h2>
//         </div>

//         <div className="grid grid-cols-3 gap-4">
//           {placeholderItems.map((i) => (
//             <div
//               key={i}
//               className="aspect-[4/3] bg-[#e8f0f7] rounded-lg flex flex-col items-center justify-center gap-2 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
//             >
//               <ImageIcon size={28} className="text-[#003d7a]/30" />
//               <p className="text-[10px] text-gray-400">Gallery image {i}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { ArrowUpRight, ImageIcon, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type GalleryItem = {
  id: number;
  src?: string;
  alt: string;
  caption?: string;
};

// Placeholder items — replace `src` with real images later
const galleryItems: GalleryItem[] = [
  { id: 1, alt: "Campaign moment 1" },
  { id: 2, alt: "Campaign moment 2" },
  { id: 3, alt: "Campaign moment 3" },
  { id: 4, alt: "Campaign moment 4" },
  { id: 5, alt: "Campaign moment 5" },
];

export default function PhotoGallery() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [featured, ...rest] = galleryItems;

  return (
    <section
      ref={ref}
      aria-labelledby="gallery-heading"
      className="gallery-shell relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,14px,0)",
        transition:
          "opacity 800ms cubic-bezier(0.22,1,0.36,1) 160ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 160ms",
        boxShadow:
          "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        className="h-[3px] w-full shrink-0"
        style={{
          background:
            "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
        }}
      />

      {/* ================= Header ================= */}
      <div className="flex shrink-0 items-center justify-between gap-3 px-[14px] pb-[12px] pt-[13px] sm:px-[15px]">
        <div className="flex min-w-0 items-center gap-[10px] sm:gap-[12px]">
          <div
            className="gallery-icon flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #07518a, #0d6fad)",
              boxShadow:
                "0 4px 12px rgba(7,81,138,0.26), inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            <ImageIcon size={16} strokeWidth={2.1} color="#fff" aria-hidden="true" />
          </div>
          <div className="flex min-w-0 flex-col">
            <h2
              id="gallery-heading"
              className="truncate text-[14.5px] font-extrabold leading-tight tracking-[-0.005em] text-[#0b3f6c] sm:text-[15px]"
            >
              Photo Gallery
            </h2>
            <span className="mt-[2px] flex items-center gap-[5px] text-[10.5px] font-semibold uppercase tracking-[0.1em] text-[#7ab8dc]">
              <Sparkles size={9} strokeWidth={2.4} className="shrink-0 text-[#e8a020]" />
              {galleryItems.length} Moments
            </span>
          </div>
        </div>

        {/* View All button */}
        <a
          href="/gallery"
          className="view-all group inline-flex shrink-0 items-center gap-[4px] rounded-md px-[8px] py-[5px] text-[11.5px] font-bold text-[#07518a] transition-all duration-200 hover:bg-[#eef6fc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] sm:text-[12px]"
        >
          <span className="whitespace-nowrap">View All</span>
          <ArrowUpRight
            size={12}
            strokeWidth={2.5}
            className="shrink-0 transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]"
          />
        </a>
      </div>

      {/* ================= Gallery grid ================= */}
      <div className="flex-1 px-[14px] pb-[14px] sm:px-[15px]">
        <div className="grid h-full grid-cols-2 gap-[8px] sm:gap-[9px]">
          {/* Featured (large) */}
          <button
            type="button"
            aria-label={featured.alt}
            className="gallery-tile group relative col-span-1 row-span-2 aspect-[3/4] overflow-hidden rounded-[8px] border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
            style={{
              background:
                "linear-gradient(145deg, #eef5fb 0%, #ddeef8 100%)",
              borderColor: "rgba(196,221,240,0.9)",
            }}
          >
            {/* Placeholder icon */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[8px] px-3 text-center">
              <div
                className="gallery-float flex h-[38px] w-[38px] items-center justify-center rounded-full"
                style={{
                  background:
                    "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 6px 18px rgba(7,81,138,0.28), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <ImageIcon
                  size={17}
                  strokeWidth={2.1}
                  className="text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#07518a]">
                Featured
              </p>
            </div>

            {/* Gold hover border */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-[8px] opacity-0 transition-opacity duration-300"
              style={{
                boxShadow:
                  "inset 0 0 0 2px rgba(232,160,32,0.75), inset 0 0 24px rgba(232,160,32,0.15)",
              }}
            />
          </button>

          {/* 4 small thumbnails */}
          {rest.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.alt}
              className="gallery-tile group relative aspect-[4/3] overflow-hidden rounded-[8px] border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
              style={{
                background:
                  "linear-gradient(145deg, #eef5fb 0%, #ddeef8 100%)",
                borderColor: "rgba(196,221,240,0.9)",
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,8px,0)",
                transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${220 + i * 60}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${220 + i * 60}ms, border-color 300ms ease, box-shadow 300ms ease`,
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon
                  size={20}
                  strokeWidth={2}
                  className="text-[#07518a]/35 transition-all duration-300 group-hover:text-[#07518a]/60"
                  aria-hidden="true"
                />
              </div>

              {/* Number badge */}
              <span
                className="absolute right-[6px] top-[6px] flex h-[16px] min-w-[16px] items-center justify-center rounded-full px-[4px] text-[9px] font-black text-white"
                style={{
                  background:
                    "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 2px 6px rgba(7,81,138,0.28), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {String(item.id).padStart(2, "0")}
              </span>

              {/* Gold hover border */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[8px] opacity-0 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "inset 0 0 0 2px rgba(232,160,32,0.75), inset 0 0 20px rgba(232,160,32,0.12)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ================= Local styles ================= */}
      <style jsx>{`
        .gallery-float {
          animation: galleryFloat 4s ease-in-out infinite;
        }
        @keyframes galleryFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .gallery-tile:hover {
            transform: translateY(-2px);
            border-color: rgba(232, 160, 32, 0.65);
            box-shadow:
              0 10px 26px rgba(7, 81, 138, 0.14),
              0 0 0 1px rgba(232, 160, 32, 0.25);
          }
          .gallery-tile:hover > span:last-child {
            opacity: 1;
          }
          .gallery-shell:hover .gallery-icon {
            transform: scale(1.06);
            box-shadow:
              0 6px 16px rgba(7, 81, 138, 0.32),
              0 0 0 3px rgba(232, 160, 32, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
          }
          .view-all:hover {
            color: #06477d;
          }
        }

        @media (hover: none) {
          .gallery-tile:active {
            transform: scale(0.97);
            transition: transform 120ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-float {
            animation: none !important;
          }
          .gallery-tile {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}