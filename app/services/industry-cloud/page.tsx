"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IndustryCloudPage() {
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
      <InnerHeader title="Industry Cloud Solutions" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Tailored Cloud Platforms Designed For Your Industry's Unique Needs"
        description={`Industry Cloud brings specialized cloud solutions built to meet the distinct requirements, compliance standards, and operational challenges of specific industries. By combining cloud scalability with deep domain expertise, Industry Cloud empowers organizations to accelerate innovation, improve efficiency, and deliver exceptional customer experiences. 

Industry Cloud refers to cloud platforms and services that are customized for the unique workflows, data types, regulations, and business models of particular sectors, such as healthcare, finance, manufacturing, retail, and more. These solutions integrate industry-specific applications, compliance frameworks, and analytics tools to provide a comprehensive, ready-to-use environment. Benefits of Industry Cloud:`}
        points={[
          "Industry-Specific Functionality",
          "Faster Time-To-Market",
          "Enhanced Compliance",
          "Scalability and Flexibility",
          "Integrated Ecosystem"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Industry Specific Cloud Workflows"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Benefits Of Industry Cloud"
        eyebrow="Sector Optimization"
        icon="ph-buildings"
        cards={[
          { title: "Industry-Specific Functionality", description: "Get pre-configured tools and applications designed to address your sector's unique processes and challenges." },
          { title: "Faster Time-To-Market", description: "Accelerate digital transformation with solutions that reduce the need for extensive customization." },
          { title: "Enhanced Compliance", description: "Stay ahead of industry regulations with built-in governance, security controls, and audit capabilities." },
          { title: "Scalability And Flexibility", description: "Scale resources dynamically to support business growth while adapting to evolving market demands." },
          { title: "Integrated Ecosystem", description: "Leverage a network of technology partners, data providers, and cloud services tailored for your industry." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
