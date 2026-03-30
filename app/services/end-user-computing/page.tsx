"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function EndUserComputingPage() {
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
      <InnerHeader title="End-User Computing" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="What Is End User Computing"
        description={`End User Computing (EUC) refers to systems, tools, and approaches that allow non-programmers or non-IT professionals (end users) to create, manage, or customize applications or data without direct involvement from the IT department. 

EUC empowers employees across departments—such as finance, operations, marketing, and HR—to build simple applications, generate reports, or automate tasks using platforms like spreadsheets, low-code/no-code tools, and business intelligence software. This accelerates decision-making and innovation by enabling faster responses to business needs without waiting for IT development cycles.`}
        points={[
          "Desktop Deployment and Management",
          "Identity Management",
          "Systems Management"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Red Shield Over Device"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="We Provide Below List Of End Use Computing"
        eyebrow="User-Centric Architecture"
        icon="ph-devices"
        cards={[
          { title: "Desktop Deployment and Management", description: "Involves the centralized provisioning, configuration, maintenance, and monitoring of desktop environments across an organization. This includes setting up new systems, managing operating system images, installing necessary software, applying security patches, and ensuring consistent performance and compliance. Efficient desktop management streamlines IT operations, enhances user productivity, and reduces downtime by enabling quick troubleshooting, remote support, and automated updates across multiple devices." },
          { title: "Identity Management", description: "Refers to the policies, processes, and technologies used to manage and secure access to digital resources within an organization. It ensures that the right individuals have appropriate access to systems, applications, and data by handling user authentication, authorization, and lifecycle management. This includes creating, updating, and deleting user identities, managing roles and permissions, and enforcing security protocols such as multi-factor authentication (MFA) and single sign-on (SSO). Effective identity management enhances security, simplifies access control, and supports regulatory compliance." },
          { title: "Systems Management", description: "Encompasses the administration and oversight of an organization's IT systems to ensure they operate efficiently, securely, and reliably. It involves monitoring and maintaining servers, networks, applications, and other infrastructure components, including tasks like performance tuning, patch management, backup and recovery, and incident response. By implementing robust systems management practices, organizations can reduce downtime, quickly identify and resolve issues, and ensure their IT environment supports business continuity and scalability." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
