import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import { CalendarDays, MapPin } from "lucide-react";

const dancingScript = Dancing_Script({ subsets: ["latin"], weight: ["600"] });

const footerLinks = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Vision",     href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media",      href: "/media" },
  { label: "Contact",    href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: "linear-gradient(135deg,#06304f 0%,#07518a 50%,#06304f 100%)", borderTop: "3px solid #e8a020" }}>

      {/* MAIN ROW */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-full lg:max-w-[1200px] xl:max-w-[1320px]
          grid-cols-1
          items-center
          gap-5
          px-4 sm:px-6
          pt-[18px] pb-[14px]

          md:grid-cols-[auto_minmax(0,1fr)_auto]
          md:gap-6
        "
      >
        {/* LEFT — brand */}
        <div className="flex items-center gap-[13px]">
          <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center">
            <Image
              src="/images/branding/ieb-logo.png"
              alt="IEB logo"
              width={58}
              height={58}
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* vertical divider */}
          <span aria-hidden="true" className="hidden h-[44px] w-px bg-white/15 md:block" />

          <div className="min-w-0">
            <p className="whitespace-nowrap text-[15.5px] font-semibold leading-none text-white">
              Institution of Engineers, Bangladesh (IEB)
            </p>
            <p className="mt-[5px] text-[13px] leading-none text-white/55">
              Professionals for a Better Bangladesh
            </p>
            {/* pills */}
            <div className="mt-[8px] flex flex-wrap items-center gap-[6px]">
              <div className="flex items-center gap-[4px] rounded-full border border-white/15 bg-white/8 px-[8px] py-[3px]"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <MapPin size={10} strokeWidth={2.4} className="text-[#e8a020]" />
                <span className="text-[12px] font-medium text-white/70">Chittagong</span>
              </div>
              <div className="flex items-center gap-[4px] rounded-full border border-white/15 px-[8px] py-[3px]"
                style={{ background: "rgba(255,255,255,0.07)" }}>
                <CalendarDays size={10} strokeWidth={2.4} className="text-[#e8a020]" />
                <span className="text-[12px] font-medium text-white/70">Election 2026–27</span>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER — nav */}
        <nav aria-label="Footer navigation" className="flex justify-start md:justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-y-2">
            {footerLinks.map(({ label, href }, index) => (
              <li key={href} className="flex items-center">
                {index > 0 && (
                  <span aria-hidden="true" className="mx-[10px] text-[11px] text-white/25">|</span>
                )}
                <Link
                  href={href}
                  className="group relative whitespace-nowrap text-[14.5px] font-medium text-white/70 transition-colors hover:text-white"
                >
                  {label}
                  <span className="absolute -bottom-[2px] left-0 h-[1.5px] w-0 rounded-full bg-[#e8a020] transition-all duration-200 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT — slogan */}
        <div className="flex justify-start md:justify-end">
          <div className="text-left md:text-right">
            <p
              className={`${dancingScript.className} text-white`}
              style={{
                fontSize: "clamp(17px, 1.45vw, 23px)",
                lineHeight: 1.08,
                fontWeight: 600,
                textShadow: "0 1px 2px rgba(0,0,0,0.18)",
              }}
            >
              Engineering
              <br />
              for a Better Tomorrow
            </p>
            <div aria-hidden="true" className="mt-[7px] h-[2px] w-[34px] rounded-full bg-[#e8a020]/80 md:ml-auto" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-full flex-wrap items-center justify-between gap-2 px-4 py-[9px] sm:px-6 lg:max-w-[1200px] xl:max-w-[1320px]">
          <p className="text-[12.5px] text-white/40">
            © {new Date().getFullYear()} Engr. Mohammad Harun. All rights reserved.
          </p>
          <p className="text-[12.5px] text-white/40">
            IEB Vice Chairman Candidate — Chittagong Centre
          </p>
        </div>
      </div>

    </footer>
  );
}
