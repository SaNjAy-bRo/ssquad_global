"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CustomAppDevelopmentPage() {
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
      <InnerHeader title="Custom Application Development" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Tailored Software Solutions For Unique Business Needs"
        description={`In today's fast-evolving digital landscape, off-the-shelf software often falls short in meeting the unique demands of your organization. That's where Custom Application Development comes in—delivering solutions specifically designed around your business processes, objectives, and growth strategies. 

At Ssquad, we specialize in building custom applications that go beyond generic capabilities. Our expert development teams work closely with you to understand your operational challenges, user requirements, and technology environment to design, develop, and deploy applications that are efficient, scalable, and future-ready. What We Offer:`}
        points={[
          "End-to-End Development",
          "Business-Driven Design",
          "Cross-Platform Capabilities",
          "Agile & Scalable Architecture",
          "Seamless Integration",
          "Built-In Security & Compliance"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Custom Mobile Application Wireframes"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="What We Offer"
        eyebrow="Custom Software"
        icon="ph-terminal-window"
        cards={[
          { title: "End-To-End Development", description: "From concept to deployment, we manage the entire software development lifecycle—ensuring speed, quality, and transparency at every stage." },
          { title: "Business-Driven Design", description: "Every application we build is tailored to your specific workflows, helping you automate tasks, increase productivity, and support better decision-making." },
          { title: "Cross-Platform Capabilities", description: "Whether it's mobile, web, or desktop applications, we develop custom software that works across platforms and devices." },
          { title: "Agile & Scalable Architecture", description: "Our modular and flexible architectures ensure that your applications can evolve as your business grows and changes." },
          { title: "Seamless Integration", description: "We ensure your custom application integrates smoothly with your existing tools, databases, and enterprise systems." },
          { title: "Built-In Security & Compliance", description: "Security is embedded into the development process to meet your industry's compliance standards and protect your data." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
