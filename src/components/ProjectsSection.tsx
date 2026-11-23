"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolioData";
import { BentoSectionHeader } from "@/components/ui/BentoCard";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const allProjects = portfolioData.projects;

  // Show 4 projects unless expanded
  const displayedProjects = isExpanded
    ? allProjects
    : allProjects.slice(0, 4);

  // Soft curated background tints matching modern studio showcase aesthetic
  const getCanvasTint = (idx: number) => {
    const tints = [
      "bg-[#f6f3eb]", // Soft warm bone / cream
      "bg-[#e8edf2]", // Soft cool slate-blue
      "bg-[#ebf2ed]", // Soft sage tint
      "bg-[#f3edf5]", // Soft lavender tint
      "bg-[#f5f2eb]",
      "bg-[#e7eef4]",
      "bg-[#edf3ee]",
      "bg-[#f4edf2]",
    ];
    return tints[idx % tints.length];
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return "Generative AI";
      case "mobile":
        return "Flutter Mobile";
      case "ml":
        return "Machine Learning";
      default:
        return "Software";
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        title="Featured Systems & Projects"
        description="A showcase of systems I've built—from multi-agent workflows and local RAG search engines to production-ready Flutter mobile applications."
      />

      {/* 2-Column Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {displayedProjects.map((project, idx) => {
          const canvasBg = getCanvasTint(idx);

          return (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Showcase Image Stage */}
              <div
                className={`h-[220px] xs:h-[260px] sm:h-[320px] md:h-[380px] ${canvasBg} flex items-center justify-center p-4 sm:p-8 relative overflow-hidden`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={encodeURI(project.image || "/Projects-SS/qwen-fine-tuning.png")}
                  alt={project.title}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes("Qwen%20Fine-Tuning.png")) {
                      target.src = "/Projects-SS/Qwen%20Fine-Tuning.png";
                    }
                  }}
                  className="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl shadow-md group-hover:scale-[1.025] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Bottom Metadata Bar */}
              <div className="p-5 sm:p-8 flex flex-col justify-between gap-3 sm:gap-4 bg-white flex-1">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 font-sora tracking-tight group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed line-clamp-1 truncate">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="inline-flex items-center px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200/70">
                    {project.tagLabel || getCategoryLabel(project.category)}
                  </span>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 group-hover:text-black transition-colors">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Explore More Toggle (Only visible when there are more projects) */}
      {allProjects.length > 4 && (
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-900 text-white font-mono text-xs sm:text-sm font-semibold hover:bg-black active:scale-95 transition-all shadow-md cursor-pointer group"
          >
            {isExpanded ? (
              <>
                <span>Show Fewer Projects</span>
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>Explore More Projects ({allProjects.length - 4} More)</span>
                <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
