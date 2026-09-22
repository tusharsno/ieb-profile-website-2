// import {
//   Globe2,
//   Link2,
//   MessageSquare,
//   Settings,
//   ShieldCheck,
//   Target,
//   TrendingUp,
//   Users,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// type PriorityItem = {
//   icon: LucideIcon;
//   title: string;
// };

// const priorities: PriorityItem[] = [
//   { icon: Users,         title: "Engineers' Rights, Dignity & Welfare" },
//   { icon: TrendingUp,    title: "Professional Development & Knowledge Sharing" },
//   { icon: Link2,         title: "Collaboration: Senior & Young Engineers" },
//   { icon: ShieldCheck,   title: "Young Engineers' Empowerment" },
//   { icon: MessageSquare, title: "Inclusive Member Engagement" },
//   { icon: Globe2,        title: "National Development through Engineering" },
// ];

// export default function VisionPriorities() {
//   return (
//     <aside className="flex h-full flex-col gap-[12px]">

//       {/* VISION CARD */}
//       <div
//         className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         aria-labelledby="vision-heading"
//       >
//         <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
//         <div className="px-[14px] pb-[14px] pt-[11px]">
//           <div className="mb-[10px] flex items-center gap-[10px]">
//             <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
//             <h2 id="vision-heading" className="text-[16px] font-bold leading-none text-[#0b3f6c]">
//               My Vision for IEB
//             </h2>
//           </div>
//           <div className="flex items-start gap-[10px]">
//             <div
//               className="mt-[2px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px]"
//               style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 2px 8px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
//             >
//               <Target size={17} strokeWidth={2.1} color="#fff" aria-hidden="true" />
//             </div>
//             <p className="text-[14.5px] font-semibold italic leading-[1.45] text-[#173b5c]">
//               &ldquo;A stronger, inclusive, and forward-looking IEB focused on professional excellence, engineers' development, and national progress.&rdquo;
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* PRIORITIES CARD */}
//       <div
//         className="flex flex-1 flex-col overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         aria-labelledby="priorities-heading"
//       >
//         <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
//         <div className="flex flex-1 flex-col px-[14px] pb-[10px] pt-[11px]">
//           <div className="mb-[10px] flex shrink-0 items-center gap-[10px]">
//             <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
//             <h2 id="priorities-heading" className="text-[16px] font-bold leading-none text-[#0b3f6c]">
//               My Key Priorities
//             </h2>
//           </div>
//           <div className="flex flex-1 flex-col justify-between">
//             {priorities.map(({ icon: Icon, title }, index) => (
//               <div
//                 key={title}
//                 className="flex items-center gap-[11px] py-[8px]"
//                 style={{ borderBottom: index < priorities.length - 1 ? "1px solid #eaf0f6" : "none" }}
//               >
//                 <div
//                   className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[7px]"
//                   style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 2px 6px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
//                 >
//                   <Icon size={15} strokeWidth={2.1} color="#fff" aria-hidden="true" />
//                 </div>
//                 <p className="text-[14px] font-semibold leading-[1.28] text-[#0d3a5c]">
//                   {title}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//     </aside>
//   );
// }


"use client";

