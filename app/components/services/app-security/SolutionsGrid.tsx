export default function SolutionsGrid() {
  const solutions = [
    {
      title: "Application Security Testing",
      icon: "ph-shield-check",
      features: [
        "Static Application Security Testing (SAST)",
        "Dynamic Application Security Testing (DAST)",
        "Interactive Application Security Testing (IAST)",
        "Software Composition Analysis (SCA)"
      ]
    },
    {
      title: "Runtime Protection",
      icon: "ph-activity",
      features: [
        "Web Application Firewall (WAF)",
        "Runtime Application Self-Protection (RASP)",
        "API Security gateways",
        "Bot management"
      ]
    },
    {
      title: "Cloud Application Security",
      icon: "ph-cloud-check",
      features: [
        "CSPM for cloud-native applications",
        "Microservices security monitoring",
        "Container security scanning",
        "CI/CD pipeline protection"
      ]
    },
    {
      title: "Security Management",
      icon: "ph-wrench",
      features: [
        "Vulnerability prioritization",
        "Remediation tracking",
        "Developer training",
        "Compliance reporting"
      ]
    }
  ];

  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="arc-heading text-center max-w-3xl mx-auto reveal">
          <span className="arc-icon text-ssg-red bg-ssg-red/10 border-ssg-red/20"><i className="ph ph-shield-plus"></i></span>
          <p className="section-eyebrow">Enterprise Defences</p>
          <h2 className="section-title text-slate-900">Comprehensive Application Security Solutions</h2>
          <p className="mt-4 text-slate-600">
            A full spectrum of security layers covering your applications from source code repository to production deployment.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((sol, idx) => (
            <div key={idx} className="reveal bg-white rounded-3xl p-8 border border-slate-200 shadow-premium transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-ssg-cyber/30 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ssg-red/10 rounded-xl flex items-center justify-center text-ssg-red text-2xl transition-colors group-hover:bg-ssg-red group-hover:text-white">
                  <i className={`ph ${sol.icon}`}></i>
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-800">{sol.title}</h3>
              </div>
              
              <ul className="space-y-3 pl-1">
                {sol.features.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-3 text-slate-600 items-start">
                    <i className="ph-fill ph-check-circle text-ssg-cyber mt-1 transition-transform group-hover:scale-110"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
