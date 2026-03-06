import React from "react";

interface BreadcrumbBannerProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const BreadcrumbBanner: React.FC<BreadcrumbBannerProps> = ({
  title,
  subtitle,
  bgImage,
}) => {
  return (
    <section className="w-full">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto relative overflow-hidden">
        {/* Background Image */}
        <img src={bgImage} alt="Banner Background" className="w-full h-auto" />

        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Main Title */}
          <h2 className="text-white text-5xl font-semibold">{title}</h2>

          {/* Subtitle */}
          <p className="text-[#FFBB12] text-[36px] mt-1">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbBanner;
