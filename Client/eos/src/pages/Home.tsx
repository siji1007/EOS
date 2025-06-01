import React, {useState} from "react";
import paper from "../assets/logo/Paper.png";
import Login from "../Auth/login"

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleLogin = () => {
        // Logic for handling login can be added here
        console.log("Login button clicked");
    }

    
    return (
        <div className="bg-gradient-to-t from-[#213548] to-[#385981] w-full min-h-[80vh] flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl pl-9 py-8 text-left font-light w-full">
                <span className="text-[#1C80D5]">Simplify</span> Your Permit Process <br />
                <span className="text-white">with </span>
                <span className="text-[#1C80D5] font-bold">EOS</span>
            </h1>

       
            <img src={paper} alt="Paper graphic" className="w-[50%] md:w-[40%] xl:w-[%] mx-auto mb-4" />
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-4 py-4">
                <button onClick={() => setIsOpen(true)} className="text-white font-extralight bg-transparent border-2 border-white rounded-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl h-16 md:h-[10vh] w-48 md:w-[20vw] transition hover:bg-[#385981] mb-6 md:mb-0">
                    Login
                </button>
                <img src="../src/assets/logo/logo.png" className="h-32 md:h-[28vh] aspect-auto" alt="EOS Logo" />
            </div>
            <h2 className="text-white italic text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 py-8 text-center">
                <span className="text-[#1C80D5] font-bold not-italic">Sign up </span>
                now or log in to manage your building applications — all in one secure and user-friendly platform.
            </h2>
            <Login isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
};

export default Home;
