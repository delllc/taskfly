import { LayoutDashboard, CheckSquare, User, Settings } from 'lucide-react';
import { useState } from 'react';

const MobileNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState('dashboard');

  const navItems = [
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
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      href: '/profile',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      href: '/settings',
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex flex-col items-center justify-center flex-1 h-full px-2 transition-colors ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <IconComponent
                width={20}
                height={20}
                className={isActive ? 'text-blue-600' : ''}
              />
              <span className="mt-1 text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
