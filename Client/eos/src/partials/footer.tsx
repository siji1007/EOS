import React from "react";
import eosLogo from "../assets/logo/profile.png";
import cityLogo from "../assets/logo/city-logo.png";
const Footer: React.FC = () => (
  <footer className="bg-[#353c46] text-white text-center py-6">
    <div className="flex justify-center items-center gap-10 mb-2">
      <img src={eosLogo} alt="EOS Logo" className="h-12 w-auto" />
      <img src={cityLogo} alt="City Logo" className="h-22 w-auto" />
    </div>
    <div className="text-sm tracking-widest opacity-80">
      ALL RIGHTS RESERVED . 2025
    </div>
  </footer>
);

export default Footer;