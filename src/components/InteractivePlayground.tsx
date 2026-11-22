"use client";

import React, { useState } from "react";
import { Sliders, Cpu, Activity, Play, RefreshCw, Terminal, CheckCircle2 } from "lucide-react";

export default function InteractivePlayground() {
  const [dimensions, setDimensions] = useState(1536);
  const [attentionHeads, setAttentionHeads] = useState(32);
  const [temperature, setTemperature] = useState(0.7);
  const [quantization, setQuantization] = useState<"FP16" | "INT8" | "INT4" | "AWQ">("INT4");
  const [isSimulating, setIsSimulating] = useState(false);
  const [tokensProcessed, setTokensProcessed] = useState(14820);

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setTokensProcessed((prev) => prev + Math.floor(Math.random() * 5000 + 1200));
      setIsSimulating(false);
    }, 600);
  };

  const calculatedLatency = ((1536 / dimensions) * (attentionHeads / 32) * (quantization === "INT4" ? 6.2 : quantization === "INT8" ? 11.4 : 19.8)).toFixed(1);
  const vramFootprint = ((dimensions * attentionHeads * 0.0004) * (quantization === "INT4" ? 4.2 : quantization === "INT8" ? 8.1 : 16.0)).toFixed(1);

  return (
    <section id="interactive-core" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card mx-auto text-xs font-mono text-cyan-600 dark:text-cyan-400">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Neural Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          Latent Inference Simulator
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Tweak hyperparameters in real time to simulate latency, quantization overhead, and VRAM memory bandwidth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Card */}
        <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2 text-base">
              <Sliders className="w-4 h-4 text-blue-500 dark:text-cyan-400" />
              Runtime Hyperparameters
            </h3>
            <button
              onClick={() => {
                setDimensions(1536);
                setAttentionHeads(32);
                setTemperature(0.7);
                setQuantization("INT4");
              }}
              className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Defaults
            </button>
          </div>

          {/* Slider 1: Latent Dimension */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-400">Hidden Embedding Dimension ($d_{"{model}"}$)</span>
              <span className="font-semibold text-blue-600 dark:text-cyan-400">{dimensions} dim</span>
            </div>
            <input
              type="range"
              min="512"
              max="4096"
              step="256"
              value={dimensions}
              onChange={(e) => setDimensions(Number(e.target.value))}
              className="w-full accent-cyan-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>512 (Small / Mobile)</span>
              <span>1536 (Llama 8B)</span>
              <span>4096 (Frontier 70B)</span>
            </div>
          </div>

          {/* Slider 2: Attention Heads */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-600 dark:text-slate-400">Multi-Head Query & Key Projections</span>
              <span className="font-semibold text-purple-600 dark:text-purple-400">{attentionHeads} Heads</span>
            </div>
            <input
              type="range"
              min="8"
              max="64"
              step="8"
              value={attentionHeads}
              onChange={(e) => setAttentionHeads(Number(e.target.value))}
              className="w-full accent-purple-500 cursor-pointer"
            />
          </div>

          {/* Quantization Selector */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Weight Precision & Kernel Serialization
            </span>
            <div className="grid grid-cols-4 gap-2">
              {(["INT4", "INT8", "AWQ", "FP16"] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => setQuantization(q)}
                  className={`py-2 text-xs font-mono font-medium rounded-xl border transition-all ${
                    quantization === q
                      ? "bg-blue-600 text-white border-blue-600 dark:bg-cyan-500 dark:text-slate-950 dark:border-cyan-400 shadow-sm"
                      : "border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger Action */}
          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-md active:scale-98 disabled:opacity-50"
          >
            {isSimulating ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <Play className="w-4 h-4 fill-current" />
            )}
            <span>{isSimulating ? "Dispatching CUDA Kernels..." : "Simulate Forward Pass"}</span>
          </button>
        </div>

        {/* Telemetry & Output Console */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col gap-4 shadow-xl">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-500" />
              Simulated Kernel Profiling
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 font-mono">
                <span className="text-xs text-slate-500">Predicted TTFT (First Token)</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">{calculatedLatency} ms</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 font-mono">
                <span className="text-xs text-slate-500">Estimated GPU VRAM</span>
                <span className="text-base font-bold text-slate-900 dark:text-white">{vramFootprint} GB</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 font-mono">
                <span className="text-xs text-slate-500">Total Tokens Processed</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400">{tokensProcessed.toLocaleString()} tok</span>
              </div>
            </div>

            {/* Simulated Console Snippet */}
            <div className="mt-2 p-3.5 rounded-xl bg-slate-950 text-slate-300 font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner overflow-hidden">
              <div className="text-slate-500 mb-1">// nvprof stream output</div>
              <div className="text-cyan-400">
                [OK] FlashAttention3::forward &lt;dim={dimensions}, heads={attentionHeads}&gt;
              </div>
              <div className="text-emerald-400">
                [OK] Quantization kernel: {quantization} gemm_fp8_sm90 success
              </div>
              <div className="text-amber-400">
                [PERF] Memory bandwidth utilization: 89.2% HBM3e
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
