"use client";

import React from "react";
import { BentoCard, BentoSectionHeader } from "@/components/ui/BentoCard";
import { SkillIcon } from "@/components/ui/SkillIcon";

export default function SkillsSection() {
  const fullSkills = [
    {
      category: "Generative AI & LLM Systems",
      abstractIcon: "/abstracts/geometry1.svg",
      items: [
        "LangGraph",
        "LangChain",
        "Model Context Protocol (MCP)",
        "Agentic RAG",
        "Multi-Agent Swarms",
        "Tool Calling & Routing",
        "Human-in-the-Loop (HITL)",
        "Prompt Injection & Guardrails",
        "State Checkpointing",
      ],
    },
    {
      category: "Fine-Tuning & Deep Learning",
      abstractIcon: "/abstracts/geometry2.svg",
      items: [
        "PyTorch",
        "Hugging Face",
        "TensorFlow",
        "Keras",
        "PEFT & LoRA / QLoRA",
        "Supervised Fine-Tuning (SFT)",
        "TRL",
        "Quantization (INT4/INT8/FP16)",
        "Transfer Learning",
      ],
    },
    {
      category: "Mobile Development (Flutter & Dart)",
      abstractIcon: "/abstracts/geometry3.svg",
      items: [
        "Flutter",
        "Dart",
        "Riverpod",
        "Firebase",
        "Google Maps SDK",
        "Supabase",
        "Isar Database",
        "PostGIS",
        "Clean Architecture",
        "REST APIs",
      ],
    },
    {
      category: "Retrieval, Vector DBs & ML",
      abstractIcon: "/abstracts/geometry4.svg",
      items: [
        "FAISS",
        "Qdrant",
        "ChromaDB",
        "Vector Embeddings (BGE, Gemini)",
        "Hybrid Search & Reranking",
        "Scikit-learn",
        "XGBoost",
        "CatBoost",
        "LightGBM",
      ],
    },
    {
      category: "Backend & Distributed Cloud",
      abstractIcon: "/abstracts/geometry5.svg",
      items: [
        "Python",
        "FastAPI",
        "Docker",
        "PostgreSQL",
        "MongoDB",
        "AWS (EC2)",
        "Git",
        "Linux",
      ],
    },
    {
      category: "Evaluation, Observability & Ops",
      abstractIcon: "/abstracts/geometry6.svg",
      items: [
        "LangSmith",
        "DeepEval",
        "LLM-as-a-Judge",
        "GitHub Actions",
        "Vercel",
        "Sandboxed MCP Tools",
        "Regression Testing",
        "CI/CD Pipelines",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-16 max-w-[1360px] mx-auto relative z-20">
      {/* Scoped CSS Keyframes ensuring absolute browser compatibility */}
      <style>{`
        @keyframes marqueeScrollLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .domain-bento-card:hover .domain-marquee-track {
          animation-play-state: paused !important;
        }
      `}</style>

      <BentoSectionHeader
        eyebrow="04 // TECHNICAL SPECIFICATION"
        title="Technical Architecture Matrix"
        description="Continuous horizontal marquee stream across Generative AI systems, model fine-tuning, enterprise mobile engineering, and distributed cloud infrastructure."
      />

      {/* 6-Card Responsive Bento Matrix with Independent Auto-Scrolling Marquees */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fullSkills.map((skillGroup, idx) => {
          // 4x duplication guarantees seamless, gapless horizontal infinite loop on all screen sizes
          const quadrupledItems = [
            ...skillGroup.items,
            ...skillGroup.items,
            ...skillGroup.items,
            ...skillGroup.items,
          ];

          // Same physical speed (pixels-per-second) calculation:
          // Duration is proportional to item count so all boxes move at identical pace
          const duration = skillGroup.items.length * 3.2;

          return (
            <BentoCard
              key={idx}
              className="domain-bento-card relative flex flex-col justify-between p-5 sm:p-8 overflow-hidden group cursor-pointer transition-all duration-300 hover:border-[#588ce4]/60 hover:shadow-[0_16px_36px_-6px_rgba(88,140,228,0.12)]"
            >
              {/* Centered Domain Header with Abstract Icon Above Heading */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center pt-2">
                <div className="w-14 h-14 sm:w-20 sm:h-20 mb-2.5 sm:mb-3 flex items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-1">
                  <img
                    src={skillGroup.abstractIcon}
                    alt={`${skillGroup.category} abstract icon`}
                    className="w-full h-full object-contain select-none pointer-events-none"
                    loading="eager"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sora tracking-tight group-hover:text-[#2563eb] transition-colors text-center px-1 sm:px-2">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Smooth Full-Width Horizontal Transition Line Above Marquee */}
              <div className="relative z-10 w-full h-[1px] bg-slate-200/90 my-5 transition-colors duration-300 group-hover:bg-[#588ce4]/30" />

              {/* Marquee Window: Individual Pause on Hover (Only This Domain Stops) */}
              <div className="relative z-10 w-full overflow-hidden marquee-mask py-2">
                <div
                  className="domain-marquee-track flex flex-row flex-nowrap items-center w-max"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    alignItems: "center",
                    width: "max-content",
                    animation: `marqueeScrollLeft ${duration}s linear infinite`,
                    willChange: "transform",
                  }}
                >
                  {quadrupledItems.map((skill, sIdx) => (
                    <React.Fragment key={`${skill}-${sIdx}`}>
                      {/* Marquee Item: Large App Icon on Top, Name Below */}
                      <div className="flex flex-col items-center justify-center gap-2 px-5 sm:px-6 shrink-0 select-none group/item">
                        <SkillIcon name={skill} />
                        <span className="font-sans text-xs sm:text-sm font-semibold text-slate-800 text-center tracking-tight whitespace-nowrap">
                          {skill}
                        </span>
                      </div>

                      {/* Subtle Vertical Divider Line Between Skills */}
                      <div className="h-10 w-[1px] bg-slate-200/90 shrink-0 self-center" />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </section>
  );
}
