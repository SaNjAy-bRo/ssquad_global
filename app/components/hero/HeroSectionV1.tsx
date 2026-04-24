"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionV1Props {
  badge?: string;
  heading?: string;
  headingAccent?: string;
  subheading?: string;
}

export default function HeroSectionV1({
  badge = "Trusted Partner in Digital Innovation",
  heading = "Enterprise Technology,",
  headingAccent = "Reimagined",
  subheading = "Empower your business with scalable cloud computing and unshakeable cyber resilience. We build the intelligent infrastructure that drives modern enterprise forward.",
}: HeroSectionV1Props) {
  
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-v1-anim');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
        el.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020810] overflow-hidden min-h-[100svh] flex items-center pt-24 pb-16">
      
      {/* ═══════════ AI GENERATED SERVER CLOUD BACKGROUND ═══════════ */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        
        <Image 
          src="/images/hires-red-blue-server.png" 
          alt="Dual Tone Server Cloud Background" 
          fill 
          priority 
          quality={100}
          className="object-cover object-center scale-105 animate-[v1BgPan_40s_linear_infinite_alternate]"
        />
        
        {/* Deep Blue Cinematic Vignette / Overlays (Reduced on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020818] via-[#020818]/60 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,8,16,0.6)_100%)]"></div>

        {/* ── Horizontal Scan Lines ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none mix-blend-overlay opacity-30">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px]"></div>
        </div>

        {/* ── Animated Vertical Data Pulses ── */}
        <div className="absolute inset-0 overflow-hidden opacity-80 mix-blend-screen pointer-events-none">
           {[...Array(20)].map((_, i) => (
             <div 
               key={i} 
               className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#3b82f6]/20 to-transparent"
               style={{ 
                 left: `${5 + (i * 4.5)}%`,
                 opacity: 0.1 + (i % 3) * 0.2,
               }}
             >
               <div 
                 className={`absolute top-0 left-[-1px] w-[3px] h-[150px] blur-[2px] ${i % 3 === 0 ? 'bg-[var(--ssg-red)]' : 'bg-[#3b82f6]'} animate-[v1DataDrop_var(--drop-dur)_linear_infinite]`}
                 style={{ 
                   '--drop-dur': `${3 + (i % 5)}s`,
                   animationDelay: `${(i % 7) * 0.5}s` 
                 } as any}
               ></div>
             </div>
           ))}
        </div>

        {/* ── Vertical Laser Sweep Layer ── */}
        <div className="absolute left-0 w-full h-[2px] bg-white z-10 shadow-[0_0_15px_#fff,0_0_40px_#ec2024,0_0_80px_#ec2024] v1-laser-sweep opacity-70 pointer-events-none mix-blend-screen">
          <div className="absolute top-[2px] left-0 w-full h-[150px] bg-gradient-to-b from-[var(--ssg-red)]/20 to-transparent"></div>
          <div className="absolute -top-[150px] left-0 w-full h-[150px] bg-gradient-to-t from-[var(--ssg-red)]/20 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-3xl">
          
          {/* ── TYPOGRAPHY & CTA ── */}
          <div className="flex flex-col items-start text-left relative z-30">
            
            {/* Headline */}
            <h1 className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-100 ease-out font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4.5rem] lg:text-[5rem] font-extrabold tracking-tight text-white w-full drop-shadow-2xl">
              {heading} <br/>
              <span className="text-[var(--ssg-red)] drop-shadow-[0_0_15px_rgba(236,32,36,0.4)] relative inline-block pb-1 mt-2">
                {headingAccent}
              </span>
            </h1>
            
            {/* Description */}
            <p className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-200 ease-out mt-6 md:mt-8 text-slate-300 text-[1rem] sm:text-[1.15rem] leading-[1.8] max-w-2xl font-light pl-6 border-l-2 border-[#3b82f6]/40 relative bg-gradient-to-r from-[#050a18]/80 to-transparent p-4 py-3 rounded-r-xl backdrop-blur-sm">
              <span className="absolute left-[-2px] top-0 w-[2px] h-full bg-[#3b82f6] shadow-[0_0_15px_#3b82f6]"></span>
              {subheading}
            </p>

            {/* CTA Buttons */}
            <div className="hero-v1-anim opacity-0 -translate-x-10 transition-all duration-1000 delay-300 ease-out mt-10 flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto">
              <Link href="/contact" className="group relative w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[var(--ssg-red)] text-white overflow-hidden rounded shadow-[0_0_20px_rgba(236,32,36,0.4)] hover:shadow-[0_0_40px_rgba(236,32,36,0.6)] transition-all duration-300 flex items-center gap-3 border border-red-400/50">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[v1Sweep_1s_ease-in-out]"></span>
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
                  Talk to an Expert <i className="ph-bold ph-arrow-right text-lg"></i>
                </span>
              </Link>
              <Link href="/#solutions" className="group w-full sm:w-auto justify-center px-8 py-4 text-[0.95rem] font-bold bg-[#050a18]/80 backdrop-blur-md border border-[#3b82f6]/40 text-white rounded hover:bg-[#3b82f6]/20 transition-colors duration-300 flex items-center gap-3 uppercase tracking-wider text-xs shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                Explore Our Services <i className="ph-bold ph-squares-four text-lg text-[#3b82f6] group-hover:text-white transition-colors"></i>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════ CSS ANIMATIONS ═══════════ */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes v1BgPan {
          0% { transform: scale(1.05) translateX(0); }
          100% { transform: scale(1.05) translateX(-2%); }
        }
        
        /* CTA button sweep */
        @keyframes v1Sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        /* Vertical Data Drops */
        @keyframes v1DataDrop {
          0% { transform: translateY(-150px); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        /* Laser Sweep */
        .v1-laser-sweep { animation: laserSweepV1 5s ease-in-out infinite alternate; }
        @keyframes laserSweepV1 {
          0% { top: -10%; opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { top: 110%; opacity: 0; }
        }
      `}} />
    </section>
  );
}
