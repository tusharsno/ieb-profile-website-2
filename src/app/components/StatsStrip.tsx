// import { Users, GraduationCap, BookOpen, Globe } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// const stats: { icon: LucideIcon; value: string; label: string; accentBlue: boolean }[] = [
//   { icon: Users,          value: "35+",        label: "Years of Professional Experience",   accentBlue: true  },
//   { icon: GraduationCap, value: "CUET 1981",   label: "B.Sc. Eng. (Electrical)",            accentBlue: false },
//   { icon: BookOpen,       value: "IEB Council", label: "Multiple Terms as Council Member",  accentBlue: true  },
//   { icon: Globe,          value: "BPDB",        label: "Bangladesh Power Development Board", accentBlue: false },
// ];

// export default function StatsStrip() {
//   return (
//     <div
//       className="w-full"
//       style={{
//         background: "#f0f6fb",
//         borderTop: "1px solid #d0e4f0",
//         borderBottom: "1px solid #d0e4f0",
//       }}
//     >
//       <div className="grid grid-cols-2 lg:grid-cols-4">
//         {stats.map(({ icon: Icon, value, label, accentBlue }, i) => {
//           const accent = accentBlue ? "#07518a" : "#c97d10";
//           const iconColor = accentBlue ? "#07518a" : "#c97d10";
//           const valueColor = accentBlue ? "#07518a" : "#c97d10";

//           return (
//             <div
//               key={label}
//               className="group relative flex items-center gap-[12px] px-4 py-5 sm:px-8 lg:px-10 lg:py-6"
//             >
//               {/* dividers */}
//               {i % 2 === 0 && (
//                 <span className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#c8dff0]" style={{ height: "55%" }} />
//               )}
//               {i < 2 && (
//                 <span className="lg:hidden absolute bottom-0 left-[8%] right-[8%] h-px bg-[#c8dff0]" />
//               )}
//               {i < 3 && (
//                 <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#c8dff0]" style={{ height: "55%" }} />
//               )}

//               {/* Icon container */}
//               <div
//                 className="shrink-0 flex items-center justify-center rounded-[8px] transition-transform duration-200 group-hover:scale-105"
//                 style={{
//                   width: 46,
//                   height: 46,
//                   background: `linear-gradient(135deg, ${accent}18 0%, ${accent}30 100%)`,
//                   border: `1.5px solid ${accent}44`,
//                   boxShadow: `0 2px 8px ${accent}22`,
//                 }}
//               >
//                 <Icon size={24} strokeWidth={2.1} color={iconColor} />
//               </div>

//               {/* Text */}
//               <div className="flex flex-col min-w-0">
//                 <span
//                   className="text-[17px] font-extrabold leading-tight tracking-[-0.01em]"
//                   style={{ color: valueColor, display: "inline-block" }}
//                 >
//                   {value}
//                 </span>
//                 <span className="mt-[2px] text-[13px] font-medium leading-snug text-[#4a6a85]">
//                   {label}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


"use client";

import { Users, GraduationCap, BookOpen, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  accentBlue: boolean;
};

const stats: Stat[] = [
  {
    icon: Users,
    value: "35+",
    label: "Years of Professional Experience",
    accentBlue: true,
  },
  {
    icon: GraduationCap,
    value: "CUET 1981",
    label: "B.Sc. Eng. (Electrical)",
    accentBlue: false,
  },
  {
    icon: BookOpen,
    value: "IEB Council",
    label: "Multiple Terms as Council Member",
    accentBlue: true,
  },
  {
    icon: Globe,
    value: "BPDB",
    label: "Bangladesh Power Development Board",
    accentBlue: false,
  },
];

