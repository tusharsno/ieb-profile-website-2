// import {
//   BriefcaseBusiness,
//   Globe2,
//   GraduationCap,
//   Link2,
//   MessageSquare,
//   ShieldCheck,
//   TrendingUp,
//   Users,
//   type LucideIcon,
// } from "lucide-react";

// const cardAccents = {
//   education:  { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
//   experience: { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
//   leadership: { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
//   strategic:  { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
// } as const;

// type AccentKey = keyof typeof cardAccents;

// type EducationItem = {
//   degree: string;
//   institution: string;
//   period?: string;
// };

// type ExperienceItem = {
//   role: string;
//   period?: string;
// };

// type StrategicItem = {
//   icon: LucideIcon;
//   title: string;
// };

// const educationItems: EducationItem[] = [
//   {
//     degree: "B.Sc. Engineering (Electrical)",
//     institution: "Chittagong University of Engineering & Technology (CUET)",
//     period: "1981",
//   },
// ];

// const experienceItems: ExperienceItem[] = [
//   {
//     role: "Ex-Superintending Engineer",
//     period: "Bangladesh Power Development Board (BPDB)",
//   },
//   {
//     role: "Ex-Deputy Project Director",
//     period: "Greater Chittagong Power Distribution Project, BPDB",
//   },
// ];

// const leadershipItems = [
//   "Former IEB Council Member (multiple terms)",
//   "Former Joint-Convener, Training & Professional Development Sub-Committee (2018–2019)",
// ];

// const strategicItems: StrategicItem[] = [
//   {
//     icon: ShieldCheck,
//     title: "Professional Development",
//   },
//   {
//     icon: TrendingUp,
//     title: "Young Engineers' Empowerment",
//   },
//   {
//     icon: Link2,
//     title: "Engineers' Welfare & Dignity",
//   },
//   {
//     icon: Users,
//     title: "Technical Knowledge & Innovation",
//   },
//   {
//     icon: MessageSquare,
//     title: "Inclusive Member Engagement",
//   },
//   {
//     icon: Globe2,
//     title: "Stronger Professional Networking",
//   },
// ];

// type CardHeaderProps = {
//   icon: LucideIcon;
//   title: string;
//   accentKey: AccentKey;
// };

// function CardHeader({ icon: Icon, title, accentKey }: CardHeaderProps) {
//   const a = cardAccents[accentKey];
//   return (
//     <div className="flex min-h-[45px] items-center gap-[11px] px-[14px] pt-[11px] pb-[8px]">
//       <div style={{ width:34, height:34, borderRadius:8, background:a.bg, border:a.border, boxShadow:`${a.shadow}, ${a.ring}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
//         <Icon size={17} strokeWidth={2.1} aria-hidden="true" color="#fff" />
//       </div>
//       <h3 className="text-[16px] font-bold leading-[1.18] text-[#0b3f6c]">{title}</h3>
//     </div>
//   );
// }

// export default function ExperienceCards() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         background: "#f0f6fb",
//         borderTop: "1px solid #d0e4f0",
//         borderBottom: "1px solid #d0e4f0",
//         paddingTop: 13,
//         paddingBottom: 13,
//       }}
//       aria-label="Education, professional experience, leadership and strategic commitments"
//     >
//       <div
//         className="
//           mx-auto
//           grid
//           w-full
//           max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
//           grid-cols-1
//           items-stretch
//           gap-[14px]
//           px-4 sm:px-6

//           sm:grid-cols-2

//           lg:grid-cols-4
//         "
//       >
//         {/* =====================================================
//             MY EDUCATION
//         ====================================================== */}
//         <article
//           id="education"
//           className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         >
//           <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
//           <CardHeader icon={GraduationCap} title="My Education" accentKey="education" />
//           <div className="relative px-[14px] pb-[13px] pt-[1px]">
//             <span aria-hidden="true" className="absolute bottom-[24px] left-[18px] top-[8px] w-px" style={{ background: cardAccents.education.line }} />
//             <div className="relative flex flex-col">
//               {educationItems.map(({ degree, institution, period }, index) => (
//                 <div key={degree} className={`relative pl-[20px] pr-[2px] ${index === educationItems.length - 1 ? "pb-[7px]" : "py-[7px]"}`}>
//                   <div aria-hidden="true" style={{ position:"absolute", left:-1, top:8, width:8, height:8, borderRadius:"50%", background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 4px rgba(7,81,138,0.30)", zIndex:10 }} />
//                   <p className="text-[16px] font-bold leading-[1.25] text-[#0b416e]">{degree}</p>
//                   <p className="mt-[2px] text-[14.5px] leading-[1.3] text-[#51677a]">{institution}{period ? ` (${period})` : ""}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </article>

