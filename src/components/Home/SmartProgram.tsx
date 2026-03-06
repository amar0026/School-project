import React, { useEffect, useRef, useState } from "react";
import school1 from "../../assets/morningshiftImage.jpg";
import school2 from "../../assets/dayshift.jpg";
import school3 from "../../assets/englishmedium.jpg";
import { Link } from "react-router-dom";

// ── Hook: fires once on viewport entry ───────────────────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Card ─────────────────────────────────────────────────────────────────────
const ProgramCard: React.FC<{
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  delay: string;
}> = ({ src, alt, title, subtitle, delay }) => (
  <div
    className="card-anim group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
    style={{
      animationDelay: delay,
      boxShadow: "0 4px 24px rgba(33,193,215,0.08), 0 2px 8px rgba(0,0,0,0.06)",
      border: "1.5px solid #e0f9fb",
      transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(33,193,215,0.18), 0 8px 20px rgba(0,0,0,0.08)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(33,193,215,0.08), 0 2px 8px rgba(0,0,0,0.06)";
    }}
  >
    {/* Image */}
    <div className="overflow-hidden relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-[280px] object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Teal overlay on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-400"
        style={{
          background: "linear-gradient(180deg, transparent 40%, rgba(33,193,215,0.35) 100%)",
          opacity: 0,
        }}
        ref={el => {
          if (!el) return;
          const parent = el.closest(".group") as HTMLElement;
          if (parent) {
            parent.addEventListener("mouseenter", () => (el.style.opacity = "1"));
            parent.addEventListener("mouseleave", () => (el.style.opacity = "0"));
          }
        }}
      />
    </div>

    {/* Content */}
    <div className="py-6 px-5">
      {/* Top accent line */}
      <div
        className="h-0.5 rounded-full mb-4 transition-all duration-500 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, #21C1D7, #313567)",
          width: "40px",
        }}
      />
      <h3
        className="text-2xl font-bold text-[#04162F]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
      <p
        className="text-sm font-semibold tracking-[0.18em] uppercase mt-1.5"
        style={{ color: "#21C1D7", fontFamily: "'DM Sans', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  </div>
);

// ── Main ─────────────────────────────────────────────────────────────────────
const SmartProgram: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(50px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }
        @keyframes btnPop {
          0%   { opacity: 0; transform: scale(0.8); }
          70%  { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes btnGlow {
          0%   { box-shadow: 0 0 0 0   rgba(49,53,103,0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(49,53,103,0);   }
          100% { box-shadow: 0 0 0 0   rgba(49,53,103,0);    }
        }

        .paused .anim-eyebrow,
        .paused .anim-line,
        .paused .anim-heading,
        .paused .anim-btn,
        .paused .card-anim { animation-play-state: paused !important; }

        .running .anim-eyebrow { animation: fadeSlideUp  0.6s ease both; animation-delay: 0.05s; }
        .running .anim-line    { animation: revealLine   0.55s ease both; animation-delay: 0.2s; }
        .running .anim-heading { animation: fadeSlideUp  0.7s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.15s; }
        .running .anim-btn     { animation: btnPop       0.6s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.35s; }
        .running .card-anim    { animation: cardReveal   0.7s cubic-bezier(.22,.68,0,1.2) both; }

        .heading-shimmer:hover {
          background: linear-gradient(90deg, #21C1D7 20%, #313567 50%, #21C1D7 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 1.8s linear infinite;
        }
        .btn-glow:hover { animation: btnGlow 0.9s ease-out infinite; }
      `}</style>

      <div className="max-w-[1600px] mx-auto text-center px-10">
        <div ref={ref} className={inView ? "running" : "paused"}>

          {/* Eyebrow */}
          <div className="anim-eyebrow flex items-center justify-center gap-3 mb-4">
            <div
              className="anim-line h-0.5 rounded-full bg-[#21C1D7]"
              style={{ width: "48px" }}
            />
            <span
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#21C1D7]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Programs
            </span>
            <div
              className="anim-line h-0.5 rounded-full bg-[#21C1D7]"
              style={{ width: "48px" }}
            />
          </div>

          {/* Heading */}
          <h2
            className="anim-heading heading-shimmer text-5xl font-bold text-[#21C1D7] tracking-wide cursor-default"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Smarty Program
          </h2>

          {/* Button */}
          <div className="anim-btn mt-10">
            <Link
              to="/smarty-program"
              className="btn-glow inline-block px-8 py-3 rounded-2xl bg-[#313567] text-white text-lg font-semibold
                transition-all duration-300  hover:text-white active:scale-95"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 4px 14px rgba(49,53,103,0.3)",
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <ProgramCard
              src={school1} alt="Morning Shift"
              title="Morning Shift" subtitle="Bengali Medium"
              delay="0.45s"
            />
            <ProgramCard
              src={school2} alt="Day Shift"
              title="Day Shift" subtitle="English Medium"
              delay="0.6s"
            />
            <ProgramCard
              src={school3} alt="English Medium"
              title="High School" subtitle="English Medium"
              delay="0.75s"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SmartProgram;