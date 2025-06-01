import React, { useState } from "react";
import paper from "../assets/logo/Paper.png";
import logo from "../assets/logo/logo.png";
import LoginModal from "../Auth/login";

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

<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4 py-4">
<button
onClick={() => setShowLogin(true)}
className="text-white font-extralight bg-transparent border-2 border-white rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl h-16 md:h-[10vh] w-48 md:w-[20vw] transition hover:bg-[#1C80D5] mb-6 md:mb-0"
>
Login
</button>

<img
src={logo}
className="h-15md:h-[16vh] aspect-auto"
alt="EOS Logo"
/>
</div>

<h2 className="text-white italic text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-8 text-center">
<span className="text-[#1C80D5] font-bold not-italic">Sign up </span>
now or log in to manage your building applications — all in one secure
and user-friendly platform.
</h2>
</div>
</div>

{/* Login Modal Overlay */}
<LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
</div>
);
};

export default Home;
