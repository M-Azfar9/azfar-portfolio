"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import {
  Briefcase,
  Smartphone,
  ShieldCheck,
  GitBranch,
  Bot,
  Layers,
  Trophy,
  Sparkles,
  Cpu,
  GraduationCap,
} from "lucide-react";

export default function AboutSection() {
  const { experience, achievements, education } = portfolioData;
  const currentRole = experience[0];
  const nustEdu = education[0];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        title="About & Engineering Vision"
        description="Bridging cutting-edge Generative AI research with high-performance, production-ready mobile and distributed systems."
      />

      {/* 12-Column Balanced Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
        {/* ROW 1: Card 1 - Executive Narrative (Col 6) */}
        <BentoCard
          variant="highlight"
          hoverEffect={true}
          className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            {/* Header Tag + Status Badge */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
                ENGINEERING PROFILE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 text-slate-800 border border-slate-200/80 text-[11px] font-mono font-medium backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                NUST SEECS · 2023 — 2027
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sora tracking-tight leading-snug">
              About Me
            </h3>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-sans">
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

          {/* 3 Core Competency Reflective Inner Cards matching Card 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            <div className="group/inner relative flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-xs transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">DOMAIN</span>
                <span className="text-xs font-sora font-semibold text-slate-900 truncate block">Agentic AI</span>
              </div>
            </div>

            <div className="group/inner relative flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-xs transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Smartphone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">MOBILE</span>
                <span className="text-xs font-sora font-semibold text-slate-900 truncate block">Flutter SDK</span>
              </div>
            </div>

            <div className="group/inner relative flex items-center gap-2.5 p-3 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-xs transition-all duration-300">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">ACADEMIC</span>
                <span className="text-xs font-sora font-semibold text-slate-900 truncate block">GPA 3.44/4.0</span>
              </div>
            </div>
          </div>
        </BentoCard>

        {/* ROW 1: Card 2 - Professional Experience (Col 6) with Reflective Bokeh Hover State */}
        <BentoCard
          id="experience"
          variant="highlight"
          hoverEffect={true}
          className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
                PROFESSIONAL EXPERIENCE
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 text-blue-800 border border-slate-200/80 text-[11px] font-mono font-medium backdrop-blur-xs">
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
                {currentRole.company} · Remote
              </p>
            </div>

            {/* 3 Inner Border Cards reflecting the outer bokeh hover effect */}
            <div className="flex flex-col gap-2.5 pt-2">
              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <Smartphone className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Build Mobile Architecture &amp; Real-Time Systems
                </span>
              </div>

              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-sans font-medium text-slate-800">
                  Integrate Generative AI &amp; LLM with Jailbreaking
                </span>
              </div>

              <div className="group/inner relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300 cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
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

      {/* ROW 2: Engineering Vision & Verified Achievements (3-Column Bento Matrix) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6">
        {/* Pillar 1: Autonomous Systems Vision */}
        <BentoCard
          variant="highlight"
          hoverEffect={true}
          className="p-6 sm:p-7 flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-purple-700 tracking-wider uppercase">
                VISION 01
              </span>
              <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-200/80 text-purple-600 flex items-center justify-center shadow-2xs">
                <Cpu className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-sora tracking-tight">
              Agentic Reliability
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Moving beyond naive prompt wrappers toward deterministic multi-agent orchestration, state persistence, sandboxed MCP tools, and runtime guardrails.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
            <span className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 text-[10px] font-mono font-medium border border-purple-200/60">
              LangGraph
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
              MCP Tools
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
              Self-RAG
            </span>
          </div>
        </BentoCard>

        {/* Pillar 2: Cross-Platform Precision */}
        <BentoCard
          variant="highlight"
          hoverEffect={true}
          className="p-6 sm:p-7 flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
                VISION 02
              </span>
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shadow-2xs">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-sora tracking-tight">
              Production Fluidity
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Engineering 60 FPS mobile applications with decoupled domain layers, offline-first sync (Isar/SQLite), reactive Riverpod state, and native platform channels.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200/80">
            <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-mono font-medium border border-blue-200/60">
              Flutter
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
              Riverpod
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-mono font-medium">
              Offline First
            </span>
          </div>
        </BentoCard>

        {/* Pillar 3: Hackathon Honors & Proven Record */}
        <BentoCard
          variant="highlight"
          hoverEffect={true}
          className="p-6 sm:p-7 flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono font-semibold text-amber-700 tracking-wider uppercase">
                PROVEN IMPACT
              </span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-600 flex items-center justify-center shadow-2xs">
                <Trophy className="w-4 h-4" />
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 font-sora tracking-tight">
              Competitive Honors
            </h4>
            <div className="space-y-2">
              <div className="p-2.5 rounded-xl border border-slate-200/90 bg-white/40 backdrop-blur-xs group-hover:bg-white/60 transition-all flex items-start gap-2.5">
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded bg-amber-100 text-amber-800 border border-amber-200/80 shrink-0">
                  1st
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    Code Connect AI Hackathon
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Winner among 20+ university teams
                  </p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl border border-slate-200/90 bg-white/40 backdrop-blur-xs group-hover:bg-white/60 transition-all flex items-start gap-2.5">
                <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                  2nd
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900 truncate">
                    DevCon AI Hackathon
                  </p>
                  <p className="text-[11px] text-slate-500 font-sans">
                    Runner-Up · Architecture quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-200/80 text-[10px] font-mono text-slate-500">
            <span>NUST SEECS</span>
            <span className="text-amber-700 font-semibold">Verified Accolades</span>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
