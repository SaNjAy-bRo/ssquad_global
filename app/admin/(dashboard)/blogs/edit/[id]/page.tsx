"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { mockBlogs, BlogPost } from "../../../../../data/blogs";

export default function EditBlog({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  // Form states
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    // Mock fetching the blog
    const foundBlog = mockBlogs.find((b) => b.id === params.id);
    if (foundBlog) {
      setBlog(foundBlog);
      setTitle(foundBlog.title);
      setSummary(foundBlog.summary);
      setImage(foundBlog.image);
      setLink(foundBlog.link);
    }
    setIsLoading(false);
  }, [params.id]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Mock API save
    setTimeout(() => {
      setIsSaving(false);
      alert("Post details saved successfully! (Mock Phase)");
      router.push("/admin");
    }, 600);
  };

  if (isLoading) {
    return <div className="p-8">Loading post details...</div>;
  }

  if (!blog) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-slate-800">Post not found</h2>
        <Link href="/admin" className="text-ssg-cyber mt-4 inline-block">Return to Dashboard</Link>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
        <Link href="/admin" className="hover:text-ssg-cyber transition-colors">Insights Management</Link>
        <i className="ph ph-caret-right text-xs"></i>
        <span className="text-slate-900 font-medium truncate max-w-[200px]">{blog.title}</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold text-slate-900">Edit Post</h1>
          <p className="text-slate-500 mt-2">Update the content, imagery, and external link for this insight.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/admin"
            className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors"
          >
            Cancel
          </Link>
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className="bg-ssg-cyber text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#4820db] transition-colors shadow-sm disabled:opacity-70 min-w-[120px] justify-center"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <i className="ph ph-floppy-disk"></i>
                Save Changes
              </>
            )}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <form onSubmit={handleSave} className="p-6 md:p-8 flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Title Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-semibold text-slate-700">
                  Post Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all font-medium text-slate-900"
                  required
                />
              </div>

              {/* Summary Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="summary" className="text-sm font-semibold text-slate-700">
                  Summary Excerpt
                </label>
                <textarea
                  id="summary"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-700 resize-y"
                  required
                />
                <p className="text-xs text-slate-500">Displayed on the card in the Insights section.</p>
              </div>

              {/* URL Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="link" className="text-sm font-semibold text-slate-700">
                  External URL
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <i className="ph ph-link text-slate-400"></i>
                  </div>
                  <input
                    id="link"
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-900"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Sidebar configurations (Image) */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-semibold text-slate-700">
                  Featured Image URL
                </label>
                <input
                  id="image"
                  type="url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-cyber/20 focus:border-ssg-cyber transition-all text-slate-900"
                  required
                />
              </div>

              {/* Image Preview */}
              <div className="border border-slate-200 rounded-xl bg-slate-50 p-2 relative">
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur text-xs font-semibold px-2 py-1 rounded shadow-sm z-10 text-slate-700">Preview</span>
                <div className="aspect-[570/600] w-full rounded-lg overflow-hidden relative border border-slate-200 bg-white">
                  {/* We disable unoptimized here if we want or keep it, since these are random WP urls it's safer unoptimized */}
                  {image ? (
                    <img 
                      src={image} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMThmMWIiPjwvcmVjdD48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIyMCIgZmlsbD0iIzQ3NTU2OSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SWW1hZ2UgRXJyb3I8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400">
                      <i className="ph ph-image text-4xl"></i>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
