"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function TPMPage() {
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
      <InnerHeader title="Third-Party Maintenance (TPM) Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Maximize Asset Lifespan And Reduce IT Costs With Expert Maintenance Solutions"
        description={`To reduce hardware IT footprint, managing and maintaining your hardware infrastructure efficiently is crucial to business continuity and success. Ssquad’s Third Party Maintenance (TPM) services offer a reliable, flexible, and cost-effective alternative to OEM support, helping you extend the life of your IT assets while optimizing maintenance budgets. 

OEM contracts can be expensive, restrictive, and often provide limited flexibility. TPM services empower organizations to maintain critical IT equipment beyond the standard warranty or EOL support period, delivering customized service agreements that align with your specific operational needs and budget.`}
        points={[
          "Comprehensive Hardware Support",
          "Flexible Service Agreements",
          "Proactive Maintenance & Monitoring",
          "Rapid Response & Resolution",
          "Cost Efficiency",
          "Vendor-Agnostic Support"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Red IT Server Racks TPM"
        imageAlignment="right"
      />

      <ServiceFeatureGrid 
        title="What Ssquad's TPM Services Include"
        bgColor="slate"
        columns={3}
        cards={[
          { title: "Comprehensive Hardware Support", description: "Coverage for servers, storage systems, networking devices, and other critical IT infrastructure from multiple vendors and manufacturers." },
          { title: "Flexible Service Agreements", description: "Tailored contracts that fit your unique operational requirements, whether you need on-site repairs, remote support, or a hybrid approach." },
          { title: "Proactive Maintenance & Monitoring", description: "Regular health checks, firmware updates, and preventive maintenance to avoid unexpected failures and optimize performance." },
          { title: "Rapid Response & Resolution", description: "Access to a dedicated support desk and field service engineers for fast hardware replacement and issue resolution processes." },
          { title: "Cost Efficiency", description: "Significant cost savings compared to OEM support contracts, without compromising on repair quality or response times." },
          { title: "Vendor-Agnostic Support", description: "Single point of contact for multi-vendor environments, simplifying your IT maintenance management." }
        ]}
      />

      <ServiceDarkGrid 
        title="Benefits Of Partnering With Ssquad For TPM"
        eyebrow="Why Choose Ssquad"
        icon="ph-wrench"
        cards={[
          { title: "Extended Asset Life", description: "Keep your existing hardware running smoothly and efficiently for longer, maximizing your technology investments." },
          { title: "Reduced Total Cost Of Ownership", description: "Lower maintenance expenses and avoid expensive hardware replacements or forced infrastructure upgrades." },
          { title: "Improved IT Uptime", description: "Minimize disruptions with timely and effective maintenance and repair services." },
          { title: "Scalable Solutions", description: "Support your growing infrastructure with flexible contracts that evolve with your business needs." },
          { title: "Expertise & Reliability", description: "Benefit from our experienced team of certified professionals who understand diverse hardware ecosystems." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
