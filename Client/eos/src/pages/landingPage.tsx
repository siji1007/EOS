import { Link, Outlet, useLocation } from 'react-router-dom';

const LandingPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#293443] text-white flex flex-col p-4 space-y-4">
        <h2 className="text-xl font-bold mb-6">EOS Menu</h2>
        <Link
          to="Form"
          className={`px-4 py-2 rounded hover:bg-[#3a4b5c] ${pathname.includes('/admin/Form') ? 'bg-[#3a4b5c]' : ''}`}
        >
          Building
        </Link>
        <Link
          to="Assessment"
          className={`px-4 py-2 rounded hover:bg-[#3a4b5c] ${pathname.includes('/admin/Assessment') ? 'bg-[#3a4b5c]' : ''}`}
        >
          Assessment
        </Link>
        <Link
          to="Track"
          className={`px-4 py-2 rounded hover:bg-[#3a4b5c] ${pathname.includes('/admin/Track') ? 'bg-[#3a4b5c]' : ''}`}
        >
          Track
        </Link>
        <Link
          to="Settings"
          className={`px-4 py-2 rounded hover:bg-[#3a4b5c] ${pathname.includes('/admin/Settings') ? 'bg-[#3a4b5c]' : ''}`}
        >
          Settings
        </Link>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default LandingPage;
