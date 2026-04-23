"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionV1() {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v1-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10');
      }, 100 + i * 150);
    });

    // Tilt logic removed since the new pure CSS 3D composition relies on keyframe animations for a continuous fluid float
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden min-h-[100svh] flex items-center">
      
      {/* ═══════════ CINEMATIC SERVER ROOM BACKGROUND ═══════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-[#010204]">
        
        {/* Base Server Room Photo */}
        <div className="absolute inset-0 opacity-40 mix-blend-screen">
           <Image src="/hero-v1-abstract-bg.png" alt="Server Infrastructure" fill className="object-cover" priority quality={100} />
        </div>

        {/* Deep Red Cinematic Color Grade */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0005]/80 via-transparent to-[#050008]/60 mix-blend-multiply"></div>

        {/* ── Animated Horizontal Scan Lines (Server Monitoring) ── */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--ssg-red)]/60 to-transparent v1-scanline-1"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--ssg-red)]/40 to-transparent v1-scanline-2"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent v1-scanline-3"></div>
        </div>

        {/* ── Vertical Data Flow Lines ── */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div 
              key={`vline-${i}`}
              className="absolute top-0 w-[1px] h-full"
              style={{ left: `${12 + i * 12}%` }}
            >
              <div 
                className="w-full bg-gradient-to-b from-transparent via-[var(--ssg-red)]/30 to-transparent v1-data-flow"
                style={{ 
                  height: `${80 + Math.random() * 120}px`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* ── Server Rack Indicator Lights (Scattered Dots) ── */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const isRed = Math.random() > 0.4;
            const size = Math.random() > 0.7 ? 3 : 2;
            return (
              <div 
                key={`light-${i}`}
                className={`absolute rounded-full v1-blink ${isRed ? 'bg-[var(--ssg-red)]' : 'bg-white'}`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                  boxShadow: isRed 
                    ? `0 0 ${4 + Math.random() * 8}px rgba(236,32,36,0.8)` 
                    : `0 0 ${4 + Math.random() * 6}px rgba(255,255,255,0.6)`
                }}
              ></div>
            );
          })}
        </div>

        {/* ── Circuit Board Grid Pattern ── */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(236,32,36,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(236,32,36,0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_70%_70%_at_60%_50%,#000_30%,transparent_100%)]"></div>

        {/* ── Large Ambient Glow Orbs ── */}
        <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-[var(--ssg-red)]/8 blur-[180px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-[var(--ssg-red)]/6 blur-[150px] rounded-full mix-blend-screen v1-glow-pulse pointer-events-none"></div>

        {/* ── Floating Particle Dust ── */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => {
            const s = Math.random() > 0.8 ? 3 : (Math.random() > 0.5 ? 2 : 1);
            return (
              <div 
                key={`p-${i}`}
                className="absolute bg-white/80 rounded-full v1-particle"
                style={{
                  width: `${s}px`,
                  height: `${s}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 12}s`
                }}
              ></div>
            );
          })}
        </div>

        {/* ── Dark Text Readability Gradient (Reduced) ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020408]/95 via-[#020408]/60 to-transparent z-10 w-[85%] lg:w-[55%]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020408]/80 via-transparent to-[#020408]/30 z-10"></div>
      </div>

      {/* ═══════════ FOREGROUND CONTENT ═══════════ */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 min-h-[100svh] flex items-center">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center w-full">
          
          {/* ── LEFT: TYPOGRAPHY & CTA ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Status Badge */}
            <div className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 ease-out inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md border-l-2 border-[var(--ssg-red)] bg-gradient-to-r from-[var(--ssg-red)]/10 to-transparent mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--ssg-red)] animate-pulse shadow-[0_0_10px_var(--ssg-red)]"></span>
              <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white">Server Infrastructure Shield</span>
            </div>
            
            {/* Headline */}
            <h1 className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight text-white w-full">
              Intelligence-Led <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ssg-red)] via-[#ff5b5b] to-white relative inline-block pb-1 mt-2">
                Proactive Defence
              </span>
            </h1>
            
            {/* Description */}
            <p className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.1rem] leading-[1.8] max-w-xl font-light lg:pl-6 lg:border-l border-white/10 relative">
              <span className="hidden lg:block absolute left-[-1px] top-0 w-[2px] h-1/3 bg-[var(--ssg-red)] shadow-[0_0_10px_var(--ssg-red)]"></span>
              Unify your global server database with real-time threat intelligence. Leverage AI-driven automation to detect, investigate, and respond across the entire worldwide network.
            </p>

            {/* CTA Buttons */}
            <div className="hero-v1-anim opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center w-full sm:w-auto">
              <Link href="/contact" className="group relative w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white overflow-hidden rounded-sm hover:shadow-[0_0_30px_var(--ssg-red)] transition-all duration-300 flex items-center gap-2">
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Deploy Protection
                  <i className="ph ph-rocket-launch"></i>
                </span>
              </Link>
              <Link href="/#solutions" className="w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-sm transition-colors duration-300 flex items-center gap-2">
                Explore Services
              </Link>
            </div>
          </div>

          {/* ── RIGHT: DATA CENTER COMMAND INTERFACE ── */}
          <div className="hero-v1-anim opacity-0 translate-x-10 transition-all duration-1000 delay-500 ease-out hidden lg:flex items-center justify-center relative w-full h-[600px] mt-10 lg:mt-0">
            
            {/* Deep Ambient Aura */}
            <div className="absolute w-[500px] h-[500px] bg-[var(--ssg-red)]/10 blur-[150px] rounded-full animate-[v1GlowPulse_5s_ease-in-out_infinite_alternate] pointer-events-none z-0"></div>

            {/* Central Holographic Rings */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-[var(--ssg-red)]/20 animate-[v1Spin_30s_linear_infinite] z-0">
               <div className="absolute top-0 left-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[var(--ssg-red)] to-transparent blur-[1px]"></div>
            </div>
            <div className="absolute w-[350px] h-[350px] rounded-full border-2 border-dashed border-[var(--ssg-red)]/20 animate-[v1SpinReverse_40s_linear_infinite] z-0"></div>
            <div className="absolute w-[250px] h-[250px] rounded-full border border-[var(--ssg-red)]/30 animate-[v1Spin_20s_linear_infinite] z-0">
               <div className="absolute top-0 right-1/4 w-3 h-3 rounded-full bg-[var(--ssg-red)] shadow-[0_0_15px_var(--ssg-red)] animate-pulse"></div>
            </div>

            {/* Main Server Core */}
            <div className="relative w-[160px] h-[320px] bg-gradient-to-b from-[#0a0a0e] to-[#020408] border border-white/10 rounded-xl shadow-[0_0_50px_rgba(236,32,36,0.15)] flex flex-col items-center justify-between py-5 z-10 animate-[v1CoreFloat_8s_ease-in-out_infinite]">
               {/* Core Top Glow */}
               <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--ssg-red)] to-transparent absolute top-0 shadow-[0_0_15px_var(--ssg-red)]"></div>
               
               {/* Server Blades */}
               <div className="flex flex-col gap-3 w-full px-4">
                 {[...Array(5)].map((_, i) => (
                   <div key={i} className="w-full h-[32px] bg-[#11131a] border border-white/5 rounded flex items-center px-3 justify-between shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                     <div className="flex gap-1.5">
                       <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                       <div className="w-3 h-1 bg-white/20 rounded-full"></div>
                     </div>
                     <div className="flex gap-1.5">
                       <div className={`w-1.5 h-1.5 rounded-full ${i === 1 || i === 3 ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-[var(--ssg-red)] animate-pulse shadow-[0_0_8px_var(--ssg-red)]'}`}></div>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Central Processing Icon */}
               <div className="w-20 h-20 rounded-full bg-[var(--ssg-red)]/10 border border-[var(--ssg-red)]/50 flex items-center justify-center mt-2 shadow-[inset_0_0_30px_rgba(236,32,36,0.4)]">
                  <i className="ph-fill ph-cpu text-4xl text-[var(--ssg-red)] drop-shadow-[0_0_15px_var(--ssg-red)] animate-pulse"></i>
               </div>
               
               <div className="w-full h-1 bg-gradient-to-r from-transparent via-[var(--ssg-red)]/50 to-transparent absolute bottom-0"></div>
            </div>

            {/* Floating Glass Dashboard (Replaces distorted laptop) */}
            <div className="absolute top-[12%] right-[0%] w-[300px] bg-[#02040a]/90 backdrop-blur-xl border border-[var(--ssg-red)]/30 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(236,32,36,0.15)] p-5 z-20 animate-[v1FloatWidget_6s_ease-in-out_infinite_alternate]">
               <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-[var(--ssg-red)] animate-pulse shadow-[0_0_10px_var(--ssg-red)]"></div>
                   <span className="text-xs text-white uppercase tracking-widest font-bold">Live Threat Map</span>
                 </div>
                 <i className="ph-fill ph-radar text-[var(--ssg-red)] animate-spin" style={{animationDuration: '3s'}}></i>
               </div>
               
               <div className="w-full h-[120px] bg-gradient-to-b from-[var(--ssg-red)]/5 to-transparent rounded border border-[var(--ssg-red)]/10 relative overflow-hidden flex items-end gap-1.5 px-3 pt-4">
                 <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--ssg-red)]/50 animate-[v1ScanDown_2s_linear_infinite]"></div>
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(236,32,36,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,32,36,0.1)_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none"></div>
                 {[40, 70, 30, 90, 50, 100, 60, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[var(--ssg-red)]/40 to-[var(--ssg-red)] rounded-t-sm" style={{height: `${h}%`}}></div>
                 ))}
               </div>
               
               <div className="mt-4 flex justify-between items-center bg-white/5 rounded p-2 border border-white/5">
                  <span className="text-[0.6rem] text-slate-400 uppercase tracking-wider">Network Status</span>
                  <span className="text-[0.65rem] text-emerald-400 font-mono">SECURE</span>
               </div>
            </div>

            {/* Floating Shield Emblem */}
            <div className="absolute bottom-[15%] left-[5%] w-[180px] h-[180px] bg-[#02040a]/90 backdrop-blur-xl border border-[var(--ssg-red)]/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(236,32,36,0.1)] flex flex-col items-center justify-center z-20 animate-[v1FloatWidget_5s_ease-in-out_infinite_alternate_reverse]">
               <div className="relative">
                 <i className="ph-fill ph-shield-check text-[6rem] text-[var(--ssg-red)] drop-shadow-[0_0_30px_var(--ssg-red)]"></i>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/30 blur-xl rounded-full mix-blend-screen animate-pulse"></div>
               </div>
               <div className="mt-3 bg-[var(--ssg-red)]/10 border border-[var(--ssg-red)]/30 px-3 py-1 rounded-full">
                 <span className="text-[0.55rem] text-[var(--ssg-red)] tracking-[0.2em] uppercase font-bold">Encrypted</span>
               </div>
            </div>

            {/* Data Connection Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 600">
               <path d="M300,300 L500,150" fill="none" stroke="var(--ssg-red)" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-40" />
               <path d="M300,300 L150,450" fill="none" stroke="var(--ssg-red)" strokeWidth="1.5" strokeDasharray="4,4" className="opacity-40" />
               <path d="M300,300 L100,150" fill="none" stroke="white" strokeWidth="1" className="opacity-10" />
               
               {/* Traveling Data Packets */}
               <circle r="4" fill="var(--ssg-red)" filter="drop-shadow(0 0 5px var(--ssg-red))">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M300,300 L500,150" />
               </circle>
               <circle r="4" fill="var(--ssg-red)" filter="drop-shadow(0 0 5px var(--ssg-red))">
                  <animateMotion dur="2.5s" repeatCount="indefinite" path="M300,300 L150,450" />
               </circle>
               <circle r="2" fill="white">
                  <animateMotion dur="4s" repeatCount="indefinite" path="M300,300 L100,150" />
               </circle>
            </svg>

          </div>

        </div>
      </div>

      {/* ═══════════ CSS ANIMATIONS ═══════════ */}
      <style dangerouslySetInnerHTML={{__html: `
        /* ── Horizontal Scan Lines ── */
        .v1-scanline-1 {
          animation: v1ScanDown 6s linear infinite;
        }
        .v1-scanline-2 {
          animation: v1ScanDown 9s linear infinite;
          animation-delay: 2s;
        }
        .v1-scanline-3 {
          animation: v1ScanDown 12s linear infinite;
          animation-delay: 4s;
        }
        @keyframes v1ScanDown {
          0% { top: -2%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        /* ── Vertical Data Flow ── */
        .v1-data-flow {
          animation-name: v1DataDrop;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @keyframes v1DataDrop {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(calc(100vh + 100%)); opacity: 0; }
        }

        /* ── Blinking Server LEDs ── */
        .v1-blink {
          animation-name: v1Blink;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes v1Blink {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 1; }
        }

        /* ── Floating Dust Particles ── */
        .v1-particle {
          animation-name: v1Float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes v1Float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.05; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.7; }
        }

        /* ── Glow Pulse ── */
        .v1-glow-pulse {
          animation: v1GlowPulse 5s ease-in-out infinite alternate;
        }
        @keyframes v1GlowPulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.15); }
        }

        /* ── Core Float ── */
        @keyframes v1CoreFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        /* ── Widget Floats ── */
        @keyframes v1FloatWidget {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* ── Spin ── */
        @keyframes v1Spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes v1SpinReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
      `}} />
    </section>
  );
}
