"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function HeroSectionV1() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-fade-left');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-x-0');
        el.classList.remove('opacity-0', '-translate-x-10');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden">
      
      {/* GLOBAL SERVER NETWORK BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-[#000205]">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.05] mix-blend-overlay"></div>
        
        {/* Network Nodes on the right */}
        <svg className="absolute top-0 right-0 w-full h-full lg:w-[60%] z-0 opacity-80" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="v1-glow-red">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="v1-glow-cyber">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <pattern id="server-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="80" height="80" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.1)" />
            </pattern>
          </defs>

          <rect x="0" y="0" width="1000" height="1000" fill="url(#server-grid)" />

          {/* Dynamic Server Connections */}
          <g strokeWidth="1.5" fill="none" opacity="0.6">
            <path d="M200,200 L400,300 L600,250 L800,400 L900,200" stroke="var(--ssg-red)" filter="url(#v1-glow-red)" className="v1-stream-1" />
            <path d="M100,500 L300,450 L500,600 L700,500 L900,700" stroke="var(--ssg-cyber)" filter="url(#v1-glow-cyber)" className="v1-stream-2" />
            <path d="M300,800 L450,650 L650,850 L850,700" stroke="var(--ssg-red)" filter="url(#v1-glow-red)" className="v1-stream-3" />
            <path d="M400,100 L550,350 L750,150" stroke="var(--ssg-cyber)" filter="url(#v1-glow-cyber)" className="v1-stream-4" />
          </g>

          {/* Active Server Nodes */}
          <g fill="var(--ssg-red)">
            <circle cx="400" cy="300" r="4" className="v1-node-pulse-1" />
            <circle cx="600" cy="250" r="3" className="v1-node-pulse-2" />
            <circle cx="800" cy="400" r="5" className="v1-node-pulse-3" />
            
            <circle cx="500" cy="600" r="4" fill="var(--ssg-cyber)" className="v1-node-pulse-2" />
            <circle cx="700" cy="500" r="5" fill="var(--ssg-cyber)" className="v1-node-pulse-1" />
            
            <circle cx="450" cy="650" r="3" className="v1-node-pulse-3" />
            <circle cx="650" cy="850" r="4" className="v1-node-pulse-1" />
          </g>
        </svg>

        {/* Ambient colored glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--ssg-red)]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[var(--ssg-cyber)]/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        
        {/* Dark gradient fade from left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/90 to-transparent z-10 w-[80%] lg:w-[60%]"></div>
      </div>

      {/* LEFT-ALIGNED TYPOGRAPHY */}
      <div className="relative min-h-[100svh] flex flex-col justify-center px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto w-full z-20 pt-32 pb-16">
        
        <div className="flex flex-col items-start mt-12 md:mt-8 max-w-3xl">
          <div className="hero-fade-left opacity-0 -translate-x-10 transition-all duration-1000 ease-out inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(236,32,36,0.1)] ring-1 ring-[var(--ssg-red)]/20">
            <span className="w-2 h-2 rounded-full bg-[var(--ssg-red)] animate-pulse shadow-[0_0_8px_var(--ssg-red)]"></span>
            <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#b8c0cc]">Verified Identity Perimeter</span>
          </div>
          
          <h1 className="hero-fade-left opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] min-[400px]:text-4xl sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-[-0.02em] text-white drop-shadow-xl w-full">
            Intelligence-Led<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--ssg-red)] pb-2 md:pb-4 drop-shadow-[0_0_30px_rgba(236,32,36,0.15)] block mt-2">
              Proactive Defence
            </span>
          </h1>
          
          <p className="hero-fade-left opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-[#9aa3b5] text-[0.95rem] sm:text-base md:text-lg lg:text-xl leading-[1.7] max-w-2xl font-medium tracking-wide">
            Unify your security data with real-time threat intelligence and leverage AI-driven automation to detect, investigate, and respond to threats before they impact your business.
          </p>
          
          <div className="hero-fade-left opacity-0 -translate-x-10 transition-all duration-1000 delay-300 ease-out mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 md:gap-5 items-center w-full sm:w-auto">
            <Link href="/contact" className="epic-pill-btn group w-full sm:w-auto justify-center px-8 md:px-10 py-4 text-base md:text-[1.05rem] font-bold bg-[var(--ssg-red)] text-white rounded-xl transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(236,32,36,0.3)] flex items-center gap-3 relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Talk to an expert
                <i className="ph ph-bold ph-arrow-right text-xl group-hover:translate-x-1 transition-transform"></i>
              </span>
            </Link>
            <Link href="/#solutions" className="w-full sm:w-auto text-center px-8 md:px-10 py-4 text-base md:text-[1.05rem] font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all hover:-translate-y-1 backdrop-blur-md">
              Explore our services
            </Link>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .v1-stream-1 { stroke-dasharray: 60 400; animation: v1StreamDraw 6s linear infinite; }
        .v1-stream-2 { stroke-dasharray: 80 500; animation: v1StreamDraw 8s linear infinite reverse; }
        .v1-stream-3 { stroke-dasharray: 50 350; animation: v1StreamDraw 5s linear infinite; }
        .v1-stream-4 { stroke-dasharray: 70 450; animation: v1StreamDraw 7s linear infinite reverse; }
        
        @keyframes v1StreamDraw {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }

        .v1-node-pulse-1 { animation: v1NodePulse 2.5s ease-in-out infinite; }
        .v1-node-pulse-2 { animation: v1NodePulse 3s ease-in-out infinite 0.5s; }
        .v1-node-pulse-3 { animation: v1NodePulse 4s ease-in-out infinite 1s; }

        @keyframes v1NodePulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); fill: #fff; }
        }
      `}} />
    </section>
  );
}
