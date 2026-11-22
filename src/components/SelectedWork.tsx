"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Distributed LLM Inference Engine",
    category: "High-Throughput Systems",
    description:
      "Custom continuous batching and speculative decoding harness utilizing vLLM and TensorRT-LLM, achieving sub-10ms TTFT under high concurrency.",
    tags: ["CUDA", "vLLM", "TensorRT", "Python", "Triton"],
    year: "2026",
    link: "#",
  },
  {
    title: "Reasoning & Alignment Post-Training",
    category: "LLM / RLHF",
    description:
      "Fine-tuning and Direct Preference Optimization (DPO) pipeline for open-weight foundation models specializing in multi-step mathematical reasoning.",
    tags: ["PyTorch", "DPO", "LoRA", "HuggingFace", "Slurm"],
    year: "2025",
    link: "#",
  },
  {
    title: "Autonomous Multi-Agent Swarm Orchestrator",
    category: "Agent Architectures",
    description:
      "Deterministic DAG orchestration framework with MCP tool harnesses, sandboxed code execution, and automated reflection loops.",
    tags: ["LangGraph", "FastAPI", "Vector DB", "Docker"],
    year: "2025",
    link: "#",
  },
  {
    title: "Latent Diffusion & Multimodal Embedder",
    category: "Generative Models",
    description:
      "Real-time cross-attention multimodal vector search and distilled latent image synthesis with low-latency GPU caching.",
    tags: ["Diffusion", "CLIP", "ONNX Runtime", "WebSockets"],
    year: "2024",
    link: "#",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Selected Projects
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Featured Engineering & Systems
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="group p-6 sm:p-8 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500">
                <span>{proj.category}</span>
                <span>{proj.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center justify-between gap-2 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                <span>{proj.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-black/[0.04] dark:bg-white/[0.06] text-slate-600 dark:text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
