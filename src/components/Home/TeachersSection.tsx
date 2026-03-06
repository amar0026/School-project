import React from "react";
import teacher from "../../assets/teacher.png";

const TeachersSection: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto text-center px-24">
        {/* Heading */}
        <h2 className="text-5xl text-[#04162F] mb-12">Our Talented Teachers</h2>

        {/* Teachers Row */}
        <div className="flex justify-center gap-20 flex-wrap">
          {/* Teacher Card 1 */}
          <div className="text-center">
            <img
              src={teacher}
              alt="Teacher"
              className="w-[285px] h-[285px] mx-auto"
            />
            <p className="mt-4 text-2xl text-[#04162F]">Asr Tech</p>
            <p className="text-lg text-[#868686] mt-1">Headmaster</p>
          </div>

          {/* Teacher Card 2 */}
          <div className="text-center">
            <img
              src={teacher}
              alt="Teacher"
              className="w-[285px] h-[285px] mx-auto"
            />
            <p className="mt-4 text-2xl text-[#04162F]">Asr Tech</p>
            <p className="text-lg text-[#868686] mt-1">Math Teacher</p>
          </div>

          {/* Teacher Card 3 */}
          <div className="text-center">
            <img
              src={teacher}
              alt="Teacher"
              className="w-[285px] h-[285px] mx-auto"
            />
            <p className="mt-4 text-2xl text-[#04162F]">Asr Tech</p>
            <p className="text-lg text-[#868686] mt-1">English Teacher</p>
          </div>

          {/* Teacher Card 4 */}
          <div className="text-center">
            <img
              src={teacher}
              alt="Teacher"
              className="w-[285px] h-[285px] mx-auto"
            />
            <p className="mt-4 text-2xl text-[#04162F]">Asr Tech</p>
            <p className="text-lg text-[#868686] mt-1">Bengali Teacher</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button
            className="px-8 py-2 rounded-md bg-yellow-400 text-white text-sm font-medium"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25) inset",
            }}
          >
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
