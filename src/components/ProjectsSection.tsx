"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolioData";
import { BentoCard, BentoSubCard, BentoSectionHeader, BentoTag } from "@/components/ui/BentoCard";
import { ArrowUpRight, Sparkles, Smartphone, Brain, Layers, CheckCircle2 } from "lucide-react";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "ai" | "mobile" | "ml">("all");

  const filteredProjects = portfolioData.projects.filter(
    (p) => filter === "all" || p.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "ai":
        return <Brain className="w-3.5 h-3.5 text-blue-600" />;
      case "mobile":
        return <Smartphone className="w-3.5 h-3.5 text-rose-600" />;
      case "ml":
        return <Sparkles className="w-3.5 h-3.5 text-amber-600" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-slate-600" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "ai":
        return "Agentic AI / LLM";
      case "mobile":
        return "Flutter Mobile";
      case "ml":
        return "Machine Learning";
      default:
        return "Software System";
    }
  };

  const renderProjectCard = (project: Project, colSpanClass: string, isFlagship = false) => {
    return (
      <BentoCard
        key={project.id}
        variant={isFlagship ? "highlight" : "default"}
        className={`${colSpanClass} group relative gap-6`}
      >
        <div className="flex flex-col gap-4">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 border border-slate-200/90 flex items-center gap-1.5 font-semibold">
              {getCategoryIcon(project.category)}
              <span>{getCategoryLabel(project.category)}</span>
            </span>

            {project.metrics && (
              <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 font-semibold text-[11px]">
                {project.metrics}
              </span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div>
            <h3
              className={`${
                isFlagship ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
              } font-bold text-slate-900 font-sora tracking-tight group-hover:text-blue-600 transition-colors`}
            >
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Bulleted Deliverables */}
          <ul className="space-y-2.5 pt-1">
            {project.description.map((item, idx) => (
              <li
                key={idx}
                className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer: Tags & Action */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <BentoTag key={tech}>{tech}</BentoTag>
            ))}
          </div>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-700 hover:text-black transition-colors shrink-0"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Source</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </BentoCard>
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      <BentoSectionHeader
        eyebrow="02 // PORTFOLIO"
        title="Featured Systems & Projects"
        description="Production Generative AI workflows, multi-agent frameworks, fine-tuned models, and cross-platform Flutter applications."
        action={
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-xs w-fit">
            {[
              { id: "all", label: "All Work" },
              { id: "ai", label: "Generative AI" },
              { id: "mobile", label: "Flutter Mobile" },
              { id: "ml", label: "Machine Learning" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  filter === cat.id
                    ? "bg-slate-900 text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        }
      />

      {/* Dynamic 12-Column Balanced Bento Matrix */}
      {filter === "all" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Row 1: Flagship Doxer AI (Col 8) + Qwen3 Fine-Tuning (Col 4) = 12 Cols */}
          {portfolioData.projects.find((p) => p.id === "doxer-ai") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "doxer-ai")!,
              "col-span-1 md:col-span-2 lg:col-span-8",
              true
            )}

          {portfolioData.projects.find((p) => p.id === "qwen3-finetune") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "qwen3-finetune")!,
              "col-span-1 md:col-span-2 lg:col-span-4"
            )}

          {/* Row 2: ForiKaam Mobile (Col 6) + Sonyc RAG (Col 6) = 12 Cols */}
          {portfolioData.projects.find((p) => p.id === "forikaam") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "forikaam")!,
              "col-span-1 lg:col-span-6"
            )}

          {portfolioData.projects.find((p) => p.id === "sonyc-rag") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "sonyc-rag")!,
              "col-span-1 lg:col-span-6"
            )}

          {/* Row 3: KMHub (Col 4) + Ride Hailing (Col 4) + Cricket Predictor (Col 4) = 12 Cols */}
          {portfolioData.projects.find((p) => p.id === "kmhub") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "kmhub")!,
              "col-span-1 md:col-span-1 lg:col-span-4"
            )}

          {portfolioData.projects.find((p) => p.id === "ride-hailing") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "ride-hailing")!,
              "col-span-1 md:col-span-1 lg:col-span-4"
            )}

          {portfolioData.projects.find((p) => p.id === "cricket-predictor") &&
            renderProjectCard(
              portfolioData.projects.find((p) => p.id === "cricket-predictor")!,
              "col-span-1 md:col-span-2 lg:col-span-4"
            )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) =>
            renderProjectCard(project, "col-span-1")
          )}
        </div>
      )}
    </section>
  );
}
