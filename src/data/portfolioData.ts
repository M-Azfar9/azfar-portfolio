export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "ai" | "mobile" | "ml";
  description: string[];
  metrics?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  tagLabel?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  url: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpaOrGrade: string;
  courses: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    eyebrow: string;
    tagline: string;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    status: string;
    bio: string;
  };
  achievements: {
    title: string;
    event: string;
    organization: string;
    detail: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "MUHAMMAD AZFAR",
    role: "AI Engineer & Flutter Developer",
    eyebrow: "AI ENGINEER & FLUTTER DEVELOPER",
    tagline: "STEP BEYOND THE KNOWN",
    location: "Islamabad, Pakistan",
    email: "azfaransari55@gmail.com",
    phone: "+92 318 2566989",
    github: "https://github.com/M-Azfar9",
    linkedin: "https://www.linkedin.com/in/muhammad-azfar-687304288",
    resumeUrl: "/resume.pdf",
    status: "NUST · Open for Opportunities",
    bio: "Python and AI Engineer & Flutter Developer (Software Engineering undergraduate at NUST, Islamabad) building production-oriented Generative AI systems and scalable cross-platform mobile apps. Hands-on expertise in LangGraph, LangChain, MCP, RAG architectures, LLM evaluation (LangSmith, DeepEval), fine-tuning (LoRA/PEFT), and enterprise Flutter development.",
  },

  achievements: [
    {
      title: "Winner",
      event: "Code Connect 2025 AI Hackathon",
      organization: "NUST",
      detail: "1st place among 20+ teams across universities, delivering a production-ready AI solution under intense competition pressure.",
    },
    {
      title: "Runner-Up (2nd Place)",
      event: "DevCon AI Hackathon",
      organization: "MCS NUST",
      detail: "Recognized for system architecture quality, technical depth, and collaborative engineering.",
    },
  ],

  skills: [
    {
      category: "Generative AI & LLM Systems",
      items: [
        "LangGraph",
        "LangChain",
        "Model Context Protocol (MCP)",
        "Agentic RAG",
        "Multi-Agent Swarms",
        "Tool Calling & Routing",
        "Human-in-the-Loop (HITL)",
        "LangSmith",
        "DeepEval",
        "LLM-as-a-Judge",
        "Prompt Injection & Guardrails",
        "Checkpointing & State Persistence",
      ],
    },
    {
      category: "Mobile Development (Flutter & Dart)",
      items: [
        "Flutter",
        "Dart",
        "Riverpod",
        "Firebase (Auth, Firestore, FCM, Storage)",
        "Google Maps SDK",
        "REST API Integration",
        "Isar Offline Database",
        "Supabase (Auth, Realtime, Storage)",
        "PostGIS",
        "Clean Architecture",
      ],
    },
    {
      category: "Fine-Tuning & Deep Learning",
      items: [
        "PyTorch",
        "Hugging Face Transformers",
        "PEFT & LoRA / QLoRA",
        "Supervised Fine-Tuning (SFT)",
        "TRL",
        "TensorFlow & Keras",
        "CNNs, RNNs, LSTMs, GRUs",
        "Quantization (INT4/INT8/FP16)",
        "Transfer Learning",
      ],
    },
    {
      category: "Retrieval, Search & ML",
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
      category: "Backend, Cloud & Engineering",
      items: [
        "FastAPI",
        "Python (Async, Pydantic)",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Docker",
        "Git & GitHub Actions (CI/CD)",
        "Vercel",
      ],
    },
  ],

  projects: [
    {
      id: "doxer-ai",
      title: "Doxer AI: Codebase Intelligence Fabric",
      subtitle: "Hierarchical Multi-Agent System for Code Analysis, Documentation & SRS",
      category: "ai",
      image: "/Projects-SS/Doxer-AI.png",
      tagLabel: "Agentic AI & LLMs",
      description: [
        "Engineered a hierarchical multi-agent system in Python with LangGraph, orchestrating bounded Technical QA, Documentation, and SRS subagents; achieved 100% cross-route accuracy.",
        "Built code-aware documentation generation with AST extraction and evidence-based grounding, improving document completeness from 91.7% to 100% with 86.7% grounding critic.",
        "Designed stateful Human-in-the-Loop (HITL) workflows with LangGraph checkpointing to resolve ambiguities and generate IEEE-compliant SRS with validated Mermaid diagrams.",
        "Built evaluation harness with LangSmith and DeepEval, hitting 93.33% golden-dataset pass rate with 100% sandbox containment and prompt-injection defenses.",
      ],
      metrics: "100% Routing Accuracy · 93.3% Golden Dataset Pass",
      technologies: ["Python", "LangGraph", "MCP", "LangSmith", "DeepEval", "AST", "FastAPI"],
      githubUrl: "https://github.com/M-Azfar9",
    },
    {
      id: "qwen3-finetune",
      title: "Qwen3 Function Calling: Parameter-Efficient Fine-Tuning",
      subtitle: "FP16 LoRA Fine-Tuning and Benchmarking of Tool-Calling LLMs",
      category: "ai",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "LLM Fine-Tuning",
      description: [
        "Fine-tuned Qwen3-1.7B using supervised fine-tuning (SFT) with FP16 LoRA on the Glaive Function Calling v2 dataset, training 17.4M parameters (1.0% of model).",
        "Engineered custom evaluation harness to measure JSON validity, tool-name accuracy, and exact argument matching against the base model.",
        "Improved valid JSON generation from 30% to 100%, tool-name accuracy from 26% to 100%, and exact argument accuracy from 24% to 94% on clean test benchmarks.",
      ],
      metrics: "100% JSON Validity · 94% Exact Argument Match",
      technologies: ["Python", "PyTorch", "Hugging Face", "TRL", "PEFT", "LoRA"],
      githubUrl: "https://github.com/M-Azfar9",
    },
    {
      id: "sonyc-rag",
      title: "Sonyc: Production Multimodal RAG System",
      subtitle: "End-to-End Generative AI Document Intelligence Platform",
      category: "ai",
      image: "/Projects-SS/Sonyc-AI.jfif",
      tagLabel: "Multimodal RAG",
      description: [
        "Designed and deployed a full RAG system ingesting PDFs, GitHub repos, YouTube transcripts, and live web pages into a unified vector store.",
        "Utilized semantic chunking with BGE & Gemini embeddings and dual FAISS/ChromaDB indexing for ultra-fast vector retrieval.",
        "Built modular LangChain runnable pipelines with output parsers and deployed FastAPI backend on AWS EC2.",
      ],
      metrics: "Multi-Source Ingestion · AWS Deployed",
      technologies: ["Python", "FastAPI", "LangChain", "FAISS", "ChromaDB", "AWS EC2"],
      githubUrl: "https://github.com/M-Azfar9",
    },
    {
      id: "kmhub",
      title: "KMHub: Islamic Super App",
      subtitle: "Production Flutter Application with Real-Time Communication & AI Assistant",
      category: "mobile",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "Consumer Mobile App",
      description: [
        "Built and shipped a live production mobile app for ZAM Studios combining real-time multimedia chat (text, video, audio, links), Quran with offline audio, and Hadith books.",
        "Integrated AI-powered Islamic chatbot, scholar consulting features, Jamaat tracking, and precision prayer times with Firebase Cloud Messaging.",
      ],
      metrics: "Live on Google Play Store · Production App",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "FCM", "AI Chatbot"],
    },
    {
      id: "forikaam",
      title: "ForiKaam: Reverse-Auction Labor Marketplace",
      subtitle: "Dual-App Mobile Marketplace with Real-Time Bidding & Offline Architecture",
      category: "mobile",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "Marketplace Mobile",
      description: [
        "Built dual Flutter mobile applications for customers and workers with location-based requests, parameterized job postings, and real-time reverse-auction bidding.",
        "Implemented feature-based clean architecture with Riverpod, Supabase real-time streams, Isar local caching, and offline action queuing.",
        "Engineered secure Dio authentication layer with automated JWT token refresh and repository abstractions.",
      ],
      metrics: "Dual-App Architecture · Real-time Supabase Streams",
      technologies: ["Flutter", "Dart", "Riverpod", "Supabase", "Isar", "Dio", "Firebase"],
      githubUrl: "https://github.com/M-Azfar9",
    },
    {
      id: "ride-hailing",
      title: "Enterprise Ride-Hailing Platform",
      subtitle: "Multi-Role Transport Ecosystem for Intracity & Intercity Travel",
      category: "mobile",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "Transport Platform",
      description: [
        "Developed cross-platform mobile system for ZAM Studios covering customer, driver, and fleet owner (multi-driver management) interfaces.",
        "Implemented real-time geolocation tracking with Google Maps SDK, role-based dashboards, and parcel/cargo delivery flows.",
      ],
      metrics: "Multi-Role Dashboards · Google Maps SDK",
      technologies: ["Flutter", "Dart", "Google Maps SDK", "Firebase", "REST APIs"],
    },
    {
      id: "cricket-predictor",
      title: "Cricket Score & Outcome Predictor",
      subtitle: "Supervised Machine Learning Regression & Classification Pipeline",
      category: "ml",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "Predictive ML",
      description: [
        "Conducted end-to-end ML lifecycle: EDA, feature engineering, hyperparameter tuning, and cross-validation across six model variants.",
        "Deployed highest-performing ensemble model (CatBoost & XGBoost) as an interactive FastAPI prediction service.",
      ],
      metrics: "Six-Model Cross-Validation · FastAPI Service",
      technologies: ["Python", "Scikit-learn", "XGBoost", "CatBoost", "FastAPI"],
      githubUrl: "https://github.com/M-Azfar9",
    },
    {
      id: "chest-infection-cv",
      title: "Chest Infection Classification (Computer Vision)",
      subtitle: "Deep Learning Medical Image Diagnostics",
      category: "ml",
      image: "/Projects-SS/qwen-fine-tuning.png",
      tagLabel: "Medical Deep Learning",
      description: [
        "Fine-tuned VGG16 and ResNet50 convolutional networks via transfer learning on labeled chest X-ray datasets.",
        "Engineered robust data augmentation and class-imbalance solutions; evaluated rigorously using ROC-AUC, precision, recall, and F1-score.",
      ],
      metrics: "Transfer Learning · High ROC-AUC",
      technologies: ["Python", "TensorFlow", "Keras", "VGG16", "ResNet50"],
      githubUrl: "https://github.com/M-Azfar9",
    },
  ],

  experience: [
    {
      role: "Associate Software Engineer",
      company: "ZAM Studios",
      location: "Remote",
      period: "Nov 2024 — Present",
      type: "Full-Time Remote",
      description: [
        "Build and ship production Flutter mobile applications integrated with Generative AI features, applying rigorous prompt engineering, jailbreak testing, and injection defenses.",
        "Engineer scalable, maintainable mobile architectures utilizing Riverpod state management, Google Maps SDK, Firebase backend services, and REST APIs.",
        "Collaborate in a distributed engineering team, conducting peer code reviews and maintaining clean Git-based CI/CD workflows across continuous release cycles.",
      ],
      technologies: ["Flutter", "Dart", "Generative AI", "Firebase", "Google Maps", "Riverpod", "REST APIs"],
    },
  ],

  education: [
    {
      institution: "National University of Sciences and Technology (NUST)",
      degree: "Bachelor of Engineering (B.E.) in Software Engineering",
      period: "2023 — 2027",
      location: "Islamabad, Pakistan",
      gpaOrGrade: "GPA: 3.44 / 4.0",
      courses: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Data Structures & Algorithms",
        "Database Systems",
        "Cloud Computing",
        "Software Engineering Principles",
      ],
    },
    {
      institution: "Adamjee Government Science College",
      degree: "Intermediate (Pre-Engineering)",
      period: "2021 — 2023",
      location: "Karachi, Pakistan",
      gpaOrGrade: "79% (A-Grade)",
      courses: ["Mathematics", "Physics", "Chemistry"],
    },
  ],

  certifications: [
    {
      title: "IBM RAG and Agentic AI Specialization",
      issuer: "Coursera (IBM)",
      year: "2025",
      url: "https://coursera.org/verify/professional-cert/QP35T2NUQN2W",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (DeepLearning.AI)",
      year: "2025",
      url: "https://coursera.org/verify/specialization/FFAXCX70G9HB",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera (Stanford Online & DeepLearning.AI)",
      year: "2025",
      url: "https://coursera.org/verify/specialization/DG6A0S7NAF18",
    },
  ],
};
