import Image from 'next/image';

export default function OverviewSection() {
  const points = [
    "Application security assessment",
    "Cloud systems security in front and PaaS environments",
    "Driving risk reduction in any build, up and delivery",
    "Proactive testing of web application applications",
    "Application security for safeguarding near delivery",
    "Meeting regulatory mandates for GDPR, HIPAA, and PCI DSS",
  ];

  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal order-2 lg:order-1">
            <h2 className="section-title text-slate-900">Comprehensive Protection For Modern Software</h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              In today's digital-first business environment, application security is a non-negotiable business 
              critical requirement. We help organizations protect software from evolving threats. As 
              organizations accelerate digital transformation, application security solutions provide 
              continuous protection throughout the software development lifecycle (SDLC) and 
              production environments. Are you operating in a secure coding environment?
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex gap-3 text-slate-700">
                  <i className="ph-fill ph-check-circle text-ssg-red mt-1 text-xl shrink-0"></i>
                  <span className="leading-snug">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-darkGlow border-4 border-white aspect-[4/3] w-full group">
              <Image 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000"
                alt="Cybersecurity red digital lock visualization"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale opacity-70"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
