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
    <footer className="relative w-full z-10 pt-2 pb-10 sm:pb-16 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto">
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

        {/* Center: Quick Nav in Sora with Floating Frosted Glass Capsule Card on Hover */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-sora font-semibold text-slate-800">
          <a
            href="#about"
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-slate-800 font-semibold border border-transparent transition-all duration-200 ease-out hover:bg-white/95 hover:backdrop-blur-md hover:border-slate-200/90 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-slate-800 font-semibold border border-transparent transition-all duration-200 ease-out hover:bg-white/95 hover:backdrop-blur-md hover:border-slate-200/90 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-slate-800 font-semibold border border-transparent transition-all duration-200 ease-out hover:bg-white/95 hover:backdrop-blur-md hover:border-slate-200/90 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="px-3.5 sm:px-4 py-1.5 rounded-full text-slate-800 font-semibold border border-transparent transition-all duration-200 ease-out hover:bg-white/95 hover:backdrop-blur-md hover:border-slate-200/90 hover:shadow-xs hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
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
    </footer>
  );
}
