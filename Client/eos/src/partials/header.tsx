import { HomeIcon, ChatBubbleLeftEllipsisIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#304E6F] text-white shadow">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center">
            <img className="h-10 w-12 rounded-full" src={Logo} alt="Logo" />
            <div>
              <h1 className="text-sm font-bold leading-tight">EOS</h1>
              <p className="text-xs leading-none">Engineering Office System</p>
            </div>
          </div>

        
          {/* Navigation */}
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="flex items-center space-x-1 hover:text-gray-300">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-gray-300">
              <ChatBubbleLeftEllipsisIcon className="h-5 w-5" />
              <span>About</span>
            </Link>
            <a href="/signup" className="flex items-center space-x-1 hover:text-gray-300">
              <UserPlusIcon className="h-5 w-5" />
              <span>Sign Up</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
