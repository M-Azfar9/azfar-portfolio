"use client";

import React, { useState } from "react";

interface TechCircleCardProps {
  name: string;
}

const officialLogoMap: Record<string, string> = {
  // Agents & LLMs
  langchain: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwoiX2kNENc1Iv7cL8jlK1j-DUx3NCRP1Ntxv9d4lWuA&s&theme=dark",
  langgraph: "https://cdn.simpleicons.org/langgraph",
  mcp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwHXQGcqsvOztw5JIik6Ni_ZIn5jO8fZHpP_UPduNQQ&s=10&theme=dark",
  "model context protocol": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwHXQGcqsvOztw5JIik6Ni_ZIn5jO8fZHpP_UPduNQQ&s=10&theme=dark",
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
  "google maps": "https://cdn.simpleicons.org/googlemaps",

  // Backend, Cloud & Infra
  python: "https://skillicons.dev/icons?i=python&theme=dark",
  fastapi: "https://skillicons.dev/icons?i=fastapi&theme=dark",
  postgresql: "https://skillicons.dev/icons?i=postgres&theme=dark",
  mongodb: "https://skillicons.dev/icons?i=mongodb&theme=dark",
  supabase: "https://skillicons.dev/icons?i=supabase&theme=dark",
  docker: "https://skillicons.dev/icons?i=docker&theme=dark",
  aws: "https://skillicons.dev/icons?i=aws&theme=dark",
  git: "https://skillicons.dev/icons?i=git&theme=dark",
  linux: "https://skillicons.dev/icons?i=linux&theme=dark",

  // Eval & Observability
  langsmith: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVHpSNXb11pocuEz52sJVdWRqC3S3WweroNM6wXhZFA&s=10",
  deepeval: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsMjJLChS0Jwh3ziT5BPL-0X71NWql46OyiF895gvtg&s",
  "github actions": "https://skillicons.dev/icons?i=githubactions&theme=dark",
  vercel: "https://skillicons.dev/icons?i=vercel&theme=dark",
};

// Deterministic vibrant random fill color palette
const randomPalette = [
  "#4f46e5", // Indigo
  "#059669", // Emerald
  "#d97706", // Amber
  "#e11d48", // Rose
  "#7c3aed", // Violet
  "#0d9488", // Teal
  "#0284c7", // Sky Blue
  "#ea580c", // Deep Orange
  "#c026d3", // Fuchsia
  "#16a34a", // Green
  "#dc2626", // Red
  "#4338ca", // Royal Blue
  "#0891b2", // Cyan
  "#9333ea", // Purple
];

function getDelthaFallback(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  const color = randomPalette[Math.abs(hash) % randomPalette.length];

  const words = name.trim().split(/[\s\-_/]+/).filter(Boolean);
  let monogram = "";
  if (words.length > 1) {
    monogram = (words[0][0] + words[1][0]).toUpperCase();
  } else if (name.length <= 4) {
    monogram = name.toUpperCase();
  } else {
    monogram = name.slice(0, 3).toUpperCase();
  }

  return { color, monogram };
}

export function TechCircleCard({ name }: TechCircleCardProps) {
  const [imgError, setImgError] = useState(false);
  const normalized = name.toLowerCase().trim();

  let officialUrl = officialLogoMap[normalized];
  if (!officialUrl) {
    const matchKey = Object.keys(officialLogoMap).find((k) => normalized.includes(k));
    if (matchKey) {
      officialUrl = officialLogoMap[matchKey];
    }
  }

  const { color, monogram } = getDelthaFallback(name);
  const isSimpleIcon = officialUrl ? officialUrl.includes("simpleicons.org") : false;

  return (
    <div className="flex flex-col items-center gap-2 group cursor-default" title={name}>
      {/* Circular Card matching reference image */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-slate-200/90 bg-white shadow-xs flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:border-slate-400 group-hover:shadow-md shrink-0">
        {officialUrl && !imgError ? (
          <img
            src={officialUrl}
            alt={name}
            onError={() => setImgError(true)}
            className={`w-full h-full ${isSimpleIcon ? "p-2.5 object-contain" : "object-cover"} select-none pointer-events-none rounded-full`}
            loading="eager"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center select-none"
            style={{ backgroundColor: color }}
          >
            <span className="font-hero text-xs sm:text-sm font-black text-white tracking-wider">
              {monogram}
            </span>
          </div>
        )}
      </div>

      {/* Technology Name */}
      <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-800 text-center leading-tight line-clamp-2 max-w-[85px] group-hover:text-black transition-colors">
        {name}
      </span>
    </div>
  );
}
