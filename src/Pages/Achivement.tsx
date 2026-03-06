import React, { useEffect, useRef, useState } from "react";

// ── Hook ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ── Data ──────────────────────────────────────────────────────────────────────
const schools = [
  "Krishnapur Adarsha vidyamandir (H.S)",
  "Krishnapur Adarsha Vidyamandir (for Girls)",
  "Dum Dum Sree Arbindia Vidyamandir",
  "Dum Dum Sarvodya Balika Vidyapith",
  "Sri Ramkrishna Sarada Singha Balika Vidyalaya",
  "Christ Church Girls' High School",
  "Laketown Govt. Sponsored Girls' High School",
  "Dum Dum Motijheel Girls' High School",
  "Motijheel Boys' High School",
  "Kishore Bharati High School",
  "The Scottish Church collegiate School",
  "BidhanNagar Govt. High School",
  "Laban Hrad Vidyapith",
  "RKSM Sister Nivedita Girls' School",
  "RKMV Narendrapur",
];

const professions = [
  "Doctor", "Engineer", "Professor", "Artist", "Player", "Business Entrepreneur",
];

// ── Main ──────────────────────────────────────────────────────────────────────
const AchievementsSection = () => {
  const { ref: headRef,  inView: headIn  } = useInView(0.2);
  const { ref: gridRef,  inView: gridIn  } = useInView(0.08);
  const { ref: profRef,  inView: profIn  } = useInView(0.15);
  const { ref: alumRef,  inView: alumIn  } = useInView(0.2);

  return (
    <section
      className="w-full py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f8faff 0%, #f0f5ff 50%, #fafafa 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 56px; opacity: 1; }
        }
        @keyframes tileIn {
          from { opacity: 0; transform: translateY(28px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7) translateY(10px); }
          65%  { transform: scale(1.07) translateY(-2px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderPop {
          0%   { border-color: transparent; }
          100% { border-color: #bfdbfe; }
        }

        /* ── Head ── */
        .head-p .anim-up, .head-p .anim-line { animation-play-state: paused !important; }
        .head-r .anim-up   { animation: fadeUp     0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .head-r .anim-line { animation: revealLine 0.55s ease both; }

        /* ── Grid ── */
        .grid-p .tile { animation-play-state: paused !important; }
        .grid-r .tile { animation: tileIn 0.55s cubic-bezier(.22,.68,0,1.2) both; }

        /* ── Prof ── */
        .prof-p .anim-up, .prof-p .prof-tag { animation-play-state: paused !important; }
        .prof-r .anim-up   { animation: fadeUp 0.65s ease both; }
        .prof-r .prof-tag  { animation: popIn  0.55s cubic-bezier(.22,.68,0,1.2) both; }

        /* ── Alum ── */
        .alum-p .anim-right { animation-play-state: paused !important; }
        .alum-r .anim-right { animation: fadeRight 0.75s cubic-bezier(.22,.68,0,1.2) both; }

        /* ── Heading shimmer ── */
        .hdg-hover:hover {
          background: linear-gradient(90deg, #1e3a8a 15%, #4583DA 50%, #1e3a8a 85%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 2s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* ══ HEADER ══════════════════════════════════════════════════════════ */}
        <div
          ref={headRef}
          className={`text-center mb-16 ${headIn ? "head-r" : "head-p"}`}
        >
          {/* Eyebrow */}
          <div className="anim-up flex items-center justify-center gap-4 mb-5" style={{ animationDelay: "0s" }}>
            <div className="anim-line h-px rounded-full bg-[#313567]" style={{ width: "56px", animationDelay: "0.2s" }} />
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-[#313567]">
              Our Pride
            </span>
            <div className="anim-line h-px rounded-full bg-[#313567]" style={{ width: "56px", animationDelay: "0.2s" }} />
          </div>

          {/* Heading */}
          <h2
            className="anim-up hdg-hover text-4xl md:text-5xl font-bold text-[#313567] cursor-default leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
          >
            Our Achievements
          </h2>

          {/* Red rule */}
          <div className="anim-line h-[3px] bg-red-700 rounded-full mx-auto mt-3" style={{ width: "56px", animationDelay: "0.3s" }} />

          {/* Sub */}
          <p
            className="anim-up text-base md:text-lg text-gray-500 mt-7 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            After passing from our school, students in recent past joined schools like:
          </p>
        </div>

        {/* ══ SCHOOLS GRID ════════════════════════════════════════════════════ */}
        <div
          ref={gridRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-3 ${gridIn ? "grid-r" : "grid-p"}`}
        >
          {schools.map((school, i) => (
            <div
              key={i}
              className="tile group relative bg-white rounded-xl overflow-hidden cursor-default"
              style={{
                animationDelay: `${i * 0.045}s`,
                border: "1px solid #e8f0ff",
                boxShadow: "0 2px 12px rgba(30,64,175,0.06)",
                transition: "transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 12px 32px rgba(30,64,175,0.14)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "";
                el.style.boxShadow = "0 2px 12px rgba(30,64,175,0.06)";
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl transition-all duration-300"
                style={{ background: "linear-gradient(180deg, #313567 0%, #4583DA 100%)" }}
              />

              {/* Index number */}
              <div className="flex items-center gap-3 p-4 pl-5">
                <span
                  className="text-[11px] font-bold text-[#4583DA]/50 w-5 flex-shrink-0 select-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-gray-800 font-medium text-sm md:text-base leading-snug"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {school}
                </span>
              </div>

              {/* Bottom hover line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: "linear-gradient(90deg, #313567, #4583DA)" }}
              />
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-right italic text-sm mb-12 mr-1">
          … and many more
        </p>

        {/* ══ PROFESSIONS ═════════════════════════════════════════════════════ */}
        <div
          ref={profRef}
          className={`relative rounded-2xl overflow-hidden mb-8 ${profIn ? "prof-r" : "prof-p"}`}
          style={{
            background: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 60%, #EFF6FF 100%)",
            border: "1.5px solid #bfdbfe",
            boxShadow: "0 8px 40px rgba(30,64,175,0.09)",
          }}
        >
          {/* Decorative corner circles */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/30 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/20 pointer-events-none" />

          <div className="relative z-10 p-8 md:p-10">
            {/* Top rule */}
            <div className="anim-line h-px bg-[#93c5fd] rounded-full mb-6 mx-auto" style={{ width: "56px", animationDelay: "0.05s" }} />

            <p
              className="anim-up text-lg md:text-xl text-gray-800 font-medium leading-relaxed text-center mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-[#1e3a8a] font-bold">This school feels proud</span> of the passed out students as they, after higher education, have become:
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {professions.map((p, i) => (
                <span
                  key={i}
                  className="prof-tag relative bg-white px-5 py-2.5 rounded-full text-[#1e3a8a] font-semibold shadow-sm border border-blue-200 text-sm md:text-base cursor-default overflow-hidden group"
                  style={{
                    animationDelay: `${0.2 + i * 0.09}s`,
                    transition: "transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease, background 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.transform = "translateY(-5px) scale(1.07)";
                    el.style.boxShadow = "0 10px 24px rgba(30,64,175,0.2)";
                    el.style.background = "#eff6ff";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.transform = "";
                    el.style.boxShadow = "";
                    el.style.background = "white";
                  }}
                >
                  {/* Shine sweep */}
                  <span className="absolute top-0 -left-full w-full h-full bg-white/40 skew-x-12 group-hover:left-[120%] transition-all duration-500 pointer-events-none" />
                  <span className="relative z-10">{p}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ══ ALUMNI ══════════════════════════════════════════════════════════ */}
        <div
          ref={alumRef}
          className={alumIn ? "alum-r" : "alum-p"}
        >
          <div
            className="anim-right relative overflow-hidden rounded-2xl"
            style={{
              animationDelay: "0.1s",
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1.5px solid #bbf7d0",
              boxShadow: "0 8px 32px rgba(22,163,74,0.08)",
            }}
          >
            {/* Green left bar */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
              style={{ background: "linear-gradient(180deg, #16a34a 0%, #4ade80 100%)" }}
            />

            <div className="pl-8 pr-7 py-6 flex items-start gap-4">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center mt-0.5"
                style={{ background: "#dcfce7", border: "1px solid #bbf7d0" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>

              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="font-bold not-italic text-green-700">School has a strong alumni</span> who stand beside the Programs and Activities of the school.
              </p>
            </div>
          </div>
        </div>

        {/* ══ DIVIDER ══════════════════════════════════════════════════════════ */}
        <div className="mt-14 flex justify-center items-center gap-3">
          <div className="w-12 h-px bg-gray-200 rounded-full" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-12 h-px bg-gray-200 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default AchievementsSection;