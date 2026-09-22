// import { Briefcase, GraduationCap, ImageIcon, Users } from "lucide-react";
// import type { LucideIcon } from "lucide-react";

// type NavigationItem = {
//   icon: LucideIcon;
//   label: string;
//   href: string;
// };

// const tabs: NavigationItem[] = [
//   {
//     icon: GraduationCap,
//     label: "Education",
//     href: "#education",
//   },
//   {
//     icon: Briefcase,
//     label: "Professional Journey",
//     href: "#experience",
//   },
//   {
//     icon: Users,
//     label: "IEB Experience",
//     href: "#ieb-experience",
//   },
//   {
//     icon: ImageIcon,
//     label: "Media Gallery",
//     href: "#gallery",
//   },
// ];

// export default function MessageSection() {
//   return (
//     <section
//       className="
//         flex min-h-0
//         min-w-0
//         flex-col
//       "
//       aria-labelledby="message-heading"
//     >
//       {/* Section heading */}
//       <div className="mb-[10px] flex items-center gap-[10px]">
//         <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
//         <h2
//           id="message-heading"
//           className="text-[16px] font-bold leading-none text-[#0b3f6c]"
//         >
//           A Message to Fellow Engineers
//         </h2>
//       </div>

//       {/* Message body */}
//       <div
//         className="min-w-0 overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//       >
//         {/* Letter top accent */}
//         <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />

//         <div className="px-[16px] pb-[14px] pt-[13px]">
//           <p className="text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Dear Fellow Engineers,</p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Assalamu Alaikum.</p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
//             Engineering is not only a profession; it is a responsibility to society, the nation, and future generations. The Institution of Engineers, Bangladesh has an important role in upholding professional values, advancing technical knowledge, and strengthening the contribution of engineers to national development.
//           </p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
//             With my experience in the power sector, professional activities, and engagement with IEB, I seek to contribute to the continued development of our institution as a candidate for Vice Chairman of the IEB Chittagong Centre.
//           </p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
//             My focus is on professional development, knowledge sharing, the participation of young engineers, and constructive collaboration among members. I believe that a strong professional institution is built through mutual respect, transparency, service, and collective effort.
//           </p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
//             I value the experience of senior engineers, the energy and innovation of young engineers, and the contributions of professionals across every engineering discipline.
//           </p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Let us work toward an IEB that promotes professional dignity, encourages excellence, and creates meaningful opportunities for its members.</p>

//           <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">I seek your trust and support.</p>

//           {/* Signature space */}
//           <div className="mt-[10px] border-t border-[#e2eaf0] pt-[7px]">
//             <p className="text-[14px] font-semibold text-[#07518a]">
//               — Engr. Mohammad Harun
//             </p>
//             <p className="text-[13px] text-[#07518a] mt-[4px]">
//               Vice Chairman Candidate • IEB Chittagong Centre | Election 2026
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation row */}
//       <nav aria-label="Profile sections" className="mt-auto pt-[12px]">
//         <div className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_5px_rgba(15,58,91,0.06)]">
//           {tabs.map(({ icon: Icon, label, href }, index) => (
//             <a
//               key={label}
//               href={href}
//               className="group flex items-center gap-[12px] px-[14px] py-[11px] transition-all hover:bg-[#f0f6fb]"
//               style={{
//                 borderBottom: index < tabs.length - 1 ? "1px solid #e8eef4" : "none",
//               }}
//             >
//               {/* Left accent bar */}
//               <span
//                 aria-hidden="true"
//                 className="shrink-0 rounded-full transition-all duration-200"
//                 style={{ width:3, height:28, background:"linear-gradient(180deg,#07518a,#1a7fc1)", opacity:0.18 }}
//               />
//               {/* Icon */}
//               <div
//                 className="flex shrink-0 items-center justify-center rounded-[7px] transition-all duration-200 group-hover:scale-105"
//                 style={{ width:32, height:32, background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 2px 8px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
//               >
//                 <Icon size={15} strokeWidth={2.1} aria-hidden="true" color="#fff" />
//               </div>
//               {/* Label */}
//               <span className="flex-1 text-[14px] font-semibold leading-none text-[#0d3a5c] transition-colors group-hover:text-[#07518a]">
//                 {label}
//               </span>
//               {/* Arrow */}
//               <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#b0c8dc] transition-all duration-200 group-hover:translate-x-[2px] group-hover:text-[#07518a]">
//                 <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//               </svg>
//             </a>
//           ))}
//         </div>
//       </nav>
//     </section>
//   );
// }


