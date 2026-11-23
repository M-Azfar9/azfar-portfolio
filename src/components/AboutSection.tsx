"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import { User, Briefcase, Smartphone, ShieldCheck, GitBranch } from "lucide-react";

export default function AboutSection() {
  const { personal, experience } = portfolioData;
  const currentRole = experience[0];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        title="About & Engineering Vision"
        description="How I approach software engineering: combining practical AI agents and LLM workflows with solid mobile architecture to solve real-world problems."
      />

      {/* 12-Column Balanced Bento Grid with Equal Height Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
        {/* ROW 1: Card 1 - Executive Narrative (Col 6) with Reflective Bokeh Hover State */}
        <BentoCard
          variant="highlight"
          hoverEffect={true}
          className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-5 h-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-slate-800 tracking-wider uppercase">
                ENGINEERING PROFILE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 text-slate-800 border border-slate-200/80 text-[11px] font-mono font-medium backdrop-blur-xs">
                NUST
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-slate-900 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora tracking-tight">
                  About Me
                </h3>
              </div>
              <p className="text-sm font-mono font-semibold text-slate-600 mt-1">
                {personal.role}
              </p>
            </div>

            {/* Inner Border Cards reflecting the outer bokeh hover effect */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="group/inner relative p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300">
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-sans italic">
                  &ldquo;There&apos;s something rewarding about turning complex problems into simpler, meaningful solutions. That curiosity drew me to software engineering, while the possibilities of AI inspired me to explore how intelligent technology can make everyday experiences better.&rdquo;
                </p>
              </div>

              <div className="group/inner relative p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300">
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed font-sans">
                  Hi, I&apos;m <strong className="text-slate-900 font-semibold">Muhammad Azfar</strong>. A Python &amp; AI Engineer and Flutter Developer, currently pursuing my Bachelor&apos;s in Software Engineering at the{" "}
                  <strong className="text-slate-900 font-semibold">
                    National University of Sciences and Technology (NUST)
                  </strong>
                  . My work revolves around building AI-powered applications, exploring LLMs, and developing agentic systems that turn ideas into practical solutions.
                </p>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* ROW 1: Card 2 - Professional Experience (Col 6) with Reflective Bokeh Hover State */}
        <BentoCard
          id="experience"
          variant="highlight"
          hoverEffect={true}
          className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-5 h-full"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-slate-800 tracking-wider uppercase">
                PROFESSIONAL EXPERIENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 text-slate-800 border border-slate-200/80 text-[11px] font-mono font-medium backdrop-blur-xs">
                {currentRole.period}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-slate-900 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora tracking-tight">
                  {currentRole.role}
                </h3>
              </div>
              <p className="text-sm font-mono font-semibold text-slate-600 mt-1">
                {currentRole.company}
              </p>
            </div>

            {/* 3 Inner Border Cards reflecting the outer bokeh hover effect */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200/90 text-slate-900 flex items-center justify-center shrink-0 shadow-2xs">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Build Mobile Architecture &amp; Real-Time Systems
                </span>
              </div>

              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200/90 text-slate-900 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Integrate Generative AI &amp; LLM with Jailbreaking
                </span>
              </div>

              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200/90 text-slate-900 flex items-center justify-center shrink-0 shadow-2xs">
                  <GitBranch className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Distributed Collaboration &amp; CI/CD
                </span>
              </div>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
