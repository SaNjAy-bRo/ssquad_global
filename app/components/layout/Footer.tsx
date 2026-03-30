import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ssg-dark py-16">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 text-slate-300 items-start">
          <div className="lg:col-span-5 footer-col">
            <Image src="/images/logon.png" alt="SSquad Global logo" width={160} height={40} className="h-10 w-auto" />
            <p className="mt-5 max-w-md text-sm text-slate-400">
              SSquad Global delivers enterprise-grade cybersecurity, infrastructure, cloud, and managed security services for organizations operating in high-stakes environments.
            </p>
            <div className="mt-6 flex items-center gap-3 text-xl text-slate-300">
              <Link href="#" aria-label="LinkedIn" className="social"><i className="ph ph-linkedin-logo"></i></Link>
              <Link href="#" aria-label="X" className="social"><i className="ph ph-x-logo"></i></Link>
              <Link href="#" aria-label="Facebook" className="social"><i className="ph ph-facebook-logo"></i></Link>
            </div>
          </div>

          <div className="lg:col-span-3 footer-col">
            <h3>Contact Info</h3>
            <ul>
              <li><strong>Phone:</strong><br />+603 2276 5856</li>
              <li><strong>Email:</strong><br />sales@ssquad.com</li>
              <li><strong>Address:</strong><br />1 Ubi View, #04-05 Focus One, Singapore 408555.</li>
            </ul>
          </div>
          <div className="lg:col-span-2 footer-col">
            <h3>Services</h3>
            <ul>
              <li>Cyber Security</li>
              <li>Infrastructure</li>
              <li>Cloud</li>
              <li>Application</li>
              <li>Harpy Defence</li>
            </ul>
          </div>
          <div className="lg:col-span-2 footer-col">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Industries</li>
              <li>Insights</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-sm text-slate-500">
          © {currentYear} SSquad Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
