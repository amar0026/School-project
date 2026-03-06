import React, { useEffect, useRef, useState } from "react";
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
        @keyframes fadeLeft {
          from {opacity:0; transform:translateX(-60px)}
          to {opacity:1; transform:translateX(0)}
        }

        @keyframes fadeRight {
          from {opacity:0; transform:translateX(60px)}
          to {opacity:1; transform:translateX(0)}
        }

        @keyframes fadeUp {
          from {opacity:0; transform:translateY(40px)}
          to {opacity:1; transform:translateY(0)}
        }

        .imgAnim { animation: fadeLeft .8s ease forwards }
        .textAnim { animation: fadeRight .8s ease forwards }
        .paraAnim { animation: fadeUp .8s ease forwards; animation-delay:.3s }

        .paused * {animation-play-state: paused !important}
        .running * {animation-play-state: running}
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-center gap-12 ${
            inView ? "running" : "paused"
          }`}
        >

          {/* LEFT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center relative">

            <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-blue-100 rounded-full blur-3xl"></div>

            <img
              src={success}
              alt="student success"
              className="imgAnim w-[280px] sm:w-[350px] md:w-[420px] lg:w-[480px] relative z-10"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full lg:w-1/2">

            {/* heading line */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#4583DA]"></div>

              <span className="text-xs tracking-[4px] font-semibold text-[#4583DA] uppercase">
                About Us
              </span>
            </div>

            {/* heading */}
            <h2 className="textAnim text-3xl sm:text-4xl md:text-5xl text-[#4583DA] font-serif leading-tight">
              Guiding Your Kids <br />
              To Be Success <br />
              Generation
            </h2>

            {/* paragraph */}
            <p className="paraAnim text-gray-500 text-base md:text-lg leading-relaxed mt-6 max-w-[500px]">
              We offer both Bengali and English as the medium of teaching and
              learning. Our English medium section started its journey in 2013.
            </p>

            {/* button + call */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">

              <button className="px-7 py-3 bg-[#313567] text-white  rounded-xl shadow-lg hover:scale-105 transition">
                About Us
              </button>

              <p className="text-lg">
                <span className="text-red-500 font-medium">Call us :</span>{" "}
                +91 12345 67890
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;