//         {/* =====================================================
//             MY PROFESSIONAL EXPERIENCE
//         ====================================================== */}
//         <article
//           id="experience"
//           className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         >
//           <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
//           <CardHeader icon={BriefcaseBusiness} title="My Professional Experience" accentKey="experience" />
//           <div className="relative px-[14px] pb-[13px] pt-[1px]">
//             <span aria-hidden="true" className="absolute bottom-[24px] left-[18px] top-[8px] w-px" style={{ background: cardAccents.experience.line }} />
//             <div className="relative flex flex-col">
//               {experienceItems.map(({ role, period }, index) => (
//                 <div key={role} className={`relative pl-[20px] pr-[2px] ${index === experienceItems.length - 1 ? "pb-[6px]" : "py-[6px]"}`}>
//                   <div aria-hidden="true" style={{ position:"absolute", left:-1, top:8, width:8, height:8, borderRadius:"50%", background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 4px rgba(7,81,138,0.30)", zIndex:10 }} />
//                   <p className="text-[15px] font-medium leading-[1.28] text-[#31495d]">{role}{period ? ` (${period})` : ""}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </article>

//         {/* =====================================================
//             LEADERSHIP & SOCIAL ENGAGEMENT
//         ====================================================== */}
//         <article
//           id="leadership"
//           className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         >
//           <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
//           <CardHeader icon={Users} title="Leadership and Social Engagement" accentKey="leadership" />
//           <ul className="px-[15px] pb-[13px] pt-[2px]">
//             {leadershipItems.map((item, index) => (
//               <li key={item} className={`flex items-start gap-[9px] ${index === leadershipItems.length - 1 ? "pb-[7px]" : "py-[7px]"}`}>
//                 <div aria-hidden="true" style={{ marginTop:6, width:8, height:8, borderRadius:2, background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 3px rgba(7,81,138,0.30)", flexShrink:0, transform:"rotate(45deg)" }} />
//                 <p className="text-[15px] leading-[1.32] text-[#31495d]">{item}</p>
//               </li>
//             ))}
//           </ul>
//         </article>

//         {/* =====================================================
//             MY STRATEGIC COMMITMENT TO IEB
//         ====================================================== */}
//         <article
//           id="strategic-commitment"
//           className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
//         >
//           <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
//           <CardHeader icon={ShieldCheck} title="My Strategic Commitment to IEB" accentKey="strategic" />
//           <div className="grid grid-cols-2 gap-[7px] px-[10px] pb-[11px] pt-[1px]">
//             {strategicItems.map(({ icon: Icon, title }) => (
//               <div key={title} className="flex min-h-[72px] flex-col items-center justify-center rounded-[6px] px-[6px] py-[8px] text-center" style={{ background:"linear-gradient(135deg,#eef5fb,#ddeef8)", border:"1px solid #c4ddf0" }}>
//                 <div style={{ width:30, height:30, borderRadius:7, background:cardAccents.strategic.bg, boxShadow:`${cardAccents.strategic.shadow}, ${cardAccents.strategic.ring}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:5, flexShrink:0 }}>
//                   <Icon size={14} strokeWidth={2.1} aria-hidden="true" color="#fff" />
//                 </div>
//                 <p className="text-[14px] font-semibold leading-[1.22] text-[#0d3a5c]">{title}</p>
//               </div>
//             ))}
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  BriefcaseBusiness,
  Globe2,
  GraduationCap,
  Link2,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

type EducationItem = {
  degree: string;
  institution: string;
  period?: string;
};

type ExperienceItem = {
  role: string;
  period?: string;
};

type StrategicItem = {
  icon: LucideIcon;
  title: string;
};

const educationItems: EducationItem[] = [
  {
    degree: "B.Sc. Engineering (Electrical)",
    institution: "Chittagong University of Engineering & Technology (CUET)",
    period: "1981",
  },
];

const experienceItems: ExperienceItem[] = [
  {
    role: "Ex-Superintending Engineer",
    period: "Bangladesh Power Development Board (BPDB)",
  },
  {
    role: "Ex-Deputy Project Director",
    period: "Greater Chittagong Power Distribution Project, BPDB",
  },
];

const leadershipItems = [
  "Former IEB Council Member (multiple terms)",
  "Former Joint-Convener, Training & Professional Development Sub-Committee (2018–2019)",
];

