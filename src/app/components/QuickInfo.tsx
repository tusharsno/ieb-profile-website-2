// // import {
// //   Award,
// //   BookOpen,
// //   Briefcase,
// //   GraduationCap,
// //   Mail,
// //   MapPin,
// //   User,
// //   Users,
// // } from "lucide-react";
// // import type { LucideIcon } from "lucide-react";

// // type InfoItem = {
// //   icon: LucideIcon;
// //   label: string;
// //   value: string;
// // };

// // const infoItems: InfoItem[] = [
// //   {
// //     icon: User,
// //     label: "Name",
// //     value: "Engr. Mohammad Harun",
// //   },
// //   {
// //     icon: Award,
// //     label: "Position",
// //     value: "Vice Chairman Candidate",
// //   },
// //   {
// //     icon: Award,
// //     label: "Fellow No.",
// //     value: "F/06550",
// //   },
// //   {
// //     icon: Users,
// //     label: "IEB Panel",
// //     value: "Chittagong Centre",
// //   },
// //   {
// //     icon: MapPin,
// //     label: "IEB Centre",
// //     value: "Chittagong",
// //   },
// //   {
// //     icon: Briefcase,
// //     label: "Profession",
// //     value: "Electrical Engineer",
// //   },
// //   {
// //     icon: GraduationCap,
// //     label: "Education",
// //     value: "B.Sc. Eng. (Electrical), CUET, 1981",
// //   },
// //   {
// //     icon: Briefcase,
// //     label: "Current Role",
// //     value: "Ex-Superintending Engineer, BPDB",
// //   },
// //   {
// //     icon: Award,
// //     label: "Experience",
// //     value: "35+ Years",
// //   },
// //   {
// //     icon: BookOpen,
// //     label: "IEB Experience",
// //     value: "Council Member (multiple terms); Joint-Convener, Training & PD (2018–19)",
// //   },
// // ];

// // export default function QuickInfo() {
// //   return (
// //     <aside
// //       className="
// //         flex flex-col
// //         overflow-hidden
// //         rounded-[5px]
// //         border border-[#d9e4ed]
// //         bg-white
// //         shadow-[0_2px_6px_rgba(15,58,91,0.08)]
// //       "
// //       aria-labelledby="quick-information-heading"
// //     >
// //       {/* Header */}
// //       <div
// //         className="
// //           flex h-[42px]
// //           items-center
// //           bg-[#07518a]
// //           px-[14px]
// //         "
// //       >
// //         <h2
// //           id="quick-information-heading"
// //           className="
// //             text-[16px]
// //             font-bold
// //             leading-none
// //             text-white
// //           "
// //         >
// //           Quick Information
// //         </h2>
// //       </div>

// //       {/* Information rows */}
// //       <div>
// //         {infoItems.map(({ icon: Icon, label, value }, index) => (
// //           <div
// //             key={label}
// //             className={`
// //               grid
// //               grid-cols-[18px_minmax(80px,100px)_minmax(0,1fr)]
// //               items-start
// //               gap-x-[6px]
// //               px-[12px]
// //               py-[7px]
// //               ${index < infoItems.length - 1 ? "border-b border-[#e4ebf1]" : ""}
// //             `}
// //           >
// //             <Icon
// //               size={14}
// //               strokeWidth={2.2}
// //               aria-hidden="true"
// //               className="
// //                 mt-[1px]
// //                 shrink-0
// //                 text-[#07518a]
// //               "
// //             />

// //             <span
// //               className="
// //                 pt-[1px]
// //                 text-[15px]
// //                 font-semibold
// //                 leading-[1.25]
// //                 text-[#21384d]
// //               "
// //             >
// //               {label}
// //             </span>

// //             <span
// //               className="
// //                 min-w-0
// //                 text-[14px]
// //                 font-medium
// //                 leading-[1.3]
// //                 text-[#263b4d]
// //               "
// //             >
// //               {value}
// //             </span>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Contact button */}
// //       <div className="px-[12px] pb-[10px] pt-[8px] border-t border-[#e4ebf1]">
// //         <a
// //           href="/contact"
// //           className="
// //             flex h-[29px]
// //             w-full
// //             items-center
// //             justify-center
// //             gap-[6px]
// //             rounded-[3px]
// //             bg-[#07518a]
// //             text-[15.5px]
// //             font-semibold
// //             text-white
// //             transition-colors
// //             hover:bg-[#043f70]
// //           "
// //         >
// //           <Mail
// //             size={12}
// //             strokeWidth={2.2}
// //             aria-hidden="true"
// //           />

