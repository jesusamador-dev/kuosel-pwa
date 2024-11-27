import React from 'react';
import KSLIcon from '@/app/shared/components/atoms/KSLIcon/KSLIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface KSLBottomNavBarLink {
  name: string;
  icon: string;
  path: string;
  isSpecial?: boolean;
}

export interface KSLBottomNavBarProps {
  links: KSLBottomNavBarLink[];
  showName?: boolean;
}

const KSLBottomNavBar: React.FC<KSLBottomNavBarProps> = ({ links, showName = true }) => {
  const router = useRouter();

  return (
    <nav className="ksl-bottom-navbar">
      {links.map((link) => {
        // Determinar si la ruta está activa
        const isActive = router.pathname === link.path;

        return (
          <Link key={link.name} href={link.path}>
            <div className={`link ${isActive && !link.isSpecial ? 'link--active' : ''}`}>
              <div className={`flex items-center justify-center ${link.isSpecial ? 'link__special' : ''}`}>
                <KSLIcon
                  name={link.icon}
                  size={link.isSpecial ? '1.5rem' : '1rem'}
                  className={link.isSpecial ? '' : isActive ? 'link__icon--active' : 'link__icon--inactive'}
                />
              </div>
              {showName && !link.isSpecial && (
                <span className={`link__name ${isActive ? 'link__icon--active' : ''}`}>
                  {link.name}
                </span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
};

export default KSLBottomNavBar;
