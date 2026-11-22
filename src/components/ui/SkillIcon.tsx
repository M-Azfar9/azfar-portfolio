import React from "react";

interface SkillIconProps {
  name: string;
}

export function SkillIcon({ name }: SkillIconProps) {
  const normalized = name.toLowerCase().trim();

  // Official logo image mapping from user-provided URLs
  const officialLogoMap: Record<string, string> = {
    // Agents & LLMs
    langchain: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoiX2kNENc1Iv7cL8jlK1j-DUx3NCRP1Ntxv9d4lWuA&s&theme=dark",
    langgraph: "https://cdn.simpleicons.org/langgraph",
    mcp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwHXQGcqsvOztw5JIik6Ni_ZIn5jO8fZHpP_UPduNQQ&s=10&theme=dark",
    "model context protocol (mcp)": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwHXQGcqsvOztw5JIik6Ni_ZIn5jO8fZHpP_UPduNQQ&s=10&theme=dark",
    "sandboxed mcp tools": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwHXQGcqsvOztw5JIik6Ni_ZIn5jO8fZHpP_UPduNQQ&s=10&theme=dark",
    "hugging face": "https://cdn.simpleicons.org/huggingface",

    // Deep Learning & ML
    pytorch: "https://skillicons.dev/icons?i=pytorch&theme=dark",
    tensorflow: "https://skillicons.dev/icons?i=tensorflow&theme=dark",
    keras: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pdbkSrXZVzuxxqFlO5Ag2Km2YobK9QJ7jx4_fyYDoQ&s=10",
    "scikit-learn": "https://skillicons.dev/icons?i=sklearn&theme=dark",

    // Mobile
    flutter: "https://skillicons.dev/icons?i=flutter&theme=dark",
    dart: "https://skillicons.dev/icons?i=dart&theme=dark",
    firebase: "https://skillicons.dev/icons?i=firebase&theme=dark",
    "google maps sdk": "https://cdn.simpleicons.org/googlemaps",
    "google maps": "https://cdn.simpleicons.org/googlemaps",

    // Backend, Cloud & Infra
    python: "https://skillicons.dev/icons?i=python&theme=dark",
    fastapi: "https://skillicons.dev/icons?i=fastapi&theme=dark",
    postgresql: "https://skillicons.dev/icons?i=postgres&theme=dark",
    mongodb: "https://skillicons.dev/icons?i=mongodb&theme=dark",
    supabase: "https://skillicons.dev/icons?i=supabase&theme=dark",
    docker: "https://skillicons.dev/icons?i=docker&theme=dark",
    aws: "https://skillicons.dev/icons?i=aws&theme=dark",
    "aws (ec2)": "https://skillicons.dev/icons?i=aws&theme=dark",
    git: "https://skillicons.dev/icons?i=git&theme=dark",
    linux: "https://skillicons.dev/icons?i=linux&theme=dark",

    // Eval & Observability
    langsmith: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVHpSNXb11pocuEz52sJVdWRqC3S3WweroNM6wXhZFA&s=10",
    deepeval: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsMjJLChS0Jwh3ziT5BPL-0X71NWql46OyiF895gvtg&s",
    "github actions": "https://skillicons.dev/icons?i=githubactions&theme=dark",
    vercel: "https://skillicons.dev/icons?i=vercel&theme=dark",
  };

  // Check if official logo URL exists for this skill
  let officialUrl: string | undefined = officialLogoMap[normalized];

  if (!officialUrl) {
    const matchKey = Object.keys(officialLogoMap).find((k) => normalized.includes(k));
    if (matchKey) {
      officialUrl = officialLogoMap[matchKey];
    }
  }

  // Official logo: Fill the complete card edge-to-edge
  if (officialUrl) {
    const isTransparentSvg =
      normalized.includes("langgraph") ||
      normalized.includes("google maps") ||
      normalized.includes("hugging face");

    if (isTransparentSvg) {
      return (
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 bg-white border border-slate-200/90 overflow-hidden p-2">
          <img
            src={officialUrl}
            alt={name}
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>
      );
    }

    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 overflow-hidden bg-slate-900">
        <img
          src={officialUrl}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          loading="eager"
        />
      </div>
    );
  }

  // Deltha Font Monogram & Solid Color Mapping
  const getDelthaConfig = (raw: string): { monogram: string; bg: string; text: string } => {
    const s = raw.toLowerCase().trim();

    if (s.includes("rag")) return { monogram: "RAG", bg: "#4338CA", text: "#FFFFFF" }; // Indigo
    if (s.includes("swarm") || s.includes("mas")) return { monogram: "MAS", bg: "#047857", text: "#FFFFFF" }; // Emerald
    if (s.includes("tool calling") || s.includes("routing")) return { monogram: "TC", bg: "#D97706", text: "#FFFFFF" }; // Amber
    if (s.includes("hitl") || s.includes("human-in-the-loop")) return { monogram: "HITL", bg: "#BE123C", text: "#FFFFFF" }; // Rose
    if (s.includes("guardrail") || s.includes("prompt injection")) return { monogram: "G", bg: "#0F172A", text: "#FFFFFF" }; // Dark Slate
    if (s.includes("checkpoint") || s.includes("state")) return { monogram: "CP", bg: "#6D28D9", text: "#FFFFFF" }; // Purple
    if (s.includes("lora") || s.includes("peft")) return { monogram: "LoRA", bg: "#0F766E", text: "#FFFFFF" }; // Teal
    if (s.includes("sft") || s.includes("supervised")) return { monogram: "SFT", bg: "#0369A1", text: "#FFFFFF" }; // Cyan
    if (s.includes("trl")) return { monogram: "TRL", bg: "#1D4ED8", text: "#FFFFFF" }; // Blue
    if (s.includes("quantization")) return { monogram: "Q", bg: "#A21CAF", text: "#FFFFFF" }; // Fuchsia
    if (s.includes("transfer learning")) return { monogram: "TL", bg: "#15803D", text: "#FFFFFF" }; // Green
    if (s.includes("riverpod")) return { monogram: "RP", bg: "#0284C7", text: "#FFFFFF" }; // Sky Blue
    if (s.includes("isar")) return { monogram: "I", bg: "#1E40AF", text: "#FFFFFF" }; // Cobalt
    if (s.includes("postgis")) return { monogram: "GIS", bg: "#365314", text: "#FFFFFF" }; // Lime
    if (s.includes("clean architecture")) return { monogram: "CA", bg: "#334155", text: "#FFFFFF" }; // Slate
    if (s.includes("rest")) return { monogram: "API", bg: "#C2410C", text: "#FFFFFF" }; // Orange
    if (s.includes("faiss")) return { monogram: "F", bg: "#1E3A8A", text: "#FFFFFF" }; // Navy
    if (s.includes("qdrant")) return { monogram: "QD", bg: "#9F1239", text: "#FFFFFF" }; // Wine
    if (s.includes("chromadb") || s.includes("chroma")) return { monogram: "CR", bg: "#581C87", text: "#FFFFFF" }; // Deep Violet
    if (s.includes("bge") || s.includes("gemini")) return { monogram: "BGE", bg: "#0891B2", text: "#FFFFFF" }; // Cyan
    if (s.includes("hybrid search") || s.includes("rerank")) return { monogram: "HS", bg: "#5B21B6", text: "#FFFFFF" }; // Royal Violet
    if (s.includes("xgboost")) return { monogram: "XG", bg: "#14532D", text: "#FFFFFF" }; // Forest
    if (s.includes("catboost")) return { monogram: "CB", bg: "#B45309", text: "#FFFFFF" }; // Warm Ochre
    if (s.includes("lightgbm")) return { monogram: "LGB", bg: "#4D7C0F", text: "#FFFFFF" }; // Olive
    if (s.includes("judge")) return { monogram: "J", bg: "#991B1B", text: "#FFFFFF" }; // Crimson
    if (s.includes("regression")) return { monogram: "RT", bg: "#3730A3", text: "#FFFFFF" }; // Deep Indigo
    if (s.includes("ci/cd") || s.includes("pipeline")) return { monogram: "CI", bg: "#78350F", text: "#FFFFFF" }; // Bronze
    if (s.includes("cnn") || s.includes("rnn")) return { monogram: "NN", bg: "#065F46", text: "#FFFFFF" }; // Pine

    // Deterministic solid palette fallback
    const solidPalette = [
      { bg: "#4338CA", text: "#FFFFFF" },
      { bg: "#047857", text: "#FFFFFF" },
      { bg: "#D97706", text: "#FFFFFF" },
      { bg: "#BE123C", text: "#FFFFFF" },
      { bg: "#6D28D9", text: "#FFFFFF" },
      { bg: "#0F766E", text: "#FFFFFF" },
      { bg: "#0369A1", text: "#FFFFFF" },
      { bg: "#1D4ED8", text: "#FFFFFF" },
      { bg: "#A21CAF", text: "#FFFFFF" },
      { bg: "#15803D", text: "#FFFFFF" },
      { bg: "#C2410C", text: "#FFFFFF" },
      { bg: "#9F1239", text: "#FFFFFF" },
      { bg: "#581C87", text: "#FFFFFF" },
      { bg: "#0891B2", text: "#FFFFFF" },
    ];

    let hash = 0;
    for (let i = 0; i < raw.length; i++) {
      hash = (hash << 5) - hash + raw.charCodeAt(i);
      hash |= 0;
    }
    const color = solidPalette[Math.abs(hash) % solidPalette.length];

    const words = raw.split(" ").filter(Boolean);
    const mono = words.length > 1 ? (words[0][0] + words[1][0]).toUpperCase() : raw.slice(0, 3).toUpperCase();

    return { monogram: mono, bg: color.bg, text: color.text };
  };

  const { monogram, bg, text } = getDelthaConfig(name);

  return (
    <div
      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0 overflow-hidden"
      style={{ backgroundColor: bg }}
    >
      <span
        className="font-hero text-sm sm:text-base font-bold tracking-wider select-none"
        style={{ color: text }}
      >
        {monogram}
      </span>
    </div>
  );
}
