import Link from "next/link";

interface InnerHeaderProps {
  title: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function InnerHeader({ title, breadcrumbs }: InnerHeaderProps) {
  return (
    <div className="hero relative overflow-hidden bg-ssg-dark pt-36 pb-20 lg:pt-44 lg:pb-24">
      {/* Home page matching animations */}
      <div className="hero-grid-overlay"></div>
      <div className="hero-glow"></div>
      <div className="hero-network-lines"></div>
      <div className="hero-signal-waves"></div>
      <div className="hero-3d-waves"></div>
      <div className="hero-scan-sweep"></div>

      <div className="max-w-container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tight reveal">
          {title}
        </h1>
      </div>
    </div>
  );
}
