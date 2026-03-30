"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function PenetrationTestingPage() {
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
      <InnerHeader title="Penetration Testing Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Secure Your Security Reputation"
        description={`Penetration testing services involve authorized simulated cyberattacks conducted by security experts to identify vulnerabilities in systems, networks, or applications before malicious actors can exploit them. 
        
        These services assess security posture through controlled exploits, including network, web application, cloud, and social engineering tests. Delivered by certified professionals, penetration testing provides actionable insights to strengthen defenses and meet compliance requirements like PCI DSS and ISO 27001, ensuring proactive risk management and enhanced protection against evolving threats. Pen test services mimic actual cyber attacks to test your system's strength. These services offer:`}
        points={[
          "Vulnerability detection on networks, applications, and infrastructure",
          "Industry compliance with standards (PCI DSS, HIPAA, ISO 27001)",
          "Validation of current security controls",
          "Practical remediation recommendations"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Penetration Testing Dashboard"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Red Teaming: Simulate Real-World Attacks To Test True Resilience"
        subtitle="Red teaming services go beyond traditional penetration testing by simulating full-scale, multi-vector attacks to evaluate how your organization detects, responds to, and recovers from real cyber threats. A red team assessment tests not just technology, but also people and processes—making it an essential component of modern red team cybersecurity strategies."
        eyebrow="Advanced Simulation"
        icon="ph-sword"
        cards={[
          { title: "Adversary Emulation", description: "Mimics tactics, techniques, and procedures (TTPs) of real-world threat actors." },
          { title: "Social Engineering Attacks", description: "Tests employee awareness using phishing, baiting, and impersonation techniques." },
          { title: "Physical Security Testing", description: "Evaluates the effectiveness of on-site defenses and facility access controls." },
          { title: "Blue Team Response Evaluation", description: "Measures how well internal teams detect and respond to sophisticated threats." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
