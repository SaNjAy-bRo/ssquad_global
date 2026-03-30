"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const serviceData: Record<string, { title: string; desc: string; href: string }[]> = {
  cyber: [
    { title: 'Application Security', desc: 'Comprehensive protection for modern software and digital applications.', href: '/services/application-security' },
    { title: 'AI-Powered Cybersecurity Solutions', desc: 'AI-assisted detection and response against fast-moving cyber threats.', href: '#' },
    { title: 'Threat Intelligence and Analytics', desc: 'Intelligence-led monitoring with risk-prioritized defensive actions.', href: '#' },
    { title: 'Penetration Testing Services', desc: 'Adversarial validation to uncover exploitable weaknesses early.', href: '#' },
    { title: 'Identity and Access Management (IAM)', desc: 'Identity-first access controls and governance for enterprise systems.', href: '#' },
    { title: 'OT Security Services', desc: 'Tailored security controls for industrial and operational technology.', href: '#' },
  ],
  infra: [
    { title: 'End-to-End IT Infrastructure Management', desc: 'Modernize and operate resilient enterprise infrastructure at scale.', href: '#' },
    { title: 'Third-Party Maintenance (TPM) Services', desc: 'Extend asset life and optimize IT cost with expert support.', href: '#' },
    { title: 'Auxiliary Services', desc: 'Specialized technology services aligned with business priorities.', href: '#' },
    { title: 'End-User Computing', desc: 'Secure and flexible end-user environments for enterprise teams.', href: '#' },
    { title: 'IoT Services', desc: 'Connect data and devices to improve operations and reduce risk.', href: '#' },
    { title: 'Network as a Platform', desc: 'Stabilize and modernize data center and enterprise networks.', href: '#' },
  ],
  cloud: [
    { title: 'Cloud Data Migration and Modernization', desc: 'Seamless cloud migration with modernized architecture and controls.', href: '#' },
    { title: 'Cloud Consulting Services', desc: 'Strategic guidance for scalable, high-confidence cloud decisions.', href: '#' },
    { title: 'Cloud Native Solutions', desc: 'Cloud-native engineering for agility, scalability, and innovation.', href: '#' },
    { title: 'Cloud Assurance Services', desc: 'Secure, compliant, and resilient cloud operating environments.', href: '#' },
    { title: 'Cloud Security', desc: 'Layered cloud protection with proactive threat defense.', href: '#' },
    { title: 'Cloud Operations and Intelligent Automation', desc: 'Automated cloud operations to improve reliability and speed.', href: '#' },
  ],
  app: [
    { title: 'Custom Application Development', desc: 'Tailor-built applications aligned to unique business workflows.', href: '#' },
    { title: 'Legacy Application Modernization', desc: 'Re-engineer legacy systems for modern platforms and outcomes.', href: '#' },
    { title: 'Application Integration Services', desc: 'Connect systems and data sources for unified digital operations.', href: '#' },
    { title: 'API Development and Integration', desc: 'Build secure APIs that extend platform capabilities.', href: '#' },
    { title: 'Workflow Automation and Optimization', desc: 'Automate repetitive work to improve speed and efficiency.', href: '#' },
    { title: 'Security and Compliance Customization', desc: 'Align applications with security and regulatory controls.', href: '#' },
  ],
};

