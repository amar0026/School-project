import React from "react";
import banner from "../../assets/Ellipse 1.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto relative">
        {/* Hero Background */}
        <div className="relative w-full mb-11 h-[650px] ">
          {/* Background Image (IMG tag as you wanted) */}
          <img src={banner} alt="Hero Background" className="w-full h-full  " />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
