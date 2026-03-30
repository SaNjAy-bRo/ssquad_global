"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ApiDevelopmentPage() {
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
      <InnerHeader title="API Development & Integration" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Build Seamless Connectivity. Unlock New Possibilities."
        description={`In today’s digital ecosystem, APIs (Application Programming Interfaces) are the backbone of modern, connected systems. They enable applications, platforms, and devices to communicate efficiently, share data securely, and scale effortlessly. At Ssquad, we specialize in custom API development and integration services that empower your business to operate faster, smarter, and more connected than ever before. 

Whether you're building a new product, connecting legacy systems, or integrating third-party services, our team ensures smooth, secure, and scalable API solutions tailored to your business needs. Our API Services Include:`}
        points={[
          "Custom API Development",
          "API Integration Services",
          "API Consulting & Strategy"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="API Connectivity Diagram"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our API Services Include"
        eyebrow="API Architecture"
        icon="ph-plugs-connected"
        cards={[
          { 
            title: "Custom API Development", 
            description: "",
            points: [
              "Development of RESTful and SOAP APIs",
              "Secure data exchange and access control mechanisms",
              "API versioning and lifecycle management",
              "High-performance endpoints"
            ]
          },
          { 
            title: "API Integration Services", 
            description: "",
            points: [
              "Integration with third-party platforms (e.g., Salesforce, SAP, Stripe, Twilio, AWS, etc.)",
              "Legacy system integration to modern platforms",
              "Cloud-based API management and orchestration",
              "Middleware and microservices integration"
            ]
          },
          { 
            title: "API Consulting & Strategy", 
            description: "",
            points: [
              "API-first architecture planning",
              "Platform and technology selection",
              "Performance tuning and optimization",
              "Documentation, testing, and monitoring best practices"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
