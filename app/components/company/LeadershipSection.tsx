"use client";

import Image from 'next/image';
import Link from 'next/link';
import { managementData } from '@/app/data/management';
import { useRef } from 'react';

export default function LeadershipSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="text-left">
            <p className="section-eyebrow">The Experts</p>
            <h2 className="section-title text-slate-900">Our Leadership Team</h2>
            <p className="text-slate-500 mt-3 max-w-2xl">
               Driven by experience, led by visionaries. Meet the leadership driving our global cybersecurity efforts.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300"
              aria-label="Scroll left"
            >
              <i className="ph-bold ph-arrow-left text-xl"></i>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300"
              aria-label="Scroll right"
            >
              <i className="ph-bold ph-arrow-right text-xl"></i>
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {managementData.map((leader, idx) => (
              <div key={idx} className="w-[calc(50%-0.5rem)] sm:w-auto min-w-[150px] sm:min-w-[320px] md:min-w-[350px] snap-start flex-shrink-0">
                <Link href={`/management/${leader.id}`} className="block group h-full">
                  <div className="reveal bg-ssg-dark/5 rounded-2xl p-4 sm:p-5 border border-slate-100 transition-all duration-300 hover:shadow-premium hover:-translate-y-2 hover:bg-ssg-dark hover:border-ssg-red/30 h-full flex flex-col">
                     <div className="relative w-full aspect-[4/3.5] mb-4 sm:mb-5 rounded-xl overflow-hidden bg-slate-200">
                        <Image 
                           src={leader.image}
                           alt={leader.name}
                           fill
                           className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                           style={{ objectPosition: leader.imagePosition || 'center top' }}
                           unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ssg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </div>
                     
                     <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-white transition-colors leading-tight">{leader.name}</h3>
                     <p className="text-ssg-red font-semibold text-[10px] sm:text-xs mt-1 sm:mt-1.5 uppercase tracking-wider mb-3 sm:mb-4 line-clamp-2">{leader.title}</p>
                     
                     <div className="mt-auto flex">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-ssg-red group-hover:text-white transition-all duration-300">
                           <i className="ph-bold ph-arrow-up-right text-base sm:text-lg"></i>
                        </div>
                     </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
