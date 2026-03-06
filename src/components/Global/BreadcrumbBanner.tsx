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
      <div className="max-w-[1920px] mx-auto relative overflow-hidden">

        {/* Background Image */}
        <img
          src={bgImage}
          alt="Banner Background"
          className="w-full h-32 sm:h-48 md:h-60 lg:h-auto object-cover"
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="text-[#FFBB12] text-sm sm:text-xl md:text-2xl lg:text-[36px] mt-1">
            {subtitle}
          </p>
        </div>

      </div>
    </section>
  );
};

export default BreadcrumbBanner;