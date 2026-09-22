"use client";

import Link from "next/link";
import Image from "next/image";
import { Send, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Vision & Priorities", href: "/vision-priorities" },
  { label: "Experience", href: "/experience" },
  { label: "Media", href: "/media" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`
        w-full fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md"
            : "shadow-[0_2px_12px_rgba(0,0,0,0.22)]"
        }
      `}
      style={{
        background: scrolled
          ? "linear-gradient(135deg, rgba(4,22,42,0.97) 0%, rgba(5,26,48,0.97) 45%, rgba(7,32,58,0.97) 100%)"
          : "linear-gradient(135deg, #062d52 0%, #07345b 45%, #0a4272 100%)",
      }}
    >
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#1a6fad] via-[#4fa3d8] to-[#1a6fad]" />

      <div
        className={`
          w-full px-4 sm:px-6 flex items-center justify-between
          transition-all duration-300
          ${ scrolled ? "h-[56px]" : "h-[68px]" }
        `}
      >
        {/* Branding */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div
            className={`
              flex items-center justify-center shrink-0
              transition-all duration-300
              ${ scrolled ? "h-10 w-10" : "h-14 w-14" }
            `}
          >
            <Image
              src="/images/branding/ieb-logo.png"
              alt="IEB logo"
              width={64}
              height={64}
              className="object-contain block h-full w-auto drop-shadow-md"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className={`
                font-bold text-white tracking-[-0.01em]
                group-hover:text-white/90 transition-all duration-300
                ${ scrolled ? "text-[15.5px]" : "text-[17px]" }
              `}
            >
              Institution of Engineers, Bangladesh
            </span>
            <span
              className={`
                text-[#7ab8dc] font-medium tracking-[0.01em]
                transition-all duration-300
                ${ scrolled ? "text-[12.5px]" : "text-[13.5px]" }
              `}
            >
              Professionals for a Better Bangladesh
            </span>
          </div>
        </Link>

        {/* Desktop Nav + CTA */}
        <div className="hidden lg:flex items-center gap-7">
          <div className="h-8 w-px bg-white/15" />

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`
                        relative px-3 py-2 text-[13.5px] font-medium whitespace-nowrap
                        transition-colors duration-150
                        after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px]
                        after:rounded-full after:bg-[#4fa3d8]
                        after:transition-transform after:duration-200 after:origin-left
                        ${
                          isActive
                            ? "text-white after:scale-x-100"
                            : "text-white/75 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="h-8 w-px bg-white/15" />

          <Link
            href="/support"
            className="
              shrink-0 flex items-center gap-2
              bg-gradient-to-b from-[#e8a020] to-[#c97d10]
              hover:from-[#f0aa28] hover:to-[#d98818]
              text-white text-[13.5px] font-bold
              px-5 py-2 rounded-[5px]
              shadow-[0_2px_6px_rgba(0,0,0,0.25)]
              transition-all duration-150
              whitespace-nowrap
            "
          >
            <Send size={13} className="shrink-0" />
            Support My Campaign
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-[5px] text-white hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Backdrop for outside click */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile dropdown — animated */}
      <div
        className={`
          relative z-50 lg:hidden overflow-hidden
          transition-all duration-300 ease-in-out
          ${ menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0" }
        `}
        style={{
          background: "linear-gradient(180deg, #073660 0%, #062d52 100%)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
        }}
      >
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col px-3 py-2">
            {navLinks.map(({ label, href }, index) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`
                      flex items-center gap-2 py-3 px-3 text-[14px] font-medium
                      rounded-[4px] transition-colors
                      ${
                        isActive
                          ? "text-white bg-white/10"
                          : "text-white/80 hover:text-white hover:bg-white/08"
                      }
                    `}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-[#4fa3d8] text-[11px] font-bold w-4 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 pb-2 px-3">
              <Link
                href="/support"
                className="flex items-center justify-center gap-2 bg-gradient-to-b from-[#e8a020] to-[#c97d10] text-white text-[14px] font-bold px-4 py-2.5 rounded-[5px] transition-all shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                <Send size={13} className="shrink-0" />
                Support My Campaign
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
