"use client";

import { useEffect, useState } from 'react';
import InnerHeader from '@/app/components/inner/InnerHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', number: '', subject: '', message: '', terms: false
  });

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

  const locations = [
    { country: "Singapore", code: "sg", company: "Ssquad Pte Ltd (HQ)", address: "1 Ubi View, #04-05 Focus One, Singapore 408555." },
    { country: "Australia", code: "au", company: "Ssquad Pty Ltd", address: "Office 4, 10 Welch Street, Southport QLD 4215, Australia" },
    { country: "Hong Kong", code: "hk", company: "Ssquad Limited", address: "No 5, 17/F Strand 50, 50 Bonham Strand, Sheung Wan, Hong Kong." },
    { country: "India", code: "in", company: "Ssquad Information Systems Pvt Ltd", address: "Silver Soft Tech Park, Whitefield Main Road, 1st Floor, EPIP 1st Phase, Bangalore-560066" },
    { country: "Indonesia", code: "id", company: "PT Ssquad Information Systems", address: "AXA Tower Lt. 36, Unit 5-6, Kuningan City, Jl. Prof Dr. Satrio Kav 18, Kuningan, Jakarta Selatan, 12940" },
    { country: "Malaysia", code: "my", company: "Ssquad Sdn Bhd", address: "25-7, Level 25-03 and 33-BC-5, Q Sentral, Jalan Stesen Sentral 2, Kuala Lumpur Sentral, 50470" },
    { country: "Taiwan", code: "tw", company: "Ssquad Limited", address: "11F, No. 235, Section 4, Zhong Xiao East Road, Da An District, Taipei City 106, Taiwan (ROC)" },
    { country: "Thailand", code: "th", company: "Ssquad Limited", address: "No.30 Sukhumvit soi 61 Klongton Nua, Wattana, Bangkok 10110" },
    { country: "UK", code: "gb", company: "Ssquad Limited", address: "128 City Road, London, EC1V 2NX, UK" },
    { country: "USA", code: "us", company: "Ssquad Inc", address: "98 Cuttermill Road, Ste 466, Great Neck NY 11021" },
  ];

  return (
    <main className="bg-white">
      <InnerHeader title="Our Locations" breadcrumbs={[]} />

      {/* Locations Section */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-6">
            {locations.map((loc, idx) => (
              <div key={idx} className="reveal bg-white rounded-xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group flex flex-col justify-start">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-8 shrink-0 flex items-center justify-center">
                    <img 
                      src={`https://flagcdn.com/w40/${loc.code}.png`}
                      srcSet={`https://flagcdn.com/w80/${loc.code}.png 2x`}
                      width="40" 
                      alt={`${loc.country} Flag`}
                      className="w-full h-auto rounded-[2px] shadow-sm drop-shadow-sm" 
                    />
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg tracking-tight group-hover:text-ssg-red transition-colors">{loc.country}</h3>
                </div>
                <h4 className="font-semibold text-slate-800 text-[15px] mb-2">{loc.company}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[90%]">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-32 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50/50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 reveal max-w-2xl mx-auto">
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
              Drop Us A Message
            </h2>
            <p className="text-lg text-slate-600">
              Have a project in mind, need expert advice, or just want to say hello? 
              <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-ssg-red to-red-400 font-medium"> We're here and ready to help.</span>
            </p>
          </div>
          
          <div className="reveal bg-white p-8 md:p-12 border border-slate-100 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-slate-200 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <form className="space-y-7 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-7">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50/50 text-slate-900 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="w-full bg-slate-50/50 text-slate-900 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-7">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50/50 text-slate-900 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-sm" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full bg-slate-50/50 text-slate-900 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-slate-700 ml-1">Your Message</label>
                <textarea rows={6} placeholder="Tell us about your needs..." className="w-full bg-slate-50/50 text-slate-900 border border-slate-200 rounded-xl px-5 py-4 focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-ssg-red outline-none transition-all placeholder:text-slate-400 font-medium text-sm resize-none"></textarea>
              </div>
              <div className="flex items-center gap-3 px-1 pt-2">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-slate-300 text-ssg-red shadow-sm focus:ring-ssg-red focus:ring-offset-1 transition-all" />
                <label htmlFor="terms" className="text-slate-600 text-sm">
                  I agree to the <a href="#" className="text-ssg-red hover:text-red-700 font-semibold transition-colors">Terms</a> and <a href="#" className="text-ssg-red hover:text-red-700 font-semibold transition-colors">Privacy policy</a>.
                </label>
              </div>
              <div className="text-center pt-8 border-t border-slate-100">
                <button type="submit" className="bg-ssg-red hover:bg-red-700 text-white font-bold rounded-xl px-12 py-4 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all hover:-translate-y-1 text-[15px] tracking-wide w-full md:w-auto min-w-[200px]">
                  Send Message <i className="ph-bold ph-paper-plane-tilt ml-2 relative top-0.5"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
