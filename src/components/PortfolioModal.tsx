"use client";

import React, { useState } from "react";
import { X, ArrowUpRight, Cpu, Layers, Terminal, Sparkles, Mail, Globe } from "lucide-react";

interface PortfolioModalProps {
  initialTab?: string;
  onClose: () => void;
}

export default function PortfolioModal({ initialTab = "solutions", onClose }: PortfolioModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-2xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-capsule rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl flex flex-col gap-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-orbitron font-bold text-sm text-white shadow-lg">
              MA
            </div>
            <div>
              <h2 className="font-orbitron font-bold text-xl text-white">
                Muhammad Azfar
              </h2>
              <p className="text-xs font-mono text-cyan-300">
                AI Engineer & Machine Learning Systems Architect
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full glass-btn flex items-center justify-center hover:bg-white/20 text-slate-300 hover:text-white transition-all cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-mono overflow-x-auto">
          {[
            { id: "solutions", label: "01 // Solutions & Models" },
            { id: "products", label: "02 // Systems & Stack" },
            { id: "docs", label: "03 // Research & Docs" },
            { id: "careers", label: "04 // Connect & Contact" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white text-slate-950 font-bold shadow-md"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Solutions */}
        {activeTab === "solutions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
            {[
              {
                title: "Distributed LLM Acceleration Harness",
                desc: "High-throughput continuous batching using vLLM and TensorRT-LLM with custom FP8 and INT4 quantization kernels.",
                tags: ["vLLM", "CUDA", "TensorRT", "Triton"],
              },
              {
                title: "Reasoning & Alignment Post-Training",
                desc: "Direct Preference Optimization (DPO) and reinforcement learning fine-tuning for frontier multi-turn reasoning agents.",
                tags: ["DPO", "LoRA", "PyTorch", "Slurm"],
              },
              {
                title: "Multimodal Latent Diffusion Pipeline",
                desc: "Sub-400ms cross-attention multimodal vector search and real-time generative image/audio synthesis engines.",
                tags: ["Diffusion", "CLIP", "ONNX Runtime", "WebSockets"],
              },
              {
                title: "Autonomous Agent Swarm Orchestrator",
                desc: "Deterministic DAG orchestration framework with Model Context Protocol (MCP) tool calling and sandboxed sandboxes.",
                tags: ["MCP", "LangGraph", "Docker", "Vector DB"],
              },
            ].map((sol, i) => (
              <div key={i} className="p-5 rounded-2xl glass-btn border border-white/10 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-base text-white">{sol.title}</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {sol.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-cyan-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Products & Stack */}
        {activeTab === "products" && (
          <div className="flex flex-col gap-4 py-2">
            <p className="text-sm text-slate-300">
              Core technologies and hardware platforms optimized for production inference:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "PyTorch & DeepSpeed", level: "Deep Frameworks" },
                { name: "CUDA C++ & Triton", level: "Kernel Engineering" },
                { name: "vLLM & TensorRT-LLM", level: "High-Throughput Engines" },
                { name: "Hugging Face & LoRA", level: "Fine-Tuning & Alignment" },
                { name: "Slurm & Ray", level: "Distributed Clusters" },
                { name: "Next.js & Three.js", level: "Frontier Interfaces" },
              ].map((tech, i) => (
                <div key={i} className="p-4 rounded-xl glass-btn flex flex-col gap-1">
                  <span className="font-semibold text-sm text-white">{tech.name}</span>
                  <span className="text-[11px] font-mono text-cyan-300">{tech.level}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Docs */}
        {activeTab === "docs" && (
          <div className="flex flex-col gap-4 py-2">
            <h3 className="font-bold text-base text-white">Technical Documentation & Research</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore open architecture benchmarks, kernel optimization blueprints, and fine-tuning datasets authored by Muhammad Azfar.
            </p>
            <div className="p-4 rounded-2xl glass-btn border border-white/15 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-cyan-300">WHITEPAPER // 2026</span>
                <h4 className="font-semibold text-sm text-white mt-1">
                  Sub-10ms Time-To-First-Token in High-Concurrency Agent Clusters
                </h4>
              </div>
              <button className="px-4 py-2 rounded-xl bg-white text-slate-950 text-xs font-semibold hover:bg-slate-200 cursor-pointer">
                Read PDF
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Contact */}
        {activeTab === "careers" && (
          <div className="flex flex-col gap-4 py-2">
            <h3 className="font-bold text-base text-white">Direct Engineering Inquiries</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Available for select AI architecture advisory, foundation model post-training, and high-performance computing consultations.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:contact@azfar.ai"
                className="px-6 py-3 rounded-full bg-white text-slate-950 font-semibold text-xs flex items-center gap-2 hover:bg-slate-200 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>contact@azfar.ai</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full glass-btn text-white font-semibold text-xs flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full glass-btn text-white font-semibold text-xs flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
