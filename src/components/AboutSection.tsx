"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSubCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import { Briefcase, Smartphone, ShieldCheck, GitBranch } from "lucide-react";

export default function AboutSection() {
  const { experience } = portfolioData;
  const currentRole = experience[0];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        title="About & Engineering Vision"
        description="Bridging cutting-edge Generative AI research with high-performance, production-ready mobile and distributed systems."
      />

      {/* 12-Column Balanced Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* ROW 1: Card 1 - Executive Narrative (Col 6) */}
        <BentoCard variant="highlight" className="lg:col-span-6 p-6 sm:p-8 gap-5 sm:gap-6">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
                ENGINEERING PROFILE
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sora tracking-tight leading-snug">
              About Me
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
              <p>
                There&apos;s something rewarding about turning complex problems into simpler, meaningful solutions. That curiosity drew me to software engineering, while the possibilities of AI inspired me to explore how intelligent technology can make everyday experiences better.
              </p>
              <p>
                Hi, I&apos;m <strong className="text-slate-900 font-semibold">Muhammad Azfar</strong>. A Python &amp; AI Engineer and Flutter Developer, currently pursuing my Bachelor&apos;s in Software Engineering at the{" "}
                <strong className="text-slate-900 font-semibold">
                  National University of Sciences and Technology (NUST)
                </strong>
                . My work revolves around building AI-powered applications, exploring LLMs, and developing agentic systems that turn ideas into practical solutions.
              </p>
            </div>
          </div>
        </BentoCard>

        {/* ROW 1: Card 2 - Professional Experience (Col 6) */}
        <BentoCard id="experience" className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
                PROFESSIONAL EXPERIENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-mono font-medium">
                {currentRole.period}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-600 shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora tracking-tight">
                  {currentRole.role}
                </h3>
              </div>
              <p className="text-sm font-mono font-semibold text-blue-600 mt-1">
                {currentRole.company}
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <BentoSubCard className="flex items-center gap-3 p-3.5">
                <Smartphone className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Build Mobile Architecture &amp; Real-Time Systems
                </span>
              </BentoSubCard>

              <BentoSubCard className="flex items-center gap-3 p-3.5">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Integrate Generative AI &amp; LLM with Jailbreaking
                </span>
              </BentoSubCard>

              <BentoSubCard className="flex items-center gap-3 p-3.5">
                <GitBranch className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Distributed Collaboration &amp; CI/CD
                </span>
              </BentoSubCard>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