"use client";

import {
  Briefcase,
  GraduationCap,
  ImageIcon,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const tabs: NavigationItem[] = [
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Briefcase, label: "Professional Journey", href: "#experience" },
  { icon: Users, label: "IEB Experience", href: "#ieb-experience" },
  { icon: ImageIcon, label: "Media Gallery", href: "#gallery" },
];

export default function MessageSection() {
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
    <section
      ref={ref}
      aria-labelledby="message-heading"
      className="msg-shell flex min-h-0 min-w-0 flex-col"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translate3d(0,0,0)" : "translate3d(0,12px,0)",
        transition:
          "opacity 800ms cubic-bezier(0.22,1,0.36,1) 100ms, transform 900ms cubic-bezier(0.22,1,0.36,1) 100ms",
      }}
    >
      {/* ============ Section heading ============ */}
      <div className="mb-[10px] flex items-center gap-[10px] sm:mb-[11px] sm:gap-[12px]">
        <div
          className="h-[3px] w-[26px] shrink-0 rounded-full sm:w-[30px]"
          style={{
            background: "linear-gradient(90deg, #07518a, #0a6aad)",
            boxShadow: "0 0 8px rgba(10,106,173,0.4)",
          }}
        />
        <h2
          id="message-heading"
          className="text-[15px] font-extrabold leading-none tracking-[-0.005em] text-[#0b3f6c] sm:text-[16px]"
        >
          A Message to Fellow Engineers
        </h2>
      </div>

      {/* ============ Message card ============ */}
      <div
        className="msg-card relative min-w-0 overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
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

        <div className="px-[16px] pb-[20px] pt-[14px] sm:px-[18px] sm:pb-[24px] sm:pt-[15px]">
          {/* Salutation */}
          <p className="text-[14.5px] font-semibold leading-[1.5] text-[#1e3a52] sm:text-[15px]">
            Dear Fellow Engineers,
          </p>

          <p className="mt-[8px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px]">
            Assalamu Alaikum.
          </p>

          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            Engineering is not only a profession; it is a responsibility to
            society, the nation, and future generations. The Institution of
            Engineers, Bangladesh has an important role in upholding
            professional values, advancing technical knowledge, and
            strengthening the contribution of engineers to national
            development.
          </p>

          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            With my experience in the power sector, professional activities,
            and engagement with IEB, I seek to contribute to the continued
            development of our institution as a candidate for Vice Chairman of
            the IEB Chittagong Centre.
          </p>

          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            My focus is on professional development, knowledge sharing, the
            participation of young engineers, and constructive collaboration
            among members. I believe that a strong professional institution is
            built through mutual respect, transparency, service, and collective
            effort.
          </p>

          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            I value the experience of senior engineers, the energy and
            innovation of young engineers, and the contributions of
            professionals across every engineering discipline.
          </p>

          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            Let us work toward an IEB that promotes professional dignity,
            encourages excellence, and creates meaningful opportunities for its
            members.
          </p>

          {/* Closing line */}
          <p className="mt-[9px] text-[14px] leading-[1.6] text-[#32495d] sm:text-[14.5px] sm:leading-[1.62]">
            I seek your trust and support.
          </p>

          {/* ============ Signature block — generous spacing ============ */}
          <div className="mt-[24px] sm:mt-[32px] lg:mt-[36px]">
            {/* Thin gold accent line */}
            <div
              aria-hidden="true"
              className="mb-[16px] flex items-center gap-[6px] sm:mb-[18px]"
            >
              <span
                className="h-[2px] w-[32px] rounded-full sm:w-[38px]"
                style={{
                  background: "linear-gradient(90deg, #07518a, #0a6aad)",
                }}
              />
              <span
                className="h-[2px] w-[10px] rounded-full bg-[#e8a020]"
                style={{ boxShadow: "0 0 8px rgba(232,160,32,0.7)" }}
              />
            </div>

            {/* Signature */}
            <p
              className="text-[14px] font-extrabold leading-tight text-[#07518a] sm:text-[14.5px] lg:text-[15px]"
              style={{ letterSpacing: "-0.005em" }}
            >
              — Engr. Mohammad Harun
            </p>

            <p className="mt-[5px] text-[12px] font-medium leading-[1.4] text-[#4a6580] sm:mt-[6px] sm:text-[12.5px]">
              Vice Chairman Candidate • IEB Chittagong Centre • Election 2026
            </p>
          </div>
        </div>
      </div>

      {/* ============ Navigation tabs ============ */}
      <nav
        aria-label="Profile sections"
        className="mt-auto pt-[12px] sm:pt-[13px]"
      >
        <div
          className="nav-tabs overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
          style={{
            boxShadow:
              "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
          }}
        >
          {tabs.map(({ icon: Icon, label, href }, index) => (
            <a
              key={label}
              href={href}
              className="nav-tab group relative flex items-center gap-[11px] px-[13px] py-[11px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0a6aad] sm:gap-[13px] sm:px-[14px] sm:py-[12px]"
              style={{
                borderBottom:
                  index < tabs.length - 1
                    ? "1px solid rgba(232,238,244,0.9)"
                    : "none",
              }}
            >
              {/* Left accent bar */}
              <span
                aria-hidden="true"
                className="nav-bar shrink-0 rounded-full transition-all duration-300"
                style={{
                  width: 3,
                  height: 26,
                  background: "linear-gradient(180deg, #07518a, #1a7fc1)",
                  opacity: 0.22,
                }}
              />

              {/* Icon container */}
              <div
                className="nav-icon flex shrink-0 items-center justify-center rounded-[8px] transition-all duration-300"
                style={{
                  width: 34,
                  height: 34,
                  background: "linear-gradient(145deg, #07518a, #0d6fad)",
                  boxShadow:
                    "0 3px 10px rgba(7,81,138,0.24), inset 0 1px 0 rgba(255,255,255,0.18)",
                }}
              >
                <Icon
                  size={15}
                  strokeWidth={2.1}
                  aria-hidden="true"
                  color="#fff"
                />
              </div>

              {/* Label */}
              <span className="flex-1 text-[13.5px] font-semibold leading-tight text-[#0d3a5c] transition-colors duration-200 group-hover:text-[#07518a] sm:text-[14px]">
                {label}
              </span>

              {/* Arrow */}
              <svg
                aria-hidden="true"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0 text-[#b0c8dc] transition-all duration-200 group-hover:translate-x-[3px] group-hover:text-[#07518a]"
              >
                <path
                  d="M5 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </nav>

      {/* ============ Local styles ============ */}
      <style jsx>{`
        .nav-tab:hover {
          background: rgba(240, 246, 251, 0.75);
        }
        .nav-tab:hover .nav-bar {
          opacity: 1;
          background: linear-gradient(180deg, #e8a020, #c97d10);
          box-shadow: 0 0 10px rgba(232, 160, 32, 0.55);
        }
        .nav-tab:hover .nav-icon {
          transform: scale(1.06);
          box-shadow:
            0 6px 16px rgba(7, 81, 138, 0.3),
            0 0 0 3px rgba(232, 160, 32, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
        }

        @media (hover: none) {
          .nav-tab:active {
            background: rgba(240, 246, 251, 0.6);
          }
          .nav-tab:active .nav-icon {
            transform: scale(0.96);
            transition: transform 100ms ease;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-icon,
          .nav-bar {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}