import Link from "next/link";
import Image from "next/image";
import { mockBlogs } from "../../data/blogs";

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-slate-900">Insights Management</h1>
          <p className="text-slate-500 mt-2">Manage your blog posts and articles displayed on the public site.</p>
        </div>
        <button className="bg-ssg-cyber text-white px-5 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#4820db] transition-colors shadow-sm">
          <i className="ph ph-plus"></i>
          New Post
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-500">
                <th className="font-semibold py-4 px-6">Post</th>
                <th className="font-semibold py-4 px-6">URL Stub</th>
                <th className="font-semibold py-4 px-6">Status</th>
                <th className="font-semibold py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockBlogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="py-4 px-6">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-14 rounded-lg overflow-hidden shrink-0 relative border border-slate-200 bg-slate-100">
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          fill 
                          unoptimized
                          className="object-cover" 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm line-clamp-1">{blog.title}</h3>
                        <p className="text-slate-500 text-xs mt-1 line-clamp-1">{blog.summary}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-500">
                    <span className="truncate max-w-[150px] inline-block" title={blog.link}>
                      {blog.link.split('/').filter(Boolean).pop()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      Published
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link 
                        href={`/admin/blogs/edit/${blog.id}`}
                        className="p-2 text-slate-400 hover:text-ssg-cyber hover:bg-ssg-cyber/5 rounded-lg transition-colors"
                        title="Edit Post"
                      >
                        <i className="ph ph-pencil-simple text-lg"></i>
                      </Link>
                      <button 
                        className="p-2 text-slate-400 hover:text-ssg-red hover:bg-ssg-red/5 rounded-lg transition-colors"
                        title="Delete Post"
                      >
                        <i className="ph ph-trash text-lg"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {mockBlogs.length === 0 && (
            <div className="p-12 text-center text-slate-500">
              No insights found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
