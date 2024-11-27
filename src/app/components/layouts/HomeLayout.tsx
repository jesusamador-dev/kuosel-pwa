import React from 'react';
import { Outlet } from 'react-router-dom';
import KSLBottomNavBar from '@/app/components/organisms/KSLBottomNavBar/KSLBottomNavBar';
import { links } from '@/app/constants/BottomNavBarLinks';
import KSLHomeHeader from '@/app/organisms/KSLHomeHeader/KSLHomeHeader';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="home-layout">
      <header>
        <KSLHomeHeader />
      </header>
      <main className="content">
       <Outlet></Outlet>
      </main>
      <footer>
        <KSLBottomNavBar links={links} showName={true} />
      </footer>
    </div>
  );
};

export default HomeLayout;
