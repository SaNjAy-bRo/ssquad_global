"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import OverviewSection from '@/app/components/services/app-security/OverviewSection';
import ImperativeSection from '@/app/components/services/app-security/ImperativeSection';
import SolutionsGrid from '@/app/components/services/app-security/SolutionsGrid';
import ProviderSelection from '@/app/components/services/app-security/ProviderSelection';
import ServiceFAQ from '@/app/components/services/shared/ServiceFAQ';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ApplicationSecurityPage() {
  useEffect(() => {
    // Re-initialize intersection observer for standard reveals
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <InnerHeader 
        title="Application Security" 
        breadcrumbs={[]} 
      />

      <OverviewSection />
      <ImperativeSection />
      <SolutionsGrid />
      
      {/* Minimal CTA Banner */}
      <section className="bg-ssg-dark text-white py-14 lg:py-16 text-center border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-ssg-cyber/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">secure your Applications Today</h2>
          <p className="mb-8 text-slate-300 text-lg max-w-2xl mx-auto">Get a comprehensive security posture assessment and align your enterprise defense with industry best practices.</p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-ssg-red text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-ssg-red/30 hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
            Talk to an Expert <i className="ph ph-arrow-up-right"></i>
          </a>
        </div>
      </section>
      
      <section className="bg-slate-50 relative z-10 pb-0">
        <ProviderSelection />
      </section>

      <ServiceFAQ />

      <GlobalIndustriesSection />
    </main>
  );
}
