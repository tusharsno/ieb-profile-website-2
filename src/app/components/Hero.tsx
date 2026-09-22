// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Dancing_Script } from "next/font/google";
// import {
//   CalendarDays,
//   Download,
//   MapPin,
//   Send,
//   ThumbsUp,
// } from "lucide-react";
// import { useEffect, useRef, useState } from "react";

// const dancingScript = Dancing_Script({
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
//   display: "swap",
// });

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     setMounted(true);
//     const onScroll = () => {
//       if (window.innerWidth >= 1024) setScrollY(window.scrollY);
//     };
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const parallaxOffset = scrollY * 0.18;

//   return (
//     <section
//       ref={sectionRef}
//       className="
//         relative
//         w-full
//         overflow-hidden
//         bg-[#eef6fc]

//         lg:flex
//         lg:h-[420px]
//       "
//     >
//       {/* =========================================================
//           LEFT SIDE
//           Current successful treatment preserved:
//           background + quotation + integrated transparent portrait
//       ========================================================== */}
//       <div
//         className="
//           relative
//           h-[320px]
//           w-full
//           overflow-hidden

//           sm:h-[360px]

//           lg:h-full
//           lg:w-[32%]
//           lg:shrink-0
//         "
//       >
//         {/* Background */}
//         <Image
//           src="/images/hero/backgroundImage.jpeg"
//           alt=""
//           fill
//           priority
//           sizes="(min-width: 1024px) 32vw, 100vw"
//           className="object-cover"
//           style={{
//             objectPosition: "left 88%",
//             filter: "saturate(1.03) contrast(1.02) brightness(1.01)",
//           }}
//         />

//         {/* Left readability treatment */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(90deg," +
//               "rgba(3,40,67,0.38) 0%," +
//               "rgba(4,57,83,0.18) 28%," +
//               "rgba(7,81,110,0.06) 52%," +
//               "rgba(7,81,110,0) 76%)",
//           }}
//         />

//         {/* Subtle portrait integration glow */}
//         <div
//           aria-hidden="true"
//           className="
//             pointer-events-none
//             absolute
//             bottom-[2%]
//             right-[2%]
//             z-[8]
//             hidden
//             h-[90%]
//             w-[73%]

//             lg:block
//           "
//           style={{
//             background:
//               "radial-gradient(" +
//               "ellipse at 50% 44%," +
//               "rgba(255,255,255,0.14) 0%," +
//               "rgba(255,255,255,0.08) 34%," +
//               "rgba(227,242,250,0.025) 58%," +
//               "rgba(227,242,250,0) 78%" +
//               ")",
//             filter: "blur(8px)",
//           }}
//         />

//         {/* Handwritten left quotation */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             left-[7.5%]
//             top-[29%]
//             z-20
//             hidden
//             w-[28%]

//             lg:block
//           "
//         >
//           <p
//             className={`${dancingScript.className} text-white`}
//             style={{
//               fontSize: "clamp(17px, 1.4vw, 23px)",
//               lineHeight: 1.04,
//               fontWeight: 600,
//               letterSpacing: "-0.015em",
//               textShadow:
//                 "0 1px 3px rgba(0,31,55,0.42), 0 0 7px rgba(0,31,55,0.12)",
//             }}
//           >
//             Engineers
//             <br />
//             Build
//             <br />
//             A Better
//             <br />
//             Bangladesh
//           </p>

//           <div
//             aria-hidden="true"
//             className="mt-[12px] h-[2px] w-[30px] bg-white/90"
//           />
//         </div>

//         {/* Candidate portrait — all screen sizes, fixed right positioning */}
//         <div
//           className="
//             absolute
//             bottom-0
//             right-0
//             z-10
//             h-[104%]
//             w-[72%]

//             sm:right-[1.5%]
//             sm:w-[60%]

//             lg:right-[1.5%]
//             lg:w-[72%]
//           "
//           style={{
//             WebkitMaskImage:
//               "linear-gradient(" +
//               "to bottom," +
//               "rgba(0,0,0,1) 0%," +
//               "rgba(0,0,0,1) 86%," +
//               "rgba(0,0,0,0.98) 91%," +
//               "rgba(0,0,0,0.82) 96%," +
//               "rgba(0,0,0,0.52) 100%)",
//             maskImage:
//               "linear-gradient(" +
//               "to bottom," +
//               "rgba(0,0,0,1) 0%," +
//               "rgba(0,0,0,1) 86%," +
//               "rgba(0,0,0,0.98) 91%," +
//               "rgba(0,0,0,0.82) 96%," +
//               "rgba(0,0,0,0.52) 100%)",
//           }}
//         >
//           <Image
//             src="/images/profile/harun-pic.png"
//             alt="Engr. Mohammad Harun"
//             fill
//             priority
//             sizes="(min-width: 1024px) 23vw, (min-width: 640px) 60vw, 72vw"
//             className="object-contain object-bottom"
//             style={{
//               filter:
//                 "drop-shadow(0 10px 18px rgba(4,45,72,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.07))",
//             }}
//           />
//         </div>

//         {/* Soft bottom anchoring */}
//         <div
//           aria-hidden="true"
//           className="
//             pointer-events-none
//             absolute
//             inset-x-0
//             bottom-0
//             z-[11]
//             h-[12%]
//           "
//           style={{
//             background:
//               "linear-gradient(" +
//               "180deg," +
//               "rgba(7,71,105,0) 0%," +
//               "rgba(7,67,98,0.04) 42%," +
//               "rgba(6,57,87,0.10) 100%)",
//           }}
//         />
//       </div>

