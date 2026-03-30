"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function InfraManagementPage() {
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
    <main className="bg-white px-0 m-0">
      <InnerHeader title="End-To-End IT Infrastructure Management" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="We Assist Enterprises To Upgrade Their Businesses With Latest IT Infrastructure And Managed Services"
        description={`S-squad Global has been a trusted partner to over 100 enterprises across the APAC region for more than 12 years, delivering end-to-end IT infrastructure and cybersecurity solutions. With 10 regional offices and a presence in over 50+ locations, we bring unmatched reach and responsiveness to every corner of the region.

As cyber threats grow in complexity, we empower businesses to stay secure, resilient, and compliant. Our robust suite of cybersecurity services—combined with deep expertise in Enterprise Networking, Data Center Security, Cloud Security, and IT Life Cycle Management—ensures comprehensive protection for mission-critical systems.

Operating 24/7, 365 days a year, we safeguard operations for telecom providers, multi-branch banks, and government organizations. At S-squad Global, we deliver tailored cybersecurity and IT solutions that scale with your business—no matter the size or industry.`}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Red IT Infrastructure Nodes"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="We Empower Enterprises To Boost Operations With Modern IT Infrastructure And Reliable Managed Services."
        subtitle="By leveraging the services of a managed cloud service provider, companies can benefit from cloud management skills without the cost of having high-skilled staff. Our company mission is to deliver world-class IT products and solutions furthered by enduring support to ensure lower cost of ownership and a wide range of high-tech IT infrastructure solutions backed by consulting, deployment and implementation support. S-squad Global System Integration Services supports customers in their network and business evolution with a focus on these key transformation services: We have long standing strategic relationship with leading OEM's and Technology Leaders help us with best in class products and solutions which meets stringent quality standards."
        eyebrow="Transformation Services"
        icon="ph-hard-drives"
        cards={[
          { title: "System Integration", description: "Design, deploy and manage complex hardware and software systems ensuring interoperability." },
          { title: "Infrastructure Management", description: "Proactive monitoring, maintenance, and optimization of physical and virtual environments." },
          { title: "Cloud Services", description: "Secure migration and management of multi-cloud architectures to accelerate operational agility." },
          { title: "Managed Services", description: "Outsourced IT operations providing reliable 24/7 support and technical expertise." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
