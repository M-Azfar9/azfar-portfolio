"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function QuantumNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 mx-auto w-[92%] sm:w-[94%] max-w-[1240px] z-50 transition-all pointer-events-none">
      <div 
        className="pointer-events-auto rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 flex items-center justify-between text-black transition-all"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.48)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.75)",
          boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05), 0 2px 8px -2px rgba(15, 23, 42, 0.02)"
        }}
      >
        {/* Brand / Logo: Simple AZFAR in Deltha font */}
        <a href="#" className="flex items-center cursor-pointer group">
          <span className="font-hero text-lg sm:text-xl md:text-2xl tracking-[0.06em] text-black font-extrabold group-hover:opacity-75 transition-opacity">
            AZFAR
          </span>
        </a>

        {/* Desktop Nav Links in pure black with bold weight */}
        <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-[13px] font-bold tracking-wide text-black">
          <a href="#about" className="text-black hover:text-blue-600 transition-colors cursor-pointer">
            About
          </a>
          <a href="#projects" className="text-black hover:text-blue-600 transition-colors cursor-pointer">
            Projects
          </a>
          <a href="#skills" className="text-black hover:text-blue-600 transition-colors cursor-pointer">
            Skills
          </a>
          <a href="#contact" className="text-black hover:text-blue-600 transition-colors cursor-pointer">
            Contact
          </a>
        </nav>

        {/* Right Action: GitHub and LinkedIn Social Links with official brand fills */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-black text-white hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
            aria-label="GitHub Profile"
            title="GitHub"
          >
            <svg
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#0a66c2] text-white hover:bg-[#004182] active:scale-95 transition-all cursor-pointer shadow-sm hover:shadow-md"
            aria-label="LinkedIn Profile"
            title="LinkedIn"
          >
            <svg
              className="w-4 h-4 sm:w-[18px] sm:h-[18px] fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28M5.07 18.5h2.78v-8.37H5.07v8.37z" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-black hover:text-neutral-700 p-1 cursor-pointer ml-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with translucent frosted glass */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden mt-2 p-5 rounded-3xl flex flex-col gap-3 text-sm pointer-events-auto text-black"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.48)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(255, 255, 255, 0.75)",
            boxShadow: "0 10px 30px -5px rgba(15, 23, 42, 0.05)"
          }}
        >
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-2 text-black font-bold hover:text-blue-600 rounded-xl hover:bg-black/5 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-2 text-black font-bold hover:text-blue-600 rounded-xl hover:bg-black/5 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-2 text-black font-bold hover:text-blue-600 rounded-xl hover:bg-black/5 transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center px-2 text-black font-bold hover:text-blue-600 rounded-xl hover:bg-black/5 transition-colors"
          >
            Contact
          </a>
          <div className="flex items-center gap-3 pt-2 border-t border-black/10 mt-1">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-full bg-black text-white flex items-center justify-center gap-2 font-bold text-xs hover:bg-neutral-800 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2.5 rounded-full bg-[#0a66c2] text-white flex items-center justify-center gap-2 font-bold text-xs hover:bg-[#004182] transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0-.02-3.28 1.64 1.64 0 0 0 .02 3.28M5.07 18.5h2.78v-8.37H5.07v8.37z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
