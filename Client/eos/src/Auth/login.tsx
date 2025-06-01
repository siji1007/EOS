
import React from 'react';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#374556] p-8 rounded-4xl shadow-md w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl text-white font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium text-white mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border bg-white border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="flex justify-center w-1/2 bg-transparent border-2 text-white py-2 rounded-4xl transition duration-200"
          >
            Submit
          </button>
          <h1 className="py-4 text-white text-bold">Don't have an Account? 
            <span 
                onClick={() => alert('Sign Up functionality not implemented yet!')} 
                role="button" 
                className="text-[#1C80D5] hover:text-[#61b8ff] hover:cursor-pointer"> Sign Up </span> now</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
