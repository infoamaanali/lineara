"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import Footer from "./Footer";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx lineara@latest init");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">
      <Navbar />

      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient orbs */}
        <div
          className="absolute w-[35vw] h-[35vw] max-w-96 max-h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-float-slow"
          style={{
            top: `${15 + mousePosition.y * 0.01}%`,
            left: `${5 + mousePosition.x * 0.015}%`,
          }}
        />
        <div
          className="absolute w-[40vw] h-[40vw] max-w-112 max-h-112 bg-gradient-to-l from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-medium"
          style={{
            top: `${45 + mousePosition.y * 0.008}%`,
            right: `${10 + mousePosition.x * 0.012}%`,
          }}
        />
        <div
          className="absolute w-[30vw] h-[30vw] max-w-80 max-h-80 bg-gradient-to-br from-orange-500/12 to-red-500/12 rounded-full blur-3xl animate-float-fast"
          style={{
            bottom: `${20 + mousePosition.y * -0.01}%`,
            left: `${60 + mousePosition.x * -0.008}%`,
          }}
        />

        {/* Grid overlay with animation */}
        <div
          className="absolute inset-0 opacity-[0.02] animate-grid-move"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-particle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <main className="flex flex-col items-center justify-center px-6 py-20 min-h-[calc(100vh-80px)] relative">
        
        {/* Enhanced Announcement Badge */}
        <div
          className={`mb-12 transition-all duration-1200 transform ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
          style={{ animationDelay: '200ms' }}
        >
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 text-sm text-zinc-300 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <div className="flex items-center gap-3 relative z-10">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold">Introducing Lineara v1.0</span>
              <div className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
                NEW
              </div>
            </div>
            
            <svg
              className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-12 relative z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Main Content */}
        <div
          className={`text-center max-w-5xl mx-auto transition-all duration-1400 transform ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-16 opacity-0 scale-95"
          }`}
          style={{ animationDelay: '400ms' }}
        >
          {/* Enhanced Heading */}
          <div className="relative">
            <h1 className="text-[clamp(2.5rem,10vw,5.5rem)] font-black leading-[0.9] mb-8 tracking-tight">
              <div className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-gradient-slow">
                  Lineara
                </span>
              </div>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-colorful">
                Component Library
              </span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-4 mb-12">
              <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
                Easy to use • Easy to customize
              </p>
              <p className="text-lg md:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                A comprehensive collection of{' '}
                <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  various Components
                </span>{' '}
                built for modern developers who value simplicity and flexibility.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 transition-all duration-1400 transform ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"
          }`}
          style={{ animationDelay: '600ms' }}
        >
          {/* Copy Command Button */}
          <div className="relative group">
            <button
              onClick={handleCopy}
              className="relative px-8 py-4 bg-zinc-800/30 border border-white/20 font-bold rounded-2xl transition-all duration-400 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-3 overflow-hidden"
            >
              {/* Button shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800" />
              
              <div className="flex items-center gap-3 relative z-10">
                <div className="p-1 bg-black/10 rounded-lg">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <code className="font-mono text-sm">npx lineara@latest init</code>
              </div>
            </button>
            
            {/* Copy confirmation */}
            {copied && (
              <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-sm rounded-lg animate-bounce">
                ✓ Copied!
              </div>
            )}
          </div>

          {/* Browse Components Button */}
          <button className="px-8 py-4 bg-white border-2 border-white/20 hover:border-white/40 text-black font-bold rounded-2xl transition-all duration-400 hover:scale-105 hover:-translate-y-2 hover:bg-white/5 hover:shadow-xl hover:shadow-white/10 relative group overflow-hidden hover:text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Browse Components</span>
          </button>
        </div>

        {/* Tech Stack */}
        <div
          className={`flex items-center justify-center gap-8 mt-16 transition-all duration-1400 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ animationDelay: '800ms' }}
        >
          <div className="text-center">
            <p className="text-sm text-zinc-500 mb-4">Built with</p>
            <div className="flex items-center gap-6">
              {[
                { name: 'React', icon: <IoLogoReact />, color: 'hover:bg-zinc-800' },
                { name: 'TypeScript', icon: <SiTypescript />, color: 'hover:bg-zinc-800' },
                { name: 'TailwindCSSV4', icon: <SiTailwindcss />, color: 'hover:bg-zinc-800' },
              ].map(({ name, icon, color }, index) => (
                <div
                  key={name}
                  className={`relative group cursor-pointer`}
                  style={{
                    animationDelay: `${800 + index * 100}ms`
                  }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${color} bg-opacity-20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-400 hover:scale-110 hover:-translate-y-2 animate-float-gentle`}>
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </span>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes gradient-colorful {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.05); }
          66% { transform: translate(-15px, 15px) scale(0.95); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-25px, -25px) scale(1.03); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          25% { transform: translate(15px, -15px) scale(1.02); }
          50% { transform: translate(-10px, 10px) scale(0.98); }
          75% { transform: translate(12px, 18px) scale(1.01); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 8s ease infinite;
        }
        
        .animate-gradient-colorful {
          background-size: 400% 400%;
          animation: gradient-colorful 12s ease infinite;
        }
        
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 8s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 6s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 6s ease-in-out infinite; }
        .animate-particle-float { animation: particle-float 12s ease-in-out infinite; }
        .animate-grid-move { animation: grid-move 30s linear infinite; }
      `}</style>
      <Footer/>
    </div>
  );
}