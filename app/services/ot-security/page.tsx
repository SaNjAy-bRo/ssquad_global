"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import ServiceFAQ from '@/app/components/services/shared/ServiceFAQ';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function OtSecurityPage() {
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
      <InnerHeader title="Discover Our OT Security Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="OT Security Services"
        description={`OT Security Services are specialized cybersecurity solutions designed to protect Operational Technology (OT) environments. OT systems are used to control physical operations such as manufacturing, energy distribution, water treatment, and transportation. These environments often include legacy systems and proprietary protocols that were not meant for security, making them vulnerable to cyber threats.

        These services typically include risk assessments, network segmentation, continuous threat detection, incident response, and continuous monitoring tailored specifically for OT environments. Unlike IT environments, OT security measures prioritize operational continuity and safety above data protection. By implementing OT security services, organizations can strengthen their cyber defenses, ensure regulatory compliance, and maintain reliable, secure environment and uninterrupted flow of IT.
        
        Our OT Security Services:`}
        points={[
          "OT security assessments",
          "OT compliance assessments",
          "OT security consulting"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Operational Technology Factory Control"
        imageAlignment="right"
      />

      <ServiceFeatureGrid 
        title="OT Security Assessments"
        subtitle="In today's highly connected IT environments, Operational Technology (OT) environments are more connected and exposed than ever before. This increased connectivity brings tremendous operational benefits, but also introduces significant cybersecurity risks. Our OT Security Assessments are designed to help you identify vulnerabilities, mitigate risks, and protect your critical infrastructure operations from cyber threat. What We Offer:"
        bgColor="slate"
        columns={3}
        cards={[
          { title: "Comprehensive Risk Analysis", description: "We perform a deep risk assessment of your OT network architectures, assets, and vulnerabilities." },
          { title: "Threat Detection & Vulnerability Identification", description: "Using advanced threat detection technologies, we pinpoint hidden vulnerabilities before they are exploited." },
          { title: "Compliance & Standards Review", description: "Our assessments map your OT security posture to industry standards like IEC 62443 and NIST." },
          { title: "Actionable Recommendations", description: "Detailed analysis and prioritized action plans to address your unique requirements, enabling you to strengthen operational integrity." },
          { title: "Continuous Improvement", description: "We focus on creating a sustainable monitoring and management framework to maintain optimal system operating levels." }
        ]}
      />

      <ServiceDarkGrid 
        title="OT Compliance Assessments"
        subtitle="Ensure Regulatory Alignment and Secure Your Operational Technology Environments. In the realm of industrial operations, compliance is not just a regulatory requirement; it's a cornerstone of operational integrity and resilience. Our OT Compliance Assessments are designed to help organizations in manufacturing, energy, utilities, transportation, and other critical infrastructure sectors align their operational technology (OT) environments with applicable industry regulations and cybersecurity standards. What Our OT Compliance Assessments Include:"
        eyebrow="Regulatory Alignment"
        icon="ph-scroll"
        cards={[
          { title: "Standards Mapping", description: "We map your current OT security posture against relevant regulations and industry frameworks to identify and correct gaps." },
          { title: "Policy & Procedure Review", description: "Evaluate the effectiveness of your existing security policies, incident response plans, and governance models." },
          { title: "Technical Control Evaluation", description: "Assess critical technical controls such as access management, network segmentation, monitoring systems, and patch management." },
          { title: "Audit Preparation", description: "Get both ready staff and architectures for compliance audits and certifications with relevant industry specific audit standards." },
          { title: "Training & Awareness", description: "Empower organizations to increase operational resilience by internalizing security practices." }
        ]}
      />
      
      <ServiceFeatureGrid 
        title="OT Security Consulting"
        subtitle="Expert Guidance to Secure Your Operational Infrastructure Consulting Services. Our OT (Operational Technology) Consulting Services provide the expert insights, strategic planning, and technical support you need to protect your operations and advance resilience in a rapidly evolving threat landscape. What Our OT Compliance Assessment Covers:"
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Security Strategy & Roadmap Development", description: "Align your OT security objectives with business goals. We help you develop a comprehensive, long-term security strategy that represents maturity and standard alignment." },
          { title: "Architecture Review & Design", description: "Evaluate and optimize your OT network architecture for security and overall performance. We design segmented secure architectures that limit exposure without disrupting operations." },
          { title: "Risk & Threat Assessments", description: "Identify vulnerabilities and assess real-world threat actors scenarios. Understand specific OT risk maturity environments, providing a realistic, actionable calculation of risk priorities." },
          { title: "Policy & Governance Support", description: "Develop or refine OT security policies, procedures, and governance models to ensure regulatory and cross-platform alignment." },
          { title: "Incident Response Planning", description: "Develop, nature or attach response policies. We help public IT and local network instances standard resolve OT compromises, ensuring rapid recovery and minimal down-time." },
          { title: "Training & Awareness Programs", description: "Educate your teams on best practices for OT cybersecurity, managing internal disruptions and creating a secure aware professional organization." }
        ]}
      />

      <ServiceCTA />
      

      <ServiceFAQ />

      <GlobalIndustriesSection />
    </main>
  );
}