// //           <span>Get in Touch</span>
// //         </a>
// //       </div>
// //     </aside>
// //   );
// // }


// "use client";

// import {
//   Award,
//   BookOpen,
//   Briefcase,
//   GraduationCap,
//   Mail,
//   MapPin,
//   User,
//   Users,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// type InfoItem = {
//   icon: LucideIcon;
//   label: string;
//   value: string;
// };

// const infoItems: InfoItem[] = [
//   { icon: User, label: "Name", value: "Engr. Mohammad Harun" },
//   { icon: Award, label: "Position", value: "Vice Chairman Candidate" },
//   { icon: Award, label: "Fellow No.", value: "F/06550" },
//   { icon: Users, label: "IEB Panel", value: "Chittagong Centre" },
//   { icon: MapPin, label: "IEB Centre", value: "Chittagong" },
//   { icon: Briefcase, label: "Profession", value: "Electrical Engineer" },
//   {
//     icon: GraduationCap,
//     label: "Education",
//     value: "B.Sc. Eng. (Electrical), CUET, 1981",
//   },
//   {
//     icon: Briefcase,
//     label: "Current Role",
//     value: "Ex-Superintending Engineer, BPDB",
//   },
//   { icon: Award, label: "Experience", value: "35+ Years" },
//   {
//     icon: BookOpen,
//     label: "IEB Experience",
//     value:
//       "Council Member (multiple terms); Joint-Convener, Training & PD (2018–19)",
//   },
// ];

// export default function QuickInfo() {
//   const [mounted, setMounted] = useState(false);
//   const ref = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
//     if (reduce.matches) {
//       setMounted(true);
//       return;
//     }

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setMounted(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 }
//     );
//     observer.observe(el);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <aside
//       ref={ref}
//       aria-labelledby="quick-information-heading"
//       className="quick-info-shell flex flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/85 backdrop-blur-[10px]"
//       style={{
//         opacity: mounted ? 1 : 0,
//         transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
//         transition:
//           "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
//         boxShadow:
//           "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
//       }}
//     >
//       {/* Header */}
//       <div
//         className="relative flex h-[44px] items-center overflow-hidden px-[16px] sm:h-[46px]"
//         style={{
//           background:
//             "linear-gradient(105deg, #064b81 0%, #0a6aad 58%, #07518a 100%)",
//         }}
//       >
//         <span
//           aria-hidden="true"
//           className="mr-[10px] h-[3px] w-[24px] shrink-0 rounded-full"
//           style={{
//             background: "linear-gradient(90deg, #e8a020, #f0b84c)",
//             boxShadow: "0 0 10px rgba(232,160,32,0.7)",
//           }}
//         />
//         <h2
//           id="quick-information-heading"
//           className="text-[14.5px] font-extrabold leading-none tracking-[0.01em] text-white sm:text-[15.5px]"
//         >
//           Quick Information
//         </h2>

//         {/* Subtle shine sweep */}
//         <span
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 -translate-x-full quick-info-shine"
//         />
//       </div>

//       {/* Information rows */}
//       <div className="flex-1">
//         {infoItems.map(({ icon: Icon, label, value }, index) => (
//           <div
//             key={label}
//             className="info-row grid grid-cols-[18px_minmax(78px,96px)_minmax(0,1fr)] items-start gap-x-[8px] border-[#e4ebf1] px-[13px] py-[8px] transition-colors sm:gap-x-[10px] sm:px-[14px] sm:py-[9px]"
//             style={{
//               borderBottom:
//                 index < infoItems.length - 1
//                   ? "1px solid rgba(228,235,241,0.9)"
//                   : "none",
//             }}
//           >
//             <Icon
//               size={14}
//               strokeWidth={2.3}
//               aria-hidden="true"
//               className="mt-[2px] shrink-0 text-[#07518a] transition-transform duration-200"
//             />