const serviceLabels: Record<string, string> = {
  cyber: 'Cyber Security Services',
  infra: 'Infrastructure Services',
  cloud: 'Cloud Services',
  app: 'Application Services',
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('cyber');
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  const headerRef = useRef<HTMLElement>(null);
  const megaNavRef = useRef<HTMLDivElement>(null);
  const headerShellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMegaOpen(false);
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMegaOpen &&
        megaNavRef.current &&
        !megaNavRef.current.contains(e.target as Node) &&
        headerShellRef.current &&
        !headerShellRef.current.contains(e.target as Node)
      ) {
        setIsMegaOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMegaOpen]);

  const openMega = (key: string) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    if (activeService !== key) {
      setIsSwitching(true);
      setActiveService(key);
      setTimeout(() => setIsSwitching(false), 110);
    }
    setIsMegaOpen(true);
  };

  const closeMega = () => {
    setIsMegaOpen(false);
  };

  const handleMouseEnterShell = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleMouseLeaveShell = () => {
    closeTimerRef.current = setTimeout(closeMega, 180);
  };

  const currentItems = serviceData[activeService] || [];
  const middle = Math.ceil(currentItems.length / 2);
  const leftCol = currentItems.slice(0, middle);
  const rightCol = currentItems.slice(middle);

  return (
    <header 
      id="site-header" 
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : ''}`}
    >
      <div 
        id="scroll-progress" 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div 
          ref={headerShellRef}
          className="header-shell mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
          onMouseEnter={handleMouseEnterShell}
          onMouseLeave={handleMouseLeaveShell}
        >
          <div className="flex items-center justify-between px-5 py-4 lg:px-7">
            <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="SSquad Global Home">
              <Image src="/images/logon.png" alt="SSquad Global logo" width={144} height={36} className="h-9 w-auto" priority />
            </Link>

            <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 text-sm text-slate-100/90 font-medium">
              <Link className="nav-link" href="/company" onMouseEnter={closeMega}>Company</Link>
              {(['cyber', 'infra', 'cloud', 'app'] as const).map((key) => (
                <button 
                  key={key}
                  className={`nav-link nav-service-trigger ${activeService === key && isMegaOpen ? 'nav-service-active' : ''}`} 
                  type="button" 
                  aria-expanded={activeService === key && isMegaOpen}
                  onMouseEnter={() => openMega(key)}
                  onClick={() => openMega(key)}
                  onFocus={() => openMega(key)}
                >
                  {serviceLabels[key].replace(' Services', '')}
                </button>
              ))}
              <a className="nav-link" href="https://www.harpydefence.com/" target="_blank" rel="noopener noreferrer" onMouseEnter={closeMega}>Harpy Defence</a>
              <Link className="nav-link" href="#contact" onMouseEnter={closeMega}>Contact</Link>
            </nav>

            <div className="hidden lg:block">
              <Link href="#contact" className="btn-outline-violet">
                Talk to an Expert <i className="ph ph-arrow-up-right"></i>
              </Link>
            </div>

            <button 
              id="mobile-menu-btn" 
              className="lg:hidden text-white ml-2" 
              aria-label="Open menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="ph ph-list text-3xl"></i>
            </button>
          </div>

          <div
            id="mega-menu"
            ref={megaNavRef}
            className={`mega-menu hidden lg:block ${isMegaOpen ? 'open' : ''}`}
            role="region"
            aria-label="Services navigation"
            aria-hidden={!isMegaOpen}
          >
            <div className="mega-menu-inner">
              <div className="mega-content-wrap">
                <div id="mega-title" className="mega-title">{serviceLabels[activeService]}</div>
                <div className={`mega-content-grid ${isSwitching ? 'is-switching' : ''}`} id="mega-content">
                  <div className="mega-col">
                    {leftCol.map((item, idx) => (
                      <article className="mega-item" key={idx}>
                        <Link className="mega-link" href={item.href}>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span className="mega-link-cta">View service <i className="ph ph-arrow-up-right"></i></span>
                        </Link>
                      </article>
                    ))}
                  </div>
                  <div className="mega-col">
                    {rightCol.map((item, idx) => (
                      <article className="mega-item" key={idx}>
                        <Link className="mega-link" href={item.href}>
                          <h3>{item.title}</h3>
                          <p>{item.desc}</p>
                          <span className="mega-link-cta">View service <i className="ph ph-arrow-up-right"></i></span>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="mobile-menu" className={`lg:hidden border-t border-white/10 px-5 pb-5 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="pt-4 flex flex-col gap-3 text-sm text-slate-100/90">
              <Link href="/company" className="mobile-link">Company</Link>
              <Link href="#solutions" className="mobile-link">Cyber Security</Link>
              <Link href="#" className="mobile-link">Infrastructure</Link>
              <Link href="#" className="mobile-link">Cloud</Link>
              <Link href="#" className="mobile-link">Application</Link>
              <a href="https://www.harpydefence.com/" target="_blank" rel="noopener noreferrer" className="mobile-link">Harpy Defence</a>
              <Link href="#contact" className="mobile-link">Contact</Link>
              <Link href="#contact" className="btn-outline-violet mt-2 inline-flex justify-center">
                Talk to an Expert <i className="ph ph-arrow-up-right"></i>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
