"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function NaaPPage() {
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
      <InnerHeader title="Network As A Platform" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="What Is Network As A Platform (NaaP)"
        description={`Network as a Platform (NaaP) is an emerging model in enterprise and service provider environments where the network is no longer seen as just a passive transport layer but as an intelligent, programmable, and service-aware foundation. This paradigm shift transforms traditional network infrastructure into a strategic enabler that delivers not just connectivity, but also business agility, automation, and innovation.

At its core, NaaP leverages technologies such as Software-Defined Networking (SDN), Network Function Virtualization (NFV), APIs, and AI/ML to expose the network as a programmable platform. Instead of manually managing devices and configurations, users and applications can interface with the network via APIs to dynamically request services, optimize performance, or enforce security policies. This results in faster service deployment, improved user experience, and reduced operational overhead.`}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Secure Red Network Nodes"
        imageAlignment="right"
      />

      <section className="dark-phase arc-section py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="arc-heading reveal">
            <span className="arc-icon"><i className="ph ph-graph"></i></span>
            <p className="section-eyebrow">The Future Of Networking</p>
            <h2 className="section-title text-white">NaaP: The Future Of Agile, Smart, And Monetizable Networks</h2>
            
            <div className="mt-8 space-y-6 text-slate-300 text-lg leading-relaxed text-left">
              <p>
                Another key feature of NaaP is automation and intelligence. Using telemetry data, AI, and policy-driven orchestration, the network can adapt automatically to changing conditions—re-routing traffic during outages, mitigating threats, or allocating bandwidth based on usage patterns. This reduces the need for manual intervention and enhances operational efficiency, reliability, and security.
              </p>
              <p>
                For service providers and telecom operators, NaaP unlocks new revenue streams and service models. By exposing network capabilities to third-party developers and enterprises through open APIs, providers can offer network-based services such as location intelligence, quality-of-service guarantees, or edge computing as monetizable products. This moves them beyond commoditized connectivity and into value-added service ecosystems.
              </p>
              <p className="font-semibold text-white pt-4 border-t border-white/10">
                In conclusion, Network as a Platform reimagines the role of the network in digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
