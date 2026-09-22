import { Users, GraduationCap, BookOpen, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; value: string; label: string; accentBlue: boolean }[] = [
  { icon: Users,          value: "35+",        label: "Years of Professional Experience",   accentBlue: true  },
  { icon: GraduationCap, value: "CUET 1981",   label: "B.Sc. Eng. (Electrical)",            accentBlue: false },
  { icon: BookOpen,       value: "IEB Council", label: "Multiple Terms as Council Member",  accentBlue: true  },
  { icon: Globe,          value: "BPDB",        label: "Bangladesh Power Development Board", accentBlue: false },
];

export default function StatsStrip() {
  return (
    <div
      className="w-full"
      style={{
        background: "#f0f6fb",
        borderTop: "1px solid #d0e4f0",
        borderBottom: "1px solid #d0e4f0",
      }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map(({ icon: Icon, value, label, accentBlue }, i) => {
          const accent = accentBlue ? "#07518a" : "#c97d10";
          const iconColor = accentBlue ? "#07518a" : "#c97d10";
          const valueColor = accentBlue ? "#07518a" : "#c97d10";

          return (
            <div
              key={label}
              className="group relative flex items-center gap-[12px] px-4 py-5 sm:px-8 lg:px-10 lg:py-6"
            >
              {/* dividers */}
              {i % 2 === 0 && (
                <span className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#c8dff0]" style={{ height: "55%" }} />
              )}
              {i < 2 && (
                <span className="lg:hidden absolute bottom-0 left-[8%] right-[8%] h-px bg-[#c8dff0]" />
              )}
              {i < 3 && (
                <span className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#c8dff0]" style={{ height: "55%" }} />
              )}

              {/* Icon container */}
              <div
                className="shrink-0 flex items-center justify-center rounded-[8px] transition-transform duration-200 group-hover:scale-105"
                style={{
                  width: 46,
                  height: 46,
                  background: `linear-gradient(135deg, ${accent}18 0%, ${accent}30 100%)`,
                  border: `1.5px solid ${accent}44`,
                  boxShadow: `0 2px 8px ${accent}22`,
                }}
              >
                <Icon size={24} strokeWidth={2.1} color={iconColor} />
              </div>

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <span
                  className="text-[17px] font-extrabold leading-tight tracking-[-0.01em]"
                  style={{ color: valueColor, display: "inline-block" }}
                >
                  {value}
                </span>
                <span className="mt-[2px] text-[13px] font-medium leading-snug text-[#4a6a85]">
                  {label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
