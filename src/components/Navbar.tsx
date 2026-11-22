"use client";

import React from "react";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-5 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-black/[0.06] dark:border-white/[0.08] transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Name / Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-mono font-semibold text-xs tracking-tight">
            MA
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-slate-100">
              Muhammad Azfar
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              AI Engineer
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
          <a
            href="#work"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#expertise"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Expertise
          </a>
          <a
            href="#about"
            className="hidden sm:inline hover:text-black dark:hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            Contact
          </a>

          <div className="pl-2 border-l border-slate-200 dark:border-white/10 flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
