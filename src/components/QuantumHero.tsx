"use client";

import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { portfolioData } from "@/data/portfolioData";

const DynamicQuantumCosmos = dynamic(
  () => import("./canvas/QuantumCosmosCanvas"),
  { ssr: false }
);

export default function QuantumHero() {
  const { personal } = portfolioData;

  return (
    <>
      <section className="relative w-full min-h-[100svh] sm:min-h-[700px] flex items-center overflow-hidden select-none bg-[#f8fafc]">
        {/* Background Image: Directly visible with object-cover and cache-busting */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-section-bg.webp?v=2"
        alt="Quantum Horizons Cosmic Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        style={{ imageRendering: "-webkit-optimize-contrast" }}
      />

      {/* Interactive R3F 3D Moving Stars Canvas (Circular dots on top of image) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <DynamicQuantumCosmos />
      </div>

      {/* Hero UI Content (z-20 on top of image and stars) */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-5 sm:px-12 lg:px-16 flex flex-col justify-center h-full pt-20 sm:pt-16 pb-12 sm:pb-0">
        <div className="max-w-4xl flex flex-col">
          {/* Eyebrow Pill with translucent frosted glass, contrast black font, and staggered entrance */}
          <div 
            className="hero-enter-1 inline-flex items-center px-3.5 sm:px-4 py-1.5 rounded-full w-fit text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] text-black font-extrabold uppercase mb-4 sm:mb-5"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.48)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.75)",
              boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.05)"
            }}
          >
            <span>{personal.eyebrow}</span>
          </div>

          {/* Main Title using Deltha Font with Ultra-Bold Weight and Specular Light Shimmer */}
          <div className="flex flex-col">
            <h1 className="font-hero font-black text-3xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[86px] tracking-[0.02em] sm:tracking-[0.03em] leading-[0.94] uppercase select-none">
              <span className="block overflow-hidden py-0.5">
                <span className="hero-title-line-1 relative block">
                  <span className="hero-ultra-bold block text-black font-black">
                    MUHAMMAD
                  </span>
                  <span
                    aria-hidden="true"
                    className="hero-ultra-bold hero-shimmer-sheen absolute inset-0 block select-none pointer-events-none"
                  >
                    MUHAMMAD
                  </span>
                </span>
              </span>
              <span className="block overflow-hidden py-0.5">
                <span className="hero-title-line-2 relative block">
                  <span className="hero-ultra-bold block text-black font-black">
                    AZFAR
                  </span>
                  <span
                    aria-hidden="true"
                    className="hero-ultra-bold hero-shimmer-sheen absolute inset-0 block select-none pointer-events-none"
                  >
                    AZFAR
                  </span>
                </span>
              </span>
            </h1>

            {/* Tagline with staggered entrance */}
            <p className="hero-enter-3 font-inter font-black text-xs sm:text-lg lg:text-2xl tracking-[0.08em] sm:tracking-[0.16em] lg:tracking-[0.22em] text-black uppercase mt-3 sm:mt-4">
              {personal.tagline}
            </p>
          </div>

          {/* Description with staggered entrance */}
          <p className="hero-enter-3 font-inter font-semibold text-xs sm:text-sm md:text-base text-black/85 max-w-xl leading-relaxed mt-3 sm:mt-4">
            From intelligent AI workflows to cross-platform applications, turning complex ideas into practical software.
          </p>

          {/* Action Buttons: Primary "Resume" and Secondary "Contact Me" with tactile active & hover depth */}
          <div className="hero-enter-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-10">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button font-inter font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-lg group hover:-translate-y-0.5 active:scale-[0.96] transition-all duration-200"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="rounded-full border-2 border-black bg-transparent text-black font-inter font-bold text-xs sm:text-sm px-8 py-3.5 flex items-center justify-center cursor-pointer hover:bg-black hover:text-white hover:-translate-y-0.5 hover:shadow-md active:scale-[0.96] transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Center: Scroll to explore */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[11px] font-mono text-black font-bold tracking-wider hover:opacity-70 transition-opacity"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 text-black animate-bounce stroke-[2.5]" />
      </a>

      {/* Right margin pagination dots with smooth active stretch & hover transition */}
      <div className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-3">
        <a href="#" className="w-2.5 h-6 rounded-full bg-black shadow-md transition-all duration-300" aria-label="Hero" />
        <a href="#about" className="w-2 h-2 rounded-full bg-black/35 hover:bg-black hover:h-4 active:scale-90 transition-all duration-200 cursor-pointer" aria-label="About" />
        <a href="#projects" className="w-2 h-2 rounded-full bg-black/35 hover:bg-black hover:h-4 active:scale-90 transition-all duration-200 cursor-pointer" aria-label="Projects" />
        <a href="#experience" className="w-2 h-2 rounded-full bg-black/35 hover:bg-black hover:h-4 active:scale-90 transition-all duration-200 cursor-pointer" aria-label="Experience" />
        <a href="#skills" className="w-2 h-2 rounded-full bg-black/35 hover:bg-black hover:h-4 active:scale-90 transition-all duration-200 cursor-pointer" aria-label="Skills" />
        <a href="#contact" className="w-2 h-2 rounded-full bg-black/35 hover:bg-black hover:h-4 active:scale-90 transition-all duration-200 cursor-pointer" aria-label="Contact" />
      </div>
    </section>

    {/* 20% Mirror Reflection Transition Zone into Light Theme (#f8fafc) */}
    <div 
      className="relative w-full h-[20vh] min-h-[140px] max-h-[240px] overflow-hidden select-none bg-[#f8fafc] pointer-events-none -mt-[1px]"
      aria-hidden="true"
    >
      {/* Exact Vertically Flipped Mirror of the Hero Bottom */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-section-bg.webp?v=2"
        alt=""
        className="absolute inset-x-0 w-full h-[500%] object-cover object-center pointer-events-none"
        style={{
          top: "-500%",
          transformOrigin: "bottom center",
          transform: "scaleY(-1)",
          imageRendering: "-webkit-optimize-contrast",
        }}
      />

      {/* Smooth Dissolve into Light Theme Background (#f8fafc) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(248, 250, 252, 0.0) 0%, rgba(248, 250, 252, 0.25) 30%, rgba(248, 250, 252, 0.70) 65%, #f8fafc 100%)",
        }}
      />
    </div>
  </>
  );
}
