export default function ServiceCTA() {
  return (
    <section className="bg-ssg-dark text-white py-14 lg:py-16 text-center border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-10 w-64 h-64 bg-ssg-red/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-ssg-cyber/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Secure your environment today</h2>
        <p className="mb-8 text-slate-300 text-lg max-w-2xl mx-auto">Get a comprehensive security posture assessment and align your enterprise defense with industry best practices.</p>
        <a href="#contact" className="inline-flex items-center gap-2 bg-ssg-red text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-ssg-red/30 hover:bg-red-600 hover:-translate-y-1 transition-all duration-300">
          Talk to an Expert <i className="ph ph-arrow-up-right"></i>
        </a>
      </div>
    </section>
  );
}
