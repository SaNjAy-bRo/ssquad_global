export const metadata = {
  title: "Admin Dashboard | SSquad Global",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-body antialiased">
      <aside className="w-64 bg-ssg-dark text-white flex flex-col shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-white/10 shrink-0">
          <span className="font-heading font-bold text-lg tracking-wide text-white">SSQUAD Admin</span>
        </div>
        <nav className="flex-1 py-6 flex flex-col gap-2 px-4">
          <div className="px-3 py-2 bg-white/10 rounded-lg text-sm font-medium flex items-center gap-3">
            <i className="ph ph-squares-four text-lg"></i>
            Insights Management
          </div>
          <div className="px-3 py-2 text-white/50 hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-3 cursor-not-allowed">
            <i className="ph ph-users text-lg"></i>
            Users (Coming Soon)
          </div>
          <div className="px-3 py-2 text-white/50 hover:text-white/80 transition-colors text-sm font-medium flex items-center gap-3 cursor-not-allowed">
            <i className="ph ph-gear text-lg"></i>
            Settings (Coming Soon)
          </div>
        </nav>
        <div className="p-4 border-t border-white/10">
          <a href="/" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            <i className="ph ph-arrow-left"></i>
            Back to Public Site
          </a>
        </div>
      </aside>
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 relative">
        {children}
      </main>
    </div>
  );
}
