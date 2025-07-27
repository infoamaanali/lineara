"use client";

import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RxMoon } from "react-icons/rx";

export default function Navbar() {
  const [os, setOS] = useState<"Mac" | "WindowsOrLinux" | "Unknown">("Unknown");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Mac")) setOS("Mac");
    else if (userAgent.includes("Win") || userAgent.includes("Linux"))
      setOS("WindowsOrLinux");
    else setOS("Unknown");
  }, []);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const searchKey =
    os === "Mac" ? (
      <>
        <span className="inline-block text-sm font-medium transition-all duration-200 group-hover:scale-110">⌘</span>
        <span className="ml-1 text-xs font-medium tracking-widest transition-all duration-200">K</span>
      </>
    ) : (
      <>
        <span className="inline-block text-xs font-medium transition-all duration-200 group-hover:scale-110">Ctrl</span>
        <span className="ml-0.5 text-xs font-medium tracking-widest transition-all duration-200">K</span>
      </>
    );

  return (
    <nav className={`w-full border-b text-white backdrop-blur-md sticky top-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'border-white/20 bg-neutral-900/80 shadow-lg shadow-black/10' 
        : 'border-white/10 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 transition-all duration-300">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left Section */}
          <div className="flex items-center gap-6 min-w-0">
            {/* Logo + Version */}
            <div className="flex items-center gap-3 group">
              <span className="text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-blue-200 hover:to-purple-300 transition-all duration-500 cursor-pointer">
                Lineara
              </span>
              <span className="bg-neutral-800/80 backdrop-blur-sm rounded-full border border-white/20 px-2 py-1 text-xs text-zinc-300 hover:border-white/40 hover:bg-neutral-700/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                v0.0.7
              </span>
            </div>

            {/* Nav Links */}
            <div className="hidden xl:flex items-center gap-6">
              {["Examples", "Templates", "Pricing", "Docs", "Contact Us"].map(
                (label, index) => (
                  <a
                    key={label}
                    href="#"
                    className="text-zinc-400 hover:text-white text-sm transition-all duration-300 relative group font-medium hover:scale-105"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {label}
                    {/* Underline animation */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
                    {/* Hover glow effect */}
                    <span className="absolute inset-0 rounded-md bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Center Section */}
          <div className="flex-shrink-0">
            <a
              href="https://github.com/infoamaanali/lineara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white text-black font-semibold text-sm px-4 py-2 shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 group relative overflow-hidden"
            >
              {/* Animated background shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <Github className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 relative z-10" />
              <span className="hidden sm:inline relative z-10">Star on GitHub</span>
              <span className="sm:hidden relative z-10">Star</span>
            </a>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 justify-end min-w-0">
            
            {/* Search Input */}
            <div className="relative hidden lg:block group">
              <input
                className="bg-neutral-800/60 border border-white/10 rounded-xl text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 px-3 py-2 pr-14 text-sm w-48 lg:w-64 transition-all duration-300 focus:scale-[1.02] hover:bg-neutral-700/60 focus:shadow-lg focus:shadow-blue-500/10"
                type="text"
                placeholder="Search documentation..."
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-700/80 border border-white/20 text-zinc-200 rounded px-2 py-0.5 text-xs font-mono transition-all duration-300 group-hover:border-white/30 group-hover:bg-neutral-600/80 group">
                {searchKey}
              </span>
            </div>

            {/* Icon Buttons */}
            <div className="flex items-center gap-1">
              {[
                { icon: Github, label: "GitHub" },
                { icon: FaXTwitter, label: "Twitter" },
                { icon: RxMoon, label: "Theme" }
              ].map(({ icon: Icon, label }, index) => (
                <button 
                  key={label}
                  className="p-2 hover:bg-zinc-800/60 rounded-xl text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 group relative"
                  title={label}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <Icon className="w-4 h-4 transition-all duration-300 group-hover:rotate-6" />
                  {/* Ripple effect */}
                  <span className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-xl transition-all duration-300 hover:scale-110 group relative overflow-hidden"
            >
              <svg
                className={`w-5 h-5 transition-all duration-500 ${
                  mobileMenuOpen ? "rotate-180 scale-90" : "rotate-0 scale-100"
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" className="animate-in fade-in duration-300" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" className="animate-in fade-in duration-300" />
                )}
              </svg>
              {/* Button ripple effect */}
              <span className="absolute inset-0 rounded-xl bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu with enhanced animations */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-500 fade-in">
            <div className="flex flex-col gap-3">
              {["Examples", "Templates", "Pricing", "Docs", "Contact Us"].map(
                (label, index) => (
                  <a
                    key={label}
                    href="#"
                    className="text-zinc-400 hover:text-white text-base transition-all duration-300 py-2 hover:pl-4 font-medium rounded-lg hover:bg-white/5 relative group overflow-hidden"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: `slideInLeft 0.5s ease-out ${index * 100}ms both`
                    }}
                  >
                    {/* Slide-in indicator */}
                    <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-r"></span>
                    {label}
                  </a>
                )
              )}
              
              {/* Mobile Search with animation */}
              <div className="relative mt-2 animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '500ms' }}>
                <input
                  className="bg-neutral-800/60 border border-white/10 rounded-xl text-white placeholder-zinc-400 outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/30 px-3 py-2 pr-14 text-sm w-full transition-all duration-300 focus:scale-[1.02] hover:bg-neutral-700/60"
                  type="text"
                  placeholder="Search documentation..."
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-700/80 border border-white/20 text-zinc-200 rounded px-2 py-0.5 text-xs font-mono transition-all duration-300">
                  {searchKey}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom keyframes for additional animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}