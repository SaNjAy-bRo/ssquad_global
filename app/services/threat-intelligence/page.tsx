"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import ServiceFAQ from '@/app/components/services/shared/ServiceFAQ';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function ThreatIntelligencePage() {
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
      <InnerHeader title="Threat Intelligence And Analytics" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Elevating Cyber Defense Through Predictive Intelligence And Deep Analytics"
        description={`Threat Intelligence involves collecting, analyzing, and correlating data about necessary threats, attacker tactics, and vulnerabilities. Threat intelligence is the process of gathering, analyzing, and interpreting information on existing cyber threats. It helps organizations understand threat actors, their tactics, and potential attack vectors.
        
        By using this intelligence, businesses can proactively defend against cyberattacks, improve their security posture, and respond faster to incidents. It's like having a radar that detects danger before it hits, enabling smarter, more informed cybersecurity decisions.`}
        points={[
          "Identification of advanced attacker end points",
          "Plays role against attacker attacks",
          "Contextual indicators to employ software",
          "Strategic for physical threat actor vectors"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Predictive Intelligence Radar Visualization"
        imageAlignment="right"
      />

      <ServiceFeatureGrid 
        title="Why Threat Intelligence Matters"
        subtitle="It equips businesses with actionable information to anticipate threats, understand their intelligence, services, vulnerabilities, and improve defenses against new threats."
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Proactive Threat Prevention", description: "Cyber security threat intelligence provides early warning of cyber threats before an attack occurs or compromises." },
          { title: "Enhanced Detection Capabilities", description: "Integrating threat intelligence with security management tools helps improve correlation and indicators of compromise." },
          { title: "Strategic Risk Management", description: "Understanding the threat landscape helps plan lifecycle practice security investments based on actual risks." },
          { title: "Compliance Requirements", description: "Many regulatory environments mandate robust intelligence logic structures for comprehensive security programs." }
        ]}
      />

      <ServiceDarkGrid 
        title="Key Components Of Threat Intelligence"
        eyebrow="Intelligence Framework"
        icon="ph-crosshair"
        cards={[
          { title: "Strategic Intelligence", points: ["Geopolitical risk analysis", "Industry-specific API trends", "Long-term threat forecasts"] },
          { title: "Tactical Intelligence", points: ["Attacker TTPs (Tactics, Techniques, Procedures)", "Malware analysis", "Vulnerability insights"] },
          { title: "Operational Intelligence", points: ["Threat actor communications", "Attack campaign details", "Compromise indicators (IOCs)"] },
          { title: "Technical Intelligence", points: ["Malware signatures", "IP/Domain blacklists", "Behavioral patterns"] }
        ]}
      />

      <ServiceFeatureGrid 
        title="Selecting A Threat Intelligence Provider"
        subtitle="When evaluating threat intelligence providers, consider:"
        bgColor="slate"
        columns={2}
        cards={[
          { title: "Intelligence Quality", points: ["Relevance to your industry/region", "Accuracy and low false positives", "Actionable insights"] },
          { title: "Delivery Mechanisms", points: ["API integrations", "STIX/TAXII integrations", "Alert formats and timeliness"] },
          { title: "Industry Specialization", points: ["Threat landscapes specifics", "Regional threat coverage", "Compliance alignment"] },
          { title: "Service Features", points: ["Threat intelligence management platform", "Analyst support", "Custom reporting"] },
          { title: "Vendor Reputation", points: ["Track record of success", "Client references", "Independent evaluations"] }
        ]}
      />

      <ServiceCTA />
      

      <ServiceFAQ />

      <GlobalIndustriesSection />
    </main>
  );
}
