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

type InfoItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const infoItems: InfoItem[] = [
  {
    icon: User,
    label: "Name",
    value: "Engr. Mohammad Harun",
  },
  {
    icon: Award,
    label: "Position",
    value: "Vice Chairman Candidate",
  },
  {
    icon: Award,
    label: "Fellow No.",
    value: "F/06550",
  },
  {
    icon: Users,
    label: "IEB Panel",
    value: "Chittagong Centre",
  },
  {
    icon: MapPin,
    label: "IEB Centre",
    value: "Chittagong",
  },
  {
    icon: Briefcase,
    label: "Profession",
    value: "Electrical Engineer",
  },
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
  {
    icon: Award,
    label: "Experience",
    value: "35+ Years",
  },
  {
    icon: BookOpen,
    label: "IEB Experience",
    value: "Council Member (multiple terms); Joint-Convener, Training & PD (2018–19)",
  },
];

export default function QuickInfo() {
  return (
    <aside
      className="
        flex flex-col
        overflow-hidden
        rounded-[5px]
        border border-[#d9e4ed]
        bg-white
        shadow-[0_2px_6px_rgba(15,58,91,0.08)]
      "
      aria-labelledby="quick-information-heading"
    >
      {/* Header */}
      <div
        className="
          flex h-[42px]
          items-center
          bg-[#07518a]
          px-[14px]
        "
      >
        <h2
          id="quick-information-heading"
          className="
            text-[16px]
            font-bold
            leading-none
            text-white
          "
        >
          Quick Information
        </h2>
      </div>

      {/* Information rows */}
      <div>
        {infoItems.map(({ icon: Icon, label, value }, index) => (
          <div
            key={label}
            className={`
              grid
              grid-cols-[18px_minmax(80px,100px)_minmax(0,1fr)]
              items-start
              gap-x-[6px]
              px-[12px]
              py-[7px]
              ${index < infoItems.length - 1 ? "border-b border-[#e4ebf1]" : ""}
            `}
          >
            <Icon
              size={14}
              strokeWidth={2.2}
              aria-hidden="true"
              className="
                mt-[1px]
                shrink-0
                text-[#07518a]
              "
            />

            <span
              className="
                pt-[1px]
                text-[15px]
                font-semibold
                leading-[1.25]
                text-[#21384d]
              "
            >
              {label}
            </span>

            <span
              className="
                min-w-0
                text-[14px]
                font-medium
                leading-[1.3]
                text-[#263b4d]
              "
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Contact button */}
      <div className="px-[12px] pb-[10px] pt-[8px] border-t border-[#e4ebf1]">
        <a
          href="/contact"
          className="
            flex h-[29px]
            w-full
            items-center
            justify-center
            gap-[6px]
            rounded-[3px]
            bg-[#07518a]
            text-[15.5px]
            font-semibold
            text-white
            transition-colors
            hover:bg-[#043f70]
          "
        >
          <Mail
            size={12}
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <span>Get in Touch</span>
        </a>
      </div>
    </aside>
  );
}