//       {/* =========================================================
//           CENTER + RIGHT SIDE

//           Restored treatment:
//           - independent background crop
//           - clean centre readability
//           - clearer bridge/city/right artwork
//           - minimal overlay over far-right visual
//       ========================================================== */}
//       <div
//         className="
//           relative
//           min-h-[470px]
//           flex-1
//           overflow-hidden

//           lg:min-h-0
//         "
//       >
//         {/* Right-side background — independent crop */}
//         <Image
//           src="/images/hero/backgroundImage.jpeg"
//           alt=""
//           fill
//           priority
//           sizes="(min-width: 1024px) 68vw, 100vw"
//           className="object-cover"
//           style={{
//             objectPosition: "62% 56%",
//             filter: "saturate(1.08) contrast(1.05) brightness(0.99)",
//             transform: `translateY(${parallaxOffset}px)`,
//             transition: "transform 0.1s linear",
//           }}
//         />

//         {/* =====================================================
//             CENTRE READABILITY FADE

//             Strong on the left/centre where text sits.
//             Falls away before the bridge and hexagon artwork.
//         ====================================================== */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(" +
//               "90deg," +
//               "rgba(247,251,255,1) 0%," +
//               "rgba(247,251,255,1) 29%," +
//               "rgba(247,251,255,0.985) 41%," +
//               "rgba(245,250,254,0.94) 49%," +
//               "rgba(239,247,253,0.78) 57%," +
//               "rgba(228,241,251,0.48) 65%," +
//               "rgba(216,235,249,0.20) 73%," +
//               "rgba(207,230,248,0.05) 81%," +
//               "rgba(207,230,248,0) 89%," +
//               "rgba(207,230,248,0) 100%)",
//           }}
//         />

//         {/* Soft top lighting — deliberately very light */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0"
//           style={{
//             background:
//               "linear-gradient(" +
//               "180deg," +
//               "rgba(255,255,255,0.12) 0%," +
//               "rgba(255,255,255,0.025) 42%," +
//               "rgba(255,255,255,0) 68%)",
//           }}
//         />

//         {/* =====================================================
//             MAIN INFORMATION
//         ====================================================== */}
//         <div
//           className="
//             relative
//             z-20
//             flex
//             min-h-[470px]
//             items-center
//             px-5
//             py-7

//             sm:px-8

//             lg:absolute
//             lg:inset-y-0
//             lg:left-0
//             lg:min-h-0
//             lg:w-[68%]
//             lg:px-[5.2%]
//             lg:py-0
//           "
//         >
//           <div
//             className="w-full"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(18px)",
//               transition: "opacity 0.7s ease, transform 0.7s ease",
//             }}
//           >
//             {/* Tagline */}
//             <div className="mb-[10px] flex items-center gap-[9px]">
//               <div className="h-[2px] w-[20px] shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #e8a020, #c97d10)" }} />
//               <p
//                 className="
//                   text-[13px]
//                   font-extrabold
//                   uppercase
//                   leading-none
//                   tracking-[0.22em]
//                   text-[#07518a]
//                   lg:whitespace-nowrap
//                   lg:text-[13.5px]
//                 "
//               >
//                 PROFESSIONAL EXCELLENCE • UNITY • SERVICE • PROGRESS
//               </p>
//               <div className="h-[2px] w-[20px] shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #c97d10, #e8a020)" }} />
//             </div>

//             {/* Name */}
//             <h1
//               className="
//                 mb-[8px]
//                 text-[22px]
//                 font-extrabold
//                 leading-[1.03]
//                 tracking-[-0.018em]

//                 sm:text-[26px]

//                 lg:text-[24px]
//               "
//               style={{
//                 background: "linear-gradient(90deg, #06477d 0%, #0a6aad 50%, #06477d 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               ENGR. MOHAMMAD HARUN
//             </h1>

//             {/* Position badge */}
//             <div className="mb-[13px]">
//               <span
//                 className="inline-flex min-h-[30px] items-center gap-[8px] rounded-[3px] px-[13px] py-[4px] text-[12px] font-extrabold uppercase tracking-[0.09em] text-white lg:text-[12.5px]"
//                 style={{
//                   background: "linear-gradient(90deg, #07518a 0%, #0a6aad 60%, #07518a 100%)",
//                   boxShadow: "0 2px 10px rgba(7,81,138,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
//                 }}
//               >
//                 <span aria-hidden="true" style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#e8a020", boxShadow: "0 0 5px rgba(232,160,32,0.75)", flexShrink: 0 }} />
//                 VICE CHAIRMAN CANDIDATE
//               </span>
//             </div>

