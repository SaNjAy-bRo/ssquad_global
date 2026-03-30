interface ServiceCTAProps {
  variant?: 'dark' | 'white';
}

export default function ServiceCTA({ variant = 'dark' }: ServiceCTAProps) {
  const isWhite = variant === 'white';
  
  return (
    <section className={`
      ${isWhite ? 'bg-white text-ssg-dark border-y border-slate-100' : 'bg-ssg-dark text-white border-y border-white/5'}
      py-14 lg:py-16 text-center relative overflow-hidden
    `}>
      {/* Background Decorative Elements */}
      {isWhite ? (
        <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/5 rounded-full blur-[80px] pointer-events-none"></div>
      ) : (
        <>
          <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-10 w-64 h-64 bg-ssg-cyber/10 rounded-full blur-[80px] pointer-events-none"></div>
        </>
      )}
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
        <h2 className={`
          ${isWhite ? 'text-ssg-dark' : 'text-white'}
          text-3xl md:text-4xl font-heading font-bold mb-4
        `}>
          Secure your Environment Today
        </h2>
        <p className={`
          ${isWhite ? 'text-slate-600' : 'text-slate-300'}
          mb-8 text-lg max-w-2xl mx-auto
        `}>
          Get a comprehensive security posture assessment and align your enterprise defense with industry best practices.
        </p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-ssg-red text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-ssg-red/30 hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
          Talk to an Expert <i className="ph ph-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
}
