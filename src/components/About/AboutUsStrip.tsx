import React, { useEffect, useRef, useState } from "react";

// ── Hook ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.3) {
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

const AboutUsStrip: React.FC = () => {
  const { ref, inView } = useInView(0.3);

  return (
    <section className="w-full  bg-white py-10 sm:py-14 md:py-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderDrawH {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes borderDrawV {
          from { height: 0; }
          to   { height: 100%; }
        }
        @keyframes shimmerHeading {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }

        .about-paused .anim-title,
        .about-paused .anim-para,
        .about-paused .anim-eyebrow,
        .about-paused .anim-line,
        .about-paused .border-top,
        .about-paused .border-left,
        .about-paused .border-right { animation-play-state: paused !important; }

        .about-running .anim-title   { animation: fadeSlideDown 0.75s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.3s; }
        .about-running .anim-para    { animation: fadeSlideUp   0.7s  ease both; animation-delay: 0.55s; }
        .about-running .anim-eyebrow { animation: fadeSlideUp   0.6s  ease both; animation-delay: 0.05s; }
        .about-running .anim-line    { animation: revealLine    0.5s  ease both; animation-delay: 0.2s; }

        .about-running .border-top   { animation: borderDrawH 0.7s ease both; animation-delay: 0.05s; }
        .about-running .border-left  { animation: borderDrawV 0.6s ease both; animation-delay: 0.65s; }
        .about-running .border-right { animation: borderDrawV 0.6s ease both; animation-delay: 0.65s; }

        .heading-hover:hover {
          background: linear-gradient(90deg, #313567 15%, #4583DA 50%, #313567 85%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerHeading 2s linear infinite;
        }
      `}</style>

      <div className=" max-w-[1920px]  mx-auto px-4 sm:px-8 md:px-12">
        <div
          ref={ref}
          className={`relative w-full ${inView ? "about-running" : "about-paused"}`}
        >

          {/* ── Eyebrow ── */}
          <div className="anim-eyebrow flex items-center justify-center gap-3 mb-3">
            <div className="anim-line h-0.5 rounded-full bg-[#313567]" style={{ width: "48px" }} />
            <span
              className="text-[9px] sm:text-[10px] font-bold tracking-[0.32em] uppercase text-[#313567]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Who We Are
            </span>
            <div className="anim-line h-0.5 rounded-full bg-[#313567]" style={{ width: "48px" }} />
          </div>

          {/* ── Heading overlapping border ── */}
          <h2
            className="anim-title heading-hover absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 bg-white px-3 sm:px-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#313567] whitespace-nowrap cursor-default z-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            About Us
          </h2>

          {/* ── Animated border box ── */}
          <div className="relative pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-10">
            <div className="border-top absolute top-0 left-0 h-px bg-[#444444] rounded-tl-2xl" style={{ width: 0 }} />
            <div className="border-left absolute top-0 left-0 w-px bg-[#444444] rounded-tl-2xl" style={{ height: 0 }} />
            <div className="border-right absolute top-0 right-0 w-px bg-[#444444] rounded-tr-2xl" style={{ height: 0 }} />
          </div>

          {/* ── Paragraph ── */}
          <p
            className="anim-para text-sm sm:text-base md:text-lg text-black/80 leading-relaxed text-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-2"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            We offer both Bengali and English as the Medium of teaching and
            Learning. We builds knowledge discipline creativity friendships and
            confidence.
          </p>

          {/* ── Bottom decorative dots ── */}
          <div className="anim-para flex justify-center items-center gap-2 mt-5 sm:mt-6" style={{ animationDelay: "0.7s" }}>
            <div className="w-1 h-1 rounded-full bg-[#313567]/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#313567]/35" />
            <div className="w-2 h-2 rounded-full bg-[#313567]/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#313567]/35" />
            <div className="w-1 h-1 rounded-full bg-[#313567]/20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUsStrip;