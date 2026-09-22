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

type PriorityItem = {
  icon: LucideIcon;
  title: string;
};

const priorities: PriorityItem[] = [
  { icon: Users,         title: "Engineers' Rights, Dignity & Welfare" },
  { icon: TrendingUp,    title: "Professional Development & Knowledge Sharing" },
  { icon: Link2,         title: "Collaboration: Senior & Young Engineers" },
  { icon: ShieldCheck,   title: "Young Engineers' Empowerment" },
  { icon: MessageSquare, title: "Inclusive Member Engagement" },
  { icon: Globe2,        title: "National Development through Engineering" },
];

export default function VisionPriorities() {
  return (
    <aside className="flex h-full flex-col gap-[12px]">

      {/* VISION CARD */}
      <div
        className="overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        aria-labelledby="vision-heading"
      >
        <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
        <div className="px-[14px] pb-[14px] pt-[11px]">
          <div className="mb-[10px] flex items-center gap-[10px]">
            <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
            <h2 id="vision-heading" className="text-[16px] font-bold leading-none text-[#0b3f6c]">
              My Vision for IEB
            </h2>
          </div>
          <div className="flex items-start gap-[10px]">
            <div
              className="mt-[2px] flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px]"
              style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 2px 8px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
            >
              <Target size={17} strokeWidth={2.1} color="#fff" aria-hidden="true" />
            </div>
            <p className="text-[14.5px] font-semibold italic leading-[1.45] text-[#173b5c]">
              &ldquo;A stronger, inclusive, and forward-looking IEB focused on professional excellence, engineers' development, and national progress.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* PRIORITIES CARD */}
      <div
        className="flex flex-1 flex-col overflow-hidden rounded-[5px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        aria-labelledby="priorities-heading"
      >
        <div className="h-[3px] w-full shrink-0" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad,#07518a)" }} />
        <div className="flex flex-1 flex-col px-[14px] pb-[10px] pt-[11px]">
          <div className="mb-[10px] flex shrink-0 items-center gap-[10px]">
            <div className="h-[3px] w-[28px] rounded-full" style={{ background: "linear-gradient(90deg,#07518a,#0a6aad)" }} />
            <h2 id="priorities-heading" className="text-[16px] font-bold leading-none text-[#0b3f6c]">
              My Key Priorities
            </h2>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            {priorities.map(({ icon: Icon, title }, index) => (
              <div
                key={title}
                className="flex items-center gap-[11px] py-[8px]"
                style={{ borderBottom: index < priorities.length - 1 ? "1px solid #eaf0f6" : "none" }}
              >
                <div
                  className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[7px]"
                  style={{ background: "linear-gradient(145deg,#07518a,#0d6fad)", boxShadow: "0 2px 6px rgba(7,81,138,0.22),inset 0 1px 0 rgba(255,255,255,0.15)" }}
                >
                  <Icon size={15} strokeWidth={2.1} color="#fff" aria-hidden="true" />
                </div>
                <p className="text-[14px] font-semibold leading-[1.28] text-[#0d3a5c]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </aside>
  );
}
