import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, FileText, BarChart2, Printer } from 'lucide-react'; // install with: npm install lucide-react

import Profile from '../assets/profile/profile.jpg'; 
import type { JSX } from 'react';

const LandingPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#375577] text-white flex flex-col items-center py-6 space-y-6">
        {/* Profile */}
        <div className="flex flex-col items-center space-y-2">
          <img src={Profile} alt="User" className="w-24 h-24 rounded-full border-4 border-white" />
          <p className="italic text-sm">siji@gmail.com</p>
        </div>

        {/* Navigation */}
        <nav className="w-full flex flex-col items-stretch px-6 space-y-2 mt-4">
          <SidebarButton to="Form" icon={<Home size={18} />} label="Building" active={pathname.includes('/admin/Form')} />
          <SidebarButton to="Assessment" icon={<FileText size={18} />} label="Assessment" active={pathname.includes('/admin/Assessment')} />
          <SidebarButton to="Track" icon={<BarChart2 size={18} />} label="Track" active={pathname.includes('/admin/Track')} />
          <SidebarButton to="Print" icon={<Printer size={18} />} label="Print" active={pathname.includes('/admin/Print')} />
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

const SidebarButton = ({ to, icon, label, active }: { to: string; icon: JSX.Element; label: string; active: boolean }) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${ active ? 'bg-[#2c4566]' : 'hover:bg-[#2c4566]' }`} >
    {icon}
    {label}
  </Link>
);

export default LandingPage;