const strategicItems: StrategicItem[] = [
  { icon: ShieldCheck, title: "Professional Development" },
  { icon: TrendingUp, title: "Young Engineers' Empowerment" },
  { icon: Link2, title: "Engineers' Welfare & Dignity" },
  { icon: Users, title: "Technical Knowledge & Innovation" },
  { icon: MessageSquare, title: "Inclusive Member Engagement" },
  { icon: Globe2, title: "Stronger Professional Networking" },
];

type CardHeaderProps = {
  icon: LucideIcon;
  title: string;
};

function CardHeader({ icon: Icon, title }: CardHeaderProps) {
  return (
    <div className="flex min-h-[48px] items-center gap-[11px] px-[14px] pb-[9px] pt-[12px] sm:gap-[12px] sm:px-[15px] sm:pt-[13px]">
      <div
        className="card-icon flex shrink-0 items-center justify-center rounded-[9px] transition-all duration-300"
        style={{
          width: 34,
          height: 34,
          background: "linear-gradient(145deg, #07518a, #0d6fad)",
          boxShadow:
            "0 4px 12px rgba(7,81,138,0.28), inset 0 1px 0 rgba(255,255,255,0.16)",
        }}
      >
        <Icon size={16} strokeWidth={2.1} aria-hidden="true" color="#fff" />
      </div>
      <h3 className="text-[14.5px] font-extrabold leading-[1.2] text-[#0b3f6c] sm:text-[15px]">
        {title}
      </h3>
    </div>
  );
}

