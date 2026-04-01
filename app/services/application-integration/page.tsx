"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AppIntegrationPage() {
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
      <AppServiceHeader title="Application Integration Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Unify Systems. Streamline Workflows. Maximize Business Value"
        description={`In today's complex IT environments, businesses rely on multiple applications—often siloed and disconnected—to perform essential functions. This fragmentation creates inefficiencies, data inconsistencies, and operational roadblocks. Application Integration Services from Ssquad help you break down those silos and bring your technology ecosystem together.

We enable seamless connectivity between your internal systems, third-party applications, cloud platforms, and data sources—creating a unified digital environment that supports agility, scalability, and smarter decision-making. What We Deliver:`}
        points={[
          "System & Data Integration",
          "Cloud & Hybrid Integration",
          "API Development & Management",
          "Real-Time Data Synchronization",
          "Third-Party Software Integration",
          "Middleware & ESB Solutions"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Data Integration Flows"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Deliver"
        eyebrow="Seamless Connectivity"
        icon="ph-plugs"
        cards={[
          { title: "System & Data Integration", description: "Connect your ERP, CRM, HR, finance, and other mission-critical systems for a consolidated view and synchronized data flow." },
          { title: "Cloud & Hybrid Integration", description: "Integrate cloud-based applications with on-premise systems to ensure smooth hybrid operations across your IT infrastructure." },
          { title: "API Development & Management", description: "Design, develop, and manage custom APIs to enable secure, real-time data exchange between applications." },
          { title: "Real-Time Data Synchronization", description: "Enable accurate, real-time information flow between systems for timely insights and faster decision-making." },
          { title: "Third-Party Software Integration", description: "Seamlessly integrate SaaS platforms, partner tools, and industry-specific software into your existing workflows." },
          { title: "Middleware & ESB Solutions", description: "Leverage middleware platforms and enterprise service bus (ESB) architecture to enable scalable and structured integration." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
