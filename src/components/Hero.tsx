"use client";

import React from "react";
import SceneContainer from "./canvas/SceneContainer";
import { useTheme } from "@/context/ThemeContext";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-12 pt-28 pb-16 overflow-hidden">
      {/* Interactive 3D Wave Field Canvas as Ambient Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75 dark:opacity-85">
        <SceneContainer theme={theme} />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pointer-events-none">
        <div className="max-w-2xl flex flex-col gap-6 pointer-events-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] w-fit text-xs font-mono text-slate-700 dark:text-slate-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to AI Engineering & Research roles</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Muhammad Azfar
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
              AI Engineer & Machine Learning Systems Architect
            </p>
          </div>

          {/* Bio statement */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Designing and deploying frontier foundation models, high-throughput inference engines,
            and distributed neural architectures.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-medium text-sm hover:opacity-90 transition-all shadow-sm"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-black/[0.04] dark:bg-white/[0.06] text-slate-800 dark:text-slate-200 border border-black/[0.08] dark:border-white/[0.12] font-medium text-sm hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition-all flex items-center gap-1.5 backdrop-blur-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Mouse interaction hint */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-10 hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 pointer-events-none">
        <span>[ Move cursor to interact with neural wave field ]</span>
      </div>
    </section>
  );
}
