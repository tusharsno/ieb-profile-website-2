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

const cardAccents = {
  education:  { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
  experience: { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
  leadership: { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
  strategic:  { bg: "linear-gradient(145deg,#07518a,#0d6fad)", border: "1.5px solid rgba(13,111,173,0.35)", shadow: "0 4px 12px rgba(7,81,138,0.28),inset 0 1px 0 rgba(255,255,255,0.15)", ring: "0 0 0 3px rgba(7,81,138,0.10)",  dot: "linear-gradient(145deg,#07518a,#0d6fad)", dotShadow: "rgba(7,81,138,0.30)",  line: "#b8d8ee" },
} as const;

type AccentKey = keyof typeof cardAccents;

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
  {
    icon: ShieldCheck,
    title: "Professional Development",
  },
  {
    icon: TrendingUp,
    title: "Young Engineers' Empowerment",
  },
  {
    icon: Link2,
    title: "Engineers' Welfare & Dignity",
  },
  {
    icon: Users,
    title: "Technical Knowledge & Innovation",
  },
  {
    icon: MessageSquare,
    title: "Inclusive Member Engagement",
  },
  {
    icon: Globe2,
    title: "Stronger Professional Networking",
  },
];

type CardHeaderProps = {
  icon: LucideIcon;
  title: string;
  accentKey: AccentKey;
};

function CardHeader({ icon: Icon, title, accentKey }: CardHeaderProps) {
  const a = cardAccents[accentKey];
  return (
    <div className="flex min-h-[45px] items-center gap-[11px] px-[14px] pt-[11px] pb-[8px]">
      <div style={{ width:34, height:34, borderRadius:8, background:a.bg, border:a.border, boxShadow:`${a.shadow}, ${a.ring}`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
        <Icon size={17} strokeWidth={2.1} aria-hidden="true" color="#fff" />
      </div>
      <h3 className="text-[16px] font-bold leading-[1.18] text-[#0b3f6c]">{title}</h3>
    </div>
  );
}

export default function ExperienceCards() {
  return (
    <section
      style={{
        width: "100%",
        background: "#f0f6fb",
        borderTop: "1px solid #d0e4f0",
        borderBottom: "1px solid #d0e4f0",
        paddingTop: 13,
        paddingBottom: 13,
      }}
      aria-label="Education, professional experience, leadership and strategic commitments"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
          grid-cols-1
          items-stretch
          gap-[14px]
          px-4 sm:px-6

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        {/* =====================================================
            MY EDUCATION
        ====================================================== */}
        <article
          id="education"
          className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        >
          <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
          <CardHeader icon={GraduationCap} title="My Education" accentKey="education" />
          <div className="relative px-[14px] pb-[13px] pt-[1px]">
            <span aria-hidden="true" className="absolute bottom-[24px] left-[18px] top-[8px] w-px" style={{ background: cardAccents.education.line }} />
            <div className="relative flex flex-col">
              {educationItems.map(({ degree, institution, period }, index) => (
                <div key={degree} className={`relative pl-[20px] pr-[2px] ${index === educationItems.length - 1 ? "pb-[7px]" : "py-[7px]"}`}>
                  <div aria-hidden="true" style={{ position:"absolute", left:-1, top:8, width:8, height:8, borderRadius:"50%", background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 4px rgba(7,81,138,0.30)", zIndex:10 }} />
                  <p className="text-[16px] font-bold leading-[1.25] text-[#0b416e]">{degree}</p>
                  <p className="mt-[2px] text-[14.5px] leading-[1.3] text-[#51677a]">{institution}{period ? ` (${period})` : ""}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* =====================================================
            MY PROFESSIONAL EXPERIENCE
        ====================================================== */}
        <article
          id="experience"
          className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        >
          <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
          <CardHeader icon={BriefcaseBusiness} title="My Professional Experience" accentKey="experience" />
          <div className="relative px-[14px] pb-[13px] pt-[1px]">
            <span aria-hidden="true" className="absolute bottom-[24px] left-[18px] top-[8px] w-px" style={{ background: cardAccents.experience.line }} />
            <div className="relative flex flex-col">
              {experienceItems.map(({ role, period }, index) => (
                <div key={role} className={`relative pl-[20px] pr-[2px] ${index === experienceItems.length - 1 ? "pb-[6px]" : "py-[6px]"}`}>
                  <div aria-hidden="true" style={{ position:"absolute", left:-1, top:8, width:8, height:8, borderRadius:"50%", background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 4px rgba(7,81,138,0.30)", zIndex:10 }} />
                  <p className="text-[15px] font-medium leading-[1.28] text-[#31495d]">{role}{period ? ` (${period})` : ""}</p>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* =====================================================
            LEADERSHIP & SOCIAL ENGAGEMENT
        ====================================================== */}
        <article
          id="leadership"
          className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        >
          <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
          <CardHeader icon={Users} title="Leadership and Social Engagement" accentKey="leadership" />
          <ul className="px-[15px] pb-[13px] pt-[2px]">
            {leadershipItems.map((item, index) => (
              <li key={item} className={`flex items-start gap-[9px] ${index === leadershipItems.length - 1 ? "pb-[7px]" : "py-[7px]"}`}>
                <div aria-hidden="true" style={{ marginTop:6, width:8, height:8, borderRadius:2, background:"linear-gradient(145deg,#07518a,#0d6fad)", boxShadow:"0 1px 3px rgba(7,81,138,0.30)", flexShrink:0, transform:"rotate(45deg)" }} />
                <p className="text-[15px] leading-[1.32] text-[#31495d]">{item}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* =====================================================
            MY STRATEGIC COMMITMENT TO IEB
        ====================================================== */}
        <article
          id="strategic-commitment"
          className="h-full overflow-hidden rounded-[8px] border border-[#dce6ee] bg-white shadow-[0_2px_6px_rgba(15,58,91,0.07)]"
        >
          <div style={{ height:3, background:"linear-gradient(90deg,#07518a,#1a7fc1)" }} />
          <CardHeader icon={ShieldCheck} title="My Strategic Commitment to IEB" accentKey="strategic" />
          <div className="grid grid-cols-2 gap-[7px] px-[10px] pb-[11px] pt-[1px]">
            {strategicItems.map(({ icon: Icon, title }) => (
              <div key={title} className="flex min-h-[72px] flex-col items-center justify-center rounded-[6px] px-[6px] py-[8px] text-center" style={{ background:"linear-gradient(135deg,#eef5fb,#ddeef8)", border:"1px solid #c4ddf0" }}>
                <div style={{ width:30, height:30, borderRadius:7, background:cardAccents.strategic.bg, boxShadow:`${cardAccents.strategic.shadow}, ${cardAccents.strategic.ring}`, display:"flex", alignItems:"center", justifyContent:"center", marginBottom:5, flexShrink:0 }}>
                  <Icon size={14} strokeWidth={2.1} aria-hidden="true" color="#fff" />
                </div>
                <p className="text-[14px] font-semibold leading-[1.22] text-[#0d3a5c]">{title}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
