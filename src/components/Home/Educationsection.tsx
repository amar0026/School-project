import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/imgee.png";
import { Link } from "react-router-dom";

// ── InView Hook ───────────────────────────────────────────────────────────────
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

// ── Card with hover-triggered letter-by-letter animation ─────────────────────
const Card = ({ link, text }: { link: string; text: string }) => {
  const [hovered, setHovered] = useState(false);
  const [key, setKey] = useState(0);

  const handleEnter = () => {
    setKey(k => k + 1); // reset animation each hover
    setHovered(true);
  };
  const handleLeave = () => setHovered(false);

  return (
    <Link
      to={link}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="w-72 h-36 text-white rounded-xl flex items-center justify-center
        text-xl font-semibold shadow-lg
        hover:-translate-y-3 hover:scale-105 hover:shadow-2xl
        transition-all duration-300 relative overflow-hidden group"
      style={{
        background: "linear-gradient(135deg, #1a3f7a 0%, #2d5cad 60%, #4583DA 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Shine sweep */}
      <span className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700 pointer-events-none" />

      {/* Bottom glow bar */}
      <span
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.4)" }}
      />

      {/* Letter-by-letter text */}
      <div key={key} className="relative z-10 flex tracking-widest">
        {text.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: 0,
              transform: "translateY(18px)",
              animation: hovered
                ? `letterDrop 0.35s cubic-bezier(.22,.68,0,1.2) forwards`
                : `letterRise 0.3s ease forwards`,
              animationDelay: hovered
                ? `${i * 0.055}s`
                : `${(text.length - i) * 0.03}s`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </Link>
  );
};

// ── Main ─────────────────────────────────────────────────────────────────────
const EducationSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className={`bg-white py-20 px-6 text-center overflow-hidden ${inView ? "sect-running" : "sect-paused"}`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes float {
          0%   { transform: translate(-50%, 0px); }
          50%  { transform: translate(-50%, 10px); }
          100% { transform: translate(-50%, 0px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 40px; opacity: 1; }
        }
        @keyframes boxReveal {
          from { opacity: 0; transform: scale(0.96) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes cardPop {
          0%   { opacity: 0; transform: translateY(30px) scale(0.94); }
          70%  { transform: translateY(-4px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Letter animations ── */
        @keyframes letterDrop {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes letterRise {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0.7; transform: translateY(0); }
        }

        /* Initial card text: visible on mount */
        @keyframes letterShow {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Scroll-triggered ── */
        .sect-paused .anim-eyebrow,
        .sect-paused .anim-heading,
        .sect-paused .anim-line,
        .sect-paused .anim-box,
        .sect-paused .anim-card { animation-play-state: paused !important; }

        .sect-running .anim-eyebrow { animation: fadeUp     0.6s ease both; animation-delay: 0.05s; }
        .sect-running .anim-line    { animation: revealLine 0.5s ease both; animation-delay: 0.2s; }
        .sect-running .anim-heading { animation: fadeUp     0.7s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.15s; }
        .sect-running .anim-box     { animation: boxReveal  0.75s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.35s; }
        .sect-running .anim-card    { animation: cardPop    0.65s cubic-bezier(.22,.68,0,1.2) both; }

        .animate-float { animation: float 3s ease-in-out infinite; }

        /* initial letter reveal on mount */
        .letter-init {
          opacity: 0;
          display: inline-block;
          animation: letterShow 0.35s cubic-bezier(.22,.68,0,1.2) forwards;
        }
      `}</style>

      {/* ── Eyebrow ── */}
      <div className="anim-eyebrow flex items-center justify-center gap-3 mb-4">
        <div className="anim-line h-0.5 rounded-full bg-blue-900" style={{ width: "40px" }} />
        <span
          className="text-[11px] font-bold tracking-[0.28em] uppercase text-blue-900"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Our Vision
        </span>
        <div className="anim-line h-0.5 rounded-full bg-blue-900" style={{ width: "40px" }} />
      </div>

      {/* ── Heading ── */}
      <h1
        className="anim-heading text-3xl md:text-4xl font-bold text-blue-900 mb-14 leading-snug"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Education is the best <br /> key to success in life
      </h1>

      {/* ── Content Box ── */}
      <div
        className="anim-box relative max-w-3xl mx-auto bg-linear-to-br from-[#BFD9FF] to-[#dbeafe] rounded-xl border-2 border-dashed border-gray-400 p-10 mb-20 shadow-lg hover:shadow-xl transition duration-500"
      >
        {/* Floating Icon */}
        <img
          src={icon}
          alt="icon"
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 animate-float"
        />

        <p
          className="text-gray-700 leading-relaxed text-sm md:text-base"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Our Efforts Are To Build Aspiration Of Doing Future Study. We
          Believe That A "Sishu" Borns With All "Good", And We Nurture
          Them Installing Positive Values In Them.
        </p>
      </div>

      {/* ── Cards ── */}
      <div className="flex flex-col sm:flex-row justify-center gap-12">
        {[
          { link: "/facilities",  text: "FACILITIES"  },
          { link: "/admission",   text: "ADMISSION"   },
          { link: "/achievement", text: "ACHIEVEMENT" },
        ].map(({ link, text }, i) => (
          <div
            key={link}
            className="anim-card"
            style={{ animationDelay: `${0.55 + i * 0.15}s` }}
          >
            <Card link={link} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;