export default function IndustriesSection() {
  const industries = [
    { name: "TELCO", icon: "ph-cell-signal-full" },
    { name: "TV BROADCASTERS", icon: "ph-television" },
    { name: "BANKS", icon: "ph-bank" },
    { name: "AIRLINES", icon: "ph-airplane-tilt" }
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-y border-slate-100 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8 text-center reveal">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">We Work With</h2>
        <p className="mt-2 text-slate-500 text-sm">We provide services to the following industries:</p>
      </div>

      <div className="mt-10 lg:mt-14 max-w-4xl mx-auto pb-4 relative">
        {/* Fading Edges using pure CSS mask */}
        <div className="cert-carousel [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] overflow-hidden">
          <div className="cert-track" style={{ gap: '5rem' }}>
            {industries.map((ind, idx) => (
              <div key={idx} className="cert-slide flex items-center justify-center gap-3 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 w-auto">
                <i className={`ph-fill ${ind.icon} text-4xl text-ssg-red`}></i>
                <span className="font-heading font-bold text-slate-800 tracking-wider text-sm md:text-base whitespace-nowrap">{ind.name}</span>
              </div>
            ))}
            {/* Duplicated for seamless marquee */}
            {industries.map((ind, idx) => (
              <div key={`dup-${idx}`} className="cert-slide flex items-center justify-center gap-3 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 w-auto" aria-hidden="true">
                <i className={`ph-fill ${ind.icon} text-4xl text-ssg-red`}></i>
                <span className="font-heading font-bold text-slate-800 tracking-wider text-sm md:text-base whitespace-nowrap">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
