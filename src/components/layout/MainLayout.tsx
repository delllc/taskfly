import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLayout from './Header';
import AsideLayout from './Aside';
import MobileNav from './MobileNav';

const MainLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <HeaderLayout onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Sidebar */}
        <AsideLayout
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Main Content */}
        <main
          className={`flex-1 min-h-[calc(100vh-57px)] transition-all duration-300 pt-4 pb-20 md:pb-4 ${
            sidebarOpen ? 'md:ml-64' : 'md:ml-16'
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </div>
  );
};

export default MainLayout;
