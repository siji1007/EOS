import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, FileText, BarChart2, Printer, ChevronLeft, ChevronRight } from 'lucide-react';
import Profile from '../assets/profile/profile.jpg';
import type { JSX } from 'react';

const LandingPage = () => {
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
        <aside className={`relative bg-[#375577] text-white flex flex-col items-center py-6 transition-all duration-300 ${ collapsed ? 'w-20' : 'w-64' }`} >
        {/* Profile Section */}
            <div className={`relative flex ${collapsed ? 'flex-col items-center' : 'flex-row items-center justify-between'} w-full px-4`}>
                {/* Profile Image */}
                <img src={Profile} alt="User" className={`rounded-lg border-2 border-white transition-all ${ collapsed ? 'w-12 h-12' : 'w-13 h-13' }`} />

                {/* Name and Role when expanded */}
                {!collapsed && (
                <div className="ml-3 flex-1">
                    <p className="font-semibold text-sm leading-tight"> Pangalan Ngani </p>
                    <p className="text-xs text-gray-200">Admin</p>
                </div>
                )}

                {/* Arrow Toggle Button (always inside the sidebar) */}
                <button onClick={() => setCollapsed(!collapsed)} className={`text-white z-10 transition-all ${ collapsed ? 'mt-2' : '' }`} >
                {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Full-width Divider Line */}
            <div className="w-3/4 border-b border-white my-4 mx-2" />


            {/* Navigation */}
            <nav className={`flex flex-col space-y-4 mt-4 w-full ${ collapsed ? 'items-center' : 'px-6' }`} >
                <SidebarButton to="Form" icon={<Home size={20} />} label="Dashboard" active={pathname.includes('/admin/Form')} collapsed={collapsed} />
                <SidebarButton to="Assessment" icon={<FileText size={20} />} label="Assessment" active={pathname.includes('/admin/Assessment')} collapsed={collapsed} />
                <SidebarButton to="Track" icon={<BarChart2 size={20} />} label="Track" active={pathname.includes('/admin/Track')} collapsed={collapsed} /> <SidebarButton to="Print" icon={<Printer size={20} />} label="Print" active={pathname.includes('/admin/Print')} collapsed={collapsed} />
            </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100">
            <Outlet />
        </main>
    </div>
  );
};

const SidebarButton = ({ to, icon, label, active, collapsed, }: { to: string; icon: JSX.Element; label: string; active: boolean; collapsed: boolean; }) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition ${ active ? 'bg-[#2c4566]' : 'hover:bg-[#2c4566]' } ${collapsed ? 'justify-center px-2' : ''}`} >
    {icon}
    {!collapsed && <span>{label}</span>}
  </Link>
);

export default LandingPage;
