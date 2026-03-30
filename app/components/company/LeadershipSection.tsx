import Image from 'next/image';
import Link from 'next/link';

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Arun Gopakumar",
      title: "Chief Executive Officer",
      link: "#",
      // Since specific headshots are pending, using abstract UI avatars matching the brand colors
      image: "https://ui-avatars.com/api/?name=Arun+Gopakumar&background=0d1f2d&color=ffffff&size=250&font-size=0.4"
    },
    {
      name: "Kiran Gopakumar",
      title: "Chief Operating Officer",
      link: "#",
      image: "https://ui-avatars.com/api/?name=Kiran+Gopakumar&background=0d1f2d&color=ffffff&size=250&font-size=0.4"
    },
    {
      name: "Ravi Prakasha",
      title: "Director - Technical Services",
      link: "#",
      image: "https://ui-avatars.com/api/?name=Ravi+Prakasha&background=0d1f2d&color=ffffff&size=250&font-size=0.4"
    },
    {
      name: "Mohamed Ali",
      title: "Head Of Service Delivery",
      link: "#",
      image: "https://ui-avatars.com/api/?name=Mohamed+Ali&background=0d1f2d&color=ffffff&size=250&font-size=0.4"
    },
    {
      name: "Khalid Azam Ahmad",
      title: "CyberSecurity Advisor",
      link: "#",
      image: "https://ui-avatars.com/api/?name=Khalid+Azam+Ahmad&background=0d1f2d&color=ffffff&size=250&font-size=0.35"
    }
  ];

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
          {leaders.map((leader, idx) => (
            <div key={idx} className="reveal group bg-ssg-dark/5 rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:bg-ssg-dark hover:border-ssg-red/30">
               <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-slate-200">
                  <Image 
                     src={leader.image}
                     alt={leader.name}
                     fill
                     className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                     unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ssg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
               
               <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-white transition-colors">{leader.name}</h3>
               <p className="text-ssg-red font-semibold text-xs mt-1 uppercase tracking-wider">{leader.title}</p>
               
               <div className="mt-6 flex">
                  <Link 
                     href={leader.link}
                     className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-ssg-red group-hover:text-white transition-all duration-300"
                  >
                     <i className="ph-fill ph-linkedin-logo text-lg"></i>
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
