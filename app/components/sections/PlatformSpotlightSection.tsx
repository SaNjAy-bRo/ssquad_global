"use client";

import { useEffect, memo } from "react";

const PlatformSpotlightSection = memo(function PlatformSpotlightSection() {
  useEffect(() => {
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

    const elements = document.querySelectorAll(".harpy-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#020408] py-24 lg:py-32 overflow-hidden border-t border-white/[0.05]">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--ssg-cyber)]/10 blur-[150px] rounded-full mix-blend-screen opacity-50 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ssg-red)]/5 blur-[150px] rounded-full mix-blend-screen opacity-50 -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* ── ALIGN LEFT CONTENT ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left harpy-reveal opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[var(--ssg-cyber)]/30 bg-[var(--ssg-cyber)]/10 mb-6 shadow-[0_0_20px_rgba(91,46,255,0.15)]">
              <i className="ph-fill ph-shield-check text-[var(--ssg-cyber)] animate-pulse text-sm"></i>
              <span className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#e2d3ff]">Platform Spotlight</span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              Harpy Defence
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--ssg-cyber)] pb-2 inline-block">
                SecOps Platform
              </span>
            </h2>
            
            <p className="mt-4 text-[#8b95a9] text-lg leading-relaxed max-w-2xl font-normal tracking-wide">
              A fully managed, intelligence-driven platform that captures, normalizes, and correlates security telemetry across endpoints, cloud, SaaS, and network layers to accelerate your team's detection and response capabilities.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 lg:gap-5 w-full">
              {[
                { icon: "ph-activity", title: "Integrated SIEM & XDR", desc: "Threat Intelligence & Automation" },
                { icon: "ph-lightning", title: "Real-time Alerting", desc: "SOC workflows & playbooks" },
                { icon: "ph-cloud", title: "Multi-Cloud Coverage", desc: "O365, Azure, AWS, and GCP" },
                { icon: "ph-chart-line", title: "Executive Visibility", desc: "Dashboards & 24x7 reporting" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[#0c1019]/80 border border-white/[0.06] hover:border-[var(--ssg-cyber)]/30 hover:bg-[#0c1019] transition-all duration-300 group shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-[var(--ssg-cyber)]/15 border border-[var(--ssg-cyber)]/25 flex items-center justify-center shrink-0 group-hover:bg-[var(--ssg-cyber)]/25 transition-colors shadow-[0_0_15px_rgba(91,46,255,0.1)]">
                    <i className={`ph-fill ${item.icon} text-[var(--ssg-cyber)] text-lg`}></i>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold tracking-wide">{item.title}</h4>
                    <p className="text-[#5c6578] text-[0.7rem] mt-1.5 leading-snug font-medium uppercase tracking-wider">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="https://www.harpydefence.com/secopsplatform.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,32,36,0.4)] group overflow-hidden relative border border-[var(--ssg-red)]/50">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Harpy Platform
                  <i className="ph-bold ph-arrow-right text-lg group-hover:translate-x-1.5 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
              </a>
            </div>
          </div>

          {/* ── RIGHT VISUAL PANEL ── */}
          <div className="lg:col-span-6 relative harpy-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out">
            
            {/* The Main Glowing Card */}
            <div className="relative w-full rounded-3xl p-[1px] bg-gradient-to-br from-[var(--ssg-cyber)]/50 via-white/10 to-[var(--ssg-red)]/20 shadow-[0_20px_80px_rgba(11,15,25,0.8),0_0_80px_rgba(91,46,255,0.15)] group">
              <div className="relative bg-[#060910]/95 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] p-8 sm:p-12 h-full overflow-hidden">
                
                {/* Decorative background blurs inside card */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--ssg-cyber)]/20 rounded-full blur-[80px] group-hover:bg-[var(--ssg-cyber)]/30 transition-colors duration-700"></div>
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[var(--ssg-red)]/10 rounded-full blur-[80px] group-hover:bg-[var(--ssg-red)]/20 transition-colors duration-700"></div>
                
                {/* Perspective inner Grid */}
                <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full items-center text-center">
                  
                  {/* Harpy Floating Shield Artifact */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-10 relative">
                     <div className="absolute inset-0 border-[1.5px] border-[var(--ssg-cyber)]/40 rounded-[2rem] rotate-12 animate-[spin_12s_linear_infinite]"></div>
                     <div className="absolute inset-0 border-[1.5px] border-[var(--ssg-red)]/30 rounded-[2rem] -rotate-12 animate-[spin_18s_linear_infinite_reverse]"></div>
                     <div className="absolute inset-0 border-[1px] border-white/10 rounded-full scale-125 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></div>
                     <div className="absolute inset-0 bg-gradient-to-br from-[var(--ssg-cyber)] to-[var(--ssg-cyber)]/50 rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(91,46,255,0.5)] z-10 border border-white/20 backdrop-blur-md">
                       <i className="ph-fill ph-shield-star text-white text-5xl sm:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"></i>
                     </div>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
                    Enterprise SecOps
                    <br />
                    <span className="text-[var(--ssg-cyber)] drop-shadow-[0_0_15px_rgba(91,46,255,0.3)]">Readiness</span>
                  </h3>
                  
                  <p className="text-[#8b95a9] text-base leading-relaxed max-w-sm mx-auto mb-10">
                    Unified monitoring, threat context, and response orchestration to move your team from alert overload to measurable resilience.
                  </p>

                  {/* Readiness Metrics Bars */}
                  <div className="w-full max-w-md mx-auto space-y-6">
                    <div>
                      <div className="flex justify-between text-[0.65rem] sm:text-xs font-bold text-[#5c6578] uppercase tracking-widest mb-3">
                        <span>Threat Visibility</span>
                        <span className="text-emerald-400">99.9%</span>
                      </div>
                      <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-[var(--ssg-cyber)]/50 to-[var(--ssg-cyber)] rounded-full w-[99.9%] relative shadow-[0_0_10px_rgba(91,46,255,0.5)]">
                           <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[cardScanSweep_2.5s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[0.65rem] sm:text-xs font-bold text-[#5c6578] uppercase tracking-widest mb-3">
                        <span>Response Automation</span>
                        <span className="text-[var(--ssg-red)] animate-pulse">Active</span>
                      </div>
                      <div className="h-2 w-full bg-[#111827] rounded-full overflow-hidden shadow-inner">
                        <div className="h-full bg-gradient-to-r from-[var(--ssg-red)]/50 to-[var(--ssg-red)] rounded-full w-[85%] relative shadow-[0_0_10px_rgba(236,32,36,0.5)]">
                          <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[cardScanSweep_3s_ease-in-out_infinite_0.5s]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Floating Badges (Outside the card) */}
            <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 bg-[#0c1019] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(91,46,255,0.15)] flex items-center gap-4 animate-[panelFloat_5s_ease-in-out_infinite] z-20 backdrop-blur-xl">
               <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center border border-emerald-500/25 shadow-[inset_0_0_15px_rgba(52,211,153,0.1)]">
                 <i className="ph-fill ph-check-circle text-emerald-400 text-xl"></i>
               </div>
               <div>
                  <div className="text-white font-bold text-sm tracking-wide">Zero Trust</div>
                  <div className="text-[#5c6578] text-[0.65rem] font-bold uppercase tracking-widest mt-0.5">Architecture</div>
               </div>
            </div>

            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#0c1019] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(236,32,36,0.1)] flex items-center gap-4 animate-[panelFloat_6s_ease-in-out_infinite_1s] z-20 backdrop-blur-xl">
               <div className="w-10 h-10 rounded-xl bg-[var(--ssg-red)]/15 flex items-center justify-center border border-[var(--ssg-red)]/25 shadow-[inset_0_0_15px_rgba(236,32,36,0.1)]">
                 <i className="ph-fill ph-globe-hemisphere-west text-[var(--ssg-red)] text-xl animate-[spin_4s_linear_infinite]"></i>
               </div>
               <div>
                  <div className="text-white font-bold text-sm tracking-wide">Global SOC</div>
                  <div className="text-[#5c6578] text-[0.65rem] font-bold uppercase tracking-widest mt-0.5">24/7 Coverage</div>
               </div>
            </div>

          </div>
          
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes panelFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes cardScanSweep {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(350%); }
        }
      `}} />
    </section>
  );
});

export default PlatformSpotlightSection;
