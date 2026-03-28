import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import success from "../../assets/Group 2109.png";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
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
    <section className="w-full bg-white py-16 overflow-hidden">
      <style>{`
        /*
         * Each animation plays for 0.8s, then stays visible.
         * Total cycle = 5s (pause) + 0.8s (animate) = 5.8s
         * animation-delay is negative so it starts mid-cycle correctly.
         *
         * Pattern:
         *   animation: NAME 10.8s ease infinite;
         *   animation-delay: -(10.8s - own-delay)
         *
         * This means: element animates at its stagger offset,
         * then holds for ~10s, then repeats.
         */

        @keyframes fadeLeft {
          0%      { opacity:0; transform:translateX(-60px) }
          7.4%    { opacity:1; transform:translateX(0) }
          100%    { opacity:1; transform:translateX(0) }
        }
        @keyframes fadeRight {
          0%      { opacity:0; transform:translateX(60px) }
          7.4%    { opacity:1; transform:translateX(0) }
          100%    { opacity:1; transform:translateX(0) }
        }
        @keyframes fadeUp {
          0%      { opacity:0; transform:translateY(40px) }
          7.4%    { opacity:1; transform:translateY(0) }
          100%    { opacity:1; transform:translateY(0) }
        }
        @keyframes fadeIn {
          0%      { opacity:0 }
          7.4%    { opacity:1 }
          100%    { opacity:1 }
        }
        @keyframes scaleIn {
          0%      { opacity:0; transform:scale(0.85) }
          7.4%    { opacity:1; transform:scale(1) }
          100%    { opacity:1; transform:scale(1) }
        }
        @keyframes slideUpFade {
          0%      { opacity:0; transform:translateY(30px) }
          7.4%    { opacity:1; transform:translateY(0) }
          100%    { opacity:1; transform:translateY(0) }
        }

        /* cycle = 10.8s, delay offsets match original stagger */
        .imgAnim   { opacity:0; animation: fadeLeft    10.8s ease infinite; animation-delay: -10.8s; }
        .textAnim  { opacity:0; animation: fadeRight   10.8s ease infinite; animation-delay: -10.8s; }
        .paraAnim  { opacity:0; animation: fadeUp      10.8s ease infinite; animation-delay: -10.5s; }
        .lineAnim  { opacity:0; animation: scaleIn     10.8s ease infinite; animation-delay: -10.7s; }
        .badgeAnim { opacity:0; animation: fadeIn      10.8s ease infinite; animation-delay: -10.6s; }
        .btnAnim   { opacity:0; animation: slideUpFade 10.8s ease infinite; animation-delay: -10.3s; }
        .callAnim  { opacity:0; animation: slideUpFade 10.8s ease infinite; animation-delay: -10.15s; }
        .blobAnim  { opacity:0; animation: scaleIn     10.8s ease infinite; animation-delay: -10.7s; }

        .paused .imgAnim,
        .paused .textAnim,
        .paused .paraAnim,
        .paused .lineAnim,
        .paused .badgeAnim,
        .paused .btnAnim,
        .paused .callAnim,
        .paused .blobAnim  { animation-play-state: paused !important }

        .running .imgAnim,
        .running .textAnim,
        .running .paraAnim,
        .running .lineAnim,
        .running .badgeAnim,
        .running .btnAnim,
        .running .callAnim,
        .running .blobAnim { animation-play-state: running }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            inView ? "running" : "paused"
          }`}
        >
          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="blobAnim absolute w-60 h-60 md:w-72 md:h-72 bg-blue-100 rounded-full blur-3xl" />
            <img
              src={success}
              alt="student success"
              className="imgAnim w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] relative z-10"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="lineAnim w-10 h-[2px] bg-[#4583DA]" />
              <span className="badgeAnim text-xs tracking-[4px] font-semibold text-[#4583DA] uppercase">
                About Us
              </span>
            </div>

            <h2 className="textAnim text-3xl sm:text-4xl md:text-5xl text-[#4583DA] font-serif leading-tight">
              Guiding your kids towords success
            </h2>

            <p className="paraAnim text-gray-500 text-base md:text-lg leading-relaxed mt-6 max-w-[500px]">
              We provide quality education to our students. Established in 1959, this is a co-educational<br/>institution committed to academic excellence.<br/> We focus on discipline and overall development<br/> to help students grow into confident and<br/> responsible individuals.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
              <Link
                to="/about"
                className="btnAnim px-7 py-3 bg-[#313567] text-white rounded-xl shadow-lg hover:scale-105 transition"
              >
                About Us
              </Link>

              <p className="callAnim text-lg">
                <span className="text-red-500 font-medium">Call us :</span>{" "}
                (+91)033 2590 9090
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;