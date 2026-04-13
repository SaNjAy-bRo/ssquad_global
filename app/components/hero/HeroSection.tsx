"use client";

import { useState, useEffect, useRef, memo } from 'react';

const mockEvents = [
  'Suspicious lateral movement isolated - IAM segment',
  'Malicious domain request blocked - Web gateway',
  'Privilege escalation attempt denied - Core server',
  'High-risk endpoint behavior contained - EMEA branch',
  'Data exfiltration pattern interrupted - Cloud workload',
  'Unusual VPN sequence flagged - Identity perimeter',
  'Ransomware indicator quarantined - DC cluster',
  'Unauthorized deep-packet inspection attempts blocked',
  'Quantum encryption tunnel established - Node Alpha'
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] flex flex-col items-center justify-center bg-[#020408] overflow-hidden pt-36 sm:pt-28 pb-8">
      
      {/* BIOMETRIC FINGERPRINT SCANNER BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center w-full h-full overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        
        <div className="absolute flex items-center justify-center w-full h-full opacity-60">
          <i className="ph-light ph-fingerprint text-[#151b2b]" style={{ fontSize: '140vh', lineHeight: 1 }}></i>
        </div>

        <div className="absolute inset-0 flex items-center justify-center w-full h-full hero-biometric-reveal">
          <i className="ph-light ph-fingerprint text-[var(--ssg-red)] opacity-90 drop-shadow-[0_0_40px_rgba(236,32,36,1)]" style={{ fontSize: '140vh', lineHeight: 1 }}></i>
        </div>

        <div className="absolute left-0 w-full h-[3px] bg-white z-10 shadow-[0_0_20px_#fff,0_0_60px_#ec2024,0_0_100px_#ec2024] hero-laser-sweep">
          <div className="absolute top-[3px] left-0 w-full h-[200px] bg-gradient-to-b from-[var(--ssg-red)]/30 to-transparent"></div>
          <div className="absolute -top-[200px] left-0 w-full h-[200px] bg-gradient-to-t from-[var(--ssg-red)]/30 to-transparent"></div>
        </div>

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--ssg-red)]/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--ssg-cyber)]/15 blur-[200px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[65%] bg-[radial-gradient(ellipse_at_center,rgba(2,4,8,0.9)_0%,rgba(2,4,8,0)_70%)] z-10"></div>
      </div>

      {/* COMMANDING TYPOGRAPHY */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl mx-auto mt-4 md:mt-8">
        
        <div className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 ease-out inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl mb-6 shadow-[0_0_30px_rgba(236,32,36,0.15)] ring-1 ring-[var(--ssg-red)]/30">
          <i className="ph-fill ph-fingerprint text-[var(--ssg-red)] text-lg animate-pulse shadow-[0_0_15px_var(--ssg-red)]"></i>
          <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.3em] uppercase text-white drop-shadow-md">Verified Identity Perimeter</span>
        </div>
        
        <h1 className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-100 ease-out font-heading text-5xl sm:text-6xl md:text-[5rem] lg:text-[7rem] leading-[0.95] font-extrabold tracking-[-0.03em] text-white drop-shadow-[0_20px_50px_rgba(0,0,0,1)] px-2">
          Intelligence Led
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-[var(--ssg-red)] pb-2 md:pb-4 inline-block drop-shadow-[0_0_40px_rgba(236,32,36,0.2)]">
            Proactive Defence
          </span>
        </h1>
        
        <p className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-3xl font-normal tracking-wide px-4 drop-shadow-[0_5px_10px_rgba(0,0,0,1)] text-balance mx-auto">
          Secure your endpoint identities. Unmatched reliability, zero trust access, and autonomous biometric operations driving the future of&nbsp;SOC.
        </p>
        
        <div className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center w-full max-w-lg sm:max-w-none mx-auto px-4">
          <a href="#contact" className="epic-pill-btn group w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-[1.1rem] font-bold bg-[var(--ssg-red)] text-white rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(236,32,36,0.5)] flex items-center gap-3 relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Initiate Protocol
              <i className="ph-bold ph-arrow-right text-xl group-hover:translate-x-2 transition-transform"></i>
            </span>
          </a>
          <a href="/services/application-security" className="w-full sm:w-auto text-center px-8 md:px-12 py-4 md:py-5 text-base md:text-[1.1rem] font-bold bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full transition-all hover:scale-105 backdrop-blur-md">
            Security Matrix
          </a>
        </div>
      </div>

      {/* TELEMETRY DASHBOARD */}
      <div className="hero-fade-up opacity-0 translate-y-10 transition-all duration-1000 delay-500 ease-out w-full max-w-7xl mx-auto px-4 sm:px-6 z-30 mt-16 md:mt-20 relative">
        <TelemetryDashboard />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-laser-sweep { animation: laserSweep 4s ease-in-out infinite alternate; }
        .hero-biometric-reveal { animation: biometricReveal 4s ease-in-out infinite alternate; }
        @keyframes laserSweep {
          0% { top: 10%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes biometricReveal {
          0% { clip-path: inset(0 0 90% 0); }
          100% { clip-path: inset(10% 0 0 0); }
        }
        @keyframes eqBar1 { 0%,100%{transform:scaleY(.25)} 50%{transform:scaleY(1)} }
        @keyframes eqBar2 { 0%,100%{transform:scaleY(.4)} 40%{transform:scaleY(.9)} 70%{transform:scaleY(.6)} }
        @keyframes eqBar3 { 0%,100%{transform:scaleY(.3)} 60%{transform:scaleY(1)} }
        @keyframes eqBar4 { 0%,100%{transform:scaleY(.5)} 30%{transform:scaleY(.8)} 80%{transform:scaleY(1)} }
        @keyframes eqBar5 { 0%,100%{transform:scaleY(.2)} 45%{transform:scaleY(.7)} 75%{transform:scaleY(1)} }
        @keyframes wavePulseRipple {
          0% { opacity: 0; transform: scale(0.55); }
          22% { opacity: 0.36; }
          100% { opacity: 0; transform: scale(1.2); }
        }
        @keyframes waveGridShift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 52px 0, 0 34px; }
        }
        @keyframes waveGlow {
          0%,100% { opacity: 0.38; }
          50% { opacity: 0.78; }
        }
        @keyframes cardScanSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}} />
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────
// TELEMETRY CARD — Premium design with red wave glow, brighter colors
// Zero-flicker: feed text updated via DOM refs, not React state
// ─────────────────────────────────────────────────────────────────────
const TelemetryDashboard = memo(function TelemetryDashboard() {
  const [threatCount, setThreatCount] = useState(1349);
  const [endpointCount, setEndpointCount] = useState(87251);
  
  const feedMsg0 = useRef<HTMLSpanElement>(null);
  const feedMsg1 = useRef<HTMLSpanElement>(null);
  const feedMsg2 = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-fade-up');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-10');
      }, 100 + i * 150);
    });

    const interval = setInterval(() => {
      setThreatCount(p => p + Math.floor(Math.random() * 5) + 1);
      setEndpointCount(p => p + Math.floor(Math.random() * 10) + 2);
      
      const msg = mockEvents[Math.floor(Math.random() * mockEvents.length)];
      if (feedMsg0.current && feedMsg1.current && feedMsg2.current) {
        feedMsg2.current.textContent = feedMsg1.current.textContent;
        feedMsg1.current.textContent = feedMsg0.current.textContent;
        feedMsg0.current.textContent = msg;
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_8px_80px_rgba(236,32,36,0.08),0_4px_40px_rgba(0,0,0,0.5)]">
      
      {/* ── RED WAVE ANIMATION EFFECTS (from original hero) ── */}
      
      {/* Signal Wave Ripple Circles — expanding red rings */}
      <div className="absolute pointer-events-none z-[1]" style={{ width: '320px', height: '320px', right: '12%', top: '15%', borderRadius: '999px', border: '1.5px solid rgba(208,46,50,0.35)', boxShadow: 'inset 0 0 46px rgba(63,18,108,0.2)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 4.2s ease-out infinite' }}></div>
      <div className="absolute pointer-events-none z-[1]" style={{ width: '420px', height: '420px', left: '5%', bottom: '5%', borderRadius: '999px', border: '1.5px solid rgba(63,18,108,0.4)', boxShadow: 'inset 0 0 46px rgba(208,46,50,0.15)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 5s ease-out infinite 0.9s' }}></div>
      <div className="absolute pointer-events-none z-[1]" style={{ width: '260px', height: '260px', left: '40%', top: '30%', borderRadius: '999px', border: '1px solid rgba(236,32,36,0.25)', opacity: 0, transform: 'scale(0.55)', animation: 'wavePulseRipple 3.8s ease-out infinite 1.5s' }}></div>

      {/* 3D Perspective Wave Grid at bottom of card */}
      <div className="absolute pointer-events-none z-[1]" style={{ left: '-15%', right: '-15%', bottom: '-40px', height: '160px', opacity: 0.5, transform: 'perspective(800px) rotateX(66deg)', transformOrigin: 'center bottom', backgroundImage: 'repeating-linear-gradient(90deg, rgba(208,46,50,0.3) 0, rgba(208,46,50,0.3) 2px, transparent 1px, transparent 40px), repeating-linear-gradient(180deg, rgba(63,18,108,0.25) 0, rgba(63,18,108,0.25) 2px, transparent 1px, transparent 28px)', animation: 'waveGridShift 9s linear infinite', maskImage: 'linear-gradient(180deg, transparent 0, black 22%, black 76%, transparent 100%)', WebkitMaskImage: 'linear-gradient(180deg, transparent 0, black 22%, black 76%, transparent 100%)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(208,46,50,0.35), transparent 60%)', animation: 'waveGlow 3.8s ease-in-out infinite' }}></div>
      </div>

      {/* Diagonal Scan Sweep — light sweeps across the card */}
      <div className="absolute inset-0 pointer-events-none z-[2]" style={{ background: 'linear-gradient(100deg, transparent 16%, rgba(255,255,255,0.06) 34%, rgba(208,46,50,0.12) 47%, rgba(63,18,108,0.08) 55%, transparent 72%)', transform: 'translateX(-120%)', animation: 'cardScanSweep 5s ease-in-out infinite', opacity: 0.7 }}></div>

      {/* Ambient corner glows */}
      <div className="absolute -bottom-16 -right-16 w-[280px] h-[280px] rounded-full bg-[var(--ssg-cyber)]/20 blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full bg-[var(--ssg-red)]/15 blur-[70px] pointer-events-none z-0"></div>

      {/* ── HEADER BAR ── */}
      <div className="relative z-10 bg-[#0c1019]/90 backdrop-blur-xl border-b border-white/[0.08] px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[var(--ssg-red)]/15 border border-[var(--ssg-red)]/25 flex items-center justify-center shadow-[0_0_20px_rgba(236,32,36,0.15)]">
            <i className="ph-fill ph-shield-checkered text-[var(--ssg-red)] text-xl"></i>
          </div>
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide">Threat Intelligence Console</h3>
            <p className="text-[#5c6578] text-[0.65rem] sm:text-xs font-medium tracking-widest uppercase mt-0.5">Real-time SOC telemetry</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Live Equalizer */}
          <div className="hidden sm:flex items-end gap-[2px] h-[16px]">
            <div className="w-[3px] h-full bg-[var(--ssg-red)] rounded-sm origin-bottom" style={{ animation: 'eqBar1 1.2s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-[var(--ssg-red)] rounded-sm origin-bottom" style={{ animation: 'eqBar2 0.9s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-[var(--ssg-red)] rounded-sm origin-bottom" style={{ animation: 'eqBar3 1.4s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-[var(--ssg-red)] rounded-sm origin-bottom" style={{ animation: 'eqBar4 1.0s ease-in-out infinite' }}></div>
            <div className="w-[3px] h-full bg-[var(--ssg-red)] rounded-sm origin-bottom" style={{ animation: 'eqBar5 1.1s ease-in-out infinite' }}></div>
          </div>
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-[pulse_2s_ease-in-out_infinite]"></span>
            <span className="text-emerald-400 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest">Live</span>
          </span>
        </div>
      </div>

      {/* ── CARD BODY ── */}
      <div className="relative z-10 bg-[#080c14]/85 backdrop-blur-2xl">
        <div className="grid xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-white/[0.06]">
          
          {/* LEFT PANEL: Stats */}
          <div className="xl:col-span-4 p-6 sm:p-8 flex flex-col gap-5">
            
            {/* Stat: Intrusions Blocked */}
            <div className="rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1117]/60 p-5 sm:p-6 border border-white/[0.07] relative overflow-hidden group hover:border-[var(--ssg-red)]/25 transition-colors duration-300">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[var(--ssg-red)]/10 rounded-full blur-3xl group-hover:bg-[var(--ssg-red)]/20 transition-colors duration-500"></div>
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-[#8b95a9] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">Intrusions Blocked</span>
                <i className="ph-fill ph-shield-slash text-[var(--ssg-red)] text-xl opacity-60"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight relative z-10">
                {threatCount.toLocaleString()}<span className="text-[var(--ssg-red)] ml-0.5 animate-[pulse_2s_ease-in-out_infinite]">_</span>
              </div>
              <div className="flex items-center gap-2 mt-3 relative z-10">
                <i className="ph-fill ph-trend-up text-[var(--ssg-red)] text-sm"></i>
                <span className="text-[var(--ssg-red)] text-xs sm:text-sm font-bold">+12.4%</span>
                <span className="text-[#5c6578] text-xs font-medium ml-0.5">vs last hour</span>
              </div>
            </div>
            
            {/* Stat: Endpoints Monitored */}
            <div className="rounded-2xl bg-gradient-to-br from-[#111827]/80 to-[#0d1117]/60 p-5 sm:p-6 border border-white/[0.07] relative overflow-hidden group hover:border-[var(--ssg-cyber)]/25 transition-colors duration-300">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-[var(--ssg-cyber)]/10 rounded-full blur-3xl group-hover:bg-[var(--ssg-cyber)]/20 transition-colors duration-500"></div>
              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="text-[#8b95a9] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em]">Endpoints Monitored</span>
                <i className="ph-fill ph-monitor text-[var(--ssg-cyber)] text-xl opacity-60"></i>
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-heading tracking-tight relative z-10">
                {endpointCount.toLocaleString()}<span className="text-[var(--ssg-cyber)] ml-0.5 animate-[pulse_2s_ease-in-out_infinite]">_</span>
              </div>
              <div className="flex items-center gap-2 mt-3 relative z-10">
                <i className="ph-fill ph-check-circle text-emerald-400 text-sm"></i>
                <span className="text-emerald-400 text-xs sm:text-sm font-bold">99.97%</span>
                <span className="text-[#5c6578] text-xs font-medium ml-0.5">uptime SLA</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Incident Feed */}
          <div className="xl:col-span-8 p-6 sm:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <i className="ph-fill ph-warning-diamond text-amber-400 text-base sm:text-lg"></i>
                <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-bold text-white/50">Active Incident Feed</span>
              </div>
              <span className="text-[0.6rem] sm:text-xs uppercase tracking-widest font-semibold text-[#5c6578]">Auto-refresh 3.5s</span>
            </div>
            
            <div className="flex flex-col gap-3 flex-1">
              
              {/* Feed Row 1 — Active alert */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-[var(--ssg-red)]/[0.08] border border-[var(--ssg-red)]/25 relative overflow-hidden">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--ssg-red)]/[0.06] via-transparent to-transparent pointer-events-none"></div>
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[var(--ssg-red)] shadow-[0_0_12px_rgba(236,32,36,0.7)]"></div>
                </div>
                <span ref={feedMsg0} className="text-white text-sm sm:text-[0.95rem] font-medium tracking-wide leading-snug flex-1 relative z-10">
                  High-risk endpoint behavior contained - EMEA branch
                </span>
                <span className="text-[var(--ssg-red)] text-xs sm:text-sm font-bold tracking-wider uppercase shrink-0 relative z-10">NOW</span>
              </div>

              {/* Feed Row 2 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#353a47] flex-shrink-0"></div>
                <span ref={feedMsg1} className="text-[#9aa3b5] text-sm sm:text-[0.95rem] font-medium tracking-wide leading-snug flex-1">
                  Malicious domain request blocked - Web gateway
                </span>
                <span className="text-[#4d576a] text-xs sm:text-sm font-bold tracking-wider uppercase shrink-0">12s ago</span>
              </div>

              {/* Feed Row 3 */}
              <div className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-xl bg-white/[0.025] border border-white/[0.06]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#353a47] flex-shrink-0"></div>
                <span ref={feedMsg2} className="text-[#9aa3b5] text-sm sm:text-[0.95rem] font-medium tracking-wide leading-snug flex-1">
                  Ransomware indicator quarantined - DC cluster
                </span>
                <span className="text-[#4d576a] text-xs sm:text-sm font-bold tracking-wider uppercase shrink-0">28s ago</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});
