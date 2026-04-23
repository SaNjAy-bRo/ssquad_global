"use client";

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

interface HeroSectionV1Props {
  badge?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
}

export default function HeroSectionV1({
  badge = "Amplified Digital Resilience",
  heading = "Strengthening Business",
  headingAccent = "Foundation",
  subheading = "Build unshakeable protection that enhances your operations, giving you the confidence to innovate and grow while intelligent systems work behind the scenes to fortify your digital presence.",
}: HeroSectionV1Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v1-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10');
      }, 100 + i * 150);
    });
  }, []);

  // Neural Network Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Neural nodes
    interface NNode { x: number; y: number; vx: number; vy: number; r: number; isServer: boolean; pulse: number; }
    const nodes: NNode[] = [];
    const nodeCount = 45;
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() > 0.85 ? 4 : (Math.random() > 0.5 ? 2.5 : 1.5),
        isServer: Math.random() > 0.85,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Data packets traveling along links
    interface Packet { from: number; to: number; t: number; speed: number; color: string; }
    const packets: Packet[] = [];
    const spawnPacket = () => {
      if (packets.length > 20) return;
      const from = Math.floor(Math.random() * nodeCount);
      let to = Math.floor(Math.random() * nodeCount);
      if (to === from) to = (to + 1) % nodeCount;
      const dx = nodes[to].x - nodes[from].x;
      const dy = nodes[to].y - nodes[from].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 300) {
        packets.push({
          from, to, t: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.75 ? '#ec2024' : '#3b82f6',
        });
      }
    };

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      frame++;

      // Spawn packets periodically
      if (frame % 30 === 0) spawnPacket();
      if (frame % 45 === 0) spawnPacket();

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Draw connections
      const maxDist = 250;
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const glow = 0.5 + Math.sin(n.pulse) * 0.5;
        if (n.isServer) {
          // Server nodes: larger, with a pulsing ring
          ctx.beginPath();
          ctx.arc(n.x, n.y, 8 + glow * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 + glow * 0.3})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${0.7 + glow * 0.3})`;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 15;
          ctx.fill();
          ctx.shadowBlur = 0;
        } else {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${0.3 + glow * 0.4})`;
          ctx.shadowColor = '#3b82f6';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Draw & update packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.t += pkt.speed;
        if (pkt.t >= 1) { packets.splice(p, 1); continue; }
        const fromN = nodes[pkt.from];
        const toN = nodes[pkt.to];
        const px = fromN.x + (toN.x - fromN.x) * pkt.t;
        const py = fromN.y + (toN.y - fromN.y) * pkt.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
        // Trail
        const trailT = pkt.t - 0.05;
        if (trailT > 0) {
          const tx = fromN.x + (toN.x - fromN.x) * trailT;
          const ty = fromN.y + (toN.y - fromN.y) * trailT;
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(px, py);
          ctx.strokeStyle = pkt.color;
          ctx.globalAlpha = 0.4;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#020810] overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16">
      
      {/* ═══════════ NEURAL NETWORK CANVAS BACKGROUND ═══════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        
        {/* Live Neural Network Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        
        {/* Deep Blue Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020818]/60 via-transparent to-[#0a0518]/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#020810_85%)]"></div>

        {/* ── Horizontal Scan Lines ── */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent v1-scanline-1"></div>
          <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--ssg-red)]/20 to-transparent v1-scanline-2"></div>
        </div>

        {/* ── Glowing Ambient Orbs ── */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#1e40af]/15 blur-[180px] rounded-full mix-blend-screen animate-[v1GlowPulse_8s_ease-in-out_infinite_alternate] pointer-events-none"></div>
        <div className="absolute bottom-[-5%] left-[-10%] w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[150px] rounded-full mix-blend-screen animate-[v1GlowPulse_6s_ease-in-out_infinite_alternate_reverse] pointer-events-none"></div>
        <div className="absolute top-[40%] left-[50%] w-[350px] h-[350px] bg-[var(--ssg-red)]/6 blur-[120px] rounded-full mix-blend-screen animate-[v1GlowPulse_10s_ease-in-out_infinite_alternate] pointer-events-none"></div>
      </div>

      {/* ═══════════ FULL-WIDTH CIRCUIT TRACES (Left → Right) ═══════════ */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[15] hidden lg:block" viewBox="0 0 1440 900" preserveAspectRatio="none">
        {/* ── Main horizontal bus lines spanning full width ── */}
        <line x1="0" y1="380" x2="1440" y2="380" stroke="#3b82f6" strokeWidth="0.8" className="opacity-10" />
        <line x1="0" y1="520" x2="1440" y2="520" stroke="#3b82f6" strokeWidth="0.5" className="opacity-8" />
        
        {/* ── Left-side origin nodes (behind text area) ── */}
        <circle cx="80" cy="300" r="4" fill="#3b82f6" className="opacity-30" />
        <circle cx="120" cy="450" r="3" fill="#3b82f6" className="opacity-25" />
        <circle cx="60" cy="550" r="3" fill="#ec2024" className="opacity-20" />
        <circle cx="200" cy="380" r="5" fill="#3b82f6" className="opacity-20" />
        <circle cx="150" cy="650" r="3" fill="#3b82f6" className="opacity-15" />

        {/* ── PCB traces from left nodes across to right side ── */}
        {/* Trace 1: top-left → right side */}
        <path d="M80,300 L200,300 L200,380 L720,380 L720,250 L950,250" fill="none" stroke="#3b82f6" strokeWidth="1" className="opacity-15" />
        {/* Trace 2: mid-left → right center */}
        <path d="M120,450 L300,450 L300,380 L720,380 L720,380 L950,380" fill="none" stroke="#3b82f6" strokeWidth="1" className="opacity-12" />
        {/* Trace 3: bottom-left → right bottom */}
        <path d="M60,550 L180,550 L180,520 L720,520 L720,500 L950,500" fill="none" stroke="#ec2024" strokeWidth="0.8" className="opacity-10" />
        {/* Trace 4: far left → mid right */}
        <path d="M0,380 L200,380" fill="none" stroke="#3b82f6" strokeWidth="1.2" className="opacity-12" />
        {/* Trace 5: bottom node → right */}
        <path d="M150,650 L350,650 L350,520 L720,520" fill="none" stroke="#3b82f6" strokeWidth="0.8" className="opacity-10" />

        {/* ── Mid-section junction nodes ── */}
        <circle cx="200" cy="300" r="2.5" fill="#3b82f6" className="opacity-25" />
        <circle cx="300" cy="450" r="2.5" fill="#3b82f6" className="opacity-20" />
        <circle cx="720" cy="380" r="4" fill="#3b82f6" className="opacity-30" />
        <circle cx="720" cy="520" r="3" fill="#3b82f6" className="opacity-25" />
        <circle cx="720" cy="250" r="2.5" fill="#3b82f6" className="opacity-20" />
        <circle cx="350" cy="650" r="2" fill="#3b82f6" className="opacity-15" />

        {/* ── Animated data pulses flowing LEFT → RIGHT ── */}
        <circle r="3" fill="#3b82f6" filter="drop-shadow(0 0 6px #3b82f6)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M80,300 L200,300 L200,380 L720,380 L720,250 L950,250" />
        </circle>
        <circle r="2.5" fill="#60a5fa" filter="drop-shadow(0 0 5px #60a5fa)">
          <animateMotion dur="5s" repeatCount="indefinite" path="M120,450 L300,450 L300,380 L720,380 L720,380 L950,380" />
        </circle>
        <circle r="2.5" fill="#ec2024" filter="drop-shadow(0 0 6px #ec2024)">
          <animateMotion dur="6s" repeatCount="indefinite" path="M60,550 L180,550 L180,520 L720,520 L720,500 L950,500" />
        </circle>
        <circle r="2" fill="#3b82f6" filter="drop-shadow(0 0 4px #3b82f6)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M0,380 L720,380" />
        </circle>
        <circle r="2" fill="#60a5fa" filter="drop-shadow(0 0 4px #60a5fa)">
          <animateMotion dur="5.5s" repeatCount="indefinite" path="M150,650 L350,650 L350,520 L720,520" />
        </circle>

        {/* ── Vertical feeder lines from top/bottom edges ── */}
        <line x1="400" y1="0" x2="400" y2="380" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,8" className="opacity-8" />
        <line x1="600" y1="900" x2="600" y2="520" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,8" className="opacity-8" />
        <line x1="900" y1="0" x2="900" y2="250" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,8" className="opacity-6" />
        
        {/* Vertical pulse */}
        <circle r="2" fill="#3b82f6" filter="drop-shadow(0 0 4px #3b82f6)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M400,0 L400,380" />
        </circle>
        <circle r="2" fill="#60a5fa" filter="drop-shadow(0 0 4px #60a5fa)">
          <animateMotion dur="4s" repeatCount="indefinite" path="M600,900 L600,520" />
        </circle>
      </svg>


      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center w-full">
          
          {/* ── LEFT: TYPOGRAPHY & CTA ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left relative z-30">
            
            {/* Status Badge */}
            <div className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 ease-out inline-flex items-center gap-2.5 px-4 py-1.5 rounded-md border-l-2 border-[#3b82f6] bg-gradient-to-r from-[#3b82f6]/15 to-transparent mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse shadow-[0_0_10px_#3b82f6]"></span>
              <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.2em] uppercase text-white">{badge}</span>
            </div>
            
            {/* Headline */}
            <h1 className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight text-white w-full">
              {heading} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[var(--ssg-red)] relative inline-block pb-1 mt-2">
                {headingAccent}
              </span>
            </h1>
            
            {/* Description */}
            <p className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.1rem] leading-[1.8] max-w-xl font-light lg:pl-6 lg:border-l border-[#3b82f6]/30 relative bg-gradient-to-r from-[#3b82f6]/5 to-transparent p-4 lg:py-2 lg:pr-0 rounded-r-lg">
              <span className="hidden lg:block absolute left-[-1px] top-0 w-[2px] h-full bg-[#3b82f6] shadow-[0_0_15px_#3b82f6]"></span>
              {subheading}
            </p>

            {/* CTA Buttons */}
            <div className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-300 ease-out mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 items-center w-full sm:w-auto">
              <Link href="/contact" className="group relative w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[#3b82f6] text-white overflow-hidden rounded shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 flex items-center gap-3 border border-blue-400/50">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[v1Sweep_1s_ease-in-out]"></span>
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
                  Talk to an Expert <i className="ph-bold ph-arrow-right text-lg"></i>
                </span>
              </Link>
              <Link href="/#solutions" className="group w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[#0a0a18]/80 backdrop-blur-md border border-[#3b82f6]/30 text-white rounded hover:bg-[#3b82f6]/10 transition-colors duration-300 flex items-center gap-3 uppercase tracking-wider text-xs">
                Explore Our Services <i className="ph-bold ph-squares-four text-lg text-[#3b82f6] group-hover:text-white transition-colors"></i>
              </Link>
            </div>
          </div>

          {/* ── RIGHT: UNIFIED SECURITY DASHBOARD ── */}
          <div className="hero-v1-anim opacity-0 translate-x-10 transition-all duration-1000 delay-500 ease-out hidden lg:flex items-center justify-center relative w-full mt-10 lg:mt-0">
            
            {/* Backdrop glow */}
            <div className="absolute w-[500px] h-[500px] bg-[#3b82f6]/10 blur-[150px] rounded-full animate-pulse pointer-events-none"></div>

            {/* Orbiting ring for depth (behind) */}
            <div className="absolute w-[550px] h-[550px] border border-[#3b82f6]/8 rounded-full border-dashed animate-[v1Spin_50s_linear_infinite] z-0 pointer-events-none"></div>

            {/* ═══ THE DASHBOARD CARD ═══ */}
            <div className="relative z-20 w-full max-w-[460px] flex flex-col gap-6">

              {/* ── TOP ROW: Shield + System Status ── */}
              <div className="flex items-center gap-5">
                {/* Shield */}
                <div className="w-[72px] h-[72px] shrink-0 bg-[#050a18] border border-[var(--ssg-red)]/30 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.5),inset_0_0_15px_rgba(236,32,36,0.1)] flex items-center justify-center relative overflow-hidden">
                  <i className="ph-fill ph-shield-check text-[2.2rem] text-[var(--ssg-red)] drop-shadow-[0_0_15px_var(--ssg-red)]"></i>
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <div className="w-full h-[1px] bg-[var(--ssg-red)]/40 shadow-[0_0_4px_var(--ssg-red)] animate-[v1ScanDown_3s_linear_infinite]"></div>
                  </div>
                </div>
                {/* Status Card */}
                <div className="flex-1 bg-[#050a18]/80 backdrop-blur-sm border border-[#3b82f6]/15 rounded-xl px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[0.6rem] font-mono text-[#60a5fa] tracking-[0.15em] uppercase font-bold">System Status</span>
                    <span className="flex items-center gap-1.5 text-[0.6rem] font-mono text-emerald-400 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
                      ONLINE
                    </span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <div className="flex-1 h-1 bg-black/50 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#3b82f6] rounded-full shadow-[0_0_6px_#3b82f6] animate-[v1PulseWidth_4s_ease-in-out_infinite_alternate]"></div></div>
                    <span className="text-[0.55rem] font-mono text-slate-400">CPU 85%</span>
                  </div>
                </div>
              </div>

              {/* ── CENTER: Chip + Server Nodes Grid ── */}
              <div className="flex items-center gap-5">
                
                {/* The Processor Chip */}
                <div className="w-[100px] h-[100px] shrink-0 bg-[#050a18] border-2 border-[#3b82f6]/35 rounded-xl shadow-[0_0_40px_rgba(59,130,246,0.15),inset_0_0_20px_rgba(59,130,246,0.08)] flex items-center justify-center relative">
                  {/* Pins top */}
                  <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 flex gap-2">
                    {[...Array(5)].map((_, i) => <div key={`pt-${i}`} className="w-[2px] h-[8px] bg-[#3b82f6]/35 rounded-full"></div>)}
                  </div>
                  {/* Pins bottom */}
                  <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 flex gap-2">
                    {[...Array(5)].map((_, i) => <div key={`pb-${i}`} className="w-[2px] h-[8px] bg-[#3b82f6]/35 rounded-full"></div>)}
                  </div>
                  {/* Pins left */}
                  <div className="absolute -left-[8px] top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    {[...Array(4)].map((_, i) => <div key={`pl-${i}`} className="w-[8px] h-[2px] bg-[#3b82f6]/35 rounded-full"></div>)}
                  </div>
                  {/* Pins right */}
                  <div className="absolute -right-[8px] top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    {[...Array(4)].map((_, i) => <div key={`pr-${i}`} className="w-[8px] h-[2px] bg-[#3b82f6]/35 rounded-full"></div>)}
                  </div>
                  {/* Die */}
                  <div className="w-[58px] h-[58px] border border-[#3b82f6]/25 rounded-lg bg-gradient-to-br from-[#3b82f6]/8 to-transparent flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="w-full h-[1px] bg-[#3b82f6] shadow-[0_0_6px_#3b82f6] animate-[v1ScanDown_2s_linear_infinite]"></div>
                    </div>
                    <i className="ph-fill ph-cpu text-2xl text-[#3b82f6] drop-shadow-[0_0_12px_#3b82f6]"></i>
                  </div>
                  <div className="absolute -bottom-5 text-[0.45rem] font-mono text-[#60a5fa]/40 tracking-[0.15em] uppercase">SSG-CORE</div>
                </div>

                {/* Server Node List */}
                <div className="flex-1 flex flex-col gap-3">
                  {[
                    { label: 'FIREWALL-01', pct: 78, color: 'blue' as const },
                    { label: 'GATEWAY-02', pct: 92, color: 'blue' as const },
                    { label: 'MONITOR-03', pct: 45, color: 'red' as const },
                  ].map((node, i) => (
                    <div key={i} className="relative w-full h-[48px] bg-[#050a18]/90 border border-[#3b82f6]/15 rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center px-4 justify-between backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-lg"></div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col gap-[1.5px]">
                          {[...Array(4)].map((_, j) => <div key={j} className="w-6 h-[1.5px] bg-white/[0.06] rounded-full"></div>)}
                        </div>
                        <span className="text-[0.55rem] font-mono text-slate-400 tracking-wider">{node.label}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-[50px] h-1.5 bg-black/50 rounded-full overflow-hidden border border-white/5">
                          <div className={`h-full rounded-full animate-[v1PulseWidth_3s_ease-in-out_infinite_alternate] ${node.color === 'red' ? 'bg-[var(--ssg-red)] shadow-[0_0_6px_var(--ssg-red)]' : 'bg-[#3b82f6] shadow-[0_0_6px_#3b82f6]'}`} style={{ animationDelay: `${i * 0.5}s`, width: `${node.pct}%` }}></div>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></div>
                          <div className={`w-2 h-2 rounded-full ${node.color === 'red' ? 'bg-[var(--ssg-red)] shadow-[0_0_4px_var(--ssg-red)] animate-pulse' : 'bg-[#3b82f6] shadow-[0_0_4px_#3b82f6]'}`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── BOTTOM ROW: Metrics + Network Stats ── */}
              <div className="flex gap-4">
                {/* Threat Chart */}
                <div className="flex-1 bg-[#050a18]/80 backdrop-blur-sm border border-[#3b82f6]/15 rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="text-[0.6rem] text-[#60a5fa] font-mono uppercase tracking-[0.15em] font-bold">Threat Defense</span>
                    <div className="w-2 h-2 rounded-full bg-[var(--ssg-red)] animate-ping"></div>
                  </div>
                  <div className="flex items-end gap-1 h-[36px] w-full border-b border-white/10 pb-1">
                    {[30, 55, 40, 80, 60, 100, 70, 90, 50, 75].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-sm ${i % 5 === 0 ? 'bg-gradient-to-t from-[var(--ssg-red)] to-[#ff5b5b]' : 'bg-gradient-to-t from-[#3b82f6] to-[#60a5fa]'}`} style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                  <div className="mt-2 text-[0.6rem] font-mono text-slate-300 flex justify-between">
                    <span>Blocked</span>
                    <span className="text-emerald-400 font-bold">99.9%</span>
                  </div>
                </div>
                {/* Network Stats */}
                <div className="w-[140px] bg-[#050a18]/80 backdrop-blur-sm border border-[#3b82f6]/15 rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] flex flex-col justify-between">
                  <div className="text-[0.55rem] font-mono text-[#60a5fa] uppercase tracking-[0.15em] font-bold mb-3">Network</div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="text-[0.5rem] font-mono text-slate-500 mb-0.5">Latency</div>
                      <div className="text-sm font-bold text-white font-mono">12<span className="text-[0.5rem] text-slate-400 ml-0.5">ms</span></div>
                    </div>
                    <div>
                      <div className="text-[0.5rem] font-mono text-slate-500 mb-0.5">Uptime</div>
                      <div className="text-sm font-bold text-emerald-400 font-mono">99.99<span className="text-[0.5rem] text-slate-400 ml-0.5">%</span></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ CSS ANIMATIONS ═══════════ */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Scan lines */
        .v1-scanline-1 { animation: v1ScanDown 6s linear infinite; }
        .v1-scanline-2 { animation: v1ScanDown 10s linear infinite; animation-delay: 3s; }
        @keyframes v1ScanDown {
          0% { top: -2%; opacity: 0; }
          5% { opacity: 1; }
          95% { opacity: 1; }
          100% { top: 102%; opacity: 0; }
        }

        /* Ambient glow */
        @keyframes v1GlowPulse {
          0% { opacity: 0.4; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1.1); }
        }

        /* Floating elements */
        @keyframes v1Float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        /* Server blade activity bars */
        @keyframes v1PulseWidth {
          0%, 100% { width: 40%; }
          50% { width: 90%; }
        }

        /* Orbiting rings */
        @keyframes v1Spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes v1SpinReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        /* CTA button sweep */
        @keyframes v1Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* Data drop on cloud laser */
        @keyframes v1DataDrop {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(calc(100vh + 100%)); opacity: 0; }
        }
      `}} />
    </section>
  );
}
