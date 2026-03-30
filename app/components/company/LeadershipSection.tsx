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

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {leaders.map((leader, idx) => (
            <div key={idx} className="reveal group w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-27px)] bg-slate-50 rounded-3xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:bg-white text-center">
               <div className="relative w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-ssg-red/20 transition-colors">
                  <Image 
                     src={leader.image}
                     alt={leader.name}
                     fill
                     className="object-cover transition-transform duration-500 group-hover:scale-110"
                     unoptimized
                  />
               </div>
               
               <h3 className="font-heading font-bold text-xl text-slate-900">{leader.name}</h3>
               <p className="text-ssg-red font-medium text-sm mt-1">{leader.title}</p>
               
               <div className="mt-6 flex justify-center">
                  <Link 
                     href={leader.link}
                     className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white transition-colors duration-300"
                  >
                     <i className="ph-fill ph-linkedin-logo text-xl"></i>
                  </Link>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
