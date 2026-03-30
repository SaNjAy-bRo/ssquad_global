"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function IotServicesPage() {
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
      <InnerHeader title="IoT Services" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="What Is IOT Services"
        description={`IoT services (Internet of Things services) refer to the set of technologies, platforms, and support that enable the connection, management, and use of smart devices—things like sensors, appliances, vehicles, wearables, and machines—over the internet.

These services play a critical role in collecting and analyzing real-time data from connected devices, allowing businesses to gain actionable insights, improve operational efficiency, and enable automation. For example, in manufacturing, IoT devices can monitor equipment health to predict failures before they occur, while in smart cities, IoT solutions can manage traffic flow, energy usage, and public safety systems.`}
        points={[
          "Power Management",
          "Smart City",
          "Smart Waste Management"
        ]}
        imageUrl="https://placehold.co/1200x800/e2e8f0/a0aec0?text=Service+Visual"
        imageAlt="Red Hexagon IoT Nodes"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="We Provide Below List Of IOT Services"
        eyebrow="Connected Ecosystem"
        icon="ph-wifi-high"
        cards={[
          { title: "IoT Services for Power Management", description: "Focus on optimizing the generation, distribution, and consumption of electrical power through smart, connected devices. These services enable real-time monitoring and control of power systems—including energy meters, transformers, and industrial machinery—allowing organizations to track usage patterns, detect inefficiencies, and automate energy-saving measures. By leveraging IoT-powered analytics, businesses can reduce energy waste, predict maintenance needs, and lower operational costs. In smart buildings, IoT power management systems can automatically adjust lighting and HVAC based on occupancy or load demand." },
          { title: "Smart Waste Management", description: "Uses IoT technologies and data analytics to optimize the collection, transportation, and disposal of waste. Through connected sensors installed in bins and dumpsters, real-time data is gathered on fill levels, enabling waste collection routes to be dynamically adjusted based on actual demand rather than fixed schedules. This reduces fuel consumption, lowers operational costs, and minimizes environmental impact. Additionally, smart waste systems can track recycling compliance and provide insights into waste generation patterns, helping municipalities and businesses improve efficiency and promote sustainable practices." }
        ]}
      />

      <GlobalIndustriesSection />

      <ServiceCTA variant="white" />
    </main>
  );
}