import {
  Globe2,
  Link2,
  MessageSquare,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type PriorityItem = {
  icon: LucideIcon;
  title: string;
};

const priorities: PriorityItem[] = [
  { icon: Users, title: "Engineers' Rights, Dignity & Welfare" },
  {
    icon: TrendingUp,
    title: "Professional Development & Knowledge Sharing",
  },
  { icon: Link2, title: "Collaboration: Senior & Young Engineers" },
  { icon: ShieldCheck, title: "Young Engineers' Empowerment" },
  { icon: MessageSquare, title: "Inclusive Member Engagement" },
  { icon: Globe2, title: "National Development through Engineering" },
];

export default function VisionPriorities() {
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

  return (
    <aside
      ref={ref}
      className="flex h-full flex-col gap-[12px] sm:gap-[14px]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
        transition:
          "opacity 800ms cubic-bezier(0.22,1,0.36,1) 200ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 200ms",
      }}
    >
      {/* ============ VISION CARD ============ */}
      <div
        className="vision-card relative overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
        aria-labelledby="vision-heading"
        style={{
          boxShadow:
            "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
        }}
      >
        {/* Top accent */}
        <div
          aria-hidden="true"
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
          }}
        />

        <div className="px-[14px] pb-[16px] pt-[13px] sm:px-[16px] sm:pb-[18px] sm:pt-[14px]">
          {/* Heading */}
          <div className="mb-[12px] flex items-center gap-[10px] sm:mb-[14px] sm:gap-[12px]">
            <div
              className="h-[3px] w-[24px] shrink-0 rounded-full sm:w-[28px]"
              style={{
                background: "linear-gradient(90deg, #07518a, #0a6aad)",
                boxShadow: "0 0 8px rgba(10,106,173,0.4)",
              }}
            />
            <h2
              id="vision-heading"
              className="text-[15px] font-extrabold leading-none tracking-[-0.005em] text-[#0b3f6c] sm:text-[16px]"
            >
              My Vision for IEB
            </h2>
          </div>

          {/* Quote block */}
          <div className="flex items-start gap-[11px] sm:gap-[12px]">
            <div
              className="vision-icon relative mt-[2px] flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[9px] transition-all duration-300 sm:h-[38px] sm:w-[38px]"
              style={{
                background:
                  "linear-gradient(145deg, #07518a 0%, #0d6fad 100%)",
                boxShadow:
                  "0 4px 12px rgba(7,81,138,0.26), inset 0 1px 0 rgba(255,255,255,0.18)",
              }}
            >
              <Target
                size={17}
                strokeWidth={2.1}
                color="#fff"
                aria-hidden="true"
              />
              {/* Gold dot */}
              <span
                aria-hidden="true"
                className="absolute -right-[2px] -top-[2px] h-[8px] w-[8px] rounded-full"
                style={{
                  background: "#e8a020",
                  boxShadow:
                    "0 0 0 2px rgba(255,255,255,0.95), 0 0 10px rgba(232,160,32,0.85)",
                }}
              />
            </div>

            <p className="text-[13.5px] font-semibold italic leading-[1.5] text-[#173b5c] sm:text-[14px] sm:leading-[1.55]">
              &ldquo;A stronger, inclusive, and forward-looking IEB focused on
              professional excellence, engineers&apos; development, and
              national progress.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* ============ PRIORITIES CARD ============ */}
      <div
        className="priorities-card flex flex-1 flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
        aria-labelledby="priorities-heading"
        style={{
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

        <div className="flex flex-1 flex-col px-[14px] pb-[12px] pt-[13px] sm:px-[16px] sm:pb-[14px] sm:pt-[14px]">
          {/* Heading */}
          <div className="mb-[12px] flex shrink-0 items-center gap-[10px] sm:mb-[14px] sm:gap-[12px]">
            <div
              className="h-[3px] w-[24px] shrink-0 rounded-full sm:w-[28px]"
              style={{
                background: "linear-gradient(90deg, #07518a, #0a6aad)",
                boxShadow: "0 0 8px rgba(10,106,173,0.4)",
              }}
            />
            <h2
              id="priorities-heading"
              className="text-[15px] font-extrabold leading-none tracking-[-0.005em] text-[#0b3f6c] sm:text-[16px]"
            >
              My Key Priorities
            </h2>
          </div>

          {/* Priority items */}
          <div className="flex flex-1 flex-col justify-between">
            {priorities.map(({ icon: Icon, title }, index) => (
              <div
                key={title}
                className="priority-row group relative flex items-center gap-[10px] rounded-md py-[9px] transition-colors duration-200 sm:gap-[11px] sm:py-[10px]"
                style={{
                  borderBottom:
                    index < priorities.length - 1
                      ? "1px solid rgba(234,240,246,0.9)"
                      : "none",
                }}
              >
                {/* Icon container */}
                <div
                  className="priority-icon flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] transition-all duration-300 sm:h-[36px] sm:w-[36px]"
                  style={{
                    background:
                      "linear-gradient(145deg, #07518a 0%, #0d6fad 100%)",
                    boxShadow:
                      "0 3px 10px rgba(7,81,138,0.24), inset 0 1px 0 rgba(255,255,255,0.18)",
                  }}
                >
                  <Icon
                    size={15}
                    strokeWidth={2.1}
                    color="#fff"
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <p className="flex-1 text-[13px] font-semibold leading-[1.35] text-[#0d3a5c] transition-colors duration-200 group-hover:text-[#07518a] sm:text-[13.5px]">
                  {title}
                </p>

                {/* Right arrow on hover */}
                <svg
                  aria-hidden="true"
                  width="12"
                  height="12"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="priority-arrow shrink-0 text-[#b0c8dc] transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-[#e8a020]"
                >
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============ Local styles ============ */}
      <style jsx>{`
        .vision-card:hover .vision-icon {
          transform: scale(1.05);
          box-shadow:
            0 6px 16px rgba(7, 81, 138, 0.3),
            0 0 0 3px rgba(232, 160, 32, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        .priority-row:hover {
          background: rgba(244, 250, 254, 0.7);
        }
        .priority-row:hover .priority-icon {
          transform: scale(1.06);
          box-shadow:
            0 6px 16px rgba(7, 81, 138, 0.3),
            0 0 0 3px rgba(232, 160, 32, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        @media (hover: none) {
          .priority-row:active {
            background: rgba(244, 250, 254, 0.6);
          }
          .priority-row:active .priority-icon {
            transform: scale(0.96);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vision-icon,
          .priority-icon,
          .priority-arrow {
            transition: none !important;
          }
        }
      `}</style>
    </aside>
  );
}