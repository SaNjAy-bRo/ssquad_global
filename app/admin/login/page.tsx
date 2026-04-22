"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleMockLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock an api delay
    setTimeout(() => {
      // For the mock phase, any submission goes to the dashboard
      router.push("/admin");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-[-15%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-ssg-cyber/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-ssg-red/5 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-premium border border-slate-200 p-8">
          <div className="mb-10 text-center flex flex-col items-center">
            <div className="bg-ssg-dark px-4 py-2 rounded-lg mb-6 inline-block">
              <Image 
                src="/images/logon.png" 
                alt="SSquad Global" 
                width={120} 
                height={30} 
                className="h-7 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <h1 className="text-2xl font-heading font-bold text-slate-900">Admin Portal</h1>
            <p className="text-sm text-slate-500 mt-2">Sign in to manage insights and website content.</p>
          </div>

          <form onSubmit={handleMockLogin} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-red/20 focus:border-ssg-red transition-all"
                placeholder="admin@ssquad.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ssg-red/20 focus:border-ssg-red transition-all"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 w-full bg-ssg-red text-white font-semibold rounded-xl py-3.5 transition-all hover:bg-[#d9181d] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Sign In"
              )}
            </button>
            
            <p className="text-xs text-center text-slate-400 mt-4">
              Mock Phase: Enter any credentials to proceed.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
