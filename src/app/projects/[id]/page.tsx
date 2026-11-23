import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import { BentoCard, BentoTag } from "@/components/ui/BentoCard";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Muhammad Azfar",
    };
  }

  return {
    title: `${project.title} | Muhammad Azfar`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const projectIndex = portfolioData.projects.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project = portfolioData.projects[projectIndex];
  const allProjects = portfolioData.projects;

  const prevProject =
    projectIndex > 0 ? allProjects[projectIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject =
    projectIndex < allProjects.length - 1 ? allProjects[projectIndex + 1] : allProjects[0];

  // Soft curated background tints
  const tints = [
    "bg-[#f6f3eb]",
    "bg-[#e8edf2]",
    "bg-[#ebf2ed]",
    "bg-[#f3edf5]",
    "bg-[#f5f2eb]",
    "bg-[#e7eef4]",
    "bg-[#edf3ee]",
    "bg-[#f4edf2]",
  ];
  const canvasBg = tints[projectIndex % tints.length];

  return (
    <main className="relative min-h-screen w-full bg-[#f8fafc] text-[#090d16] flex flex-col justify-between">
      {/* Top Floating Navigation Header */}
      <header className="sticky top-4 inset-x-0 mx-auto w-[92%] sm:w-[94%] max-w-[1240px] z-50 pointer-events-none">
        <div
          className="pointer-events-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between text-black transition-all"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.65)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow:
              "0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 2px 8px -2px rgba(15, 23, 42, 0.02)",
          }}
        >
          {/* Back button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold text-slate-800 hover:text-black hover:bg-white/90 border border-transparent hover:border-slate-200/80 transition-all active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          {/* Center/Right Brand */}
          <Link href="/" className="font-hero text-lg sm:text-xl tracking-wider text-black font-extrabold hover:opacity-75 transition-opacity">
            AZFAR
          </Link>
        </div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-10 sm:pt-14 pb-16 sm:pb-24">
        {/* Project Header Meta */}
        <div className="flex flex-col gap-4 mb-8 sm:mb-12">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 shadow-2xs text-slate-800">
              {project.tagLabel || project.category.toUpperCase()}
            </span>
            {project.metrics && (
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                {project.metrics}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sora text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-sans max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Visual Showcase Stage */}
        <div
          className={`w-full h-[260px] xs:h-[320px] sm:h-[440px] md:h-[540px] ${canvasBg} rounded-3xl sm:rounded-[36px] border border-slate-200/90 flex items-center justify-center p-6 sm:p-12 mb-10 sm:mb-14 overflow-hidden shadow-xs relative`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={encodeURI(project.image || "/Projects-SS/qwen-fine-tuning.png")}
            alt={project.title}
            className="max-h-full max-w-full object-contain rounded-2xl shadow-lg transition-transform duration-500 ease-out hover:scale-[1.01]"
          />
        </div>

        {/* 12-Column Detailed Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-14 sm:mb-20">
          {/* Col 8: Architecture & Engineering Deliverables */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <BentoCard variant="highlight" hoverEffect={false} className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 border-b border-slate-200/80 pb-4 mb-5">
                <Layers className="w-5 h-5 text-slate-900" />
                <h2 className="text-xl sm:text-2xl font-bold font-sora text-slate-900">
                  System Architecture &amp; Deliverables
                </h2>
              </div>

              <ul className="space-y-4">
                {project.description.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200/80 bg-white/60 hover:bg-white transition-all text-sm sm:text-base text-slate-700 leading-relaxed font-sans"
                  >
                    <CheckCircle2 className="w-5 h-5 text-slate-900 mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </div>

          {/* Col 4: Tech Stack, Metrics & Repository */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Tech Stack Card */}
            <BentoCard variant="default" hoverEffect={false} className="p-6 sm:p-7">
              <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3 mb-4">
                <Cpu className="w-4 h-4 text-slate-900" />
                <h3 className="text-base font-bold font-sora text-slate-900">
                  Technologies Used
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <BentoTag key={tech}>{tech}</BentoTag>
                ))}
              </div>
            </BentoCard>

            {/* Source Code Action Card */}
            {project.githubUrl && (
              <BentoCard variant="highlight" hoverEffect={true} className="p-6 sm:p-7">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  SOURCE REPOSITORY
                </span>
                <h3 className="text-lg font-bold font-sora text-slate-900 mb-4">
                  Open Source Code
                </h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-2xl bg-slate-900 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </BentoCard>
            )}
          </div>
        </div>

        {/* Previous / Next Project Navigation Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-10 border-t border-slate-200">
          <Link
            href={`/projects/${prevProject.id}`}
            className="group p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white hover:border-slate-400 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:-translate-x-1 transition-transform">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  PREVIOUS PROJECT
                </span>
                <span className="text-sm sm:text-base font-bold font-sora text-slate-900 line-clamp-1">
                  {prevProject.title}
                </span>
              </div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.id}`}
            className="group p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white hover:border-slate-400 hover:shadow-md transition-all flex items-center justify-between text-right"
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-left sm:text-right w-full">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  NEXT PROJECT
                </span>
                <span className="text-sm sm:text-base font-bold font-sora text-slate-900 line-clamp-1">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-700 group-hover:translate-x-1 transition-transform shrink-0 ml-3">
                <ChevronRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
