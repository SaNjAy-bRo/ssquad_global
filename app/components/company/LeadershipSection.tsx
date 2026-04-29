"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { managementData } from '@/app/data/management';


export default function LeadershipSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header matching original site vibe */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
          <div className="text-left">
            <p className="section-eyebrow">The Experts</p>
            <h2 className="section-title text-slate-900">Our Leadership Team</h2>
            <p className="text-slate-500 mt-3 text-[17px] md:whitespace-nowrap">
               Driven by experience, led by visionaries.
            </p>
          </div>

        </div>

        <div className="mt-12 relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-lg"
          >
            <i className="ph ph-caret-left text-lg"></i>
          </button>
          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:bg-ssg-red hover:text-white hover:border-ssg-red transition-all duration-300 shadow-lg"
          >
            <i className="ph ph-caret-right text-lg"></i>
          </button>

          <div ref={scrollRef} className="overflow-hidden w-full scroll-smooth group">
            <div className="flex w-max gap-10 animate-[certScroll_40s_linear_infinite] group-hover:[animation-play-state:paused] pb-8 pt-4">
              {[1, 2].map((setIndex) => (
                managementData.map((leader, idx) => (
                  <div key={`${setIndex}-${idx}`} className="w-[180px] md:w-[200px] lg:w-[260px] flex-shrink-0 text-center" aria-hidden={setIndex === 2 ? "true" : undefined}>
                    <Link href={`/management/${leader.id}`} className="block group h-full">
                      <div className="reveal flex flex-col items-center">
                         <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4 sm:mb-6 rounded-full overflow-hidden bg-slate-100 ring-4 ring-slate-50 group-hover:ring-ssg-red/20 transition-all duration-500 mx-auto shadow-sm">
                            <Image 
                               src={leader.image}
                               alt={leader.name}
                               fill
                               className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                               style={{ objectPosition: leader.imagePosition || 'center', ...(leader.imageStyle || {}) }}
                               unoptimized
                            />
                         </div>
                         
                         <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 group-hover:text-ssg-red transition-colors leading-tight">{leader.name}</h3>
                         <p className="text-ssg-red font-medium text-[11px] sm:text-xs md:text-sm mt-1.5 sm:mt-2 mb-4 line-clamp-2">{leader.title}</p>
                         
                         <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 mx-auto">
                            <i className="ph-fill ph-linkedin-logo text-base sm:text-lg"></i>
                         </div>
                      </div>
                    </Link>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
