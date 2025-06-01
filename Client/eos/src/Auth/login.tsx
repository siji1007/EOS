import React from "react";
import { Lock } from "lucide-react"; // Optional icon package (you can use any lock icon)
import { useNavigate } from 'react-router-dom';

interface LoginModalProps { isOpen: boolean; onClose: () => void; }

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
            <div className="relative bg-[#2C3E50] text-white rounded-3xl shadow-2xl p-10 w-full max-w-sm">
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-3 right-4 text-white hover:text-gray-300 text-xl" > &times; </button>

                {/* Login Heading */}
                <div className="flex items-center justify-center mb-6 gap-2">
                    <h2 className="text-3xl italic font-semibold">Login</h2>
                    <Lock className="w-6 h-6" />
                </div> 

                {/* Login Form */}
                <form>
                    <section className="mb-5"> {/*  Email section */}
                        <label htmlFor="email" className="block text-base italic mb-1"> Email: </label>
                        <input type="email" id="email" className="w-full px-4 py-2 rounded-full text-center italic text-black font-semibold bg-white placeholder:italic" placeholder="Usersample@gmail.com" required />
                    </section>

                    <section className="mb-6">
                        <label htmlFor="password" className="block text-base italic mb-1"> Password: </label>
                        <input type="password" id="password" className="w-full px-4 py-2 rounded-full text-center bg-white text-black font-medium" placeholder="••••••••" required />
                    </section>
                    
                    {/* Login Button */}
                    <button type="submit" className="w-full border border-white text-white py-2 rounded-full hover:bg-white hover:text-[#2C3E50] transition" > Submit </button>
                </form>

                <p className="mt-6 text-center text-sm italic">
                    Don’t have any account?{" "}
                    <span className="text-blue-400 cursor-pointer hover:underline" onClick={() => navigate('/signup')}>
                    Sign Up
                    </span>{" "}
                now
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
