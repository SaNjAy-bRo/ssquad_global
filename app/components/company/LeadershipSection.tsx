import Image from 'next/image';
import Link from 'next/link';
import { managementData } from '@/app/data/management';

export default function LeadershipSection() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="text-center reveal mb-16">
          <p className="section-eyebrow">The Experts</p>
          <h2 className="section-title text-slate-900">Our Leadership Team</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
             Driven by experience, led by visionaries. Meet the leadership driving our global cybersecurity efforts.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {managementData.map((leader, idx) => (
            <Link href={`/management/${leader.id}`} key={idx} className="block group">
              <div className="reveal bg-ssg-dark/5 rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:bg-ssg-dark hover:border-ssg-red/30 h-full flex flex-col">
                 <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-slate-200">
                    <Image 
                       src={leader.image}
                       alt={leader.name}
                       fill
                       className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 object-top"
                       unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ssg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                 </div>
                 
                 <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-white transition-colors">{leader.name}</h3>
                 <p className="text-ssg-red font-semibold text-xs mt-1 uppercase tracking-wider mb-4">{leader.title}</p>
                 
                 <div className="mt-auto flex">
                    <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-ssg-red group-hover:text-white transition-all duration-300">
                       <i className="ph-bold ph-arrow-up-right text-lg"></i>
                    </div>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
