"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import OverviewSection from '@/app/components/services/app-security/OverviewSection';
import ImperativeSection from '@/app/components/services/app-security/ImperativeSection';
import SolutionsGrid from '@/app/components/services/app-security/SolutionsGrid';
import ProviderSelection from '@/app/components/services/app-security/ProviderSelection';
import IndustriesSection from '@/app/components/services/app-security/IndustriesSection';
import ContactCTASection from '@/app/components/sections/ContactCTASection';

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
      
      <ContactCTASection />
      
      {/* Container wrapper for these two to manage spacing nicely */}
      <div className="bg-slate-50 relative z-10">
        <ProviderSelection />
        <IndustriesSection />
      </div>
    </main>
  );
}
