"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudConsultingPage() {
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
      <InnerHeader title="Cloud Consulting Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Strategic Guidance For Smarter, Scalable Cloud Solutions"
        description={`Partner with seasoned cloud experts at Ssquad to develop and execute a cloud strategy tailored to your business vision and IT landscape. Whether you're taking your first steps toward the cloud, managing a multi-cloud ecosystem, or enhancing cloud performance and security, our consulting services ensure your environment is optimized, resilient, and future-ready. 

Adopting a cloud-first approach is no longer optional—it’s a strategic imperative. For IT to meet evolving business demands and for businesses to deliver exceptional customer experiences, the cloud must become a foundational enabler of innovation, agility, and scalability. Ssquad’s Cloud Consulting Services are designed to help enterprises confidently embrace cloud technologies and unlock their full potential.`}
        points={[
          "Strategic Cloud Planning",
          "Migration Assessment & Execution",
          "Multi-Cloud & Hybrid Optimization",
          "Security & Compliance Frameworks",
          "Performance & Cost Efficiency"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Cloud Architecture Network"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Deliver"
        eyebrow="Expert Consulting"
        icon="ph-strategy"
        cards={[
          { title: "Strategic Cloud Planning", description: "Define a clear cloud roadmap that aligns with your business goals and maximizes long term value." },
          { title: "Migration Assessment & Execution", description: "Evaluate readiness, choose the right cloud model (public, private, or hybrid), and seamlessly migrate applications and data." },
          { title: "Multi-Cloud & Hybrid Optimization", description: "Optimize operations across multiple platforms (AWS, Azure, GCP, private cloud) for performance, compliance, and cost control." },
          { title: "Security & Compliance Frameworks", description: "Identify risks and implement robust cloud security policies to ensure regulatory compliance and data protection." },
          { title: "Performance & Cost Efficiency", description: "Analyze cloud consumption patterns, eliminate waste, and ensure maximum ROI through cloud cost optimization and FinOps strategies." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
