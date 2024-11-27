import React from 'react';
import KSLBottomNavBar from '@/app/shared/components/organisms/KSLBottomNavBar/KSLBottomNavBar';
import { links } from '@/app/constants/BottomNavBarLinks';
import KSLHomeHeader from '@/app/shared/components/organisms/KSLHomeHeader/KSLHomeHeader';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-layout">
      <header>
        <KSLHomeHeader />
      </header>
      <main className="content">{children}</main>
      <footer>
        <KSLBottomNavBar links={links} showName={true} />
      </footer>
    </div>
  );
}
