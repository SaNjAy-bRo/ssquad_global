"use client";

import { useEffect } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';
import ContactCTASection from '@/app/components/sections/ContactCTASection';
import Image from 'next/image';

const insights = [
  {
    id: 'security-advisory',
    title: 'Security Advisory: Strengthen Your Cyber Defenses With Expert Guidance',
    excerpt: 'In today’s volatile cyber landscape, expert guidance helps organizations reduce risk and improve resilience through tailored defense strategies.',
    image: 'https://ssquad.com/wp-content/uploads/2025/05/securtity-advisory-570x600.jpg',
    category: 'Advisory',
    date: 'May 2025',
    href: 'https://ssquad.com/security-advisory-strengthen-your-cyber-defenses-with-expert-guidance/'
  },
  {
    id: 'nist-framework',
    title: 'How Can Organizations Use The NIST Cybersecurity Framework To Strengthen Their Security?',
    excerpt: 'Understand how the NIST framework provides a structured path to identify, protect, detect, respond, and recover from modern cyber threats.',
    image: 'https://ssquad.com/wp-content/uploads/2020/11/nist-570x600.jpg',
    category: 'Frameworks',
    date: 'Nov 2020',
    href: 'https://ssquad.com/how-can-organizations-use-the-nist-cybersecurity-framework-to-strengthen-their-security/'
  },
  {
    id: 'ransomware-smb',
    title: 'Ransomware For Small Business: Everything You Need To Know About',
    excerpt: 'Learn key ransomware risks and practical security controls small and mid-sized businesses should implement first to stay protected.',
    image: 'https://ssquad.com/wp-content/uploads/2020/11/ransom_banner-570x600.jpg',
    category: 'Guides',
    date: 'Nov 2020',
    href: 'https://ssquad.com/ransomware-for-small-business-everything-you-need-to-know-about/'
  }
];

export default function InsightsPage() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen">
      <InnerHeader 
        title="Insights & News" 
        subtitle="Thought leadership, security advisories, and the latest trends from the frontline of global cybersecurity."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' }
        ]}
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((item) => (
              <article key={item.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-premium reveal group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4 bg-ssg-red text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-xs font-medium mb-3">{item.date}</div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 leading-tight group-hover:text-ssg-red transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ssg-red font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Read full article <i className="ph ph-arrow-up-right"></i>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 text-center reveal">
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">Stay Ahead of the Threat Landscape</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              We regularly publish security research, vulnerability reports, and framework guides to help our community build safer digital environments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://ssquad.com/blog/" target="_blank" rel="noopener noreferrer" className="btn-secondary !text-slate-900 !border-slate-300">
                Visit Official Blog <i className="ph ph-arrow-up-right"></i>
              </a>
              <a href="/contact" className="btn-primary">
                Subscribe to Advisories
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTASection />
    </main>
  );
}
