import { useEffect, useRef, useState } from "react";
import AuthorityMessages from "../components/About/AuthorityMessages";

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
const classData = [
  { level: "Play Group",   age: "2 years plus (English Medium)" },
  { level: "Nursery",      age: "3 years plus ( Both )" },
  { level: "L KG / KG 1", age: "4 years ( LKG – English / KG 1 – Bengali )" },
  { level: "U KG / KG 2", age: "5 years ( UKG – English / KG 2 – Bengali )" },
  { level: "Class 1",      age: "6 years ( Both )" },
  { level: "Class 2",      age: "7 years ( Both )" },
  { level: "Class 3",      age: "8 years ( Both )" },
  { level: "Class 4",      age: "9 years ( Both )" },
  { level: "Class 5",      age: "10 years Plus ( Bengali medium only )" },
];

// ── Shift row helper ──────────────────────────────────────────────────────────
const ShiftRow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    className="flex items-start gap-3 px-4 py-3 rounded-xl"
    style={{
      background: "linear-gradient(90deg, #eff6ff 0%, #f8faff 100%)",
      border: "1px solid #dbeafe",
      transition: "box-shadow 0.25s ease, transform 0.25s cubic-bezier(.22,.68,0,1.2)",
    }}
    onMouseEnter={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = "0 4px 16px rgba(30,64,175,0.12)";
      el.style.transform = "translateX(4px)";
    }}
    onMouseLeave={e => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.boxShadow = "";
      el.style.transform = "";
    }}
  >
    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
    <p className="text-slate-700 text-sm md:text-base font-medium leading-snug">{children}</p>
  </div>
);