export default function ExperienceCards() {
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
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Education, professional experience, leadership and strategic commitments"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #eef6fc 0%, #f6fafd 45%, #eef6fc 100%)",
      }}
    >
      {/* Top subtle border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #4fa3d8 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Container */}
      <div className="mx-auto w-full max-w-[1320px] px-4 py-8 sm:px-5 sm:py-10 md:px-6 lg:px-8 lg:py-12 xl:px-10">
        <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {/* ======================== EDUCATION ======================== */}
          <article
            id="education"
            className="exp-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) 0ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 0ms`,
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />
            <CardHeader icon={GraduationCap} title="My Education" />

            <div className="relative flex-1 px-[14px] pb-[14px] pt-[2px] sm:px-[15px]">
              {/* Timeline line */}
              <span
                aria-hidden="true"
                className="absolute bottom-[26px] left-[19px] top-[10px] w-px sm:left-[20px]"
                style={{
                  background:
                    "linear-gradient(180deg, #b8d8ee 0%, #b8d8ee 80%, transparent 100%)",
                }}
              />
              <div className="relative flex flex-col">
                {educationItems.map(({ degree, institution, period }, index) => (
                  <div
                    key={degree}
                    className={`relative pl-[22px] pr-[2px] sm:pl-[24px] ${
                      index === educationItems.length - 1
                        ? "pb-[6px]"
                        : "py-[7px]"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute left-[-1px] top-[9px] z-10 h-[8px] w-[8px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(145deg, #07518a, #0d6fad)",
                        boxShadow:
                          "0 0 0 3px rgba(255,255,255,0.95), 0 1px 4px rgba(7,81,138,0.35)",
                      }}
                    />
                    <p className="text-[14px] font-extrabold leading-[1.3] text-[#0b416e] sm:text-[14.5px]">
                      {degree}
                    </p>
                    <p className="mt-[3px] text-[12.5px] leading-[1.4] text-[#51677a] sm:text-[13px]">
                      {institution}
                      {period ? ` (${period})` : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* ==================== PROFESSIONAL EXPERIENCE ==================== */}
          <article
            id="experience"
            className="exp-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) 80ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 80ms`,
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />
            <CardHeader
              icon={BriefcaseBusiness}
              title="My Professional Experience"
            />

            <div className="relative flex-1 px-[14px] pb-[14px] pt-[2px] sm:px-[15px]">
              <span
                aria-hidden="true"
                className="absolute bottom-[26px] left-[19px] top-[10px] w-px sm:left-[20px]"
                style={{
                  background:
                    "linear-gradient(180deg, #b8d8ee 0%, #b8d8ee 80%, transparent 100%)",
                }}
              />
              <div className="relative flex flex-col">
                {experienceItems.map(({ role, period }, index) => (
                  <div
                    key={role}
                    className={`relative pl-[22px] pr-[2px] sm:pl-[24px] ${
                      index === experienceItems.length - 1
                        ? "pb-[6px]"
                        : "py-[7px]"
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute left-[-1px] top-[9px] z-10 h-[8px] w-[8px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(145deg, #07518a, #0d6fad)",
                        boxShadow:
                          "0 0 0 3px rgba(255,255,255,0.95), 0 1px 4px rgba(7,81,138,0.35)",
                      }}
                    />
                    <p className="text-[13.5px] font-semibold leading-[1.35] text-[#1e3a52] sm:text-[14px]">
                      {role}
                    </p>
                    {period && (
                      <p className="mt-[3px] text-[12.5px] leading-[1.4] text-[#51677a] sm:text-[13px]">
                        {period}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* ==================== LEADERSHIP & SOCIAL ==================== */}
          <article
            id="leadership"
            className="exp-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) 160ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 160ms`,
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />
            <CardHeader
              icon={Users}
              title="Leadership and Social Engagement"
            />

            <ul className="flex-1 px-[14px] pb-[14px] pt-[2px] sm:px-[15px]">
              {leadershipItems.map((item, index) => (
                <li
                  key={item}
                  className={`flex items-start gap-[10px] ${
                    index === leadershipItems.length - 1
                      ? "pb-[6px]"
                      : "py-[7px]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className="mt-[6px] h-[8px] w-[8px] shrink-0 rotate-45 rounded-[2px]"
                    style={{
                      background: "linear-gradient(145deg, #07518a, #0d6fad)",
                      boxShadow: "0 1px 4px rgba(7,81,138,0.35)",
                    }}
                  />
                  <p className="text-[13px] leading-[1.45] text-[#31495d] sm:text-[13.5px]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </article>

          {/* ==================== STRATEGIC COMMITMENT ==================== */}
          <article
            id="strategic-commitment"
            className="exp-card relative flex h-full flex-col overflow-hidden rounded-[10px] border border-white/85 bg-white/88 backdrop-blur-[10px]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted
                ? "translate3d(0,0,0)"
                : "translate3d(0,14px,0)",
              transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) 240ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 240ms`,
              boxShadow:
                "0 14px 40px rgba(7,81,138,0.10), 0 2px 10px rgba(7,81,138,0.06), inset 0 1px 0 rgba(255,255,255,0.95)",
            }}
          >
            <div
              aria-hidden="true"
              className="h-[3px] w-full shrink-0"
              style={{
                background:
                  "linear-gradient(90deg, #07518a 0%, #0a6aad 50%, #07518a 100%)",
              }}
            />
            <CardHeader icon={ShieldCheck} title="My Strategic Commitment to IEB" />

            <div className="grid flex-1 grid-cols-2 gap-[7px] px-[11px] pb-[12px] pt-[3px] sm:gap-[8px] sm:px-[12px]">
              {strategicItems.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="strategic-tile flex min-h-[76px] flex-col items-center justify-center rounded-[8px] border border-[#c4ddf0] px-[6px] py-[8px] text-center transition-all duration-200 sm:min-h-[80px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #eef5fb 0%, #ddeef8 100%)",
                  }}
                >
                  <div
                    className="strategic-icon mb-[6px] flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[8px] transition-all duration-300 sm:h-[32px] sm:w-[32px]"
                    style={{
                      background:
                        "linear-gradient(145deg, #07518a, #0d6fad)",
                      boxShadow:
                        "0 3px 10px rgba(7,81,138,0.24), inset 0 1px 0 rgba(255,255,255,0.18)",
                    }}
                  >
                    <Icon
                      size={14}
                      strokeWidth={2.1}
                      aria-hidden="true"
                      color="#fff"
                    />
                  </div>
                  <p className="text-[11.5px] font-semibold leading-[1.25] text-[#0d3a5c] sm:text-[12px]">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      {/* Bottom subtle border */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #bfd9ec 20%, #e8a020 50%, #bfd9ec 80%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      <style jsx>{`
        /* Card hover */
        @media (hover: hover) and (pointer: fine) {
          .exp-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 20px 50px rgba(7, 81, 138, 0.16),
              0 4px 14px rgba(7, 81, 138, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.95);
          }
          .exp-card:hover .card-icon {
            transform: scale(1.06);
            box-shadow:
              0 6px 16px rgba(7, 81, 138, 0.32),
              0 0 0 3px rgba(232, 160, 32, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.22);
          }
          .strategic-tile:hover {
            transform: translateY(-2px);
            border-color: #9fc7e2;
            box-shadow: 0 8px 20px rgba(7, 81, 138, 0.12);
          }
          .strategic-tile:hover .strategic-icon {
            transform: scale(1.08);
          }
        }

        /* Touch feedback */
        @media (hover: none) {
          .exp-card:active {
            transform: scale(0.99);
            transition: transform 100ms ease;
          }
          .strategic-tile:active {
            transform: scale(0.96);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .exp-card,
          .strategic-tile {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}