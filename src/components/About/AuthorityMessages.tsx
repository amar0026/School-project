import React, { useEffect, useRef, useState } from "react";
import school from "../../assets/school.jpeg";

// ── Hook: triggers once when element enters viewport ─────────────────────────
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

// ── Individual card with its own InView ──────────────────────────────────────
const MessageCard: React.FC<{
  imageLeft: boolean;
  title: string;
  message: string;
  name: string;
  role: string;
  btnLabel: string;
  imgAlt: string;
  cardDelay?: string;
}> = ({ imageLeft, title, message, name, role, btnLabel, imgAlt, cardDelay = "0s" }) => {
  const { ref, inView } = useInView(0.15);

  const imgBlock = (
    <div
      className={`flex flex-col items-center ${imageLeft ? "anim-left" : "anim-right"}`}
      style={{ animationDelay: cardDelay }}
    >
      <div
        className="overflow-hidden rounded-xl group"
        style={{
          boxShadow: "0 8px 32px rgba(30,64,175,0.15), 0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src={school}
          alt={imgAlt}
          className="w-[340px] h-[230px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <button
        className="mt-4 px-6 py-1 font-bold text-[#1E40AF] underline underline-offset-2 hover:text-[#4583DA] transition-colors duration-200"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {btnLabel}
      </button>
    </div>
  );

  const textBlock = (
    <div
      className={`flex-1 text-left ${imageLeft ? "anim-right" : "anim-left"}`}
      style={{ animationDelay: `calc(${cardDelay} + 0.15s)` }}
    >
      {/* Eyebrow line */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className="anim-line h-0.5 rounded-full bg-[#1E40AF]"
          style={{ animationDelay: `calc(${cardDelay} + 0.3s)` }}
        />
        <span
          className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#1E40AF]"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Message
        </span>
      </div>

      <h2
        className="text-3xl font-medium mb-8 heading-hover cursor-default"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>

      <p
        className="text-lg leading-relaxed max-w-[600px] text-gray-700"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {message}
      </p>

      {/* Divider */}
      <div
        className="mt-6 mb-4 h-px max-w-[300px] rounded-full"
        style={{ background: "linear-gradient(90deg, #93c5fd 0%, transparent 100%)" }}
      />

      <div
        className="mt-2 text-base font-semibold text-[#04162F]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {name}
      </div>
      <p
        className="text-[15px] font-medium text-[#4583DA]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {role}
      </p>
    </div>
  );

  return (
    <div
      ref={ref}
      className={`card-wrap rounded-2xl shadow-md p-10 flex items-start gap-10 ${inView ? "running" : "paused"}`}
      style={{
        background: "linear-gradient(135deg, #dbeafe 0%, #BFD9FF 60%, #c7d9f5 100%)",
        border: "1.5px solid #bfdbfe",
        boxShadow: "0 8px 40px rgba(30,64,175,0.08), 0 2px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 20px 60px rgba(30,64,175,0.16), 0 4px 16px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 40px rgba(30,64,175,0.08), 0 2px 8px rgba(0,0,0,0.05)";
      }}
    >
      {imageLeft ? <>{imgBlock}{textBlock}</> : <>{textBlock}{imgBlock}</>}
    </div>
  );
};

// ── Main ─────────────────────────────────────────────────────────────────────
const AuthorityMessages: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView(0.2);

  return (
    <section className="w-full bg-white pb-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes revealLine {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }
        @keyframes shimmerHeading {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* Per-card animation control */
        .paused .anim-left,
        .paused .anim-right,
        .paused .anim-up,
        .paused .anim-line  { animation-play-state: paused !important; }

        .running .anim-left  { animation: fadeSlideLeft  0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .running .anim-right { animation: fadeSlideRight 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .running .anim-up    { animation: fadeSlideUp    0.65s ease both; }
        .running .anim-line  { animation: revealLine     0.55s ease both; }

        /* Section heading */
        .sect-paused .anim-up,
        .sect-paused .anim-line { animation-play-state: paused !important; }
        .sect-running .anim-up   { animation: fadeSlideUp 0.65s ease both; }
        .sect-running .anim-line { animation: revealLine  0.55s ease both; animation-delay: 0.2s; }

        .heading-hover:hover {
          background: linear-gradient(90deg, #04162F 20%, #1E40AF 50%, #04162F 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerHeading 1.8s linear infinite;
        }
      `}</style>

      <div className="max-w-[1920px] mx-auto px-24 space-y-8">

        {/* ── Section Header ── */}
        <div
          ref={headRef}
          className={`text-center mb-4 ${headInView ? "sect-running" : "sect-paused"}`}
        >
          <div className="anim-up flex items-center justify-center gap-3 mb-4" style={{ animationDelay: "0.05s" }}>
            <div className="anim-line h-0.5 rounded-full bg-[#1E40AF]" style={{ width: "48px" }} />
            <span
              className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#1E40AF]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Leadership
            </span>
            <div className="anim-line h-0.5 rounded-full bg-[#1E40AF]" style={{ width: "48px" }} />
          </div>
          <h1
            className="anim-up text-4xl font-semibold text-[#04162F]"
            style={{ fontFamily: "'Playfair Display', serif", animationDelay: "0.15s" }}
          >
            Messages from Our Authority
          </h1>
          <div className="flex justify-center items-center gap-2 mt-3">
            <div className="w-10 h-px bg-[#1E40AF]/30" />
            <div className="w-2 h-2 rounded-full bg-[#1E40AF]/40" />
            <div className="w-10 h-px bg-[#1E40AF]/30" />
          </div>
        </div>

        {/* ── Card 1 — Chairman ── */}
        <MessageCard
          imageLeft
          title="Chairman's Message"
          message="We welcome students, parents, and teachers to our institution dedicated to academic excellence, character building, innovation, and community service, ensuring holistic growth, safe learning, modern facilities, bright futures for everyone."
          name="The Rt. Rev. Dr. Paritosh Canning"
          role="– Bishop of Calcutta & Chairman"
          btnLabel="Dr. Paritosh Canning"
          imgAlt="Chairman"
          cardDelay="0s"
        />

        {/* ── Card 2 — Principal ── */}
        <MessageCard
          imageLeft={false}
          title="Principal's Address"
          message="We welcome students, parents, and teachers to our institution dedicated to academic excellence, character building, innovation, and community service, ensuring holistic growth, safe learning, modern facilities, bright futures for everyone."
          name="The Rt. Rev. Dr. Paritosh Canning"
          role="– Bishop of Calcutta & Chairman"
          btnLabel="Dr. Paritosh Canning"
          imgAlt="Principal"
          cardDelay="0s"
        />

        {/* ── Card 3 — Vice Principal ── */}
        <MessageCard
          imageLeft
          title="Vice Principal's Address"
          message="We welcome students, parents, and teachers to our institution dedicated to academic excellence, character building, innovation, and community service, ensuring holistic growth, safe learning, modern facilities, bright futures for everyone."
          name="The Rt. Rev. Dr. Paritosh Canning"
          role="– Bishop of Calcutta & Chairman"
          btnLabel="Dr. Paritosh Canning"
          imgAlt="Vice Principal"
          cardDelay="0s"
        />

      </div>
    </section>
  );
};

export default AuthorityMessages;