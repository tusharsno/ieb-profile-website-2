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
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      if (window.innerWidth >= 1024) setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallaxOffset = scrollY * 0.18;

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#eef6fc]

        lg:flex
        lg:h-[420px]
      "
    >
      {/* =========================================================
          LEFT SIDE
          Current successful treatment preserved:
          background + quotation + integrated transparent portrait
      ========================================================== */}
      <div
        className="
          relative
          h-[320px]
          w-full
          overflow-hidden

          sm:h-[360px]

          lg:h-full
          lg:w-[32%]
          lg:shrink-0
        "
      >
        {/* Background */}
        <Image
          src="/images/hero/backgroundImage.jpeg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 32vw, 100vw"
          className="object-cover"
          style={{
            objectPosition: "left 88%",
            filter: "saturate(1.03) contrast(1.02) brightness(1.01)",
          }}
        />

        {/* Left readability treatment */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg," +
              "rgba(3,40,67,0.38) 0%," +
              "rgba(4,57,83,0.18) 28%," +
              "rgba(7,81,110,0.06) 52%," +
              "rgba(7,81,110,0) 76%)",
          }}
        />

        {/* Subtle portrait integration glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[2%]
            right-[2%]
            z-[8]
            hidden
            h-[90%]
            w-[73%]

            lg:block
          "
          style={{
            background:
              "radial-gradient(" +
              "ellipse at 50% 44%," +
              "rgba(255,255,255,0.14) 0%," +
              "rgba(255,255,255,0.08) 34%," +
              "rgba(227,242,250,0.025) 58%," +
              "rgba(227,242,250,0) 78%" +
              ")",
            filter: "blur(8px)",
          }}
        />

        {/* Handwritten left quotation */}
        <div
          className="
            pointer-events-none
            absolute
            left-[7.5%]
            top-[29%]
            z-20
            hidden
            w-[28%]

            lg:block
          "
        >
          <p
            className={`${dancingScript.className} text-white`}
            style={{
              fontSize: "clamp(17px, 1.4vw, 23px)",
              lineHeight: 1.04,
              fontWeight: 600,
              letterSpacing: "-0.015em",
              textShadow:
                "0 1px 3px rgba(0,31,55,0.42), 0 0 7px rgba(0,31,55,0.12)",
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

          <div
            aria-hidden="true"
            className="mt-[12px] h-[2px] w-[30px] bg-white/90"
          />
        </div>

        {/* Candidate portrait — all screen sizes, fixed right positioning */}
        <div
          className="
            absolute
            bottom-0
            right-0
            z-10
            h-[104%]
            w-[72%]

            sm:right-[1.5%]
            sm:w-[60%]

            lg:right-[1.5%]
            lg:w-[72%]
          "
          style={{
            WebkitMaskImage:
              "linear-gradient(" +
              "to bottom," +
              "rgba(0,0,0,1) 0%," +
              "rgba(0,0,0,1) 86%," +
              "rgba(0,0,0,0.98) 91%," +
              "rgba(0,0,0,0.82) 96%," +
              "rgba(0,0,0,0.52) 100%)",
            maskImage:
              "linear-gradient(" +
              "to bottom," +
              "rgba(0,0,0,1) 0%," +
              "rgba(0,0,0,1) 86%," +
              "rgba(0,0,0,0.98) 91%," +
              "rgba(0,0,0,0.82) 96%," +
              "rgba(0,0,0,0.52) 100%)",
          }}
        >
          <Image
            src="/images/profile/harun-pic.png"
            alt="Engr. Mohammad Harun"
            fill
            priority
            sizes="(min-width: 1024px) 23vw, (min-width: 640px) 60vw, 72vw"
            className="object-contain object-bottom"
            style={{
              filter:
                "drop-shadow(0 10px 18px rgba(4,45,72,0.12)) drop-shadow(0 2px 4px rgba(0,0,0,0.07))",
            }}
          />
        </div>

        {/* Soft bottom anchoring */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[11]
            h-[12%]
          "
          style={{
            background:
              "linear-gradient(" +
              "180deg," +
              "rgba(7,71,105,0) 0%," +
              "rgba(7,67,98,0.04) 42%," +
              "rgba(6,57,87,0.10) 100%)",
          }}
        />
      </div>

      {/* =========================================================
          CENTER + RIGHT SIDE

          Restored treatment:
          - independent background crop
          - clean centre readability
          - clearer bridge/city/right artwork
          - minimal overlay over far-right visual
      ========================================================== */}
      <div
        className="
          relative
          min-h-[470px]
          flex-1
          overflow-hidden

          lg:min-h-0
        "
      >
        {/* Right-side background — independent crop */}
        <Image
          src="/images/hero/backgroundImage.jpeg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 68vw, 100vw"
          className="object-cover"
          style={{
            objectPosition: "62% 56%",
            filter: "saturate(1.08) contrast(1.05) brightness(0.99)",
            transform: `translateY(${parallaxOffset}px)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* =====================================================
            CENTRE READABILITY FADE

            Strong on the left/centre where text sits.
            Falls away before the bridge and hexagon artwork.
        ====================================================== */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(" +
              "90deg," +
              "rgba(247,251,255,1) 0%," +
              "rgba(247,251,255,1) 29%," +
              "rgba(247,251,255,0.985) 41%," +
              "rgba(245,250,254,0.94) 49%," +
              "rgba(239,247,253,0.78) 57%," +
              "rgba(228,241,251,0.48) 65%," +
              "rgba(216,235,249,0.20) 73%," +
              "rgba(207,230,248,0.05) 81%," +
              "rgba(207,230,248,0) 89%," +
              "rgba(207,230,248,0) 100%)",
          }}
        />

        {/* Soft top lighting — deliberately very light */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(" +
              "180deg," +
              "rgba(255,255,255,0.12) 0%," +
              "rgba(255,255,255,0.025) 42%," +
              "rgba(255,255,255,0) 68%)",
          }}
        />

        {/* =====================================================
            MAIN INFORMATION
        ====================================================== */}
        <div
          className="
            relative
            z-20
            flex
            min-h-[470px]
            items-center
            px-5
            py-7

            sm:px-8

            lg:absolute
            lg:inset-y-0
            lg:left-0
            lg:min-h-0
            lg:w-[68%]
            lg:px-[5.2%]
            lg:py-0
          "
        >
          <div
            className="w-full"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Tagline */}
            <div className="mb-[10px] flex items-center gap-[9px]">
              <div className="h-[2px] w-[20px] shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #e8a020, #c97d10)" }} />
              <p
                className="
                  text-[13px]
                  font-extrabold
                  uppercase
                  leading-none
                  tracking-[0.22em]
                  text-[#07518a]
                  lg:whitespace-nowrap
                  lg:text-[13.5px]
                "
              >
                PROFESSIONAL EXCELLENCE • UNITY • SERVICE • PROGRESS
              </p>
              <div className="h-[2px] w-[20px] shrink-0 rounded-full" style={{ background: "linear-gradient(90deg, #c97d10, #e8a020)" }} />
            </div>

            {/* Name */}
            <h1
              className="
                mb-[8px]
                text-[22px]
                font-extrabold
                leading-[1.03]
                tracking-[-0.018em]

                sm:text-[26px]

                lg:text-[24px]
              "
              style={{
                background: "linear-gradient(90deg, #06477d 0%, #0a6aad 50%, #06477d 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ENGR. MOHAMMAD HARUN
            </h1>

            {/* Position badge */}
            <div className="mb-[13px]">
              <span
                className="inline-flex min-h-[30px] items-center gap-[8px] rounded-[3px] px-[13px] py-[4px] text-[12px] font-extrabold uppercase tracking-[0.09em] text-white lg:text-[12.5px]"
                style={{
                  background: "linear-gradient(90deg, #07518a 0%, #0a6aad 60%, #07518a 100%)",
                  boxShadow: "0 2px 10px rgba(7,81,138,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <span aria-hidden="true" style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#e8a020", boxShadow: "0 0 5px rgba(232,160,32,0.75)", flexShrink: 0 }} />
                VICE CHAIRMAN CANDIDATE
              </span>
            </div>

            {/* Info card */}
            <div
              className="mb-[13px] overflow-hidden rounded-[5px] border border-[#c8dff0]/80 bg-white/60"
              style={{ boxShadow: "0 1px 8px rgba(7,81,138,0.08)" }}
            >
              <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
                <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#07518a,#0a6aad)" }} />
                <p className="text-[13.5px] font-semibold leading-[1.3] text-[#1a3a52] lg:text-[14px]">
                  Institution of Engineers, Bangladesh{" "}
                  <strong className="font-extrabold text-[#07518a]">(IEB)</strong>
                </p>
              </div>
              <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
              <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
                <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#e8a020,#c97d10)" }} />
                <p className="text-[13.5px] font-semibold leading-[1.3] text-[#1a3a52] lg:text-[14px]">
                  <strong className="font-extrabold text-[#07518a]">Fellow No. F/06550</strong>
                </p>
              </div>
              <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
              <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
                <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#07518a,#0a6aad)" }} />
                <p className="text-[13.5px] font-semibold text-[#1a3a52] lg:text-[14px]">
                  Education: <strong className="font-extrabold text-[#07518a]">B.Sc. Eng. (Electrical), CUET, 1981</strong>
                </p>
              </div>
              <div className="mx-[12px] h-px bg-[#d4e8f5]/90" />
              <div className="flex items-center gap-[10px] px-[12px] py-[7px]">
                <span aria-hidden="true" className="h-[26px] w-[3px] shrink-0 rounded-full" style={{ background: "linear-gradient(180deg,#e8a020,#c97d10)" }} />
                <p className="text-[13.5px] font-semibold text-[#1a3a52] lg:text-[14px]">
                  IEB Experience: <strong className="font-extrabold text-[#07518a]">Council Member (multiple terms)</strong>
                </p>
              </div>
            </div>

            {/* Centre + election pills */}
            <div className="mb-[15px] flex flex-wrap items-center gap-[7px]">
              <div
                className="flex items-center gap-[5px] rounded-full border border-[#c0d9ee] bg-white/70 px-[10px] py-[4px]"
                style={{ boxShadow: "0 1px 4px rgba(7,81,138,0.08)" }}
              >
                <MapPin size={12} strokeWidth={2.5} className="shrink-0 text-[#07518a]" />
                <span className="text-[12.5px] font-semibold text-[#164b75] lg:text-[13px]">
                  IEB Centre: <strong className="font-extrabold text-[#07518a]">Chittagong</strong>
                </span>
              </div>
              <div
                className="flex items-center gap-[5px] rounded-full border border-[#c0d9ee] bg-white/70 px-[10px] py-[4px]"
                style={{ boxShadow: "0 1px 4px rgba(7,81,138,0.08)" }}
              >
                <CalendarDays size={12} strokeWidth={2.5} className="shrink-0 text-[#07518a]" />
                <span className="text-[12.5px] font-semibold text-[#164b75] lg:text-[13px]">
                  Election: <strong className="font-extrabold text-[#07518a]">2026</strong>
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-[8px] lg:flex-nowrap">
              <Link
                href="/support"
                className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] px-[17px] text-[13.5px] font-bold text-white transition-all hover:brightness-110 lg:text-[14px]"
                style={{ background: "linear-gradient(135deg,#07518a 0%,#0a6aad 100%)", boxShadow: "0 2px 8px rgba(7,81,138,0.28)" }}
              >
                <ThumbsUp size={14} strokeWidth={2.3} className="shrink-0" />
                <span>Support My Campaign</span>
              </Link>
              <a
                href="/profile.pdf"
                aria-disabled="true"
                onClick={(e) => e.preventDefault()}
                className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] border border-[#c97d10]/40 bg-white/50 px-[17px] text-[13.5px] font-bold text-[#c97d10]/50 cursor-not-allowed select-none lg:text-[14px]"
                title="Profile PDF coming soon"
              >
                <Download size={14} strokeWidth={2.3} className="shrink-0" />
                <span>Download Profile</span>
              </a>
              <Link
                href="/contact"
                className="flex h-[37px] shrink-0 items-center justify-center gap-[6px] rounded-[4px] border border-[#1b5c8a]/60 bg-transparent px-[17px] text-[13.5px] font-bold text-[#07518a] transition-all hover:border-[#07518a] hover:bg-white/60 lg:text-[14px]"
              >
                <Send size={14} strokeWidth={2.3} className="shrink-0" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT HANDWRITTEN SLOGAN
            Kept entirely in the visually clear right region.
        ====================================================== */}
        <div
          className="
            pointer-events-none
            absolute
            right-[3.7%]
            top-[7%]
            z-30
            hidden
            w-[24%]
            justify-center

            lg:flex
          "
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
                  "0 1px 2px rgba(255,255,255,0.74)",
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

            <div
              aria-hidden="true"
              className="
                mx-auto
                mt-[9px]
                h-[2px]
                w-[33px]
                bg-[#164c78]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}