import { Briefcase, GraduationCap, ImageIcon, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavigationItem = {
  icon: LucideIcon;
  label: string;
  href: string;
};

const tabs: NavigationItem[] = [
  {
    icon: GraduationCap,
    label: "Education",
    href: "#education",
  },
  {
    icon: Briefcase,
    label: "Professional Journey",
    href: "#experience",
  },
  {
    icon: Users,
    label: "IEB Experience",
    href: "#ieb-experience",
  },
  {
    icon: ImageIcon,
    label: "Media Gallery",
    href: "#gallery",
  },
];

export default function MessageSection() {
  return (
    <section
      className="
        flex min-h-0
        min-w-0
        flex-col
      "
      aria-labelledby="message-heading"
    >
      {/* Section heading */}
      <div className="mb-[10px] flex items-center gap-[10px]">
        <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
        <h2
          id="message-heading"
          className="text-[16px] font-bold leading-none text-[#0b3f6c]"
        >
          A Message to Fellow Engineers
        </h2>
      </div>

      {/* Message body */}
      <div
        className="min-w-0 overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
      >
        {/* Letter top accent */}
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />

        <div className="px-[16px] pb-[14px] pt-[13px]">
          <p className="text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Dear Fellow Engineers,</p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Assalamu Alaikum.</p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            Engineering is not only a profession; it is a responsibility to society, the nation, and future generations. The Institution of Engineers, Bangladesh has an important role in upholding professional values, advancing technical knowledge, and strengthening the contribution of engineers to national development.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            With my experience in the power sector, professional activities, and engagement with IEB, I seek to contribute to the continued development of our institution as a candidate for Vice Chairman of the IEB Chittagong Centre.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            My focus is on professional development, knowledge sharing, the participation of young engineers, and constructive collaboration among members. I believe that a strong professional institution is built through mutual respect, transparency, service, and collective effort.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">
            I value the experience of senior engineers, the energy and innovation of young engineers, and the contributions of professionals across every engineering discipline.
          </p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">Let us work toward an IEB that promotes professional dignity, encourages excellence, and creates meaningful opportunities for its members.</p>

          <p className="mt-[7px] text-[15px] leading-[1.45] text-[#32495d] lg:text-[15.5px]">I seek your trust and support.</p>

          {/* Signature space */}
          <div className="mt-[10px] border-t border-[#e2eaf0] pt-[7px]">
            <p className="text-[14px] font-semibold text-[#07518a]">
              — Engr. Mohammad Harun
            </p>
            <p className="text-[13px] text-[#07518a] mt-[4px]">
              Vice Chairman Candidate • IEB Chittagong Centre | Election 2026
            </p>
          </div>
        </div>
      </div>

      {/* Navigation row */}
      <nav aria-label="Profile sections" className="mt-auto pt-[12px]">
        <div className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_5px_rgba(15,58,91,0.06)]">
          {tabs.map(({ icon: Icon, label, href }, index) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-[12px] px-[14px] py-[11px] transition-all hover:bg-[#f0f6fb]"
              style={{
                borderBottom: index < tabs.length - 1 ? "1px solid #e8eef4" : "none",
              }}
            >
              {/* Left accent bar */}
              <span
                aria-hidden="true"
                className="shrink-0 rounded-full transition-all duration-200"
                style={{ width:3, height:28, background:"linear-gradient(180deg,#07518a,#1a7fc1)", opacity:0.18 }}
              />
              {/* Icon */}
              <div
                className="flex shrink-0 items-center justify-center rounded-[7px] transition-all duration-200 group-hover:scale-105"
                style={{ width:32, height:32, background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 2px 8px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
              >
                <Icon size={15} strokeWidth={2.1} aria-hidden="true" color="#fff" />
              </div>
              {/* Label */}
              <span className="flex-1 text-[14px] font-semibold leading-none text-[#0d3a5c] transition-colors group-hover:text-[#07518a]">
                {label}
              </span>
              {/* Arrow */}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#b0c8dc] transition-all duration-200 group-hover:translate-x-[2px] group-hover:text-[#07518a]">
                <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}
