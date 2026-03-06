import React from "react";
import banner from "../../assets/Ellipse 1.png";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto relative">
        
        {/* Hero Background */}
        <div className="relative w-full 
        h-[250px] 
        sm:h-[350px] 
        md:h-[450px] 
        lg:h-auto 
        xl:h-auto">

          {/* Background Image */}
          <img
            src={banner}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;