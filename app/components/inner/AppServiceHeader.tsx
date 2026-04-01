"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface AppServiceHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function AppServiceHeader({ title, subtitle, breadcrumbs }: AppServiceHeaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number }[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 0.5,
          alpha: Math.random() * 0.5 + 0.1
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(100 - dist) / 100 * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resize);
    resize();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="hero relative overflow-hidden pt-56 pb-32 lg:pt-72 lg:pb-48"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner.jpg)' }}
      ></div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 z-0 bg-ssg-dark/80 mix-blend-multiply"></div>

      {/* Particle Overlay */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-60"
      ></canvas>

      {/* Wavy Animation Flow & other existing overlays with slight opacity */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow"></div>
        <div className="hero-network-lines"></div>
        <div className="hero-signal-waves"></div>
        <div className="hero-3d-waves"></div>
        <div className="hero-scan-sweep"></div>
      </div>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center gap-2 mb-6 reveal opacity-80">
             {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-white/90 font-medium drop-shadow-md">
                   {idx > 0 && <i className="ph ph-caret-right text-[10px]"></i>}
                   <Link href={crumb.href} className="hover:text-ssg-red transition-colors">{crumb.label}</Link>
                </div>
             ))}
          </nav>
        )}

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight reveal drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-slate-100 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto reveal drop-shadow-md font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