//             {/* Info card */}
//             <div
//               className="mb-[13px] overflow-hidden rounded-[5px] border border-[#c8dff0]/80 bg-white/60"
//               style={{ boxShadow: "0 1px 8px rgba(7,81,138,0.08)" }}
//             >
//               <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
//                 <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#07518a,#0a6aad)" }} />
//                 <p className="text-[13.5px] font-semibold leading-[1.3] text-[#1a3a52] lg:text-[14px]">
//                   Institution of Engineers, Bangladesh{" "}
//                   <strong className="font-extrabold text-[#07518a]">(IEB)</strong>
//                 </p>
//               </div>
//               <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
//               <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
//                 <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#e8a020,#c97d10)" }} />
//                 <p className="text-[13.5px] font-semibold leading-[1.3] text-[#1a3a52] lg:text-[14px]">
//                   <strong className="font-extrabold text-[#07518a]">Fellow No. F/06550</strong>
//                 </p>
//               </div>
//               <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
//               <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
//                 <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#07518a,#0a6aad)" }} />
//                 <p className="text-[13.5px] font-semibold text-[#1a3a52] lg:text-[14px]">
//                   Education: <strong className="font-extrabold text-[#07518a]">B.Sc. Eng. (Electrical), CUET, 1981</strong>
//                 </p>
//               </div>
//               <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
//               <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
//                 <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#e8a020,#c97d10)" }} />
//                 <p className="text-[13.5px] font-semibold text-[#1a3a52] lg:text-[14px]">
//                   IEB Experience: <strong className="font-extrabold text-[#07518a]">Council Member (multiple terms)</strong>
//                 </p>
//               </div>
//             </div>

//             {/* Centre + election pills */}
//             <div className="mb-[15px] flex flex-wrap items-center gap-[7px]">
//               <div
//                 className="flex items-center gap-[5px] rounded-full border border-[#c0d9ee] bg-white/70 px-[10px] py-[4px]"
//                 style={{ boxShadow: "0 1px 4px rgba(7,81,138,0.08)" }}
//               >
//                 <MapPin size={12} strokeWidth={2.5} className="shrink-0 text-[#07518a]" />
//                 <span className="text-[12.5px] font-semibold text-[#164b75] lg:text-[13px]">
//                   IEB Centre: <strong className="font-extrabold text-[#07518a]">Chittagong</strong>
//                 </span>
//               </div>
//               <div
//                 className="flex items-center gap-[5px] rounded-full border border-[#c0d9ee] bg-white/70 px-[10px] py-[4px]"
//                 style={{ boxShadow: "0 1px 4px rgba(7,81,138,0.08)" }}
//               >
//                 <CalendarDays size={12} strokeWidth={2.5} className="shrink-0 text-[#07518a]" />
//                 <span className="text-[12.5px] font-semibold text-[#164b75] lg:text-[13px]">
//                   Election: <strong className="font-extrabold text-[#07518a]">2026</strong>
//                 </span>
//               </div>
//             </div>

//             {/* CTA */}
//             <div className="flex flex-wrap items-center gap-[8px] lg:flex-nowrap">
//               <Link
//                 href="/support"
//                 className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] px-[17px] text-[13.5px] font-bold text-white transition-all hover:brightness-110 lg:text-[14px]"
//                 style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.28)" }}
//               >
//                 <ThumbsUp size={14} strokeWidth={2.3} className="shrink-0" />
//                 <span>Support My Campaign</span>
//               </Link>
//               <a
//                 href="/profile.pdf"
//                 aria-disabled="true"
//                 onClick={(e) => e.preventDefault()}
//                 className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] border border-[#c97d10]/40 bg-white/50 px-[17px] text-[13.5px] font-bold text-[#c97d10]/50 cursor-not-allowed select-none lg:text-[14px]"
//                 title="Profile PDF coming soon"
//               >
//                 <Download size={14} strokeWidth={2.3} className="shrink-0" />
//                 <span>Download Profile</span>
//               </a>
//               <Link
//                 href="/contact"
//                 className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] border border-[#1b5c8a]/60 bg-transparent px-[17px] text-[13.5px] font-bold text-[#07518a] transition-all hover:border-[#07518a] hover:bg-white/60 lg:text-[14px]"
//               >
//                 <Send size={14} strokeWidth={2.3} className="shrink-0" />
//                 <span>Contact</span>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             RIGHT HANDWRITTEN SLOGAN
//             Kept entirely in the visually clear right region.
//         ====================================================== */}
//         <div
//           className="
//             pointer-events-none
//             absolute
//             right-[3.7%]
//             top-[7%]
//             z-30
//             hidden
//             w-[24%]
//             justify-center

//             lg:flex
//           "
//         >
//           <div className="ml-auto w-full text-center">
//             <p
//               className={`${dancingScript.className} text-[#123f73]`}
//               style={{
//                 fontSize: "clamp(20px, 1.52vw, 27px)",
//                 lineHeight: 1.16,
//                 fontWeight: 600,
//                 letterSpacing: "-0.012em",
//                 textShadow:
//                   "0 1px 2px rgba(255,255,255,0.74)",
//               }}
//             >
//               Together
//               <br />
//               for a Stronger
//               <br />
//               Engineering
//               <br />
//               Community
//             </p>

