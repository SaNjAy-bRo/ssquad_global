"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AuxiliaryServicesPage() {
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
      <InnerHeader title="Auxiliary Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="Auxiliary Services Refer To Supportive Or Secondary Services That Complement An Organization's Core Offerings."
        description={`As an accomplished IT Solutions and Technology Provider, S-squad Global through its years of understanding of the industry needs has identified a range of IT Enabled Services which are classified under Auxiliary Services. These Auxiliary Services are provided by some of our subsidiaries and affiliates. We provide below list Auxiliary Services at its best.`}
        points={[
          "Contact Center Services",
          "On-Site Support Services",
          "Break-fix Services",
          "Remote Technical Support Services",
          "Software Development"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Red Hexagon Tech Nodes"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="We Provide Below List Of IT Infrastructure Services"
        eyebrow="Specialized Operations"
        icon="ph-headset"
        cards={[
          { title: "Contact Center Services", description: "S-squad Global Contact Centre Solutions (CCS) understands the importance of delivering cost-effective, world-class technical supports in an easy and efficient way for our customers to maximize their technology investments. We offer a full range of technical support, from tier-1 handling of simple and common issues to multi-tier support applications, employing seasoned technical experts to address the complex issues. From end-of-life support to complex technical support, our customers are realizing increased ROI and customer experience with improved in customer satisfaction (CSAT) scores. Scalable 24x7 technical support that adapts to demand fluctuations without impacting the bottom line. Consistent customer management across different product lines and technologies." },
          { title: "On-Site Support Services", description: "S-squad Global On-site Support Services (OSS) provides on-site installation & maintenance of all technology & Electronic Products in Consumer as well as Business Environment (B2B) with end to end call management with on demand service Delivery with various response levels to choose from for clients. If you ever face any hardware failure or network issue, contact us for our Engineer for onsite Support who would be available at your location eliminating long waiting hours and help you close your trouble faster. The Onsite Team of engineers has been carefully selected to provide best support services." }
        ]}
      />

      <ServiceCTA />
      
      <GlobalIndustriesSection />
    </main>
  );
}
