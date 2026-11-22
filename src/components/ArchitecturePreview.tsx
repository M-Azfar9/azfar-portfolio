"use client";

import React from "react";
import { Network, BrainCircuit, Cpu, Bot, ArrowRight, Check } from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Large Language & Reasoning Models",
    category: "LLM / RLHF / DPO",
    desc: "Post-training, preference optimization (DPO, KTO), and domain-specific fine-tuning on MoE architectures with rigorous evaluation benchmarks.",
    tags: ["Llama-3", "DeepSeek", "RLHF", "DSPy", "LoRA"],
    stats: "99.2% alignment pass",
  },
  {
    icon: Cpu,
    title: "High-Throughput Inference & GPU Systems",
    category: "HPC / CUDA / Inference",
    desc: "Custom CUDA kernels, TensorRT-LLM, vLLM continuous batching, speculative decoding, and FP8/INT4 quantization minimizing TTFT and server TCO.",
    tags: ["vLLM", "TensorRT-LLM", "Triton", "CUDA", "FlashAttention"],
    stats: "3.8x throughput speedup",
  },
  {
    icon: Network,
    title: "Multimodal & Latent Diffusion",
    category: "Vision / Audio / Latent Space",
    desc: "Cross-attention multimodal fusion, CLIP vector indexing, and latent diffusion architectures optimized for real-time generative workflows.",
    tags: ["SDXL", "FLUX", "Diffusion", "CLIP", "Vector RAG"],
    stats: "<450ms image synthesis",
  },
  {
    icon: Bot,
    title: "Autonomous Agent Architectures",
    category: "Multi-Agent / Swarms",
    desc: "Self-correcting agent swarms with memory persistence, tool calling harnesses, dynamic DAG orchestrations, and deterministic sandboxing.",
    tags: ["Agent Swarms", "LangGraph", "Mcp Protocol", "Auto-Eval"],
    stats: "Zero-loop failover",
  },
];

export default function ArchitecturePreview() {
  return (
    <section id="architecture" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mx-auto text-xs font-mono text-blue-600 dark:text-cyan-400">
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          AI Architecture & Systems Engineering
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          From mathematical model foundations to production inference at scale.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => {
          const Icon = cap.icon;
          return (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 group shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/5">
                    {cap.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-mono pt-1 text-slate-500">
                  <span>Benchmark</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                    {cap.stats}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
