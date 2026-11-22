"use client";

import React from "react";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 sm:px-12 max-w-6xl mx-auto border-t border-black/[0.06] dark:border-white/[0.06]">
      <div className="max-w-2xl flex flex-col gap-6">
        <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Connect
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
          Let’s discuss frontier systems & research.
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Whether you are building next-generation AI infrastructure, training bespoke foundation models, or exploring advisory collaboration, feel free to reach out.
        </p>

        <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium">
          <a
            href="mailto:contact@azfar.ai"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:opacity-90 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>

          <div className="flex items-center gap-5 text-slate-600 dark:text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <span>X (Twitter)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
