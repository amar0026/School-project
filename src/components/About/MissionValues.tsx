import React from "react";
import about from "../../assets/aboutimage.png";

const MissionValues: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto px-24">
        {/* ================= TOP SECTION (Half + Half) ================= */}
        <div className="flex items-start gap-16">
          {/* Left Side Image */}
          <div className="w-1/2">
            <img
              src={about}
              alt="Mission Student"
              className="w-full h-[500px]"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-1/2">
            <h2 className="text-5xl font-medium text-[#313567] leading-snug mt-25">
              Our Mission And <br /> Values
            </h2>

            <p className="text-xl text-[#000000CC] mt-10  leading-relaxed ">
              We build in little minds the aspiration for education. We believe
              a “sishu” is born good, and our duty is to nature this goodness by
              instilling positive values in them. Our moto, Satyam, Shivam
              Sundaram inspires children to become honest people.
            </p>
          </div>
        </div>

        {/* ================= BOTTOM FULL WIDTH SECTION ================= */}
        <div className="mt-14">
          {/* Line Text */}
          <p className="text-3xl text-black mb-6">
            After passing from our School, students in recent past joined School
            like
          </p>

          {/* Bullet List */}
          <ul className="space-y-3 text-2xl text-black">
            {/* First Yellow Bullet */}
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Krishnapur Adarsha vidyamandir (H.S)
            </li>

            {/* Rest Black Bullets */}
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Krishnapur Adarsha Vidyamandir (for Girls)
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Dum Dum Sree Arbinda Vidyamandir
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Dum Dum Sarvodaya Balika Vidyapith
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Sri Ramkrishna Sarada Sngha Balika Vidyalaya
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full"></span>
              Christ Church Girl’s High School
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
