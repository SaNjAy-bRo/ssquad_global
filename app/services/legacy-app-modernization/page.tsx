"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function LegacyAppModernizationPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 40, 300)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-white">
      <InnerHeader title="Legacy Application Modernization" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Revitalize Outdated Systems. Drive Agility. Future-Proof Your Business"
        description={`Legacy systems often become roadblocks to innovation, scalability, and security. As technologies evolve and business needs shift, organizations must modernize these aging applications to remain competitive and efficient. 

Ssquad offers comprehensive Legacy Application Modernization services designed to transform outdated software into modern, agile, and high-performing solutions. Our approach helps businesses unlock the value trapped in legacy systems while aligning IT infrastructure with current and future business goals. What We Do:`}
        points={[
          "Application Rehosting ('Lift and Shift')",
          "Replatforming",
          "Refactoring & Re-architecting",
          "Code Modernization",
          "UI/UX Redesign",
          "Database Modernization"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Modern Microservices Architecture"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Do"
        eyebrow="System Overhaul"
        icon="ph-cpu"
        cards={[
          { title: "Application Rehosting ('Lift And Shift')", description: "Move existing applications to cloud or modern infrastructure with minimal changes to reduce costs and improve scalability." },
          { title: "Replatforming", description: "Transition legacy applications to new platforms or operating systems with optimized configurations for improved performance." },
          { title: "Refactoring & Re-Architecting", description: "Redesign applications using modern architectures (e.g., microservices, containerization) to enhance agility, maintainability, and speed." },
          { title: "Code Modernization", description: "Update programming languages, frameworks, and outdated libraries for better security, performance, and compatibility." },
          { title: "UI/UX Redesign", description: "Refresh legacy interfaces with modern, user-friendly designs that enhance engagement and usability." },
          { title: "Database Modernization", description: "Migrate from outdated databases to scalable, high-performance data platforms with better integration and analytics capabilities." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