export default function StatsStrip() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Professional highlights"
      className="stats-shell relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6fc 0%, #f6fafd 45%, #eef6fc 100%)",
      }}
    >
      {/* Top border with gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #4fa3d8 50%, #bfd9ec 80%, transparent 100%)",
        }}
      />

      {/* Bottom border with gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #e8a020 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.7,
        }}
      />

      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(79,163,216,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Grid */}
      <div className="relative grid grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label, accentBlue }, i) => {
          const accent = accentBlue ? "#07518a" : "#c97d10";
          const accentLight = accentBlue ? "#4fa3d8" : "#e8a020";

          return (
            <div
              key={label}
              className="stat-cell group relative flex items-center gap-[10px] px-3 py-4 sm:gap-[12px] sm:px-6 sm:py-5 md:px-8 lg:px-10 lg:py-6"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted
                  ? "translate3d(0,0,0)"
                  : "translate3d(0,10px,0)",
                transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms, transform 800ms cubic-bezier(0.22,1,0.36,1) ${i * 90}ms`,
              }}
            >
              {/* Dividers - mobile (2-col grid) */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-px lg:hidden"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, transparent, #c8dff0 30%, #c8dff0 70%, transparent)",
                  opacity: i % 2 === 0 ? 1 : 0,
                }}
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[6%] right-[6%] h-px lg:hidden"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #c8dff0 30%, #c8dff0 70%, transparent)",
                  opacity: i < 2 ? 1 : 0,
                }}
              />
              {/* Dividers - desktop (1-col row) */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-1/2 hidden -translate-y-1/2 w-px lg:block"
                style={{
                  height: "55%",
                  background:
                    "linear-gradient(180deg, transparent, #c8dff0 30%, #c8dff0 70%, transparent)",
                  opacity: i < 3 ? 1 : 0,
                }}
              />

              {/* Icon container */}
              <div
                className="stat-icon relative flex shrink-0 items-center justify-center rounded-[10px] transition-all duration-300"
                style={{
                  width: 46,
                  height: 46,
                  background: `linear-gradient(135deg, ${accent}14 0%, ${accent}2e 100%)`,
                  border: `1.5px solid ${accent}40`,
                  boxShadow: `0 2px 8px ${accent}1a, inset 0 1px 0 rgba(255,255,255,0.6)`,
                }}
              >
                <Icon
                  size={22}
                  strokeWidth={2.1}
                  style={{ color: accent }}
                  className="transition-all duration-300 sm:h-[24px] sm:w-[24px]"
                />
                {/* Hover ring */}
                <span
                  aria-hidden="true"
                  className="stat-ring pointer-events-none absolute inset-0 rounded-[10px]"
                  style={{
                    border: `1.5px solid ${accentLight}`,
                    opacity: 0,
                  }}
                />
              </div>

              {/* Text */}
              <div className="flex min-w-0 flex-col">
                <span
                  className="stat-value text-[15px] font-extrabold leading-tight tracking-[-0.01em] transition-colors duration-300 sm:text-[16px] md:text-[17px]"
                  style={{
                    color: accent,
                    display: "inline-block",
                  }}
                >
                  {value}
                </span>
                <span className="mt-[2px] text-[11.5px] font-medium leading-snug text-[#4a6a85] sm:text-[12.5px] md:text-[13px]">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Local styles */}
      <style jsx>{`
        /* Hover effects — only on devices with hover */
        @media (hover: hover) and (pointer: fine) {
          .stat-cell:hover .stat-icon {
            transform: translateY(-2px) scale(1.05);
            box-shadow:
              0 6px 16px rgba(7, 81, 138, 0.18),
              inset 0 1px 0 rgba(255, 255, 255, 0.8);
          }
          .stat-cell:hover .stat-ring {
            opacity: 0.35;
            animation: ringPulse 1.6s ease-in-out infinite;
          }
          .stat-cell:hover .stat-value {
            filter: brightness(1.15);
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.35;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.15;
          }
        }

        /* Touch devices: press feedback */
        @media (hover: none) {
          .stat-cell:active .stat-icon {
            transform: scale(0.96);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stat-cell {
            opacity: 1 !important;
            transform: none !important;
          }
          .stat-icon,
          .stat-ring {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}