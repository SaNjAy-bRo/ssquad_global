import Image from 'next/image';
import { mockBlogs } from '../../data/blogs';

export default function InsightsSection() {
  return (
    <section className="bg-ssg-light py-20 lg:py-24">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Insights</p>
            <h2 className="section-title">Latest Cybersecurity News</h2>
          </div>
          <a href="https://ssquad.com/blog/" target="_blank" rel="noopener noreferrer" className="text-ssg-red font-semibold inline-flex items-center gap-2">View all insights <span>&rarr;</span></a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBlogs.map((blog) => (
            <article key={blog.id} className="insight-card reveal">
              <Image 
                src={blog.image} 
                unoptimized 
                alt={`${blog.title} visual from SSquad Global`} 
                width={570} 
                height={600} 
                className="w-full h-auto aspect-[570/600] object-cover" 
              />
              <div className="content p-6">
                <h3 className="font-bold text-lg mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.summary}</p>
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-ssg-red font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Read more <span>&rarr;</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