//             <span className="pt-[1px] text-[12.5px] font-bold uppercase tracking-[0.03em] leading-[1.25] text-[#5a7088] sm:text-[12px] sm:tracking-[0.04em]">
//               {label}
//             </span>

//             <span className="min-w-0 text-[13.5px] font-semibold leading-[1.35] text-[#1e3a52] sm:text-[13.5px]">
//               {value}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* Contact button */}
//       <div className="border-t border-[#e4ebf1] px-[13px] pb-[12px] pt-[10px] sm:px-[14px]">
//         <a
//           href="/contact"
//           className="group relative flex h-[36px] w-full items-center justify-center gap-[7px] overflow-hidden rounded-[6px] text-[13px] font-bold text-white transition duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2 active:translate-y-0 sm:text-[13.5px]"
//           style={{
//             background:
//               "linear-gradient(135deg, #064d83 0%, #0a6aad 58%, #07518a 100%)",
//             boxShadow:
//               "0 8px 20px rgba(7,81,138,0.30), inset 0 1px 0 rgba(255,255,255,0.20)",
//           }}
//         >
//           <span className="qi-btn-shine pointer-events-none absolute inset-0 -translate-x-full" />
//           <Mail size={13} strokeWidth={2.4} aria-hidden="true" className="relative shrink-0" />
//           <span className="relative">Get in Touch</span>
//         </a>
//       </div>

//       <style jsx>{`
//         .info-row:hover {
//           background: rgba(244, 250, 254, 0.7);
//         }
//         .info-row:hover :global(svg) {
//           transform: scale(1.08);
//         }

