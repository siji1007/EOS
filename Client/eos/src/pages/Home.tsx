import React, { useState } from "react";
import paper from "../assets/logo/Paper.png";
import logo from "../assets/logo/logo.png";
import LoginModal from "../Auth/login";
import Right from "../assets/logo/Right.png";
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Home = () => {
const [showLogin, setShowLogin] = useState(false);

return (
<div className="relative w-full min-h-screen">
{/* Main Content with conditional blur */}
<div className={`${showLogin ? "blur-sm pointer-events-none" : ""} transition duration-400`}>
<div className="bg-gradient-to-t from-[#213548] to-[#385981] w-full min-h-[80vh] flex flex-col justify-center items-center">
<div className="flex justify-center w-full">
  <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-6xl py-8 text-left font-light w-full max-w-5xl">
    <span className="text-[#1C80D5]">Simplify</span> Your Permit Process
    <br />
    <span className="text-white">with </span>
    <span className="text-[#1C80D5] font-bold italic">EOS</span>
  </h1>
</div>

<img
src={paper}
alt="Paper graphic"
className="w-[40%] md:w-[40%]  mb-5"
/>

<div className="flex flex-row items-center justify-between w-full max-w-5xl px-4 py-4 gap-4">
  <button
    onClick={() => setShowLogin(true)}
    className="text-white font-extralight bg-transparent border-2 border-white rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl h-16 md:h-[10vh] w-48 md:w-[20vw] transition hover:bg-[#1C80D5] mb-0"
  >
    Login
  </button>
  <img
    src={logo}
    className="h-16 w-auto md:h-[16vh] aspect-auto"
    alt="EOS Logo"
  />
</div>

<h2 className="text-white italic text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-8 text-center">
<span className="text-[#1C80D5] font-bold not-italic">Sign up </span>
now or log in to manage your building applications — all in one secure
and user-friendly platform.
</h2>
</div>

{/* Tutorial and Message Us Section */}
<div className="w-full flex flex-col items-center justify-center py-10">
  {/* Tutorial Card */}
  <div className="w-[98vw] max-w-7xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden mb-24 scale-105 md:scale-110 mt-10">
    {/* Left: Logo and Button */}
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#6a8dbb] to-[#3b5a7a] p-14 md:w-1/2">
      <img src={logo} alt="EOS Logo" className="w-55 h-48 mb-10" />
      <button className="text-white italic text-3xl border-2 border-white rounded-full px-16 py-4 mt-4 hover:bg-[#1C80D5] transition">Tutorial</button>
    </div>
    {/* Right: Image and Text */}
    <div className="flex flex-col justify-center items-center md:items-start bg-white p-0 md:p-14 md:w-1/2 relative min-h-[300px] w-full overflow-hidden">
      {/* Responsive background image for both mobile and desktop */}
      <div 
        className="absolute inset-0 w-full h-full opacity-80 md:opacity-80 bg-cover bg-center bg-no-repeat"
        style={{backgroundImage: `url(${Right})`}}
      ></div>
      <span className="absolute bottom-0 left-0 right-0 mb-6 md:mb-10 text-3xl md:text-5xl text-white italic font-light z-10 text-center w-full px-4">Learn to use <span className="text-[#4796db] font-bold italic">EOS</span></span>
    </div>
  </div>

  {/* Message Us Bar */}
  <div className="w-full max-w-7xl bg-[#46648a] rounded-2xl flex flex-col md:flex-row items-center justify-between px-16 py-14 scale-105 md:scale-110 mt-10">
    <span className="text-white text-4xl italic font-light mb-6 md:mb-0">Message Us</span>
    <div className="flex items-center w-full md:w-auto">
      <input type="text" aria-label="Message Us" placeholder="Type your message..." className="rounded-full px-10 py-4 w-full md:w-[600px] text-2xl focus:outline-none bg-transparent text-white placeholder-white border border-white" />
      <button className="ml-4 px-8 py-4 rounded-full bg-[#1C80D5] text-white text-2xl font-semibold hover:bg-[#1565a7] transition flex items-center gap-2">Send <PaperAirplaneIcon className="w-7 h-7 text-white" /></button>
    </div>
  </div>
</div>
</div>

{/* Login Modal Overlay */}
<LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
</div>
);
};

export default Home;
