"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function WorkflowAutomationPage() {
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
      <AppServiceHeader title="Workflow Automation & Optimization" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Simplify Processes. Maximize Efficiency. Accelerate Growth"
        description={`In today's fast-paced business environment, manual, repetitive tasks slow down productivity and increase the risk of human error. Workflow Automation & Optimization eliminates inefficiencies by digitizing and automating critical business operations—freeing up your team to focus on strategic, high-value work.

At Ssquad, we help organizations streamline their workflows using intelligent automation tools, data-driven insights, and process optimization strategies. Whether you're looking to improve internal collaboration, customer service, or operational execution, our solutions are designed to scale with your business and deliver lasting impact. What We Offer:`}
        points={[
          "Business Process Automation",
          "Workflow Design & Optimization",
          "Integration With Business Applications",
          "Custom Automation Solutions",
          "Robotic Process Automation (RPA)",
          "KPI Monitoring & Continuous Improvement"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Workflow Optimization Chart"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Offer"
        eyebrow="Automated Workflows"
        icon="ph-arrows-clockwise"
        cards={[
          { title: "Business Process Automation", description: "Automate routine tasks and approvals across departments—from HR onboarding and finance operations to IT ticketing and customer support." },
          { title: "Workflow Design & Optimization", description: "Analyze, map, and optimize end-to-end business workflows to remove bottlenecks, reduce delays, and boost efficiency." },
          { title: "Integration With Business Applications", description: "Seamlessly connect your automation workflows with CRMs, ERPs, communication tools, and other third-party applications for unified operations." },
          { title: "Custom Automation Solutions", description: "Build tailored automation systems using platforms like Power Automate, Zapier, UiPath, or custom scripts to address your unique processes." },
          { title: "Robotic Process Automation (RPA)", description: "Deploy software bots to handle high-volume, rule-based tasks that mimic human interaction across your digital systems." },
          { title: "KPI Monitoring & Continuous Improvement", description: "Track performance metrics and refine workflows regularly to ensure maximum output and ongoing business value." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
