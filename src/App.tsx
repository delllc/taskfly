import './App.css';
import HeaderLayout from './components/layout/Header';
import AsideLayout from './components/layout/Aside';
import MobileNav from './components/layout/MobileNav';
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <HeaderLayout />
      <AsideLayout
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      <MobileNav />
    </>
  );
}

export default App;
