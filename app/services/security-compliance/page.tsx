"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function SecurityCompliancePage() {
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
      <InnerHeader title="Security & Compliance Customization" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Secure By Design. Compliant By Default"
        description={`In an era where data breaches and regulatory pressures are escalating, application security and compliance are no longer optional—they're essential. At Ssquad, we specialize in custom security and compliance solutions tailored to your business applications, ensuring you meet industry regulations and protect your digital assets at every level.

Whether you're building from scratch or enhancing existing systems, our team helps you integrate robust security frameworks and align with relevant standards such as GDPR, HIPAA, SOC 2, ISO 27001, PCI-DSS, and more. Our Services Include:`}
        points={[
          "Custom Security Implementation",
          "Compliance Enablement",
          "Security Hardening & Monitoring"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Security Locks Dashboard"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our Services Include"
        eyebrow="Application Defense"
        icon="ph-shield-check"
        cards={[
          { 
            title: "Custom Security Implementation", 
            description: "",
            points: [
              "Identity & Access Management (IAM)",
              "Role-based access controls (RBAC)",
              "Data encryption at rest and in transit",
              "Secure API development and integration for reliable, scalable, and protected data exchange"
            ]
          },
          { 
            title: "Compliance Enablement", 
            description: "",
            points: [
              "Audit preparation and gap assessments",
              "Compliance mapping for regulatory frameworks",
              "Policy enforcement automation and reporting",
              "Documentation and evidence management for audits"
            ]
          },
          { 
            title: "Security Hardening & Monitoring", 
            description: "",
            points: [
              "Application vulnerability assessments",
              "Integration with SIEM and log management platforms",
              "Real-time threat detection and incident response",
              "Secure DevOps (DevSecOps) practices"
            ]
          }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
