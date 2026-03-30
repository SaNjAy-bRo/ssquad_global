"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudOperationsPage() {
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
      <InnerHeader title="Cloud Operations & Intelligent Automation" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Unleashing Agility, Resilience, And Intelligence Across Your Cloud Ecosystem"
        description={`In today's digital era, cloud infrastructure is the engine that powers innovation, scalability, and agility. From AI and machine learning to advanced analytics and DevOps, modern businesses rely on mature, cloud-native operations to stay competitive and future-ready. 

Ssquad's Cloud Operations services offer a comprehensive, end-to-end approach to managing and optimizing public, private, and hybrid cloud environments. We deliver fully automated, full-stack cloud operations that ensure your infrastructure is always performing at its best—secure, cost-efficient, and aligned with your business goals. Key Capabilities:`}
        points={[
          "Full-stack cloud lifecycle management",
          "Seamless integration of cloud-native technologies",
          "Predictive analytics and AI-powered automation",
          "DevOps, CI/CD, and container orchestration support",
          "Intelligent workload placement and cost optimization",
          "Built-in governance, compliance, and security",
          "Real-time monitoring and AIOps for proactive operations"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Intelligent Cloud Operations AI"
        imageAlignment="right"
      />

      <section className="dark-phase arc-section py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="arc-heading reveal">
            <span className="arc-icon"><i className="ph ph-robot"></i></span>
            <p className="section-eyebrow">AIOps & Automation</p>
            <h2 className="section-title text-white">Next-Generation Cloud Management At Scale</h2>
            
            <div className="mt-8 space-y-6 text-slate-300 text-lg leading-relaxed text-left">
              <p>
                Our managed services span the entire cloud lifecycle, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and cloud-native technologies like microservices, containers, DevOps frameworks, and data protection strategies. Whether you're deploying new workloads or modernizing legacy environments, we ensure seamless integration and ongoing optimization to unlock continuous business value.
              </p>
              <p>
                At Ssquad, we combine deep domain expertise with intelligent automation and AI-driven analytics to create cloud strategies that are proactive and adaptive. With our predictive insights and real-time monitoring, organizations can streamline operations, reduce downtime, and make smarter, faster decisions. Our AI-powered operations (AIOps) platform automates routine tasks, detects anomalies before they impact performance, and enables self-healing IT systems, resulting in higher efficiency, reduced risk, and lower operational overhead.
              </p>
              <p>
                Through strategic partnerships with top-tier cloud providers like Google Cloud, Ssquad integrates generative AI into every layer of your cloud ecosystem. From enhancing customer engagement and automating supply chain processes to supporting sustainability initiatives, our solutions help you drive real-world impact across your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
