import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Input } from '../ui/input';
import { Menu, Moon, Sun, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  showSearch?: boolean;
  onMenuClick?: () => void;
}

const HeaderLayout: React.FC<HeaderProps> = ({
  showSearch = true,
  onMenuClick,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 w-full flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-gray-900">
      {/* Left side - Menu button + Logo */}
      <div className="flex items-center gap-2">
        {/* Hamburger for mobile / Toggle for desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <h1 className="text-xl font-bold">Logo</h1>
      </div>

      {/* Center Search - Hidden on mobile */}
      {showSearch && (
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <Input placeholder="Поиск..." className="w-full" />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-2">
        {/* Theme Toggle */}
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* User Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Мой аккаунт</DropdownMenuLabel>
            <DropdownMenuGroup>
              <DropdownMenuItem>Профиль</DropdownMenuItem>
              <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <DropdownMenu
          open={isMobileMenuOpen}
          onOpenChange={setIsMobileMenuOpen}
        >
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {showSearch && (
              <div className="p-2">
                <Input placeholder="Поиск..." className="w-full" />
              </div>
            )}
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={toggleTheme}>
                <div className="flex items-center gap-2">
                  {isDark ? (
                    <Sun className="h-4 w-4" />
                  ) : (
                    <Moon className="h-4 w-4" />
                  )}
                  Тема
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Профиль
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>Выйти</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HeaderLayout;
