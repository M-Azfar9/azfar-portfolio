"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard } from "@/components/ui/BentoCard";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden z-10 -mt-24 sm:-mt-44 min-h-[440px] sm:min-h-[580px] flex flex-col justify-end">
      {/* Background Image: Distinct concentric dome/circle fade radiating from bottom center under contact section */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 85% 90% at 50% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 95%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 90% at 50% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 95%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-section-bg.webp"
          alt="Footer Background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "55% 85%",
            opacity: 0.7,
            filter: "blur(2px)",
            transform: "scale(1.05)",
          }}
        />
      </div>

      <div className="pt-28 sm:pt-48 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto w-full relative z-10">
        <BentoCard hoverEffect={false} className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left: Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <span className="font-hero text-2xl sm:text-3xl font-bold tracking-wider text-slate-900">
              AZFAR
            </span>
            <p className="text-xs font-sans text-slate-500">
              {personal.role} · NUST SEECS
            </p>
          </div>

          {/* Center: Quick Nav in Sora */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-xs sm:text-[13px] font-sora font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors py-1">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600 transition-colors py-1">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 transition-colors py-1">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors py-1">
              Contact
            </a>
          </nav>

          {/* Right: Back to Top */}
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-black hover:border-slate-400 shadow-xs font-mono text-xs font-semibold transition-all active:scale-95 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </BentoCard>
      </div>
    </footer>
  );
}
