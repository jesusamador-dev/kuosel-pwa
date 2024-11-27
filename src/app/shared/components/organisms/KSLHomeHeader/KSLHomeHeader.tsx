import React from 'react';
import Link from 'next/link'; 
import KSLIcon from '@/app/shared/components/atoms/KSLIcon/KSLIcon';

const KSLHomeHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <div className="ml-2">
          <h1 className="text-xl font-bold">Hello Mahmud</h1>
          <p className="text-sm text-gray-500">Welcome Back!</p>
        </div>
      </div>
      <div className="flex items-center">
        <Link
          href="/notifications"
          className="bg-white rounded-full p-2 flex items-center justify-center"
        >
          <KSLIcon name="notification" size="1.2rem" />
        </Link>
      </div>
    </header>
  );
};

export default KSLHomeHeader;
