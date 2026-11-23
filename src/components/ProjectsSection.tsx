"use client";

import React, { useState, useEffect } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { BentoSectionHeader, BentoTag } from "@/components/ui/BentoCard";
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, X, Sparkles, Smartphone, Brain, Layers } from "lucide-react";

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key and prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const allProjects = portfolioData.projects;

  // Show 4 projects unless expanded
  const displayedProjects = isExpanded
    ? allProjects
    : allProjects.slice(0, 4);

  // Soft curated background tints matching modern studio showcase aesthetic
  const getCanvasTint = (idx: number) => {
    const tints = [
      "bg-[#f6f3eb]", // Soft warm bone / cream (like ImagineArt Ad Studio)
      "bg-[#e8edf2]", // Soft cool slate-blue (like ImagineArt Captions)
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
        description="A showcase of systems I've built-from multi-agent workflows and local RAG search engines to production-ready Flutter mobile applications."
      />

      {/* 2-Column Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {displayedProjects.map((project, idx) => {
          const canvasBg = getCanvasTint(idx);

          return (
            <div
              key={project.id}
              className="rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
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

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-800 hover:text-black transition-colors cursor-pointer group/btn"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
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

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              aria-label="Close project details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Showcase */}
            <div className="w-full h-56 sm:h-64 rounded-2xl bg-[#f6f3eb] flex items-center justify-center p-4 overflow-hidden border border-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={encodeURI(selectedProject.image || "/Projects-SS/qwen-fine-tuning.png")}
                alt={selectedProject.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes("Qwen%20Fine-Tuning.png")) {
                    target.src = "/Projects-SS/Qwen%20Fine-Tuning.png";
                  }
                }}
                className="max-h-full max-w-full object-contain rounded-xl shadow-md"
              />
            </div>

            {/* Modal Title & Badges */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-semibold">
                  {selectedProject.tagLabel || getCategoryLabel(selectedProject.category)}
                </span>
                {selectedProject.metrics && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 font-semibold">
                    {selectedProject.metrics}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sora">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-600 font-sans">
                {selectedProject.subtitle}
              </p>
            </div>

            {/* Key Deliverables & System Highlights */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                System Highlights &amp; Architecture
              </h4>
              <ul className="space-y-2">
                {selectedProject.description.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-slate-700 font-sans flex items-start gap-2.5 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-slate-900 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => (
                  <BentoTag key={tech}>{tech}</BentoTag>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            {selectedProject.githubUrl && (
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-semibold hover:bg-black transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>View Source Code</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