//         .quick-info-shine {
//           background: linear-gradient(
//             100deg,
//             transparent 35%,
//             rgba(255, 255, 255, 0.14) 50%,
//             transparent 65%
//           );
//           animation: qiShine 6s ease-in-out infinite;
//         }
//         @keyframes qiShine {
//           0%,
//           100% {
//             transform: translateX(-100%);
//           }
//           55%,
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         .qi-btn-shine {
//           background: linear-gradient(
//             100deg,
//             transparent 30%,
//             rgba(255, 255, 255, 0.45) 50%,
//             transparent 70%
//           );
//           transition: transform 900ms ease;
//         }

//         @media (hover: hover) and (pointer: fine) {
//           .group:hover .qi-btn-shine {
//             transform: translateX(100%);
//           }
//         }

//         @media (hover: none) {
//           a:active {
//             transform: scale(0.98);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .quick-info-shine {
//             animation: none !important;
//           }
//           .qi-btn-shine {
//             transition: none !important;
//           }
//         }
//       `}</style>
//     </aside>
//   );
// }


"use client";

import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Mail,
  MapPin,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type InfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const infoItems: InfoItem[] = [
  { icon: User, label: "Name", value: "Engr. Mohammad Harun" },
  { icon: Award, label: "Position", value: "Vice Chairman Candidate" },
  { icon: Award, label: "Fellow No.", value: "F/06550" },
  { icon: Users, label: "IEB Panel", value: "Chittagong Centre" },
  { icon: MapPin, label: "IEB Centre", value: "Chittagong" },
  { icon: Briefcase, label: "Profession", value: "Electrical Engineer" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Sc. Eng. (Electrical), CUET, 1981",
  },
  {
    icon: Briefcase,
    label: "Current Role",
    value: "Ex-Superintending Engineer, BPDB",
  },
  { icon: Award, label: "Experience", value: "35+ Years" },
  {
    icon: BookOpen,
    label: "IEB Experience",
    value:
      "Council Member (multiple terms); Joint-Convener, Training & PD (2018–19)",
  },
];

export default function QuickInfo() {
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
      aria-labelledby="quick-information-heading"
      className="quick-info-shell flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/85 backdrop-blur-[10px]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
        transition:
          "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 900ms cubic-bezier(0.22,1,0.36,1)",
        boxShadow:
          "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
      }}
    >
      {/* Header */}
      <div
        className="relative flex h-[44px] shrink-0 items-center overflow-hidden px-[16px] sm:h-[46px]"
        style={{
          background:
            "linear-gradient(105deg, #064b81 0%, #0a6aad 58%, #07518a 100%)",
        }}
      >
        <span
          aria-hidden="true"
          className="mr-[10px] h-[3px] w-[24px] shrink-0 rounded-full"
          style={{
            background: "linear-gradient(90deg, #e8a020, #f0b84c)",
            boxShadow: "0 0 10px rgba(232,160,32,0.7)",
          }}
        />
        <h2
          id="quick-information-heading"
          className="text-[14.5px] font-extrabold leading-none tracking-[0.01em] text-white sm:text-[15.5px]"
        >
          Quick Information
        </h2>

        {/* Subtle shine sweep */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -translate-x-full quick-info-shine"
        />
      </div>

      {/* Information rows — flex-1 so this section grows, pushing button to bottom */}
      <div className="flex-1">
        {infoItems.map(({ icon: Icon, label, value }, index) => (
          <div
            key={label}
            className="info-row grid grid-cols-[18px_minmax(78px,96px)_minmax(0,1fr)] items-start gap-x-[8px] border-[#e4ebf1] px-[13px] py-[8px] transition-colors sm:gap-x-[10px] sm:px-[14px] sm:py-[9px]"
            style={{
              borderBottom:
                index < infoItems.length - 1
                  ? "1px solid rgba(228,235,241,0.9)"
                  : "none",
            }}
          >
            <Icon
              size={14}
              strokeWidth={2.3}
              aria-hidden="true"
              className="mt-[2px] shrink-0 text-[#07518a] transition-transform duration-200"
            />

            <span className="pt-[1px] text-[12.5px] font-bold uppercase tracking-[0.03em] leading-[1.25] text-[#5a7088] sm:text-[12px] sm:tracking-[0.04em]">
              {label}
            </span>

            <span className="min-w-0 text-[13.5px] font-semibold leading-[1.35] text-[#1e3a52] sm:text-[13.5px]">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* =================================================
          Flexible spacer — absorbs remaining height
          so the button sticks to the bottom of the card
      ================================================= */}
      <div
        aria-hidden="true"
        className="hidden flex-1 md:block"
        style={{
          minHeight: 0,
          background:
            "linear-gradient(180deg, rgba(244,250,254,0) 0%, rgba(244,250,254,0.3) 100%)",
        }}
      />

      {/* Contact button — pinned to bottom */}
      <div className="shrink-0 border-t border-[#e4ebf1] px-[13px] pb-[12px] pt-[10px] sm:px-[14px]">
        <a
          href="/contact"
          className="group relative flex h-[36px] w-full items-center justify-center gap-[7px] overflow-hidden rounded-[6px] text-[13px] font-bold text-white transition duration-200 hover:-translate-y-[1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a6aad] focus-visible:ring-offset-2 active:translate-y-0 sm:text-[13.5px]"
          style={{
            background:
              "linear-gradient(135deg, #064d83 0%, #0a6aad 58%, #07518a 100%)",
            boxShadow:
              "0 8px 20px rgba(7,81,138,0.30), inset 0 1px 0 rgba(255,255,255,0.20)",
          }}
        >
          <span className="qi-btn-shine pointer-events-none absolute inset-0 -translate-x-full" />
          <Mail
            size={13}
            strokeWidth={2.4}
            aria-hidden="true"
            className="relative shrink-0"
          />
          <span className="relative">Get in Touch</span>
        </a>
      </div>

      <style jsx>{`
        .info-row:hover {
          background: rgba(244, 250, 254, 0.7);
        }
        .info-row:hover :global(svg) {
          transform: scale(1.08);
        }

        .quick-info-shine {
          background: linear-gradient(
            100deg,
            transparent 35%,
            rgba(255, 255, 255, 0.14) 50%,
            transparent 65%
          );
          animation: qiShine 6s ease-in-out infinite;
        }
        @keyframes qiShine {
          0%,
          100% {
            transform: translateX(-100%);
          }
          55%,
          100% {
            transform: translateX(100%);
          }
        }

        .qi-btn-shine {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .group:hover .qi-btn-shine {
            transform: translateX(100%);
          }
        }

        @media (hover: none) {
          a:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .quick-info-shine {
            animation: none !important;
          }
          .qi-btn-shine {
            transition: none !important;
          }
        }
      `}</style>
    </aside>
  );
}