"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="pt-20 sm:pt-28 lg:pt-36 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-10">
      <BentoSectionHeader
        title="Let's Build Frontier Systems."
        description="Available for AI Engineering, Agentic Workflow, and Flutter Mobile development roles. Open to impactful projects, research collaborations, and full-time opportunities."
      />

      {/* Main Unified Contact Card with Hover Bokeh Background */}
      <BentoCard
        variant="highlight"
        hoverEffect={true}
        className="p-7 sm:p-10 flex flex-col gap-6 sm:gap-8 w-full"
      >
        {/* Card Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 pb-5">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sora tracking-tight">
              Contact Me
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
              Direct access channels for engineering roles, technical consultations, and collaborations.
            </p>
          </div>
        </div>

        {/* 3 Inner Border Cards reflecting the hover effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 w-full">
          {/* Card 1: Email + Copy Icon */}
          <div className="relative group/inner flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-400 hover:shadow-md transition-all duration-300">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Mail className="w-5 h-5" />
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-700 bg-white/80 border border-slate-200 hover:bg-white hover:border-slate-300 active:scale-95 transition-all cursor-pointer shadow-2xs"
                aria-label="Copy email address"
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                DIRECT EMAIL
              </span>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm sm:text-base font-mono font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                title={personal.email}
              >
                {personal.email}
              </a>
            </div>
          </div>

          {/* Card 2: LinkedIn + Icon + Clickable Link */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/inner flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-blue-400 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/20 text-[#0a66c2] flex items-center justify-center shrink-0 shadow-2xs">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover/inner:text-blue-600 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/inner:translate-x-0.5 group-hover/inner:-translate-y-0.5" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                PROFESSIONAL NETWORK
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-sora group-hover/inner:text-blue-600 transition-colors">
                LinkedIn Connection
              </h4>
              <span className="text-xs font-mono text-slate-500">
                Muhammad Azfar
              </span>
            </div>
          </a>

          {/* Card 3: GitHub + Icon + Clickable Link */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/inner flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200/90 bg-white/40 backdrop-blur-md group-hover:bg-white/60 hover:!bg-white/90 hover:!border-slate-500 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center shrink-0 shadow-xs">
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 group-hover/inner:text-slate-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/inner:translate-x-0.5 group-hover/inner:-translate-y-0.5" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                SOURCE CODE
              </span>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 font-sora group-hover/inner:text-blue-600 transition-colors">
                GitHub Profile
              </h4>
              <span className="text-xs font-mono text-slate-500">
                @M-Azfar9
              </span>
            </div>
          </a>
        </div>
      </BentoCard>
    </section>
  );
}
