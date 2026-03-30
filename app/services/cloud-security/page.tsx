"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudSecurityPage() {
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
      <InnerHeader title="Cloud Security" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Protecting Your Cloud Environment With Comprehensive, Proactive Defense"
        description={`As organizations increasingly migrate to cloud platforms, securing cloud environments becomes paramount to protect sensitive data, ensure compliance, and maintain business continuity. Ssquad's Cloud Security solutions deliver robust, end-to-end protection tailored to your unique cloud infrastructure—whether public, private, or hybrid.

The shift to cloud computing introduces new security challenges, including data breaches, misconfigurations, unauthorized access, and evolving cyber threats. Without effective security measures, organizations risk significant financial losses, reputational damage, and regulatory penalties. Our Cloud Security Services:`}
        points={[
          "Identity & Access Management (IAM)",
          "Data Protection & Encryption",
          "Compliance & Governance",
          "Cloud Security Posture Management",
          "Threat Detection & Response",
          "Secure DevOps"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Secure Cloud Environment"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our Cloud Security Services"
        eyebrow="Robust Defense"
        icon="ph-shield-warning"
        cards={[
          { title: "Identity & Access Management (IAM)", description: "Control who can access your cloud resources with granular permissions and multi-factor authentication to prevent unauthorized entry." },
          { title: "Cloud Security Posture Management (CSPM)", description: "Continuously assess and remediate cloud misconfigurations and compliance gaps across your cloud environments." },
          { title: "Data Protection & Encryption", description: "Secure data at rest and in transit using advanced encryption methods, tokenization, and secure key management." },
          { title: "Threat Detection & Response", description: "Leverage AI-powered monitoring and analytics to detect suspicious activity and respond swiftly to potential threats." },
          { title: "Compliance & Governance", description: "Ensure adherence to industry standards and regulations such as GDPR, HIPAA, PCI DSS, and more with automated reporting and audit trails." },
          { title: "Secure DevOps", description: "Integrate security into your DevOps pipeline with automated vulnerability scanning and code analysis to reduce risk in software development." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
