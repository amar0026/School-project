import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/Rectangle 4571.png";

const Developing: React.FC = () => {
  return (
    <section className="w-full bg-white pb-10 sm:pb-14 md:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16">

        {/* ── TOP: Text + Image ── */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">

          {/* Left: Text */}
          <div className="w-full md:w-1/2 md:pt-8 lg:pt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#313567] leading-snug">
              Developing
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#000000CC] mt-5 sm:mt-6 md:mt-8 leading-relaxed">
              With the interest and effort of some good souls this school was
              established in 1959. The land (10 Kottah equivalent to 7200 Sbt
              approx) was allotted by the then Dum Dum Park Board (Krishsapur
              Refugee Co-operative Colony ltd) as well as money to build a
              building. The school initially was known as KG School. Some names
              should be mentioned here are{" "}
              <span className="font-semibold">
                Satinath Datta, Dr. Sourendranath Ghosh, Monorojon Pal, Dr.
                Haripada Bhattacharya, Bidyanath Das, Naliniranjan Sarkar,
                Satishchandra Dey, Harisadhan Chattopadhyay, Binod Behari Deb,
                Manilal Gangopadhyay, Krishnakumar Mitra, Sunil Kumar
                Mukhopadhyay, Sudhirchandra Sen, Sushil Kumar Mukhopadhyay, Amit
                Kumar Chattopadhyay, Manishchandra Nandy, Kalyan Sen
              </span>{" "}
              etc.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src={about}
              alt="Mission Student"
              className="w-full h-56 sm:h-80 md:h-[480px] lg:h-[630px] object-cover rounded-xl"
            />
          </div>
        </div>

        {/* ── BOTTOM: Description ── */}
        <div className="mt-10 sm:mt-12 md:mt-14">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000CC] leading-relaxed">
            The present president of the Board, Dr. Swapan Ghosh and the
            secretary Mr Ranen Ray along with other Board members has funded the
            need extension to school building in this year 2025-26. Here we get
            four more class rooms, wash rooms in 1st floor and an open hall and
            wash rooms and a kitchen for students on the ground floor. School's
            caretaker has got a new room and a separate kitchen. So now we have
            more class rooms to use, one audio-visual room is set to open very
            soon. We have multiple plans for the growth of the school. We
            encourage more such well-wishers, individuals and organisations alike
            who will support our children's future.
          </p>
        </div>

      </div>

      {/* ── Button ── */}
      <div className="flex items-center justify-center mt-10 sm:mt-12 md:mt-14 px-4">
        <Link
          to="/form"
          className="bg-[#2E3363] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-base sm:text-lg font-medium shadow-md hover:brightness-110 active:scale-95 transition-all duration-200"
        >
          Click here
        </Link>
      </div>
    </section>
  );
};

export default Developing;