//             <div
//               aria-hidden="true"
//               className="
//                 mx-auto
//                 mt-[9px]
//                 h-[2px]
//                 w-[33px]
//                 bg-[#164c78]
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import {
  CalendarDays,
  Download,
  MapPin,
  Send,
  ThumbsUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- cursor spotlight + subtle parallax (desktop only) ---------- */
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const portrait = portraitRef.current;
    if (!section || !bg || !portrait) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isTouch = window.matchMedia("(hover: none)");
    let frame: number | null = null;
    let mx = 50;
    let my = 50;

    const render = () => {
      frame = null;
      const isMobile = window.innerWidth < 1024;

      if (reduce.matches || isMobile || isTouch.matches) {
        bg.style.transform = "translate3d(0,0,0) scale(1.045)";
        portrait.style.transform = "translate3d(0,0,0)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const offset = Math.max(-14, Math.min(18, -rect.top * 0.05));
      bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.055)`;

      const rx = (my - 50) * 0.03;
      const ry = (mx - 50) * -0.04;
      portrait.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${(mx - 50) * 0.08}px, ${(my - 50) * 0.06}px, 0)`;
    };

    const request = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      if (isTouch.matches) return;
      const r = section.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width) * 100;
      my = ((e.clientY - r.top) / r.height) * 100;
      section.style.setProperty("--mx", `${mx}%`);
      section.style.setProperty("--my", `${my}%`);
      request();
    };

    render();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    section.addEventListener("mousemove", onMove);
    reduce.addEventListener?.("change", request);

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      section.removeEventListener("mousemove", onMove);
      reduce.removeEventListener?.("change", request);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const enter = (delay = 0, y = 20, x = 0) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted
      ? "translate3d(0,0,0)"
      : `translate3d(${x}px,${y}px,0)`,
    transition: `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1000ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-title"
      className="hero-shell relative isolate w-full overflow-hidden bg-[#edf6fb] lg:h-[470px] xl:h-[500px]"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* =========================================================
          DESKTOP BACKGROUND (lg+)
      ========================================================== */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-y-[4%] inset-x-0 z-0 hidden will-change-transform lg:block"
        style={{ transform: "translate3d(0,0,0) scale(1.045)" }}
      >
        <Image
          src="/images/hero/backgroundImage.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "center 56%",
            filter: "saturate(1.08) contrast(1.05) brightness(1.02)",
          }}
        />
      </div>

      {/* Premium tint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg," +
            "rgba(2,35,58,0.30) 0%," +
            "rgba(3,47,72,0.16) 16%," +
            "rgba(7,77,105,0.03) 28%," +
            "rgba(246,251,255,0.62) 35%," +
            "rgba(248,252,255,0.90) 47%," +
            "rgba(245,250,254,0.88) 58%," +
            "rgba(235,246,253,0.60) 69%," +
            "rgba(221,239,250,0.22) 79%," +
            "rgba(210,233,248,0.04) 89%," +
            "rgba(210,233,248,0) 100%)",
        }}
      />

      {/* Soft top light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] hidden h-[52%] lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.03) 48%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Lower atmospheric layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] hidden h-[28%] lg:block"
        style={{
          background:
            "linear-gradient(180deg, rgba(224,241,251,0) 0%, rgba(207,232,247,0.10) 58%, rgba(195,225,243,0.18) 100%)",
        }}
      />

      {/* Cursor spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] hidden mix-blend-soft-light lg:block"
        style={{
          background:
            "radial-gradient(560px circle at var(--mx) var(--my), rgba(120,190,255,0.28), transparent 55%)",
          transition: "background 140ms linear",
        }}
      />

      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] hidden opacity-[0.05] lg:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,80,140,0.9) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(10,80,140,0.9) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at 25% 50%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 25% 50%, black 0%, transparent 70%)",
        }}
      />

      {/* =========================================================
          GRID: mobile/tablet stacked → lg two columns
      ========================================================== */}
      <div className="relative z-10 flex flex-col lg:grid lg:h-full lg:grid-cols-[minmax(0,34%)_minmax(0,66%)]">
        {/* =========================================================
            LEFT VISUAL ZONE (portrait)
        ========================================================== */}
        <div className="relative h-[280px] w-full overflow-hidden xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-full lg:overflow-visible">
          {/* Mobile/tablet background */}
          <div aria-hidden="true" className="absolute inset-0 lg:hidden">
            <Image
              src="/images/hero/backgroundImage.jpeg"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              className="object-cover"
              style={{
                objectPosition: "left 88%",
                filter: "saturate(1.04) contrast(1.03) brightness(1.02)",
              }}
            />
          </div>

          {/* Left readability */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(90deg," +
                "rgba(2,34,57,0.50) 0%," +
                "rgba(3,48,73,0.27) 28%," +
                "rgba(7,75,101,0.08) 55%," +
                "rgba(7,75,101,0) 84%)",
            }}
          />

          {/* Left quote — desktop only */}
          <div
            className="pointer-events-none absolute left-[7.5%] top-[26%] z-20 hidden w-[27%] lg:block motion-reduce:transition-none"
            style={enter(180, 6, -10)}
          >
            <p
              className={`${dancingScript.className} text-white`}
              style={{
                fontSize: "clamp(17px, 1.4vw, 23px)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                textShadow:
                  "0 2px 6px rgba(0,31,55,0.5), 0 0 12px rgba(90,160,220,0.25)",
              }}
            >
              Engineers
              <br />
              Build
              <br />
              A Better
              <br />
              Bangladesh
            </p>

            <div className="mt-[12px] flex items-center gap-[5px]">
              <span
                className="h-[2px] w-[30px] rounded-full bg-white/90"
                style={{ boxShadow: "0 0 8px rgba(255,255,255,0.5)" }}
              />
              <span
                className="h-[2px] w-[8px] rounded-full bg-[#e8a020]"
                style={{ boxShadow: "0 0 10px rgba(232,160,32,0.8)" }}
              />
            </div>
          </div>

          {/* =========================================================
              PORTRAIT — fully integrated (7 layers)
          ========================================================== */}
          <div
            ref={portraitRef}
            className="pointer-events-none absolute bottom-0 right-0 z-10 h-[102%] w-[82%] xs:w-[78%] sm:right-[1%] sm:w-[64%] md:w-[58%] lg:right-[-9%] lg:h-[108%] lg:w-[84%] will-change-transform motion-reduce:transition-none"
            style={{
              ...enter(80, 10, 12),
              transition:
                "opacity 1000ms cubic-bezier(0.22,1,0.36,1) 80ms, transform 500ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* Layer 1: ambient cast */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-0"
              style={{
                background:
                  "radial-gradient(ellipse 62% 48% at 52% 32%," +
                  "rgba(150, 200, 240, 0.22) 0%," +
                  "rgba(120, 180, 230, 0.10) 42%," +
                  "transparent 78%)",
                filter: "blur(24px)",
              }}
            />

            {/* Layer 2: warm rim (right) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[1] mix-blend-screen"
              style={{
                background:
                  "radial-gradient(ellipse 40% 60% at 82% 45%," +
                  "rgba(255, 220, 160, 0.20) 0%," +
                  "rgba(255, 200, 120, 0.08) 40%," +
                  "transparent 72%)",
                filter: "blur(28px)",
              }}
            />

            {/* Layer 3: cool rim (left) */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[1] mix-blend-screen"
              style={{
                background:
                  "radial-gradient(ellipse 32% 55% at 16% 45%," +
                  "rgba(120, 180, 240, 0.16) 0%," +
                  "rgba(80, 150, 220, 0.06) 45%," +
                  "transparent 75%)",
                filter: "blur(26px)",
              }}
            />

            {/* Layer 4: portrait with feathered mask */}
            <div
              className="absolute inset-0 z-[2]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom," +
                  "transparent 0%," +
                  "rgba(0,0,0,0.55) 2%," +
                  "rgba(0,0,0,0.95) 4%," +
                  "rgba(0,0,0,1) 6%," +
                  "rgba(0,0,0,1) 84%," +
                  "rgba(0,0,0,0.94) 89%," +
                  "rgba(0,0,0,0.72) 94%," +
                  "rgba(0,0,0,0.38) 98%," +
                  "transparent 100%)," +
                  "radial-gradient(ellipse 90% 100% at 50% 45%," +
                  "black 62%, rgba(0,0,0,0.85) 78%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom," +
                  "transparent 0%," +
                  "rgba(0,0,0,0.55) 2%," +
                  "rgba(0,0,0,0.95) 4%," +
                  "rgba(0,0,0,1) 6%," +
                  "rgba(0,0,0,1) 84%," +
                  "rgba(0,0,0,0.94) 89%," +
                  "rgba(0,0,0,0.72) 94%," +
                  "rgba(0,0,0,0.38) 98%," +
                  "transparent 100%)," +
                  "radial-gradient(ellipse 90% 100% at 50% 45%," +
                  "black 62%, rgba(0,0,0,0.85) 78%, transparent 100%)",
                WebkitMaskComposite: "source-in",
                maskComposite: "intersect",
                maskRepeat: "no-repeat",
              }}
            >
              <Image
                src="/images/profile/harun-pic.png"
                alt="Engr. Mohammad Harun"
                fill
                priority
                sizes="(min-width: 1024px) 29vw, (min-width: 768px) 58vw, (min-width: 640px) 64vw, 82vw"
                className="object-contain object-bottom"
                style={{
                  filter:
                    "saturate(0.98) contrast(1.04) brightness(0.99) " +
                    "drop-shadow(0 22px 34px rgba(4,45,72,0.20)) " +
                    "drop-shadow(0 4px 10px rgba(0,0,0,0.10))",
                }}
              />
            </div>

            {/* Layer 5: ambient tint */}
            <div
              aria-hidden="true"
              className="absolute inset-0 z-[3] mix-blend-soft-light"
              style={{
                background:
                  "linear-gradient(180deg," +
                  "rgba(120, 180, 240, 0.18) 0%," +
                  "rgba(120, 180, 240, 0.08) 40%," +
                  "rgba(232, 160, 32, 0.06) 100%)",
                pointerEvents: "none",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 95% at 50% 45%, black 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 85% 95% at 50% 45%, black 60%, transparent 100%)",
              }}
            />

            {/* Layer 6: contact shadow */}
            <div
              aria-hidden="true"
              className="absolute bottom-[-4%] left-[10%] right-[6%] z-[1] h-[20%] rounded-[50%]"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%," +
                  "rgba(4, 40, 68, 0.38) 0%," +
                  "rgba(4, 40, 68, 0.14) 42%," +
                  "transparent 74%)",
                filter: "blur(22px)",
              }}
            />

            {/* Layer 7: foreground fog */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[-8%] bottom-[-2%] z-[4] h-[28%]"
              style={{
                background:
                  "linear-gradient(180deg," +
                  "rgba(230, 242, 252, 0) 0%," +
                  "rgba(225, 240, 252, 0.10) 42%," +
                  "rgba(215, 235, 250, 0.22) 72%," +
                  "rgba(205, 230, 248, 0.32) 100%)",
                filter: "blur(2px)",
              }}
            />
          </div>

          {/* Foreground blend at subject base */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[11] h-[22%]"
            style={{
              background:
                "linear-gradient(180deg," +
                "rgba(7,71,105,0) 0%," +
                "rgba(20,80,120,0.04) 30%," +
                "rgba(30,90,130,0.10) 58%," +
                "rgba(40,100,140,0.18) 82%," +
                "rgba(50,110,150,0.24) 100%)",
            }}
          />
        </div>

        {/* =========================================================
            INFORMATION + RIGHT VISUAL ZONE
        ========================================================== */}
        <div className="relative w-full overflow-hidden bg-[#f7fbfe] py-8 sm:py-10 md:py-12 lg:min-h-0 lg:overflow-visible lg:bg-transparent lg:py-0">
          {/* Mobile/tablet right background */}
          <div aria-hidden="true" className="absolute inset-0 lg:hidden">
            <Image
              src="/images/hero/backgroundImage.jpeg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{
                objectPosition: "62% 56%",
                filter: "saturate(1.08) contrast(1.05) brightness(1.02)",
              }}
            />
          </div>

          {/* Mobile readability */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(248,252,255,1) 0%, rgba(248,252,255,0.99) 45%, rgba(239,248,253,0.82) 70%, rgba(220,238,250,0.34) 100%)",
            }}
          />

          {/* Desktop seamless readability */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-[12%] z-[3] hidden w-[88%] lg:block"
            style={{
              background:
                "linear-gradient(90deg," +
                "rgba(248,252,255,0.02) 0%," +
                "rgba(248,252,255,0.52) 8%," +
                "rgba(248,252,255,0.92) 20%," +
                "rgba(248,252,255,0.96) 50%," +
                "rgba(245,250,254,0.86) 66%," +
                "rgba(235,246,253,0.58) 80%," +
                "rgba(222,240,251,0.16) 93%," +
                "rgba(222,240,251,0) 100%)",
            }}
          />

          {/* Soft internal highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[3%] top-[10%] z-[4] hidden h-[58%] w-[53%] rounded-full lg:block"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 72%)",
              filter: "blur(16px)",
            }}
          />

          {/* Main content wrapper — mobile: static, desktop: absolute */}
          <div className="relative z-20 mx-auto flex w-full max-w-[720px] items-center px-4 xs:px-5 sm:px-6 md:px-8 lg:absolute lg:inset-y-0 lg:left-[2.5%] lg:mx-0 lg:max-w-none lg:w-[69%] lg:px-[4.6%] lg:py-0">
            <div
              className="w-full motion-reduce:transition-none"
              style={enter(150, 16)}
            >
              {/* Tagline — wraps on small screens */}
              <div
                className="mb-2 flex items-center gap-2 sm:mb-[10px] sm:gap-[9px]"
                style={enter(200, 14)}
              >
                <span
                  className="h-[2px] w-[16px] shrink-0 rounded-full sm:w-[20px]"
                  style={{
                    background: "linear-gradient(90deg,#e8a020,#c97d10)",
                    boxShadow: "0 0 10px rgba(232,160,32,0.6)",
                  }}
                />
                <p className="text-[10px] font-extrabold uppercase leading-[1.35] tracking-[0.15em] text-[#07518a] xs:text-[10.5px] sm:text-[11.5px] sm:tracking-[0.19em] md:text-[12px] lg:whitespace-nowrap lg:text-[13.5px] lg:tracking-[0.22em]">
                  PROFESSIONAL EXCELLENCE • UNITY • SERVICE • PROGRESS
                </p>
                <span
                  className="h-[2px] w-[16px] shrink-0 rounded-full sm:w-[20px]"
                  style={{
                    background: "linear-gradient(90deg,#c97d10,#e8a020)",
                    boxShadow: "0 0 10px rgba(232,160,32,0.6)",
                  }}
                />
              </div>

              {/* Name — fluid size */}
              <h1
                id="hero-title"
                className="hero-name mb-1.5 text-[19px] font-extrabold leading-[1.06] tracking-[-0.018em] xs:text-[21px] sm:mb-[8px] sm:text-[24px] md:text-[26px] lg:text-[26px]"
                style={enter(260, 14)}
              >
                ENGR. MOHAMMAD HARUN
              </h1>

              {/* Position badge */}
              <div className="mb-2.5 sm:mb-[13px]" style={enter(320, 14)}>
                <span
                  className="badge-premium inline-flex min-h-[26px] items-center gap-1.5 rounded-[6px] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.07em] text-white xs:text-[10.5px] sm:min-h-[30px] sm:gap-[8px] sm:px-[13px] sm:py-[4px] sm:text-[11.5px] sm:tracking-[0.09em] lg:text-[12.5px]"
                  style={{
                    background:
                      "linear-gradient(105deg, rgba(6,75,129,0.95) 0%, rgba(10,106,173,0.98) 58%, rgba(7,81,138,0.95) 100%)",
                    border: "1px solid rgba(160,210,255,0.35)",
                    boxShadow:
                      "0 8px 22px rgba(7,81,138,0.32), inset 0 1px 0 rgba(255,255,255,0.25)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="badge-dot"
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#e8a020",
                      flexShrink: 0,
                    }}
                  />
                  VICE CHAIRMAN CANDIDATE
                </span>
              </div>

              {/* Glass info card */}
              <div
                className="glass-card mb-2.5 overflow-hidden rounded-[10px] sm:mb-[13px]"
                style={enter(380, 14)}
              >
                {[
                  {
                    color: "#0a6aad",
                    text: (
                      <>
                        Institution of Engineers, Bangladesh{" "}
                        <strong className="font-extrabold text-[#07518a]">
                          (IEB)
                        </strong>
                      </>
                    ),
                  },
                  {
                    color: "#e8a020",
                    text: (
                      <strong className="font-extrabold text-[#07518a]">
                        Fellow No. F/06550
                      </strong>
                    ),
                  },
                  {
                    color: "#0a6aad",
                    text: (
                      <>
                        Education:{" "}
                        <strong className="font-extrabold text-[#07518a]">
                          B.Sc. Eng. (Electrical), CUET, 1981
                        </strong>
                      </>
                    ),
                  },
                  {
                    color: "#e8a020",
                    text: (
                      <>
                        IEB Experience:{" "}
                        <strong className="font-extrabold text-[#07518a]">
                          Council Member (multiple terms)
                        </strong>
                      </>
                    ),
                  },
                ].map((row, i, arr) => (
                  <div key={i}>
                    <div className="info-row flex items-center gap-2 px-3 py-1.5 sm:gap-[10px] sm:px-[13px] sm:py-[7px]">
                      <span
                        aria-hidden="true"
                        className="h-5 w-[3px] shrink-0 rounded-full sm:h-[26px]"
                        style={{
                          background: `linear-gradient(180deg, ${row.color}, ${row.color}cc)`,
                          boxShadow: `0 0 10px ${row.color}99`,
                        }}
                      />
                      <p className="text-[11.5px] font-semibold leading-[1.35] text-[#1a3a52] xs:text-[12px] sm:text-[13px] md:text-[13.5px] lg:text-[14px]">
                        {row.text}
                      </p>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="mx-3 h-px bg-[#d4e8f5]/90 sm:mx-[13px]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Pills */}
              <div
                className="mb-3 flex flex-wrap items-center gap-1.5 sm:mb-[15px] sm:gap-[7px]"
                style={enter(440, 14)}
              >
                {[
                  { Icon: MapPin, label: "IEB Centre:", value: "Chittagong" },
                  { Icon: CalendarDays, label: "Election:", value: "2026" },
                ].map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="pill-glow flex items-center gap-1.5 rounded-full px-2.5 py-1 sm:gap-[5px] sm:px-[11px] sm:py-[4px]"
                  >
                    <Icon
                      size={11}
                      strokeWidth={2.5}
                      className="shrink-0 text-[#07518a] sm:h-[12px] sm:w-[12px]"
                    />
                    <span className="text-[11px] font-semibold text-[#164b75] sm:text-[12px] lg:text-[13px]">
                      {label}{" "}
                      <strong className="font-extrabold text-[#07518a]">
                        {value}
                      </strong>
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA row — stacks on very small screens, side-by-side from xs */}
              <div
                className="flex flex-col gap-2 xs:flex-row xs:flex-wrap xs:items-center sm:gap-[8px] lg:flex-nowrap"
                style={enter(500, 14)}
              >
                <Link
                  href="/support"
                  className="btn-primary group relative flex h-[42px] w-full shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-[6px] px-4 text-[13px] font-bold text-white transition duration-200 xs:w-auto xs:px-[15px] xs:text-[12.5px] sm:h-[38px] sm:gap-[6px] sm:px-[17px] sm:text-[13.5px] lg:text-[14px]"
                  style={{
                    background:
                      "linear-gradient(135deg,#064d83 0%,#0a6aad 58%,#07518a 100%)",
                    boxShadow:
                      "0 8px 20px rgba(7,81,138,0.30), inset 0 1px 0 rgba(255,255,255,0.20)",
                  }}
                >
                  <span className="btn-shine pointer-events-none absolute inset-0 -translate-x-full" />
                  <ThumbsUp
                    size={14}
                    strokeWidth={2.3}
                    className="relative shrink-0"
                  />
                  <span className="relative whitespace-nowrap">
                    Support My Campaign
                  </span>
                </Link>

                {/* Download Profile — ACTIVE */}
                <a
                  href="/profile.pdf"
                  download
                  className="btn-download group relative flex h-[42px] w-full shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-[6px] border border-[#c97d10]/60 bg-gradient-to-b from-[#fff8ec] to-[#fdf1da] px-4 text-[13px] font-bold text-[#a85f08] transition duration-200 xs:w-auto xs:px-[15px] xs:text-[12.5px] sm:h-[38px] sm:gap-[6px] sm:px-[17px] sm:text-[13.5px] lg:text-[14px]"
                  title="Download Engr. Mohammad Harun's profile"
                >
                  <span className="btn-shine-download pointer-events-none absolute inset-0 -translate-x-full" />
                  <Download
                    size={14}
                    strokeWidth={2.3}
                    className="relative shrink-0 cta-icon-download"
                  />
                  <span className="relative whitespace-nowrap">
                    Download Profile
                  </span>
                </a>

                <Link
                  href="/contact"
                  className="btn-ghost flex h-[42px] w-full shrink-0 items-center justify-center gap-1.5 rounded-[6px] px-4 text-[13px] font-bold text-[#07518a] transition duration-200 xs:w-auto xs:px-[15px] xs:text-[12.5px] sm:h-[38px] sm:gap-[6px] sm:px-[17px] sm:text-[13.5px] lg:text-[14px]"
                >
                  <Send size={14} strokeWidth={2.3} className="shrink-0" />
                  <span className="whitespace-nowrap">Contact</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right handwritten slogan — desktop only */}
          <div
            className="pointer-events-none absolute right-[3.5%] top-[7%] z-30 hidden w-[24%] justify-center lg:flex motion-reduce:transition-none"
            style={enter(600, 6, 10)}
          >
            <div className="ml-auto w-full text-center">
              <p
                className={`${dancingScript.className} text-[#123f73]`}
                style={{
                  fontSize: "clamp(20px, 1.52vw, 27px)",
                  lineHeight: 1.16,
                  fontWeight: 600,
                  letterSpacing: "-0.012em",
                  textShadow:
                    "0 1px 2px rgba(255,255,255,0.85), 0 3px 14px rgba(7,81,138,0.08)",
                }}
              >
                Together
                <br />
                for a Stronger
                <br />
                Engineering
                <br />
                Community
              </p>

              <div className="mt-[9px] flex items-center justify-center gap-[5px]">
                <span
                  className="h-[2px] w-[33px] rounded-full bg-[#164c78]"
                  style={{ boxShadow: "0 0 8px rgba(22,76,120,0.5)" }}
                />
                <span
                  className="h-[2px] w-[8px] rounded-full bg-[#e8a020]"
                  style={{ boxShadow: "0 0 10px rgba(232,160,32,0.7)" }}
                />
              </div>
            </div>
          </div>

          {/* Corner frame — desktop only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[1.1%] top-[4%] z-[6] hidden h-[31%] w-[8%] rounded-tr-[24px] border-r border-t border-white/25 lg:block"
          />
        </div>
      </div>

      {/* =========================================================
          LOCAL STYLES
      ========================================================== */}
      <style jsx>{`
        .hero-name {
          background: linear-gradient(
            100deg,
            #053f70 0%,
            #0a6aad 25%,
            #2f97e0 45%,
            #0a6aad 65%,
            #06477d 100%
          );
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: nameShimmer 7s ease-in-out infinite;
          filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.5));
        }
        @keyframes nameShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .badge-premium {
          position: relative;
          overflow: hidden;
        }
        .badge-premium::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            transparent 35%,
            rgba(255, 255, 255, 0.28) 50%,
            transparent 65%
          );
          transform: translateX(-100%);
          animation: badgeShine 4.2s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes badgeShine {
          0% {
            transform: translateX(-100%);
          }
          60%,
          100% {
            transform: translateX(100%);
          }
        }

        .badge-dot {
          box-shadow:
            0 0 0 3px rgba(232, 160, 32, 0.14),
            0 0 10px rgba(232, 160, 32, 0.85);
          animation: dotPulse 2.2s ease-in-out infinite;
        }
        @keyframes dotPulse {
          0%,
          100% {
            box-shadow:
              0 0 0 3px rgba(232, 160, 32, 0.14),
              0 0 10px rgba(232, 160, 32, 0.85);
          }
          50% {
            box-shadow:
              0 0 0 6px rgba(232, 160, 32, 0.06),
              0 0 16px rgba(232, 160, 32, 1);
          }
        }

        .glass-card {
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.82) 0%,
            rgba(255, 255, 255, 0.68) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px) saturate(1.1);
          -webkit-backdrop-filter: blur(14px) saturate(1.1);
          box-shadow:
            0 14px 40px rgba(7, 81, 138, 0.1),
            0 2px 10px rgba(7, 81, 138, 0.06),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
          transition:
            transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 320ms ease;
        }
        .info-row {
          transition: background 260ms ease;
        }
        .info-row:hover {
          background: rgba(244, 250, 254, 0.85);
        }

        .pill-glow {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid #bfd9ec;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(7, 81, 138, 0.08);
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            border-color 260ms ease,
            background 260ms ease;
        }

        .btn-primary {
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            filter 260ms ease;
        }
        .btn-primary .btn-shine {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.45) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }

        .btn-download {
          transition:
            transform 260ms ease,
            box-shadow 260ms ease,
            border-color 260ms ease,
            background 260ms ease;
        }
        .btn-download .btn-shine-download {
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.7) 50%,
            transparent 70%
          );
          transition: transform 900ms ease;
        }
        .btn-download:hover .cta-icon-download {
          animation: downloadBounce 700ms ease;
        }
        @keyframes downloadBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          35% {
            transform: translateY(2px);
          }
          70% {
            transform: translateY(-3px);
          }
        }

        .btn-ghost {
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(27, 92, 138, 0.55);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition:
            transform 260ms ease,
            background 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease;
        }

        /* ---- Hover effects ONLY on hover-capable devices ---- */
        @media (hover: hover) and (pointer: fine) {
          .btn-primary:hover {
            transform: translateY(-1px);
            filter: brightness(1.08);
            box-shadow:
              0 14px 30px rgba(7, 81, 138, 0.42),
              0 0 20px rgba(90, 180, 255, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.28);
          }
          .btn-primary:hover .btn-shine {
            transform: translateX(100%);
          }
          .btn-download:hover {
            transform: translateY(-1px);
            border-color: #c97d10;
            box-shadow: 0 10px 22px rgba(201, 125, 16, 0.28);
          }
          .btn-download:hover .btn-shine-download {
            transform: translateX(100%);
          }
          .btn-ghost:hover {
            transform: translateY(-1px);
            background: rgba(255, 255, 255, 0.85);
            border-color: #07518a;
            box-shadow: 0 10px 22px rgba(7, 81, 138, 0.18);
          }
          .glass-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 20px 50px rgba(7, 81, 138, 0.16),
              0 4px 14px rgba(7, 81, 138, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.95);
          }
          .pill-glow:hover {
            transform: translateY(-2px);
            border-color: #9fc7e2;
            background: rgba(255, 255, 255, 0.95);
            box-shadow: 0 10px 22px rgba(7, 81, 138, 0.16);
          }
        }

        /* ---- Touch devices: press feedback ---- */
        @media (hover: none) {
          .btn-primary:active,
          .btn-download:active,
          .btn-ghost:active {
            transform: scale(0.97);
            transition: transform 100ms ease;
          }
          .pill-glow:active {
            transform: scale(0.97);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-name,
          .badge-premium::after,
          .badge-dot {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}