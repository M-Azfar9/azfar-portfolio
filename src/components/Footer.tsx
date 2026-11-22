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
    <footer className="relative w-full border-t border-slate-200/80 overflow-hidden z-20">
      {/* Background Image: Left corner concentric fade from bottom */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 50% 100% at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 100% at 0% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 80%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-section-bg.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
          style={{
            opacity: 0.7,
            filter: "blur(8px)",
            transform: "scale(1.05)",
          }}
        />
      </div>

      {/* Background Image: Right corner concentric fade from bottom */}
      <div 
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 50% 100% at 100% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 50% 100% at 100% 100%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0) 80%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-section-bg.webp"
          alt=""
          className="w-full h-full object-cover object-bottom"
          style={{
            opacity: 0.7,
            filter: "blur(8px)",
            transform: "scale(1.05)",
          }}
        />
      </div>

      <div className="py-14 px-6 sm:px-12 lg:px-16 max-w-[1360px] mx-auto relative z-10">
        <BentoCard className="p-8 sm:p-10 flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Identity in Deltha */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-3">
            <span className="font-hero text-2xl sm:text-3xl font-bold tracking-wider text-slate-900">
              AZFAR
            </span>
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono text-[10px] font-semibold border border-slate-200">
              v2026
            </span>
          </div>
          <p className="text-xs font-sans text-slate-500">
            {personal.role} · NUST SEECS
          </p>
        </div>

        {/* Center: Quick Nav in Sora */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-sora font-semibold text-slate-600">
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Right: Telemetry & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500">
            © 2026 {personal.name}
          </span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 hover:text-black hover:border-slate-400 shadow-xs font-mono text-xs font-semibold transition-all cursor-pointer"
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
