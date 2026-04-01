import HackingText from '@/app/components/ui/HackingText';

interface ServiceCTAProps {
  variant?: 'dark' | 'white';
}

export default function ServiceCTA({ variant = 'dark' }: ServiceCTAProps) {
  return (
    <section className="py-12 lg:py-16 text-center relative overflow-hidden border-y border-white/5">
      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .btn-flow {
          background-size: 200% auto;
          animation: gradientFlow 3s linear infinite;
        }
      `}</style>

      {/* Background Image and Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/banner-2.jpg)' }}
      ></div>
      <div className="absolute inset-0 z-0 bg-ssg-dark/85 mix-blend-multiply"></div>
      
      {/* Accent Glows */}
      <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 drop-shadow-xl">
          Secure Your Environment Today
        </h2>
        
        <div className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mt-6 mb-10 drop-shadow-lg tracking-wide">
          we secure your <HackingText words={['FINANCE', 'HEALTHCARE', 'GOVERNMENT', 'TECHNOLOGY', 'RETAIL', 'MANUFACTURING']} duration={2000} />
        </div>

        <p className="text-slate-200 mb-10 text-lg md:text-xl font-medium max-w-2xl mx-auto drop-shadow-md">
          Get a comprehensive security posture assessment and align your enterprise defense with industry best practices.
        </p>
        
        <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-ssg-red via-rose-500 to-ssg-red font-bold text-lg py-4 px-10 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] text-white hover:shadow-[0_0_35px_rgba(220,38,38,0.8)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 btn-flow">
          Talk to an Expert <i className="ph ph-arrow-up-right font-bold"></i>
        </a>
      </div>
    </section>
  );
}
