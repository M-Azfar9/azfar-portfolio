"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSubCard, BentoSectionHeader, BentoTag } from "@/components/ui/BentoCard";
import { Briefcase, Calendar, MapPin, Terminal, Cpu, GitBranch, ShieldCheck } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = portfolioData;
  const currentRole = experience[0];

  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        eyebrow="03 // CAREER TRACK"
        title="Professional Experience"
        description="Production engineering experience delivering Generative AI features in enterprise Flutter applications alongside formal software engineering at NUST."
      />

      {/* 12-Column Career Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <BentoCard variant="highlight" className="lg:col-span-12 gap-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora">
                    {currentRole.role}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-mono font-semibold">
                    {currentRole.company}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 font-sans mt-0.5">
                  {currentRole.type}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 font-medium">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {currentRole.period}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {currentRole.location}
              </span>
            </div>
          </div>

          {/* 4-Cell Bento SubCard Grid for Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Cell 1: Generative AI */}
            <BentoSubCard className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Cpu className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-900 font-sora">
                  Generative AI &amp; LLM Integration
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                Build and ship production Flutter mobile applications integrated with Generative AI features, applying rigorous prompt engineering, jailbreak testing, and injection defenses.
              </p>
            </BentoSubCard>

            {/* Cell 2: Mobile Architecture */}
            <BentoSubCard className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-rose-600">
                <Terminal className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-900 font-sora">
                  Mobile Architecture &amp; Real-Time Systems
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                Engineer scalable, maintainable mobile architectures utilizing Riverpod state management, Google Maps SDK, Firebase backend services, and high-throughput REST APIs.
              </p>
            </BentoSubCard>

            {/* Cell 3: CI/CD & Distributed Team */}
            <BentoSubCard className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-emerald-600">
                <GitBranch className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-900 font-sora">
                  Distributed Collaboration &amp; CI/CD
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                Collaborate in a distributed engineering team, conducting peer code reviews and maintaining clean Git-based CI/CD workflows across continuous release cycles.
              </p>
            </BentoSubCard>

            {/* Cell 4: Tech Stack Telemetry */}
            <BentoSubCard className="flex flex-col justify-between gap-3">
              <div className="flex items-center gap-2 text-indigo-600">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="text-sm font-bold text-slate-900 font-sora">
                  Applied Tech Stack
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentRole.technologies.map((tech) => (
                  <BentoTag key={tech}>{tech}</BentoTag>
                ))}
              </div>
            </BentoSubCard>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
