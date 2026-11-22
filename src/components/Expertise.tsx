"use client";

import React from "react";

const domains = [
  {
    title: "Foundation Models & Alignment",
    detail:
      "Deep experience with Transformer architectures, parameter-efficient fine-tuning (LoRA, QLoRA), instruction tuning, and alignment algorithms (DPO, KTO, PPO).",
    stack: ["PyTorch", "Hugging Face", "DeepSpeed", "Megatron-LM"],
  },
  {
    title: "Inference & Systems Optimization",
    detail:
      "Scaling production LLM workloads with custom CUDA kernels, continuous batching, KV-cache paged attention, speculative decoding, and FP8/INT4 quantization.",
    stack: ["vLLM", "TensorRT-LLM", "Triton", "CUDA C++", "ONNX"],
  },
  {
    title: "Autonomous Agents & Tool Use",
    detail:
      "Architecting deterministic agent loops, hierarchical task decomposition, structured function calling, Model Context Protocol (MCP), and automated evaluation harnesses.",
    stack: ["MCP", "LangGraph", "Docker Sandboxes", "Vector Indexing"],
  },
  {
    title: "Multimodal & Latent Diffusion",
    detail:
      "Training and fine-tuning cross-attention vision-language models, image/audio latent diffusion backbones, and dense vector embeddings.",
    stack: ["Diffusion Pipelines", "CLIP", "Vector DBs", "OpenCV"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="flex flex-col gap-2 mb-12">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Core Domains
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Technical Expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((domain, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {domain.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {domain.detail}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {domain.stack.map((item) => (
                <span
                  key={item}
                  className="text-xs font-mono text-slate-500 dark:text-slate-400"
                >
                  • {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
