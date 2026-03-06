import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../../assets/galleryimage.jpg";
import img2 from "../../assets/speachimg.jpg";
import img3 from "../../assets/sarswatipuja (1).jpg";
import img4 from "../../assets/dayshift.jpg";
import img5 from "../../assets/englishmedium.jpg";

/* ── InView Hook ─────────────────────────────────────────── */
function useInView(threshold = 0.1) {
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

/* ── Lightbox ───────────────────────────────────────────── */
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
    onClick={onClose}
  >
    <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onClose}
        className="absolute -top-10 right-0 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 text-white transition-all text-base"
      >✕</button>
      <img src={src} alt="Gallery" className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl" />
    </div>
  </div>
);

/* ── Image Tile ──────────────────────────────────────────── */
const ImageTile: React.FC<{
  src: string;
  index: number;
  className?: string;
  onClick: () => void;
}> = ({ src, index, className = "", onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`tile relative overflow-hidden rounded-2xl cursor-pointer ${className}`}
      style={{ animationDelay: `${0.3 + index * 0.1}s`, boxShadow: "0 4px 20px rgba(0,0,0,0.10)" }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={`Gallery ${index + 1}`}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.10)" : "scale(1)",
          transition: "transform 0.7s cubic-bezier(.22,.68,0,1.2)",
        }}
      />
      <div className="absolute inset-0" style={{ background: hovered ? "rgba(33,193,215,0.22)" : "rgba(33,193,215,0)", transition: "background 0.35s ease" }} />
      <div className="absolute inset-0 flex items-center justify-center" style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease", pointerEvents: "none" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          padding: "8px 20px", borderRadius: "9999px",
          background: "rgba(255,255,255,0.93)", color: "#1E40AF",
          fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em",
          textTransform: "uppercase", boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
          backdropFilter: "blur(6px)",
          transform: hovered ? "scale(1)" : "scale(0.85)",
          transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2)",
        }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View
        </div>
      </div>
    </div>
  );
};

/* ── Main Component ──────────────────────────────────────── */
const LatestGallery: React.FC = () => {
  const images = [img1, img2, img3, img4, img5];
  const { ref, inView } = useInView(0.1);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="w-full bg-white  px-6 lg:px-8 xl:px-10  pb-12 sm:pb-16  overflow-hidden">
      <style>{`
        @keyframes tileIn {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .paused .tile { animation-play-state: paused !important; }
        .running .tile { animation: tileIn 0.6s cubic-bezier(.22,.68,0,1.2) both; }
      `}</style>

      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-14 lg:px-20">
        <div ref={ref} className={inView ? "running" : "paused"}>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-0.5 w-10 bg-[#1E40AF]" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-400">School Memories</span>
              <div className="h-0.5 w-10 bg-[#1E40AF]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1E40AF] font-semibold">
              Our Latest Gallery
            </h2>
          </div>

          {/* ── Mobile & Tablet (hidden on lg+) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
            {/* img1: full width feature */}
            <ImageTile src={images[0]} index={0} className="h-56 sm:col-span-2 sm:h-64" onClick={() => setLightbox(images[0])} />
            {/* img2–img5: 2-col grid */}
            <ImageTile src={images[1]} index={1} className="h-44 sm:h-52" onClick={() => setLightbox(images[1])} />
            <ImageTile src={images[2]} index={2} className="h-44 sm:h-52" onClick={() => setLightbox(images[2])} />
            <ImageTile src={images[3]} index={3} className="h-44 sm:h-52" onClick={() => setLightbox(images[3])} />
            <ImageTile src={images[4]} index={4} className="h-44 sm:h-52" onClick={() => setLightbox(images[4])} />
          </div>

          {/* ── Desktop 12-col mosaic (hidden below lg) ──
               5 images layout:
               Row 1: img1 (spans 2 rows, col 1–5) | img2 (col 6–9) | img3 (col 10–12)
               Row 2: img1 continues              | img4 (col 6–9) | img5 (col 10–12)
          ── */}
          <div
            className="hidden lg:grid grid-cols-12 gap-3"
            style={{ gridTemplateRows: "230px 230px" }}
          >
            {/* Large feature tile — left, spans both rows */}
            <ImageTile src={images[0]} index={0} className="col-span-5 row-span-2" onClick={() => setLightbox(images[0])} />
            {/* Row 1 right */}
            <ImageTile src={images[1]} index={1} className="col-span-4" onClick={() => setLightbox(images[1])} />
            <ImageTile src={images[2]} index={2} className="col-span-3" onClick={() => setLightbox(images[2])} />
            {/* Row 2 right */}
            <ImageTile src={images[3]} index={3} className="col-span-4" onClick={() => setLightbox(images[3])} />
            <ImageTile src={images[4]} index={4} className="col-span-3" onClick={() => setLightbox(images[4])} />
          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-end mt-8 sm:mt-10">
            <Link
              to="/gallery"
              className="flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-2xl bg-[#313567] text-white text-base sm:text-lg hover:scale-105 transition"
            >
              View More
              <ChevronRight size={20} />
            </Link>
          </div>

        </div>
      </div>

      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
};

export default LatestGallery;