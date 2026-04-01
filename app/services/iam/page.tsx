"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import ServiceFAQ from '@/app/components/services/shared/ServiceFAQ';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IamSolutionsPage() {
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
      <AppServiceHeader title="Identity And Access Management (IAM) Solutions" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="What Are Identity And Access Management"
        description={`Leading identity and access management solutions combine real-time efficiency from the IAM solutions capability through behavioral analytics and identity analytics.

        Identity and Access Management (IAM) solutions are security frameworks that ensure the right individuals secure the right resources at the right time. They manage user identities, authenticate users, control access based on roles, and monitor user activity. IAM helps organizations safeguard sensitive data, streamline user provisioning, and meet compliance requirements by preventing unauthorized access and enforcing security policies across cloud, on-premise, and hybrid environments.`}
        points={[
          "Centrally manage, monitor identities and hybrid directory",
          "Offers single admin view of SaaS and PaaS environments",
          "Performs real-time checks, analytics on logs, network",
          "Quickly detects anomalous and unusual behavior"
        ]}
        imageUrl="/images/cyber security/Identity and Access Management.jpg"
        imageAlt="Biometric Fingerprint Digital Access"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Why IAM Is Critical For Modern Cybersecurity"
        eyebrow="The Identity Imperative"
        icon="ph-fingerprint"
        cards={[
          { title: "Expanding Attack Surfaces", description: "With 81% of breaches involving compromised credentials, identity and access management aims to reduce attacks by deploying password controls, MFA, and modern identity workflows." },
          { title: "Cloud Security Imperative", description: "Identity governance and administration solutions ensure consistent security policies across public cloud environments and SaaS applications." },
          { title: "Compliance Requirements", description: "Regulations like GDPR, HIPAA, and SOX mandate robust access control management for sensitive data protection and regulatory audits." },
          { title: "Digital Transformation Challenges", description: "Modern workforces require secure access from any location with a multitude of tools bridging the gap of traditional security perimeters." }
        ]}
      />

      <ServiceFeatureGrid 
        title="Key Components Of Effective IAM Solutions"
        bgColor="white"
        columns={2}
        cards={[
          { title: "Identity Governance And Administration", points: ["Automated user lifecycle management", "Role-based access control (RBAC)", "Access certification and attestation", "Separation of duties enforcement"] },
          { title: "Privileged Access Management", points: ["Administration of privileged credentials", "Just-in-time access provisioning", "Session monitoring and recording", "Play synchronization prevention"], highlight: true },
          { title: "Adaptive Authentication", points: ["Risk-based multi-factor authentication", "Context-aware access policies", "Behavioral biometrics", "Passwordless authentication options"] },
          { title: "Access Management", points: ["Single sign-on (SSO) for enterprise apps", "Federation standards support (SAML, OAuth)", "API access security", "Microservices authentication"] }
        ]}
      />

      <ServiceFeatureGrid 
        title="Selecting The Right IAM Provider"
        subtitle="When evaluating identity and access management providers, consider:"
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Preventive Capabilities", points: ["Multi-factor authentication methods", "Privileged access security", "Adaptive authentication intelligence"] },
          { title: "Deployment Flexibility", points: ["Cloud, on-premise, and hybrid options", "Microservices architecture support", "Legacy system compatibility"] },
          { title: "Management Features", points: ["Centralized policy administration", "Automated user lifecycle management", "Comprehensive auditing and reporting"] },
          { title: "Compliance Support", points: ["Pre-built compliance frameworks", "Access certification workflows", "Audit-ready reporting"] },
          { title: "Vendor Expertise", points: ["Years in IAM market", "Implementation experience", "Customer support quality"] }
        ]}
      />

      <ServiceCTA />
      

      <ServiceFAQ />

      <GlobalIndustriesSection />
    </main>
  );
}
