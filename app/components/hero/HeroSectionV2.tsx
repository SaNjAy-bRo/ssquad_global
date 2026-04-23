"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function HeroSectionV2() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.hero-zoom-in');
    reveals.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('opacity-100', 'scale-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'scale-95', 'translate-y-8');
      }, 100 + i * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-[#020408] overflow-hidden min-h-[100svh] flex items-center justify-center pb-16">
      
      {/* HEXAGON CORE DATA BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center w-full h-full overflow-hidden bg-gradient-to-b from-[#020408] via-[#080b14] to-[#020408]">
        
        {/* Hexagon Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413263' viewBox='0 0 60 103.92304845413263' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 103.92304845413263L0 86.60254037844386L0 51.96152422706631L30 34.64101615137754L60 51.96152422706631L60 86.60254037844386ZM30 51.96152422706631L0 34.64101615137754L0 0L30 -17.32050807568877L60 0L60 34.64101615137754Z' fill='none' stroke='rgba(255,255,255,0.2)' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 103.92px'
        }}></div>

        {/* Central Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(236,32,36,0.15)_0%,rgba(91,46,255,0.1)_40%,transparent_70%)] rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '4s' }}></div>

        {/* Data Particles emitting from center */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden v2-particles-container">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full v2-particle"
              style={{
                top: '50%',
                left: '50%',
                '--angle': `${i * 18}deg`,
                '--distance': `${200 + Math.random() * 400}px`,
                '--duration': `${2 + Math.random() * 3}s`,
                '--delay': `${Math.random() * 2}s`,
                boxShadow: i % 2 === 0 ? '0 0 10px 2px var(--ssg-red)' : '0 0 10px 2px var(--ssg-cyber)'
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      </div>

      {/* CENTERED GLASSMORPHISM TYPOGRAPHY */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center mt-24">
        
        <div className="hero-zoom-in opacity-0 scale-95 translate-y-8 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] p-8 md:p-12 lg:p-16 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl shadow-[0_30px_100px_-20px_rgba(0,0,0,1),inset_0_0_0_1px_rgba(255,255,255,0.05)] text-center relative overflow-hidden group">
          
          {/* Subtle hover gradient inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ssg-red)]/5 to-[var(--ssg-cyber)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--ssg-cyber)]/10 border border-[var(--ssg-cyber)]/20 mb-8">
              <i className="ph ph-shield-check text-[var(--ssg-cyber)] text-sm"></i>
              <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.25em] uppercase text-[var(--ssg-cyber)]">Verified Identity Perimeter</span>
            </div>
            
            <h1 className="font-heading text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              Intelligence-Led <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ssg-red)] to-[#ff7b7d]">
                Proactive Defence
              </span>
            </h1>
            
            <p className="text-[#a1a1aa] text-sm sm:text-base md:text-lg leading-[1.8] max-w-3xl font-medium mx-auto mb-10">
              Unify your security data with real-time threat intelligence and leverage AI-driven automation to detect, investigate, and respond to threats before they impact your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto justify-center px-10 py-4 text-base font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
                Talk to an expert
                <i className="ph ph-arrow-right text-lg"></i>
              </Link>
              <Link href="/#solutions" className="w-full sm:w-auto text-center px-10 py-4 text-base font-bold bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full transition-all">
                Explore our services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .v2-particle {
          animation: v2ParticleShoot var(--duration) ease-out infinite;
          animation-delay: var(--delay);
          opacity: 0;
        }

        @keyframes v2ParticleShoot {
          0% {
            transform: rotate(var(--angle)) translateX(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(var(--angle)) translateX(var(--distance)) scale(0);
            opacity: 0;
          }
        }
      `}} />
    </section>
  );
}
