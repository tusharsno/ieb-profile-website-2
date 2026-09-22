// import ComingSoon from "../components/ComingSoon";
// export default function MediaPage() {
//   return <ComingSoon title="Media" />;
// }

"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ImageIcon,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

// ✅ Add as many photos as you want here (24 in example)
type GalleryPhoto = {
  id: number;
  src?: string;
  alt: string;
  caption?: string;
  category?: string;
};

const allPhotos: GalleryPhoto[] = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  alt: `Campaign photo ${i + 1}`,
  caption: "",
  category: i < 8 ? "Events" : i < 16 ? "Meetings" : "Field Work",
}));

const categories = ["All", "Events", "Meetings", "Field Work"];

export default function MediaPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  const filtered =
    activeCategory === "All"
      ? allPhotos
      : allPhotos.filter((p) => p.category === activeCategory);

  return (
    <main
      aria-labelledby="media-heading"
      className="relative isolate w-full overflow-hidden pt-[67px]"
      style={{
        background:
          "linear-gradient(180deg, #edf6fb 0%, #f7fbfe 45%, #eaf4fc 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Decorative */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[18%] h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(79,163,216,0.16) 0%, rgba(79,163,216,0.05) 42%, transparent 72%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(10,80,140,0.9) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(10,80,140,0.9) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(ellipse 65% 60% at 50% 30%, black 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 60% at 50% 30%, black 0%, transparent 78%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-10">
        {/* Back link */}
        <Link
          href="/"
          className="group mb-6 inline-flex items-center gap-2 rounded-md px-3 py-2 text-[13px] font-semibold text-[#07518a] transition-all duration-200 hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad]"
        >
          <ArrowLeft
            size={15}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:-translate-x-[2px]"
          />
          Back to Home
        </Link>

        {/* Header */}
        <div
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translate3d(0,0,0)"
              : "translate3d(0,12px,0)",
            transition:
              "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[12px]"
                style={{
                  background:
                    "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 8px 20px rgba(7,81,138,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <ImageIcon
                  size={22}
                  strokeWidth={2.1}
                  color="#fff"
                  aria-hidden="true"
                />
              </div>
              <h1
                id="media-heading"
                className="text-[26px] font-black leading-tight tracking-[-0.02em] text-[#0b3f6c] sm:text-[32px] lg:text-[36px]"
              >
                Photo Gallery
              </h1>
            </div>
            <p className="max-w-[560px] text-[14px] leading-[1.6] text-[#4a6580] sm:text-[15px]">
              Moments from the campaign trail — events, meetings, and community
              engagement.
            </p>
          </div>

          {/* Count badge */}
          <div
            className="flex items-center gap-2 self-start rounded-full px-4 py-2 sm:self-auto"
            style={{
              background: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(232,160,32,0.4)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow:
                "0 6px 20px rgba(201,125,16,0.15), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <Sparkles
              size={13}
              strokeWidth={2.4}
              className="shrink-0 text-[#c97d10]"
            />
            <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#a85f08] sm:text-[12.5px]">
              {allPhotos.length} Photos
            </span>
          </div>
        </div>

        {/* Category filter */}
        <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8">
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cat-btn rounded-full px-4 py-2 text-[12.5px] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] sm:text-[13px] ${
                  active
                    ? "text-white"
                    : "text-[#07518a] hover:bg-white/95"
                }`}
                style={
                  active
                    ? {
                        background:
                          "linear-gradient(135deg, #064d83 0%, #0a6aad 58%, #07518a 100%)",
                        boxShadow:
                          "0 8px 20px rgba(7,81,138,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                      }
                    : {
                        background: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(191,217,236,0.9)",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {filtered.map((photo, idx) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightbox(photo.id)}
              aria-label={`Open photo ${photo.id}`}
              className="gallery-tile group relative aspect-[4/3] overflow-hidden rounded-[10px] border border-white/85 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2"
              style={{
                background:
                  "linear-gradient(145deg, #eef5fb 0%, #ddeef8 100%)",
                boxShadow:
                  "0 8px 22px rgba(7,81,138,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,12px,0)",
                transition: `opacity 600ms cubic-bezier(0.22,1,0.36,1) ${
                  idx * 30
                }ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${
                  idx * 30
                }ms, border-color 300ms ease, box-shadow 300ms ease`,
              }}
            >
              {/* Placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <ImageIcon
                  size={24}
                  strokeWidth={1.8}
                  className="text-[#07518a]/30 transition-all duration-300 group-hover:scale-110 group-hover:text-[#07518a]/60"
                  aria-hidden="true"
                />
              </div>

              {/* Number badge */}
              <span
                className="absolute left-3 top-3 flex h-[22px] min-w-[22px] items-center justify-center rounded-full px-[6px] text-[10px] font-black text-white"
                style={{
                  background: "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 3px 8px rgba(7,81,138,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                {String(photo.id).padStart(2, "0")}
              </span>

              {/* Category label */}
              {photo.category && (
                <span
                  className="absolute right-3 top-3 rounded-full px-2 py-[3px] text-[9.5px] font-bold uppercase tracking-[0.08em] text-[#07518a]"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    border: "1px solid rgba(7,81,138,0.12)",
                  }}
                >
                  {photo.category}
                </span>
              )}

              {/* Gold hover border */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-300"
                style={{
                  boxShadow:
                    "inset 0 0 0 2px rgba(232,160,32,0.75), inset 0 0 22px rgba(232,160,32,0.12)",
                }}
              />

              {/* Hover hint */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center bg-gradient-to-t from-[rgba(7,81,138,0.92)] to-transparent px-2 pb-[10px] pt-[24px] text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Click to View
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(4,20,38,0.92)] p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a020] sm:right-6 sm:top-6"
          >
            <X size={22} strokeWidth={2.4} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[85vh] max-w-[1100px] flex-col items-center gap-4"
          >
            <div
              className="relative flex aspect-[4/3] w-full min-w-[280px] items-center justify-center overflow-hidden rounded-[14px] border border-white/15 sm:min-w-[560px]"
              style={{
                background:
                  "linear-gradient(145deg, #0a508c 0%, #062d52 100%)",
              }}
            >
              <ImageIcon
                size={64}
                strokeWidth={1.5}
                className="text-white/30"
                aria-hidden="true"
              />
              <span
                className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                Photo {String(lightbox).padStart(2, "0")} of {allPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          .gallery-tile:hover {
            transform: translateY(-3px);
            border-color: rgba(232, 160, 32, 0.65);
            box-shadow:
              0 14px 32px rgba(7, 81, 138, 0.16),
              0 0 0 1px rgba(232, 160, 32, 0.25);
          }
          .gallery-tile:hover > span:last-of-type {
            opacity: 1;
          }
          .cat-btn:hover {
            transform: translateY(-1px);
          }
        }

        @media (hover: none) {
          .gallery-tile:active {
            transform: scale(0.97);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-tile,
          .cat-btn {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}