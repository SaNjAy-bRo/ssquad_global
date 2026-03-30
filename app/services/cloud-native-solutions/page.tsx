"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudNativePage() {
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
      <InnerHeader title="Cloud Native Solutions" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Unlock Agility, Scalability, And Innovation With Cloud Native Technologies"
        description={`In today's fast-paced digital world, cloud native architecture is transforming how businesses build, deploy, and manage applications. Designed specifically for cloud environments, cloud native solutions enable organizations to develop scalable, resilient, and flexible applications that respond quickly to changing market demands. 

Cloud native refers to building and running applications that fully leverage cloud computing models—utilizing microservices, containers, serverless computing, and continuous integration/continuous delivery (CI/CD) pipelines. This approach promotes faster development cycles, easier maintenance, and superior resource efficiency. Our Cloud Native Services:`}
        points={[
          "Microservices Architecture",
          "Containerization & Orchestration",
          "Serverless Computing",
          "CI/CD Pipelines",
          "Cloud Native Security"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Abstract Cloud Native Neon Nodes"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our Cloud Native Services"
        eyebrow="Modern Architecture"
        icon="ph-brackets-curly"
        cards={[
          { title: "Microservices Architecture", description: "Design and implement modular applications that allow independent development, testing, and deployment of components." },
          { title: "Containerization & Orchestration", description: "Utilize Docker and Kubernetes to package applications and automate their deployment, scaling, and management." },
          { title: "Serverless Computing", description: "Build event-driven applications that automatically scale and reduce infrastructure management overhead." },
          { title: "CI/CD Pipelines", description: "Implement automated pipelines for continuous integration, testing, and delivery to boost release frequency and reliability." },
          { title: "Cloud Native Security", description: "Integrate security best practices from development through production, ensuring compliance and risk mitigation." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