// ── Main ─────────────────────────────────────────────────────────────────────
const Academic2 = () => {
  const { ref: titleRef,   inView: titleIn   } = useInView(0.2);
  const { ref: tableRef,   inView: tableIn   } = useInView(0.1);
  const { ref: bengaliRef, inView: bengaliIn } = useInView(0.15);
  const { ref: englishRef, inView: englishIn } = useInView(0.15);

  return (
    <section
      className="w-full min-h-screen  bg-slate-50 py-10 sm:py-14 px-0 overflow-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

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
          to   { width: 96px; opacity: 1; }
        }
        @keyframes tileIn {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerHeading {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .title-p .anim-up, .title-p .anim-left, .title-p .anim-line
          { animation-play-state: paused !important; }
        .title-r .anim-up   { animation: fadeSlideUp   0.65s ease both; }
        .title-r .anim-left { animation: fadeSlideLeft 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .title-r .anim-line { animation: revealLine    0.55s ease both; }

        .table-p .anim-card, .table-p .tile
          { animation-play-state: paused !important; }
        .table-r .anim-card { animation: cardReveal 0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .table-r .tile      { animation: tileIn     0.5s cubic-bezier(.22,.68,0,1.2) both; }

        .bengali-p .anim-left, .bengali-p .anim-up, .bengali-p .anim-line
          { animation-play-state: paused !important; }
        .bengali-r .anim-left { animation: fadeSlideLeft 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .bengali-r .anim-up   { animation: fadeSlideUp   0.65s ease both; }
        .bengali-r .anim-line { animation: revealLine    0.55s ease both; }

        .english-p .anim-right, .english-p .anim-up, .english-p .anim-line
          { animation-play-state: paused !important; }
        .english-r .anim-right { animation: fadeSlideRight 0.75s cubic-bezier(.22,.68,0,1.2) both; }
        .english-r .anim-up    { animation: fadeSlideUp    0.65s ease both; }
        .english-r .anim-line  { animation: revealLine     0.55s ease both; }

        .hdg-hover:hover {
          background: linear-gradient(90deg, #312e81 15%, #4583DA 50%, #312e81 85%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerHeading 2s linear infinite;
        }
      `}</style>

      

      {/* shared horizontal padding for all sections below */}
      <div className="   px-4 sm:px-8 md:px-14 lg:px-20">

        {/* ══ PAGE TITLE ══════════════════════════════════════════════════════ */}
        <div
          ref={titleRef}
          className={`mb-8 sm:mb-10 ${titleIn ? "title-r" : "title-p"}`}
        >
          <div className="anim-up flex items-center gap-3 mb-4" style={{ animationDelay: "0s" }}>
            <div
              className="anim-line h-0.5 rounded-full bg-indigo-900"
              style={{ width: "48px", animationDelay: "0.2s" }}
            />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-900">
              Curriculum
            </span>
          </div>

          <h1
            className="anim-left hdg-hover text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 tracking-tight cursor-default"
            style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.1s" }}
          >
            Academic
          </h1>
          <div
            className="anim-line block h-1 bg-red-700 mt-2 rounded-full"
            style={{ width: "96px", animationDelay: "0.3s" }}
          />

          <p
            className="anim-up text-slate-600 text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            We have both Bengali medium and English medium as a method of Teaching. Bengali medium
            has two shifts:{" "}
            <span className="font-semibold text-slate-700">Morning Shift</span> and{" "}
            <span className="font-semibold text-slate-700">Day Shift</span>.
          </p>
        </div>

        {/* ══ TABLE CARD ══════════════════════════════════════════════════════ */}
        <div
          ref={tableRef}
          className={`mb-10 sm:mb-12 w-full max-w-3xl ${tableIn ? "table-r" : "table-p"}`}
        >
          <div
            className="anim-card bg-white rounded-2xl border border-slate-200 overflow-hidden"
            style={{
              boxShadow: "0 8px 40px rgba(30,64,175,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              animationDelay: "0.05s",
            }}
          >
            {/* Card Header */}
            <div
              className="border-l-4 border-blue-600 px-4 sm:px-6 py-3 sm:py-4"
              style={{ background: "linear-gradient(90deg, #f8faff 0%, #f1f5f9 100%)" }}
            >
              <h2
                className="text-sm sm:text-base md:text-lg font-bold text-slate-800"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Class ( English medium / Bengali medium )
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 tracking-wide">
                AGE LIMIT: 1st March / 1st January
              </p>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {classData.map((row, i) => (
                <div
                  key={i}
                  className="tile flex items-start sm:items-center gap-2 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 group"
                  style={{
                    animationDelay: `${0.1 + i * 0.06}s`,
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#eff6ff"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = ""}
                >
                  <span
                    className="w-24 sm:w-32 text-slate-700 font-semibold text-xs sm:text-sm md:text-base shrink-0"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {row.level}
                  </span>
                  <span className="text-blue-400 text-sm sm:text-base select-none transition-transform duration-300 group-hover:translate-x-1 hidden sm:inline">
                    →
                  </span>
                  <span className="text-slate-600 text-xs sm:text-sm md:text-base leading-snug" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {row.age}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ BENGALI MEDIUM ══════════════════════════════════════════════════ */}
        <div
          ref={bengaliRef}
          className={`mb-8 sm:mb-10 w-full max-w-3xl ${bengaliIn ? "bengali-r" : "bengali-p"}`}
        >
          <div
            className="anim-left inline-flex items-center gap-2 bg-indigo-900 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg mb-4 sm:mb-5 tracking-wide shadow"
            style={{ animationDelay: "0s" }}
          >
            <span>বাংলা মাধ্যম</span>
          </div>

          <p
            className="anim-up text-slate-600 text-sm md:text-base leading-relaxed mb-4"
            style={{ animationDelay: "0.15s" }}
          >
            শিশুমন বিকাশের এই বিদ্যানিকেতনে নার্সারি থেকে পঞ্চম শ্রেণি পর্যন্ত পড়ার ব্যবস্থা আছে।
            পাঠ্য-পাঠনের সঙ্গে থাকে সহপাঠের ইংলিশ, কম্পিউটার, সংগীত, অঙ্কন, শরীর শিক্ষা ইত্যাদি
            সমস্ত সহশিক্ষা কার্যক্রম। আমরা ওয়েস্ট বেঙ্গল বোর্ড অফ সেকেন্ডারি এডুকেশন পাঠক্রম
            স্কুলে ভর্তি হওয়ার প্রস্তুতি করিয়ে থাকি।
          </p>

          <div
            className="anim-up flex flex-col gap-2"
            style={{ animationDelay: "0.28s" }}
          >
            <ShiftRow>
              প্রাতঃ বিভাগ শুরু{" "}
              <span className="text-blue-700 font-bold">07:15 am </span>{" "}
              <span className="text-slate-400">( শীতকালে )</span>
            </ShiftRow>
            <ShiftRow>
              দিবা বিভাগ শুরু{" "}
              <span className="text-blue-700 font-bold">11:30 am</span>
            </ShiftRow>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="flex items-center gap-3 max-w-3xl my-8 sm:my-10">
          <div className="flex-1 h-px bg-slate-200 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex-1 h-px bg-slate-200 rounded-full" />
        </div>

        {/* ══ ENGLISH MEDIUM ══════════════════════════════════════════════════ */}
        <div
          ref={englishRef}
          className={`max-w-3xl pb-4 ${englishIn ? "english-r" : "english-p"}`}
        >
          <div
            className="anim-right inline-flex items-center gap-2 bg-indigo-900 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg mb-4 sm:mb-5 tracking-wide shadow"
            style={{ animationDelay: "0s" }}
          >
            <span>English Medium</span>
          </div>

          <p
            className="anim-up text-slate-600 text-sm md:text-base leading-relaxed mb-4"
            style={{ animationDelay: "0.15s" }}
          >
            Our English medium section started in the year 2013. We have play group to class 4.
            Computer, Music, Drawing, Physical Training, sports etc are included as a part of
            curriculum. Our curriculum prepares students for{" "}
            <span className="font-semibold text-slate-700">CISCE, CBSE and WBBSE</span>. Those who
            are interested in English Medium High School, this schooling will be a good choice for
            them.
          </p>

          <ShiftRow>
            The school hour starts at{" "}
            <span className="text-blue-700 font-bold">08:50 A.M</span>
          </ShiftRow>
        </div>

      </div>{/* end shared padding wrapper */}
      {/* ── Authority Messages ── */}
      <div className="mb-10 sm:mb-12">
        <AuthorityMessages />
      </div>
    </section>
  );
};

export default Academic2;