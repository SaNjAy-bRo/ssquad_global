"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudDataMigrationPage() {
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
      <InnerHeader title="Cloud Data Migration & Modernization" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Seamlessly Move To The Cloud. Unlock The Power Of Modern Data"
        description={`Legacy systems limit agility, scalability, and innovation. At Ssquad, we help businesses move beyond outdated infrastructures with secure, efficient, and strategic cloud data migration and modernization services that lay the foundation for data-driven transformation. 

Whether you're migrating on-premises databases to the cloud, modernizing data warehouses, or transforming your analytics architecture, our experts guide you through every step of the journey—ensuring minimal disruption, reduced risk, and maximum business value.`}
        points={[
          "Cloud Data Migration",
          "Data Platform Modernization",
          "End-to-End Strategy & Execution",
          "Data Governance & Security",
          "Performance Optimization"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Cloud Data Migration Servers"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our Services Include"
        eyebrow="Data Transformation"
        icon="ph-cloud-arrow-up"
        cards={[
          { title: "Cloud Data Migration", description: "Migrate your data seamlessly from legacy systems to leading cloud platforms (AWS, Azure, GCP) with minimal downtime and full data integrity." },
          { title: "Data Platform Modernization", description: "Re-architect outdated data environments into cloud-native, scalable solutions optimized for real-time analytics, AI/ML, and business intelligence." },
          { title: "End-To-End Strategy & Execution", description: "We assess your current environment, design a tailored roadmap, and manage the complete transition—from planning and pilot phases to validation and go-live." },
          { title: "Data Governance & Security", description: "Ensure full compliance with industry regulations while protecting sensitive data through enterprise-grade security and governance frameworks." },
          { title: "Performance Optimization", description: "Post-migration, we continuously tune your data workloads and infrastructure for better performance, cost-efficiency, and scalability." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
