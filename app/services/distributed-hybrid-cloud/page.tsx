"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function HybridCloudPage() {
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
      <InnerHeader title="Distributed & Hybrid Cloud Solutions" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Flexibility, Performance, And Control Wherever You Need It"
        description={`In today's complex IT landscape, businesses need more than a one-size-fits-all cloud strategy. That's where Distributed and Hybrid Cloud solutions come in—offering the agility of public cloud, the control of private infrastructure, and the ability to operate seamlessly across both. 

At Ssquad, we help enterprises architect, deploy, and manage distributed and hybrid cloud environments that deliver the best of all worlds: speed, scalability, security, and cost optimization. What We Offer:`}
        points={[
          "Hybrid Cloud Architecture",
          "Distributed Cloud Enablement",
          "Secure Interoperability",
          "Centralized Management & Monitoring",
          "Intelligent workload placement and cost optimization",
          "Cloud-Native & Legacy Coexistence"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Distributed Cloud Networks"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Offer"
        eyebrow="Hybrid Frameworks"
        icon="ph-plugs-connected"
        cards={[
          { title: "Hybrid Cloud Architecture", description: "Design and implement an integrated cloud environment that connects on-premises infrastructure with public and private cloud platforms (e.g., AWS, Azure, GCP). Gain unified control without sacrificing flexibility." },
          { title: "Distributed Cloud Enablement", description: "Deploy cloud services across multiple geographic regions or edge locations—closer to users, applications, and data sources—to reduce latency and meet local compliance requirements." },
          { title: "Secure Interoperability", description: "Seamless integration across environments with enterprise-grade security, identity management, and consistent policy enforcement." },
          { title: "Centralized Management & Monitoring", description: "Unified visibility and governance through a single control plane—allowing you to manage distributed resources, workloads, and costs efficiently." },
          { title: "Cloud-Native & Legacy Coexistence", description: "Modernize applications at your own pace. We ensure that new cloud-native apps and legacy systems work together without disruption." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
