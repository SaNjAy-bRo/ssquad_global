"use client";

import { useEffect } from 'react';
import AppServiceHeader from '@/app/components/inner/AppServiceHeader';
import ServiceOverviewBlock from '@/app/components/services/shared/ServiceOverviewBlock';
import ServiceFeatureGrid from '@/app/components/services/shared/ServiceFeatureGrid';
import ServiceDarkGrid from '@/app/components/services/shared/ServiceDarkGrid';
import ServiceCTA from '@/app/components/services/shared/ServiceCTA';
import ServiceFAQ from '@/app/components/services/shared/ServiceFAQ';
import GlobalIndustriesSection from '@/app/components/services/shared/GlobalIndustriesSection';

export default function AiCybersecurityPage() {
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
      <AppServiceHeader title="AI Powered Cybersecurity Solutions" breadcrumbs={[]} />

      <ServiceOverviewBlock 
        title="AI Powered Cybersecurity Solutions For Real-Time Defense"
        description={`AI-Powered Cybersecurity Solutions are essential in today's rapidly evolving threat landscape. Traditional approaches can't keep up as attacks grow more sophisticated and frequent. Organizations now require AI-driven defense strategies that offer real-time threat detection, automated responses, and predictive analytics for proactive protection.
        
        At Ssquad, we harness the power of Artificial Intelligence and Machine Learning to revolutionize how security is managed — transforming reactive operations into proactive, intelligent, and scalable defenses.`}
        points={[
          "AI-Augmented SOC",
          "Threat Intelligence Automation",
          "User & Entity Behavior Analytics (UEBA)",
          "AI-Powered Endpoint Protection",
          "Advanced Phishing Detection",
          "Security Orchestration, Automation & Response (SOAR)"
        ]}
        imageUrl="/images/cyber security/AI Powered Cybersecurity Solutions for Real-Time Defense.jpg"
        imageAlt="AI Cybersecurity Node Network"
        imageAlignment="right"
      />

      <ServiceDarkGrid 
        title="Why AI In Cybersecurity"
        subtitle="Defend faster and smarter — that's the AI promise. Elevate your cybersecurity posture beyond human limits with autonomous detection and rapid response capabilities."
        eyebrow="The AI Advantage"
        icon="ph-brain"
        cards={[
          { title: "Real-Time Threat Detection", description: "Analyze vast volumes of data across endpoints, networks, and cloud environments to identify anomalies and threats instantly." },
          { title: "Automated Incident Response", description: "Enable faster containments and remediate threats with AI-driven playbooks that take action autonomously minimizing down-time and impact." },
          { title: "Behavioral Analytics", description: "Go beyond signature-based detection by identifying unusual user and entity behavior — catching insider threats, zero-days, and advanced persistent threats." },
          { title: "Threat Prediction & Prevention", description: "Use predictive models to anticipate potential breaches before they happen, allowing teams to take proactive steps to prevent compromises." }
        ]}
      />

      <ServiceFeatureGrid 
        title="Our AI-Driven Cybersecurity Offerings"
        bgColor="white"
        columns={3}
        cards={[
          { title: "AI-Augmented SOC", description: "Empower your Security Operations Center with intelligent triage, alert prioritization, and contextual enrichment — reducing noise and boosting analyst productivity." },
          { title: "Threat Intelligence Automation", description: "Leverage AI to aggregate, correlate, and analyze global threat intelligence feeds, identifying Indicators of Compromise (IOCs) with precision." },
          { title: "User & Entity Behavior Analytics (UEBA)", description: "Detect abnormal behavior patterns and potential insider threats using machine learning models trained on your organization's activity baseline." },
          { title: "AI-Powered Endpoint Protection", description: "Protect endpoints with continuous active learning algorithms that detect malware, ransomware, and fileless attacks — even if those have never been seen before." },
          { title: "Advanced Phishing Detection", description: "AI models analyze emails, links, and attachments in real-time to spot spoofing, BEC, and social engineering attempts before they reach users." },
          { title: "Security Orchestration, Automation, And Response (SOAR)", description: "Automate repetitive security tasks and orchestrate complex workflows using AI-driven decision engines." },
        ]}
      />

      <ServiceCTA />
      

      <ServiceFAQ />

      <GlobalIndustriesSection />
    </main>
  );
}
