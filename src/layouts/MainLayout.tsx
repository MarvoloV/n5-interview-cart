import React, { ReactNode } from 'react';
import { Navbar } from '../components/ui/Navbar/Navbar';
interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div data-testid="main-layout">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};


