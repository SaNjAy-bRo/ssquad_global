"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function CloudAssurancePage() {
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
      <InnerHeader title="Cloud Assurance Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Secure, Compliant, And Resilient Cloud Environments"
        description={`In today's digital era, cloud technology is a cornerstone of innovation and business acceleration. From enabling AI and machine learning to supporting advanced data analytics, the cloud offers powerful capabilities that help organizations scale faster and operate smarter. Yet with these benefits come new challenges, particularly around security, compliance, and operational risk.

As enterprises increase their cloud adoption, the need for a robust assurance strategy becomes essential. Ensuring the integrity, availability, and security of cloud environments is vital—not only to protect sensitive data and maintain compliance but also to uphold customer trust and business continuity. Our Cloud Assurance Capabilities Include:`}
        points={[
          "Security Posture Evaluation",
          "Quality Engineering & Application Testing",
          "Risk Management & Incident Readiness",
          "Compliance & Governance Support",
          "Infrastructure Resilience & Monitoring"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Cloud Security Lock Graphic"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Our Cloud Assurance Capabilities Include"
        eyebrow="Continuous Verification"
        icon="ph-shield-check"
        cards={[
          { title: "Security Posture Evaluation", description: "Identify vulnerabilities, misconfigurations, and risks through continuous monitoring and threat assessments." },
          { title: "Compliance & Governance Support", description: "Ensure adherence to industry regulations and standards such as ISO, GDPR, HIPAA, and others." },
          { title: "Quality Engineering & Application Testing", description: "Maintain application reliability and performance with comprehensive testing strategies across cloud-native and hybrid environments." },
          { title: "Infrastructure Resilience & Monitoring", description: "Optimize uptime and detect anomalies early with automated monitoring and reliability engineering practices." },
          { title: "Risk Management & Incident Readiness", description: "Develop response frameworks to minimize business impact from emerging threats and operational disruptions." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
