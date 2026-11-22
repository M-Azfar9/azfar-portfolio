"use client";

import React, { useState } from "react";
import {
  Palette,
  Box,
  Type,
  Layout,
  CheckCircle2,
  Sparkles,
  HelpCircle,
} from "lucide-react";

interface OptionGroup {
  id: string;
  category: string;
  icon: any;
  title: string;
  description: string;
  options: {
    name: string;
    description: string;
    badge?: string;
    preview?: string;
  }[];
}

const designRecommendations: OptionGroup[] = [
  {
    id: "style",
    category: "Design Style",
    icon: Layout,
    title: "Aesthetic & Structural Style",
    description:
      "How your portfolio presents your identity as an AI Engineer to frontier labs and clients.",
    options: [
      {
        name: "1. Cybernetic Minimalist (Current Baseline)",
        description:
          "Ultra-clean technical grid, HUD telemetry stats, dark obsidian & crisp alabaster, high readability with refined 3D ambient presence. Recommended for senior AI systems architects.",
        badge: "Recommended",
      },
      {
        name: "2. Swiss AI Research Lab",
        description:
          "Asymmetrical typographic layouts inspired by OpenAI / DeepMind research papers, monochromatic contrast, stark precision diagrams, zero-fluff editorial style.",
      },
      {
        name: "3. Futuristic Neural Holo-Deck",
        description:
          "High-contrast glowing wireframes, bloom post-processing shaders, audio-reactive pulses, floating glass HUD consoles, bold sci-fi aesthetics.",
      },
    ],
  },
  {
    id: "3d",
    category: "3D Element Concept",
    icon: Box,
    title: "Interactive 3D Centerpiece",
    description:
      "What 3D object best represents your work as an AI Engineer inside React Three Fiber.",
    options: [
      {
        name: "1. Morphing Latent Core & Tensor Rings (Implemented Above)",
        description:
          "Distorted pulsating latent nucleus surrounded by geodesic icosahedron wireframes and multi-axis tensor gimbal rings. Highly interactive, reactive to cursor and parameters.",
        badge: "Live Above",
      },
      {
        name: "2. Interactive 3D Embedding Space (t-SNE / UMAP)",
        description:
          "A 3D galaxy of 1,000+ clustering semantic vectors where visitors can hover on data clusters (e.g. 'NLP', 'Computer Vision', 'Audio', 'Agents') and see them attract/repel.",
      },
      {
        name: "3. Transformer Attention Heatmap Mesh",
        description:
          "A 3D layered matrix showing Multi-Head Attention Q×K^T vectors with glowing dynamic light pulses traveling between attention heads.",
      },
      {
        name: "4. Silicon GPU Micro-Die / Tensor Core Wafer",
        description:
          "A 3D macro architectural chip view with glowing traces and data highway circuits, highlighting hardware-level AI engineering mastery.",
      },
    ],
  },
  {
    id: "palette",
    category: "Color Palette",
    icon: Palette,
    title: "Color Palette & Theme Personality",
    description:
      "Engineered for both Dark and Light themes to ensure readability and prestige.",
    options: [
      {
        name: "1. Deep Obsidian & Electric Cyan / Cobalt (Active)",
        description:
          "Dark: #07090e base + #06b6d4 cyan + #818cf8 indigo accents. Light: Crisp #f8fafc + #2563eb cobalt blue. High technical authority and high contrast.",
        badge: "Active",
      },
      {
        name: "2. Quantum Emerald & Matrix Mint",
        description:
          "Dark: #050b08 base + #10b981 emerald + #34d399 mint. Light: Crisp white with deep forest green accents. Signifies mathematical optimization & efficiency.",
      },
      {
        name: "3. Monochromatic Titanium & Studio Amber",
        description:
          "Dark: Carbon graphite + subtle amber #f59e0b highlights. Light: Chalk paper + dark slate + brass accents. Evokes high-end industrial design like Teenage Engineering.",
      },
    ],
  },
  {
    id: "typography",
    category: "Typography",
    icon: Type,
    title: "Typography & Code Aesthetic",
    description:
      "Pairing geometric sans-serif with monospace engineering accents.",
    options: [
      {
        name: "1. Geist Sans + Geist Mono (Active)",
        description:
          "Designed by Vercel for modern software engineering interfaces. Razor-sharp numbers, perfect tabular alignment, clean technical elegance.",
        badge: "Active",
      },
      {
        name: "2. Plus Jakarta Sans + JetBrains Mono",
        description:
          "Friendly yet rigorous sans-serif paired with the world's most beloved programmer monospace font for code snippets and telemetry.",
      },
      {
        name: "3. Space Grotesk + Fira Code",
        description:
          "Distinctive geometric tech display headlines with ligature-enabled monospace for terminal outputs and parameter specs.",
      },
    ],
  },
];

export default function DesignSuggestionsSection() {
  const [selectedGroup, setSelectedGroup] = useState<string>("style");
  const [userPicks, setUserPicks] = useState<{ [key: string]: number }>({
    style: 0,
    "3d": 0,
    palette: 0,
    typography: 0,
  });

  const activeGroupData = designRecommendations.find((g) => g.id === selectedGroup)!;

  return (
    <section id="design-proposals" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mx-auto text-xs font-mono text-purple-600 dark:text-purple-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Design Spec & Decision Matrix</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Portfolio Design Direction & Suggestions
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          I have crafted and implemented the working 3D design above. Here is the breakdown of
          customizable dimensions tailored for you as an <strong>AI Engineer</strong>. Review these
          options and let me know your preferred direction!
        </p>
      </div>

      {/* Tabs for Categories */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {designRecommendations.map((group) => {
          const Icon = group.icon;
          const isSelected = selectedGroup === group.id;
          return (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                isSelected
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md scale-102"
                  : "glass-card text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{group.category}</span>
            </button>
          );
        })}
      </div>

      {/* Category Detail Cards */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-slate-200 dark:border-white/10 gap-3">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {activeGroupData.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {activeGroupData.description}
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
            Click an option below to select
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {activeGroupData.options.map((opt, optIdx) => {
            const isPicked = userPicks[selectedGroup] === optIdx;
            return (
              <div
                key={optIdx}
                onClick={() =>
                  setUserPicks((prev) => ({
                    ...prev,
                    [selectedGroup]: optIdx,
                  }))
                }
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start gap-4 ${
                  isPicked
                    ? "bg-blue-50/60 dark:bg-cyan-950/20 border-blue-500 dark:border-cyan-400 shadow-md"
                    : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <div
                  className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isPicked
                      ? "bg-blue-600 text-white dark:bg-cyan-400 dark:text-slate-950"
                      : "border border-slate-300 dark:border-slate-600 text-transparent"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 fill-current" />
                </div>

                <div className="flex flex-col gap-1 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      {opt.name}
                    </h4>
                    {opt.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-cyan-500/20 dark:text-cyan-300 border border-blue-300 dark:border-cyan-500/30">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {opt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
