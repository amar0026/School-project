import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/Rectangle 4571.png";

const Developing: React.FC = () => {
  return (
    <section className="w-full bg-white pb-16">
      {/* Main Wrapper */}
      <div className="max-w-[1920px] mx-auto px-24">
        {/* ================= TOP SECTION (Half + Half) ================= */}
        <div className="flex items-start gap-16">
          {/* Left Side Image */}
          <div className="w-1/2">
            <h2 className="text-5xl font-medium text-[#313567] leading-snug mt-12">
              Developing
            </h2>

            <p className="text-xl text-[#000000CC] mt-8 leading-relaxed ">
              With the interest and effont of some good souls this school was
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

          {/* Right Side Content */}
          <div className="w-1/2">
            <img
              src={about}
              alt="Mission Student"
              className="w-full mt-15 h-[630px]"
            />
          </div>
        </div>

        {/* ================= BOTTOM FULL WIDTH SECTION ================= */}
        <div className="mt-14">
          {/* Line Text */}
          <p className="text-2xl text-[#000000CC] mb-6">
            The present president of the Board, Dr. Swapan Ghosh and the
            secretary Mr Ranen Ray along with other Board members has funded the
            need extension t school building in this year 2025-26. Here we get
            four more class rooms, wash rooms in 1st floor and an open hall and
            wash zooms and a kitchen for students on the ground look. School's
            caretaker has got a new room and a separate kitchen. So now we have
            more class rooms to use one audio-visual room in set to open very
            soon. We have multiple plans for the grwth of the school. We
            encourage more such were wishers individuals and Organisations alike
            who will support our children’s future.
          </p>
        </div>
      </div>
       {/* BUTTON */}
        <div className="flex items-center justify-center mt-14">
          <Link
            to="/form"
            className="bg-[#2E3363] text-white px-8 py-3 rounded-2xl text-lg font-medium shadow-md hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            Click here
          </Link>
        </div>
    </section>
  );
};

export default Developing;
