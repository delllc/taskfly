import './App.css';
import HeaderLayout from './components/layout/Header';
import AsideLayout from './components/layout/Aside';
import MobileNav from './components/layout/MobileNav';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/layout/MainLayout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route path="/" element={<MainLayout />}>
            <Route index element={<div>Dashboard</div>} />
            <Route path="dashboard" element={<div>Dashboard Page</div>} />
            <Route path="tasks" element={<div>Tasks Page</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
