"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSubCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import { Trophy, Award, ExternalLink } from "lucide-react";

export default function AboutSection() {
  const { achievements, certifications } = portfolioData;

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        eyebrow="01 // BIOGRAPHY"
        title="About & Engineering Vision"
        description="Bridging cutting-edge Generative AI research with high-performance, production-ready mobile and distributed systems."
      />

      {/* 12-Column Balanced Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* ROW 1: Card 1 - Executive Narrative (Col 7) */}
        <BentoCard variant="highlight" className="lg:col-span-7 gap-6">
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

        {/* ROW 1: Card 2 - Hackathon Honors (Col 5) - Neighboring Narrative Card */}
        <BentoCard className="lg:col-span-5 gap-5">
          <div>
            <span className="text-[11px] font-mono font-semibold text-amber-600 tracking-wider uppercase">
              AWARDS &amp; RECOGNITION
            </span>
            <h4 className="text-lg font-bold text-slate-900 font-sora mt-0.5 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Competition Honors
            </h4>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {achievements.map((ach, idx) => (
              <BentoSubCard key={idx} className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full bg-amber-50 text-amber-900 border border-amber-200 font-bold">
                    {ach.title}
                  </span>
                  <span className="text-xs font-mono text-slate-500">{ach.organization}</span>
                </div>
                <h5 className="text-sm font-bold text-slate-900 font-sora">
                  {ach.event}
                </h5>
                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  {ach.detail}
                </p>
              </BentoSubCard>
            ))}
          </div>
        </BentoCard>

        {/* ROW 2: Card 3 - Industry Certifications (Col 12) */}
        <BentoCard className="lg:col-span-12 gap-5">
          <div>
            <span className="text-[11px] font-mono font-semibold text-blue-700 tracking-wider uppercase">
              VERIFIED CREDENTIALS
            </span>
            <h4 className="text-lg font-bold text-slate-900 font-sora mt-0.5 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              Professional Specializations
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <BentoSubCard className="h-full flex flex-col justify-between gap-3 group-hover:border-blue-400 group-hover:shadow-sm transition-all">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        {cert.year}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 font-sora group-hover:text-blue-600 transition-colors mt-1">
                      {cert.title}
                    </h5>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    {cert.issuer}
                  </span>
                </BentoSubCard>
              </a>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
