import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import about from "../../assets/Rectangle 4571.png";

function useInView(threshold = 0.15) {
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

// ── Repeating Typewriter ──────────────────────────────────────────────────────
const TypewriterTitle: React.FC<{ start: boolean }> = ({ start }) => {
  const fullText = "Developing";
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (start) setTyping(true);
  }, [start]);

  useEffect(() => {
    if (!typing) return;

    if (displayed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed(fullText.slice(0, displayed.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }

    // Fully typed — wait 5s then reset
    const restart = setTimeout(() => {
      setDisplayed("");
    }, 5000);
    return () => clearTimeout(restart);
  }, [typing, displayed]);

  return (
    <h2 className="dev-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#313567] leading-snug">
      {displayed}
      <span className="inline-block w-[2px] h-[0.75em] bg-[#313567] align-middle ml-[2px] animate-pulse" />
    </h2>
  );
};

const Developing: React.FC = () => {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white pb-10 sm:pb-14 md:pb-16">
      <style>{`
        @keyframes dev-fadeLeft {
          0%    { opacity:0; transform:translateX(-50px); }
          13.8% { opacity:1; transform:translateX(0); }
          100%  { opacity:1; transform:translateX(0); }
        }
        @keyframes dev-fadeRight {
          0%    { opacity:0; transform:translateX(50px); }
          13.8% { opacity:1; transform:translateX(0); }
          100%  { opacity:1; transform:translateX(0); }
        }
        @keyframes dev-fadeUp {
          0%    { opacity:0; transform:translateY(36px); }
          13.8% { opacity:1; transform:translateY(0); }
          100%  { opacity:1; transform:translateY(0); }
        }
        @keyframes dev-scaleIn {
          0%    { opacity:0; transform:scale(0.93); }
          13.8% { opacity:1; transform:scale(1); }
          100%  { opacity:1; transform:scale(1); }
        }

        .dev-paused .dev-title,
        .dev-paused .dev-para,
        .dev-paused .dev-img,
        .dev-paused .dev-bottom,
        .dev-paused .dev-card  { animation-play-state: paused !important; }

        .dev-running .dev-title  {
          animation: dev-fadeLeft  5.8s ease infinite;
          animation-delay: -5.8s;
        }
        .dev-running .dev-para   {
          animation: dev-fadeLeft  5.8s ease infinite;
          animation-delay: -5.65s;
        }
        .dev-running .dev-img    {
          animation: dev-fadeRight 5.8s ease infinite;
          animation-delay: -5.7s;
        }
        .dev-running .dev-bottom {
          animation: dev-fadeUp   5.8s ease infinite;
          animation-delay: -5.5s;
        }
        .dev-running .dev-card   {
          animation: dev-scaleIn  5.8s ease infinite;
          animation-delay: -5.35s;
        }
      `}</style>

      <div
        ref={ref}
        className={`max-w-[1920px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20 ${
          inView ? "dev-running" : "dev-paused"
        }`}
      >
        {/* ── TOP: Text + Image ── */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 md:pt-8 lg:pt-12">

            {/* ✅ Only this line changed */}
            <TypewriterTitle start={inView} />

            <p className="dev-para text-base sm:text-lg md:text-xl text-[#000000CC] mt-5 sm:mt-6 md:mt-8 leading-relaxed">
              With the interest and effort of some good souls this school was
              established in 1959. The land (10 Kottah equivalent to 7200 Sqft
              approx) was allotted by the then Dum Dum Park Board (Krishsapur
              Refugee Co-operative Colony ltd) as well as money to build a
              building. The school initially was known as KG School. Some names
              should be mentioned here are{" "}
              <span className="font-semibold">
                Satinath Datta, Dr. Sourendranath Ghosh, Monorojon Pal, Dr.
                Haripada Bhattacharya, Bidyanath Das, Naliniranjan Sarkar,
                Satishchandra Dey, Harisadhan Chattopadhyay, Binod Behari Deb,
                Manilal Gangopadhyay, Krishnakumar Mitra, Sunil Kumar
                Mukhopadhyay, Sudhirchandra Sen, Sushil Kumar Mukhopadhyay, Amit
                Kumar Chattopadhyay, Manishchandra Nandy, Kalyan Sen
              </span>{" "}
              etc.
            </p>
          </div>

          {/* Right: Image */}
          <div className="dev-img w-full md:w-1/2">
            <img
              src={about}
              alt="Mission Student"
              className="w-full h-56 sm:h-80 md:h-[480px] lg:h-[630px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* ── BOTTOM: Description ── */}
        <div className="dev-bottom mt-10 sm:mt-12 md:mt-14">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000CC] leading-relaxed">
            Once again, The present president of the Board, Dr. Swapan Ghosh and the
            secretary Mr Ranen Ray along with other Board members has funded the
            need extension to school building in this year 2025-26. Here we get
            four more class rooms, wash rooms in 1st floor and an open hall and
            wash rooms and a kitchen for students on the ground floor. School's
            caretaker has got a new room and a separate kitchen. So now we have
            more class rooms to use, one audio-visual room is set to open very
            soon.
          </p>

          {/* Card */}
          <div className="dev-card mt-6 rounded-2xl border border-[#313567]/20 bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] px-6 sm:px-8 md:px-10 py-5 sm:py-6 shadow-sm">
            <div className="w-12 h-1 rounded-full bg-[#037122] mb-4" />
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000CC] leading-relaxed">
              We have multiple plans for the growth of the school. We
              encourage more such well-wishers, individuals and organisations alike
              who will support our children's future. intrested person please{" "}
              <Link
                to="/form"
                className="inline-flex items-center gap-1 text-blue-600 font-bold text-6xl italic sm:text-lg underline underline-offset-2 hover:text-blue-800 transition-colors duration-200"
              >
                Click Here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developing;