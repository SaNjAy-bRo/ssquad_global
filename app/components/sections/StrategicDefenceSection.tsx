"use client";

import { useEffect, useState, memo } from "react";

const StrategicDefenceSection = memo(function StrategicDefenceSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-10", "opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".sd-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#020408] py-16 lg:py-24 overflow-hidden border-t border-white/[0.05] will-change-transform transform-gpu">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden transform-gpu">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ssg-red)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ssg-cyber)]/10 blur-[150px] rounded-full mix-blend-screen opacity-40 -translate-x-1/4 translate-y-1/4"></div>
        
        {/* Animated Cyber / Circuit Network */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-40" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="glow-red-sd">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glow-cyber-sd">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Core connection pathways (Static background lines) */}
          <g stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none">
            <path d="M-100,200 L200,400 L400,250 L600,500 L800,300 L1100,600" />
            <path d="M-100,800 L300,600 L500,750 L700,500 L1100,200" />
            <path d="M200,-100 L400,300 L250,600 L500,900 L400,1100" />
            <path d="M800,-100 L600,400 L750,700 L500,1100" />
          </g>

          {/* Glowing Animated Data Streams */}
          <g strokeWidth="2.5" fill="none">
            <path d="M-100,200 L200,400 L400,250 L600,500 L800,300 L1100,600" stroke="var(--ssg-red)" filter="url(#glow-red-sd)" className="circuit-stream-1" />
            <path d="M-100,800 L300,600 L500,750 L700,500 L1100,200" stroke="var(--ssg-red)" filter="url(#glow-red-sd)" className="circuit-stream-2" />
            <path d="M200,-100 L400,300 L250,600 L500,900 L400,1100" stroke="var(--ssg-cyber)" filter="url(#glow-cyber-sd)" className="circuit-stream-3" />
            <path d="M800,-100 L600,400 L750,700 L500,1100" stroke="var(--ssg-cyber)" filter="url(#glow-cyber-sd)" className="circuit-stream-4" />
          </g>

          {/* Data Nodes */}
          <g fill="var(--ssg-red)">
            <circle cx="200" cy="400" r="4" className="node-pulse-1" />
            <circle cx="400" cy="250" r="3" className="node-pulse-2" />
            <circle cx="600" cy="500" r="5" className="node-pulse-3" />
            <circle cx="800" cy="300" r="3" />
            <circle cx="300" cy="600" r="4" className="node-pulse-2" />
            <circle cx="500" cy="750" r="3" fill="var(--ssg-cyber)" className="node-pulse-1" />
            <circle cx="700" cy="500" r="5" fill="var(--ssg-cyber)" className="node-pulse-3" />
            <circle cx="400" cy="300" r="4" fill="var(--ssg-cyber)" />
            <circle cx="250" cy="600" r="5" fill="var(--ssg-cyber)" className="node-pulse-3" />
            <circle cx="500" cy="900" r="3" className="node-pulse-2" />
          </g>
        </svg>

        {/* Scrolling Cyber Grid Background */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03] animate-[bgScroll_30s_linear_infinite]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* ── LEFT CONTENT PANEL (Text & Actions) ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left sd-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out relative">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--ssg-red)]/30 bg-[var(--ssg-red)]/10 mb-6 shadow-[0_0_20px_rgba(236,32,36,0.15)]">
              <i className="ph ph-shield-check text-[var(--ssg-red)] text-sm animate-pulse"></i>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#ffcaca]">Strategic Defence</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 block pb-2">Intelligence-Led</span>
              <span className="text-[var(--ssg-red)] block">Proactive Defence</span>
            </h2>
            
            <p className="mt-4 text-[#8b95a9] text-lg leading-relaxed max-w-2xl font-normal tracking-wide bg-gradient-to-r from-transparent via-[#020408]/50 to-transparent p-2 -mx-2 rounded-lg">
              SSquad Global combines predictive threat intelligence, operational discipline, and rapid execution to strengthen enterprise resilience before attacks escalate.
            </p>

            <ul className="mt-8 space-y-4 w-full">
              {[
                { icon: "ph-eye", text: "End-to-end threat visibility across users, endpoints, and workloads" },
                { icon: "ph-target", text: "Proactive defense strategy tuned to your business risk posture" },
                { icon: "ph-timer", text: "Faster detection, triage, and incident response across teams" },
                { icon: "ph-shield-star", text: "Enterprise-wide risk reduction through continuous hardening" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-[#0c1019]/60 border border-white/[0.05] hover:border-[var(--ssg-red)]/30 transition-all duration-300 group shadow-lg">
                  <div className="w-10 h-10 rounded-lg bg-[var(--ssg-red)]/10 border border-[var(--ssg-red)]/20 flex items-center justify-center shrink-0 group-hover:bg-[var(--ssg-red)]/20 transition-colors">
                    <i className={`ph ${item.icon} text-[var(--ssg-red)] text-lg`}></i>
                  </div>
                  <span className="text-[#a1abbd] text-sm md:text-base font-medium group-hover:text-white transition-colors">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT VISUAL PANEL: Animated Chart & Stats ── */}
          <div className="lg:col-span-6 relative sd-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out transform-gpu">
            <div className="absolute w-[400px] h-[400px] bg-[var(--ssg-cyber)]/15 blur-[100px] rounded-full pointer-events-none z-0"></div>
            
            <div className="relative z-10 rounded-3xl p-6 sm:p-8 bg-[#0c1019]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.02)]">
              {/* Chart Area */}
              <div className="relative w-full h-[220px] mb-8 border-b border-white/[0.08] pb-4">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 640 280" aria-hidden="true" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="darkIntelArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(236,32,36,0.3)" />
                      <stop offset="100%" stopColor="rgba(236,32,36,0)" />
                    </linearGradient>
                    <linearGradient id="darkIntelLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#5B2EFF" />
                      <stop offset="100%" stopColor="#EC2024" />
                    </linearGradient>
                  </defs>
                  {/* Grid lines */}
                  <g className="stroke-white/[0.05]" strokeWidth="1">
                    <line x1="0" y1="50" x2="640" y2="50" />
                    <line x1="0" y1="120" x2="640" y2="120" />
                    <line x1="0" y1="190" x2="640" y2="190" />
                    <line x1="0" y1="260" x2="640" y2="260" />
                  </g>
                  {/* Area fill */}
                  <path className="animate-[pulse_4s_ease-in-out_infinite_alternate]" fill="url(#darkIntelArea)" d="M40,230 C110,210 155,95 220,132 C285,169 340,95 400,120 C470,150 510,94 590,106 L590,280 L40,280 Z"></path>
                  {/* Secondary line (Violet) */}
                  <path fill="none" stroke="#5B2EFF" strokeWidth="2" className="opacity-50" style={{ strokeDasharray: '1000', strokeDashoffset: '0', animation: 'dash 15s linear infinite' }} d="M40,218 C120,204 180,170 235,160 C300,148 365,132 420,145 C490,160 535,154 590,142"></path>
                  {/* Primary line (Red/Gradient) */}
                  <path fill="none" stroke="url(#darkIntelLine)" strokeWidth="4" style={{ filter: 'drop-shadow(0 4px 8px rgba(236,32,36,0.4))', strokeDasharray: '1000', strokeDashoffset: '0', animation: 'dash 10s linear infinite' }} d="M40,230 C110,210 155,95 220,132 C285,169 340,95 400,120 C470,150 510,94 590,106"></path>
                </svg>
                
                {/* Animated Data Points */}
                <div className="absolute top-[35%] left-[30%] w-3 h-3 bg-[var(--ssg-red)] rounded-full shadow-[0_0_15px_var(--ssg-red)]">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="absolute top-[40%] left-[60%] w-3 h-3 bg-[#5B2EFF] rounded-full shadow-[0_0_15px_#5B2EFF]">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75 animation-delay-500"></div>
                </div>
                <div className="absolute top-[30%] left-[88%] w-3 h-3 bg-[var(--ssg-red)] rounded-full shadow-[0_0_15px_var(--ssg-red)]">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75 animation-delay-1000"></div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-2 left-2 flex gap-4 bg-[#020408]/80 backdrop-blur border border-white/10 px-4 py-2 rounded-full">
                  <span className="flex items-center gap-2 text-xs text-white font-medium"><div className="w-2 h-2 rounded-full bg-[var(--ssg-red)]"></div> Threat Trend</span>
                  <span className="flex items-center gap-2 text-xs text-white font-medium"><div className="w-2 h-2 rounded-full bg-[#5B2EFF]"></div> Signal Correlation</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "99.9%", label: "Threat Event Uptime Monitoring" },
                  { value: "24/7", label: "Managed Security Operations" },
                  { value: "150+", label: "Threat Sources Correlated" },
                  { value: "Real-time", label: "Executive Security Visibility" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                    <p className="text-2xl font-heading font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-xs text-[#8b95a9] font-medium leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 bg-[#0c1019] border border-[var(--ssg-red)]/30 rounded-xl p-3 flex items-center gap-3 shadow-[0_0_30px_rgba(236,32,36,0.2)] animate-[panelFloat_5s_ease-in-out_infinite] z-20">
              <div className="w-2 h-2 bg-[var(--ssg-red)] rounded-full animate-pulse"></div>
              <span className="text-[0.65rem] font-bold text-white uppercase tracking-wider">Live Intel Feed</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -2000; }
        }
        @keyframes panelFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bgScroll {
          0% { background-position: 0 0; }
          100% { background-position: 1000px 1000px; }
        }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }

        .circuit-stream-1 { stroke-dasharray: 80 800; animation: streamDraw 8s linear infinite; }
        .circuit-stream-2 { stroke-dasharray: 60 700; animation: streamDraw 12s linear infinite reverse; }
        .circuit-stream-3 { stroke-dasharray: 100 600; animation: streamDraw 10s linear infinite; }
        .circuit-stream-4 { stroke-dasharray: 50 650; animation: streamDraw 9s linear infinite reverse; }
        
        @keyframes streamDraw {
          0% { stroke-dashoffset: 2000; }
          100% { stroke-dashoffset: 0; }
        }

        .node-pulse-1 { animation: nodePulse 3s ease-in-out infinite; }
        .node-pulse-2 { animation: nodePulse 2s ease-in-out infinite 0.5s; }
        .node-pulse-3 { animation: nodePulse 4s ease-in-out infinite 1s; }

        @keyframes nodePulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; fill: #fff; }
        }
      `}} />
    </section>
  );
});

export default StrategicDefenceSection;
