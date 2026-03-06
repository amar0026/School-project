import React from "react";
import { Phone, Mail, MapPin, User, Inbox } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-[#f2f2f2] py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-semibold text-gray-800 mb-10">
            Get in touch
          </h2>

          <div className="space-y-8">

            {/* Call */}
            <div className="flex items-start gap-4">
              <Phone className="text-green-500 mt-1" size={26} />
              <div>
                <p className="font-medium text-lg">Call</p>
                <p className="text-gray-600 text-sm">
                  +91123567890
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-red-500 mt-1" size={26} />
              <div>
                <p className="font-medium text-lg">Email</p>
                <p className="text-gray-600 text-sm">
                  adarshasishubidyabithi@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-500 mt-1" size={26} />
              <div>
                <p className="font-medium text-lg">Location</p>
                <p className="text-gray-600 text-sm">
                  Dum Dum Park, West Bengal, India
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          {/* Name */}
          <label className="text-sm text-gray-700">Your name</label>
          <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 mt-2 mb-6 shadow-inner">
            <User className="text-gray-400 mr-3" size={18} />
            <input
              type="text"
              placeholder="Full name here"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Email */}
          <label className="text-sm text-gray-700">Your mail</label>
          <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 mt-2 mb-6 shadow-inner">
            <Inbox className="text-gray-400 mr-3" size={18} />
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Message */}
          <label className="text-sm text-gray-700">Message</label>
          <div className="bg-gray-100 rounded-2xl px-5 py-4 mt-2 shadow-inner">
            <textarea
              placeholder="Type your message here"
              rows={4}
              className="bg-transparent outline-none w-full text-sm resize-none"
            />
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="bg-[#313567] text-white px-8 py-3 rounded-2xl shadow-md hover:opacity-90 transition">
              Send message
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;