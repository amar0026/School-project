import React, { useEffect, useRef, useState } from "react";
import Call from "../assets/Call.svg";
import Email from "../assets/Email.svg";
import Map from "../assets/Map.svg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const ContactItem: React.FC<{
  icon: string;
  label: string;
  value: string;
  delay: string;
}> = ({ icon, label, value, delay }) => {
  return (
    <div
      className="contact-item flex items-center gap-5 group"
      style={{ animationDelay: delay }}
    >
      <div
        className="icon-glow w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "linear-gradient(135deg,#eff6ff,#dbeafe)",
          border: "1.5px solid #bfdbfe",
        }}
      >
        <img src={icon} alt="" className="w-6 h-6" />
      </div>

      <div>
        <p className="text-sm font-bold tracking-[0.18em] uppercase text-[#4583DA]">
          {label}
        </p>

        <p className="text-base text-[#1a1a2e] font-medium">{value}</p>
      </div>
    </div>
  );
};

const ContactUs: React.FC = () => {
  const { ref, inView } = useInView();

  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      <style>{`

@keyframes fadeSlideLeft{
from{opacity:0;transform:translateX(-60px)}
to{opacity:1;transform:translateX(0)}
}

@keyframes fadeSlideUp{
from{opacity:0;transform:translateY(30px)}
to{opacity:1;transform:translateY(0)}
}

@keyframes revealLine{
from{width:0;opacity:0}
to{width:50px;opacity:1}
}

@keyframes mapReveal{
from{opacity:0;transform:scale(.94) translateY(30px)}
to{opacity:1;transform:scale(1) translateY(0)}
}

@keyframes iconPulse{
0%{box-shadow:0 0 0 0 rgba(69,131,218,0.4)}
70%{box-shadow:0 0 0 10px rgba(69,131,218,0)}
100%{box-shadow:0 0 0 0 rgba(69,131,218,0)}
}

@keyframes shimmerHeading{
0%{background-position:-200% center}
100%{background-position:200% center}
}

.paused *{
animation-play-state:paused!important;
}

.running .anim-left{
animation:fadeSlideLeft .8s cubic-bezier(.22,.68,0,1.2) both;
}

.running .anim-up{
animation:fadeSlideUp .7s ease both;
}

.running .contact-item{
animation:fadeSlideUp .6s ease both;
}

.running .anim-line{
animation:revealLine .55s ease both;
}

.running .anim-map{
animation:mapReveal .9s cubic-bezier(.22,.68,0,1.2) both;
}

.heading-hover{
background:linear-gradient(90deg,#04162F 10%,#4583DA 50%,#04162F 90%);
background-size:200% auto;
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
animation:shimmerHeading 6s linear infinite;
}

.contact-item:hover .icon-glow{
animation:iconPulse 1.2s infinite;
}

.map-overlay{
position:absolute;
inset:0;
background:linear-gradient(180deg,transparent 60%,rgba(0,0,0,0.08));
opacity:0;
transition:.4s;
}

.anim-map:hover .map-overlay{
opacity:1;
}

`}</style>

      <div className="max-w-[1920px] mx-auto  px-4 sm:px-8 md:px-14 lg:px-20">

        <div
          ref={ref}
          className={`flex flex-col lg:flex-row gap-20 ${
            inView ? "running" : "paused"
          }`}
        >

          {/* LEFT SIDE */}
          <div className="lg:w-1/2">

            <div className="flex items-center gap-3 mb-6">
              <div className="anim-line h-0.5 bg-blue-500 rounded-full w-12"></div>

              <span className="text-xs tracking-[0.3em] font-bold text-blue-600 uppercase">
                Contact Us
              </span>
            </div>

            <h2 className="anim-left heading-hover text-5xl font-semibold mb-6">
              Lets talk with <br /> Us
            </h2>

            <p className="anim-up text-gray-500 text-lg max-w-[420px] leading-relaxed">
              We offer high quality Daycare Services for your kids. Contact us
              or visit us today for more information.
            </p>

            <div className="mt-10 space-y-8">

              <ContactItem
                icon={Call}
                label="Call"
                value="+91123567890"
                delay="0.4s"
              />

              <ContactItem
                icon={Email}
                label="Email"
                value="adarshasishubidyabithi@gmail.com"
                delay="0.55s"
              />

              <ContactItem
                icon={Map}
                label="Location"
                value="Dum Dum Park, West Bengal, India"
                delay="0.7s"
              />

            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="lg:w-1/2 flex justify-end">

            <div className="anim-map relative w-full rounded-2xl overflow-hidden border border-blue-100 shadow-xl min-h-[420px]">

              <div className="map-overlay"></div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.205126945129!2d88.41490967406959!3d22.608813979465953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f44a3396e7%3A0xfb80463863a1e9b1!2sAdarsha%20Shishu%20Vidya%20Bithi!5e0!3m2!1sen!2sus!4v1771185357827!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                loading="lazy"
                allowFullScreen
                title="Location Map"
              ></iframe>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactUs;