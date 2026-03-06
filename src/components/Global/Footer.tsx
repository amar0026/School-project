import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#2E3363] py-15 text-white">
      <div className="max-w-[1400px] mx-auto px-8">

        {/* Top Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold">
          Adarsha Sishu Bidyabithi
        </h2>

        {/* Top Navigation Links */}
        {/* <div className="flex flex-row ml-120  gap-3 text-lg mt-10 text-white/90">
          <p className="hover:text-white cursor-pointer">Home</p>
          <p className="hover:text-white cursor-pointer">About</p>
          <p className="hover:text-white cursor-pointer">Academics</p>
          <p className="hover:text-white cursor-pointer">Registration</p>
          <p className="hover:text-white cursor-pointer">Achievement</p>
          <p className="hover:text-white cursor-pointer">Notice</p>
          <p className="hover:text-white cursor-pointer">Gallery</p>
          <p className="hover:text-white cursor-pointer">Contact</p>
        </div> */}

        {/* Bottom Section */}
        {/* Bottom Section */}
<div className="flex flex-col lg:flex-row justify-between gap-10 mt-10">

  {/* LEFT SIDE */}
  <div className="max-w-md">
    <h3 className="text-3xl font-semibold mb-4 leading-snug">
      Stay up to date with <br /> our story
    </h3>

    <p className="text-white/80 mb-8 mt-5 leading-relaxed">
      Join and be the first to get the latest news<br/>
      about trend, promotions, and much more!
    </p>

    <div className="flex items-center border mt-13 border-white rounded-full overflow-hidden max-w-sm">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 px-5 py-3 bg-transparent outline-none placeholder:text-white/70"
      />

      <button className="bg-white text-[#2E3363] px-6 py-2 mr-2 rounded-full font-medium hover:scale-95 transition">
        Join now
      </button>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col gap-10">

    {/* TOP NAVIGATION LINKS */}
    <div className="flex flex-wrap gap-2.5  text-lg text-white/90">
      <p className="hover:text-white cursor-pointer">Home</p>
      <p className="hover:text-white cursor-pointer">About</p>
      <p className="hover:text-white cursor-pointer">Academics</p>
      <p className="hover:text-white cursor-pointer">Registration</p>
      <p className="hover:text-white cursor-pointer">Achievement</p>
      <p className="hover:text-white cursor-pointer">Notice</p>
      <p className="hover:text-white cursor-pointer">Gallery</p>
      <p className="hover:text-white cursor-pointer">Contact</p>
    </div>

    {/* PROGRAM + CONTACT COLUMNS */}
    <div className="flex ml-96 mt-8 gap-15 text-lg">
      <div className="space-y-4">
        <h4 className="font-semibold text-xl">Our Programs</h4>
        <p className="text-white/80 hover:text-white cursor-pointer">Bengali Medium</p>
        <p className="text-white/80 hover:text-white cursor-pointer">English Medium</p>
        <p className="text-white/80 hover:text-white cursor-pointer">High School</p>
      </div>

      <div className="space-y-4">
        <h4 className="font-semibold text-xl">Contact Us</h4>
        <p className="text-white/80 hover:text-white cursor-pointer">Call Us</p>
        <p className="text-white/80 hover:text-white cursor-pointer">Email Us</p>
        <p className="text-white/80 hover:text-white cursor-pointer">Our Office</p>
      </div>
    </div>

  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;