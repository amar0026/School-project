import React, { useEffect, useRef, useState } from "react";
import success from "../../assets/Group 2109.png";

// ── Hook: triggers once when element enters viewport ─────────────────────────
function useInView(threshold = 0.2) {
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

const AboutSection: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white pb-16 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-14px); }
        }
        @keyframes revealLine {
          from { width: 0; }
          to   { width: 48px; }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.7); }
          70%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        /* ── Animation classes ── */
        .anim-img        { animation: fadeSlideLeft  0.8s cubic-bezier(.22,.68,0,1.2) both; }
        .anim-eyebrow    { animation: fadeSlideUp    0.6s ease both; animation-delay: 0.15s; }
        .anim-heading    { animation: fadeSlideRight 0.75s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.25s; }
        .anim-line       { animation: revealLine     0.6s ease both; animation-delay: 0.6s; }
        .anim-para       { animation: fadeSlideUp    0.6s ease both; animation-delay: 0.45s; }
        .anim-btn        { animation: popIn          0.55s cubic-bezier(.22,.68,0,1.2) both; animation-delay: 0.65s; }
        .anim-call       { animation: fadeSlideUp    0.5s ease both; animation-delay: 0.8s; }
        .anim-deco1      { animation: popIn          0.7s ease both; animation-delay: 0.9s; }
        .anim-deco2      { animation: popIn          0.7s ease both; animation-delay: 1.1s; }

        /* Float only after entry */
        .float-img       { animation: floatY 5s ease-in-out infinite; animation-delay: 1s; }

        /* Pause all until inView */
        .paused *        { animation-play-state: paused !important; }
        .running *       { animation-play-state: running; }

        /* Shimmer on hover for heading */
        .shimmer-text:hover {
          background: linear-gradient(90deg, #4583DA 20%, #1E40AF 40%, #4583DA 60%, #93c5fd 80%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 1.6s linear infinite;
        }

        /* Button glow pulse */
        .btn-pulse:hover {
          box-shadow: 0 0 0 0 rgba(49,53,103,0.4);
          animation: btnGlow 1s ease-out infinite;
        }
        @keyframes btnGlow {
          0%   { box-shadow: 0 0 0 0   rgba(49,53,103,0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(49,53,103,0);   }
          100% { box-shadow: 0 0 0 0   rgba(49,53,103,0);    }
        }
      `}</style>

      <div className="max-w-[1920px] mx-auto px-24">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row w-full ${inView ? "running" : "paused"}`}
        >

          {/* ── Left: Image ─────────────────────────────────────────── */}
          <div className="w-1/2 flex justify-center items-center relative">

            {/* Decorative blurred blob behind image */}
            <div
              className="anim-deco1 absolute w-72 h-72 rounded-full -z-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(69,131,218,0.12) 0%, transparent 70%)",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* Decorative ring */}
            <div
              className="anim-deco2 absolute w-[340px] h-[340px] rounded-full border border-[#4583DA]/10 pointer-events-none"
              style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />

            <div className="anim-img float-img relative z-10">
              <img
                src={success}
                alt="Child"
                className="w-[500px] h-auto drop-shadow-xl"
              />
            </div>
          </div>

          {/* ── Right: Text ─────────────────────────────────────────── */}
          <div className="w-1/2 flex justify-start items-center">
            <div className="max-w-[520px]">

              {/* Eyebrow label */}
              <div className="anim-eyebrow flex items-center gap-3 mb-4">
                <div
                  className="anim-line h-0.5 bg-[#4583DA] rounded-full"
                  style={{ width: "48px" }}
                />
                <span
                  className="text-[11px] font-bold tracking-[0.28em] uppercase text-[#4583DA]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  About Us
                </span>
              </div>

              {/* Heading */}
              <h2
                className="anim-heading shimmer-text text-5xl text-[#4583DA] leading-snug cursor-default"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Guiding Your Kids <br />
                To Be Success <br />
                Generation.
              </h2>

              {/* Paragraph */}
              <p
                className="anim-para text-[#818181] text-lg leading-loose tracking-wider mt-6 max-w-[360px]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                We offer both Bengali and English as the medium of teaching and
                learning. Our English medium section started its journey in
                2013.
              </p>

              {/* Button + Call */}
              <div className="flex items-center gap-6 mt-10">

                {/* About Button */}
                <button
                  className="btn-glow btn-pulse px-8 py-3 rounded-2xl bg-[#313567] text-white text-lg transition-all duration-200
                    active:scale-95 active:shadow-inner hover:brightness-110 cursor-pointer"
                  style={{
                    boxShadow: "0 4px 14px rgba(49,53,103,0.30)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  About us
                </button>

                {/* Call */}
                <p
                  className="anim-call text-lg text-black"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="text-[#E74C3C] font-medium">Call us :</span>{" "}
                  +9112345 67890
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;