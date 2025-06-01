import React from "react";
import logo from "../assets/logo/logo.png";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#213548] to-[#385981] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex flex-col items-center md:items-end">
        <h1 className="text-white text-3xl md:text-4xl italic font-semibold mb-4 md:mb-8 md:mr-80 mt-4 text-center md:text-right">
          About Us
        </h1>

        <div className="relative w-full h-auto md:w-[800px] md:h-[350px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#385981] to-[#213548] border border-white rounded-[40px] md:rounded-[60px] flex flex-col md:flex-row items-center justify-center p-4">
          {/* Logo positioning for mobile and desktop */}
          <img
            src={logo}
            alt="Logo"
            className="h-40 w-auto md:h-80 md:w-auto md:absolute md:-left-90 md:top-1/2 md:-translate-y-1/2 rounded-full p-4 md:p-9"
            style={{ zIndex: 10 }}
          />

          {/* Add optional about text inside the box */}
          <p className="text-white text-center md:text-left mt-4 md:mt-0 px-4 md:px-20 text-sm md:text-base">
            We are a forward-thinking team dedicated to building innovative digital solutions.
            Our mission is to deliver excellence through technology and creativity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
