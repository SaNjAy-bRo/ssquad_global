"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSectionV3() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v3-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10', '-translate-x-10');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16">
      
      {/* PREMIUM CLEAN BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full bg-[#010204] overflow-hidden">
        
        {/* AI GENERATED NEURAL BACKGROUND IMAGE */}
        <div className="absolute inset-0 opacity-50 mix-blend-screen">
           <Image src="/hero-v3-bg-globe.png" alt="Neural Background" fill className="object-cover" priority quality={100} />
        </div>
        
        {/* Subtle glowing orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--ssg-cyber)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--ssg-red)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Minimal Grid */}
        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        
        {/* Floating Ambient Particles */}
        <div className="absolute inset-0">
           {[...Array(100)].map((_, i) => {
             const size = Math.random() > 0.8 ? 3 : (Math.random() > 0.4 ? 2 : 1);
             const glow = Math.random() > 0.7 ? 'shadow-[0_0_10px_rgba(255,255,255,0.8)]' : '';
             return (
               <div key={i} className={`absolute bg-white rounded-full v3-particle ${glow}`} 
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${4 + Math.random() * 15}s`
                    }}>
               </div>
             )
           })}
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left pt-10 lg:pt-0 relative z-30">
            
            <div className="hero-v3-anim opacity-0 -translate-x-10 transition-all duration-1000 ease-out inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md border-l-2 border-[var(--ssg-red)] bg-gradient-to-r from-[var(--ssg-red)]/10 to-transparent mb-8">
              <i className="ph ph-hard-drives text-[var(--ssg-red)] text-base drop-shadow-[0_0_8px_var(--ssg-red)]"></i>
              <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white">Global Server Database</span>
            </div>
            
            <h1 className="hero-v3-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4rem] font-extrabold tracking-tight text-white w-full">
              Intelligence-Led <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[var(--ssg-red)] relative inline-block pb-1">
                Proactive Defence
              </span>
            </h1>
            
            <p className="hero-v3-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.1rem] leading-[1.7] max-w-lg font-light lg:pl-6 lg:border-l border-white/10 relative">
              <span className="hidden lg:block absolute left-[-1px] top-0 w-[2px] h-1/3 bg-[var(--ssg-red)] shadow-[0_0_10px_var(--ssg-red)]"></span>
              Unify your global server database with real-time threat intelligence. Leverage AI-driven automation to detect, investigate, and respond across the entire worldwide network.
            </p>
            
            <div className="hero-v3-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-300 ease-out mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white hover:bg-[#ff3337] transition-colors duration-300 flex items-center gap-2 rounded-sm shadow-[0_0_20px_rgba(236,32,36,0.3)] hover:shadow-[0_0_30px_rgba(236,32,36,0.5)]">
                Deploy Protection
                <i className="ph ph-rocket-launch"></i>
              </Link>
              <Link href="/#solutions" className="w-full sm:w-auto justify-center px-8 py-3.5 text-[0.95rem] font-bold bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-sm transition-colors duration-300 flex items-center gap-2">
                View Global Network
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL: ENTERPRISE THREAT ANALYTICS DASHBOARD */}
          <div className="hero-v3-anim opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10 transition-all duration-1000 delay-400 ease-out relative w-full lg:h-[600px] flex items-center justify-center lg:justify-end perspective-[2000px] mt-8 lg:mt-0 mb-16 lg:mb-0">
            
            {/* Ambient Background Glow for the Dashboard */}
            <div className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-[10%] top-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-tr from-[var(--ssg-cyber)]/20 to-[var(--ssg-red)]/20 blur-[100px] lg:blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* MAIN DASHBOARD PANEL (Tilted in 3D space) */}
            <div className="relative w-[90%] sm:w-[95%] lg:w-full max-w-[500px] h-[480px] sm:h-[500px] lg:h-[550px] [transform:rotateY(0deg)_rotateX(5deg)_translateZ(0px)] lg:[transform:rotateY(-15deg)_rotateX(5deg)_translateZ(0px)] [transform-style:preserve-3d] animate-[v3FloatDashMobile_6s_ease-in-out_infinite_alternate] lg:animate-[v3FloatDash_8s_ease-in-out_infinite_alternate]">
               
               {/* Main Glass Screen */}
               <div className="absolute inset-0 bg-[#02040a]/70 backdrop-blur-2xl border border-[var(--ssg-cyber)]/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6),inset_0_0_30px_rgba(91,46,255,0.1)] lg:shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_0_40px_rgba(91,46,255,0.1)] flex flex-col overflow-hidden">
                  
                  {/* Dashboard Header */}
                  <div className="h-10 lg:h-12 border-b border-[var(--ssg-cyber)]/20 bg-gradient-to-r from-[var(--ssg-cyber)]/10 to-transparent flex items-center justify-between px-3 lg:px-4">
                     <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-[var(--ssg-cyber)]/20 flex items-center justify-center border border-[var(--ssg-cyber)]/50">
                           <i className="ph ph-shield-check text-[var(--ssg-cyber)] text-xs lg:text-sm"></i>
                        </div>
                        <span className="text-white text-[0.65rem] lg:text-xs font-mono font-bold tracking-widest uppercase">Global Command</span>
                     </div>
                     <div className="flex gap-1.5">
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-slate-600/50"></div>
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-slate-600/50"></div>
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full bg-[var(--ssg-red)] shadow-[0_0_8px_var(--ssg-red)]"></div>
                     </div>
                  </div>

                  {/* Dashboard Body */}
                  <div className="flex-1 p-3 lg:p-5 flex flex-col gap-3 lg:gap-5">
                     
                     {/* Top Section: Live Stats */}
                     <div className="grid grid-cols-2 gap-3 lg:gap-4">
                        {/* Stat 1 */}
                        <div className="bg-[#040814]/50 border border-white/5 rounded-xl p-3 lg:p-4 flex flex-col gap-1 lg:gap-2">
                           <span className="text-[0.5rem] lg:text-[0.6rem] text-slate-400 font-mono uppercase tracking-wider">Neutralized</span>
                           <div className="text-xl lg:text-2xl font-bold text-white font-mono flex items-center gap-2">
                              1.24M <i className="ph ph-trend-up text-emerald-400 text-xs lg:text-sm"></i>
                           </div>
                           {/* Mini Sparkline Chart */}
                           <div className="w-full h-4 lg:h-6 flex items-end gap-[2px] mt-1">
                              {[40, 60, 45, 80, 55, 90, 70, 100, 65, 85].map((val, i) => (
                                <div key={i} className="flex-1 bg-[var(--ssg-cyber)] rounded-t-sm opacity-80" style={{height: `${val}%`}}></div>
                              ))}
                           </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="bg-[#040814]/50 border border-[var(--ssg-red)]/20 rounded-xl p-3 lg:p-4 flex flex-col gap-1 lg:gap-2 relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-12 h-12 lg:w-16 lg:h-16 bg-[var(--ssg-red)]/10 blur-[20px] rounded-full"></div>
                           <span className="text-[0.5rem] lg:text-[0.6rem] text-[var(--ssg-red)] font-mono uppercase tracking-wider">Intrusions</span>
                           <div className="text-xl lg:text-2xl font-bold text-white font-mono flex items-center gap-2">
                              0.00% <i className="ph ph-shield-star text-[var(--ssg-red)] text-xs lg:text-sm animate-pulse"></i>
                           </div>
                           <div className="w-full h-1 bg-white/10 rounded-full mt-auto overflow-hidden">
                              <div className="w-[5%] h-full bg-[var(--ssg-red)] rounded-full animate-[v3PulseWidth_2s_ease-in-out_infinite_alternate]"></div>
                           </div>
                        </div>
                     </div>

                     {/* Middle Section: Node Map & Radar */}
                     <div className="flex-1 bg-[#020308] border border-white/5 rounded-xl relative overflow-hidden flex items-center justify-center min-h-[100px] lg:min-h-[140px]">
                        {/* Grid */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] lg:bg-[size:20px_20px]"></div>
                        
                        {/* Radar Circles */}
                        <div className="absolute w-28 h-28 lg:w-40 lg:h-40 border border-[var(--ssg-cyber)]/30 rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(91,46,255,0.1)]">
                           <div className="w-14 h-14 lg:w-20 lg:h-20 border border-[var(--ssg-cyber)]/50 rounded-full flex items-center justify-center relative">
                              {/* Radar Sweep */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--ssg-cyber)]/40 to-transparent origin-bottom-right animate-[v3RadarSweep_3s_linear_infinite] [clip-path:polygon(50%_50%,100%_0,100%_100%)]"></div>
                              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full shadow-[0_0_10px_white,0_0_20px_var(--ssg-cyber)]"></div>
                           </div>
                        </div>

                        {/* Random Node Blips */}
                        <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-[var(--ssg-red)] rounded-full animate-ping"></div>
                        <div className="absolute bottom-[40%] right-[30%] w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse"></div>
                        <div className="absolute top-[60%] left-[70%] w-1 h-1 bg-white rounded-full"></div>
                     </div>

                     {/* Bottom Section: Terminal Logs */}
                     <div className="h-20 lg:h-24 bg-black/80 border border-white/10 rounded-lg p-2 lg:p-3 font-mono text-[0.5rem] lg:text-[0.55rem] text-slate-400 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-black to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <div className="animate-[v3LogScroll_8s_linear_infinite] flex flex-col gap-1.5">
                           <div><span className="text-[var(--ssg-cyber)]">Sys:</span> Initializing Quantum Protocols... <span className="text-emerald-400">OK</span></div>
                           <div><span className="text-[var(--ssg-red)]">Alert:</span> Unauthorized packet detected from 192.168.x.x</div>
                           <div><span className="text-[var(--ssg-cyber)]">Action:</span> Re-routing traffic through encrypted tunnel... <span className="text-emerald-400">DONE</span></div>
                           <div><span className="text-[var(--ssg-cyber)]">Sys:</span> Updating global malware signatures... <span className="text-emerald-400">SYNCED</span></div>
                           <div><span className="text-[var(--ssg-cyber)]">Sys:</span> Initializing Quantum Protocols... <span className="text-emerald-400">OK</span></div>
                           <div><span className="text-[var(--ssg-red)]">Alert:</span> Unauthorized packet detected from 192.168.x.x</div>
                           <div><span className="text-[var(--ssg-cyber)]">Action:</span> Re-routing traffic through encrypted tunnel... <span className="text-emerald-400">DONE</span></div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* FOREGROUND FLOATING WIDGET 1 (Extreme depth) */}
               <div className="absolute left-2 sm:-left-4 lg:-left-12 top-[5%] lg:top-[20%] w-40 lg:w-48 bg-[#040814]/90 backdrop-blur-xl border border-[var(--ssg-cyber)]/40 rounded-xl p-2.5 lg:p-3 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(91,46,255,0.2)] lg:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(91,46,255,0.2)] [transform:translateZ(40px)] lg:[transform:translateZ(60px)] animate-[v3FloatWidgetMobile_5s_ease-in-out_infinite] lg:animate-[v3FloatWidget_5s_ease-in-out_infinite] z-20 hidden xs:block">
                  <div className="flex items-center gap-2 lg:gap-3">
                     <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-[var(--ssg-cyber)] border-t-transparent animate-spin flex items-center justify-center">
                        <div className="w-4 h-4 lg:w-6 lg:h-6 rounded-full border border-[var(--ssg-cyber)]/50 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
                        </div>
                     </div>
                     <div>
                        <div className="text-[0.5rem] lg:text-[0.55rem] text-[var(--ssg-cyber)] font-mono uppercase tracking-[0.2em] mb-0.5">Core Status</div>
                        <div className="text-white text-[0.65rem] lg:text-xs font-bold font-mono">OPTIMAL</div>
                     </div>
                  </div>
               </div>

               {/* FOREGROUND FLOATING WIDGET 2 (Extreme depth) */}
               <div className="absolute right-2 sm:-right-4 lg:-right-8 bottom-[5%] lg:bottom-[15%] w-44 lg:w-56 bg-[#040814]/90 backdrop-blur-xl border border-[var(--ssg-red)]/40 rounded-xl p-3 lg:p-4 shadow-[0_15px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(236,32,36,0.2)] lg:shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_30px_rgba(236,32,36,0.2)] [transform:translateZ(50px)] lg:[transform:translateZ(80px)] animate-[v3FloatWidgetMobile_6s_ease-in-out_infinite_reverse] lg:animate-[v3FloatWidget_6s_ease-in-out_infinite_reverse] z-20 hidden xs:block">
                  <div className="text-[0.5rem] lg:text-[0.55rem] text-[var(--ssg-red)] font-mono uppercase tracking-[0.2em] mb-1.5 lg:mb-2 flex justify-between">
                     <span>DDoS Shield</span>
                     <span className="animate-pulse">ACTIVE</span>
                  </div>
                  <div className="w-full h-6 lg:h-8 flex items-end gap-[2px] lg:gap-1">
                     {/* Audio equalizer style bars */}
                     {[...Array(15)].map((_, i) => (
                        <div key={i} className="flex-1 bg-[var(--ssg-red)]/80 rounded-t-[1px] animate-[v3ChartHeight_1s_ease-in-out_infinite_alternate]" style={{ animationDelay: `${i * 0.05}s`, height: `${20 + Math.random() * 80}%` }}></div>
                     ))}
                  </div>
               </div>

            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        /* Background Particle Float */
        .v3-particle {
          animation-name: v3FloatParticle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        @keyframes v3FloatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.1; }
          50% { transform: translateY(-20px) scale(1.5); opacity: 0.85; }
        }

        /* Dashboard Float and Tilt (Desktop) */
        @keyframes v3FloatDash {
          0% { transform: rotateY(-15deg) rotateX(5deg) translateY(0); }
          100% { transform: rotateY(-12deg) rotateX(8deg) translateY(-20px); }
        }

        /* Dashboard Float and Tilt (Mobile) */
        @keyframes v3FloatDashMobile {
          0% { transform: rotateY(0deg) rotateX(5deg) translateY(0); }
          100% { transform: rotateY(0deg) rotateX(8deg) translateY(-10px); }
        }

        /* Widget Float (Desktop) */
        @keyframes v3FloatWidget {
          0%, 100% { transform: translateZ(60px) translateY(0); }
          50% { transform: translateZ(80px) translateY(-15px); }
        }

        /* Widget Float (Mobile) */
        @keyframes v3FloatWidgetMobile {
          0%, 100% { transform: translateZ(40px) translateY(0); }
          50% { transform: translateZ(50px) translateY(-10px); }
        }

        /* Radar Sweep */
        @keyframes v3RadarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Chart Height Animation */
        @keyframes v3ChartHeight {
          0% { transform: scaleY(0.3); transform-origin: bottom; }
          100% { transform: scaleY(1); transform-origin: bottom; }
        }

        /* Pulse Width for progress bars */
        @keyframes v3PulseWidth {
          0% { width: 5%; }
          100% { width: 40%; }
        }

        /* Terminal Log Scroll */
        @keyframes v3LogScroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}} />
    </section>
  );
}
