import {
  LayoutDashboard,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

interface AsideProps {
  isOpen: boolean;
  onToggle: () => void;
}

const AsideLayout: React.FC<AsideProps> = ({ isOpen, onToggle }) => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: CheckSquare,
      href: '/tasks',
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-[57px] h-[calc(100vh-57px)] bg-white border-gray-200 border-r transition-all duration-300 z-40 ${
        isOpen ? 'w-64' : 'w-16'
      } ${isOpen ? 'block' : 'hidden'} md:block`}
    >
      <div className="p-4">
        {/* Toggle button for desktop */}
        <button
          onClick={onToggle}
          className="hidden md:flex absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1 hover:bg-gray-50"
        >
          {isOpen ? (
            <ChevronLeft width={16} height={16} />
          ) : (
            <ChevronRight width={16} height={16} />
          )}
        </button>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    } ${!isOpen ? 'justify-center' : ''}`}
                  >
                    <IconComponent
                      width={20}
                      height={20}
                      className="flex-shrink-0"
                    />
                    {isOpen && <span>{item.label}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AsideLayout;
