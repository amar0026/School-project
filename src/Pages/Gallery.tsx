import React, { useState } from "react";

// ── Image imports ─────────────────────────────────────────────────────────────
import img1 from "../assets/galleryimage.jpg";
import img2 from "../assets/englishmedium.jpg";
import img3 from "../assets/morningshiftImage.jpg";
import img4 from "../assets/speachimg.jpg";
import img5 from "../assets/sarswatipuja (1).jpg";
import img6 from "../assets/dayshift.jpg";

// ── Data ─────────────────────────────────────────────────────────────────────
const tabs = [
  "Campus",
  "Events",
 
  "Sports",
  
  "Cultural",
  "Class Activities",
  "Videos",
];

const galleryData: Record<string, { title: string; images: string[] }[]> = {
  Campus: [
    { title: "Teachers' Orientation", images: [img1, img2, img3, img4, img5, img6] },
    { title: "Annual Exhibition", images: [img4, img5, img6, img1, img2, img3] },
  ],
  Events: [
    { title: "Annual Day", images: [img2, img3, img4, img5, img6, img1] },
  ],
 
  Sports: [
    { title: "Sports Meet", images: [img3, img4, img5, img6, img1, img2] },
  ],
  
  Cultural: [
    { title: "Cultural Programme", images: [img1, img5, img3, img6, img2, img4] },
  ],
  "Class Activities": [
    { title: "Classroom Activities", images: [img2, img4, img6, img1, img3, img5] },
  ],
  Videos: [
    { title: "School Reels", images: [img5, img3, img1, img4, img6, img2] },
  ],
};

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox: React.FC<{ src: string; onClose: () => void }> = ({ src, onClose }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
    onClick={onClose}
  >
    <div className="relative max-w-5xl w-full mx-4 sm:mx-6" onClick={(e) => e.stopPropagation()}>
      <button
        onClick={onClose}
        className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all text-lg"
      >
        ✕
      </button>

      <img
        src={src}
        alt="Gallery"
        className="w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
      />
    </div>
  </div>
);

// ── Image Tile ────────────────────────────────────────────────────────────────
const ImageTile: React.FC<{
  src: string;
  alt: string;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt, onClick, className = "", style }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={style}
      className={`overflow-hidden rounded-xl cursor-pointer relative min-h-[110px] sm:min-h-[180px] ${className}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(.22,.68,0,1.2)",
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0)",
          transition: "background 0.35s ease",
        }}
      />

      {/* VIEW pill */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 20px",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.93)",
            color: "#1E40AF",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            boxShadow: "0 6px 24px rgba(0,0,0,0.22)",
            backdropFilter: "blur(6px)",
            fontFamily: "'DM Sans', sans-serif",
            transform: hovered ? "scale(1)" : "scale(0.85)",
            transition: "transform 0.35s cubic-bezier(.22,.68,0,1.2)",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          VIEW
        </div>
      </div>
    </div>
  );
};

// ── Section Block ─────────────────────────────────────────────────────────────
const SectionBlock: React.FC<{
  title: string;
  images: string[];
  onImageClick: (src: string) => void;
}> = ({ title, images, onImageClick }) => (
  <div
    className="rounded-2xl overflow-hidden"
    style={{
      border: "1.5px solid #dbeafe",
      boxShadow: "0 6px 32px rgba(30,64,175,0.07), 0 2px 8px rgba(0,0,0,0.04)",
    }}
  >
    {/* Section Header */}
    <div
      className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4"
      style={{
        background: "linear-gradient(90deg, #eff6ff 0%, #ffffff 100%)",
        borderBottom: "1.5px solid #dbeafe",
      }}
    >
      <div className="w-1.5 h-6 rounded-full bg-[#1E40AF]" />

      <h3
        className="text-base sm:text-lg font-semibold text-[#1E40AF] tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h3>
    </div>

    {/* Mosaic Grid */}
    <div className="p-3 sm:p-4 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">

        {/* First image large */}
        <ImageTile
          src={images[0]}
          alt={title}
          onClick={() => onImageClick(images[0])}
          className="col-span-1 row-span-2 h-full"
          style={{ minHeight: "230px" }}
        />

        {/* Other images */}
        {images.slice(1).map((src, i) => (
          <ImageTile
            key={i}
            src={src}
            alt={`${title} ${i + 2}`}
            onClick={() => onImageClick(src)}
            className="h-28 sm:h-[170px] md:h-[200px]"
          />
        ))}
      </div>
    </div>
  </div>
);

// ── Main Gallery ──────────────────────────────────────────────────────────────
const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Campus");
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const sections = galleryData[activeTab] ?? [];

  return (
    <section
      className="w-full min-h-screen py-10 sm:py-12"
      style={{
        background:
          "linear-gradient(160deg, #f0f6ff 0%, #f8faff 60%, #eef3ff 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">

        {/* Title */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-[11px] sm:text-[13px] font-bold tracking-[0.3em] uppercase text-blue-400 mb-2">
            School Memories
          </p>

          <h2
            className="text-2xl sm:text-4xl font-semibold text-[#1E40AF]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Latest Gallery
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 overflow-x-auto pb-1 mb-6 bg-white rounded-2xl p-2 shadow-sm border border-blue-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold"
              style={
                activeTab === tab
                  ? {
                      background: "#1E40AF",
                      color: "white",
                    }
                  : {
                      color: "#64748b",
                    }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {sections.length > 0 ? (
            sections.map((section, i) => (
              <SectionBlock
                key={i}
                title={section.title}
                images={section.images}
                onImageClick={setLightboxSrc}
              />
            ))
          ) : (
            <div className="bg-white rounded-2xl py-16 text-center border border-blue-100">
              <p className="text-black text-sm">
                No images available for this category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
      )}
    </section>
  );
};

export default Gallery;